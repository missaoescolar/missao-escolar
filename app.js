(function(){
  function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }
  function shuffleQuizOptions(q){
    const idx = q.opts.map(function(_,i){ return i; });
    for(let i=idx.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=idx[i]; idx[i]=idx[j]; idx[j]=t; }
    const newOpts = idx.map(function(i){ return q.opts[i]; });
    const newCorrect = idx.indexOf(q.correct);
    return Object.assign({}, q, {opts:newOpts, correct:newCorrect});
  }
  function store(key){ try{ return JSON.parse(localStorage.getItem(key)||"{}"); }catch(e){ return {}; } }
  function save(key, s){ try{ localStorage.setItem(key, JSON.stringify(s)); }catch(e){} }

  function dateKey(d){
    const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
    return y+"-"+m+"-"+day;
  }
  function todayStr(){ return dateKey(new Date()); }
  function getActivityLog(){ try{ return JSON.parse(localStorage.getItem("activity_log")||"[]"); }catch(e){ return []; } }
  function logActivityToday(){
    try{
      const log = getActivityLog();
      const t = todayStr();
      if(log.indexOf(t)===-1){ log.push(t); localStorage.setItem("activity_log", JSON.stringify(log)); }
    }catch(e){}
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
      '</div>';
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
    MISSAO_SUBJECTS_6.forEach(function(s){
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
      const again = el("button","wheel-btn","🔁 Outra vez, com as perguntas baralhadas");
      again.type = "button";
      again.addEventListener("click", start);
      box.appendChild(again);
      if(n && score===n){ playChime(); burstConfetti(); }
    }
    start();
    return {restart:start};
  }

  /* ---------- "🔥 Mais difícil": swaps every quiz for the harder question bank (was the Modo Desafio button) ---------- */
  const quizRefreshers = [];
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
  function curioCardsOff(){ try{ return localStorage.getItem("curio_cards_off")==="1"; }catch(e){ return false; } }
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
      try{ localStorage.setItem("curio_cards_off","1"); }catch(e){}
      hideCurioCard();
      showToast("Ok! Continuas a ver curiosidades no botão 💡 de cada mundo.");
    });
    clearTimeout(curioCardTimer);
    curioCardTimer = setTimeout(hideCurioCard, 20000);
  }
  function hideCurioCard(){ if(curioCardEl) curioCardEl.classList.remove("show"); }

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
    const state = store(cfg.storeKey);
    const worlds = cfg.worlds;
    const mapNav = document.getElementById(cfg.navId);
    const main = document.getElementById(cfg.mainId);
    const mapView = document.getElementById("map-"+cfg.key);
    const opened = {};            // world id -> setStage(k)
    let current = null;           // open world id, "revisao" or null (= map)

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
    function renderMap(){
      const nx = worlds.find(function(w){ return !isComplete(w); });
      let html = "";
      worlds.forEach(function(w){
        const d = worldDone(w), n = w.missions.length, done = isComplete(w), isNext = (w===nx);
        html += '<a class="tile'+(done?' done':'')+(isNext?' next':'')+'" href="#'+cfg.key+'/'+w.id+'" style="--wc:var(--'+w.c+');--wc-bg:var(--'+w.c+'-bg)">'+
          '<span class="ic" aria-hidden="true">'+(done?'✓':w.icon)+'</span><small>Mundo '+w.num+'</small><b>'+w.title+'</b>'+
          '<span class="st">'+(done ? 'Concluído ⭐' : d+'/'+n+' missões')+(isNext ? ' · continua aqui' : '')+'</span></a>';
      });
      html += '<a class="tile review" href="#'+cfg.key+'/revisao">'+
        '<span class="ic" aria-hidden="true">🏆</span><small>Os '+worlds.length+' mundos</small><b>Revisão Final</b>'+
        '<span class="st">10 perguntas à mistura</span></a>';
      mapNav.innerHTML = html;
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
        speak(w.lead+". "+w.resumo.map(stripHtml).join(". "));
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
        A.appendChild(list);
      }

      (w.posters||[]).forEach(function(p){
        const fig = document.createElement("figure");
        fig.className = "poster-fig";
        const cap = document.createElement("figcaption");
        cap.textContent = p.title;
        fig.appendChild(cap);
        fig.insertAdjacentHTML("beforeend", p.svg);
        A.appendChild(fig);
      });

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
        A.appendChild(tlWrap);
      }

      (w.routes||[]).forEach(function(route, ri){
        const fig = document.createElement("figure");
        fig.className = "route-fig";
        const cap = document.createElement("figcaption");
        cap.textContent = route.title;
        fig.appendChild(cap);
        fig.insertAdjacentHTML("beforeend", buildRouteSvg(route, w.id+"-"+ri));
        A.appendChild(fig);
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
        A.appendChild(dWrap);
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
        A.appendChild(mWrap);
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
      A.appendChild(resumoWrap);

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
        A.appendChild(gWrap);
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
        const detail = el("div","mdetail", m.d+" · <i>"+m.f+"</i>");
        const xp = el("span","mxp","+"+m.xp+" XP");
        cb.addEventListener("change", function(){
          const wasComplete = isComplete(w);
          state[key] = cb.checked; save(cfg.storeKey, state);
          title.classList.toggle("done", cb.checked);
          if(cb.checked) logActivityToday();
          renderXP(); renderWorldProgress(w); renderMap(); renderTodayPanel();
          if(isComplete(w) && !wasComplete){ showToast("🎉 Mundo "+w.num+" concluído!"); playChime(); burstConfetti(); }
          else if(cb.checked){ showCurioCard(w); }
        });
        row.appendChild(cb); row.appendChild(title); row.appendChild(detail); row.appendChild(xp);
        missionsBox.appendChild(row);
      });
      missionsWrap.appendChild(missionsBox);
      P.appendChild(missionsWrap);
      wheelBtn.addEventListener("click", function(){
        const open = Array.prototype.filter.call(missionsBox.querySelectorAll(".mission"), function(r){ return !r.querySelector("input").checked; });
        if(!open.length){ showToast("🎉 Já fizeste todas as missões deste mundo!"); return; }
        const pick = open[Math.floor(Math.random()*open.length)];
        if(typeof pick.scrollIntoView === "function") pick.scrollIntoView({behavior:"smooth", block:"center"});
        pick.classList.remove("picked"); void pick.offsetWidth; pick.classList.add("picked");
        setTimeout(function(){ pick.classList.remove("picked"); }, 1800);
      });

      if(w.quiz && w.quiz.length){
        const qbox = el("div","");
        const hasHard = !!(extra.desafio||[]).length;
        const quiz = mountQuiz1(qbox, {
          title: function(){ return (hasHard && missaoChallengeOn()) ? "🔥 Desafio" : "✅ Testa-te"; },
          questions: function(){ return shuffled(missaoQuizFor(w)); },
          extra: hasHard ? makeChallengeToggle() : null
        });
        P.appendChild(qbox);
        quizRefreshers.push(quiz.restart);
      }

      // the other half of the subject, one click away from where it is useful
      const OFICINA = {p5:["narrativo","uma história"], p6:["poema","um poema"]};
      if(OFICINA[w.id]){
        const of = OFICINA[w.id];
        P.appendChild(bigLink("✍️", "Agora tu: escrever "+of[1], "Na Oficina de Escrita, com pistas quando ficares sem ideias.", function(){
          openView("pt", "escrita");
          if(window.MissaoEscrita) window.MissaoEscrita.comecar(of[0]);
        }));
      }
      if(MATH_WORLDS.indexOf(w) !== -1){
        P.appendChild(bigLink("🎮", "Quero mais! Treinar este mundo na Arena", "Exercícios interativos sem fim, com desenhos e níveis que se ajustam a ti.", function(){
          openView("math", "arena");
          if(window.MissaoArena) window.MissaoArena.start(w.id);
        }));
      }
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

      if(w.resources && w.resources.length){
        const resWrap = el("div","");
        resWrap.appendChild(el("p","subhead","🔗 Sites para explorar <small class=\"muted\">— abrem numa aba nova</small>"));
        const rg = el("div","res-grid");
        w.resources.forEach(function(r){
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
      extra: makeChallengeToggle()
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

    renderMap();
    renderXP();

    /* show the map, one world (optionally at a stage) or the review */
    function show(target, stage){
      if(target && target!=="revisao" && !opened[target]) target = null;
      if(current && current!==target){
        if(window.MissaoAnim && MissaoAnim.fechar) MissaoAnim.fechar();
        if(window.speechSynthesis) window.speechSynthesis.cancel();
      }
      current = target;
      if(mapView) mapView.hidden = !!target;
      worlds.forEach(function(w){ document.getElementById(w.id).hidden = (w.id!==target); });
      review.hidden = (target!=="revisao");
      if(target && target!=="revisao") opened[target](stage || "aprender");
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

  // the subjects (and their order) come from MISSAO_SUBJECTS_6 in shared.js
  const SUBJ = {};
  MISSAO_SUBJECTS_6.forEach(function(s){
    SUBJ[s.key] = mountSubject({worlds:s.worlds, storeKey:s.store, key:s.key, name:s.name,
      navId:"jump-nav-"+s.key, mainId:"worlds-"+s.key, xpTotalId:"xp-total-"+s.key, xpMaxId:"xp-max-"+s.key});
  });
  renderTodayPanel();

  /* ---- top bar: ❓ Ajuda and ⏸️ Pausa ---- */
  const helpBtn = document.getElementById("help-btn");
  if(helpBtn) helpBtn.addEventListener("click", function(){
    openModal("❓ Como funciona",
      '<ol class="help-list">'+
        '<li><b>Escolhe a disciplina</b> nos separadores e depois <b>um mundo</b> no mapa. Não tem de ser por ordem.</li>'+
        '<li>Cada mundo tem <b>3 passos</b>: 📖 Aprender → 🎯 Praticar → 🔭 Explorar. Podes saltar entre eles quando quiseres.</li>'+
        '<li>O quadro <b>📋 Para o teste</b> tem a matéria a sério — é essa que sai nas fichas.</li>'+
        '<li>Fizeste uma missão? <b>Risca a caixa</b> e o XP soma-se sozinho.</li>'+
        '<li>Queres perguntas mais difíceis? Toca em <b>🔥 Mais difícil</b> no quiz.</li>'+
        '<li>Cansaste-te? Faz uma <b>⏸️ pausa</b>. Tudo fica guardado e continuas quando quiseres.</li>'+
      '</ol>', helpBtn);
  });
  const pauseBtn = document.getElementById("pause-btn");
  if(pauseBtn) pauseBtn.addEventListener("click", function(){ openBreakModal(pauseBtn); });

  /* ---- subject tabs ---- */
  const panels = {};
  MISSAO_SUBJECTS_6.forEach(function(s){ panels[s.key] = document.getElementById("subj-"+s.key); });
  const tabBtns = Array.prototype.slice.call(document.querySelectorAll("#subject-tabs .tab-btn"));
  function activate(subject){
    Object.keys(panels).forEach(function(k){ panels[k].hidden = (k!==subject); });
    tabBtns.forEach(function(b){ b.classList.toggle("active", b.dataset.subject===subject); });
    try{ localStorage.setItem("active_subject", subject); }catch(e){}
  }

  /* ---- views inside a subject: Matemática → Mundos | Arena; Português → Mundos | Oficina de Escrita ---- */
  function showView(subject, view){
    const panel = panels[subject];
    if(!panel) return;
    const views = panel.querySelectorAll(".subview");
    if(!views.length) return;
    if(!Array.prototype.some.call(views, function(v){ return v.dataset.view === view; })) view = "mundos";
    views.forEach(function(v){ v.hidden = v.dataset.view !== view; });
    panel.querySelectorAll(".subtab").forEach(function(b){ const on = b.dataset.view === view; b.classList.toggle("active", on); b.setAttribute("aria-selected", on); });
    if(view === "arena" && window.MissaoArena) window.MissaoArena.lobby();
  }

  /* 6ano.html#math → map · #math/n5 → world 5 · #math/n5/praticar → its 2nd stage · #math/revisao · #math/arena · #pt/escrita */
  function route(subject, part, stage){
    if(!panels[subject]) return;
    activate(subject);
    if(part==="arena" || part==="escrita"){ showView(subject, part); return; }
    showView(subject, "mundos");
    SUBJ[subject].show(part || null, stage);
  }
  function keepInView(){
    const tabs = document.getElementById("subject-tabs");
    if(tabs && tabs.getBoundingClientRect().top < 0) tabs.scrollIntoView({block:"start"});
  }
  let skipHash = null;
  function go(subject, part, stage){
    route(subject, part, stage);
    const h = "#"+subject+(part ? "/"+part : "")+(stage && stage!=="aprender" ? "/"+stage : "");
    if(location.hash !== h){ skipHash = h; location.hash = h; }
    keepInView();
  }
  function openView(subject, view){ go(subject, view==="mundos" ? null : view); }
  window.MissaoNav = {ir: go};

  tabBtns.forEach(function(b){ b.addEventListener("click", function(){ go(b.dataset.subject); }); });
  Object.keys(panels).forEach(function(k){
    panels[k].querySelectorAll(".subtab").forEach(function(b){ b.addEventListener("click", function(){ openView(k, b.dataset.view); }); });
  });

  function fromHash(){
    const parts = location.hash.slice(1).split("/");
    return panels[parts[0]] ? {subject:parts[0], part:parts[1] || null, stage:parts[2] || null} : null;
  }
  let initial = MISSAO_SUBJECTS_6[0].key;
  try{ const saved = localStorage.getItem("active_subject"); if(panels[saved]) initial = saved; }catch(e){}
  const h0 = fromHash();
  if(h0) route(h0.subject, h0.part, h0.stage); else route(initial);
  window.addEventListener("hashchange", function(){
    if(location.hash === skipHash){ skipHash = null; return; }
    skipHash = null;
    const h = fromHash();
    if(h){ route(h.subject, h.part, h.stage); keepInView(); }
  });

})();
