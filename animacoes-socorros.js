/* Animações do Mundo 9 de Ciências — Primeiros Socorros.
   Segundo as recomendações do INEM, do Conselho Europeu de Ressuscitação (ERC 2025), da Federação Internacional da Cruz Vermelha (IFRC 2025) e da Cruz Vermelha. */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;

  /* ---------------- ligar 112 ---------------- */
  (function(){
    const cartao = (id, y, ic, tit, sub) => g({id:id, cls:"an-h"},
      r(176,y,214,40,{rx:10, fill:"var(--surface)", stroke:"#C0392B", sw:2})+t(192,y+26,ic,{fs:18})+
      t(212,y+18,tit,{ta:"start", fs:13})+t(212,y+33,sub,{ta:"start", fs:10, fw:400}));
    A.def({id:"chamada112", mundo:"c9", cor:"m4", titulo:"Ligar 112: a chamada que salva",
      cena: () =>
        g({id:"tel"}, r(30,16,120,228,{rx:20, fill:"#2B2924"})+r(40,40,100,170,{rx:8, fill:"#EAF2FB"})+c(90,226,8,{fill:"#555"}))+
        t(90,110,"",{id:"num", fs:30, fill:"#1F2B3A"})+t(90,140,"",{id:"est", fs:11, fill:"#1F2B3A"})+
        g({id:"perigo"}, t(282,110,"⚠️",{fs:46})+t(282,150,"Há perigo para ti?",{fs:13})+t(282,168,"Afasta-te e chama um adulto",{fs:11, fw:400}))+
        cartao("k1",14,"📍","Onde?","morada, ou um sítio que se veja")+
        cartao("k2",62,"❓","O quê?","o que aconteceu")+
        cartao("k3",110,"👤","Quem?","idade · está acordado? respira?")+
        cartao("k4",158,"🔢","Quantos?","quantas pessoas precisam de ajuda")+
        cartao("k5",206,"📞","Não desligues primeiro","responde e segue as instruções"),
      passos:[
        {t:"Primeiro, a <b>segurança</b>: há perigo para ti (trânsito, fogo, eletricidade)? Se houver, afasta-te. Chama um adulto.", f:S => S.cls("#perigo","an-pulse")},
        {t:"Liga <b>1-1-2</b>, o número europeu de emergência. É <b>gratuito</b> e funciona mesmo sem saldo.", f:S => {
          S.esconder("#perigo");
          const dig = ["1","11","112"];
          dig.forEach((d, i) => { const fz = () => S.texto("#num", d); if(S.instant) fz(); else S.depois(fz, 300 + i*700); });
          const lig = () => { S.texto("#est","A ligar…"); S.cls("#tel","an-pulse"); };
          if(S.instant) lig(); else S.depois(lig, 2600); }},
        {t:"<b>Onde?</b> Diz a morada — ou um sítio que se veja: uma loja, uma escola, uma praça. Na rua, procura a placa com o nome.", f:S => {
          S.esconder("#perigo"); S.texto("#num","112"); S.texto("#est","Em chamada"); S.mostrar("#k1"); }},
        {t:"<b>O quê?</b> Diz o que aconteceu, com palavras simples: «uma pessoa caiu e não acorda», «está a sair muito sangue».", f:S => S.mostrar("#k2")},
        {t:"<b>Quem</b> e <b>quantos</b>? A idade aproximada, se está acordado, se respira — e quantas pessoas precisam de ajuda.", f:S => S.mostrar("#k3, #k4")},
        {t:"Responde às perguntas com calma e <b>só desliga quando o operador disser</b>. Ele pode ensinar-te o que fazer até a ajuda chegar.", f:S => { S.mostrar("#k5"); S.cls("#k5","an-pulse"); }}
      ]});
  })();

  /* ---------------- posição lateral de segurança: vista de cima, com braços e pernas que se mexem ----------------
     Cada braço e perna é um grupo que roda à volta da articulação (ombro, cotovelo, anca, joelho);
     a transição CSS faz o movimento suave. No fim, a imagem real da posição. Segundo o ERC (2021). */
  (function(){
    const CAMISOLA = "#6FA0D8", CALCAS = "#4A5A78", PELE = "#F4C7B0", CONTORNO = "#B5704F", VERM = "#C0392B";
    const seg = (x1, y1, x2, y2, cor, w) => l(x1,y1,x2,y2,{stroke:cor, sw:w, lc:"round"});
    const art = (id, ox, oy, inner) => g({id:id, style:"transform-origin:"+ox+"px "+oy+"px; transform:rotate(0deg)"}, inner);
    const seta = (id, d) => p(d,{id:id, cls:"seta", pl:1, stroke:VERM, sw:3, "marker-end":"url(#pls-ponta)"});
    A.def({id:"pls", mundo:"c9", cor:"m4", titulo:"A posição lateral de segurança (PLS)",
      cena: () =>
        '<defs><marker id="pls-ponta" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="'+VERM+'"/></marker></defs>'+
        r(0,0,400,260,{fill:"var(--m3-bg)", op:0.45})+
        t(8,18,"vista de cima",{ta:"start", fs:11, fw:400})+
        /* you, kneeling beside the person */
        g({id:"tu"}, el2(70,140,26,38,"#E0923A")+c(70,104,14,{fill:"#5A3B28"})+c(70,106,11,{fill:PELE})+t(70,200,"tu, de joelhos",{fs:11}))+
        /* the person, on their back */
        g({id:"costas"},
          art("pD", 210,168, seg(210,168,214,206,CALCAS,16)+art("sD", 214,206, seg(214,206,214,240,CALCAS,15)+c(214,246,7,{fill:"#333"})))+
          seg(190,168,186,240,CALCAS,16)+c(186,246,7,{fill:"#333"})+
          r(176,142,48,30,{rx:10, fill:CALCAS})+r(176,54,48,94,{rx:14, fill:CAMISOLA, stroke:"#3E6FB0", sw:1.5})+
          art("bE", 180,62, seg(180,62,172,108,CAMISOLA,13)+art("aE", 172,108, seg(172,108,168,146,PELE,10)+c(168,150,6,{fill:PELE, stroke:CONTORNO, sw:1})))+
          art("bD", 220,62, seg(220,62,228,108,CAMISOLA,13)+art("aD", 228,108, seg(228,108,232,146,PELE,10)+c(232,150,6,{fill:PELE, stroke:CONTORNO, sw:1})))+
          c(200,36,16,{fill:PELE, stroke:CONTORNO, sw:2})+p("M186,30 Q200,14 214,30",{stroke:"#5A3B28", sw:6, lc:"round"})+
          t(250,40,"👀👂",{id:"olhar", cls:"an-h", ta:"start", fs:18}))+
        /* the person, on their side (after rolling towards you) */
        g({id:"lado", cls:"an-h", tr:"translate(46,6)"},
          seg(246,160,336,174,CALCAS,16)+c(342,175,7,{fill:"#333"})+
          seg(244,150,282,112,CALCAS,16)+seg(282,112,318,152,CALCAS,15)+c(322,156,7,{fill:"#333"})+
          r(212,136,40,32,{rx:10, fill:CALCAS})+r(122,134,96,36,{rx:14, fill:CAMISOLA, stroke:"#3E6FB0", sw:1.5})+
          seg(140,164,172,204,CAMISOLA,12)+
          seg(136,140,118,122,CAMISOLA,12)+seg(118,122,104,140,PELE,10)+
          c(102,150,16,{fill:PELE, stroke:CONTORNO, sw:2})+p("M90,140 Q96,128 110,132",{stroke:"#5A3B28", sw:6, lc:"round"})+
          t(282,96,"joelho dobrado: não deixa rolar",{fs:10.5, fw:400})+t(72,182,"mão sob a face",{fs:10.5, fw:400})+
          t(60,128,"boca para baixo",{fs:10.5, fw:400}))+
        g({id:"foto", cls:"an-h"}, r(14,24,372,200,{rx:12, fill:"#fff", stroke:"var(--border)"})+
          '<image href="img/c9/pls-final.jpg" x="20" y="30" width="360" height="190" preserveAspectRatio="xMidYMid meet"/>'+
          t(200,246,"Assim fica a posição lateral de segurança",{fs:13}))+
        seta("s1","M160,80 C140,70 130,60 134,40")+
        seta("s2","M236,100 C220,90 205,80 192,60")+
        seta("s3","M248,200 C262,190 262,176 250,170")+
        seta("s4","M300,60 C330,100 330,170 290,214")+
        t(392,24,"",{id:"dica", ta:"end", fs:13, fill:VERM})+t(392,42,"",{id:"dica2", ta:"end", fs:11, fw:400}),
      passos:[
        {t:"A pessoa não responde? Chama-a em voz alta e toca-lhe nos ombros. Depois vê se <b>respira normalmente</b>: olha para o peito, ouve e sente, até 10 segundos.", f:S => {
          S.mostrar("#olhar"); S.cls("#olhar","an-pulse"); S.texto("#dica","Respira?"); S.texto("#dica2","olha, ouve e sente"); }},
        {t:"Se <b>respira</b>: ajoelha-te ao lado dela. Põe o <b>braço mais perto de ti</b> em ângulo reto, com o cotovelo dobrado e a palma da mão para cima.", f:S => {
          S.esconder("#olhar"); S.mover("#bE","rotate(80deg)"); S.mover("#aE","rotate(94deg)"); S.cls("#s1","draw");
          S.texto("#dica","1. Braço em L"); S.texto("#dica2","palma para cima"); }},
        {t:"Passa o <b>outro braço</b> por cima do peito e encosta as costas da mão à bochecha do lado de ti. Segura-a aí.", f:S => {
          S.esconder("#olhar"); S.mover("#bE","rotate(80deg)"); S.mover("#aE","rotate(94deg)");
          S.mover("#bD","rotate(45deg)"); S.mover("#aD","rotate(134deg)"); S.cls("#s2","draw");
          S.texto("#dica","2. Mão na face"); S.texto("#dica2","do teu lado"); }},
        {t:"Com a outra mão, <b>dobra o joelho do lado de lá</b>, com o pé assente no chão.", f:S => {
          S.mover("#bE","rotate(80deg)"); S.mover("#aE","rotate(94deg)"); S.mover("#bD","rotate(45deg)"); S.mover("#aD","rotate(134deg)");
          S.mover("#pD","rotate(-30deg)"); S.mover("#sD","rotate(140deg)"); S.cls("#s3","draw");
          S.texto("#dica","3. Joelho dobrado"); S.texto("#dica2","pé no chão"); }},
        {t:"Puxa pelo joelho dobrado e <b>roda a pessoa na tua direção</b>, para o teu lado. Assim controlas o movimento: ela não cai para longe nem fica de barriga para baixo. Ajusta a perna de cima, dobrada, para ela não rolar, e a mão debaixo da face.", dur:8000, f:S => {
          S.cls("#s4","draw"); S.texto("#dica","4. Rodar para ti"); S.texto("#dica2","puxando pelo joelho");
          const rodar = () => { S.esconder("#costas"); S.cls("#s1, #s2, #s3","draw",false); S.mostrar("#lado"); };
          if(S.instant) rodar(); else S.depois(rodar, 1800); }},
        {t:"Inclina a cabeça um pouco para trás, para o ar passar — se vomitar, o vómito sai pela boca. <b>Liga 112</b> e vigia se continua a respirar.", dur:7500, f:S => {
          S.esconder("#costas, #lado, #tu"); S.cls("#s1, #s2, #s3, #s4","draw",false); S.mostrar("#foto"); S.texto("#dica",""); S.texto("#dica2",""); }},
        {t:"<b>Que lado do corpo fica para baixo?</b> Qualquer um serve: o importante é a pessoa ficar de lado. Exceções: uma <b>grávida</b> fica do lado <b>esquerdo</b> (assim o bebé não aperta uma veia grande que leva sangue ao coração); se tem um braço ou uma perna <b>ferida</b>, não a deites por cima da ferida; se tiver de ficar assim <b>mais de 30 minutos</b>, vira-a para o outro lado, para não magoar o braço de baixo.", dur:11000, f:S => {
          S.mostrar("#foto"); S.texto("#dica","Qualquer lado serve"); S.texto("#dica2","grávida: lado esquerdo"); }}
      ]});
    function el2(cx, cy, rx, ry, fill){ return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="'+fill+'"/>'; }
  })();

  /* ---------------- pequenas emergências, uma de cada vez ---------------- */
  (function(){
    const PAINEIS = [
      ["🔥", "Queimadura", "água corrente fresca: 10 min no mínimo, ideal 20", "tira anéis e relógio, se não estiverem colados", "❌ nada de gelo, manteiga ou pasta de dentes"],
      ["🩸", "Ferida a sangrar", "carrega com força com uma compressa", "não largues e chama ajuda", "corte pequeno: lavar e pôr um penso"],
      ["👃", "Sangue do nariz", "sentado, com a cabeça para a FRENTE", "aperta a parte mole do nariz 10 a 15 minutos", "❌ nunca com a cabeça para trás"],
      ["🐝", "Picada de abelha", "raspa o ferrão com um cartão", "lava e põe gelo envolto num pano", "cara inchada ou falta de ar → 112"],
      ["🦶", "Entorse (pé torcido)", "repouso", "frio envolto num pano, até 20 minutos", "pé elevado"],
      ["😵", "Desmaio", "deitar de costas, com as pernas elevadas", "afastar curiosos e desapertar a roupa", "não acorda? → PLS e 112"],
      ["🙂", "AVC: os 3 F", "Face: a boca fica de lado", "Força: um braço não se levanta", "Fala enrolada → 112 já"],
      ["🍬", "Açúcar baixo (diabetes)", "se consegue engolir: sumo ou açúcar", "chama um adulto", "não consegue engolir → 112"],
      ["⚡", "Convulsão", "afasta objetos e protege a cabeça", "❌ não segures nem ponhas nada na boca", "mais de 5 minutos → 112"],
      ["🧪", "Engoliu um produto tóxico", "Centro Antivenenos: 800 250 250", "não provocar o vómito", "se está mal → 112"]
    ];
    const ids = PAINEIS.map((x, i) => "#q"+i);
    A.def({id:"socorros-rapidos", mundo:"c9", cor:"m4", titulo:"Pequenas emergências: o que fazer",
      cena: () => PAINEIS.map((x, i) => g({id:"q"+i, cls:i ? "an-h" : ""},
        t(200,64,x[0],{fs:46})+t(200,110,x[1],{fs:17})+[x[2],x[3],x[4]].map((s, k) => t(200,144+k*28,s,{fs:13.5, fw:500})).join(""))).join(""),
      passos: PAINEIS.map((x, i) => ({
        t:"<b>"+x[1]+"</b>: "+x[2]+"; "+x[3]+"; "+x[4].replace("❌ ","")+".",
        f:S => { S.esconder(ids.filter((s, k) => k !== i)); S.mostrar("#q"+i); }
      }))});
  })();
})();
