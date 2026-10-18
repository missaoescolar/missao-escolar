/* Leitor de animações (🎬). As animações estão em animacoes-matematica.js, animacoes-ciencias.js e animacoes-hgp-pt-ing.js.
   Cada animação abre DENTRO do seu mundo (no cartão do mundo, em 6ano.html), nunca por cima da página.
   Uma animação = uma cena SVG + uma lista de passos. Cada passo tem uma legenda (t) e uma função (f)
   que muda a cena (mostra, esconde, move…). Para recuar, a cena é refeita e os passos anteriores
   são repetidos sem animação, por isso cada passo só tem de dizer o que muda.
   Uso: MissaoAnim.abrir("coracao") · MissaoAnim.doMundo("c4") → lista de animações desse mundo */
const MissaoAnim = (function(){
  const LIB = {}, POR_MUNDO = {};
  const REDUZIDO = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) || !!(window.MissaoPrefs && MissaoPrefs.poucoMovimento());

  /* ---------- pequeno kit para desenhar cenas ---------- */
  const NOMES = {cls:"class", sw:"stroke-width", op:"opacity", tr:"transform", fs:"font-size", fw:"font-weight", ta:"text-anchor", da:"stroke-dasharray", lc:"stroke-linecap", lj:"stroke-linejoin", pl:"pathLength"};
  const at = o => Object.keys(o||{}).map(k => { const v = o[k]; if(v===undefined || v===null || v===false) return ""; return " "+(NOMES[k]||k)+'="'+v+'"'; }).join("");
  const kit = {
    t: (x,y,s,o) => '<text x="'+x+'" y="'+y+'"'+at(Object.assign({fs:13, ta:"middle", fw:700, fill:"currentColor"}, o))+'>'+s+'</text>',
    r: (x,y,w,h,o) => '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"'+at(o)+'/>',
    c: (cx,cy,r,o) => '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"'+at(o)+'/>',
    p: (d,o) => '<path d="'+d+'"'+at(Object.assign({fill:"none"}, o))+'/>',
    l: (x1,y1,x2,y2,o) => '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"'+at(Object.assign({stroke:"currentColor", sw:2}, o))+'/>',
    g: (o, inner) => '<g'+at(o)+'>'+inner+'</g>',
    REDUZIDO: REDUZIDO
  };

  function def(d){ LIB[d.id] = d; (POR_MUNDO[d.mundo] = POR_MUNDO[d.mundo] || []).push(d); }

  /* ---------- player ---------- */
  let ov, stage, cap, dots, ctrlBox, endBox, playBtn, svg;
  let D = null, cur = 0, playing = false, narrar = false, stepTimer = null, timers = [], returnFocus = null;
  narrar = MissaoArmazem.lerTexto("anim_narrar", "0") === "1";

  /* The player is a single box that is placed INSIDE the world it belongs to
     (in the element with data-anim-slot="<world id>"), never on top of the page. */
  function construir(){
    if(ov) return;
    ov = document.createElement("div");
    ov.className = "an-player";
    ov.setAttribute("role","region");
    ov.hidden = true;
    ov.innerHTML =
      '<div class="an-box">'+
        '<div class="an-top"><p class="an-title" id="an-title"></p><button type="button" class="an-close" aria-label="Fechar a animação">✕ Fechar</button></div>'+
        '<div class="an-stage" id="an-stage"></div>'+
        '<p class="an-cap" id="an-cap" aria-live="polite"></p>'+
        '<div class="an-ctrl-box" id="an-ctrl-box"></div>'+
        '<div class="an-bar">'+
          '<button type="button" data-a="ini" title="Do início" aria-label="Do início">⏮</button>'+
          '<button type="button" data-a="ant" title="Passo anterior" aria-label="Passo anterior">◀</button>'+
          '<button type="button" data-a="play" class="an-play" id="an-play" aria-label="Pausa">⏸</button>'+
          '<button type="button" data-a="seg" title="Passo seguinte" aria-label="Passo seguinte">▶</button>'+
          '<span class="an-dots" id="an-dots"></span>'+
          '<button type="button" data-a="voz" class="an-voz" id="an-voz" aria-pressed="false" title="Ouvir a explicação">🔇 Ouvir</button>'+
        '</div>'+
        '<div class="an-end" id="an-end" hidden></div>'+
      '</div>';
    stage = ov.querySelector("#an-stage"); cap = ov.querySelector("#an-cap"); dots = ov.querySelector("#an-dots");
    ctrlBox = ov.querySelector("#an-ctrl-box"); endBox = ov.querySelector("#an-end"); playBtn = ov.querySelector("#an-play");
    ov.querySelector(".an-close").addEventListener("click", fechar);
    ov.querySelector(".an-bar").addEventListener("click", e => {
      const b = e.target.closest("button"); if(!b) return;
      const a = b.dataset.a;
      if(a === "ini"){ irPara(0); tocar(true); }
      if(a === "ant") irPara(Math.max(0, cur-1));
      if(a === "seg") irPara(Math.min(D.passos.length-1, cur+1));
      if(a === "play") tocar(!playing);
      if(a === "voz"){ narrar = !narrar; MissaoArmazem.gravarTexto("anim_narrar", narrar ? "1" : "0"); pintarVoz(); if(narrar) falar(); else calar(); }
    });
    dots.addEventListener("click", e => { const b = e.target.closest("button"); if(b) irPara(+b.dataset.k); });
    // keyboard only while the focus is inside the player (it lives in the page, so arrows must not hijack scrolling)
    ov.addEventListener("keydown", e => {
      if(e.target.tagName === "INPUT") return;
      if(e.key === "Escape") fechar();
      else if(e.key === "ArrowRight"){ e.preventDefault(); irPara(Math.min(D.passos.length-1, cur+1)); }
      else if(e.key === "ArrowLeft"){ e.preventDefault(); irPara(Math.max(0, cur-1)); }
    });
  }
  function pintarVoz(){
    const b = ov.querySelector("#an-voz");
    b.textContent = narrar ? "🔊 A ouvir" : "🔇 Ouvir"; b.setAttribute("aria-pressed", narrar);
  }

  /* ---------- helper given to each step ---------- */
  function ajudante(instant){
    const qa = sel => Array.prototype.slice.call(svg.querySelectorAll(sel));
    const cada = (sel, fn) => (Array.isArray(sel) ? sel : [sel]).forEach(s => qa(s).forEach(fn));
    return {
      svg: svg, instant: instant, kit: kit,
      q: sel => svg.querySelector(sel), qa: qa,
      mostrar: sel => cada(sel, el => el.classList.remove("an-h")),
      esconder: sel => cada(sel, el => el.classList.add("an-h")),
      cls: (sel, c, on) => cada(sel, el => el.classList.toggle(c, on !== false)),
      mover: (sel, tr) => cada(sel, el => { el.style.transform = tr; }),
      attr: (sel, k, v) => cada(sel, el => el.setAttribute(k, v)),
      texto: (sel, s) => cada(sel, el => { el.textContent = s; }),
      /* adds each selector's class one after the other (a "wave") */
      onda: (sels, c, ms) => sels.forEach((s, i) => cada(s, el => { el.style.transitionDelay = instant ? "0ms" : (i*ms)+"ms"; el.classList.add(c); })),
      /* little dots that travel along a path forever (blood, air, water…) */
      fluxo: (sel, d, n, dur, cor, raio) => {
        const gr = svg.querySelector(sel); if(!gr) return;
        let h = "";
        for(let i=0;i<n;i++){
          h += REDUZIDO
            ? '<circle r="'+(raio||4)+'" fill="'+cor+'" class="an-dot" data-path="'+d+'" data-pos="'+(i/n)+'"/>'
            : '<circle r="'+(raio||4)+'" fill="'+cor+'"><animateMotion dur="'+dur+'s" repeatCount="indefinite" begin="'+(-i*dur/n).toFixed(2)+'s" path="'+d+'"/></circle>';
        }
        gr.insertAdjacentHTML("beforeend", h);
        if(REDUZIDO){   // no motion: place the dots along the path, still
          const tmp = document.createElementNS("http://www.w3.org/2000/svg", "path"); tmp.setAttribute("d", d); svg.appendChild(tmp);
          const L = tmp.getTotalLength();
          gr.querySelectorAll(".an-dot").forEach(c => { const p = tmp.getPointAtLength(L*(+c.dataset.pos)); c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.classList.remove("an-dot"); });
          tmp.remove();
        }
      },
      limpar: sel => cada(sel, el => { el.innerHTML = ""; }),
      depois: (fn, ms) => { if(instant) return; timers.push(setTimeout(fn, ms)); },
      repetir: (fn, ms) => { if(instant) return; timers.push(setInterval(fn, ms)); },
      controlo: html => { if(instant) return null; ctrlBox.innerHTML = html; ctrlBox.hidden = false; return ctrlBox; }
    };
  }

  /* run one step; an error in a step must never break the whole player (it is noted in MissaoAnim.erros) */
  const erros = [];
  function correr(i, instant){
    try{ D.passos[i].f(ajudante(instant)); }
    catch(e){ erros.push(D.id+" · passo "+(i+1)+": "+e.message); if(window.console) console.error(e); }
  }

  function limparTimers(){ timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = []; clearTimeout(stepTimer); }

  function irPara(k){
    if(!D) return;
    k = Math.max(0, Math.min(D.passos.length-1, k));
    limparTimers(); calar();
    cur = k;
    ctrlBox.innerHTML = ""; ctrlBox.hidden = true; endBox.hidden = true;
    // rebuild the scene and replay earlier steps instantly
    stage.innerHTML = '<svg class="an-svg an-instant" viewBox="0 0 '+(D.w||400)+' '+(D.h||260)+'" role="img" aria-label="'+D.titulo+'">'+D.cena(kit)+'</svg>';
    svg = stage.querySelector("svg");
    if(!playing && svg.pauseAnimations) svg.pauseAnimations();
    for(let i=0;i<k;i++) correr(i, true);
    void svg.getBoundingClientRect();
    const esta = D, este = svg;
    requestAnimationFrame(() => {
      if(D !== esta || svg !== este || cur !== k) return;   // the user already moved on (another step or another animation)
      svg.classList.remove("an-instant");
      svg.querySelectorAll("*").forEach(el => { if(el.style.transitionDelay) el.style.transitionDelay = ""; });
      correr(k, false);
    });
    cap.innerHTML = '<span class="an-stepn">'+(k+1)+'/'+D.passos.length+'</span> '+D.passos[k].t;
    dots.innerHTML = D.passos.map((_,i) => '<button type="button" data-k="'+i+'" class="'+(i<k?"done":i===k?"cur":"")+'" aria-label="Passo '+(i+1)+'"></button>').join("");
    if(k === D.passos.length-1) mostrarFim();
    if(narrar) falar();
    agendar();
  }

  /* at the end the animation starts again by itself (a short rest on the last step first) —
     unless the last step is interactive (a slider, buttons…): then it waits, and ▶ starts it again */
  function recomecarOuEsperar(){
    if(!ctrlBox.hidden && ctrlBox.innerHTML){
      playing = false; playBtn.textContent = "▶"; playBtn.setAttribute("aria-label", "Ver outra vez");
      return;
    }
    irPara(0);
  }
  function agendar(){
    clearTimeout(stepTimer);
    if(!playing) return;
    const ultimo = cur >= D.passos.length-1;
    const dur = (D.passos[cur].dur || 5800) + (ultimo ? 4000 : 0);
    // with narration the voice decides (falar → onend); the long timer is only a safety net if the voice never ends
    stepTimer = setTimeout(() => {
      if(!ov.offsetParent){ tocar(false); calar(); return; }   // the world was hidden (other tab): pause instead of playing unseen
      if(ultimo) recomecarOuEsperar(); else irPara(cur+1);
    }, (narrar && window.speechSynthesis) ? dur + 15000 : dur);
  }

  function tocar(on){
    playing = on;
    playBtn.textContent = on ? "⏸" : "▶"; playBtn.setAttribute("aria-label", on ? "Pausa" : "Continuar");
    ov.classList.toggle("an-paused", !on);
    if(svg && svg.pauseAnimations){ on ? svg.unpauseAnimations() : svg.pauseAnimations(); }
    if(on && cur >= D.passos.length-1){ irPara(0); return; }
    if(on) agendar(); else clearTimeout(stepTimer);
  }

  function falar(){
    if(!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const p = D.passos[cur];
    const u = new SpeechSynthesisUtterance((p.fala || p.t).replace(/<[^>]+>/g, ""));
    u.lang = p.lang || D.lang || "pt-PT"; u.rate = 0.95;
    const k = cur;
    u.onend = () => {
      if(!playing || cur !== k) return;
      clearTimeout(stepTimer);
      if(cur < D.passos.length-1) stepTimer = setTimeout(() => irPara(cur+1), 900);
      else stepTimer = setTimeout(recomecarOuEsperar, 4000);
    };
    speechSynthesis.speak(u);
  }
  function calar(){ if(window.speechSynthesis) speechSynthesis.cancel(); }

  function mostrarFim(){
    let h = '<button type="button" class="an-btn" data-fim="outra">🔁 Ver outra vez</button>';
    const outras = (POR_MUNDO[D.mundo] || []).filter(x => x.id !== D.id);
    outras.forEach(o => { h += '<button type="button" class="an-btn" data-fim="ver" data-id="'+o.id+'">🎬 '+o.titulo+'</button>'; });
    if(D.arena) h += '<button type="button" class="an-btn primary" data-fim="arena">🎮 Agora tu: treinar na Arena</button>';
    endBox.innerHTML = h; endBox.hidden = false;
    endBox.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      if(b.dataset.fim === "outra"){ irPara(0); tocar(true); }
      if(b.dataset.fim === "ver") abrir(b.dataset.id);
      if(b.dataset.fim === "arena"){
        const tema = D.arena;
        fechar();
        // the Arena is the other view of the Matemática tab
        if(window.MissaoNav){ window.MissaoNav.ir("math", "arena"); if(window.MissaoArena) window.MissaoArena.start(tema); }
        else { location.hash = "math/arena"; setTimeout(() => { if(window.MissaoArena) window.MissaoArena.start(tema); }, 50); }
      }
    }));
  }

  /* open an animation inside its own world (the element with data-anim-slot="<world id>") */
  function abrir(id, trigger){
    const d = LIB[id]; if(!d) return false;
    const slot = document.querySelector('[data-anim-slot="'+d.mundo+'"]');
    if(!slot) return false;
    construir();
    D = d;
    returnFocus = trigger || null;
    if(ov.parentNode !== slot) slot.appendChild(ov);
    ov.hidden = false;
    ov.querySelector("#an-title").textContent = "🎬 " + d.titulo;
    ov.style.setProperty("--wc", "var(--"+(d.cor || "accent")+")");
    ov.style.setProperty("--wc-bg", d.cor ? "var(--"+d.cor+"-bg)" : "var(--surface-2)");
    document.querySelectorAll(".anim-btn.active").forEach(b => b.classList.remove("active"));
    document.querySelectorAll('.anim-btn[data-anim="'+id+'"]').forEach(b => b.classList.add("active"));
    pintarVoz();
    playing = true; playBtn.textContent = "⏸"; ov.classList.remove("an-paused");
    irPara(0);
    const top = ov.getBoundingClientRect().top;
    if(top < 0 || top > window.innerHeight*0.6) ov.scrollIntoView({behavior:"smooth", block:"start"});
    return true;
  }
  function fechar(){
    if(!ov) return;
    limparTimers(); calar();
    ov.hidden = true;
    stage.innerHTML = "";
    document.querySelectorAll(".anim-btn.active").forEach(b => b.classList.remove("active"));
    if(returnFocus && returnFocus.focus) returnFocus.focus({preventScroll:true});
    returnFocus = null;
  }

  return {
    def: def, abrir: abrir, fechar: fechar, kit: kit, erros: erros,
    doMundo: m => POR_MUNDO[m] || [],
    todas: () => Object.keys(LIB).map(k => LIB[k])
  };
})();
// a top-level const is not a property of window: publish it so app.js, arena.js and home.js can check window.MissaoAnim
window.MissaoAnim = MissaoAnim;
