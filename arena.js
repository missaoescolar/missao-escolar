/* Arena de Matemática — motor do jogo (rondas, nível adaptativo, XP, combos, medalhas).
   Vive dentro do separador Matemática de 6ano.html (elemento #arena-root).
   As perguntas vêm de arena-exercicios.js (ARENA.gerar). O progresso fica em localStorage "arena".
   Outras partes da página usam window.MissaoArena.start("n2") para abrir um tema. */
(function(){
  const $ = id => document.getElementById(id);
  const ROOT = $("arena-root");
  if(!ROOT) return;
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const pick = a => a[Math.floor(Math.random()*a.length)];
  const visible = () => ROOT.offsetParent !== null;   // false when the Matemática tab or the Arena view is hidden

  const ROUND_SIZE = 10, BLITZ_SECONDS = 60, DAILY_GOAL = 20;
  const WORLDS = {}; MATH_WORLDS.forEach(w => { WORLDS[w.id] = w; });
  const TOPICS = ARENA.temas;
  const INTERACTIVE = ["pintar","angulo","reta","selecionar"];

  /* ---------- saved progress ---------- */
  const today = () => { const d = new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); };
  const fresh = {xp:0, certas:0, feitas:0, niveis:{}, estrelas:{}, recorde:{}, hoje:{data:"", certas:0}, medalhas:[], jogados:[], modo:"treino", som:true};
  const copia = o => JSON.parse(JSON.stringify(o));
  let S, base;   // base = what was last read from / written to storage, to work out what this tab added since
  function carregar(){
    const leitura = MissaoArmazem.lerSeguro("arena", {});
    // A temporary read failure must not reset the last confirmed in-memory base.
    if(!leitura.ok && S) return;
    S = Object.assign(copia(fresh), leitura.valor);
    if(!S.hoje || S.hoje.data !== today()) S.hoje = {data:today(), certas:0};
    base = copia(S);
  }
  carregar();
  /* Keep S and base until a successful write. Merge with the latest store inside the lock:
     counters add what each tab earned, best scores keep the highest, lists are joined,
     and settings or levels only change if this tab changed them */
  function save(){
    MissaoArmazem.atualizarPendente("arena", {}, function(guardado){
      const T = Object.assign(copia(fresh), guardado), m = Object.assign({}, T);
      ["xp","certas","feitas"].forEach(k => { m[k] = (T[k]||0) + (S[k]||0) - (base[k]||0); });
      ["modo","som"].forEach(k => { if(S[k] !== base[k]) m[k] = S[k]; });
      m.niveis = Object.assign({}, T.niveis);
      Object.keys(S.niveis).forEach(k => { if(S.niveis[k] !== base.niveis[k]) m.niveis[k] = S.niveis[k]; });
      ["estrelas","recorde"].forEach(g => {
        m[g] = Object.assign({}, T[g]);
        Object.keys(S[g]).forEach(k => { m[g][k] = Math.max(m[g][k]||0, S[g][k]||0); });
      });
      ["medalhas","jogados"].forEach(g => { m[g] = (T[g]||[]).concat(S[g].filter(x => (T[g]||[]).indexOf(x) === -1)); });
      const ganhoHoje = S.hoje.certas - (base.hoje.data === S.hoje.data ? base.hoje.certas : 0);
      m.hoje = (T.hoje && T.hoje.data === S.hoje.data) ? {data:S.hoje.data, certas:T.hoje.certas + ganhoHoje} : {data:S.hoje.data, certas:S.hoje.certas};
      return m;
    }, function(guardado){
      Object.assign(S, guardado);
      base = copia(S); // advance only after the write succeeds; failed gains remain in S - base
      renderPlayer();
      if(!round) renderLobby();
    });
  }
  function logActivity(){
    const t = today();
    MissaoArmazem.registarAtividade(t);
  }
  const nivel = t => S.niveis[t] || 1;
  const playerLevel = xp => Math.floor(Math.sqrt(xp/40)) + 1;   // 40, 160, 360, 640… XP
  const levelStart = l => 40*(l-1)*(l-1);

  /* ---------- medals ---------- */
  const MEDALHAS = {
    primeira:  {icon:"🎉", nome:"Primeira ronda", desc:"Terminaste a tua primeira ronda."},
    combo5:    {icon:"🔥", nome:"Em chamas", desc:"5 respostas certas seguidas."},
    combo10:   {icon:"☄️", nome:"Imparável", desc:"10 respostas certas seguidas."},
    perfeita:  {icon:"💎", nome:"Ronda perfeita", desc:"10 em 10 numa ronda de treino."},
    meta:      {icon:"🎯", nome:"Meta do dia", desc:DAILY_GOAL+" respostas certas num só dia."},
    cem:       {icon:"💯", nome:"Centena", desc:"100 respostas certas no total."},
    relampago: {icon:"⚡", nome:"Relâmpago", desc:"15 certas num só Relâmpago."},
    mestre:    {icon:"🏅", nome:"Mestre", desc:"Chegaste ao nível 3 num tema."},
    explorador:{icon:"🧭", nome:"Explorador", desc:"Jogaste os 8 temas."}
  };
  function award(id){
    if(S.medalhas.indexOf(id) !== -1) return;
    S.medalhas.push(id); save();
    toast(MEDALHAS[id].icon+" Medalha nova: "+MEDALHAS[id].nome+"!");
    if(round) round.medalhas.push(id);
  }

  /* ---------- sound ---------- */
  let ctx = null;
  function beep(freqs, dur){
    if(!S.som || (window.MissaoPrefs && !MissaoPrefs.som())) return;
    try{
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      freqs.forEach((f,i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + i*0.09;
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t+0.02); g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
        o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t+dur+0.05);
      });
    }catch(e){}
  }
  const sndRight = () => beep([660, 880], 0.18), sndWrong = () => beep([300], 0.25), sndLevel = () => beep([523, 659, 784, 1046], 0.22), sndTick = () => beep([520], 0.05);

  /* ---------- small UI helpers ---------- */
  let toastEl = null, toastTimer = null;
  function toast(msg){
    if(!toastEl){ toastEl = document.createElement("div"); toastEl.className = "toast ar-toast"; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }
  function confetti(){
    if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["var(--m1)","var(--m2)","var(--m3)","var(--m4)","var(--m6)","var(--m7)"];
    for(let i=0;i<28;i++){
      const p = document.createElement("div"); p.className = "confetti-piece";
      p.style.left = (Math.random()*100)+"vw"; p.style.background = colors[i%colors.length];
      p.style.animationDelay = (Math.random()*0.3)+"s"; p.style.setProperty("--rot", (Math.random()*360)+"deg");
      document.body.appendChild(p); setTimeout(() => p.remove(), 1900);
    }
  }
  function show(view){
    ["ar-lobby","ar-game","ar-result"].forEach(v => { $(v).hidden = v !== view; });
    if(visible() && ROOT.getBoundingClientRect().top < 0) ROOT.scrollIntoView({block:"start"});
  }

  /* ---------- player bar ---------- */
  function renderPlayer(){
    const lv = playerLevel(S.xp), a = levelStart(lv), b = levelStart(lv+1);
    const pct = Math.round((S.xp-a)/(b-a)*100);
    const goal = Math.min(S.hoje.certas, DAILY_GOAL), C = 2*Math.PI*16;
    $("ar-player").innerHTML =
      '<div class="ar-lv"><span class="ar-lv-badge">'+lv+'</span><div><b>Nível '+lv+'</b><span class="ar-xpbar"><span style="width:'+pct+'%"></span></span><small>'+S.xp+' XP · faltam '+(b-S.xp)+' para o nível '+(lv+1)+'</small></div></div>'+
      '<div class="ar-goal" title="Meta do dia"><svg viewBox="0 0 40 40" width="44" height="44" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="var(--surface-2)" stroke-width="5"/>'+
        '<circle cx="20" cy="20" r="16" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" transform="rotate(-90 20 20)" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+(C*(1-goal/DAILY_GOAL)).toFixed(1)+'"/></svg>'+
        '<div><b>'+S.hoje.certas+'/'+DAILY_GOAL+'</b><small>meta de hoje</small></div></div>'+
      '<button type="button" class="ar-sound" id="ar-sound" aria-pressed="'+S.som+'" title="Som">'+(S.som?"🔊":"🔇")+'</button>';
    $("ar-sound").addEventListener("click", () => { S.som = !S.som; save(); renderPlayer(); });
  }

  /* ---------- lobby ---------- */
  let chosen = null;
  const stars = n => "★".repeat(n)+"☆".repeat(3-n);
  function renderLobby(){
    document.querySelectorAll(".ar-mode").forEach(b => { const on = b.dataset.mode===S.modo; b.classList.toggle("active", on); b.setAttribute("aria-checked", on); });
    const cards = TOPICS.map(t => {
      const w = WORLDS[t], lv = nivel(t), st = S.estrelas[t] || 0, rec = S.recorde[t];
      return '<button type="button" class="ar-topic'+(chosen===t?' chosen':'')+'" data-t="'+t+'" style="--wc:var(--'+w.c+');--wc-bg:var(--'+w.c+'-bg)">'+
        '<span class="ar-topic-ic" aria-hidden="true">'+w.icon+'</span>'+
        '<b>'+esc(w.title)+'</b><small>'+esc(w.subtitle)+'</small>'+
        '<span class="ar-topic-meta"><span class="ar-dots" aria-label="Nível '+lv+' de 3">'+[1,2,3].map(k => '<i class="'+(k<=lv?'on':'')+'"></i>').join("")+'</span>'+
        '<span class="ar-stars" aria-label="'+st+' estrelas">'+stars(st)+'</span>'+(rec ? '<span class="ar-rec">⚡ '+rec+'</span>' : '')+'</span></button>';
    });
    cards.push('<button type="button" class="ar-topic mix'+(chosen==='mix'?' chosen':'')+'" data-t="mix"><span class="ar-topic-ic" aria-hidden="true">🔀</span><b>Mistura total</b><small>Perguntas de todos os temas, ao calhas</small>'+
      (S.recorde.mix ? '<span class="ar-topic-meta"><span class="ar-rec">⚡ '+S.recorde.mix+'</span></span>' : '')+'</button>');
    $("ar-topics").innerHTML = cards.join("");
    $("ar-topics").querySelectorAll(".ar-topic").forEach(b => b.addEventListener("click", () => start(b.dataset.t)));
    $("ar-badges").innerHTML = '<p class="ar-badges-title">🏅 Medalhas — '+S.medalhas.length+'/'+Object.keys(MEDALHAS).length+'</p><div>'+
      Object.keys(MEDALHAS).map(k => { const m = MEDALHAS[k], got = S.medalhas.indexOf(k)!==-1;
        return '<span class="ar-medal'+(got?' got':'')+'" title="'+esc(m.desc)+'"><span aria-hidden="true">'+(got?m.icon:"🔒")+'</span>'+esc(m.nome)+'<small>'+esc(m.desc)+'</small></span>'; }).join("")+'</div>';
  }
  document.querySelectorAll(".ar-mode").forEach(b => b.addEventListener("click", () => { S.modo = b.dataset.mode; save(); renderLobby(); }));

  /* ---------- the round ---------- */
  let round = null, q = null, answered = false, hintUsed = false, timer = null, advanceTimer = null;
  let iv = null;       // state of an interactive question (painted parts, angle, chosen tick, selected numbers)
  const streak = {};   // per topic: {right, wrong} for the adaptive level

  function start(topic){
    chosen = topic;
    round = {topic:topic, mode:S.modo, i:0, res:[], certas:0, xp:0, combo:0, maxCombo:0, medalhas:[], subiu:[], endsAt:0};
    if(topic!=="mix" && S.jogados.indexOf(topic)===-1){ S.jogados.push(topic); save(); }
    if(TOPICS.every(t => S.jogados.indexOf(t)!==-1)) award("explorador");
    show("ar-game");
    clearInterval(timer);
    if(round.mode === "relampago"){
      round.endsAt = Date.now() + BLITZ_SECONDS*1000;
      timer = setInterval(() => { if(!round) return clearInterval(timer); if(Date.now() >= round.endsAt){ clearInterval(timer); finish(); } else renderHud(); }, 250);
    }
    nextQuestion();
  }

  function renderHud(){
    if(round.mode === "relampago"){
      const left = Math.max(0, Math.ceil((round.endsAt-Date.now())/1000));
      $("ar-progress").innerHTML = '<span class="ar-timer"><span style="width:'+(left/BLITZ_SECONDS*100)+'%"></span></span><b>⏱️ '+left+' s · '+round.certas+' certas</b>';
    } else {
      $("ar-progress").innerHTML = Array.from({length:ROUND_SIZE}, (_,k) =>
        '<i class="'+(k<round.i ? (round.res[k]?'ok':'no') : k===round.i ? 'cur' : '')+'"></i>').join("");
    }
    const c = round.combo;
    $("ar-combo").innerHTML = c >= 2 ? '🔥 '+c+(c>=10?' ×3':c>=5?' ×2':'') : '';
    $("ar-combo").classList.toggle("hot", c >= 5);
  }

  function nextQuestion(){
    clearTimeout(advanceTimer);
    if(!round) return;
    if(round.mode === "treino" && round.i >= ROUND_SIZE){ finish(); return; }
    const tema = round.topic === "mix" ? pick(TOPICS) : round.topic;
    q = ARENA.gerar(tema, nivel(tema));
    answered = false; hintUsed = false; iv = null;
    const w = WORLDS[tema], card = $("ar-card");
    card.style.setProperty("--wc", "var(--"+w.c+")");
    card.style.setProperty("--wc-bg", "var(--"+w.c+"-bg)");
    card.classList.remove("right","wrong","shake");
    $("ar-meta").innerHTML = w.icon+" "+esc(w.title)+' · <span class="ar-lvchip">nível '+nivel(tema)+'</span>';
    $("ar-q").innerHTML = q.texto;
    $("ar-visual").innerHTML = q.visual || "";
    const fb = $("ar-feedback"); fb.hidden = true; fb.className = "ar-feedback"; fb.innerHTML = "";
    $("ar-hint").hidden = true; $("ar-hint-btn").hidden = !q.dica; $("ar-hint-btn").disabled = false;

    const inter = INTERACTIVE.indexOf(q.tipo) !== -1;
    $("ar-choices").hidden = q.tipo !== "escolha";
    $("ar-answer").hidden = q.tipo !== "num" && q.tipo !== "fracao";
    $("ar-keypad").hidden = $("ar-answer").hidden;
    $("ar-interact").hidden = !inter;
    $("ar-verify").hidden = !inter; $("ar-verify").disabled = false;

    if(q.tipo === "escolha"){
      $("ar-choices").innerHTML = q.opcoes.map((o,k) => '<button type="button" class="ar-choice" data-k="'+k+'"><kbd>'+(k+1)+'</kbd> '+o+'</button>').join("");
      $("ar-choices").querySelectorAll(".ar-choice").forEach(b => b.addEventListener("click", () => submit(+b.dataset.k)));
    } else if(inter){
      setupInteractive();
    } else {
      const inp = $("ar-input");
      inp.value = ""; inp.disabled = false;
      inp.setAttribute("inputmode", q.tipo === "fracao" ? "text" : "decimal");
      inp.placeholder = q.tipo === "fracao" ? "ex.: 3/4" : "a tua resposta";
      $("ar-unit").textContent = q.unidade || "";
      renderKeypad();
      if(!matchMedia("(pointer: coarse)").matches) inp.focus({preventScroll:true});
    }
    renderHud();
  }

  function renderKeypad(){
    const keys = ["7","8","9","4","5","6","1","2","3", q.tipo==="fracao" ? "/" : ",", "0", "⌫"];
    $("ar-keypad").innerHTML = keys.map(k => '<button type="button" tabindex="-1" data-k="'+k+'">'+k+'</button>').join("");
    $("ar-keypad").querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      if(answered) return;
      const inp = $("ar-input"), k = b.dataset.k;
      inp.value = k === "⌫" ? inp.value.slice(0,-1) : inp.value + k;
    }));
  }

  /* ---------- interactive questions (touch & drag, Synthesis-style) ---------- */
  function setupInteractive(){
    const box = $("ar-interact");
    box.className = "ar-interact ar-"+q.tipo;
    // the box is reused: forget the handlers of the previous interactive question
    box.onpointerdown = box.onpointermove = box.onpointerup = box.onpointerleave = box.onclick = box.onkeydown = null;
    if(q.tipo === "pintar"){
      iv = new Array(q.partes).fill(false);
      box.innerHTML = ARENA.celulas(q.forma, q.partes, q.rows, q.cols, () => false, true)+'<p class="ar-count" id="ar-count"></p>';
      updateCount();
      let painting = false, paintTo = true;
      const cellAt = e => { const el = document.elementFromPoint(e.clientX, e.clientY); return el && el.closest ? el.closest(".cell") : null; };
      const setCell = (cell, val) => {
        const i = +cell.dataset.i; if(iv[i] === val) return;
        iv[i] = val; cell.setAttribute("fill", val ? ARENA.CHEIO : ARENA.VAZIO); cell.setAttribute("aria-pressed", val);
        updateCount(); sndTick();
      };
      box.onpointerdown = e => { if(answered) return; const c = cellAt(e); if(!c) return; e.preventDefault(); painting = true; paintTo = !iv[+c.dataset.i]; setCell(c, paintTo); };
      box.onpointermove = e => { if(!painting || answered) return; const c = cellAt(e); if(c) setCell(c, paintTo); };
      box.onpointerup = box.onpointerleave = () => { painting = false; };
      box.onkeydown = e => { const c = e.target.closest && e.target.closest(".cell"); if(c && (e.key==="Enter"||e.key===" ") && !answered){ e.preventDefault(); setCell(c, !iv[+c.dataset.i]); } };
    }
    else if(q.tipo === "angulo"){
      iv = q.inicio;
      box.innerHTML = '<div class="ar-prot" id="ar-prot"></div><label class="ar-range"><span>Fecha</span><input type="range" id="ar-range" min="0" max="180" step="1" value="'+iv+'" aria-label="Abertura do ângulo"><span>Abre</span></label>';
      drawAngle();
      $("ar-range").addEventListener("input", e => { if(answered) return; iv = +e.target.value; drawAngle(); });
      let dragging = false;
      const angleFrom = e => {
        const svg = $("ar-prot").querySelector("svg"), pt = svg.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const p = pt.matrixTransform(svg.getScreenCTM().inverse());
        let a = Math.atan2(ARENA.PROT.cy - p.y, p.x - ARENA.PROT.cx)*180/Math.PI;
        if(a < 0) a = p.x < ARENA.PROT.cx ? 180 : 0;
        return Math.round(Math.max(0, Math.min(180, a)));
      };
      box.onpointerdown = e => { if(answered || !e.target.closest("#ar-prot")) return; e.preventDefault(); dragging = true; iv = angleFrom(e); drawAngle(); };
      box.onpointermove = e => { if(!dragging || answered) return; iv = angleFrom(e); drawAngle(); };
      box.onpointerup = box.onpointerleave = () => { dragging = false; };
    }
    else if(q.tipo === "reta"){
      iv = null;
      drawLine();
      box.onclick = e => { const t = e.target.closest && e.target.closest(".tick-hit"); if(!t || answered) return; iv = +t.dataset.i; sndTick(); drawLine(); };
      box.onkeydown = e => { const t = e.target.closest && e.target.closest(".tick-hit"); if(t && (e.key==="Enter"||e.key===" ") && !answered){ e.preventDefault(); iv = +t.dataset.i; drawLine(); } };
    }
    else if(q.tipo === "selecionar"){
      iv = new Set();
      box.innerHTML = '<div class="ar-numgrid">'+q.numeros.map((n,i) => '<button type="button" data-i="'+i+'" aria-pressed="false">'+n+'</button>').join("")+'</div><p class="ar-count" id="ar-count"></p>';
      updateCount();
      box.querySelectorAll(".ar-numgrid button").forEach(b => b.addEventListener("click", () => {
        if(answered) return;
        const i = +b.dataset.i;
        if(iv.has(i)) iv.delete(i); else iv.add(i);
        b.classList.toggle("sel", iv.has(i)); b.setAttribute("aria-pressed", iv.has(i)); sndTick(); updateCount();
      }));
    }
  }
  function updateCount(){
    const el = $("ar-count"); if(!el) return;
    el.innerHTML = q.tipo === "pintar" ? 'Pintaste <b>'+iv.filter(Boolean).length+'</b> de '+q.partes+' partes' : 'Escolheste <b>'+iv.size+'</b> número'+(iv.size===1?'':'s');
  }
  function drawAngle(reveal){
    $("ar-prot").innerHTML = ARENA.transferidor(iv, {handle:!answered, value: reveal ? iv : undefined});
    $("ar-range").value = iv;
  }
  function drawLine(reveal){
    $("ar-interact").innerHTML = ARENA.reta(q.max, q.div, {interactive:!answered, marker:iv, sol: reveal ? q.alvo.n*q.div/q.alvo.d : undefined})+
      (reveal ? '' : '<p class="ar-count">'+(iv===null ? 'Toca num tracinho da reta.' : 'Escolheste um ponto. Toca noutro para mudar.')+'</p>');
  }
  function interactiveValue(){
    if(q.tipo === "pintar") return iv.filter(Boolean).length;
    if(q.tipo === "selecionar") return Array.from(iv);
    return iv;
  }
  function revealInteractive(){
    if(q.tipo === "angulo") drawAngle(true);
    if(q.tipo === "reta") drawLine(true);
    if(q.tipo === "selecionar"){
      const right = new Set(q.resposta);
      $("ar-interact").querySelectorAll(".ar-numgrid button").forEach(b => {
        const i = +b.dataset.i; b.disabled = true;
        if(right.has(i) && iv.has(i)) b.classList.add("ok");
        else if(right.has(i)) b.classList.add("miss");
        else if(iv.has(i)) b.classList.add("bad");
      });
    }
    if(q.tipo === "pintar") $("ar-interact").querySelectorAll(".cell").forEach(c => c.removeAttribute("tabindex"));
  }

  $("ar-verify").addEventListener("click", () => submit(interactiveValue()));
  $("ar-answer").addEventListener("submit", e => {
    e.preventDefault();
    if(answered){ nextQuestion(); return; }
    submit($("ar-input").value);
  });
  $("ar-hint-btn").addEventListener("click", () => {
    hintUsed = true; $("ar-hint").textContent = q.dica; $("ar-hint").hidden = false; $("ar-hint-btn").disabled = true;
  });
  $("ar-quit").addEventListener("click", () => {
    if(round && (round.i > 0 || round.certas > 0) && !confirm("Sair desta ronda? O XP que já ganhaste fica guardado.")) return;
    clearInterval(timer); clearTimeout(advanceTimer); round = null; renderPlayer(); renderLobby(); show("ar-lobby");
  });

  function submit(value){
    if(answered || !round) return;
    const r = ARENA.corrigir(q, value);
    const fb = $("ar-feedback");
    if(r === null || r === "simplificar"){
      fb.hidden = false; fb.className = "ar-feedback info";
      fb.innerHTML = r === "simplificar" ? "✨ Está certo, mas ainda dá para <b>simplificar</b>! Divide o numerador e o denominador pelo mesmo número."
        : q.tipo === "fracao" ? "Escreve a fração assim: 3/4"
        : q.tipo === "pintar" ? "Pinta algumas partes primeiro (toca nelas)."
        : q.tipo === "reta" ? "Toca primeiro num tracinho da reta."
        : q.tipo === "selecionar" ? "Toca primeiro nos números que escolhes."
        : "Escreve só o número (podes usar vírgula, ex.: 2,5)";
      $("ar-card").classList.remove("shake"); void $("ar-card").offsetWidth; $("ar-card").classList.add("shake");
      return;
    }
    answered = true;
    const tema = q.tema, st = streak[tema] = streak[tema] || {right:0, wrong:0};
    S.feitas++;
    if(r === true){
      round.certas++; round.combo++; round.maxCombo = Math.max(round.maxCombo, round.combo);
      const mult = round.combo >= 10 ? 3 : round.combo >= 5 ? 2 : 1;
      const gain = Math.round((10 + 5*(q.nivel-1)) * mult * (hintUsed ? 0.5 : 1) * (INTERACTIVE.indexOf(q.tipo)!==-1 ? 1.2 : 1));
      round.xp += gain; S.xp += gain; S.certas++; S.hoje.certas++;
      logActivity();
      st.right++; st.wrong = 0;
      if(st.right >= 3 && nivel(tema) < 3){
        S.niveis[tema] = nivel(tema)+1; st.right = 0; round.subiu.push(tema);
        sndLevel(); toast("⬆️ Subiste para o nível "+S.niveis[tema]+" em "+WORLDS[tema].title+"!");
        if(S.niveis[tema] === 3) award("mestre");
      } else sndRight();
      if(round.combo === 5) award("combo5");
      if(round.combo === 10) award("combo10");
      if(S.hoje.certas === DAILY_GOAL){ award("meta"); confetti(); }
      if(S.certas >= 100) award("cem");
      $("ar-card").classList.add("right");
      fb.className = "ar-feedback ok";
      fb.innerHTML = '<b>✅ Certo! +'+gain+' XP'+(mult>1?' (combo ×'+mult+')':'')+'</b>'+(round.mode==="treino" ? '<div class="ar-explain">'+q.explicacao+'</div>' : '');
    } else {
      round.combo = 0; st.wrong++; st.right = 0;
      if(st.wrong >= 2 && nivel(tema) > 1){ S.niveis[tema] = nivel(tema)-1; st.wrong = 0; }
      sndWrong();
      $("ar-card").classList.add("wrong");
      fb.className = "ar-feedback no";
      const tu = q.tipo === "angulo" ? " Abriste "+value+"°." : q.tipo === "pintar" ? " Pintaste "+value+"." : "";
      fb.innerHTML = '<b>Quase! A resposta certa é '+ARENA.respostaTexto(q)+'.</b>'+tu+'<div class="ar-explain">'+q.explicacao+'</div>';
      // a short animated lesson on this topic, if there is one
      const anims = window.MissaoAnim ? MissaoAnim.doMundo(tema) : [];
      if(anims.length && round.mode !== "relampago"){
        fb.insertAdjacentHTML("beforeend", '<button type="button" class="ar-anim" id="ar-anim">🎬 Ver a animação no '+esc("Mundo "+WORLDS[tema].num)+': '+esc(anims[0].titulo)+'</button>');
        // the animation lives inside its world: open that world (📖 Aprender) and play it there
        $("ar-anim").addEventListener("click", () => {
          if(window.MissaoNav){ window.MissaoNav.ir("math", tema); MissaoAnim.abrir(anims[0].id); }
          else { location.hash = "math/"+tema; setTimeout(() => MissaoAnim.abrir(anims[0].id), 80); }
        });
      }
    }
    save();
    round.res[round.i] = r === true;
    round.i++;
    if(q.tipo === "escolha"){
      $("ar-choices").querySelectorAll(".ar-choice").forEach((b,k) => {
        b.disabled = true;
        if(k === q.resposta) b.classList.add("right"); else if(k === value) b.classList.add("wrong");
      });
    } else if(INTERACTIVE.indexOf(q.tipo) !== -1){
      $("ar-verify").hidden = true; revealInteractive();
    } else $("ar-input").disabled = true;
    // right → continue automatically; wrong → time to read the solution
    const blitz = round.mode === "relampago";
    if(r === true) advanceTimer = setTimeout(nextQuestion, blitz ? 450 : (INTERACTIVE.indexOf(q.tipo)!==-1 ? 1800 : 1400));
    else if(blitz) advanceTimer = setTimeout(nextQuestion, 2400);
    else {
      fb.innerHTML += '<button type="button" class="ar-next" id="ar-next">Continuar ↵</button>';
      $("ar-next").addEventListener("click", nextQuestion);
      $("ar-next").focus({preventScroll:true});
    }
    fb.hidden = false;
    renderHud(); renderPlayer();
  }

  /* keyboard (only while the Arena is on screen): 1–4 choose an option, Enter continues */
  document.addEventListener("keydown", e => {
    if(!visible() || $("ar-game").hidden || !q) return;
    if(!answered && q.tipo === "escolha" && /^[1-4]$/.test(e.key) && +e.key <= q.opcoes.length){ submit(+e.key - 1); }
    else if(answered && e.key === "Enter" && document.activeElement !== $("ar-input") && document.activeElement.id !== "ar-next"){ e.preventDefault(); nextQuestion(); }
  });

  /* ---------- result ---------- */
  function finish(){
    clearInterval(timer); clearTimeout(advanceTimer);
    if(!round) return;
    const r = round, blitz = r.mode === "relampago";
    const total = blitz ? r.i : ROUND_SIZE, pct = total ? r.certas/total : 0;
    let nStars = 0, novoRecorde = false;
    if(blitz){
      if(r.certas > (S.recorde[r.topic] || 0)){ S.recorde[r.topic] = r.certas; novoRecorde = r.certas > 0; }
      if(r.certas >= 15) award("relampago");
    } else {
      nStars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;
      if(r.topic !== "mix" && nStars > (S.estrelas[r.topic] || 0)) S.estrelas[r.topic] = nStars;
      if(r.certas === ROUND_SIZE){ award("perfeita"); confetti(); }
    }
    award("primeira");
    save();
    const tema = r.topic === "mix" ? pick(TOPICS) : r.topic;
    const curios = missaoExtra(WORLDS[tema]).curiosidades || [];
    const c = curios.length ? pick(curios) : null;
    const msg = blitz ? (novoRecorde ? "⚡ Novo recorde!" : "⚡ Tempo!") :
      nStars === 3 ? "🏆 Fantástico!" : nStars === 2 ? "🌟 Muito bem!" : nStars === 1 ? "👍 Bom treino!" : "💪 Cada erro é treino — vamos outra vez?";
    $("ar-result").innerHTML =
      '<div class="ar-result-card">'+
        '<p class="ar-result-msg">'+msg+'</p>'+
        (blitz ? '<p class="ar-big">'+r.certas+'<small> certas em '+BLITZ_SECONDS+' s</small></p><p class="ar-small">Recorde neste tema: '+(S.recorde[r.topic]||0)+'</p>'
               : '<p class="ar-big-stars" aria-label="'+nStars+' estrelas">'+stars(nStars)+'</p><p class="ar-big">'+r.certas+'<small>/'+ROUND_SIZE+' certas</small></p>')+
        '<div class="ar-result-stats"><div><b>+'+r.xp+'</b><span>XP</span></div><div><b>🔥 '+r.maxCombo+'</b><span>melhor combo</span></div><div><b>'+S.hoje.certas+'/'+DAILY_GOAL+'</b><span>meta de hoje</span></div></div>'+
        (r.subiu.length ? '<p class="ar-up">⬆️ Subiste de nível em: '+r.subiu.map(t => esc(WORLDS[t].title)).join(", ")+'</p>' : '')+
        (r.medalhas.length ? '<p class="ar-up">🏅 Medalhas novas: '+r.medalhas.map(m => MEDALHAS[m].icon+" "+MEDALHAS[m].nome).join(", ")+'</p>' : '')+
        '<div class="ar-result-actions">'+
          '<button type="button" class="ar-btn primary" id="ar-again">🔁 Mais uma ronda</button>'+
          '<button type="button" class="ar-btn" id="ar-switch">'+(blitz ? '🎯 Mudar para Treino' : '⚡ Experimentar Relâmpago')+'</button>'+
          '<button type="button" class="ar-btn" id="ar-lobby-btn">📚 Outro tema</button>'+
          (r.topic !== "mix" ? '<a class="ar-btn" href="resumo.html?w='+r.topic+'">📄 Página-resumo</a>' : '')+
        '</div>'+
        (c ? '<div class="ar-curio"><p><b>💡 Sabias que…?</b></p><p>'+esc(c.t)+'</p><small>📚 Fonte: '+esc(c.fonte)+'</small></div>' : '')+
      '</div>';
    show("ar-result");
    $("ar-again").addEventListener("click", () => start(r.topic));
    $("ar-switch").addEventListener("click", () => { S.modo = blitz ? "treino" : "relampago"; save(); start(r.topic); });
    $("ar-lobby-btn").addEventListener("click", () => { renderLobby(); show("ar-lobby"); });
    $("ar-again").focus({preventScroll:true});
    round = null;
    renderPlayer();
  }

  /* ---------- start ---------- */
  renderPlayer(); renderLobby();
  // Never replace unacknowledged local gains with another tab's state.
  MissaoArmazem.aoMudar(k => {
    if(k !== "arena" && k !== null) return;
    if(!MissaoArmazem.temPendentes("arena")) carregar();
    renderPlayer();
    if(!round) renderLobby();
  });
  window.MissaoArena = {
    start: t => { if(TOPICS.indexOf(t) !== -1 || t === "mix") start(t); },
    lobby: () => { if(!round){ renderPlayer(); renderLobby(); show("ar-lobby"); } }
  };
})();
