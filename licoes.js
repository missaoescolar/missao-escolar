/* 🧭 Missões guiadas: uma lição completa, um ecrã de cada vez, sempre com o mesmo percurso de 5 etapas:
   🚩 A missão (o que vou aprender e para quê) · 📖 Compreender (desenho e exemplo resolvido) · 🧩 Experimentar (com pista)
   · 🎯 Sozinho (sem pista) · ✅ O que descobri (explicar e marcar a revisão).
   Fundamentação:
   - IES (EUA), «Organizing Instruction and Study to Improve Student Learning» (2007) e «Assisting Students Struggling with
     Mathematics» (2021): exemplos resolvidos, representações visuais (barras), perguntas de recuperação e prática espaçada;
   - ensino da Matemática no Japão: tentar primeiro, comparar estratégias e terminar com «o que descobri»;
   - EEF (Reino Unido), metacognição: escolher e nomear a estratégia usada;
   - CAST, Universal Design for Learning: a mesma ideia em texto, desenho e voz.
   Quando a criança erra, o erro é ligado a uma confusão conhecida (sem inteligência artificial e sem tirar conclusões sobre
   a criança): mostra-se outra explicação com desenho e uma pergunta parecida para confirmar. Erros nunca a vermelho.
   Nada fica bloqueado: a missão guiada é uma porta de entrada; o mapa e as outras partes do mundo continuam abertos.
   Guardado em "licoes" (entra nas cópias de segurança): onde ficou, ajudas pedidas, erros recuperados e revisões. */
const MissaoLicao = (function(){
  "use strict";
  const K = "licoes";
  const ETAPAS = [["missao","🚩","A missão"],["compreender","📖","Compreender"],["experimentar","🧩","Experimentar"],["sozinho","🎯","Sozinho"],["consolidar","✅","O que descobri"]];
  const INTERVALOS = [1, 3, 7];   // dias até cada revisão
  let aoTerminar = null;          // app.js regista aqui a sessão (para o relatório da família)

  function el(tag, cls, html){ const e = document.createElement(tag); if(cls) e.className = cls; if(html !== undefined) e.innerHTML = html; return e; }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function baralha(a){ a = a.slice(); for(let i = a.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function sorteia(a){ return a[Math.floor(Math.random()*a.length)]; }
  function ler(){ return window.MissaoArmazem ? MissaoArmazem.ler(K, {}) : {}; }
  function gravar(v){ if(window.MissaoArmazem) MissaoArmazem.gravar(K, v); }
  function hoje(){ const d = new Date(); d.setHours(0,0,0,0); return d; }
  function diaTxt(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function maisDias(n){ const d = hoje(); d.setDate(d.getDate()+n); return diaTxt(d); }
  function dataCurta(t){ const p = t.split("-"); return p[2]+"/"+p[1]; }
  function falar(texto){
    try{
      if(!("speechSynthesis" in window)) return;
      if(speechSynthesis.speaking){ speechSynthesis.cancel(); return; }
      const u = new SpeechSynthesisUtterance(texto); u.lang = "pt-PT"; u.rate = 0.95; speechSynthesis.speak(u);
    }catch(e){}
  }

  /* ---------- frações: escrita, leitura em voz alta e contas ---------- */
  const mdc = (a, b) => b ? mdc(b, a % b) : a;
  const mmc = (a, b) => a / mdc(a, b) * b;
  function fr(f){ return '<span class="lic-fr" role="img" aria-label="'+frFala(f)+'"><i>'+f[0]+'</i><i>'+f[1]+'</i></span>'; }
  const NOMES = {2:["meio","meios"],3:["terço","terços"],4:["quarto","quartos"],5:["quinto","quintos"],6:["sexto","sextos"],7:["sétimo","sétimos"],8:["oitavo","oitavos"],9:["nono","nonos"],10:["décimo","décimos"],12:["doze avos","doze avos"],15:["quinze avos","quinze avos"],18:["dezoito avos","dezoito avos"],20:["vinte avos","vinte avos"],24:["vinte e quatro avos","vinte e quatro avos"]};
  function frFala(f){ const n = NOMES[f[1]]; return n ? (f[0] === 1 ? (f[1] === 2 ? "um meio" : "um "+n[0]) : f[0]+" "+n[1]) : f[0]+" sobre "+f[1]; }
  function cmp(a, b){ return a[0]*b[1] - b[0]*a[1]; }
  function caso(a, b){ return a[0] === b[0] ? "mesmoNum" : a[1] === b[1] ? "mesmoDen" : "diferentes"; }
  const CASOS = {mesmoNum:"comparar frações com o mesmo numerador", mesmoDen:"comparar frações com o mesmo denominador", diferentes:"comparar frações com denominadores diferentes", ordenar:"pôr frações por ordem"};
  // fala: texto com 2/3 escrito como «2 terços»
  function semFracoes(html){
    return html.replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<span class="lic-fr"[^>]*aria-label="([^"]+)"[^>]*>.*?<\/span>/g, " $1 ")
      .replace(/&gt;/g, " é maior do que ").replace(/&lt;/g, " é menor do que ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  /* ---------- desenhos: barras do mesmo comprimento (o «todo» é sempre igual) e pizas ---------- */
  function barras(lista, o){
    o = o || {};
    const W = 300, H = 30, X = 62, gap = 16, h = lista.length*(H+gap) + 4;
    let s = '<svg class="lic-ver" viewBox="0 0 '+(X+W+8)+' '+h+'" role="img" aria-label="'+esc(lista.map(f => frFala(f)).join(", "))+', em barras do mesmo comprimento">';
    lista.forEach((f, k) => {
      const y = 4 + k*(H+gap), d = f[1], sub = o.sub ? o.sub / d : 1, larg = W / d;
      s += '<text x="'+(X-12)+'" y="'+(y+H/2+6)+'" text-anchor="end" font-size="17" font-weight="700" fill="currentColor">'+f[0]+'/'+f[1]+'</text>';
      for(let i = 0; i < d; i++){
        s += '<rect x="'+(X+i*larg)+'" y="'+y+'" width="'+larg+'" height="'+H+'" fill="'+(i < f[0] ? 'var(--lic-cor)" fill-opacity="0.55' : 'var(--surface)')+'" stroke="currentColor" stroke-width="1.5"/>';
        for(let j = 1; j < sub; j++){ const xx = X+i*larg+j*larg/sub; s += '<line x1="'+xx+'" y1="'+(y+4)+'" x2="'+xx+'" y2="'+(y+H-4)+'" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.7"/>'; }
      }
      if(o.marca){ const xf = X + W*f[0]/d; s += '<line x1="'+xf+'" y1="'+(y-3)+'" x2="'+xf+'" y2="'+(y+H+3)+'" stroke="var(--lic-marca)" stroke-width="3"/>'; }
    });
    return s+'</svg>';
  }
  function piza(f){
    const R = 46, c = 52, d = f[1];
    let s = '<svg class="lic-piza" viewBox="0 0 104 104" role="img" aria-label="Piza cortada em '+d+' partes iguais, com '+f[0]+' pintada'+(f[0] === 1 ? '' : 's')+'">';
    for(let i = 0; i < d; i++){
      const a0 = -Math.PI/2 + i*2*Math.PI/d, a1 = a0 + 2*Math.PI/d;
      const p = (a) => (c+R*Math.cos(a)).toFixed(2)+","+(c+R*Math.sin(a)).toFixed(2);
      s += '<path d="M'+c+','+c+' L'+p(a0)+' A'+R+','+R+' 0 0 1 '+p(a1)+' Z" fill="'+(i < f[0] ? 'var(--lic-cor)" fill-opacity="0.55' : 'var(--surface)')+'" stroke="currentColor" stroke-width="1.5"/>';
    }
    return s+'</svg>';
  }
  function ver(v){
    if(!v) return "";
    if(v.barras) return '<div class="lic-desenho">'+barras(v.barras, v)+'</div>';
    if(v.pizas) return '<div class="lic-desenho lic-pizas">'+v.pizas.map(f => '<figure>'+piza(f)+'<figcaption>'+fr(f)+'</figcaption></figure>').join("")+'</div>';
    return "";
  }

  /* ---------- perguntas «comparar duas frações»: opções, diagnóstico do erro, resolução e perguntas parecidas ---------- */
  const PARES = {
    mesmoNum: () => { const n = sorteia([1,1,2,3]); const ds = baralha([3,4,5,6,7,8,9,10].filter(d => d > n)).slice(0,2); return [[n, ds[0]], [n, ds[1]]]; },
    mesmoDen: () => { const d = sorteia([5,6,7,8,9,10,12]); const ns = baralha(Array.from({length:d-1}, (_, i) => i+1)).slice(0,2); return [[ns[0], d], [ns[1], d]]; },
    diferentes: () => baralha(sorteia([[[2,3],[3,4]],[[3,5],[2,3]],[[4,5],[7,10]],[[5,6],[7,12]],[[2,3],[5,9]],[[1,2],[4,9]],[[3,4],[5,6]],[[3,8],[1,4]],[[2,5],[3,10]],[[5,8],[3,4]],[[1,3],[2,9]],[[7,10],[3,5]]]))
  };
  function opcoesComparar(p){
    const a = p.a, b = p.b, c = cmp(a, b);
    const op = p.nomes ? [p.nomes[0], p.nomes[1], p.iguais || "As duas a mesma quantidade"] : [fr(a), fr(b), "São iguais"];
    return {opts:op, correct: c > 0 ? 0 : c < 0 ? 1 : 2};
  }
  function textoComparar(p){
    if(p.ctx) return p.ctx.replace("{A}", fr(p.a)).replace("{B}", fr(p.b));
    return "Qual é maior: "+fr(p.a)+" ou "+fr(p.b)+"?";
  }
  function equivalentes(a, b){
    const m = mmc(a[1], b[1]);
    return {m:m, A:[a[0]*m/a[1], m], B:[b[0]*m/b[1], m]};
  }
  function resolucaoLimpa(p){
    const a = p.a, b = p.b, k = caso(a, b), maior = cmp(a, b) > 0 ? a : b, menor = maior === a ? b : a;
    if(k === "mesmoNum") return 'As duas têm '+a[0]+' parte'+(a[0] === 1 ? '' : 's')+'. Cortar o todo em '+menor[1]+' dá partes mais pequenas do que cortar em '+maior[1]+'. Por isso '+fr(maior)+' &gt; '+fr(menor)+'.';
    if(k === "mesmoDen") return 'As duas estão cortadas em '+a[1]+' partes iguais, por isso as partes têm o mesmo tamanho. Ganha a que tem mais partes: '+fr(maior)+' &gt; '+fr(menor)+'.';
    const e = equivalentes(a, b), sinal = cmp(a, b) > 0 ? '&gt;' : '&lt;';
    return 'Corta as duas em partes do mesmo tamanho. O m.m.c. de '+a[1]+' e '+b[1]+' é '+e.m+': '+fr(a)+' = '+fr(e.A)+' e '+fr(b)+' = '+fr(e.B)+'. Como '+e.A[0]+' '+sinal+' '+e.B[0]+', fica '+fr(a)+' '+sinal+' '+fr(b)+'.';
  }
  function desenhoComparar(p){
    const k = caso(p.a, p.b);
    if(k === "diferentes"){ const e = equivalentes(p.a, p.b); return ver({barras:[p.a, p.b], sub:e.m, marca:true}); }
    return ver({barras:[p.a, p.b], marca:true});
  }
  function diagnostico(p, escolha){
    const a = p.a, b = p.b, k = caso(a, b), lado = escolha === 0 ? a : b, outro = escolha === 0 ? b : a;
    if(escolha === 2){
      if(k === "mesmoNum") return 'As duas têm '+a[0]+' parte'+(a[0] === 1 ? '' : 's')+', mas as partes não têm o mesmo tamanho: cortar em '+Math.max(a[1], b[1])+' dá partes mais pequenas do que cortar em '+Math.min(a[1], b[1])+'.';
      if(a[1]-a[0] === b[1]-b[0]) return 'Às duas falta '+(a[1]-a[0])+' parte'+(a[1]-a[0] === 1 ? '' : 's')+' para o todo, mas as partes que faltam não têm o mesmo tamanho. Repara onde acaba cada barra.';
      return 'Repara nas barras: com o mesmo todo, não acabam no mesmo sítio.';
    }
    if(k === "mesmoNum") return 'Parece que olhaste só para o número de baixo: '+lado[1]+' é maior do que '+outro[1]+'. Mas o número de baixo diz em quantas partes se corta o todo. Com o mesmo todo, mais partes quer dizer partes mais pequenas.';
    if(k === "mesmoDen") return 'As duas estão cortadas em '+a[1]+' partes iguais, por isso cada parte tem o mesmo tamanho. Aqui conta quantas partes tem cada uma: '+Math.max(a[0], b[0])+' é mais do que '+Math.min(a[0], b[0])+'.';
    if(lado[0] > outro[0] || lado[1] > outro[1]) return 'Parece que comparaste os números de cima ou de baixo como se fossem números inteiros. Uma fração é uma parte de um todo: para comparar, as partes têm de ter o mesmo tamanho.';
    return 'Para comparar frações com denominadores diferentes, primeiro corta as duas em partes do mesmo tamanho.';
  }
  function parecida(p){
    const par = PARES[caso(p.a, p.b)]();
    const q = Object.assign({}, p, {a:par[0], b:par[1], _irma:true});
    // um contexto com números escritos («partida em 8 pedaços») não serve para outras frações: fica a pergunta simples
    if(q.ctx && /\d/.test(q.ctx.replace(/\{[AB]\}/g, ""))){ delete q.ctx; delete q.nomes; }
    return q;
  }

  /* ---------- a lição ---------- */
  function estado(id){ const t = ler(); return t[id] || null; }
  function guardar(id, fn){ const t = ler(); t[id] = fn(t[id] || {}) ; gravar(t); return t[id]; }
  function revisaoPronta(st){ return !!(st && st.fim && !st.dominado && st.proxima && st.proxima <= diaTxt(hoje())); }

  function abrir(L, modo){
    let d = document.getElementById("lic-dialogo");
    if(!d){
      d = document.createElement("dialog"); d.id = "lic-dialogo"; d.className = "lic-dialogo"; d.setAttribute("aria-labelledby", "lic-t");
      document.body.appendChild(d);
      d.addEventListener("close", () => { try{ speechSynthesis.cancel(); }catch(e){} if(d._aoFechar) d._aoFechar(); });
    }
    const rev = modo === "revisao";
    // a lista de ecrãs: a lição inteira, ou 3 perguntas de revisão (uma de cada caso)
    const ecras = rev ? baralha(["mesmoNum","mesmoDen","diferentes"]).map(k => { const par = PARES[k](); return {etapa:"sozinho", tipo:"comparar", a:par[0], b:par[1]}; }) : L.ecras;
    const st0 = estado(L.id) || {};
    let pos = !rev && st0.pos && !st0.fimRun ? Math.min(st0.pos, ecras.length) : 0;
    const run = {pistas:0, erros:0, recuperados:0, porRecuperar:0, casos:{}, certas:0, total:0};
    if(!rev && pos === 0) guardar(L.id, s => Object.assign(s, {inicio:s.inicio || diaTxt(hoje()), fimRun:false, pos:0}));

    function cabecalho(etapa){
      const i = ETAPAS.findIndex(e => e[0] === etapa);
      const h = el("div", "lic-cab");
      h.innerHTML = '<div class="lic-cab-t"><h2 id="lic-t">'+L.icon+' '+esc(L.titulo)+(rev ? ' · revisão' : '')+'</h2>'+
        (rev ? '<p class="lic-etapa">3 perguntas, sem pressa</p>' : '<p class="lic-etapa">Etapa '+(i+1)+' de 5 · <b>'+ETAPAS[i][1]+' '+ETAPAS[i][2]+'</b></p>')+'</div>'+
        '<div class="lic-cab-b"><button type="button" class="ghost-btn" data-ouvir>🔊 Ouvir</button><button type="button" class="ghost-btn" data-sair>✕ Sair</button></div>'+
        (rev ? '' : '<ol class="lic-segs" aria-hidden="true">'+ETAPAS.map((e, k) => '<li class="'+(k < i ? 'ok' : k === i ? 'aqui' : '')+'"><span>'+e[1]+'</span><small>'+e[2]+'</small></li>').join("")+'</ol>');
      h.querySelector("[data-sair]").addEventListener("click", () => d.close());
      h.querySelector("[data-ouvir]").addEventListener("click", () => falar(semFracoes(corpo.innerHTML)));
      return h;
    }
    let corpo;
    function pintar(){
      d.innerHTML = "";
      try{ speechSynthesis.cancel(); }catch(e){}
      if(pos >= ecras.length){ fim(); return; }
      const E = ecras[pos];
      d.appendChild(cabecalho(E.etapa));
      corpo = el("div", "lic-corpo"); corpo.setAttribute("aria-live", "polite");
      d.appendChild(corpo);
      const acoes = el("div", "lic-acoes");
      d.appendChild(acoes);
      if(!rev) guardar(L.id, s => Object.assign(s, {pos:pos}));
      TIPOS[E.tipo](E, corpo, acoes);
      const f = d.querySelector(".lic-acoes .cta, .lic-op"); if(f) f.focus({preventScroll:true});
      d.scrollTop = 0;
    }
    function seguinte(texto, primaria){
      const b = el("button", primaria === false ? "ghost-btn" : "cta", texto || "Continuar →"); b.type = "button";
      b.addEventListener("click", () => { pos++; pintar(); });
      return b;
    }

    const TIPOS = {
      texto(E, c, a){
        c.innerHTML = (E.titulo ? '<h3>'+E.titulo+'</h3>' : '')+E.html+ver(E.ver)+(E.depois || "");
        a.appendChild(seguinte(E.botao));
      },
      // exemplo resolvido: um passo de cada vez
      exemplo(E, c, a){
        c.innerHTML = '<h3>'+E.titulo+'</h3><p class="lic-q">'+E.q+'</p>';
        const ol = el("ol", "lic-passos"); c.appendChild(ol);
        let k = 0;
        const mais = el("button", "cta", "Mostrar o 1.º passo"); mais.type = "button";
        const prox = seguinte(); prox.hidden = true;
        mais.addEventListener("click", () => {
          const P = E.passos[k++];
          ol.appendChild(el("li", "", P.t+ver(P.ver)));
          if(k < E.passos.length) mais.textContent = "Mostrar o "+(k+1)+".º passo";
          else { mais.remove(); if(E.conclusao) c.appendChild(el("p", "lic-conclusao", E.conclusao)); prox.hidden = false; prox.focus({preventScroll:true}); }
        });
        a.appendChild(mais); a.appendChild(prox);
      },
      comparar(E, c, a){ pergunta(Object.assign({}, E), c, a, false); },
      escolha(E, c, a){ pergunta(Object.assign({}, E), c, a, false); },
      // consolidar: escolher a frase que explica melhor (sem ter de escrever) e, se quiser, dizer por palavras suas
      frase(E, c, a){
        c.innerHTML = '<h3>'+E.titulo+'</h3><p class="lic-q">'+E.q+'</p>';
        const box = el("div", "lic-ops"); c.appendChild(box);
        const fb = el("div", "lic-fb"); c.appendChild(fb);
        const prox = seguinte(); prox.hidden = true;
        baralha(E.opts.map((t, i) => [t, i])).forEach(o => {
          const b = el("button", "lic-op", o[0]); b.type = "button"; b.dataset.i = o[1];
          b.addEventListener("click", () => {
            box.querySelectorAll(".lic-op").forEach(x => { x.disabled = true; });
            b.classList.add(o[1] === 0 ? "certa" : "outra");
            if(o[1] !== 0) box.querySelectorAll('.lic-op[data-i="0"]').forEach(x => x.classList.add("certa"));
            fb.innerHTML = (o[1] === 0 ? '<b>Exatamente.</b> ' : '<b>Esta explica melhor:</b> ')+E.porque;
            fb.classList.add("on");
            const t = el("label", "lic-livre", 'Queres dizê-lo por palavras tuas? <small>(opcional)</small><textarea rows="2" maxlength="400"></textarea>');
            c.appendChild(t);
            const ta = t.querySelector("textarea"); ta.value = (estado(L.id) || {}).frase || "";
            ta.addEventListener("change", () => guardar(L.id, s => Object.assign(s, {frase:ta.value.trim()})));
            prox.hidden = false; prox.focus({preventScroll:true});
          });
          box.appendChild(b);
        });
        a.appendChild(prox);
      },
      // metacognição: que estratégia usei mais? (não há resposta errada)
      estrategia(E, c, a){
        c.innerHTML = '<h3>'+E.titulo+'</h3><p class="lic-q">'+E.q+'</p>';
        const box = el("div", "lic-ops"); c.appendChild(box);
        const prox = seguinte("Terminar a missão →"); prox.hidden = true;
        E.opts.forEach(t => {
          const b = el("button", "lic-op", t); b.type = "button";
          b.addEventListener("click", () => {
            box.querySelectorAll(".lic-op").forEach(x => { x.classList.toggle("certa", x === b); x.setAttribute("aria-pressed", x === b); });
            guardar(L.id, s => Object.assign(s, {estrategia:t.replace(/<[^>]+>/g, "")}));
            prox.hidden = false;
          });
          box.appendChild(b);
        });
        if(E.nota) c.appendChild(el("p", "lic-nota", E.nota));
        a.appendChild(prox);
      }
    };

    /* uma pergunta: tocar numa opção; se errar, «Vamos ver de outra forma» com desenho e uma pergunta parecida */
    function pergunta(Q, c, a, ehIrma){
      const comparar = Q.tipo === "comparar";
      let opts, correct;
      if(comparar){ const o = opcoesComparar(Q); opts = o.opts; correct = o.correct; }
      else { opts = Q.opts; correct = Q.correct; }
      const ordem = comparar ? [0, 1, 2] : baralha(opts.map((_, i) => i));
      c.innerHTML = (ehIrma ? '<p class="lic-tag">🔁 Uma parecida, para confirmar</p>' : (Q.titulo ? '<h3>'+Q.titulo+'</h3>' : ''))+
        '<p class="lic-q">'+(comparar ? textoComparar(Q) : Q.q)+'</p>'+(Q.verAntes ? ver(Q.verAntes) : '');
      const box = el("div", "lic-ops"+(comparar ? " lic-ops-3" : "")); c.appendChild(box);
      const pistaBox = el("div", "lic-pista"); pistaBox.hidden = true; c.appendChild(pistaBox);
      const fb = el("div", "lic-fb"); c.appendChild(fb);
      const etapa = Q.etapa;
      if(etapa === "experimentar" && !ehIrma){
        const pb = el("button", "ghost-btn", "💡 Pista"); pb.type = "button";
        pb.addEventListener("click", () => {
          run.pistas++;
          pistaBox.innerHTML = '💡 '+(Q.pista || (comparar ? 'Desenha as duas frações em barras do mesmo tamanho e vê qual chega mais longe.' : ''))+(comparar ? desenhoComparar(Q) : ver(Q.verPista));
          pistaBox.hidden = false; pb.remove();
        });
        a.appendChild(pb);
      }
      ordem.forEach(i => {
        const b = el("button", "lic-op", opts[i]); b.type = "button"; b.dataset.i = i;
        b.addEventListener("click", () => responder(i, b));
        box.appendChild(b);
      });
      function responder(i, b){
        box.querySelectorAll(".lic-op").forEach(x => { x.disabled = true; });
        pistaBox.hidden = true;   // o desenho volta na explicação: não fica repetido
        setTimeout(() => fb.scrollIntoView({block:"nearest", behavior:"auto"}), 0);
        a.innerHTML = "";
        const ok = i === correct;
        const k = comparar ? caso(Q.a, Q.b) : (Q.caso || "outro");
        if(etapa === "sozinho" || rev){ run.total++; if(ok) run.certas++; run.casos[k] = run.casos[k] || [0, 0]; run.casos[k][ok ? 0 : 1]++; }
        if(ok){
          b.classList.add("certa");
          if(ehIrma) run.recuperados++;
          fb.innerHTML = '<b>'+(ehIrma ? 'Agora sim! 🎉' : 'Certo!')+'</b> '+(comparar ? resolucaoLimpa(Q) : Q.porque);
          fb.classList.add("on");
          a.appendChild(seguinte());
          a.querySelector(".cta").focus({preventScroll:true});
          return;
        }
        b.classList.add("outra");
        run.erros++;
        if(ehIrma){
          // segunda tentativa também errada: mostra a resolução completa, passo a passo, e segue (fica para a revisão)
          run.porRecuperar++;
          box.querySelectorAll(".lic-op").forEach(x => { if(+x.dataset.i === correct) x.classList.add("certa"); });
          fb.innerHTML = '<b>Vamos ver a resolução completa.</b> '+(comparar ? resolucaoLimpa(Q)+desenhoComparar(Q) : Q.porque+ver(Q.ver))+
            '<p class="lic-nota">Não faz mal: esta ideia volta na revisão, daqui a um dia.</p>';
          fb.classList.add("on");
          a.appendChild(seguinte());
          a.querySelector(".cta").focus({preventScroll:true});
          return;
        }
        const diag = comparar ? diagnostico(Q, i) : ((Q.erros && Q.erros[i]) || Q.porque);
        fb.innerHTML = '<b>Vamos ver de outra forma.</b> '+diag+(comparar ? desenhoComparar(Q) : ver(Q.ver));
        fb.classList.add("on", "outra-forma");
        const irma = comparar ? parecida(Q) : Q.irma && Object.assign({etapa:etapa}, Q.irma);
        if(irma){
          const t = el("button", "cta", "🔁 Experimentar uma parecida"); t.type = "button";
          t.addEventListener("click", () => {
            c.innerHTML = ""; a.innerHTML = "";
            pergunta(irma, c, a, true);
            const f = c.querySelector(".lic-op"); if(f) f.focus({preventScroll:true});
          });
          a.appendChild(t); t.focus({preventScroll:true});
        } else { a.appendChild(seguinte()); }
      }
    }

    function fim(){
      const agora = diaTxt(hoje());
      const s = guardar(L.id, s => {
        if(rev){
          const tudo = run.total && run.certas === run.total;
          const passo = tudo ? (s.passo || 0) + 1 : (s.passo || 0);
          s.revisoes = (s.revisoes || []).concat([{dia:agora, certas:run.certas, total:run.total}]);
          s.passo = passo;
          s.dominado = passo >= INTERVALOS.length;
          s.proxima = s.dominado ? null : maisDias(tudo ? INTERVALOS[passo] : 1);
        } else {
          s.fim = agora; s.fimRun = true; s.pos = 0; s.vezes = (s.vezes || 0) + 1;
          s.pistas = run.pistas; s.erros = run.erros; s.recuperados = run.recuperados; s.porRecuperar = run.porRecuperar;
          s.sozinho = [run.certas, run.total];
          if(!s.passo) s.passo = 0;
          // repetir a lição não apaga um tema já consolidado
          s.proxima = s.dominado ? null : maisDias(run.porRecuperar ? 1 : INTERVALOS[0]);
        }
        return s;
      });
      d.innerHTML = "";
      const casosBem = Object.keys(run.casos).filter(k => !run.casos[k][1]), casosTreino = Object.keys(run.casos).filter(k => run.casos[k][1]);
      const h = el("div", "lic-cab", '<div class="lic-cab-t"><h2 id="lic-t">'+L.icon+' '+esc(L.titulo)+'</h2><p class="lic-etapa">'+(rev ? 'Revisão feita' : 'Missão cumprida')+'</p></div>');
      d.appendChild(h);
      corpo = el("div", "lic-corpo");
      corpo.innerHTML = '<h3>'+(rev ? '🔁 Revisão feita!' : '🏁 Missão cumprida!')+'</h3>'+
        (rev ? '' : '<p>Nesta missão treinaste:</p><ul class="lic-check">'+L.objetivos.map(o => '<li>'+o+'</li>').join("")+'</ul>')+
        (casosBem.length ? '<p>✅ <b>Correu bem:</b> '+casosBem.map(k => CASOS[k]).join("; ")+'.</p>' : '')+
        (casosTreino.length ? '<p>🌱 <b>Para treinar mais:</b> '+casosTreino.map(k => CASOS[k]).join("; ")+'. A revisão vai trazer estes casos de volta.</p>' : '')+
        (s.dominado ? '<p class="lic-proxima">🏅 Acertaste em todas as revisões: este tema está consolidado.</p>'
          : '<p class="lic-proxima">🔁 Próxima revisão: <b>'+dataCurta(s.proxima)+'</b> (3 perguntas, uns 2 minutos). Vais encontrá-la aqui, neste mundo.</p>')+
        '<p class="lic-nota">Lembrar daqui a uns dias é a melhor forma de saber que aprendeste, mesmo que no início custe um bocadinho.</p>';
      d.appendChild(corpo);
      const a = el("div", "lic-acoes");
      const b = el("button", "cta", "Voltar ao mundo"); b.type = "button";
      b.addEventListener("click", () => d.close());
      a.appendChild(b);
      d.appendChild(a);
      b.focus({preventScroll:true});
      if(aoTerminar) aoTerminar(L, rev, run);
    }

    d._aoFechar = () => { atualizarCartoes(); };
    pintar();
    if(!d.open) d.showModal();
  }

  /* ---------- o cartão que abre a lição (no 📖 Aprender do mundo) ---------- */
  const cartoes = [];
  function pintarCartao(c, L){
    const st = estado(L.id), pronta = revisaoPronta(st);
    const emCurso = st && st.inicio && !st.fimRun && st.pos > 0;
    const etapaAtual = emCurso ? ETAPAS.findIndex(e => e[0] === (L.ecras[Math.min(st.pos, L.ecras.length-1)] || {}).etapa) + 1 : 0;
    let estadoTxt, botao;
    if(pronta){ estadoTxt = '🔁 A revisão de hoje está pronta: 3 perguntas, uns 2 minutos.'; botao = "🔁 Fazer a revisão"; }
    else if(emCurso){ estadoTxt = 'Ficaste na etapa '+etapaAtual+' de 5.'; botao = "▶ Continuar a missão"; }
    else if(st && st.dominado){ estadoTxt = '🏅 Tema consolidado: acertaste nas revisões.'; botao = "↺ Fazer outra vez"; }
    else if(st && st.fim){ estadoTxt = '✅ Feita. Próxima revisão: '+dataCurta(st.proxima)+'.'; botao = "↺ Fazer outra vez"; }
    else { estadoTxt = '5 etapas · cerca de '+L.min+' minutos · podes sair e continuar depois.'; botao = "▶ Começar a missão guiada"; }
    c.innerHTML = '<div class="lic-cartao-t"><span class="lic-cartao-i" aria-hidden="true">🧭</span><div><b>Missão guiada: '+esc(L.titulo)+'</b>'+
      '<small>'+esc(L.resumo)+'</small></div></div>'+
      '<ol class="lic-mini" aria-label="As 5 etapas">'+ETAPAS.map(e => '<li><span aria-hidden="true">'+e[1]+'</span> '+e[2]+'</li>').join("")+'</ol>'+
      '<p class="lic-cartao-estado">'+estadoTxt+'</p>';
    const b = el("button", "cta", botao); b.type = "button";
    b.addEventListener("click", () => {
      if(st && st.fimRun && !pronta) guardar(L.id, s => Object.assign(s, {fimRun:false, pos:0}));
      abrir(L, pronta ? "revisao" : null);
    });
    c.appendChild(b);
    if(pronta){
      const l = el("button", "link-btn", "Prefiro fazer a missão toda outra vez"); l.type = "button";
      l.addEventListener("click", () => { guardar(L.id, s => Object.assign(s, {fimRun:false, pos:0})); abrir(L, null); });
      c.appendChild(l);
    }
  }
  function atualizarCartoes(){ cartoes.forEach(x => pintarCartao(x[0], x[1])); }
  // nos dados, as frações escrevem-se [2/3]; aqui passam a fração desenhada (uma vez por lição)
  function prep(x){
    if(typeof x === "string") return x.replace(/\[(\d+)\/(\d+)\]/g, (m, a, b) => fr([+a, +b]));
    if(Array.isArray(x)) return x.map(prep);
    if(x && typeof x === "object"){ const o = {}; Object.keys(x).forEach(k => { o[k] = (k === "resumo" || k === "titulo" && x.ecras) ? x[k] : prep(x[k]); }); return o; }
    return x;
  }
  const preparadas = {};
  function todas(){ return (typeof MISSAO_LICOES !== "undefined" ? MISSAO_LICOES : []).map(L => preparadas[L.id] || (preparadas[L.id] = prep(L))); }
  function doMundo(wid){ return todas().filter(L => L.mundo === wid); }
  function cartao(L){
    const c = el("section", "lic-cartao"); c.setAttribute("aria-label", "Missão guiada: "+L.titulo);
    cartoes.push([c, L]); pintarCartao(c, L);
    return c;
  }
  // revisões prontas hoje (para a «Missão de hoje»)
  function pendentes(){ return todas().filter(L => revisaoPronta(estado(L.id))); }

  return {doMundo:doMundo, cartao:cartao, abrir:abrir, pendentes:pendentes, estado:estado,
          aoTerminar:fn => { aoTerminar = fn; },
          ajuda:{fr:fr, ver:ver},
          _teste:{cmp:cmp, caso:caso, diagnostico:diagnostico, resolucaoLimpa:resolucaoLimpa, PARES:PARES, frFala:frFala}};
})();
window.MissaoLicao = MissaoLicao;
