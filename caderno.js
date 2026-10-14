/* O meu caderno: todos os bilhetes de saída (guardados por app.js na chave "caderno"), por disciplina e pela ordem dos mundos */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  const caderno = MissaoArmazem.ler("caderno", {}) || {};
  const PERG = [["a","O que aprendi"],["b","O que ainda não percebi bem"],["c","O que quero saber a seguir"]];
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
            PERG.map(function(p){ const v = (e[p[0]] || "").trim(); return '<dt>'+p[1]+'</dt><dd'+(v ? '' : ' class="vazio"')+'>'+(v ? esc(v) : 'ainda por escrever')+'</dd>'; }).join("")+
            '</dl><a href="'+(s.page || "6ano.html")+'#'+s.key+'/'+w.id+'/praticar">Abrir este mundo →</a></article>';
        }).join("")+'</section>';
    });
  });
  document.getElementById("caderno").innerHTML = total ? html :
    '<p class="cad-vazio">O teu caderno ainda está vazio.<br>No fim do 🎯 Praticar de cada mundo há um <b>🎫 Bilhete de saída</b>: escreve lá e toca em «Guardar no caderno».</p>';
})();
