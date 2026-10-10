/* Animações de Ciências Naturais (formato explicado em animacoes-matematica.js) */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const range = (a, b) => { const out = []; for(let i=a;i<b;i++) out.push(i); return out; };
  const elipse = (cx, cy, rx, ry, o) => '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="'+o.fill+'" stroke="'+(o.stroke||"none")+'" stroke-width="'+(o.sw||0)+'"/>';
  const AZUL = "#2F63A0", CINZA = "#7A7A7A", VERMELHO = "#C0392B";

  /* ---------------- c3 — respiração ---------------- */
  const PL = "M188,108 C150,92 118,120 116,165 C114,200 138,212 186,204 Z", PR = "M212,108 C250,92 282,120 284,165 C286,200 262,212 214,204 Z";
  const AR_E = "M200,0 L200,100 L168,124 L150,160", AR_D = "M200,0 L200,100 L232,124 L250,160";
  A.def({id:"respiracao", mundo:"c3", cor:"m3", titulo:"Como respiramos",
    cena: () => g({id:"cena"},
      g({id:"corpo"},
        c(200,24,18,{fill:"var(--surface-2)", stroke:"currentColor", sw:2})+
        p("M118,58 Q200,42 282,58 L302,232 Q200,252 98,232 Z",{fill:"var(--surface-2)", stroke:"currentColor", sw:2, op:0.7})+
        g({id:"pulmoes"}, p(PL,{fill:"#F2A7A0", stroke:"#B5524A", sw:2})+p(PR,{fill:"#F2A7A0", stroke:"#B5524A", sw:2}))+
        p("M200,38 L200,100 M200,100 L168,124 M200,100 L232,124",{stroke:"#C77F70", sw:9, lc:"round"})+
        p("M108,214 Q200,172 292,214",{id:"diaf", stroke:"#8A5A44", sw:7, lc:"round"})+
        g({id:"ar"})+
        g({id:"rot", cls:"an-h"},
          l(206,72,312,72,{sw:1, op:0.5})+t(316,76,"traqueia",{ta:"start", fs:12})+
          l(170,122,86,112,{sw:1, op:0.5})+t(82,116,"brônquios",{ta:"end", fs:12})+
          l(283,150,312,150,{sw:1, op:0.5})+t(316,154,"pulmões",{ta:"start", fs:12})+
          l(288,212,312,226,{sw:1, op:0.5})+t(316,230,"diafragma",{ta:"start", fs:12})))+
      g({id:"alv", cls:"an-h"},
        c(140,130,72,{fill:"#FCE1DC", stroke:"#B5524A", sw:3})+t(140,48,"alvéolo (no pulmão)",{fs:13})+
        p("M232,10 C275,80 275,180 232,250",{stroke:"#D9534F", sw:24, op:0.3, lc:"round"})+t(318,30,"capilar",{fs:12})+t(318,46,"sanguíneo",{fs:12})+
        g({id:"gRed"})+g({id:"gO2"})+g({id:"gCO2"})+
        t(140,226,"O₂ → para o sangue",{fs:13, fill:AZUL})+t(140,246,"CO₂ → para o ar",{fs:13, fill:CINZA}))),
    passos:[
      {t:"Estes são os órgãos da respiração: nariz e boca, <b>traqueia</b>, <b>brônquios</b>, <b>pulmões</b> e o músculo <b>diafragma</b>.", f:S => S.mostrar("#rot")},
      {t:"<b>Inspiração</b>: o diafragma contrai-se e desce, o tórax aumenta e o ar entra — rico em <b>oxigénio</b> (azul).", f:S => {
        S.cls("#cena", "insp"); S.fluxo("#ar", AR_E, 5, 2.4, AZUL, 4.5); S.fluxo("#ar", AR_D, 5, 2.4, AZUL, 4.5); }},
      {t:"<b>Expiração</b>: o diafragma relaxa e sobe, o tórax diminui e o ar sai — com mais <b>dióxido de carbono</b> (cinzento).", f:S => {
        S.cls("#cena", "insp", false); S.limpar("#ar");
        S.fluxo("#ar", "M150,160 L168,124 L200,100 L200,0", 5, 2.4, CINZA, 4.5); S.fluxo("#ar", "M250,160 L232,124 L200,100 L200,0", 5, 2.4, CINZA, 4.5); }},
      {t:"Em repouso respiramos cerca de <b>12 a 20 vezes por minuto</b>, sem pensar nisso. Experimenta: o que acontece quando corremos?", f:S => {
        S.limpar("#ar"); S.cls("#cena", "respira");
        const box = S.controlo('<label class="an-range">😌 Em repouso <input type="range" min="1.5" max="5" step="0.1" value="4" dir="rtl"> 🏃 A correr</label> <b id="an-rpm">15 respirações por minuto</b>');
        if(!box) return;
        box.querySelector("input").addEventListener("input", e => {
          const v = +e.target.value; S.q("#cena").style.setProperty("--resp", v+"s");
          box.querySelector("#an-rpm").textContent = Math.round(60/v)+" respirações por minuto";
        }); }},
      {t:"Lá dentro, nos <b>alvéolos</b>, dá-se a troca: o <b>oxigénio</b> passa do ar para o sangue e o <b>dióxido de carbono</b> passa do sangue para o ar.", f:S => {
        S.cls("#cena", "respira", false); S.esconder("#corpo"); S.mostrar("#alv");
        S.fluxo("#gRed", "M232,10 C275,80 275,180 232,250", 7, 5, VERMELHO, 7);
        S.fluxo("#gO2", "M150,105 C190,100 222,100 258,108", 4, 2.6, AZUL, 5);
        S.fluxo("#gCO2", "M258,160 C222,162 190,162 150,158", 4, 2.6, CINZA, 5); }}
    ]});

  /* ---------------- c4 — coração e circulação ---------------- */
  const camara = (cls, x, y, w, h, l1, l2) => r(x,y,w,h,{rx:16, cls:"ch "+cls, stroke:"#7a2e2e", sw:2})+t(x+w/2,y+h/2-3,l1,{fs:11})+t(x+w/2,y+h/2+11,l2,{fs:11});
  const tubo = (d, cor) => p(d,{stroke:cor, sw:13, op:0.28, lc:"round"});
  const P1 = "M188,152 C120,160 100,70 150,48", P2 = "M250,48 C300,70 285,112 224,110",
        S1 = "M224,152 C320,150 330,205 270,214", S2 = "M130,216 C70,205 75,112 176,110";
  A.def({id:"coracao", mundo:"c4", cor:"m4", titulo:"O coração e a circulação do sangue",
    cena: () => g({id:"cena", cls:"cena"},
      g({id:"hA"},
        g({id:"heart", cls:"coracao"},
          camara("ch-d",118,38,78,62,"aurícula","direita")+camara("ch-e",204,38,78,62,"aurícula","esquerda")+
          camara("ch-d",118,106,78,98,"ventrículo","direito")+camara("ch-e",204,106,78,98,"ventrículo","esquerdo"))+
        t(200,226,"(direita e esquerda da pessoa — ao contrário de quem olha)",{fs:11, fw:400})+
        t(340,120,"",{id:"bpm", fs:15})+t(340,140,"",{id:"bpm2", fs:11, fw:400}))+
      g({id:"circ", cls:"an-h"},
        elipse(200,36,72,22,{fill:"#F2A7A0", stroke:"#B5524A", sw:2})+t(200,41,"pulmões",{fs:13})+
        r(130,198,140,46,{rx:14, fill:"var(--surface-2)", stroke:"currentColor", sw:1.5})+t(200,226,"corpo (todas as células)",{fs:12})+
        g({id:"tP", cls:"an-h"}, tubo(P1, "#6E8FC9")+tubo(P2, "#D9534F"))+g({id:"tS", cls:"an-h"}, tubo(S1, "#D9534F")+tubo(S2, "#6E8FC9"))+
        g({id:"fl"})+
        g({cls:"coracao"}, r(176,104,24,24,{fill:"#6E8FC9", stroke:"#7a2e2e"})+r(200,104,24,24,{fill:"#D9534F", stroke:"#7a2e2e"})+
          r(176,128,24,24,{fill:"#6E8FC9", stroke:"#7a2e2e"})+r(200,128,24,24,{fill:"#D9534F", stroke:"#7a2e2e"}))+
        g({id:"nomes", cls:"an-h"}, t(86,92,"artéria pulmonar",{fs:11})+t(318,92,"veias pulmonares",{fs:11})+t(336,184,"artéria aorta",{fs:11})+t(64,170,"veias cavas",{fs:11})))),
    passos:[
      {t:"O coração é um músculo com <b>4 cavidades</b>: 2 <b>aurículas</b> (em cima) e 2 <b>ventrículos</b> (em baixo).", f:S => {}},
      {t:"O lado direito recebe sangue <b>pobre em oxigénio</b> (azul); o lado esquerdo, sangue <b>rico em oxigénio</b> (vermelho). Os dois lados nunca se misturam.", f:S => S.cls("#heart", "colorido")},
      {t:"O coração é uma <b>bomba</b>: os ventrículos contraem-se e empurram o sangue. Cada contração é um <b>batimento</b>. Experimenta: em repouso ou a correr?", dur:8000, f:S => {
        S.cls("#heart", "colorido"); S.cls("#cena", "bate"); S.texto("#bpm", "70 batimentos"); S.texto("#bpm2", "por minuto");
        const box = S.controlo('<label class="an-range">😌 Repouso <input type="range" min="50" max="180" step="5" value="70"> 🏃 Exercício</label>');
        if(!box) return;
        box.querySelector("input").addEventListener("input", e => {
          const v = +e.target.value; S.q("#cena").style.setProperty("--bat", (60/v).toFixed(2)+"s"); S.texto("#bpm", v+" batimentos");
        }); }},
      {t:"<b>Pequena circulação</b>: o ventrículo direito envia o sangue aos <b>pulmões</b>, onde recebe oxigénio, e ele volta à aurícula esquerda.", dur:7000, f:S => {
        S.cls("#cena", "bate"); S.esconder("#hA"); S.mostrar("#circ, #tP");
        S.fluxo("#fl", P1, 6, 3.2, "#3E63B0", 5); S.fluxo("#fl", P2, 6, 3.2, VERMELHO, 5); }},
      {t:"<b>Grande circulação</b>: o ventrículo esquerdo envia sangue rico em oxigénio para <b>todo o corpo</b>; ele entrega o oxigénio às células e volta à aurícula direita.", dur:7000, f:S => {
        S.mostrar("#tS"); S.fluxo("#fl", S1, 7, 3.6, VERMELHO, 5); S.fluxo("#fl", S2, 7, 3.6, "#3E63B0", 5); }},
      {t:"As <b>artérias</b> levam o sangue para fora do coração; as <b>veias</b> trazem-no de volta. (A artéria pulmonar é artéria, apesar de levar sangue pobre em oxigénio, porque <b>sai</b> do coração.)", f:S => S.mostrar("#nomes")}
    ]});

  /* ---------------- c6 — fotossíntese ---------------- */
  const F_AGUA = "M200,252 L200,200 C198,170 202,140 222,112", F_CO2 = "M392,72 C340,86 300,100 258,108",
        F_O2 = "M250,100 C268,70 300,45 345,20", F_GLIC = "M152,136 C186,148 198,170 200,246";
  A.def({id:"fotossintese", mundo:"c6", cor:"m6", titulo:"Fotossíntese: a fábrica das plantas",
    cena: () => g({id:"cena"},
      r(0,0,400,200,{fill:"var(--m3-bg)"})+r(0,200,400,60,{fill:"#B08A5A", op:0.5})+
      g({id:"sol"}, g({cls:"raios"}, range(0,8).map(k => { const a = k*Math.PI/4; return l(58+28*Math.cos(a),48+28*Math.sin(a),58+38*Math.cos(a),48+38*Math.sin(a),{stroke:"#E0A100", sw:3, lc:"round"}); }).join(""))+c(58,48,22,{fill:"#F5C342"}))+
      g({id:"luz", cls:"an-h"}, l(80,62,226,106,{cls:"raio", stroke:"#E0A100", sw:3, da:"9 9"})+l(76,68,158,132,{cls:"raio", stroke:"#E0A100", sw:3, da:"9 9"})+t(150,72,"luz",{fill:"#B07800", fs:14}))+
      p("M200,246 C198,170 202,140 200,104",{stroke:"#3E8F5C", sw:6, lc:"round"})+
      p("M200,140 C170,120 140,125 126,140 C145,152 176,153 200,140 Z",{fill:"#5F9E52", stroke:"#2E7A56", sw:1.5})+
      p("M200,114 C230,90 262,95 276,108 C258,122 228,125 200,114 Z",{fill:"#5F9E52", stroke:"#2E7A56", sw:1.5})+
      p("M200,212 L184,240 M200,212 L200,252 M200,212 L218,238 M190,230 L178,236 M210,226 L226,230",{stroke:"#8A6A4A", sw:3, lc:"round"})+
      g({id:"fAgua"})+g({id:"fCO2"})+g({id:"fO2"})+g({id:"fGlic"})+
      t(244,232,"💧 água (pela raiz)",{id:"lAgua", cls:"an-h", ta:"start", fs:12})+
      t(394,92,"dióxido de",{id:"lCO2", cls:"an-h", ta:"end", fs:12})+t(394,106,"carbono (CO₂)",{id:"lCO2b", cls:"an-h", ta:"end", fs:12})+
      t(392,14,"oxigénio (O₂)",{id:"lO2", cls:"an-h", ta:"end", fs:12})+
      t(120,186,"glicose (açúcar)",{id:"lGlic", cls:"an-h", fs:12, fill:"#B0601A"})+
      r(0,0,400,260,{id:"noite", fill:"#0b1530", op:0, cls:"an-noite"})),
    passos:[
      {t:"As plantas fabricam o seu próprio alimento: é a <b>fotossíntese</b>. Para isso precisam de três ingredientes…", f:S => {}},
      {t:"☀️ <b>Luz do Sol</b>, captada pela <b>clorofila</b> das folhas — é a clorofila que as torna verdes.", f:S => S.mostrar("#luz")},
      {t:"💧 <b>Água</b>, que entra pelas raízes e sobe pelo caule até às folhas.", f:S => { S.mostrar("#lAgua"); S.fluxo("#fAgua", F_AGUA, 5, 3.4, "#3F8FD8", 4.5); }},
      {t:"💨 <b>Dióxido de carbono</b> do ar, que entra nas folhas por pequenos poros, os <b>estomas</b>.", f:S => { S.mostrar("#lCO2, #lCO2b"); S.fluxo("#fCO2", F_CO2, 4, 3, CINZA, 4.5); }},
      {t:"Com tudo isto, a planta fabrica <b>glicose</b> (o seu alimento) e liberta <b>oxigénio</b> para o ar — o oxigénio que nós respiramos!", f:S => {
        S.mostrar("#lO2, #lGlic"); S.fluxo("#fO2", F_O2, 4, 3, "#5FB8E8", 6); S.fluxo("#fGlic", F_GLIC, 3, 4, "#E0923A", 4.5); }},
      {t:"Experimenta: muda a quantidade de <b>luz</b>. Sem luz, a fotossíntese para!", f:S => {
        const box = S.controlo('<label class="an-range">🌙 Noite <input type="range" min="0" max="100" step="5" value="80"> ☀️ Muita luz</label> <b id="an-luz">Muita fotossíntese</b>');
        if(!box) return;
        box.querySelector("input").addEventListener("input", e => {
          const v = +e.target.value;
          S.attr("#noite", "opacity", ((1-v/100)*0.55).toFixed(2)); S.attr("#sol", "opacity", (0.2+0.8*v/100).toFixed(2));
          S.esconder("#luz"); if(v > 0) S.mostrar("#luz");
          S.limpar("#fO2"); S.limpar("#fGlic");
          if(v > 0){ S.fluxo("#fO2", F_O2, Math.max(1, Math.round(v/20)), Math.max(2, 5 - v/33), "#5FB8E8", 6); S.fluxo("#fGlic", F_GLIC, Math.max(1, Math.round(v/30)), 4, "#E0923A", 4.5); }
          box.querySelector("#an-luz").textContent = v === 0 ? "Sem luz: não há fotossíntese" : v < 40 ? "Pouca luz: pouca fotossíntese" : "Muita fotossíntese";
        }); }}
    ]});

  /* ---------------- c2 — digestão ---------------- */
  const DELG = "M206,136 C175,150 228,158 200,168 C172,178 228,186 200,196 C172,206 192,220 166,224";
  const GROSSO = "M166,226 L162,152 Q162,146 170,146 L234,146 Q242,146 242,154 L242,226 Q242,236 228,238 L206,238 L206,256";
  const VIAGEM = "M200,44 L200,100 C228,96 238,118 222,128 L206,136 C175,150 228,158 200,168 C172,178 228,186 200,196 C172,206 192,220 166,224 L162,152 Q162,146 170,146 L234,146 Q242,146 242,154 L242,226 Q242,236 228,238 L206,238 L206,256";
  const BOLO = "#7A4A2A";
  A.def({id:"digestao", mundo:"c2", cor:"m2", titulo:"A viagem dos alimentos", h:270,
    cena: () =>
      c(200,28,22,{fill:"var(--surface-2)", stroke:"currentColor", sw:2})+r(132,52,136,212,{rx:44, fill:"var(--surface-2)", stroke:"currentColor", sw:2, op:0.7})+
      p("M190,38 Q200,46 210,38",{id:"boca", stroke:"#C0392B", sw:3, lc:"round"})+
      p("M200,46 L200,100",{id:"esofago", stroke:"#E8A39A", sw:8, lc:"round"})+
      p("M146,96 C172,86 194,92 196,104 C188,120 160,122 146,114 Z",{id:"figado", fill:"#9B5B4B", stroke:"#6B3B2E", sw:1.5})+
      p("M198,98 C226,90 248,104 242,124 C236,142 208,140 200,132 C194,126 196,110 198,98 Z",{id:"estomago", fill:"#E8A39A", stroke:"#B5524A", sw:2})+
      p(GROSSO,{id:"grosso", stroke:"#D99A7A", sw:12, lc:"round", lj:"round", op:0.85})+
      p(DELG,{id:"delgado", stroke:"#F2B8A0", sw:9, lc:"round", lj:"round"})+
      g({id:"vaso", cls:"an-h"}, l(304,60,304,250,{stroke:"#D9534F", sw:6})+t(310,70,"sangue",{ta:"start", fs:11}))+
      g({id:"nutr"})+g({id:"bolo"})+
      g({id:"lb"},
        t(222,42,"boca",{id:"lb-boca", cls:"an-h", ta:"start", fs:12})+t(192,76,"esófago",{id:"lb-esofago", cls:"an-h", ta:"end", fs:12})+
        t(252,112,"estômago",{id:"lb-estomago", cls:"an-h", ta:"start", fs:12})+t(142,94,"fígado",{id:"lb-figado", cls:"an-h", ta:"end", fs:12})+
        t(128,190,"intestino delgado",{id:"lb-delgado", cls:"an-h", ta:"end", fs:12})+t(250,200,"intestino",{id:"lb-grosso", cls:"an-h", ta:"start", fs:12})+
        t(250,214,"grosso",{id:"lb-grosso2", cls:"an-h", ta:"start", fs:12})+t(214,262,"ânus",{id:"lb-anus", cls:"an-h", ta:"start", fs:11})),
    passos:[
      {t:"<b>Boca</b>: os dentes cortam e trituram os alimentos (digestão mecânica) e a <b>saliva</b> começa a digerir o amido.", f:S => {
        S.cls("#boca", "hl"); S.mostrar("#lb-boca"); S.fluxo("#bolo", "M196,41 L204,43", 1, 0.5, BOLO, 6); }},
      {t:"<b>Esófago</b>: o bolo alimentar desce, empurrado por <b>movimentos peristálticos</b> (ondas dos músculos).", f:S => {
        S.cls(".hl", "hl", false); S.limpar("#bolo"); S.cls("#esofago", "hl"); S.mostrar("#lb-esofago"); S.fluxo("#bolo", "M200,44 L200,102", 1, 2.2, BOLO, 7); }},
      {t:"<b>Estômago</b>: o <b>suco gástrico</b>, muito ácido, continua a digestão. O alimento fica uma pasta chamada <b>quimo</b>.", f:S => {
        S.cls(".hl", "hl", false); S.limpar("#bolo"); S.cls("#estomago", "hl"); S.mostrar("#lb-estomago");
        S.fluxo("#bolo", "M204,104 C230,100 238,118 222,128 C208,134 198,120 204,104", 2, 2.6, BOLO, 6); }},
      {t:"<b>Intestino delgado</b>: a <b>bílis</b> (do fígado) e o suco do pâncreas acabam a digestão. Os <b>nutrientes</b> passam para o <b>sangue</b> pelas vilosidades.", dur:7500, f:S => {
        S.cls(".hl", "hl", false); S.limpar("#bolo"); S.cls("#delgado, #figado", "hl"); S.mostrar("#lb-delgado, #lb-figado, #vaso");
        S.fluxo("#bolo", DELG, 2, 4, BOLO, 6);
        S.fluxo("#nutr", "M212,165 L304,165", 3, 2.2, "#E0923A", 3.5); S.fluxo("#nutr", "M208,190 L304,190", 3, 2.4, "#5F9E52", 3.5); S.fluxo("#nutr", "M196,210 L304,210", 3, 2.6, "#E0A100", 3.5); }},
      {t:"<b>Intestino grosso</b>: absorve-se a <b>água</b> e formam-se as <b>fezes</b>, que saem pelo <b>ânus</b>.", f:S => {
        S.cls(".hl", "hl", false); S.limpar("#bolo"); S.limpar("#nutr"); S.cls("#grosso", "hl"); S.mostrar("#lb-grosso, #lb-grosso2, #lb-anus");
        S.fluxo("#bolo", GROSSO, 2, 4.5, BOLO, 7); }},
      {t:"A viagem completa! Do princípio ao fim pode demorar <b>de um a três dias</b>.", f:S => {
        S.cls(".hl", "hl", false); S.limpar("#bolo"); S.mostrar("#lb text"); S.fluxo("#bolo", VIAGEM, 3, 12, BOLO, 7); }}
    ]});

  /* ---------------- c5 — excreção ---------------- */
  A.def({id:"rins", mundo:"c5", cor:"m5", titulo:"Os rins: o filtro do sangue",
    cena: () =>
      '<clipPath id="an-bexiga"><circle cx="312" cy="206" r="34"/></clipPath>'+
      p("M0,108 L172,118",{stroke:"#D9534F", sw:16, op:0.4, lc:"round"})+p("M172,136 L0,148",{stroke:"#8E3B46", sw:16, op:0.4, lc:"round"})+
      t(10,98,"artéria renal (chega)",{ta:"start", fs:11})+t(10,170,"veia renal (sai)",{ta:"start", fs:11})+
      p("M150,58 C202,58 216,100 194,124 C216,148 202,192 150,192 C98,192 92,58 150,58 Z",{fill:"#B5615A", stroke:"#7A3A34", sw:2})+
      t(140,50,"rim",{fs:13})+
      g({id:"filtro", cls:"an-h"}, range(0,5).map(k => p("M"+(120+k*10)+",95 q8,30 0,60",{stroke:"#F4D7D2", sw:2})).join(""))+
      p("M168,186 C184,232 240,222 280,208",{stroke:"#E0C060", sw:7, lc:"round"})+t(196,236,"ureter",{fs:11})+
      c(312,206,34,{fill:"var(--surface)"})+
      r(276,172,72,68,{id:"urina", fill:"#E3C042", "clip-path":"url(#an-bexiga)", style:"transform-origin:312px 240px; transform:scaleY(0.2)"})+
      c(312,206,34,{fill:"none", stroke:"#B5615A", sw:3})+t(312,164,"bexiga",{fs:12})+
      l(312,240,312,258,{stroke:"#E0C060", sw:6})+t(320,256,"uretra",{ta:"start", fs:11})+
      g({id:"fArt"})+g({id:"fVei"})+g({id:"fUri"}),
    passos:[
      {t:"O sangue chega aos <b>rins</b> pela artéria renal, a trazer resíduos que o corpo já não quer — como a <b>ureia</b> (pontos verdes).", f:S => {
        S.fluxo("#fArt", "M0,108 L150,118", 6, 3, VERMELHO, 5); S.fluxo("#fArt", "M0,112 L150,120", 4, 3.4, "#3FA34D", 4); }},
      {t:"Os rins <b>filtram</b> o sangue: os resíduos e a água a mais ficam retidos. O sangue limpo sai pela <b>veia renal</b>.", f:S => {
        S.mostrar("#filtro"); S.fluxo("#fVei", "M150,138 L0,148", 6, 3, "#8E2B36", 5); }},
      {t:"Forma-se a <b>urina</b>, que desce pelos <b>ureteres</b> até à <b>bexiga</b> — que se vai enchendo.", dur:7000, f:S => {
        S.fluxo("#fUri", "M168,186 C184,232 240,222 280,208", 4, 2.6, "#D9A400", 4); S.mover("#urina", "scaleY(0.9)"); }},
      {t:"Quando a bexiga está cheia, sentimos vontade de urinar: a urina sai pela <b>uretra</b>.", f:S => {
        S.limpar("#fUri"); S.mover("#urina", "scaleY(0.15)"); S.fluxo("#fUri", "M312,240 L312,262", 3, 1, "#D9A400", 4); }},
      {t:"Experimenta: bebeste pouca ou muita água? Com mais água, a urina fica <b>mais clara</b> (mais diluída).", f:S => {
        const box = S.controlo('<button type="button" data-a="0">🥤 Bebi pouca água</button> <button type="button" data-a="1">💧💧 Bebi muita água</button> <b id="an-ag"></b>');
        if(!box) return;
        box.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
          const muita = b.dataset.a === "1";
          S.attr("#urina", "fill", muita ? "#F3E6A0" : "#C99A12"); S.mover("#urina", muita ? "scaleY(0.9)" : "scaleY(0.45)");
          box.querySelector("#an-ag").textContent = muita ? "Urina clara e mais quantidade" : "Urina escura e concentrada — bebe água!";
        })); }}
    ]});

  /* ---------------- c8 — microrganismos e defesas ---------------- */
  const micro = (id, x, y) => g({id:id, cls:"an-h an-pop micro", style:"transform:translate("+x+"px,"+y+"px)"},
    range(0,8).map(k => { const a = k*Math.PI/4; return l(f(11*Math.cos(a)),f(11*Math.sin(a)),f(16*Math.cos(a)),f(16*Math.sin(a)),{stroke:"#9A3B3B", sw:2.5, lc:"round"}); }).join("")+c(0,0,11,{fill:"#E0958A", stroke:"#9A3B3B", sw:2}));
  function f(v){ return Math.round(v*10)/10; }
  const globulo = (id, x, y) => g({id:id, cls:"an-move", style:"transform:translate("+x+"px,"+y+"px)"},
    c(0,0,17,{fill:"#F4F4F4", stroke:"#8A8A8A", sw:2})+c(3,-2,7,{fill:"#B39DDB"})+t(0,-21,"M",{cls:"an-h mem", fs:12, fill:"var(--accent)"}));
  const mostrarBacterias = (S, n) => S.mostrar(range(0,n).map(i => "#b"+i));
  A.def({id:"microbios", mundo:"c8", cor:"m8", titulo:"Bactérias que se multiplicam e vacinas que nos protegem",
    cena: () =>
      g({id:"bact"}, range(0,64).map(i => r(30+(i%8)*30, 34+Math.floor(i/8)*24, 22, 12, {id:"b"+i, rx:6, cls:"an-h an-pop", fill:"#7FC79E", stroke:"#2E7A56", sw:1.5})).join("")+
        t(325,90,"0 min",{id:"tempo", fs:20})+t(325,118,"1 bactéria",{id:"quant", fs:14}))+
      g({id:"def", cls:"an-h"}, micro("ag",200,120)+globulo("w0",40,40)+globulo("w1",360,60)+globulo("w2",200,240)+
        micro("m0",110,80)+micro("m1",300,90)+micro("m2",150,200)+micro("m3",260,190)+micro("m4",90,150)+micro("m5",320,160)),
    passos:[
      {t:"Uma <b>bactéria</b>. Em boas condições (calor, alimento e humidade), algumas bactérias dividem-se em duas a cada <b>20 minutos</b>.", f:S => S.mostrar("#b0")},
      {t:"20 minutos depois: <b>2 bactérias</b>.", f:S => { mostrarBacterias(S, 2); S.texto("#tempo", "20 min"); S.texto("#quant", "2 bactérias"); }},
      {t:"40 minutos: <b>4</b>. Uma hora: <b>8</b>. O número duplica de cada vez!", f:S => {
        mostrarBacterias(S, 4); S.texto("#tempo", "40 min"); S.texto("#quant", "4 bactérias");
        const fim = () => { mostrarBacterias(S, 8); S.texto("#tempo", "60 min"); S.texto("#quant", "8 bactérias"); };
        if(S.instant) fim(); else S.depois(fim, 2200); }},
      {t:"Ao fim de <b>2 horas</b> já são <b>64</b>! É por isso que lavar as mãos e guardar os alimentos no frio é tão importante.", dur:7500, f:S => {
        const passos = [[16,"1h20"],[32,"1h40"],[64,"2 horas"]];
        passos.forEach((pp, i) => { const fz = () => { mostrarBacterias(S, pp[0]); S.texto("#tempo", pp[1]); S.texto("#quant", pp[0]+" bactérias"); };
          if(S.instant) fz(); else S.depois(fz, 300 + i*1500); }); }},
      {t:"Como se defende o corpo? Uma <b>vacina</b> mostra-lhe uma versão inofensiva do micróbio (ou só uma parte dele).", f:S => {
        S.esconder("#bact"); S.mostrar("#def, #ag");
        S.mover("#w0", "translate(160px,92px)"); S.mover("#w1", "translate(244px,100px)"); S.mover("#w2", "translate(200px,162px)"); }},
      {t:"Os <b>glóbulos brancos</b> aprendem a reconhecê-lo e guardam <b>memória</b> (M).", f:S => { S.mostrar(".mem"); S.esconder("#ag"); }},
      {t:"Se o micróbio verdadeiro aparecer mais tarde, os glóbulos brancos reconhecem-no logo: a defesa é <b>rápida e forte</b>!", dur:7000, f:S => {
        S.mostrar("#m0, #m1, #m2, #m3, #m4, #m5");
        const ataque = () => { S.mover("#w0", "translate(110px,80px)"); S.mover("#w1", "translate(300px,90px)"); S.mover("#w2", "translate(150px,200px)");
          S.depois(() => S.cls(".micro", "gone"), 1200); if(S.instant) S.cls(".micro", "gone"); };
        if(S.instant) ataque(); else S.depois(ataque, 1200); }}
    ]});

  /* ---------------- c1 — roda dos alimentos ---------------- */
  (function(){
    const RODA = [["Cereais, derivados e tubérculos",28,"#E0923A"],["Hortícolas",23,"#5F9E52"],["Fruta",20,"#D1495B"],["Lacticínios",18,"#4F86B3"],
                  ["Carne, pescado e ovos",5,"#A85D3E"],["Leguminosas",4,"#7A5C3E"],["Gorduras e óleos",2,"#8B8B5A"]];
    const cx = 120, cy = 130, R1 = 34, R2 = 106;
    const pt = (rr, a) => (cx + rr*Math.cos(a*Math.PI/180)).toFixed(1)+","+(cy + rr*Math.sin(a*Math.PI/180)).toFixed(1);
    let a0 = -90;
    const fatias = RODA.map((d, i) => { const a1 = a0 + d[1]*3.6, big = d[1] > 50 ? 1 : 0;
      const s = p("M"+pt(R2,a0)+" A"+R2+","+R2+" 0 "+big+" 1 "+pt(R2,a1)+" L"+pt(R1,a1)+" A"+R1+","+R1+" 0 "+big+" 0 "+pt(R1,a0)+" Z",{id:"rd"+i, cls:"rd-sec", fill:d[2], stroke:"var(--surface)", sw:2});
      a0 = a1; return s; }).join("");
    const legenda = RODA.map((d, i) => g({id:"lg"+i, cls:"an-h"}, r(250,26+i*28,14,14,{rx:3, fill:d[2]})+t(270,38+i*28,d[1]+"% "+d[0],{ta:"start", fs:11.5}))).join("");
    const mostrar = (S, ids) => { S.cls(ids.map(i => "#rd"+i), "on"); S.mostrar(ids.map(i => "#lg"+i)); };
    A.def({id:"roda", mundo:"c1", cor:"m1", titulo:"A Roda dos Alimentos",
      cena: () => c(cx,cy,R2,{fill:"none", stroke:"var(--border)", sw:2, da:"5 5"})+fatias+
        g({id:"agua"}, c(cx,cy,R1-3,{fill:"var(--m3-bg)", stroke:"#4F86B3", sw:2})+t(cx,cy-2,"💧",{fs:16})+t(cx,cy+14,"água",{fs:10}))+legenda,
      passos:[
        {t:"A <b>Roda dos Alimentos</b> tem 7 grupos. O tamanho de cada fatia mostra a <b>proporção</b> que devemos comer de cada grupo.", f:S => {}},
        {t:"As maiores: <b>cereais, derivados e tubérculos</b> (28%) — pão, arroz, massa, batata — e <b>hortícolas</b> (23%).", f:S => mostrar(S, [0,1])},
        {t:"Depois, <b>fruta</b> (20%) e <b>lacticínios</b> (18%), como o leite e o iogurte.", f:S => mostrar(S, [2,3])},
        {t:"E em menor quantidade: <b>carne, pescado e ovos</b> (5%), <b>leguminosas</b> (4%) e <b>gorduras e óleos</b> (2%).", f:S => mostrar(S, [4,5,6])},
        {t:"No centro, a <b>água</b>: não tem percentagem, mas deve ser a nossa <b>bebida principal</b>.", f:S => S.cls("#agua", "an-pulse")},
        {t:"Uma alimentação equilibrada é <b>completa</b> (de todos os grupos), <b>variada</b> e nas <b>proporções certas</b>.", f:S => S.cls(".rd-sec", "an-pulse")}
      ]});
  })();

  /* ---------------- c7 — puberdade: as hormonas mensageiras ---------------- */
  const caixa = (id, x, y, w, h, l1, l2, cor) => g({id:id}, r(x,y,w,h,{rx:14, fill:"var(--surface)", stroke:cor, sw:2.5})+t(x+w/2,y+h/2-2,l1,{fs:13})+(l2 ? t(x+w/2,y+h/2+14,l2,{fs:10.5, fw:400}) : ""));
  A.def({id:"hormonas", mundo:"c7", cor:"m7", titulo:"Puberdade: as hormonas mensageiras",
    cena: () =>
      caixa("cer",130,10,140,50,"🧠 Hipófise","(no cérebro)","#7F4C9C")+
      caixa("ov",20,112,120,50,"Ovários","(raparigas)","#C22B5C")+caixa("te",260,112,120,50,"Testículos","(rapazes)","#2F63A0")+
      caixa("mud",100,200,200,50,"Mudanças no corpo","","#3E8F5C")+
      p("M170,60 C140,80 100,90 80,112",{id:"v1", stroke:"#B39DDB", sw:5, op:0.5, lc:"round"})+p("M230,60 C260,80 300,90 320,112",{id:"v2", stroke:"#B39DDB", sw:5, op:0.5, lc:"round"})+
      g({id:"fH"})+g({id:"fH2"})+
      t(80,180,"estrogénio e progesterona",{id:"h1", cls:"an-h", fs:11, fill:"#C22B5C"})+t(320,180,"testosterona",{id:"h2", cls:"an-h", fs:11, fill:"#2F63A0"})+
      g({id:"lista", cls:"an-h"}, t(200,240,"crescimento · pelos · voz · forma do corpo",{fs:11, fw:400})),
    passos:[
      {t:"A <b>puberdade</b> começa com um sinal do cérebro: o hipotálamo «avisa» a <b>hipófise</b>, uma pequena glândula.", f:S => S.cls("#cer", "an-pulse")},
      {t:"A hipófise liberta <b>hormonas</b> — mensageiras químicas — que viajam pelo <b>sangue</b>.", dur:6500, f:S => {
        S.fluxo("#fH", "M170,60 C140,80 100,90 80,112", 4, 2.6, "#7F4C9C", 4.5); S.fluxo("#fH", "M230,60 C260,80 300,90 320,112", 4, 2.6, "#7F4C9C", 4.5); }},
      {t:"A mensagem chega aos <b>ovários</b> (que produzem estrogénio e progesterona) ou aos <b>testículos</b> (que produzem testosterona).", f:S => {
        S.mostrar("#h1, #h2"); S.cls("#ov, #te", "an-pulse"); }},
      {t:"Estas hormonas trazem <b>mudanças graduais</b>: crescimento rápido, pelos, mudanças na voz e na forma do corpo.", dur:6500, f:S => {
        S.fluxo("#fH2", "M80,162 C90,185 120,200 140,205", 3, 2.4, "#C22B5C", 4); S.fluxo("#fH2", "M320,162 C310,185 280,200 260,205", 3, 2.4, "#2F63A0", 4); S.mostrar("#lista"); }},
      {t:"Cada pessoa tem o <b>seu ritmo</b>: começar mais cedo ou mais tarde é perfeitamente normal.", f:S => S.cls("#mud", "an-pulse")}
    ]});
})();
