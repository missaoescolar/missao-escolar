/* Animações de Físico-Química (7.º ano). Ilustrações esquemáticas (não estão à escala), com factos das AE e de manuais de referência. */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const f1 = v => Math.round(v*10)/10;
  const rad = a => a*Math.PI/180;

  /* ---------- q5: estados físicos — modelo corpuscular (partículas) ---------- */
  (function(){
    // 3 recipientes iguais (110×130), 16 partículas cada
    const box = (x, id, titulo) => r(x, 40, 110, 130, {rx:8, fill:"var(--surface)", stroke:"currentColor", sw:2})+t(x+55, 30, titulo, {fs:13, id:id});
    // sólido: grelha 4×4 ordenada; líquido: juntas mas desordenadas no fundo; gás: espalhadas
    const X0 = 30, X1 = 225, X2 = 420;   // the three containers, same width (110), evenly spaced
    const solido = [], liquido = [], gas = [];
    for(let i=0;i<4;i++) for(let j=0;j<4;j++) solido.push([X0+28+j*18, 40+70+i*18]);
    const L = [[22,150],[40,152],[58,150],[76,151],[94,150],[30,134],[48,136],[66,133],[84,135],[102,137],[38,118],[56,121],[74,117],[92,120],[20,119],[100,153]];
    L.forEach(q => liquido.push([X1+q[0], q[1]+2]));
    const G = [[18,55],[70,62],[95,90],[40,85],[60,110],[20,130],[88,145],[48,152],[100,60],[30,105],[75,128],[52,70],[10,95],[95,118],[35,58],[65,95]];
    G.forEach(q => gas.push([X2+q[0], q[1]]));
    const bolas = (pts, cls) => pts.map(q => c(q[0], q[1], 7, {fill:"var(--wc)", stroke:"currentColor", sw:1.2, cls:cls})).join("");
    A.def({id:"estados", mundo:"q5", cor:"m6", titulo:"Sólido, líquido e gasoso: o que fazem as partículas", w:560, h:230,
      cena: () => box(X0, "", "Sólido")+box(X1, "", "Líquido")+box(X2, "", "Gasoso")+
        g({id:"ps"}, bolas(solido, "vib"))+g({id:"pl", cls:"an-h"}, bolas(liquido, "desl"))+g({id:"pg", cls:"an-h"}, bolas(gas, "voa"))+
        t(X0+55, 195, "ordenadas, muito juntas", {fs:11, fw:400, id:"ts"})+t(X1+55, 195, "juntas, mas deslizam", {fs:11, fw:400, id:"tl", cls:"an-h"})+t(X2+55, 195, "afastadas, movem-se livres", {fs:11, fw:400, id:"tg", cls:"an-h"})+
        t(280, 222, "✏️ ilustração esquemática: as partículas são muito mais pequenas e numerosas", {fs:10, fw:400}),
      passos:[
        {t:"Toda a matéria é feita de <b>partículas</b> minúsculas, em movimento constante. A forma como estão arrumadas e se movem explica os estados físicos.", f:S => {}},
        {t:"No <b>sólido</b>, as partículas estão muito juntas e ordenadas; só <b>vibram</b> no seu lugar. Por isso o sólido tem <b>forma e volume próprios</b>.", f:S => S.cls(".vib", "an-pulse")},
        {t:"No <b>líquido</b>, continuam juntas mas sem ordem e <b>deslizam</b> umas sobre as outras: tem volume próprio, mas toma a <b>forma do recipiente</b>.", f:S => { S.mostrar(["#pl","#tl"]); S.cls(".desl", "an-pulse"); }},
        {t:"No <b>gás</b>, estão muito afastadas e movem-se em todas as direções, ocupando <b>todo o espaço</b> disponível: não tem forma nem volume próprios.", f:S => { S.mostrar(["#pg","#tg"]); S.cls(".voa", "an-pulse"); }},
        {t:"Quando se <b>aquece</b>, as partículas movem-se mais depressa e afastam-se: <b>fusão</b> (sólido → líquido) e <b>vaporização</b> (líquido → gás). Ao <b>arrefecer</b> acontece o contrário: <b>condensação</b> e <b>solidificação</b>. As partículas não mudam: a água continua a ser água.", f:S => S.mostrar(["#pl","#pg","#tl","#tg"])}
      ]});
  })();

  /* ---------- q3: fases da Lua ---------- */
  (function(){
    // Sol à esquerda (luz vem da esquerda). Terra ao centro (200,130). Lua em 4 posições à volta (r=85).
    const T = {x:230, y:125}, R = 85;
    const pos = [[0,"lua nova"],[90,"quarto crescente"],[180,"lua cheia"],[270,"quarto minguante"]];
    // posição angular medida no sentido anti-horário a partir da direção do Sol (esquerda). Vista do polo norte: a Lua anda no sentido anti-horário.
    const lunaXY = a => [f1(T.x - R*Math.cos(rad(a))), f1(T.y + R*Math.sin(rad(a)))];
    // Lua vista de cima: metade iluminada sempre virada para a esquerda (Sol)
    const luaCima = (x, y) => c(x, y, 13, {fill:"#2B2D42"})+p("M"+x+","+(y-13)+" A13,13 0 0 0 "+x+","+(y+13)+" Z", {fill:"#F4E9C1"})+c(x, y, 13, {fill:"none", stroke:"currentColor", sw:1.2});
    // aspeto visto da Terra (hemisfério norte), à direita do esquema
    const aspeto = k => {
      const x = 490, y = 125, rr = 34;
      const base = c(x, y, rr, {fill:"#2B2D42", stroke:"currentColor", sw:1.5});
      if(k === 0) return base;
      if(k === 2) return c(x, y, rr, {fill:"#F4E9C1", stroke:"currentColor", sw:1.5});
      const lado = k === 1 ? 1 : 0;   // crescente: iluminado à direita (hemisfério norte)
      return base+p("M"+x+","+(y-rr)+" A"+rr+","+rr+" 0 0 "+lado+" "+x+","+(y+rr)+" Z", {fill:"#F4E9C1"});
    };
    A.def({id:"fases-lua", mundo:"q3", cor:"m2", titulo:"As fases da Lua", w:580, h:250,
      cena: () => r(4, 20, 36, 210, {rx:10, fill:"#F6C445"})+t(22, 128, "Sol", {fs:12})+
        g({}, [0,1,2,3,4,5].map(i => l(48, 45+i*32, 120, 45+i*32, {stroke:"#F6C445", sw:2, da:"6 5"})).join(""))+
        c(T.x, T.y, R, {fill:"none", stroke:"currentColor", sw:1, da:"4 5", op:0.5})+
        c(T.x, T.y, 22, {fill:"#4F86B3", stroke:"currentColor", sw:1.5})+p("M"+T.x+","+(T.y-22)+" A22,22 0 0 0 "+T.x+","+(T.y+22)+" Z", {fill:"#9CC3E6", op:0.6})+t(T.x, T.y+38, "Terra", {fs:11})+
        pos.map((q, k) => { const xy = lunaXY(q[0]); return g({id:"lu"+k, cls:k ? "an-h" : ""}, luaCima(xy[0], xy[1])); }).join("")+
        t(490, 52, "Vista da Terra:", {fs:12})+g({id:"asp"}, aspeto(0))+t(490, 185, "lua nova", {id:"nome", fs:14})+
        t(290, 242, "✏️ esquema visto de cima do polo norte; tamanhos e distâncias não estão à escala", {fs:10, fw:400}),
      passos:[
        {t:"A Lua não tem luz própria: <b>metade dela está sempre iluminada pelo Sol</b>. Ao girar à volta da Terra (cerca de 29,5 dias), vemos partes diferentes dessa metade iluminada.", f:S => {}},
        {t:"<b>Lua nova</b>: a Lua está entre a Terra e o Sol. A metade iluminada está virada para o Sol, e da Terra vemos a metade escura.", f:S => { S.mostrar("#lu0"); }},
        {t:"<b>Quarto crescente</b> (cerca de 7 dias depois): vemos metade da parte iluminada. Em Portugal, o lado direito está iluminado: parece um <b>D</b>.", f:S => { S.esconder("#lu0"); S.mostrar("#lu1"); S.q("#asp").innerHTML = aspeto(1); S.texto("#nome", "quarto crescente"); }},
        {t:"<b>Lua cheia</b>: a Terra está entre o Sol e a Lua, e vemos toda a metade iluminada.", f:S => { S.esconder(["#lu0","#lu1"]); S.mostrar("#lu2"); S.q("#asp").innerHTML = aspeto(2); S.texto("#nome", "lua cheia"); }},
        {t:"<b>Quarto minguante</b>: vemos a outra metade, o lado esquerdo iluminado: parece um <b>C</b>. Depois volta a lua nova. Truque: «a Lua é mentirosa» — quando parece C está a decrescer, quando parece D está a crescer.", f:S => { S.esconder(["#lu0","#lu1","#lu2"]); S.mostrar("#lu3"); S.q("#asp").innerHTML = aspeto(3); S.texto("#nome", "quarto minguante"); }}
      ]});
  })();

  /* ---------- q3: estações do ano ---------- */
  (function(){
    // Terra em 2 posições opostas da órbita; eixo inclinado 23,4°, sempre na mesma direção
    const terra = (x, y, id, sombraEsq) => {
      const ax = 34*Math.sin(rad(23.4)), ay = 34*Math.cos(rad(23.4));
      const s = c(x, y, 26, {fill:"#4F86B3", stroke:"currentColor", sw:1.5})+
        p("M"+x+","+(y-26)+" A26,26 0 0 "+(sombraEsq ? 0 : 1)+" "+x+","+(y+26)+" Z", {fill:"#1B1F2A", op:0.55})+
        l(f1(x-ax), f1(y+ay), f1(x+ax), f1(y-ay), {sw:2.5, stroke:"#D1495B"})+t(f1(x+ax+6), f1(y-ay-2), "N", {fs:11, ta:"start"});
      return g({id:id}, s);
    };
    A.def({id:"estacoes", mundo:"q3", cor:"m2", titulo:"Porque há estações do ano", w:560, h:230,
      cena: () => p("M60,115 A220,70 0 1 0 500,115 A220,70 0 1 0 60,115", {stroke:"currentColor", sw:1, da:"5 5", op:0.5})+
        c(280, 115, 30, {fill:"#F6C445", stroke:"#E0A100", sw:2})+t(280, 119, "Sol", {fs:12})+
        terra(60, 115, "tj", true)+terra(500, 115, "td", false)+
        t(60, 165, "junho", {fs:12})+t(500, 165, "dezembro", {fs:12})+
        g({id:"lab", cls:"an-h"}, t(70, 182, "verão em Portugal", {fs:11, fw:400})+t(490, 182, "inverno em Portugal", {fs:11, fw:400}))+
        t(280, 222, "✏️ esquema: tamanhos e distâncias não estão à escala; a órbita é quase circular", {fs:10, fw:400}),
      passos:[
        {t:"A Terra dá uma volta ao Sol num ano (translação), com o seu eixo <b>inclinado cerca de 23,4°</b>. O eixo aponta <b>sempre para o mesmo lado</b> do espaço (para perto da Estrela Polar).", f:S => {}},
        {t:"Em <b>junho</b>, o hemisfério norte está inclinado <b>para o Sol</b>: os raios chegam mais a pique e os dias são mais longos. É <b>verão</b> em Portugal (e inverno na Austrália).", f:S => { S.mostrar("#lab"); S.cls("#tj", "an-pulse"); }},
        {t:"Em <b>dezembro</b>, do outro lado da órbita, o hemisfério norte está inclinado <b>para longe do Sol</b>: os raios chegam mais inclinados e os dias são mais curtos. É <b>inverno</b> em Portugal.", f:S => { S.mostrar("#lab"); S.cls("#tj", "an-pulse", false); S.cls("#td", "an-pulse"); }},
        {t:"Atenção: as estações <b>não</b> se devem à distância ao Sol. A Terra está até um pouco <b>mais perto</b> do Sol no início de janeiro, em pleno inverno do nosso hemisfério. A causa é a <b>inclinação do eixo</b>.", f:S => { S.mostrar("#lab"); S.cls("#td", "an-pulse", false); }}
      ]});
  })();

  /* ---------- q8: condução, convecção, radiação ---------- */
  (function(){
    A.def({id:"transferencias", mundo:"q8", cor:"m5", titulo:"Condução, convecção e radiação", w:560, h:230,
      cena: () =>
        // condução: colher num tacho
        g({id:"cd"}, r(30, 110, 140, 60, {rx:6, fill:"#9CC3E6", stroke:"currentColor", sw:2})+p("M40,170 h120", {stroke:"#D1495B", sw:6})+
          l(110, 120, 175, 55, {sw:5, stroke:"#9AA0A6", lc:"round", id:"colher"})+t(100, 200, "condução", {fs:13})+t(100, 216, "por contacto (sólidos)", {fs:10, fw:400}))+
        // convecção: correntes num tacho
        g({id:"cv", cls:"an-h"}, r(210, 90, 140, 80, {rx:6, fill:"#9CC3E6", op:0.6, stroke:"currentColor", sw:2})+p("M220,170 h120", {stroke:"#D1495B", sw:6})+
          g({id:"fluxo"}, "")+t(280, 200, "convecção", {fs:13})+t(280, 216, "correntes (líquidos e gases)", {fs:10, fw:400}))+
        // radiação: Sol e raios
        g({id:"rd", cls:"an-h"}, c(430, 70, 24, {fill:"#F6C445", stroke:"#E0A100", sw:2})+
          [0,1,2].map(i => l(455, 80+i*12, 515, 140+i*12, {stroke:"#E0A100", sw:2.5, da:"8 6", cls:"raio"})).join("")+
          r(495, 150, 50, 20, {rx:4, fill:"currentColor", op:0.7})+t(470, 200, "radiação", {fs:13})+t(470, 216, "sem meio material", {fs:10, fw:400})),
      passos:[
        {t:"A energia transfere-se sempre do corpo <b>mais quente</b> para o <b>mais frio</b>. Há três processos.", f:S => {}},
        {t:"<b>Condução</b>: por contacto, de partícula em partícula, sobretudo nos sólidos. A colher de metal no tacho aquece até ao cabo. Os metais são bons condutores; madeira e plástico são isoladores.", f:S => S.cls("#colher", "an-pulse")},
        {t:"<b>Convecção</b>: nos líquidos e gases, a parte aquecida fica menos densa e <b>sobe</b>; a mais fria <b>desce</b>. Formam-se correntes que espalham a energia.", f:S => {
          S.mostrar("#cv");
          S.fluxo("#fluxo", "M250,160 C250,110 310,110 310,160 C310,175 250,175 250,160", 6, 4, "#D1495B", 3.5); }},
        {t:"<b>Radiação</b>: a energia viaja sem precisar de matéria, até pelo vazio. É assim que a energia do Sol chega à Terra e que sentimos o calor de uma fogueira à distância.", f:S => { S.mostrar(["#cv","#rd"]); S.cls(".raio", "an-pulse"); }}
      ]});
  })();

  /* ---------- q4: preparar uma solução e calcular a concentração em massa ---------- */
  (function(){
    const GOB = "M150,70 v130 a10,10 0 0 0 10,10 h140 a10,10 0 0 0 10,-10 v-130";
    const cristais = () => [0,1,2,3,4,5,6,7].map(i => r(196+(i%4)*18, 22+Math.floor(i/4)*14, 9, 9, {fill:"#fff", stroke:"#8a8a8a", sw:1})).join("");
    const pontos = () => { let h = ""; for(let i=0;i<26;i++){ const x = 164+((i*37)%132), y = 112+((i*53)%90); h += c(x, y, 3, {fill:"#C7461F", op:0.75}); } return h; };
    A.def({id:"solucao", mundo:"q4", cor:"m4", titulo:"Preparar uma solução: soluto, solvente e concentração", w:560, h:240,
      cena: () => r(152,100,156,108,{fill:"#9CC3E6", op:0.55})+p(GOB,{stroke:"currentColor", sw:3})+t(230,232,"0,5 L de água",{fs:11, fw:400})+
        g({id:"acucar", cls:"an-h"}, cristais())+t(310,40,"20 g de açúcar",{id:"rotulo", cls:"an-h", fs:11, ta:"start"})+
        g({id:"pontos", cls:"an-h"}, pontos())+
        t(330,110,"🥄",{id:"colher", cls:"an-h", fs:24, ta:"start"})+
        g({id:"nomes", cls:"an-h"}, t(440,90,"soluto = açúcar",{fs:12})+t(440,112,"solvente = água",{fs:12})+t(440,134,"solução = mistura homogénea",{fs:11, fw:400}))+
        g({id:"conta", cls:"an-h"}, r(350,150,200,74,{rx:10, fill:"var(--wc-bg)", stroke:"var(--wc)", sw:2})+t(450,172,"Cm = m(soluto) ÷ V(solução)",{fs:11})+t(450,194,"Cm = 20 g ÷ 0,5 L",{fs:12})+t(450,214,"Cm = 40 g/L",{fs:14, fill:"var(--wc)"}))+
        g({id:"fundo", cls:"an-h"}, [0,1,2,3,4,5].map(i => r(176+i*16, 196, 10, 10, {fill:"#fff", stroke:"#8a8a8a", sw:1})).join("")+t(230,58,"saturada: já não dissolve mais",{fs:10.5, fw:400})),
      passos:[
        {t:"Temos <b>0,5 L de água</b>. Vamos juntar-lhe <b>20 g de açúcar</b>.", f:S => S.mostrar(["#acucar","#rotulo"])},
        {t:"O açúcar cai na água…", f:S => S.mover("#acucar", "translate(0px,110px)")},
        {t:"Mexemos: o açúcar <b>dissolve-se</b> e espalha-se por toda a água em partículas pequeníssimas.", f:S => { S.mostrar("#colher"); S.esconder("#acucar"); S.mostrar("#pontos"); }},
        {t:"Já não se distingue o açúcar: é uma <b>mistura homogénea</b>, uma <b>solução</b>. O açúcar é o <b>soluto</b> e a água o <b>solvente</b>.", f:S => { S.esconder("#colher"); S.mostrar("#nomes"); }},
        {t:"<b>Concentração em massa</b>: massa de soluto a dividir pelo volume da solução. 20 ÷ 0,5 = <b>40 g/L</b>.", f:S => S.mostrar("#conta")},
        {t:"Se juntarmos açúcar a mais, uma parte fica no fundo sem se dissolver: a solução está <b>saturada</b>.", f:S => S.mostrar("#fundo")}
      ]});
  })();

  /* ---------- q7: separar areia, sal e água (filtração + evaporação) ---------- */
  (function(){
    const grao = (x, y) => c(x, y, 2.6, {fill:"#C9A055"});
    const areia = (x0, y0, n) => { let h = ""; for(let i=0;i<n;i++) h += grao(x0+((i*29)%60), y0+((i*17)%14)); return h; };
    A.def({id:"separar", mundo:"q7", cor:"m8", titulo:"Separar areia, sal e água", w:560, h:250,
      cena: () =>
        g({id:"mistura"}, p("M30,90 v90 a8,8 0 0 0 8,8 h80 a8,8 0 0 0 8,-8 v-90",{stroke:"currentColor", sw:2.5})+r(32,120,92,66,{id:"agua1", fill:"#9CC3E6", op:0.5})+g({id:"areia1"}, areia(46,166,22))+t(78,212,"areia + sal + água",{fs:10.5, fw:400}))+
        g({id:"filtro", cls:"an-h"}, p("M200,70 h100 l-40,50 v30 h-20 v-30 z",{stroke:"currentColor", sw:2.5, fill:"var(--surface)"})+p("M210,74 h80 l-36,42 h-8 z",{fill:"#EFE8DA", stroke:"#B9AE98", sw:1})+
          g({id:"areia2", cls:"an-h"}, areia(222,84,20))+t(250,60,"filtração",{fs:12, fill:"var(--wc)"})+
          p("M215,160 v50 a6,6 0 0 0 6,6 h58 a6,6 0 0 0 6,-6 v-50",{stroke:"currentColor", sw:2.5})+r(217,188,66,26,{id:"filtrado", cls:"an-h", fill:"#9CC3E6", op:0.5})+
          c(250,166,3,{id:"gota", cls:"an-h", fill:"#4F86B3"}))+
        g({id:"evap", cls:"an-h"}, p("M380,170 q50,30 100,0",{stroke:"currentColor", sw:2.5, fill:"#9CC3E6", op:0.9})+t(430,215,"🔥",{fs:22})+t(430,60,"evaporação",{fs:12, fill:"var(--wc)"})+
          g({id:"vapor", cls:"an-h"}, t(410,120,"〰",{fs:18, fw:400})+t(440,105,"〰",{fs:18, fw:400})+t(470,125,"〰",{fs:18, fw:400})+t(440,88,"vapor de água",{fs:10, fw:400}))+
          g({id:"sal", cls:"an-h"}, [0,1,2,3,4,5].map(i => r(398+i*11, 176, 7, 7, {fill:"#fff", stroke:"#8a8a8a", sw:1})).join("")+t(430,240,"o sal fica (cristalização)",{fs:10.5, fw:400}))),
      passos:[
        {t:"Uma mistura de <b>areia, sal e água</b>. Vê-se a areia: é uma <b>mistura heterogénea</b>. Como separar tudo?", f:S => {}},
        {t:"1.º <b>Filtração</b>: o papel de filtro deixa passar o líquido e <b>retém a areia</b>.", f:S => { S.mostrar("#filtro"); S.esconder(["#areia1","#agua1"]); S.mostrar("#areia2"); }},
        {t:"O líquido que passa (o <b>filtrado</b>) é água com sal dissolvido: uma mistura <b>homogénea</b>. O filtro não separa o sal!", f:S => { S.mostrar(["#gota","#filtrado"]); }},
        {t:"2.º <b>Evaporação</b>: aquecemos o filtrado. A água passa a vapor e vai-se embora…", f:S => { S.mostrar(["#evap","#vapor"]); }},
        {t:"…e o <b>sal fica</b> no recipiente, em cristais (<b>cristalização</b>).", f:S => S.mostrar("#sal")},
        {t:"A ordem conta: primeiro filtração, depois evaporação. Para recuperar também a água, usava-se a <b>destilação</b>.", f:S => {}}
      ]});
  })();

  /* ---------- q2: o Sistema Solar à escala das distâncias (UA) ---------- */
  (function(){
    // distância média ao Sol em UA (NASA); 1 UA ≈ 150 milhões de km
    const PL = [["Mercúrio",0.39,4,"#9A8F86"],["Vénus",0.72,6,"#E0B36A"],["Terra",1,6,"#4F86B3"],["Marte",1.52,5,"#C7461F"],
                ["Júpiter",5.2,14,"#D9A066"],["Saturno",9.58,12,"#E3C27A"],["Urano",19.2,9,"#8FD0D6"],["Neptuno",30.1,9,"#4A6FD0"]];
    const SX = 34, ESC = 16;   // 1 UA = 16 px
    A.def({id:"sistema-solar", mundo:"q2", cor:"m2", titulo:"O Sistema Solar à escala das distâncias", w:560, h:240,
      cena: () =>
        c(SX-32,110,26,{fill:"#E0A100", stroke:"#B07800", sw:2})+t(10,158,"Sol",{fs:11, ta:"start"})+
        l(SX,110,560,110,{stroke:"var(--border)", sw:1.5, da:"3 4"})+
        PL.map((q, i) => g({id:"pl"+i, cls:"an-move", style:"transform:translate("+(70+i*58-SX)+"px,0px)"},
          c(SX,110,q[2],{fill:q[3], stroke:"#3B372F", sw:1})+t(SX,i%2 ? 145 : 82,q[0],{fs:10, cls:i < 4 ? "nome-int" : null}))).join("")+
        g({id:"cintura", cls:"an-h"}, [2.2,2.5,2.8,3.1].map((u, k) => c(SX+u*ESC,104+(k%2)*10,1.6,{fill:"#7A7369"})).join("")+t(SX+2.7*ESC,190,"cintura de asteroides",{fs:9.5, fw:400}))+
        g({id:"regua", cls:"an-h"}, l(SX,210,SX+ESC,210,{stroke:"var(--wc)", sw:3})+t(SX+ESC+6,214,"1 UA ≈ 150 milhões de km (Sol–Terra)",{fs:10, ta:"start", fw:400}))+
        g({id:"grupos", cls:"an-h"}, t(SX+1*ESC,40,"rochosos",{fs:11, fill:"#C7461F"})+t(10,58,"Mercúrio, Vénus, Terra, Marte",{fs:9.5, fw:400, ta:"start"})+t(SX+18*ESC,40,"gigantes gasosos e gelados",{fs:11, fill:"#4A6FD0"})),
      passos:[
        {t:"Os 8 planetas, por ordem a partir do Sol: Mercúrio, Vénus, Terra, Marte, Júpiter, Saturno, Urano e Neptuno. Aqui estão igualmente espaçados — mas no espaço <b>não é assim</b>.", f:S => {}},
        {t:"Agora à <b>escala das distâncias</b>, em unidades astronómicas (UA). 1 UA é a distância média da Terra ao Sol.", f:S => {
          PL.forEach((q, i) => S.mover("#pl"+i, "translate("+(q[1]*ESC)+"px,0px)")); S.mostrar("#regua"); S.esconder(".nome-int"); }},
        {t:"Os 4 primeiros ficam todos muito perto do Sol: são os planetas <b>rochosos</b> (ou telúricos).", f:S => S.mostrar("#grupos")},
        {t:"Entre Marte e Júpiter há a <b>cintura de asteroides</b>.", f:S => S.mostrar("#cintura")},
        {t:"Depois vêm os planetas <b>gigantes</b>, cada vez mais afastados: Neptuno está a cerca de <b>30 UA</b> — 30 vezes mais longe do Sol do que a Terra. (Os tamanhos dos planetas não estão à escala.)", f:S => {}}
      ]});
  })();

  /* ---------- q1: distâncias no Universo e o ano-luz ---------- */
  (function(){
    const MARCOS = [["🌙","Lua","≈ 1,3 segundos",80],["☀️","Sol","≈ 8 minutos",190],["✨","Proxima Centauri","≈ 4,2 anos",330],["🌌","atravessar a Via Láctea","≈ 100 000 anos",470]];
    A.def({id:"ano-luz", mundo:"q1", cor:"m1", titulo:"Quanto tempo demora a luz a chegar?", w:560, h:230,
      cena: () =>
        t(30,120,"🌍",{fs:26})+l(46,112,530,112,{stroke:"var(--border)", sw:2, da:"4 4"})+
        MARCOS.map((m, i) => g({id:"mc"+i, cls:"an-h an-pop"}, t(m[3],104,m[0],{fs:24})+t(m[3],140,m[1],{fs:9.5, fw:400})+t(m[3],158,m[2],{fs:11, fill:"var(--wc)"}))).join("")+
        c(46,112,6,{id:"luz", cls:"an-move", fill:"#F3C23C", stroke:"#B07800", sw:1})+
        g({id:"def", cls:"an-h"}, t(280,40,"A luz percorre ≈ 300 000 km em cada segundo.",{fs:12})+t(280,62,"1 ano-luz = a distância que a luz percorre num ano ≈ 9,5 biliões de km",{fs:11, fw:400}))+
        t(280,205,"",{id:"nota", fs:11, fw:400}),
    passos:[
        {t:"A luz é a coisa mais rápida que existe: percorre cerca de <b>300 000 km por segundo</b>.", f:S => S.mostrar("#def")},
        {t:"A luz da <b>Lua</b> chega-nos em pouco mais de <b>1 segundo</b>.", f:S => { S.mostrar("#mc0"); S.mover("#luz", "translate(34px,0px)"); }},
        {t:"A luz do <b>Sol</b> demora cerca de <b>8 minutos</b>: vemos o Sol como ele era há 8 minutos!", f:S => { S.mostrar("#mc1"); S.mover("#luz", "translate(144px,0px)"); }},
        {t:"Para distâncias tão grandes, usa-se o <b>ano-luz</b>: a distância que a luz percorre num ano. A estrela mais próxima depois do Sol está a cerca de <b>4,2 anos-luz</b>.", f:S => { S.mostrar("#mc2"); S.mover("#luz", "translate(284px,0px)"); }},
        {t:"A nossa galáxia, a <b>Via Láctea</b>, tem cerca de <b>100 000 anos-luz</b> de uma ponta à outra.", f:S => { S.mostrar("#mc3"); S.mover("#luz", "translate(424px,0px)"); S.texto("#nota", "Atenção: o ano-luz é uma unidade de distância, não de tempo."); }}
      ]});
  })();

  /* ---------- q6: massa volúmica — o mesmo volume, massas diferentes ---------- */
  (function(){
    const MAT = [["madeira",0.6,"#C99B4F"],["água",1.0,"#9CC3E6"],["alumínio",2.7,"#C9CDD2"],["ferro",7.9,"#7B7F86"]];
    A.def({id:"massa-volumica", mundo:"q6", cor:"m6", titulo:"Massa volúmica: porque é que uns flutuam e outros não", w:560, h:240,
      cena: () =>
        MAT.map((m, i) => g({id:"cb"+i}, r(40+i*70,60,44,44,{rx:3, fill:m[2], stroke:"#3B372F", sw:1.5})+t(62+i*70,122,m[0],{fs:10.5})+
          t(62+i*70,142,"",{id:"ro"+i, fs:11, fill:"var(--wc)"}))).join("")+
        t(160,40,"todos com 1 cm³",{fs:11, fw:400})+
        g({id:"tanque", cls:"an-h"}, r(330,70,200,130,{rx:6, fill:"var(--surface)", stroke:"currentColor", sw:2})+r(332,110,196,88,{fill:"#9CC3E6", op:0.6})+
          r(355,94,36,30,{rx:3, fill:"#C99B4F", stroke:"#3B372F", sw:1.5})+t(373,86,"flutua",{fs:10})+
          r(460,166,30,30,{rx:3, fill:"#7B7F86", stroke:"#3B372F", sw:1.5})+t(475,158,"afunda",{fs:10, fill:"#1F3550"})+t(430,222,"água: 1 g/cm³",{fs:10.5, fw:400}))+
        t(160,200,"",{id:"form", fs:13}),
      passos:[
        {t:"Quatro cubos com o <b>mesmo volume</b> (1 cm³), de materiais diferentes. Terão a mesma massa?", f:S => {}},
        {t:"Não! Cada material tem a sua <b>massa volúmica</b>: a massa de 1 cm³.", f:S => { MAT.forEach((m, i) => S.texto("#ro"+i, String(m[1]).replace(".", ",")+" g")); }},
        {t:"<b>ρ = m ÷ V</b>. Para estes cubos, a massa volúmica é igual à massa: madeira 0,6 · água 1,0 · alumínio 2,7 · ferro 7,9 g/cm³.", f:S => S.texto("#form", "ρ = m ÷ V  (g/cm³)")},
        {t:"Na água, o que tem massa volúmica <b>menor</b> do que 1 g/cm³ <b>flutua</b> (a madeira); o que tem <b>maior</b> <b>afunda</b> (o ferro).", f:S => S.mostrar("#tanque")},
        {t:"A massa volúmica, o ponto de fusão e o ponto de ebulição são como a <b>impressão digital</b> de cada material: ajudam a identificá-lo.", f:S => {}}
      ]});
  })();

})();
