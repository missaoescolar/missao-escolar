/* Animações do 7.º ano — Ciências Naturais, «A Terra em transformação» (formato explicado em animacoes-matematica.js). */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const range = (a, b) => { const o = []; for(let i=a;i<b;i++) o.push(i); return o; };
  const pos = (x, y) => "transform:translate("+x+"px,"+y+"px)";
  const seta = (id, d, cor) => p(d,{id:id, cls:"seta", pl:1, stroke:cor||"#C0392B", sw:3, "marker-end":"url(#geo-ponta)"});
  const PONTA = '<defs><marker id="geo-ponta" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#C0392B"/></marker></defs>';

  /* ===================== g1 — a escala de Mohs ===================== */
  (function(){
    const MIN = ["Talco","Gesso","Calcite","Fluorite","Apatite","Ortoclase","Quartzo","Topázio","Corindo","Diamante"];
    const COR = ["#E8E4D8","#F1EBDD","#F6E7C1","#B9A6D9","#9FC7A8","#F2C9A8","#E6E6EE","#F5C76B","#C94C5A","#D9F1F7"];
    const X = i => 22 + i*37;
    const OBJ = [["💅 unha",2.5],["🪙 moeda de cobre",3.5],["🪟 vidro",5.5],["🔩 lima de aço",6.5]];
    const xDe = d => X(0) + 17 + (d-1)*37;
    A.def({id:"mohs", mundo:"g1", cor:"m1", titulo:"A escala de dureza de Mohs",
      cena: () =>
        MIN.map((m,i) => g({id:"mm"+i}, r(X(i),92,34,34,{rx:8, fill:COR[i], stroke:"#8A7A5A", sw:1.5})+t(X(i)+17,115,String(i+1),{fs:15})+
          t(X(i)+17, i%2 ? 158 : 142, m,{fs:9.5, fw:600}))).join("")+
        p("M22,172 L392,172",{stroke:"currentColor", sw:2, "marker-end":"url(#geo-ponta)"})+PONTA+
        t(22,188,"mais macio",{ta:"start", fs:10, fw:400})+t(392,188,"mais duro",{ta:"end", fs:10, fw:400})+
        OBJ.map((o,i) => { const y = i%2 ? 56 : 24; return g({id:"ob"+i, cls:"an-h"}, l(xDe(o[1]),88,xDe(o[1]),y+6,{stroke:"#C0392B", sw:2})+t(xDe(o[1]) + (i===1 ? 6 : i===3 ? -6 : 0),y,o[0]+" ≈ "+String(o[1]).replace(".",","),{ta: i===1 ? "end" : i===3 ? "start" : "middle", fs:10.5, fill:"#C0392B"})); }).join("")+
        t(200,220,"",{id:"msg", fs:13})+t(200,240,"",{id:"msg2", fs:11, fw:400}),
      passos:[
        {t:"A <b>escala de Mohs</b> (1812) ordena dez minerais do mais macio (1, o <b>talco</b>) ao mais duro (10, o <b>diamante</b>). Cada um risca os que estão antes dele.", f:S => S.onda(range(0,10).map(i => "#mm"+i), "an-pulse", 120)},
        {t:"A <b>unha</b> (dureza ≈ 2,5) risca o talco e o gesso, mas não a calcite.", f:S => { S.mostrar("#ob0"); S.texto("#msg","A unha risca: talco, gesso"); S.texto("#msg2","não risca: calcite e os seguintes"); }},
        {t:"Uma <b>moeda de cobre</b> (≈ 3,5) já risca a calcite. O <b>vidro</b> (≈ 5,5) é riscado pela ortoclase e pelo <b>quartzo</b>.", f:S => { S.mostrar("#ob0, #ob1, #ob2"); S.texto("#msg","O quartzo (7) risca o vidro"); S.texto("#msg2","é um teste simples para o reconhecer"); }},
        {t:"Uma <b>lima de aço</b> (≈ 6,5) risca quase tudo… menos o quartzo, o topázio, o corindo e o diamante.", f:S => { S.mostrar("#ob0, #ob1, #ob2, #ob3"); S.texto("#msg","O diamante (10) risca todos"); S.texto("#msg2","e só é riscado por outro diamante"); }},
        {t:"Experimenta: escolhe um objeto e um mineral. Risca ou não risca?", f:S => {
          S.mostrar("#ob0, #ob1, #ob2, #ob3"); S.texto("#msg",""); S.texto("#msg2","");
          const box = S.controlo('<label>Objeto <select id="an-ob">'+OBJ.map((o,i) => '<option value="'+i+'">'+o[0]+'</option>').join("")+'</select></label> '+
            '<label>Mineral <select id="an-mi">'+MIN.map((m,i) => '<option value="'+i+'">'+(i+1)+' · '+m+'</option>').join("")+'</select></label> <b id="an-res"></b>');
          if(!box) return;
          const upd = () => { const o = OBJ[+box.querySelector("#an-ob").value], mi = +box.querySelector("#an-mi").value;
            const risca = o[1] > mi+1;
            box.querySelector("#an-res").textContent = risca ? "✅ Risca: "+o[0].slice(3)+" é mais duro" : "❌ Não risca: o mineral é mais duro";
            S.cls("#mm"+mi,"an-pulse"); };
          box.querySelectorAll("select").forEach(s => s.addEventListener("change", () => { range(0,10).forEach(i => S.cls("#mm"+i,"an-pulse",false)); upd(); }));
          upd(); }}
      ]});
  })();

  /* ===================== g2 — da montanha à rocha sedimentar ===================== */
  (function(){
    const RIO = "M120,150 C150,170 180,160 210,180 C240,200 270,190 300,214";
    A.def({id:"sedimentos", mundo:"g2", cor:"m2", titulo:"Da montanha à rocha sedimentar",
      cena: () =>
        r(0,0,400,260,{fill:"var(--m3-bg)"})+
        p("M0,200 L60,60 L110,120 L150,80 L200,200 Z",{id:"monte", fill:"#C9B79C", stroke:"#8A7A5A", sw:2})+
        g({id:"fendas", cls:"an-h"}, p("M70,90 l8,20 l-6,14 M120,110 l-6,18 l8,12 M95,140 l10,16",{stroke:"#5A4A3A", sw:2}))+
        g({id:"blocos", cls:"an-h"}, [[150,150],[165,165],[140,175]].map(q => p("M"+q[0]+","+q[1]+" l10,-4 l6,8 l-8,8 z",{fill:"#B5A27F", stroke:"#5A4A3A", sw:1})).join(""))+
        p(RIO,{stroke:"#5FA3E0", sw:12, lc:"round", op:0.85})+
        r(290,200,110,60,{fill:"#3F8FD8", op:0.6})+t(345,252,"mar / lago",{fs:11, fill:"#fff"})+
        g({id:"fT"})+
        g({id:"camadas"}, ["#E9D8A6","#D9B98A","#C9A27A","#B98A6A"].map((cor,i) => r(296,236-i*9,98,9,{id:"cm"+i, cls:"an-h", fill:cor})).join(""))+
        g({id:"concha", cls:"an-h"}, p("M330,218 q6,-8 12,0 q-6,4 -12,0 z",{fill:"#F4F0E6", stroke:"#5A4A3A", sw:1}))+
        g({id:"press", cls:"an-h"}, p("M320,150 L320,190 M345,150 L345,190 M370,150 L370,190",{stroke:"#C0392B", sw:3, "marker-end":"url(#geo-ponta)"}))+PONTA+
        t(345,140,"",{id:"rot", fs:12, fill:"#C0392B"})+t(10,24,"",{id:"etapa", ta:"start", fs:14}),
      passos:[
        {t:"<b>Meteorização</b>: a água, o gelo, as variações de temperatura e as raízes vão abrindo fendas e alterando a rocha, no sítio onde ela está.", f:S => { S.mostrar("#fendas"); S.texto("#etapa","1. Meteorização"); }},
        {t:"<b>Erosão</b>: os pedaços soltos são arrancados e removidos pela chuva, pelo vento ou pela gravidade.", f:S => { S.mostrar("#fendas, #blocos"); S.texto("#etapa","2. Erosão"); }},
        {t:"<b>Transporte</b>: o rio leva os sedimentos. Os maiores rolam no fundo; os mais finos vão em suspensão, para mais longe.", dur:7000, f:S => {
          S.mostrar("#fendas, #blocos"); S.texto("#etapa","3. Transporte");
          S.fluxo("#fT", RIO, 5, 4, "#8A6A4A", 4); S.fluxo("#fT", RIO, 8, 3, "#C9A27A", 2.2); }},
        {t:"<b>Sedimentação</b>: quando a água perde velocidade, os sedimentos depositam-se em camadas — os <b>estratos</b>. Os de baixo depositaram-se primeiro.", dur:7000, f:S => {
          S.texto("#etapa","4. Sedimentação"); S.onda(["#cm0","#cm1","#cm2","#cm3"], "an-pulse", 400); S.mostrar("#cm0, #cm1, #cm2, #cm3, #concha"); }},
        {t:"<b>Diagénese</b>: com o peso das camadas de cima, os sedimentos são <b>compactados</b> e <b>cimentados</b>. Ao fim de muito tempo, formam uma <b>rocha sedimentar</b> — às vezes com fósseis lá dentro!", f:S => {
          S.mostrar("#cm0, #cm1, #cm2, #cm3, #concha, #press"); S.texto("#etapa","5. Diagénese"); S.texto("#rot","rocha sedimentar");
          S.attr("#cm0","fill","#9A7A5A"); S.attr("#cm1","fill","#A8865E"); S.attr("#cm2","fill","#B49068"); }}
      ]});
  })();

  /* ===================== g3 — como se forma um fóssil ===================== */
  (function(){
    const peixe = g({id:"peixe", style:pos(200,60)},
      g({id:"corpo"}, p("M-40,0 C-20,-22 20,-22 34,0 C20,22 -20,22 -40,0 Z",{fill:"#7FA7D9", stroke:"#2F63A0", sw:2})+p("M34,0 L52,-14 L52,14 Z",{fill:"#7FA7D9", stroke:"#2F63A0", sw:2})+c(-26,-4,3,{fill:"#222"}))+
      g({id:"esq", cls:"an-h"}, l(-36,0,40,0,{stroke:"#F4F0E6", sw:3})+range(0,7).map(i => l(-22+i*9,-12,-22+i*9,12,{stroke:"#F4F0E6", sw:2})).join("")+c(-30,0,7,{fill:"none", stroke:"#F4F0E6", sw:2})+p("M40,0 L52,-12 M40,0 L52,12",{stroke:"#F4F0E6", sw:2})));
    A.def({id:"fossilizacao", mundo:"g3", cor:"m3", titulo:"Como se forma um fóssil",
      cena: () =>
        r(0,0,400,180,{id:"agua", fill:"#5FA3E0", op:0.55})+r(0,180,400,80,{fill:"#C9A27A"})+
        r(0,150,400,30,{id:"s1", cls:"an-h", fill:"#D9B98A"})+r(0,120,400,30,{id:"s2", cls:"an-h", fill:"#E3C79A"})+r(0,90,400,30,{id:"s3", cls:"an-h", fill:"#D4B07E"})+
        peixe+
        r(0,0,400,90,{id:"ceu", cls:"an-h", fill:"var(--m3-bg)"})+
        g({id:"pale", cls:"an-h"}, t(300,96,"🧑‍🔬",{fs:30})+t(300,72,"paleontóloga",{fs:11}))+
        t(10,22,"",{id:"etapa", ta:"start", fs:14, fill:"#1F2B3A"})+t(10,40,"",{id:"tempo", ta:"start", fs:11, fw:400, fill:"#1F2B3A"}),
      passos:[
        {t:"Um peixe morre e afunda até ao fundo de um lago ou do mar.", f:S => { S.mover("#peixe","translate(200px,164px)"); S.texto("#etapa","1. Morte"); }},
        {t:"Tem de ser <b>coberto depressa por sedimentos</b> (areia, lama). Assim fica longe do oxigénio e dos animais que o comeriam.", f:S => {
          S.mover("#peixe","translate(200px,164px)"); S.mostrar("#s1"); S.texto("#etapa","2. Soterramento rápido"); }},
        {t:"As <b>partes moles</b> decompõem-se; ficam as <b>partes duras</b> — os ossos e as escamas.", f:S => {
          S.mover("#peixe","translate(200px,164px)"); S.mostrar("#s1, #esq"); S.esconder("#corpo"); S.texto("#etapa","3. Ficam as partes duras"); }},
        {t:"Mais camadas cobrem-no e tornam-se rocha. Ao longo de milhões de anos, <b>minerais substituem os ossos</b>: é a <b>mineralização</b>.", f:S => {
          S.mover("#peixe","translate(200px,164px)"); S.esconder("#corpo"); S.mostrar("#s1, #s2, #s3, #esq"); S.qa("#esq *").forEach(e => e.setAttribute("stroke","#6A6A6A"));
          S.texto("#etapa","4. Mineralização"); S.texto("#tempo","milhões de anos…"); }},
        {t:"Muito mais tarde, a <b>erosão</b> desgasta as rochas de cima e o fóssil fica à vista. Uma paleontóloga encontra-o e estuda-o.", f:S => {
          S.mover("#peixe","translate(200px,164px)"); S.esconder("#corpo, #s3, #s2, #agua"); S.mostrar("#s1, #esq, #ceu, #pale"); S.qa("#esq *").forEach(e => e.setAttribute("stroke","#6A6A6A"));
          S.texto("#etapa","5. Erosão e descoberta"); S.texto("#tempo",""); }}
      ]});
  })();

  /* ===================== g4 — a história da Terra num dia ===================== */
  (function(){
    const CX = 120, CY = 135, R = 100;
    const hora = ma => (4600 - ma) / 4600 * 24;
    const ang = h => -90 + h/24*360;
    const pt = (rr, a) => [(CX + rr*Math.cos(a*Math.PI/180)).toFixed(1), (CY + rr*Math.sin(a*Math.PI/180)).toFixed(1)];
    const hhmm = h => { let tot = Math.round(h*3600), hh = Math.floor(tot/3600), mm = Math.floor(tot%3600/60), ss = tot%60; return String(hh%24).padStart(2,"0")+":"+String(mm).padStart(2,"0")+(hh===23 && mm===59 ? ":"+String(ss).padStart(2,"0") : ""); };
    const EV = [[4600,"🌍","A Terra forma-se"],[3500,"🦠","Primeiras bactérias"],[2400,"🫧","Oxigénio no ar"],[541,"🐚","Animais complexos"],[470,"🌿","Plantas em terra"],[230,"🦕","Primeiros dinossauros"],[66,"☄️","Fim dos dinossauros"],[0.3,"🧍","Humanos modernos"]];
    A.def({id:"tempo24h", mundo:"g4", cor:"m4", titulo:"A história da Terra num só dia",
      cena: () =>
        c(CX,CY,R,{fill:"var(--surface)", stroke:"currentColor", sw:2})+
        range(0,24).map(h => { const a = ang(h), p1 = pt(R-6,a), p2 = pt(R,a); return l(p1[0],p1[1],p2[0],p2[1],{sw:h%6 ? 1 : 3}); }).join("")+
        [["0h",0],["6h",6],["12h",12],["18h",18]].map(q => { const pp = pt(R-20, ang(q[1])); return t(pp[0], +pp[1]+4, q[0],{fs:10}); }).join("")+
        g({id:"pont", style:"transform-origin:"+CX+"px "+CY+"px; transform:rotate(0deg)"}, l(CX,CY,CX,CY-R+12,{stroke:"#C0392B", sw:3, lc:"round"}))+c(CX,CY,5,{fill:"#C0392B"})+
        EV.map((e,i) => { const pp = pt(R+12, ang(hora(e[0]))); return g({id:"e"+i, cls:"an-h"}, t(pp[0], +pp[1]+5, e[1],{fs:14})); }).join("")+
        EV.map((e,i) => g({id:"l"+i, cls:"an-h"}, t(240,28+i*28,hhmm(hora(e[0])),{ta:"start", fs:11.5, fill:"#C0392B"})+t(290,28+i*28,e[1]+" "+e[2],{ta:"start", fs:10})+
          t(290,40+i*28,(e[0] >= 1 ? "há "+e[0]+" M.a." : "há 300 mil anos"),{ta:"start", fs:9, fw:400}))).join(""),
      passos:[
        {t:"Imagina que os <b>4600 milhões de anos</b> da Terra cabiam num só dia de 24 horas. À <b>meia-noite</b>, a Terra forma-se.", f:S => { S.mostrar("#e0, #l0"); }},
        {t:"Por volta das <b>05:44</b> aparecem os primeiros seres vivos: bactérias, no mar. Só às <b>11:29</b> há bastante oxigénio no ar, graças à fotossíntese.", f:S => {
          S.mostrar("#e0, #l0, #e1, #l1, #e2, #l2"); S.mover("#pont","rotate("+(hora(2400)/24*360)+"deg)"); }},
        {t:"Durante quase todo o «dia» só há seres muito simples. Os animais complexos só aparecem às <b>21:10</b> e as plantas chegam à terra às <b>21:33</b>.", f:S => {
          S.mostrar("#e0, #l0, #e1, #l1, #e2, #l2, #e3, #l3, #e4, #l4"); S.mover("#pont","rotate("+(hora(470)/24*360)+"deg)"); }},
        {t:"Os <b>dinossauros</b> aparecem às <b>22:48</b> e desaparecem às <b>23:39</b>, com o impacto de um asteroide.", f:S => {
          S.mostrar(range(0,7).map(i => "#e"+i+", #l"+i)); S.mover("#pont","rotate("+(hora(66)/24*360)+"deg)"); }},
        {t:"E os <b>humanos modernos</b>? Só aparecem às <b>23:59:54</b> — nos últimos 6 segundos do dia!", f:S => {
          S.mostrar(range(0,8).map(i => "#e"+i+", #l"+i)); S.mover("#pont","rotate(359.9deg)"); S.cls("#l7","an-pulse"); }}
      ]});
  })();

  /* ===================== g5 — o interior da Terra ===================== */
  (function(){
    const CX = 150, CY = 250;
    const camada = (id, rr, cor) => p("M"+(CX-rr)+","+CY+" A"+rr+","+rr+" 0 0 1 "+(CX+rr)+","+CY+" Z",{id:id, fill:cor});
    const lin = (y, x1, txt, sub, id) => g({id:id, cls:"an-h"}, l(x1,y,294,y,{sw:1, op:0.6})+t(300,y+4,txt,{ta:"start", fs:12})+t(300,y+18,sub,{ta:"start", fs:9.5, fw:400}));    A.def({id:"terra-camadas", mundo:"g5", cor:"m5", titulo:"Uma viagem ao centro da Terra",
      cena: () =>
        camada("cr",140,"#8A6A4A")+camada("ma",134,"#E0923A")+camada("ne",76,"#F5C342")+camada("ni",27,"#FFF1A8")+
        g({id:"ondas", cls:"an-h"}, p("M"+(CX-136)+","+(CY-30)+" Q"+(CX)+","+(CY-150)+" "+(CX+128)+","+(CY-50),{stroke:"#2F63A0", sw:2.5, da:"6 5"})+
          p("M"+(CX-136)+","+(CY-30)+" Q"+(CX-100)+","+(CY-70)+" "+(CX-70)+","+(CY-30),{stroke:"#C0392B", sw:2.5, da:"6 5"})+t(CX-70,CY-34,"✕",{fs:14, fill:"#C0392B"}))+
        lin(CY-138,CX+30,"Crosta","5–70 km · rochas sólidas","l1")+
        lin(CY-105,CX+60,"Manto","até ≈ 2900 km · sólido mas «mole»","l2")+
        lin(CY-55,CX+40,"Núcleo externo","até ≈ 5150 km · ferro e níquel líquidos","l3")+
        lin(CY-14,CX+20,"Núcleo interno","até ≈ 6370 km · sólido, ≈ 5000 °C","l4")+
        g({id:"lito", cls:"an-h"}, r(250,6,146,44,{rx:10, fill:"var(--surface)", stroke:"var(--border)"})+t(323,24,"litosfera = crosta +",{fs:10.5})+t(323,40,"topo do manto (as placas)",{fs:10.5})),
      passos:[
        {t:"Se cortássemos a Terra ao meio, veríamos camadas. A de fora é a <b>crosta</b>, muito fina: 5 a 10 km nos oceanos e 30 a 70 km nos continentes.", f:S => { S.mostrar("#l1"); S.cls("#cr","an-pulse"); }},
        {t:"Por baixo está o <b>manto</b>, a camada mais espessa, até cerca de 2900 km. É sólido, mas deforma-se muito lentamente.", f:S => { S.cls("#cr","an-pulse",false); S.mostrar("#l1, #l2"); S.cls("#ma","an-pulse"); }},
        {t:"No centro está o <b>núcleo</b>, de ferro e níquel: o <b>externo</b> é líquido e o <b>interno</b> é sólido — por causa da enorme pressão.", f:S => { S.cls("#ma","an-pulse",false); S.mostrar("#l1, #l2, #l3, #l4"); }},
        {t:"Como sabemos? Pelas <b>ondas sísmicas</b>: umas atravessam tudo, outras (as ondas S) não passam pelo núcleo externo — e foi assim que se descobriu que ele é líquido.", f:S => { S.mostrar("#l1, #l2, #l3, #l4, #ondas"); }},
        {t:"A crosta e a parte de cima do manto formam a <b>litosfera</b>, rígida, partida em <b>placas tectónicas</b> que se movem sobre a astenosfera.", f:S => { S.mostrar("#l1, #l2, #l3, #l4, #lito"); S.cls("#cr","an-pulse"); }}
      ]});
  })();

  /* ===================== g5 — os limites das placas ===================== */
  (function(){
    const placa = (id, x, w, cor) => r(x,110,w,40,{id:id, fill:cor, stroke:"#5A4A3A", sw:1.5});
    A.def({id:"placas", mundo:"g5", cor:"m5", titulo:"Placas tectónicas: como se encontram",
      cena: () =>
        r(0,150,400,110,{fill:"#E0923A", op:0.45})+t(10,246,"astenosfera",{ta:"start", fs:11, fw:400})+
        g({id:"div"},
          g({id:"dA", style:pos(0,0)}, placa("pa",10,180,"#9C8A6A"))+g({id:"dB", style:pos(0,0)}, placa("pb",210,180,"#A89878"))+
          g({id:"mag"})+t(200,96,"dorsal: nasce crosta nova",{id:"tD", fs:12}))+
        g({id:"conv", cls:"an-h"},
          r(220,100,170,50,{fill:"#A89878", stroke:"#5A4A3A", sw:1.5})+t(305,128,"placa continental",{fs:11})+
          p("M150,92 L175,60 L200,92 Z",{fill:"#8A6A4A"})+p("M250,100 L280,62 L310,100 Z",{fill:"#8A6A4A"})+t(280,52,"🌋",{fs:18})+
          g({id:"cA", style:pos(0,0)}, p("M10,110 L210,110 C230,112 250,140 270,200 L250,210 C232,160 215,150 200,150 L10,150 Z",{fill:"#6E7F8F", stroke:"#3A4A5A", sw:1.5})+t(90,135,"placa oceânica",{fs:11, fill:"#fff"}))+
          t(250,232,"subducção",{fs:12, fill:"#C0392B"}))+
        g({id:"trans", cls:"an-h"},
          r(30,40,340,80,{fill:"#A89878", stroke:"#5A4A3A", sw:1.5})+r(30,120,340,80,{fill:"#9C8A6A", stroke:"#5A4A3A", sw:1.5})+
          g({id:"tA", style:pos(0,0)}, range(0,5).map(i => r(50+i*70,60,30,30,{fill:"#C9B79C", stroke:"#5A4A3A"})).join(""))+
          g({id:"tB", style:pos(0,0)}, range(0,5).map(i => r(50+i*70,150,30,30,{fill:"#C9B79C", stroke:"#5A4A3A"})).join(""))+
          t(200,30,"vista de cima: deslizam lado a lado",{fs:11})+t(200,222,"💥 sismos",{id:"tsis", cls:"an-h", fs:14})),
      passos:[
        {t:"A litosfera está partida em <b>placas</b>, que se movem sobre a astenosfera. O que acontece nos limites depende de como se movem.", f:S => {}},
        {t:"<b>Limite divergente</b>: as placas <b>afastam-se</b>. O magma sobe e solidifica, formando crosta nova — é o que acontece na dorsal médio-atlântica.", dur:7000, f:S => {
          S.mover("#dA","translate(-30px,0px)"); S.mover("#dB","translate(30px,0px)"); S.fluxo("#mag","M200,250 L200,118",6,2.6,"#E0453A",5); }},
        {t:"<b>Limite convergente</b>: as placas <b>aproximam-se</b>. A placa oceânica, mais densa, mergulha por baixo da continental — <b>subducção</b> — e formam-se montanhas, vulcões e sismos.", dur:7000, f:S => {
          S.esconder("#div"); S.mostrar("#conv"); S.mover("#cA","translate(26px,8px)"); }},
        {t:"<b>Limite transformante</b>: as placas <b>deslizam lado a lado</b>, sem se criar nem destruir crosta. Os blocos prendem-se e soltam-se de repente: sismos!", dur:7000, f:S => {
          S.esconder("#div, #conv"); S.mostrar("#trans"); S.mover("#tA","translate(-40px,0px)"); S.mover("#tB","translate(40px,0px)");
          S.depois(() => S.mostrar("#tsis"), 1400); if(S.instant) S.mostrar("#tsis"); }},
        {t:"Experimenta: escolhe um tipo de limite.", f:S => {
          const box = S.controlo('<button type="button" data-k="div">↔️ Divergente</button> <button type="button" data-k="conv">➡️⬅️ Convergente</button> <button type="button" data-k="trans">⇅ Transformante</button>');
          if(!box) return;
          box.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
            const k = b.dataset.k; ["div","conv","trans"].forEach(x => { if(x === k) S.mostrar("#"+x); else S.esconder("#"+x); });
            S.mover("#dA, #dB, #cA, #tA, #tB","translate(0px,0px)"); S.esconder("#tsis"); S.limpar("#mag");
            setTimeout(() => {
              if(k === "div"){ S.mover("#dA","translate(-30px,0px)"); S.mover("#dB","translate(30px,0px)"); S.fluxo("#mag","M200,250 L200,118",6,2.6,"#E0453A",5); }
              if(k === "conv") S.mover("#cA","translate(26px,8px)");
              if(k === "trans"){ S.mover("#tA","translate(-40px,0px)"); S.mover("#tB","translate(40px,0px)"); setTimeout(() => S.mostrar("#tsis"), 1400); }
            }, 60);
          })); }}
      ]});
  })();

  /* ===================== g6 — dentro de um vulcão ===================== */
  (function(){
    const CHAMINE = "M200,236 L200,70";
    A.def({id:"vulcao", mundo:"g6", cor:"m6", titulo:"Dentro de um vulcão",
      cena: () =>
        r(0,0,400,260,{fill:"var(--m3-bg)"})+
        p("M40,200 L170,70 L230,70 L360,200 Z",{fill:"#8A6A4A", stroke:"#5A3B28", sw:2})+r(0,200,400,60,{fill:"#6A5040"})+
        p("M190,72 L190,236 M210,72 L210,236",{stroke:"#5A3B28", sw:2})+r(191,72,18,166,{id:"chamine", fill:"#5A3B28"})+
        p("M140,236 C140,214 260,214 260,236 C260,256 140,256 140,236 Z",{id:"camara", fill:"#E0453A"})+
        g({id:"fM"})+g({id:"lava"})+g({id:"cinza", cls:"an-h"}, [[200,40,18],[180,22,14],[222,24,16],[200,6,20],[168,6,12],[234,4,14]].map(q => c(q[0],q[1],q[2],{fill:"#7A7A7A", op:0.85})).join(""))+g({id:"bombas"})+
        g({id:"geiser", cls:"an-h"}, p("M330,200 L330,120",{stroke:"#9CC9EE", sw:6, lc:"round"})+c(330,112,10,{fill:"#DDEEFF"})+t(330,96,"géiser",{fs:11}))+
        g({id:"lb", cls:"an-h"}, t(276,236,"câmara magmática",{ta:"start", fs:11, fill:"#fff"})+t(216,150,"chaminé",{ta:"start", fs:11, fill:"#fff"})+t(240,64,"cratera",{ta:"start", fs:11})+t(80,160,"cone",{fs:11, fill:"#fff"}))+
        t(10,22,"",{id:"tipo", ta:"start", fs:14}),
      passos:[
        {t:"Debaixo do vulcão há uma <b>câmara magmática</b>, cheia de <b>magma</b>: rocha fundida, com gases.", f:S => { S.mostrar("#lb"); S.cls("#camara","an-pulse"); }},
        {t:"O magma é menos denso do que as rochas à volta e sobe pela <b>chaminé</b> até à <b>cratera</b>.", f:S => { S.mostrar("#lb"); S.fluxo("#fM", CHAMINE, 6, 2.4, "#F08A3C", 5); }},
        {t:"<b>Erupção efusiva</b>: a lava é fluida, com poucos gases, e <b>escorre</b> pelas encostas, como no Havai.", dur:7000, f:S => {
          S.mostrar("#lb"); S.fluxo("#fM", CHAMINE, 6, 2.4, "#F08A3C", 5); S.texto("#tipo","Efusiva");
          S.fluxo("#lava","M188,72 L120,140 L60,198",6,3,"#F05A28",5); S.fluxo("#lava","M212,72 L280,140 L340,198",6,3,"#F05A28",5); }},
        {t:"<b>Erupção explosiva</b>: a lava é viscosa e prende os gases, que explodem — saem nuvens de <b>cinzas</b> e <b>bombas vulcânicas</b> (piroclastos).", dur:7000, f:S => {
          S.mostrar("#lb, #cinza"); S.limpar("#lava"); S.fluxo("#fM", CHAMINE, 8, 1.6, "#F08A3C", 5); S.texto("#tipo","Explosiva");
          S.fluxo("#bombas","M200,70 C170,10 120,20 90,120",3,2.4,"#3A2A1A",5); S.fluxo("#bombas","M200,70 C240,0 300,30 320,140",3,2.6,"#3A2A1A",5); }},
        {t:"Mesmo sem erupções há <b>vulcanismo secundário</b>: fumarolas, nascentes termais e <b>géiseres</b> — como nas Furnas, nos Açores.", f:S => { S.mostrar("#lb, #geiser"); S.cls("#geiser","an-pulse"); S.texto("#tipo",""); }}
      ]});
  })();

  /* ===================== g7 — um sismo ===================== */
  (function(){
    const HX = 150, HY = 200;
    A.def({id:"sismo", mundo:"g7", cor:"m7", titulo:"Anatomia de um sismo",
      cena: () =>
        r(0,0,400,100,{fill:"var(--m3-bg)"})+r(0,100,400,160,{fill:"#C9B79C"})+
        p("M110,100 L190,260",{id:"falha", stroke:"#5A3B28", sw:3, da:"8 5"})+t(196,252,"falha",{ta:"start", fs:11})+
        g({id:"casa", cls:""}, r(126,62,48,38,{fill:"#F4F0E6", stroke:"#5A4A3A", sw:2})+p("M120,64 L150,40 L180,64 Z",{fill:"#C0392B"}))+
        g({id:"ondas", cls:"an-h"}, [0,1,2].map(i => c(HX,HY,30,{cls:"onda-s", fill:"none", stroke:"#C0392B", sw:2.5, style:"animation-delay:"+(i*0.8)+"s"})).join(""))+
        g({id:"hipo", cls:"an-h"}, t(HX,HY+6,"✳",{fs:22, fill:"#C0392B"})+t(HX+18,HY+22,"hipocentro (foco)",{ta:"start", fs:11, fill:"#C0392B"}))+
        g({id:"epi", cls:"an-h"}, l(HX,HY-10,HX,104,{stroke:"#C0392B", sw:1.5, da:"4 4"})+c(HX,100,5,{fill:"#C0392B"})+t(HX+8,92,"epicentro",{ta:"start", fs:11, fill:"#C0392B"}))+
        g({id:"sismog", cls:"an-h"}, r(250,14,140,70,{rx:8, fill:"var(--surface)", stroke:"var(--border)"})+t(320,30,"sismograma",{fs:10.5})+
          p("M258,58 L272,58 L276,50 L280,66 L284,40 L288,76 L292,44 L296,70 L300,52 L304,62 L310,56 L318,60 L330,57 L382,58",{id:"traco", cls:"seta", pl:1, stroke:"#2F63A0", sw:1.5}))+
        g({id:"bpa", cls:"an-h"}, r(230,110,164,110,{rx:12, fill:"var(--surface)", stroke:"var(--border)"})+
          t(312,138,"⬇️ Baixar",{fs:13})+t(312,168,"🛡️ Proteger",{fs:13})+t(312,198,"⏳ Aguardar",{fs:13})),
      passos:[
        {t:"As rochas vão acumulando tensão. Quando não aguentam mais, <b>partem-se</b> e deslocam-se ao longo de uma <b>falha</b>, libertando energia de repente.", f:S => S.cls("#falha","an-pulse")},
        {t:"O ponto no interior onde o sismo começa é o <b>hipocentro</b> (ou foco). A energia espalha-se em todas as direções, em <b>ondas sísmicas</b>.", f:S => { S.mostrar("#hipo, #ondas"); }},
        {t:"O ponto à superfície mesmo por cima do hipocentro é o <b>epicentro</b> — em geral, onde o sismo se sente com mais força.", f:S => { S.mostrar("#hipo, #ondas, #epi"); S.cls("#casa","treme"); }},
        {t:"Os <b>sismógrafos</b> registam as ondas num <b>sismograma</b>. A <b>magnitude</b> mede a energia; a <b>intensidade</b> mede os efeitos em cada lugar.", f:S => { S.mostrar("#hipo, #ondas, #epi, #sismog"); S.cls("#traco","draw"); }},
        {t:"Durante um sismo: <b>baixar, proteger, aguardar</b>. Baixa-te, protege a cabeça debaixo de uma mesa resistente e espera que pare, longe de janelas.", f:S => { S.mostrar("#hipo, #epi, #bpa"); S.cls("#casa","treme"); }}
      ]});
  })();

  /* ===================== g8 — o ciclo das rochas ===================== */
  (function(){
    const NO = {mag:[200,268,"🔥 Magma","#E0453A"], ign:[70,160,"Rocha magmática","#9C8A6A"], sed:[110,40,"Sedimentos","#D9B98A"], sr:[290,40,"Rocha sedimentar","#C9A27A"], met:[330,160,"Rocha metamórfica","#7F6A9C"]};
    const no = k => g({id:"n"+k}, r(NO[k][0]-62,NO[k][1]-18,124,36,{rx:12, fill:"var(--surface)", stroke:NO[k][3], sw:3})+t(NO[k][0],NO[k][1]+5,NO[k][2],{fs:12}));
    /* id, arrow path, label lines, label x, label y, text-anchor */
    const SETAS = [
      ["a1","M140,268 C100,264 72,230 70,180",["arrefecimento e","solidificação","ex.: granito, basalto"],106,224,"start"],
      ["a2","M62,142 C52,112 60,82 84,60",["meteorização","e erosão"],80,100,"start"],
      ["a3","M172,40 L222,40",["diagénese","ex.: arenito, calcário"],200,72,"middle"],
      ["a4","M300,58 C328,82 338,112 334,142",["metamorfismo","(pressão e temperatura)","ex.: mármore, xisto"],318,96,"end"],
      ["a5","M330,180 C318,226 288,256 262,264",["fusão"],290,226,"end"]
    ];    A.def({id:"ciclo-rochas", mundo:"g8", cor:"m8", titulo:"O ciclo das rochas", h:292,
      cena: () => PONTA + Object.keys(NO).map(no).join("") +
        SETAS.map(s => seta(s[0], s[1])+g({id:"t"+s[0], cls:"an-h"}, s[2].map((linha, i) => t(s[3], s[4]+i*13, linha,{ta:s[5], fs:i < 2 && !/^ex/.test(linha) ? 10.5 : 9, fw:/^ex/.test(linha) ? 400 : 700, fill:/^ex/.test(linha) ? "currentColor" : "#C0392B"})).join(""))).join("")+
        g({id:"atalhos", cls:"an-h"}, p("M134,160 L266,160",{stroke:"#7F6A9C", sw:2, da:"6 5"})+t(200,152,"atalho: magmática → metamórfica",{fs:9, fw:400})),      passos:[
        {t:"O <b>magma</b> arrefece e solidifica: formam-se <b>rochas magmáticas</b> — o granito (em profundidade) ou o basalto (à superfície).", f:S => { S.cls("#a1","draw"); S.mostrar("#ta1"); }},
        {t:"À superfície, a <b>meteorização</b> e a <b>erosão</b> desfazem as rochas em <b>sedimentos</b>, que são transportados e depositados.", f:S => { S.cls("#a1, #a2","draw"); S.mostrar("#ta1, #ta2"); }},
        {t:"Pela <b>diagénese</b> (compactação e cimentação), os sedimentos transformam-se em <b>rochas sedimentares</b>.", f:S => { S.cls("#a1, #a2, #a3","draw"); S.mostrar("#ta1, #ta2, #ta3"); }},
        {t:"Enterradas a grande profundidade, com <b>pressão</b> e <b>temperatura</b> elevadas, as rochas transformam-se sem fundir: <b>metamorfismo</b> → <b>rochas metamórficas</b>.", f:S => { S.cls("#a1, #a2, #a3, #a4","draw"); S.mostrar("#ta1, #ta2, #ta3, #ta4"); }},
        {t:"Com temperaturas ainda maiores, a rocha <b>funde</b> e volta a ser magma. O ciclo recomeça — em milhões de anos!", f:S => { S.cls("#a1, #a2, #a3, #a4, #a5","draw"); S.mostrar("#ta1, #ta2, #ta3, #ta4, #ta5"); }},
        {t:"E há atalhos: <b>qualquer rocha</b> pode ser erodida, ou transformada em metamórfica, ou fundida. Não é preciso dar a volta completa.", f:S => { S.cls("#a1, #a2, #a3, #a4, #a5","draw"); S.mostrar("#ta1, #ta2, #ta3, #ta4, #ta5, #atalhos"); }}
      ]});
  })();
})();
