/* Lista de animações (🎬). Cada uma: {id, mundo (id do mundo), titulo, cor, arena?, w?, h?, cena(kit), passos:[{t, f(S), dur?, fala?, lang?}]}
   - cena: desenho SVG inicial (é refeito sempre que se recua)
   - f(S): o que muda nesse passo. S.mostrar / S.esconder / S.cls / S.mover / S.fluxo / S.onda / S.depois / S.controlo…
   - Classe "an-h" = escondido. As animações contínuas (batimento, respiração…) estão em animacoes.css. */
(function(){
  const A = MissaoAnim, K = A.kit, t = K.t, r = K.r, c = K.c, p = K.p, l = K.l, g = K.g;
  const f1 = v => Math.round(v*10)/10;
  const rad = a => a*Math.PI/180;
  const range = (a, b) => { const out = []; for(let i=a;i<b;i++) out.push(i); return out; };

  /* ======================================================================
     MATEMÁTICA
     ====================================================================== */

  /* n1 — crivo de Eratóstenes */
  const riscar = (k, txt) => ({t:txt, dur:6500, f:S => {
    S.cls("#n"+k, "cv-prime");
    const ms = []; for(let m=2*k;m<=50;m+=k) ms.push("#n"+m);
    S.onda(ms, "cv-out", 110);
  }});
  A.def({id:"crivo", mundo:"n1", cor:"m1", arena:"n1", titulo:"Como encontrar números primos",
    cena: () => range(1,51).map(n => { const i = n-1, x = 32+(i%10)*34, y = 22+Math.floor(i/10)*44;
      return g({id:"n"+n, cls:"cv"}, r(x,y,31,38,{rx:7, cls:"cv-box"})+t(x+15.5,y+25,n,{fs:15})+l(x+4,y+34,x+27,y+5,{cls:"cv-x", sw:3})); }).join(""),
    passos:[
      {t:"Escrevemos os números de 1 a 50. Vamos descobrir os <b>números primos</b> riscando os que <b>não</b> são — é o «crivo de Eratóstenes», inventado há mais de 2000 anos.", f:S => {}},
      {t:"O <b>1</b> não é primo: só tem um divisor. Risca-se.", f:S => S.cls("#n1", "cv-out")},
      riscar(2, "O <b>2</b> é primo! Agora riscamos todos os <b>múltiplos de 2</b>: 4, 6, 8, 10… nenhum deles é primo."),
      riscar(3, "O próximo número por riscar é o <b>3</b>: é primo. Riscamos os <b>múltiplos de 3</b>: 6, 9, 12…"),
      riscar(5, "O 4 já está riscado. O <b>5</b> é primo: riscamos os <b>múltiplos de 5</b>."),
      riscar(7, "O <b>7</b> é primo: riscamos os <b>múltiplos de 7</b>. (Depois do 7 já não é preciso continuar: 11 × 11 = 121 é maior do que 50.)"),
      {t:"Os que sobraram são os <b>primos até 50</b>: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 e 47.", f:S => {
        const pr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
        S.onda(pr.map(n => "#n"+n), "cv-prime", 90);
        S.depois(() => S.cls(".cv-prime", "cv-glow"), 1600);
      }}
    ]});

  /* n2 — somar frações */
  const barra = (id, x, y, w, h, n) => g({id:id}, range(0,n).map(i => r(f1(x+i*w/n),y,f1(w/n),h,{fill:"var(--surface)", stroke:"currentColor", sw:2})).join(""));
  const peca = (id, x, y, w, h, cor) => r(x,y,w,h,{id:id, fill:cor, stroke:"currentColor", sw:2, cls:"an-move"});
  A.def({id:"somar-fracoes", mundo:"n2", cor:"m2", arena:"n2", titulo:"Somar frações", w:440, h:250,
    cena: () =>
      g({id:"ex1"}, barra("bA",60,40,300,44,4)+peca("pa",60,40,75,44,"#E0923A")+t(52,68,"1/4",{fs:16, ta:"end"})+
        barra("bB",60,124,300,44,4)+peca("pb0",60,124,75,44,"#4F86B3")+peca("pb1",135,124,75,44,"#4F86B3")+t(52,152,"2/4",{fs:16, ta:"end"})+
        t(220,220,"1/4 + 2/4 = 3/4",{id:"res1", cls:"an-h", fs:22}))+
      g({id:"ex2", cls:"an-h"}, barra("bC",60,40,300,44,2)+peca("pc",60,40,150,44,"#E0923A")+t(52,68,"1/2",{fs:16, ta:"end"})+
        barra("bD",60,124,300,44,3)+peca("pd",60,124,100,44,"#4F86B3")+t(52,152,"1/3",{fs:16, ta:"end"})+
        g({id:"cortes", cls:"an-h"}, range(1,6).map(k => l(60+50*k,40,60+50*k,84,{da:"5 4", sw:1.5})+l(60+50*k,124,60+50*k,168,{da:"5 4", sw:1.5})).join("")+
          t(368,68,"= 3/6",{fs:15, ta:"start"})+t(368,152,"= 2/6",{fs:15, ta:"start"}))+
        t(220,220,"1/2 + 1/3 = 3/6 + 2/6 = 5/6",{id:"res2", cls:"an-h", fs:20})),
    passos:[
      {t:"Vamos somar <b>1/4 + 2/4</b>. As duas barras estão divididas em <b>4 partes iguais</b> (quartos).", f:S => {}},
      {t:"Como as partes têm o mesmo tamanho, podemos juntar as partes pintadas na mesma barra…", f:S => S.mover("#pb0, #pb1", "translate(75px,-84px)")},
      {t:"1 + 2 = 3 partes de 4: <b>1/4 + 2/4 = 3/4</b>. O denominador não muda — só somamos os numeradores!", f:S => S.mostrar("#res1")},
      {t:"Agora <b>1/2 + 1/3</b>. As partes têm tamanhos diferentes: assim não dá para juntar diretamente.", f:S => { S.esconder("#ex1"); S.mostrar("#ex2"); }},
      {t:"Cortamos as duas barras em <b>sextos</b> (6 é o m.m.c. de 2 e 3): <b>1/2 = 3/6</b> e <b>1/3 = 2/6</b>.", f:S => S.mostrar("#cortes")},
      {t:"Agora as partes são iguais e já podemos juntar: <b>3/6 + 2/6 = 5/6</b>.", f:S => { S.mover("#pd", "translate(150px,-84px)"); S.depois(() => S.mostrar("#res2"), 1100); if(S.instant) S.mostrar("#res2"); }}
    ]});

  /* n3 — percentagens na grelha de 100 */
  A.def({id:"percentagens", mundo:"n3", cor:"m3", arena:"n3", titulo:"O que é uma percentagem?",
    cena: () => g({id:"grelha"}, range(0,100).map(i => r(24+(i%10)*19, 30+Math.floor(i/10)*19, 18, 18, {id:"q"+i, cls:"pc", rx:2})).join(""))+
      g({id:"pA", cls:"an-h"}, t(300,70,"25 em cada 100",{fs:15})+t(300,100,"25% = 25/100",{fs:17})+t(300,130,"= 1/4 = 0,25",{fs:17})+t(300,170,"(um quarto da grelha)",{fs:12, fw:400}))+
      g({id:"pB", cls:"an-h"}, t(300,85,"50% = 50/100",{fs:17})+t(300,115,"= 1/2 = 0,5",{fs:17})+t(300,150,"(metade)",{fs:12, fw:400}))+
      g({id:"pC", cls:"an-h"}, t(300,85,"10% = 10/100",{fs:17})+t(300,115,"= 1/10 = 0,1",{fs:17})+t(300,150,"10% de 70 = 70 ÷ 10 = 7",{fs:13, fw:400})),
    passos:[
      {t:"Esta grelha tem <b>100 quadradinhos</b>: é o todo, ou seja, <b>100%</b>. «Por cento» quer dizer «em cada 100».", f:S => {}},
      {t:"Pintamos <b>25 quadradinhos</b>: são 25 em cada 100, ou seja, <b>25%</b>.", dur:6500, f:S => {
        const ids = []; for(let rr=0; rr<5; rr++) for(let cc=0; cc<5; cc++) ids.push("#q"+(rr*10+cc));
        S.onda(ids, "pc-on", 60); }},
      {t:"Repara: esses 25 quadradinhos são <b>um quarto</b> da grelha. Por isso <b>25% = 25/100 = 1/4 = 0,25</b>.", f:S => S.mostrar("#pA")},
      {t:"E <b>50%</b>? Metade da grelha: <b>50/100 = 1/2 = 0,5</b>.", dur:6500, f:S => {
        S.esconder("#pA"); const ids = []; for(let rr=5; rr<10; rr++) for(let cc=0; cc<5; cc++) ids.push("#q"+(rr*10+cc));
        S.onda(ids, "pc-on", 40); S.mostrar("#pB"); }},
      {t:"<b>10%</b> é uma coluna: 10 em cada 100, a décima parte. Para calcular 10% de um número, basta <b>dividir por 10</b>!", f:S => {
        S.esconder("#pB"); S.onda(range(0,10).map(rr => "#q"+(rr*10+9)), "pc-ten", 80); S.mostrar("#pC"); }}
    ]});

  /* n4 — proporcionalidade: receita */
  const coluna = (id, x, pessoas, ovos, farinha, leite) => g({id:id, cls:"an-h an-pop"},
    r(x-60,26,120,186,{rx:14, fill:"var(--surface)", stroke:"var(--wc)", sw:2})+t(x,52,"👥 "+pessoas+" pessoas",{fs:14})+
    t(x,98,"🥚".repeat(ovos),{fs:18})+t(x,118,ovos+" ovos",{fs:12, fw:400})+t(x,152,farinha+" g farinha",{fs:13})+t(x,188,leite+(leite>1?" copos":" copo")+" de leite",{fs:12}));
  A.def({id:"receita", mundo:"n4", cor:"m4", arena:"n4", titulo:"Proporcionalidade: a receita de panquecas",
    cena: () => coluna("k0",72,4,2,200,1)+coluna("k1",202,8,4,400,2)+coluna("k2",332,12,6,600,3)+
      t(137,125,"× 2",{id:"ar1", cls:"an-h", fs:16, fill:"var(--accent)"})+t(267,125,"× 3",{id:"ar2", cls:"an-h", fs:16, fill:"var(--accent)"})+
      t(200,236,"ovos ÷ pessoas: 2 ÷ 4 = 4 ÷ 8 = 6 ÷ 12 = 0,5",{id:"b1", cls:"an-h", fs:14}),
    passos:[
      {t:"Uma receita de panquecas para <b>4 pessoas</b> leva 2 ovos, 200 g de farinha e 1 copo de leite.", f:S => S.mostrar("#k0")},
      {t:"Para <b>8 pessoas</b> (o dobro), todos os ingredientes ficam a dobrar: <b>× 2</b>.", f:S => { S.mostrar("#ar1"); S.mostrar("#k1"); }},
      {t:"Para <b>12 pessoas</b> (o triplo), tudo <b>× 3</b>.", f:S => { S.mostrar("#ar2"); S.mostrar("#k2"); }},
      {t:"Ovos a dividir por pessoas dá sempre o mesmo: <b>0,5</b> (meio ovo por pessoa). É a <b>constante de proporcionalidade</b>.", f:S => S.mostrar("#b1")},
      {t:"Quando uma grandeza duplica e a outra também duplica, dizemos que são <b>diretamente proporcionais</b>.", f:S => S.cls("#k0, #k1, #k2", "an-pulse")}
    ]});

  /* n5 — área do triângulo e do paralelogramo */
  A.def({id:"area-triangulo", mundo:"n5", cor:"m5", arena:"n5", titulo:"Porque é que a área do triângulo é a metade?", h:250,
    cena: () =>
      g({id:"rc"}, r(60,50,216,120,{fill:"var(--wc-bg)", stroke:"var(--wc)", sw:3})+
        range(1,6).map(k => l(60+36*k,50,60+36*k,170,{sw:1, op:0.3})).join("")+range(1,4).map(k => l(60,50+30*k,276,50+30*k,{sw:1, op:0.3})).join("")+
        t(168,190,"6 cm")+t(50,115,"4 cm",{ta:"end"}))+
      p("M60,170 L276,170 L60,50 Z",{id:"t1", cls:"an-h an-move", fill:"#E0923A", op:0.85})+
      p("M60,50 L276,50 L276,170 Z",{id:"t2", cls:"an-h an-move", fill:"#4F86B3", op:0.85})+
      l(60,170,276,50,{id:"dg", cls:"an-h", stroke:"var(--accent)", sw:3, da:"7 5"})+
      t(200,225,"Área do triângulo = (6 × 4) ÷ 2 = 12 cm²",{id:"f1", cls:"an-h", fs:16})+
      g({id:"pg", cls:"an-h"}, p("M120,180 L240,180 L300,60 L120,60 Z",{fill:"var(--wc-bg)", stroke:"var(--wc)", sw:3})+
        p("M60,180 L120,180 L120,60 Z",{id:"pgc", cls:"an-move", fill:"#E0923A", stroke:"var(--wc)", sw:3})+
        l(120,60,120,180,{da:"5 4", sw:1.5})+t(150,200,"base 6 cm")+t(126,125,"altura 4 cm",{ta:"start", fs:12}))+
      t(200,232,"Área do paralelogramo = base × altura = 6 × 4 = 24 cm²",{id:"f2", cls:"an-h", fs:15}),
    passos:[
      {t:"Este retângulo tem 6 cm por 4 cm. A área é <b>6 × 4 = 24 cm²</b> — conta os quadradinhos!", f:S => {}},
      {t:"Traçamos uma <b>diagonal</b>: o retângulo fica dividido em <b>dois triângulos iguais</b>.", f:S => S.mostrar("#dg, #t1, #t2")},
      {t:"Afastamos um dos triângulos: são iguais, por isso <b>cada um é metade do retângulo</b>.", f:S => S.mover("#t2", "translate(80px,0px)")},
      {t:"Por isso a área do triângulo é <b>(base × altura) ÷ 2</b>: (6 × 4) ÷ 2 = <b>12 cm²</b>.", f:S => S.mostrar("#f1")},
      {t:"E o <b>paralelogramo</b>? Olha para o triângulo laranja do lado esquerdo…", f:S => { S.esconder("#rc, #t1, #t2, #dg, #f1"); S.mostrar("#pg"); }},
      {t:"…cortamo-lo e encaixamo-lo do outro lado: fica um <b>retângulo</b>! Área = <b>base × altura</b> = 6 × 4 = 24 cm².", f:S => { S.mover("#pgc", "translate(180px,0px)"); S.depois(() => S.mostrar("#f2"), 1200); if(S.instant) S.mostrar("#f2"); }}
    ]});

  /* n5 — a soma dos ângulos de um triângulo */
  (function(){
    const TA = [70,170], TB = [330,170], TC = [175,32], P = [200,232], R = 34;
    const dir = (a, b) => { let d = Math.atan2(-(b[1]-a[1]), b[0]-a[0])*180/Math.PI; return (d+360)%360; };
    const sA = 0, alfa = dir(TA,TC);
    const sB = dir(TB,TC), beta = 180 - sB;
    const sC = dir(TC,TA), gama = dir(TC,TB) - sC;
    const fatia = (s, span, cor) => p("M0,0 L"+f1(R*Math.cos(rad(s)))+","+f1(-R*Math.sin(rad(s)))+" A"+R+","+R+" 0 0 0 "+f1(R*Math.cos(rad(s+span)))+","+f1(-R*Math.sin(rad(s+span)))+" Z",{fill:cor, stroke:"var(--surface)", sw:1.5});
    const ang = [Math.round(alfa), Math.round(gama)]; ang.push(180 - ang[0] - ang[1]);
    A.def({id:"angulos-triangulo", mundo:"n5", cor:"m5", arena:"n5", titulo:"Os ângulos de um triângulo somam 180°",
      cena: () => p("M"+TA+" L"+TB+" L"+TC+" Z",{id:"tri", fill:"var(--wc-bg)", stroke:"var(--wc)", sw:3, lj:"round", cls:"an-fade"})+
        g({id:"wA", cls:"an-move", style:"transform:translate("+TA[0]+"px,"+TA[1]+"px) rotate(0deg)"}, fatia(sA, alfa, "#E0923A"))+
        g({id:"wB", cls:"an-move", style:"transform:translate("+TB[0]+"px,"+TB[1]+"px) rotate(0deg)"}, fatia(sB, beta, "#5F9E52"))+
        g({id:"wC", cls:"an-move", style:"transform:translate("+TC[0]+"px,"+TC[1]+"px) rotate(0deg)"}, fatia(sC, gama, "#4F86B3"))+
        g({id:"reta", cls:"an-h"}, l(60,P[1],340,P[1],{sw:3})+t(200,254,"α + γ + β = "+ang[0]+"° + "+ang[1]+"° + "+ang[2]+"° = 180°",{fs:14})),
      passos:[
        {t:"Num triângulo qualquer, pintamos os <b>três ângulos</b> com cores diferentes.", f:S => {}},
        {t:"Imagina que <b>recortas os três cantos</b> do triângulo…", f:S => S.cls("#tri", "an-dim")},
        {t:"…e os juntas <b>lado a lado</b>, com as pontas no mesmo ponto.", dur:6500, f:S => {
          S.mover("#wA", "translate("+P[0]+"px,"+P[1]+"px) rotate(0deg)");
          S.mover("#wC", "translate("+P[0]+"px,"+P[1]+"px) rotate("+f1(-(alfa - sC))+"deg)");
          S.mover("#wB", "translate("+P[0]+"px,"+P[1]+"px) rotate("+f1(-(alfa + gama - sB))+"deg)"); }},
        {t:"Juntos formam uma <b>linha reta</b>: um ângulo raso, de <b>180°</b>. Por isso os ângulos de <b>qualquer</b> triângulo somam 180°!", f:S => S.mostrar("#reta")}
      ]});
  })();

  /* n6 — área do círculo */
  (function(){
    const N = 12, Rr = 80, cx = 110, cy = 128, half = 180/N, w = 2*Rr*Math.sin(rad(half)), x0 = 70, yTop = 70;
    const sector = "M0,0 L"+f1(Rr*Math.cos(rad(90-half)))+","+f1(Rr*Math.sin(rad(90-half)))+" A"+Rr+","+Rr+" 0 0 1 "+f1(Rr*Math.cos(rad(90+half)))+","+f1(Rr*Math.sin(rad(90+half)))+" Z";
    const finalTr = i => { const k = Math.floor(i/2);
      return i%2===0 ? "translate("+f1(x0+k*w)+"px,"+yTop+"px) rotate(0deg)" : "translate("+f1(x0+k*w+w/2)+"px,"+(yTop+Rr)+"px) rotate(180deg)"; };
    A.def({id:"area-circulo", mundo:"n6", cor:"m6", arena:"n6", titulo:"De onde vem a área do círculo (π × r²)?",
      cena: () => range(0,N).map(i => p(sector,{id:"s"+i, cls:"sec an-move "+(i%2 ? "odd" : "even"), style:"transform:translate("+cx+"px,"+cy+"px) rotate("+(i*360/N)+"deg)"})).join("")+
        g({id:"raio"}, l(cx,cy,cx+Rr,cy,{sw:2.5})+t(cx+Rr/2,cy-8,"r",{fs:16}))+
        g({id:"medidas", cls:"an-h"}, l(x0-w/2,yTop+Rr+16,x0+6*w-w/2+w/2,yTop+Rr+16,{sw:2})+t(x0+3*w-w/4,yTop+Rr+36,"≈ metade do perímetro = π × r",{fs:14})+
          l(x0-w/2-14,yTop,x0-w/2-14,yTop+Rr,{sw:2})+t(x0-w/2-20,yTop+Rr/2+5,"r",{fs:16, ta:"end"}))+
        t(200,245,"Área ≈ (π × r) × r = π × r²",{id:"form", cls:"an-h", fs:18}),
      passos:[
        {t:"Um círculo de raio <b>r</b>. Como se calcula a área?", f:S => {}},
        {t:"Cortamos o círculo em <b>12 fatias</b> iguais, como uma pizza.", f:S => S.cls(".sec", "cut")},
        {t:"Arrumamos as fatias lado a lado, uma para cima e outra para baixo…", dur:6800, f:S => { S.esconder("#raio"); range(0,N).forEach(i => S.mover("#s"+i, finalTr(i))); }},
        {t:"…e fica quase um <b>retângulo</b>! A altura é o <b>raio</b> e a base é <b>metade do perímetro</b> (π × r).", f:S => S.mostrar("#medidas")},
        {t:"Área do «retângulo» = base × altura = (π × r) × r. Por isso: <b>área do círculo = π × r²</b>. Quanto mais fatias, mais perfeito fica o retângulo!", f:S => S.mostrar("#form")}
      ]});
  })();

  /* n7 — volume com cubinhos */
  (function(){
    const a = 4, b = 3, cc = 3, u = 30, dx = 15, dy = 12, x0 = 40, y0 = 222;
    const cubo = (x, y, z) => { const X = x0 + x*u + y*dx, Y = y0 - z*u - y*dy;
      return g({id:"cb"+x+y+z, cls:"cb an-h an-pop"},
        r(X, Y-u, u, u, {fill:"#E8C27A", stroke:"#8a6a2a", sw:1.2})+
        p("M"+X+","+(Y-u)+" L"+(X+u)+","+(Y-u)+" L"+(X+u+dx)+","+(Y-u-dy)+" L"+(X+dx)+","+(Y-u-dy)+" Z",{fill:"#F4DCA6", stroke:"#8a6a2a", sw:1.2})+
        p("M"+(X+u)+","+Y+" L"+(X+u+dx)+","+(Y-dy)+" L"+(X+u+dx)+","+(Y-u-dy)+" L"+(X+u)+","+(Y-u)+" Z",{fill:"#C99B4F", stroke:"#8a6a2a", sw:1.2})); };
    let s = ""; for(let y=b-1;y>=0;y--) for(let z=0;z<cc;z++) for(let x=0;x<a;x++) s += cubo(x,y,z);
    const ids = (ys, zs) => { const o = []; zs.forEach(z => ys.forEach(y => range(0,a).forEach(x => o.push("#cb"+x+y+z)))); return o; };
    A.def({id:"volume-cubinhos", mundo:"n7", cor:"m7", arena:"n7", titulo:"Volume: quantos cubinhos cabem?",
      cena: () => s+t(315,95,"",{id:"cnt", fs:22})+t(315,125,"",{id:"cnt2", fs:13, fw:400}),
      passos:[
        {t:"O <b>volume</b> diz quanto espaço ocupa um sólido. Medimo-lo em cubinhos de 1 cm de aresta (<b>1 cm³</b>).", f:S => { S.mostrar("#cb000"); S.texto("#cnt", "1 cm³"); }},
        {t:"Primeiro, uma <b>fila</b> de 4 cubinhos.", f:S => { S.onda(ids([0],[0]), "on", 250); S.texto("#cnt", "4"); }},
        {t:"3 filas fazem uma <b>camada</b>: 4 × 3 = <b>12 cubinhos</b>.", f:S => { S.onda(ids([1,2],[0]), "on", 150); S.texto("#cnt", "4 × 3 = 12"); S.texto("#cnt2", "uma camada"); }},
        {t:"Empilhamos <b>3 camadas</b>: 12 × 3 = <b>36 cubinhos</b>.", dur:6800, f:S => { S.onda(ids([0,1,2],[1,2]), "on", 70); S.texto("#cnt", "12 × 3 = 36"); S.texto("#cnt2", "3 camadas"); }},
        {t:"Volume = comprimento × largura × altura = 4 × 3 × 3 = <b>36 cm³</b>.", f:S => { S.texto("#cnt", "36 cm³"); S.texto("#cnt2", "4 × 3 × 3"); S.cls(".cb", "an-pulse"); }}
      ]});
    // cubes become visible with the class "on" (see animacoes.css)
  })();

  /* n8 — probabilidade: rodar a roleta muitas vezes */
  (function(){
    let st = {v:0, tot:0, rot:0};
    const desenhar = S => {
      const pv = st.tot ? Math.round(st.v/st.tot*100) : 0;
      S.attr("#bv", "width", st.tot ? f1(150*st.v/st.tot) : 0);
      S.attr("#ba", "width", st.tot ? f1(150*(st.tot-st.v)/st.tot) : 0);
      S.texto("#tv", "vermelho: "+st.v+" ("+pv+"%)");
      S.texto("#ta", "azul: "+(st.tot-st.v)+" ("+(st.tot ? 100-pv : 0)+"%)");
      S.texto("#tt", st.tot+" jogadas");
    };
    const rodar = (S, rapido) => {
      const k = Math.floor(Math.random()*4);   // sector 0 = red
      if(k === 0) st.v++; st.tot++;
      const alvo = -(90*k + 45 + (Math.random()*50-25)), base = st.rot + (rapido ? 360 : 720);
      st.rot = base + (((alvo - base) % 360) + 360) % 360;
      S.mover("#rod", "translate(100px,130px) rotate("+st.rot+"deg)");
      desenhar(S);
    };
    const sectors = range(0,4).map(k => { const a0 = -90 + k*90, a1 = a0 + 90, Rr = 80;
      return p("M0,0 L"+f1(Rr*Math.cos(rad(a0)))+","+f1(Rr*Math.sin(rad(a0)))+" A80,80 0 0 1 "+f1(Rr*Math.cos(rad(a1)))+","+f1(Rr*Math.sin(rad(a1)))+" Z",{fill:k===0?"#D1495B":"#4F86B3", stroke:"var(--surface)", sw:3}); }).join("");
    A.def({id:"roleta", mundo:"n8", cor:"m8", arena:"n8", titulo:"Probabilidade: e se rodarmos 200 vezes?",
      cena: () => { st = {v:0, tot:0, rot:0};
        return g({id:"rod", cls:"spin", style:"transform:translate(100px,130px) rotate(0deg)"}, sectors)+c(100,130,7,{fill:"currentColor"})+
          p("M100,38 l-10,-16 h20 z",{fill:"currentColor"})+
          t(290,50,"0 jogadas",{id:"tt", fs:15})+
          r(215,70,150,22,{fill:"var(--surface-2)", rx:6})+r(215,70,0,22,{id:"bv", fill:"#D1495B", rx:6, cls:"bar"})+t(290,110,"vermelho: 0 (0%)",{id:"tv", fs:13})+
          r(215,130,150,22,{fill:"var(--surface-2)", rx:6})+r(215,130,0,22,{id:"ba", fill:"#4F86B3", rx:6, cls:"bar"})+t(290,170,"azul: 0 (0%)",{id:"ta", fs:13})+
          t(290,215,"probabilidade de vermelho: 1/4 = 25%",{fs:12, fw:400}); },
      passos:[
        {t:"A roleta tem <b>4 partes iguais</b> e só <b>1 é vermelha</b>. A probabilidade de calhar vermelho é <b>1/4 = 25%</b>.", f:S => {}},
        {t:"Rodamos <b>4 vezes</b>. Será que sai vermelho exatamente 1 vez? Com poucas jogadas, tudo pode acontecer!", dur:6500, f:S => {
          if(S.instant){ for(let i=0;i<4;i++) rodar(S, true); return; }
          for(let i=0;i<4;i++) S.depois(() => rodar(S, false), 300 + i*1300); }},
        {t:"Agora rodamos <b>200 vezes</b>, muito depressa…", dur:8000, f:S => {
          if(S.instant){ for(let i=0;i<200;i++) rodar(S, true); return; }
          S.cls("#rod", "fast"); let n = 0; S.repetir(() => { if(n++ < 200) rodar(S, true); }, 28); }},
        {t:"Com muitas jogadas, a percentagem de vermelho fica <b>perto de 25%</b> — a probabilidade diz-nos o que acontece «a longo prazo». Experimenta!", f:S => {
          const box = S.controlo('<button type="button" data-n="1">🎡 Rodar 1 vez</button> <button type="button" data-n="100">🎡 Rodar 100 vezes</button> <button type="button" data-n="0">↺ Recomeçar</button>');
          if(!box) return;
          box.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
            const n = +b.dataset.n;
            if(n === 0){ st.v = 0; st.tot = 0; desenhar(S); return; }
            if(n === 1){ S.cls("#rod", "fast", false); rodar(S, false); return; }
            S.cls("#rod", "fast"); for(let i=0;i<n;i++) rodar(S, true);
          }));
        }}
      ]});
  })();
})();
