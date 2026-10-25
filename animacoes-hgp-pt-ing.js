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

  /* p1 — classes de palavras numa frase */
  (function(){
    const PAL = ["O","gato","preto","dormiu","tranquilamente","no","sofá."];
    const CL = [["determinante","artigo definido","#7F4C9C"],["nome","comum","#2F63A0"],["adjetivo","caracteriza","#C7461F"],["verbo","ação","#2E7A56"],["advérbio","modo","#8B6B1F"],["preposição","em + o = no","#3C7A73"],["nome","comum","#2F63A0"]];
    let x = 44; const X = PAL.map(w => { const w0 = w.length*10+18, o = [x, w0]; x += w0+8; return o; });
    const chip = (i) => g({id:"ch"+i}, r(X[i][0],50,X[i][1],40,{rx:8, fill:"var(--surface)", stroke:"var(--border)", sw:2, cls:"chr"})+t(X[i][0]+X[i][1]/2,76,PAL[i],{fs:16}));
    const lab = (i) => { const y = i % 2 ? 150 : 118, cx = X[i][0]+X[i][1]/2;
      return g({id:"lb"+i, cls:"an-h an-pop"}, l(cx,92,cx,y-14,{stroke:CL[i][2], sw:1.5})+t(cx,y,CL[i][0],{fs:11.5, fill:CL[i][2]})+t(cx,y+13,CL[i][1],{fs:9.5, fw:400})); };
    const pinta = (S, i) => { S.attr("#ch"+i+" rect", "fill", CL[i][2]); S.attr("#ch"+i+" rect", "stroke", CL[i][2]); S.attr("#ch"+i+" text", "fill", "#fff"); S.mostrar("#lb"+i); };
    A.def({id:"classes", mundo:"p1", cor:"m1", titulo:"Inventário de palavras: as classes numa frase", w:Math.max(480, x+6), h:240,
      cena: () => PAL.map((_, i) => chip(i)).join("")+PAL.map((_, i) => lab(i)).join("")+
        g({id:"truque", cls:"an-h"}, t(Math.max(480, x+6)/2,206,"Os gatos pretos dormiram tranquilamente.",{fs:14})+t(Math.max(480, x+6)/2,226,"o determinante, o nome, o adjetivo e o verbo mudam · o advérbio não",{fs:10.5, fw:400})),
      passos:[
        {t:"Cada palavra de uma frase pertence a uma <b>classe</b>. Vamos arrumar as palavras desta frase.", f:S => {}},
        {t:"<b>gato</b> e <b>sofá</b> dão nome a um animal e a uma coisa: são <b>nomes</b> (comuns).", f:S => { pinta(S, 1); pinta(S, 6); }},
        {t:"<b>O</b> vem antes do nome e acompanha-o: é um <b>determinante</b> (artigo definido).", f:S => pinta(S, 0)},
        {t:"<b>preto</b> diz como é o gato: é um <b>adjetivo</b>. Concorda com o nome (gata preta, gatos pretos).", f:S => pinta(S, 2)},
        {t:"<b>dormiu</b> indica a ação: é um <b>verbo</b> (no pretérito perfeito).", f:S => pinta(S, 3)},
        {t:"<b>tranquilamente</b> diz <b>como</b> dormiu: é um <b>advérbio</b> (de modo).", f:S => pinta(S, 4)},
        {t:"<b>no</b> é uma <b>preposição</b> contraída com um determinante: <b>em + o = no</b>.", f:S => pinta(S, 5)},
        {t:"Põe a frase no plural: o nome, o adjetivo, o verbo e o determinante mudam; o <b>advérbio não varia</b>.", f:S => S.mostrar("#truque")}
      ]});
  })();

  /* p5 — a estrutura do texto narrativo (mini-história original) */
  (function(){
    const PN = [[16,"Introdução","🌧️","Num dia de chuva, o Tomás","encontra um gatinho perdido","junto à escola."],
                [196,"Desenvolvimento","📋","Procura o dono: pergunta","aos vizinhos e põe cartazes…","ninguém responde."],
                [376,"Conclusão","🥖","A senhora da padaria","reconhece o gato: é dela!","Ficam amigos."]];
    const painel = (q, i) => g({id:"pn"+i, cls:"an-h an-pop"}, r(q[0],30,168,128,{rx:10, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+
      t(q[0]+84,50,q[1],{fs:12, fill:"var(--wc)"})+t(q[0]+84,84,q[2],{fs:26})+t(q[0]+84,110,q[3],{fs:10.5, fw:400})+t(q[0]+84,125,q[4],{fs:10.5, fw:400})+t(q[0]+84,140,q[5],{fs:10.5, fw:400}));
    const EL = [["el0",16,"👥 personagens: Tomás, a senhora (principais)"],["el1",16,"📍 espaço: junto à escola, a padaria"],["el2",300,"🕒 tempo: num dia de chuva"],["el3",300,"🗣️ narrador: não participante (3.ª pessoa)"]];
    A.def({id:"narrativa", mundo:"p5", cor:"m5", titulo:"O texto narrativo: início, meio e fim", w:560, h:240,
      cena: () => PN.map(painel).join("")+p("M186,94 h8 M366,94 h8",{stroke:"var(--wc)", sw:3})+
        EL.map((e, i) => t(e[1], 184+(i % 2)*22, e[2], {id:e[0], cls:"an-h", fs:11.5, ta:"start"})).join(""),
      passos:[
        {t:"Uma narrativa conta uma história. Vamos ver como está organizada uma história pequenina.", f:S => {}},
        {t:"<b>Introdução</b> (situação inicial): apresenta quem, onde e quando.", f:S => S.mostrar("#pn0")},
        {t:"<b>Desenvolvimento</b>: surge um <b>problema</b> e as tentativas para o resolver (as peripécias).", f:S => S.mostrar("#pn1")},
        {t:"<b>Conclusão</b> (desfecho): o problema resolve-se e a história acaba.", f:S => S.mostrar("#pn2")},
        {t:"<b>Personagens</b> e <b>espaço</b>: quem entra na história e onde acontece.", f:S => S.mostrar(["#el0","#el1"])},
        {t:"<b>Tempo</b> e <b>narrador</b>: «o Tomás encontra» está na 3.ª pessoa, por isso o narrador é <b>não participante</b>.", f:S => S.mostrar(["#el2","#el3"])}
      ]});
  })();

  /* m3 — Portugal na 2.ª metade do século XIX: industrialização e migrações */
  (function(){
    A.def({id:"industria", mundo:"m3", cor:"m3", titulo:"A fábrica entra no jogo: Portugal no século XIX", w:560, h:250,
      cena: () => r(0,180,560,70,{fill:"var(--wc-bg)"})+
        g({id:"vapor", cls:"an-h an-pop"}, t(70,70,"⚙️",{fs:34})+t(70,100,"máquina a vapor",{fs:11}))+
        g({id:"fab", cls:"an-h"}, t(230,150,"🏭",{fs:38})+t(230,174,"Lisboa · Setúbal",{fs:10.5, fw:400})+t(470,150,"🏭",{fs:38})+t(470,174,"Porto · Guimarães",{fs:10.5, fw:400}))+
        g({id:"linha", cls:"an-h"}, l(40,205,400,205,{stroke:"#544F45", sw:3, da:"6 4"})+t(40,226,"Lisboa",{fs:10.5, ta:"start"})+t(400,226,"Carregado",{fs:10.5, ta:"end"})+t(220,240,"1856: a primeira linha de comboio",{fs:10.5, fw:400}))+
        t(40,203,"🚂",{id:"comboio", cls:"an-h", fs:26, ta:"start"})+
        g({id:"oper", cls:"an-h"}, t(300,46,"👷 👷 👷",{fs:20})+t(300,68,"operariado: salários baixos, muitas horas",{fs:10.5, fw:400}))+
        g({id:"migra", cls:"an-h"}, t(110,150,"🏡 campo",{fs:12})+p("M150,145 C180,120 190,125 205,135",{stroke:"var(--wc)", sw:2.5})+p("M205,135 l-9,-1 l4,-8 z",{fill:"var(--wc)"})+
          t(520,52,"⛴️",{fs:22})+t(520,72,"Brasil",{fs:10.5})+p("M490,140 C510,110 515,95 518,80",{stroke:"var(--wc)", sw:2.5, da:"5 4"}))+
        g({id:"burg", cls:"an-h"}, t(300,96,"🎩 burguesia ganha importância · 🏰 nobreza perde privilégios",{fs:10.5, fw:400})),
      passos:[
        {t:"A partir de meados do século XIX chega a Portugal a <b>energia a vapor</b>: nas fábricas e nos transportes.", f:S => S.mostrar("#vapor")},
        {t:"As fábricas concentram-se sobretudo em <b>Lisboa/Setúbal</b> e <b>Porto/Guimarães</b>.", f:S => S.mostrar("#fab")},
        {t:"<b>1856</b>: a primeira linha de comboio liga <b>Lisboa ao Carregado</b>. Depois a rede cresce por todo o país.", f:S => { S.mostrar(["#linha","#comboio"]); S.depois(() => S.mover("#comboio", "translate(320px,0)"), 300); if(S.instant) S.mover("#comboio", "translate(320px,0)"); }},
        {t:"Nasce um novo grupo social, o <b>operariado</b>: trabalhadores das fábricas, com salários baixos e longas horas.", f:S => S.mostrar("#oper")},
        {t:"Muitos saem do <b>campo para as cidades</b> e outros <b>emigram</b>, sobretudo para o <b>Brasil</b>, por causa da pobreza.", f:S => S.mostrar("#migra")},
        {t:"A <b>burguesia</b> (comerciantes, industriais) ganha importância; a nobreza perde privilégios.", f:S => S.mostrar("#burg")}
      ]});
  })();


  /* ---------- HGP m4, m5, m7, m8 ---------- */
  (function(){
    /* m4 — da monarquia à República */
    A.def({id:"republica", mundo:"m4", cor:"m4", titulo:"Da monarquia à República (1890–1926)", w:560, h:250,
      cena: () =>
        g({id:"mapa"}, r(40,70,90,110,{rx:10, fill:"#E8D6B8", stroke:"#8a6a4a", sw:1.5})+t(85,130,"Angola",{fs:12})+
          r(270,70,90,110,{rx:10, fill:"#E8D6B8", stroke:"#8a6a4a", sw:1.5})+t(315,130,"Moçambique",{fs:12})+
          r(130,108,140,26,{id:"rosa", fill:"#F2A7C3", op:0.85})+t(200,100,"Mapa Cor-de-Rosa",{fs:11, fw:400})+
          g({id:"ultimato", cls:"an-h"}, l(140,104,260,138,{stroke:"#B5651D", sw:4})+l(140,138,260,104,{stroke:"#B5651D", sw:4})+t(200,160,"Ultimato inglês, 1890",{fs:12, fill:"#B5651D"})))+
        g({id:"bandeiras", cls:"an-h"},
          g({id:"bmon"}, r(60,70,48,80,{fill:"#2E5DA8"})+r(108,70,72,80,{fill:"#fff", stroke:"#8a8a8a", sw:1})+c(108,110,14,{fill:"#E0A100", stroke:"#8a6a00", sw:1})+t(120,172,"bandeira da monarquia",{fs:10.5, fw:400}))+
          g({id:"brep", cls:"an-h an-pop"}, r(300,70,48,80,{fill:"#1F7A3A"})+r(348,70,72,80,{fill:"#C8102E"})+c(348,110,16,{fill:"#E0A100", stroke:"#8a6a00", sw:1})+t(360,172,"bandeira da República (1911)",{fs:10.5, fw:400}))+
          p("M200,110 h80",{id:"seta", cls:"an-h", stroke:"var(--wc)", sw:3, "marker-end":"url(#an-ponta)"}))+
        g({id:"const", cls:"an-h"}, r(430,40,120,120,{rx:8, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+t(490,62,"📜 1911",{fs:12})+
          t(490,86,"Igreja separada",{fs:9.5, fw:400})+t(490,100,"do Estado",{fs:9.5, fw:400})+t(490,122,"votam homens",{fs:9.5, fw:400})+t(490,136,"que sabem ler",{fs:9.5, fw:400}))+
        g({id:"gov", cls:"an-h"}, t(280,215,"",{id:"ngov", fs:15})+t(280,238,"governos diferentes entre 1910 e 1926",{fs:10.5, fw:400}))+
        t(548,22,"",{id:"ano", ta:"end", fs:14}),
      passos:[
        {t:"Final do século XIX: Portugal queria ligar <b>Angola</b> a <b>Moçambique</b> por terra — o <b>Mapa Cor-de-Rosa</b>.", f:S => S.texto("#ano", "1886")},
        {t:"Em <b>1890</b>, a Inglaterra exige que Portugal desista: é o <b>Ultimato inglês</b>, sentido como uma humilhação. A monarquia perde apoio.", f:S => { S.mostrar("#ultimato"); S.texto("#ano", "1890"); }},
        {t:"Em <b>1908</b>, o rei D. Carlos I e o príncipe herdeiro são mortos em Lisboa (o <b>regicídio</b>). A monarquia fica ainda mais fraca.", f:S => { S.esconder("#mapa"); S.mostrar("#bandeiras"); S.texto("#ano", "1908"); }},
        {t:"<b>5 de outubro de 1910</b>: uma revolução derruba a monarquia e proclama a <b>República</b>. A bandeira verde e vermelha é adotada em 1911.", f:S => { S.mostrar(["#seta","#brep"]); S.texto("#ano", "5 out. 1910"); }},
        {t:"A <b>Constituição de 1911</b> separa a Igreja do Estado e dá o voto aos homens que sabem ler e escrever.", f:S => { S.mostrar("#const"); S.texto("#ano", "1911"); }},
        {t:"Mas a Primeira República foi muito <b>instável</b>: mais de 40 governos em 16 anos, até ao golpe de 1926.", f:S => {
          S.mostrar("#gov"); S.texto("#ano", "1910–1926");
          if(S.instant) S.texto("#ngov", "mais de 40"); else [10,20,30,40].forEach((n, i) => S.depois(() => S.texto("#ngov", n === 40 ? "mais de 40" : String(n)), 300+i*500)); }}
      ]});

    /* m5 — Estado Novo: censura e falta de liberdade */
    const LINHAS = [["O governo inaugura uma ponte nova.",false],["Estudantes pedem liberdade de reunião.",true],["Tempo de sol em todo o país.",false],["Greve numa fábrica de Lisboa.",true],["Opositor preso pela polícia política.",true]];
    A.def({id:"estado-novo", mundo:"m5", cor:"m5", titulo:"Estado Novo: um país sem liberdade (1926–1974)", w:560, h:250,
      cena: () =>
        g({id:"tl"}, l(30,40,530,40,{stroke:"var(--border)", sw:3})+
          [["1926","golpe militar",50],["1933","Constituição",160],["1958","Humberto Delgado",290],["1961","Guerra Colonial",420],["1974","25 de Abril",515]].map((e, i) =>
            g({id:"tl"+i, cls:"an-h an-pop"}, c(e[2],40,6,{fill:"var(--wc)"})+t(e[2],26,e[0],{fs:11})+t(e[2],60,e[1],{fs:9.5, fw:400}))).join(""))+
        g({id:"jornal", cls:"an-h"}, r(40,80,300,160,{rx:4, fill:"#FBF7F0", stroke:"currentColor", sw:1.5})+t(190,100,"O DIÁRIO",{fs:14})+
          LINHAS.map((q, i) => t(52,128+i*24,q[0],{fs:11, fw:400, ta:"start"})+(q[1] ? l(50,124+i*24,330,124+i*24,{id:"risco"+i, cls:"an-h", stroke:"#2E5DA8", sw:5, lc:"round", op:0.85}) : "")).join(""))+
        t(450,110,"✏️",{id:"lapis", cls:"an-h", fs:30})+
        g({id:"lista", cls:"an-h"}, t(450,150,"partido único",{fs:11})+t(450,170,"polícia política (PIDE)",{fs:11})+t(450,190,"Mocidade Portuguesa",{fs:11})+t(450,210,"censura",{fs:11})),
      passos:[
        {t:"Em <b>1926</b>, um golpe militar acaba com a Primeira República. Começa uma ditadura.", f:S => S.mostrar("#tl0")},
        {t:"<b>Salazar</b> chefia o governo a partir de 1932. A <b>Constituição de 1933</b> cria o <b>Estado Novo</b>, com um só partido.", f:S => S.mostrar("#tl1")},
        {t:"Os jornais, os livros, o cinema e a rádio eram vistos antes de saírem: a <b>censura</b>. O que o regime não queria era cortado — muitas vezes com um <b>lápis azul</b>.", f:S => { S.mostrar(["#jornal","#lapis"]); ["#risco1","#risco3","#risco4"].forEach((r, i) => { if(S.instant) S.mostrar(r); else S.depois(() => S.mostrar(r), 500+i*700); }); }},
        {t:"Quem se opunha podia ser preso pela <b>polícia política</b> (PIDE). Os jovens tinham de pertencer à <b>Mocidade Portuguesa</b>.", f:S => S.mostrar("#lista")},
        {t:"Em <b>1958</b>, o general <b>Humberto Delgado</b> candidatou-se a Presidente com grande apoio, mas as eleições foram fraudulentas.", f:S => S.mostrar("#tl2")},
        {t:"De <b>1961</b> a 1974, a <b>Guerra Colonial</b> em Angola, na Guiné e em Moçambique. O regime só acabou com o <b>25 de Abril de 1974</b>.", f:S => S.mostrar(["#tl3","#tl4"])}
      ]});

    /* m7 — Portugal hoje (esquemas, não à escala) */
    const pontos = (x, y, w, h, n, cor) => { let s = ""; for(let i=0;i<n;i++){ const px = x+((i*37)%w), py = y+((i*53)%h); s += c(px,py,2.6,{fill:cor}); } return s; };
    A.def({id:"portugal-hoje", mundo:"m7", cor:"m7", titulo:"Portugal hoje: onde vivemos e em que trabalhamos", w:560, h:250,
      cena: () =>
        g({id:"lit"}, r(40,40,110,170,{rx:8, fill:"#DCEBF5", stroke:"currentColor", sw:1.5})+t(95,30,"litoral",{fs:12})+pontos(48,48,94,154,60,"#2E5DA8")+
          r(160,40,110,170,{rx:8, fill:"#F1E8D6", stroke:"currentColor", sw:1.5})+t(215,30,"interior",{fs:12})+pontos(168,48,94,154,14,"#8a6a4a")+
          t(155,232,"cada ponto = muitas pessoas (esquema)",{fs:10, fw:400}))+
        g({id:"idade", cls:"an-h"}, t(410,30,"idade da população (esquema)",{fs:11})+
          [[0,"jovens",120,70],[1,"adultos",150,150],[2,"idosos",90,130]].map(q => t(320,78+q[0]*50,q[1],{fs:10, ta:"end"})+
            r(330,62+q[0]*50,q[2]*0.9,22,{id:"ida"+q[0], fill:"#9CC3E6"})+r(330,62+q[0]*50,q[3]*0.9,22,{id:"idb"+q[0], cls:"an-h", fill:"#E0A100", op:0.85})).join("")+
          t(400,220,"azul: há 60 anos · amarelo: hoje",{fs:10, fw:400}))+
        g({id:"setores", cls:"an-h"}, r(40,90,480,40,{rx:6, fill:"var(--surface-2)"})+r(40,90,15,40,{fill:"#3E8F5C"})+r(55,90,120,40,{fill:"#8a8a8a"})+r(175,90,345,40,{fill:"#4F86B3"})+
          t(40,82,"primário",{fs:10, ta:"start"})+l(47,86,47,90,{stroke:"#3E8F5C", sw:2})+t(115,152,"secundário",{fs:10})+t(345,115,"terciário (serviços)",{fs:12, fill:"#fff"})+
          t(280,180,"mais de 7 em cada 10 trabalhadores estão nos serviços",{fs:11, fw:400})),
      passos:[
        {t:"A população não está espalhada por igual: vive muito mais gente no <b>litoral</b> (Lisboa, Porto) do que no <b>interior</b>. Chama-se <b>litoralização</b>.", f:S => {}},
        {t:"Portugal está a <b>envelhecer</b>. Há 60 anos havia muitos jovens…", f:S => { S.esconder("#lit"); S.mostrar("#idade"); }},
        {t:"…hoje há <b>menos jovens</b> e <b>mais idosos</b>: nascem menos bebés e vive-se mais tempo.", f:S => [0,1,2].forEach(i => S.mostrar("#idb"+i))},
        {t:"Nos últimos anos, a chegada de <b>imigrantes</b> fez voltar a crescer a população que vive em Portugal.", f:S => {}},
        {t:"Em que trabalhamos? <b>Primário</b> (agricultura, pesca), <b>secundário</b> (indústria) e <b>terciário</b> (serviços, comércio, turismo) — hoje, a grande maioria está nos serviços.", f:S => { S.esconder("#idade"); S.mostrar("#setores"); }}
      ]});

    /* m8 — Portugal no mundo */
    const ORG = [["🛡️","NATO","1949",60],["🕊️","ONU","1955",150],["UE","CEE (hoje UE)","1986",250],["🛂","Schengen","1995",345],["🌍","CPLP","1996",430],["💶","euro","2002",515]];
    A.def({id:"portugal-mundo", mundo:"m8", cor:"m8", titulo:"Portugal no mundo: as organizações a que pertence", w:560, h:230,
      cena: () =>
        l(30,130,540,130,{stroke:"var(--border)", sw:3})+
        ORG.map((o, i) => g({id:"or"+i, cls:"an-h an-pop"}, (o[0] === "UE"
          ? r(o[3]-20,78,40,30,{rx:2, fill:"#1F3F8F"})+Array.from({length:12}, (_, k) => c(o[3]+10*Math.cos(k*Math.PI/6),93+10*Math.sin(k*Math.PI/6),1.6,{fill:"#F3C23C"})).join("")
          : t(o[3],100,o[0],{fs:28}))+c(o[3],130,6,{fill:"var(--wc)"})+t(o[3],156,o[2],{fs:12})+t(o[3],176,o[1],{fs:10.5, fw:400}))).join("")+
        t(280,215,"",{id:"nota", fs:11, fw:400}),
      passos:[
        {t:"<b>1949</b>: Portugal é um dos fundadores da <b>NATO</b>, uma aliança de defesa.", f:S => S.mostrar("#or0")},
        {t:"<b>1955</b>: entra na <b>ONU</b>, que junta quase todos os países do mundo pela paz.", f:S => S.mostrar("#or1")},
        {t:"<b>1986</b>: Portugal e Espanha entram na <b>Comunidade Económica Europeia</b>, hoje <b>União Europeia</b>. Chegam fundos para estradas, escolas e hospitais.", f:S => S.mostrar("#or2")},
        {t:"<b>1995</b>: espaço <b>Schengen</b> — viaja-se entre a maioria dos países europeus sem mostrar o passaporte.", f:S => S.mostrar("#or3")},
        {t:"<b>1996</b>: nasce em Lisboa a <b>CPLP</b>, que junta os países de língua portuguesa.", f:S => S.mostrar("#or4")},
        {t:"<b>2002</b>: o escudo dá lugar ao <b>euro</b>, a moeda comum de muitos países da UE.", f:S => { S.mostrar("#or5"); S.texto("#nota", "Pertencer a estas organizações dá a Portugal alianças, mercados e apoio."); }}
      ]});
  })();


  /* ---------- Português p4, p6, p7, p8, p9, p10 (exemplos originais) ---------- */
  (function(){
    const bloco = (id, x, y, w, txt, cor, extra) => g(Object.assign({id:id, cls:"an-move"}, extra || {}), r(x,y,w,30,{rx:4, fill:cor || "var(--surface)", stroke:"currentColor", sw:1.5})+t(x+w/2,y+20,txt,{fs:12.5}));

    /* p7 — o texto dramático */
    A.def({id:"dramatico", mundo:"p7", cor:"m7", titulo:"O texto dramático: falas, didascálias e cenas", w:540, h:250,
      cena: () =>
        r(20,14,330,226,{rx:6, fill:"#FBF7F0", stroke:"currentColor", sw:1.5})+
        t(185,36,"CENA I",{id:"c1", fs:13})+
        t(32,60,"(Uma cozinha, de manhã. O TIAGO procura qualquer coisa.)",{id:"d1", fs:10, fw:400, ta:"start", "font-style":"italic"})+
        t(32,86,"TIAGO — Onde está a minha mochila?",{id:"f1", fs:11.5, fw:400, ta:"start"})+
        t(32,108,"AVÓ (a rir-se) — No sítio onde a deixaste!",{id:"f2", fs:11.5, fw:400, ta:"start"})+
        g({id:"cena2", cls:"an-h"}, t(185,138,"CENA II",{fs:13})+t(32,160,"(Entra a MÃE, com a mochila na mão.)",{fs:10, fw:400, ta:"start", "font-style":"italic"})+
          t(32,186,"MÃE — Estava na sala, ao pé do sofá.",{fs:11.5, fw:400, ta:"start"})+
          t(32,212,"TIAGO (para o público) — Eu sabia!",{id:"aparte", fs:11.5, fw:400, ta:"start"}))+
        g({id:"lb1", cls:"an-h"}, t(440,80,"texto principal:",{fs:11, fill:"#2E5DA8"})+t(440,96,"as falas, com o nome",{fs:10, fw:400})+t(440,110,"de quem fala",{fs:10, fw:400}))+
        g({id:"lb2", cls:"an-h"}, t(440,140,"texto secundário:",{fs:11, fill:"#3E8F5C"})+t(440,156,"as didascálias, entre",{fs:10, fw:400})+t(440,170,"parênteses e em itálico",{fs:10, fw:400}))+
        g({id:"lb3", cls:"an-h"}, t(440,200,"nova cena: entra ou",{fs:10.5, fill:"var(--wc)"})+t(440,214,"sai uma personagem",{fs:10.5, fill:"var(--wc)"}))+
        g({id:"lb4", cls:"an-h"}, t(440,236,"aparte: só o público ouve",{fs:10.5, fill:"#B5651D"})),
      passos:[
        {t:"O texto dramático é escrito para ser <b>representado</b>. Não há narrador: as personagens falam.", f:S => {}},
        {t:"O <b>texto principal</b> são as <b>falas</b>. Cada fala começa pelo <b>nome</b> da personagem.", f:S => { S.attr("#f1", "fill", "#2E5DA8"); S.attr("#f2", "fill", "#2E5DA8"); S.mostrar("#lb1"); }},
        {t:"O <b>texto secundário</b> são as <b>didascálias</b>: indicam o cenário, os gestos e o tom de voz. Não se dizem em voz alta.", f:S => { S.attr("#d1", "fill", "#3E8F5C"); S.mostrar("#lb2"); }},
        {t:"Quando <b>entra ou sai</b> uma personagem, começa uma <b>nova cena</b>. Várias cenas formam um <b>ato</b>.", f:S => { S.mostrar(["#cena2","#lb3"]); }},
        {t:"Um <b>aparte</b> é uma fala dita para o público: as outras personagens fingem que não ouvem.", f:S => { S.attr("#aparte", "fill", "#B5651D"); S.mostrar("#lb4"); }}
      ]});

    /* p6 — verso, estrofe e rima */
    const QUADRA = [["O gato sobe ao telhado,","A"],["a lua vem espreitar,","B"],["fica o gato encantado,","A"],["põe-se a lua a cantar.","B"]];
    A.def({id:"rima", mundo:"p6", cor:"m6", titulo:"Verso, estrofe e rima", w:500, h:240,
      cena: () =>
        QUADRA.map((v, i) => t(60,62+i*34,v[0],{id:"v"+i, fs:15, fw:400, ta:"start"})+t(330,62+i*34,v[1],{id:"r"+i, cls:"an-h an-pop", fs:16, fill:v[1] === "A" ? "#C7461F" : "#2E5DA8"})+
          t(40,62+i*34,(i+1)+".",{id:"n"+i, cls:"an-h", fs:11, ta:"end"})).join("")+
        r(30,36,320,138,{id:"estrofe", cls:"an-h", rx:10, fill:"none", stroke:"var(--wc)", sw:2, da:"6 4"})+
        t(425,90,"",{id:"tipo", fs:13})+t(250,196,"",{id:"tipo2", fs:11, fw:400})+
        t(250,222,"",{id:"recurso", fs:12}),
      passos:[
        {t:"Cada linha de um poema é um <b>verso</b>. Este poema tem 4 versos.", f:S => [0,1,2,3].forEach(i => S.mostrar("#n"+i))},
        {t:"Um conjunto de versos é uma <b>estrofe</b>. Uma estrofe de 4 versos chama-se <b>quadra</b>.", f:S => { S.mostrar("#estrofe"); S.texto("#tipo", "quadra"); S.texto("#tipo2", "4 versos"); }},
        {t:"A <b>rima</b> é a semelhança de sons no fim dos versos: «telh<b>ado</b>» e «encant<b>ado</b>» rimam — damos-lhes a letra <b>A</b>.", f:S => { S.mostrar(["#r0","#r2"]); }},
        {t:"«espreit<b>ar</b>» e «cant<b>ar</b>» também rimam: letra <b>B</b>. O esquema A B A B chama-se <b>rima cruzada</b>.", f:S => { S.mostrar(["#r1","#r3"]); S.texto("#tipo", "rima cruzada"); S.texto("#tipo2", "A B A B"); }},
        {t:"Outros esquemas: <b>emparelhada</b> (A A B B) e <b>interpolada</b> (A B B A).", f:S => { S.texto("#tipo2", "outros esquemas: A A B B (emparelhada) · A B B A (interpolada)"); }},
        {t:"E há um recurso expressivo: a lua «vem espreitar» e «canta», como se fosse uma pessoa. É uma <b>personificação</b>.", f:S => { S.attr("#v1", "fill", "#3E8F5C"); S.attr("#v3", "fill", "#3E8F5C"); S.texto("#recurso", "personificação: a lua espreita e canta"); }}
      ]});

    /* p8 — formação de palavras (blocos que se encaixam) */
    A.def({id:"formar-palavras", mundo:"p8", cor:"m8", titulo:"Formar palavras: derivação e composição", w:520, h:250,
      cena: () =>
        t(260,30,"derivação: radical + afixos",{id:"tit", fs:13})+
        bloco("pre",30,60,50,"in","#F3C2A8")+bloco("rad",220,60,70,"feliz","#E8D6B8")+bloco("suf",420,60,70,"mente","#BFD9EC")+
        t(260,120,"",{id:"res1", fs:14})+
        g({id:"comp", cls:"an-h"}, t(260,150,"composição: palavra + palavra",{fs:13})+
          bloco("c1",60,170,70,"guarda","#D7E8C9")+bloco("c2",300,170,70,"chuva","#D7E8C9")+t(260,232,"",{id:"res2", fs:14})),
      passos:[
        {t:"O <b>radical</b> é a parte da palavra que tem o significado principal: <b>feliz</b>.", f:S => {}},
        {t:"Um <b>prefixo</b> junta-se <b>antes</b> do radical: <b>in</b> + feliz = <b>infeliz</b> (o contrário).", f:S => { S.mover("#pre", "translate(140px,0px)"); S.texto("#res1", "infeliz"); }},
        {t:"Um <b>sufixo</b> junta-se <b>depois</b>: feliz + <b>mente</b> = <b>felizmente</b>. Formar palavras assim chama-se <b>derivação</b>.", f:S => { S.mover("#pre", "translate(0px,0px)"); S.mover("#suf", "translate(-130px,0px)"); S.texto("#res1", "felizmente"); }},
        {t:"Na <b>composição</b> juntam-se duas palavras inteiras: <b>guarda</b> + <b>chuva</b> = <b>guarda-chuva</b>.", f:S => { S.mostrar("#comp"); S.mover("#c1", "translate(98px,0px)"); S.mover("#c2", "translate(-72px,0px)"); S.texto("#res2", "guarda-chuva"); }},
        {t:"Às vezes juntam-se sem hífen: gira + sol = <b>girassol</b> (com dois «s», para soar «ss»).", f:S => S.texto("#res2", "guarda-chuva · girassol · passatempo")}
      ]});

    /* p4 — voz ativa e voz passiva */
    A.def({id:"voz-passiva", mundo:"p4", cor:"m4", titulo:"Da voz ativa para a voz passiva", w:540, h:240,
      cena: () =>
        t(270,30,"voz ativa: o sujeito pratica a ação",{id:"tit", fs:13})+
        bloco("suj",40,70,110,"O gato","#BFD9EC")+bloco("ver",160,70,110,"comeu","#F3C2A8")+bloco("cd",280,70,110,"o peixe.","#D7E8C9")+
        g({id:"lbl", cls:"an-h"}, t(95,124,"sujeito",{fs:10.5, fw:400})+t(215,124,"verbo",{fs:10.5, fw:400})+t(335,124,"complemento direto",{fs:10.5, fw:400}))+
        g({id:"pas", cls:"an-h"}, bloco("ser",160,160,110,"foi comido","#F3C2A8")+bloco("ag",400,160,110,"pelo gato.","#BFD9EC"))+
        t(270,225,"",{id:"nota", fs:11.5, fw:400}),
      passos:[
        {t:"Na <b>voz ativa</b>, o sujeito <b>pratica</b> a ação: «O gato comeu o peixe.»", f:S => S.mostrar("#lbl")},
        {t:"Para passar à <b>voz passiva</b>, o <b>complemento direto</b> («o peixe») passa a ser o <b>sujeito</b>.", f:S => { S.esconder("#lbl"); S.mover("#cd", "translate(-240px,90px)"); S.texto("#tit", "voz passiva: o sujeito sofre a ação"); }},
        {t:"O verbo passa a usar <b>ser</b> + particípio: «comeu» → «<b>foi comido</b>» (mesmo tempo: pretérito perfeito).", f:S => { S.esconder("#ver"); S.mostrar("#pas"); S.esconder("#ag"); }},
        {t:"Quem praticou a ação aparece no fim, com «<b>por</b>/<b>pelo</b>»: é o <b>complemento agente da passiva</b>.", f:S => { S.esconder("#suj"); S.mostrar("#ag"); }},
        {t:"Resultado: «O peixe foi comido pelo gato.» O significado é o mesmo; muda o que fica em destaque.", f:S => S.texto("#nota", "Ativa: O gato comeu o peixe. → Passiva: O peixe foi comido pelo gato.")}
      ]});

    /* p9 — o narrador: participante ou não participante */
    A.def({id:"narrador", mundo:"p9", cor:"m9", titulo:"Quem conta a história? O narrador", w:540, h:240,
      cena: () =>
        g({id:"n1"}, r(20,40,240,150,{rx:8, fill:"var(--surface)", stroke:"#2E5DA8", sw:2})+t(140,62,"narrador participante",{fs:12, fill:"#2E5DA8"})+
          t(32,92,"Abri a porta devagar.",{fs:11.5, fw:400, ta:"start"})+t(32,114,"Lá dentro, o meu cão",{fs:11.5, fw:400, ta:"start"})+t(32,136,"esperava por mim.",{fs:11.5, fw:400, ta:"start"})+
          t(140,176,"",{id:"p1", fs:11, fill:"#2E5DA8"}))+
        g({id:"n3", cls:"an-h"}, r(280,40,240,150,{rx:8, fill:"var(--surface)", stroke:"#B5651D", sw:2})+t(400,62,"narrador não participante",{fs:12, fill:"#B5651D"})+
          t(292,92,"A Rita abriu a porta",{fs:11.5, fw:400, ta:"start"})+t(292,114,"devagar. Lá dentro, o cão",{fs:11.5, fw:400, ta:"start"})+t(292,136,"esperava por ela.",{fs:11.5, fw:400, ta:"start"})+
          t(400,176,"",{id:"p3", fs:11, fill:"#B5651D"}))+
        t(270,220,"",{id:"nota", fs:11.5, fw:400}),
      passos:[
        {t:"Numa narrativa, quem conta a história é o <b>narrador</b>. Aqui, quem conta também entra na história.", f:S => {}},
        {t:"Repara nas palavras «<b>abri</b>», «<b>meu</b>», «<b>mim</b>»: é a <b>1.ª pessoa</b>. É um <b>narrador participante</b>.", f:S => S.texto("#p1", "1.ª pessoa: eu, meu, mim")},
        {t:"A mesma história contada de fora: «A Rita <b>abriu</b>… por <b>ela</b>.» É a <b>3.ª pessoa</b>.", f:S => S.mostrar("#n3")},
        {t:"Quem conta não entra na história: é um <b>narrador não participante</b>.", f:S => S.texto("#p3", "3.ª pessoa: ele, ela, a Rita")},
        {t:"Para descobrir o narrador de um livro, procura os verbos e os pronomes: «eu» ou «ele/ela»?", f:S => S.texto("#nota", "Pergunta-te: quem conta faz parte da história?")}
      ]});

    /* p10 — a notícia: lead e pirâmide invertida (notícia inventada) */
    A.def({id:"noticia", mundo:"p10", cor:"m6", titulo:"Como se constrói uma notícia", w:560, h:250,
      cena: () =>
        r(20,14,330,226,{rx:6, fill:"#FBF7F0", stroke:"currentColor", sw:1.5})+
        t(185,40,"Escola de Vila Nova inaugura horta",{id:"tit", fs:14})+
        t(32,70,"Os alunos do 6.º ano da Escola de Vila Nova",{id:"l1", fs:10.5, fw:400, ta:"start"})+
        t(32,86,"inauguraram ontem, no recreio, uma horta",{id:"l2", fs:10.5, fw:400, ta:"start"})+
        t(32,102,"com 20 canteiros de legumes e ervas.",{id:"l3", fs:10.5, fw:400, ta:"start"})+
        g({id:"corpo", cls:"an-h"}, t(32,132,"A ideia nasceu nas aulas de Ciências. Os",{fs:10, fw:400, ta:"start"})+t(32,147,"legumes vão para a cantina. A professora",{fs:10, fw:400, ta:"start"})+
          t(32,162,"Ana Lopes conta que todos ajudaram a regar.",{fs:10, fw:400, ta:"start"})+t(32,187,"No verão, as famílias vão cuidar da horta.",{fs:10, fw:400, ta:"start"}))+
        g({id:"perg", cls:"an-h"}, t(450,60,"o lead responde a:",{fs:11.5})+t(450,82,"quem? os alunos do 6.º ano",{fs:10, fw:400})+t(450,98,"o quê? inauguraram uma horta",{fs:10, fw:400})+
          t(450,114,"quando? ontem",{fs:10, fw:400})+t(450,130,"onde? no recreio da escola",{fs:10, fw:400}))+
        g({id:"piramide", cls:"an-h"}, p("M380,160 h140 l-70,70 z",{fill:"#E8D6B8", stroke:"currentColor", sw:1.5})+t(450,178,"mais importante",{fs:9.5, fw:400})+t(470,224,"pormenores",{fs:9.5, fw:400, ta:"start"})),
      passos:[
        {t:"Uma <b>notícia</b> informa sobre um acontecimento recente e verdadeiro. Começa por um <b>título</b> curto e chamativo. (Esta notícia é inventada, para treinar.)", f:S => S.attr("#tit", "fill", "var(--wc)")},
        {t:"O 1.º parágrafo é o <b>lead</b>: resume o essencial.", f:S => ["#l1","#l2","#l3"].forEach(x => S.attr(x, "fill", "#2E5DA8"))},
        {t:"O lead responde a <b>quem?</b>, <b>o quê?</b>, <b>quando?</b> e <b>onde?</b>", f:S => S.mostrar("#perg")},
        {t:"Depois vem o <b>corpo da notícia</b>, com os pormenores: como aconteceu, porquê, o que disseram as pessoas.", f:S => S.mostrar("#corpo")},
        {t:"A informação vai do mais importante para o menos importante: é a <b>pirâmide invertida</b>.", f:S => S.mostrar("#piramide")}
      ]});
  })();


  /* ---------- Inglês e1, e3, e5, e6, e7, e8 (exemplos originais) ---------- */
  (function(){
    const pill = (id, x, y, w, txt, cor, cls) => g({id:id, cls:cls || ""}, r(x,y,w,28,{rx:6, fill:cor || "var(--surface)", stroke:"currentColor", sw:1.5})+t(x+w/2,y+19,txt,{fs:12.5}));

    /* e1 — family and the verb to be */
    const FAM = [["grandmother","👵",80,40],["grandfather","👴",200,40],["mother","👩",80,120],["father","👨",200,120],["me","🧒",110,200],["sister","👧",170,200]];
    A.def({id:"family", mundo:"e1", cor:"m1", titulo:"My family tree and the verb «to be»", lang:"pt-PT", w:540, h:250,
      cena: () =>
        l(140,62,140,100,{stroke:"var(--border)", sw:2})+l(140,142,140,178,{stroke:"var(--border)", sw:2})+l(110,178,170,178,{stroke:"var(--border)", sw:2})+
        FAM.map((f, i) => g({id:"fm"+i, cls:"an-h an-pop"}, t(f[2],f[3]+10,f[1],{fs:26})+t(f[2],f[3]+32,f[0],{fs:10.5}))).join("")+
        g({id:"tobe", cls:"an-h"}, r(300,40,220,170,{rx:8, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+t(410,62,"to be (present)",{fs:12.5})+
          [["I","am"],["he / she / it","is"],["you / we / they","are"]].map((q, i) => t(400,96+i*36,q[0],{fs:12, fw:400, ta:"end"})+t(412,96+i*36,q[1],{id:"tb"+i, cls:"an-h", fs:13, fill:"var(--wc)", ta:"start"})).join(""))+
        t(410,234,"",{id:"frase", fs:12.5}),
      passos:[
        {t:"Vamos construir uma árvore da família em inglês. No topo: <b>grandmother</b> (avó) e <b>grandfather</b> (avô).", f:S => S.mostrar(["#fm0","#fm1"])},
        {t:"Depois: <b>mother</b> (mãe) e <b>father</b> (pai).", f:S => S.mostrar(["#fm2","#fm3"])},
        {t:"E por fim: <b>me</b> (eu) e a minha <b>sister</b> (irmã). Irmão diz-se <b>brother</b>.", f:S => S.mostrar(["#fm4","#fm5"])},
        {t:"Para apresentar a família usa-se o verbo <b>to be</b>. Com <b>I</b> usa-se <b>am</b>.", f:S => { S.mostrar(["#tobe","#tb0"]); S.texto("#frase", "I am eleven years old."); }},
        {t:"Com <b>he</b>, <b>she</b> ou <b>it</b> usa-se <b>is</b>.", f:S => { S.mostrar("#tb1"); S.texto("#frase", "She is my sister."); }},
        {t:"Com <b>you</b>, <b>we</b> ou <b>they</b> usa-se <b>are</b>.", f:S => { S.mostrar("#tb2"); S.texto("#frase", "They are my grandparents."); }}
      ]});

    /* e3 — there is / there are */
    A.def({id:"there-is", mundo:"e3", cor:"m3", titulo:"In my classroom: «there is» and «there are»", lang:"pt-PT", w:540, h:240,
      cena: () =>
        r(30,140,300,16,{rx:3, fill:"#C99B4F", stroke:"#8a6a4a", sw:1.5})+l(50,156,50,220,{stroke:"#8a6a4a", sw:4})+l(310,156,310,220,{stroke:"#8a6a4a", sw:4})+
        g({id:"o1", cls:"an-h an-pop"}, r(60,128,120,10,{rx:2, fill:"#E0A100", stroke:"#3B372F", sw:1})+t(120,120,"a ruler",{fs:10.5, fw:400}))+
        g({id:"o2", cls:"an-h"}, [0,1,2].map(i => g({id:"lp"+i, cls:"an-h an-pop"}, r(200+i*36,90,8,46,{rx:2, fill:["#C7461F","#2E5DA8","#3E8F5C"][i], stroke:"#3B372F", sw:1}))).join("")+t(240,80,"three pencils",{fs:10.5, fw:400}))+
        t(430,70,"",{id:"f1", fs:13})+t(430,95,"",{id:"f1b", fs:10.5, fw:400})+t(430,140,"",{id:"f2", fs:13})+t(430,165,"",{id:"f2b", fs:10.5, fw:400}),
      passos:[
        {t:"Para dizer o que existe num sítio, em inglês usa-se <b>there is</b> ou <b>there are</b>.", f:S => {}},
        {t:"Uma coisa só (singular): <b>There is a ruler.</b> (Há uma régua.)", f:S => { S.mostrar("#o1"); S.texto("#f1", "There is a ruler."); S.texto("#f1b", "1 → there is"); }},
        {t:"Várias coisas (plural)…", f:S => { S.mostrar("#o2"); [0,1,2].forEach(i => { if(S.instant) S.mostrar("#lp"+i); else S.depois(() => S.mostrar("#lp"+i), 200+i*400); }); }},
        {t:"…<b>There are three pencils.</b> (Há três lápis.)", f:S => { S.texto("#f2", "There are three pencils."); S.texto("#f2b", "2 ou mais → there are"); }},
        {t:"Para perguntar: <b>Is there</b> a rubber? / <b>Are there</b> any books?", f:S => { S.texto("#f1b", "Is there a rubber?"); S.texto("#f2b", "Are there any books?"); }}
      ]});

    /* e5 — can / can't and by + transport */
    A.def({id:"can", mundo:"e5", cor:"m5", titulo:"What can you do? «can» and «can't»", lang:"pt-PT", w:540, h:240,
      cena: () =>
        t(60,70,"🚲",{fs:30})+t(60,140,"🏊",{fs:30})+t(60,210,"✈️",{fs:30})+
        t(100,76,"I can ride a bike.",{id:"c0", cls:"an-h", fs:13, ta:"start"})+t(100,146,"I can swim.",{id:"c1", cls:"an-h", fs:13, ta:"start"})+t(100,216,"I can't fly a plane.",{id:"c2", cls:"an-h", fs:13, ta:"start", fill:"#B5651D"})+
        g({id:"regra", cls:"an-h"}, r(320,40,200,90,{rx:8, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+t(420,64,"he can · she can",{fs:12})+t(420,88,"she can swim ✔",{fs:11.5, fill:"#3E8F5C"})+t(420,110,"she can to swim ✘",{fs:11.5, fill:"#B5651D"}))+
        g({id:"by", cls:"an-h"}, t(420,160,"🚌 by bus · 🚆 by train",{fs:12})+t(420,184,"🚗 by car · 🚶 on foot",{fs:12})),
      passos:[
        {t:"Usa-se <b>can</b> para dizer o que <b>consegues</b> fazer: <b>I can ride a bike.</b>", f:S => S.mostrar("#c0")},
        {t:"<b>I can swim.</b> (Eu sei nadar.)", f:S => S.mostrar("#c1")},
        {t:"Na negativa: <b>can't</b> (can not). <b>I can't fly a plane.</b>", f:S => S.mostrar("#c2")},
        {t:"<b>Can</b> nunca muda (he can, she can) e não leva «to» antes do verbo.", f:S => S.mostrar("#regra")},
        {t:"Para dizer como viajas: <b>by</b> + transporte (by bus, by train). A pé diz-se <b>on foot</b>.", f:S => S.mostrar("#by")}
      ]});

    /* e6 — like / love / hate + -ing */
    A.def({id:"like-ing", mundo:"e6", cor:"m6", titulo:"I like playing! Verbs + -ing", lang:"pt-PT", w:540, h:240,
      cena: () =>
        pill("v",60,50,90,"play","#E8D6B8","an-move")+pill("ing",300,50,60,"-ing","#BFD9EC","an-move")+
        t(270,110,"",{id:"res", fs:14})+
        g({id:"regras", cls:"an-h"}, t(270,145,"ride → riding (sai o «e»)",{fs:12, fw:400})+t(270,170,"swim → swimming (dobra o «m»)",{fs:12, fw:400}))+
        t(270,212,"",{id:"frase", fs:13}),
      passos:[
        {t:"Depois de <b>like</b>, <b>love</b>, <b>hate</b> e <b>enjoy</b>, o verbo seguinte leva <b>-ing</b>.", f:S => {}},
        {t:"<b>play</b> + <b>-ing</b> = <b>playing</b>.", f:S => { S.mover("#ing", "translate(-150px,0px)"); S.texto("#res", "playing"); }},
        {t:"Assim: <b>I like playing video games.</b> (e não «I like play»).", f:S => S.texto("#frase", "I like playing video games.")},
        {t:"Atenção à ortografia: <b>ride → riding</b> (perde o «e») e <b>swim → swimming</b> (dobra a consoante).", f:S => S.mostrar("#regras")},
        {t:"Para dar a razão, usa-se <b>because</b>: <b>I love swimming because it's fun.</b>", f:S => S.texto("#frase", "I love swimming because it's fun.")}
      ]});

    /* e7 — Past Simple */
    A.def({id:"past-simple", mundo:"e7", cor:"m7", titulo:"Last summer: the Past Simple", lang:"pt-PT", w:540, h:250,
      cena: () =>
        l(40,60,500,60,{stroke:"var(--border)", sw:3})+t(80,46,"last summer",{fs:11, fill:"var(--wc)"})+t(470,46,"now",{fs:11})+c(470,60,6,{fill:"currentColor"})+
        g({id:"reg", cls:"an-h"}, pill("p1",40,90,80,"play",null)+t(140,110,"→",{fs:14})+pill("p2",160,90,90,"played","#D7E8C9")+
          pill("p3",290,90,80,"visit",null)+t(390,110,"→",{fs:14})+pill("p4",410,90,100,"visited","#D7E8C9"))+
        g({id:"irr", cls:"an-h"}, t(270,150,"irregulares (decoram-se):",{fs:11.5})+t(270,172,"go → went · see → saw · eat → ate · buy → bought",{fs:12, fw:400}))+
        t(270,210,"",{id:"neg", fs:12.5})+t(270,232,"",{id:"neg2", fs:11, fw:400}),
      passos:[
        {t:"O <b>Past Simple</b> fala de ações que já terminaram: «last summer», «yesterday».", f:S => {}},
        {t:"Nos verbos <b>regulares</b> junta-se <b>-ed</b>: play → <b>played</b>, visit → <b>visited</b>.", f:S => S.mostrar("#reg")},
        {t:"Muitos verbos são <b>irregulares</b> e têm uma forma própria: go → <b>went</b>, see → <b>saw</b>.", f:S => S.mostrar("#irr")},
        {t:"Na negativa usa-se <b>didn't</b> + o verbo na forma base: <b>I didn't go</b> to the beach.", f:S => { S.texto("#neg", "I didn't go to the beach."); S.texto("#neg2", "(e não «I didn't went»)"); }},
        {t:"Na pergunta usa-se <b>Did</b>: <b>Did you visit</b> your cousins?", f:S => { S.texto("#neg", "Did you visit your cousins?"); S.texto("#neg2", "— Yes, I did. / No, I didn't."); }}
      ]});

    /* e8 — going to + invitations */
    A.def({id:"going-to", mundo:"e8", cor:"m8", titulo:"Party plans: «going to»", lang:"pt-PT", w:540, h:240,
      cena: () =>
        r(30,30,150,150,{rx:8, fill:"var(--surface)", stroke:"currentColor", sw:1.5})+r(30,30,150,32,{rx:8, fill:"var(--wc)"})+t(105,52,"Saturday",{fs:13, fill:"#fff"})+t(105,120,"🎉",{fs:40})+
        pill("b1",220,40,70,"I'm","#BFD9EC","an-h an-pop")+pill("b2",300,40,90,"going to","#F3C2A8","an-h an-pop")+pill("b3",400,40,120,"wear a costume","#D7E8C9","an-h an-pop")+
        t(370,110,"",{id:"f", fs:12.5})+
        g({id:"conv", cls:"an-h"}, r(220,140,300,60,{rx:10, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+t(370,166,"Would you like to come to my party?",{fs:12})+t(370,188,"— Yes, I'd love to!",{fs:11.5, fw:400})),
      passos:[
        {t:"Para falar de <b>planos</b> para o futuro, usa-se <b>going to</b>.", f:S => {}},
        {t:"Forma-se com o verbo <b>to be</b>…", f:S => S.mostrar("#b1")},
        {t:"…+ <b>going to</b>…", f:S => S.mostrar("#b2")},
        {t:"…+ o verbo na forma base: <b>I'm going to wear a costume.</b> (Vou usar um disfarce.)", f:S => { S.mostrar("#b3"); S.texto("#f", "We're going to watch the fireworks."); }},
        {t:"Para convidar com educação: <b>Would you like to…?</b>", f:S => S.mostrar("#conv")}
      ]});
  })();

})();
