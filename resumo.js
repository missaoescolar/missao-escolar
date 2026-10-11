/* Página-resumo (infografia) de cada mundo.
   resumo.html          → índice de todos os mundos
   resumo.html?w=<id>   → página-resumo de um mundo (ex.: ?w=m1, ?w=n3, ?w=c7, ?w=e2) */
(function(){
  const SUBJECTS = MISSAO_SUBJECTS_6.concat(MISSAO_SUBJECTS_7); // from shared.js — every year that is ready
  const LETTERS = ["A","B","C","D","E"];

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function colorVars(w){ return "--wc:var(--"+w.c+");--wc-bg:var(--"+w.c+"-bg)"; }
  function link(w){ return "resumo.html?w="+encodeURIComponent(w.id); }

  /* same drawing as app.js buildRouteSvg, kept here so this page stands alone */
  function routeSvg(route, uid){
    const n = route.stops.length, stepW = 128, W = stepW*(n-1)+76, H = 96, y = 32;
    const markerId = "sheet-arrow-"+uid;
    let parts = ['<defs><marker id="'+markerId+'" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>',
      '<line x1="38" y1="'+y+'" x2="'+(W-38)+'" y2="'+y+'" stroke="currentColor" stroke-width="2" opacity="0.3" marker-end="url(#'+markerId+')"/>'];
    route.stops.forEach(function(s,i){
      const cx = 38 + i*stepW;
      parts.push('<circle cx="'+cx+'" cy="'+y+'" r="19" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/>');
      parts.push('<text x="'+cx+'" y="'+(y+6)+'" text-anchor="middle" font-size="16">'+esc(s.icon)+'</text>');
      parts.push('<text x="'+cx+'" y="'+(y+36)+'" text-anchor="middle" font-size="10.5" font-family="Lexend, sans-serif" font-weight="700">'+esc(s.label)+'</text>');
      if(s.sub) parts.push('<text x="'+cx+'" y="'+(y+48)+'" text-anchor="middle" font-size="9" opacity="0.65">'+esc(s.sub)+'</text>');
    });
    return '<svg class="route-svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(route.title+": "+route.stops.map(function(s){ return s.label; }).join(" → "))+'">'+parts.join("")+'</svg>';
  }

  /* 3 questions spread across the quiz; the right answer moves position so it isn't always "A" */
  function pickQuestions(quiz){
    if(!quiz || !quiz.length) return [];
    const n = quiz.length;
    const idx = Array.from(new Set([0, Math.floor(n/2), n-1]));
    return idx.map(function(qi, k){
      const q = quiz[qi];
      const opts = q.opts.slice();
      const pos = (k*2 + 1) % opts.length;
      const right = opts[q.correct];
      opts.splice(q.correct, 1);
      opts.splice(pos, 0, right);
      return {q:q.q, opts:opts, correct:pos, explain:q.explain};
    });
  }

  function block(icon, title, inner, extraClass){
    return '<section class="sheet-block'+(extraClass?" "+extraClass:"")+'"><h2><span aria-hidden="true">'+icon+'</span> '+esc(title)+'</h2>'+inner+'</section>';
  }

  function renderWorld(subject, w, wi){
    const parts = [];

    parts.push(
      '<header class="sheet-hero">'+
        '<div class="sheet-icon" aria-hidden="true">'+w.icon+'</div>'+
        '<div class="sheet-titles">'+
          '<p class="sheet-eyebrow">'+subject.icon+' '+esc(subject.name)+' · Mundo '+w.num+(w.pages ? ' · '+esc(w.pages) : '')+'</p>'+
          '<h1>'+esc(w.title)+'</h1>'+
          '<p class="sheet-sub">'+esc(w.subtitle)+'</p>'+
        '</div>'+
      '</header>'+
      '<p class="sheet-lead"><span aria-hidden="true">💬</span> '+esc(w.lead)+'</p>'
    );

    parts.push(block("🎯","O essencial — para o teste",
      '<ol class="key-grid">'+w.resumo.map(function(line){ return '<li class="key-card">'+line+'</li>'; }).join("")+'</ol>'));

    if(w.timeline && w.timeline.length){
      parts.push(block("🕰️","Datas-chave",
        '<ol class="date-track">'+w.timeline.map(function(t){
          return '<li><span class="date-ic" aria-hidden="true">'+t.ic+'</span><b>'+esc(t.y)+'</b><span>'+esc(t.t)+'</span></li>';
        }).join("")+'</ol>'));
    }

    const visuals = [];
    (w.posters||[]).forEach(function(p){ visuals.push('<figure class="poster-fig"><figcaption>'+esc(p.title)+'</figcaption>'+p.svg+'</figure>'); });
    (w.routes||[]).forEach(function(r, ri){ visuals.push('<figure class="route-fig"><figcaption>'+esc(r.title)+'</figcaption>'+routeSvg(r, w.id+"-"+ri)+'</figure>'); });
    if(w.distribution){
      const d = w.distribution;
      visuals.push('<div><p class="dist-title">'+esc(d.title)+'</p><div class="dist-bar" role="img" aria-label="'+esc(d.segments.map(function(s){ return s.label+": "+s.pct+"%"; }).join(", "))+'">'+
        d.segments.map(function(s){ return '<div class="dist-seg '+(s.tone||"accent")+'" style="width:'+s.pct+'%">'+s.pct+'%</div>'; }).join("")+'</div>'+
        '<div class="dist-legend">'+d.segments.map(function(s){ return '<span><span class="dot" style="background:'+(s.tone==="muted"?"var(--border)":"var(--wc)")+'"></span>'+esc(s.label+(s.note?" — "+s.note:""))+'</span>'; }).join("")+'</div></div>');
    }
    if(w.members){
      visuals.push('<div><p class="member-title">'+esc(w.members.title.replace(/ — toca.*$/,""))+'</p><div class="member-grid">'+
        w.members.items.map(function(it){
          const acr = it.popup ? ' <small>('+it.popup.acronyms.map(function(a){ return esc(a[0]); }).join(", ")+')</small>' : '';
          return '<span class="member-badge"><span class="flag">'+it.flag+'</span><span>'+esc(it.name.split(" — ")[0])+acr+'</span></span>';
        }).join("")+'</div></div>');
    }
    if(visuals.length) parts.push(block("🖼️","Em imagens", '<div class="visual-stack">'+visuals.join("")+'</div>'));

    if(w.compare){
      const side = function(s){ return '<div class="compare-col"><h3>'+esc(s.title)+'</h3><ul>'+s.points.map(function(p){ return '<li>'+esc(p)+'</li>'; }).join("")+'</ul></div>'; };
      parts.push(block("⚖️","Comparar", '<div class="compare">'+side(w.compare.left)+'<div class="compare-vs">VS</div>'+side(w.compare.right)+'</div>'));
    }

    parts.push(block("🔑","Palavras-chave",
      '<dl class="word-grid">'+w.gloss.map(function(g){ return '<div><dt>'+esc(g[0])+'</dt><dd>'+esc(g[1])+'</dd></div>'; }).join("")+'</dl>'));

    const x = missaoExtra(w);
    if((x.curiosidades||[]).length){
      parts.push(block("💡","Sabias que…?",
        '<div class="curio-grid">'+x.curiosidades.map(function(c){
          return '<div class="curio-box"><p>'+esc(c.t)+'</p><small>📚 '+esc(c.fonte)+'</small></div>';
        }).join("")+'</div>'));
    }

    const qs = pickQuestions(missaoQuizFor(w));
    if(qs.length){
      parts.push(block("✅","Testa-te",
        '<ol class="mini-quiz">'+qs.map(function(q){
          return '<li><p>'+esc(q.q)+'</p><ol class="mini-opts">'+q.opts.map(function(o, oi){ return '<li><b>'+LETTERS[oi]+'</b> '+esc(o)+'</li>'; }).join("")+'</ol></li>';
        }).join("")+'</ol>'+
        '<p class="answer-key">Respostas: '+qs.map(function(q,i){ return (i+1)+' → '+LETTERS[q.correct]; }).join(" · ")+'</p>'));
    }

    parts.push(block("🎮","Missões deste mundo",
      '<ul class="sheet-missions">'+w.missions.map(function(m){
        return '<li><span class="box" aria-hidden="true"></span><span><b>'+esc(m.t)+'</b> — '+esc(m.f)+' <em>(+'+m.xp+' XP)</em></span></li>';
      }).join("")+'</ul>'));

    if(x.explorar){
      parts.push(block("🔭","Para ires mais longe",
        '<p class="sheet-next">'+esc(x.explorar.proximo)+'</p>'+
        '<ul class="sheet-links">'+(x.explorar.links||[]).map(function(l){
          const k = missaoLink(l);
          return '<li><a href="'+esc(k.href)+'" target="_blank" rel="noopener noreferrer">'+esc(k.label)+'</a> — '+esc(k.site)+(k.lang?' ('+k.lang+')':'')+'</li>';
        }).join("")+'</ul>'));
    }

    if(w.boss) parts.push('<p class="sheet-boss">🏆 <b>Avaliação:</b> '+esc(w.boss)+'</p>');

    const prev = subject.worlds[wi-1], next = subject.worlds[wi+1];
    parts.push('<nav class="sheet-pager" aria-label="Mundos">'+
      (prev ? '<a href="'+link(prev)+'">← Mundo '+prev.num+'</a>' : '<span></span>')+
      '<a href="resumo.html?d='+subject.key+'">Todos os mundos de '+esc(subject.name)+'</a>'+
      (next ? '<a href="'+link(next)+'">Mundo '+next.num+' →</a>' : '<span></span>')+
    '</nav>');

    document.title = w.title+" — Página-resumo";
    return '<article class="sheet" style="'+colorVars(w)+'">'+parts.join("")+'</article>';
  }

  function renderIndex(onlyKey){
    const list = SUBJECTS.filter(function(s){ return !onlyKey || s.key===onlyKey; });
    const one = list.length === 1 ? list[0] : null;
    document.title = (one ? one.name+" — " : "")+"Páginas-resumo — Missão Escolar";
    return '<header class="index-head"><h1>📄 Páginas-resumo'+(one ? ' de '+esc(one.name) : '')+'</h1><p>Uma folha por mundo, com o essencial para o teste. Abre uma e imprime com Ctrl+P (ou Cmd+P no Mac).'+
      (one ? ' <a href="resumo.html">Ver todas as disciplinas</a>' : '')+'</p></header>'+
      list.map(function(s){
        return '<section class="index-subject"><h2>'+s.icon+' '+esc(s.name)+' <small>· '+(s.ano || '6')+'.º ano</small></h2><div class="index-grid">'+
          s.worlds.map(function(w){
            return '<a class="index-card" style="'+colorVars(w)+'" href="'+link(w)+'"><span class="index-ic" aria-hidden="true">'+w.icon+'</span><span><small>Mundo '+w.num+'</small><b>'+esc(w.title)+'</b></span></a>';
          }).join("")+'</div></section>';
      }).join("");
  }

  const params = new URLSearchParams(location.search);
  const id = params.get("w");
  let found = null;
  SUBJECTS.forEach(function(s){ s.worlds.forEach(function(w, wi){ if(w.id===id) found = {s:s, w:w, wi:wi}; }); });

  const onlyKey = params.get("d");
  // "back" goes to the world itself (6ano.html#pt/p3), or to the subject's map, or home
  const pagina = s => (s && s.page) || '6ano.html', subjOnly = SUBJECTS.filter(function(s){ return s.key===onlyKey; })[0];
  const back = found ? pagina(found.s)+'#'+found.s.key+'/'+found.w.id : (onlyKey ? pagina(subjOnly)+'#'+onlyKey : 'index.html');
  document.getElementById("sheet-nav").innerHTML =
    '<a href="'+back+'">← Voltar '+(found ? 'ao mundo' : onlyKey ? 'à disciplina' : 'ao início')+'</a>'+
    (found ? '<button type="button" id="print-btn">🖨️ Imprimir esta página</button>' : '');
  document.getElementById("sheet-root").innerHTML = found ? renderWorld(found.s, found.w, found.wi) : renderIndex(onlyKey);
  const printBtn = document.getElementById("print-btn");
  if(printBtn) printBtn.addEventListener("click", function(){ window.print(); });
})();
