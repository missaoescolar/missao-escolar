(function(){
  function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }
  function shuffleQuizOptions(q){
    const idx = q.opts.map(function(_,i){ return i; });
    for(let i=idx.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=idx[i]; idx[i]=idx[j]; idx[j]=t; }
    const newOpts = idx.map(function(i){ return q.opts[i]; });
    const newCorrect = idx.indexOf(q.correct);
    return Object.assign({}, q, {opts:newOpts, correct:newCorrect});
  }
  // reading and writing go through armazem.js (warns when saving fails, keeps a copy of damaged values)
  function store(key){ return MissaoArmazem.ler(key, {}); }

  function dateKey(d){
    const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
    return y+"-"+m+"-"+day;
  }
  function todayStr(){ return dateKey(new Date()); }
  function getActivityLog(){ return MissaoArmazem.ler("activity_log", []); }
  function logActivityToday(){
    const t = todayStr();
    MissaoArmazem.registarAtividade(t);
  }
  function computeStreak(){
    const set = new Set(getActivityLog());
    const today = new Date();
    const tStr = dateKey(today);
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate()-1);
    const yStr = dateKey(yesterday);
    if(!set.has(tStr) && !set.has(yStr)) return 0;
    let cursor = set.has(tStr) ? new Date(today) : yesterday;
    let streak = 0;
    while(set.has(dateKey(cursor))){
      streak++;
      cursor.setDate(cursor.getDate()-1);
    }
    return streak;
  }

  function stripHtml(html){ const t=document.createElement("div"); t.innerHTML=html; return t.textContent || t.innerText || ""; }

  /* text for "Ouvir este mundo", in the order of the page: introduction, worked examples (posters), summary.
     Drawings and decorative icons are skipped so nothing is read twice; a line break becomes a pause. */
  function paraOuvir(html){
    const t = document.createElement("div"); t.innerHTML = html;
    const desenhos = Array.prototype.map.call(t.querySelectorAll("svg"), function(s){ return s.getAttribute("aria-label") || ""; });
    t.querySelectorAll("svg, [aria-hidden='true']").forEach(function(n){ n.remove(); });
    t.querySelectorAll("br").forEach(function(b){ b.replaceWith(". "); });
    t.querySelectorAll("li").forEach(function(li){ li.append(". "); });
    let texto = t.textContent.replace(/\s+/g, " ").trim();
    if(!texto) texto = desenhos.filter(Boolean).join(". ");   // a drawing with no text beside it: read its description
    return texto.replace(/([.?!:;])\s*\.(?=\s|$)/g, "$1").trim();
  }
  function textoParaOuvir(w){
    const semIcones = function(s){ return String(s).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]️?/gu, "").trim(); };
    const partes = [w.lead];
    (w.posters || []).forEach(function(p){ partes.push(semIcones(p.title)+". "+paraOuvir(p.svg)); });
    w.resumo.forEach(function(l){ partes.push(paraOuvir(l)); });
    return partes.filter(Boolean).join(". ").replace(/([.?!:;])\s*\.(?=\s|$)/g, "$1");
  }

  function normTerm(s){
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/["'()]/g,"").replace(/:$/,"").trim();
  }
  function findGlossEntry(text, gloss){
    const target = normTerm(text);
    if(!target) return null;
    for(const entry of gloss){ if(normTerm(entry[0])===target) return entry; }
    for(const entry of gloss){
      const parts = entry[0].split("/").map(p=>normTerm(p));
      if(parts.indexOf(target)!==-1) return entry;
    }
    for(const entry of gloss){
      const nt = normTerm(entry[0]);
      if(nt.length>3 && (target.indexOf(nt)!==-1 || nt.indexOf(target)!==-1)) return entry;
    }
    return null;
  }

  /* ---------- modal / pop-up ---------- */
  let modalOverlayEl = null, modalReturnFocus = null;
  function ensureModal(){
    if(modalOverlayEl) return modalOverlayEl;
    const overlay = el("div","modal-overlay");
    overlay.setAttribute("role","dialog");
    overlay.setAttribute("aria-modal","true");
    const box = el("div","modal-box");
    const closeBtn = el("button","modal-close","✕");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label","Fechar");
    const titleEl = el("h3","modal-title","");
    titleEl.id = "modal-title-" + Math.random().toString(36).slice(2,8);
    const bodyEl = el("div","modal-body","");
    box.appendChild(closeBtn); box.appendChild(titleEl); box.appendChild(bodyEl);
    overlay.appendChild(box);
    overlay.addEventListener("click",(e)=>{ if(e.target===overlay) closeModal(); });
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown",(e)=>{ if(e.key==="Escape" && overlay.classList.contains("open")) closeModal(); });
    document.body.appendChild(overlay);
    modalOverlayEl = { overlay, box, titleEl, bodyEl, closeBtn };
    return modalOverlayEl;
  }
  function openModal(title, bodyHtml, triggerEl){
    const m = ensureModal();
    m.titleEl.textContent = title;
    m.bodyEl.innerHTML = bodyHtml;
    m.overlay.classList.add("open");
    modalReturnFocus = triggerEl || document.activeElement;
    m.closeBtn.focus();
  }
  function closeModal(){
    stopBreakTimer();
    if(!modalOverlayEl) return;
    modalOverlayEl.overlay.classList.remove("open");
    if(modalReturnFocus && modalReturnFocus.focus) modalReturnFocus.focus();
    modalReturnFocus = null;
  }

  function speak(text){
    try{
      if(!("speechSynthesis" in window)){ showToast("O teu browser não suporta leitura em voz alta."); return; }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "pt-PT"; utter.rate = 0.95;
      window.speechSynthesis.speak(utter);
    }catch(e){}
  }

  function playChime(){
    try{
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if(!Ctx) return;
      const ctx = new Ctx();
      [523.25, 659.25, 783.99].forEach((freq,i)=>{
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = "sine"; osc.frequency.value = freq;
        const start = ctx.currentTime + i*0.12;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.15, start+0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start+0.35);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(start); osc.stop(start+0.4);
      });
    }catch(e){}
  }

  function burstConfetti(){
    if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["var(--m1)","var(--m2)","var(--m3)","var(--m4)","var(--m6)","var(--m7)"];
    for(let i=0;i<24;i++){
      const p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = (Math.random()*100)+"vw";
      p.style.background = colors[i%colors.length];
      p.style.animationDelay = (Math.random()*0.3)+"s";
      p.style.setProperty("--rot",(Math.random()*360)+"deg");
      document.body.appendChild(p);
      setTimeout(()=>{ p.remove(); }, 1900);
    }
  }

  /* ---------- timed break (learns a little, no pressure) ---------- */
  const BREAK_FACTS = [
    "O terramoto de 1755 aconteceu no Dia de Todos os Santos, quando muita gente estava nas igrejas.",
    "A Baixa Pombalina foi uma das primeiras zonas do mundo construídas já a pensar em resistir a terramotos.",
    "A música \"Grândola, Vila Morena\" foi o sinal de rádio que confirmou o início da Revolução dos Cravos.",
    "A revolução de 25 de abril de 1974 quase não teve tiros — por isso lhe chamam Revolução dos Cravos.",
    "Portugal só trocou o escudo pelo euro em 2002, bem depois de entrar na União Europeia em 1986.",
    "A CPLP junta 9 países que falam português, em quatro continentes diferentes.",
    "D. João V mandou construir o Convento de Mafra sobretudo para mostrar o quão rico e poderoso era.",
    "A primeira linha de comboio de Portugal, em 1856, ligava Lisboa ao Carregado.",
    "O coração humano bate cerca de 100 mil vezes por dia.",
    "O mel nunca se estraga, se for bem guardado.",
    "Um raio é cerca de 5 vezes mais quente do que a superfície do Sol.",
    "Os polvos têm três corações.",
    "O Monte Everest cresce uns milímetros todos os anos.",
    "Há mais estrelas no universo do que grãos de areia em todas as praias da Terra.",
    "O número \"zero\" só chegou à Europa muitos séculos depois de já ser usado na Índia.",
    "Os flamingos nascem cinzentos, e só ficam rosa por causa da comida que comem."
  ];
  function pickBreakFact(){ return BREAK_FACTS[Math.floor(Math.random()*BREAK_FACTS.length)]; }

  let breakInterval = null, breakFactInterval = null;
  function stopBreakTimer(){
    if(breakInterval){ clearInterval(breakInterval); breakInterval=null; }
    if(breakFactInterval){ clearInterval(breakFactInterval); breakFactInterval=null; }
  }
  function buildBreakPickerHtml(){
    return '<p style="margin:0 0 14px">Escolhe quanto tempo de pausa queres. Não há nada para fazer durante a pausa — só uma curiosidade nova a cada minuto, para o cérebro continuar a passear.</p>'+
      '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">'+
      [5,10,15].map(function(min){ return '<button type="button" class="wheel-btn break-pick" data-min="'+min+'" style="font-size:0.95rem;padding:10px 18px">'+min+' min</button>'; }).join("")+
      '</div>'+
      '<p class="note-small" style="text-align:center">Ou uma pausa criativa: 🎵 <a href="https://musiclab.chromeexperiments.com/Song-Maker/" target="_blank" rel="noopener noreferrer">inventa uma música no Chrome Music Lab ↗</a> (grátis, sem conta) · 🎨 <a href="https://www.tate.org.uk/kids" target="_blank" rel="noopener noreferrer">desenha e joga no Tate Kids ↗</a>.</p>';
  }
  function buildBreakTimerHtml(totalSeconds){
    const mm = String(Math.floor(totalSeconds/60)).padStart(2,"0");
    const ss = String(totalSeconds%60).padStart(2,"0");
    return '<div style="text-align:center">'+
      '<svg viewBox="0 0 120 120" width="120" height="120" style="margin:0 auto 10px;display:block">'+
        '<circle cx="60" cy="60" r="52" fill="none" stroke="var(--border-soft)" stroke-width="10"/>'+
        '<circle id="break-ring" cx="60" cy="60" r="52" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" transform="rotate(-90 60 60)" style="transition:stroke-dashoffset 1s linear"/>'+
      '</svg>'+
      '<p id="break-clock" style="font-family:Lexend,sans-serif;font-weight:800;font-size:1.8rem;margin:0 0 10px">'+mm+':'+ss+'</p>'+
      '<p id="break-fact" style="font-size:0.9rem;color:var(--text-muted);min-height:3.2em;margin:0 0 14px">💡 '+pickBreakFact()+'</p>'+
      '<button type="button" class="wheel-btn" id="break-stop">Terminar pausa</button>'+
    '</div>';
  }
  function startBreakTimer(totalSeconds){
    stopBreakTimer();
    let remaining = totalSeconds;
    const circumference = 2*Math.PI*52;
    function render(){
      const ringEl = document.getElementById("break-ring");
      const clockEl = document.getElementById("break-clock");
      if(!ringEl || !clockEl){ stopBreakTimer(); return; }
      ringEl.style.strokeDasharray = circumference.toFixed(1);
      ringEl.style.strokeDashoffset = (circumference * (1 - remaining/totalSeconds)).toFixed(1);
      clockEl.textContent = String(Math.floor(remaining/60)).padStart(2,"0")+":"+String(remaining%60).padStart(2,"0");
    }
    render();
    breakInterval = setInterval(function(){
      remaining--;
      if(remaining<=0){
        stopBreakTimer();
        const bodyEl = document.querySelector(".modal-body");
        if(bodyEl){
          bodyEl.innerHTML = '<div style="text-align:center"><p style="font-size:2rem;margin:0 0 8px">🎉</p>'+
            '<p style="font-family:Lexend,sans-serif;font-weight:800;margin:0 0 10px">Pausa terminada!</p>'+
            '<p style="margin:0 0 14px;color:var(--text-muted)">Continua quando quiseres — sem pressa.</p>'+
            '<button type="button" class="wheel-btn" id="break-close2">Fechar</button></div>';
          const closeBtn2 = document.getElementById("break-close2");
          if(closeBtn2) closeBtn2.addEventListener("click", closeModal);
        }
        playChime();
        return;
      }
      render();
    }, 1000);
    breakFactInterval = setInterval(function(){
      const factEl = document.getElementById("break-fact");
      if(factEl) factEl.textContent = "💡 "+pickBreakFact();
      else stopBreakTimer();
    }, 60000);
  }
  function openBreakModal(triggerEl){
    openModal("⏸️ Pausa", buildBreakPickerHtml(), triggerEl);
    const body = document.querySelector(".modal-body");
    Array.prototype.forEach.call(body.querySelectorAll(".break-pick"), function(btn){
      btn.addEventListener("click", function(){
        const min = parseInt(btn.getAttribute("data-min"),10);
        body.innerHTML = buildBreakTimerHtml(min*60);
        startBreakTimer(min*60);
        const stopBtn = document.getElementById("break-stop");
        if(stopBtn) stopBtn.addEventListener("click", function(){ stopBreakTimer(); closeModal(); });
      });
    });
  }

  /* ---------- formas de aprender um mundo (data/formatos-*.js): 🧱 primeiros passos · 💡 analogia · 🧅 camadas ·
     🗺️ resumo visual · ⚠️ erros comuns · 🤖 pensa como um robô. Each part only appears if the world has it. ---------- */
  function formatosDe(w){ return (typeof MISSAO_FORMATOS !== "undefined" && MISSAO_FORMATOS[w.id]) || {}; }
  function buildMapaTema(F, cfg){
    const box = el("div","mapa-tema");
    if(F.primeiros && F.primeiros.length){
      box.appendChild(el("p","mt-h","🧱 Antes de começar, precisas de saber"));
      const ul = document.createElement("ul");
      F.primeiros.forEach(function(p){
        const li = el("li","",p.t);
        if(p.w){ const a = el("a","mt-link"," revê aqui →"); a.href = "#"+cfg.key+"/"+p.w; li.appendChild(a); }
        ul.appendChild(li);
      });
      box.appendChild(ul);
    }
    if(F.analogia){ box.appendChild(el("p","mt-h","💡 Uma analogia")); box.appendChild(el("p","mt-txt",F.analogia)); }
    if(F.camadas && F.camadas.length){
      box.appendChild(el("p","mt-h","🧅 Em camadas: do essencial ao mais difícil"));
      const ol = el("ol","mt-camadas");
      F.camadas.forEach(function(c){ ol.appendChild(el("li","",c)); });
      box.appendChild(ol);
    }
    return box;
  }
  function buildSintese(items){
    const wrap = el("div","");
    wrap.appendChild(el("p","subhead",'🗺️ Resumo visual <small class="muted">— o essencial num relance</small>'));
    const grid = el("div","sintese");
    items.forEach(function(it){ grid.appendChild(el("div","sint-item",'<b>'+it[0]+'</b><span>'+it[1]+'</span>')); });
    wrap.appendChild(grid);
    return wrap;
  }
  function buildErros(list){
    const d = document.createElement("details"); d.className = "erros-box";
    d.innerHTML = '<summary>⚠️ Erros comuns <small class="muted">— '+list.length+' armadilhas a evitar</small></summary>'+
      '<ul>'+list.map(function(e){ return '<li><p class="err-e">❌ '+e.e+'</p><p class="err-p">Porque acontece: '+e.p+'</p><p class="err-c">✅ '+e.c+'</p></li>'; }).join("")+'</ul>';
    return d;
  }
  function buildRobo(r){
    const box = el("div","robo-box");
    box.appendChild(el("p","subhead",'🤖 Pensa como um robô <small class="muted">— um algoritmo é uma receita passo a passo</small>'));
    box.appendChild(el("p","robo-t",r.tarefa));
    const ol = el("ol","robo-alg");
    r.algoritmo.forEach(function(p){ ol.appendChild(el("li", /^\s+/.test(p) ? "robo-in" : "", p.trim())); });
    box.appendChild(ol);
    if(r.teste) box.appendChild(el("p","robo-teste","▶️ <b>Testa:</b> "+r.teste));
    if(r.bug){
      const d = document.createElement("details"); d.className = "robo-bug";
      d.innerHTML = '<summary>🐞 Encontra o erro do robô</summary><p><b>O que o robô fez:</b> '+r.bug.h+'</p>'+
        '<details class="robo-sol"><summary>Ver o erro e a correção</summary><p>'+r.bug.r+'</p></details>';
      box.appendChild(d);
    }
    return box;
  }

  /* ---------- 🃏 Cartões de memória: the world's key words, one card at a time ----------
     Retrieval practice: the child says the answer out loud BEFORE turning the card, then says honestly
     whether she knew it. Cards she did not know go back to the end of the pile, until all are known. */
  function openCartoes(w, triggerEl){
    const base = (w.gloss || []).map(function(g){ return {frente:g[0], verso:g[1]}; });
    if(!base.length) return;
    openModal("🃏 Cartões — "+w.title, '<div class="cards" id="cards-box"></div>', triggerEl);
    const box = document.getElementById("cards-box");
    let pilha, total, acertosPrimeira, vistos, invertido = false;
    function comecar(inv){
      invertido = inv;
      pilha = shuffled(base); total = pilha.length; acertosPrimeira = 0; vistos = {};
      mostrar();
    }
    function mostrar(){
      if(!pilha.length){ fim(); return; }
      const c = pilha[0];
      const pergunta = invertido ? c.verso : c.frente, resposta = invertido ? c.frente : c.verso;
      box.innerHTML =
        '<p class="cards-meta">'+(total - pilha.length)+' de '+total+' arrumados · '+(invertido ? 'qual é a palavra?' : 'o que quer dizer?')+'</p>'+
        '<button type="button" class="card-face" id="card-face" aria-live="polite"><span class="card-q">'+pergunta+'</span>'+
        '<span class="card-hint">Diz a resposta em voz alta. Depois toca para virar.</span></button>'+
        '<div class="card-actions" id="card-actions" hidden>'+
          '<button type="button" class="ghost-btn" id="card-nao">😕 Ainda não sabia</button>'+
          '<button type="button" class="cta" id="card-sim">😀 Já sabia</button></div>';
      const face = document.getElementById("card-face");
      face.addEventListener("click", function(){
        if(face.classList.contains("virado")) return;
        face.classList.add("virado");
        face.innerHTML = '<span class="card-q small">'+pergunta+'</span><span class="card-a">'+resposta+'</span>';
        document.getElementById("card-actions").hidden = false;
        document.getElementById("card-sim").focus();
      });
      document.getElementById("card-sim").addEventListener("click", function(){
        if(!vistos[c.frente]) acertosPrimeira++;
        pilha.shift(); mostrar();
      });
      document.getElementById("card-nao").addEventListener("click", function(){
        vistos[c.frente] = true;
        pilha.push(pilha.shift()); mostrar();
      });
      face.focus();
    }
    function fim(){
      const nao = total - acertosPrimeira;
      MissaoArmazem.atualizar("cartoes", {}, function(c){ c[w.id] = {nao:nao, total:total, data:new Date().toLocaleDateString("pt-PT")}; return c; });
      box.innerHTML =
        '<p class="cards-end">🎉 Arrumaste os '+total+' cartões!</p>'+
        '<p class="cards-meta">Sabias '+acertosPrimeira+' à primeira. Os outros ficaram no fim da pilha até os saberes. Volta a treinar amanhã: lembrar com uns dias de intervalo é o que fixa a matéria.</p>'+
        '<div class="card-actions">'+
          '<button type="button" class="ghost-btn" id="card-outra">🔁 Outra vez</button>'+
          '<button type="button" class="cta" id="card-inv">🔄 Agora ao contrário</button></div>';
      document.getElementById("card-outra").addEventListener("click", function(){ comecar(invertido); });
      document.getElementById("card-inv").addEventListener("click", function(){ comecar(!invertido); });
    }
    comecar(false);
  }

  /* ---------- ✈️ Modo foco: one study session framed as a flight, then a pause ----------
     Real distances (straight line, rounded). The end time is kept in sessionStorage, so a reload in the
     same tab does not lose the flight; if storage is unavailable it simply lives in memory. */
  const VOOS = [
    {min:15, de:"Lisboa", para:"Porto", em:"no Porto", km:270},
    {min:25, de:"Lisboa", para:"Funchal", em:"no Funchal", km:970},
    {min:40, de:"Lisboa", para:"Ponta Delgada", em:"em Ponta Delgada", km:1450}
  ];
  let focoTimer = null, focoBar = null;
  function focoGuardar(v){ try{ if(v) sessionStorage.setItem("foco_voo", JSON.stringify(v)); else sessionStorage.removeItem("foco_voo"); }catch(e){} }
  function focoLer(){ try{ return JSON.parse(sessionStorage.getItem("foco_voo") || "null"); }catch(e){ return null; } }
  function openFocoModal(triggerEl){
    if(focoLer()){ showToast("✈️ Já estás em voo — vê a barra em baixo."); return; }
    openModal("✈️ Modo foco",
      '<p style="margin:0 0 10px">Escolhe uma viagem. Enquanto o avião voa, estudas <b>só uma coisa</b>. Quando aterrares, fazes uma pausa.</p>'+
      '<label class="foco-lbl" for="foco-tarefa">O que vais estudar nesta viagem?</label>'+
      '<input id="foco-tarefa" class="foco-input" type="text" maxlength="60" placeholder="Ex.: Mundo 5 — os exemplos 7 e 8">'+
      '<p class="note-small" style="margin:8px 0 12px">Antes de descolar: telemóvel noutra divisão, água ao lado, caderno e lápis à mão.</p>'+
      '<div class="foco-voos">'+VOOS.map(function(v, i){
        return '<button type="button" class="foco-voo" data-i="'+i+'"><b>'+v.min+' min</b><small>'+v.de+' → '+v.para+' · cerca de '+v.km+' km</small></button>';
      }).join("")+'</div>', triggerEl);
    document.querySelectorAll(".foco-voo").forEach(function(b){
      b.addEventListener("click", function(){
        const v = VOOS[+b.dataset.i];
        const tarefa = (document.getElementById("foco-tarefa").value || "").trim();
        const voo = {min:v.min, de:v.de, para:v.para, em:v.em, km:v.km, tarefa:tarefa, fim:Date.now() + v.min*60000};
        focoGuardar(voo); closeModal(); focoArrancar(voo);
        showToast("🛫 Descolagem! Bom estudo.");
      });
    });
  }
  function focoArrancar(voo){
    if(!focoBar){
      focoBar = document.createElement("div");
      focoBar.className = "foco-bar"; focoBar.setAttribute("role","status");
      document.body.appendChild(focoBar);
    }
    focoBar.innerHTML =
      '<span class="foco-rota">✈️ '+escXml(voo.de)+' → '+escXml(voo.para)+(voo.tarefa ? ' · <i>'+escXml(voo.tarefa)+'</i>' : '')+'</span>'+
      '<span class="foco-pista" aria-hidden="true"><span class="foco-aviao" id="foco-aviao">✈️</span></span>'+
      '<b class="foco-relogio" id="foco-relogio"></b>'+
      '<button type="button" class="ghost-btn" id="foco-parar">Aterrar já</button>';
    focoBar.hidden = false; document.body.classList.add("foco-on");
    document.getElementById("foco-parar").addEventListener("click", function(){ focoFim(voo, false); });
    function tick(){
      const resta = Math.max(0, voo.fim - Date.now()), totalMs = voo.min*60000;
      const s = Math.ceil(resta/1000);
      const rel = document.getElementById("foco-relogio"), av = document.getElementById("foco-aviao");
      if(rel) rel.textContent = String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
      if(av) av.style.left = (100 * (1 - resta/totalMs)).toFixed(1)+"%";
      if(resta <= 0) focoFim(voo, true);
    }
    clearInterval(focoTimer); focoTimer = setInterval(tick, 1000); tick();
  }
  function focoFim(voo, completo){
    clearInterval(focoTimer); focoTimer = null; focoGuardar(null);
    if(focoBar) focoBar.hidden = true; document.body.classList.remove("foco-on");
    const feitos = Math.round((voo.min*60000 - Math.max(0, voo.fim - Date.now()))/60000);
    if(completo) playChime();
    openModal(completo ? "🛬 Aterraste "+(voo.em || "em "+voo.para)+"!" : "🛬 Aterragem antecipada",
      '<p style="margin:0 0 10px">'+(completo
        ? 'Estudaste <b>'+voo.min+' minutos</b> seguidos e voaste cerca de <b>'+voo.km+' km</b>. Boa!'
        : 'Estudaste cerca de <b>'+feitos+' minuto'+(feitos===1?'':'s')+'</b>. Não faz mal: cada voo conta.')+'</p>'+
      (voo.tarefa ? '<p class="note-small" style="margin:0 0 10px">Missão do voo: <i>'+escXml(voo.tarefa)+'</i>. Conseguiste? Escreve no caderno uma coisa que aprendeste.</p>' : '')+
      '<p style="margin:0 0 14px">Agora o cérebro precisa de uma pausa curta, longe do ecrã.</p>'+
      '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button type="button" class="cta" id="foco-pausa">⏸️ Fazer uma pausa</button><button type="button" class="ghost-btn" id="foco-fechar">Fechar</button></div>');
    document.getElementById("foco-pausa").addEventListener("click", function(){ openBreakModal(); });
    document.getElementById("foco-fechar").addEventListener("click", closeModal);
  }

  function escXml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

  function buildRouteSvg(route, uid){
    const stops = route.stops;
    const n = stops.length;
    const stepW = 128;
    const W = stepW*(n-1) + 76;
    const H = 96;
    const y = 32;
    const markerId = "route-arrow-"+uid;
    let parts = [];
    parts.push('<defs><marker id="'+markerId+'" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>');
    parts.push('<line x1="38" y1="'+y+'" x2="'+(W-38)+'" y2="'+y+'" stroke="currentColor" stroke-width="2" opacity="0.3" marker-end="url(#'+markerId+')"/>');
    stops.forEach((s,i)=>{
      const cx = 38 + i*stepW;
      parts.push('<circle cx="'+cx+'" cy="'+y+'" r="19" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/>');
      parts.push('<text x="'+cx+'" y="'+(y+6)+'" text-anchor="middle" font-size="16">'+escXml(s.icon)+'</text>');
      parts.push('<text x="'+cx+'" y="'+(y+36)+'" text-anchor="middle" font-size="10.5" font-family="Lexend, sans-serif" font-weight="700">'+escXml(s.label)+'</text>');
      if(s.sub){ parts.push('<text x="'+cx+'" y="'+(y+48)+'" text-anchor="middle" font-size="9" opacity="0.65">'+escXml(s.sub)+'</text>'); }
    });
    const labelSeq = stops.map(s=>s.label).join(" → ");
    return '<svg class="route-svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+escXml(route.title+": "+labelSeq)+'">'+parts.join("")+'</svg>';
  }

  function buildAfricaMiniMap(highlightKey){
    const points = {
      guine:{cx:48, cy:52, label:"Guiné-Bissau"},
      angola:{cx:68, cy:138, label:"Angola"},
      mocambique:{cx:152, cy:142, label:"Moçambique"}
    };
    let parts = [];
    parts.push('<path d="M60,22 C90,12 130,17 150,37 C170,57 165,92 175,122 C185,152 170,182 140,187 C110,192 90,177 70,182 C45,187 30,162 35,132 C40,102 20,82 30,57 C38,37 40,27 60,22 Z" fill="var(--surface-2)" stroke="var(--border)" stroke-width="1.5"/>');
    parts.push('<text x="110" y="14" text-anchor="middle" font-size="9" opacity="0.6">África (esquema, não à escala)</text>');
    Object.keys(points).forEach(k=>{
      const p = points[k];
      const active = k===highlightKey;
      const r = active ? 9 : 5.5;
      parts.push('<circle cx="'+p.cx+'" cy="'+p.cy+'" r="'+r+'" fill="'+(active?"var(--accent)":"var(--border)")+'" opacity="'+(active?1:0.55)+'"'+(active?' stroke="var(--surface)" stroke-width="2"':'')+'/>');
      const labelY = p.cy + (active?18:14);
      parts.push('<text x="'+p.cx+'" y="'+labelY+'" text-anchor="middle" font-size="'+(active?"9.5":"8")+'" font-weight="'+(active?"700":"400")+'" opacity="'+(active?1:0.6)+'">'+escXml(p.label)+'</text>');
    });
    const activeLabel = (points[highlightKey]||{label:""}).label;
    return '<svg class="modal-map" viewBox="0 0 220 205" role="img" aria-label="Mapa esquemático de África com a localização de '+escXml(activeLabel)+' assinalada."><title>Mapa esquemático de África, sem escala exata</title>'+parts.join("")+'</svg>';
  }

  function buildAcroModalHtml(popup){
    let html = buildAfricaMiniMap(popup.mapKey);
    html += '<div class="modal-acro-list">' + popup.acronyms.map(function(pair){
      return '<div class="modal-acro-item"><b>'+pair[0]+'</b> — '+pair[1]+'</div>';
    }).join("") + '</div>';
    return html;
  }

  function buildBioModalHtml(popup){
    let html = '<div class="modal-portrait" style="display:flex;align-items:center;justify-content:center;font-size:44px;background:var(--surface-2);border:2px solid var(--border-soft);">'+(popup.icon||"🧑")+'</div>';
    const meta = [popup.dates, popup.role].filter(Boolean).join(" · ");
    html += '<p class="modal-bio-meta">'+meta+'<br><span style="opacity:.75">ícone ilustrativo — não é uma fotografia</span></p>';
    html += '<p>'+popup.bio+'</p>';
    if(popup.facts && popup.facts.length){
      html += '<ul style="margin:8px 0 0;padding-left:1.1em;display:flex;flex-direction:column;gap:6px;">'+popup.facts.map(function(f){ return '<li>'+f+'</li>'; }).join("")+'</ul>';
    }
    return html;
  }

  function buildGlossModalHtml(def, icon){
    let html = '<div class="modal-portrait" style="display:flex;align-items:center;justify-content:center;font-size:40px;background:var(--surface-2);border:2px solid var(--border-soft);">'+(icon||"📖")+'</div>';
    html += '<p>'+def+'</p>';
    return html;
  }

  function buildDiagramModalHtml(def, popup){
    let html = popup.svg;
    html += '<p>'+def+'</p>';
    return html;
  }

  function subjectStats(worlds, state){
    let total=0, done=0, nextWorld=null;
    worlds.forEach(w=>{
      let wTotal=0, wDone=0;
      w.missions.forEach((m,i)=>{ total++; wTotal++; if(state[w.id+"-"+i]){ done++; wDone++; } });
      if(!nextWorld && wDone<wTotal) nextWorld = w;
    });
    return {total,done,nextWorld};
  }


  /* ---------- the one-line strip at the top: streak · progress · suggestion ---------- */
  function renderTodayPanel(){
    const panel = document.getElementById("today-panel");
    if(!panel) return;
    let total=0, done=0, next=null;
    MISSAO_SUBJECTS.forEach(function(s){
      const st = subjectStats(s.worlds, store(s.store));
      total += st.total; done += st.done;
      if(!next && st.nextWorld) next = {s:s, w:st.nextWorld};
    });
    const pct = total? Math.round(done/total*100) : 0;
    const streak = computeStreak();
    panel.innerHTML =
      (streak>0
        ? '<span>🔥 <b>'+streak+' dia'+(streak===1?'':'s')+'</b> seguido'+(streak===1?'':'s')+'</span>'
        : '<span>✨ Começa hoje, sem pressão</span>')+
      '<span class="mini" role="progressbar" aria-label="Missões feitas" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct+'"><span style="width:'+pct+'%"></span></span>'+
      '<span><b>'+done+'/'+total+'</b> missões</span>'+
      (next
        ? '<a href="#'+next.s.key+'/'+next.w.id+'">Sugestão: '+next.w.icon+' Mundo '+next.w.num+' de '+next.s.name+' →</a>'
        : '<span>🎉 Fizeste tudo! Boa altura para a Revisão Final.</span>');
  }

  function shuffled(list){
    const a = list.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; }
    return a;
  }

  /* ---------- quiz: one question at a time (world quizzes and the Revisão Final) ---------- */
  function mountQuiz1(box, o){
    // o: {title(), questions(), extra: element or null, label(q)}
    let qs = [], i = 0, score = 0, results = [];
    box.classList.add("q1");
    function dotsHtml(){
      return '<div class="dots" aria-hidden="true">'+qs.map(function(q,k){
        return '<i class="'+(k<results.length ? (results[k]?"ok":"no") : (k===i?"cur":""))+'"></i>';
      }).join("")+'</div>';
    }
    function head(){
      const top = el("div","top",'<b class="q1-title">'+o.title()+'</b>'+dotsHtml());
      if(o.extra) top.appendChild(o.extra);
      return top;
    }
    function start(){
      qs = o.questions().map(shuffleQuizOptions); i = 0; score = 0; results = [];
      paint();
    }
    function paint(){
      box.innerHTML = "";
      box.appendChild(head());
      if(i >= qs.length){ finish(); return; }
      const q = qs[i];
      box.appendChild(el("p","qprompt",(i+1)+" de "+qs.length+" · "+(o.label ? o.label(q) : "")+q.q));
      const opts = el("div","qoptions");
      q.opts.forEach(function(t,oi){
        const b = el("button","qopt",t); b.type = "button";
        if(oi===q.correct) b.setAttribute("data-correct","true");
        opts.appendChild(b);
      });
      const fb = el("div","qfeedback","");
      fb.setAttribute("aria-live","polite");
      const row = el("div","next-step");
      const next = el("button","cta", i+1<qs.length ? "Próxima →" : "Ver resultado →");
      next.type = "button"; next.hidden = true;
      next.addEventListener("click", function(){ i++; paint(); });
      row.appendChild(next);
      opts.addEventListener("click", function(e){
        const btn = e.target.closest(".qopt");
        if(!btn || btn.disabled) return;
        const chosen = Array.prototype.indexOf.call(opts.children, btn);
        Array.prototype.forEach.call(opts.children, function(b,k){
          b.disabled = true;
          if(k===q.correct) b.classList.add("correct"); else if(k===chosen) b.classList.add("wrong");
        });
        const ok = chosen===q.correct;
        results.push(ok); if(ok) score++;
        if(o.onAnswer) o.onAnswer(q, ok);
        fb.textContent = (ok ? "Boa! 🎉 " : "Quase! ") + q.explain;
        const d = box.querySelector(".dots"); if(d) d.outerHTML = dotsHtml();
        next.hidden = false; next.focus({preventScroll:true});
      });
      box.appendChild(opts); box.appendChild(fb); box.appendChild(row);
    }
    function finish(){
      const n = qs.length;
      const msg = score===n ? "🏆 Perfeito! "+score+"/"+n
        : score>=n*0.6 ? "⭐ Muito bem! "+score+"/"+n
        : "💪 "+score+"/"+n+" — cada erro ensina qualquer coisa. Vale a pena tentar outra vez.";
      box.appendChild(el("p","q1-end",msg));
      if(o.again !== false){
        const again = el("button","wheel-btn","🔁 Outra vez, com as perguntas baralhadas");
        again.type = "button";
        again.addEventListener("click", start);
        box.appendChild(again);
      }
      if(n && score===n){ playChime(); burstConfetti(); }
      if(o.onFinish) o.onFinish(score, n, box);
    }
    start();
    return {restart:start};
  }

  /* ---------- "🔥 Mais difícil": swaps every quiz for the harder question bank (was the Modo Desafio button) ---------- */
  const quizRefreshers = [];
  // every answer (world quizzes, Revisão Final, Missão de hoje) feeds the spaced repetition of banco.js
  function registarResposta(q, ok){ if(window.MissaoBanco) MissaoBanco.registar(q, ok); }
  const challengeToggles = [];
  function makeChallengeToggle(){
    const t = el("button","toggle","");
    t.type = "button";
    t.addEventListener("click", function(){
      missaoSetChallenge(!missaoChallengeOn());
      challengeToggles.forEach(paintChallengeToggle);
      quizRefreshers.forEach(function(f){ f(); });
      showToast(missaoChallengeOn() ? "🔥 Perguntas trocadas por outras mais difíceis!" : "✅ De volta às perguntas normais.");
    });
    challengeToggles.push(t);
    paintChallengeToggle(t);
    return t;
  }
  function paintChallengeToggle(t){
    const on = missaoChallengeOn();
    t.classList.toggle("on", on);
    t.setAttribute("aria-pressed", on ? "true" : "false");
    t.textContent = on ? "✅ Perguntas normais" : "🔥 Mais difícil";
    t.title = on ? "Voltar às perguntas normais" : "Trocar por perguntas novas e mais difíceis";
  }

  /* ---------- Portal Explorador (go deeper) ---------- */
  function buildPortalHtml(w){
    const x = missaoExtra(w).explorar;
    if(!x) return '<p>Ainda não há conteúdo extra para este mundo.</p>';
    let html = '<p class="portal-next"><b>🚀 O que vem a seguir</b><br>'+escXml(x.proximo)+'</p>';
    if(x.pontos && x.pontos.length){
      html += '<p class="portal-sub">🤔 Perguntas para investigares</p><ul class="portal-qs">'+
        x.pontos.map(function(p){ return '<li>'+escXml(p)+'</li>'; }).join("")+'</ul>';
    }
    if(x.links && x.links.length){
      html += '<p class="portal-sub">🔗 Fontes de confiança</p><div class="res-grid">'+
        x.links.map(function(l){
          const k = missaoLink(l);
          return '<a class="res-card portal-link" href="'+escXml(k.href)+'" target="_blank" rel="noopener noreferrer">'+
            '<span class="res-icon" aria-hidden="true">'+(k.direct ? '🌐' : '🔎')+'</span><span class="res-text"><b>'+escXml(k.label)+'</b>'+
            '<span class="res-site">'+escXml(k.site)+(k.lang?' · '+k.lang:'')+' ↗</span></span></a>';
        }).join("")+'</div>'+
        '<p class="res-note">Abrem numa aba nova, fora da Missão Escolar. Os sites marcados com EN estão em inglês — boa forma de treinar!</p>';
    }
    return html;
  }

  /* ---------- curiosities (always with a source) ---------- */
  function curioHtml(c){
    return '<p class="curio-text">'+escXml(c.t)+'</p><p class="curio-src">📚 Fonte: '+escXml(c.fonte)+'</p>';
  }
  function openCurioModal(w, triggerEl){
    const list = missaoExtra(w).curiosidades || [];
    if(!list.length) return;
    let i = Math.floor(Math.random()*list.length);
    openModal("💡 Sabias que…?", '<div id="curio-body">'+curioHtml(list[i])+'</div>'+
      (list.length>1 ? '<button type="button" class="wheel-btn" id="curio-next">Outra curiosidade →</button>' : ''), triggerEl);
    const next = document.getElementById("curio-next");
    if(next) next.addEventListener("click", function(){
      i = (i+1) % list.length;
      document.getElementById("curio-body").innerHTML = curioHtml(list[i]);
    });
  }

  /* small card that slides in after a mission is ticked — never blocks the page */
  let curioCardEl = null, curioCardTimer = null;
  function curioCardsOff(){ return MissaoArmazem.lerTexto("curio_cards_off", "0")==="1"; }
  function showCurioCard(w){
    const list = missaoExtra(w).curiosidades || [];
    if(!list.length || curioCardsOff()) return;
    const c = list[Math.floor(Math.random()*list.length)];
    if(!curioCardEl){
      curioCardEl = el("aside","curio-card");
      curioCardEl.setAttribute("role","status");
      curioCardEl.setAttribute("aria-live","polite");
      document.body.appendChild(curioCardEl);
    }
    curioCardEl.style.setProperty("--wc","var(--"+w.c+")");
    curioCardEl.style.setProperty("--wc-bg","var(--"+w.c+"-bg)");
    curioCardEl.innerHTML = '<p class="curio-title">💡 Sabias que…?</p>'+curioHtml(c)+
      '<div class="curio-actions"><button type="button" data-act="close">Fechar</button><button type="button" data-act="off">Não mostrar mais</button></div>';
    curioCardEl.classList.add("show");
    curioCardEl.querySelector('[data-act="close"]').addEventListener("click", hideCurioCard);
    curioCardEl.querySelector('[data-act="off"]').addEventListener("click", function(){
      MissaoArmazem.gravarTexto("curio_cards_off","1");
      hideCurioCard();
      showToast("Ok! Continuas a ver curiosidades no botão 💡 de cada mundo.");
    });
    clearTimeout(curioCardTimer);
    curioCardTimer = setTimeout(hideCurioCard, 20000);
  }
  function hideCurioCard(){ if(curioCardEl) curioCardEl.classList.remove("show"); }

  /* ---------- 📷 Ver de perto: real photos and micrographs of each world (data/imagens.js) ---------- */
  function imgList(w){ return (typeof MISSAO_IMAGENS !== "undefined" && MISSAO_IMAGENS[w.id]) || []; }
  const MICRO_TXT = {otico:"🔬 microscópio ótico", eletronico:"🔬 microscópio eletrónico"};
  // our own drawings say so, so that a child never takes them for a photograph or a micrograph
  const ILUSTRACAO_TXT = "✏️ ilustração, não é fotografia";
  function buildGaleria(w){
    const list = imgList(w);
    if(!list.length) return null;
    const wrap = el("div","galeria");
    wrap.appendChild(el("p","subhead",'📷 Ver de perto <small class="muted">— imagens reais; toca para ampliar</small>'));
    const row = el("div","gal-row");
    list.forEach(function(im, i){
      const b = el("button","gal-item"+(im.m ? " micro" : ""),
        '<span class="gal-pic"><img src="'+im.f+'" alt="" loading="lazy"></span>'+
        '<span class="gal-cap">'+escXml(im.t)+(im.m ? '<small>'+MICRO_TXT[im.m]+'</small>' : im.il ? '<small>'+ILUSTRACAO_TXT+'</small>' : '')+'</span>');
      b.type = "button";
      b.setAttribute("aria-label", im.t+" — ampliar");
      b.addEventListener("click", function(){ openLightbox(list, i, b, w.id); });
      row.appendChild(b);
    });
    wrap.appendChild(row);
    return wrap;
  }
  let lb = null;
  /* ✏️ a suggested activity for every image: its own (im.act) or one that suits the kind of image and the subject */
  const ATIVIDADES = {
    micro: "<b>Desenho de observação</b>, como num caderno de ciências: desenha um círculo grande (é o que se vê pelo microscópio) e, dentro, só o que vês, a lápis; pinta com as cores verdadeiras. Põe 2 ou 3 legendas com setas e escreve o nome e o tipo de microscópio. Por baixo: a data, uma coisa que aprendeste e uma pergunta que te ficou.",
    ilustracao: "<b>Desenhar de memória</b>: olha 1 minuto para a imagem, tapa-a e desenha-a com as legendas de que te lembrares. Depois destapa, compara e acrescenta com outra cor o que faltava. O que esqueceste é o que precisas de rever.",
    ciencias: "<b>Esboço científico</b>: desenha o que vês a lápis, com rigor (a forma e o tamanho contam mais do que a beleza) e legenda 3 partes com setas. Ao lado, escreve a cor, a forma, a textura e o tamanho aproximado.",
    historia: "<b>Detetive da imagem</b>: escreve no caderno: o que vejo (pessoas, objetos, lugares)? Quando foi? Onde? Quem fez esta imagem, e para quê: para informar, para elogiar alguém, para convencer? Porque é importante para a história de Portugal? Termina com uma legenda de jornal, numa só frase.",
    matematica: "<b>A matemática escondida</b>: desenha a imagem e marca a matemática que encontras (formas, padrões, números, medidas). Depois inventa um problema com ela, resolve-o e dá-o a alguém da família para resolver.",
    portugues: "<b>Descrever</b>: escreve um parágrafo de 5 frases sobre a imagem, do geral para o pormenor, com pelo menos 3 adjetivos e uma comparação («parece…», «como…»).",
    ingles: "<b>Describe it in English</b>: write 3 sentences: «In this picture I can see…», «There is / There are…», «I think it is… because…». Then read them aloud.",
    socorros: "<b>Ensinar alguém</b>: com um adulto, pratica o que vês na imagem e depois explica-o por palavras tuas, como se ensinasses um colega."
  };
  function atividade(im, wid){
    if(im.act) return im.act;
    if(im.m) return ATIVIDADES.micro;
    if(wid === "c9") return ATIVIDADES.socorros;
    const disc = {c:"ciencias", g:"ciencias", m:"historia", n:"matematica", p:"portugues", e:"ingles"}[String(wid).charAt(0)] || "ciencias";
    if(im.il && disc === "ciencias") return ATIVIDADES.ilustracao;
    return ATIVIDADES[disc];
  }
  /* ---------- 🧠 "Pensa como…": one thinking routine per subject, tied to the world's own content ---------- */
  const semIcone = s => String(s).replace(/^[^A-Za-zÀ-ÿ0-9]+/, "").trim();
  function passos(lista){ return '<ol class="metodo-passos">'+lista.map(function(p){ return '<li>'+p+'</li>'; }).join("")+'</ol>'; }
  function buildMetodo(w, key){
    let titulo, origem, corpo;
    const cmp = w.compare ? [semIcone(w.compare.left.title), semIcone(w.compare.right.title)] : null;
    if(key === "math"){
      titulo = "🧠 Pensa como um matemático"; origem = "a resolução de problemas das aulas de Matemática no Japão";
      const ex = (w.posters || [])[0];
      corpo = '<p><b>Problema:</b> '+(ex ? 'o «'+escXml(semIcone(ex.title))+'», no 📖 Aprender. Tapa a resolução.' : 'a pergunta do Testa-te que achaste mais difícil.')+'</p>'+
        passos(["<b>Sozinho primeiro:</b> tenta resolver sem ajuda, durante uns minutos. Errar faz parte.",
                "<b>De outra maneira:</b> resolve outra vez, com outro caminho (um desenho, uma tabela, outra conta).",
                "<b>Compara</b> as duas maneiras: dão o mesmo resultado? Qual é a mais rápida? Qual é a mais fácil de explicar?",
                "<b>A regra numa frase:</b> escreve no caderno o que aprendeste, como se fosse para um colega."]);
    } else if(key === "cn" || key === "cn7"){
      titulo = "🧠 Pensa como um cientista"; origem = "a escrita científica das escolas dos EUA: afirmação, prova e raciocínio";
      corpo = '<p><b>Pergunta:</b> '+(cmp ? 'qual é a diferença mais importante entre «'+escXml(cmp[0])+'» e «'+escXml(cmp[1])+'»?' : 'escolhe uma frase do resumo «Para o teste» e prova-a.')+'</p>'+
        passos(["<b>Afirmação:</b> responde numa frase. «Eu afirmo que…»",
                "<b>Prova:</b> o que mostra que é verdade? Uma imagem do 📷 Ver de perto, uma animação ou uma experiência. «A prova é…»",
                "<b>Raciocínio:</b> porque é que essa prova mostra que tens razão? Usa uma regra da ciência. «Isto acontece porque…»"]);
      const m = (typeof MISSAO_CER !== "undefined") && MISSAO_CER[w.id];
      if(m) corpo += '<details class="modelo"><summary>👀 Ver uma resposta-modelo <small>(só depois de escreveres a tua)</small></summary>'+
        '<p><b>Afirmação:</b> '+escXml(m.a)+'</p><p><b>Prova:</b> '+escXml(m.p)+'</p><p><b>Raciocínio:</b> '+escXml(m.r)+'</p>'+
        '<p class="modelo-nota">Compara com a tua: tens as três partes? A tua prova é uma observação ou uma experiência? O teu raciocínio usa uma regra da ciência?</p></details>';
    } else if(key === "hgp"){
      titulo = "🧠 Pensa como um historiador"; origem = "o método «Ler como um historiador» da Universidade de Stanford (EUA)";
      corpo = '<p><b>Fonte:</b> uma imagem do 📷 Ver de perto deste mundo, ou um documento do teu manual.</p>'+
        passos(["<b>Quem fez a fonte?</b> Quando, e para quê? Essa pessoa tinha interesse em contar a história de certa maneira?",
                "<b>Contexto:</b> o que se passava em Portugal nessa altura? Usa a linha do tempo deste mundo.",
                "<b>Confirma:</b> outra fonte, ou o resumo, diz o mesmo? Em que é que diferem?",
                "<b>Lê com atenção:</b> que palavras ou pormenores mostram o ponto de vista de quem a fez?"]);
    } else {
      const g = (w.gloss || [])[Math.floor(Math.random() * (w.gloss || []).length)];
      const ing = key === "eng";
      titulo = ing ? "🧠 Word map" : "🧠 Mapa da palavra"; origem = "o «modelo de Frayer», usado nas escolas dos EUA para aprender vocabulário";
      corpo = (g ? '<p><b>'+(ing ? "Word" : "Palavra")+':</b> «'+escXml(g[0])+'»</p>' : '')+
        '<p>Num quadrado dividido em quatro, com a palavra no meio, escreve:</p>'+
        passos(ing ? ["<b>Meaning</b> in English, with your own words (then check the glossary).",
                      "<b>A drawing</b> or a symbol that helps you remember it.",
                      "<b>Examples:</b> 2 sentences using the word.",
                      "<b>Non-examples:</b> a word that is NOT the same, and why."]
                   : ["<b>O que quer dizer</b>, por palavras tuas (depois confirma no glossário).",
                      "<b>Características:</b> o que tem sempre?",
                      "<b>Exemplos:</b> 2 exemplos, ou uma frase de um texto.",
                      "<b>Não-exemplos:</b> uma coisa parecida que não é isto, e porquê."]);
    }
    const d = el("details","metodo");
    d.innerHTML = '<summary><b>'+titulo+'</b><small>Como fazem as escolas lá fora: '+origem+'</small></summary><div class="metodo-corpo">'+corpo+'</div>';
    return d;
  }

  /* ---------- 🧩 «Problema primeiro»: try alone, then compare two ways (neriage), then the rule in one sentence (matome) ---------- */
  function buildProblema(pr){
    const box = el("div","problema");
    box.innerHTML = '<p class="problema-t">🧩 Problema primeiro <small>tenta sozinho antes de leres a explicação, como nas aulas de Matemática no Japão</small></p>'+
      '<p class="problema-q">'+escXml(pr.q)+'</p>'+
      '<details><summary>💡 Preciso de uma pista</summary><p>'+escXml(pr.dica)+'</p></details>'+
      '<details><summary>👀 Já tentei: ver duas maneiras de resolver</summary><div class="problema-maneiras">'+
        pr.maneiras.map(function(x, i){ return '<div><b>Maneira '+(i+1)+': '+escXml(x[0])+'</b><p>'+x[1]+'</p></div>'; }).join("")+
      '</div><p><b>Resposta:</b> '+escXml(pr.resposta)+'</p><p class="problema-pergunta">Compara as duas maneiras: qual usaste? Qual achas mais rápida? E mais fácil de explicar?</p>'+
      '<p class="problema-regra"><b>📌 A regra numa frase:</b> '+escXml(pr.regra)+'</p></details>';
    return box;
  }

  /* ---------- 🎫 Bilhete de saída (Japanese furikaeri / US exit ticket), saved per world in the "caderno" ---------- */
  function buildBilhete(w){
    const box = el("div","bilhete");
    const PERG = [["a","O que aprendi","escreve de memória, sem espreitar o resumo"],["b","O que ainda não percebi bem",""],["c","O que quero saber a seguir",""]];
    const guardado = (MissaoArmazem.ler("caderno", {}) || {})[w.id] || {};
    box.innerHTML = '<p class="bilhete-t">🎫 Bilhete de saída <small>antes de saíres deste mundo: olhar para trás, como nas escolas do Japão</small></p>'+
      PERG.map(function(p){ return '<label><b>'+p[1]+'</b>'+(p[2] ? ' <small>('+p[2]+')</small>' : '')+'<textarea rows="2" data-k="'+p[0]+'">'+escXml(guardado[p[0]] || "")+'</textarea></label>'; }).join("")+
      '<div class="bilhete-fim"><small class="bilhete-ok" aria-live="polite">'+(guardado.data ? '✅ Guardado no caderno ('+escXml(guardado.data)+')' : '💾 Guarda-se sozinho no teu caderno enquanto escreves.')+'</small>'+
        '<a class="bilhete-link" href="caderno.html">📓 Ver o meu caderno</a></div>';
    // saved automatically while writing (a short pause after the last key), so nothing is lost and parents can see it
    let t = null;
    const ok = box.querySelector(".bilhete-ok");
    function guardar(){
      const e = {}; let algum = false;
      box.querySelectorAll("textarea").forEach(function(x){ e[x.dataset.k] = x.value.trim(); if(e[x.dataset.k]) algum = true; });
      e.data = new Date().toLocaleDateString("pt-PT");
      const r = MissaoArmazem.atualizar("caderno", {}, function(c){ if(algum) c[w.id] = e; else delete c[w.id]; return c; });
      ok.textContent = (r && r.ok === false) ? "⚠️ Não foi possível guardar agora" : (algum ? "✅ Guardado no caderno às "+new Date().toLocaleTimeString("pt-PT", {hour:"2-digit", minute:"2-digit"}) : "Bilhete vazio: saiu do caderno.");
    }
    box.querySelectorAll("textarea").forEach(function(x){
      x.addEventListener("input", function(){ ok.textContent = "✏️ A escrever…"; clearTimeout(t); t = setTimeout(guardar, 900); });
      x.addEventListener("blur", function(){ if(t){ clearTimeout(t); t = null; guardar(); } });
    });
    return box;
  }

  function openLightbox(list, i, trigger, wid){
    if(!lb){
      lb = el("div","lb-overlay");
      lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true"); lb.setAttribute("aria-label","Imagem ampliada");
      lb.innerHTML = '<div class="lb-box"><div class="lb-top"><p class="lb-n"></p><button type="button" class="lb-btn" data-a="zoom">🔍 Aproximar</button><button type="button" class="lb-btn" data-a="x" aria-label="Fechar">✕</button></div>'+
        '<div class="lb-stage"><img alt=""></div>'+
        '<div class="lb-nav"><button type="button" class="lb-btn" data-a="ant">← Anterior</button><button type="button" class="lb-btn" data-a="seg">Seguinte →</button></div>'+
        '<h3 class="lb-t"></h3>'+
        '<p class="lb-d"></p><div class="lb-act"><p class="lb-act-t">✏️ Atividade</p><p class="lb-act-d"></p></div><p class="lb-cred"></p></div>';
      document.body.appendChild(lb);
      lb.addEventListener("click", function(e){
        const b = e.target.closest("button");
        if(e.target === lb || (b && b.dataset.a === "x")) return closeLightbox();
        if(!b) return;
        if(b.dataset.a === "zoom"){
          // a photo is enlarged up to its real size (never stretched, which blurs it); a drawing (SVG) stays sharp at any size
          const img = lb.querySelector(".lb-stage img"), shown = img.getBoundingClientRect().width;
          const on = lb.classList.toggle("zoomed");
          img.style.width = on ? (/\.svg$/i.test(img.src) ? shown*2 : Math.max(img.naturalWidth, shown))+"px" : "";
          b.textContent = on ? "↩️ Afastar" : "🔍 Aproximar";
        }
        if(b.dataset.a === "ant") showLb(lb._i - 1);
        if(b.dataset.a === "seg") showLb(lb._i + 1);
      });
      lb.addEventListener("keydown", function(e){
        if(e.key === "Escape") closeLightbox();
        if(e.key === "ArrowLeft") showLb(lb._i - 1);
        if(e.key === "ArrowRight") showLb(lb._i + 1);
      });
    }
    lb._list = list; lb._trigger = trigger; lb._wid = wid;
    lb.hidden = false; document.body.classList.add("lb-open");
    showLb(i);
    lb.querySelector('[data-a="x"]').focus();
  }
  function showLb(i){
    const list = lb._list, n = list.length;
    i = (i + n) % n; lb._i = i;
    const im = list[i], lic = LIC[im.lic] || [im.lic, ""];
    lb.classList.remove("zoomed"); lb.querySelector('[data-a="zoom"]').textContent = "🔍 Aproximar";
    lb.classList.toggle("micro", !!im.m);
    const img = lb.querySelector(".lb-stage img"); img.style.width = ""; img.src = im.f; img.alt = im.t;
    lb.querySelector(".lb-n").textContent = (i+1)+" / "+n+(im.m ? " · "+MICRO_TXT[im.m] : im.il ? " · "+ILUSTRACAO_TXT : "");
    lb.querySelector(".lb-t").textContent = im.t;
    lb.querySelector(".lb-d").textContent = im.d;
    lb.querySelector(".lb-act-d").innerHTML = atividade(im, lb._wid);
    lb.querySelector(".lb-cred").innerHTML = (im.il ? "✏️ " : "📷 ")+escXml(im.cred)+" · "+(lic[1] ? '<a href="'+lic[1]+'" target="_blank" rel="noopener noreferrer">'+lic[0]+'</a>' : lic[0])+
      (im.src ? ' · <a href="'+escXml(im.src)+'" target="_blank" rel="noopener noreferrer">'+escXml(im.fonte || "Wikimedia Commons")+' ↗</a>' : '');
    lb.querySelector(".lb-nav").hidden = n < 2;
  }
  function closeLightbox(){
    if(!lb) return;
    lb.hidden = true; document.body.classList.remove("lb-open");
    if(lb._trigger && lb._trigger.focus) lb._trigger.focus({preventScroll:true});
  }

  /* ---------- 🧪 PhET simulations: loaded only when the child asks (they are big and need internet) ---------- */
  function buildSims(sims){
    const wrap = el("div","sims");
    wrap.appendChild(el("p","subhead",'🧪 Experimenta <small class="muted">— simulações interativas (precisam de internet)</small>'));
    const frame = el("div","sim-frame"); frame.hidden = true;
    sims.forEach(function(sm){
      const b = el("button","anim-thumb sim-btn",'<span class="play" aria-hidden="true">🧪</span><span><b>'+escXml(sm.t)+'</b><small>'+escXml(sm.d)+'</small></span>');
      b.type = "button";
      b.addEventListener("click", function(){
        const aberto = b.classList.contains("on");
        wrap.querySelectorAll(".sim-btn").forEach(function(x){ x.classList.remove("on"); });
        if(aberto){ frame.hidden = true; frame.innerHTML = ""; return; }
        b.classList.add("on");
        frame.innerHTML = '<div class="sim-box"><iframe src="'+sm.url+'" title="'+escXml(sm.t)+'" allowfullscreen loading="lazy"></iframe></div>'+
          '<p class="sim-cred"><a href="'+sm.url+'" target="_blank" rel="noopener noreferrer">⛶ Abrir em ecrã inteiro ↗</a> · Simulação PhET, University of Colorado Boulder · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></p>';
        frame.hidden = false;
        b.insertAdjacentElement("afterend", frame);
      });
      wrap.appendChild(b);
    });
    return wrap;
  }


  function clickable(node, fn){
    node.tabIndex = 0;
    node.setAttribute("role","button");
    node.addEventListener("click", fn);
    node.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); fn(); } });
  }

  /* ======================================================================
     One subject: a map of worlds → one world open at a time, in 3 stages
     (📖 Aprender · 🎯 Praticar · 🔭 Explorar) → Revisão Final
     ====================================================================== */
  function mountSubject(cfg){
    const state = store(cfg.storeKey); // confirmed persisted missions only
    const pendingMissions = new Map(), pendingWorlds = new Set();
    const worlds = cfg.worlds;
    const mapNav = document.getElementById(cfg.navId);
    const main = document.getElementById(cfg.mainId);
    const mapView = document.getElementById("map-"+cfg.key);
    const opened = {};            // world id -> setStage(k)
    let current = null;           // open world id, "revisao" or null (= map)

    function replaceState(novo){
      Object.keys(state).forEach(function(k){ delete state[k]; });
      Object.assign(state, novo);
    }
    function worldDone(w){ return w.missions.filter(function(m,i){ return state[w.id+"-"+i]; }).length; }
    function isComplete(w){ return w.missions.length>0 && worldDone(w)===w.missions.length; }

    function renderXP(){
      let total=0, max=0, mDone=0, mTotal=0;
      worlds.forEach(function(w){ w.missions.forEach(function(m,i){ max+=m.xp; mTotal++; if(state[w.id+"-"+i]){ total+=m.xp; mDone++; } }); });
      document.getElementById(cfg.xpTotalId).textContent = total;
      document.getElementById(cfg.xpMaxId).textContent = max;
      const c = document.getElementById("map-count-"+cfg.key);
      if(c) c.textContent = mDone+"/"+mTotal+" missões feitas";
    }
    function renderWorldProgress(w){
      const d = worldDone(w), n = w.missions.length;
      const p = document.getElementById("prog-"+w.id);
      if(p) p.textContent = (isComplete(w) ? "🏅 " : "🎯 ")+d+"/"+n;
      const m = document.getElementById("mcount-"+w.id);
      if(m) m.textContent = "· "+d+"/"+n+" feitas";
    }
    /* the goal chosen on the home page ("O que queres fazer agora?"). Every world stays open and in any order;
       the goal only decides where a world opens — "rever" and "teste" go straight to 🎯 Praticar */
    const GOALS = [["perceber","📖","Quero aprender","Explicações passo a passo","Toca no tema que quiseres: abre no 📖 Aprender, com exemplos resolvidos, animações e resumo."],
                   ["rever","🔁","Quero rever","Uma parte de cada vez","Toca no tema que queres rever: abre no 🎯 Praticar, só com esse tema."],
                   ["teste","📝","Tenho teste","Praticar o que já sei","Teste sobre um tema? Toca nesse tema: abre no 🎯 Praticar. Teste sobre tudo? Usa a 🏆 Revisão Final."]];
    function goal(){ const g = MissaoArmazem.lerTexto("home_intent", "perceber"); return GOALS.some(function(x){ return x[0]===g; }) ? g : "perceber"; }
    const goalBar = el("div","map-goal");
    mapNav.parentNode.insertBefore(goalBar, mapNav);
    // 💡 «Treina mais»: the worlds where this child showed most difficulty (dificuldades.js), right above the tiles
    const treinaBar = el("div","treina-mais"); treinaBar.hidden = true;
    mapNav.parentNode.insertBefore(treinaBar, mapNav);
    function renderMap(){
      const g = goal(), stage = g==="perceber" ? "" : "/praticar";
      const G = GOALS.find(function(x){ return x[0]===g; });
      goalBar.innerHTML = '<span class="gi" aria-hidden="true">'+G[1]+'</span><span><b>'+G[2]+'</b> · '+G[4]+'</span>'+
        '<a class="link-btn" href="index.html">Mudar</a>';
      const nx = worlds.find(function(w){ return !isComplete(w); });
      const dif = (typeof MissaoDificuldades !== "undefined") ? MissaoDificuldades.analisar([{worlds:worlds}]).slice(0, 3) : [];
      treinaBar.hidden = !dif.length;
      treinaBar.innerHTML = dif.length ? '<p class="tm-t">💡 Treina mais <small>— onde tiveste mais dúvidas</small></p><ul>'+
        dif.map(function(d){ return '<li><a href="#'+cfg.key+'/'+d.w.id+'/praticar" style="--wc:var(--'+d.w.c+')">'+d.w.icon+' Mundo '+d.w.num+': '+d.w.title+'</a> <small>'+d.motivos.join(" · ")+'</small></li>'; }).join("")+'</ul>' : '';
      let html = "";
      worlds.forEach(function(w){
        const d = worldDone(w), n = w.missions.length, done = isComplete(w), isNext = (w===nx);
        html += '<a class="tile'+(done?' done':'')+(isNext?' next':'')+'" href="#'+cfg.key+'/'+w.id+stage+'" style="--wc:var(--'+w.c+');--wc-bg:var(--'+w.c+'-bg)">'+
          '<span class="ic" aria-hidden="true">'+(done?'✓':w.icon)+'</span><small>Mundo '+w.num+'</small><b>'+w.title+'</b>'+
          '<span class="st">'+(done ? 'Concluído ⭐' : d+'/'+n+' missões')+(isNext ? ' · continua aqui' : '')+'</span></a>';
      });
      html += '<a class="tile review'+(g==="teste" ? ' next' : '')+'" href="#'+cfg.key+'/revisao">'+
        '<span class="ic" aria-hidden="true">🏆</span><small>Os '+worlds.length+' mundos</small><b>Revisão Final</b>'+
        '<span class="st">10 perguntas à mistura</span></a>';
      if(typeof MISSAO_FINAL !== "undefined" && MISSAO_FINAL[cfg.key])
        html += '<a class="tile review" href="#'+cfg.key+'/final"><span class="ic" aria-hidden="true">🧩</span><small>Vários mundos juntos</small><b>Missão Final</b>'+
          '<span class="st">'+MISSAO_FINAL[cfg.key].problemas.length+' problemas da vida real</span></a>';
      mapNav.innerHTML = html;
      main.querySelectorAll(".wjump a[data-w]").forEach(function(a){ a.href = "#"+cfg.key+"/"+a.dataset.w+stage; });
    }

    function worldTop(w, backLabel){
      const top = el("div","wtop");
      const back = el("a","ghost",backLabel || "← Mapa");
      back.href = "#"+cfg.key;
      top.appendChild(back);
      return top;
    }

    worlds.forEach(function(w, wi){
      const extra = missaoExtra(w);
      const curios = extra.curiosidades || [];
      const sec = el("section","wopen");
      sec.id = w.id; sec.hidden = true;
      sec.style.setProperty("--wc","var(--"+w.c+")");
      sec.style.setProperty("--wc-bg","var(--"+w.c+"-bg)");

      /* --- top bar: ← Mapa · title · missions · tools --- */
      const top = worldTop(w);
      top.appendChild(el("span","ic",w.icon));
      top.appendChild(el("div","grow",'<p class="eb">Mundo '+w.num+' · '+w.subtitle+'</p><h2>'+w.title+'</h2>'));
      const prog = el("span","wprog"); prog.id = "prog-"+w.id; prog.title = "Missões feitas";
      top.appendChild(prog);
      const tools = el("div","tools");
      const listen = el("button","tool","🔊"); listen.type = "button";
      listen.title = "Ouvir este mundo"; listen.setAttribute("aria-label","Ouvir este mundo");
      listen.addEventListener("click", function(){
        if(window.speechSynthesis && window.speechSynthesis.speaking){ window.speechSynthesis.cancel(); return; }
        speak(textoParaOuvir(w));
      });
      tools.appendChild(listen);
      if(curios.length){
        const cb = el("button","tool","💡"); cb.type = "button";
        cb.title = "Sabias que…?"; cb.setAttribute("aria-label","Sabias que…? Uma curiosidade");
        cb.addEventListener("click", function(){ openCurioModal(w, cb); });
        tools.appendChild(cb);
      }
      const sheet = el("a","tool","📄");
      sheet.href = "resumo.html?w="+encodeURIComponent(w.id);
      sheet.title = "Página-resumo (para imprimir)"; sheet.setAttribute("aria-label","Página-resumo deste mundo");
      tools.appendChild(sheet);
      top.appendChild(tools);
      sec.appendChild(top);

      /* --- jump to any theme: no order to follow (the hrefs follow the goal, set in renderMap) --- */
      const jump = el("nav","wjump");
      jump.setAttribute("aria-label","Ir para outro tema");
      jump.appendChild(el("span","wjump-t","Temas:"));
      worlds.forEach(function(o){
        const a = el("a","wj"+(o===w ? " on" : ""), '<span aria-hidden="true">'+o.icon+'</span>'+o.num);
        a.dataset.w = o.id; a.href = "#"+cfg.key+"/"+o.id;
        a.title = "Mundo "+o.num+": "+o.title; a.setAttribute("aria-label", a.title);
        if(o===w) a.setAttribute("aria-current","page");
        jump.appendChild(a);
      });
      const jr = el("a","wj review",'<span aria-hidden="true">🏆</span>Revisão'); jr.href = "#"+cfg.key+"/revisao";
      jump.appendChild(jr);
      sec.appendChild(jump);

      /* --- the card with the 3 stages --- */
      const card = el("div","wcard");
      const STAGES = [["aprender","📖 Aprender"],["praticar","🎯 Praticar"],["explorar","🔭 Explorar"]];
      const bar = el("div","stages");
      bar.setAttribute("role","tablist");
      const panes = {};
      STAGES.forEach(function(s, i){
        const b = el("button","stage",'<span class="n">'+(i+1)+'</span> '+s[1]);
        b.type = "button"; b.dataset.s = s[0];
        b.setAttribute("role","tab");
        b.addEventListener("click", function(){ setStage(s[0], true); });
        bar.appendChild(b);
        const p = el("div","pane"); p.dataset.p = s[0];
        p.setAttribute("role","tabpanel");
        panes[s[0]] = p;
      });
      card.appendChild(bar);
      STAGES.forEach(function(s){ card.appendChild(panes[s[0]]); });

      function setStage(k, byUser){
        let idx = STAGES.findIndex(function(s){ return s[0]===k; });
        if(idx<0){ idx = 0; k = "aprender"; }
        Array.prototype.forEach.call(bar.children, function(b, i){
          b.classList.toggle("on", i===idx);
          b.classList.toggle("ok", i<idx);
          b.setAttribute("aria-selected", i===idx ? "true" : "false");
        });
        Object.keys(panes).forEach(function(p){ panes[p].hidden = (p!==k); });
        if(byUser){
          history.replaceState(null, "", "#"+cfg.key+"/"+w.id+(k!=="aprender" ? "/"+k : ""));
          if(sec.getBoundingClientRect().top < 0) sec.scrollIntoView({block:"start"});
        }
      }
      opened[w.id] = setStage;
      function cta(text, k){
        const row = el("div","next-step");
        const b = el("button","cta",text); b.type = "button";
        b.addEventListener("click", function(){ setStage(k, true); });
        row.appendChild(b);
        return row;
      }
      function bigLink(icon, title, sub, fn){
        const b = el("button","anim-thumb solid",'<span class="play" aria-hidden="true">'+icon+'</span><span><b>'+title+'</b><small>'+sub+'</small></span>');
        b.type = "button";
        b.addEventListener("click", fn);
        return b;
      }

      /* ===== 1. 📖 Aprender ===== */
      const A = panes.aprender;
      A.appendChild(el("p","lead",w.lead));
      // Aprender is split into three short parts (one shown at a time), so the page is not one endless scroll:
      // 🧩 Começar (problem, animations, images) · ✏️ Exemplos (one worked example at a time) · 📋 Para o teste
      const secNav = el("div","subtabs aprender-tabs");
      secNav.setAttribute("role","tablist"); secNav.setAttribute("aria-label","Partes do Aprender");
      const secs = {};
      function addSec(key, label){
        const b = el("button","subtab",label); b.type = "button"; b.dataset.sec = key;
        b.setAttribute("role","tab"); b.id = "sec-"+w.id+"-"+key;
        b.addEventListener("click", function(){ setSec(key, true); });
        secNav.appendChild(b);
        const p = el("div","aprender-sec"); p.setAttribute("role","tabpanel"); p.setAttribute("aria-labelledby", b.id);
        secs[key] = p;
        return p;
      }
      function setSec(key, byUser){
        secNav.querySelectorAll(".subtab").forEach(function(b){
          const on = b.dataset.sec===key;
          b.classList.toggle("active", on); b.setAttribute("aria-selected", on ? "true" : "false");
        });
        Object.keys(secs).forEach(function(k){ secs[k].hidden = (k!==key); });
        if(byUser && secNav.getBoundingClientRect().top < 0) secNav.scrollIntoView({block:"start"});
      }
      function nextSec(text, key){
        const row = el("div","sec-next");
        const b = el("button","ghost-btn",text); b.type = "button";
        b.addEventListener("click", function(){ setSec(key, true); });
        row.appendChild(b);
        return row;
      }
      const nPosters = (w.posters||[]).length;
      const C = addSec("comecar", "🧩 Começar");
      const E = nPosters ? addSec("exemplos", "✏️ Exemplos ("+nPosters+")") : null;
      const T = addSec("teste", "📋 Para o teste");
      A.appendChild(secNav);
      Object.keys(secs).forEach(function(k){ A.appendChild(secs[k]); });

      const prob = (typeof MISSAO_PROBLEMAS !== "undefined") && MISSAO_PROBLEMAS[w.id];
      const F = formatosDe(w);
      if(F.primeiros || F.analogia || F.camadas) C.appendChild(buildMapaTema(F, cfg));
      if(prob) C.appendChild(buildProblema(prob));

      const anims = window.MissaoAnim ? MissaoAnim.doMundo(w.id) : [];
      if(anims.length){
        const list = el("div","anim-list");
        anims.forEach(function(a){
          const n = (a.passos||[]).length;
          const b = el("button","anim-btn anim-thumb",'<span class="play" aria-hidden="true">▶</span><span><b>'+a.titulo+'</b><small>Animação'+(n ? ' · '+n+' passos' : '')+' · abre aqui mesmo</small></span>');
          b.type = "button"; b.dataset.anim = a.id;
          b.addEventListener("click", function(){ MissaoAnim.abrir(a.id, b); });
          list.appendChild(b);
        });
        const slot = el("div","anim-slot");
        slot.setAttribute("data-anim-slot", w.id);
        list.appendChild(slot);
        C.appendChild(list);
      }

      const gal = buildGaleria(w);
      if(gal) C.appendChild(gal);

      // worked examples: one at a time, with ← → and "Exemplo k de n"
      if(E){
        const figs = [];
        (w.posters||[]).forEach(function(p){
          const fig = document.createElement("figure");
          fig.className = "poster-fig";
          const cap = document.createElement("figcaption");
          cap.textContent = p.title;
          fig.appendChild(cap);
          fig.insertAdjacentHTML("beforeend", p.svg);
          E.appendChild(fig);
          figs.push(fig);
        });
        const nav = el("div","ex-nav");
        const prev = el("button","ghost-btn","← Anterior"); prev.type = "button";
        const count = el("span","ex-count"); count.setAttribute("aria-live","polite");
        const next = el("button","ghost-btn",""); next.type = "button";
        nav.appendChild(prev); nav.appendChild(count); nav.appendChild(next);
        E.appendChild(nav);
        let k = 0;
        function showEx(i, byUser){
          k = i;
          figs.forEach(function(f, j){ f.hidden = (j!==i); });
          count.textContent = "Exemplo "+(i+1)+" de "+figs.length;
          prev.disabled = (i===0);
          next.textContent = (i===figs.length-1) ? "📋 Agora o resumo →" : "Seguinte →";
          if(byUser && secNav.getBoundingClientRect().top < 0) secNav.scrollIntoView({block:"start"});
        }
        prev.addEventListener("click", function(){ if(k>0) showEx(k-1, true); });
        next.addEventListener("click", function(){ if(k<figs.length-1) showEx(k+1, true); else setSec("teste", true); });
        showEx(0, false);
      }

      if(w.timeline && w.timeline.length){
        const tlWrap = el("div","");
        tlWrap.appendChild(el("p","subhead","🕰️ Linha do tempo"));
        const tl = el("div","timeline");
        w.timeline.forEach(function(ev){
          const item = el("div","tl-item");
          item.appendChild(el("div","tl-icon",ev.ic));
          item.appendChild(el("div","tl-date",ev.y));
          item.appendChild(el("div","tl-text",ev.t));
          tl.appendChild(item);
        });
        tlWrap.appendChild(tl);
        C.appendChild(tlWrap);
      }

      (w.routes||[]).forEach(function(route, ri){
        const fig = document.createElement("figure");
        fig.className = "route-fig";
        const cap = document.createElement("figcaption");
        cap.textContent = route.title;
        fig.appendChild(cap);
        fig.insertAdjacentHTML("beforeend", buildRouteSvg(route, w.id+"-"+ri));
        C.appendChild(fig);
      });

      if(w.distribution){
        const dWrap = el("div","");
        dWrap.appendChild(el("p","dist-title", w.distribution.title));
        const dbar = el("div","dist-bar");
        dbar.setAttribute("role","img");
        dbar.setAttribute("aria-label", w.distribution.segments.map(function(s){ return s.label+": "+s.pct+"%"; }).join(", "));
        w.distribution.segments.forEach(function(seg){
          const segEl = el("div","dist-seg "+(seg.tone||"accent"), seg.pct+"%");
          segEl.style.width = seg.pct+"%";
          dbar.appendChild(segEl);
        });
        dWrap.appendChild(dbar);
        const legend = el("div","dist-legend");
        w.distribution.segments.forEach(function(seg){
          const item = document.createElement("span");
          const dot = document.createElement("span"); dot.className = "dot";
          dot.style.background = seg.tone==="accent" ? "var(--wc)" : "var(--border)";
          item.appendChild(dot);
          item.appendChild(document.createTextNode(seg.label+(seg.note ? " — "+seg.note : "")));
          legend.appendChild(item);
        });
        dWrap.appendChild(legend);
        C.appendChild(dWrap);
      }

      if(w.members){
        const mWrap = el("div","");
        mWrap.appendChild(el("p","member-title", w.members.title));
        const grid = el("div","member-grid");
        w.members.items.forEach(function(it){
          const hasPopup = !!it.popup;
          const badge = el(hasPopup?"button":"span", "member-badge"+(hasPopup?" clickable":""));
          if(hasPopup) badge.type = "button";
          badge.innerHTML = '<span class="flag">'+it.flag+'</span><span>'+it.name+'</span>'+(hasPopup?' <span aria-hidden="true">🔍</span>':'');
          if(hasPopup) badge.addEventListener("click", function(){ openModal(it.popup.title || it.name, buildAcroModalHtml(it.popup), badge); });
          grid.appendChild(badge);
        });
        mWrap.appendChild(grid);
        C.appendChild(mWrap);
      }

      // "Para o teste": the real subject matter, with clickable terms
      const resumoWrap = el("div","");
      resumoWrap.appendChild(el("p","subhead","📋 Para o teste <small class=\"muted\">— toca nas palavras sublinhadas</small>"));
      const resumoBox = el("div","resumo");
      const ul = document.createElement("ul");
      w.resumo.forEach(function(line){
        const li = el("li","",line);
        ul.appendChild(li);
        Array.prototype.slice.call(li.querySelectorAll("b")).forEach(function(bEl){
          const entry = findGlossEntry(bEl.textContent, w.gloss);
          if(!entry) return;
          const def = entry[1], popup = entry[2];
          bEl.classList.add("term-toggle");
          if(popup && popup.bio){
            bEl.setAttribute("aria-haspopup","dialog");
            clickable(bEl, function(){ openModal((popup.name||entry[0]), buildBioModalHtml(popup), bEl); });
          } else if(popup && popup.svg){
            bEl.setAttribute("aria-haspopup","dialog");
            clickable(bEl, function(){ openModal(entry[0], buildDiagramModalHtml(def, popup), bEl); });
          } else {
            bEl.setAttribute("aria-expanded","false");
            const defLi = el("li","term-def","💬 "+def);
            li.insertAdjacentElement("afterend", defLi);
            clickable(bEl, function(){
              const isOpen = defLi.classList.toggle("open");
              bEl.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
          }
        });
      });
      resumoBox.appendChild(ul);
      resumoWrap.appendChild(resumoBox);
      if(F.sintese) T.appendChild(buildSintese(F.sintese));
      T.appendChild(resumoWrap);
      if(F.erros) T.appendChild(buildErros(F.erros));

      // key words as small chips (each opens its definition)
      if(w.gloss && w.gloss.length){
        const gWrap = el("div","");
        gWrap.appendChild(el("p","subhead","📖 Palavras-chave <small class=\"muted\">— toca para ver o que querem dizer</small>"));
        const chips = el("div","chips");
        w.gloss.forEach(function(g){
          const term = g[0], def = g[1], popup = g[2];
          const c = el("button","chip",term); c.type = "button";
          c.setAttribute("aria-haspopup","dialog");
          c.addEventListener("click", function(){
            if(popup && popup.bio) openModal((popup.name||term), buildBioModalHtml(popup), c);
            else if(popup && popup.svg) openModal(term, buildDiagramModalHtml(def, popup), c);
            else openModal(term, buildGlossModalHtml(def, (popup&&popup.icon)||w.icon), c);
          });
          chips.appendChild(c);
        });
        gWrap.appendChild(chips);
        T.appendChild(gWrap);
        // 🃏 retrieval practice with the same key words, one card at a time
        const atalho = el("button","ghost-btn cards-btn","🃏 Já leste? Treina estas palavras em cartões →"); atalho.type = "button";
        atalho.addEventListener("click", function(){ setStage("praticar", true); const c = document.getElementById("cartoes-"+w.id); if(c) c.scrollIntoView({block:"center"}); });
        T.appendChild(atalho);
      }
      if(C.children.length){
        C.appendChild(nextSec(E ? "Seguinte: ✏️ os exemplos resolvidos →" : "Seguinte: 📋 para o teste →", E ? "exemplos" : "teste"));
        setSec("comecar", false);
      } else {   // nothing to start with in this world: no empty tab
        secNav.removeChild(secNav.querySelector('[data-sec="comecar"]')); A.removeChild(C); delete secs.comecar;
        setSec(E ? "exemplos" : "teste", false);
      }
      A.appendChild(cta("Já li! Vamos praticar →", "praticar"));

      /* ===== 2. 🎯 Praticar ===== */
      const P = panes.praticar;
      const missionsWrap = el("div","");
      const subheadRow = el("div","subhead-row");
      subheadRow.appendChild(el("p","subhead",'🎯 Missões <small class="muted" id="mcount-'+w.id+'"></small>'));
      const wheelBtn = el("button","wheel-btn","🎲 Escolhe uma por mim");
      wheelBtn.type = "button";
      subheadRow.appendChild(wheelBtn);
      missionsWrap.appendChild(subheadRow);
      const missionsBox = el("div","missions");
      w.missions.forEach(function(m, i){
        const key = w.id+"-"+i;
        const row = el("div","mission");
        const cb = document.createElement("input");
        cb.type = "checkbox"; cb.id = "cb-"+key;
        cb.checked = !!state[key];
        const title = el("label","mtitle"+(cb.checked?" done":""), "Q"+(i+1)+" — "+m.t);
        title.htmlFor = cb.id;
        // what to do, in plain (not italic) text; instructions written on several lines become short steps
        const detail = el("div","mdetail", m.d);
        const passos = String(m.f).split("\n");
        if(passos.length > 1){
          const ul = el("ul","msteps");
          passos.forEach(function(p){ ul.appendChild(el("li","",p)); });
          detail.appendChild(ul);
        } else detail.appendChild(el("span","mtask"," · "+m.f));
        const xp = el("span","mxp","+"+m.xp+" XP");
        cb.addEventListener("change", function(){
          pendingMissions.set(key, cb.checked);
          pendingWorlds.add(w);
          // The intended choice is visible; XP/completion remain confirmed until saved.
          refreshMissionState();
          MissaoArmazem.atualizarPendente(cfg.storeKey, {}, function(st){
            pendingMissions.forEach(function(checked, k){ st[k] = checked; });
            return st;
          }, function(guardado){
            const touched = Array.from(pendingWorlds);
            const before = touched.map(isComplete);
            const checkedWorlds = touched.map(function(world){ return world.missions.some(function(m, i){ return pendingMissions.get(world.id+"-"+i) === true; }); });
            const hasChecked = checkedWorlds.some(Boolean);
            replaceState(guardado);
            pendingMissions.clear(); pendingWorlds.clear();
            refreshMissionState();
            if(hasChecked) logActivityToday();
            touched.forEach(function(world, i){
              if(isComplete(world) && !before[i]){ showToast("🎉 Mundo "+world.num+" concluído!"); playChime(); burstConfetti(); }
              else if(checkedWorlds[i]){ showCurioCard(world); }
            });
          });
          if(MissaoArmazem.falhou(cfg.storeKey)) showToast("A alteração da missão está por guardar. Tenta novamente no aviso.");
        });
        row.appendChild(cb); row.appendChild(title); row.appendChild(detail); row.appendChild(xp);
        missionsBox.appendChild(row);
      });
      missionsWrap.appendChild(missionsBox);
      P.appendChild(missionsWrap);
      if(F.robo) P.appendChild(buildRobo(F.robo));
      wheelBtn.addEventListener("click", function(){
        const open = Array.prototype.filter.call(missionsBox.querySelectorAll(".mission"), function(r){ return !r.querySelector("input").checked; });
        if(!open.length){ showToast("🎉 Já fizeste todas as missões deste mundo!"); return; }
        const pick = open[Math.floor(Math.random()*open.length)];
        if(typeof pick.scrollIntoView === "function") pick.scrollIntoView({behavior:"smooth", block:"center"});
        pick.classList.remove("picked"); void pick.offsetWidth; pick.classList.add("picked");
        setTimeout(function(){ pick.classList.remove("picked"); }, 1800);
      });

      if(w.gloss && w.gloss.length){
        const cb = el("div","cartoes-box"); cb.id = "cartoes-"+w.id;
        cb.appendChild(el("p","subhead",'🃏 Cartões de memória <small class="muted">— as '+w.gloss.length+' palavras-chave, uma de cada vez</small>'));
        cb.appendChild(el("p","cartoes-txt","Diz a resposta em voz alta antes de virar o cartão. Os que ainda não sabes ficam guardados para te sugerirmos treinar outra vez."));
        const b = el("button","cta","🃏 Treinar com cartões"); b.type = "button";
        b.addEventListener("click", function(){ openCartoes(w, b); });
        cb.appendChild(b);
        P.appendChild(cb);
      }
      if(w.quiz && w.quiz.length){
        const qbox = el("div","");
        const hasHard = !!(extra.desafio||[]).length;
        const quiz = mountQuiz1(qbox, {
          title: function(){ return (hasHard && missaoChallengeOn()) ? "🔥 Desafio" : "✅ Testa-te"; },
          questions: function(){ return shuffled(missaoQuizFor(w)); },
          extra: hasHard ? makeChallengeToggle() : null,
          onAnswer: registarResposta
        });
        P.appendChild(qbox);
        quizRefreshers.push(quiz.restart);
      }

      // 🧪 interactive PhET simulations for this world (data/recursos.js)
      const sims = (typeof MISSAO_SIMS !== "undefined" && MISSAO_SIMS[w.id]) || [];
      if(sims.length) P.appendChild(buildSims(sims));

      // the other half of the subject, one click away from where it is useful
      const OFICINA = {p5:["narrativo","uma história"], p6:["poema","um poema"]};
      if(OFICINA[w.id]){
        const of = OFICINA[w.id];
        P.appendChild(bigLink("✍️", "Agora tu: escrever "+of[1], "Na Oficina de Escrita, com pistas quando ficares sem ideias.", function(){
          location.href = "escrita.html?tipo=" + encodeURIComponent(of[0]);
        }));
      }
      if(typeof MATH_WORLDS !== "undefined" && MATH_WORLDS.indexOf(w) !== -1){
        P.appendChild(bigLink("🎮", "Quero mais! Treinar este mundo na Arena", "Exercícios interativos sem fim, com desenhos e níveis que se ajustam a ti.", function(){
          openView("math", "arena");
          if(window.MissaoArena) window.MissaoArena.start(w.id);
        }));
      }
      P.appendChild(buildMetodo(w, cfg.key));
      P.appendChild(buildBilhete(w));
      P.appendChild(cta("Explorar mais →", "explorar"));

      /* ===== 3. 🔭 Explorar ===== */
      const X = panes.explorar;
      const grid = el("div","explore");
      if(extra.explorar){
        const pb = el("button","xcard",'<b>🔭 Portal Explorador</b><small>O que vem a seguir, perguntas para investigar e fontes de confiança.</small>');
        pb.type = "button";
        pb.addEventListener("click", function(){ openModal("🔭 Portal Explorador — "+w.title, buildPortalHtml(w), pb); });
        grid.appendChild(pb);
      }
      if(curios.length){
        const cb = el("button","xcard",'<b>💡 Sabias que…?</b><small>'+curios.length+' curiosidades verdadeiras, cada uma com a fonte.</small>');
        cb.type = "button";
        cb.addEventListener("click", function(){ openCurioModal(w, cb); });
        grid.appendChild(cb);
      }
      const sh = el("a","xcard",'<b>📄 Página-resumo</b><small>A matéria toda numa folha, pronta a imprimir.</small>');
      sh.href = "resumo.html?w="+encodeURIComponent(w.id);
      grid.appendChild(sh);
      X.appendChild(grid);

      if(w.compare){
        const cmpWrap = el("div","");
        cmpWrap.appendChild(el("p","subhead","⚖️ Comparar"));
        const cmp = el("div","compare");
        [w.compare.left, w.compare.right].forEach(function(side, si){
          const col = el("div","compare-col");
          col.appendChild(el("h3","",side.title));
          const l = document.createElement("ul");
          side.points.forEach(function(pt){ l.appendChild(el("li","",pt)); });
          col.appendChild(l);
          cmp.appendChild(col);
          if(si===0) cmp.appendChild(el("div","compare-vs","VS"));
        });
        cmpWrap.appendChild(cmp);
        X.appendChild(cmpWrap);
      }

      const recursos = (w.resources || []).concat((typeof MISSAO_LINKS !== "undefined" && MISSAO_LINKS[w.id]) || []);
      if(recursos.length){
        const resWrap = el("div","");
        resWrap.appendChild(el("p","subhead","🔗 Sites para explorar <small class=\"muted\">— abrem numa aba nova</small>"));
        const rg = el("div","res-grid");
        recursos.forEach(function(r){
          const a = document.createElement("a");
          a.className = "res-card";
          a.href = r.url; a.target = "_blank"; a.rel = "noopener noreferrer";
          a.innerHTML = '<span class="res-icon" aria-hidden="true">'+(r.icon||"🔗")+'</span><span class="res-text"><b>'+r.title+'</b><br>'+r.desc+'<span class="res-site">'+r.site+' ↗</span></span>';
          rg.appendChild(a);
        });
        resWrap.appendChild(rg);
        X.appendChild(resWrap);
      }
      X.appendChild(el("div","xcard dashed",'<b>🏆 Avaliação</b><small>'+w.boss+(w.pages ? ' · '+w.pages : '')+'</small>'));

      /* --- previous / next world --- */
      const wnav = el("div","wnav");
      const prev = worlds[wi-1], next = worlds[wi+1];
      const pa = el("a","ghost", prev ? "← Mundo "+prev.num : "← Mapa");
      pa.href = "#"+cfg.key+(prev ? "/"+prev.id : "");
      const na = el("a","ghost", next ? "Mundo "+next.num+" →" : "🏆 Revisão Final →");
      na.href = "#"+cfg.key+"/"+(next ? next.id : "revisao");
      wnav.appendChild(pa); wnav.appendChild(na);
      card.appendChild(wnav);

      sec.appendChild(card);
      main.appendChild(sec);
      setStage("aprender");
      renderWorldProgress(w);
    });

    /* --- Revisão Final: 10 random questions from all the worlds --- */
    const review = el("section","wopen");
    review.id = "revisao-"+cfg.key; review.hidden = true;
    review.style.setProperty("--wc","var(--accent)");
    review.style.setProperty("--wc-bg","var(--surface-2)");
    const rtop = worldTop();
    rtop.appendChild(el("span","ic","🏆"));
    rtop.appendChild(el("div","grow",'<p class="eb">Os '+worlds.length+' mundos de '+cfg.name+'</p><h2>Revisão Final</h2>'));
    review.appendChild(rtop);
    const rcard = el("div","wcard");
    rcard.appendChild(el("p","lead","10 perguntas à mistura, de todos os mundos — boa forma de rever antes de uma ficha de avaliação."));
    const rbox = el("div","");
    rcard.appendChild(rbox);
    const rq = mountQuiz1(rbox, {
      title: function(){ return missaoChallengeOn() ? "🔥 Desafio" : "🏆 Revisão"; },
      questions: function(){
        let all = [];
        worlds.forEach(function(w){ missaoQuizFor(w).forEach(function(q){ all.push(Object.assign({world:w.num, icon:w.icon}, q)); }); });
        return shuffled(all).slice(0, 10);
      },
      label: function(q){ return q.icon+" Mundo "+q.world+" — "; },
      extra: makeChallengeToggle(),
      onAnswer: registarResposta
    });
    quizRefreshers.push(rq.restart);
    const rnav = el("div","wnav");
    const sheets = el("a","ghost","📄 Páginas-resumo de "+cfg.name);
    sheets.href = "resumo.html?d="+cfg.key;
    const shuffleBtn = el("button","ghost","🔀 Outras 10 perguntas");
    shuffleBtn.type = "button";
    shuffleBtn.addEventListener("click", rq.restart);
    rnav.appendChild(sheets); rnav.appendChild(shuffleBtn);
    rcard.appendChild(rnav);
    review.appendChild(rcard);
    main.appendChild(review);

    /* --- 🧩 Missão Final: long problems that mix several worlds, one at a time (data/missao-final.js) --- */
    const FINAL = (typeof MISSAO_FINAL !== "undefined") && MISSAO_FINAL[cfg.key];
    let finalSec = null;
    if(FINAL){
      finalSec = el("section","wopen");
      finalSec.id = "final-"+cfg.key; finalSec.hidden = true;
      finalSec.style.setProperty("--wc","var(--accent)");
      finalSec.style.setProperty("--wc-bg","var(--surface-2)");
      const ftop = worldTop();
      ftop.appendChild(el("span","ic","🧩"));
      ftop.appendChild(el("div","grow",'<p class="eb">Problemas que juntam vários mundos</p><h2>Missão Final</h2>'));
      finalSec.appendChild(ftop);
      const fcard = el("div","wcard");
      fcard.appendChild(el("p","lead",FINAL.intro));
      // the 4 steps of problem solving, always at hand but folded
      const met = document.createElement("details"); met.className = "final-metodo";
      met.innerHTML = '<summary>🧭 Como resolver um problema, em 4 passos</summary><ol>'+
        FINAL.metodo.map(function(m){ return '<li><b>'+m[0]+' '+m[1]+':</b> '+m[2]+'</li>'; }).join("")+'</ol>';
      fcard.appendChild(met);
      const figs = [];
      FINAL.problemas.forEach(function(p, pi){
        const box = el("article","final-prob");
        box.appendChild(el("h3","final-t",p.icon+" Problema "+(pi+1)+" — "+p.titulo));
        const wl = (p.mundos||[]).map(function(n){ const w = worlds[n-1]; return w ? '<a href="#'+cfg.key+'/'+w.id+'">'+w.icon+' Mundo '+n+'</a>' : ''; }).join(" · ");
        if(wl) box.appendChild(el("p","final-mundos","Usa: "+wl));
        box.appendChild(el("p","final-ctx",p.contexto));
        if(p.svg) box.insertAdjacentHTML("beforeend", p.svg);
        p.partes.forEach(function(pt, k){
          const part = el("div","final-parte");
          part.appendChild(el("p","final-q",'<b>'+String.fromCharCode(97+k)+')</b> '+pt.q));
          const dica = document.createElement("details"); dica.className = "final-det";
          dica.innerHTML = '<summary>💡 Pista</summary><p>'+pt.dica+'</p>';
          const res = document.createElement("details"); res.className = "final-det";
          res.innerHTML = '<summary>✅ Ver a resolução</summary><p class="final-passos">'+pt.passos+'</p><p class="final-resp"><b>Resposta:</b> '+pt.resposta+'</p>'+
            (pt.erro ? '<p class="final-erro"><b>⚠️ Erro comum:</b> '+pt.erro+'</p>' : '');
          part.appendChild(dica); part.appendChild(res);
          box.appendChild(part);
        });
        fcard.appendChild(box); figs.push(box);
      });
      const nav = el("div","ex-nav");
      const prev = el("button","ghost-btn","← Anterior"); prev.type = "button";
      const count = el("span","ex-count"); count.setAttribute("aria-live","polite");
      const next = el("button","ghost-btn","Seguinte →"); next.type = "button";
      nav.appendChild(prev); nav.appendChild(count); nav.appendChild(next);
      fcard.appendChild(nav);
      let fk = 0;
      const showP = function(i, byUser){
        fk = i;
        figs.forEach(function(f, j){ f.hidden = (j!==i); });
        count.textContent = "Problema "+(i+1)+" de "+figs.length;
        prev.disabled = (i===0); next.disabled = (i===figs.length-1);
        if(byUser && finalSec.getBoundingClientRect().top < 0) finalSec.scrollIntoView({block:"start"});
      };
      prev.addEventListener("click", function(){ if(fk>0) showP(fk-1, true); });
      next.addEventListener("click", function(){ if(fk<figs.length-1) showP(fk+1, true); });
      showP(0, false);
      finalSec.appendChild(fcard);
      main.appendChild(finalSec);
    }

    renderMap();
    renderXP();

    function refreshMissionState(){
      worlds.forEach(function(w){
        w.missions.forEach(function(m, i){
          const k = w.id+"-"+i, cb = document.getElementById("cb-"+k);
          if(!cb) return;
          const pending = pendingMissions.has(k);
          cb.checked = pending ? pendingMissions.get(k) : !!state[k];
          cb.setAttribute("data-save-status", pending ? "pending" : "saved");
          if(pending) cb.setAttribute("aria-description", "Esta alteração ainda está por guardar.");
          else cb.removeAttribute("aria-description");
          if(cb.nextElementSibling){
            cb.nextElementSibling.classList.toggle("done", !pending && !!state[k]);
            cb.nextElementSibling.innerHTML = "Q"+(i+1)+" — "+m.t+(pending ? " · por guardar" : ""); // same markup as when the row is built
          }
        });
        renderWorldProgress(w);
      });
      renderXP(); renderMap(); renderTodayPanel();
    }
    /* Read confirmed remote progress without discarding local pending choices. */
    MissaoArmazem.aoMudar(function(k){
      if(k !== cfg.storeKey && k !== null) return;
      const leitura = MissaoArmazem.lerSeguro(cfg.storeKey, {});
      if(!leitura.ok) return; // Keep confirmed progress when another tab's notification cannot be read.
      replaceState(leitura.valor);
      refreshMissionState();
    });

    /* show the map, one world (optionally at a stage) or the review */
    function show(target, stage){
      if(target && target!=="revisao" && !(target==="final" && finalSec) && !opened[target]) target = null;
      if(current && current!==target){
        if(window.MissaoAnim && MissaoAnim.fechar) MissaoAnim.fechar();
        if(window.speechSynthesis) window.speechSynthesis.cancel();
      }
      current = target;
      if(mapView) mapView.hidden = !!target;
      if(!target) renderMap();   // back on the map: refresh the «Treina mais» suggestions
      worlds.forEach(function(w){ document.getElementById(w.id).hidden = (w.id!==target); });
      review.hidden = (target!=="revisao");
      if(finalSec) finalSec.hidden = (target!=="final");
      if(target && target!=="revisao" && target!=="final"){ opened[target](stage || "aprender"); if(window.MissaoBanco) MissaoBanco.visto(target); }
    }
    return {show:show};
  }

  let toastEl = null;
  function showToast(msg){
    if(!toastEl){
      toastEl = el("div","toast","");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toastEl.classList.remove("show"); }, 2400);
  }

  // the subjects (and their order) come from MISSAO_SUBJECTS in shared.js
  const SUBJ = {};
  MISSAO_SUBJECTS.forEach(function(s){
    SUBJ[s.key] = mountSubject({worlds:s.worlds, storeKey:s.store, key:s.key, name:s.name,
      navId:"jump-nav-"+s.key, mainId:"worlds-"+s.key, xpTotalId:"xp-total-"+s.key, xpMaxId:"xp-max-"+s.key});
  });
  renderTodayPanel();

  /* ---------- 🎯 Missão de hoje: 10 questions a day from banco.js (new ones + spaced reviews) ---------- */
  function diasDesdeUltimaVez(){
    const log = getActivityLog().slice().sort();
    if(!log.length) return null;
    const u = log[log.length-1].split("-").map(Number), t = new Date();
    return Math.round((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - Date.UTC(u[0], u[1]-1, u[2])) / 864e5);
  }
  const hojeCard = document.getElementById("hoje-card");
  const pausa = diasDesdeUltimaVez();   // read before today's activity is logged
  const NOME_MAT = {};
  MISSAO_SUBJECTS.forEach(function(s){ NOME_MAT[s.key] = s.icon+" "+s.name; });
  function renderHoje(){
    if(!hojeCard || !window.MissaoBanco) return;
    const m = MissaoBanco.missaoDeHoje(), st = MissaoBanco.estatisticas();
    hojeCard.innerHTML = "";
    const head = el("div","hoje-head");
    const ola = (pausa !== null && pausa >= 2) ? '<p class="hoje-ola">👋 Que bom ver-te outra vez! Está tudo guardado. Começamos com uma missão curtinha?</p>' : '';
    const b = el("button", m.feita ? "ghost" : "cta", m.feita ? "➕ Mais 5 perguntas" : "Começar →");
    b.type = "button";
    if(m.feita){
      head.innerHTML = ola+'<div><p class="hoje-t">✅ Missão de hoje feita!</p><p class="hoje-s">Amanhã há perguntas novas. Se te apetecer, podes fazer mais umas.</p></div>';
      b.addEventListener("click", function(){ jogar(MissaoBanco.mais(5), true); });
    } else {
      head.innerHTML = ola+'<div><p class="hoje-t">🎯 Missão de hoje</p><p class="hoje-s">'+m.perguntas.length+' perguntas de várias disciplinas · cerca de 5 minutos</p></div>';
      b.addEventListener("click", function(){ jogar(m.perguntas, false); });
    }
    head.appendChild(b);
    hojeCard.appendChild(head);
    hojeCard.appendChild(el("p","hoje-stats","📚 "+st.total+" perguntas no banco · já respondeste a "+st.vistas+" · "+st.dominadas+" bem sabidas"+
      (st.novasAbertas ? " · "+st.novasAbertas+" novas à tua espera nos mundos que já abriste" : "")));
  }
  function jogar(lista, extra){
    hojeCard.innerHTML = "";
    if(!lista.length){ hojeCard.appendChild(el("p","hoje-s","Já respondeste a tudo por hoje — abre um mundo novo para desbloquear mais perguntas!")); return; }
    const box = el("div","");
    hojeCard.appendChild(box);
    mountQuiz1(box, {
      title: function(){ return extra ? "➕ Mais perguntas" : "🎯 Missão de hoje"; },
      questions: function(){ return lista; },
      label: function(q){ return (q._s ? NOME_MAT[q._s.key] : "")+(q._w ? " · Mundo "+q._w.num : "")+" — "; },
      onAnswer: registarResposta,
      again: false,
      onFinish: function(score, n, fimBox){
        if(!extra) MissaoBanco.marcarFeita();
        logActivityToday(); renderTodayPanel();
        const row = el("div","next-step"), fim = el("button","cta","Fechar ✓");
        fim.type = "button"; fim.addEventListener("click", renderHoje);
        row.appendChild(fim); fimBox.appendChild(row);
      }
    });
    if(hojeCard.getBoundingClientRect().top < 0) hojeCard.scrollIntoView({block:"start"});
  }
  renderHoje();

  /* ---------- 🔔 Lembrete: a site cannot notify by itself while closed, so it creates a calendar reminder (.ics) ---------- */
  const lembBtn = document.getElementById("lembrete-btn");
  if(lembBtn) lembBtn.addEventListener("click", function(){
    openModal("🔔 Lembrete para estudar",
      '<p>Um site não consegue enviar avisos quando está fechado. A forma mais simples e fiável é pôr um <b>lembrete no calendário</b> do telemóvel ou do computador — com o link para a Missão de hoje.</p>'+
      '<p class="lemb-row"><label>⏰ A que horas? <input type="time" id="lemb-hora" value="18:00"></label></p>'+
      '<p class="lemb-row"><label><input type="radio" name="lemb-dias" value="todos" checked> Todos os dias</label> &nbsp; <label><input type="radio" name="lemb-dias" value="semana"> Só de segunda a sexta</label></p>'+
      '<button type="button" class="cta" id="lemb-ok">📅 Criar lembrete</button>'+
      '<p class="note-small">Descarrega um pequeno ficheiro de calendário (.ics). Ao abri-lo, o telemóvel (Android ou iPhone) ou o computador pergunta se o queres juntar ao calendário. Para o desligar, apaga o evento no calendário.</p>', lembBtn);
    document.getElementById("lemb-ok").addEventListener("click", criarLembrete);
  });
  function criarLembrete(){
    const hora = (document.getElementById("lemb-hora").value || "18:00").split(":");
    const semana = document.querySelector('input[name="lemb-dias"]:checked').value === "semana";
    const p2 = function(n){ return String(n).padStart(2,"0"); };
    const d = new Date(); d.setDate(d.getDate()+1);
    const n = new Date();
    const url = location.href.split("#")[0];
    const ics = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Missao Escolar//PT","CALSCALE:GREGORIAN","BEGIN:VEVENT",
      "UID:missao-escolar-"+Date.now()+"@missao-escolar",
      "DTSTAMP:"+n.getUTCFullYear()+p2(n.getUTCMonth()+1)+p2(n.getUTCDate())+"T"+p2(n.getUTCHours())+p2(n.getUTCMinutes())+"00Z",
      "DTSTART:"+d.getFullYear()+p2(d.getMonth()+1)+p2(d.getDate())+"T"+p2(+hora[0])+p2(+hora[1])+"00",
      "DURATION:PT15M",
      "RRULE:"+(semana ? "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" : "FREQ=DAILY"),
      "SUMMARY:🎯 Missão Escolar: missão de hoje",
      "DESCRIPTION:10 perguntas\\, cerca de 5 minutos. "+url,
      "URL:"+url,
      "BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:Hora da missão de hoje! 🎯","TRIGGER:PT0M","END:VALARM",
      "END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], {type:"text/calendar;charset=utf-8"}));
    a.download = "lembrete-missao-escolar.ics";
    document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    showToast("📅 Lembrete criado — abre o ficheiro para o juntar ao calendário.");
  }

  /* ---- top bar: ❓ Ajuda and ☰ Mais (a small menu: resumos, pausa, lembrete, pais) ---- */
  document.querySelectorAll(".more-menu").forEach(function(menu){
    const close = function(){ if(menu.open){ menu.open = false; } };
    menu.querySelectorAll(".more-item").forEach(function(it){ it.addEventListener("click", close); });
    document.addEventListener("click", function(e){ if(!menu.contains(e.target)) close(); });
    menu.addEventListener("keydown", function(e){ if(e.key==="Escape" && menu.open){ close(); menu.querySelector("summary").focus(); } });
  });
  const helpBtn = document.getElementById("help-btn");
  if(helpBtn) helpBtn.addEventListener("click", function(){
    openModal("❓ Como funciona",
      '<ol class="help-list">'+
        '<li><b>Escolhe a disciplina</b> nos separadores e depois <b>um mundo</b> no mapa. Não tem de ser por ordem.</li>'+
        '<li>Todos os dias há uma <b>🎯 Missão de hoje</b>: 10 perguntas — umas novas e outras para rever o que custou mais. Nunca são sempre as mesmas.</li>'+
        '<li>Cada mundo tem <b>3 passos</b>: 📖 Aprender → 🎯 Praticar → 🔭 Explorar. Podes saltar entre eles quando quiseres.</li>'+
        '<li>O quadro <b>📋 Para o teste</b> tem a matéria a sério — é essa que sai nas fichas.</li>'+
        '<li>No fim do <b>📋 Para o teste</b> há <b>🃏 cartões</b>: diz a resposta antes de virar. Os que não sabias voltam ao fim da pilha.</li>'+
        '<li>Para estudar sem distrações, abre <b>☰ Mais → ✈️ Modo foco</b>: escolhes o que vais estudar e uma viagem de 15, 25 ou 40 minutos. Quando aterrares, faz uma pausa.</li>'+
        '<li>As missões <b>🛠️ Desafio de Engenheiro</b> são para construir em casa (com um adulto quando é preciso cortar).</li>'+
        '<li>Fizeste uma missão? <b>Risca a caixa</b> e o XP soma-se sozinho.</li>'+
        '<li>Queres perguntas mais difíceis? Toca em <b>🔥 Mais difícil</b> no quiz.</li>'+
        '<li>Cansaste-te? Faz uma <b>⏸️ pausa</b>. Tudo fica guardado e continuas quando quiseres.</li>'+
      '</ol>', helpBtn);
  });
  const pauseBtn = document.getElementById("pause-btn");
  if(pauseBtn) pauseBtn.addEventListener("click", function(){ openBreakModal(pauseBtn); });
  const focoBtn = document.getElementById("foco-btn");
  if(focoBtn) focoBtn.addEventListener("click", function(){ openFocoModal(focoBtn); });
  const vooAtivo = focoLer();   // a flight that was going on before a reload of this tab
  if(vooAtivo && vooAtivo.fim) focoArrancar(vooAtivo);

  /* ---- subject tabs ---- */
  // each year remembers its own last subject (the 6.º ano keeps the old key name)
  const KEY_SUBJECT = "active_subject"+(MISSAO_ANO_ATUAL === "6" ? "" : "_"+MISSAO_ANO_ATUAL);
  const panels = {};
  MISSAO_SUBJECTS.forEach(function(s){ panels[s.key] = document.getElementById("subj-"+s.key); });
  const tabBtns = Array.prototype.slice.call(document.querySelectorAll("#subject-tabs .tab-btn"));
  function activate(subject){
    Object.keys(panels).forEach(function(k){ panels[k].hidden = (k!==subject); });
    tabBtns.forEach(function(b){ b.classList.toggle("active", b.dataset.subject===subject); });
    MissaoArmazem.gravarTexto(KEY_SUBJECT, subject);
  }

  /* ---- views inside a subject: Matemática → Mundos | Arena; Português → Mundos | Oficina de Escrita ---- */
  function showView(subject, view){
    const panel = panels[subject];
    if(!panel) return;
    const views = panel.querySelectorAll(".subview");
    if(!views.length) return;
    if(!Array.prototype.some.call(views, function(v){ return v.dataset.view === view; })) view = "mundos";
    views.forEach(function(v){ v.hidden = v.dataset.view !== view; });
    panel.querySelectorAll(".subtab[data-view]").forEach(function(b){ const on = b.dataset.view === view; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
    if(view === "arena" && window.MissaoArena) window.MissaoArena.lobby();
  }

  /* 6ano.html#math → map · #math/n5 → world 5 · #math/n5/praticar → its 2nd stage · #math/revisao · #math/arena · #pt/escrita */
  function route(subject, part, stage){
    if(!panels[subject]) return;
    activate(subject);
    // inside a world (or the review) the daily strip and "Missão de hoje" step aside: one thing at a time
    document.body.classList.toggle("in-world", !!(part && part!=="arena" && part!=="escrita" && (part==="revisao" || (part==="final" && document.getElementById("final-"+subject)) || document.getElementById(part))));
    if(part==="escrita"){ location.replace("escrita.html"); return; }   // the Oficina has its own page now
    if(part==="arena"){ showView(subject, part); return; }
    showView(subject, "mundos");
    SUBJ[subject].show(part || null, stage);
  }
  function keepInView(part){
    // a world was opened (from the map, a link or the address): bring its start to the top of the screen,
    // so on a phone the child does not land on the page header with the world below the fold
    const world = part && part!=="arena" && part!=="escrita" ? document.getElementById(part) : null;
    if(world && !world.hidden){
      const top = world.getBoundingClientRect().top;
      if(top < 0 || top > 80) world.scrollIntoView({block:"start"});
      return;
    }
    const tabs = document.getElementById("subject-tabs");
    if(tabs && tabs.getBoundingClientRect().top < 0) tabs.scrollIntoView({block:"start"});
  }
  let skipHash = null;
  function go(subject, part, stage){
    route(subject, part, stage);
    const h = "#"+subject+(part ? "/"+part : "")+(stage && stage!=="aprender" ? "/"+stage : "");
    if(location.hash !== h){ skipHash = h; location.hash = h; }
    keepInView(part);
  }
  function openView(subject, view){ go(subject, view==="mundos" ? null : view); }
  window.MissaoNav = {ir: go};

  tabBtns.forEach(function(b){ b.addEventListener("click", function(){ go(b.dataset.subject); }); });
  Object.keys(panels).forEach(function(k){
    panels[k].querySelectorAll(".subtab[data-view]").forEach(function(b){ b.addEventListener("click", function(){ openView(k, b.dataset.view); }); });
  });

  function fromHash(){
    const parts = location.hash.slice(1).split("/");
    return panels[parts[0]] ? {subject:parts[0], part:parts[1] || null, stage:parts[2] || null} : null;
  }
  let initial = MISSAO_SUBJECTS[0].key;
  const saved = MissaoArmazem.lerTexto(KEY_SUBJECT, null); if(panels[saved]) initial = saved;
  const h0 = fromHash();
  if(h0){ route(h0.subject, h0.part, h0.stage); keepInView(h0.part); } else route(initial);
  window.addEventListener("hashchange", function(){
    if(location.hash === skipHash){ skipHash = null; return; }
    skipHash = null;
    const h = fromHash();
    if(h){ route(h.subject, h.part, h.stage); keepInView(h.part); }
  });

})();
