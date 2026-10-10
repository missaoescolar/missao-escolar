/* Animações de HGP, Português e Inglês (formato explicado em animacoes-matematica.js) */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const range = (a, b) => { const out = []; for(let i=a;i<b;i++) out.push(i); return out; };

  /* ======================================================================
     HGP
     ====================================================================== */

  /* m1 — terramoto de 1755 */
  const PREDIOS = [[20,60,70],[66,50,95],[122,40,60],[168,70,80],[248,45,105],[300,60,72],[352,40,88]];
  A.def({id:"terramoto", mundo:"m1", cor:"m1", titulo:"O terramoto de 1755 e a nova Lisboa",
    cena: () =>
      r(0,0,400,185,{fill:"var(--m3-bg)"})+
      g({id:"cidade", cls:"treme-alvo"},
        PREDIOS.map((b, i) => r(b[0], 180-b[2], b[1]-6, b[2], {id:"pr"+i, cls:"predio", fill:"#E8D6B8", stroke:"#8a6a4a", sw:1.5, style:"--r:"+(i%2 ? 14 : -12)+"deg"})).join("")+
        g({id:"igreja", cls:"predio", style:"--r:10deg"}, r(214,92,30,88,{fill:"#F0E2C8", stroke:"#8a6a4a", sw:1.5})+p("M214,92 L229,70 L244,92 Z",{fill:"#C99B4F", stroke:"#8a6a4a"})+t(229,120,"✝",{fs:14})))+
      r(0,182,400,78,{id:"rio", fill:"#4F86B3", op:0.65})+t(330,232,"rio Tejo",{fs:12, fill:"#fff"})+
      p("M-40,260 C20,120 80,120 140,200 C200,120 260,120 320,200 C360,140 400,150 440,180 L440,260 Z",{id:"onda", fill:"#2F63A0", op:0.75, cls:"an-move", style:"transform:translateY(120px)"})+
      g({id:"fogo", cls:"an-h"}, [[45,110],[100,80],[190,105],[270,70],[330,95]].map(q => t(q[0],q[1],"🔥",{fs:22, cls:"chama"})).join(""))+
      g({id:"baixa", cls:"an-h"}, r(0,0,400,185,{fill:"var(--m3-bg)"})+
        range(0,7).map(i => { const x = 14+i*55; return r(x,90,48,90,{fill:"#F4E9D4", stroke:"#8a6a4a", sw:1.5})+
          range(0,3).map(j => p("M"+(x+4)+","+(96+j*28)+" l40,24 M"+(x+44)+","+(96+j*28)+" l-40,24",{stroke:"#B08A5A", sw:1, op:0.7})).join(""); }).join("")+
        t(200,70,"Baixa Pombalina: ruas direitas e prédios iguais",{fs:13})+t(200,52,"(as cruzes são a «gaiola» de madeira antissísmica)",{fs:11, fw:400}))+
      t(392,22,"",{id:"data", ta:"end", fs:13}),
    passos:[
      {t:"Lisboa, manhã de <b>1 de novembro de 1755</b> — Dia de Todos os Santos. Muita gente estava nas igrejas.", f:S => S.texto("#data", "1 nov. 1755, manhã")},
      {t:"Pouco depois das 9h30, a terra <b>treme</b> durante vários minutos.", f:S => { S.cls("#cidade", "treme"); S.texto("#data", "≈ 9h40"); }},
      {t:"Muitos edifícios <b>desabam</b>.", f:S => { S.cls("#cidade", "treme", false); S.cls(".predio", "cai"); }},
      {t:"Pouco depois, um <b>tsunami</b> entra pelo rio Tejo e inunda a parte baixa da cidade.", f:S => S.mover("#onda", "translateY(0px)")},
      {t:"As velas acesas nas igrejas provocam <b>incêndios</b> que duram vários dias.", f:S => { S.mover("#onda", "translateY(120px)"); S.mostrar("#fogo"); }},
      {t:"O <b>Marquês de Pombal</b> manda reconstruir: a <b>Baixa Pombalina</b> nasce com ruas em quadrícula e prédios com «gaiola» de madeira, mais resistentes a sismos.", f:S => {
        S.esconder("#fogo"); S.mostrar("#baixa"); S.texto("#data", "depois de 1755"); }}
    ]});

  /* m2 — invasões francesas */
  const cidade = (x, y, nome, anchor) => c(x,y,4.5,{fill:"currentColor"})+t(x+(anchor==="end" ? -8 : 8),y+4,nome,{fs:11, ta:anchor||"start"});
  const seta = (id, d, cor) => p(d,{id:id, cls:"seta", stroke:cor, sw:4, lc:"round", lj:"round", pl:1, "marker-end":"url(#an-ponta)"});
  A.def({id:"invasoes", mundo:"m2", cor:"m2", titulo:"As três invasões francesas (1807–1810)",
    cena: () =>
      '<defs><marker id="an-ponta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#555"/></marker></defs>'+
      r(40,14,112,236,{rx:10, fill:"var(--wc-bg)", stroke:"var(--wc)", sw:2})+t(96,244,"PORTUGAL",{fs:11})+
      r(156,14,236,236,{rx:10, fill:"var(--surface-2)"})+t(274,244,"ESPANHA",{fs:11})+t(20,130,"Oceano",{fs:10, fw:400, ta:"middle"})+
      t(392,30,"mapa esquemático",{fs:10, fw:400, ta:"end"})+
      cidade(108,32,"Chaves")+cidade(62,72,"Porto","start")+cidade(88,120,"Buçaco")+cidade(138,104,"Almeida","end")+
      cidade(112,166,"Abrantes")+cidade(58,186,"Torres Vedras")+cidade(58,212,"Lisboa")+
      seta("s1","M330,168 L116,166 L64,208","#9A3B3B")+
      seta("s2","M150,6 L110,30 L66,68","#7F4C9C")+
      seta("s3","M54,204 L56,80","#2E7A56")+
      seta("s4","M300,104 L142,104 L92,120 L62,178","#C7461F")+
      g({id:"linhas", cls:"an-h"}, l(40,196,108,190,{stroke:"#2E7A56", sw:7})+t(150,202,"Linhas de Torres Vedras 🛡️",{fs:11, ta:"start", fill:"#2E7A56"}))+
      t(56,226,"⛵",{id:"barco", cls:"an-h an-move", fs:20}),
    passos:[
      {t:"Portugal recusa o <b>Bloqueio Continental</b> de Napoleão (deixar de comerciar com Inglaterra) — e é invadido três vezes.", f:S => {}},
      {t:"<b>1807 — 1.ª invasão</b>: o general <b>Junot</b> entra por Abrantes e chega a Lisboa.", f:S => S.cls("#s1", "draw")},
      {t:"Um dia antes da chegada de Junot, a <b>família real parte para o Brasil</b>, protegida pela marinha inglesa.", f:S => { S.mostrar("#barco"); S.mover("#barco", "translate(-80px,30px)"); }},
      {t:"<b>1809 — 2.ª invasão</b>: o general <b>Soult</b> entra pelo norte (Chaves) e conquista o Porto…", f:S => { S.esconder("#barco"); S.cls("#s2", "draw"); }},
      {t:"…mas <b>Wellington</b>, com tropas inglesas e portuguesas, reconquista o Porto.", f:S => S.cls("#s3", "draw")},
      {t:"<b>1810 — 3.ª invasão</b>: o general <b>Massena</b> passa por Almeida e pelo Buçaco…", f:S => S.cls("#s4", "draw")},
      {t:"…e é travado pelas <b>Linhas de Torres Vedras</b>, fortificações construídas em segredo. Os franceses acabam por retirar.", f:S => { S.mostrar("#linhas"); S.cls("#linhas", "an-pulse"); }}
    ]});

  /* m6 — 25 de Abril: o relógio da revolução */
  (function(){
    const cx = 92, cy = 118, R = 72;
    const ponteiros = (S, minDesde22) => {   // minutes since 22:00 on 24 April → hands always move forward
      S.mover("#hh", "rotate("+((22*60 + minDesde22)*0.5)+"deg)");
      S.mover("#mm", "rotate("+(minDesde22*6)+"deg)");
    };
    const cartao = (id, y, l1, l2) => g({id:id, cls:"an-h an-pop"}, r(184,y,208,38,{rx:10, fill:"var(--surface)", stroke:"var(--wc)", sw:1.5})+t(192,y+16,l1,{ta:"start", fs:11.5})+t(192,y+31,l2,{ta:"start", fs:10.5, fw:400}));
    A.def({id:"25abril", mundo:"m6", cor:"m6", titulo:"25 de Abril de 1974, hora a hora",
      cena: () =>
        c(cx,cy,R,{fill:"var(--surface)", stroke:"currentColor", sw:3})+
        range(0,12).map(k => { const a = k*Math.PI/6; return l((cx+(R-8)*Math.sin(a)).toFixed(1),(cy-(R-8)*Math.cos(a)).toFixed(1),(cx+R*Math.sin(a)).toFixed(1),(cy-R*Math.cos(a)).toFixed(1),{sw:k%3 ? 1.5 : 3}); }).join("")+
        l(cx,cy,cx,cy-40,{id:"hh", sw:6, lc:"round", cls:"hand", style:"transform-origin:"+cx+"px "+cy+"px; transform:rotate(660deg)"})+
        l(cx,cy,cx,cy-60,{id:"mm", sw:3.5, lc:"round", cls:"hand", stroke:"var(--accent)", style:"transform-origin:"+cx+"px "+cy+"px; transform:rotate(0deg)"})+
        c(cx,cy,5,{fill:"currentColor"})+t(cx,cy+R+26,"",{id:"hora", fs:14})+
        cartao("e1",8,"22h55 · 24 de abril — 📻","«E Depois do Adeus» na rádio: 1.º sinal")+
        cartao("e2",50,"00h20 · 25 de abril — 📻","«Grândola, Vila Morena»: a operação começa")+
        cartao("e3",92,"Madrugada — 🚛","Salgueiro Maia sai de Santarém para Lisboa")+
        cartao("e4",134,"Manhã — ⚓","Ocupação do Terreiro do Paço; o povo vem para a rua")+
        cartao("e5",176,"Fim da tarde — 🏛️","Marcello Caetano rende-se no Quartel do Carmo")+
        g({id:"cravos", cls:"an-h"}, range(0,7).map(i => { const x = 196+i*28; return l(x,256,x,236,{stroke:"#3E8F5C", sw:2.5})+c(x,232,7,{fill:"#D1495B", cls:"an-pop"}); }).join("")),
      passos:[
        {t:"<b>24 de abril de 1974, 22h55</b>: a canção «E Depois do Adeus» passa na rádio. É o primeiro sinal secreto dos militares do <b>MFA</b>.", f:S => { ponteiros(S, 55); S.texto("#hora", "22:55"); S.mostrar("#e1"); }},
        {t:"<b>00h20 do dia 25</b>: «Grândola, Vila Morena», de Zeca Afonso, passa na Rádio Renascença. É a confirmação: a operação começa!", f:S => { ponteiros(S, 140); S.texto("#hora", "00:20"); S.mostrar("#e2"); }},
        {t:"De <b>madrugada</b>, colunas militares avançam para Lisboa. O capitão <b>Salgueiro Maia</b> sai de Santarém.", f:S => { ponteiros(S, 330); S.texto("#hora", "madrugada"); S.mostrar("#e3"); }},
        {t:"De <b>manhã</b>, os militares ocupam o <b>Terreiro do Paço</b>. Apesar dos apelos para ficarem em casa, muitas pessoas vêm para a rua apoiar.", f:S => { ponteiros(S, 600); S.texto("#hora", "manhã"); S.mostrar("#e4"); }},
        {t:"Ao <b>fim da tarde</b>, depois de cercado no Quartel do Carmo, <b>Marcello Caetano rende-se</b>. Cai a ditadura do Estado Novo.", f:S => { ponteiros(S, 1200); S.texto("#hora", "fim da tarde"); S.mostrar("#e5"); }},
        {t:"Os <b>cravos vermelhos</b> oferecidos aos soldados, que os põem nos canos das espingardas, tornam-se o símbolo da revolução: a <b>Revolução dos Cravos</b>.", f:S => S.mostrar("#cravos")}
      ]});
  })();

  /* ======================================================================
     PORTUGUÊS
     ====================================================================== */

  /* p3 — funções sintáticas */
  (function(){
    const CH = [["A Ana",20,72],["ofereceu",100,88],["um livro",196,86],["ao Rui",290,72],["ontem",370,58]];
    const chip = (i) => { const d = CH[i]; return g({id:"ch"+i, cls:"chip"}, r(d[1],60,d[2],42,{rx:12, cls:"chip-box", fill:"var(--surface)", stroke:"var(--border)", sw:2})+t(d[1]+d[2]/2,87,d[0],{fs:15})); };
    // "baixo" = label one line lower, so neighbouring labels never overlap
    const etiqueta = (id, i, txt, cor, baixo) => { const d = CH[i], y = baixo ? 156 : 138;
      return g({id:id, cls:"an-h"}, l(d[1]+d[2]/2,104,d[1]+d[2]/2,y-16,{stroke:cor, sw:2})+t(d[1]+d[2]/2,y,txt,{fs:11, fill:cor})); };
    A.def({id:"funcoes", mundo:"p3", cor:"m3", titulo:"Quem faz o quê? As funções sintáticas", w:440, h:240,
      cena: () => range(0,5).map(chip).join("")+
        etiqueta("e0",0,"SUJEITO","#2F63A0")+etiqueta("e2",2,"COMPL. DIRETO","#C7461F")+etiqueta("e3",3,"COMPL. INDIRETO","#2E7A56",true)+etiqueta("e4",4,"MODIFICADOR","#8B6B1F")+
        g({id:"pred", cls:"an-h"}, p("M100,50 L100,40 L428,40 L428,50",{stroke:"#7F4C9C", sw:2.5})+t(264,32,"PREDICADO",{fs:11, fill:"#7F4C9C"}))+
        g({id:"subs", cls:"an-h"}, t(220,184,"A Ana ofereceu-o ao Rui.",{fs:15})+t(220,206,"A Ana ofereceu-lhe um livro.",{fs:15})+t(220,228,"(o = um livro · lhe = ao Rui)",{fs:11, fw:400})),
      passos:[
        {t:"Uma frase: <b>«A Ana ofereceu um livro ao Rui ontem.»</b> Vamos descobrir o papel de cada parte.", f:S => {}},
        {t:"Quem ofereceu? <b>A Ana</b> → é o <b>sujeito</b>.", f:S => { S.cls("#ch0", "suj"); S.mostrar("#e0"); }},
        {t:"Tudo o que se diz sobre a Ana é o <b>predicado</b> (tem sempre um verbo: «ofereceu»).", f:S => S.mostrar("#pred")},
        {t:"Ofereceu <b>o quê</b>? <b>Um livro</b> → <b>complemento direto</b>.", f:S => { S.cls("#ch2", "cd"); S.mostrar("#e2"); }},
        {t:"Ofereceu <b>a quem</b>? <b>Ao Rui</b> → <b>complemento indireto</b>.", f:S => { S.cls("#ch3", "ci"); S.mostrar("#e3"); }},
        {t:"<b>Quando</b>? <b>Ontem</b> → <b>modificador</b>. Experimenta tirá-lo: a frase continua a fazer sentido!", f:S => { S.cls("#ch4", "mod"); S.mostrar("#e4"); S.depois(() => S.cls("#ch4", "fora"), 1500); if(S.instant) S.cls("#ch4", "fora"); }},
        {t:"Truque para confirmar: o complemento direto troca-se por <b>o / a</b> e o indireto por <b>lhe</b>.", f:S => S.mostrar("#subs")}
      ]});
  })();

  /* p2 — máquina do tempo dos verbos */
  (function(){
    const PT = [[64,"ontem","joguei","pretérito perfeito"],[168,"quando era pequeno","jogava","pretérito imperfeito"],[272,"agora","jogo","presente"],[372,"amanhã","jogarei","futuro"]];
    A.def({id:"verbos", mundo:"p2", cor:"m2", titulo:"A máquina do tempo dos verbos", w:440, h:240,
      cena: () => l(16,110,424,110,{sw:3})+p("M424,110 l-10,-6 v12 z",{fill:"currentColor"})+
        t(24,96,"PASSADO",{fs:10, ta:"start", fw:400})+t(420,96,"FUTURO",{fs:10, ta:"end", fw:400})+
        PT.map((q, i) => c(q[0],110,6,{fill:"var(--wc)"})+t(q[0],134,q[1],{fs:11, fw:400})+
          g({id:"v"+i, cls:"an-h an-pop"}, r(q[0]-44,148,88,34,{rx:10, fill:"var(--wc-bg)", stroke:"var(--wc)", sw:2})+t(q[0],171,q[2],{fs:16})+t(q[0],198,q[3],{fs:10, fw:400}))).join("")+
        t(64,78,"⏳",{id:"viajante", fs:26, cls:"an-move", style:"transform:translate(-50px,0)"})+
        t(220,228,"eu jogo · tu jogas · ele joga · nós jogamos · vós jogais · eles jogam",{id:"conj", cls:"an-h", fs:11.5}),
      passos:[
        {t:"Os verbos dizem-nos <b>quando</b> as coisas acontecem. Vamos viajar no tempo com o verbo <b>jogar</b>!", f:S => {}},
        {t:"<b>Ontem joguei</b> à bola. Ação acabada no passado → <b>pretérito perfeito</b>.", f:S => { S.mover("#viajante", "translate(0px,0)"); S.mostrar("#v0"); }},
        {t:"<b>Quando era pequeno, jogava</b> todos os dias. Hábito no passado → <b>pretérito imperfeito</b>.", f:S => { S.mover("#viajante", "translate(104px,0)"); S.mostrar("#v1"); }},
        {t:"<b>Agora jogo</b>. → <b>presente</b>.", f:S => { S.mover("#viajante", "translate(208px,0)"); S.mostrar("#v2"); }},
        {t:"<b>Amanhã jogarei</b>. → <b>futuro</b>.", f:S => { S.mover("#viajante", "translate(308px,0)"); S.mostrar("#v3"); }},
        {t:"E no presente, o verbo muda com a pessoa: <b>eu jogo, tu jogas, ele joga, nós jogamos, vós jogais, eles jogam</b>.", f:S => S.mostrar("#conj")}
      ]});
  })();

  /* ======================================================================
     INGLÊS
     ====================================================================== */

  /* e2 — telling the time */
  (function(){
    const cx = 110, cy = 125, R = 88;
    const HORAS = [[3,0,"It's three o'clock.","São três horas em ponto."],[3,15,"It's quarter past three.","São três e um quarto."],
      [3,30,"It's half past three.","São três e meia."],[3,45,"It's quarter to four.","É um quarto para as quatro."],
      [6,20,"It's twenty past six.","São seis e vinte."],[8,40,"It's twenty to nine.","São vinte para as nove."]];
    let total = 0;
    // the hands always turn forward: go to the next time the clock shows h:m
    const acertar = (S, h, m) => { let alvo = h*60+m; while(alvo < total) alvo += 720; total = alvo;
      S.mover("#eh", "rotate("+(total*0.5)+"deg)"); S.mover("#em", "rotate("+(total*6)+"deg)"); };
    A.def({id:"horas", mundo:"e2", cor:"m2", titulo:"Telling the time", lang:"pt-PT",
      cena: () => { total = 0;
        return p("M"+cx+","+(cy-R)+" A"+R+","+R+" 0 0 1 "+cx+","+(cy+R)+" Z",{id:"past", cls:"an-h", fill:"#5F9E52", op:0.18})+
          p("M"+cx+","+(cy+R)+" A"+R+","+R+" 0 0 1 "+cx+","+(cy-R)+" Z",{id:"to", cls:"an-h", fill:"#E0923A", op:0.18})+
          c(cx,cy,R,{fill:"none", stroke:"currentColor", sw:3})+
          range(1,13).map(k => { const a = k*Math.PI/6; return t((cx+(R-16)*Math.sin(a)).toFixed(1),(cy-(R-16)*Math.cos(a)+5).toFixed(1),k,{fs:14}); }).join("")+
          l(cx,cy,cx,cy-46,{id:"eh", sw:6, lc:"round", cls:"hand", style:"transform-origin:"+cx+"px "+cy+"px; transform:rotate(0deg)"})+
          l(cx,cy,cx,cy-70,{id:"em", sw:3.5, lc:"round", cls:"hand", stroke:"var(--accent)", style:"transform-origin:"+cx+"px "+cy+"px; transform:rotate(0deg)"})+
          c(cx,cy,5,{fill:"currentColor"})+
          t(300,80,"",{id:"dig", fs:28})+t(300,130,"",{id:"en", fs:16})+t(300,156,"",{id:"pt", fs:12, fw:400})+
          g({id:"leg", cls:"an-h"}, t(150,40,"PAST",{fs:13, fill:"#3E8F5C"})+t(70,40,"TO",{fs:13, fill:"#C7461F"})); },
      passos: HORAS.map(hh => ({t:"<b>"+hh[2]+"</b> — "+hh[3], fala:hh[2], lang:"en-GB", f:S => {
        acertar(S, hh[0], hh[1]); S.texto("#dig", hh[0]+":"+String(hh[1]).padStart(2,"0")); S.texto("#en", hh[2]); S.texto("#pt", hh[3]); }})).concat([
        {t:"<b>Past</b> = depois da hora (metade direita do relógio). <b>To</b> = antes da hora seguinte (metade esquerda). Quarter = 15 minutos; half = 30.", f:S => {
          acertar(S, 8, 40); S.texto("#dig", "8:40"); S.texto("#en", "It's twenty to nine."); S.texto("#pt", "São vinte para as nove."); S.mostrar("#past, #to, #leg"); }}
      ])});
  })();

  /* e4 — prepositions of place */
  (function(){
    const POS = [
      ["on", "The cat is <b>on</b> the table.", "O gato está em cima da mesa.", 205, 112, 1, "fim"],
      ["under", "The cat is <b>under</b> the table.", "O gato está debaixo da mesa.", 205, 196, 1, "fim"],
      ["in", "The cat is <b>in</b> the box.", "O gato está dentro da caixa.", 60, 182, 0.9, "caixa"],
      ["next to", "The cat is <b>next to</b> the table.", "O gato está ao lado da mesa.", 320, 196, 1, "fim"],
      ["between", "The cat is <b>between</b> the box and the table.", "O gato está entre a caixa e a mesa.", 118, 196, 0.9, "fim"],
      ["behind", "The cat is <b>behind</b> the table.", "O gato está atrás da mesa.", 205, 148, 0.75, "mesa"],
      ["in front of", "The cat is <b>in front of</b> the table.", "O gato está à frente da mesa.", 205, 238, 1.3, "fim"]
    ];
    const colocar = (S, q) => {
      const cat = S.q("#gato"), cena = S.q("#cena");
      if(q[6] === "caixa") cena.insertBefore(cat, S.q("#caixa-frente"));
      else if(q[6] === "mesa") cena.insertBefore(cat, S.q("#mesa"));
      else cena.appendChild(cat);
      S.mover("#gato", "translate("+q[3]+"px,"+q[4]+"px) scale("+q[5]+")");
      S.texto("#frase-pt", q[2]);
    };
    A.def({id:"preposicoes", mundo:"e4", cor:"m4", titulo:"Prepositions: where is the cat?", lang:"pt-PT",
      cena: () => g({id:"cena"},
        l(0,214,400,214,{sw:2, op:0.4})+
        r(22,166,78,48,{fill:"#D9B27C", stroke:"#8a6a4a", sw:2})+
        g({id:"mesa"}, r(140,120,150,12,{rx:3, fill:"#A8744A", stroke:"#6b4a2e", sw:2})+r(150,132,10,82,{fill:"#A8744A"})+r(270,132,10,82,{fill:"#A8744A"}))+
        g({id:"gato", cls:"an-move", style:"transform:translate(205px,112px) scale(1)"}, t(0,0,"🐱",{fs:36}))+
        r(22,186,78,28,{id:"caixa-frente", fill:"#C4995E", stroke:"#8a6a4a", sw:2})+t(61,232,"box",{fs:11, fw:400})+t(215,232,"",{id:"frase-pt", fs:12, fw:400})),
      passos: POS.map(q => ({t:q[1]+" — "+q[2], fala:q[1].replace(/<[^>]+>/g, ""), lang:"en-GB", f:S => colocar(S, q)}))
    });
  })();
})();
