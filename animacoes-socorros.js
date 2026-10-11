/* Animações do Mundo 9 de Ciências — Primeiros Socorros.
   Segundo as recomendações do INEM, do Conselho Europeu de Ressuscitação (ERC, 2021), do NHS e da Cruz Vermelha. */
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

  /* ---------------- posição lateral de segurança (vista de cima) ---------------- */
  (function(){
    const pele = {stroke:"#B5704F", sw:9, lc:"round", lj:"round"};
    const cabeca = (x, y) => c(x,y,16,{fill:"#F4C7B0", stroke:"#B5704F", sw:2});
    const costas = (bracos, pernas) => p(pernas,pele)+r(180,56,40,98,{rx:16, fill:"#7FA7D9", stroke:"#3E63B0", sw:2})+p(bracos,pele)+cabeca(200,40);
    const PERNAS = "M192,148 L184,240 M208,148 L216,240";
    A.def({id:"pls", mundo:"c9", cor:"m4", titulo:"A posição lateral de segurança (PLS)",
      cena: () =>
        r(0,0,400,260,{fill:"var(--m3-bg)", op:0.45})+
        t(46,140,"🧑",{fs:34})+t(46,170,"tu",{fs:11})+t(8,20,"vista de cima",{ta:"start", fs:11, fw:400})+
        g({id:"p0"}, costas("M184,70 L166,150 M216,70 L234,150", PERNAS))+
        g({id:"p1", cls:"an-h"}, costas("M184,70 L136,72 L136,30 M216,70 L234,150", PERNAS))+
        g({id:"p2", cls:"an-h"}, costas("M184,70 L136,72 L136,30 M216,70 L198,100 L186,46", "M192,148 L184,240 M208,148 L248,186 L228,236"))+
        g({id:"p3", cls:"an-h"},
          r(116,156,120,36,{rx:16, fill:"#7FA7D9", stroke:"#3E63B0", sw:2})+cabeca(100,168)+p("M236,176 L330,190",pele)+p("M232,172 L270,128 L304,168",pele)+
          p("M126,170 L112,150 L96,158",pele)+p("M128,180 L160,212",pele)+
          t(270,112,"joelho dobrado",{fs:11, fw:400})+t(96,206,"mão sob a face",{fs:11, fw:400}))+
        t(320,40,"",{id:"dica", fs:13, fill:"#C0392B"})+t(320,58,"",{id:"dica2", fs:11, fw:400}),
      passos:[
        {t:"A pessoa não responde? Chama-a em voz alta e toca-lhe nos ombros. Depois vê se <b>respira normalmente</b>: olha para o peito, ouve e sente, até 10 segundos.", f:S => {
          S.texto("#dica","Respira? 👀👂"); S.texto("#dica2","até 10 segundos"); }},
        {t:"Se <b>respira</b>: ajoelha-te ao lado dela. Põe o <b>braço mais perto de ti</b> em ângulo reto, com a palma da mão virada para cima.", f:S => {
          S.esconder("#p0"); S.mostrar("#p1"); S.texto("#dica","1. Braço em L"); S.texto("#dica2","palma para cima"); }},
        {t:"Passa o <b>outro braço</b> por cima do peito e encosta as costas da mão à bochecha do lado de ti. Dobra o <b>joelho do lado de lá</b>, com o pé no chão.", f:S => {
          S.esconder("#p0, #p1"); S.mostrar("#p2"); S.texto("#dica","2. Mão na face"); S.texto("#dica2","joelho de lá dobrado"); }},
        {t:"Puxa pelo joelho dobrado e <b>roda a pessoa para o teu lado</b>. A perna de cima fica dobrada, para ela não rolar.", f:S => {
          S.esconder("#p0, #p1, #p2"); S.mostrar("#p3"); S.texto("#dica","3. Rodar para ti"); S.texto("#dica2","a perna segura o corpo"); }},
        {t:"Inclina a cabeça um pouco para trás, para o ar passar: assim, se vomitar, o vómito sai pela boca. <b>Liga 112</b> e vigia se continua a respirar.", f:S => {
          S.esconder("#p0, #p1, #p2"); S.mostrar("#p3"); S.cls("#p3","an-pulse"); S.texto("#dica","4. Ligar 112"); S.texto("#dica2","e vigiar a respiração"); }}
      ]});
  })();

  /* ---------------- pequenas emergências, uma de cada vez ---------------- */
  (function(){
    const PAINEIS = [
      ["🔥", "Queimadura", "água corrente fresca durante 20 minutos", "tira anéis e relógio, se não estiverem colados", "❌ nada de gelo, manteiga ou pasta de dentes"],
      ["🩸", "Ferida a sangrar", "carrega com força com uma compressa", "não largues e chama ajuda", "corte pequeno: lavar e pôr um penso"],
      ["👃", "Sangue do nariz", "sentado, com a cabeça para a FRENTE", "aperta a parte mole do nariz 10 minutos", "❌ nunca com a cabeça para trás"],
      ["🐝", "Picada de abelha", "raspa o ferrão com um cartão", "lava e põe gelo envolto num pano", "cara inchada ou falta de ar → 112"],
      ["🦶", "Entorse (pé torcido)", "repouso", "gelo envolto num pano, 15 a 20 minutos", "pé elevado"],
      ["😵", "Desmaio", "deitar de costas, com as pernas elevadas", "afastar curiosos e desapertar a roupa", "não acorda? → PLS e 112"],
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
