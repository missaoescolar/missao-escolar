/* Armazém do progresso. Mantém as chaves e os formatos existentes.
   atualizarPendente guarda uma operação em memória até a gravação ter sucesso.
   As operações são puras: relêem o estado mais recente dentro de um Web Lock.
   Sem Web Locks, a tentativa é síncrona (sem garantia de exclusão entre separadores). */
const MissaoArmazem = (function(){
  const ESTRAGADO = "_estragado_";
  const pendentes = new Map(), falhas = new Map(), emCurso = new Set();
  const diasPendentes = new Set();
  const lidos = new Map();
  const CHAVES = ['pt_missions','math_missions','eng_missions','hgp_missions','cn_missions','cn7_missions','fin_missions','fq7_missions','arena','activity_log','banco_srs','banco_hoje','banco_hoje_7','mundos_vistos','ws_tab','ws_draft','ws_saved','ty_best','ty_count','ty_prefs','challenge_mode','curio_cards_off','active_subject','active_subject_7','home_year','home_intent','anim_narrar','caderno','cartoes','pais_relatorio','autoaval','pref_estudo','humor','plano','licoes','mat3_missions','mat7_missions','active_subject_3','banco_hoje_3'];
  let disponivel = true, aviso = null, esperaDOM = false, retryTimer = null;
  // a normal save waits a few milliseconds for the lock: only a wait longer than this shows the warning
  const ESPERA_LONGA_MS = 2000;
  let esperaTimer = null, esperaLonga = false;

  function copia(valor){ return valor === undefined ? valor : JSON.parse(JSON.stringify(valor)); }
  function tipoDeErro(e){
    if(e && e.name === "DadosDanificadosError") return "danificado";
    return e && (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.code === 22 || e.code === 1014) ? "cheio" : "bloqueado";
  }
  function atualizarAviso(){
    if(!document.body){
      if(!esperaDOM){ esperaDOM = true; document.addEventListener("DOMContentLoaded", function(){ esperaDOM = false; atualizarAviso(); }); }
      return;
    }
    if(!pendentes.size){
      if(esperaTimer !== null){ clearTimeout(esperaTimer); esperaTimer = null; }
      esperaLonga = false;
    }
    if(!falhas.size && !pendentes.size){
      if(aviso){ aviso.remove(); aviso = null; }
      return;
    }
    // Pending without any failure: a normal save in progress. Warn only if it takes too long;
    // a warning already on screen (after a failure) stays until everything is saved.
    if(!falhas.size && !aviso && !esperaLonga){
      if(esperaTimer === null) esperaTimer = setTimeout(function(){ esperaTimer = null; esperaLonga = true; atualizarAviso(); }, ESPERA_LONGA_MS);
      return;
    }
    if(!aviso){
      aviso = document.createElement("div");
      aviso.className = "armazem-aviso";
      aviso.setAttribute("role", "alert");
      aviso.innerHTML = '<p></p><button type="button" aria-label="Tentar guardar novamente" title="Tentar guardar novamente">↻</button>';
      aviso.querySelector("button").addEventListener("click", tentarNovamente);
      const exportar = document.createElement('button');
      exportar.type = 'button'; exportar.textContent = '⬇';
      exportar.title = 'Descarregar cópia do progresso desta página';
      exportar.setAttribute('aria-label', exportar.title);
      exportar.addEventListener('click', function(){
        try{ descarregarCopia(); }catch(e){ window.alert('Não foi possível criar a cópia: '+e.message); }
      });
      aviso.appendChild(exportar);
      document.body.appendChild(aviso);
    }
    const tipos = Array.from(falhas.values());
    const soDanificado = tipos.length > 0 && tipos.every(function(t){ return t === "danificado"; });
    const texto = !falhas.size ? "O progresso ainda está por guardar."
      : tipos.indexOf("cheio") !== -1 ? "O espaço para guardar o teu progresso está cheio."
      : tipos.indexOf("bloqueado") !== -1 ? "Este browser não está a guardar o teu progresso."
      : "Há dados danificados. Foi guardada uma cópia do original.";
    aviso.querySelector("p").innerHTML = '<b>⚠️ '+texto+'</b> '+
      (pendentes.size ? 'Há progresso por guardar nesta página. Toca em ↻ para tentar novamente. Se fechares ou atualizares a página antes de guardar, essas alterações podem perder-se. ' : soDanificado ? '' : 'A última tentativa de guardar falhou. ')+
      'Pede a um adulto para ver em <a href="pais.html#guardar">Para pais</a>.';
  }
  function falhar(chave, erro){
    disponivel = false;
    falhas.set(chave, tipoDeErro(erro));
    atualizarAviso();
  }
  function bruto(chave){
    try{ const texto = localStorage.getItem(chave); lidos.set(chave, texto); return {ok:true, texto:texto}; }
    catch(e){ falhar(chave, e); return {ok:false, texto:null}; }
  }
  // Never overwrite a previous recovery copy, even if the same key is damaged again.
  function guardarEstragado(chave, texto){
    try{
      let destino = ESTRAGADO+chave, n = 1, existente;
      while((existente = localStorage.getItem(destino)) !== null && existente !== texto){
        destino = ESTRAGADO+chave+"_"+(++n);
      }
      if(existente === null) localStorage.setItem(destino, texto);
      if(localStorage.getItem(destino) !== texto) throw new Error("Cópia não confirmada");
      return true;
    }catch(e){ falhar(chave, e); return false; }
  }
  function formaCerta(valor, porDefeito){
    if(porDefeito === undefined || porDefeito === null) return true;
    if(Array.isArray(porDefeito)) return Array.isArray(valor);
    if(typeof porDefeito === "object") return valor !== null && typeof valor === "object" && !Array.isArray(valor);
    return typeof valor === typeof porDefeito;
  }
  function objeto(v){ return v !== null && typeof v === "object" && !Array.isArray(v); }
  function numero(v){ return typeof v === "number" && Number.isFinite(v) && v >= 0; }
  // Validate the progress structures that this correction changes; partial legacy Arena values remain valid.
  function dadosCertos(chave, v, porDefeito){
    if(!formaCerta(v, porDefeito)) return false;
    if(/^(pt|math|eng|hgp|cn|cn7)_missions$/.test(chave))
      return objeto(v) && Object.keys(v).every(function(k){ return typeof v[k] === "boolean"; });
    if(chave === "activity_log") return Array.isArray(v) && v.every(function(d){ return typeof d === "string"; });
    if(chave !== "arena") return true;
    if(!objeto(v)) return false;
    if(!["xp","certas","feitas"].every(function(k){ return v[k] === undefined || numero(v[k]); })) return false;
    if(!["niveis","estrelas","recorde"].every(function(k){
      return v[k] === undefined || (objeto(v[k]) && Object.keys(v[k]).every(function(t){ return numero(v[k][t]); }));
    })) return false;
    if(!["medalhas","jogados"].every(function(k){ return v[k] === undefined || (Array.isArray(v[k]) && v[k].every(function(x){ return typeof x === "string"; })); })) return false;
    return (v.hoje === undefined || (objeto(v.hoje) && typeof v.hoje.data === "string" && numero(v.hoje.certas))) &&
      (v.som === undefined || typeof v.som === "boolean") && (v.modo === undefined || typeof v.modo === "string");
  }
  function danificado(chave){ falhas.set(chave, "danificado"); atualizarAviso(); }
  function lerSeguro(chave, porDefeito){
    const r = bruto(chave);
    if(!r.ok) return {ok:false, valor:copia(porDefeito)};
    if(r.texto === null) return {ok:true, valor:copia(porDefeito)};
    let valor, valido = false;
    try{ valor = JSON.parse(r.texto); valido = dadosCertos(chave, valor, porDefeito); }catch(e){}
    if(valido) return {ok:true, valor:valor};
    const preservado = guardarEstragado(chave, r.texto);
    if(preservado) danificado(chave); // otherwise guardarEstragado already reported why the copy failed
    return {ok:preservado, valor:copia(porDefeito)};
  }
  function ler(chave, porDefeito){ return lerSeguro(chave, porDefeito).valor; }
  function escrever(chave, valor, textoSimples){
    try{
      // A failed read is never treated as an empty store that can safely be replaced.
      const atual = bruto(chave);
      if(!atual.ok) return false;
      if(!textoSimples && atual.texto !== null){
        let valido = false;
        try{ valido = dadosCertos(chave, JSON.parse(atual.texto), valor); }catch(e){}
        if(!valido && !guardarEstragado(chave, atual.texto)) return false;
      }
      const texto = textoSimples ? String(valor) : JSON.stringify(valor);
      localStorage.setItem(chave, texto);
      lidos.set(chave, texto);
      falhas.delete(chave);
      disponivel = !falhas.size;
      atualizarAviso();
      return true;
    }catch(e){ falhar(chave, e); return false; }
  }
  function gravar(chave, valor){ return escrever(chave, valor, false); }
  function lerTexto(chave, porDefeito){ const r = bruto(chave); return r.texto === null ? porDefeito : r.texto; }
  function gravarTexto(chave, texto){ return escrever(chave, texto, true); }
  // Existing synchronous API, used by the Oficina and question bank.
  function atualizar(chave, porDefeito, fn){
    const l = lerSeguro(chave, porDefeito), atual = l.valor;
    const r = fn(atual), valor = r === undefined ? atual : r;
    return {ok:l.ok && gravar(chave, valor), valor:valor};
  }

  function agendar(){
    if(pendentes.size && retryTimer === null){
      retryTimer = setTimeout(function(){ retryTimer = null; tentarNovamente(); }, 5000);
    }
    if(!pendentes.size && retryTimer !== null){ clearTimeout(retryTimer); retryTimer = null; }
  }
  function tentarChave(chave){
    if(emCurso.has(chave) || !pendentes.has(chave)) return;
    emCurso.add(chave);
    let gravou = false;
    const executar = function(){
      const p = pendentes.get(chave);
      if(!p) return;
      const l = lerSeguro(chave, p.porDefeito);
      if(!l.ok) return;
      let valor;
      try{
        const r = p.fn(l.valor);
        valor = r === undefined ? l.valor : r;
        if(!dadosCertos(chave, valor, p.porDefeito)) throw new Error("Estado de progresso inválido");
      }catch(e){ falhar(chave, e); return; }
      if(!gravar(chave, valor)) return;
      gravou = true;
      pendentes.delete(chave);
      // Only now may callers advance their acknowledged base or display a saved mission.
      if(p.aoGuardar) p.aoGuardar(copia(valor));
    };
    const terminar = function(){
      emCurso.delete(chave);
      // a change queued while this write was running: save it now rather than on the retry timer
      if(gravou && pendentes.has(chave)) tentarChave(chave);
      atualizarAviso(); agendar();
    };
    if(navigator.locks && navigator.locks.request){
      navigator.locks.request("missao-escolar:"+chave, executar)
        .catch(function(e){ falhar(chave, e); }).finally(terminar);
    }else{
      try{ executar(); }finally{ terminar(); }
    }
  }
  // One current, pure merge per key; replacing it retains all pending changes in the caller.
  function atualizarPendente(chave, porDefeito, fn, aoGuardar){
    pendentes.set(chave, {porDefeito:porDefeito, fn:fn, aoGuardar:aoGuardar});
    tentarChave(chave);
    agendar();
    atualizarAviso();
    return {ok:!pendentes.has(chave)};
  }
  function tentarNovamente(){
    if(falhas.has("_teste_armazem_")) testarDisponibilidade();
    Array.from(pendentes.keys()).forEach(tentarChave);
    agendar();
  }
  function registarAtividade(dia){
    diasPendentes.add(dia);
    atualizarPendente("activity_log", [], function(log){
      diasPendentes.forEach(function(d){ if(log.indexOf(d) === -1) log.push(d); });
      return log;
    }, function(){ diasPendentes.clear(); });
  }
  function aoMudar(fn){
    window.addEventListener("storage", function(e){
      try{ if(e.storageArea === localStorage) fn(e.key); }catch(err){ console.warn("Missão Escolar: não foi possível atualizar a vista.", err); }
    });
  }
  function chavePermitida(k){
    return CHAVES.indexOf(k) !== -1 || /^(?:_estragado_|_antes_importar_)/.test(k) &&
      CHAVES.some(function(c){ const resto = k.replace(/^(?:_estragado_|_antes_importar_)/,''); return resto === c || resto.startsWith(c+'_') && /^\d+$/.test(resto.slice(c.length+1)); });
  }
  const TEXTO = ['challenge_mode','curio_cards_off','active_subject','active_subject_7','active_subject_3','home_year','home_intent','anim_narrar'];
  function valorImportavel(k,raw){
    if(k.startsWith('_estragado_') || k.startsWith('_antes_importar_') || TEXTO.indexOf(k) !== -1) return true;
    let v; try{ v=JSON.parse(raw); }catch(e){ return false; }
    function seguro(x){
      if(!x || typeof x !== 'object') return true;
      return Object.keys(x).every(function(c){ return !['__proto__','constructor','prototype'].includes(c) && seguro(x[c]); });
    }
    if(!seguro(v)) return false;
    if(k.endsWith('_missions') || k === 'arena') return dadosCertos(k,v,{});
    if(k === 'activity_log' || k === 'mundos_vistos') return Array.isArray(v) && v.every(x=>typeof x === 'string');
    if(k === 'ws_saved') return Array.isArray(v) && v.every(x=>objeto(x) && numero(x.id) && ['title','type','text','date'].every(c=>typeof x[c] === 'string'));
    if(k === 'ws_draft') return objeto(v) && ['title','type','text'].every(c=>typeof v[c] === 'string');
    if(k === 'ws_tab') return v === 'teclado' || v === 'escrever';
    if(k === 'ty_count') return numero(v);
    if(k === 'ty_best') return objeto(v) && numero(v.wpm) && typeof v.date === 'string';
    if(k === 'ty_prefs') return objeto(v) && typeof v.source === 'string' && typeof v.level === 'string' && typeof v.accents === 'boolean' && typeof v.clock === 'boolean';
    if(k === 'banco_srs') return objeto(v) && Object.values(v).every(x=>Array.isArray(x) && x.length === 4 && x.every(numero));
    if(k.startsWith('banco_hoje')) return v === null || objeto(v) && numero(v.dia) && Array.isArray(v.ids) && v.ids.every(x=>typeof x === 'string') && typeof v.feita === 'boolean';
    return false;
  }
  // Export never writes to storage, including when its contents are damaged.
  function criarCopia(){
    const dados = Object.create(null), originais = Object.create(null), indisponiveis = [];
    const chaves = new Set(CHAVES);
    try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k && chavePermitida(k)) chaves.add(k); } }catch(e){}
    chaves.forEach(function(k){
      let raw;
      try{ raw = localStorage.getItem(k); }catch(e){ indisponiveis.push(k); raw = lidos.has(k) ? lidos.get(k) : null; }
      if(raw !== null && raw !== undefined) dados[k] = raw;
    });
    pendentes.forEach(function(p,k){
      let valor = copia(p.porDefeito);
      if(Object.prototype.hasOwnProperty.call(dados,k)){
        try{ const v=JSON.parse(dados[k]); if(dadosCertos(k,v,p.porDefeito)) valor=v; else originais[k]=dados[k]; }
        catch(e){ originais[k]=dados[k]; }
      }
      const entrada=copia(valor), r=p.fn(entrada);
      const novo=r === undefined ? entrada : r;
      if(!dadosCertos(k,novo,p.porDefeito)) throw new Error('Progresso inválido em '+k);
      dados[k]=JSON.stringify(novo);
    });
    Object.keys(dados).forEach(function(k){
      if(!valorImportavel(k,dados[k])){ originais[k]=dados[k]; delete dados[k]; }
    });
    return {aplicacao:'missao-escolar',versao:1,data:new Date().toISOString(),dados:dados,originais:originais,
      pendentes:Array.from(pendentes.keys()),indisponiveis:indisponiveis};
  }
  function descarregarCopia(){
    const copia = criarCopia();
    const url = URL.createObjectURL(new Blob([JSON.stringify(copia,null,2)],{type:'application/json'}));
    const a = document.createElement('a');
    a.href=url; a.download='missao-escolar-progresso-'+new Date().toISOString().slice(0,10)+'.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); },1000);
    return copia;
  }
  function validarCopia(texto){
    if(typeof texto !== 'string' || texto.length > 20*1024*1024) throw new Error('Ficheiro demasiado grande ou inválido.');
    const c=JSON.parse(texto);
    if(!objeto(c) || c.aplicacao !== 'missao-escolar' || c.versao !== 1 || !objeto(c.dados) || !objeto(c.originais)) throw new Error('Este ficheiro não é uma cópia compatível da Missão Escolar.');
    [c.dados,c.originais].forEach(function(m){ Object.keys(m).forEach(function(k){
      if(!chavePermitida(k) || typeof m[k] !== 'string') throw new Error('Chave ou valor inválido: '+k);
    }); });
    Object.keys(c.originais).forEach(function(k){ if(CHAVES.indexOf(k) === -1) throw new Error('Original inválido: '+k); });
    Object.keys(c.dados).forEach(function(k){ if(!valorImportavel(k,c.dados[k])) throw new Error('Estrutura inválida: '+k); });
    return c;
  }
  function preservarImportacao(k,raw){
    if(raw === null) return;
    let destino='_antes_importar_'+k, n=1, existente;
    // Recovery copies are already immutable: import never replaces them.
    while((existente=localStorage.getItem(destino)) !== null && existente !== raw) destino='_antes_importar_'+k+'_'+(++n);
    if(existente === null) localStorage.setItem(destino,raw);
    if(localStorage.getItem(destino) !== raw) throw new Error('Não foi possível confirmar a cópia anterior.');
  }
  async function importarCopia(texto){
    const c=validarCopia(texto);
    if(pendentes.size) throw new Error('Guarde ou exporte primeiro o progresso pendente desta página.');
    const resultado={guardadas:[],falhadas:[],mantidas:[]};
    for(const k of new Set(Object.keys(c.dados).concat(Object.keys(c.originais)))){
      const executar=function(){
        try{
          if(Object.prototype.hasOwnProperty.call(c.originais,k) && !guardarEstragado(k,c.originais[k])) throw new Error('Cópia do original danificado falhou.');
          if(!Object.prototype.hasOwnProperty.call(c.dados,k)){ resultado.mantidas.push(k); return; }
          const raw=localStorage.getItem(k);
          if(raw === c.dados[k]){ resultado.mantidas.push(k); return; }
          if(k.startsWith('_estragado_') || k.startsWith('_antes_importar_')){
            if(raw !== null){ resultado.mantidas.push(k); return; }
          }else preservarImportacao(k,raw);
          localStorage.setItem(k,c.dados[k]);
          if(localStorage.getItem(k) !== c.dados[k]) throw new Error('Gravação não confirmada.');
          lidos.set(k,c.dados[k]); falhas.delete(k); resultado.guardadas.push(k);
        }catch(e){ falhar(k,e); resultado.falhadas.push(k); }
      };
      if(navigator.locks && navigator.locks.request) await navigator.locks.request('missao-escolar:'+k,executar);
      else executar();
    }
    disponivel=!falhas.size; atualizarAviso();
    return resultado;
  }
  window.addEventListener("storage", function(e){
    try{ if(e.storageArea === localStorage) tentarNovamente(); }catch(err){}
  });
  window.addEventListener("focus", tentarNovamente);
  window.addEventListener("online", tentarNovamente);
  document.addEventListener("visibilitychange", function(){ if(document.visibilityState === "visible") tentarNovamente(); });
  window.addEventListener("beforeunload", function(e){
    if(!pendentes.size) return;
    e.preventDefault();
    e.returnValue = "";
  });

  try{ localStorage.setItem("_teste_armazem_", "1"); localStorage.removeItem("_teste_armazem_"); }
  catch(e){ falhar("_teste_armazem_", e); }
  // An initial failure is cleared only once a real queued write (or another probe) succeeds.
  function testarDisponibilidade(){
    try{
      localStorage.setItem("_teste_armazem_", "1"); localStorage.removeItem("_teste_armazem_");
      falhas.delete("_teste_armazem_"); disponivel = !falhas.size; atualizarAviso();
    }catch(e){ falhar("_teste_armazem_", e); }
  }
  try{
    if(disponivel && navigator.storage && navigator.storage.persist && !/Firefox\//.test(navigator.userAgent))
      navigator.storage.persisted().then(function(p){ if(!p) return navigator.storage.persist(); }).catch(function(){});
  }catch(e){}
  return {ler:ler, lerSeguro:lerSeguro, gravar:gravar, lerTexto:lerTexto, gravarTexto:gravarTexto, atualizar:atualizar, aoMudar:aoMudar,
    criarCopia:criarCopia, descarregarCopia:descarregarCopia, validarCopia:validarCopia, importarCopia:importarCopia,
    atualizarPendente:atualizarPendente, tentarNovamente:tentarNovamente, registarAtividade:registarAtividade,
    temPendentes:function(chave){ return chave === undefined ? pendentes.size > 0 : pendentes.has(chave); },
    falhou:function(chave){ return falhas.has(chave); }, disponivel:function(){ return disponivel; }};
})();
window.MissaoArmazem = MissaoArmazem;
