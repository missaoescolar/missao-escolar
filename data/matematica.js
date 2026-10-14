  const MATH_WORLDS = [
  {
    id:"n1", num:1, c:"m1", icon:"🧮",
    title:"Fábrica de Números",
    subtitle:"Múltiplos, divisores e números primos", pages:"manual a confirmar",
    lead:"Neste mundo vais aprender a reconhecer números primos, a decompor um número em fatores primos e a calcular o m.d.c. e o m.m.c. de dois números. Vê primeiro a animação e os 5 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Divisível ou Não?", d:"Critérios de divisibilidade por 2, 3, 5, 9 e 10", f:"Escreve 10 números de 2 ou 3 algarismos.\nPara cada um, usa os critérios do resumo e indica se é divisível por 2, 3, 5, 9 e 10.\nVerifica 3 deles com a calculadora: se for divisível, a divisão dá um número inteiro.", xp:10},
      {t:"Caça aos Primos", d:"Números primos e números compostos", f:"Escreve os números de 1 a 50, em linhas de 10.\nRisca o 1 e, como na animação do crivo, risca os múltiplos de 2, 3, 5 e 7 (mas não o 2, o 3, o 5 e o 7).\nVerifica: têm de sobrar 15 números primos.", xp:10},
      {t:"Árvore de Fatores", d:"Decomposição em fatores primos", f:"Faz a árvore de fatores de 36, 48 e 90, como no Exemplo 1.\nComeça sempre pelo menor primo que divide o número.\nVerifica: multiplica os primos das pontas dos ramos e tens de obter o número do início.", xp:10},
      {t:"m.d.c. e m.m.c. em Problemas", d:"Máximo divisor comum (m.d.c.) e mínimo múltiplo comum (m.m.c.)", f:"Resolve, como nos Exemplos 4 e 5:\n(1) Com 20 rosas e 30 túlipas, queres fazer ramos iguais sem sobrar flores. Quantos ramos, no máximo?\n(2) Um sino toca de 6 em 6 minutos e outro de 8 em 8. Tocaram juntos agora. Daqui a quantos minutos voltam a tocar juntos?\nVerifica: em (1), 20 e 30 têm de dar divisões exatas pelo número de ramos; em (2), a tua resposta tem de dar divisões exatas por 6 e por 8.", xp:15}
    ],
    resumo:[
      "Um número é <b>múltiplo</b> de outro quando resulta de o multiplicar por 0, 1, 2, 3, … (ex.: 12 é múltiplo de 3, porque 3 × 4 = 12).",
      "Um número é <b>divisor</b> de outro quando o divide exatamente, sem deixar resto (ex.: 3 é divisor de 12, porque 12 ÷ 3 = 4).",
      "<b>Critérios de divisibilidade</b> — um número é divisível:<br>por 2, se termina em 0, 2, 4, 6 ou 8;<br>por 3, se a soma dos algarismos é múltiplo de 3;<br>por 5, se termina em 0 ou 5;<br>por 9, se a soma dos algarismos é múltiplo de 9;<br>por 10, se termina em 0.",
      "Um <b>número primo</b> tem exatamente dois divisores: o 1 e ele próprio (ex.: 2, 3, 5, 7, 11, 13). Um <b>número composto</b> tem mais do que dois divisores. O 1 não é primo nem composto.",
      "Uma <b>potência</b> é uma multiplicação de fatores iguais escrita de forma curta: 2³ = 2 × 2 × 2 = 8. O 2 é a base e o 3 é o expoente.",
      "A <b>decomposição em fatores primos</b> escreve um número composto como um produto de números primos (ex.: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5). Cada número tem uma só decomposição: só a ordem dos fatores pode mudar.",
      "O <b>m.d.c.</b> (máximo divisor comum) de dois números é o maior número que divide os dois. Pela decomposição: multiplica os fatores primos comuns, cada um com o menor expoente.",
      "O <b>m.m.c.</b> (mínimo múltiplo comum) de dois números é o menor múltiplo comum aos dois, diferente de zero. Pela decomposição: multiplica todos os fatores primos (comuns e não comuns), cada um com o maior expoente."
    ],
    gloss:[
      ["múltiplo","O resultado de multiplicar um número por 0, 1, 2, 3, … (ex.: 0, 3, 6 e 9 são múltiplos de 3)."],
      ["divisor","Um número que divide outro exatamente, sem deixar resto."],
      ["número primo","Um número que tem exatamente dois divisores: o 1 e ele próprio."],
      ["número composto","Um número que tem mais do que dois divisores."],
      ["decomposição em fatores primos","Escrever um número como um produto de números primos."],
      ["m.d.c.","Máximo divisor comum — o maior número que divide dois números ao mesmo tempo."],
      ["m.m.c.","Mínimo múltiplo comum — o menor número, diferente de zero, que é múltiplo de dois números ao mesmo tempo."],
      ["potência","Uma multiplicação de fatores iguais escrita de forma curta: 5² = 5 × 5 = 25."],
      ["expoente","Numa potência, o número pequeno em cima: diz quantas vezes a base se multiplica (em 2³, o expoente é 3)."],
      ["contraexemplo","Um exemplo que mostra que uma afirmação é falsa: o 2 é primo e par, por isso «todos os primos são ímpares» é falso."]
    ],
    quiz:[
      {q:"O que é um múltiplo de um número?", opts:["Um número que o divide sem deixar resto","O resultado de multiplicar esse número por 0, 1, 2, 3, …","Um número primo relacionado com ele","A soma de todos os seus divisores"], correct:1, explain:"Um múltiplo obtém-se a multiplicar: 3 × 4 = 12, por isso 12 é múltiplo de 3. Um número que divide outro sem deixar resto é um divisor, não um múltiplo."},
      {q:"Qual destes números é múltiplo de 5?", opts:["22","27","20","23"], correct:2, explain:"Os múltiplos de 5 terminam em 0 ou em 5. O 20 termina em 0, e 5 × 4 = 20. O 22, o 27 e o 23 terminam em 2, 7 e 3, por isso não são múltiplos de 5."},
      {q:"Qual é o critério de divisibilidade por 3?", opts:["O número termina em 3","A soma dos algarismos é múltiplo de 3","O número é ímpar","O número termina em 0"], correct:1, explain:"Soma os algarismos: em 123, 1 + 2 + 3 = 6, que é múltiplo de 3, por isso 123 é divisível por 3. «Termina em 3» não serve: 13 termina em 3, mas 13 ÷ 3 não dá uma divisão exata."},
      {q:"«Todos os números primos são ímpares.» Esta afirmação é verdadeira ou falsa? Escolhe a resposta com a justificação certa.", opts:["Verdadeira. Nenhum número par é primo.","Falsa. O 9 é ímpar e não é primo.","Falsa. O 2 é primo e é par.","Verdadeira. 3, 5, 7 e 11 são primos e ímpares."], correct:2, explain:"Basta um contraexemplo para mostrar que uma afirmação é falsa. Aqui, o contraexemplo tem de ser um número primo e par: o 2, que só tem os divisores 1 e 2. O 9 não serve, porque não é primo. E mostrar exemplos que funcionam (3, 5, 7, 11) não prova que é sempre verdade."},
      {q:"Qual destes números é primo?", opts:["15","21","17","27"], correct:2, explain:"Testa os primos 2 e 3: o 17 não é par, e 1 + 7 = 8 não é múltiplo de 3. Não é preciso testar mais, porque 5 × 5 = 25 já passa de 17. Por isso, 17 é primo. Os outros são compostos: 15 = 3 × 5, 21 = 3 × 7 e 27 = 3 × 9."},
      {q:"Qual é a decomposição em fatores primos de 36?", opts:["4 × 9","2² × 3²","6²","2 × 3²"], correct:1, explain:"36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3². «4 × 9» e «6²» também dão 36, mas 4, 9 e 6 não são números primos. E 2 × 3² = 18, não 36."},
      {q:"Quanto é 2³?", opts:["6","8","9","5"], correct:1, explain:"2³ quer dizer 2 × 2 × 2: o expoente 3 diz quantas vezes o 2 se multiplica. 2 × 2 = 4 e 4 × 2 = 8. Atenção: 2³ não é 2 × 3 = 6, nem 3² = 9."},
      {q:"Qual é o m.d.c. (máximo divisor comum) de 24 e 36?", opts:["6","72","12","4"], correct:2, explain:"24 = 2³ × 3 e 36 = 2² × 3². Os fatores comuns são o 2 e o 3, e escolhe-se o menor expoente de cada um: 2² × 3 = 12. Verifica: 24 ÷ 12 = 2 e 36 ÷ 12 = 3. O 6 e o 4 também dividem os dois, mas não são os maiores. O 72 é o m.m.c."},
      {q:"Dois faróis piscaram agora ao mesmo tempo. Um pisca de 4 em 4 segundos e o outro de 6 em 6 segundos. Daqui a quantos segundos voltam a piscar juntos pela primeira vez?", opts:["12","24","10","2"], correct:0, explain:"Procura-se o menor múltiplo comum de 4 e 6: o m.m.c. Múltiplos de 4: 4, 8, 12, … Múltiplos de 6: 6, 12, … O primeiro comum é 12. Pela decomposição: 4 = 2² e 6 = 2 × 3, por isso m.m.c. = 2² × 3 = 12. O 24 também é comum, mas não é o primeiro; 10 é a soma e 2 é o m.d.c."},
      {q:"A Rita tem 18 rebuçados e 30 chocolates. Quer fazer sacos iguais: todos com o mesmo número de rebuçados e o mesmo número de chocolates, sem sobrar nada. Qual é o maior número de sacos que pode fazer?", opts:["3","90","6","2"], correct:2, explain:"O número de sacos tem de dividir o 18 e o 30 sem deixar resto. O maior é o m.d.c.: 18 = 2 × 3² e 30 = 2 × 3 × 5, então m.d.c. = 2 × 3 = 6. Cada saco leva 18 ÷ 6 = 3 rebuçados e 30 ÷ 6 = 5 chocolates. Com 2 ou 3 sacos também dá, mas não é o maior número."}
    ],
    // worked examples: shown in 📖 Aprender (and on the printable page) through the existing "posters" mechanism,
    // as plain text steps, so they do not depend on the drawing
    posters:[
      {title:"🌳 Exemplo 1 — Árvore de fatores de 60", svg:'<svg class="poster-svg" viewBox="0 0 300 228" style="max-width:300px;margin:0 auto" role="img" aria-label="Árvore de fatores de 60: o 60 divide-se em 2 e 30; o 30 em 2 e 15; o 15 em 3 e 5. Os números com círculo são primos: 2, 2, 3 e 5.">'+
        '<g stroke="currentColor" stroke-width="2"><line x1="120" y1="36" x2="60" y2="68"/><line x1="120" y1="36" x2="180" y2="68"/><line x1="180" y1="96" x2="130" y2="128"/><line x1="180" y1="96" x2="230" y2="128"/><line x1="230" y1="156" x2="190" y2="188"/><line x1="230" y1="156" x2="270" y2="188"/></g>'+
        '<g fill="var(--surface)" stroke="var(--wc)" stroke-width="2.5"><circle cx="60" cy="84" r="17"/><circle cx="130" cy="144" r="17"/><circle cx="190" cy="204" r="17"/><circle cx="270" cy="204" r="17"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="18" font-weight="700" text-anchor="middle"><text x="120" y="30">60</text><text x="60" y="90">2</text><text x="180" y="90">30</text><text x="130" y="150">2</text><text x="230" y="150">15</text><text x="190" y="210">3</text><text x="270" y="210">5</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> escrever 60 como uma multiplicação só de números primos.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escreve 60 no topo. Procura o menor primo que divide 60. O 60 é par, por isso começa pelo 2.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>60 = 2 × 30<br>30 = 2 × 15<br>15 = 3 × 5<br>Quando um ramo chega a um número primo (com círculo), esse ramo acaba.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> junta os primos das pontas dos ramos: 60 = 2 × 2 × 3 × 5.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 2 × 2 = 4, 4 × 3 = 12, 12 × 5 = 60. Todos os fatores (2, 3 e 5) são primos. Se começasses por 6 × 10, a árvore seria diferente, mas o resultado seria o mesmo.</span></li>'+
        '</ul>'},
      {title:"🔢 Exemplo 2 — Potências", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> escrever de forma curta uma multiplicação de fatores iguais, como 2 × 2 × 2.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> conta quantas vezes aparece o mesmo fator.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Em 2 × 2 × 2, o 2 aparece 3 vezes.<br>Escreve-se 2³ e lê-se «2 ao cubo» ou «2 elevado a 3».<br>O 2 é a <b>base</b> e o 3 é o <b>expoente</b>.<br>Da mesma forma, 5 × 5 = 5² («5 ao quadrado»).</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 2³ = 2 × 2 × 2 = 8. No Exemplo 1: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> escreve a multiplicação por extenso e calcula. Cuidado: 2³ não é 2 × 3. 2³ = 8, mas 2 × 3 = 6.</span></li>'+
        '</ul>'},
      {title:"➗ Exemplo 3 — Divisões sucessivas de 84", svg:'<svg class="poster-svg" viewBox="0 0 150 170" style="max-width:150px;margin:0 auto" role="img" aria-label="Divisões sucessivas de 84: 84 a dividir por 2 dá 42; 42 a dividir por 2 dá 21; 21 a dividir por 3 dá 7; 7 a dividir por 7 dá 1.">'+
        '<line x1="72" y1="10" x2="72" y2="160" stroke="currentColor" stroke-width="2"/>'+
        '<g font-family="Lexend, sans-serif" font-size="18" font-weight="700"><g text-anchor="end"><text x="62" y="36">84</text><text x="62" y="66">42</text><text x="62" y="96">21</text><text x="62" y="126">7</text><text x="62" y="156">1</text></g>'+
        '<g fill="var(--wc)"><text x="84" y="36">2</text><text x="84" y="66">2</text><text x="84" y="96">3</text><text x="84" y="126">7</text></g></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> decompor 84 em fatores primos, de forma organizada.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> traça uma linha vertical. Escreve 84 à esquerda. À direita, escreve o menor primo que divide 84: o 2.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>84 ÷ 2 = 42<br>42 ÷ 2 = 21<br>21 não é par, mas 2 + 1 = 3 é múltiplo de 3:<br>21 ÷ 3 = 7<br>7 é primo:<br>7 ÷ 7 = 1<br>Paras quando chegas a 1.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> os números da direita são os fatores primos: 84 = 2 × 2 × 3 × 7 = 2² × 3 × 7.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 2² × 3 × 7 = 4 × 3 × 7 = 12 × 7 = 84.</span></li>'+
        '</ul>'},
      {title:"🤝 Exemplo 4 — m.d.c. de 12 e 18", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o maior número que divide 12 e 18 sem deixar resto.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> decompõe os dois números em fatores primos, como nos Exemplos 1 e 3.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>12 = 2² × 3<br>18 = 2 × 3² (o 2 sozinho é o mesmo que 2¹)<br>Fatores comuns aos dois: o 2 e o 3.<br>De cada um, escolhe o <b>menor expoente</b>: 2¹ e 3¹.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> m.d.c.(12, 18) = 2 × 3 = 6.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 12 ÷ 6 = 2 e 18 ÷ 6 = 3, sem resto. Os divisores comuns de 12 e 18 são 1, 2, 3 e 6, e o maior é o 6.</span></li>'+
        '</ul>'},
      {title:"🔁 Exemplo 5 — m.m.c. de 12 e 18", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o menor número, diferente de zero, que é múltiplo de 12 e de 18.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> usa as mesmas decomposições do Exemplo 4: 12 = 2² × 3 e 18 = 2 × 3².</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Junta todos os fatores primos que aparecem, comuns e não comuns: o 2 e o 3.<br>De cada um, escolhe o <b>maior expoente</b>: 2² (do 12) e 3² (do 18).</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> m.m.c.(12, 18) = 2² × 3² = 4 × 9 = 36.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 36 ÷ 12 = 3 e 36 ÷ 18 = 2, sem resto. Os múltiplos de 18 são 18, 36, … O 18 não é múltiplo de 12, por isso o 36 é o menor.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"✖️ Múltiplo", points:["Resulta de multiplicar um número por outro","Um número tem infinitos múltiplos","Ex.: 12 é múltiplo de 3"]},
      right:{title:"➗ Divisor", points:["Divide o número sem deixar resto","Um número tem um número limitado de divisores","Ex.: 3 é divisor de 12"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n2", num:2, c:"m2", icon:"🍕",
    title:"Inventário de Frações",
    subtitle:"Frações e operações", pages:"manual a confirmar",
    lead:"Neste mundo vais aprender a encontrar frações equivalentes, a simplificar, a comparar frações, a calcular a fração de uma quantidade e a fazer as quatro operações com frações. Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Iguais por Dentro", d:"Frações equivalentes e simplificação", f:"Escreve 3 frações equivalentes a 2/3, como no Exemplo 1.\nSimplifica até à forma irredutível: 12/18, 20/30 e 14/21. Usa o m.d.c. do Mundo 1.\nVerifica: duas frações a/b e c/d são equivalentes quando a × d = b × c (ex.: 2/3 e 4/6, porque 2 × 6 = 3 × 4).", xp:10},
      {t:"Quem É Maior?", d:"Comparar e ordenar frações", f:"Ordena do menor para o maior: 2/3, 3/4, 5/8 e 1/2, como no Exemplo 2.\nDesenha as quatro frações numa reta numérica entre 0 e 1.\nVerifica: escreve as quatro frações com denominador 24 e compara só os numeradores.", xp:10},
      {t:"Contar a Turma", d:"Fração de uma quantidade", f:"Numa turma de 24 alunos, 3/8 vêm de autocarro, 1/4 vêm a pé e os outros vêm de carro.\nCalcula quantos alunos vêm de cada maneira, como no Exemplo 4.\nVerifica: os três números somados têm de dar 24.", xp:10},
      {t:"Juntar e Tirar Pedaços", d:"Adição e subtração de frações", f:"Calcula, como no Exemplo 3: 1/2 + 1/3; 3/4 − 1/6; 2/5 + 3/10; 1 − 3/8; 1 e 1/2 + 2/3.\nDá cada resultado na forma irredutível.\nVerifica: antes de calcular, estima. Por exemplo, 1/2 + 1/3 tem de ser menos do que 1, porque 1/3 é menos do que 1/2.", xp:10},
      {t:"Multiplicar e Dividir", d:"Multiplicação e divisão de frações", f:"Resolve, como nos Exemplos 5 e 6:\n(1) Sobraram 3/4 de uma pizza e comeste 2/3 do que sobrou. Que fração da pizza inteira comeste?\n(2) Com 6 litros de sumo, quantas garrafas de 3/4 de litro consegues encher?\nVerifica: em (2), multiplica o número de garrafas por 3/4. Tens de obter os 6 litros.", xp:15}
    ],
    resumo:[
      "Uma <b>fração</b> representa partes iguais de um todo (a unidade). O <b>denominador</b> (em baixo) diz em quantas partes iguais se dividiu o todo; o <b>numerador</b> (em cima) diz quantas dessas partes se consideram (ex.: em 3/8 de uma pizza, a pizza foi dividida em 8 fatias iguais e consideram-se 3).",
      "Uma fração também é uma divisão: 3/4 = 3 ÷ 4 = 0,75. Por isso, cada fração tem o seu lugar na <b>reta numérica</b>.",
      "Uma fração é <b>própria</b> quando o numerador é menor do que o denominador (vale menos do que 1, ex.: 3/4) e <b>imprópria</b> quando é maior ou igual (vale 1 ou mais, ex.: 7/4). Uma fração imprópria pode escrever-se como <b>número misto</b>: 7/4 = 1 e 3/4, porque 7 ÷ 4 = 1 e sobram 3.",
      "Duas frações dizem-se uma <b>fração equivalente</b> da outra quando representam a mesma quantidade (ex.: 1/2 = 2/4 = 3/6). Obtêm-se multiplicando ou dividindo o numerador e o denominador pelo mesmo número (diferente de zero). <b>Simplificar</b> é dividir os dois pelo mesmo número; a fração fica na forma <b>irredutível</b> quando se divide pelo m.d.c. (ex.: 18/24 = 3/4, dividindo por 6).",
      "Para <b>comparar</b> frações: com o mesmo denominador, é maior a que tem maior numerador; com o mesmo numerador, é maior a que tem <b>menor</b> denominador (1/6 > 1/8, porque as partes são maiores); nos outros casos, escrevem-se com o mesmo denominador.",
      "Para calcular a <b>fração de uma quantidade</b>, divide-se a quantidade pelo denominador e multiplica-se pelo numerador (ex.: 3/4 de 20 = 20 ÷ 4 × 3 = 15).",
      "Para <b>somar ou subtrair</b> frações, os denominadores têm de ser iguais: reduzem-se ao mesmo denominador (normalmente o m.m.c. dos denominadores) e depois somam-se ou subtraem-se só os numeradores. O denominador mantém-se (ex.: 1/2 + 1/3 = 3/6 + 2/6 = 5/6).",
      "Para <b>multiplicar</b> frações, multiplicam-se os numeradores entre si e os denominadores entre si (ex.: 2/3 × 3/5 = 6/15 = 2/5). Multiplicar por uma fração própria dá um resultado <b>menor</b>: é calcular uma parte.",
      "Para <b>dividir</b> por uma fração, multiplica-se pelo <b>inverso</b> dessa fração (troca-se o numerador com o denominador: o inverso de 3/4 é 4/3). Dividir por uma fração própria dá um resultado <b>maior</b>: 3 ÷ 1/2 = 6, porque em 3 pizzas cabem 6 metades."
    ],
    gloss:[
      ["fração","Partes iguais de um todo, escritas como numerador sobre denominador (ex.: 3/8)."],
      ["numerador","O número de cima na fração: quantas partes se consideram."],
      ["denominador","O número de baixo na fração: em quantas partes iguais se dividiu o todo."],
      ["unidade","O todo que se divide em partes iguais: uma pizza, uma barra, uma turma inteira."],
      ["fração própria","Fração com o numerador menor do que o denominador; vale menos do que 1 (ex.: 3/4)."],
      ["fração imprópria","Fração com o numerador maior ou igual ao denominador; vale 1 ou mais (ex.: 7/4)."],
      ["número misto","Um número com uma parte inteira e uma fração, escritas juntas (ex.: 1 e 3/4)."],
      ["fração equivalente","Uma fração escrita de outra forma que representa a mesma quantidade (ex.: 2/4 é equivalente a 1/2)."],
      ["simplificar","Dividir o numerador e o denominador pelo mesmo número, para obter uma fração equivalente mais simples."],
      ["fração irredutível","Uma fração que já não se pode simplificar: o m.d.c. do numerador e do denominador é 1."],
      ["inverso","A fração com o numerador e o denominador trocados (o inverso de 3/4 é 4/3). Uma fração vezes o seu inverso dá 1."],
      ["reta numérica","Uma reta com os números por ordem, onde cada fração tem o seu lugar (1/2 fica a meio entre 0 e 1)."],
      ["contraexemplo","Um exemplo que mostra que uma afirmação é falsa: 6 × 1/2 = 3 mostra que «multiplicar dá sempre mais» é falso."]
    ],
    quiz:[
      {q:"Uma pizza foi cortada em 8 fatias iguais e comeste 3. Que fração da pizza comeste?", opts:["3/8","5/8","3/5","8/3"], correct:0, explain:"A pizza (o todo) tem 8 partes iguais: o denominador é 8. Comeste 3: o numerador é 3. 5/8 é a parte que sobrou. 3/5 compara o que comeste com o que sobrou, não com a pizza toda. E 8/3 está trocada: seria mais do que uma pizza inteira."},
      {q:"Qual é maior: 1/6 ou 1/8 de uma tablete de chocolate?", opts:["1/8, porque 8 é maior do que 6","1/6, porque as partes são maiores","São iguais, porque o numerador é o mesmo","Não se pode saber sem desenhar"], correct:1, explain:"Com o mesmo numerador, é maior a fração com menor denominador. Dividir em 6 partes dá partes maiores do que dividir em 8. Pensar «8 é maior do que 6, por isso 1/8 é maior» é um erro muito comum."},
      {q:"Qual destas frações é equivalente a 2/3?", opts:["3/4","4/5","4/6","2/6"], correct:2, explain:"Multiplica o numerador e o denominador pelo mesmo número: 2 × 2 = 4 e 3 × 2 = 6, por isso 2/3 = 4/6. 3/4 e 4/5 obtêm-se somando 1 ou 2 em cima e em baixo, e somar não dá frações equivalentes. 2/6 só mudou o denominador: vale um terço de 2/3."},
      {q:"Quanto é 1/2 + 1/3?", opts:["2/5","5/6","2/6","1/5"], correct:1, explain:"Primeiro, o mesmo denominador (m.m.c. de 2 e 3 = 6): 1/2 = 3/6 e 1/3 = 2/6. Depois soma os numeradores: 3/6 + 2/6 = 5/6. O erro 2/5 vem de somar em cima e em baixo. Verifica: 2/5 é menos do que 1/2, mas somar 1/3 a 1/2 tem de dar mais do que 1/2."},
      {q:"Quanto é 5/6 − 1/3?", opts:["4/3","4/6","1/2","1/3"], correct:2, explain:"Mesmo denominador: 1/3 = 2/6. Então 5/6 − 2/6 = 3/6 = 1/2 (simplificado, dividindo por 3). 4/3 vem de subtrair em cima e em baixo (5 − 1 e 6 − 3). 4/6 vem de subtrair os numeradores sem igualar os denominadores."},
      {q:"Quanto é 3/4 de 20 rebuçados?", opts:["5","15","60","23"], correct:1, explain:"Divide os 20 rebuçados em 4 partes iguais: 20 ÷ 4 = 5 (isto é 1/4). Três dessas partes: 5 × 3 = 15. O 5 é só 1/4, o 60 é 3 × 20 (mais do que os rebuçados todos) e o 23 é 20 + 3."},
      {q:"Quanto é 2/3 × 3/5?", opts:["5/8","2/5","10/9","6/8"], correct:1, explain:"Numerador × numerador e denominador × denominador: 2 × 3 = 6 e 3 × 5 = 15. Fica 6/15 = 2/5, simplificando por 3. 5/8 soma em vez de multiplicar. 10/9 é o resultado da divisão 2/3 ÷ 3/5, não da multiplicação."},
      {q:"Quantos copos de 1/4 de litro consegues encher com 3 litros de água?", opts:["3/4","12","7","4"], correct:1, explain:"A pergunta é «quantos 1/4 cabem em 3?»: 3 ÷ 1/4 = 3 × 4 = 12. Verifica: 12 copos × 1/4 de litro = 3 litros. 3/4 é o resultado de multiplicar (3 × 1/4), que não é o que se pergunta. Dividir por uma fração própria dá um resultado maior."},
      {q:"«Multiplicar dá sempre um número maior.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. Multiplicar é somar várias vezes.","Verdadeiro. 2 × 3 = 6, que é maior do que 2 e do que 3.","Falso. 6 × 1/2 = 3, que é menor do que 6.","Falso. 6 × 2 = 12, que é maior do que 6."], correct:2, explain:"Basta um contraexemplo: 6 × 1/2 = 3, que é menor do que 6. Multiplicar por uma fração própria é calcular uma parte, e uma parte é menor do que o todo. Os exemplos em que dá maior (2 × 3) não provam que é sempre assim, e 6 × 2 = 12 não mostra que a afirmação é falsa."},
      {q:"Como se escreve o número misto 2 e 3/4 como fração?", opts:["5/4","6/4","11/4","23/4"], correct:2, explain:"Cada inteiro tem 4 quartos, por isso 2 inteiros = 8/4. Mais 3/4: 8/4 + 3/4 = 11/4. Verifica: 11 ÷ 4 = 2 e sobram 3. 5/4 soma 2 + 3, 6/4 multiplica 2 × 3, e 23/4 junta os algarismos 2 e 3."}
    ],
    posters:[
      {title:"🟰 Exemplo 1 — Frações equivalentes e simplificar", svg:'<svg class="poster-svg" viewBox="0 0 300 120" style="max-width:300px;margin:0 auto" role="img" aria-label="Duas barras do mesmo tamanho. A de cima está dividida em 4 partes iguais, com 3 pintadas: 3/4. A de baixo está dividida em 8 partes iguais, com 6 pintadas: 6/8. A parte pintada é do mesmo tamanho nas duas.">'+
        '<g stroke="currentColor" stroke-width="2"><rect x="20" y="16" width="60" height="32" fill="var(--wc)"/><rect x="80" y="16" width="60" height="32" fill="var(--wc)"/><rect x="140" y="16" width="60" height="32" fill="var(--wc)"/><rect x="200" y="16" width="60" height="32" fill="var(--surface)"/>'+
        '<rect x="20" y="68" width="30" height="32" fill="var(--wc)"/><rect x="50" y="68" width="30" height="32" fill="var(--wc)"/><rect x="80" y="68" width="30" height="32" fill="var(--wc)"/><rect x="110" y="68" width="30" height="32" fill="var(--wc)"/><rect x="140" y="68" width="30" height="32" fill="var(--wc)"/><rect x="170" y="68" width="30" height="32" fill="var(--wc)"/><rect x="200" y="68" width="30" height="32" fill="var(--surface)"/><rect x="230" y="68" width="30" height="32" fill="var(--surface)"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="16" font-weight="700"><text x="268" y="38">3/4</text><text x="268" y="90">6/8</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> frações equivalentes a 3/4, e escrever 18/24 da forma mais simples.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> olha para o desenho. Se partires cada quarto ao meio, ficas com 8 partes e 6 pintadas. A parte pintada não mudou.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Multiplica em cima e em baixo pelo mesmo número:<br>3/4 = (3 × 2)/(4 × 2) = 6/8<br>3/4 = (3 × 3)/(4 × 3) = 9/12<br>Para simplificar 18/24, divide em cima e em baixo pelo m.d.c.(18, 24) = 6:<br>18 ÷ 6 = 3 e 24 ÷ 6 = 4.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 3/4 = 6/8 = 9/12, e 18/24 = 3/4 (forma irredutível: 3 e 4 só têm o 1 como divisor comum).</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> multiplica em cruz. 3 × 8 = 24 e 4 × 6 = 24: são iguais, por isso 3/4 = 6/8. Atenção: somar o mesmo número em cima e em baixo não funciona (3/4 e 4/5 não são equivalentes).</span></li>'+
        '</ul>'},
      {title:"⚖️ Exemplo 2 — Comparar 3/4 e 5/6", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> qual é maior, 3/4 ou 5/6.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> os denominadores são diferentes (4 e 6), por isso as partes têm tamanhos diferentes. Escreve as duas frações com o mesmo denominador: o m.m.c.(4, 6) = 12.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>3/4 = (3 × 3)/(4 × 3) = 9/12<br>5/6 = (5 × 2)/(6 × 2) = 10/12<br>Agora as partes são do mesmo tamanho: compara os numeradores. 9 é menor do que 10.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 3/4 < 5/6.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> pensa no que falta para 1. A 3/4 falta 1/4 e a 5/6 falta 1/6. Como 1/6 é menor do que 1/4, 5/6 está mais perto de 1. Truque para o mesmo numerador: 1/6 > 1/8, porque partir em 6 dá partes maiores do que partir em 8.</span></li>'+
        '</ul>'},
      {title:"➕ Exemplo 3 — Somar 2/3 + 1/4 e subtrair 1 − 3/8", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quanto é 2/3 + 1/4 e quanto é 1 − 3/8.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> só se somam partes do mesmo tamanho. Procura um denominador comum: o m.m.c.(3, 4) = 12. Estima primeiro: 2/3 + 1/4 é menos do que 1, porque 2/3 + 1/3 = 1 e 1/4 é menos do que 1/3.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>2/3 = 8/12 e 1/4 = 3/12<br>8/12 + 3/12 = 11/12 (somam-se os numeradores; o denominador fica 12)<br>Para 1 − 3/8, escreve o 1 como 8/8:<br>8/8 − 3/8 = 5/8</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 2/3 + 1/4 = 11/12 e 1 − 3/8 = 5/8.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 11/12 é menos do que 1, como estimaste. E 5/8 + 3/8 = 8/8 = 1. Erro a evitar: 2/3 + 1/4 não é 3/7. Somar em cima e em baixo dá menos do que 2/3, o que não faz sentido.</span></li>'+
        '</ul>'},
      {title:"🍬 Exemplo 4 — Fração de uma quantidade: 3/4 de 20", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a Ana tem 20 rebuçados e dá 3/4 aos amigos. Quantos rebuçados dá?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o denominador 4 diz que os 20 rebuçados se dividem em 4 grupos iguais.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>1/4 de 20: 20 ÷ 4 = 5 rebuçados em cada grupo<br>3/4 de 20: 3 grupos, 5 × 3 = 15<br>Também se pode fazer como multiplicação: 3/4 × 20 = 60/4 = 15.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a Ana dá 15 rebuçados e fica com 5 (o 1/4 que sobra).</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 15 + 5 = 20. E 3/4 é menos do que o todo, por isso a resposta tem de ser menor do que 20.</span></li>'+
        '</ul>'},
      {title:"✖️ Exemplo 5 — Multiplicar: 2/3 de 3/4 de uma pizza", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> sobraram 3/4 de uma pizza e comeste 2/3 do que sobrou. Que fração da pizza inteira comeste?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> «2/3 de» quer dizer «2/3 vezes». A conta é 2/3 × 3/4.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Numeradores: 2 × 3 = 6<br>Denominadores: 3 × 4 = 12<br>2/3 × 3/4 = 6/12<br>Simplifica: m.d.c.(6, 12) = 6, por isso 6/12 = 1/2</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> comeste 1/2 (metade) da pizza inteira.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 3/4 da pizza são 3 fatias de um quarto; 2/3 dessas 3 fatias são 2 fatias, ou seja, 2/4 = 1/2. E o resultado (1/2) é menor do que 3/4: multiplicar por uma fração própria dá sempre menos.</span></li>'+
        '</ul>'},
      {title:"➗ Exemplo 6 — Dividir: quantas metades cabem em 3?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quanto é 3 ÷ 1/2 e quantas garrafas de 3/4 de litro se enchem com 6 litros (6 ÷ 3/4).</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> lê a divisão como uma pergunta: «quantas vezes cabe 1/2 em 3?». Imagina 3 pizzas, cada uma cortada ao meio.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>3 pizzas × 2 metades = 6 metades, por isso 3 ÷ 1/2 = 6<br>Regra: dividir por uma fração é multiplicar pelo seu inverso.<br>3 ÷ 1/2 = 3 × 2/1 = 6<br>6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 3 ÷ 1/2 = 6 e enchem-se 8 garrafas de 3/4 de litro.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> faz a conta ao contrário. 6 × 1/2 = 3 e 8 × 3/4 = 24/4 = 6 litros. Dividir por uma fração própria dá um resultado maior: em 6 litros cabem mais garrafas pequenas do que litros.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"✖️ Multiplicar frações", points:["Numeradores × numeradores e denominadores × denominadores","Não é preciso igualar denominadores","Por uma fração própria, o resultado fica menor (ex.: 6 × 1/2 = 3)"]},
      right:{title:"➗ Dividir frações", points:["Multiplica-se pelo inverso da segunda fração","Também não é preciso igualar denominadores","Por uma fração própria, o resultado fica maior (ex.: 3 ÷ 1/2 = 6)"]}
    },
    resources:[
      {icon:"🔬", title:"Build a Fraction", desc:"Simulação interativa para montar frações e ver frações equivalentes a formarem-se.", site:"PhET Interactive Simulations", url:"https://phet.colorado.edu/en/simulations/build-a-fraction"},
      {icon:"🎮", title:"Jogos de frações", desc:"Vários jogos curtos para praticar frações, equivalências e operações. Tem publicidade.", site:"Math Playground", url:"https://www.mathplayground.com/index_fractions.html"}
    ],
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n3", num:3, c:"m3", icon:"🏷️",
    title:"Loja e Percentagens",
    subtitle:"Números decimais e percentagens", pages:"manual a confirmar",
    lead:"Neste mundo vais aprender a comparar e a calcular com números decimais, a passar de frações para decimais e percentagens, e a resolver problemas com descontos e aumentos. Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Lista de Compras", d:"Somar números decimais e estimar", f:"Escolhe 5 produtos de um folheto de supermercado (ou de um talão).\nPrimeiro estima o total, arredondando cada preço ao euro mais próximo.\nDepois calcula o total exato, alinhando as vírgulas.\nVerifica: o total exato tem de ficar perto da tua estimativa.", xp:10},
      {t:"Quem é Maior?", d:"Comparar e ordenar números decimais", f:"Ordena do menor para o maior: 0,5 · 0,45 · 0,405 · 0,54 · 0,4, como no Exemplo 1.\nMarca-os numa reta numérica entre 0,4 e 0,6.\nVerifica: escreve todos com 3 casas decimais (0,500 · 0,450…) e compara-os como se fossem números inteiros.", xp:10},
      {t:"Saldos", d:"Descontos em percentagem", f:"Num folheto (ou inventados), escolhe 3 produtos com desconto em percentagem.\nCalcula o desconto e o preço final de duas maneiras, como no Exemplo 5.\nVerifica: o preço final mais o desconto tem de dar o preço inicial.", xp:15},
      {t:"Três Formas do Mesmo Número", d:"Frações, decimais e percentagens", f:"Escreve como decimal e como percentagem: 1/2, 1/4, 3/5, 7/10, 1/3 e 2/3, como no Exemplo 4.\nAntes de dividires, prevê quais vão dar dízimas infinitas periódicas (usa a regra dos fatores 2 e 5).\nVerifica: confirma as tuas previsões com a calculadora.", xp:10}
    ],
    resumo:[
      "Num <b>número decimal</b>, os algarismos depois da vírgula são as <b>décimas</b>, as <b>centésimas</b> e as <b>milésimas</b> (em 2,375: 3 décimas, 7 centésimas e 5 milésimas).",
      "Para <b>comparar</b> decimais, escrevem-se com o mesmo número de casas, acrescentando zeros à direita, que não mudam o valor: 0,3 = 0,30, e 0,30 > 0,25. Não se compara pelo «tamanho» do número depois da vírgula.",
      "Para <b>somar e subtrair</b>, alinham-se as vírgulas (décimas por baixo de décimas). Para <b>multiplicar</b>, multiplica-se como se fossem inteiros e o resultado tem tantas casas decimais quantas os dois fatores juntos: 0,3 × 0,2 = 0,06. Multiplicar por um número entre 0 e 1 dá um resultado menor.",
      "Para <b>dividir por um decimal</b>, multiplicam-se o dividendo e o divisor por 10, 100… até o divisor ser inteiro: 6 ÷ 0,5 = 60 ÷ 5 = 12. Dividir por um número entre 0 e 1 dá um resultado maior.",
      "Uma fração escreve-se como decimal dividindo o numerador pelo denominador. Se a conta acaba, é uma <b>dízima finita</b> (3/4 = 0,75); se um grupo de algarismos se repete para sempre, é uma <b>dízima infinita periódica</b> (1/3 = 0,333…, com <b>período</b> 3). A fração irredutível dá dízima finita só quando o denominador não tem fatores primos além do 2 e do 5.",
      "Uma <b>percentagem</b> é uma fração com denominador 100: 35% = 35/100 = 0,35. Para passar de decimal a percentagem, multiplica-se por 100 (0,4 = 40%).",
      "Para calcular uma percentagem de uma quantidade, multiplica-se: 20% de 45 = 0,20 × 45 = 9. Com um <b>desconto</b> de p%, paga-se (100 − p)% do preço; com um <b>aumento</b> de p%, paga-se (100 + p)%.",
      "Para saber que percentagem uma parte é do todo, divide-se a parte pelo todo e multiplica-se por 100: 15 em 25 → 15 ÷ 25 = 0,6 = 60%."
    ],
    gloss:[
      ["número decimal","Um número com parte inteira e parte decimal, separadas por uma vírgula (ex.: 2,375)."],
      ["décimas","O primeiro algarismo depois da vírgula: partes de 1 dividido em 10."],
      ["centésimas","O segundo algarismo depois da vírgula: partes de 1 dividido em 100."],
      ["milésimas","O terceiro algarismo depois da vírgula: partes de 1 dividido em 1000."],
      ["dízima finita","Um número decimal com um número limitado de casas depois da vírgula (ex.: 0,75)."],
      ["dízima infinita periódica","Um número decimal em que um grupo de algarismos se repete para sempre (ex.: 0,333…)."],
      ["período","O grupo de algarismos que se repete numa dízima infinita periódica (em 0,1818…, o período é 18)."],
      ["percentagem","Uma fração com denominador 100, escrita com o símbolo % (35% = 35/100)."],
      ["desconto","O que se tira ao preço. Com um desconto de 25%, paga-se 75% do preço."],
      ["aumento","O que se junta ao preço. Com um aumento de 10%, paga-se 110% do preço."],
      ["estimar","Calcular um valor aproximado, com números arredondados, para verificar se a conta exata faz sentido."]
    ],
    quiz:[
      {q:"Qual é maior: 0,3 ou 0,25?", opts:["0,25, porque 25 é maior do que 3","0,3","São iguais","Não se podem comparar"], correct:1, explain:"Escreve os dois com as mesmas casas: 0,3 = 0,30. Como 30 centésimas é mais do que 25 centésimas, 0,3 > 0,25. Pensar «25 é maior do que 3» é o erro mais comum: 3 décimas valem mais do que 2 décimas e 5 centésimas."},
      {q:"Quanto é 0,3 × 0,2?", opts:["0,6","0,06","6","0,5"], correct:1, explain:"3 × 2 = 6, e os fatores têm 1 + 1 = 2 casas decimais: 0,06. Faz sentido: 0,3 × 0,2 = 3/10 × 2/10 = 6/100. O 0,6 é o erro de contar só uma casa; 0,5 é a soma."},
      {q:"Quanto é 6 ÷ 0,5?", opts:["3","12","0,3","1,2"], correct:1, explain:"Multiplica os dois por 10: 60 ÷ 5 = 12. Pensa: quantas metades cabem em 6? Doze. O 3 é o resultado de 6 × 0,5 (ou 6 ÷ 2): dividir por 0,5 não é dividir por 2."},
      {q:"Quanto é 1,75 + 0,5?", opts:["1,80","2,25","2,30","1,25"], correct:1, explain:"Alinha as vírgulas: 1,75 + 0,50 = 2,25 (5 décimas juntam-se às 7 décimas). O 1,80 é o erro de alinhar os números pela direita, como se 0,5 fossem 5 centésimas."},
      {q:"Como se escreve 3/4 em percentagem?", opts:["34%","75%","0,75%","43%"], correct:1, explain:"3 ÷ 4 = 0,75 = 75/100 = 75%. O 34% junta os algarismos da fração, e 0,75% esquece de multiplicar por 100."},
      {q:"Qual destas frações dá uma dízima infinita periódica?", opts:["1/4","3/5","2/3","7/20"], correct:2, explain:"2/3 = 0,666…: o 6 repete-se para sempre. As outras acabam: 1/4 = 0,25, 3/5 = 0,6 e 7/20 = 0,35. A regra: na fração irredutível, se o denominador só tem os fatores primos 2 e 5 (4 = 2², 5, 20 = 2² × 5), a dízima é finita; o 3 não é 2 nem 5."},
      {q:"Uma camisola custa 40 € e tem 15% de desconto. Quanto pagas?", opts:["34 €","25 €","6 €","46 €"], correct:0, explain:"Pagas 85% do preço: 0,85 × 40 = 34 €. (O desconto é 0,15 × 40 = 6 €, e 40 − 6 = 34.) O 25 € é o erro de tirar 15 euros em vez de 15%; o 6 € é só o desconto; o 46 € seria um aumento."},
      {q:"Um jogo custa 100 €. O preço sobe 10% e, depois, desce 10%. Quanto fica a custar?", opts:["100 €","99 €","110 €","90 €"], correct:1, explain:"Sobe 10%: 100 × 1,10 = 110 €. Desce 10% de 110 (não de 100!): 110 × 0,90 = 99 €. Os 10% da descida calculam-se sobre um preço maior, por isso não se volta ao início."},
      {q:"Numa turma de 25 alunos, 15 vêm a pé para a escola. Que percentagem vem a pé?", opts:["15%","60%","40%","25%"], correct:1, explain:"Parte ÷ todo: 15 ÷ 25 = 0,6 = 60%. O 15% confunde o número de alunos com a percentagem; 40% são os que não vêm a pé (10 em 25)."},
      {q:"«Multiplicar por 0,5 é o mesmo que dividir por 2.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. 0,5 = 1/2, por isso 8 × 0,5 = 4, que é o mesmo que 8 ÷ 2.","Falso. Multiplicar dá sempre um número maior.","Falso. 8 × 0,5 = 40.","Verdadeiro, mas só funciona com números pares."], correct:0, explain:"0,5 é metade, por isso multiplicar por 0,5 é calcular metade: 8 × 0,5 = 4 = 8 ÷ 2. Também funciona com ímpares: 7 × 0,5 = 3,5 = 7 ÷ 2. E multiplicar por um número menor do que 1 dá um resultado menor."}
    ],
    posters:[
      {title:"⚖️ Exemplo 1 — Comparar 0,3 e 0,25", svg:'<svg class="poster-svg" viewBox="0 0 320 80" style="max-width:320px;margin:0 auto" role="img" aria-label="Reta numérica de 0,2 a 0,4, dividida em centésimas de 0,05 em 0,05: o 0,25 fica antes do 0,3.">'+
        '<g stroke="currentColor" stroke-width="2"><line x1="20" y1="40" x2="300" y2="40"/>'+
        '<line x1="20" y1="32" x2="20" y2="48"/><line x1="90" y1="34" x2="90" y2="46"/><line x1="160" y1="32" x2="160" y2="48"/><line x1="230" y1="34" x2="230" y2="46"/><line x1="300" y1="32" x2="300" y2="48"/></g>'+
        '<g fill="var(--wc)"><circle cx="90" cy="40" r="6"/><circle cx="160" cy="40" r="6"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle"><text x="20" y="66">0,20</text><text x="90" y="24">0,25</text><text x="160" y="24">0,30</text><text x="230" y="66">0,35</text><text x="300" y="66">0,40</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> qual é maior, 0,3 ou 0,25.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escreve os dois números com o mesmo número de casas decimais. Um zero à direita não muda o valor: 0,3 = 0,30.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>0,30 = 30 centésimas<br>0,25 = 25 centésimas<br>30 centésimas &gt; 25 centésimas</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 0,3 &gt; 0,25.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> na reta numérica, 0,25 fica antes de 0,3. Pensa em dinheiro: 0,30 € são 30 cêntimos e 0,25 € são 25 cêntimos. Erro a evitar: «25 é maior do que 3, por isso 0,25 é maior».</span></li>'+
        '</ul>'},
      {title:"✖️ Exemplo 2 — Multiplicar decimais", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quanto é 0,3 × 0,2 e quanto custam 2,5 kg de maçãs a 1,20 € o quilo.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> multiplica como se não houvesse vírgulas e, no fim, conta as casas decimais dos dois fatores.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>0,3 × 0,2: 3 × 2 = 6; casas decimais: 1 + 1 = 2 → 0,06<br>2,5 × 1,20: 25 × 120 = 3000; casas decimais: 1 + 2 = 3 → 3,000 = 3</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 0,3 × 0,2 = 0,06 e as maçãs custam 3,00 €.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> estima. 2,5 kg a pouco mais de 1 € dá pouco mais de 2,50 €: 3 € faz sentido. E 0,3 × 0,2 = 3/10 × 2/10 = 6/100 = 0,06. Multiplicar por um número menor do que 1 dá menos: 0,06 é menor do que 0,3.</span></li>'+
        '</ul>'},
      {title:"➗ Exemplo 3 — Dividir por um decimal", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos copos de 0,5 litros se enchem com 6 litros (6 ÷ 0,5), e quanto é 4,8 ÷ 1,2.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> transforma o divisor num inteiro, multiplicando os dois números por 10. O resultado não muda.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>6 ÷ 0,5 = 60 ÷ 5 = 12<br>4,8 ÷ 1,2 = 48 ÷ 12 = 4</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> enchem-se 12 copos, e 4,8 ÷ 1,2 = 4.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> faz a conta ao contrário: 12 × 0,5 = 6 e 4 × 1,2 = 4,8. Dividir por um número menor do que 1 dá um resultado maior: em 6 litros cabem 12 meios litros.</span></li>'+
        '</ul>'},
      {title:"🔁 Exemplo 4 — Fração, decimal e percentagem", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> escrever 3/4, 2/5 e 1/3 como decimal e como percentagem.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> uma fração é uma divisão: numerador ÷ denominador.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>3/4 = 3 ÷ 4 = 0,75 = 75%<br>2/5 = 2 ÷ 5 = 0,4 = 40%<br>1/3 = 1 ÷ 3 = 0,333… ≈ 33,3% (o 3 repete-se para sempre)</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 3/4 e 2/5 dão dízimas finitas; 1/3 dá uma dízima infinita periódica, de período 3.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar com o Mundo 1:</b> decompõe o denominador. 4 = 2² e 5 = 5 só têm fatores 2 e 5: dízima finita. 3 tem outro fator primo: dízima infinita periódica. Assim sabes a resposta antes de dividir!</span></li>'+
        '</ul>'},
      {title:"🏷️ Exemplo 5 — Descontos e aumentos", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quanto se paga por um casaco de 45 € com 20% de desconto. E se um preço de 100 € subir 10% e depois descer 10%?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escreve a percentagem como decimal: 20% = 0,20.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Maneira 1: desconto = 0,20 × 45 = 9 €; pagas 45 − 9 = 36 €<br>Maneira 2: pagas 80% do preço: 0,80 × 45 = 36 €<br>Sobe 10%: 100 × 1,10 = 110 €; desce 10%: 110 × 0,90 = 99 €</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o casaco fica a 36 €. Subir 10% e descer 10% não volta ao mesmo: fica 99 €.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> preço final + desconto = 36 + 9 = 45 €. Os 10% da descida calculam-se sobre 110 €, um valor maior, por isso tiram mais do que os 10 € que se juntaram.</span></li>'+
        '</ul>'},
      {title:"📊 Exemplo 6 — Que percentagem é?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> numa turma de 25 alunos, 15 vêm a pé. Que percentagem da turma vem a pé?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escreve a fração «parte sobre todo»: 15/25.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>15 ÷ 25 = 0,6<br>0,6 × 100 = 60%<br>Ou com frações equivalentes: 15/25 = 60/100 (multiplicando por 4).</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 60% da turma vem a pé.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 60% de 25 = 0,6 × 25 = 15 alunos. Os outros 10 alunos são 40%, e 60% + 40% = 100%.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"🔢 Dízima finita", points:["A divisão acaba: 3/4 = 0,75","Na fração irredutível, o denominador só tem os fatores primos 2 e 5","Ex.: 1/2, 2/5, 7/20"]},
      right:{title:"🔁 Dízima infinita periódica", points:["Um grupo de algarismos repete-se: 1/3 = 0,333…","O denominador tem outros fatores primos (3, 7, 11…)","Ex.: 2/3, 1/6, 5/7"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n4", num:4, c:"m4", icon:"🧩",
    title:"Padrões e Proporção",
    subtitle:"Sequências, expressões e proporcionalidade direta", pages:"manual a confirmar",
    lead:"Neste mundo vais aprender a descobrir a regra de uma sequência e a escrevê-la com letras, a reconhecer grandezas diretamente proporcionais, a resolver problemas com a redução à unidade e a regra de três, e a usar escalas em mapas. Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Padrão de Palitos", d:"Sequências e termo geral", f:"Com palitos (ou a desenhar), faz uma fila de triângulos encostados: 1 triângulo, 2 triângulos, 3, 4…\nRegista numa tabela quantos palitos usa cada figura e descobre o termo geral, como no Exemplo 2.\nVerifica: usa a tua fórmula para prever a figura 5 e depois constrói-a e conta.", xp:10},
      {t:"Receita Escalada", d:"Proporcionalidade direta", f:"Escolhe uma receita de casa para 4 pessoas.\nFaz uma tabela com as quantidades para 2, 6 e 10 pessoas, como nos Exemplos 3 e 4.\nVerifica: em cada ingrediente, quantidade ÷ número de pessoas dá sempre o mesmo valor.", xp:10},
      {t:"Detetive de Mapas", d:"Escalas", f:"Num mapa com escala (um atlas, ou um mapa impresso da tua cidade), mede com a régua 3 distâncias entre sítios que conheces.\nCalcula as distâncias reais, como no Exemplo 5.\nVerifica: compara com a distância que uma app de mapas indica. Devem ser parecidas (a estrada tem curvas, por isso a da app é um pouco maior).", xp:15},
      {t:"É ou Não É Proporcional?", d:"Reconhecer a proporcionalidade direta", f:"Inventa ou pesquisa 3 situações: o preço da fruta ao quilo, o preço de uma viagem de táxi e a altura de uma pessoa com a idade.\nPara cada uma, faz uma tabela com 3 valores e decide se é proporcional, como no Exemplo 3.\nVerifica: só é proporcional se o quociente der sempre o mesmo número.", xp:10}
    ],
    resumo:[
      "Uma <b>sequência</b> é uma lista ordenada de números ou figuras que segue uma regra. Cada elemento é um <b>termo</b>. O <b>termo geral</b> é uma expressão com a letra n (a ordem do termo) que dá qualquer termo sem escrever os anteriores: em 3, 7, 11, 15, … soma-se 4 de cada vez e o termo geral é 4n − 1.",
      "Uma <b>expressão algébrica</b> usa letras para representar números (ex.: 3n + 2, «o triplo de n mais 2»). Para saber o seu valor, substitui-se a letra por um número: se n = 5, 3 × 5 + 2 = 17.",
      "Duas grandezas são <b>diretamente proporcionais</b> quando o quociente entre os valores correspondentes é sempre o mesmo. Esse número é a <b>constante de proporcionalidade</b> (ex.: o preço por quilo). Atenção: duas grandezas podem aumentar ao mesmo tempo sem serem proporcionais.",
      "Problemas de proporcionalidade direta resolvem-se pela <b>redução à unidade</b> (quanto vale 1?) ou pela <b>regra de três simples</b>: se 5 kg custam 6 €, 8 kg custam 8 × 6 ÷ 5 = 9,60 €.",
      "No <b>referencial cartesiano</b>, cada ponto tem <b>coordenadas</b> (x, y): primeiro o valor no eixo horizontal, depois no vertical. O gráfico de duas grandezas diretamente proporcionais é formado por pontos sobre uma reta que passa pela <b>origem</b> (0, 0).",
      "A <b>escala</b> de um mapa compara a distância no mapa com a distância real. Na escala 1 : 50 000, 1 cm no mapa representa 50 000 cm na realidade, ou seja, 500 m."
    ],
    gloss:[
      ["sequência","Uma lista ordenada de números ou figuras que segue uma regra."],
      ["termo","Cada elemento de uma sequência. O 1.º termo, o 2.º termo…"],
      ["termo geral","A expressão com n que dá o termo de ordem n (ex.: 4n − 1)."],
      ["expressão algébrica","Uma expressão com letras que representam números (ex.: 3n + 2)."],
      ["diretamente proporcionais","Duas grandezas cujo quociente entre valores correspondentes é sempre o mesmo."],
      ["constante de proporcionalidade","O quociente que se mantém entre duas grandezas diretamente proporcionais (ex.: 2,50 € por quilo)."],
      ["redução à unidade","Calcular primeiro quanto corresponde a 1 (1 kg, 1 pessoa…) e depois multiplicar."],
      ["regra de três simples","Um método para encontrar o valor desconhecido numa proporção: 5 → 6 e 8 → x, por isso x = 8 × 6 ÷ 5."],
      ["referencial cartesiano","Dois eixos perpendiculares, com números, que servem para localizar pontos."],
      ["coordenadas","O par de números (x, y) que localiza um ponto no referencial."],
      ["origem","O ponto (0, 0), onde os dois eixos se cruzam."],
      ["escala","A relação entre uma distância no mapa e a distância real (ex.: 1 : 50 000)."]
    ],
    quiz:[
      {q:"Na sequência 5, 8, 11, 14, … qual é o termo seguinte?", opts:["15","17","18","28"], correct:1, explain:"De um termo para o seguinte soma-se 3: 14 + 3 = 17. O 15 soma só 1, e o 28 é o dobro de 14: a regra não é dobrar."},
      {q:"Qual é o termo geral da sequência 4, 8, 12, 16, …?", opts:["n + 4","4n","4n + 4","2n + 2"], correct:1, explain:"São os múltiplos de 4: o termo de ordem n é 4 × n. Testa: n = 1 → 4, n = 3 → 12. Com n + 4 dava 5, 6, 7…, e com 4n + 4 dava 8, 12, 16… (falta o 4)."},
      {q:"Qual é o 10.º termo da sequência de termo geral 2n + 1?", opts:["12","20","21","30"], correct:2, explain:"Substitui n por 10: 2 × 10 + 1 = 21. O 12 vem de somar em vez de multiplicar (2 + 10), e o 20 esquece o «+ 1»."},
      {q:"Um táxi cobra 4 € por 1 km, 5 € por 2 km e 6 € por 3 km. O preço é diretamente proporcional à distância?", opts:["Sim, porque quando os quilómetros aumentam o preço também aumenta","Não, porque o quociente muda: 4 ÷ 1 = 4, 5 ÷ 2 = 2,5 e 6 ÷ 3 = 2","Sim, e a constante é 1","Não, porque os números são pequenos"], correct:1, explain:"Para ser proporcional, o quociente tinha de ser sempre o mesmo, e não é. O táxi tem um valor fixo à partida (a bandeirada), por isso 2 km não custam o dobro de 1 km. Aumentar ao mesmo tempo não chega para ser proporcional."},
      {q:"3 kg de maçãs custam 7,50 €. Qual é o preço de 1 kg?", opts:["22,50 €","0,40 €","2,50 €","4,50 €"], correct:2, explain:"Redução à unidade: 7,50 ÷ 3 = 2,50 € por quilo, que é a constante de proporcionalidade. O 22,50 multiplica em vez de dividir, e o 0,40 divide ao contrário (3 ÷ 7,50 dá quilos por euro)."},
      {q:"Num mapa à escala 1 : 100 000, duas aldeias estão a 3 cm uma da outra. Qual é a distância real?", opts:["300 m","3 km","30 km","3 m"], correct:1, explain:"3 × 100 000 = 300 000 cm. Como 100 000 cm = 1 km, são 3 km. O 300 m e o 30 km vêm de converter mal as unidades (1 m = 100 cm; 1 km = 100 000 cm)."},
      {q:"Uma receita para 4 pessoas leva 200 g de farinha. Quanta farinha é precisa para 6 pessoas?", opts:["202 g","300 g","400 g","1200 g"], correct:1, explain:"Cada pessoa leva 200 ÷ 4 = 50 g, por isso 6 pessoas levam 6 × 50 = 300 g. O 202 g é o erro de somar: «de 4 para 6 são mais 2, por isso mais 2 g». Na proporcionalidade multiplica-se, não se soma."},
      {q:"Num referencial cartesiano, como é o gráfico de duas grandezas diretamente proporcionais?", opts:["Pontos sobre uma reta que passa pela origem","Pontos sobre uma reta que não passa pela origem","Pontos sobre uma curva que sobe","Pontos sobre uma reta horizontal"], correct:0, explain:"Se não compras nada, não pagas nada: o ponto (0, 0) faz parte do gráfico. E como o quociente é sempre o mesmo, os pontos ficam alinhados. Uma reta que não passa pela origem é o caso do táxi: há um valor à partida."},
      {q:"O Rui tem n berlindes. A Ana tem o triplo dos berlindes do Rui, mais 2. Que expressão dá os berlindes da Ana?", opts:["3(n + 2)","n + 3 + 2","3n + 2","5n"], correct:2, explain:"«O triplo de n» é 3n, e «mais 2» junta-se depois: 3n + 2. A expressão 3(n + 2) seria o triplo de (n + 2), que dá mais 4 berlindes."},
      {q:"«Se duas grandezas aumentam ao mesmo tempo, são diretamente proporcionais.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. Se uma aumenta e a outra também, são proporcionais.","Falso. No táxi, a distância e o preço aumentam juntos, mas 2 km não custam o dobro de 1 km.","Verdadeiro. O preço da fruta e o peso aumentam juntos.","Falso. Grandezas proporcionais nunca aumentam."], correct:1, explain:"Basta um contraexemplo: no táxi, a distância e o preço aumentam juntos, mas o quociente muda, por isso não são proporcionais. Um exemplo em que dá certo (a fruta) não prova que é sempre assim."}
    ],
    posters:[
      {title:"🔢 Exemplo 1 — O termo geral de uma sequência", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o termo geral da sequência 3, 7, 11, 15, … e se o número 100 pertence a ela.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> vê quanto se soma de um termo para o seguinte: 7 − 3 = 4, 11 − 7 = 4. Soma-se sempre 4, por isso o termo geral tem «4n».</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>4n dá 4, 8, 12, 16…: cada termo tem 1 a mais do que a sequência.<br>Então o termo geral é 4n − 1.<br>10.º termo: 4 × 10 − 1 = 39<br>O 100 pertence? Seria 4n − 1 = 100, ou seja 4n = 101. Mas 101 não é múltiplo de 4.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o termo geral é 4n − 1, o 10.º termo é 39 e o 100 não pertence à sequência.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> testa com os primeiros termos. n = 1: 4 − 1 = 3 ✓; n = 2: 8 − 1 = 7 ✓; n = 4: 16 − 1 = 15 ✓.</span></li>'+
        '</ul>'},
      {title:"🔺 Exemplo 2 — Uma sequência de figuras", svg:'<svg class="poster-svg" viewBox="0 0 320 80" style="max-width:320px;margin:0 auto" role="img" aria-label="Figuras feitas de palitos: 1 quadrado usa 4 palitos, 2 quadrados encostados usam 7, 3 quadrados usam 10.">'+
        '<g fill="none" stroke="var(--wc)" stroke-width="3" stroke-linecap="round"><rect x="10" y="20" width="30" height="30"/><rect x="70" y="20" width="30" height="30"/><rect x="100" y="20" width="30" height="30"/><rect x="160" y="20" width="30" height="30"/><rect x="190" y="20" width="30" height="30"/><rect x="220" y="20" width="30" height="30"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="25" y="70">4 palitos</text><text x="100" y="70">7 palitos</text><text x="205" y="70">10 palitos</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos palitos são precisos para uma fila de 20 quadrados encostados.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> faz uma tabela. 1 quadrado: 4 palitos · 2 quadrados: 7 · 3 quadrados: 10. Cada quadrado novo junta 3 palitos.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Junta-se 3 de cada vez, por isso o termo geral tem «3n».<br>3n dá 3, 6, 9…: falta sempre 1 (o primeiro palito, à esquerda).<br>Termo geral: 3n + 1<br>20 quadrados: 3 × 20 + 1 = 61 palitos</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> são precisos 61 palitos.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> testa com a figura 3: 3 × 3 + 1 = 10 ✓. Erro a evitar: «1 quadrado usa 4, por isso 20 usam 80». Os quadrados encostados partilham palitos.</span></li>'+
        '</ul>'},
      {title:"⚖️ Exemplo 3 — É ou não é proporcional?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> se o preço é diretamente proporcional à quantidade em duas situações: cadernos (1 → 1,50 €, 2 → 3 €, 3 → 4,50 €) e táxi (1 km → 4 €, 2 km → 5 €, 3 km → 6 €).</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> divide cada preço pela quantidade correspondente.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Cadernos: 1,50 ÷ 1 = 1,50 · 3 ÷ 2 = 1,50 · 4,50 ÷ 3 = 1,50 → sempre igual<br>Táxi: 4 ÷ 1 = 4 · 5 ÷ 2 = 2,50 · 6 ÷ 3 = 2 → muda</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> os cadernos são proporcionais (constante 1,50 € por caderno); o táxi não é, porque tem um valor fixo à partida.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> nos cadernos, o dobro da quantidade custa o dobro (2 → 3 €; 4 → 6 €). No táxi, 2 km não custam o dobro de 1 km (5 € e não 8 €). Aumentarem juntos não chega!</span></li>'+
        '</ul>'},
      {title:"🍊 Exemplo 4 — Redução à unidade e regra de três", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> 5 kg de laranjas custam 6 €. Quanto custam 8 kg?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o preço e o peso são diretamente proporcionais (o preço por quilo é sempre o mesmo).</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Maneira 1 (redução à unidade): 1 kg custa 6 ÷ 5 = 1,20 €; 8 kg custam 8 × 1,20 = 9,60 €<br>Maneira 2 (regra de três): 5 kg → 6 € e 8 kg → x; x = 8 × 6 ÷ 5 = 48 ÷ 5 = 9,60 €</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 8 kg custam 9,60 €.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> o quociente mantém-se: 6 ÷ 5 = 1,20 e 9,60 ÷ 8 = 1,20. E faz sentido: um pouco mais de peso, um pouco mais caro.</span></li>'+
        '</ul>'},
      {title:"🗺️ Exemplo 5 — A escala de um mapa", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> num mapa à escala 1 : 50 000, duas aldeias estão a 4 cm. Qual é a distância real? E quantos centímetros ocupam 3 km nesse mapa?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> 1 : 50 000 quer dizer que 1 cm no mapa são 50 000 cm na realidade.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>4 cm × 50 000 = 200 000 cm<br>200 000 cm = 2000 m = 2 km<br>Ao contrário: 3 km = 300 000 cm; 300 000 ÷ 50 000 = 6 cm</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> as aldeias estão a 2 km, e 3 km ocupam 6 cm no mapa.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> as conversões. 1 m = 100 cm e 1 km = 100 000 cm. A escala é uma proporcionalidade direta: o dobro de centímetros no mapa é o dobro da distância real.</span></li>'+
        '</ul>'},
      {title:"📈 Exemplo 6 — O gráfico da proporcionalidade", svg:'<svg class="poster-svg" viewBox="0 0 240 190" style="max-width:240px;margin:0 auto" role="img" aria-label="Referencial cartesiano com o número de bilhetes no eixo horizontal e o preço em euros no vertical. Os pontos (1, 2), (2, 4) e (3, 6) estão sobre uma reta que passa pela origem.">'+
        '<g stroke="currentColor" stroke-width="0.6" opacity="0.3"><line x1="40" y1="130" x2="220" y2="130"/><line x1="40" y1="100" x2="220" y2="100"/><line x1="40" y1="70" x2="220" y2="70"/><line x1="40" y1="40" x2="220" y2="40"/><line x1="80" y1="20" x2="80" y2="160"/><line x1="120" y1="20" x2="120" y2="160"/><line x1="160" y1="20" x2="160" y2="160"/><line x1="200" y1="20" x2="200" y2="160"/></g>'+
        '<g stroke="currentColor" stroke-width="1.8"><line x1="40" y1="160" x2="225" y2="160"/><line x1="40" y1="160" x2="40" y2="15"/></g>'+
        '<line x1="40" y1="160" x2="200" y2="40" stroke="var(--wc)" stroke-width="2" stroke-dasharray="5 4"/>'+
        '<g fill="var(--wc)"><circle cx="80" cy="130" r="5"/><circle cx="120" cy="100" r="5"/><circle cx="160" cy="70" r="5"/><circle cx="40" cy="160" r="4"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="10" text-anchor="middle"><text x="80" y="174">1</text><text x="120" y="174">2</text><text x="160" y="174">3</text><text x="200" y="174">4</text><text x="34" y="133" text-anchor="end">2</text><text x="34" y="103" text-anchor="end">4</text><text x="34" y="73" text-anchor="end">6</text><text x="34" y="43" text-anchor="end">8</text>'+
        '<text x="140" y="187" font-weight="700">bilhetes</text><text x="12" y="12" text-anchor="start" font-weight="700">€</text><text x="40" y="174" font-weight="700">0</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> como é o gráfico do preço de bilhetes de autocarro a 2 € cada.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> faz a tabela: 0 bilhetes → 0 €, 1 → 2 €, 2 → 4 €, 3 → 6 €. Cada par é um ponto (x, y): x = bilhetes, y = preço.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Marca os pontos (0, 0), (1, 2), (2, 4) e (3, 6).<br>Para cada ponto: anda primeiro na horizontal (x), depois sobe (y).<br>Liga os pontos com uma régua.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> os pontos ficam numa reta que passa pela origem (0, 0). É assim o gráfico de duas grandezas diretamente proporcionais.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> por cada bilhete a mais, a reta sobe 2 € (a constante de proporcionalidade). Erro a evitar: trocar a ordem das coordenadas; (2, 4) não é o mesmo ponto que (4, 2).</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"📈 Diretamente proporcionais", points:["O quociente é sempre o mesmo","O dobro de uma dá o dobro da outra","Ex.: o preço da fruta ao quilo; o gráfico é uma reta que passa pela origem"]},
      right:{title:"📉 Não proporcionais", points:["O quociente muda","Podem aumentar juntas sem ser o dobro","Ex.: o táxi com bandeirada; a altura de uma pessoa com a idade"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n5", num:5, c:"m5", icon:"📐",
    title:"Ângulos e Polígonos",
    subtitle:"Ângulos, perímetro e área", pages:"manual a confirmar",
    lead:"Construir em Minecraft é sempre uma questão de ângulos certos e paredes com o tamanho certo. Este mundo ensina a medir os cantos e as superfícies das tuas construções.",
    missions:[
      {t:"Medir com o Transferidor", d:"Ângulos e sua classificação", f:"Medir 5 ângulos de objetos à tua volta", xp:10},
      {t:"À Volta do Bloco", d:"Perímetro de polígonos", f:"Calcular o perímetro de 3 divisões da tua casa", xp:10},
      {t:"Área do Terreno", d:"Área do retângulo, triângulo, paralelogramo e trapézio", f:"Calcular a área de 4 figuras diferentes", xp:15}
    ],
    resumo:[
      "Um <b>ângulo</b> mede-se em graus (°). Dois ângulos dizem-se um <b>ângulo complementar</b> do outro quando somam 90°; dizem-se um <b>ângulo suplementar</b> do outro quando somam 180°. <b>Ângulos verticalmente opostos</b> são sempre iguais.",
      "Um <b>polígono</b> é uma figura plana fechada com lados retos. O <b>perímetro</b> é a soma de todos os lados.",
      "<b>Área do retângulo</b> = comprimento × largura. <b>Área do paralelogramo</b> = base × altura. <b>Área do triângulo</b> = (base × altura) ÷ 2. <b>Área do trapézio</b> = ((Base maior + Base menor) × altura) ÷ 2."
    ],
    gloss:[
      ["ângulo","Mede-se em graus (°) e forma-se entre duas semirretas com a mesma origem."],
      ["ângulo complementar","Um ângulo que, somado a outro, dá 90°."],
      ["ângulo suplementar","Um ângulo que, somado a outro, dá 180°."],
      ["ângulos verticalmente opostos","Dois ângulos formados por duas retas que se cruzam, sempre iguais entre si."],
      ["perímetro","A soma de todos os lados de uma figura."],
      ["área do retângulo","Calcula-se multiplicando o comprimento pela largura."],
      ["área do paralelogramo","Calcula-se multiplicando a base pela altura."],
      ["área do triângulo","Calcula-se multiplicando a base pela altura e dividindo por 2."],
      ["área do trapézio","Calcula-se somando a base maior com a base menor, multiplicando pela altura e dividindo por 2."],
      ["área","O espaço ocupado por uma figura, medido em unidades quadradas."],
      ["polígono","Uma figura plana e fechada, feita só de lados retos."]
    ],
    quiz:[
      {q:"Em que unidade se medem os ângulos?", opts:["Graus (°)","Metros","Litros","Gramas"], correct:0, explain:"Os ângulos medem-se em graus (°)."},
      {q:"Quando é que dois ângulos são complementares?", opts:["Quando a soma é 90°","Quando a soma é 180°","Quando são iguais","Quando a soma é 360°"], correct:0, explain:"Dois ângulos complementares somam 90°."},
      {q:"Quando é que dois ângulos são suplementares?", opts:["Quando a soma é 180°","Quando a soma é 90°","Quando são opostos pelo vértice","Quando a soma é 0°"], correct:0, explain:"Dois ângulos suplementares somam 180°."},
      {q:"O que se pode dizer sobre ângulos verticalmente opostos?", opts:["São sempre iguais","Somam sempre 90°","Somam sempre 180°","São sempre diferentes"], correct:0, explain:"Os ângulos verticalmente opostos, formados por duas retas que se cruzam, são sempre iguais entre si."},
      {q:"O que é um polígono?", opts:["Uma figura plana fechada com lados retos","Uma linha curva","Um sólido com volume","Um ângulo maior que 180°"], correct:0, explain:"Um polígono é uma figura plana fechada, feita só de lados retos."},
      {q:"O que é o perímetro de um polígono?", opts:["A soma de todos os seus lados","A sua área","O número de lados","A soma dos seus ângulos"], correct:0, explain:"O perímetro é a soma de todos os lados da figura."},
      {q:"Qual é a fórmula da área do retângulo?", opts:["Comprimento × largura","Base × altura ÷ 2","Lado × lado × lado","2 × (comprimento + largura)"], correct:0, explain:"A área do retângulo calcula-se multiplicando o comprimento pela largura."},
      {q:"Qual é a fórmula da área do triângulo?", opts:["(Base × altura) ÷ 2","Base × altura","Lado × 4","Comprimento × largura"], correct:0, explain:"A área do triângulo é (base × altura) ÷ 2."},
      {q:"Um retângulo tem 5 cm de comprimento e 3 cm de largura. Qual é a sua área?", opts:["15 cm²","8 cm²","16 cm²","10 cm²"], correct:0, explain:"5 cm × 3 cm = 15 cm²."},
      {q:"Qual é a fórmula da área do trapézio?", opts:["((Base maior + Base menor) × altura) ÷ 2","Base × altura","(Base maior × Base menor) ÷ 2","Base maior + Base menor"], correct:0, explain:"A área do trapézio é ((Base maior + Base menor) × altura) ÷ 2."}
    ],
    compare:{
      left:{title:"➕ Ângulo complementar", points:["Soma 90° com outro ângulo","Ex.: 30° e 60° são complementares","Comum em esquadros e cantos retos"]},
      right:{title:"➕ Ângulo suplementar", points:["Soma 180° com outro ângulo","Ex.: 110° e 70° são suplementares","Comum em linhas retas divididas por outra reta"]}
    },
    resources:[
      {icon:"🎮", title:"Jogos de geometria", desc:"Jogos curtos para praticar ângulos, perímetro e área de figuras.", site:"Math Playground", url:"https://www.mathplayground.com/index_geometry.html"}
    ],
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n6", num:6, c:"m6", icon:"⭕",
    title:"Mundo Redondo",
    subtitle:"Circunferência e círculo", pages:"manual a confirmar",
    lead:"Nem tudo num jogo é feito de blocos quadrados — rodas, escudos redondos, radares. Este mundo é sobre medir tudo o que é redondo.",
    missions:[
      {t:"À Volta do Círculo", d:"Elementos da circunferência: centro, raio, diâmetro", f:"Medir o raio de 3 objetos redondos em casa", xp:10},
      {t:"O Perímetro Redondo", d:"Perímetro da circunferência", f:"Calcular o perímetro de 3 círculos diferentes", xp:10},
      {t:"A Área Redonda", d:"Área do círculo", f:"Calcular a área de 3 círculos diferentes", xp:15}
    ],
    resumo:[
      "A <b>circunferência</b> é a linha que forma o contorno de um círculo; o <b>círculo</b> é a superfície que ela delimita.",
      "O <b>raio</b> é a distância do centro a qualquer ponto da circunferência; o <b>diâmetro</b> é o dobro do raio e passa pelo centro.",
      "O perímetro da circunferência calcula-se com a fórmula <b>P = 2 × π × r</b> (π ≈ 3,14).",
      "A área do círculo calcula-se com a fórmula <b>A = π × r²</b>."
    ],
    gloss:[
      ["circunferência","A linha curva que forma o contorno de um círculo."],
      ["círculo","A superfície plana delimitada por uma circunferência."],
      ["raio","A distância do centro do círculo a qualquer ponto da circunferência."],
      ["diâmetro","A distância entre dois pontos opostos da circunferência, passando pelo centro — o dobro do raio."],
      ["π (pi)","Um número que relaciona o perímetro de qualquer círculo com o seu diâmetro, aproximadamente 3,14."]
    ],
    quiz:[
      {q:"Qual é a diferença entre circunferência e círculo?", opts:["A circunferência é a linha do contorno; o círculo é a superfície que ela delimita","São exatamente a mesma coisa","A circunferência é maior que o círculo","O círculo não tem área"], correct:0, explain:"A circunferência é a linha curva; o círculo é a superfície plana que ela delimita."},
      {q:"O que é o raio de um círculo?", opts:["A distância do centro a qualquer ponto da circunferência","A distância entre dois pontos opostos da circunferência","O perímetro do círculo","A área do círculo"], correct:0, explain:"O raio vai do centro até à circunferência."},
      {q:"O que é o diâmetro de um círculo?", opts:["O dobro do raio, passando pelo centro","A metade do raio","O mesmo que o perímetro","A área do círculo"], correct:0, explain:"O diâmetro é o dobro do raio e passa pelo centro."},
      {q:"Qual é a fórmula do perímetro da circunferência?", opts:["P = 2 × π × r","P = π × r²","P = r × r","P = 2 × r"], correct:0, explain:"O perímetro da circunferência calcula-se com P = 2 × π × r."},
      {q:"Qual é a fórmula da área do círculo?", opts:["A = π × r²","A = 2 × π × r","A = π × r","A = r²"], correct:0, explain:"A área do círculo calcula-se com A = π × r²."},
      {q:"Qual é o valor aproximado de π (pi)?", opts:["3,14","3,41","1,34","4,13"], correct:0, explain:"π (pi) tem um valor aproximado de 3,14."},
      {q:"Se o raio de um círculo é 4 cm, qual é o diâmetro?", opts:["8 cm","4 cm","2 cm","16 cm"], correct:0, explain:"O diâmetro é o dobro do raio: 2 × 4 cm = 8 cm."},
      {q:"Qual é o perímetro aproximado de uma circunferência com raio 10 cm (usando π ≈ 3,14)?", opts:["62,8 cm","31,4 cm","314 cm","20 cm"], correct:0, explain:"P = 2 × 3,14 × 10 = 62,8 cm."},
      {q:"Qual é a área aproximada de um círculo com raio 2 cm (usando π ≈ 3,14)?", opts:["12,56 cm²","6,28 cm²","4 cm²","25,12 cm²"], correct:0, explain:"A = π × r² = 3,14 × 2² = 3,14 × 4 = 12,56 cm²."},
      {q:"O que relaciona o número π (pi)?", opts:["O perímetro de qualquer círculo com o seu diâmetro","A área com o perímetro","O raio com a área","O diâmetro com a área"], correct:0, explain:"π relaciona o perímetro de qualquer círculo com o seu diâmetro."}
    ],
    compare:{
      left:{title:"📏 Raio", points:["Vai do centro até à circunferência","É a metade do diâmetro","Usado nas fórmulas P=2πr e A=πr²"]},
      right:{title:"📐 Diâmetro", points:["Vai de um extremo ao outro, passando pelo centro","É o dobro do raio","Divide o círculo em duas partes iguais"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n7", num:7, c:"m7", icon:"🧱",
    title:"Blocos em 3D",
    subtitle:"Volume de sólidos", pages:"manual a confirmar",
    lead:"Cada construção em Minecraft ocupa um número certo de blocos — isso é volume. Este mundo ensina a calcular quanto espaço uma construção realmente ocupa.",
    missions:[
      {t:"Contar Blocos", d:"Volume do paralelepípedo e do cubo", f:"Calcular quantos blocos cabem numa caixa real de casa", xp:10},
      {t:"Construção 3D", d:"Volume de construções simples", f:"Desenhar uma construção e calcular o seu volume", xp:15},
      {t:"Litros e Blocos", d:"Relação entre volume e capacidade", f:"Converter 3 medidas de capacidade em volume", xp:10}
    ],
    resumo:[
      "O <b>volume</b> mede o espaço ocupado por um sólido, em unidades cúbicas (ex.: cm³, m³).",
      "<b>Volume do paralelepípedo retângulo</b> = comprimento × largura × altura. <b>Volume do cubo</b> = aresta × aresta × aresta (aresta³).",
      "1 litro corresponde a 1 dm³ — é assim que se relacionam as unidades de <b>volume</b> e de <b>capacidade</b>."
    ],
    gloss:[
      ["volume","O espaço ocupado por um sólido, medido em unidades cúbicas."],
      ["paralelepípedo","Um sólido com 6 faces retangulares, como uma caixa."],
      ["cubo","Um paralelepípedo cujas faces são todas quadrados iguais."],
      ["aresta","Cada uma das linhas onde duas faces de um sólido se encontram."],
      ["capacidade","A quantidade de líquido ou de outra substância que um recipiente pode conter."]
    ],
    quiz:[
      {q:"O que mede o volume de um sólido?", opts:["O espaço que ele ocupa, em unidades cúbicas","O seu peso","A sua área total","O número de faces"], correct:0, explain:"O volume mede o espaço ocupado por um sólido, em unidades cúbicas (ex.: cm³, m³)."},
      {q:"Qual é a fórmula do volume do paralelepípedo retângulo?", opts:["Comprimento × largura × altura","Lado × lado","2 × (comprimento + largura)","Base × altura ÷ 2"], correct:0, explain:"O volume do paralelepípedo retângulo é comprimento × largura × altura."},
      {q:"Qual é a fórmula do volume do cubo?", opts:["Aresta × aresta × aresta","Aresta × 4","Aresta × 6","Aresta ÷ 2"], correct:0, explain:"O volume do cubo é aresta × aresta × aresta (aresta³)."},
      {q:"O que é uma aresta de um sólido?", opts:["Cada linha onde duas faces se encontram","Cada face do sólido","O centro do sólido","O volume do sólido"], correct:0, explain:"A aresta é cada uma das linhas onde duas faces de um sólido se encontram."},
      {q:"O que é o cubo, em relação ao paralelepípedo?", opts:["Um paralelepípedo cujas faces são todas quadrados iguais","Um paralelepípedo sem faces","Uma figura plana","Um sólido sem arestas"], correct:0, explain:"O cubo é um paralelepípedo cujas faces são todas quadrados iguais."},
      {q:"Uma caixa tem 2 m de comprimento, 3 m de largura e 1 m de altura. Qual é o seu volume?", opts:["6 m³","5 m³","6 m²","12 m³"], correct:0, explain:"2 m × 3 m × 1 m = 6 m³."},
      {q:"Um cubo tem arestas de 3 cm. Qual é o seu volume?", opts:["27 cm³","9 cm³","12 cm³","6 cm³"], correct:0, explain:"3 cm × 3 cm × 3 cm = 27 cm³."},
      {q:"A quantos dm³ corresponde 1 litro?", opts:["1 dm³","10 dm³","100 dm³","0,1 dm³"], correct:0, explain:"1 litro corresponde a 1 dm³."},
      {q:"O que mede a capacidade de um recipiente?", opts:["A quantidade de líquido ou substância que pode conter","O seu peso vazio","O número de faces que tem","A sua altura"], correct:0, explain:"A capacidade é a quantidade de líquido ou de outra substância que um recipiente pode conter."},
      {q:"Em que unidades se mede o volume?", opts:["Unidades cúbicas, como cm³ ou m³","Unidades quadradas, como cm²","Litros apenas","Graus"], correct:0, explain:"O volume mede-se em unidades cúbicas, como cm³ ou m³."}
    ],
    compare:{
      left:{title:"📦 Paralelepípedo retângulo", points:["Tem 6 faces retangulares","Volume = comprimento × largura × altura","As faces podem ter tamanhos diferentes"]},
      right:{title:"🧊 Cubo", points:["Tem 6 faces quadradas iguais","Volume = aresta × aresta × aresta","É um caso especial de paralelepípedo"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n8", num:8, c:"m8", icon:"📊",
    title:"Estatística do Servidor",
    subtitle:"Dados e probabilidades", pages:"manual a confirmar",
    lead:"Neste mundo vais aprender a organizar dados em tabelas e gráficos, a resumi-los com a média, a moda, a mediana e a amplitude, e a calcular probabilidades. Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Inquérito à Família", d:"Recolha e organização de dados", f:"Faz uma pergunta a 10 pessoas (por exemplo: «Qual é a tua fruta preferida?»).\nOrganiza as respostas numa tabela com a frequência absoluta e a frequência relativa, como no Exemplo 1.\nVerifica: as frequências absolutas somam 10 e as relativas somam 100%.", xp:10},
      {t:"Dois Gráficos", d:"Gráfico de barras e gráfico circular", f:"Representa os dados do teu inquérito num gráfico de barras e num gráfico circular, como nos Exemplos 1 e 5.\nNo circular, cada setor tem um ângulo de «percentagem × 3,6» graus.\nVerifica: os ângulos de todos os setores somam 360°.", xp:10},
      {t:"A Semana em Números", d:"Média, moda, mediana e amplitude", f:"Regista a temperatura máxima da tua cidade durante 7 dias (no telejornal ou numa app de meteorologia).\nCalcula a média, a moda, a mediana e a amplitude, como nos Exemplos 2, 3 e 4.\nVerifica: a média e a mediana têm de ficar entre a temperatura mais baixa e a mais alta.", xp:15},
      {t:"Sorte ou Azar?", d:"Probabilidade e experiências aleatórias", f:"Lança um dado 30 vezes e regista quantas vezes sai cada número.\nCalcula a frequência relativa do 6 e compara com a probabilidade de sair 6 (Exemplo 6).\nVerifica: os registos somam 30. O 6 deve sair perto de 5 vezes, mas pode sair mais ou menos: é o acaso!", xp:10}
    ],
    resumo:[
      "Um <b>estudo estatístico</b> começa com uma pergunta. Depois recolhem-se os dados, organizam-se numa tabela, representam-se num gráfico e tiram-se conclusões.",
      "A <b>frequência absoluta</b> é o número de vezes que um valor aparece. A <b>frequência relativa</b> é a frequência absoluta a dividir pelo número total de dados; pode escrever-se como fração, decimal ou percentagem (ex.: 8 em 20 = 8/20 = 0,4 = 40%). As frequências relativas somam sempre 1, ou seja, 100%.",
      "O <b>gráfico de barras</b> serve para comparar quantidades. O <b>gráfico circular</b> mostra as partes de um todo: cada setor tem um ângulo de «frequência relativa × 360°» (40% → 0,4 × 360° = 144°). Num <b>pictograma</b>, cada símbolo vale uma quantidade indicada na legenda.",
      "A <b>média</b> (média aritmética) é a soma de todos os valores a dividir pelo número de valores. A <b>moda</b> é o valor que aparece mais vezes (pode haver mais do que uma, ou nenhuma).",
      "A <b>mediana</b> é o valor do meio, <b>depois de ordenar</b> os dados. Se o número de dados for ímpar, é o valor do meio; se for par, é a média dos dois valores do meio (2, 4, 6, 10 → mediana = (4 + 6) ÷ 2 = 5).",
      "A <b>amplitude</b> é a diferença entre o maior e o menor valor. Mostra se os dados estão próximos ou muito espalhados: dois conjuntos podem ter a mesma média e amplitudes muito diferentes.",
      "Numa experiência aleatória, a <b>probabilidade</b> de um acontecimento, com casos igualmente prováveis, é o número de <b>casos favoráveis</b> a dividir pelo número de <b>casos possíveis</b>. Vale sempre entre 0 (acontecimento <b>impossível</b>) e 1 (acontecimento <b>certo</b>).",
      "Se uma experiência se repetir muitas vezes, a frequência relativa de um acontecimento fica cada vez mais perto da sua probabilidade."
    ],
    gloss:[
      ["estudo estatístico","Investigação que parte de uma pergunta e usa dados para lhe responder."],
      ["frequência absoluta","O número de vezes que um valor aparece nos dados."],
      ["frequência relativa","A frequência absoluta a dividir pelo total de dados (fração, decimal ou percentagem)."],
      ["gráfico de barras","Gráfico em que a altura de cada barra mostra a quantidade de cada categoria."],
      ["gráfico circular","Gráfico em forma de círculo; cada setor é uma parte do todo, com ângulo = frequência relativa × 360°."],
      ["pictograma","Gráfico com símbolos; cada símbolo vale a quantidade indicada na legenda."],
      ["média","A soma de todos os valores a dividir pelo número de valores (média aritmética)."],
      ["moda","O valor que aparece mais vezes num conjunto de dados."],
      ["mediana","O valor do meio dos dados ordenados (ou a média dos dois do meio, se forem em número par)."],
      ["amplitude","A diferença entre o maior e o menor valor de um conjunto de dados."],
      ["probabilidade","Número entre 0 e 1 que mede a possibilidade de um acontecimento: casos favoráveis ÷ casos possíveis."],
      ["casos favoráveis","Os resultados que fazem acontecer o que se quer."],
      ["casos possíveis","Todos os resultados que podem acontecer."],
      ["impossível","Acontecimento que nunca acontece: probabilidade 0."],
      ["certo","Acontecimento que acontece sempre: probabilidade 1."],
      ["experiência aleatória","Uma experiência em que se sabe o que pode acontecer, mas não o que vai acontecer (ex.: lançar um dado)."]
    ],
    quiz:[
      {q:"Qual é a média de 3, 5 e 10?", opts:["5","6","18","7"], correct:1, explain:"Soma e divide pelo número de valores: (3 + 5 + 10) ÷ 3 = 18 ÷ 3 = 6. O 5 é a mediana (o valor do meio), o 18 é só a soma e o 7 é a amplitude (10 − 3)."},
      {q:"Qual é a moda de 2, 3, 3, 5, 5, 5, 8?", opts:["3","5","8","7"], correct:1, explain:"A moda é o valor que aparece mais vezes: o 5 aparece 3 vezes. O 8 é o maior valor, não o mais frequente, e 7 é o número de dados."},
      {q:"Qual é a mediana de 7, 1, 9, 3, 5?", opts:["9","5","8","25"], correct:1, explain:"Primeiro ordena: 1, 3, 5, 7, 9. O valor do meio é o 5. O 9 é o que está no meio da lista sem ordenar: é o erro mais comum! 8 é a amplitude e 25 é a soma."},
      {q:"Qual é a mediana de 2, 4, 6, 10?", opts:["4 e 6","5,5","5","6"], correct:2, explain:"São 4 dados (número par), por isso há dois valores no meio: 4 e 6. A mediana é a média deles: (4 + 6) ÷ 2 = 5. O 5,5 é a média de todos os valores (22 ÷ 4)."},
      {q:"Num dia, as temperaturas foram 12 °C, 18 °C, 9 °C e 15 °C. Qual foi a amplitude térmica?", opts:["9 °C","18 °C","54 °C","13,5 °C"], correct:0, explain:"Amplitude = maior − menor = 18 − 9 = 9 °C. O 18 é só o maior valor, o 54 é a soma e o 13,5 é a média."},
      {q:"Numa turma de 25 alunos, 10 preferem gatos. Qual é a frequência relativa de «gatos»?", opts:["10%","25%","40%","0,10"], correct:2, explain:"Frequência relativa = 10 ÷ 25 = 0,4 = 40%. O 10 é a frequência absoluta, não a relativa, e 25 é o total de alunos."},
      {q:"Num gráfico circular, uma categoria representa 25% dos dados. Que ângulo tem o seu setor?", opts:["25°","45°","90°","180°"], correct:2, explain:"O círculo todo tem 360°. 25% de 360° = 0,25 × 360° = 90°, um quarto do círculo. 180° seria metade (50%)."},
      {q:"Ao lançar um dado, qual é a probabilidade de sair um número maior do que 4?", opts:["4/6","1/6","1/3","1/2"], correct:2, explain:"Os casos favoráveis são o 5 e o 6: são 2 em 6 casos possíveis. 2/6 = 1/3. O 4/6 conta os números até 4 (o contrário do que se pergunta) e o 1/6 só conta um número."},
      {q:"Qual destes números NÃO pode ser uma probabilidade?", opts:["0","0,5","1","1,5"], correct:3, explain:"Uma probabilidade fica sempre entre 0 (impossível) e 1 (certo). 1,5 é maior do que 1: nunca pode haver mais casos favoráveis do que casos possíveis."},
      {q:"«A média é sempre um dos valores do conjunto de dados.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. A média é um dos números da lista.","Falso. A média de 1 e 2 é 1,5, que não está na lista.","Verdadeiro. A média de 2, 4 e 6 é 4, que está na lista.","Falso. A média é sempre maior do que todos os valores."], correct:1, explain:"Basta um contraexemplo: a média de 1 e 2 é 1,5, que não é nenhum dos dois. Um exemplo em que dá certo (2, 4, 6) não prova que é sempre assim. E a média fica sempre entre o menor e o maior valor, nunca acima de todos."}
    ],
    posters:[
      {title:"📋 Exemplo 1 — Tabela de frequências e gráfico de barras", svg:'<svg class="poster-svg" viewBox="0 0 320 170" style="max-width:320px;margin:0 auto" role="img" aria-label="Gráfico de barras do desporto preferido de 20 alunos: futebol 8, natação 5, basquetebol 4, ginástica 3.">'+
        '<g stroke="currentColor" stroke-width="0.6" opacity="0.35"><line x1="40" y1="110" x2="310" y2="110"/><line x1="40" y1="80" x2="310" y2="80"/><line x1="40" y1="50" x2="310" y2="50"/><line x1="40" y1="20" x2="310" y2="20"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="10" x2="40" y2="140"/><line x1="40" y1="140" x2="310" y2="140"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="11" text-anchor="end"><text x="34" y="144">0</text><text x="34" y="114">2</text><text x="34" y="84">4</text><text x="34" y="54">6</text><text x="34" y="24">8</text></g>'+
        '<g fill="var(--wc)"><rect x="55" y="20" width="44" height="120"/><rect x="120" y="65" width="44" height="75"/><rect x="185" y="80" width="44" height="60"/><rect x="250" y="95" width="44" height="45"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="77" y="15">8</text><text x="142" y="60">5</text><text x="207" y="75">4</text><text x="272" y="90">3</text>'+
        '<text x="77" y="158">Futebol</text><text x="142" y="158">Natação</text><text x="207" y="158">Basquete</text><text x="272" y="158">Ginástica</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> perguntou-se a 20 alunos «Qual é o teu desporto preferido?» e queremos organizar e comparar as respostas.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> conta as respostas de cada desporto. É a <b>frequência absoluta</b>.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Futebol 8 · Natação 5 · Basquetebol 4 · Ginástica 3<br>Frequência relativa = frequência absoluta ÷ 20:<br>8 ÷ 20 = 0,40 = 40% · 5 ÷ 20 = 25% · 4 ÷ 20 = 20% · 3 ÷ 20 = 15%<br>No gráfico de barras, cada barra tem a altura da frequência absoluta.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o futebol é o desporto preferido (a moda), com 40% das respostas.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 8 + 5 + 4 + 3 = 20 alunos e 40% + 25% + 20% + 15% = 100%.</span></li>'+
        '</ul>'},
      {title:"➗ Exemplo 2 — A média", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o Tiago marcou 2, 0, 3, 1, 2 e 4 golos em 6 jogos. Quantos golos marca, em média, por jogo?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> a média é como repartir tudo em partes iguais. Junta todos os golos.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Soma: 2 + 0 + 3 + 1 + 2 + 4 = 12 golos<br>Número de jogos: 6<br>Média: 12 ÷ 6 = 2</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> em média, o Tiago marca 2 golos por jogo.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> se marcasse 2 golos em todos os 6 jogos, teria 2 × 6 = 12, o mesmo total. E a média (2) fica entre o mínimo (0) e o máximo (4). Atenção: o 0 também conta como jogo!</span></li>'+
        '</ul>'},
      {title:"🔢 Exemplo 3 — A moda e a mediana", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a moda e a mediana das idades 11, 12, 11, 13, 11, 12, 14.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> antes de tudo, <b>ordena</b> os dados do menor para o maior.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Ordenados: 11, 11, 11, 12, 12, 13, 14 (7 dados)<br>Moda: o 11 aparece 3 vezes, mais do que qualquer outro.<br>Mediana: com 7 dados, o do meio é o 4.º → 12.<br>Se fossem 8 dados (número par), a mediana seria a média dos dois do meio, o 4.º e o 5.º.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> moda = 11 anos; mediana = 12 anos.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> a mediana deixa o mesmo número de dados de cada lado: 3 abaixo (11, 11, 11) e 3 acima (12, 13, 14). Erro a evitar: procurar o «meio» sem ordenar.</span></li>'+
        '</ul>'},
      {title:"↕️ Exemplo 4 — A amplitude", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> numa semana, as temperaturas máximas em Lisboa foram 18, 20, 19, 22 e 21 °C, e em Bragança 8, 15, 12, 20 e 10 °C. Onde variou mais a temperatura?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> procura o maior e o menor valor de cada cidade.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Lisboa: maior 22, menor 18 → amplitude 22 − 18 = 4 °C<br>Bragança: maior 20, menor 8 → amplitude 20 − 8 = 12 °C</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a temperatura variou muito mais em Bragança (amplitude de 12 °C) do que em Lisboa (4 °C).</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> a amplitude nunca é negativa e é sempre «maior − menor». Uma amplitude pequena quer dizer dados regulares, próximos uns dos outros.</span></li>'+
        '</ul>'},
      {title:"🥧 Exemplo 5 — O gráfico circular", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> que ângulo tem cada setor do gráfico circular do Exemplo 1 (40%, 25%, 20% e 15%).</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o círculo todo (100%) tem 360°. Cada setor é a sua parte de 360°.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Futebol: 0,40 × 360° = 144°<br>Natação: 0,25 × 360° = 90°<br>Basquetebol: 0,20 × 360° = 72°<br>Ginástica: 0,15 × 360° = 54°<br>Desenha cada setor com o transferidor, a partir do centro.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> setores de 144°, 90°, 72° e 54°.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 144 + 90 + 72 + 54 = 360°. O setor de 25% é um ângulo reto (90°): um quarto do círculo.</span></li>'+
        '</ul>'},
      {title:"🎲 Exemplo 6 — A probabilidade", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> num saco há 3 bolas azuis, 5 vermelhas e 2 verdes. Tira-se uma bola sem ver. Qual é a probabilidade de sair vermelha? E amarela? E «não azul»?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> conta os casos possíveis (todas as bolas): 3 + 5 + 2 = 10.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Vermelha: 5 casos favoráveis em 10 → 5/10 = 1/2<br>Amarela: não há nenhuma → 0/10 = 0 (impossível)<br>Não azul: vermelhas + verdes = 7 → 7/10</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> P(vermelha) = 1/2, P(amarela) = 0 e P(não azul) = 7/10.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> todas as probabilidades ficam entre 0 e 1. P(azul) = 3/10 e P(não azul) = 7/10 somam 1: ou sai azul, ou não sai.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"➗ Média", points:["Usa todos os valores","Muda muito com um valor extremo: em 1, 2, 3, 4, 100 a média é 22","Pode não ser nenhum dos valores"]},
      right:{title:"🎯 Mediana", points:["É o valor do meio, depois de ordenar","Quase não muda com um valor extremo: em 1, 2, 3, 4, 100 a mediana é 3","Divide os dados em duas metades"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  }
  ];
