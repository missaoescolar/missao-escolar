/* Matemática do 7.º ano. Aprendizagens Essenciais de Matemática do 7.º ano; um mundo por unidade do manual
   «Prisma 7» (ASA, 2 volumes) e do seu caderno de atividades, que servem só de referência (conteúdo original).
   Perguntas: pista (só a pedido) e irma (uma pergunta parecida depois de um erro).
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const MAT7_WORLDS = (function(){
  // exemplo resolvido, no formato dos outros mundos de Matemática (🎯 🚦 👣 ✅ 🔍)
  function EX(title, objetivo, comecar, passos, resultado, verificar){
    return {title:title, svg:'<ul class="wheel-legend">'+
      '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> '+objetivo+'</span></li>'+
      '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> '+comecar+'</span></li>'+
      '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>'+passos.join('<br>')+'</span></li>'+
      '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> '+resultado+'</span></li>'+
      '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> '+verificar+'</span></li></ul>'};
  }
  return [
  {
    id:"s1", num:1, c:"m1", icon:"🌡️",
    title:"Abaixo de Zero",
    subtitle:"Números inteiros e racionais", pages:"Prisma 7, vol. 1, unidade 1 «Números» (a partir da p. 8); caderno de atividades, fichas 1 a 12 (pp. 2–26)",
    lead:"No mundo real há valores abaixo de zero: temperaturas, caves de um prédio, profundidades no mar, saldos. Neste mundo vais trabalhar com números inteiros e racionais, positivos e negativos: compará-los, somá-los, subtraí-los, calcular expressões e percentagens e escrever números enormes ou minúsculos em notação científica.",
    missions:[
      {t:"Termómetro do Inverno", d:"Números inteiros e reta numérica", f:"Regista a temperatura mínima de 5 cidades (numa aplicação de meteorologia ou no jornal), incluindo algumas negativas.\nMarca-as numa reta numérica.\nOrdena-as da mais fria para a mais quente.", xp:10},
      {t:"Elevador do Prédio", d:"Adição e subtração de números inteiros", f:"Imagina um prédio com 3 caves (−1, −2 e −3) e 10 andares.\nInventa 5 viagens de elevador (ex.: no 4.º andar, desce 6) e escreve cada uma como uma conta: 4 + (−6) = −2.\nVerifica na reta numérica.", xp:10},
      {t:"Simétricos e Valor Absoluto", d:"Valor absoluto e números simétricos", f:"Escreve 6 pares de números simétricos (ex.: 7 e −7) e o valor absoluto de cada um.\nExplica com a reta: o valor absoluto é a distância ao zero.", xp:10},
      {t:"Frações com Sinal", d:"Números racionais na reta numérica", f:"Marca numa reta numérica: −1/2, 3/4, −1,25, 0,5 e −3/4.\nOrdena-os do menor para o maior.\nVerifica escrevendo todos como dízimas.", xp:10},
      {t:"Percentagens do Dia a Dia", d:"Problemas com percentagens", f:"Encontra 3 percentagens em folhetos, rótulos ou notícias.\nPara cada uma, calcula o valor (ex.: 20% de desconto em 35 €).\nExplica numa frase o que significa cada uma.", xp:10},
      {t:"Números Gigantes e Minúsculos", d:"Notação científica", f:"Pesquisa a distância média da Terra ao Sol, o número de habitantes do mundo e o tamanho de uma bactéria.\nEscreve cada valor em notação científica.\nOrdena-os do menor para o maior.", xp:10}
    ],
    resumo:[
      "Os <b>números inteiros</b> são …, −3, −2, −1, 0, 1, 2, 3, … Na reta numérica, os negativos estão à esquerda do zero. O zero não é positivo nem negativo.",
      "Dois números são <b>simétricos</b> quando estão à mesma distância do zero, em lados opostos: 5 e −5. O <b>valor absoluto</b> é a distância ao zero: |−5| = |5| = 5.",
      "<b>Comparar</b>: na reta, é maior o número que está mais à direita. Entre dois negativos, é maior o que tem menor valor absoluto: −2 &gt; −7.",
      "<b>Adição</b>: com o mesmo sinal, somam-se os valores absolutos e mantém-se o sinal: (−3) + (−4) = −7. Com sinais diferentes, subtrai-se o menor valor absoluto ao maior e fica o sinal do que tem maior valor absoluto: (−8) + 5 = −3.",
      "<b>Subtração</b>: subtrair é adicionar o simétrico: 3 − 7 = 3 + (−7) = −4; 2 − (−5) = 2 + 5 = 7.",
      "Nas <b>expressões</b>, os sinais antes dos parênteses: +(−3) = −3; −(−3) = +3; −(+3) = −3.",
      "Os <b>números racionais</b> podem escrever-se como fração de dois inteiros (com denominador diferente de 0): −3/4, 0,5, 2, −1,25. Somam-se e subtraem-se com as mesmas regras de sinais.",
      "<b>Percentagem</b>: 20% = 20/100 = 0,2, e 20% de 35 = 0,2 × 35 = 7.",
      "<b>Notação científica</b>: a × 10ⁿ, com 1 ≤ a &lt; 10 e n inteiro. 150 000 000 = 1,5 × 10⁸; 0,0003 = 3 × 10⁻⁴."
    ],
    gloss:[
      ["número inteiro","Um número como …, −2, −1, 0, 1, 2, … (positivos, negativos e o zero)."],
      ["números simétricos","Dois números à mesma distância do zero, em lados opostos (ex.: 4 e −4)."],
      ["valor absoluto","A distância de um número ao zero; nunca é negativo: |−4| = 4."],
      ["número racional","Um número que se pode escrever como fração de dois inteiros (ex.: −3/4, 0,5, 2)."],
      ["reta numérica","Uma reta com o zero ao meio, os positivos à direita e os negativos à esquerda."],
      ["percentagem","Uma fração com denominador 100: 15% = 15/100 = 0,15."],
      ["notação científica","Escrever um número como a × 10ⁿ, com a entre 1 e 10 (ex.: 3 × 10⁸)."]
    ],
    quiz:[
      {q:"Qual é maior: −2 ou −7?", opts:["−2","−7, porque 7 é maior do que 2","São iguais"], correct:0, explain:"Na reta, −2 está mais à direita do que −7. Entre negativos, é maior o que está mais perto do zero. Num termómetro, −2 °C é menos frio do que −7 °C.", pista:"Imagina um termómetro: qual destas temperaturas é menos fria?", irma:{q:"Qual é maior: −10 ou −3?", opts:["−3","−10, porque 10 é maior do que 3","São iguais"], correct:0, explain:"−3 está mais perto do zero, mais à direita na reta: −3 > −10."}},
      {q:"Quanto é (−8) + 5?", opts:["−3","3","−13","13"], correct:0, explain:"Sinais diferentes: 8 − 5 = 3, e fica o sinal do que tem maior valor absoluto (o −8): −3. Na reta: partes do −8 e andas 5 para a direita.", pista:"Na reta numérica, parte do −8 e anda 5 casas para a direita.", irma:{q:"Quanto é (−6) + 9?", opts:["3","−3","−15","15"], correct:0, explain:"Sinais diferentes: 9 − 6 = 3, e fica o sinal do 9 (positivo): 3."}},
      {q:"Quanto é 2 − (−5)?", opts:["7","−3","3","−7"], correct:0, explain:"Subtrair é adicionar o simétrico: 2 − (−5) = 2 + 5 = 7. O −3 é o erro de esquecer que «menos menos» dá «mais».", pista:"Troca a subtração pela adição do simétrico: o simétrico de −5 é 5.", irma:{q:"Quanto é −4 − (−6)?", opts:["2","−10","10","−2"], correct:0, explain:"−4 − (−6) = −4 + 6 = 2."}},
      {q:"Quanto é |−9|?", opts:["9","−9","0","1/9"], correct:0, explain:"O valor absoluto é a distância ao zero, e uma distância nunca é negativa: |−9| = 9."},
      {q:"Quanto é (−3) + (−4)?", opts:["−7","7","−1","1"], correct:0, explain:"Mesmo sinal: somam-se os valores absolutos (3 + 4 = 7) e mantém-se o sinal: −7. Se perdes 3 pontos e depois mais 4, perdes 7.", pista:"Os dois são negativos: o resultado fica mais longe do zero, do lado negativo.", irma:{q:"Quanto é (−5) + (−2)?", opts:["−7","7","−3","3"], correct:0, explain:"Mesmo sinal: 5 + 2 = 7, com sinal negativo: −7."}},
      {q:"Como se escreve 150 000 000 em notação científica?", opts:["1,5 × 10⁸","15 × 10⁷","1,5 × 10⁷","150 × 10⁶"], correct:0, explain:"O primeiro fator tem de estar entre 1 e 10: 1,5. A vírgula andou 8 casas para a esquerda: 10⁸. O 15 × 10⁷ tem o mesmo valor, mas 15 não está entre 1 e 10.", pista:"Põe a vírgula depois do primeiro algarismo e conta quantas casas andou.", irma:{q:"Como se escreve 0,0003 em notação científica?", opts:["3 × 10⁻⁴","3 × 10⁴","0,3 × 10⁻³","3 × 10⁻³"], correct:0, explain:"A vírgula anda 4 casas para a direita até ficar 3: o expoente é −4. O 0,3 × 10⁻³ tem o mesmo valor, mas 0,3 não está entre 1 e 10."}},
      {q:"Quanto é 20% de 35 €?", opts:["7 €","15 €","0,7 €","28 €"], correct:0, explain:"20% = 0,2 e 0,2 × 35 = 7 €. O 28 € é o que fica depois de um desconto de 20% (35 − 7).", pista:"20% é o mesmo que 0,2, ou um quinto."},
      {q:"Qual destas listas está ordenada do menor para o maior?", opts:["−1,25; −3/4; 0,5; 3/4","−3/4; −1,25; 0,5; 3/4","0,5; 3/4; −3/4; −1,25","−1,25; 0,5; −3/4; 3/4"], correct:0, explain:"Em dízimas: −1,25; −0,75; 0,5; 0,75. O −1,25 é o menor porque está mais longe do zero, do lado negativo.", pista:"Escreve todos como dízimas: −3/4 = −0,75."}
    ],
    posters:[
      EX("➕ Exemplo 1 — (−8) + 5 na reta numérica", "o resultado de (−8) + 5.", "marca o −8 na reta numérica.",
        ["Somar 5 é andar 5 casas para a direita: −7, −6, −5, −4, −3."],
        "(−8) + 5 = −3.", "pela regra: sinais diferentes, 8 − 5 = 3, com o sinal do −8 → −3 ✓."),
      EX("🧮 Exemplo 2 — Expressão: 5 − (−2) + (−4) − 6", "o valor de 5 − (−2) + (−4) − 6.", "transforma cada subtração numa adição do simétrico.",
        ["5 − (−2) = 5 + 2 = 7", "7 + (−4) = 3", "3 − 6 = 3 + (−6) = −3"],
        "−3.", "junta os positivos e os negativos: (5 + 2) + (−4 − 6) = 7 − 10 = −3 ✓."),
      EX("🔭 Exemplo 3 — Notação científica: 4 600 000", "escrever 4 600 000 em notação científica.", "o primeiro fator tem de estar entre 1 e 10: 4,6.",
        ["De 4 600 000 até 4,6, a vírgula anda 6 casas para a esquerda.", "4 600 000 = 4,6 × 10⁶."],
        "4,6 × 10⁶.", "4,6 × 1 000 000 = 4 600 000 ✓.")
    ],
    compare:{
      left:{title:"➕ Positivos", points:["À direita do zero","Ganhar pontos, subir andares","Temperaturas acima de 0 °C"]},
      right:{title:"➖ Negativos", points:["À esquerda do zero","Perder pontos, descer às caves","Temperaturas abaixo de 0 °C"]}
    },
    boss:"Prisma 7, vol. 1: «Pratico · Exercícios globais» e «Preparado?» da unidade 1; caderno de atividades: exercícios globais (p. 26) e «Preparado? 1» (pp. 114–125)"
  },
  {
    id:"s2", num:2, c:"m2", icon:"📐",
    title:"Arquiteto de Formas",
    subtitle:"Ângulos, polígonos, áreas e poliedros", pages:"Prisma 7, vol. 1, unidade 2 «Figuras geométricas» (pp. 75–133); caderno de atividades, fichas 1 a 12 (pp. 30–54)",
    lead:"Construir num jogo é pura geometria: paredes paralelas, telhados inclinados, pirâmides e cubos. Neste mundo vais estudar os ângulos entre retas, os quadriláteros, os ângulos de qualquer polígono, as áreas do trapézio, do papagaio e do losango e os poliedros, com a fórmula de Euler.",
    missions:[
      {t:"Retas que se Cruzam", d:"Ângulos verticalmente opostos e alternos internos", f:"Desenha duas retas paralelas cortadas por uma secante.\nMede os 8 ângulos com o transferidor e pinta da mesma cor os que são iguais.\nAssinala um par de ângulos verticalmente opostos e um par de alternos internos.", xp:10},
      {t:"Família dos Quadriláteros", d:"Paralelogramos e trapézios", f:"Desenha um quadrado, um retângulo, um losango, um paralelogramo, um trapézio e um papagaio.\nPara cada um, escreve que lados são paralelos e que lados são iguais.\nFaz um diagrama que mostre quem é caso particular de quem (ex.: o quadrado é um retângulo).", xp:10},
      {t:"A Soma dos Ângulos", d:"Ângulos internos e externos de um polígono", f:"Desenha um pentágono e um hexágono e divide cada um em triângulos a partir de um vértice.\nCalcula a soma dos ângulos internos com (n − 2) × 180°.\nVerifica medindo com o transferidor.", xp:10},
      {t:"Terreno de Construção", d:"Áreas do trapézio, do papagaio e do losango", f:"Desenha em papel quadriculado um trapézio, um losango e um papagaio.\nCalcula as áreas com as fórmulas.\nVerifica contando quadrículas ou recortando e reorganizando as peças.", xp:10},
      {t:"Poliedros de Papel", d:"Poliedros regulares e fórmula de Euler", f:"Constrói um cubo e um tetraedro com papel (pela planificação) ou com palitos e plasticina.\nConta as faces (F), os vértices (V) e as arestas (A).\nVerifica: F + V = A + 2.", xp:10}
    ],
    resumo:[
      "Os <b>ângulos verticalmente opostos</b>, formados por duas retas que se cruzam («em X»), são iguais.",
      "Quando duas <b>retas paralelas</b> são cortadas por uma secante, os <b>ângulos alternos internos</b> (entre as paralelas, em lados opostos da secante, «em Z») são iguais.",
      "<b>Ângulos complementares</b> somam 90°; <b>suplementares</b> somam 180°. A soma dos ângulos internos de um triângulo é 180°.",
      "<b>Paralelogramos</b> têm dois pares de lados paralelos; o retângulo, o losango e o quadrado são casos particulares. Nos paralelogramos, os lados opostos são iguais, os ângulos opostos são iguais e as diagonais cortam-se ao meio.",
      "Um <b>trapézio</b> tem pelo menos um par de lados paralelos (as bases). O <b>papagaio</b> tem dois pares de lados consecutivos iguais e as diagonais perpendiculares.",
      "A soma dos <b>ângulos internos</b> de um polígono convexo com n lados é (n − 2) × 180°: num hexágono, 4 × 180° = 720°. A soma dos <b>ângulos externos</b> (um em cada vértice) é sempre 360°.",
      "<b>Áreas</b>: trapézio = (base maior + base menor) ÷ 2 × altura; losango e papagaio = (diagonal maior × diagonal menor) ÷ 2.",
      "Os <b>poliedros regulares</b> têm todas as faces iguais (polígonos regulares) e o mesmo número de faces em cada vértice. São só 5: tetraedro, cubo, octaedro, dodecaedro e icosaedro.",
      "<b>Fórmula de Euler</b> (poliedros convexos): F + V = A + 2. No cubo: 6 + 8 = 12 + 2."
    ],
    gloss:[
      ["ângulos verticalmente opostos","Ângulos frente a frente, formados por duas retas que se cruzam; são iguais."],
      ["ângulos alternos internos","Ângulos entre duas paralelas, em lados opostos da secante; são iguais."],
      ["ângulos suplementares","Dois ângulos que somam 180°."],
      ["paralelogramo","Um quadrilátero com dois pares de lados paralelos."],
      ["trapézio","Um quadrilátero com pelo menos um par de lados paralelos (as bases)."],
      ["diagonal","Um segmento que une dois vértices não consecutivos de um polígono."],
      ["poliedro regular","Um poliedro com faces iguais (polígonos regulares) e o mesmo número de faces em cada vértice."],
      ["fórmula de Euler","Num poliedro convexo, faces + vértices = arestas + 2."]
    ],
    quiz:[
      {q:"Duas retas cruzam-se e um dos ângulos mede 70°. Quanto mede o ângulo verticalmente oposto?", opts:["70°","110°","20°","290°"], correct:0, explain:"Os ângulos verticalmente opostos são iguais: 70°. O 110° é o ângulo ao lado, que é suplementar (180° − 70°).", pista:"Os verticalmente opostos ficam frente a frente, «em X».", irma:{q:"Duas retas cruzam-se e um ângulo mede 35°. Quanto mede o ângulo ao lado dele (adjacente)?", opts:["145°","35°","55°","325°"], correct:0, explain:"O ângulo adjacente, sobre a mesma reta, é suplementar: 180° − 35° = 145°. O de 35° repete-se no verticalmente oposto."}},
      {q:"Qual é a soma dos ângulos internos de um hexágono?", opts:["720°","540°","1080°","360°"], correct:0, explain:"(n − 2) × 180° = (6 − 2) × 180° = 720°. O 540° é a soma de um pentágono; o 360° é a de um quadrilátero (ou a soma dos ângulos externos).", pista:"Divide o hexágono em triângulos a partir de um vértice: quantos ficam?", irma:{q:"Qual é a soma dos ângulos internos de um octógono?", opts:["1080°","1440°","900°","360°"], correct:0, explain:"(8 − 2) × 180° = 6 × 180° = 1080°."}},
      {q:"Quanto mede cada ângulo interno de um pentágono regular?", opts:["108°","72°","540°","120°"], correct:0, explain:"A soma é (5 − 2) × 180° = 540°. No pentágono regular, os 5 ângulos são iguais: 540° ÷ 5 = 108°. O 72° é o ângulo externo (360° ÷ 5).", pista:"Calcula primeiro a soma de todos e depois divide pelo número de ângulos."},
      {q:"Um trapézio tem bases de 10 cm e 6 cm e altura de 4 cm. Qual é a área?", opts:["32 cm²","64 cm²","240 cm²","20 cm²"], correct:0, explain:"(10 + 6) ÷ 2 × 4 = 8 × 4 = 32 cm². O 64 esquece-se de dividir por 2.", pista:"Faz a média das duas bases e multiplica pela altura.", irma:{q:"Um trapézio tem bases de 12 m e 8 m e altura de 5 m. Qual é a área?", opts:["50 m²","100 m²","480 m²","25 m²"], correct:0, explain:"(12 + 8) ÷ 2 × 5 = 10 × 5 = 50 m²."}},
      {q:"Um losango tem diagonais de 8 cm e 6 cm. Qual é a área?", opts:["24 cm²","48 cm²","14 cm²","28 cm²"], correct:0, explain:"(8 × 6) ÷ 2 = 24 cm². O losango ocupa metade do retângulo de 8 por 6 que o envolve.", pista:"Desenha o retângulo à volta do losango: que parte dele ocupa o losango?", irma:{q:"Um papagaio tem diagonais de 10 cm e 7 cm. Qual é a área?", opts:["35 cm²","70 cm²","17 cm²","34 cm²"], correct:0, explain:"(10 × 7) ÷ 2 = 35 cm²."}},
      {q:"Um poliedro tem 6 faces e 8 vértices. Quantas arestas tem?", opts:["12","14","10","48"], correct:0, explain:"Fórmula de Euler: F + V = A + 2, ou seja, 6 + 8 = A + 2, logo A = 12. É o cubo.", pista:"Usa F + V = A + 2.", irma:{q:"Um poliedro tem 5 faces e 6 vértices. Quantas arestas tem?", opts:["9","11","13","30"], correct:0, explain:"5 + 6 = A + 2, logo A = 9. É o prisma triangular."}},
      {q:"Quantos poliedros regulares existem?", opts:["5","4","6","Infinitos"], correct:0, explain:"São só 5: tetraedro, cubo, octaedro, dodecaedro e icosaedro. Já os matemáticos da Grécia Antiga o sabiam (chamam-lhes «sólidos platónicos»)."},
      {q:"Duas retas paralelas são cortadas por uma secante. Um ângulo alterno interno mede 50°. Quanto mede o outro?", opts:["50°","130°","40°","100°"], correct:0, explain:"Os ângulos alternos internos («em Z») são iguais: 50°.", pista:"Desenha a letra Z: os ângulos dos cantos são iguais."}
    ],
    posters:[
      EX("⬡ Exemplo 1 — O ângulo interno de um hexágono regular", "quanto mede cada ângulo interno de um hexágono regular.", "calcula a soma dos ângulos internos.",
        ["Soma: (6 − 2) × 180° = 720°.", "São 6 ângulos iguais: 720° ÷ 6 = 120°.", "Ângulo externo: 180° − 120° = 60° (e 6 × 60° = 360° ✓)."],
        "120°.", "três hexágonos regulares encaixam à volta de um ponto: 3 × 120° = 360° ✓ (é por isso que os favos das abelhas encaixam)."),
      EX("📏 Exemplo 2 — A área de um trapézio", "a área de um trapézio com bases de 9 cm e 5 cm e altura de 4 cm.", "soma as duas bases.",
        ["9 + 5 = 14.", "Divide por 2: 14 ÷ 2 = 7 (a «base média»).", "Multiplica pela altura: 7 × 4 = 28."],
        "28 cm².", "dois trapézios iguais, um deles virado, formam um paralelogramo de base 14 e altura 4: 56 cm², e metade é 28 ✓."),
      EX("🎲 Exemplo 3 — Euler no octaedro", "verificar a fórmula de Euler no octaedro.", "conta as faces e os vértices.",
        ["Faces: 8 triângulos. Vértices: 6.", "Arestas: cada triângulo tem 3 arestas e cada aresta é partilhada por 2 faces: 8 × 3 ÷ 2 = 12."],
        "F + V = 8 + 6 = 14 e A + 2 = 12 + 2 = 14 ✓.", "constrói o octaedro com palitos e plasticina e conta.")
    ],
    compare:{
      left:{title:"▱ Paralelogramo", points:["Dois pares de lados paralelos","Lados opostos iguais","Área = base × altura"]},
      right:{title:"⏢ Trapézio", points:["Pelo menos um par de lados paralelos (as bases)","Os lados não paralelos podem ser diferentes","Área = (B + b) ÷ 2 × altura"]}
    },
    boss:"Prisma 7, vol. 1: «Pratico · Exercícios globais» e «Preparado?» da unidade 2 (pp. 114–130); caderno de atividades: exercícios globais (p. 54)"
  },
  {
    id:"s3", num:3, c:"m3", icon:"⚖️",
    title:"A Balança das Equações",
    subtitle:"Equações do 1.º grau", pages:"Prisma 7, vol. 1, unidade 3 «Equações» (pp. 136–166); caderno de atividades, fichas 1 a 4 (pp. 58–66)",
    lead:"Uma equação é uma balança em equilíbrio com um valor escondido. Neste mundo vais descobrir esse valor: resolver equações do 1.º grau fazendo o mesmo nos dois pratos da balança e traduzir problemas em equações. Começa pela missão guiada.",
    missions:[
      {t:"Balança Escondida", d:"Equações como balanças", f:"Desenha 3 balanças em equilíbrio com caixas de massa desconhecida (x) e pesos conhecidos.\nEscreve a equação de cada uma (ex.: 2x + 3 = 11).\nResolve tirando o mesmo dos dois pratos.", xp:10},
      {t:"É ou Não É Solução?", d:"Solução de uma equação", f:"Na equação 3x − 4 = 11, testa x = 3, x = 5 e x = 7, substituindo.\nQual torna a igualdade verdadeira?\nInventa uma equação cuja solução seja o dia do teu aniversário.", xp:10},
      {t:"Arrumar a Equação", d:"Termos semelhantes e princípios de equivalência", f:"Resolve passo a passo, escrevendo em cada linha o princípio que usaste: 5x − 2 = 3x + 8 e 2(x + 3) = 14.\nVerifica substituindo a solução.", xp:10},
      {t:"Possível ou Impossível?", d:"Classificar equações", f:"Resolve 2x + 1 = 2x + 5 e 3(x − 1) = 3x − 3.\nO que acontece ao x em cada uma?\nClassifica cada equação e explica.", xp:10},
      {t:"Problemas em Equação", d:"Resolver problemas com equações", f:"Escolhe 2 problemas do caderno de atividades (ou inventa-os com um jogo: «tenho o triplo dos pontos do meu amigo e juntos temos 48»).\nEscreve a incógnita, a equação, resolve e responde com uma frase.", xp:10},
      {t:"Missão Guiada", d:"A missão guiada do 📖 Aprender", f:"Abre o 📖 Aprender deste mundo e faz a missão guiada até ao fim.\nDaqui a uns dias faz a revisão de 3 perguntas.", xp:10}
    ],
    resumo:[
      "Uma <b>equação</b> é uma igualdade com pelo menos uma letra, a <b>incógnita</b>: por exemplo, 2x + 3 = 11. O que está à esquerda do sinal = é o 1.º membro; o que está à direita é o 2.º membro.",
      "A <b>solução</b> (ou raiz) é o valor da incógnita que torna a igualdade verdadeira: x = 4 é solução de 2x + 3 = 11, porque 2 × 4 + 3 = 11.",
      "<b>Equações equivalentes</b> têm as mesmas soluções.",
      "<b>Princípio da adição</b>: pode adicionar-se (ou subtrair-se) o mesmo número aos dois membros. Na prática, um termo muda de membro trocando o sinal.",
      "<b>Princípio da multiplicação</b>: podem multiplicar-se (ou dividir-se) os dois membros pelo mesmo número diferente de zero.",
      "<b>Termos semelhantes</b> têm a mesma parte literal e juntam-se: 5x − 3x = 2x.",
      "Passos: 1) desembaraçar de parênteses; 2) termos com incógnita num membro e números no outro; 3) reduzir os termos semelhantes; 4) dividir pelo coeficiente da incógnita; 5) verificar.",
      "<b>Classificação</b>: possível e determinada (uma só solução); impossível (fica 0x = 5: nenhuma solução); possível e indeterminada (fica 0x = 0: todos os números são solução)."
    ],
    gloss:[
      ["equação","Uma igualdade com pelo menos uma incógnita (ex.: 2x + 3 = 11)."],
      ["incógnita","A letra que representa o valor desconhecido."],
      ["membro","Cada um dos lados do sinal = numa equação."],
      ["solução","O valor da incógnita que torna a igualdade verdadeira."],
      ["termos semelhantes","Termos com a mesma parte literal, que se podem juntar (ex.: 5x e −3x)."],
      ["coeficiente","O número que multiplica a incógnita (em 7x, o coeficiente é 7)."],
      ["equação impossível","Uma equação sem nenhuma solução."],
      ["equação indeterminada","Uma equação em que todos os números são solução."]
    ],
    quiz:[
      {q:"Qual é a solução de x + 7 = 12?", opts:["5","19","7/12","−5"], correct:0, explain:"Tira 7 aos dois membros: x = 12 − 7 = 5. Verifica: 5 + 7 = 12 ✓. O 19 soma em vez de subtrair.", pista:"Que número somado com 7 dá 12?", irma:{q:"Qual é a solução de x − 4 = 9?", opts:["13","5","−13","36"], correct:0, explain:"Soma 4 aos dois membros: x = 9 + 4 = 13. Verifica: 13 − 4 = 9 ✓."}},
      {q:"Qual é a solução de 3x = 21?", opts:["7","18","63","24"], correct:0, explain:"Divide os dois membros por 3: x = 7. O 18 tira 3 em vez de dividir; o 63 multiplica.", pista:"3x quer dizer «3 vezes x».", irma:{q:"Qual é a solução de 5x = 40?", opts:["8","35","200","45"], correct:0, explain:"x = 40 ÷ 5 = 8. Verifica: 5 × 8 = 40 ✓."}},
      {q:"Qual é a solução de 2x + 3 = 11?", opts:["4","7","5,5","8"], correct:0, explain:"Primeiro tira 3: 2x = 8. Depois divide por 2: x = 4. Verifica: 2 × 4 + 3 = 11 ✓. O 7 vem de somar 3 em vez de o tirar (2x = 14); o 5,5 divide por 2 antes de tirar o 3.", pista:"Desfaz pela ordem inversa: primeiro o + 3, depois o × 2.", irma:{q:"Qual é a solução de 3x − 5 = 16?", opts:["7","11/3","3,7","63"], correct:0, explain:"Soma 5: 3x = 21. Divide por 3: x = 7. Verifica: 3 × 7 − 5 = 16 ✓."}},
      {q:"Qual é a solução de 5x − 2 = 3x + 8?", opts:["5","3","10","1,25"], correct:0, explain:"Incógnitas num membro e números no outro: 5x − 3x = 8 + 2, ou seja, 2x = 10, logo x = 5. Verifica: 23 = 23 ✓. O 1,25 vem de não trocar o sinal do 3x ao mudá-lo de membro (8x = 10).", pista:"Junta os termos com x num membro e os números no outro. Ao mudar de membro, troca o sinal.", irma:{q:"Qual é a solução de 4x + 1 = x + 13?", opts:["4","12","2,4","14"], correct:0, explain:"4x − x = 13 − 1, ou seja, 3x = 12, logo x = 4. Verifica: 17 = 17 ✓."}},
      {q:"Qual é a solução de 2(x + 3) = 14?", opts:["4","5,5","8","11"], correct:0, explain:"Desembaraça de parênteses: 2x + 6 = 14. Então 2x = 8 e x = 4. O 5,5 só multiplicou o x por 2 (2x + 3 = 14).", pista:"O 2 multiplica tudo o que está dentro dos parênteses.", irma:{q:"Qual é a solução de 3(x − 2) = 15?", opts:["7","17/3","17","3"], correct:0, explain:"3x − 6 = 15, logo 3x = 21 e x = 7. Verifica: 3 × (7 − 2) = 15 ✓."}},
      {q:"Como se classifica a equação 2x + 1 = 2x + 5?", opts:["Impossível","Possível e determinada","Possível e indeterminada"], correct:0, explain:"Ao juntar os x, fica 0x = 4. Nenhum número multiplicado por 0 dá 4, por isso não tem solução: é impossível.", pista:"Junta os termos com x num membro: o que acontece?", irma:{q:"Como se classifica a equação 3(x − 1) = 3x − 3?", opts:["Possível e indeterminada","Impossível","Possível e determinada"], correct:0, explain:"3x − 3 = 3x − 3 dá 0x = 0: qualquer número é solução. É possível e indeterminada."}},
      {q:"O triplo de um número, mais 4, é 25. Que equação traduz o problema?", opts:["3x + 4 = 25","3(x + 4) = 25","x + 3 + 4 = 25","4x + 3 = 25"], correct:0, explain:"«O triplo de um número» é 3x; «mais 4» junta 4: 3x + 4 = 25 (e x = 7). 3(x + 4) seria «o triplo de um número mais 4», tudo junto.", pista:"Traduz por partes: «o triplo de um número» é 3x."},
      {q:"x = 3 é solução de 4x − 5 = 7?", opts:["Sim, porque 4 × 3 − 5 = 7","Não, porque 4 + 3 − 5 = 2","Não, porque 3 não é par","Não se pode saber sem resolver"], correct:0, explain:"Substitui x por 3: 4 × 3 − 5 = 12 − 5 = 7 ✓. Para verificar uma solução, basta substituir."}
    ],
    posters:[
      EX("⚖️ Exemplo 1 — 2x + 3 = 11 com uma balança", "quanto vale x em 2x + 3 = 11.", "num prato estão 2 caixas iguais (x) e 3 pesos de 1; no outro, 11 pesos de 1.",
        ["Tira 3 pesos de cada prato: 2x = 8.", "Divide cada prato em 2 partes iguais: x = 4."],
        "x = 4.", "2 × 4 + 3 = 11 ✓."),
      EX("🧹 Exemplo 2 — 3(x − 2) + 4 = x + 10", "a solução de 3(x − 2) + 4 = x + 10.", "desembaraça de parênteses.",
        ["3x − 6 + 4 = x + 10", "Reduz: 3x − 2 = x + 10", "Incógnitas à esquerda, números à direita: 3x − x = 10 + 2", "2x = 12", "x = 6"],
        "x = 6 (possível e determinada).", "3 × (6 − 2) + 4 = 16 e 6 + 10 = 16 ✓."),
      EX("🧩 Exemplo 3 — Um problema", "a Ana tem o triplo dos pontos do Rui e, juntos, têm 48. Quantos pontos tem cada um?", "escolhe a incógnita: x = pontos do Rui. A Ana tem 3x.",
        ["Equação: x + 3x = 48", "4x = 48", "x = 12"],
        "O Rui tem 12 pontos e a Ana tem 36.", "12 + 36 = 48 e 36 = 3 × 12 ✓.")
    ],
    compare:{
      left:{title:"✏️ Expressão", points:["Não tem sinal =","Simplifica-se (ex.: 5x − 3x = 2x)","Não se «resolve»"]},
      right:{title:"⚖️ Equação", points:["Tem sinal =","Resolve-se: descobre-se o valor de x","Verifica-se substituindo"]}
    },
    boss:"Prisma 7, vol. 1: «Pratico · Exercícios globais» e «Preparado?» da unidade 3 (pp. 154–165); caderno de atividades: exercícios globais (p. 66)"
  },
  {
    id:"s4", num:4, c:"m4", icon:"📈",
    title:"Máquinas de Funções",
    subtitle:"Sequências, referencial cartesiano e funções", pages:"Prisma 7, vol. 2, unidade 4 «Sequências e funções» (pp. 6–46); caderno de atividades, fichas 1 a 8 (pp. 70–86)",
    lead:"Uma função é como uma máquina de um jogo: entra um número, sai outro, sempre pela mesma regra. Neste mundo vais encontrar o termo geral de uma sequência, marcar pontos no referencial cartesiano, representar funções de várias formas e estudar a proporcionalidade direta.",
    missions:[
      {t:"Regra Secreta", d:"Termo geral de uma sequência", f:"Com palitos, constrói quadrados lado a lado: 1 quadrado (4 palitos), 2 quadrados (7), 3 quadrados (10).\nEscreve o termo geral (3n + 1) e verifica para n = 4.\nQuantos palitos são precisos para 20 quadrados?", xp:10},
      {t:"Batalha Naval Cartesiana", d:"Referencial cartesiano", f:"Desenha um referencial com x e y de −5 a 5 e esconde 4 navios em pontos (x, y).\nJoga com alguém, dizendo pares ordenados.\nRegista em que quadrante ficou cada navio.", xp:10},
      {t:"Quatro Maneiras", d:"Formas de representar uma função", f:"Escolhe a função «o preço de n bilhetes a 3 € cada».\nRepresenta-a por palavras, numa tabela, num gráfico e com uma expressão (f(n) = 3n).\nIndica o domínio e o contradomínio para n de 1 a 5.", xp:10},
      {t:"Receita Proporcional", d:"Proporcionalidade direta como função", f:"Escolhe uma receita e faz uma tabela com as quantidades para 2, 4, 6 e 8 pessoas.\nCalcula a constante de proporcionalidade.\nDesenha o gráfico: é uma reta que passa pela origem?", xp:10},
      {t:"Ler Gráficos", d:"Interpretação de gráficos cartesianos", f:"Desenha o gráfico da distância a casa ao longo de um passeio de bicicleta (inventado), com subidas, paragens e regresso.\nEscreve uma frase para cada troço do gráfico.", xp:10}
    ],
    resumo:[
      "O <b>termo geral</b> de uma sequência dá qualquer termo a partir da ordem n. Em 4, 7, 10, 13, …, o termo geral é 3n + 1: cresce 3 de cada vez e, para n = 1, dá 3 + 1 = 4.",
      "Num <b>referencial cartesiano</b>, cada ponto é dado por um par ordenado (x, y): primeiro a <b>abcissa</b> (eixo horizontal), depois a <b>ordenada</b> (eixo vertical). A origem é o ponto (0, 0).",
      "Uma <b>função</b> é uma correspondência em que a cada elemento do domínio (objeto) corresponde <b>um e um só</b> elemento do conjunto de chegada (imagem).",
      "O <b>domínio</b> é o conjunto dos objetos; o <b>contradomínio</b> é o conjunto das imagens.",
      "Uma função pode representar-se por palavras, por um diagrama de setas, por uma tabela, por um gráfico ou por uma expressão algébrica, como f(x) = 2x + 1.",
      "Duas grandezas são <b>diretamente proporcionais</b> quando o quociente y ÷ x é sempre o mesmo (a <b>constante de proporcionalidade</b> k). A função é f(x) = kx e o gráfico é uma reta que passa pela origem.",
      "Num gráfico de uma situação real, um troço horizontal quer dizer que a grandeza não mudou (por exemplo, uma paragem)."
    ],
    gloss:[
      ["termo geral","A expressão que dá qualquer termo de uma sequência a partir da sua ordem n."],
      ["referencial cartesiano","Dois eixos perpendiculares, numerados, que se cruzam na origem."],
      ["par ordenado","O par (x, y) que localiza um ponto: primeiro x, depois y."],
      ["abcissa","A primeira coordenada de um ponto (eixo horizontal)."],
      ["ordenada","A segunda coordenada de um ponto (eixo vertical)."],
      ["função","Uma correspondência em que cada objeto tem uma e uma só imagem."],
      ["domínio","O conjunto dos objetos de uma função."],
      ["contradomínio","O conjunto das imagens de uma função."],
      ["constante de proporcionalidade","O quociente, sempre igual, entre duas grandezas diretamente proporcionais."]
    ],
    quiz:[
      {q:"Qual é o termo geral da sequência 4, 7, 10, 13, …?", opts:["3n + 1","n + 3","4n","3n + 4"], correct:0, explain:"Cresce 3 de cada vez, por isso tem 3n. Para n = 1: 3 × 1 + 1 = 4 ✓; para n = 2: 7 ✓. O 3n + 4 daria 7 no 1.º termo.", pista:"Quanto cresce de um termo para o seguinte? Esse número multiplica o n.", irma:{q:"Qual é o termo geral da sequência 5, 9, 13, 17, …?", opts:["4n + 1","n + 4","5n","4n + 5"], correct:0, explain:"Cresce 4 de cada vez: 4n. Para n = 1: 4 + 1 = 5 ✓."}},
      {q:"Qual é o 20.º termo da sequência de termo geral 3n + 1?", opts:["61","23","60","64"], correct:0, explain:"3 × 20 + 1 = 61. O 23 soma 3 em vez de multiplicar.", pista:"Substitui n por 20."},
      {q:"Em que quadrante está o ponto (−3, 2)?", opts:["2.º quadrante","1.º quadrante","3.º quadrante","4.º quadrante"], correct:0, explain:"x negativo (para a esquerda) e y positivo (para cima): 2.º quadrante. Os quadrantes contam-se a partir do de cima à direita, no sentido contrário ao dos ponteiros do relógio.", pista:"Primeiro anda na horizontal (x), depois na vertical (y).", irma:{q:"Em que quadrante está o ponto (4, −1)?", opts:["4.º quadrante","1.º quadrante","2.º quadrante","3.º quadrante"], correct:0, explain:"x positivo (para a direita) e y negativo (para baixo): 4.º quadrante."}},
      {q:"Se f(x) = 2x + 1, quanto é f(3)?", opts:["7","9","6","5"], correct:0, explain:"Substitui x por 3: 2 × 3 + 1 = 7. O 9 calcula (2 + 1) × 3; o 6 esquece o + 1.", pista:"Troca o x por 3 e calcula.", irma:{q:"Se g(x) = 5x − 2, quanto é g(4)?", opts:["18","12","22","20"], correct:0, explain:"5 × 4 − 2 = 20 − 2 = 18."}},
      {q:"Qual destas correspondências NÃO é uma função?", opts:["Cada aluno → as suas disciplinas preferidas (pode ter várias)","Cada pessoa → a sua data de nascimento","Cada número → o seu dobro","Cada carro → a sua matrícula"], correct:0, explain:"Numa função, a cada objeto corresponde uma só imagem. Um aluno pode ter várias disciplinas preferidas, por isso esta correspondência não é uma função."},
      {q:"O preço dos bilhetes é diretamente proporcional ao número de bilhetes: 4 bilhetes custam 12 €. Quanto custam 7?", opts:["21 €","15 €","28 €","84 €"], correct:0, explain:"A constante é 12 ÷ 4 = 3 € por bilhete. 7 × 3 = 21 €. O 15 € soma 3 aos 12 € em vez de multiplicar.", pista:"Quanto custa um bilhete?", irma:{q:"3 kg de laranjas custam 4,50 €. Quanto custam 5 kg, ao mesmo preço por quilo?", opts:["7,50 €","6,50 €","22,50 €","9,00 €"], correct:0, explain:"1 kg custa 4,50 ÷ 3 = 1,50 €. 5 × 1,50 = 7,50 €."}},
      {q:"Como é o gráfico de uma função de proporcionalidade direta?", opts:["Uma reta que passa pela origem","Uma reta que nunca passa pela origem","Uma curva","Pontos sempre na horizontal"], correct:0, explain:"f(x) = kx: quando x = 0, f(0) = 0, e cresce sempre ao mesmo ritmo. É uma reta que passa pela origem."},
      {q:"Num gráfico da distância a casa ao longo do tempo, um troço horizontal quer dizer:", opts:["que a pessoa esteve parada","que voltou para casa","que andou muito depressa","que o gráfico tem um erro"], correct:0, explain:"No troço horizontal o tempo passa, mas a distância não muda: a pessoa esteve parada."}
    ],
    posters:[
      EX("🔢 Exemplo 1 — Termo geral de 2, 5, 8, 11, …", "o termo geral da sequência e o 50.º termo.", "calcula a diferença entre termos seguidos: 3.",
        ["A diferença é 3, por isso o termo geral tem 3n.", "Para n = 1, 3n dá 3, mas o termo é 2: falta tirar 1.", "Termo geral: 3n − 1."],
        "3n − 1. O 50.º termo é 3 × 50 − 1 = 149.", "para n = 4: 3 × 4 − 1 = 11 ✓."),
      EX("📊 Exemplo 2 — Uma função de quatro maneiras", "representar «cada bilhete custa 3 €».", "escolhe as letras: n = número de bilhetes e f(n) = preço.",
        ["Por palavras: o preço é o triplo do número de bilhetes.", "Tabela: 1 → 3; 2 → 6; 3 → 9; 4 → 12.", "Expressão: f(n) = 3n.", "Gráfico: os pontos (1, 3), (2, 6), (3, 9) e (4, 12) estão alinhados com a origem."],
        "Domínio {1, 2, 3, 4}; contradomínio {3, 6, 9, 12}; constante de proporcionalidade 3.", "12 ÷ 4 = 9 ÷ 3 = 3 ✓.")
    ],
    compare:{
      left:{title:"✅ É função", points:["Cada objeto tem uma só imagem","Ex.: cada pessoa → a sua idade","Dois objetos podem ter a mesma imagem"]},
      right:{title:"❌ Não é função", points:["Há um objeto com duas ou mais imagens","Ex.: cada pessoa → os seus irmãos","Ou há um objeto sem imagem"]}
    },
    boss:"Prisma 7, vol. 2: «Pratico · Exercícios globais» e «Preparado?» da unidade 4; caderno de atividades: exercícios globais (p. 86)"
  },
  {
    id:"s5", num:5, c:"m5", icon:"🔍",
    title:"Zoom Semelhante",
    subtitle:"Figuras semelhantes", pages:"Prisma 7, vol. 2, unidade 5 «Figuras semelhantes» (pp. 50–99); caderno de atividades, fichas 1 a 5 (pp. 90–100)",
    lead:"Quando fazes zoom num mapa de um jogo, tudo fica maior, mas a forma não muda: é uma semelhança. Neste mundo vais reconhecer e construir figuras semelhantes, usar a razão de semelhança para calcular perímetros e áreas e usar os critérios de semelhança de triângulos para medir o que não se consegue medir diretamente.",
    missions:[
      {t:"Ampliar em Quadrícula", d:"Construção de figuras semelhantes", f:"Desenha uma figura simples em papel quadriculado.\nAmplia-a com razão 2 e reduz-a com razão 1/2.\nVerifica: os ângulos mantêm-se e todos os lados ficaram multiplicados pelo mesmo número.", xp:10},
      {t:"A Fotografia", d:"Razão de semelhança", f:"Mede uma fotografia e uma ampliação ou redução dela (ou a mesma imagem no ecrã com zoom).\nCalcula a razão entre comprimentos correspondentes.\nVerifica com outro par de medidas.", xp:10},
      {t:"Perímetro e Área no Zoom", d:"Perímetros e áreas de figuras semelhantes", f:"Desenha um retângulo de 3 por 2 e um semelhante com razão 3.\nCalcula os perímetros e as áreas.\nQue relação descobres entre as razões?", xp:10},
      {t:"Medir a Árvore pela Sombra", d:"Semelhança de triângulos", f:"Num dia de sol, mede a tua altura e a tua sombra; à mesma hora, mede a sombra de uma árvore ou de um poste.\nUsa triângulos semelhantes (critério AA) para calcular a altura.\nExplica porque é que os triângulos são semelhantes.", xp:10},
      {t:"Critérios em Ação", d:"Critérios AA, LLL e LAL", f:"Desenha 3 pares de triângulos semelhantes, um para cada critério.\nEscreve, para cada par, as medidas que usaste para o mostrar.", xp:10}
    ],
    resumo:[
      "Duas figuras são <b>semelhantes</b> quando uma é uma ampliação, uma redução ou uma cópia da outra: têm a mesma forma, os ângulos correspondentes iguais e os comprimentos correspondentes proporcionais.",
      "A <b>razão de semelhança</b> r é o quociente entre comprimentos correspondentes. Se r &gt; 1, é uma ampliação; se r &lt; 1, uma redução; se r = 1, as figuras são geometricamente iguais.",
      "Todos os <b>polígonos regulares</b> com o mesmo número de lados são semelhantes, e todos os <b>círculos</b> são semelhantes.",
      "Se a razão de semelhança é r, os <b>perímetros</b> estão na razão r e as <b>áreas</b> na razão r².",
      "<b>Critérios de semelhança de triângulos</b>: AA — dois ângulos iguais; LLL — os três lados proporcionais; LAL — dois lados proporcionais e o ângulo entre eles igual.",
      "Para construir figuras semelhantes, usa-se a quadrícula ou um ponto: multiplicam-se as distâncias a esse ponto pela razão.",
      "Aplicação: medir alturas inacessíveis pela sombra. Os raios do Sol chegam paralelos, por isso os triângulos são semelhantes (critério AA).",
      "Numa <b>escala</b> 1:100, cada medida real é 100 vezes a medida no desenho ou na maqueta."
    ],
    gloss:[
      ["figuras semelhantes","Figuras com a mesma forma: ângulos iguais e comprimentos proporcionais."],
      ["razão de semelhança","O número pelo qual se multiplicam todos os comprimentos de uma figura para obter a outra."],
      ["ampliação","Uma semelhança com razão maior do que 1."],
      ["redução","Uma semelhança com razão entre 0 e 1."],
      ["lados correspondentes","Lados que ocupam a mesma posição em duas figuras semelhantes."],
      ["critério AA","Dois triângulos com dois ângulos iguais são semelhantes."],
      ["critério LLL","Dois triângulos com os três lados proporcionais são semelhantes."],
      ["critério LAL","Dois lados proporcionais e o ângulo entre eles igual: os triângulos são semelhantes."]
    ],
    quiz:[
      {q:"Um retângulo de 4 cm × 6 cm é ampliado com razão 3. Quais são as novas medidas?", opts:["12 cm × 18 cm","7 cm × 9 cm","12 cm × 6 cm","4 cm × 18 cm"], correct:0, explain:"Todos os comprimentos se multiplicam por 3. O 7 × 9 soma 3 em vez de multiplicar, e a figura deixaria de ter a mesma forma.", pista:"Numa semelhança, os comprimentos multiplicam-se; não se somam.", irma:{q:"Um triângulo tem lados de 5, 7 e 9 cm e é reduzido com razão 1/2. Quais são os novos lados?", opts:["2,5; 3,5 e 4,5 cm","3; 5 e 7 cm","10; 14 e 18 cm","4,5; 6,5 e 8,5 cm"], correct:0, explain:"Multiplica cada lado por 1/2 (divide por 2): 2,5; 3,5 e 4,5 cm."}},
      {q:"Um lado mede 5 cm e o lado correspondente, na figura semelhante, mede 15 cm. Qual é a razão de semelhança da 1.ª para a 2.ª?", opts:["3","10","1/3","15"], correct:0, explain:"15 ÷ 5 = 3: é uma ampliação de razão 3. O 1/3 seria a razão da 2.ª figura para a 1.ª.", pista:"Divide o comprimento da figura nova pelo correspondente da figura original."},
      {q:"Duas figuras semelhantes têm razão 2. A área da figura pequena é 10 cm². Qual é a área da grande?", opts:["40 cm²","20 cm²","100 cm²","12 cm²"], correct:0, explain:"As áreas multiplicam-se por r² = 2² = 4: 10 × 4 = 40 cm². O 20 cm² multiplica só por 2, como se a área fosse um comprimento.", pista:"Desenha um quadrado de lado 1 e outro de lado 2: quantos quadrados pequenos cabem no grande?", irma:{q:"Razão de semelhança 3; o perímetro da figura pequena é 8 cm. Qual é o perímetro da grande?", opts:["24 cm","72 cm","11 cm","64 cm"], correct:0, explain:"Os perímetros são comprimentos: multiplicam-se por r = 3, logo 8 × 3 = 24 cm. As áreas é que se multiplicariam por r² = 9."}},
      {q:"Todos os círculos são semelhantes?", opts:["Sim, têm todos a mesma forma","Não, só os que têm o mesmo raio","Só os que têm raio inteiro","Nunca"], correct:0, explain:"Qualquer círculo é uma ampliação ou uma redução de outro; a razão é o quociente entre os raios."},
      {q:"Dois triângulos têm ambos ângulos de 50° e de 70°. São semelhantes?", opts:["Sim, pelo critério AA","Não, falta saber os lados","Só se os lados forem iguais","Só se forem retângulos"], correct:0, explain:"Pelo critério AA, dois ângulos iguais chegam. Aliás, o terceiro ângulo é 60° nos dois (180° − 50° − 70°).", pista:"Lembra-te dos critérios: AA, LLL e LAL."},
      {q:"Os lados de um triângulo medem 3, 4 e 5; os de outro medem 6, 8 e 10. São semelhantes?", opts:["Sim, pelo critério LLL (razão 2)","Não, porque os lados são diferentes","Só se tiverem um ângulo reto","Não se pode saber"], correct:0, explain:"6 ÷ 3 = 8 ÷ 4 = 10 ÷ 5 = 2: os três lados são proporcionais. É o critério LLL."},
      {q:"Uma pessoa com 1,5 m faz uma sombra de 2 m. À mesma hora, uma árvore faz uma sombra de 8 m. Qual é a altura da árvore?", opts:["6 m","10,7 m","9,5 m","4 m"], correct:0, explain:"Os triângulos são semelhantes (AA). A sombra da árvore é 4 vezes maior (8 ÷ 2), por isso a altura também: 1,5 × 4 = 6 m.", pista:"Quantas vezes é maior a sombra da árvore do que a da pessoa?", irma:{q:"Um poste de 3 m faz uma sombra de 5 m. À mesma hora, um prédio faz uma sombra de 20 m. Qual é a altura do prédio?", opts:["12 m","33,3 m","18 m","15 m"], correct:0, explain:"A sombra é 4 vezes maior (20 ÷ 5), por isso a altura também: 3 × 4 = 12 m."}},
      {q:"Uma maqueta está na escala 1:100. Uma parede mede 3 cm na maqueta. Quanto mede na realidade?", opts:["3 m","30 cm","300 m","33 cm"], correct:0, explain:"Na escala 1:100, a realidade é 100 vezes maior: 3 × 100 = 300 cm = 3 m."}
    ],
    posters:[
      EX("🔍 Exemplo 1 — Razão, perímetro e área", "o que acontece a um quadrado de lado 2 cm ampliado com razão 3.", "multiplica o lado pela razão.",
        ["Lado: 2 × 3 = 6 cm.", "Perímetro: 8 cm passa a 24 cm (× 3).", "Área: 4 cm² passa a 36 cm² (× 9, ou seja, × 3²)."],
        "Perímetro × r e área × r².", "dentro do quadrado grande cabem 3 × 3 = 9 quadrados pequenos ✓."),
      EX("🌳 Exemplo 2 — A altura de uma árvore pela sombra", "a altura de uma árvore que faz uma sombra de 6 m.", "à mesma hora, mede a sombra de um pau de 1 m: 0,8 m.",
        ["Os triângulos são semelhantes (AA): têm um ângulo reto e o mesmo ângulo dos raios do Sol.", "Razão: 6 ÷ 0,8 = 7,5.", "Altura: 1 × 7,5 = 7,5 m."],
        "A árvore mede 7,5 m.", "7,5 ÷ 6 = 1 ÷ 0,8 = 1,25 ✓.")
    ],
    compare:{
      left:{title:"📏 Comprimentos", points:["Lados, perímetros, alturas","Multiplicam-se por r","Razão 3 → perímetro 3 vezes maior"]},
      right:{title:"⬛ Áreas", points:["Superfícies","Multiplicam-se por r²","Razão 3 → área 9 vezes maior"]}
    },
    boss:"Prisma 7, vol. 2: «Pratico · Exercícios globais» (p. 88) e «Preparado?» (p. 96) da unidade 5; caderno de atividades: exercícios globais (p. 100)"
  },
  {
    id:"s6", num:6, c:"m6", icon:"📊",
    title:"Detetive de Dados",
    subtitle:"Dados e probabilidades", pages:"Prisma 7, vol. 2, unidade 6 «Dados e probabilidades» (pp. 102–147); caderno de atividades, fichas 1 a 6 (pp. 104–112)",
    lead:"Os jogos medem tudo: tempos, pontuações, vitórias. Neste mundo vais planear um estudo estatístico, limpar e organizar dados, comparar grupos com gráficos de barras, calcular a média, a mediana, a moda e a amplitude, desconfiar de gráficos enganadores e calcular probabilidades de acontecimentos compostos.",
    missions:[
      {t:"O Meu Estudo", d:"Variáveis, população e amostra", f:"Escolhe uma pergunta (ex.: quantas horas dormem os alunos da turma?).\nIdentifica a população, a amostra e o tipo de variável (qualitativa ou quantitativa).\nRecolhe dados de pelo menos 15 pessoas.", xp:10},
      {t:"Limpar os Dados", d:"Organizar e agrupar dados", f:"Revê os dados da missão anterior: há respostas impossíveis (ex.: 30 horas de sono) ou repetidas?\nRetira-as e explica porquê.\nAgrupa os dados em classes, se fizer sentido.", xp:10},
      {t:"Média, Mediana e Moda", d:"Medidas de localização e amplitude", f:"Com os teus dados, calcula a média, a mediana, a moda e a amplitude.\nQual destas medidas representa melhor os dados? Porquê?", xp:10},
      {t:"Gráficos que Enganam", d:"Análise crítica de dados", f:"Procura um gráfico numa notícia ou num anúncio.\nVerifica: o eixo vertical começa no zero? A escala é regular? Quantas pessoas foram inquiridas?\nEscreve 3 frases com a tua análise.", xp:10},
      {t:"Dois Dados", d:"Probabilidade de acontecimentos compostos", f:"Faz a tabela de dupla entrada com as 36 somas de dois dados.\nCalcula a probabilidade de a soma ser 7 e de a soma ser 12.\nLança dois dados 36 vezes e compara com o que calculaste.", xp:10}
    ],
    resumo:[
      "A <b>população</b> é o conjunto que se quer estudar; a <b>amostra</b> é a parte da população de onde se recolhem os dados. Uma boa amostra é representativa da população.",
      "As <b>variáveis qualitativas</b> não são números (ex.: a cor preferida). As <b>quantitativas</b> são números: discretas (ex.: número de irmãos) ou contínuas (ex.: altura).",
      "<b>«Limpar» os dados</b> é retirar respostas impossíveis, repetidas ou mal registadas antes de os analisar.",
      "<b>Média</b>: soma de todos os valores a dividir pelo número de valores. <b>Mediana</b>: o valor do meio dos dados ordenados (com um número par de dados, a média dos dois do meio). <b>Moda</b>: o valor mais frequente.",
      "<b>Amplitude</b> = máximo − mínimo: mostra quão espalhados estão os dados.",
      "A média é muito afetada por valores extremos; a mediana não. Quando há um valor muito diferente dos outros, a mediana representa melhor os dados.",
      "Os gráficos de <b>barras sobrepostas</b> (ou lado a lado) comparam dois grupos. Um gráfico pode enganar se o eixo vertical não começar no zero ou se a escala não for regular.",
      "<b>Regra de Laplace</b> (casos igualmente prováveis): probabilidade = casos favoráveis ÷ casos possíveis. Nos <b>acontecimentos compostos</b> (dois dados, duas moedas), contam-se os casos com uma tabela de dupla entrada ou um diagrama de árvore."
    ],
    gloss:[
      ["população","O conjunto de todos os elementos que se quer estudar."],
      ["amostra","A parte da população de onde se recolhem os dados."],
      ["variável quantitativa","Uma característica que se exprime por números (idade, altura, pontuação)."],
      ["média","A soma dos valores a dividir pelo número de valores."],
      ["mediana","O valor do meio quando os dados estão ordenados."],
      ["moda","O valor que aparece mais vezes."],
      ["amplitude","A diferença entre o valor máximo e o valor mínimo."],
      ["regra de Laplace","Probabilidade = casos favoráveis ÷ casos possíveis (com casos igualmente prováveis)."]
    ],
    quiz:[
      {q:"Dados: 3, 7, 5, 9, 6. Qual é a mediana?", opts:["6","5","7","30"], correct:0, explain:"Ordena: 3, 5, 6, 7, 9. O do meio é o 6. O 5 é o valor que estava no meio antes de ordenar.", pista:"Primeiro ordena os dados.", irma:{q:"Dados: 8, 2, 10, 4. Qual é a mediana?", opts:["6","10","4","24"], correct:0, explain:"Ordena: 2, 4, 8, 10. Há dois valores do meio (4 e 8): a mediana é a média deles, (4 + 8) ÷ 2 = 6."}},
      {q:"Dados: 4, 6, 8, 10, 12. Qual é a média?", opts:["8","40","10","6"], correct:0, explain:"(4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8. O 40 é só a soma.", pista:"Soma todos os valores e divide pelo número de valores.", irma:{q:"Pontuações: 15, 20, 25, 20. Qual é a média?", opts:["20","80","25","22,5"], correct:0, explain:"(15 + 20 + 25 + 20) ÷ 4 = 80 ÷ 4 = 20."}},
      {q:"Dados: 2, 3, 3, 5, 9. Qual é a amplitude?", opts:["7","9","3","11"], correct:0, explain:"Amplitude = máximo − mínimo = 9 − 2 = 7. O 3 é a moda.", pista:"Amplitude = maior valor − menor valor."},
      {q:"Os salários de uma pequena empresa são 900, 950, 1000, 1000 e 8000 €. Que medida representa melhor o salário típico?", opts:["A mediana (1000 €)","A média (2370 €)","A amplitude (7100 €)","O máximo (8000 €)"], correct:0, explain:"A média (11 850 ÷ 5 = 2370 €) é puxada para cima pelo valor extremo de 8000 €. A mediana, 1000 €, representa melhor o que a maioria ganha."},
      {q:"Para saber o tempo de ecrã dos alunos de uma escola, perguntaram a 50 alunos. Qual é a amostra?", opts:["Os 50 alunos inquiridos","Todos os alunos da escola","O tempo de ecrã","As respostas iguais"], correct:0, explain:"A população são todos os alunos da escola; a amostra é a parte inquirida, os 50 alunos. O tempo de ecrã é a variável."},
      {q:"Lanças dois dados. Qual é a probabilidade de a soma ser 7?", opts:["6/36 = 1/6","1/12","7/36","1/11"], correct:0, explain:"Há 36 pares igualmente prováveis. Somam 7: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1), ou seja, 6 casos: 6/36 = 1/6. O 1/11 trata as 11 somas possíveis como igualmente prováveis, e não são.", pista:"Faz a tabela de dupla entrada com as 36 somas.", irma:{q:"Lanças dois dados. Qual é a probabilidade de a soma ser 12?", opts:["1/36","1/11","12/36","1/6"], correct:0, explain:"Só o par (6, 6) dá 12: 1 caso em 36."}},
      {q:"Lanças duas moedas. Qual é a probabilidade de sair uma cara e uma coroa?", opts:["1/2","1/3","1/4","3/4"], correct:0, explain:"Casos possíveis: cara-cara, cara-coroa, coroa-cara e coroa-coroa (4). Com uma cara e uma coroa há 2 (cara-coroa e coroa-cara): 2/4 = 1/2. O 1/3 conta cara-coroa e coroa-cara como um só caso.", pista:"Faz um diagrama de árvore: 1.ª moeda, depois 2.ª moeda."},
      {q:"Num gráfico de barras, o eixo vertical começa em 90 em vez de começar em 0. O que pode acontecer?", opts:["As diferenças parecem muito maiores do que são","O gráfico fica mais rigoroso","As barras ficam todas iguais","Nada, fica igual"], correct:0, explain:"Cortar o eixo exagera as diferenças: 92 e 96 parecem muito diferentes, mas só diferem 4 em quase 100. É um truque frequente em anúncios."}
    ],
    posters:[
      EX("📏 Exemplo 1 — Média, mediana, moda e amplitude", "as medidas dos tempos 12, 15, 15, 20 e 38 minutos.", "verifica se os dados estão ordenados (estão).",
        ["Média: (12 + 15 + 15 + 20 + 38) ÷ 5 = 100 ÷ 5 = 20.", "Mediana: o valor do meio é 15.", "Moda: 15 (aparece 2 vezes).", "Amplitude: 38 − 12 = 26."],
        "Média 20, mediana 15, moda 15 e amplitude 26.", "o 38 puxa a média para cima; a mediana (15) mostra melhor o tempo típico ✓."),
      EX("🎲 Exemplo 2 — Soma 8 com dois dados", "a probabilidade de a soma de dois dados ser 8.", "faz a tabela de 6 por 6: há 36 casos igualmente prováveis.",
        ["Somam 8: (2,6), (3,5), (4,4), (5,3) e (6,2).", "São 5 casos favoráveis.", "P = 5/36."],
        "P(soma 8) = 5/36, ou seja, cerca de 0,14.", "conta na tabela a diagonal das somas 8 ✓.")
    ],
    compare:{
      left:{title:"📊 Média", points:["Usa todos os valores","É afetada por valores extremos","Pode não ser nenhum dos dados"]},
      right:{title:"🎯 Mediana", points:["É o valor do meio dos dados ordenados","Não é afetada por valores extremos","Metade dos dados fica abaixo e metade acima"]}
    },
    boss:"Prisma 7, vol. 2: «Pratico · Exercícios globais» (p. 134) e «Preparado?» (p. 144) da unidade 6; caderno de atividades: exercícios globais (p. 112)"
  }
  ];
})();
