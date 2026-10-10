/* Página inicial: escolher o ano e a disciplina */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function load(key, fallback){ try{ const v = localStorage.getItem(key); return v===null ? fallback : JSON.parse(v); }catch(e){ return fallback; } }

  /* subjects still being prepared for the 5.º ano */
  const SUBJECTS_5 = [
    {name:"Português", icon:"📖"}, {name:"Matemática", icon:"🔢"}, {name:"Inglês", icon:"🌐"},
    {name:"HGP", icon:"📜"}, {name:"Ciências Naturais", icon:"🔬"}
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

  document.getElementById("grid-6").innerHTML = MISSAO_SUBJECTS_6.map((s, i) => {
    const p = progress(s);
    return '<a class="subject-card" href="6ano.html#'+s.key+'" style="--wc:var(--m'+(i+1)+');--wc-bg:var(--m'+(i+1)+'-bg)">'+
      '<span class="subject-icon" aria-hidden="true">'+s.icon+'</span>'+
      '<b>'+esc(s.name)+'</b>'+
      '<small>'+s.worlds.length+' mundos · '+p.xpMax+' XP</small>'+
      '<span class="mini-bar" aria-hidden="true"><span style="width:'+p.pct+'%"></span></span>'+
      '<small class="subject-done">'+(p.done ? p.done+'/'+p.total+' missões · '+p.xp+' XP' : 'Ainda por começar')+'</small>'+
      inside(s)+
    '</a>';
  }).join("");

  document.getElementById("grid-5").innerHTML = SUBJECTS_5.map(s =>
    '<div class="subject-card soon" aria-disabled="true">'+
      '<span class="subject-icon" aria-hidden="true">'+s.icon+'</span>'+
      '<b>'+esc(s.name)+'</b><small>Em preparação</small>'+
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

  /* year tabs (remembered) */
  const tabs = Array.from(document.querySelectorAll(".year-tab"));
  function show(year){
    tabs.forEach(t => { const on = t.dataset.year===year; t.classList.toggle("active", on); t.setAttribute("aria-selected", on); });
    document.querySelectorAll(".year-panel").forEach(p => { p.hidden = p.dataset.yearPanel !== year; });
    try{ localStorage.setItem("home_year", year); }catch(e){}
  }
  tabs.forEach(t => t.addEventListener("click", () => show(t.dataset.year)));
  let year = "6";
  try{ const y = localStorage.getItem("home_year"); if(y==="5"||y==="6") year = y; }catch(e){}
  show(year);
})();
