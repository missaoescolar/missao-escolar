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
    const bar = $("wr-bar"), r = n / t.alvo;
    bar.style.width = Math.min(100, Math.round(r * 100))+"%";
    bar.classList.toggle("longe", r > 1.6);   // much longer than the target: amber, never red
    renderMestre();
  }

  /* 🔗 connectors: inserted at the cursor with the right capital letter and commas
     (sentence start → «De repente, »; middle of a sentence → «, no entanto, »). Undo (Ctrl+Z) keeps working. */
  function inserir(c){
    const v = wrText.value, s = wrText.selectionStart, e = wrText.selectionEnd;
    const antes = v.slice(0, s);
    const inicio = !antes.trim() || /[.!?…]["»]?\s*$|\n\s*$|—\s*$/.test(antes);
    let txt = inicio ? c.ini : c.meio, aviso = "";
    if(txt === null && inicio){ txt = c.meio.replace(/^[,\s]+/, ""); txt = txt.charAt(0).toUpperCase()+txt.slice(1); aviso = "«"+c.t+"» costuma ligar duas partes da mesma frase: «Fiquei em casa porque chovia.»"; }
    if(txt === null){ txt = ". "+c.ini; aviso = "«"+c.ini.trim().replace(/,$/, "")+"» abre uma frase nova, por isso o site pôs um ponto final antes."; }
    if(c.nota) aviso = c.nota;
    if(c.linha) txt = (antes && !/\n\s*$/.test(antes) ? "\n" : "") + c.ini;   // dialogue: always on a new line
    // spaces and commas that are already there are not repeated
    let ini = s;
    if(c.linha) while(ini > 0 && v[ini-1] === " ") ini--;
    else if(/^[,.]/.test(txt)) while(ini > 0 && v[ini-1] === " ") ini--;
    else if(/^\s/.test(txt) && (ini === 0 || /\s/.test(v[ini-1]))) txt = txt.replace(/^\s+/, "");
    if(/\s$/.test(txt) && /^\s/.test(v.slice(e))) txt = txt.replace(/\s+$/, "");
    if(!c.linha && inicio && antes.trim() && !/\s$/.test(antes)) txt = " "+txt;
    wrText.focus(); wrText.setSelectionRange(ini, e);
    if(!document.execCommand || !document.execCommand("insertText", false, txt)){ wrText.setRangeText(txt, ini, e, "end"); wrText.dispatchEvent(new Event("input")); }
    if(aviso){ wrHint.innerHTML = '<span class="wr-stage">🔗 '+esc(c.t)+'</span> '+esc(aviso); wrHint.hidden = false; }
  }
  $("wr-con").innerHTML = ESCRITA_CONECTORES.map((g, gi) => '<div class="wr-cg"><b>'+esc(g.g)+'</b><div class="wr-chips">'+
    g.l.map((c, ci) => '<button type="button" class="wr-cbtn" data-g="'+gi+'" data-c="'+ci+'">'+esc(c.t)+'</button>').join("")+'</div></div>').join("");
  // mousedown keeps the cursor in the text area (a click would move the focus first)
  $("wr-con").addEventListener("mousedown", ev => { if(ev.target.closest(".wr-cbtn")) ev.preventDefault(); });
  $("wr-con").addEventListener("click", ev => { const b = ev.target.closest(".wr-cbtn"); if(b) inserir(ESCRITA_CONECTORES[+b.dataset.g].l[+b.dataset.c]); });

  /* ✨ excerpts of Portuguese authors (public domain) for the chosen text type */
  let mestreDe = null;
  function renderMestre(){
    if(mestreDe === wrType.value) return; mestreDe = wrType.value;
    const m = (typeof ESCRITA_MESTRES !== "undefined" && ESCRITA_MESTRES[wrType.value]) || [];
    $("wr-mestre-box").hidden = !m.length;
    $("wr-mestre").innerHTML = m.map(x => '<div class="wr-mestre-c"><blockquote>'+esc(x.txt)+'</blockquote><cite>— '+esc(x.autor)+', <i>'+esc(x.obra)+'</i></cite><p>👀 '+esc(x.ver)+'</p></div>').join("")+
      (m.length ? '<p class="ws-note">Excertos curtos de autores em domínio público, com a ortografia atual. Inspira-te na técnica; as palavras são tuas.</p>' : '');
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

  /* 🔎 automatic revision (SRSD — Harris & Graham: explicit, short revision checklists the child learns to use alone).
     Never blocks saving: each finding comes with a concrete hint. */
  const PRONT = [
    [/\bconcerteza\b/i, "«concerteza» escreve-se «com certeza»"],
    [/\bderrepente\b/i, "«derrepente» escreve-se «de repente»"],
    [/\bporisso\b/i, "«porisso» escreve-se «por isso»"],
    [/(?<![a-zà-ÿ])(àsvezes|as vezes)(?![a-zà-ÿ])/i, "escreve-se «às vezes», separado e com acento"],
    [/\bhouveram\b/i, "com o sentido de «existir», escreve-se «houve» (no singular)"],
    [/\bpara mim (fazer|ler|ir|ver|dizer|comer|escrever|jogar|brincar|estudar)\b/i, "antes de um verbo diz-se «para eu fazer», «para eu ir»…"],
    [/\btu (fizestes|dissestes|comestes|fostes|tivestes|estivestes|vistes|destes|pusestes)\b/i, "com «tu», o passado acaba em -ste, sem «s»: fizeste, disseste, foste"],
    [/\b(hei-de|hás-de|há-de|hão-de)\b/i, "com o Acordo Ortográfico, escreve-se sem hífen: «hei de», «há de»"],
    [/\b(vêem|lêem|dêem|crêem)\b/i, "com o Acordo Ortográfico, perderam o acento: veem, leem, deem, creem"],
    [/(?<![a-zà-ÿ])(acção|óptimo|direcção|actividade|baptizado)(?![a-zà-ÿ])/i, "com o Acordo Ortográfico: ação, ótimo, direção, atividade, batizado"],
    [/(?<![a-zà-ÿ])à (\d+|um|uma|dois|duas|três|quatro|cinco|muito|muitos|muitas|pouco|poucos|bastante|vários|várias|algum|alguns|algumas) ?(anos?|meses|mês|dias?|semanas?|horas?|minutos?|tempo|séculos?)(?![a-zà-ÿ])/i, "para tempo que já passou escreve-se «há» (do verbo haver): «há dois anos», «há muito tempo»"],
    [/(?<![a-zà-ÿ])á(?![a-zà-ÿ])/i, "«á» sozinho não existe: é «à» (a + a: «vou à praia») ou «há» (verbo haver: «há sol»)"],
    [/(?<![a-zà-ÿ])fazem (\d+|dois|duas|três|muitos|vários|uns) (anos|meses|dias|semanas|horas)/i, "com o sentido de tempo passado, «fazer» fica no singular: «faz dois anos»"],
    [/(?<![a-zà-ÿ])(seje|esteje|sejem|estejem)(?![a-zà-ÿ])/i, "escreve-se «seja» e «esteja» (e «sejam», «estejam»)"],
    [/(?<![a-zà-ÿ])(fizes|disses|vies|tives|estives|quises|soubes|pudes|trouxes)-te(?![a-zà-ÿ])/i, "escreve-se tudo junto — «fizeste», «disseste», «vieste»: o -ste é a terminação do verbo, não o pronome «te»"],
    [/(?<![a-zà-ÿ])porque\s*\?/i, "no fim de uma pergunta escreve-se «porquê?», com acento"],
    [/(?<![a-zà-ÿ])(excessão|previlégio|intertido|cidadões|mendingo|ansiozo|ançioso)(?![a-zà-ÿ])/i, "atenção à ortografia: exceção, privilégio, entretido, cidadãos, mendigo, ansioso"]
  ];
  /* punctuation and dialogue rules (Portuguese of Portugal) */
  const PONT = [
    [/[a-zà-ÿ0-9] +[,.;:!?](?!\.)/i, "não se deixa espaço antes de , . ; : ! ? — a pontuação fica colada à palavra"],
    [/[,;:][a-zà-ÿ]/i, "depois de vírgula, ponto e vírgula ou dois pontos deixa-se um espaço"],
    [/[a-zà-ÿ]{2}[.!?][A-ZÀ-Ý]/, "depois do ponto final deixa-se um espaço antes da frase seguinte"],
    [/(^|\n)\s*-\s*[A-ZÀ-Ýa-zà-ÿ]/, "nos diálogos usa-se o travessão (—), não o hífen (-). Está em 🔗 Palavras para ligar ideias › Diálogo"],
    [/[a-zà-ÿ] mas (?!também)/i, "antes de «mas» põe-se vírgula: «Queria ir, mas chovia.»"],
    [/(^|[.!?]\s+)(Será que|Porque é que|O que é que|Quem é que|Onde é que|Quando é que)[^.!?]*\./, "uma frase que começa por «Será que…» ou «Porque é que…» é uma pergunta: termina com ponto de interrogação (?)"],
    [/(?<![a-zà-ÿ])([a-zà-ÿ]+) \1(?![a-zà-ÿ])/i, "há uma palavra escrita duas vezes seguidas (por exemplo «o o» ou «que que»)"]
  ];
  const VAZIAS = new Set("a o as os um uma uns umas e é de do da dos das em no na nos nas que se por para com não mas ou ao à aos às eu tu ele ela nós eles elas me te lhe nos vos lhes meu minha teu tua seu sua este esta isso isto aquele aquela era foi ser estar tinha tem há já muito mais como quando onde também lá aqui então".split(" "));
  function rever(texto, tipo){
    const res = [], t = texto.trim();
    const add = (ok, txt) => res.push({ok:ok, txt:txt});
    add(!!wrTitle.value.trim(), wrTitle.value.trim() ? "Tem título." : "Falta o título: escreve-o na caixa por cima do texto.");
    const pars = t.split(/\n\s*\n|\n/).filter(p => p.trim()).length;
    if(tipo !== "poema" && tipo !== "instrucoes"){
      const min = tipo === "diario" ? 1 : 3;
      add(pars >= min, pars >= min ? "Está organizado em "+pars+" parágrafo"+(pars === 1 ? "" : "s")+"." : "Só tem "+pars+" parágrafo"+(pars === 1 ? "" : "s")+": separa o início, o meio e o fim (muda de linha).");
    }
    const frases = t.split(/(?<=[.!?…])\s+/).filter(f => f.trim());
    const semMaiusc = frases.filter(f => /^[«"—–\-\s]*[a-zàáâãéêíóôõúç]/.test(f)).length;
    add(!semMaiusc, semMaiusc ? semMaiusc+" frase"+(semMaiusc === 1 ? " começa" : "s começam")+" com letra minúscula." : "As frases começam com maiúscula.");
    if(tipo !== "poema") add(/[.!?…»"]\s*$/.test(t), /[.!?…»"]\s*$/.test(t) ? "O texto termina com pontuação." : "Falta a pontuação no fim do texto.");
    const longas = frases.filter(f => words(f) > 35).length;
    if(longas) add(false, longas+" frase"+(longas === 1 ? " é muito longa" : "s são muito longas")+" (mais de 35 palavras): experimenta partir em duas com um ponto final.");
    const cont = {}; (t.toLowerCase().match(/[a-zà-ÿ]+/g) || []).forEach(p => { if(p.length > 2 && !VAZIAS.has(p)) cont[p] = (cont[p] || 0) + 1; });
    const depois = (t.toLowerCase().match(/\b(e depois|depois)\b/g) || []).length;
    const rep2 = Object.keys(cont).filter(p => cont[p] >= 4 && p !== "depois").sort((a, b) => cont[b] - cont[a]).slice(0, 3);
    if(depois >= 3) add(false, "Usaste «depois» "+depois+" vezes. Experimenta: a seguir, mais tarde, nesse momento, entretanto, por fim.");
    if(rep2.length) add(false, "Palavras que se repetem muito: "+rep2.map(p => "«"+p+"» ("+cont[p]+"×)").join(", ")+". Procura sinónimos ou usa um pronome.");
    PONT.forEach(([re, dica]) => { if(re.test(t)) add(false, "✍️ "+dica.charAt(0).toUpperCase()+dica.slice(1)+"."); });
    PRONT.forEach(([re, dica]) => { if(re.test(t)) add(false, "📗 "+dica+" (vê o Prontuário)."); });
    return res;
  }

  $("wr-done").addEventListener("click", e => {
    const t = ESCRITA_TIPOS[wrType.value], n = words(wrText.value);
    if(!n){ openModal("✍️ Ainda não há texto", "<p>Escreve pelo menos uma frase e depois toca em ✅ Terminei!</p>", e.currentTarget); return; }
    const checks = t.rever.concat(["Li o texto em voz alta para ver se soa bem?"]);
    const c = pick(ESCRITA_CURIOSIDADES);
    openModal("🎉 Muito bem — escreveste "+n+" palavras!",
      (function(){ const R = rever(wrText.value, wrType.value), bem = R.filter(x => x.ok), mal = R.filter(x => !x.ok);
        // only 3 things to fix at a time (SRSD works on few goals at once); the rest stays folded
        const li = x => '<li class="mal">✏️ '+esc(x.txt).replace("(vê o Prontuário)", '(vê o <a href="gramatica.html#pront" target="_blank" rel="noopener">Prontuário</a>)')+'</li>';
        return '<p class="wr-rev-h">🔎 <b>O site verificou por ti</b> '+(mal.length ? '<small>('+mal.length+' coisa'+(mal.length === 1 ? '' : 's')+' a melhorar)</small>' : '<small>— está tudo em ordem 👏</small>')+'</p>'+
          '<ul class="wr-auto">'+(bem.length ? '<li class="ok">✅ '+bem.map(x => esc(x.txt.replace(/\.$/, ""))).join(" · ")+'</li>' : '')+mal.slice(0, 3).map(li).join("")+'</ul>'+
          (mal.length > 3 ? '<details class="wr-mais"><summary>Ver mais '+(mal.length - 3)+' (corrige primeiro as de cima)</summary><ul class="wr-auto">'+mal.slice(3).map(li).join("")+'</ul></details>' : ''); })()+
      '<p class="wr-rev-h">✋ <b>Agora tu</b> <small>— relê e assinala</small></p>'+
      '<ul class="wr-review">'+checks.map((r,i) => '<li><label><input type="checkbox" id="rv'+i+'"> '+esc(r)+'</label></li>').join("")+'</ul>'+
      '<p class="note-small">Podes fechar esta janela, corrigir e tocar outra vez em ✅ Terminei! para ver se melhorou.</p>'+
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
