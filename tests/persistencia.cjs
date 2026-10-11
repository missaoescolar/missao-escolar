/* Run: node tests/persistencia.cjs
   Real Edge + two tabs: node tests/persistencia.cjs --browser
   No dependencies; browser tests use an isolated temporary profile and localhost.
   Arena instrumentation is served only by the test server; production files stay untouched. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const os = require('node:os');
const {spawn} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const sources = Object.fromEntries(['armazem','arena'].map(n => [n, fs.readFileSync(path.join(root,n+'.js'),'utf8')]));
const hook = 'window.__arenaTest = {state:()=>copia(S), base:()=>copia(base), defaults:()=>copia(fresh), change:fn=>{fn(S);save();}, reload:carregar};';
function instrumentArena(source){
  const pos = source.lastIndexOf('})();');
  assert(pos >= 0);
  return source.slice(0,pos)+hook+'\n'+source.slice(pos);
}
let passed = 0;
async function test(name, fn){
  await fn();
  passed++;
  console.log('OK '+name);
}
const tick = () => new Promise(resolve => setImmediate(resolve));
async function drain(){ for(let i=0;i<10;i++) await tick(); }
function environment({locks=false}={}){
  const data = new Map(), tabs = [], lockQueues = new Map();
  const lockManager = {request(name,fn){
    const last = lockQueues.get(name) || Promise.resolve();
    const next = last.catch(()=>{}).then(fn);
    lockQueues.set(name,next);
    return next;
  }};
  function tab(){
    const events = new Map(), nodes = new Map(), timers = new Map();
    let timerId=0;
    const t = {readError:null, writeError:null, blockBackup:false, events, timers};
    function node(){
      const listeners = {};
      return {listeners, attributes:{}, children:[], style:{}, dataset:{}, hidden:false, offsetParent:{},
        classList:{toggle(){},add(){},remove(){}}, appendChild(n){this.children.push(n);n.parent=this;},
        remove(){if(this.parent)this.parent.children=this.parent.children.filter(n=>n!==this);},
        setAttribute(k,v){this.attributes[k]=v;},removeAttribute(k){delete this.attributes[k];},
        addEventListener(k,fn){listeners[k]=fn;},querySelector(k){return this[k]||(this[k]=node());},
        querySelectorAll(){return [];},getBoundingClientRect(){return {top:0};},focus(){},scrollIntoView(){}};
    }
    const document = {body:node(), visibilityState:'visible', createElement:node,
      getElementById(id){if(!nodes.has(id))nodes.set(id,node());return nodes.get(id);},
      querySelectorAll(){return [];},addEventListener(name,fn){
        const key='document:'+name; events.set(key,(events.get(key)||[]).concat(fn));
      }};
    const storage = {
      get length(){return data.size;}, key(i){return [...data.keys()][i] ?? null;},
      getItem(key){ if(t.readError) throw {name:t.readError}; return data.has(key)?data.get(key):null; },
      setItem(key,value){
        if(t.writeError || (t.blockBackup && key.startsWith('_estragado_'))) throw {name:t.writeError||'QuotaExceededError'};
        const old=data.get(key), text=String(value); data.set(key,text);
        if(old!==text) for(const other of tabs) if(other!==t) setImmediate(()=>other.dispatch('storage',{key,storageArea:other.storage}));
      },
      removeItem(key){data.delete(key);}
    };
    const sandbox = {document, localStorage:storage, navigator:{userAgent:'Test',...(locks?{locks:lockManager}:{})},
      console, Date, Math, setTimeout(fn){const id=++timerId;timers.set(id,fn);return id;},
      clearTimeout(id){timers.delete(id);},setInterval(){return 0;},clearInterval(){},
      MATH_WORLDS:[], ARENA:{temas:[]}, missaoExtra(){return {};},
      addEventListener(name,fn){events.set(name,(events.get(name)||[]).concat(fn));}};
    sandbox.window=sandbox;
    t.storage=storage; t.context=vm.createContext(sandbox); t.document=document;
    t.dispatch=(name,e={})=>(events.get(name)||[]).forEach(fn=>fn(e));
    t.eval=code=>vm.runInContext(code,t.context);
    tabs.push(t);
    t.eval(sources.armazem);
    t.api=t.context.MissaoArmazem;
    t.arena=()=>{t.eval(instrumentArena(sources.arena));return t.context.__arenaTest;};
    return t;
  }
  return {data, tab};
}
async function units(){
  await test('Backup: failed Arena gains export exactly once without clearing pending state',async()=>{
    const e=environment(),t=e.tab(),a=t.arena();
    a.change(s=>{s.xp+=40;}); t.writeError='QuotaExceededError';
    a.change(s=>{s.xp+=5;s.medalhas.push('primeira');});
    const c=t.api.criarCopia(); assert.equal(JSON.parse(c.dados.arena).xp,45);
    assert(t.api.temPendentes()); assert.equal(a.base().xp,40);
    t.readError='SecurityError';const partial=t.api.criarCopia();
    assert.equal(JSON.parse(partial.dados.arena).xp,45);assert(partial.indisponiveis.includes('arena'));
    const u=e.tab();await u.api.importarCopia(JSON.stringify(c));
    assert.equal(JSON.parse(e.data.get('arena')).xp,45);assert.equal(e.data.get('_antes_importar_arena') !== undefined,true);
  });
  await test('Backup: malformed originals export separately and import without replacing valid progress',async()=>{
    const e=environment(),t=e.tab();e.data.set('math_missions','broken original');
    const c=t.api.criarCopia();assert.equal(c.originais.math_missions,'broken original');
    assert.equal(c.dados.math_missions,undefined);
    e.data.set('math_missions','{"n1-0":true}');
    await t.api.importarCopia(JSON.stringify(c));
    assert.equal(e.data.get('math_missions'),'{"n1-0":true}');
    assert.equal(e.data.get('_estragado_math_missions'),'broken original');
  });
  await test('Import: invalid files and foreign keys are rejected before any write',async()=>{
    const e=environment(),t=e.tab();
    const base={aplicacao:'missao-escolar',versao:1,dados:{},originais:{}};
    for(const dados of [{foreign:'x'},{arena:'{"xp":-1}'},{ws_saved:'[{}]'},{math_missions:'{"__proto__":true}'}]){
      await assert.rejects(t.api.importarCopia(JSON.stringify({...base,dados})));
    }
    assert.equal(e.data.size,0);
  });
  await test('Import: failed preservation prevents replacement, retry preserves exact original',async()=>{
    const e=environment({locks:true}),t=e.tab();e.data.set('math_missions','{"n1-0":true}');
    const c=JSON.stringify({aplicacao:'missao-escolar',versao:1,dados:{math_missions:'{"n2-0":true}'},originais:{}});
    t.writeError='QuotaExceededError';let r=await t.api.importarCopia(c);
    assert.equal(r.falhadas.length,1);assert.equal(e.data.get('math_missions'),'{"n1-0":true}');
    t.writeError=null;r=await t.api.importarCopia(c);
    assert.equal(r.falhadas.length,0);assert.equal(e.data.get('_antes_importar_math_missions'),'{"n1-0":true}');
    assert.equal(e.data.get('math_missions'),'{"n2-0":true}');
    await t.api.importarCopia(c);assert.equal(e.data.has('_antes_importar_math_missions_2'),false);
  });
  await test('Import: local pending choices cannot be discarded by restoration',async()=>{
    const e=environment(),t=e.tab();t.writeError='SecurityError';
    t.api.atualizarPendente('math_missions',{},s=>{s['n1-0']=true;return s;});
    const c=JSON.stringify({aplicacao:'missao-escolar',versao:1,dados:{math_missions:'{}'},originais:{}});
    await assert.rejects(t.api.importarCopia(c));assert(t.api.temPendentes());
  });
  await test('Backup: stored formats and recovery copies round-trip without touching foreign data',async()=>{
    const e=environment(),t=e.tab();
    const values={math_missions:'{"n1-0":true}',challenge_mode:'1',ws_saved:'[{"id":1,"title":"Título","type":"narrativo","text":"Olá","date":"11/10/2026"}]',_estragado_arena:'broken',_antes_importar_math_missions:'old'};
    for(const [k,v] of Object.entries(values))e.data.set(k,v);
    e.data.set('foreign','private');const c=t.api.criarCopia();assert.equal(c.dados.foreign,undefined);
    const target=environment(),u=target.tab();await u.api.importarCopia(JSON.stringify(c));
    for(const [k,v] of Object.entries(values))assert.equal(target.data.get(k),v);
    assert.equal(e.data.get('foreign'),'private');
  });
  await test('Arena: unreadable remote notification keeps confirmed base and subsequent gains', async()=>{
    const e=environment(),t=e.tab(),a=t.arena();
    a.change(s=>{s.xp+=40;s.medalhas.push('primeira');});
    t.readError='SecurityError';t.dispatch('storage',{key:'arena',storageArea:t.storage});
    assert.equal(a.state().xp,40);assert.equal(a.base().xp,40);
    a.change(s=>{s.xp+=5;});assert(t.api.temPendentes('arena'));
    t.readError=null;t.api.tentarNovamente();
    assert.equal(JSON.parse(e.data.get('arena')).xp,45);
    assert.deepEqual(JSON.parse(e.data.get('arena')).medalhas,['primeira']);
  });
  await test('Web Locks: warning is visible throughout the pending lock wait', async()=>{
    const e=environment({locks:true}),t=e.tab();
    t.api.atualizarPendente('math_missions',{},st=>{st['n1-0']=true;return st;});
    assert(t.api.temPendentes());assert.equal(t.document.body.children.length,1);
    await drain();assert.equal(t.api.temPendentes(),false);assert.equal(t.document.body.children.length,0);
  });
  await test('Web Locks: rapid queued gains and both failed tabs recover without duplication', async()=>{
    const e=environment({locks:true}),t=e.tab(),u=e.tab(),a=t.arena(),b=u.arena();
    t.writeError='QuotaExceededError';u.writeError='QuotaExceededError';
    for(let i=0;i<8;i++)a.change(s=>{s.xp++;s.certas++;});
    for(let i=0;i<6;i++)b.change(s=>{s.xp+=2;s.certas++;});
    await drain();assert.equal(a.base().xp,0);assert.equal(b.base().xp,0);
    t.writeError=null;u.writeError=null;
    t.api.tentarNovamente();u.api.tentarNovamente();await drain();
    assert.equal(JSON.parse(e.data.get('arena')).xp,20);assert.equal(JSON.parse(e.data.get('arena')).certas,14);
    for(let i=0;i<5;i++){t.api.tentarNovamente();u.api.tentarNovamente();}
    await drain();assert.equal(JSON.parse(e.data.get('arena')).xp,20);
  });
  await test('Arena: repeated failures retain every delta, medal, level and result', async()=>{
    const e=environment(), t=e.tab(), a=t.arena();
    t.writeError='QuotaExceededError';
    a.change(s=>{s.xp+=10;s.certas++;s.feitas++;s.hoje.certas++;s.medalhas.push('primeira');s.niveis.n2=2;s.estrelas.n2=2;s.recorde.n2=8;s.jogados.push('n2');s.som=false;});
    a.change(s=>{s.xp+=5;s.certas++;s.feitas++;s.hoje.certas++;});
    assert.equal(a.base().xp,0); assert.equal(a.state().xp,15);
    assert(t.api.temPendentes('arena')); assert.equal(e.data.has('arena'),false);
    assert.equal(t.document.body.children.length,1);
    t.writeError=null; t.api.tentarNovamente(); await drain();
    const saved=JSON.parse(e.data.get('arena'));
    assert.equal(saved.xp,15);assert.equal(saved.certas,2);assert.equal(saved.feitas,2);assert.equal(saved.hoje.certas,2);
    assert.deepEqual(saved.medalhas,['primeira']);assert.deepEqual(saved.jogados,['n2']);
    assert.equal(saved.niveis.n2,2);assert.equal(saved.estrelas.n2,2);assert.equal(saved.recorde.n2,8);assert.equal(saved.som,false);
    assert.equal(a.base().xp,15);assert.equal(t.api.temPendentes(),false);assert.equal(t.document.body.children.length,0);
    t.api.tentarNovamente();a.change(s=>{});assert.equal(JSON.parse(e.data.get('arena')).xp,15);
  });
  await test('Arena: another tab cannot overwrite failed local gains', async()=>{
    const e=environment(), t=e.tab(), u=e.tab(), a=t.arena(), b=u.arena();
    t.writeError='SecurityError';a.change(s=>{s.xp+=10;s.certas++;s.medalhas.push('combo5');});
    b.change(s=>{s.xp+=20;s.certas++;s.medalhas.push('primeira');});await drain();
    assert.equal(a.state().xp,10);assert.equal(a.base().xp,0);
    t.writeError=null;t.api.tentarNovamente();await drain();
    const s=JSON.parse(e.data.get('arena'));assert.equal(s.xp,30);assert.equal(s.certas,2);
    assert.deepEqual(s.medalhas.sort(),['combo5','primeira']);assert.equal(b.state().xp,30);
  });
  await test('Web Locks: simultaneous tab gains add exactly once', async()=>{
    const e=environment({locks:true}), t=e.tab(), u=e.tab(), a=t.arena(), b=u.arena();
    a.change(s=>{s.xp+=10;s.certas++;});b.change(s=>{s.xp+=20;s.certas++;});
    await drain();assert.equal(JSON.parse(e.data.get('arena')).xp,30);
    t.api.tentarNovamente();u.api.tentarNovamente();await drain();
    assert.equal(JSON.parse(e.data.get('arena')).xp,30);assert.equal(a.base().xp,30);assert.equal(b.base().xp,30);
  });
  await test('Pending mission map keeps toggles and merges remote missions', async()=>{
    const e=environment({locks:true}),t=e.tab(),u=e.tab(), changes=new Map();
    t.writeError='QuotaExceededError';
    const queue=()=>t.api.atualizarPendente('math_missions',{},st=>{changes.forEach((v,k)=>st[k]=v);return st;},()=>changes.clear());
    changes.set('n1-0',true);queue();await drain();
    changes.set('n1-1',true);changes.set('n1-0',false);queue();await drain();
    u.api.atualizarPendente('math_missions',{},st=>{st['n2-0']=true;return st;});await drain();
    assert.equal(changes.size,2);
    t.writeError=null;t.api.tentarNovamente();await drain();
    assert.deepEqual(JSON.parse(e.data.get('math_missions')),{'n1-0':false,'n1-1':true,'n2-0':true});
    assert.equal(changes.size,0);
  });
  await test('Blocked reads never overwrite an existing value', async()=>{
    const e=environment(),t=e.tab();e.data.set('math_missions','{"n1-0":true}');
    t.readError='SecurityError';
    assert.equal(t.api.gravar('math_missions',{'n2-0':true}),false);
    const r=t.api.atualizar('math_missions',{},st=>{st['n2-0']=true;});assert.equal(r.ok,false);
    assert.equal(e.data.get('math_missions'),'{"n1-0":true}');
    t.api.atualizarPendente('math_missions',{},st=>{st['n2-0']=true;return st;});
    t.readError=null;t.api.tentarNovamente();
    assert.deepEqual(JSON.parse(e.data.get('math_missions')),{'n1-0':true,'n2-0':true});
  });
  await test('Damaged JSON: blocked backup prevents replacement; recovery preserves exact original', async()=>{
    const e=environment(),t=e.tab();e.data.set('math_missions','broken original');
    t.blockBackup=true;
    t.api.atualizarPendente('math_missions',{},st=>{st['n1-0']=true;return st;});
    assert.equal(e.data.get('math_missions'),'broken original');assert(t.api.temPendentes());
    assert.equal(t.api.gravar('math_missions',{}),false);
    t.blockBackup=false;t.api.tentarNovamente();
    assert.equal(e.data.get('_estragado_math_missions'),'broken original');
    assert.deepEqual(JSON.parse(e.data.get('math_missions')),{'n1-0':true});
    e.data.set('math_missions','second damaged original');
    assert(t.api.gravar('math_missions',{'n2-0':true}));
    assert.equal(e.data.get('_estragado_math_missions'),'broken original');
    assert.equal(e.data.get('_estragado_math_missions_2'),'second damaged original');
  });
  await test('Malformed Arena fields are preserved before defaults replace them', async()=>{
    const e=environment(),t=e.tab(),raw='{"xp":7,"medalhas":null}';e.data.set('arena',raw);
    const a=t.arena();a.change(s=>{s.xp+=5;});
    assert.equal(e.data.get('_estragado_arena'),raw);
    assert.equal(JSON.parse(e.data.get('arena')).xp,5);
    // No claim to repair corrupted data; the exact original remains recoverable.
  });
  await test('Default Arena structures are independent on every read', async()=>{
    const e=environment(),t=e.tab(),a=t.arena();t.writeError='QuotaExceededError';
    a.change(s=>{s.medalhas.push('primeira');s.niveis.n2=3;});
    assert.equal(a.defaults().medalhas.length,0);
    assert.equal(Object.keys(a.defaults().niveis).length,0);
  });
  await test('Activity dates survive failures and retries without duplicates', async()=>{
    const e=environment({locks:true}),t=e.tab(),u=e.tab();t.writeError='QuotaExceededError';
    t.api.registarAtividade('2026-10-11');await drain();t.api.registarAtividade('2026-10-12');await drain();
    u.api.registarAtividade('2026-10-10');await drain();
    t.writeError=null;t.api.tentarNovamente();await drain();t.api.registarAtividade('2026-10-11');await drain();
    assert.deepEqual(JSON.parse(e.data.get('activity_log')).sort(),['2026-10-10','2026-10-11','2026-10-12']);
  });
  await test('Retry button, timer and unload protection remain active while pending', async()=>{
    const e=environment(),t=e.tab();t.writeError='QuotaExceededError';
    t.api.atualizarPendente('math_missions',{},st=>{st['n1-0']=true;return st;});
    const box=t.document.body.children[0];assert.equal(box.attributes.role,'alert');
    box.querySelector('button').listeners.click();assert.equal(t.document.body.children[0],box);
    const event={preventDefault(){this.prevented=true;}};t.dispatch('beforeunload',event);assert.equal(event.prevented,true);
    t.writeError=null;const retry=[...t.timers.values()][0];retry();
    assert.equal(t.api.temPendentes(),false);assert.equal(t.document.body.children.length,0);
    const safe={preventDefault(){this.prevented=true;}};t.dispatch('beforeunload',safe);assert.equal(safe.prevented,undefined);
  });
  await test('Web Locks: a change queued while a write completes is saved without waiting for the timer', async()=>{
    const e=environment({locks:true}),t=e.tab();let n=0;
    const queue=()=>t.api.atualizarPendente('math_missions',{},st=>{st['n1-'+n]=true;return st;},()=>{if(n===0){n=1;queue();}});
    queue();await drain();
    assert.equal(t.api.temPendentes(),false);
    assert.deepEqual(JSON.parse(e.data.get('math_missions')),{'n1-1':true,'n1-0':true});
  });
  await test('Damaged value found on read is preserved and reported without blocking other keys', async()=>{
    const e=environment(),t=e.tab();e.data.set('activity_log','{oops');
    assert.equal(JSON.stringify(t.api.ler('activity_log',[])),'[]');
    assert.equal(e.data.get('_estragado_activity_log'),'{oops');assert.equal(e.data.get('activity_log'),'{oops');
    assert(t.api.falhou('activity_log'));assert.equal(t.document.body.children.length,1);
    assert(t.api.gravar('math_missions',{'n1-0':true}));assert.equal(t.document.body.children.length,1);
    t.api.registarAtividade('2026-10-11');
    assert.deepEqual(JSON.parse(e.data.get('activity_log')),['2026-10-11']);assert.equal(e.data.get('_estragado_activity_log'),'{oops');
    assert.equal(t.api.falhou('activity_log'),false);assert.equal(t.document.body.children.length,0);
  });
  await test('Existing JSON and text APIs retain their return types and formats', async()=>{
    const e=environment(),t=e.tab();assert.equal(t.api.gravar('ws_tab','escrever'),true);
    assert.equal(e.data.get('ws_tab'),'"escrever"');assert.equal(t.api.ler('ws_tab','teclado'),'escrever');
    assert.equal(t.api.gravarTexto('challenge_mode','1'),true);assert.equal(e.data.get('challenge_mode'),'1');
    assert.equal(t.api.atualizar('ws_saved',[],list=>{list.push({id:1,text:'original'});}).ok,true);
    assert.equal(JSON.parse(e.data.get('ws_saved'))[0].text,'original');
  });
}
async function browser(){
  const edge=process.env.EDGE_PATH || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  if(!fs.existsSync(edge)) throw new Error('Edge not found; set EDGE_PATH.');
  const profile=fs.mkdtempSync(path.join(os.tmpdir(),'missao-persistencia-'));
  const server=http.createServer((req,res)=>{
    try{
      const relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/+/,'')||'index.html';
      const file=path.resolve(root,relative);
      if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
      let body=fs.readFileSync(file);
      if(relative==='arena.js')body=Buffer.from(instrumentArena(body.toString('utf8')));
      const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.jpg':'image/jpeg'};
      res.writeHead(200,{'Content-Type':(mime[path.extname(file)]||'application/octet-stream')+'; charset=utf-8','Cache-Control':'no-store'});
      res.end(body);
    }catch{res.writeHead(404);res.end();}
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const url='http://127.0.0.1:'+server.address().port+'/6ano.html';
  const proc=spawn(edge,['--headless=new','--remote-debugging-port=0','--user-data-dir='+profile,'--no-first-run','--no-default-browser-check','--disable-background-networking','about:blank'],{windowsHide:true,stdio:'ignore'});
  const clients=[];
  const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  class CDP{
    constructor(socket){this.socket=socket;this.seq=0;this.pending=new Map();this.errors=[];
      socket.addEventListener('message',e=>{
        const m=JSON.parse(e.data);
        if(m.method==='Runtime.exceptionThrown')this.errors.push(m.params.exceptionDetails.text+': '+(m.params.exceptionDetails.exception?.description||''));
        if(m.id){const p=this.pending.get(m.id);if(p){this.pending.delete(m.id);clearTimeout(p.timer);m.error?p.reject(new Error(m.error.message)):p.resolve(m.result);}}
      });
    }
    call(method,params={}){return new Promise((resolve,reject)=>{
      const id=++this.seq,timer=setTimeout(()=>{this.pending.delete(id);reject(new Error('CDP timeout '+method));},15000);
      this.pending.set(id,{resolve,reject,timer});this.socket.send(JSON.stringify({id,method,params}));
    });}
    async eval(expression){
      const r=await this.call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
      if(r.exceptionDetails)throw new Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);
      return r.result.value;
    }
  }
  let browserClient;
  try{
    let debugPort;
    for(let i=0;i<100;i++){
      try{debugPort=Number(fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n')[0]);break;}catch{await delay(100);}
    }
    assert(debugPort,'Edge did not start');
    const connect=async address=>{
      const socket=new WebSocket(address);
      await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true});});
      const c=new CDP(socket);clients.push(c);return c;
    };
    const version=await(await fetch('http://127.0.0.1:'+debugPort+'/json/version')).json();
    console.log('Browser: '+version.Browser);
    browserClient=await connect(version.webSocketDebuggerUrl);
    const open=async(targetUrl=url)=>{
      const {targetId}=await browserClient.call('Target.createTarget',{url:'about:blank'});
      const targets=await(await fetch('http://127.0.0.1:'+debugPort+'/json/list')).json();
      const c=await connect(targets.find(t=>t.id===targetId).webSocketDebuggerUrl);
      await c.call('Runtime.enable');await c.call('Page.enable');
      await c.call('Page.navigate',{url:targetUrl});
      for(let i=0;i<100;i++){if(await c.eval(targetUrl.includes('pais.html') ? '!!window.MissaoArmazem && !!document.getElementById("progresso-exportar")' : '!!window.__arenaTest && !!document.getElementById("cb-n2-0")'))return c;await delay(50);}
      throw new Error('Page did not load');
    };
    const wait=async(c,expression)=>{
      for(let i=0;i<100;i++){if(await c.eval(expression))return;await delay(30);}
      throw new Error('Condition timed out: '+expression);
    };
    const a=await open(), b=await open();
    const block=async(c,mode)=>c.eval('window.__setItem=Storage.prototype.setItem;window.__getItem=Storage.prototype.getItem;window.__failure='+JSON.stringify(mode)+';Storage.prototype.setItem=function(k,v){if(window.__failure==="quota"||window.__failure==="blocked")throw new DOMException("test",window.__failure==="quota"?"QuotaExceededError":"SecurityError");if(window.__failure==="backup"&&k.startsWith("_estragado_"))throw new DOMException("test","QuotaExceededError");return window.__setItem.call(this,k,v);};if(window.__failure==="read")Storage.prototype.getItem=function(){throw new DOMException("test","SecurityError");};');
    const unblock=async c=>c.eval('Storage.prototype.setItem=window.__setItem;Storage.prototype.getItem=window.__getItem;window.__failure=null;');
    const saved=async(c,key)=>JSON.parse(await c.eval('localStorage.getItem('+JSON.stringify(key)+')'));
    const change=async(c,code)=>c.eval('window.__arenaTest.change(s=>{'+code+'});');
    await test('Edge: page loads without JavaScript exceptions; Web Locks available',async()=>{
      assert.equal(await a.eval('!!navigator.locks'),true);assert.deepEqual(a.errors,[]);assert.deepEqual(b.errors,[]);
    });
    await test('Edge: failed mission stays pending, label clear, confirmed XP unchanged',async()=>{
      await block(a,'quota');
      const before=await a.eval('document.getElementById("xp-total-math").textContent');
      await a.eval('document.getElementById("cb-n2-0").click()');
      await wait(a,'MissaoArmazem.falhou("math_missions")');
      assert.equal(await a.eval('document.getElementById("cb-n2-0").dataset.saveStatus'),'pending');
      assert.equal(await a.eval('document.getElementById("cb-n2-0").nextElementSibling.textContent.includes("por guardar")'),true);
      assert.equal(await a.eval('document.getElementById("xp-total-math").textContent'),before);
      assert.equal(await a.eval('document.getElementById("cb-n2-0").nextElementSibling.classList.contains("done")'),false);
      assert.equal(await a.eval('!!document.querySelector(".armazem-aviso")'),true);
    });
    await test('Edge: pending mission survives another tab change and repeated local toggles',async()=>{
      await a.eval('document.getElementById("cb-n2-1").click();document.getElementById("cb-n2-0").click();');
      await b.eval('document.getElementById("cb-n3-0").click();');
      await wait(b,'!MissaoArmazem.temPendentes()');await delay(100);
      assert.equal(await a.eval('document.getElementById("cb-n2-1").checked'),true);
      assert.equal(await a.eval('document.getElementById("cb-n2-0").checked'),false);
      assert.equal(await a.eval('document.getElementById("cb-n3-0").checked'),true);
    });
    await test('Edge: retry button recovers all missions and clears persistent warning',async()=>{
      await unblock(a);await a.eval('document.querySelector(".armazem-aviso button").click()');
      await wait(a,'!MissaoArmazem.temPendentes() && !document.querySelector(".armazem-aviso")');
      const s=await saved(a,'math_missions');assert.equal(s['n2-0'],false);assert.equal(s['n2-1'],true);assert.equal(s['n3-0'],true);
      assert.equal(await a.eval('document.getElementById("cb-n2-1").dataset.saveStatus'),'saved');
      assert.equal(await a.eval('document.getElementById("cb-n2-1").nextElementSibling.classList.contains("done")'),true);
    });
    await test('Edge: Arena failures retain XP, medals, levels and other results',async()=>{
      await block(a,'blocked');
      await change(a,'s.xp+=10;s.certas++;s.feitas++;s.hoje.certas++;s.medalhas.push("combo5");s.niveis.n2=2;s.estrelas.n2=2;s.recorde.n2=9;s.jogados.push("n2");s.som=false;');
      await wait(a,'MissaoArmazem.falhou("arena")');
      await change(a,'s.xp+=5;s.certas++;s.feitas++;s.hoje.certas++;');
      await delay(100);assert.equal(await a.eval('__arenaTest.base().xp'),0);
      await change(b,'s.xp+=20;s.certas++;s.feitas++;s.hoje.certas++;s.medalhas.push("primeira");');
      await wait(b,'!MissaoArmazem.temPendentes("arena")');await delay(100);
      assert.equal(await a.eval('__arenaTest.state().xp'),15);
      await unblock(a);await a.eval('MissaoArmazem.tentarNovamente()');await wait(a,'!MissaoArmazem.temPendentes()');
      const s=await saved(a,'arena');assert.equal(s.xp,35);assert.equal(s.certas,3);assert.equal(s.feitas,3);assert.equal(s.hoje.certas,3);
      assert.deepEqual(s.medalhas.sort(),['combo5','primeira']);assert.equal(s.niveis.n2,2);assert.equal(s.estrelas.n2,2);assert.equal(s.recorde.n2,9);assert.equal(s.som,false);
      await a.eval('MissaoArmazem.tentarNovamente();MissaoArmazem.tentarNovamente();');await change(a,'');
      await wait(a,'!MissaoArmazem.temPendentes()');assert.equal((await saved(a,'arena')).xp,35);
    });
    await test('Edge: simultaneous XP and mission writes from two real tabs',async()=>{
      await Promise.all([change(a,'s.xp+=7;s.certas++;'),change(b,'s.xp+=11;s.certas++;')]);
      await wait(a,'!MissaoArmazem.temPendentes()');await wait(b,'!MissaoArmazem.temPendentes()');
      assert.equal((await saved(a,'arena')).xp,53);
      await Promise.all([a.eval('document.getElementById("cb-n4-0").click()'),b.eval('document.getElementById("cb-n5-0").click()')]);
      await wait(a,'!MissaoArmazem.temPendentes()');await wait(b,'!MissaoArmazem.temPendentes()');
      const s=await saved(a,'math_missions');assert.equal(s['n4-0'],true);assert.equal(s['n5-0'],true);
    });
    await test('Edge: recovery on focus without a new game action',async()=>{
      await block(a,'quota');await change(a,'s.xp+=3;');await wait(a,'MissaoArmazem.falhou("arena")');
      await unblock(a);await a.eval('window.dispatchEvent(new Event("focus"))');await wait(a,'!MissaoArmazem.temPendentes()');
      assert.equal((await saved(a,'arena')).xp,56);assert.equal(await a.eval('!!document.querySelector(".armazem-aviso")'),false);
    });
    await test('Edge: failed remote reads retain confirmed Arena and mission views',async()=>{
      const before=await a.eval('document.getElementById("xp-total-math").textContent');
      await block(a,'read');
      await a.eval('for(const key of ["arena","math_missions"])window.dispatchEvent(new StorageEvent("storage",{key,storageArea:localStorage}));');
      assert.equal(await a.eval('__arenaTest.state().xp'),56);
      assert.equal(await a.eval('__arenaTest.base().xp'),56);
      assert.equal(await a.eval('document.getElementById("cb-n4-0").checked'),true);
      assert.equal(await a.eval('document.getElementById("xp-total-math").textContent'),before);
      await unblock(a);
      // A real save clears the failed-read status without changing any rewards.
      await change(a,'');
      await a.eval('MissaoArmazem.atualizarPendente("math_missions",{},s=>s)');
      await wait(a,'!MissaoArmazem.temPendentes()');
      assert.equal((await saved(a,'arena')).xp,56);
    });
    await test('Edge: unreadable storage retains old data and merges after recovery',async()=>{
      await block(a,'read');
      await a.eval('document.getElementById("cb-n6-0").click()');await wait(a,'MissaoArmazem.falhou("math_missions")');
      assert.equal((await saved(b,'math_missions'))['n4-0'],true);
      await unblock(a);await a.eval('MissaoArmazem.tentarNovamente()');await wait(a,'!MissaoArmazem.temPendentes()');
      const s=await saved(a,'math_missions');assert.equal(s['n4-0'],true);assert.equal(s['n6-0'],true);
    });
    await test('Edge: damaged data cannot be overwritten if exact backup fails',async()=>{
      await block(a,'backup');await block(b,'backup');
      await a.eval('localStorage.setItem("pt_missions","raw damaged progress");window.__setItem.call(localStorage,"_estragado_pt_missions","previous original")');
      await a.eval('document.getElementById("cb-p1-0").click()');await wait(a,'MissaoArmazem.temPendentes("pt_missions")');
      await delay(100);assert.equal(await a.eval('localStorage.getItem("pt_missions")'),'raw damaged progress');
      assert.equal(await a.eval('localStorage.getItem("_estragado_pt_missions")'),'previous original');
      await unblock(a);await a.eval('MissaoArmazem.tentarNovamente()');await wait(a,'!MissaoArmazem.temPendentes()');
      assert.equal(await a.eval('localStorage.getItem("_estragado_pt_missions_2")'),'raw damaged progress');
      assert.equal((await saved(a,'pt_missions'))['p1-0'],true);await unblock(b);
    });
    await test('Edge: Oficina API still archives and restores a text',async()=>{
      await a.eval('const text=document.getElementById("wr-text");text.value="O meu texto de teste.";text.dispatchEvent(new Event("input",{bubbles:true}));document.getElementById("wr-title").value="Teste";document.getElementById("wr-title").dispatchEvent(new Event("input",{bubbles:true}));document.getElementById("wr-done").click();document.getElementById("wr-archive").click();');
      assert.equal((await saved(a,'ws_saved'))[0].text,'O meu texto de teste.');
      assert.equal((await saved(a,'ws_draft')).text,'');
    });
    await test('Edge: progress survives page reload and a newly opened tab',async()=>{
      await a.call('Page.reload');
      await wait(a,'!!window.__arenaTest && !!document.getElementById("cb-n6-0")');
      assert.equal(await a.eval('__arenaTest.state().xp'),56);
      assert.equal(await a.eval('document.getElementById("cb-n6-0").checked'),true);
      const c=await open();assert.equal(await c.eval('__arenaTest.state().xp'),56);
      assert.equal((await saved(c,'ws_saved'))[0].text,'O meu texto de teste.');
    });
    await test('Edge: export during write failure includes pending gains and downloads JSON',async()=>{
      await block(a,'quota');await change(a,'s.xp+=4;');await wait(a,'MissaoArmazem.falhou("arena")');
      const c=await a.eval('MissaoArmazem.criarCopia()');assert.equal(JSON.parse(c.dados.arena).xp,60);
      const downloads=path.join(profile,'downloads');fs.mkdirSync(downloads);
      await browserClient.call('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:downloads});
      await a.eval('document.querySelector(".armazem-aviso").lastElementChild.click()');
      let files=[];for(let i=0;i<100;i++){files=fs.readdirSync(downloads).filter(x=>x.endsWith('.json'));if(files.length)break;await delay(50);}
      assert.equal(files.length,1);
      const downloaded=JSON.parse(fs.readFileSync(path.join(downloads,files[0]),'utf8'));
      assert.equal(JSON.parse(downloaded.dados.arena).xp,60);assert.equal(await a.eval('MissaoArmazem.temPendentes("arena")'),true);
      await unblock(a);await a.eval('MissaoArmazem.tentarNovamente()');await wait(a,'!MissaoArmazem.temPendentes()');
      const p=await open(url.replace('6ano.html','pais.html'));
      const file=path.join(profile,'restore.json');fs.writeFileSync(file,JSON.stringify({...downloaded,dados:{math_missions:'{"n8-0":true}'}}));
      const {root:dom}=await p.call('DOM.getDocument');
      const {nodeId}=await p.call('DOM.querySelector',{nodeId:dom.nodeId,selector:'#progresso-ficheiro'});
      await p.call('DOM.setFileInputFiles',{nodeId,files:[file]});
      await wait(p,'!document.getElementById("progresso-importar").disabled');
      assert.equal(await p.eval('document.getElementById("progresso-resumo").textContent.includes("preservados")'),true);
      const original=await p.eval('localStorage.getItem("math_missions")');
      await block(p,'quota');
      await p.eval('document.getElementById("progresso-importar").click()');
      await wait(p,'document.getElementById("progresso-estado").textContent.includes("Recuperação incompleta")');
      assert.equal(await p.eval('localStorage.getItem("math_missions")'),original);
      await unblock(p);
      await p.eval('document.getElementById("progresso-importar").click()');
      await wait(p,'document.getElementById("progresso-estado").textContent.includes("Cópia recuperada")');
      assert.equal(await p.eval('localStorage.getItem("_antes_importar_math_missions")'),original);
      assert.equal((await saved(p,'math_missions'))['n8-0'],true);
    });
    await test('Edge: no unhandled JavaScript errors after all recovery scenarios',async()=>{
      for(const c of clients)assert.deepEqual(c.errors,[]);
    });
  }finally{
    if(browserClient)try{await browserClient.call('Browser.close');}catch{}
    for(const c of clients)c.socket.close();
    if(proc.exitCode===null)proc.kill();
    await new Promise(resolve=>server.close(resolve));
    console.log('Isolated test profile (no user data): '+profile);
  }
}
(async()=>{
  await units();
  if(process.argv.includes('--browser'))await browser();
  console.log('PASS '+passed+' tests');
})().catch(e=>{console.error(e.stack);process.exitCode=1;});
