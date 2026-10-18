/* Oficina de Escrita: treino de teclado + escrita guiada com pistas "E agora?" */
(function(){
  const $ = id => document.getElementById(id);
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function load(key, fallback){ return MissaoArmazem.ler(key, fallback); }
  function store(key, v){ return MissaoArmazem.gravar(key, v); }   // true = saved
  function pick(list){ return list[Math.floor(Math.random()*list.length)]; }

  /* ---------- modal (same look as the main page) ---------- */
  let modal = null, returnFocus = null;
  function openModal(title, html, trigger){
    if(!modal){
      modal = document.createElement("div");
      modal.className = "modal-overlay";
      modal.setAttribute("role","dialog"); modal.setAttribute("aria-modal","true");
      modal.innerHTML = '<div class="modal-box"><button type="button" class="modal-close" aria-label="Fechar">✕</button><h3 class="modal-title"></h3><div class="modal-body"></div></div>';
      document.body.appendChild(modal);
      modal.addEventListener("click", e => { if(e.target===modal) closeModal(); });
      modal.querySelector(".modal-close").addEventListener("click", closeModal);
      document.addEventListener("keydown", e => { if(e.key==="Escape" && modal.classList.contains("open")) closeModal(); });
    }
    modal.querySelector(".modal-title").textContent = title;
    modal.querySelector(".modal-body").innerHTML = html;
    modal.classList.add("open");
    returnFocus = trigger || document.activeElement;
    modal.querySelector(".modal-close").focus();
  }
  function closeModal(){ if(modal) modal.classList.remove("open"); if(returnFocus && returnFocus.focus) returnFocus.focus(); }

  function curioHtml(c){ return '<p class="curio-text">'+esc(c.t)+'</p><p class="curio-src">📚 Fonte: '+esc(c.fonte)+'</p>'; }
  function openCurio(trigger){
    let i = Math.floor(Math.random()*ESCRITA_CURIOSIDADES.length);
    openModal("💡 Sabias que…?", '<div id="ws-curio">'+curioHtml(ESCRITA_CURIOSIDADES[i])+'</div><button type="button" class="ws-btn" id="ws-curio-next">Outra curiosidade →</button>', trigger);
    $("ws-curio-next").addEventListener("click", () => { i = (i+1) % ESCRITA_CURIOSIDADES.length; $("ws-curio").innerHTML = curioHtml(ESCRITA_CURIOSIDADES[i]); });
  }
  $("ws-curio-open").addEventListener("click", e => openCurio(e.currentTarget));
  // the workshop lives inside the Português tab: only react when it is actually on screen
  const onScreen = el => el.offsetParent !== null;

  /* ---------- tabs ---------- */
  const tabBtns = Array.from(document.querySelectorAll(".ws-tabs .tab-btn"));
  function activate(tab){
    document.querySelectorAll(".ws-panel").forEach(p => { p.hidden = p.dataset.panel !== tab; });
    tabBtns.forEach(b => { b.classList.toggle("active", b.dataset.tab===tab); b.setAttribute("aria-selected", b.dataset.tab===tab); });
    store("ws_tab", tab);
  }
  tabBtns.forEach(b => b.addEventListener("click", () => activate(b.dataset.tab)));
  activate(load("ws_tab", "teclado")==="escrever" ? "escrever" : "teclado");

  /* =====================================================================
     TECLADO
     ===================================================================== */
  function plain(html){ const d = document.createElement("div"); d.innerHTML = html; return d.textContent.replace(/\s+/g," ").trim(); }
  // split on . ! ? — but not after abbreviations like "D. Miguel", "S. Tomé", "ex.", "pp.", "n.º"
  function sentences(text){
    return text.split(/(?<!\b(?:D|S|Sr|Sra|Dr|Dra|ex|pp|p|séc|n\.º)\.)(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÂÊÔÀÇ"«(])/)
      .map(s => s.trim())
      .filter(s => s.split(/\s+/).length >= 4);
  }

  const POOLS = {fun: TECLADO_FRASES.slice()};
  [["pt",PT_WORLDS],["hgp",HGP_WORLDS],["math",MATH_WORLDS],["cn",CN_WORLDS],["eng",ENG_WORLDS]].forEach(([k, worlds]) => {
    POOLS[k] = [];
    worlds.forEach(w => w.resumo.forEach(r => { const p = plain(r); POOLS[k].push(p); sentences(p).forEach(s => POOLS[k].push(s)); }));
  });
  POOLS.mix = [].concat(POOLS.fun, POOLS.pt, POOLS.hgp, POOLS.math, POOLS.cn, POOLS.eng);
  const LEVELS = { short:[15,70], medium:[70,150], long:[150,400] };

  const tyTarget = $("ty-target"), tyInput = $("ty-input"), tyLive = $("ty-live"), tyResult = $("ty-result");
  const tySource = $("ty-source"), tyLevel = $("ty-level"), tyAccents = $("ty-accents"), tyClock = $("ty-clock");
  const prefs = load("ty_prefs", {source:"mix", level:"short", accents:false, clock:false});
  tySource.value = prefs.source; tyLevel.value = prefs.level; tyAccents.checked = prefs.accents; tyClock.checked = prefs.clock;

  let target = "", startedAt = 0, errors = 0, lastLen = 0, clockTimer = null, finished = false;

  function norm(ch){ return tyAccents.checked ? ch.normalize("NFD").replace(/[̀-ͯ]/g,"") : ch; }

  function newSentence(){
    const [min, max] = LEVELS[tyLevel.value];
    let pool = POOLS[tySource.value].filter(s => s.length >= min && s.length <= max);
    if(!pool.length) pool = POOLS[tySource.value];
    let next = pick(pool);
    if(pool.length > 1) while(next === target) next = pick(pool);
    target = next; startedAt = 0; errors = 0; lastLen = 0; finished = false;
    tyInput.value = ""; tyInput.disabled = false; tyResult.hidden = true;
    clearInterval(clockTimer);
    paint(); tyLive.textContent = "";
    if(onScreen(tyInput)) tyInput.focus({preventScroll:true});
  }

  function paint(){
    const typed = tyInput.value;
    let html = "";
    for(let i=0;i<target.length;i++){
      const ch = target[i];
      let cls = "";
      if(i < typed.length) cls = norm(typed[i])===norm(ch) ? "ok" : "err";
      else if(i === typed.length) cls = "cur";
      html += '<span class="'+cls+'">'+(ch===" " ? "&nbsp;" : esc(ch))+'</span>';
    }
    tyTarget.innerHTML = html;
  }

  function stats(){
    const typed = tyInput.value;
    let correct = 0;
    for(let i=0;i<Math.min(typed.length, target.length);i++) if(norm(typed[i])===norm(target[i])) correct++;
    const minutes = startedAt ? (Date.now()-startedAt)/60000 : 0;
    const wpm = minutes > 0 ? Math.round((correct/5)/minutes) : 0;
    const acc = typed.length ? Math.round(correct/Math.max(typed.length, 1)*100) : 100;
    return {correct, wpm, acc, seconds: Math.round(minutes*60)};
  }

  function finish(){
    finished = true; clearInterval(clockTimer); tyInput.disabled = true;
    const s = stats();
    const best = load("ty_best", {wpm:0});
    const record = s.wpm > best.wpm && s.acc >= 90;
    if(record) store("ty_best", {wpm:s.wpm, date:new Date().toISOString().slice(0,10)});
    const count = load("ty_count", 0) + 1; store("ty_count", count);
    const msg = s.acc === 100 ? "Perfeito, sem um único erro! 🏆" : s.acc >= 95 ? "Muito bem! 🌟" : s.acc >= 85 ? "Bom trabalho! 👍" : "Continua — a precisão vem com o treino. 💪";
    tyResult.innerHTML =
      '<p class="ty-msg">'+msg+'</p>'+
      '<div class="ty-stats">'+
        '<div><b>'+s.acc+'%</b><span>precisão</span></div>'+
        '<div><b>'+s.wpm+'</b><span>palavras por minuto</span></div>'+
        '<div><b>'+s.seconds+' s</b><span>tempo</span></div>'+
        '<div><b>'+errors+'</b><span>teclas trocadas</span></div>'+
      '</div>'+
      '<p class="ws-note">'+(record ? '🎉 Novo recorde pessoal! ' : 'O teu recorde: '+Math.max(best.wpm, record ? s.wpm : 0)+' palavras/minuto. ')+
      'Já treinaste '+count+' frase'+(count===1?'':'s')+'. Carrega em <kbd>Enter</kbd> para a próxima.</p>';
    tyResult.hidden = false;
    if(count % 5 === 0) setTimeout(() => openCurio(), 600); // a little reward every 5 sentences
  }

  tyInput.addEventListener("input", () => {
    if(finished) return;
    if(!startedAt && tyInput.value.length){
      startedAt = Date.now();
      if(tyClock.checked) clockTimer = setInterval(() => { tyLive.textContent = "⏱️ "+stats().seconds+" s"; }, 500);
    }
    const typed = tyInput.value;
    if(typed.length > lastLen){
      const i = typed.length - 1;
      if(i < target.length && norm(typed[i]) !== norm(target[i])) errors++;
    }
    lastLen = typed.length;
    paint();
    if(typed.length >= target.length) finish();
  });
  // Enter = next sentence (never a line break in this box)
  tyInput.addEventListener("keydown", e => { if(e.key==="Enter"){ e.preventDefault(); if(finished) newSentence(); } });
  document.addEventListener("keydown", e => { if(e.key==="Enter" && finished && onScreen($("tab-teclado")) && document.activeElement !== tyInput){ e.preventDefault(); newSentence(); } });
  $("ty-next").addEventListener("click", newSentence);
  [tySource, tyLevel, tyAccents, tyClock].forEach(c => c.addEventListener("change", () => {
    store("ty_prefs", {source:tySource.value, level:tyLevel.value, accents:tyAccents.checked, clock:tyClock.checked});
    newSentence();
  }));
  newSentence();

  /* =====================================================================
     ESCREVER
     ===================================================================== */
  const wrType = $("wr-type"), wrTitle = $("wr-title"), wrText = $("wr-text"), wrHint = $("wr-hint"), wrIdle = $("wr-idle");
  Object.keys(ESCRITA_TIPOS).forEach(k => {
    const t = ESCRITA_TIPOS[k];
    const o = document.createElement("option"); o.value = k; o.textContent = t.icon+" "+t.nome; wrType.appendChild(o);
  });

  const CAT_LABEL = {feliz:"😊 Diário feliz", atualidade:"🌍 Atualidade", passado:"🏛️ Viagem ao passado"};
  let draft = load("ws_draft", {title:"", type:"narrativo", text:"", theme:""});
  wrTitle.value = draft.title; wrType.value = ESCRITA_TIPOS[draft.type] ? draft.type : "narrativo"; wrText.value = draft.text;

  function words(t){ return (t.trim().match(/[^\s—–-]+/g) || []).length; }
  function saveDraft(){ draft = {title:wrTitle.value, type:wrType.value, text:wrText.value, theme:draft.theme}; return store("ws_draft", draft); }

  function stageIndex(){
    const t = ESCRITA_TIPOS[wrType.value], n = words(wrText.value);
    const ratio = n / t.alvo, k = t.etapas.length;
    if(ratio < 0.25) return 0;
    if(ratio < 0.75) return Math.min(1, k-1);
    return k-1;
  }

  function renderSteps(){
    const t = ESCRITA_TIPOS[wrType.value], cur = stageIndex();
    $("wr-steps").innerHTML = t.etapas.map((e,i) =>
      '<li class="'+(i<cur?"done":i===cur?"now":"")+'"><b>'+esc(e.nome)+'</b> <span>'+esc(e.ajuda)+'</span></li>').join("");
    const n = words(wrText.value);
    $("wr-count").textContent = n+" palavra"+(n===1?"":"s")+" · objetivo: cerca de "+t.alvo;
  }

  /* themes */
  function renderThemes(cat){
    document.querySelectorAll("#wr-cats .ws-chip").forEach(b => b.classList.toggle("active", b.dataset.cat===cat));
    const box = $("wr-themes");
    let items;
    if(cat === "tipos"){
      items = Object.keys(ESCRITA_TIPOS).map(k => ({tipo:k, titulo:ESCRITA_TIPOS[k].icon+" "+ESCRITA_TIPOS[k].nome, inicio:"", livre:true}));
    } else if(cat === "surpresa"){
      items = [pick(ESCRITA_TEMAS)];
    } else {
      items = ESCRITA_TEMAS.filter(t => t.cat === cat);
    }
    box.innerHTML = items.map((t,i) =>
      '<button type="button" class="ws-theme" data-i="'+i+'"><b>'+esc(t.titulo)+'</b><small>'+
      (t.livre ? 'Tema livre, com a estrutura deste tipo de texto' : esc(ESCRITA_TIPOS[t.tipo].icon+' '+ESCRITA_TIPOS[t.tipo].nome)+(t.cat?' · '+CAT_LABEL[t.cat]:''))+
      '</small></button>').join("");
    box.querySelectorAll(".ws-theme").forEach(b => b.addEventListener("click", () => useTheme(items[+b.dataset.i])));
  }
  document.querySelectorAll("#wr-cats .ws-chip").forEach(b => b.addEventListener("click", () => renderThemes(b.dataset.cat)));

  function useTheme(t){
    if(wrText.value.trim() && !confirm("Começar um texto novo com este tema? O texto atual vai para 'Os meus textos'.")) return;
    if(!archive()) return;
    wrType.value = t.tipo;
    wrTitle.value = t.livre ? "" : t.titulo;
    wrText.value = t.inicio ? t.inicio+" " : "";
    draft.theme = t.titulo;
    saveDraft(); renderSteps(); hideHint();
    wrText.focus();
    wrText.setSelectionRange(wrText.value.length, wrText.value.length);
  }

  /* ----- "E agora?" — a question about what could come next ----- */
  const STOP = new Set("Eu Ele Ela Eles Elas Nós Tu O A Os As Um Uma De Do Da Depois Quando Então Mas E No Na Em Por Para Com Hoje Ontem Amanhã Querido Querida Olá Era Foi Já Ao Se Que Como Onde Porque Isso Este Esta Aquele Aquela Mãe Pai Lisboa Portugal".split(" "));
  function lastName(text){
    // a capitalised word that isn't at the start of a sentence = probably a character's name
    const re = /(?:[^.!?\n—]\s)([A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]{2,})/g;
    let m, found = null;
    while((m = re.exec(text))) if(!STOP.has(m[1])) found = m[1];
    return found;
  }
  let lastHint = "";
  function nextHint(){
    const t = ESCRITA_TIPOS[wrType.value], text = wrText.value, n = words(text);
    const stage = t.etapas[stageIndex()];
    const extra = [];
    const tail = text.trim().split(/\s+/).slice(-35).join(" ");
    if(n > 25 && !/[.!?…]/.test(tail)) extra.push("Já há muitas palavras sem ponto final. Onde acaba esta frase?");
    if(n > 70 && !/\n\s*\n|\n/.test(text)) extra.push("Que tal começares um parágrafo novo? Carrega em Enter quando muda o momento ou a ideia.");
    if(wrType.value === "narrativo" && n > 80 && !/[—"«]/.test(text)) extra.push("Experimenta pôr uma personagem a falar. Começa a linha com um travessão (—).");
    const name = (wrType.value === "narrativo" || wrType.value === "diario") ? lastName(text) : null;
    if(name){
      extra.push("O que vai "+name+" fazer a seguir?");
      extra.push("Que segredo poderia "+name+" estar a esconder?");
      extra.push("Como se sente "+name+" neste momento? Mostra-o por um gesto, não só por palavras.");
    }
    let pool = stage.pistas.concat(extra).filter(h => h !== lastHint);
    const hint = pick(pool.length ? pool : stage.pistas);
    lastHint = hint;
    wrHint.innerHTML = '<span class="wr-stage">'+esc(t.icon+" "+stage.nome)+'</span> '+esc(hint);
    wrHint.hidden = false; wrIdle.hidden = true;
  }
  function hideHint(){ wrHint.hidden = true; }
  $("wr-next").addEventListener("click", nextHint);
  $("wr-twist").addEventListener("click", () => {
    const tw = pick(ESCRITA_REVIRAVOLTAS);
    wrHint.innerHTML = '<span class="wr-stage">🎲 Reviravolta</span> E se… '+esc(tw)+' <button type="button" class="ws-link" id="wr-use-twist">Usar no texto</button>';
    wrHint.hidden = false;
    $("wr-use-twist").addEventListener("click", () => {
      wrText.value = wrText.value.replace(/\s*$/, "") + (wrText.value.trim() ? "\n\n" : "") + tw + " ";
      saveDraft(); renderSteps(); wrText.focus();
    });
  });

  /* gentle nudge after 25 s without typing — only if there is already some text */
  let idleTimer = null;
  wrText.addEventListener("input", () => {
    saveDraft(); renderSteps(); wrIdle.hidden = true;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { if(wrText.value.trim() && wrHint.hidden && onScreen($("tab-escrever"))) wrIdle.hidden = false; }, 25000);
  });
  wrTitle.addEventListener("input", saveDraft);
  wrType.addEventListener("change", () => { saveDraft(); renderSteps(); hideHint(); });

  /* ----- saved texts ----- */
  function saved(){ return load("ws_saved", []); }
  /* puts the current text in "Os meus textos". Returns false if it could NOT be saved:
     then the text must stay in the box (the callers stop), and the child is told how to keep it.
     There is no limit on how many texts are kept, so an old text is never deleted without asking. */
  function archive(){
    if(!wrText.value.trim()) return true;
    const texto = {id:Date.now(), title:wrTitle.value || "Sem título", type:wrType.value, text:wrText.value, date:new Date().toLocaleDateString("pt-PT")};
    const r = MissaoArmazem.atualizar("ws_saved", [], list => { list.unshift(texto); });
    renderSaved();
    if(!r.ok) naoGuardou();
    return r.ok;
  }
  function naoGuardou(){
    openModal("😟 Não consegui guardar o texto",
      '<p>O teu texto <b>continua na caixa</b>, não se perdeu.</p>'+
      '<p>Para o guardares já, toca em <b>⬇️ Guardar .txt</b> — fica um ficheiro no computador. Depois pede a um adulto para ver em <a href="pais.html#guardar">Para pais</a> porque é que este browser não está a guardar.</p>');
  }
  function renderSaved(){
    const list = saved();
    $("wr-saved").innerHTML = list.length ? list.map(s =>
      '<li><button type="button" class="ws-link" data-open="'+s.id+'">'+esc(ESCRITA_TIPOS[s.type] ? ESCRITA_TIPOS[s.type].icon : "📄")+' '+esc(s.title)+'</button>'+
      '<small>'+esc(s.date)+' · '+words(s.text)+' palavras</small>'+
      '<button type="button" class="ws-link ws-share'+(s.partilhar ? ' on' : '')+'" data-share="'+s.id+'" aria-pressed="'+(s.partilhar ? 'true' : 'false')+'" title="Só os textos que escolheres aparecem no relatório dos pais">'+(s.partilhar ? '👪 Partilhado com os pais' : '👪 Partilhar com os pais')+'</button>'+
      '<button type="button" class="ws-link danger" data-del="'+s.id+'" aria-label="Apagar '+esc(s.title)+'">Apagar</button></li>').join("")
      : '<li class="ws-note">Ainda não guardaste nenhum texto. Quando tocares em ✅ Terminei!, ele aparece aqui.</li>';
    $("wr-saved").querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => {
      const s = saved().find(x => x.id === +b.dataset.open); if(!s) return;
      if(wrText.value.trim() && !confirm("Abrir este texto? O texto atual vai para 'Os meus textos'.")) return;
      if(!archive()) return;
      wrTitle.value = s.title; wrType.value = s.type; wrText.value = s.text;
      // only take it out of the list once it is safely saved as the text being written
      if(saveDraft()) MissaoArmazem.atualizar("ws_saved", [], list => list.filter(x => x.id !== s.id));
      renderSteps(); renderSaved(); wrText.focus();
    }));
    $("wr-saved").querySelectorAll("[data-share]").forEach(b => b.addEventListener("click", () => {
      MissaoArmazem.atualizar("ws_saved", [], list => list.map(x => x.id === +b.dataset.share ? Object.assign({}, x, {partilhar:!x.partilhar}) : x));
      renderSaved();
    }));
    $("wr-saved").querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => {
      if(!confirm("Apagar este texto para sempre?")) return;
      MissaoArmazem.atualizar("ws_saved", [], list => list.filter(x => x.id !== +b.dataset.del)); renderSaved();
    }));
  }

  $("wr-done").addEventListener("click", e => {
    const t = ESCRITA_TIPOS[wrType.value], n = words(wrText.value);
    if(!n){ openModal("✍️ Ainda não há texto", "<p>Escreve pelo menos uma frase e depois toca em ✅ Terminei!</p>", e.currentTarget); return; }
    const checks = t.rever.concat(["Comecei as frases com maiúscula e terminei com pontuação?","Li o texto em voz alta para ver se soa bem?"]);
    const c = pick(ESCRITA_CURIOSIDADES);
    openModal("🎉 Muito bem — escreveste "+n+" palavras!",
      '<p>Antes de dares por terminado, faz esta revisão rápida:</p>'+
      '<ul class="wr-review">'+checks.map((r,i) => '<li><label><input type="checkbox" id="rv'+i+'"> '+esc(r)+'</label></li>').join("")+'</ul>'+
      '<button type="button" class="ws-btn primary" id="wr-archive">📚 Guardar em "Os meus textos"</button>'+
      '<div class="wr-curio"><p class="curio-title">💡 Sabias que…?</p>'+curioHtml(c)+'</div>', e.currentTarget);
    $("wr-archive").addEventListener("click", () => {
      if(!archive()) return;
      wrText.value = ""; wrTitle.value = ""; draft.theme = ""; saveDraft(); renderSteps(); hideHint(); closeModal();
    });
  });

  $("wr-new").addEventListener("click", () => {
    if(wrText.value.trim() && !confirm("Começar um texto novo? O texto atual vai para 'Os meus textos'.")) return;
    if(!archive()) return;
    wrText.value = ""; wrTitle.value = ""; draft.theme = ""; saveDraft(); renderSteps(); hideHint(); wrText.focus();
  });

  $("wr-download").addEventListener("click", () => {
    const name = (wrTitle.value || "o-meu-texto").replace(/[^\wÀ-ÿ -]+/g,"").trim().replace(/\s+/g,"-") || "o-meu-texto";
    const blob = new Blob([(wrTitle.value ? wrTitle.value+"\n\n" : "") + wrText.value], {type:"text/plain;charset=utf-8"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name+".txt";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("wr-print").addEventListener("click", () => {
    const w = window.open("", "_blank");
    if(!w) return;
    w.document.write('<!doctype html><meta charset="utf-8"><title>'+esc(wrTitle.value||"O meu texto")+'</title>'+
      '<body style="font-family:Georgia,serif;max-width:640px;margin:40px auto;line-height:1.7;font-size:15px">'+
      '<h1 style="font-size:22px">'+esc(wrTitle.value||"")+'</h1>'+
      esc(wrText.value).split(/\n{2,}/).map(p => '<p>'+p.replace(/\n/g,"<br>")+'</p>').join("")+'</body>');
    w.document.close(); w.focus(); w.print();
  });

  renderSteps(); renderSaved(); renderThemes("feliz");

  /* used by the Português worlds: "✍️ Escrever uma história / um poema" opens the Oficina with that text type */
  window.MissaoEscrita = {
    comecar: function(tipo){
      if(!ESCRITA_TIPOS[tipo]) return;
      activate("escrever");
      if(wrType.value !== tipo || wrText.value.trim()) useTheme({tipo:tipo, titulo:"", inicio:"", livre:true});
      renderThemes("tipos");
    }
  };
  const pedido = new URLSearchParams(location.search).get("tipo");   // from a Português world: "Agora tu: escrever…"
  if(pedido) window.MissaoEscrita.comecar(pedido);
})();
