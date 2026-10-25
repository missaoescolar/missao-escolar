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
       opts:["📏 Desenhar barras do mesmo comprimento", "🔢 Pôr o mesmo denominador", "👀 Olhar para os numeradores ou para os denominadores", "💡 Pedir a pista"],
       nota:"Nas aulas de Matemática do Japão, a turma compara as estratégias no fim de cada problema. Saber o que te ajuda também é aprender."}
    ]
  }
];
