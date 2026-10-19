/* Página inicial: escolher o ano, o objetivo (perceber, rever, teste) e a disciplina */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function load(key, fallback){ return MissaoArmazem.ler(key, fallback); }

  /* the school years. Only the 6.º and 7.º anos have subjects ready; the others show them as "Em preparação".
     Subjects follow the Portuguese curriculum (Aprendizagens Essenciais) for each cycle. */
  const P1 = [["Português","📖"],["Matemática","🔢"],["Estudo do Meio","🌍"],["Inglês","🌐"]];
  const P2 = [["Português","📖"],["Matemática","🔢"],["Inglês","🌐"],["HGP","📜"],["Ciências Naturais","🔬"]];
  const P3 = [["Português","📖"],["Matemática","🔢"],["Inglês","🌐"],["Francês ou Espanhol","🗣️"],["História","🏛️"],["Geografia","🗺️"],["Ciências Naturais","🔬"],["Físico-Química","⚗️"]];
  const YEARS = [
    {y:"3", ciclo:"1.º ciclo", soon:P1}, {y:"4", ciclo:"1.º ciclo", soon:P1},
    {y:"5", ciclo:"2.º ciclo", soon:P2}, {y:"6", ciclo:"2.º ciclo", ready:true, list:MISSAO_SUBJECTS_6},
    {y:"7", ciclo:"3.º ciclo", ready:true, list:MISSAO_SUBJECTS_7, soon:P3.filter(s => s[0] !== "Ciências Naturais" && s[0] !== "Físico-Química")},
    {y:"8", ciclo:"3.º ciclo", soon:P3}, {y:"9", ciclo:"3.º ciclo", soon:P3}
  ];
  const READY = YEARS.filter(Y => Y.ready);

  /* the three goals, shown after the year. Saved as home_intent: app.js reads it to open each theme at the right stage */
  const INTENTS = [
    {id:"perceber", icon:"📖", t:"Quero aprender", s:"Explicações passo a passo", d:"Cada tema abre no 📖 Aprender: exemplos resolvidos, animações e resumo."},
    {id:"rever", icon:"🔁", t:"Quero rever", s:"Uma parte de cada vez", d:"Cada tema abre no 🎯 Praticar, só com esse tema. Há também a Missão de hoje."},
    {id:"teste", icon:"📝", t:"Tenho teste", s:"Praticar o que já sei", d:"Teste sobre um tema: abre-o no 🎯 Praticar. Sobre tudo: a 🏆 Revisão Final."}
  ];
  // asked on every visit (today it may be a test, tomorrow a new theme): nothing is pre-selected,
  // and the subjects only appear once a goal is chosen. The last choice is still saved for app.js.
  let intent = null;
  if(location.hash === "#disciplinas"){ const g = MissaoArmazem.lerTexto("home_intent", null); if(INTENTS.some(I => I.id === g)) intent = g; }   // reload on screen 3

  function progress(s){
    const state = load(s.store, {});
    let total=0, done=0, xp=0, xpMax=0, here=null;
    s.worlds.forEach(w => {
      let open = false;
      w.missions.forEach((m,i) => {
        total++; xpMax += m.xp;
        if(state[w.id+"-"+i]){ done++; xp += m.xp; } else open = true;
      });
      if(open && !here) here = w;   // the first world with missions still to do
    });
    return {total, done, xp, xpMax, here, pct: total ? Math.round(done/total*100) : 0};
  }

  /* a subject card always opens its map, with every world open and in any order:
     a child may need one theme only. The goal (saved as home_intent) decides where each world opens there. */
  function destino(s){
    return {href: (s.page || "6ano.html")+"#"+s.key, txt:"🗺️ Escolher entre os "+s.worlds.length+" temas"};
  }
  /* "Continuar de onde ficaste" goes straight to the world half done */
  function continuar(s, p){ return (s.page || "6ano.html")+"#"+s.key+"/"+p.here.id; }

  /* what each subject has inside (the Arena and the Oficina live inside their subject; animations inside their worlds) */
  const EXTRAS = {math:"🎮 Arena de Matemática", pt:"✍️ Oficina de Escrita"};
  function inside(s){
    const n = window.MissaoAnim ? s.worlds.reduce((a, w) => a + MissaoAnim.doMundo(w.id).length, 0) : 0;
    const bits = [];
    if(EXTRAS[s.key]) bits.push(EXTRAS[s.key]);
    if(n) bits.push("🎬 "+n+" animaç"+(n===1 ? "ão" : "ões"));
    return bits.length ? '<span class="subject-inside">'+bits.map(b => '<i>'+b+'</i>').join("")+'</span>' : '';
  }

  const cards = list => list.map((s, i) => {
    const p = progress(s), go = destino(s);
    return '<a class="subject-card" href="'+go.href+'" style="--wc:var(--m'+(i+1)+');--wc-bg:var(--m'+(i+1)+'-bg)">'+
      '<span class="subject-icon" aria-hidden="true">'+s.icon+'</span>'+
      '<b>'+esc(s.name)+'</b>'+
      '<small>'+s.worlds.length+' mundos · '+p.xpMax+' XP</small>'+
      '<span class="mini-bar" aria-hidden="true"><span style="width:'+p.pct+'%"></span></span>'+
      '<small class="subject-done">'+(p.done ? p.done+'/'+p.total+' missões · '+p.xp+' XP' : 'Ainda por começar')+'</small>'+
      '<span class="subject-go">'+esc(go.txt)+'&nbsp;→</span>'+
      inside(s)+
    '</a>';
  }).join("");
  const soonCards = list => list.map(s =>
    '<div class="subject-card soon" aria-disabled="true">'+
      '<span class="subject-icon" aria-hidden="true">'+s[1]+'</span>'+
      '<b>'+esc(s[0])+'</b><small>Em preparação</small>'+
    '</div>').join("");

  /* streak from the activity log written by app.js */
  const log = new Set(load("activity_log", []));
  const key = d => d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  const cur = new Date();
  if(!log.has(key(cur))) cur.setDate(cur.getDate()-1);
  let streak = 0;
  while(log.has(key(cur))){ streak++; cur.setDate(cur.getDate()-1); }
  document.getElementById("home-streak").textContent = streak
    ? "🔥 "+streak+" dia"+(streak===1?"":"s")+" seguido"+(streak===1?"":"s")+" a jogar"
    : "✨ Começa hoje uma sequência nova, sem pressão";

  /* remembered choices: goal and year (the year is asked once; afterwards it shows as "6.º ano · Mudar") */
  const savedYear = MissaoArmazem.lerTexto("home_year", null);
  let year = READY.some(Y => Y.y === savedYear) ? savedYear : null;
  let showSoon = false;

  /* "Continuar de onde ficaste": the last subject used, if it has a world half done */
  (function(){
    const last = MissaoArmazem.lerTexto("active_subject", null);
    let best = null;
    READY.forEach(Y => Y.list.forEach(s => {
      const p = progress(s);
      if(!p.done || !p.here) return;
      if(!best || s.key === last) best = {s, p, Y};
    }));
    if(!best) return;
    const a = document.getElementById("home-resume");
    a.href = continuar(best.s, best.p);
    a.innerHTML = '<span><b>Continuar de onde ficaste</b><small>'+esc(best.s.name)+' · '+best.Y.y+'.º ano · Mundo '+best.p.here.num+': '+esc(best.p.here.title)+'</small></span><span class="go">Retomar →</span>';
    a.hidden = false;
  })();

  const yearPick = document.getElementById("year-pick");
  const intentGrid = document.getElementById("intent-grid");
  const grid = document.getElementById("subject-grid");
  const crumbs = document.getElementById("home-crumbs");
  const soonBtn = document.getElementById("show-soon");
  const soonYears = document.getElementById("soon-years");

  /* the screen comes from the address (#objetivo, #disciplinas), so the browser's back button works */
  function screen(){
    if(location.hash === "#disciplinas" && year && intent) return 3;
    if(location.hash === "#objetivo" && year) return 2;
    return 1;
  }
  function go(n){ const h = n===3 ? "#disciplinas" : n===2 ? "#objetivo" : ""; if(location.hash !== h) location.hash = h; else render(); }
  window.addEventListener("hashchange", render);

  function render(){
    const n = screen(), Y = YEARS.find(Y => Y.y === year), I = INTENTS.find(I => I.id === intent);
    document.querySelectorAll(".home-screen").forEach(s => { s.hidden = Number(s.dataset.screen) !== n; });
    document.getElementById("home-tools").hidden = n !== 1;
    crumbs.hidden = n === 1;
    crumbs.innerHTML = '<button type="button" class="ghost-btn" data-back>← Voltar</button><span>'+
      (Y ? '<b>'+Y.y+'.º ano</b>' : '')+(n === 3 && I ? ' › <b>'+I.icon+' '+I.t+'</b>' : '')+'</span>';

    // year cards (layout «Caderno Vivo»): cycle, year, the subjects it has, and one clear button
    yearPick.innerHTML = '<div class="year-tabs year-cards">'+READY.map(Y =>
      '<button type="button" class="year-tab year-card'+(Y.y===year ? ' active' : '')+'" data-year="'+Y.y+'" aria-pressed="'+(Y.y===year)+'">'+
        '<span class="yc-ciclo">'+(Number(Y.y) <= 6 ? '2.º ciclo' : '3.º ciclo')+(Y.y===year ? ' · o teu ano' : '')+'</span>'+
        '<span class="yc-ano">'+Y.y+'.º ano</span>'+
        '<span class="yc-disc">'+Y.list.map(s => '<i>'+esc(s.name)+'</i>').join("")+'</span>'+
        '<span class="yc-go">Entrar no '+Y.y+'.º ano →</span></button>').join("")+'</div>'+
      '<p class="year-caption">'+(year ? 'O teu ano está marcado: toca nele para continuar.' : 'Fica guardado para a próxima vez.')+'</p>';
    intentGrid.innerHTML = INTENTS.map(I =>
      '<button type="button" class="intent-card'+(I.id===intent ? ' on' : '')+'" data-intent="'+I.id+'" aria-pressed="'+(I.id===intent)+'">'+
        '<span class="intent-icon" aria-hidden="true">'+I.icon+'</span><b>'+I.t+'</b><span class="intent-sub">'+I.s+'</span><small>'+I.d+'</small>'+
      '</button>').join("");
    grid.innerHTML = n === 3 && Y ? cards(Y.list) + (showSoon && Y.soon ? soonCards(Y.soon) : '') : '';
    soonBtn.textContent = showSoon ? "Esconder o que está em construção" : "Ver o que está em construção";
    soonBtn.setAttribute("aria-expanded", showSoon);
    soonYears.hidden = !showSoon;
    soonYears.textContent = "Em preparação: "+YEARS.filter(Y => !Y.ready).map(Y => Y.y+".º").join(", ").replace(/, ([^,]*)$/, " e $1")+" ano.";
    window.scrollTo(0, 0);
  }

  yearPick.addEventListener("click", e => {
    const b = e.target.closest("[data-year]"); if(!b) return;
    year = b.dataset.year; MissaoArmazem.gravarTexto("home_year", year); go(2);
  });
  intentGrid.addEventListener("click", e => {
    const b = e.target.closest("[data-intent]"); if(!b) return;
    intent = b.dataset.intent; MissaoArmazem.gravarTexto("home_intent", intent); go(3);
  });
  crumbs.addEventListener("click", e => { if(e.target.closest("[data-back]")) go(screen() - 1); });
  soonBtn.addEventListener("click", () => { showSoon = !showSoon; render(); });
  render();
})();
