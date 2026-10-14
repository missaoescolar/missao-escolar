/* Mais animações de Ciências Naturais: processos do corpo e das plantas (formato explicado em animacoes-matematica.js).
   Factos confirmados no manual do 6.º ano e em fontes de saúde de referência (NHS, KidsHealth/Nemours, CDC, OMS). */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const range = (a, b) => { const out = []; for(let i=a;i<b;i++) out.push(i); return out; };
  const el = (cx, cy, rx, ry, o) => '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"'+
    ' fill="'+(o.fill||"none")+'" stroke="'+(o.stroke||"none")+'" stroke-width="'+(o.sw||0)+'"'+(o.id ? ' id="'+o.id+'"' : '')+(o.cls ? ' class="'+o.cls+'"' : '')+(o.op!==undefined ? ' opacity="'+o.op+'"' : '')+'/>';
  const AZUL = "#2F63A0", CINZA = "#7A7A7A", VERMELHO = "#C0392B", UREIA = "#3FA34D", AMARELO = "#D9A400";
  const pos = (x, y) => "transform:translate("+x+"px,"+y+"px)";
  const rnd = (seed => () => { seed = (seed*9301 + 49297) % 233280; return seed/233280; })(7);   // fixed "random" so the scene is the same every time

  /* ===================== c1 — para que servem os nutrientes ===================== */
  (function(){
    const CX = [70, 200, 330];
    const caixa = (i, cor, titulo, sub, ic) => g({id:"cx"+i},
      r(CX[i]-62,150,124,100,{rx:14, fill:"var(--surface)", stroke:cor, sw:2.5})+
      t(CX[i],170,ic+" "+titulo,{fs:12.5, fill:cor})+t(CX[i],186,sub,{fs:9.5, fw:400}));
    const FOOD = [["🍞",40,40,0],["🍚",80,40,0],["🫒",120,40,0],["🥚",165,40,1],["🐟",205,40,1],["🥛",245,40,1],["🥦",290,40,2],["🍋",330,40,2],["🥕",370,40,2]];
    const ALVO = i => { const k = FOOD[i][3], n = FOOD.filter((f,j) => j<i && f[3]===k).length; return "translate("+(CX[k]-34+n*34)+"px,222px)"; };
    A.def({id:"nutrientes", mundo:"c1", cor:"m1", titulo:"Para que servem os nutrientes",
      cena: () =>
        caixa(0,"#E0923A","Energéticos","glícidos e lípidos","⚡")+
        caixa(1,AZUL,"Plásticos","prótidos, sais, água…","🧱")+
        caixa(2,"#3E8F5C","Reguladores","vitaminas, sais, fibras…","⚙️")+
        FOOD.map((f,i) => g({id:"f"+i, style:pos(f[1],f[2])}, t(0,10,f[0],{fs:26}))).join("")+
        t(200,112,"",{id:"msg", fs:13}),
      passos:[
        {t:"Os alimentos têm <b>nutrientes</b>, que o corpo usa de três maneiras diferentes. Vamos arrumá-los!", f:S => S.texto("#msg","Cada alimento tem vários nutrientes")},
        {t:"<b>Nutrientes energéticos</b> — os <b>glícidos</b> (açúcares e amido) e os <b>lípidos</b> (gorduras): dão a <b>energia</b> para estudar, correr e manter a temperatura do corpo.", f:S => {
          S.texto("#msg","⚡ energia"); [0,1,2].forEach(i => S.mover("#f"+i, ALVO(i))); S.cls("#cx0","an-pulse"); }},
        {t:"<b>Nutrientes plásticos</b> — sobretudo os <b>prótidos</b> (proteínas), mas também lípidos, sais minerais e água: são o «material de construção» para <b>crescer</b> e <b>reparar</b> o corpo.", f:S => {
          S.cls("#cx0","an-pulse",false); S.texto("#msg","🧱 crescer e reparar"); [3,4,5].forEach(i => S.mover("#f"+i, ALVO(i))); S.cls("#cx1","an-pulse"); }},
        {t:"<b>Nutrientes reguladores</b> — <b>vitaminas</b>, sais minerais, <b>fibras</b> e água: põem tudo a <b>funcionar bem</b> — a digestão, o sangue, as defesas contra infeções…", f:S => {
          S.cls("#cx1","an-pulse",false); S.texto("#msg","⚙️ bom funcionamento"); [6,7,8].forEach(i => S.mover("#f"+i, ALVO(i))); S.cls("#cx2","an-pulse"); }},
        {t:"Nenhum alimento tem todos os nutrientes: por isso a alimentação deve ser <b>variada</b>. E a <b>água</b> é indispensável — é mais de metade do nosso corpo!", f:S => {
          S.cls("#cx2","an-pulse",false); S.texto("#msg","💧 e muita água!"); }}
      ]});
  })();

  /* ===================== c2 — zoom às vilosidades ===================== */
  (function(){
    const VX = [50,110,170,230,290,350];
    const vil = x => p("M"+(x-22)+",250 L"+(x-22)+",120 Q"+(x-22)+",90 "+x+",90 Q"+(x+22)+",90 "+(x+22)+",120 L"+(x+22)+",250",{fill:"#F4B8A8", stroke:"#B5524A", sw:2})+
      p("M"+(x-8)+",250 L"+(x-8)+",112 Q"+x+",100 "+(x+8)+",112 L"+(x+8)+",250",{stroke:"#D9534F", sw:2.5})+
      p("M"+(x-4)+",250 L"+(x-4)+",118 M"+(x+4)+",118 L"+(x+4)+",250",{stroke:"#6E8FC9", sw:1.5, op:0.8});
    A.def({id:"vilosidades", mundo:"c2", cor:"m2", titulo:"Zoom ao intestino: as vilosidades",
      cena: () =>
        g({id:"tubo"},
          r(20,70,360,120,{rx:60, fill:"#F4B8A8", stroke:"#B5524A", sw:3})+r(40,95,320,70,{rx:35, fill:"#FBE3DA"})+
          p("M60,95 q10,20 0,35 q-10,15 0,35 M110,95 q10,20 0,35 q-10,15 0,35 M160,95 q10,20 0,35 q-10,15 0,35 M210,95 q10,20 0,35 q-10,15 0,35 M260,95 q10,20 0,35 q-10,15 0,35 M310,95 q10,20 0,35 q-10,15 0,35",{stroke:"#D98A7A", sw:3})+
          t(200,52,"intestino delgado — um tubo com cerca de 6 metros",{fs:12})+
          c(310,130,24,{id:"lupa", fill:"none", stroke:"var(--accent)", sw:3, cls:"an-h"})+t(310,212,"🔍 vamos ampliar",{id:"lupaT", cls:"an-h", fs:12, fill:"var(--accent)"}))+
        g({id:"vil", cls:"an-h"},
          r(0,0,400,85,{fill:"#FFF5E8"})+t(200,18,"interior do intestino (com os nutrientes digeridos)",{fs:11, fw:400})+
          VX.map(vil).join("")+
          g({id:"nut"})+g({id:"sang"})+
          t(392,250,"capilares",{id:"lCap", cls:"an-h", ta:"end", fs:11, fill:VERMELHO})+
          g({id:"area", cls:"an-h"}, r(110,30,180,40,{rx:12, fill:"var(--surface)", stroke:"var(--accent)", sw:2})+t(200,55,"≈ 30 m² ≈ ½ campo de badminton",{fs:12})))+
        t(10,248,"",{id:"esc", ta:"start", fs:11, fw:400}),
      passos:[
        {t:"O <b>intestino delgado</b> é um tubo enrolado com cerca de <b>6 metros</b>. A parede interior não é lisa: tem <b>pregas</b>.", f:S => {}},
        {t:"E as pregas estão cobertas de milhões de <b>vilosidades</b> — pequenas «franjas» com cerca de 1 milímetro. Vamos ampliar!", f:S => {
          S.mostrar("#lupa, #lupaT"); S.depois(() => { S.esconder("#tubo"); S.mostrar("#vil"); S.texto("#esc","ampliado cerca de 100 vezes"); }, 1800);
          if(S.instant){ S.esconder("#tubo"); S.mostrar("#vil"); S.texto("#esc","ampliado cerca de 100 vezes"); } }},
        {t:"Cada vilosidade tem uma parede muito fina e lá dentro <b>capilares sanguíneos</b>. Os nutrientes já digeridos atravessam a parede…", f:S => {
          S.esconder("#tubo"); S.mostrar("#vil, #lCap"); S.texto("#esc","ampliado cerca de 100 vezes");
          VX.forEach((x,i) => S.fluxo("#nut", "M"+(x+(i%2?14:-14))+",30 L"+x+",112", 2, 2.6, ["#E0923A","#5F9E52","#E0A100"][i%3], 4)); }},
        {t:"…e passam para o <b>sangue</b>: é a <b>absorção</b>. O sangue leva-os depois a todas as células do corpo.", f:S => {
          VX.forEach(x => S.fluxo("#sang", "M"+(x+8)+",112 L"+(x+8)+",252", 3, 2.6, "#E0923A", 3)); }},
        {t:"As pregas e as vilosidades aumentam imenso a superfície: cerca de <b>30 m²</b>, mais ou menos metade de um campo de badminton. Mais superfície = absorção mais rápida!", f:S => S.mostrar("#area")}
      ]});
  })();

  /* ===================== c4 — o sangue por dentro ===================== */
  (function(){
    // the pulse (a CSS transform) goes on an outer group, so it never replaces the position (an SVG transform attribute)
    const gv = (x, y, k) => g({cls:"gv"}, g({tr:"translate("+x+","+y+") rotate("+k+")"}, el(0,0,13,9,{fill:"#D9534F", stroke:"#A33", sw:1})+el(0,0,6,3.5,{fill:"#B83B3B", op:0.6})));
    const gb = (x, y) => g({cls:"gb"}, g({tr:"translate("+x+","+y+")"}, c(0,0,17,{fill:"#F1EAF7", stroke:"#8E7AB5", sw:1.5})+p("M-8,-2 q4,-9 9,-3 q6,-6 8,3 q-3,8 -9,4 q-5,6 -8,-4 Z",{fill:"#7F4C9C", op:0.85})));
    const pl = (x, y) => c(x,y,3.2,{cls:"pl", fill:"#C77DB3"});
    const GV = [[130,70,10],[170,60,-20],[230,62,30],[270,80,0],[110,110,40],[150,105,0],[200,95,15],[255,112,-30],[290,120,10],[120,150,-10],[175,140,25],[230,150,0],[270,160,35],[140,190,10],[195,185,-15],[250,195,20],[160,225,0],[215,220,30]];
    A.def({id:"sangue", mundo:"c4", cor:"m4", titulo:"O que há numa gota de sangue",
      cena: () =>
        '<clipPath id="an-campo"><circle cx="200" cy="140" r="104"/></clipPath>'+
        g({id:"tubo"},
          p("M70,30 L70,215 Q70,240 90,240 Q110,240 110,215 L110,30",{fill:"var(--surface)", stroke:"currentColor", sw:2})+
          r(71,60,38,90,{fill:"#F3D27A"})+r(71,150,38,5,{fill:"#F4F4F4"})+p("M71,155 L71,215 Q71,239 90,239 Q109,239 109,215 L109,155 Z",{fill:"#B8322F"})+
          g({id:"lt1", cls:"an-h"}, l(112,105,150,105,{sw:1, op:0.5})+t(156,101,"plasma (cerca de 55%)",{ta:"start", fs:12})+t(156,117,"água + nutrientes, sais, hormonas, resíduos",{ta:"start", fs:10.5, fw:400}))+
          g({id:"lt2", cls:"an-h"}, l(112,152,150,152,{sw:1, op:0.5})+t(156,156,"glóbulos brancos e plaquetas (menos de 1%)",{ta:"start", fs:10.5, fw:400}))+
          g({id:"lt3", cls:"an-h"}, l(112,195,150,195,{sw:1, op:0.5})+t(156,199,"glóbulos vermelhos (cerca de 45%)",{ta:"start", fs:12})))+
        g({id:"micro", cls:"an-h"},
          c(200,140,104,{fill:"#FFF3EE"})+
          g({"clip-path":"url(#an-campo)"}, GV.map(v => gv(v[0],v[1],v[2])).join("")+gb(150,140)+gb(250,100)+pl(200,120)+pl(215,128)+pl(120,82)+pl(280,180)+pl(185,205)+pl(240,240))+
          c(200,140,110,{fill:"none", stroke:"#222", sw:12})+t(200,22,"🔬 ao microscópio",{fs:12})+
          t(330,72,"glóbulo",{id:"lgv", cls:"an-h", ta:"start", fs:11, fill:"#B83B3B"})+t(330,86,"vermelho",{id:"lgv2", cls:"an-h", ta:"start", fs:11, fill:"#B83B3B"})+
          t(60,130,"glóbulo",{id:"lgb", cls:"an-h", ta:"end", fs:11, fill:"#7F4C9C"})+t(60,144,"branco",{id:"lgb2", cls:"an-h", ta:"end", fs:11, fill:"#7F4C9C"})+
          t(330,186,"plaqueta",{id:"lpl", cls:"an-h", ta:"start", fs:11, fill:"#A0508A"}))+
        g({id:"corte", cls:"an-h"},
          r(0,90,400,80,{fill:"#F7D6CF"})+p("M0,110 L170,110 M230,110 L400,110 M0,150 L400,150",{stroke:"#B5524A", sw:3})+
          p("M170,110 L185,60 M230,110 L215,60",{stroke:"#B5524A", sw:3})+t(200,48,"um corte",{fs:12})+
          g({id:"rolha"}, range(0,14).map(i => c(180+(i%5)*10, 100-Math.floor(i/5)*9, 4,{cls:"an-h an-pop pl2", fill:"#C77DB3"})).join("")+
            p("M172,82 L228,104 M172,100 L228,84 M180,76 L222,108",{id:"fib", cls:"an-h", stroke:"#E0A100", sw:1.5}))+
          g({id:"fCor"}))+
        g({id:"vasos", cls:"an-h"},
          c(70,130,46,{fill:"#E8A39A", stroke:"#A33", sw:2})+c(70,130,22,{fill:"#D9534F"})+t(70,200,"artéria",{fs:13})+t(70,216,"parede grossa e elástica",{fs:10, fw:400})+
          c(200,130,46,{fill:"#B9C6E8", stroke:"#3E63B0", sw:2})+c(200,130,38,{fill:"#6E8FC9"})+p("M170,122 Q200,146 230,122",{stroke:"#F4F4F4", sw:3})+t(200,200,"veia",{fs:13})+t(200,216,"parede fina, com válvulas",{fs:10, fw:400})+
          c(330,130,10,{fill:"#E8A39A", stroke:"#A33", sw:1.5})+c(330,130,5,{fill:"#D9534F"})+t(330,200,"capilar",{fs:13})+t(330,216,"finíssimo: trocas com as células",{fs:10, fw:400})),
      passos:[
        {t:"Um adulto tem cerca de <b>5 litros</b> de sangue. Se pusermos sangue num tubo a girar muito depressa (<b>centrifugar</b>), ele separa-se em camadas.", f:S => {}},
        {t:"Em cima fica o <b>plasma</b> (cerca de 55%): é sobretudo água e transporta nutrientes, sais minerais, hormonas e resíduos, como a ureia e o dióxido de carbono.", f:S => S.mostrar("#lt1")},
        {t:"Em baixo ficam as <b>células do sangue</b>: os glóbulos vermelhos e, numa camada fininha, os glóbulos brancos e as plaquetas. Vamos vê-las ao microscópio…", f:S => S.mostrar("#lt2, #lt3")},
        {t:"<b>Glóbulos vermelhos</b>: são os mais numerosos — cerca de 5 milhões num milímetro cúbico! Têm <b>hemoglobina</b>, que transporta o <b>oxigénio</b>.", f:S => {
          S.esconder("#tubo"); S.mostrar("#micro, #lgv, #lgv2"); S.cls(".gv","an-pulse"); }},
        {t:"<b>Glóbulos brancos</b>: maiores e muito menos numerosos. <b>Defendem</b> o corpo contra micróbios.", f:S => { S.cls(".gv","an-pulse",false); S.mostrar("#lgb, #lgb2"); S.cls(".gb","an-pulse"); }},
        {t:"<b>Plaquetas</b>: pedacinhos de células que ajudam o sangue a <b>coagular</b>. Quando nos cortamos, juntam-se e fazem uma «rolha» que tapa a ferida.", dur:7000, f:S => {
          S.cls(".gb","an-pulse",false); S.mostrar("#lpl"); S.cls(".pl","an-pulse");
          const corte = () => { S.esconder("#micro"); S.mostrar("#corte"); S.fluxo("#fCor","M0,130 L400,130",8,4,"#D9534F",5); S.mostrar(".pl2"); S.depois(() => S.mostrar("#fib"), 1500); if(S.instant) S.mostrar("#fib"); };
          if(S.instant) corte(); else S.depois(corte, 2200); }},
        {t:"O sangue circula em três tipos de <b>vasos sanguíneos</b>: <b>artérias</b> (saem do coração), <b>veias</b> (voltam ao coração) e <b>capilares</b>, finíssimos, onde se fazem as trocas com as células.", f:S => {
          S.esconder("#micro, #corte"); S.mostrar("#vasos"); }}
      ]});
  })();

  /* ===================== c5 — a pele, o suor e a temperatura ===================== */
  (function(){
    const GL = "M262,196 c-14,0 -14,-10 0,-10 c14,0 14,-10 0,-10 c-14,0 -14,-10 0,-10 c10,0 10,-6 0,-8 L262,62";
    A.def({id:"pele", mundo:"c5", cor:"m5", titulo:"A pele: suor e temperatura",
      cena: () =>
        r(0,0,400,58,{fill:"var(--m3-bg)"})+
        r(0,58,400,30,{fill:"#F3D9C4"})+r(0,88,400,112,{fill:"#F2C1B0"})+r(0,200,400,60,{fill:"#F7E3A1"})+
        range(0,12).map(i => c(20+i*34, 228+(i%2)*10, 12,{fill:"#F9EDBE", stroke:"#E0C060", sw:1})).join("")+
        p("M120,182 C118,140 112,90 98,10",{stroke:"#5A3B28", sw:3})+el(121,186,9,13,{fill:"#E8A98F", stroke:"#B5524A", sw:1.5})+
        p("M0,165 C80,155 160,175 240,165 S360,158 400,168",{id:"vasoV", stroke:"#D9534F", sw:6, op:0.85})+
        p("M0,178 C80,170 160,188 240,178 S360,172 400,182",{id:"vasoA", stroke:"#6E8FC9", sw:6, op:0.85})+
        p(GL,{id:"glandula", stroke:"#4F86B3", sw:4, lc:"round"})+
        g({id:"gotas"})+g({id:"suor"})+g({id:"calor"})+
        g({id:"lb", cls:"an-h"},
          t(392,78,"epiderme",{ta:"end", fs:12})+t(392,140,"derme",{ta:"end", fs:12})+t(392,250,"hipoderme (gordura)",{ta:"end", fs:12}))+
        g({id:"lb2", cls:"an-h"}, t(300,120,"glândula sudorípara",{ta:"start", fs:11, fill:"#2F63A0"})+t(84,30,"pelo",{ta:"end", fs:11})+t(270,52,"poro",{ta:"start", fs:11, fill:"#2F63A0"})+t(10,154,"vasos sanguíneos",{ta:"start", fs:11, fill:VERMELHO}))+
        t(10,20,"",{id:"temp", ta:"start", fs:14}),
      passos:[
        {t:"A pele é o <b>maior órgão</b> do corpo e tem camadas: a <b>epiderme</b> (por fora), a <b>derme</b> e, por baixo, a <b>hipoderme</b>, com gordura.", f:S => S.mostrar("#lb")},
        {t:"Na derme há <b>glândulas sudoríparas</b>. Retiram do sangue <b>água</b>, <b>sais minerais</b> e um pouco de <b>ureia</b> — e fabricam o <b>suor</b>.", f:S => {
          S.mostrar("#lb2"); S.cls("#glandula","hl"); S.fluxo("#suor","M262,168 L262,192",3,1.6,"#4F86B3",3); }},
        {t:"O suor sobe por um canal e sai pelos <b>poros</b>, à superfície da pele.", f:S => {
          S.cls("#glandula","hl",false); S.fluxo("#suor", GL, 5, 3.4, "#4F86B3", 3.5); S.fluxo("#gotas","M262,58 L262,50",1,2,"#7FB3E0",6); }},
        {t:"Quando o suor <b>evapora</b>, leva calor e <b>arrefece</b> o corpo. Experimenta: dia fresco, muito calor ou exercício?", dur:9000, f:S => {
          S.texto("#temp","🌡️ corpo a 37 °C");
          const box = S.controlo('<button type="button" data-k="0">🌤️ Dia fresco</button> <button type="button" data-k="1">🔥 Muito calor</button> <button type="button" data-k="2">🏃 Exercício</button> <b id="an-pele"></b>');
          if(!box) return;
          box.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
            const k = +b.dataset.k;
            S.limpar("#gotas"); S.limpar("#calor");
            [0,1,2,3,4].slice(0, [1,4,5][k]).forEach(i => S.fluxo("#gotas","M"+(60+i*70)+",58 L"+(60+i*70)+",44",1,2.4,"#7FB3E0",5+k));
            if(k) S.fluxo("#calor","M200,58 C180,40 220,30 200,4",4,2.6,"#E0923A",3);
            S.attr("#vasoV","stroke-width", k ? 10 : 6);
            box.querySelector("#an-pele").textContent = ["Pouco suor: não é preciso arrefecer","Muito suor e vasos dilatados (pele vermelha)","Muito suor: os músculos aquecem o corpo"][k] + " — o corpo continua a 37 °C";
          })); }},
        {t:"Por isso a pele também é um órgão <b>excretor</b>. E deve ser <b>lavada todos os dias</b>, para tirar o suor, a sujidade e os micróbios.", f:S => S.cls("#lb, #lb2","an-pulse")}
      ]});
  })();

  /* ===================== c5 — três caminhos para os resíduos ===================== */
  (function(){
    const CORPO = "M150,64 Q200,50 250,64 L262,232 Q200,246 138,232 Z";
    A.def({id:"excretor", mundo:"c5", cor:"m5", titulo:"O sistema excretor: três caminhos para os resíduos",
      cena: () =>
        c(200,32,20,{fill:"var(--surface-2)", stroke:"currentColor", sw:2})+
        p(CORPO,{id:"pele", fill:"var(--surface-2)", stroke:"#E0A100", sw:3})+
        el(178,104,18,30,{id:"pulE", fill:"#F2A7A0", stroke:"#B5524A", sw:1.5})+el(222,104,18,30,{id:"pulD", fill:"#F2A7A0", stroke:"#B5524A", sw:1.5})+
        p("M170,160 c-10,0 -14,22 0,24 c8,0 6,-8 4,-12 c2,-4 4,-12 -4,-12 Z",{id:"rimE", fill:"#B5615A", stroke:"#7A3A34", sw:1.5})+
        p("M230,160 c10,0 14,22 0,24 c-8,0 -6,-8 -4,-12 c-2,-4 -4,-12 4,-12 Z",{id:"rimD", fill:"#B5615A", stroke:"#7A3A34", sw:1.5})+
        p("M172,184 L192,214 M228,184 L208,214",{stroke:"#E0C060", sw:3})+el(200,220,12,8,{fill:"#F3E6A0", stroke:"#C9A227", sw:1.5})+
        g({id:"cel", cls:"an-h"}, c(330,150,28,{fill:"#FCE1DC", stroke:"#B5524A", sw:2})+c(336,146,9,{fill:"#B39DDB"})+t(330,196,"uma célula",{fs:11})+
          c(318,160,3,{fill:CINZA})+c(344,162,3,{fill:UREIA})+c(322,138,3,{fill:CINZA}))+
        g({id:"fl"})+g({id:"fP"})+g({id:"fR"})+g({id:"fS"})+
        g({id:"lb", cls:"an-h"}, t(110,100,"pulmões",{ta:"end", fs:12})+t(110,175,"rins",{ta:"end", fs:12})+t(110,236,"pele",{ta:"end", fs:12, fill:"#B07800"}))+
        g({id:"urina", cls:"an-h"},
          r(276,60,118,150,{rx:12, fill:"var(--surface)", stroke:"var(--border)", sw:1.5})+t(335,80,"🧪 urina",{fs:12})+
          [["água",95,"#7FB3E0"],["ureia",2,UREIA],["sais",2,CINZA],["ác. úrico",1,AMARELO]].map((u,i) =>
            r(288,92+i*28,Math.max(4,u[1]),14,{rx:3, fill:u[2]})+t(292+Math.max(4,u[1]),104+i*28,u[1]+"% "+u[0],{ta:"start", fs:10.5})).join("")),
      passos:[
        {t:"As <b>células</b> trabalham sem parar — e, como numa fábrica, produzem <b>resíduos</b>: o <b>dióxido de carbono</b> (cinzento) e a <b>ureia</b> (verde). Acumulados, seriam <b>tóxicos</b>.", f:S => S.mostrar("#cel")},
        {t:"O <b>sangue</b> recolhe esses resíduos e leva-os aos órgãos que os eliminam: os órgãos do <b>sistema excretor</b>.", f:S => {
          S.fluxo("#fl","M302,150 C260,150 250,120 230,110 C200,100 180,130 176,160",5,3.2,CINZA,3.5); S.fluxo("#fl","M302,156 C262,170 250,176 230,172",4,3,UREIA,3.5); }},
        {t:"Os <b>pulmões</b> eliminam o <b>dióxido de carbono</b> no ar que <b>expiramos</b>.", f:S => {
          S.mostrar("#lb"); S.cls("#pulE, #pulD","hl"); S.fluxo("#fP","M200,100 L200,40 L200,0",4,2.4,CINZA,4); }},
        {t:"Os <b>rins</b> filtram o sangue e formam a <b>urina</b>, que desce para a bexiga.", f:S => {
          S.cls("#pulE, #pulD","hl",false); S.cls("#rimE, #rimD","hl"); S.fluxo("#fR","M172,184 L192,214",3,2,AMARELO,3); S.fluxo("#fR","M228,184 L208,214",3,2,AMARELO,3); }},
        {t:"A <b>pele</b> elimina <b>água</b>, <b>sais</b> e um pouco de <b>ureia</b> no <b>suor</b>.", f:S => {
          S.cls("#rimE, #rimD","hl",false); S.cls("#pele","hl"); S.fluxo("#fS","M140,150 L118,150",2,1.6,"#4F86B3",3.5); S.fluxo("#fS","M260,200 L282,200",2,1.6,"#4F86B3",3.5); }},
        {t:"E de que é feita a urina? Cerca de <b>95% de água</b>, 2% de ureia, 2% de sais minerais e 1% de ácido úrico.", f:S => { S.cls("#pele","hl",false); S.esconder("#cel"); S.mostrar("#urina"); }}
      ]});
  })();

  /* ===================== c5 — dentro do rim: o nefrónio ===================== */
  (function(){
    const CAP = "M10,60 L60,60 C70,40 110,40 112,62 C114,84 74,84 80,100 C86,118 120,112 118,96 C116,80 140,74 140,96 L150,140 C170,180 300,170 390,150";
    const TUB = "M118,118 C150,130 150,160 175,170 C210,182 230,150 255,160 C280,170 280,210 300,225 L390,240";
    A.def({id:"nefronio", mundo:"c5", cor:"m5", titulo:"Dentro do rim: como se forma a urina",
      cena: () =>
        p("M70,80 C70,40 150,40 150,80 L150,100 C150,128 128,130 118,118 C108,130 70,128 70,100 Z",{fill:"#FBE3DA", stroke:"#B5615A", sw:2})+
        p(CAP,{stroke:"#D9534F", sw:9, op:0.35, lc:"round", lj:"round"})+
        p(TUB,{stroke:"#E0C060", sw:11, op:0.45, lc:"round"})+
        g({id:"fS"})+g({id:"fF"})+g({id:"fR"})+g({id:"fU"})+
        t(110,30,"glomérulo",{id:"l1", cls:"an-h", fs:12})+t(160,200,"tubo",{id:"l2", cls:"an-h", fs:12, fill:"#B07800"})+
        t(392,140,"sangue",{id:"l3", cls:"an-h", ta:"end", fs:11, fill:VERMELHO})+t(392,232,"urina →",{id:"l4", cls:"an-h", ta:"end", fs:12, fill:"#B07800"})+
        g({id:"leg", cls:"an-h"}, c(14,226,5,{fill:"#4F86B3"})+t(24,230,"água",{ta:"start", fs:10.5, fw:400})+c(14,244,5,{fill:"#E0923A"})+t(24,248,"glicose",{ta:"start", fs:10.5, fw:400})+
          c(80,226,5,{fill:CINZA})+t(90,230,"sais",{ta:"start", fs:10.5, fw:400})+c(80,244,5,{fill:UREIA})+t(90,248,"ureia",{ta:"start", fs:10.5, fw:400}))+
        g({id:"num", cls:"an-h"}, r(220,20,170,52,{rx:12, fill:"var(--surface)", stroke:"var(--accent)", sw:2})+t(305,42,"filtrado: ≈ 180 L por dia",{fs:12})+t(305,60,"urina: ≈ 1,5 L por dia",{fs:12})),
      passos:[
        {t:"Cada rim tem cerca de <b>1 milhão</b> de pequenas unidades de filtração: os <b>nefrónios</b>. Vamos espreitar um por dentro.", f:S => S.fluxo("#fS", CAP, 8, 5, VERMELHO, 4)},
        {t:"O sangue chega a um novelo de capilares, o <b>glomérulo</b>. Parte do <b>plasma</b> sai para dentro do nefrónio, com água, glicose, sais e <b>ureia</b>: é a <b>filtração</b>. As células do sangue ficam no capilar.", dur:7000, f:S => {
          S.mostrar("#l1, #leg"); ["#4F86B3","#E0923A",CINZA,UREIA].forEach((cor,i) => S.fluxo("#fF","M110,70 C112,90 116,104 118,118 "+TUB.replace(/^M118,118 /,""), 2, 6+i*0.6, cor, 3.5)); }},
        {t:"Num dia, os rins filtram cerca de <b>180 litros</b>! Mas não podemos perder tanta água e tanta glicose…", f:S => S.mostrar("#num")},
        {t:"Ao longo do <b>tubo</b>, as substâncias úteis — a <b>glicose</b>, quase toda a água e muitos sais — <b>voltam para o sangue</b>.", dur:7000, f:S => {
          S.mostrar("#l2, #l3"); S.limpar("#fF");
          S.fluxo("#fR","M175,170 L185,156",2,1.4,"#E0923A",3.5); S.fluxo("#fR","M255,160 L262,148",2,1.4,"#4F86B3",3.5); S.fluxo("#fR","M215,174 L222,160",2,1.4,"#4F86B3",3.5); }},
        {t:"O que sobra — <b>ureia</b>, alguns sais e a água a mais — é a <b>urina</b>: cerca de 1,5 litros por dia, que segue para a bexiga.", f:S => {
          S.mostrar("#l4"); S.fluxo("#fU", TUB, 4, 5, UREIA, 3.5); S.fluxo("#fU", TUB, 2, 5.5, "#4F86B3", 3.5); }}
      ]});
  })();

  /* ===================== c6 — a flor, a abelha e o fruto ===================== */
  (function(){
    const abelha = g({id:"abelha", style:pos(-60,30)},
      el(0,0,16,11,{fill:"#E0A100", stroke:"#5A3B28", sw:1.5})+p("M-6,-10 L-6,10 M2,-11 L2,11",{stroke:"#5A3B28", sw:3})+c(16,-2,7,{fill:"#5A3B28"})+
      el(-2,-16,10,6,{fill:"#DDEEFF", stroke:"#8AA", sw:1, op:0.85})+el(8,-15,8,5,{fill:"#DDEEFF", stroke:"#8AA", sw:1, op:0.85})+
      g({id:"polAb", cls:"an-h"}, c(-8,6,3,{fill:"#F5C342"})+c(4,8,3,{fill:"#F5C342"})+c(-2,-2,2.5,{fill:"#F5C342"})));
    A.def({id:"polinizacao", mundo:"c6", cor:"m6", titulo:"A flor, a abelha e o fruto",
      cena: () =>
        r(0,0,400,260,{fill:"var(--m3-bg)", op:0.5})+
        p("M200,258 L200,212",{stroke:"#3E8F5C", sw:6})+
        p("M200,214 C180,214 168,206 160,196 M200,214 C220,214 232,206 240,196",{id:"sep", stroke:"#3E8F5C", sw:5, lc:"round"})+
        g({id:"petalas"},
          p("M196,206 C150,200 110,150 130,110 C150,120 170,160 196,190 Z",{fill:"#F29BB5", stroke:"#C22B5C", sw:1.5})+
          p("M204,206 C250,200 290,150 270,110 C250,120 230,160 204,190 Z",{fill:"#F29BB5", stroke:"#C22B5C", sw:1.5}))+
        g({id:"estames"},
          p("M190,200 C182,170 170,140 166,120 M210,200 C218,170 230,140 234,120",{stroke:"#9A7A2A", sw:2.5})+
          el(166,116,8,5,{fill:"#E0A100", stroke:"#9A6A00", sw:1})+el(234,116,8,5,{fill:"#E0A100", stroke:"#9A6A00", sw:1})+
          c(160,108,2.5,{fill:"#F5C342"})+c(170,106,2.5,{fill:"#F5C342"})+c(238,107,2.5,{fill:"#F5C342"})+c(229,105,2.5,{fill:"#F5C342"}))+
        g({id:"ovario"}, el(200,192,17,14,{id:"ovar", fill:"#9FD08F", stroke:"#3E8F5C", sw:2})+c(194,192,3.5,{cls:"ovulo", fill:"#FFF8E0", stroke:"#9A7A2A", sw:1})+c(206,192,3.5,{cls:"ovulo", fill:"#FFF8E0", stroke:"#9A7A2A", sw:1}))+
        p("M200,178 L200,104",{id:"estilete", stroke:"#3E8F5C", sw:4})+el(200,100,9,5,{id:"estigma", fill:"#6DBB5E", stroke:"#3E8F5C", sw:1.5})+
        c(200,96,3,{id:"polEst", cls:"an-h", fill:"#F5C342", stroke:"#9A6A00", sw:0.8})+
        p("M200,98 L200,140 C200,160 196,176 194,190",{id:"tubo", cls:"seta", pl:1, stroke:"#E0A100", sw:2.5})+
        g({id:"fruto", cls:"an-h"}, c(200,190,30,{fill:"#F08A3C", stroke:"#B0601A", sw:2})+c(190,188,4,{fill:"#7A4A2A"})+c(208,194,4,{fill:"#7A4A2A"})+c(200,180,4,{fill:"#7A4A2A"})+t(238,194,"fruto com sementes",{ta:"start", fs:12, fill:"#B0601A"}))+
        abelha+
        g({id:"l1", cls:"an-h"}, t(110,100,"pétala",{ta:"end", fs:11})+t(150,214,"sépala",{ta:"end", fs:11}))+
        g({id:"l2", cls:"an-h"},
          l(158,114,104,92,{sw:1, op:0.5})+t(100,92,"antera",{ta:"end", fs:11, fill:"#9A6A00"})+l(176,165,104,176,{sw:1, op:0.5})+t(100,180,"estame",{ta:"end", fs:11, fill:"#9A6A00"})+
          l(210,100,300,70,{sw:1, op:0.5})+t(304,74,"estigma",{ta:"start", fs:11, fill:"#2E7A56"})+
          l(203,140,300,110,{sw:1, op:0.5})+t(304,114,"estilete",{ta:"start", fs:11, fill:"#2E7A56"})+
          l(216,192,300,160,{sw:1, op:0.5})+t(304,158,"ovário",{ta:"start", fs:11, fill:"#2E7A56"})+t(304,172,"(com óvulos)",{ta:"start", fs:10, fw:400})+
          t(352,40,"carpelo",{fs:12, fill:"#2E7A56"}))+
        g({id:"disp", cls:"an-h"}, r(10,8,380,44,{rx:12, fill:"var(--surface)", stroke:"var(--border)"})+t(200,36,"🌬️ vento  ·  🐦 animais  ·  💧 água",{fs:15})),
      passos:[
        {t:"A <b>flor</b> é o órgão de reprodução de muitas plantas. Por fora estão as <b>sépalas</b> (verdes) e as <b>pétalas</b>, coloridas para atrair os insetos.", f:S => S.mostrar("#l1")},
        {t:"O órgão masculino é o <b>estame</b>: na <b>antera</b> forma-se o <b>pólen</b>. O órgão feminino é o <b>carpelo</b>: <b>estigma</b>, <b>estilete</b> e <b>ovário</b>, com os <b>óvulos</b> lá dentro.", f:S => { S.esconder("#l1"); S.mostrar("#l2"); }},
        {t:"Uma <b>abelha</b> visita a flor à procura de <b>néctar</b>. Sem querer, o seu corpo peludo fica coberto de pólen…", f:S => { S.esconder("#l2"); S.mover("#abelha", "translate(160px,96px)"); S.mostrar("#polAb"); }},
        {t:"…e leva-o para o <b>estigma</b> de outra flor (ou da mesma). É a <b>polinização</b>. Também o <b>vento</b> pode transportar pólen.", f:S => {
          S.mostrar("#polAb"); S.mover("#abelha", "translate(214px,84px)"); S.depois(() => S.mostrar("#polEst"), 1400); if(S.instant) S.mostrar("#polEst"); }},
        {t:"No estigma, o grão de pólen forma um <b>tubo polínico</b>, que desce pelo estilete até um óvulo: dá-se a <b>fecundação</b>.", f:S => {
          S.mostrar("#polEst"); S.mover("#abelha", "translate(460px,10px)"); S.cls("#tubo","draw"); }},
        {t:"Depois, as pétalas e os estames caem, o <b>ovário</b> transforma-se no <b>fruto</b> e os <b>óvulos</b> nas <b>sementes</b>.", f:S => {
          S.esconder("#petalas, #estames, #estilete, #estigma, #polEst, #tubo, #ovario"); S.mostrar("#fruto"); }},
        {t:"As sementes espalham-se — é a <b>dispersão</b> — pelo <b>vento</b>, pelos <b>animais</b> ou pela <b>água</b>. Se encontrarem boas condições, <b>germinam</b> e nasce uma nova planta!", f:S => S.mostrar("#disp")}
      ]});
  })();

  /* ===================== c6 — o ciclo da água ===================== */
  (function(){
    const EVA = [70,100,130].map(x => "M"+x+",205 C"+(x-6)+",160 "+(x+10)+",110 "+(x+80)+",60");
    const CHUVA = [230,255,280,305].map(x => "M"+x+",70 L"+(x-10)+",150");
    A.def({id:"ciclo-agua", mundo:"c6", cor:"m3", titulo:"O ciclo da água (revisão do 5.º ano)",
      cena: () =>
        r(0,0,400,260,{fill:"var(--m3-bg)"})+
        g({id:"sol"}, c(40,36,20,{fill:"#F5C342"}))+
        p("M160,205 L230,120 L268,150 L310,90 L400,180 L400,260 L160,260 Z",{fill:"#9C8A6A", stroke:"#7A6A4A", sw:1.5})+
        p("M292,112 L310,90 L330,112 Z",{fill:"#FFFFFF", op:0.9})+
        r(0,205,190,55,{fill:"#3F8FD8", op:0.85})+t(60,240,"mar",{fs:12, fill:"#fff"})+
        p("M300,150 C280,175 250,185 230,198 C215,205 200,206 190,208",{stroke:"#3F8FD8", sw:5, lc:"round"})+t(258,172,"rio",{fs:11, fill:"#2F63A0"})+
        g({id:"arv"}, r(352,150,6,30,{fill:"#7A5A3A"})+c(355,140,16,{fill:"#5F9E52"}))+
        g({id:"nuvem", cls:"an-h an-pop"}, c(220,58,20,{fill:"#FFFFFF"})+c(245,50,24,{fill:"#FFFFFF"})+c(272,58,20,{fill:"#FFFFFF"})+r(200,58,92,20,{rx:10, fill:"#FFFFFF"}))+
        g({id:"fE"})+g({id:"fT"})+g({id:"fC"})+g({id:"fR"})+g({id:"fI"})+
        t(70,140,"evaporação",{id:"lE", cls:"an-h", fs:11, fill:"#2F63A0"})+t(392,120,"transpiração",{id:"lT", cls:"an-h", ta:"end", fs:11, fill:"#2E7A56"})+
        t(246,24,"condensação",{id:"lC", cls:"an-h", fs:11})+t(214,126,"precipitação",{id:"lP", cls:"an-h", ta:"end", fs:11, fill:"#2F63A0"})+
        t(300,248,"infiltração",{id:"lI", cls:"an-h", fs:11, fill:"#fff"}),
      passos:[
        {t:"A água da Terra está sempre a mudar de lugar e de estado: é o <b>ciclo da água</b>, movido pela energia do <b>Sol</b>.", f:S => S.cls("#sol","an-pulse")},
        {t:"<b>Evaporação</b>: o Sol aquece o mar, os rios e os lagos, e a água passa a <b>vapor de água</b>, invisível, que sobe.", f:S => { S.mostrar("#lE"); EVA.forEach(d => S.fluxo("#fE", d, 3, 4, "#9CC9EE", 3)); }},
        {t:"As plantas também libertam vapor de água pelas folhas (pelos <b>estomas</b>): é a <b>transpiração</b>.", f:S => { S.mostrar("#lT"); S.fluxo("#fT","M355,126 C350,100 330,80 290,62",3,3.6,"#9CC9EE",3); }},
        {t:"Lá em cima o ar é frio: o vapor <b>condensa</b> em gotinhas minúsculas e formam-se as <b>nuvens</b>.", f:S => { S.mostrar("#nuvem, #lC"); }},
        {t:"<b>Precipitação</b>: quando as gotas ficam pesadas, caem como <b>chuva</b>, <b>neve</b> ou <b>granizo</b>.", f:S => { S.mostrar("#lP"); CHUVA.forEach(d => S.fluxo("#fR", d, 3, 1.4, "#3F8FD8", 2.5)); }},
        {t:"A água corre pelos <b>rios</b> até ao mar, ou <b>infiltra-se</b> no solo e forma águas subterrâneas. E o ciclo recomeça!", f:S => {
          S.mostrar("#lI"); S.fluxo("#fC","M300,150 C280,175 250,185 230,198 C215,205 200,206 186,208",4,3,"#1F6FC0",3.5); S.fluxo("#fI","M330,170 C330,215 280,232 190,236",3,5,"#1F6FC0",3); }},
        {t:"Experimenta: muda a temperatura. Com mais calor, há mais evaporação!", f:S => {
          const box = S.controlo('<label class="an-range">❄️ Frio <input type="range" min="1" max="6" step="1" value="3"> ☀️ Calor</label>');
          if(!box) return;
          box.querySelector("input").addEventListener("input", e => {
            const v = +e.target.value; S.limpar("#fE"); EVA.forEach(d => S.fluxo("#fE", d, v, Math.max(2, 6 - v*0.6), "#9CC9EE", 3));
            S.attr("#sol","opacity", (0.3 + v*0.12).toFixed(2)); }); }}
      ]});
  })();

  /* ===================== c7 — os órgãos reprodutores ===================== */
  (function(){
    const UTERO = "M95,70 Q130,60 165,70 Q172,112 146,140 L142,160 L118,160 L114,140 Q88,112 95,70 Z";
    const caixa = (y, txt, sub) => g({}, r(232,y,160,34,{rx:10, fill:"var(--surface)", stroke:"#2F63A0", sw:2})+t(312,y+15,txt,{fs:11.5})+(sub ? t(312,y+28,sub,{fs:9.5, fw:400}) : ""));
    const SETA = "M312,58 L312,72 M312,106 L312,120 M312,154 L312,168 M312,202 L312,216";
    A.def({id:"reprodutores", mundo:"c7", cor:"m7", titulo:"Os sistemas reprodutores",
      cena: () =>
        g({id:"fem"},
          t(130,20,"Feminino",{fs:13, fill:"#C22B5C"})+
          p(UTERO,{fill:"#F6C9D3", stroke:"#C22B5C", sw:2})+p("M108,82 Q130,76 152,82 Q152,112 130,132 Q108,112 108,82 Z",{fill:"#F29BB5", op:0.6})+
          p("M98,74 C80,58 55,60 44,80 M162,74 C180,58 205,60 216,80",{id:"trompas", stroke:"#C22B5C", sw:3})+
          el(40,92,13,9,{fill:"#F4D7A8", stroke:"#B07800", sw:1.5})+el(220,92,13,9,{fill:"#F4D7A8", stroke:"#B07800", sw:1.5})+
          p("M122,160 L120,214 M138,160 L140,214",{stroke:"#C22B5C", sw:2.5})+
          g({id:"fOv"})+
          g({id:"lf", cls:"an-h"}, t(40,116,"ovário",{fs:10.5})+t(56,52,"trompa",{fs:10.5})+t(130,106,"útero",{fs:11})+t(166,196,"vagina",{ta:"start", fs:10.5})))+
        l(210,20,210,250,{stroke:"var(--border)", sw:1, da:"4 4"})+
        g({id:"mas", cls:"an-h"},
          t(312,14,"Masculino",{fs:13, fill:"#2F63A0"})+
          caixa(24,"Testículos (no escroto)","produzem espermatozoides")+caixa(72,"Canais deferentes","")+caixa(120,"Glândulas anexas","juntam líquido: forma-se o esperma")+
          caixa(168,"Uretra","")+caixa(216,"Pénis","")+p(SETA,{stroke:"#2F63A0", sw:2})+g({id:"fEsp"})),
      passos:[
        {t:"O <b>sistema reprodutor feminino</b>: dois <b>ovários</b>, duas <b>trompas de Falópio</b>, o <b>útero</b> (onde o bebé se pode desenvolver) e a <b>vagina</b>.", f:S => S.mostrar("#lf")},
        {t:"A partir da puberdade, os <b>ovários</b> libertam, normalmente, <b>um óvulo por mês</b>. O óvulo segue pela trompa em direção ao útero.", f:S => S.fluxo("#fOv","M50,86 C60,62 80,60 98,74 C110,82 120,90 130,100",1,4,"#FFF1C2",5)},
        {t:"O <b>sistema reprodutor masculino</b>: dois <b>testículos</b>, dentro do <b>escroto</b>, os <b>canais deferentes</b>, as <b>glândulas anexas</b>, a <b>uretra</b> e o <b>pénis</b>.", f:S => S.mostrar("#mas")},
        {t:"Os <b>testículos</b> produzem os <b>espermatozoides</b> — continuamente, a partir da puberdade, milhões por dia — e a hormona testosterona.", f:S => S.cls("#mas > g:first-of-type","an-pulse")},
        {t:"Os espermatozoides seguem pelos canais deferentes; as glândulas anexas juntam-lhes um líquido e forma-se o <b>esperma</b>, que sai pela <b>uretra</b>.", f:S => S.fluxo("#fEsp", "M312,58 L312,232", 5, 4, "#9AB7E0", 3.5)}
      ]});
  })();

  /* ===================== c7 — o ciclo menstrual (com o nome de cada fase) ===================== */
  (function(){
    const CX = 100, CY = 140, R = 78;
    const ang = d => -90 + (d-1)*360/28;
    const pt = (rr, a) => (CX + rr*Math.cos(a*Math.PI/180)).toFixed(1)+","+(CY + rr*Math.sin(a*Math.PI/180)).toFixed(1);
    const arco = (id, d0, d1, cor) => { const a0 = ang(d0), a1 = ang(d1+1); return p("M"+pt(R,a0)+" A"+R+","+R+" 0 "+(a1-a0>180?1:0)+" 1 "+pt(R,a1),{id:id, stroke:cor, sw:18}); };
    const UT = "M250,90 Q300,78 350,90 Q358,140 318,176 L312,206 L288,206 L282,176 Q242,140 250,90 Z";
    const COR = {men:"#D1495B", pre:"#F4B6C2", ov:"#9B6BC2", pos:"#E6D5F2"};
    /* the name of the phase on each day (the uterus and the ovary at the same time) */
    const fase = d => d<=5 ? ["Fase menstrual","dias 1 a 5 · o endométrio desprende-se (menstruação)"]
      : d<=13 ? ["Fase pré-ovulatória (ou folicular)","um folículo amadurece no ovário · o endométrio engrossa"]
      : d===14 ? ["Ovulação","por volta do dia 14 · o ovário liberta um óvulo"]
      : ["Fase pós-ovulatória (ou lútea)","o corpo amarelo produz progesterona · o endométrio fica pronto"];
    const esp = d => d<=5 ? 3 : d<=14 ? 3 + (d-5)*1.1 : 13;
    const leg = (x, cor, txt) => r(x,272,12,12,{rx:3, fill:cor})+t(x+16,282,txt,{ta:"start", fs:9.5, fw:600});
    /* the egg's way: out of the ovary, caught by the fimbriae, along the Fallopian tube (it does not reach the uterus unless fertilised) */
    const TRAJ = "M204,110 L206,100 C212,88 222,83 238,84";
    const viagem = S => { S.limpar("#viagem"); S.mostrar("#trajeto, #lTrompa"); S.esconder("#ovo"); S.fluxo("#viagem", TRAJ, 1, 3.5, "#E0A800", 6.5); };
    const semViagem = S => { S.limpar("#viagem"); S.esconder("#trajeto, #ovo"); };
    A.def({id:"ciclo-menstrual", mundo:"c7", cor:"m7", titulo:"O ciclo menstrual e as suas fases", h:296,
      cena: () =>
        arco("aMen",1,5,COR.men)+arco("aPre",6,13,COR.pre)+arco("aOv",14,14,COR.ov)+arco("aPos",15,28,COR.pos)+
        g({id:"pont", style:"transform-origin:"+CX+"px "+CY+"px; transform:rotate(0deg)"}, l(CX,CY,CX,CY-R+4,{stroke:"currentColor", sw:3, lc:"round"})+c(CX,CY-R+4,6,{fill:"currentColor"}))+
        c(CX,CY,30,{fill:"var(--surface)", stroke:"var(--border)", sw:1})+t(CX,CY-2,"dia",{fs:10, fw:400})+t(CX,CY+14,"1",{id:"dia", fs:16})+
        t(CX,30,"um ciclo ≈ 28 dias",{fs:11})+
        p("M254,96 C230,80 214,84 206,100 M346,96 C366,80 378,84 386,100",{stroke:"#C22B5C", sw:10, lc:"round"})+
        p("M254,96 C230,80 214,84 206,100 M346,96 C366,80 378,84 386,100",{stroke:"#FBE6EB", sw:6, lc:"round"})+
        p("M206,100 l-7,-4 M206,100 l-8,2 M206,100 l-4,-8 M386,100 l7,-4 M386,100 l8,2 M386,100 l4,-8",{stroke:"#C22B5C", sw:2})+
        g({id:"trajeto", cls:"an-h"}, p(TRAJ,{stroke:"#7B3FA8", sw:2.5, da:"5 4"})+p("M243,85 l-9,-5 l1,10 z",{fill:"#7B3FA8"}))+
        t(236,70,"trompa de Falópio",{id:"lTrompa", cls:"an-h", fs:9.5})+
        el(204,112,11,8,{fill:"#F4D7A8", stroke:"#B07800", sw:1.5})+el(386,112,11,8,{fill:"#F4D7A8", stroke:"#B07800", sw:1.5})+
        c(204,112,4,{id:"foliculo", cls:"an-h", fill:"#FFF1C2", stroke:"#B07800", sw:1})+c(204,112,5,{id:"corpoAm", cls:"an-h", fill:"#F5C342", stroke:"#B07800", sw:1})+
        p(UT,{fill:"#F6C9D3", stroke:"#C22B5C", sw:2})+
        p("M262,100 Q300,92 338,100 Q338,138 300,164 Q262,138 262,100 Z",{id:"endo", fill:"#FBE6EB", stroke:"#D1495B", sw:3})+
        c(206,112,6.5,{id:"ovo", cls:"an-h", fill:"#FFE08A", stroke:"#8A5A00", sw:1.5})+
        g({id:"viagem"})+
        g({id:"gotas"})+
        t(300,30,"",{id:"fase", fs:12.5})+t(300,46,"",{id:"fase2", fs:9.5, fw:400})+
        t(300,238,"útero (endométrio por dentro)",{fs:10.5})+t(206,136,"ovário",{fs:10})+t(374,136,"ovário",{fs:10})+
        leg(4,COR.men,"menstrual (1–5)")+leg(106,COR.pre,"pré-ovulatória (6–13)")+leg(222,COR.ov,"ovulação (≈14)")+leg(310,COR.pos,"pós-ovulatória"),
      passos:[
        {t:"Depois da <b>menarca</b> (a primeira menstruação), o corpo repete um <b>ciclo menstrual</b>. Em média dura <b>28 dias</b>, mas é normal variar — e nos primeiros anos é muitas vezes irregular. Tem quatro momentos, cada um com o seu nome.", f:S => {}},
        {t:"<b>Fase menstrual</b> (dias 1 a 5, mais ou menos): é a <b>menstruação</b>. A camada interior do útero, o <b>endométrio</b>, desprende-se e sai pela vagina com um pouco de sangue. Dura normalmente de 2 a 7 dias.", f:S => {
          semViagem(S); S.cls("#aMen","an-pulse"); S.texto("#fase","Fase menstrual"); S.texto("#fase2","dias 1 a 5 · o endométrio desprende-se"); S.attr("#endo","stroke-width",3);
          S.fluxo("#gotas","M300,170 L300,214",3,2.4,"#D1495B",3); }},
        {t:"<b>Fase pré-ovulatória</b> (ou <b>folicular</b>): num ovário, um <b>folículo</b> amadurece com um óvulo lá dentro e produz a hormona <b>estrogénio</b>. No útero, o endométrio volta a <b>engrossar</b>.", f:S => {
          semViagem(S); S.cls("#aMen","an-pulse",false); S.cls("#aPre","an-pulse"); S.limpar("#gotas"); S.mostrar("#foliculo");
          S.mover("#pont","rotate("+(ang(10)+90)+"deg)"); S.texto("#dia","10"); S.texto("#fase","Fase pré-ovulatória (folicular)"); S.texto("#fase2","um folículo amadurece · o endométrio engrossa"); S.attr("#endo","stroke-width",8); }},
        {t:"<b>Ovulação</b>, por volta do <b>dia 14</b>: o folículo rompe-se e o ovário liberta o <b>óvulo</b> (o ponto amarelo). As «franjas» da ponta da trompa, as <b>fímbrias</b>, apanham-no e ele entra na <b>trompa de Falópio</b>. Segue o tracejado: é o seu caminho.", f:S => {
          S.cls("#aPre","an-pulse",false); S.cls("#aOv","an-pulse"); S.esconder("#foliculo");
          S.mover("#pont","rotate("+(ang(14)+90)+"deg)"); S.texto("#dia","14"); S.texto("#fase","Ovulação"); S.texto("#fase2","o ovário liberta um óvulo, que entra na trompa"); S.attr("#endo","stroke-width",12);
          viagem(S); }},
        {t:"<b>A viagem na trompa</b>: o óvulo avança devagar pela trompa, em direção ao útero. É <b>na trompa</b> que pode encontrar espermatozoides e ser <b>fecundado</b>. Se isso não acontecer, o óvulo <b>desfaz-se em cerca de um dia</b>, ainda pelo caminho.", f:S => {
          S.cls("#aOv","an-pulse"); S.cls("#lTrompa","an-pulse");
          S.mover("#pont","rotate("+(ang(15)+90)+"deg)"); S.texto("#dia","15"); S.texto("#fase","O óvulo na trompa"); S.texto("#fase2","pode ser fecundado aqui (ou desfaz-se)");
          viagem(S); }},
        {t:"<b>Fase pós-ovulatória</b> (ou <b>lútea</b>): o folículo vazio transforma-se no <b>corpo amarelo</b> (corpo lúteo), que produz <b>progesterona</b>. O endométrio fica espesso e cheio de vasos sanguíneos, pronto a receber um possível bebé.", f:S => {
          S.cls("#aOv","an-pulse",false); S.cls("#lTrompa","an-pulse",false); S.cls("#aPos","an-pulse"); semViagem(S); S.esconder("#lTrompa"); S.mostrar("#corpoAm");
          S.mover("#pont","rotate("+(ang(22)+90)+"deg)"); S.texto("#dia","22"); S.texto("#fase","Fase pós-ovulatória (lútea)"); S.texto("#fase2","o corpo amarelo produz progesterona"); S.attr("#endo","stroke-width",13); }},
        {t:"Se o óvulo <b>não</b> for fecundado, o corpo amarelo desaparece, as hormonas baixam e o endométrio volta a desprender-se: começa uma nova <b>fase menstrual</b> — e um novo ciclo.", f:S => {
          S.cls("#aPos","an-pulse",false); semViagem(S); S.esconder("#corpoAm");
          S.mover("#pont","rotate(360deg)"); S.texto("#dia","1"); S.texto("#fase","Novo ciclo: fase menstrual"); S.texto("#fase2","as hormonas baixam · o endométrio desprende-se"); S.attr("#endo","stroke-width",3);
          S.fluxo("#gotas","M300,170 L300,214",3,2.4,"#D1495B",3); }},
        {t:"Experimenta: arrasta para mudar o <b>dia do ciclo</b> e vê o nome da fase. Uma app ou um calendário ajudam a saber quando vem a próxima menstruação.", f:S => {
          const box = S.controlo('<label class="an-range">Dia 1 <input type="range" min="1" max="28" step="1" value="1"> Dia 28</label>');
          if(!box) return;
          box.querySelector("input").addEventListener("input", e => {
            const d = +e.target.value, f = fase(d);
            S.mover("#pont","rotate("+(ang(d)+90)+"deg)"); S.texto("#dia", String(d)); S.texto("#fase", f[0]); S.texto("#fase2", f[1]); S.attr("#endo","stroke-width", esp(d).toFixed(1));
            S.limpar("#gotas"); if(d<=5) S.fluxo("#gotas","M300,170 L300,214",3,2.4,"#D1495B",3);
            if(d>=6 && d<=13) S.mostrar("#foliculo"); else S.esconder("#foliculo");
            if(d>=15) S.mostrar("#corpoAm"); else S.esconder("#corpoAm");
            S.limpar("#viagem");
            if(d===14 || d===15){ S.mostrar("#ovo, #trajeto, #lTrompa"); S.mover("#ovo", d===14 ? "translate(0px,-12px)" : "translate(26px,-27px)"); }
            else S.esconder("#ovo, #trajeto, #lTrompa");
          }); }}
      ]});
  })();

  /* ===================== c7 — a primeira menstruação: o que esperar e o que fazer ===================== */
  (function(){
    const painel = (id, emoji, linhas, oculto) => g({id:id, cls: oculto===false ? "" : "an-h"},
      t(200,62,emoji,{fs:44})+linhas.map((s,i) => t(200,112+i*26,s,{fs:13.5, fw:i===0?800:500})).join(""));
    A.def({id:"menarca", mundo:"c7", cor:"m7", titulo:"A primeira menstruação: o que esperar e o que fazer",
      cena: () =>
        painel("p1","📅",["Por volta dos 12 anos","(há quem comece aos 8 e quem só aos 16)","cada corpo tem o seu ritmo"], false)+
        painel("p2","🌱",["Sinais de que se aproxima","os seios crescem (cerca de 2 anos antes)","estirão de crescimento · pelos","corrimento esbranquiçado (meses antes)"])+
        painel("p3","🎒",["Um kit para a mochila","pensos higiénicos · cuecas limpas","toalhitas · um saquinho"])+
        painel("p4","🏫",["Se acontecer na escola","fala com um adulto de confiança:","professora, auxiliar, enfermeira escolar"])+
        painel("p5","🩲",["Escolher o que usar","pensos · cuecas menstruais","tampões (no máximo 8 horas) · copo menstrual"])+
        painel("p6","🌡️",["Cólicas? É comum","calor na barriga · mexer-te · descansar","dor muito forte → fala com o médico"])+
        painel("p7","🤝",["Respeito","é natural e acontece a metade da humanidade","ninguém deve fazer troça"]),
      passos:[
        {t:"A <b>menarca</b> é a <b>primeira menstruação</b>. Costuma acontecer por volta dos <b>12 anos</b> — há quem comece mais cedo, a partir dos 8, e quem comece mais tarde. Cada corpo tem o seu ritmo.", f:S => {}},
        {t:"O corpo dá <b>sinais</b> antes: os seios começam a crescer (cerca de 2 anos antes), há um <b>estirão</b> de crescimento, aparecem pelos e, uns meses antes, um <b>corrimento esbranquiçado</b> nas cuecas — tudo normal.", f:S => { S.esconder("#p1"); S.mostrar("#p2"); }},
        {t:"Prepara um <b>kit</b> para andar na mochila: pensos higiénicos, umas cuecas limpas, toalhitas e um saquinho. Assim não há surpresas.", f:S => { S.esconder("#p1, #p2"); S.mostrar("#p3"); }},
        {t:"Se a menstruação vier na escola, fala com um <b>adulto de confiança</b> — uma professora, uma auxiliar, a enfermeira escolar. Em casa, a mãe, o pai ou quem cuida de ti. Toda a gente compreende.", f:S => { S.esconder("#p1, #p2, #p3"); S.mostrar("#p4"); }},
        {t:"Há várias opções: <b>pensos</b> (troca-se várias vezes por dia), <b>cuecas menstruais</b>, <b>tampões</b> (nunca mais de 8 horas seguidas) ou <b>copo menstrual</b>. Lava sempre as mãos antes e depois.", f:S => { S.esconder("#p1, #p2, #p3, #p4"); S.mostrar("#p5"); }},
        {t:"Pequenas dores na barriga (<b>cólicas</b>) são comuns: calor na barriga, exercício leve e descanso ajudam. Se a dor for muito forte ou o sangramento muito abundante, fala com um adulto e com o médico.", f:S => { S.esconder("#p1, #p2, #p3, #p4, #p5"); S.mostrar("#p6"); }},
        {t:"E os rapazes também devem saber isto: assim podem compreender e <b>respeitar</b>. A menstruação é natural — ninguém deve fazer troça.", f:S => { S.esconder("#p1, #p2, #p3, #p4, #p5, #p6"); S.mostrar("#p7"); }}
      ]});
  })();

  /* ===================== c7 — da fecundação ao nascimento ===================== */
  (function(){
    const feto = g({id:"feto", style:"transform-origin:200px 140px; transform:translate(0px,0px) scale(0.12)"},
      c(188,108,24,{fill:"#F4C7B0", stroke:"#B5704F", sw:2})+
      p("M200,124 C236,122 250,156 236,182 C222,204 186,204 176,184 C166,166 176,132 200,124 Z",{fill:"#F4C7B0", stroke:"#B5704F", sw:2})+
      p("M214,146 C228,150 232,162 222,170 M200,184 C206,196 222,198 228,190",{stroke:"#B5704F", sw:3, lc:"round"})+c(180,104,2.2,{fill:"#5A3B28"}));
    A.def({id:"gravidez", mundo:"c7", cor:"m7", titulo:"Da fecundação ao nascimento",
      cena: () =>
        g({id:"fec"},
          c(200,130,60,{fill:"#FFF1C2", stroke:"#B07800", sw:2})+c(200,130,62,{fill:"none", stroke:"#E8D7A0", sw:5, op:0.6})+
          g({id:"esp"}, [[-120,-60],[110,-80],[-140,40],[130,60]].map((d,i) => g({cls:"spz", style:pos(200+d[0],130+d[1])}, el(0,0,6,4,{fill:"#9AB7E0", stroke:"#2F63A0", sw:1})+p("M-6,0 q-8,-5 -16,0 q-8,5 -16,0",{stroke:"#2F63A0", sw:1.5}))).join(""))+
          t(200,224,"óvulo",{id:"lov", fs:12}))+
        g({id:"div", cls:"an-h"},
          g({id:"d2", cls:"an-h"}, c(180,130,22,{fill:"#FFF1C2", stroke:"#B07800", sw:2})+c(222,130,22,{fill:"#FFF1C2", stroke:"#B07800", sw:2}))+
          g({id:"d4", cls:"an-h"}, [[182,112],[218,112],[182,150],[218,150]].map(q => c(q[0],q[1],17,{fill:"#FFF1C2", stroke:"#B07800", sw:2})).join(""))+
          t(200,224,"",{id:"lcel", fs:12}))+
        g({id:"ut", cls:"an-h"},
          el(200,140,120,108,{fill:"#F6C9D3", stroke:"#C22B5C", sw:3})+el(200,140,108,96,{fill:"#FCE6EC"})+
          g({id:"plac", cls:"an-h"}, el(118,96,24,40,{fill:"#C7506B", op:0.85})+p("M130,110 C160,120 170,150 196,150",{stroke:"#7F4C9C", sw:4})+g({id:"fCord"}))+
          feto)+
        t(16,24,"",{id:"sem", ta:"start", fs:15})+t(16,44,"",{id:"tam", ta:"start", fs:12, fw:400})+t(384,30,"",{id:"fruta", ta:"end", fs:30}),
      passos:[
        {t:"Na <b>fecundação</b>, um <b>espermatozoide</b> junta-se a um <b>óvulo</b>, numa trompa. Forma-se a primeira célula de um novo ser: o <b>ovo</b> (ou <b>zigoto</b>).", dur:6500, f:S => {
          S.qa(".spz").forEach((e,i) => { e.style.transform = i===0 ? "translate(146px,104px)" : e.style.transform; }); S.texto("#lov","óvulo + espermatozoide → ovo"); }},
        {t:"O ovo divide-se — 2, 4, 8 células… — enquanto viaja até ao útero. Cerca de uma semana depois, fixa-se na parede do útero: é a <b>nidação</b>.", dur:6500, f:S => {
          S.esconder("#fec"); S.mostrar("#div, #d2"); S.texto("#lcel","2 células");
          const quatro = () => { S.esconder("#d2"); S.mostrar("#d4"); S.texto("#lcel","4 células… e assim por diante"); };
          if(S.instant) quatro(); else S.depois(quatro, 2200); }},
        {t:"Com <b>8 semanas</b>, o <b>embrião</b> mede cerca de 1,6 cm — o tamanho de uma uva. O coração já bate desde a 6.ª semana!", f:S => {
          S.esconder("#div"); S.mostrar("#ut"); S.mover("#feto","scale(0.18)"); S.texto("#sem","8 semanas"); S.texto("#tam","≈ 1,6 cm · embrião"); S.texto("#fruta","🍇"); }},
        {t:"Recebe <b>oxigénio</b> e <b>nutrientes</b> da mãe através da <b>placenta</b> e do <b>cordão umbilical</b> — e devolve-lhe os resíduos.", f:S => {
          S.mostrar("#plac"); S.fluxo("#fCord","M130,110 C160,120 170,150 196,150",4,2.4,VERMELHO,3.5); }},
        {t:"A partir da 9.ª semana passa a chamar-se <b>feto</b>. Às 12 semanas mede cerca de 6 cm; às <b>20 semanas</b>, uns 25 cm — e a mãe já o sente mexer.", f:S => {
          S.mover("#feto","scale(0.55)"); S.texto("#sem","20 semanas"); S.texto("#tam","≈ 25 cm · feto"); S.texto("#fruta","🍌"); }},
        {t:"Por volta das <b>40 semanas</b> (cerca de 9 meses), o bebé está pronto: mede uns 50 cm e pesa cerca de 3 kg. No <b>parto</b>, o útero contrai-se e o bebé nasce.", f:S => {
          S.mover("#feto","translate(0px,10px) scale(0.95) rotate(170deg)"); S.texto("#sem","40 semanas"); S.texto("#tam","≈ 50 cm · ≈ 3 kg"); S.texto("#fruta","🍉"); }}
      ]});
  })();

  /* ===================== c8 — as defesas do corpo ===================== */
  (function(){
    const f = v => Math.round(v*10)/10;
    const micro = (id, x, y) => g({id:id, cls:"micro", style:pos(x,y)},
      range(0,8).map(k => { const a = k*Math.PI/4; return l(f(8*Math.cos(a)),f(8*Math.sin(a)),f(12*Math.cos(a)),f(12*Math.sin(a)),{stroke:"#9A3B3B", sw:2, lc:"round"}); }).join("")+c(0,0,8,{fill:"#E0958A", stroke:"#9A3B3B", sw:1.5}));
    const gb = (id, x, y) => g({id:id, style:pos(x,y)}, c(0,0,14,{fill:"#F4F4F4", stroke:"#8A8A8A", sw:2})+c(3,-2,6,{fill:"#B39DDB"}));
    const Y = (x, y) => p("M"+x+","+(y+8)+" L"+x+","+y+" L"+(x-5)+","+(y-6)+" M"+x+","+y+" L"+(x+5)+","+(y-6),{stroke:"#3E63B0", sw:2.5, lc:"round"});
    const M = [["m0",60,40],["m1",140,30],["m2",250,40],["m3",320,30],["m4",200,24],["m5",100,24]];
    const DENTRO = {m0:[170,130],m1:[205,150],m2:[230,125],m3:[260,145],m4:[190,170],m5:[150,160]};
    A.def({id:"defesas", mundo:"c8", cor:"m8", titulo:"As defesas do corpo",
      cena: () =>
        r(0,0,400,64,{fill:"var(--m3-bg)"})+
        r(0,64,400,26,{fill:"#F3D9C4"})+r(0,90,400,170,{fill:"#F2C1B0"})+
        r(188,64,24,40,{id:"tampa", fill:"#F3D9C4"})+r(188,64,24,26,{id:"cicat", cls:"an-h", fill:"#E9B8A6"})+
        r(0,0,400,260,{id:"infl", fill:"#E0453A", op:0})+
        p("M0,215 C120,205 280,225 400,212",{id:"vaso", stroke:"#D9534F", sw:18, op:0.6})+
        M.map(m => micro(m[0], m[1], m[2])).join("")+
        gb("w0",80,214)+gb("w1",200,216)+gb("w2",320,213)+
        g({id:"ac", cls:"an-h"}, Y(246,150)+Y(270,138)+Y(178,182)+Y(140,152))+
        g({id:"barr", cls:"an-h"}, r(30,96,340,150,{rx:14, fill:"var(--surface)", stroke:"var(--border)", sw:1.5})+
          ["🧴 a pele, inteira","👃 pelos e muco do nariz","😢 as lágrimas","👅 a saliva","🫃 o ácido do estômago"].map((s,i) => t(56,124+i*26,s,{ta:"start", fs:13})).join(""))+
        t(392,82,"pele",{ta:"end", fs:11})+t(392,236,"vaso sanguíneo",{ta:"end", fs:11, fill:VERMELHO}),
      passos:[
        {t:"Estamos rodeados de <b>micróbios</b>. A primeira defesa é uma barreira: a <b>pele</b>. Inteira, os micróbios não conseguem passar.", f:S => {}},
        {t:"Há outras barreiras: os <b>pelos e o muco</b> do nariz, as <b>lágrimas</b>, a <b>saliva</b> e o <b>ácido do estômago</b>, que destrói muitos micróbios engolidos.", f:S => S.mostrar("#barr")},
        {t:"Mas um <b>corte</b> abre uma porta na pele — e os micróbios entram!", f:S => {
          S.esconder("#barr, #tampa"); M.forEach(m => S.mover("#"+m[0], "translate("+DENTRO[m[0]][0]+"px,"+DENTRO[m[0]][1]+"px)")); }},
        {t:"A zona fica <b>vermelha</b>, <b>quente</b> e <b>inchada</b>: é a <b>inflamação</b>. Os vasos dilatam e chegam os <b>glóbulos brancos</b>.", f:S => {
          S.attr("#infl","opacity","0.14"); S.attr("#vaso","stroke-width","28");
          S.mover("#w0","translate(165px,150px)"); S.mover("#w1","translate(210px,180px)"); S.mover("#w2","translate(250px,160px)"); }},
        {t:"Alguns glóbulos brancos <b>«engolem»</b> os micróbios e destroem-nos: é a <b>fagocitose</b>.", f:S => {
          S.mover("#w0","translate(170px,132px)"); S.mover("#w1","translate(198px,160px)"); S.cls("#m0, #m1, #m4","gone"); }},
        {t:"Outros glóbulos brancos fabricam <b>anticorpos</b> (em forma de Y), que se colam aos micróbios e os marcam para serem destruídos. Depois, a ferida fecha e <b>cicatriza</b>.", dur:7500, f:S => {
          S.mostrar("#ac");
          const fim = () => { S.cls("#m2, #m3, #m5","gone"); S.esconder("#ac"); S.mostrar("#cicat"); S.attr("#infl","opacity","0"); S.attr("#vaso","stroke-width","18"); };
          if(S.instant) fim(); else S.depois(fim, 2600); }}
      ]});
  })();

  /* ===================== c8 — lavar as mãos (e a higiene de todos os dias) ===================== */
  (function(){
    const MAO = "M150,250 L150,160 C150,150 140,118 130,100 C122,86 140,78 148,92 L165,120 L165,52 C165,40 182,40 182,52 L182,112 L186,40 C186,28 204,28 204,40 L204,112 L210,48 C210,36 228,36 228,48 L228,118 L236,74 C236,62 254,62 254,74 L252,160 C252,200 240,220 240,250 Z";
    const GERMES = range(0,30).map(i => [Math.round(160 + rnd()*85), Math.round(60 + rnd()*180)]);
    const lote = (a, b) => range(a,b).map(i => "#ge"+i);
    A.def({id:"maos", mundo:"c8", cor:"m8", titulo:"Lavar as mãos: 20 segundos que contam",
      cena: () =>
        p("M60,10 L60,30 L100,30",{stroke:"#9A9A9A", sw:10, lc:"round"})+r(96,22,22,14,{rx:4, fill:"#9A9A9A"})+
        g({id:"agua"})+g({id:"bolhas"})+
        p(MAO,{id:"mao", fill:"#F4C7B0", stroke:"#B5704F", sw:2.5, lj:"round"})+
        GERMES.map((q,i) => c(q[0],q[1],4.5,{id:"ge"+i, cls:"germe", fill:"#5FA85A", stroke:"#2E7A56", sw:1})).join("")+
        t(390,30,"🦠 30",{id:"cont", ta:"end", fs:16})+t(390,50,"micróbios",{ta:"end", fs:11, fw:400})+
        t(390,240,"",{id:"passo", ta:"end", fs:13}),
      passos:[
        {t:"As mãos tocam em tudo — e levam micróbios aos olhos, ao nariz e à boca. <b>Lavá-las bem</b> é das melhores formas de evitar doenças.", f:S => {}},
        {t:"1. <b>Molha</b> as mãos e põe <b>sabão</b>.", f:S => {
          S.fluxo("#agua","M107,36 L107,250",6,1.2,"#7FB3E0",3); S.esconder(lote(0,3)); S.texto("#cont","🦠 27"); S.texto("#passo","💧 + 🧼"); }},
        {t:"2. Esfrega as <b>palmas</b> e as <b>costas</b> das mãos, com espuma.", f:S => {
          S.limpar("#agua"); S.esconder(lote(0,11)); S.texto("#cont","🦠 19"); S.texto("#passo","palmas e costas");
          range(0,8).forEach(i => S.fluxo("#bolhas","M"+(165+i*10)+",200 L"+(160+i*11)+",150",1,2+i*0.2,"#FFFFFF",5)); }},
        {t:"3. <b>Entre os dedos</b>, os <b>polegares</b> e as <b>pontas dos dedos</b> — é aí que se escondem mais micróbios, debaixo das unhas!", f:S => {
          S.esconder(lote(0,21)); S.texto("#cont","🦠 9"); S.texto("#passo","dedos, polegares e unhas"); }},
        {t:"4. Não esqueças os <b>pulsos</b>. Ao todo, esfrega durante pelo menos <b>20 segundos</b> — o tempo de cantar os «Parabéns» duas vezes.", f:S => {
          S.esconder(lote(0,27)); S.texto("#cont","🦠 3"); S.texto("#passo","pulsos · 20 segundos"); }},
        {t:"5. <b>Passa por água</b> e <b>seca</b> bem, com uma toalha limpa ou papel. Mãos limpas!", f:S => {
          S.fluxo("#agua","M107,36 L107,250",6,1.2,"#7FB3E0",3); S.esconder(".germe"); S.texto("#cont","✨ 0"); S.texto("#passo","enxaguar e secar"); S.cls("#mao","an-pulse"); }},
        {t:"Experimenta: usa o <b>cronómetro</b> da próxima vez que lavares as mãos.", f:S => {
          S.esconder(".germe"); S.texto("#cont","✨ 0");
          const box = S.controlo('<button type="button" id="an-cron">⏱️ Começar 20 segundos</button> <b id="an-seg"></b>');
          if(!box) return;
          let tm = null;
          box.querySelector("#an-cron").addEventListener("click", () => {
            clearInterval(tm); let s = 20; const out = box.querySelector("#an-seg"); out.textContent = s+" s";
            tm = setInterval(() => { s--; out.textContent = s > 0 ? s+" s" : "🎉 Feito!"; if(s <= 0 || !box.isConnected) clearInterval(tm); }, 1000);
          }); }},
        {t:"E a higiene de <b>todos os dias</b>: quantas destas já fizeste hoje?", f:S => {
          S.controlo(["🪥 Escovar os dentes (2 vezes por dia, 2 minutos)","🚿 Tomar banho","🩲 Roupa interior lavada","💅 Unhas curtas e limpas","🤧 Espirrar e tossir para o cotovelo"]
            .map(s => '<label style="display:block;margin:2px 0"><input type="checkbox"> '+s+'</label>').join("")); }}
      ]});
  })();
})();
