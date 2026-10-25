/* 🧭 Missões guiadas (licoes.js): uma lição-modelo completa por tema, um ecrã de cada vez.
   Nas frases, as frações escrevem-se [2/3]. Tipos de ecrã: texto, exemplo (passo a passo), comparar (duas frações,
   com diagnóstico do erro e perguntas parecidas geradas), escolha (com erros: {índice da opção: explicação} e irma),
   frase (escolher a explicação certa) e estrategia (sem resposta errada).
   Conteúdo original; Aprendizagens Essenciais de Matemática do 6.º ano: comparar e ordenar números racionais
   representados por frações. */
/* ⚖️ uma balança em equilíbrio, para as equações: esq e dir são listas de "x" (caixas) e 1 (pesos de 1 kg) */
function BALANCA(esq, dir, rotulo){
  function prato(cx, itens){
    // arruma os objetos em filas de até 104 de largura, cada fila centrada no prato (as caixas ficam em baixo)
    const filas = [[]]; let larg = 0;
    itens.forEach(function(it){
      const w = (it === "x" ? 24 : 14) + 2;
      if(larg + w > 106){ filas.push([]); larg = 0; }
      filas[filas.length-1].push(it); larg += w;
    });
    let s = '', y = 110;
    filas.forEach(function(fila){
      const total = fila.reduce(function(a, it){ return a + (it === "x" ? 26 : 16); }, 0) - 2;
      let x = cx - total / 2, alt = 0;
      fila.forEach(function(it){
        if(it === "x"){
          s += '<rect x="'+x+'" y="'+(y-24)+'" width="24" height="24" rx="3" fill="var(--lic-cor)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="'+(x+12)+'" y="'+(y-7)+'" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">x</text>';
          x += 26; alt = 24;
        } else {
          s += '<rect x="'+x+'" y="'+(y-14)+'" width="14" height="14" fill="var(--surface)" stroke="currentColor" stroke-width="1.2"/><text x="'+(x+7)+'" y="'+(y-3.5)+'" text-anchor="middle" font-size="9" fill="currentColor">1</text>';
          x += 16; alt = Math.max(alt, 14);
        }
      });
      y -= alt + 2;
    });
    return s;
  }
  return '<svg class="lic-ver" viewBox="0 0 340 175" role="img" aria-label="'+rotulo+'">'+
    '<line x1="170" y1="50" x2="170" y2="162" stroke="currentColor" stroke-width="4"/><line x1="140" y1="165" x2="200" y2="165" stroke="currentColor" stroke-width="5"/>'+
    '<line x1="60" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="4"/><circle cx="170" cy="50" r="5" fill="currentColor"/>'+
    '<path d="M60 50 L8 112 M60 50 L112 112 M280 50 L228 112 M280 50 L332 112" stroke="currentColor" stroke-width="1" opacity="0.5" fill="none"/>'+
    '<line x1="4" y1="112" x2="116" y2="112" stroke="currentColor" stroke-width="3"/><line x1="224" y1="112" x2="336" y2="112" stroke="currentColor" stroke-width="3"/>'+
    prato(60, esq)+prato(280, dir)+'</svg>';
}
const MISSAO_LICOES = [
  {
    id:"n2-comparar", mundo:"n2", icon:"🍕", min:10,
    titulo:"Comparar frações",
    resumo:"Qual é maior: 1/3 ou 1/4? Desenhos, um exemplo resolvido, perguntas com ajuda e uma revisão daqui a uns dias.",
    objetivos:["dizer qual de duas frações é maior;","explicar porquê, com barras do mesmo comprimento;","pôr várias frações por ordem."],
    ecras:[
      {etapa:"missao", tipo:"texto", titulo:"🚩 A tua missão", botao:"Começar →",
       html:"<p>Dois grupos de amigos pedem pizas do mesmo tamanho. No grupo do Rui são 3 pessoas e dividem a piza em 3 partes iguais. No grupo da Inês são 4 e dividem a piza em 4 partes iguais.</p><p><b>Em que grupo cada pessoa come mais?</b></p>",
       ver:{pizas:[[1,3],[1,4]]},
       depois:"<p>No fim desta missão vais conseguir:</p><ul class=\"lic-check\"><li>dizer qual de duas frações é maior;</li><li>explicar porquê, com um desenho;</li><li>pôr várias frações por ordem.</li></ul>"},

      {etapa:"compreender", tipo:"texto", titulo:"📖 O número de baixo corta, o de cima conta",
       html:"<p>Numa fração, o <b>denominador</b> (em baixo) diz em quantas partes iguais se corta o todo. O <b>numerador</b> (em cima) diz quantas dessas partes contamos.</p><p>As barras têm todas o mesmo comprimento: é sempre o mesmo todo.</p>",
       ver:{barras:[[1,2],[1,3],[1,4],[1,6]], marca:true},
       depois:"<p class=\"lic-conclusao\">Quanto <b>mais</b> partes, <b>mais pequena</b> é cada parte. Por isso [1/3] &gt; [1/4]: no grupo do Rui cada pessoa come mais, apesar de 3 ser menor do que 4.</p>"},
      {etapa:"compreender", tipo:"texto", titulo:"📖 O mesmo denominador: conta as partes",
       html:"<p>Em [3/5] e [2/5], o todo está cortado da mesma maneira, em 5 partes iguais. As partes têm o mesmo tamanho, por isso basta contar: 3 partes é mais do que 2.</p>",
       ver:{barras:[[3,5],[2,5]], marca:true},
       depois:"<p class=\"lic-conclusao\">Com o mesmo denominador, é maior a fração com o numerador maior: [3/5] &gt; [2/5].</p>"},
      {etapa:"compreender", tipo:"exemplo", titulo:"✏️ Exemplo resolvido: denominadores diferentes",
       q:"Qual é maior: [2/3] ou [3/4]?",
       passos:[
         {t:"<b>Desenha</b> as duas em barras do mesmo comprimento.", ver:{barras:[[2,3],[3,4]], marca:true}},
         {t:"<b>Procura partes do mesmo tamanho.</b> O m.m.c. de 3 e 4 é 12: corta as duas barras em 12 partes.", ver:{barras:[[2,3],[3,4]], sub:12, marca:true}},
         {t:"<b>Escreve frações equivalentes:</b> [2/3] = [8/12] (2 × 4 e 3 × 4) e [3/4] = [9/12] (3 × 3 e 4 × 3).", ver:{barras:[[8,12],[9,12]], marca:true}},
         {t:"<b>Compara</b> como no caso do mesmo denominador: 9 é mais do que 8, por isso [3/4] &gt; [2/3]."}
       ],
       conclusao:"Outra estratégia: às duas falta só uma parte para o todo, mas a parte que falta a [3/4] é mais pequena, porque [1/4] &lt; [1/3]. Duas estratégias, a mesma resposta."},

      {etapa:"experimentar", tipo:"comparar", a:[1,8], b:[1,5],
       ctx:"Duas tabletes de chocolate iguais: uma é partida em 8 pedaços iguais e a outra em 5. Qual pedaço é maior: {A} ou {B} da tablete?"},
      {etapa:"experimentar", tipo:"comparar", a:[4,9], b:[7,9]},
      {etapa:"experimentar", tipo:"comparar", a:[3,4], b:[5,8]},

      {etapa:"sozinho", tipo:"comparar", a:[2,5], b:[2,3]},
      {etapa:"sozinho", tipo:"comparar", a:[3,4], b:[5,6]},
      {etapa:"sozinho", tipo:"escolha", caso:"ordenar",
       q:"Põe por ordem, da menor para a maior: [1/2], [3/8] e [3/4].",
       opts:["[3/8] &lt; [1/2] &lt; [3/4]", "[1/2] &lt; [3/4] &lt; [3/8]", "[3/4] &lt; [3/8] &lt; [1/2]", "[1/2] &lt; [3/8] &lt; [3/4]"], correct:0,
       erros:{
         1:"Parece que ordenaste pelos denominadores (2, 4, 8) como se fossem números inteiros. Escreve as três em oitavos: [1/2] = [4/8], [3/4] = [6/8] e [3/8] fica igual. Agora é só contar: 3, 4 e 6.",
         2:"[3/4] é a maior das três: só lhe falta [1/4] para o todo. Escreve as três em oitavos para confirmar: 3, 4 e 6 oitavos.",
         3:"Quase: falta trocar [1/2] e [3/8]. Em oitavos, [1/2] = [4/8], que é mais do que [3/8]."},
       ver:{barras:[[3,8],[4,8],[6,8]], marca:true},
       porque:"Em oitavos: [3/8], [1/2] = [4/8] e [3/4] = [6/8]. Por ordem, 3, 4 e 6: [3/8] &lt; [1/2] &lt; [3/4].",
       irma:{q:"Põe por ordem, da menor para a maior: [2/5], [1/2] e [7/10].", caso:"ordenar",
         opts:["[2/5] &lt; [1/2] &lt; [7/10]", "[1/2] &lt; [2/5] &lt; [7/10]", "[7/10] &lt; [1/2] &lt; [2/5]"], correct:0,
         ver:{barras:[[4,10],[5,10],[7,10]], marca:true},
         porque:"Em décimos: [2/5] = [4/10], [1/2] = [5/10] e [7/10]. Por ordem, 4, 5 e 7: [2/5] &lt; [1/2] &lt; [7/10]."}},
      {etapa:"sozinho", tipo:"comparar", a:[2,5], b:[3,10], nomes:["O Tiago","A Inês"], iguais:"Construíram o mesmo",
       ctx:"Num jogo de construção, duas torres iguais. O Tiago já construiu {A} da torre dele e a Inês já construiu {B} da dela. Quem construiu mais?"},

      {etapa:"consolidar", tipo:"frase", titulo:"✅ O que descobri?",
       q:"Qual destas frases explica melhor como se comparam frações?",
       opts:["Com o mesmo todo, mais partes iguais quer dizer partes mais pequenas. Se os denominadores forem diferentes, escrevo as duas frações com o mesmo denominador e comparo os numeradores.",
             "A fração com o número de baixo maior é sempre a maior.",
             "A fração com o número de cima maior é sempre a maior."],
       porque:"As outras duas frases tratam a fração como dois números inteiros separados. [1/8] tem o número de baixo maior e é mais pequena do que [1/2]; [2/9] tem o número de cima maior e é mais pequena do que [1/3]."},
      {etapa:"consolidar", tipo:"estrategia", titulo:"🧠 Que estratégia te ajudou mais?",
       q:"Não há resposta errada: serve para saberes o que te ajuda.",
       opts:["📏 Desenhar barras do mesmo comprimento", "🔢 Pôr o mesmo denominador", "👀 Olhar para os numeradores ou para os denominadores", "💡 Pedir a pista"]}
    ]
  },
  {
    // 3.º ano (AE de Matemática 2021): frações unitárias, comparar com o mesmo numerador ou o mesmo denominador,
    // fração de uma quantidade e frações equivalentes simples. Só numeradores 1 nas perguntas geradas.
    id:"t5-partes", mundo:"t5", icon:"🍕", min:10, unitarias:true, dens:[2,3,4,5,6,8,10], casos:["mesmoNum","mesmoDen"],
    titulo:"Partes iguais",
    resumo:"Metade, terço, quarto: qual é maior? Desenhos, um exemplo resolvido, perguntas com ajuda e uma revisão daqui a uns dias.",
    objetivos:["dizer o nome de uma fração (metade, terço, quarto…);","dizer qual de duas frações é maior;","encontrar a fração de uma quantidade."],
    ecras:[
      {etapa:"missao", tipo:"texto", titulo:"🚩 A tua missão", botao:"Começar →",
       html:"<p>Duas pizas iguais. Uma é dividida por 2 amigos e a outra por 3 amigos, sempre em partes iguais.</p><p><b>Em que piza cada amigo come mais?</b></p>",
       ver:{pizas:[[1,2],[1,3]]},
       depois:"<p>No fim desta missão vais conseguir:</p><ul class=\"lic-check\"><li>dizer o nome de uma fração;</li><li>dizer qual de duas frações é maior;</li><li>encontrar a fração de um grupo de coisas.</li></ul>"},

      {etapa:"compreender", tipo:"texto", titulo:"📖 Partes iguais têm nome",
       html:"<p>Quando se divide um todo em partes <b>iguais</b>, cada parte tem um nome: [1/2] é um meio (metade), [1/3] é um terço e [1/4] é um quarto.</p><p>O número de baixo diz em quantas partes se dividiu. O número de cima diz quantas partes contamos.</p>",
       ver:{barras:[[1,2],[1,3],[1,4]], marca:true},
       depois:"<p class=\"lic-conclusao\">Quanto <b>mais</b> partes, <b>mais pequena</b> é cada parte: [1/2] &gt; [1/3] &gt; [1/4]. Na piza dos 2 amigos, cada um come mais.</p>"},
      {etapa:"compreender", tipo:"texto", titulo:"📖 Partes do mesmo tamanho: conta-as",
       html:"<p>Em [2/4] e [3/4], as partes são todas quartos, por isso têm o mesmo tamanho. Basta contar: 3 partes é mais do que 2.</p>",
       ver:{barras:[[2,4],[3,4]], marca:true},
       depois:"<p class=\"lic-conclusao\">Partes do mesmo tamanho: ganha quem tem mais partes. [3/4] &gt; [2/4].</p>"},
      {etapa:"compreender", tipo:"exemplo", titulo:"✏️ Exemplo resolvido: [1/2] é o mesmo que [2/4]",
       q:"Pintas metade de uma barra. Depois cortas cada parte ao meio. Que fração está pintada?",
       passos:[
         {t:"Pinta metade: [1/2].", ver:{barras:[[1,2]]}},
         {t:"Corta cada metade ao meio: agora há 4 partes e 2 estão pintadas.", ver:{barras:[[1,2]], sub:4}},
         {t:"Está pintado [2/4]. A parte pintada não mudou de tamanho: [1/2] = [2/4]."}
       ],
       conclusao:"Frações que valem o mesmo chamam-se <b>frações equivalentes</b>."},

      {etapa:"experimentar", tipo:"comparar", a:[1,4], b:[1,2],
       ctx:"Uma piza foi cortada em 4 partes iguais e outra, igual, em 2. Qual é maior: {A} ou {B} de piza?"},
      {etapa:"experimentar", tipo:"comparar", a:[2,5], b:[4,5]},
      {etapa:"experimentar", tipo:"escolha", caso:"equivalentes",
       q:"Qual destas frações é igual a [1/2]?",
       opts:["[2/4]", "[1/4]", "[2/2]"], correct:0,
       erros:{1:"[1/4] é só um quarto, metade de metade. Repara nas barras: [1/4] é mais curto do que [1/2].", 2:"[2/2] são as duas metades: é a piza inteira!"},
       ver:{barras:[[1,2],[2,4]], marca:true},
       porque:"Se cortares cada metade ao meio, [1/2] fica [2/4]: 4 partes e 2 pintadas.",
       irma:{q:"Qual destas frações é igual a [1/3]?", caso:"equivalentes", opts:["[2/6]", "[1/6]", "[3/3]"], correct:0,
         ver:{barras:[[1,3],[2,6]], marca:true},
         porque:"Se cortares cada terço ao meio, [1/3] fica [2/6]: 6 partes e 2 pintadas."}},

      {etapa:"sozinho", tipo:"comparar", a:[1,5], b:[1,3]},
      {etapa:"sozinho", tipo:"comparar", a:[3,8], b:[5,8]},
      {etapa:"sozinho", tipo:"escolha", caso:"quantidade",
       q:"Quanto é [1/4] de 12 cromos?",
       opts:["3", "4", "48"], correct:0,
       erros:{1:"O 4 é o número de partes, não o que fica em cada parte. Divide os 12 cromos em 4 montes iguais: quantos ficam em cada monte?", 2:"48 é 12 × 4. Mas [1/4] é uma das 4 partes iguais: divide, não multiplica."},
       porque:"12 ÷ 4 = 3: cada quarto tem 3 cromos.",
       irma:{q:"Quanto é [1/3] de 15 berlindes?", caso:"quantidade", opts:["5", "3", "45"], correct:0,
         porque:"15 ÷ 3 = 5: cada terço tem 5 berlindes."}},
      {etapa:"sozinho", tipo:"comparar", a:[1,6], b:[1,4], nomes:["O Rui","A Ana"], iguais:"Comeram o mesmo",
       ctx:"Duas tabletes de chocolate iguais. O Rui comeu {A} da tablete dele e a Ana comeu {B} da dela. Quem comeu mais?"},

      {etapa:"consolidar", tipo:"frase", titulo:"✅ O que descobri?",
       q:"Qual destas frases explica melhor o que descobriste?",
       opts:["Quanto mais partes iguais se fazem no mesmo todo, mais pequena é cada parte. Com partes do mesmo tamanho, é maior a fração que tem mais partes.",
             "A fração com o número de baixo maior é sempre a maior.",
             "As partes de uma fração não precisam de ser iguais."],
       porque:"[1/8] tem o número de baixo maior e é mais pequena do que [1/2]. E uma fração só existe com partes iguais."},
      {etapa:"consolidar", tipo:"estrategia", titulo:"🧠 O que te ajudou mais?",
       q:"Não há resposta errada: serve para saberes o que te ajuda.",
       opts:["📏 Desenhar barras", "🍕 Imaginar pizas", "🔢 Olhar para os números de cima e de baixo", "💡 Pedir a pista"]}
    ]
  },
  {
    // 7.º ano: equações do 1.º grau (AE de Matemática do 7.º ano). A balança mostra o princípio: o mesmo nos dois pratos.
    id:"s3-equacoes", mundo:"s3", icon:"⚖️", min:12,
    titulo:"Resolver equações",
    resumo:"Uma balança em equilíbrio com um valor escondido: descobre-o passo a passo, com ajuda quando precisares e uma revisão daqui a uns dias.",
    objetivos:["resolver equações do 1.º grau, fazendo o mesmo nos dois membros;","juntar as incógnitas num só membro;","traduzir um problema numa equação e verificar a solução."],
    casosNomes:{passo1:"resolver equações com uma só operação", passo2:"resolver equações com duas operações", membros:"juntar as incógnitas num só membro", problema:"traduzir um problema numa equação"},
    ecras:[
      {etapa:"missao", tipo:"texto", titulo:"🚩 A tua missão", botao:"Começar →",
       html:"<p>Uma balança está em equilíbrio. Num prato há 2 caixas iguais e 3 pesos de 1 kg; no outro, 11 pesos de 1 kg.</p><p><b>Quanto pesa cada caixa?</b></p>",
       ver:{svg:BALANCA(["x","x",1,1,1], [1,1,1,1,1,1,1,1,1,1,1], "Balança em equilíbrio: num prato, 2 caixas x e 3 pesos de 1 kg; no outro, 11 pesos de 1 kg.")},
       depois:"<p>No fim desta missão vais conseguir:</p><ul class=\"lic-check\"><li>resolver equações fazendo o mesmo nos dois membros;</li><li>juntar as incógnitas num só membro;</li><li>traduzir um problema numa equação.</li></ul>"},

      {etapa:"compreender", tipo:"texto", titulo:"📖 A regra de ouro: o mesmo nos dois pratos",
       html:"<p>A balança é a equação <b>2x + 3 = 11</b>. Para descobrir x, podes fazer o que quiseres, desde que faças <b>o mesmo nos dois pratos</b>.</p><p>Tira 3 pesos de cada prato: fica 2x = 8.</p>",
       ver:{svg:BALANCA(["x","x"], [1,1,1,1,1,1,1,1], "Depois de tirar 3 pesos de cada prato: 2 caixas x de um lado e 8 pesos do outro.")},
       depois:"<p>Divide cada prato em 2 partes iguais: <b>x = 4</b>. Verifica: 2 × 4 + 3 = 11 ✓.</p><p class=\"lic-conclusao\">Desfaz as operações pela ordem inversa: primeiro o + 3 (tirando 3), depois o × 2 (dividindo por 2).</p>"},
      {etapa:"compreender", tipo:"exemplo", titulo:"✏️ Exemplo resolvido: x dos dois lados",
       q:"Resolve 5x − 2 = 3x + 8.",
       passos:[
         {t:"<b>Junta os x num membro:</b> tira 3x aos dois membros: 5x − 3x − 2 = 8, ou seja, 2x − 2 = 8."},
         {t:"<b>Junta os números no outro:</b> soma 2 aos dois membros: 2x = 10."},
         {t:"<b>Divide pelo coeficiente:</b> x = 10 ÷ 2 = 5."},
         {t:"<b>Verifica:</b> 5 × 5 − 2 = 23 e 3 × 5 + 8 = 23 ✓."}
       ],
       conclusao:"Atalho: um termo muda de membro trocando o sinal. É o mesmo que fazer a mesma operação nos dois membros."},

      {etapa:"experimentar", tipo:"escolha", caso:"passo1", q:"Resolve x + 7 = 12.",
       opts:["x = 5", "x = 19", "x = 12/7"], correct:0,
       erros:{1:"Somaste 7 em vez de o tirar. Para desfazer o + 7, tira 7 aos dois membros: x = 12 − 7.", 2:"O x não está a ser multiplicado por 7: está a ser somado. Tira 7 aos dois membros."},
       pista:"Que número somado com 7 dá 12?",
       porque:"Tira 7 aos dois membros: x = 12 − 7 = 5. Verifica: 5 + 7 = 12 ✓.",
       irma:{q:"Resolve x − 4 = 9.", caso:"passo1", opts:["x = 13", "x = 5", "x = 36"], correct:0, porque:"Soma 4 aos dois membros: x = 13. Verifica: 13 − 4 = 9 ✓."}},
      {etapa:"experimentar", tipo:"escolha", caso:"passo1", q:"Resolve 4x = 28.",
       opts:["x = 7", "x = 24", "x = 112"], correct:0,
       erros:{1:"Tiraste 4, mas 4x quer dizer «4 vezes x»: desfaz-se dividindo por 4.", 2:"Multiplicaste por 4. Para desfazer uma multiplicação, divide."},
       pista:"4x quer dizer 4 vezes x. Qual é a operação contrária da multiplicação?",
       porque:"Divide os dois membros por 4: x = 7. Verifica: 4 × 7 = 28 ✓.",
       irma:{q:"Resolve 6x = 42.", caso:"passo1", opts:["x = 7", "x = 36", "x = 252"], correct:0, porque:"Divide os dois membros por 6: x = 7. Verifica: 6 × 7 = 42 ✓."}},
      {etapa:"experimentar", tipo:"escolha", caso:"passo2", q:"Resolve 2x + 3 = 11.",
       opts:["x = 4", "x = 7", "x = 5,5"], correct:0,
       erros:{1:"Somaste 3 em vez de o tirar (ficou 2x = 14). O + 3 desfaz-se tirando 3: 2x = 8.", 2:"Dividiste por 2 antes de tirar o 3. Primeiro desfaz-se o + 3, depois o × 2."},
       pista:"Primeiro desfaz o + 3, depois o × 2.",
       verPista:{svg:BALANCA(["x","x",1,1,1], [1,1,1,1,1,1,1,1,1,1,1], "Balança: 2 caixas x e 3 pesos de um lado; 11 pesos do outro.")},
       porque:"Tira 3: 2x = 8. Divide por 2: x = 4. Verifica: 2 × 4 + 3 = 11 ✓.",
       irma:{q:"Resolve 3x − 5 = 16.", caso:"passo2", opts:["x = 7", "x = 11/3", "x = 63"], correct:0, porque:"Soma 5: 3x = 21. Divide por 3: x = 7. Verifica: 3 × 7 − 5 = 16 ✓."}},

      {etapa:"sozinho", tipo:"escolha", caso:"membros", q:"Resolve 4x + 1 = x + 13.",
       opts:["x = 4", "x = 2,4", "x = 14/3"], correct:0,
       erros:{1:"Ao passar o x para o 1.º membro, não trocaste o sinal (ficou 5x = 12). Tira x aos dois membros: 4x − x = 3x.", 2:"Somaste o 1 em vez de o tirar (ficou 3x = 14). O + 1 desfaz-se tirando 1: 3x = 12."},
       porque:"4x − x = 13 − 1, ou seja, 3x = 12, logo x = 4. Verifica: 4 × 4 + 1 = 17 e 4 + 13 = 17 ✓.",
       irma:{q:"Resolve 7x − 3 = 2x + 12.", caso:"membros", opts:["x = 3", "x = 1", "x = 5/3"], correct:0, porque:"7x − 2x = 12 + 3, ou seja, 5x = 15, logo x = 3. Verifica: 18 = 18 ✓."}},
      {etapa:"sozinho", tipo:"escolha", caso:"passo2", q:"Resolve 2(x + 3) = 14.",
       opts:["x = 4", "x = 5,5", "x = 11"], correct:0,
       erros:{1:"Multiplicaste só o x por 2 (ficou 2x + 3 = 14). O 2 multiplica tudo o que está dentro dos parênteses: 2x + 6.", 2:"Esqueceste-te do 2 que multiplica os parênteses: 2(x + 3) é o dobro de x + 3."},
       porque:"2x + 6 = 14, logo 2x = 8 e x = 4. Outra maneira: divide primeiro por 2: x + 3 = 7, logo x = 4.",
       irma:{q:"Resolve 3(x − 2) = 15.", caso:"passo2", opts:["x = 7", "x = 17/3", "x = 17"], correct:0, porque:"3x − 6 = 15, logo 3x = 21 e x = 7. Ou: x − 2 = 5, logo x = 7."}},
      {etapa:"sozinho", tipo:"escolha", caso:"problema",
       q:"A Ana tem o triplo dos pontos do Rui. Juntos têm 48. Sendo x os pontos do Rui, que equação resolve o problema?",
       opts:["x + 3x = 48", "3x = 48", "x + 3 = 48"], correct:0,
       erros:{1:"3x são só os pontos da Ana. «Juntos» quer dizer somar os do Rui (x) com os da Ana (3x).", 2:"«O triplo» é multiplicar por 3, não somar 3."},
       porque:"Rui: x. Ana: 3x. Juntos: x + 3x = 48, ou seja, 4x = 48 e x = 12. O Rui tem 12 pontos e a Ana tem 36.",
       irma:{q:"Um número mais o seu dobro dá 27. Que equação traduz isto?", caso:"problema", opts:["x + 2x = 27", "2x = 27", "x + 2 = 27"], correct:0, porque:"O número é x e o dobro é 2x: x + 2x = 27, ou seja, 3x = 27 e x = 9."}},

      {etapa:"consolidar", tipo:"frase", titulo:"✅ O que descobri?",
       q:"Qual destas frases explica melhor como se resolve uma equação?",
       opts:["Faço sempre a mesma operação nos dois membros, para manter o equilíbrio, até o x ficar sozinho; no fim, verifico.",
             "Passo os números para o outro lado sem trocar o sinal.",
             "Experimento números ao calhas até acertar."],
       porque:"Mudar um termo de membro sem trocar o sinal desequilibra a balança. Experimentar ao calhas pode funcionar com números pequenos, mas é lento e não serve para equações mais difíceis."},
      {etapa:"consolidar", tipo:"estrategia", titulo:"🧠 Que estratégia te ajudou mais?",
       q:"Não há resposta errada: serve para saberes o que te ajuda.",
       opts:["⚖️ Pensar na balança", "🔁 Desfazer as operações pela ordem inversa", "↔️ Mudar de membro trocando o sinal", "💡 Pedir a pista"]}
    ],
    // a revisão: 3 destas, ao acaso, daqui a 1, 3 e 7 dias
    revisao:[
      {q:"Resolve x + 9 = 15.", caso:"passo1", opts:["x = 6", "x = 24", "x = 15/9"], correct:0, erros:{1:"Somaste 9 em vez de o tirar: x = 15 − 9."}, porque:"Tira 9 aos dois membros: x = 6."},
      {q:"Resolve 7x = 56.", caso:"passo1", opts:["x = 8", "x = 49", "x = 392"], correct:0, erros:{1:"Tiraste 7, mas 7x quer dizer «7 vezes x»: divide por 7."}, porque:"Divide os dois membros por 7: x = 8."},
      {q:"Resolve 3x + 4 = 19.", caso:"passo2", opts:["x = 5", "x = 23/3", "x = 7"], correct:0, erros:{1:"Somaste 4 em vez de o tirar: fica 3x = 15."}, porque:"Tira 4: 3x = 15. Divide por 3: x = 5. Verifica: 15 + 4 = 19 ✓."},
      {q:"Resolve 5x − 6 = 2x + 9.", caso:"membros", opts:["x = 5", "x = 3/7", "x = 1"], correct:0, erros:{1:"Mudaste termos de membro sem trocar o sinal. Fica 5x − 2x = 9 + 6."}, porque:"5x − 2x = 9 + 6, ou seja, 3x = 15 e x = 5. Verifica: 19 = 19 ✓."},
      {q:"Resolve 4(x − 1) = 20.", caso:"passo2", opts:["x = 6", "x = 21/4", "x = 24"], correct:0, erros:{1:"O 4 multiplica tudo dentro dos parênteses: 4x − 4."}, porque:"4x − 4 = 20, logo 4x = 24 e x = 6. Ou: x − 1 = 5, logo x = 6."},
      {q:"O dobro de um número, menos 5, é 11. Que número é?", caso:"problema", opts:["8", "3", "13"], correct:0, erros:{1:"Tiraste 5 em vez de o somar: 2x − 5 = 11 dá 2x = 16."}, porque:"2x − 5 = 11, logo 2x = 16 e x = 8. Verifica: 2 × 8 − 5 = 11 ✓."}
    ]
  }
];
