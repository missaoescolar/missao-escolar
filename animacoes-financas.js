/* Animações de 💶 Dinheiro e Casa (formato explicado em animacoes-matematica.js).
   O dinheiro é sempre em euros reais; nada de moedas inventadas. */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const range = (a, b) => { const out = []; for(let i=a;i<b;i++) out.push(i); return out; };
  const moeda = (x, y, txt, cor, o) => g(Object.assign({}, o), c(x,y,15,{fill:cor || "#E0A100", stroke:"#3B372F", sw:1.5})+t(x,y+4,txt,{fs:10, fill:"#3B372F"}));
  const caixa = (x, y, w, h, titulo, cor) => r(x,y,w,h,{rx:8, fill:"var(--surface)", stroke:cor, sw:2})+t(x+w/2,y+18,titulo,{fs:12, fill:cor});

  /* f1 — da troca direta ao euro */
  A.def({id:"dinheiro-historia", mundo:"f1", cor:"m1", titulo:"Da troca direta ao euro", w:480, h:250,
    cena: () =>
      g({id:"troca"}, t(90,80,"🌾",{fs:36})+t(90,108,"padeiro",{fs:11, fw:400})+t(390,80,"🐟",{fs:36})+t(390,108,"pescador",{fs:11, fw:400})+
        p("M140,62 C200,40 280,40 340,62",{stroke:"var(--wc)", sw:2.5})+p("M340,86 C280,108 200,108 140,86",{stroke:"var(--wc)", sw:2.5})+
        t(240,82,"troca?",{fs:13}))+
      t(240,140,"✖ o padeiro não quer peixe",{id:"falha", cls:"an-h", fs:13, fill:"#B5651D"})+
      g({id:"etapas", cls:"an-h"}, l(40,200,440,200,{stroke:"var(--border)", sw:3})+
        [["🔄","troca",70],["🪙","moedas",170],["💶","notas",270],["💳📱","digital",380]].map((e, i) =>
          g({id:"et"+i, cls:"an-h an-pop"}, t(e[2],188,e[0],{fs:24})+c(e[2],200,5,{fill:"var(--wc)"})+t(e[2],222,e[1],{fs:11}))).join(""))+
      g({id:"cent", cls:"an-h"}, moeda(120,140,"1 €","#E0A100")+t(160,145,"=",{fs:16})+
        [["50 c",200,"#E0A100"],["20 c",250,"#E0A100"],["20 c",300,"#E0A100"],["10 c",350,"#E0A100"]].map((m, i) =>
          moeda(m[1],140,m[0],m[2],{id:"cc"+i, cls:"an-h an-pop"})+(i < 3 ? t(m[1]+25,145,"+",{fs:13}) : "")).join("")),
    passos:[
      {t:"Antes do dinheiro, as pessoas faziam <b>troca direta</b>: o padeiro dava trigo e recebia peixe.", f:S => {}},
      {t:"Mas e se o padeiro <b>não quisesse peixe</b>? A troca falhava. Era difícil encontrar quem quisesse exatamente o que tínhamos.", f:S => S.mostrar("#falha")},
      {t:"Por isso inventou-se o <b>dinheiro</b>: primeiro <b>moedas</b> de metal, que toda a gente aceitava.", f:S => { S.esconder(["#troca","#falha"]); S.mostrar(["#etapas","#et0","#et1"]); }},
      {t:"Depois vieram as <b>notas</b> de papel, mais leves de transportar.", f:S => S.mostrar("#et2")},
      {t:"Hoje também se paga com <b>cartão</b> e com o <b>telemóvel</b>: o dinheiro passa de uma conta para outra.", f:S => S.mostrar("#et3")},
      {t:"Em Portugal a moeda é o <b>euro</b> desde 2002. <b>1 € = 100 cêntimos</b>: por exemplo, 50 + 20 + 20 + 10 cêntimos.", f:S => {
        S.esconder("#etapas"); S.mostrar("#cent");
        range(0,4).forEach(i => { if(S.instant) S.mostrar("#cc"+i); else S.depois(() => S.mostrar("#cc"+i), 400+i*450); });
      }}
    ]});

  /* f2 — precisar ou querer */
  const COISAS = [["🍎","lanche da escola","n"],["👟","sapatos (os teus rotos)","n"],["🎮","jogo novo","q"],["🧢","boné de marca","q"]];
  A.def({id:"precisar-querer", mundo:"f2", cor:"m2", titulo:"Precisar ou querer?", w:480, h:250,
    cena: () =>
      caixa(20,120,210,110,"✅ preciso","#3E8F5C")+caixa(250,120,210,110,"💭 quero","#B5651D")+
      COISAS.map((k, i) => g({id:"ob"+i, cls:"an-move", style:"transform:translate("+(i*112)+"px,0px)"}, t(60,60,k[0],{fs:28})+t(60,86,k[1],{fs:9.5, fw:400}))).join("")+
      t(240,30,"",{id:"saldo", fs:14}),
    passos:[
      {t:"Tens de decidir o que fazer com o dinheiro. Primeiro, separa o que <b>precisas</b> do que <b>queres</b>.", f:S => {}},
      {t:"O <b>lanche</b> e uns <b>sapatos</b> novos (quando os teus estão rotos) são <b>necessidades</b>.", f:S => { S.mover("#ob0", "translate(10px,118px)"); S.mover("#ob1", "translate(110px,118px)"); }},
      {t:"Um <b>jogo novo</b> e um <b>boné de marca</b> são <b>desejos</b>: é bom tê-los, mas vive-se bem sem eles.", f:S => { S.mover("#ob2", "translate(240px,118px)"); S.mover("#ob3", "translate(340px,118px)"); }},
      {t:"O dinheiro é <b>limitado</b>. Primeiro as necessidades, depois — se sobrar — um desejo.", f:S => S.texto("#saldo", "Primeiro: ✅  ·  Depois, se sobrar: 💭")},
      {t:"Se escolhes o jogo, <b>abdicas</b> do boné (ou de poupar). A isso chama-se <b>custo de oportunidade</b>.", f:S => { S.texto("#saldo", "Escolho 🎮 → abdico de 🧢"); S.attr("#ob3", "opacity", "0.35"); }}
    ]});

  /* f3 — a semanada em 3 partes e o saldo */
  const POTES = [["gastar",60,"#C7461F"],["poupar",240,"#3E8F5C"],["partilhar",400,"#4F86B3"]];
  A.def({id:"orcamento", mundo:"f3", cor:"m3", titulo:"A semanada: gastar, poupar e partilhar", w:480, h:250,
    cena: () =>
      t(240,26,"Semanada: 10 €",{fs:14})+
      POTES.map(q => r(q[1]-55,140,110,90,{rx:10, fill:"var(--surface)", stroke:q[2], sw:2.5})+t(q[1],245,q[0],{fs:12, fill:q[2]})).join("")+
      range(0,10).map(i => moeda(105+i*30,56,"1 €", i < 6 ? "#E0A100" : i < 9 ? "#7FC79A" : "#8CB8DD", {id:"m"+i, cls:"an-move"})).join("")+
      t(60,130,"",{id:"conta", fs:11.5}),
    passos:[
      {t:"Recebeste uma <b>semanada</b> de 10 €. Antes de gastar, faz um plano: é o teu <b>orçamento</b>.", f:S => {}},
      {t:"<b>6 €</b> vão para <b>gastar</b> (lanches, pequenas compras).", f:S => range(0,6).forEach(i => S.mover("#m"+i, "translate("+(-105-i*30+22+(i%3)*32)+"px,"+(110+Math.floor(i/3)*30)+"px)"))},
      {t:"<b>3 €</b> vão para <b>poupar</b>, para um objetivo.", f:S => range(6,9).forEach(i => S.mover("#m"+i, "translate("+(-105-i*30+208+(i-6)*32)+"px,125px)"))},
      {t:"<b>1 €</b> vai para <b>partilhar</b> (uma prenda, uma causa).", f:S => S.mover("#m9", "translate("+(-105-9*30+400)+"px,125px)")},
      {t:"Durante a semana gastas 2 € num lanche e 1,50 € numa revista. <b>Saldo = 6 − 2 − 1,50 = 2,50 €</b> por gastar.", f:S => {
        S.attr("#m0", "opacity", "0.2"); S.attr("#m1", "opacity", "0.2"); S.attr("#m2", "opacity", "0.6");
        S.texto("#conta", "sobram 2,50 €"); }},
      {t:"Anotar os gastos mostra para onde vai o dinheiro. O que sobra pode ir para a poupança!", f:S => S.texto("#conta", "2,50 € → poupar? 🌱")}
    ]});

  /* f4 — poupar para um objetivo */
  A.def({id:"poupar-objetivo", mundo:"f4", cor:"m4", titulo:"Poupar para um objetivo", w:480, h:250,
    cena: () =>
      t(240,32,"Objetivo: uma bola de 24 € em 8 semanas",{fs:13})+
      t(240,56,"24 € ÷ 8 semanas = 3 € por semana",{id:"conta", cls:"an-h", fs:12, fw:400})+
      r(40,90,400,40,{rx:6, fill:"var(--surface-2)", stroke:"currentColor", sw:2})+
      range(0,8).map(i => g({id:"b"+i, cls:"an-h an-pop"}, r(44+i*49.5,94,46,32,{rx:3, fill:"#6ABE4F", stroke:"#3B372F", sw:1})+t(67+i*49.5,115,"3 €",{fs:10}))).join("")+
      t(240,152,"semana 0 · 0 €",{id:"sem", fs:13})+
      g({id:"juro", cls:"an-h"}, t(240,196,"🏦 No banco: 100 € a 2 % ao ano → +2 € de juros",{fs:12})+t(240,220,"(o juro é o que o banco paga por guardar o teu dinheiro)",{fs:10.5, fw:400})),
    passos:[
      {t:"Um bom objetivo diz <b>o quê</b>, <b>quanto custa</b> e <b>até quando</b>: uma bola de 24 € daqui a 8 semanas.", f:S => {}},
      {t:"Quanto poupar por semana? <b>24 € ÷ 8 = 3 €</b>.", f:S => S.mostrar("#conta")},
      {t:"Semana a semana, a barra enche…", dur:7000, f:S => {
        range(0,4).forEach(i => { if(S.instant) S.mostrar("#b"+i); else S.depois(() => { S.mostrar("#b"+i); S.texto("#sem", "semana "+(i+1)+" · "+(3*(i+1))+" €"+(i === 3 ? " (metade!)" : "")); }, 300+i*900); });
        if(S.instant) S.texto("#sem", "semana 4 · 12 € (metade!)"); }},
      {t:"… até chegar ao objetivo: <b>8 × 3 € = 24 €</b>. 🎉", f:S => { range(0,8).forEach(i => S.mostrar("#b"+i)); S.texto("#sem", "semana 8 · 24 € ✔"); }},
      {t:"Se guardares o dinheiro numa conta, o banco pode pagar <b>juros</b>: 2 % de 100 € são 2 €.", f:S => S.mostrar("#juro")}
    ]});

  /* f5 — preço por kg */
  A.def({id:"preco-kg", mundo:"f5", cor:"m5", titulo:"Qual compensa? O preço por quilo", w:480, h:250,
    cena: () =>
      g({id:"pa"}, r(60,60,60,80,{rx:6, fill:"#4F86B3", stroke:"#3B372F", sw:1.5})+t(90,100,"500 g",{fs:11, fill:"#fff"})+t(90,160,"2,00 €",{fs:14}))+
      g({id:"pa2", cls:"an-h"}, r(130,60,60,80,{rx:6, fill:"#4F86B3", stroke:"#3B372F", sw:1.5})+t(160,100,"500 g",{fs:11, fill:"#fff"})+t(160,160,"2,00 €",{fs:14}))+
      g({id:"pb"}, r(320,40,90,100,{rx:6, fill:"#3E8F5C", stroke:"#3B372F", sw:1.5})+t(365,95,"1 kg",{fs:13, fill:"#fff"})+t(365,160,"3,20 €",{fs:14}))+
      t(125,195,"",{id:"kgA", fs:14, fill:"#C7461F"})+t(365,195,"",{id:"kgB", fs:14, fill:"#3E8F5C"})+
      t(240,232,"",{id:"concl", fs:13}),
    passos:[
      {t:"Arroz: um pacote de <b>500 g a 2,00 €</b> ou um de <b>1 kg a 3,20 €</b>. O mais barato parece o pequeno… mas os pacotes têm tamanhos diferentes!", f:S => {}},
      {t:"Para comparar, vê-se o preço do <b>mesmo peso</b>: 1 kg. São precisos <b>2 pacotes</b> de 500 g.", f:S => S.mostrar("#pa2")},
      {t:"2 × 2,00 € = <b>4,00 € por kg</b>.", f:S => S.texto("#kgA", "4,00 € / kg")},
      {t:"O pacote grande já é de 1 kg: <b>3,20 € por kg</b>.", f:S => S.texto("#kgB", "3,20 € / kg")},
      {t:"Compensa o <b>pacote de 1 kg</b> — desde que se gaste antes de estragar. Este número está na etiqueta da prateleira: o <b>preço por kg</b>.", f:S => { S.texto("#concl", "1 kg compensa: menos 0,80 € por quilo"); S.cls("#pb", "an-pop"); }}
    ]});

  /* f6 — onde se gasta em casa */
  const DIV = [["💡","luz acesa num quarto vazio","apagar ao sair"],["🚿","torneira aberta a lavar os dentes","fechar a torneira"],["📺","televisão em standby","desligar no botão"],["🍲","sobras do jantar","nova refeição"]];
  A.def({id:"casa-poupar", mundo:"f6", cor:"m6", titulo:"Caça aos desperdícios em casa", w:480, h:250,
    cena: () =>
      p("M20,70 L240,14 L460,70",{stroke:"#C7461F", sw:4, lj:"round"})+
      DIV.map((d, i) => { const x = 24+(i%2)*220, y = 76+Math.floor(i/2)*84;
        return r(x,y,212,78,{rx:6, fill:"var(--surface)", stroke:"currentColor", sw:1.5})+t(x+30,y+48,d[0],{fs:26})+
          t(x+122,y+34,d[1],{fs:10, fw:400})+t(x+122,y+58,"✔ "+d[2],{id:"ok"+i, cls:"an-h", fs:11.5, fill:"#3E8F5C"}); }).join(""),
    passos:[
      {t:"Uma casa gasta <b>eletricidade</b>, <b>água</b>, <b>gás</b> e <b>comida</b>. Vamos procurar desperdícios.", f:S => {}},
      {t:"Luz acesa num quarto vazio? <b>Apaga-se ao sair.</b>", f:S => S.mostrar("#ok0")},
      {t:"Torneira aberta enquanto se lavam os dentes? <b>Fecha-se.</b> Um duche curto também gasta menos água do que encher a banheira.", f:S => S.mostrar("#ok1")},
      {t:"A luzinha da televisão em <b>standby</b> mostra que ainda gasta energia. <b>Desliga-se no botão.</b>", f:S => S.mostrar("#ok2")},
      {t:"Sobras do jantar? Guardadas no frigorífico, dão uma <b>nova refeição</b>. Menos desperdício, menos gasto.", f:S => S.mostrar("#ok3")}
    ]});

  /* f7 — detetar uma burla */
  A.def({id:"burla", mundo:"f7", cor:"m7", titulo:"É burla? Os 3 sinais de alerta", w:480, h:250,
    cena: () =>
      r(30,14,180,226,{rx:20, fill:"#3B372F"})+r(40,34,160,190,{rx:8, fill:"#FBF7F0"})+
      t(120,54,"Número desconhecido",{fs:10})+
      g({id:"msg", cls:"an-h"}, r(48,66,144,110,{rx:8, fill:"#fff", stroke:"#C7461F", sw:1.5})+
        t(120,88,"🎁 Ganhaste 1000",{fs:11})+t(120,102,"moedas do jogo!",{fs:11})+
        t(120,124,"⏳ Só tens 5 minutos!",{fs:10.5, fill:"#C7461F"})+t(120,146,"🔑 Envia o código",{fs:10.5})+t(120,160,"que recebeste por SMS",{fs:10, fw:400}))+
      [["s0","1. prémio que não pediste",80],["s1","2. pressa",130],["s2","3. pede um código",180]].map(s =>
        g({id:s[0], cls:"an-h"}, t(340,s[2],"⚠️ "+s[1],{fs:12, fill:"#B5651D"}))).join("")+
      g({id:"fazer", cls:"an-h"}, r(232,200,236,40,{rx:8, fill:"#EAF5EE", stroke:"#3E8F5C", sw:1.5})+t(350,224,"Não respondo · mostro a um adulto · apago",{fs:10.5, fill:"#2E6B44"})),
    passos:[
      {t:"Chega uma mensagem de um <b>número desconhecido</b>…", f:S => S.mostrar("#msg")},
      {t:"Sinal 1: um <b>prémio que não pediste</b>. Ninguém dá moedas ou dinheiro sem razão.", f:S => S.mostrar("#s0")},
      {t:"Sinal 2: <b>pressa</b>. «Só tens 5 minutos» serve para não teres tempo de pensar nem de perguntar.", f:S => S.mostrar("#s1")},
      {t:"Sinal 3: <b>pede um código</b>. Esse código é a chave da conta: quem o tiver pode entrar nela ou fazer pagamentos.", f:S => S.mostrar("#s2")},
      {t:"O que fazer: <b>não respondas</b>, <b>mostra a um adulto</b> e <b>apaga</b> a mensagem. Os códigos são só teus.", f:S => S.mostrar("#fazer")}
    ]});
})();
