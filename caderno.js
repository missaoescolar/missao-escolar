/* O meu caderno: todos os bilhetes de saída (guardados por app.js na chave "caderno"), por disciplina e pela ordem dos mundos */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  const caderno = MissaoArmazem.ler("caderno", {}) || {};
  const PERG = [["a","O que aprendi"],["b","O que ainda não percebi bem"],["c","O que quero saber a seguir"],["r","📍 Na minha região"]];
  const anos = [["6", MISSAO_SUBJECTS_6], ["7", MISSAO_SUBJECTS_7]];
  let html = "", total = 0;
  anos.forEach(function(par){
    par[1].forEach(function(s, i){
      const entradas = s.worlds.filter(function(w){ return caderno[w.id]; });
      if(!entradas.length) return;
      total += entradas.length;
      html += '<section class="cad-disc"><h2>'+s.icon+' '+esc(s.name)+' · '+par[0]+'.º ano</h2>'+
        entradas.map(function(w){
          const e = caderno[w.id];
          return '<article class="cad-entry" style="--wc:var(--'+w.c+')"><h3><span>'+w.icon+' Mundo '+w.num+': '+esc(w.title)+'</span><small>'+esc(e.data || "")+'</small></h3><dl>'+
            PERG.filter(function(p){ return p[0] !== "r" || (e.r || "").trim(); }).map(function(p){ const v = (e[p[0]] || "").trim(); return '<dt>'+p[1]+'</dt><dd'+(v ? '' : ' class="vazio"')+'>'+(v ? esc(v) : 'ainda por escrever')+'</dd>'; }).join("")+
            '</dl><a href="'+(s.page || "6ano.html")+'#'+s.key+'/'+w.id+'/praticar">Abrir este mundo →</a></article>';
        }).join("")+'</section>';
    });
  });
  /* 📊 where there is most difficulty (dificuldades.js), for the child and the parents */
  const difBox = document.getElementById("cad-dif");
  const dif = (typeof MissaoDificuldades !== "undefined") ? MissaoDificuldades.analisar(MISSAO_SUBJECTS_6.concat(MISSAO_SUBJECTS_7)).slice(0, 6) : [];
  if(difBox){
    difBox.innerHTML = '<h2>📊 Onde há mais dificuldades</h2>'+(dif.length
      ? '<p>Calculado a partir das perguntas erradas, das dúvidas escritas no caderno e dos cartões por saber. Começa pelo primeiro.</p><ol>'+
        dif.map(function(d){ return '<li><a style="--wc:var(--'+d.w.c+')" href="'+(d.s.page || "6ano.html")+'#'+d.s.key+'/'+d.w.id+'/praticar">'+d.s.icon+' '+esc(d.s.name)+' · '+d.w.icon+' Mundo '+d.w.num+': '+esc(d.w.title)+'</a> — '+esc(d.motivos.join(" · "))+
          (d.duvida ? '<span class="duv">«'+esc(d.duvida)+'»</span>' : '')+'</li>'; }).join("")+'</ol>'
      : '<p>Ainda não há dificuldades registadas. Aparecem aqui quando erras perguntas, escreves uma dúvida no bilhete de saída ou treinas cartões.</p>');
  }

  /* 👪 parents: start again (each asks for confirmation) */
  function reset(btn, msg, fn){
    const b = document.getElementById(btn); if(!b) return;
    b.addEventListener("click", function(){ if(window.confirm(msg)){ fn(); location.reload(); } });
  }
  reset("reset-caderno", "Apagar todos os bilhetes do caderno? Não se pode desfazer.", function(){ MissaoArmazem.gravar("caderno", {}); });
  reset("reset-dif", "Recomeçar as dificuldades? Apaga os cartões, a autoavaliação e o histórico de erros (as perguntas por acertar continuam assinaladas).", function(){
    MissaoArmazem.gravar("cartoes", {}); MissaoArmazem.gravar("autoaval", {});
    MissaoArmazem.atualizar("banco_srs", {}, function(st){ Object.keys(st).forEach(function(id){ if(st[id] && st[id].length > 4) st[id][4] = 0; }); return st; });
  });

  document.getElementById("caderno").innerHTML = total ? html :
    '<p class="cad-vazio">O teu caderno ainda está vazio. Escolhe um mundo que já estudaste, vai ao fim do 🎯 Praticar e preenche o teu primeiro 🎫 Bilhete de saída.</p>';
})();
