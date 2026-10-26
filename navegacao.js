/* Navegação comum a todas as páginas (layout Caderno Vivo):
   - 🧘 «1 minuto para acalmar» disponível em qualquer página (MissaoCalma.abrir);
   - no telemóvel, uma barra fixa em baixo com 4 destinos: Início · Mundos · Caderno · Calma
     (sempre no mesmo sítio: previsibilidade, sem ter de procurar no menu);
   - a página onde se está fica marcada (aria-current) na barra de cima e na de baixo. */
(function(){
  "use strict";

  function hojeKey(){
    const d = new Date();
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  }
  function lerTexto(k, def){
    try{ if(typeof MissaoArmazem !== "undefined") return MissaoArmazem.lerTexto(k, def); }catch(e){}
    return def;
  }

  /* ---------- 🧘 1 minuto para acalmar ----------
     1) «Como te sentes?» — Medidor de Emoções (Mood Meter) do programa RULER, Yale Center for Emotional Intelligence (EUA):
        energia alta/baixa × agradável/desagradável, em 4 cores. Dar nome à emoção é o primeiro passo para a regular.
     2) 1 minuto de respiração lenta: inspirar 4 s, expirar 6 s (6 respirações por minuto, expiração mais longa).
     A cor do dia fica em "humor" (só neste computador) e aparece, resumida, no relatório dos pais. */
  const HUMOR = [
    ["amarelo", "#F2C230", "Energia alta · agradável", "contente, entusiasmado, com vontade"],
    ["vermelho", "#D1495B", "Energia alta · desagradável", "nervoso, zangado, preocupado"],
    ["verde", "#4FA36B", "Energia baixa · agradável", "calmo, tranquilo, descansado"],
    ["azul", "#4F86B3", "Energia baixa · desagradável", "triste, cansado, aborrecido"]
  ];
  let ov = null, corpo = null, volta = null, timer = null, opcoes = {};
  function caixa(){
    if(ov) return;
    ov = document.createElement("div"); ov.className = "modal-overlay calma-ov";
    ov.setAttribute("role","dialog"); ov.setAttribute("aria-modal","true"); ov.setAttribute("aria-labelledby","calma-t");
    ov.innerHTML = '<div class="modal-box"><button type="button" class="modal-close" aria-label="Fechar">✕</button>'+
      '<h3 class="modal-title" id="calma-t">🧘 1 minuto para acalmar</h3><div class="modal-body"></div></div>';
    corpo = ov.querySelector(".modal-body");
    ov.addEventListener("click", function(e){ if(e.target === ov) fechar(); });
    ov.querySelector(".modal-close").addEventListener("click", fechar);
    document.addEventListener("keydown", function(e){ if(e.key === "Escape" && ov.classList.contains("open")) fechar(); });
    document.body.appendChild(ov);
  }
  function fechar(){
    clearInterval(timer); timer = null;
    if(!ov) return;
    ov.classList.remove("open");
    if(volta && volta.focus) volta.focus();
    volta = null;
  }
  function abrir(trigger, o){
    caixa(); clearInterval(timer);
    opcoes = o || {};
    volta = trigger || document.activeElement;
    corpo.innerHTML = '<p style="margin:0 0 10px"><b>Como te sentes agora?</b> Escolhe a cor que está mais perto. Não há respostas certas nem erradas.</p>'+
      '<div class="humor-grid">'+HUMOR.map(function(h){ return '<button type="button" class="humor-b" data-h="'+h[0]+'" style="--hc:'+h[1]+'"><b>'+h[2]+'</b><small>'+h[3]+'</small></button>'; }).join("")+'</div>'+
      '<p class="note-small" style="margin:10px 0 0">É o «Medidor de Emoções» do Centro de Inteligência Emocional da Universidade de Yale (EUA): perceber o que sentimos ajuda a decidir o que fazer a seguir.</p>';
    corpo.querySelectorAll(".humor-b").forEach(function(b){
      b.addEventListener("click", function(){
        const h = b.dataset.h, dia = hojeKey();
        try{ if(typeof MissaoArmazem !== "undefined") MissaoArmazem.atualizar("humor", {}, function(m){ m[dia] = h; return m; }); }catch(e){}
        respirar(h);
      });
    });
    ov.classList.add("open");
    ov.querySelector(".modal-close").focus();
  }
  function respirar(h){
    const msg = {amarelo:"Boa energia! Vamos canalizá-la para o estudo.", vermelho:"Às vezes ficamos nervosos ou zangados. Respirar devagar ajuda o corpo a acalmar.", verde:"Estás num bom estado para aprender.", azul:"Num dia de pouca energia, começa por algo pequeno e fácil."}[h];
    const quieto = window.MissaoPrefs && MissaoPrefs.poucoMovimento();
    corpo.innerHTML = '<p style="margin:0 0 12px">'+msg+'</p>'+
      '<div class="resp-wrap"><div class="resp-bola'+(quieto ? ' quieta' : '')+'" id="resp-bola"></div><p class="resp-txt" id="resp-txt">Inspira…</p></div>'+
      '<p class="resp-cont" id="resp-cont">60 s</p>'+
      '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button type="button" class="ghost-btn" id="resp-parar">Saltar</button></div>';
    let t = 0;
    const txt = document.getElementById("resp-txt"), bola = document.getElementById("resp-bola"), cont = document.getElementById("resp-cont");
    function passo(){
      const c = t % 10;   // 4 s inspirar + 6 s expirar
      if(c === 0){ txt.textContent = "Inspira pelo nariz… 1, 2, 3, 4"; bola.classList.add("cheia"); }
      if(c === 4){ txt.textContent = "Expira devagar pela boca… 1, 2, 3, 4, 5, 6"; bola.classList.remove("cheia"); }
      cont.textContent = (60 - t)+" s";
      if(t >= 60){ fim(); return; }
      t++;
    }
    function fim(){
      clearInterval(timer); timer = null;
      corpo.innerHTML = '<p style="font-size:2rem;margin:0;text-align:center">🌿</p><p style="text-align:center;margin:6px 0 12px"><b>Muito bem.</b> Agora escolhe <b>uma</b> coisa pequena para fazer primeiro.</p>'+
        '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">'+(opcoes.foco ? '<button type="button" class="cta" id="resp-foco">✈️ Começar com o Modo foco</button>' : '')+'<button type="button" class="ghost-btn" id="resp-fechar">Fechar</button></div>';
      if(opcoes.foco) document.getElementById("resp-foco").addEventListener("click", function(){ const f = opcoes.foco; fechar(); f(); });
      document.getElementById("resp-fechar").addEventListener("click", fechar);
    }
    document.getElementById("resp-parar").addEventListener("click", fim);
    passo(); timer = setInterval(passo, 1000);
  }
  window.MissaoCalma = {abrir: abrir, fechar: fechar};

  /* ---------- ícones próprios (mundos, inglês, HGP e teste vêm do Stitch, com currentColor; linha 2px, cantos redondos, cor do texto): substituem os emoji da navegação.
     Desenhados para o site, em SVG, para funcionarem sem internet. ---------- */
  const P = {
    inicio:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    mundos:'<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    caderno:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18"/><path d="M12 8h4"/><path d="M12 12h4"/>',
    calma:'<path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z"/><path d="M5 19l8-8"/>',
    familia:'<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9.5" r="2.5"/><path d="M3 20c0-3 2.2-5 5-5s5 2 5 5"/><path d="M13.5 20c0-2.4 1.3-4 3-4s3.5 1.6 3.5 4"/>',
    pt:'<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    math:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" stroke-width="2.6"/>',
    eng:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8.5z"/><path d="M9 11.5h.01M12 11.5h.01M15 11.5h.01" stroke-width="2.4"/>',
    hgp:'<path d="M4 17c2.5 1.5 5 1.5 8 0 3 1.5 5.5 1.5 8 0"/><path d="M4 14h16l-2 3H6l-2-3z"/><path d="M12 3v11"/><path d="M12 4c3 0 5 3 5 6H12"/>',
    cn:'<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
    fq:'<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
    teste:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 13.5l2 2 4.5-4.5"/>',
    geo:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'
  };
  function icone(n){ return '<svg class="ico" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+P[n]+'</svg>'; }
  window.MissaoIcones = {svg: icone};

  /* ---------- barra de baixo (telemóvel) e página atual ---------- */
  function montar(){
    const pag = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const ano = (["3", "7"].indexOf(lerTexto("home_year", "6")) !== -1 ? lerTexto("home_year", "6") : "6")+"ano.html";
    const mundos = /^[367]ano\.html$/.test(pag) ? pag : ano;
    const itens = [
      ["index.html", "inicio", "Início", pag === "index.html"],
      [mundos, "mundos", "Mundos", /^[367]ano\.html$/.test(pag)],
      ["caderno.html", "caderno", "Caderno", pag === "caderno.html"]
    ];
    const nav = document.createElement("nav");
    nav.className = "tab-baixo"; nav.setAttribute("aria-label", "Navegação principal");
    nav.innerHTML = itens.map(function(i){
      return '<a href="'+i[0]+'"'+(i[3] ? ' aria-current="page"' : '')+'>'+icone(i[1])+i[2]+'</a>';
    }).join("")+'<button type="button" data-calma>'+icone("calma")+'Calma</button>';
    // «Início» first in the top shortcuts on every page (on the home page it brings back screen 1)
    document.querySelectorAll(".top-nav").forEach(function(tn){
      if(tn.querySelector("a[href=\"index.html\"]")) return;
      const a = document.createElement("a");
      a.href = "index.html"; a.innerHTML = "🏠 <span>Início</span>";
      tn.insertBefore(a, tn.firstChild);
    });
    // the same icons in the top shortcuts and in the subject selector (emoji stay in the content)
    document.querySelectorAll(".top-nav a, .top-nav button").forEach(function(a){
      const h = (a.getAttribute("href") || "").toLowerCase(), n = h === "index.html" ? "inicio" : h === "caderno.html" ? "caderno" : h === "pais.html" ? "familia" : a.hasAttribute("data-calma") ? "calma" : null;
      const sp = a.querySelector("span");
      if(n && sp) a.innerHTML = icone(n)+sp.outerHTML;
    });
    const DISC = {pt:"pt", math:"math", mat3:"math", mat7:"math", eng:"eng", eng7:"eng", hist7:"hgp", geo7:"geo", esp7:"eng", hgp:"hgp", cn:"cn", cn7:"cn", fq7:"fq"};
    const NOME = {"Português":"pt", "Matemática":"math", "História":"hgp", "Geografia":"geo", "Inglês":"eng"};
    document.querySelectorAll("#subject-tabs .tab-btn, #subject-tabs .tab-soon").forEach(function(b){
      const txt = b.textContent.replace(/^[^A-Za-zÀ-ú]+/, "").trim();
      const n = DISC[b.dataset.subject] || NOME[txt];
      if(n) b.innerHTML = icone(n)+'<span>'+txt+'</span>';
    });
    document.body.appendChild(nav);
    document.body.classList.add("com-tab-baixo");
    document.querySelectorAll(".top-nav a").forEach(function(a){
      if((a.getAttribute("href") || "").toLowerCase() === pag && !location.hash) a.setAttribute("aria-current", "page");
    });
    // every «Calma» button (top bar, bottom bar) opens the same sheet; the year pages add the Modo foco at the end
    document.addEventListener("click", function(e){
      const b = e.target.closest("[data-calma]");
      if(!b) return;
      const foco = document.getElementById("foco-btn");
      abrir(b, foco ? {foco: function(){ foco.click(); }} : null);
    });
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar); else montar();
})();
