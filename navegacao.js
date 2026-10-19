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

  /* ---------- barra de baixo (telemóvel) e página atual ---------- */
  function montar(){
    const pag = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const ano = lerTexto("home_year", "6") === "7" ? "7ano.html" : "6ano.html";
    const mundos = /^[67]ano\.html$/.test(pag) ? pag : ano;
    const itens = [
      ["index.html", "🏠", "Início", pag === "index.html"],
      [mundos, "🗺️", "Mundos", /^[67]ano\.html$/.test(pag)],
      ["caderno.html", "📓", "Caderno", pag === "caderno.html"]
    ];
    const nav = document.createElement("nav");
    nav.className = "tab-baixo"; nav.setAttribute("aria-label", "Navegação principal");
    nav.innerHTML = itens.map(function(i){
      return '<a href="'+i[0]+'"'+(i[3] ? ' aria-current="page"' : '')+'><span aria-hidden="true">'+i[1]+'</span>'+i[2]+'</a>';
    }).join("")+'<button type="button" data-calma><span aria-hidden="true">🧘</span>Calma</button>';
    document.body.appendChild(nav);
    document.body.classList.add("com-tab-baixo");
    document.querySelectorAll(".top-nav a").forEach(function(a){
      if((a.getAttribute("href") || "").toLowerCase() === pag) a.setAttribute("aria-current", "page");
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
