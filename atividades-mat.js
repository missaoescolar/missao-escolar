/* Atividades de Matemática para o 🎯 Praticar (conteúdo original; o formato inspira-se nos cadernos de problemas):
   - 🔷 Padrões de figuras (Mundo 4): ver 3 termos, prever o 4.º e verificar no desenho, o 10.º, o termo geral e a pergunta inversa.
     Na matemática japonesa (e nos Common Core dos EUA, «look for and express regularity») o padrão visual vem antes da fórmula.
   - 🟦 Pinta a percentagem (Mundo 3): uma grelha de 100 quadrados (1 quadrado = 1&nbsp;%), pintada com o dedo ou o rato.
   Erros nunca a vermelho: ocre com uma pista; à 2.ª tentativa mostra-se a resolução. */
(function(){
  "use strict";
  function el(tag, cls, html){ const e = document.createElement(tag); if(cls) e.className = cls; if(html !== undefined) e.innerHTML = html; return e; }
  function baralha(a){ a = a.slice(); for(let i = a.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- 🔷 padrões: cada um dá as células do termo n: [x, y, tipo] ---------- */
  const PADROES = [
    {nome:"Ponte de mosaicos", desc:"Em cima há mosaicos azuis; em baixo, brancos. Em cada termo a ponte cresce.",
     cel:function(n){ const c = []; for(let i = 0; i < n; i++) c.push([i+0.5, 0, "a"]); for(let i = 0; i <= n; i++) c.push([i, 1, "b"]); return c; },
     f:function(n){ return 2*n+1; }, geral:"2n + 1", erradas:["n + 2", "2n", "3n − 1"], d:2,
     porque:"Há n azuis e n + 1 brancos: n + n + 1 = 2n + 1."},
    {nome:"Estrela de quatro braços", desc:"Um quadrado amarelo no centro e quatro braços azuis que crescem.",
     cel:function(n){ const c = [[0, 0, "y"]]; for(let i = 1; i <= n; i++){ c.push([i, 0, "a"], [-i, 0, "a"], [0, i, "a"], [0, -i, "a"]); } return c; },
     f:function(n){ return 4*n+1; }, geral:"4n + 1", erradas:["4n", "n + 4", "5n"], d:4,
     porque:"Quatro braços com n quadrados cada, mais o do centro: 4 × n + 1."},
    {nome:"Moldura", desc:"Uma moldura quadrada de mosaicos azuis; o meio fica vazio.",
     cel:function(n){ const s = n+2, c = []; for(let x = 0; x < s; x++) for(let y = 0; y < s; y++) if(x === 0 || y === 0 || x === s-1 || y === s-1) c.push([x, y, "a"]); return c; },
     f:function(n){ return 4*n+4; }, geral:"4n + 4", erradas:["4n", "n + 4", "(n + 2) × (n + 2)"], d:4,
     porque:"O lado tem n + 2 mosaicos. Os 4 cantos e, em cada lado, n mosaicos entre os cantos: 4n + 4."},
    {nome:"Comboio", desc:"Uma locomotiva verde de 2 quadrados e carruagens azuis de 3 quadrados cada.",
     cel:function(n){ const c = [[0, 1, "v"], [0, 2, "v"]]; for(let k = 1; k <= n; k++) for(let y = 0; y < 3; y++) c.push([k*1.25, y, "a"]); return c; },
     f:function(n){ return 3*n+2; }, geral:"3n + 2", erradas:["3n", "2n + 3", "5n"], d:3,
     porque:"Cada carruagem tem 3 quadrados (3 × n) e a locomotiva tem sempre 2."},
    {nome:"Quadrado cheio (desafio)", desc:"Quadrados cheios de mosaicos. Atenção: aqui não se junta sempre o mesmo número!",
     cel:function(n){ const c = []; for(let x = 0; x < n; x++) for(let y = 0; y < n; y++) c.push([x, y, (x+y)&nbsp;% 2 ? "a" : "b"]); return c; },
     f:function(n){ return n*n; }, geral:"n × n", erradas:["2n", "n + n", "4n"], d:0,
     porque:"O termo n é um quadrado com n filas de n mosaicos: n × n. De um termo para o seguinte junta-se 3, depois 5, depois 7…"}
  ];
  const COR = {a:"#4F86B3", b:"#FFFFFF", y:"#F2C230", v:"#4FA36B"};
  function desenho(p, n, lado){
    const c = p.cel(n);
    const xs = c.map(function(q){ return q[0]; }), ys = c.map(function(q){ return q[1]; });
    const x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
    const w = Math.max.apply(null, xs) - x0 + 1, h = Math.max.apply(null, ys) - y0 + 1, u = 20;
    return '<svg viewBox="-2 -2 '+(w*u+4)+' '+(h*u+4)+'" style="width:'+Math.min(lado, (w*u+4)*1.1)+'px" role="img" aria-label="'+n+'.º termo: '+c.length+' quadrados">'+
      c.map(function(q){ return '<rect x="'+((q[0]-x0)*u)+'" y="'+((q[1]-y0)*u)+'" width="'+(u-2)+'" height="'+(u-2)+'" rx="3" fill="'+COR[q[2]]+'" stroke="#3B372F" stroke-width="1.2"/>'; }).join("")+'</svg>';
  }
  function termos(p, ns){
    return '<div class="pd-termos">'+ns.map(function(n){ return '<figure>'+desenho(p, n, 150)+'<figcaption>'+n+'.º termo</figcaption></figure>'; }).join("")+'<span class="pd-ret" aria-hidden="true">…</span></div>';
  }

  function padroes(){
    const box = el("div","ordem-box pd-box");
    let k = Math.floor(Math.random()*(PADROES.length-1)), passo = 0, tent = 0, inv = 0;
    const tit = el("p","subhead",""), corpo = el("div",""), fb = el("div","ordem-fb"); fb.setAttribute("aria-live","polite");
    const acoes = el("div","card-actions");
    const seg = el("button","cta","Seguinte →"), outro = el("button","ghost-btn","🔀 Outro padrão");
    seg.type = outro.type = "button"; seg.hidden = true;
    acoes.appendChild(seg); acoes.appendChild(outro);
    box.appendChild(tit); box.appendChild(corpo); box.appendChild(acoes); box.appendChild(fb);

    function pergunta(){
      const p = PADROES[k];
      tit.innerHTML = '🔷 Padrões de figuras <small class="muted">— '+p.nome+' · passo '+(passo+1)+' de 4</small>';
      fb.innerHTML = ""; seg.hidden = true; tent = 0;
      let html = '<p class="pd-desc">'+p.desc+'</p>'+termos(p, [1, 2, 3]);
      if(passo === 0) html += '<p><b>Prevê:</b> quantos quadrados tem o <b>4.º termo</b>? Depois verificas no desenho.</p>';
      if(passo === 1) html += '<p><b>E o 10.º termo?</b> Não precisas de o desenhar: procura a regra.</p>';
      if(passo === 2) html += '<p><b>Qual é o termo geral</b> (o número de quadrados do termo de ordem n)?</p>';
      if(passo === 3){ inv = 12 + Math.floor(Math.random()*14); html += '<p><b>Pergunta inversa:</b> um termo deste padrão tem <b>'+p.f(inv)+'</b> quadrados. Qual é a sua <b>ordem</b>?</p>'; }
      corpo.innerHTML = html;
      if(passo === 2){
        const ops = el("div","qoptions");
        baralha([p.geral].concat(p.erradas)).forEach(function(o){
          const b = el("button","qopt",o); b.type = "button";
          b.addEventListener("click", function(){ if(b.disabled) return; responder(o === p.geral, b); });
          ops.appendChild(b);
        });
        corpo.appendChild(ops);
      } else {
        const f = el("form","pd-form",'<label>Resposta <input type="number" inputmode="numeric" min="0" step="1" required></label><button class="cta" type="submit">Verificar</button>');
        f.addEventListener("submit", function(e){
          e.preventDefault();
          const v = Number(f.querySelector("input").value), certo = passo === 0 ? p.f(4) : passo === 1 ? p.f(10) : inv;
          responder(v === certo, null);
        });
        corpo.appendChild(f);
        setTimeout(function(){ const i = f.querySelector("input"); if(i && box.getBoundingClientRect().top >= 0) i.focus({preventScroll:true}); }, 0);
      }
    }
    function responder(ok, botao){
      const p = PADROES[k];
      tent++;
      if(botao){ botao.classList.add(ok ? "pd-ok" : "pd-quase"); if(ok || tent >= 2) corpo.querySelectorAll(".qopt").forEach(function(b){ b.disabled = true; if(b.textContent === p.geral) b.classList.add("pd-ok"); }); }
      if(!ok && tent < 2){
        fb.innerHTML = '🤔 <b>Quase.</b> '+(p.d ? 'Repara: de um termo para o seguinte juntam-se <b>'+p.d+'</b> quadrados.' : 'Conta os quadrados de cada termo e vê como crescem: 1, 4, 9…')+' Tenta outra vez.';
        return;
      }
      let res = (ok ? '🎉 <b>Certo!</b> ' : '💡 <b>Vê como se faz.</b> ');
      if(passo === 0){ res += 'O 4.º termo tem <b>'+p.f(4)+'</b> quadrados.'; corpo.insertAdjacentHTML("beforeend", '<figure class="pd-ver">'+desenho(p, 4, 220)+'<figcaption>4.º termo: '+p.f(4)+' quadrados</figcaption></figure>'); }
      if(passo === 1) res += 'O 10.º termo tem <b>'+p.f(10)+'</b> quadrados. '+(p.d
        ? 'Do 1.º termo ('+p.f(1)+') ao 10.º juntam-se 9 vezes '+p.d+': '+p.f(1)+' + 9 × '+p.d+' = '+p.f(10)+'.'
        : 'É um quadrado de 10 por 10: 10 × 10 = 100.');
      if(passo === 2) res += 'O termo geral é <b>'+p.geral+'</b>. '+p.porque;
      if(passo === 3) res += 'É o <b>'+inv+'.º termo</b>: '+(p.d ? 'faz o caminho ao contrário (tira o que é fixo e divide por '+p.d+').' : 'que número vezes ele próprio dá '+p.f(inv)+'?');
      fb.innerHTML = res;
      const f = corpo.querySelector(".pd-form"); if(f) f.querySelectorAll("input,button").forEach(function(x){ x.disabled = true; });
      seg.hidden = false;
      seg.textContent = passo < 3 ? "Seguinte →" : "🔷 Outro padrão →";
    }
    seg.addEventListener("click", function(){ if(passo < 3) passo++; else { passo = 0; k = (k+1)&nbsp;% PADROES.length; } pergunta(); });
    outro.addEventListener("click", function(){ passo = 0; k = (k+1)&nbsp;% PADROES.length; pergunta(); });
    pergunta();
    return box;
  }

  /* ---------- 🟦 pinta a percentagem ---------- */
  const CORES = {azul:["Azul","#4F86B3"], amarelo:["Amarelo","#F2C230"], verde:["Verde","#4FA36B"], laranja:["Laranja","#E0884D"], cinzento:["Cinzento","#9A948A"]};
  const TAREFAS = [
    {t:"Um azulejo para a cozinha", partes:[["azul",30]]},
    {t:"A bandeira da equipa", partes:[["azul",50],["amarelo",20]], resto:"verde"},
    {t:"Um tapete para o quarto", partes:[["laranja",15],["azul",35]], resto:"cinzento"},
    {t:"Um mosaico para o pátio", partes:[["verde",8],["amarelo",12],["azul",25]], resto:"laranja"},
    {t:"Um cartaz da escola", partes:[["amarelo",45],["verde",5]], resto:"azul"}
  ];
  function grelha(){
    const box = el("div","ordem-box gp-box");
    let k = 0, cor = null, cel = [], pintar = false, fase = "resto";
    const tit = el("p","subhead",""), enun = el("div",""), pal = el("div","gp-pal"), grid = el("div","gp-grid"), conta = el("p","gp-conta"), fb = el("div","ordem-fb");
    fb.setAttribute("aria-live","polite"); grid.setAttribute("role","grid"); grid.setAttribute("aria-label","Grelha de 100 quadrados");
    const acoes = el("div","card-actions");
    const ver = el("button","cta","✅ Verificar"), limpar = el("button","ghost-btn","🧽 Limpar"), outra = el("button","ghost-btn","🔀 Outra tarefa");
    ver.type = limpar.type = outra.type = "button";
    acoes.appendChild(ver); acoes.appendChild(limpar); acoes.appendChild(outra);
    box.appendChild(tit); box.appendChild(enun); box.appendChild(pal); box.appendChild(grid); box.appendChild(conta); box.appendChild(acoes); box.appendChild(fb);
    for(let i = 0; i < 100; i++){ const c = el("span","gp-c"); c.dataset.i = i; grid.appendChild(c); }
    const quad = Array.prototype.slice.call(grid.children);

    function partes(){ const T = TAREFAS[k]; return T.resto ? T.partes.concat([[T.resto, 100 - T.partes.reduce(function(s, p){ return s + p[1]; }, 0)]]) : T.partes; }
    function nova(){
      const T = TAREFAS[k];
      cel = new Array(100).fill(null); fb.innerHTML = "";
      tit.innerHTML = '🟦 Pinta a percentagem <small class="muted">— '+T.t+'</small>';
      const txt = T.partes.map(function(p){ return '<b>'+p[1]+'&nbsp;%</b> '+CORES[p[0]][0].toLowerCase(); }).join(", ");
      enun.innerHTML = '<p>A grelha tem <b>100 quadrados</b>: cada quadrado é <b>1&nbsp;%</b> e cada fila de 10 é <b>10&nbsp;%</b>.</p><p>Quero '+txt+(T.resto ? ' e <b>o resto '+CORES[T.resto][0].toLowerCase()+'</b>.' : '.')+'</p>';
      fase = T.resto ? "resto" : "pintar";
      if(T.resto){
        const f = el("form","pd-form",'<label>Que percentagem fica '+CORES[T.resto][0].toLowerCase()+'? <input type="number" inputmode="numeric" min="0" max="100" required>&nbsp;%</label><button class="cta" type="submit">Verificar</button>');
        let t = 0;
        f.addEventListener("submit", function(e){
          e.preventDefault(); t++;
          const certo = partes()[partes().length-1][1], v = Number(f.querySelector("input").value);
          if(v === certo || t >= 2){
            fb.innerHTML = (v === certo ? '🎉 <b>Certo!</b> ' : '💡 ')+'100 − '+T.partes.map(function(p){ return p[1]; }).join(" − ")+' = <b>'+certo+'&nbsp;%</b>. Agora pinta a grelha.';
            f.querySelectorAll("input,button").forEach(function(x){ x.disabled = true; });
            fase = "pintar"; mostrar();
          } else fb.innerHTML = '🤔 <b>Quase.</b> O todo é 100&nbsp;%: soma as outras partes e vê quanto falta para 100.';
        });
        enun.appendChild(f);
      }
      mostrar();
    }
    function mostrar(){
      const P = partes();
      const on = fase === "pintar";
      pal.hidden = grid.hidden = conta.hidden = !on; ver.hidden = limpar.hidden = !on;
      pal.innerHTML = "";
      P.forEach(function(p){
        const b = el("button","gp-cor",'<i style="background:'+CORES[p[0]][1]+'"></i>'+CORES[p[0]][0]); b.type = "button"; b.dataset.c = p[0];
        b.addEventListener("click", function(){ cor = p[0]; marcar(); });
        pal.appendChild(b);
      });
      const bo = el("button","gp-cor",'<i class="gp-borr"></i>Borracha'); bo.type = "button"; bo.dataset.c = "";
      bo.addEventListener("click", function(){ cor = ""; marcar(); });
      pal.appendChild(bo);
      if(cor === null || (cor && !P.some(function(p){ return p[0] === cor; }))) cor = P[0][0];
      marcar(); pinta();
    }
    function marcar(){ pal.querySelectorAll(".gp-cor").forEach(function(b){ const o = b.dataset.c === cor; b.classList.toggle("on", o); b.setAttribute("aria-pressed", o ? "true" : "false"); }); }
    function pinta(){
      quad.forEach(function(q, i){ q.style.background = cel[i] ? CORES[cel[i]][1] : ""; });
      conta.innerHTML = partes().map(function(p){ const n = cel.filter(function(c){ return c === p[0]; }).length; return '<span><i style="background:'+CORES[p[0]][1]+'"></i>'+CORES[p[0]][0]+': <b>'+n+'</b> de '+p[1]+'</span>'; }).join("");
    }
    function toca(alvo){ if(!alvo || !alvo.classList || !alvo.classList.contains("gp-c")) return; const i = +alvo.dataset.i; const v = cor || null; if(cel[i] !== v){ cel[i] = v; pinta(); } }
    grid.addEventListener("pointerdown", function(e){ pintar = true; toca(e.target); e.preventDefault(); });
    grid.addEventListener("pointermove", function(e){ if(pintar) toca(document.elementFromPoint(e.clientX, e.clientY)); });
    window.addEventListener("pointerup", function(){ pintar = false; });
    ver.addEventListener("click", function(){
      const P = partes(), mal = P.filter(function(p){ return cel.filter(function(c){ return c === p[0]; }).length !== p[1]; });
      const vazios = cel.filter(function(c){ return !c; }).length, devia = 100 - P.reduce(function(s, p){ return s + p[1]; }, 0);
      if(!mal.length && vazios === devia){
        fb.innerHTML = '🎉 <b>Perfeito!</b> '+P.map(function(p){ return p[1]+'&nbsp;% = '+p[1]+'/100'; }).join(" · ")+(P.length > 1 ? ' — e juntas dão 100&nbsp;%.' : '.');
      } else fb.innerHTML = '🤔 <b>Ainda não.</b> '+mal.map(function(p){ const n = cel.filter(function(c){ return c === p[0]; }).length; return CORES[p[0]][0]+': tens '+n+', precisas de '+p[1]+(n < p[1] ? ' (faltam '+(p[1]-n)+')' : ' (sobram '+(n-p[1])+')'); }).join(" · ");
    });
    limpar.addEventListener("click", function(){ cel = new Array(100).fill(null); fb.innerHTML = ""; pinta(); });
    outra.addEventListener("click", function(){ k = (k+1)&nbsp;% TAREFAS.length; nova(); });
    nova();
    return box;
  }

  const MAPA = {n3: [grelha], n4: [padroes]};
  window.MissaoAtivMat = {para: function(w){ return (MAPA[w.id] || []).map(function(f){ return f(w); }); }};
})();
