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
})();
