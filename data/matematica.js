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
    lead:"O teu inventário está cheio de itens partidos ao meio, em três, em quatro. Frações são só isso: pedaços de um todo — e este mundo ensina a juntá-los, trocá-los e craftar com eles.",
    missions:[
      {t:"Partir o Bolo", d:"Numerador e denominador", f:"Desenhar 5 frações como fatias de pizza ou bolo", xp:10},
      {t:"Trocar por Equivalentes", d:"Frações equivalentes e simplificação", f:"Encontrar 3 pares de frações equivalentes", xp:10},
      {t:"Juntar e Tirar Itens", d:"Adição e subtração de frações", f:"Resolver 5 operações com frações", xp:10},
      {t:"Craftar com Frações", d:"Multiplicação e divisão de frações", f:"Inventar um problema de crafting com frações e resolvê-lo", xp:15}
    ],
    resumo:[
      "Uma <b>fração</b> representa uma parte de um todo dividido em partes iguais: o <b>numerador</b> (partes consideradas) sobre o <b>denominador</b> (total de partes).",
      "Duas frações dizem-se uma <b>fração equivalente</b> da outra quando representam a mesma quantidade, mesmo escritas de forma diferente (ex.: 1/2 = 2/4 = 3/6). Uma fração está na forma <b>irredutível</b> quando numerador e denominador não têm divisores comuns além do 1.",
      "Para somar ou subtrair frações com denominadores diferentes, reduzem-se primeiro ao mesmo denominador — normalmente o m.m.c. dos denominadores.",
      "Para <b>multiplicar</b> frações, multiplicam-se os numeradores entre si e os denominadores entre si. Para <b>dividir</b> frações, multiplica-se pelo <b>inverso</b> da segunda fração.",
      "Um <b>número misto</b> combina uma parte inteira com uma fração (ex.: 2 e 1/3)."
    ],
    gloss:[
      ["fração","Representa uma parte de um todo dividido em partes iguais: numerador sobre denominador."],
      ["numerador","O número de cima na fração — quantas partes se consideram."],
      ["denominador","O número de baixo na fração — em quantas partes o todo foi dividido."],
      ["fração equivalente","Uma fração diferente que representa a mesma quantidade."],
      ["fração irredutível","Uma fração que já não se pode simplificar mais."],
      ["número misto","Um número com uma parte inteira e uma fração, escritas juntas."],
      ["inverso de uma fração","A fração com o numerador e o denominador trocados."]
    ],
    quiz:[
      {q:"O que representa uma fração?", opts:["Uma parte de um todo dividido em partes iguais","Um número sempre maior que 1","A soma de dois números naturais","Um número primo"], correct:0, explain:"Uma fração representa uma parte de um todo dividido em partes iguais: o numerador sobre o denominador."},
      {q:"Numa fração, o que é o numerador?", opts:["O número de cima, que indica quantas partes se consideram","O número de baixo, que indica em quantas partes o todo foi dividido","O resultado da divisão","A soma do numerador e do denominador"], correct:0, explain:"O numerador é o número de cima da fração."},
      {q:"Quando é que duas frações são equivalentes?", opts:["Quando representam a mesma quantidade, mesmo escritas de forma diferente","Quando têm o mesmo numerador","Quando têm o mesmo denominador","Quando a soma dá 1"], correct:0, explain:"Frações equivalentes representam a mesma quantidade (ex.: 1/2 = 2/4 = 3/6)."},
      {q:"Qual destas frações é equivalente a 1/2?", opts:["2/4","1/3","3/5","2/3"], correct:0, explain:"2/4 simplifica-se para 1/2, por isso são equivalentes."},
      {q:"Quando é que uma fração está na forma irredutível?", opts:["Quando o numerador e o denominador não têm divisores comuns além do 1","Quando o numerador é 1","Quando o denominador é 100","Quando é maior que 1"], correct:0, explain:"Uma fração irredutível já não se pode simplificar mais."},
      {q:"Para somar duas frações com denominadores diferentes, o que se deve fazer primeiro?", opts:["Reduzi-las ao mesmo denominador","Multiplicar os numeradores","Simplificar só uma delas","Transformá-las em números mistos"], correct:0, explain:"Reduz-se primeiro ao mesmo denominador, normalmente usando o m.m.c."},
      {q:"Como se multiplicam duas frações?", opts:["Multiplicam-se os numeradores entre si e os denominadores entre si","Multiplicam-se só os numeradores","Soma-se o numerador de uma com o denominador da outra","Multiplica-se pelo inverso"], correct:0, explain:"Na multiplicação de frações, numeradores multiplicam-se entre si e denominadores entre si."},
      {q:"Como se divide uma fração por outra?", opts:["Multiplica-se pelo inverso da segunda fração","Divide-se numerador por numerador e denominador por denominador","Soma-se o inverso","Subtrai-se uma da outra"], correct:0, explain:"Para dividir frações, multiplica-se a primeira pelo inverso da segunda."},
      {q:"O que é um número misto?", opts:["Um número com uma parte inteira e uma fração, escritos juntos","Uma fração com numerador maior que o denominador","Um número decimal","Uma fração equivalente a outra"], correct:0, explain:"Um número misto combina uma parte inteira com uma fração (ex.: 2 e 1/3)."},
      {q:"Qual é o inverso da fração 3/4?", opts:["4/3","3/4","4/4","3/3"], correct:0, explain:"O inverso troca o numerador com o denominador: o inverso de 3/4 é 4/3."}
    ],
    compare:{
      left:{title:"✖️ Multiplicar frações", points:["Multiplicam-se os numeradores entre si","Multiplicam-se os denominadores entre si","Não é preciso igualar denominadores"]},
      right:{title:"➗ Dividir frações", points:["Multiplica-se pelo inverso da segunda fração","Depois segue-se a regra da multiplicação","Também não é preciso igualar denominadores"]}
    },
    resources:[
      {icon:"🔬", title:"Build a Fraction", desc:"Simulação interativa para montar frações e ver frações equivalentes a formarem-se.", site:"PhET Interactive Simulations", url:"https://phet.colorado.edu/en/simulations/build-a-fraction"},
      {icon:"🎮", title:"Jogos de frações", desc:"Vários jogos curtos para praticar frações, equivalências e operações.", site:"Math Playground", url:"https://www.mathplayground.com/index_fractions.html"}
    ],
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n3", num:3, c:"m3", icon:"🏷️",
    title:"Loja e Percentagens",
    subtitle:"Números decimais e percentagens", pages:"manual a confirmar",
    lead:"Toda a loja de um jogo tem preços com vírgulas e promoções em percentagem. Este mundo ensina a mexer com dízimas e a calcular descontos sem te enganares.",
    missions:[
      {t:"Vírgulas no Preço", d:"Números decimais e operações", f:"Simular 5 compras numa loja com preços decimais", xp:10},
      {t:"Desconto de Saldo", d:"Cálculo de percentagens", f:"Calcular o desconto de 3 promoções inventadas", xp:10},
      {t:"Fração, Decimal ou Percentagem?", d:"Conversões entre representações", f:"Converter 6 números entre as três formas", xp:10}
    ],
    resumo:[
      "Um <b>número decimal</b> representa partes de um todo usando a vírgula (ex.: 0,75).",
      "Uma <b>dízima finita</b> tem um número limitado de casas decimais; uma <b>dízima infinita periódica</b> tem uma sequência de algarismos que se repete para sempre (ex.: 1/3 = 0,333...).",
      "Uma <b>percentagem</b> é uma fração com denominador 100 (ex.: 25% = 25/100 = 0,25).",
      "Para calcular a percentagem de um número, multiplica-se o número pela percentagem escrita em forma decimal (ex.: 20% de 50 = 0,20 × 50 = 10)."
    ],
    gloss:[
      ["número decimal","Um número que representa partes de um todo, usando vírgula."],
      ["dízima finita","Um número decimal com um número limitado de casas depois da vírgula."],
      ["dízima infinita periódica","Um número decimal em que um grupo de algarismos se repete para sempre."],
      ["percentagem","Uma fração com denominador 100, escrita com o símbolo %."]
    ],
    quiz:[
      {q:"O que é um número decimal?", opts:["Um número que representa partes de um todo, usando a vírgula","Um número sem casas decimais","Um número sempre negativo","Uma fração imprópria"], correct:0, explain:"Um número decimal representa partes de um todo usando a vírgula (ex.: 0,75)."},
      {q:"O que é uma dízima finita?", opts:["Um número decimal com um número limitado de casas decimais","Um número decimal que se repete para sempre","Um número inteiro","Uma percentagem"], correct:0, explain:"Uma dízima finita tem um número limitado de casas depois da vírgula."},
      {q:"O que é uma dízima infinita periódica?", opts:["Um número decimal em que um grupo de algarismos se repete para sempre","Um número decimal com 2 casas decimais","Um número primo","Uma fração irredutível"], correct:0, explain:"Numa dízima infinita periódica, um grupo de algarismos repete-se para sempre (ex.: 1/3 = 0,333...)."},
      {q:"Qual destas é uma dízima infinita periódica?", opts:["0,333...","0,75","0,5","0,25"], correct:0, explain:"0,333... repete o algarismo 3 para sempre, por isso é uma dízima infinita periódica."},
      {q:"O que é uma percentagem?", opts:["Uma fração com denominador 100","Uma fração com denominador 10","Um número decimal sem vírgula","Um número primo"], correct:0, explain:"Uma percentagem é uma fração com denominador 100, escrita com o símbolo %."},
      {q:"Como se escreve 25% em forma de fração?", opts:["25/100","100/25","25/10","2,5/100"], correct:0, explain:"25% significa 25 em cada 100, ou seja, 25/100."},
      {q:"Como se escreve 25% em forma decimal?", opts:["0,25","2,5","25,0","0,025"], correct:0, explain:"25% = 25/100 = 0,25."},
      {q:"Como se calcula a percentagem de um número?", opts:["Multiplica-se o número pela percentagem em forma decimal","Divide-se o número por 100","Soma-se 100 ao número","Subtrai-se a percentagem do número"], correct:0, explain:"Para calcular a percentagem, multiplica-se o número pela percentagem escrita em forma decimal."},
      {q:"Quanto é 20% de 50?", opts:["10","20","5","100"], correct:0, explain:"20% de 50 é 0,20 × 50 = 10."},
      {q:"Quanto é 10% de 200?", opts:["20","10","2","200"], correct:0, explain:"10% de 200 é 0,10 × 200 = 20."}
    ],
    compare:{
      left:{title:"🔢 Dízima finita", points:["Tem um número limitado de casas decimais","Ex.: 0,75","Resulta, por exemplo, da fração 3/4"]},
      right:{title:"🔁 Dízima infinita periódica", points:["Um grupo de algarismos repete-se para sempre","Ex.: 0,333... (1/3)","Resulta, por exemplo, da fração 1/3"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  },
  {
    id:"n4", num:4, c:"m4", icon:"🧩",
    title:"Padrões e Proporção",
    subtitle:"Sequências e proporcionalidade direta", pages:"manual a confirmar",
    lead:"Nos jogos de crafting, se dobrares os ingredientes, dobras o resultado — isso é proporcionalidade direta. Este mundo é sobre encontrar a regra escondida atrás de um padrão.",
    missions:[
      {t:"Qual É a Regra?", d:"Sequências e regularidades", f:"Continuar 3 sequências e explicar a regra usada", xp:10},
      {t:"Receita Escalada", d:"Proporcionalidade direta", f:"Duplicar ou triplicar uma receita ou lista de crafting", xp:10},
      {t:"Regra de Três", d:"Resolução de problemas com regra de três simples", f:"Resolver 3 problemas do dia a dia", xp:15}
    ],
    resumo:[
      "Uma <b>sequência</b> é uma lista ordenada de números ou figuras que segue uma regra — uma <b>regularidade</b>. O <b>termo geral</b> permite calcular qualquer termo sem escrever todos os anteriores.",
      "Duas grandezas são <b>diretamente proporcionais</b> quando, ao multiplicar uma por um número, a outra fica multiplicada pelo mesmo número — a razão entre elas mantém-se constante (a <b>constante de proporcionalidade</b>).",
      "A <b>regra de três simples</b> é um método para resolver problemas de proporcionalidade direta.",
      "Uma <b>expressão algébrica</b> usa letras para representar números desconhecidos ou variáveis (ex.: 2×a + b)."
    ],
    gloss:[
      ["sequência","Uma lista ordenada de números ou figuras que segue uma regra."],
      ["termo geral","A fórmula que permite calcular qualquer termo de uma sequência."],
      ["proporcionalidade direta","Quando duas grandezas aumentam ou diminuem sempre na mesma proporção."],
      ["constante de proporcionalidade","O número fixo que relaciona duas grandezas diretamente proporcionais."],
      ["regra de três simples","Um método para resolver problemas de proporcionalidade direta."],
      ["expressão algébrica","Uma expressão matemática que usa letras para representar números."]
    ],
    quiz:[
      {q:"O que é uma sequência, em matemática?", opts:["Uma lista ordenada de números ou figuras que segue uma regra","Um conjunto de números sem ordem","Uma fração equivalente","Um número primo"], correct:0, explain:"Uma sequência é uma lista ordenada que segue uma regularidade."},
      {q:"O que permite calcular o termo geral de uma sequência?", opts:["Calcular qualquer termo sem escrever todos os anteriores","Multiplicar sempre por 2","Somar todos os termos","Dividir pelo número de termos"], correct:0, explain:"O termo geral é a fórmula que permite calcular diretamente qualquer termo da sequência."},
      {q:"Quando é que duas grandezas são diretamente proporcionais?", opts:["Quando, ao multiplicar uma por um número, a outra fica multiplicada pelo mesmo número","Quando uma aumenta e a outra diminui sempre","Quando têm sempre o mesmo valor","Quando uma é sempre o dobro da outra menos 1"], correct:0, explain:"Em grandezas diretamente proporcionais, a razão entre elas mantém-se constante."},
      {q:"O que é a constante de proporcionalidade?", opts:["O número fixo que relaciona duas grandezas diretamente proporcionais","Um número que varia sempre","O resultado de uma soma","O maior dos dois números"], correct:0, explain:"A constante de proporcionalidade é o número fixo que relaciona as duas grandezas."},
      {q:"Se 2 kg de maçãs custam 3€, quanto custam 4 kg, mantendo a mesma proporção?", opts:["6€","4€","8€","3€"], correct:0, explain:"Duplicando a quantidade (2kg → 4kg), duplica também o preço (3€ → 6€)."},
      {q:"Para que serve a regra de três simples?", opts:["Para resolver problemas de proporcionalidade direta","Para calcular médias","Para simplificar frações","Para calcular áreas"], correct:0, explain:"A regra de três simples é um método para resolver problemas de proporcionalidade direta."},
      {q:"O que é uma expressão algébrica?", opts:["Uma expressão matemática que usa letras para representar números","Uma fração irredutível","Um número decimal","Uma sequência de números pares"], correct:0, explain:"Uma expressão algébrica usa letras para representar números desconhecidos ou variáveis."},
      {q:"Qual destas é uma expressão algébrica?", opts:["2×a + b","2 + 2 = 4","0,75","3/4"], correct:0, explain:"2×a + b usa a letra \"a\" para representar um número desconhecido ou variável."},
      {q:"Numa receita, se dobrares a quantidade de todos os ingredientes, mantendo a proporção, o que acontece ao resultado final?", opts:["Também duplica","Mantém-se igual","Reduz-se a metade","Triplica"], correct:0, explain:"Como os ingredientes e o resultado são diretamente proporcionais, dobrar os ingredientes duplica o resultado."},
      {q:"Numa sequência em que cada termo é o anterior mais 3, começando em 2 (2, 5, 8, 11...), qual é o 5.º termo?", opts:["14","11","17","12"], correct:0, explain:"A sequência é 2, 5, 8, 11, 14 — o 5.º termo é 14."}
    ],
    compare:{
      left:{title:"📈 Diretamente proporcionais", points:["A razão entre as duas grandezas é sempre igual","Se uma duplica, a outra também duplica","Ex.: preço e quantidade de um mesmo produto"]},
      right:{title:"📉 Não proporcionais", points:["A razão entre as duas grandezas varia","Duplicar uma não duplica necessariamente a outra","Ex.: idade e altura de uma pessoa"]}
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
    lead:"Todo o bom jogo mostra estatísticas: quantas vitórias, qual o item mais usado, qual a hipótese de conseguires um item raro. Este mundo é sobre organizar dados e calcular hipóteses.",
    missions:[
      {t:"Fazer um Inquérito", d:"Recolha e organização de dados", f:"Perguntar algo a 10 pessoas e organizar numa tabela", xp:10},
      {t:"Construir o Gráfico", d:"Gráficos de barras, circulares e pictogramas", f:"Transformar os dados recolhidos num gráfico", xp:10},
      {t:"Média e Moda", d:"Medidas de tendência central", f:"Calcular a média e a moda de um conjunto de dados", xp:10},
      {t:"Sorte ou Azar?", d:"Probabilidade de acontecimentos", f:"Calcular a probabilidade de 3 situações simples (dado, moedas)", xp:10}
    ],
    resumo:[
      "Um estudo estatístico começa por definir uma questão; depois recolhe-se, organiza-se e representa-se a informação — em tabelas, gráficos de barras, circulares ou pictogramas.",
      "A <b>média aritmética</b> calcula-se somando todos os valores e dividindo pelo número de valores. A <b>moda</b> é o valor que aparece mais vezes.",
      "Um acontecimento pode ser <b>certo</b> (acontece sempre), <b>impossível</b> (nunca acontece) ou <b>possível</b> (pode ou não acontecer).",
      "A <b>probabilidade</b> de um acontecimento calcula-se dividindo o número de <b>casos favoráveis</b> pelo número de <b>casos possíveis</b>."
    ],
    gloss:[
      ["média aritmética","A soma de todos os valores, dividida pelo número de valores."],
      ["moda","O valor que aparece com mais frequência num conjunto de dados."],
      ["acontecimento certo","Um acontecimento que acontece sempre."],
      ["acontecimento impossível","Um acontecimento que nunca acontece."],
      ["acontecimento possível","Um acontecimento que pode ou não acontecer."],
      ["certo","Que acontece sempre — tem 100% de probabilidade."],
      ["impossível","Que nunca acontece — tem 0% de probabilidade."],
      ["possível","Que pode ou não acontecer."],
      ["probabilidade","O número de casos favoráveis a dividir pelo número de casos possíveis."],
      ["casos favoráveis","As situações que correspondem ao que se quer que aconteça."],
      ["casos possíveis","Todas as situações que podem acontecer."]
    ],
    quiz:[
      {q:"Como se calcula a média aritmética de um conjunto de valores?", opts:["Somando todos os valores e dividindo pelo número de valores","Escolhendo o valor do meio","Multiplicando todos os valores","Escolhendo o valor que aparece mais vezes"], correct:0, explain:"A média aritmética é a soma de todos os valores, dividida pelo número de valores."},
      {q:"O que é a moda de um conjunto de dados?", opts:["O valor que aparece com mais frequência","A média de todos os valores","O maior valor do conjunto","O menor valor do conjunto"], correct:0, explain:"A moda é o valor que aparece com mais frequência num conjunto de dados."},
      {q:"Qual é a média de 2, 4 e 6?", opts:["4","6","2","12"], correct:0, explain:"(2 + 4 + 6) ÷ 3 = 4."},
      {q:"Um acontecimento certo é aquele que...", opts:["Acontece sempre","Nunca acontece","Pode ou não acontecer","Acontece só às vezes"], correct:0, explain:"Um acontecimento certo acontece sempre."},
      {q:"Um acontecimento impossível é aquele que...", opts:["Nunca acontece","Acontece sempre","Pode ou não acontecer","Acontece metade das vezes"], correct:0, explain:"Um acontecimento impossível nunca acontece."},
      {q:"Um acontecimento possível (mas não certo) é aquele que...", opts:["Pode ou não acontecer","Acontece sempre","Nunca acontece","Acontece só de noite"], correct:0, explain:"Um acontecimento possível pode ou não acontecer."},
      {q:"Como se calcula a probabilidade de um acontecimento?", opts:["Número de casos favoráveis a dividir pelo número de casos possíveis","Número de casos possíveis a dividir pelo número de casos favoráveis","Somando os casos favoráveis e possíveis","Multiplicando os casos favoráveis pelos possíveis"], correct:0, explain:"A probabilidade calcula-se dividindo os casos favoráveis pelos casos possíveis."},
      {q:"Ao lançar um dado normal (de 1 a 6), qual é a probabilidade de sair o número 3?", opts:["1/6","1/3","3/6","1/2"], correct:0, explain:"Há 1 caso favorável (o número 3) em 6 casos possíveis: 1/6."},
      {q:"Ao lançar uma moeda ao ar, qual é a probabilidade de sair \"cara\"?", opts:["1/2","1/4","1","0"], correct:0, explain:"Há 1 caso favorável (cara) em 2 casos possíveis (cara ou coroa): 1/2."},
      {q:"O que são os \"casos possíveis\", numa situação de probabilidade?", opts:["Todas as situações que podem acontecer","Só as situações favoráveis","Apenas o resultado certo","Apenas o resultado impossível"], correct:0, explain:"Os casos possíveis são todas as situações que podem acontecer."}
    ],
    compare:{
      left:{title:"✅ Acontecimento certo", points:["Acontece sempre","Tem probabilidade 1 (ou 100%)","Ex.: o Sol nascer amanhã"]},
      right:{title:"🚫 Acontecimento impossível", points:["Nunca acontece","Tem probabilidade 0 (ou 0%)","Ex.: tirar um 7 num dado normal de 6 faces"]}
    },
    boss:"Ficha de avaliação — página a confirmar no manual"
  }
  ];
