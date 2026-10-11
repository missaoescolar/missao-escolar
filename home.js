/* Página inicial: escolher o ano e a disciplina */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function load(key, fallback){ return MissaoArmazem.ler(key, fallback); }

  /* the school years. Only the 6.º ano is ready; the others show their subjects as "Em preparação".
     Subjects follow the Portuguese curriculum (Aprendizagens Essenciais) for each cycle. */
  const P1 = [["Português","📖"],["Matemática","🔢"],["Estudo do Meio","🌍"],["Inglês","🌐"]];
  const P2 = [["Português","📖"],["Matemática","🔢"],["Inglês","🌐"],["HGP","📜"],["Ciências Naturais","🔬"]];
  const P3 = [["Português","📖"],["Matemática","🔢"],["Inglês","🌐"],["Francês ou Espanhol","🗣️"],["História","🏛️"],["Geografia","🗺️"],["Ciências Naturais","🔬"],["Físico-Química","⚗️"]];
  const YEARS = [
    {y:"3", ciclo:"1.º ciclo", soon:P1}, {y:"4", ciclo:"1.º ciclo", soon:P1},
    {y:"5", ciclo:"2.º ciclo", soon:P2}, {y:"6", ciclo:"2.º ciclo", ready:true, list:MISSAO_SUBJECTS_6},
    {y:"7", ciclo:"3.º ciclo", ready:true, list:MISSAO_SUBJECTS_7, soon:P3.filter(s => s[0] !== "Ciências Naturais")},
    {y:"8", ciclo:"3.º ciclo", soon:P3}, {y:"9", ciclo:"3.º ciclo", soon:P3}
  ];
  function progress(s){
    const state = load(s.store, {});
    let total=0, done=0, xp=0, xpMax=0;
    s.worlds.forEach(w => w.missions.forEach((m,i) => {
      total++; xpMax += m.xp;
      if(state[w.id+"-"+i]){ done++; xp += m.xp; }
    }));
    return {total, done, xp, xpMax, pct: total ? Math.round(done/total*100) : 0};
  }

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
    const p = progress(s);
    return '<a class="subject-card" href="'+(s.page || '6ano.html')+'#'+s.key+'" style="--wc:var(--m'+(i+1)+');--wc-bg:var(--m'+(i+1)+'-bg)">'+
      '<span class="subject-icon" aria-hidden="true">'+s.icon+'</span>'+
      '<b>'+esc(s.name)+'</b>'+
      '<small>'+s.worlds.length+' mundos · '+p.xpMax+' XP</small>'+
      '<span class="mini-bar" aria-hidden="true"><span style="width:'+p.pct+'%"></span></span>'+
      '<small class="subject-done">'+(p.done ? p.done+'/'+p.total+' missões · '+p.xp+' XP' : 'Ainda por começar')+'</small>'+
      inside(s)+
    '</a>';
  }).join("");
  const soonCards = list => list.map(s =>
    '<div class="subject-card soon" aria-disabled="true">'+
      '<span class="subject-icon" aria-hidden="true">'+s[1]+'</span>'+
      '<b>'+esc(s[0])+'</b><small>Em preparação</small>'+
    '</div>').join("");
  document.getElementById("year-tabs").innerHTML = YEARS.map(Y =>
    '<button type="button" class="year-tab'+(Y.ready ? '' : ' soon')+'" role="tab" data-year="'+Y.y+'">'+Y.y+'.º ano</button>').join("");
  document.getElementById("year-panels").innerHTML = YEARS.map(Y =>
    '<section class="year-panel" data-year-panel="'+Y.y+'" hidden>'+
      '<p class="year-caption">'+(Y.ready ? 'Disciplinas do '+Y.y+'.º ano — toca numa para começar'+(Y.soon ? ' (as outras estão em preparação)' : '') : Y.y+'.º ano ('+Y.ciclo+') — em preparação')+'</p>'+
      '<div class="subject-grid">'+(Y.ready ? cards(Y.list) : '')+(Y.soon ? soonCards(Y.soon) : '')+'</div>'+
    '</section>').join("");
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

  /* year tabs (remembered) */
  const tabs = Array.from(document.querySelectorAll(".year-tab"));
  function show(year){
    tabs.forEach(t => { const on = t.dataset.year===year; t.classList.toggle("active", on); t.setAttribute("aria-selected", on); });
    document.querySelectorAll(".year-panel").forEach(p => { p.hidden = p.dataset.yearPanel !== year; });
    MissaoArmazem.gravarTexto("home_year", year);
  }
  tabs.forEach(t => t.addEventListener("click", () => show(t.dataset.year)));
  let year = "6";
  const y = MissaoArmazem.lerTexto("home_year", null); if(YEARS.some(Y => Y.y===y)) year = y;
  show(year);
})();
