/* Atividades de Matemática para o 🎯 Praticar (conteúdo original; o formato inspira-se nos cadernos de problemas):
   - 🔷 Padrões de figuras (Mundo 4): ver 3 termos, prever o 4.º e verificar no desenho, o 10.º, o termo geral e a pergunta inversa.
     Na matemática japonesa (e nos Common Core dos EUA, «look for and express regularity») o padrão visual vem antes da fórmula.
   - 🟦 Pinta a percentagem (Mundo 3): uma grelha de 100 quadrados (1 quadrado = 1 %), pintada com o dedo ou o rato.
   - 🧠 Como pensar, passo a passo (Mundos 1, 2 e 3): exemplos resolvidos em voz alta, um passo de cada vez.
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
     cel:function(n){ const c = []; for(let x = 0; x < n; x++) for(let y = 0; y < n; y++) c.push([x, y, (x+y) % 2 ? "a" : "b"]); return c; },
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
    seg.addEventListener("click", function(){ if(passo < 3) passo++; else { passo = 0; k = (k+1) % PADROES.length; } pergunta(); });
    outro.addEventListener("click", function(){ passo = 0; k = (k+1) % PADROES.length; pergunta(); });
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
    outra.addEventListener("click", function(){ k = (k+1) % TAREFAS.length; nova(); });
    nova();
    return box;
  }

  /* ---------- 🧠 Como pensar, passo a passo (Mundos 1, 2 e 3) ----------
     Exemplo resolvido em voz alta: em cada passo, primeiro a pergunta que se faz («💭»), depois a conta («✏️»).
     Segue os 4 passos de Pólya (EUA, «How to Solve It», 1945): perceber, planear, fazer e verificar.
     Os exemplos resolvidos ajudam quem está a aprender mais do que resolver logo sozinho (Sweller, «worked example effect»).
     Quem quiser pode tentar primeiro e só depois ver os passos. */
  const ri = function(a, b){ return a + Math.floor(Math.random()*(b-a+1)); };
  const esc = function(a){ return a[Math.floor(Math.random()*a.length)]; };
  const mdc = function(a, b){ a = Math.abs(a); b = Math.abs(b); while(b){ const t = b; b = a % b; a = t; } return a; };
  const mmc = function(a, b){ return a / mdc(a, b) * b; };
  const fr = function(n, d){ return '<span class="cp-fr"><b>'+n+'</b><b>'+d+'</b></span>'; };
  // decimal guardado como inteiro com «c» casas: (125, 1) = 12,5
  const dec = function(v, c){ let s = String(Math.abs(v)).padStart(c+1, "0"); if(c) s = s.slice(0, -c)+","+s.slice(-c); return (v < 0 ? "−" : "")+s; };
  const semZeros = function(s){ return s.indexOf(",") === -1 ? s : s.replace(/0+$/, "").replace(/,$/, ""); };
  const virg = function(x){ return semZeros(x.toFixed(2).replace(".", ",")); };
  const multiplos = function(n, ate){ const m = []; for(let k = n; k <= ate; k += n) m.push(k); return m.join(", "); };

  function simplifica(n, d){
    const g = mdc(n, d), passos = [];
    if(g > 1) passos.push(["Posso simplificar? Procuro o maior divisor comum de "+n+" e "+d+".", "m.d.c.("+n+", "+d+") = "+g+" → "+fr(n, d)+" = "+fr(n/g, d/g)+" (divido em cima e em baixo por "+g+")"]);
    else passos.push(["Posso simplificar?", n+" e "+d+" só têm o 1 como divisor comum: "+fr(n, d)+" já é irredutível."]);
    n /= g; d /= g;
    if(n > d && n % d) passos.push(["O numerador é maior do que o denominador: quantas unidades inteiras cabem?", fr(n, d)+" = "+Math.floor(n/d)+" e "+fr(n % d, d)+" (número misto)"]);
    else if(n % d === 0 && d !== 1) passos.push(["O numerador é múltiplo do denominador?", fr(n, d)+" = "+(n/d)]);
    return {n:n, d:d, passos:passos};
  }

  const GERA = {
    ordem: function(){
      const f = ri(0, 2);
      if(f === 0){
        const a = ri(2, 20), b = ri(2, 9), d = ri(1, 6), c = d + ri(1, 6), r = c - d, m = b*r;
        return {q:a+" + "+b+" × ("+c+" − "+d+")", v:[a+m, 1], passos:[
          ["Há parênteses? Sim: o que está dentro deles faz-se primeiro.", c+" − "+d+" = "+r+" → fica "+a+" + "+b+" × "+r],
          ["Há potências? Não. Há multiplicações ou divisões? Sim: fazem-se antes das adições.", b+" × "+r+" = "+m+" → fica "+a+" + "+m],
          ["Só falta a adição.", a+" + "+m+" = <b>"+(a+m)+"</b>"]],
          verif:"Se fizesse da esquerda para a direita, ("+a+" + "+b+") × "+r+" daria "+((a+b)*r)+": outro resultado. Por isso a ordem das operações conta."};
      }
      if(f === 1){
        const s = esc([4, 6, 8, 10]), a = ri(1, s-1), b = s - a, q = s*s, c = esc([2, 4]), t = q/c, d = ri(1, Math.min(9, t-1));
        return {q:"("+a+" + "+b+")² ÷ "+c+" − "+d, v:[t-d, 1], passos:[
          ["Há parênteses? Sim: começo por eles.", a+" + "+b+" = "+s+" → fica "+s+"² ÷ "+c+" − "+d],
          ["Há potências? Sim: vêm logo a seguir aos parênteses. "+s+"² é "+s+" × "+s+".", s+" × "+s+" = "+q+" → fica "+q+" ÷ "+c+" − "+d],
          ["Agora as divisões e multiplicações, antes da subtração.", q+" ÷ "+c+" = "+t+" → fica "+t+" − "+d],
          ["Só falta a subtração.", t+" − "+d+" = <b>"+(t-d)+"</b>"]],
          verif:"Faço ao contrário: "+(t-d)+" + "+d+" = "+t+" e "+t+" × "+c+" = "+q+" = "+s+"². Bate certo."};
      }
      const a = ri(3, 9), b = ri(3, 9), d = ri(2, 5), k = ri(2, 9), c = d*k, p = a*b, e = ri(1, 15);
      return {q:a+" × "+b+" − "+c+" ÷ "+d+" + "+e, v:[p-k+e, 1], passos:[
        ["Há parênteses ou potências? Não. Então começo pelas multiplicações e divisões, da esquerda para a direita.", a+" × "+b+" = "+p+" → fica "+p+" − "+c+" ÷ "+d+" + "+e],
        ["Ainda há uma divisão.", c+" ÷ "+d+" = "+k+" → fica "+p+" − "+k+" + "+e],
        ["Só há adições e subtrações: faço-as da esquerda para a direita.", p+" − "+k+" = "+(p-k)+" → fica "+(p-k)+" + "+e],
        ["Última conta.", (p-k)+" + "+e+" = <b>"+(p-k+e)+"</b>"]],
        verif:"Atenção à armadilha: "+p+" − "+k+" + "+e+" não é "+p+" − "+(k+e)+". Da esquerda para a direita, sempre."};
    },
    fracoes: function(){
      const op = esc(["+", "−", "×", "÷"]);
      let b = ri(2, 9), d = ri(2, 9); while(d === b) d = ri(2, 9);
      let a = ri(1, b-1), c = ri(1, d-1);
      while(mdc(a, b) > 1) a = ri(1, b-1);   // as frações do enunciado já vêm irredutíveis
      while(mdc(c, d) > 1) c = ri(1, d-1);
      if(op === "−" && a*d < c*b){ const ta = a, tb = b; a = c; b = d; c = ta; d = tb; }
      if(op === "−" && a*d === c*b){ c = 1; d = b*2; }
      const q = fr(a, b)+" "+op+" "+fr(c, d);
      if(op === "+" || op === "−"){
        const L = mmc(b, d), A = a*L/b, C = c*L/d, S = op === "+" ? A + C : A - C, sp = simplifica(S, L);
        return {q:q, v:[sp.n, sp.d], passos:[
          ["Os denominadores são iguais? Não ("+b+" e "+d+"): os pedaços têm tamanhos diferentes e ainda não os posso juntar.", "Procuro o menor múltiplo comum. Múltiplos de "+b+": "+multiplos(b, L)+". Múltiplos de "+d+": "+multiplos(d, L)+". → m.m.c. = "+L],
          ["Por quanto multiplico cada denominador para chegar a "+L+"? Multiplico também o numerador pelo mesmo número.", fr(a, b)+" = "+fr(A, L)+" (× "+(L/b)+") e "+fr(c, d)+" = "+fr(C, L)+" (× "+(L/d)+")"],
          ["Agora os pedaços são do mesmo tamanho: "+(op === "+" ? "somo" : "subtraio")+" só os numeradores; o denominador fica igual.", fr(A, L)+" "+op+" "+fr(C, L)+" = "+fr(S, L)]].concat(sp.passos),
          verif:"Estimo com decimais: "+fr(a, b)+" ≈ "+virg(a/b)+" e "+fr(c, d)+" ≈ "+virg(c/d)+"; "+(op === "+" ? "somados" : "subtraídos")+" dão ≈ "+virg(op === "+" ? a/b + c/d : a/b - c/d)+", e "+fr(sp.n, sp.d)+" ≈ "+virg(sp.n/sp.d)+". Bate certo."};
      }
      if(op === "×"){
        const sp = simplifica(a*c, b*d);
        return {q:q, v:[sp.n, sp.d], passos:[
          ["Na multiplicação não preciso de denominadores iguais.", "Multiplico numerador por numerador e denominador por denominador: "+fr(a+" × "+c, b+" × "+d)+" = "+fr(a*c, b*d)]].concat(sp.passos),
          verif:"Multiplicar por uma fração menor do que 1 dá um resultado mais pequeno: "+fr(sp.n, sp.d)+" é menor do que "+fr(a, b)+". Faz sentido."};
      }
      const sp = simplifica(a*d, b*c);
      return {q:q, v:[sp.n, sp.d], passos:[
        ["Dividir por uma fração é o mesmo que multiplicar pelo seu inverso (troco o numerador com o denominador da 2.ª fração).", fr(a, b)+" ÷ "+fr(c, d)+" = "+fr(a, b)+" × "+fr(d, c)],
        ["Agora é uma multiplicação: em cima com em cima, em baixo com em baixo.", fr(a+" × "+d, b+" × "+c)+" = "+fr(a*d, b*c)]].concat(sp.passos),
        verif:"Faço ao contrário: "+fr(sp.n, sp.d)+" × "+fr(c, d)+" tem de dar "+fr(a, b)+"."};
    },
    decimais: function(){
      const t = ri(0, 3);
      if(t === 0){
        const op = esc(["+", "−"]), X = ri(105, 999)*10, Y = ri(105, 999);   // X: 1 casa decimal (guardado com 2), Y: 2 casas
        const R = op === "+" ? X + Y : X - Y;
        return {q:semZeros(dec(X, 2))+" "+op+" "+dec(Y, 2), v:[R, 100], passos:[
          ["Onde estão as vírgulas? Alinho as vírgulas umas por baixo das outras (unidades com unidades, décimas com décimas).", "Acrescento um zero para os dois terem 2 casas decimais: "+dec(X, 2)+" "+op+" "+dec(Y, 2)],
          ["Agora faço a conta como se fossem números inteiros, da direita para a esquerda.", X+" "+op+" "+Y+" = "+R],
          ["Onde ponho a vírgula no resultado? No mesmo sítio: 2 casas decimais.", "<b>"+semZeros(dec(R, 2))+"</b>"]],
          verif:"Estimo com números redondos: "+Math.round(X/100)+" "+op+" "+Math.round(Y/100)+" = "+(op === "+" ? Math.round(X/100)+Math.round(Y/100) : Math.round(X/100)-Math.round(Y/100))+". O resultado tem de estar perto disto."};
      }
      if(t === 1){
        const x = ri(11, 49), y = ri(11, 39), R = x*y;
        return {q:dec(x, 1)+" × "+dec(y, 1), v:[R, 100], passos:[
          ["Na multiplicação não preciso de alinhar as vírgulas. Faço a conta sem elas.", x+" × "+y+" = "+R],
          ["Quantas casas decimais têm os fatores ao todo?", dec(x, 1)+" tem 1 e "+dec(y, 1)+" tem 1: 1 + 1 = 2 casas"],
          ["O resultado tem essas casas todas: conto 2 casas a partir da direita.", R+" → <b>"+semZeros(dec(R, 2))+"</b>"]],
          verif:"Estimo: "+Math.round(x/10)+" × "+Math.round(y/10)+" = "+Math.round(x/10)*Math.round(y/10)+". "+semZeros(dec(R, 2))+" está perto. Se a vírgula estivesse noutro sítio (por exemplo "+semZeros(dec(R, 1))+"), a estimativa mostrava o erro."};
      }
      if(t === 2){
        const dv = esc([2, 4, 5, 6, 8]), qu = ri(3, 25), D = dv*qu;
        return {q:dec(D, 1)+" ÷ "+dec(dv, 1), v:[qu, 1], passos:[
          ["O divisor tem vírgula. Posso multiplicar os dois números pelo mesmo valor sem mudar o resultado.", "Multiplico os dois por 10: "+dec(D, 1)+" × 10 = "+D+" e "+dec(dv, 1)+" × 10 = "+dv+" → fica "+D+" ÷ "+dv],
          ["Agora o divisor é inteiro: faço a divisão normal.", D+" ÷ "+dv+" = <b>"+qu+"</b>"]],
          verif:"Faço ao contrário: "+qu+" × "+dec(dv, 1)+" = "+dec(D, 1)+". Dividir por um número menor do que 1 dá um resultado maior: faz sentido."};
      }
      const P = esc([15, 20, 25, 30, 35, 40, 45]), N = 20*ri(2, 15), dez = N/10, R10 = P*N/10;   // R10 = resultado × 10
      const nd = Math.floor(P/10), cinco = P % 10 === 5;
      const passos = [["Como calculo 10 %? 10 % é a décima parte: divido por 10.", "10 % de "+N+" = "+N+" ÷ 10 = "+dez]];
      if(nd > 1) passos.push(["Quantos «10 %» cabem em "+P+" %?", nd+" × 10 % = "+nd+" × "+dez+" = "+(nd*dez)]);
      if(cinco) passos.push(["Falta 5 %: 5 % é metade de 10 %.", "5 % de "+N+" = "+dez+" ÷ 2 = "+semZeros(dec(dez*5, 1))]);
      passos.push(["Junto as partes.", P+" % de "+N+" = <b>"+semZeros(dec(R10, 1))+"</b>"]);
      return {q:P+" % de "+N, v:[P*N, 100], passos:passos,
        verif:"Confirmo de outra maneira: "+P+" % = "+fr(P, 100)+", e "+fr(P, 100)+" × "+N+" = "+(P*N)+" ÷ 100 = "+semZeros(dec(R10, 1))+"."};
    }
  };
  const TEMA = {n1:["ordem", "🧮 Ordem das operações"], n2:["fracoes", "🍕 Operações com frações"], n3:["decimais", "🏷️ Decimais e percentagens"]};
  const eur = function(c){ return (c % 100 ? dec(c, 2) : String(c/100))+" €"; };   // cêntimos → «2,50 €»
  // 💶 Dinheiro e Casa: poupança (f4) e compras (f5), em cêntimos para as contas darem certas
  GERA.poupanca = function(){
    if(ri(0, 1)){
      const sem = esc([4, 5, 6, 8, 10]), porSem = esc([150, 200, 250, 300, 350, 400]), P = sem*porSem;
      return {q:"Queres comprar uma coisa de "+eur(P)+" daqui a "+sem+" semanas. Quanto tens de poupar por semana?", v:[porSem, 100], passos:[
        ["Perceber: o que sei? O preço e o número de semanas. O que quero? Quanto guardar em cada semana.", "Preço: "+eur(P)+" · tempo: "+sem+" semanas"],
        ["Planear: o preço tem de ser dividido em partes iguais, uma por semana.", "Faço uma divisão: "+eur(P)+" ÷ "+sem],
        ["Fazer a conta (em cêntimos é mais fácil).", P+" cêntimos ÷ "+sem+" = "+porSem+" cêntimos = <b>"+eur(porSem)+"</b> por semana"]],
        verif:sem+" × "+eur(porSem)+" = "+eur(P)+". Bate certo."};
    }
    const C = esc([5000, 10000, 20000, 25000, 40000]), taxa = esc([1, 2, 3, 4]), J = C*taxa/100;
    return {q:"Pões "+eur(C)+" numa conta que paga "+taxa+" % de juro ao ano. Quanto recebes de juros ao fim de 1 ano?", v:[J, 100], passos:[
      ["Perceber: o juro é uma percentagem do dinheiro que está na conta.", "Quero "+taxa+" % de "+eur(C)],
      ["Planear: começo por 1 %, que é dividir por 100.", "1 % de "+eur(C)+" = "+eur(C/100)],
      ["Fazer: "+taxa+" % são "+taxa+" vezes 1 %.", taxa+" × "+eur(C/100)+" = <b>"+eur(J)+"</b>"]],
      verif:"Ao fim de 1 ano, a conta fica com "+eur(C)+" + "+eur(J)+" = "+eur(C+J)+". O juro é pequeno, por isso o resultado tem de ser só um pouco maior do que "+eur(C)+"."};
  };
  GERA.compras = function(){
    const t = ri(0, 2);
    if(t === 0){
      const p1 = esc([160, 180, 200, 220, 240]), pk1 = p1*2;
      let k2 = esc([300, 340, 360, 380, 420, 440]); while(k2 === pk1) k2 += 20;
      const melhor = pk1 < k2 ? "o pacote de 500 g" : "o pacote de 1 kg";
      return {q:"Arroz: 500 g a "+eur(p1)+" ou 1 kg a "+eur(k2)+". Qual compensa mais? (Para verificar, escreve o preço por kg do que compensa.)", v:[Math.min(pk1, k2), 100], passos:[
        ["Perceber: as embalagens têm tamanhos diferentes. Não posso comparar só o preço.", "Comparo o preço do mesmo peso: o preço por kg"],
        ["Quanto custa 1 kg do pacote pequeno? 1 kg são 2 pacotes de 500 g.", "2 × "+eur(p1)+" = "+eur(pk1)+" por kg"],
        ["O pacote grande já é de 1 kg.", eur(k2)+" por kg"],
        ["Comparar os dois preços por kg.", eur(pk1)+" e "+eur(k2)+" → <b>"+melhor+"</b>"+(pk1 !== k2 ? " (mais barato: "+eur(Math.min(pk1, k2))+"/kg)" : "")]],
        verif:"Só compensa levar mais se o arroz se gastar antes de estragar. Neste caso, o arroz dura muito: a conta vale."};
    }
    if(t === 1){
      const u = esc([45, 60, 75, 90, 120]), R = 2*u, cada = R/3;
      return {q:"Iogurtes a "+eur(u)+" cada, em promoção «leve 3, pague 2». Quanto custa, de facto, cada iogurte?", v:[cada, 100], passos:[
        ["Perceber: levo 3, mas só pago 2.", "Pago 2 × "+eur(u)+" = "+eur(R)],
        ["Planear: para saber o preço de cada um, reparto o que paguei pelos 3.", eur(R)+" ÷ 3"],
        ["Fazer a conta em cêntimos.", R+" ÷ 3 = "+cada+" cêntimos = <b>"+eur(cada)+"</b>"]],
        verif:"Poupas "+eur(u-cada)+" em cada iogurte. Mas a promoção só compensa se forem comidos antes do prazo."};
    }
    const total = ri(105, 990), nota = total <= 500 ? 500 : 1000, troco = nota - total;
    return {q:"A compra custa "+eur(total)+" e pagas com uma nota de "+eur(nota)+". Quanto recebes de troco?", v:[troco, 100], passos:[
      ["Perceber: o troco é o que falta ao preço para chegar ao valor da nota.", eur(nota)+" − "+eur(total)],
      ["Planear: conto para a frente, como faz quem está na caixa: primeiro até ao euro seguinte.", eur(total)+" + "+eur((100 - total % 100) % 100)+" = "+eur(Math.ceil(total/100)*100)],
      ["Depois, do euro seguinte até ao valor da nota.", eur(Math.ceil(total/100)*100)+" + "+eur(nota - Math.ceil(total/100)*100)+" = "+eur(nota)],
      ["Somar as duas partes.", eur((100 - total % 100) % 100)+" + "+eur(nota - Math.ceil(total/100)*100)+" = <b>"+eur(troco)+"</b>"]],
      verif:eur(total)+" + "+eur(troco)+" = "+eur(nota)+". Confere sempre o troco antes de sair da caixa."};
  };
  TEMA.f4 = ["poupanca", "🐷 Contas da poupança"];
  TEMA.f5 = ["compras", "🛒 Qual compensa?"];

  function lerNumero(s){
    s = String(s).trim().replace(/\s+/g, " ").replace(",", ".").replace("−", "-");
    let m = s.match(/^(-?\d+) (\d+)\/(\d+)$/); if(m && +m[3]) return {v:(+m[1]) + (+m[2])/(+m[3]), fr:[+m[2] + (+m[1])*(+m[3]), +m[3]]};
    m = s.match(/^(-?\d+)\/(\d+)$/); if(m && +m[2]) return {v:(+m[1])/(+m[2]), fr:[+m[1], +m[2]]};
    if(/^-?\d+(\.\d+)?$/.test(s)) return {v:+s};
    return null;
  }

  function pensar(w){
    const tema = TEMA[w.id];
    const box = el("div", "ordem-box cp-box");
    box.appendChild(el("p", "subhead", '🧠 Como pensar, passo a passo <small class="muted">— '+tema[1]+'</small>'));
    box.appendChild(el("p", "cp-polya", '<span>1. Perceber</span><span>2. Planear</span><span>3. Fazer</span><span>4. Verificar</span>'));
    const conta = el("p", "cp-conta"), lista = el("ol", "cp-passos"), fb = el("div", "ordem-fb"); fb.setAttribute("aria-live", "polite");
    const tenta = el("div", "cp-tenta", '<label>Queres tentar primeiro? <input type="text" inputmode="decimal" autocomplete="off" placeholder="a tua resposta"></label> <button type="button" class="ghost-btn">Verificar</button>');
    const acoes = el("div", "card-actions"), seg = el("button", "cta", "👣 Ver o 1.º passo"), outro = el("button", "ghost-btn", "🔀 Outro exemplo");
    seg.type = outro.type = "button";
    acoes.appendChild(seg); acoes.appendChild(outro);
    [conta, tenta, lista, acoes, fb].forEach(function(x){ box.appendChild(x); });
    let ex, i;

    function novo(){
      ex = GERA[tema[0]](); i = 0;
      conta.innerHTML = (ex.q.indexOf("?") !== -1 ? "🧩 " : "Calcula: ")+"<b>"+ex.q+"</b>";   // os problemas com pergunta não levam «Calcula:»
      lista.innerHTML = ""; fb.innerHTML = ""; tenta.querySelector("input").value = "";
      seg.hidden = false; seg.textContent = "👣 Ver o 1.º passo";
    }
    function passo(){
      if(i < ex.passos.length){
        const p = ex.passos[i];
        lista.appendChild(el("li", "", '<p class="cp-pensa">💭 '+p[0]+'</p><p class="cp-faz">✏️ '+p[1]+'</p>'));
        i++;
        seg.textContent = i < ex.passos.length ? "👣 Passo seguinte ("+(i+1)+" de "+ex.passos.length+")" : "✔️ Verificar o resultado";
      } else {
        lista.appendChild(el("li", "cp-verif", '<p class="cp-pensa">✔️ <b>Verificar:</b> '+ex.verif+'</p>'));
        seg.hidden = true;
      }
      const ult = lista.lastElementChild; ult.tabIndex = -1; ult.focus({preventScroll:true});
    }
    tenta.querySelector("button").addEventListener("click", function(){
      const r = lerNumero(tenta.querySelector("input").value), certo = ex.v[0]/ex.v[1];
      if(!r){ fb.innerHTML = "✏️ Escreve um número (12,5), uma fração (3/4) ou um número misto (1 1/2)."; return; }
      if(Math.abs(r.v - certo) < 1e-9){
        const simp = r.fr && mdc(r.fr[0], r.fr[1]) > 1;
        fb.innerHTML = "🎉 <b>Certo!</b>"+(simp ? " Ainda dá para simplificar: vê o último passo." : "")+" Vê os passos para comparar com a tua maneira de pensar.";
      } else fb.innerHTML = "🤔 <b>Ainda não.</b> Não faz mal: vê os passos um de cada vez e descobre onde o caminho se separou.";
    });
    seg.addEventListener("click", passo);
    outro.addEventListener("click", novo);
    novo();
    return box;
  }

  const MAPA = {n1: [pensar], n2: [pensar], n3: [grelha, pensar], n4: [padroes], f4: [pensar], f5: [pensar]};
  window.MissaoAtivMat = {para: function(w){ return (MAPA[w.id] || []).map(function(f){ return f(w); }); }};
})();
