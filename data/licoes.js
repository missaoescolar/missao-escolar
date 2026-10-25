/* 🧭 Missões guiadas (licoes.js): uma lição-modelo completa por tema, um ecrã de cada vez.
   Nas frases, as frações escrevem-se [2/3]. Tipos de ecrã: texto, exemplo (passo a passo), comparar (duas frações,
   com diagnóstico do erro e perguntas parecidas geradas), escolha (com erros: {índice da opção: explicação} e irma),
   frase (escolher a explicação certa) e estrategia (sem resposta errada).
   Conteúdo original; Aprendizagens Essenciais de Matemática do 6.º ano: comparar e ordenar números racionais
   representados por frações. */
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
  }
];
