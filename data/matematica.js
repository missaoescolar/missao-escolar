  const MATH_WORLDS = [
  {
    id:"n1", num:1, c:"m1", icon:"🧮",
    title:"Fábrica de Números",
    subtitle:"Primos, potências e ordem das operações", pages:"manual, vol. 1, cap. 1 «Números naturais», pp. 8–45",
    lead:"Neste mundo vais aprender a reconhecer números primos, a decompor um número em fatores primos, a calcular o m.d.c. e o m.m.c. de dois números, a multiplicar e dividir potências e a calcular expressões pela ordem certa. Vê primeiro a animação e os 7 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Divisível ou Não?", d:"Critérios de divisibilidade por 2, 3, 5, 9 e 10", f:"Escreve 10 números de 2 ou 3 algarismos.\nPara cada um, usa os critérios do resumo e indica se é divisível por 2, 3, 5, 9 e 10.\nVerifica 3 deles com a calculadora: se for divisível, a divisão dá um número inteiro.", xp:10},
      {t:"Caça aos Primos", d:"Números primos e números compostos", f:"Escreve os números de 1 a 50, em linhas de 10.\nRisca o 1 e, como na animação do crivo, risca os múltiplos de 2, 3, 5 e 7 (mas não o 2, o 3, o 5 e o 7).\nVerifica: têm de sobrar 15 números primos.", xp:10},
      {t:"Árvore de Fatores", d:"Decomposição em fatores primos", f:"Faz a árvore de fatores de 36, 48 e 90, como no Exemplo 1.\nComeça sempre pelo menor primo que divide o número.\nVerifica: multiplica os primos das pontas dos ramos e tens de obter o número do início.", xp:10},
      {t:"m.d.c. e m.m.c. em Problemas", d:"Máximo divisor comum (m.d.c.) e mínimo múltiplo comum (m.m.c.)", f:"Resolve, como nos Exemplos 4 e 5:\n(1) Com 20 rosas e 30 túlipas, queres fazer ramos iguais sem sobrar flores. Quantos ramos, no máximo?\n(2) Um sino toca de 6 em 6 minutos e outro de 8 em 8. Tocaram juntos agora. Daqui a quantos minutos voltam a tocar juntos?\nVerifica: em (1), 20 e 30 têm de dar divisões exatas pelo número de ramos; em (2), a tua resposta tem de dar divisões exatas por 6 e por 8.", xp:15},
      {t:"Jogo dos Dados", d:"Expressões numéricas e ordem das operações", f:"Lança um dado duas vezes e forma um número de dois algarismos (se sair 6 e depois 2, o número-alvo é 62).\nLança o dado mais cinco vezes e regista os cinco números. Usando os cinco, uma vez cada, com +, −, ×, ÷, parênteses e potências, escreve uma expressão que dê o número-alvo (ou o mais perto possível).\nVerifica: calcula a tua expressão pela ordem certa (parênteses, potências, × e ÷, + e −) e confirma numa calculadora científica.", xp:15}
    ],
    resumo:[
      "Um número é <b>múltiplo</b> de outro quando resulta de o multiplicar por 0, 1, 2, 3, … (ex.: 12 é múltiplo de 3, porque 3 × 4 = 12).",
      "Um número é <b>divisor</b> de outro quando o divide exatamente, sem deixar resto (ex.: 3 é divisor de 12, porque 12 ÷ 3 = 4).",
      "<b>Critérios de divisibilidade</b> — um número é divisível:<br>por 2, se termina em 0, 2, 4, 6 ou 8;<br>por 3, se a soma dos algarismos é múltiplo de 3;<br>por 5, se termina em 0 ou 5;<br>por 9, se a soma dos algarismos é múltiplo de 9;<br>por 10, se termina em 0.",
      "Um <b>número primo</b> tem exatamente dois divisores: o 1 e ele próprio (ex.: 2, 3, 5, 7, 11, 13). Um <b>número composto</b> tem mais do que dois divisores. O 1 não é primo nem composto.",
      "Uma <b>potência</b> é uma multiplicação de fatores iguais escrita de forma curta: 2³ = 2 × 2 × 2 = 8. O 2 é a base e o 3 é o expoente.",
      "A <b>decomposição em fatores primos</b> escreve um número composto como um produto de números primos (ex.: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5). Cada número tem uma só decomposição: só a ordem dos fatores pode mudar.",
      "O <b>m.d.c.</b> (máximo divisor comum) de dois números é o maior número que divide os dois. Pela decomposição: multiplica os fatores primos comuns, cada um com o menor expoente.",
      "O <b>m.m.c.</b> (mínimo múltiplo comum) de dois números é o menor múltiplo comum aos dois, diferente de zero. Pela decomposição: multiplica todos os fatores primos (comuns e não comuns), cada um com o maior expoente.",
      "<b>Multiplicar e dividir potências.</b> Com a <b>mesma base</b>, fica a base e somam-se os expoentes (na multiplicação) ou subtraem-se (na divisão): 2³ × 2⁴ = 2⁷ e 5⁶ ÷ 5² = 5⁴. Com o <b>mesmo expoente</b>, fica o expoente e multiplicam-se (ou dividem-se) as bases: 2³ × 5³ = 10³ e 12⁴ ÷ 4⁴ = 3⁴.",
      "<b>Prioridade das operações</b> numa expressão numérica: 1.º o que está dentro de <b>parênteses</b>; 2.º as <b>potências</b>; 3.º as <b>multiplicações e divisões</b>, da esquerda para a direita; 4.º as <b>adições e subtrações</b>, da esquerda para a direita. Ex.: 3 + 4 × 2² = 3 + 4 × 4 = 3 + 16 = 19."
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
      ["expressão numérica","Uma conta escrita com números, sinais de operações e, às vezes, parênteses e potências (ex.: 2 × (3 + 5)²)."],
      ["prioridade das operações","A ordem por que se calcula uma expressão: parênteses, potências, multiplicações e divisões, adições e subtrações."],
      ["contraexemplo","Um exemplo que mostra que uma afirmação é falsa: o 2 é primo e par, por isso «todos os primos são ímpares» é falso."]
    ],
    quiz:[
      {q:"Quanto é 2³ × 2⁴, escrito como uma só potência?", opts:["2¹²","4⁷","4¹²","2⁷"], correct:3, explain:"Com a mesma base, fica a base e somam-se os expoentes: 2³ × 2⁴ = 2³⁺⁴ = 2⁷. Por extenso: (2 × 2 × 2) × (2 × 2 × 2 × 2) são sete 2 a multiplicar. O 2¹² multiplica os expoentes, e o 4⁷ multiplica as bases: os dois são erros."},
      {q:"Qual destes números é múltiplo de 5?", opts:["22","27","20","23"], correct:2, explain:"Os múltiplos de 5 terminam em 0 ou em 5. O 20 termina em 0, e 5 × 4 = 20. O 22, o 27 e o 23 terminam em 2, 7 e 3, por isso não são múltiplos de 5."},
      {q:"Quanto é 3 + 4 × 2²?", opts:["28","196","11","19"], correct:3, explain:"Primeiro a potência: 2² = 4. Depois a multiplicação: 4 × 4 = 16. Por fim a adição: 3 + 16 = 19. O 28 faz primeiro 3 + 4; o 196 calcula tudo da esquerda para a direita; o 11 esquece a potência."},
      {q:"«Todos os números primos são ímpares.» Esta afirmação é verdadeira ou falsa? Escolhe a resposta com a justificação certa.", opts:["Verdadeira. Nenhum número par é primo.","Falsa. O 9 é ímpar e não é primo.","Falsa. O 2 é primo e é par.","Verdadeira. 3, 5, 7 e 11 são primos e ímpares."], correct:2, explain:"Basta um contraexemplo para mostrar que uma afirmação é falsa. Aqui, o contraexemplo tem de ser um número primo e par: o 2, que só tem os divisores 1 e 2. O 9 não serve, porque não é primo. E mostrar exemplos que funcionam (3, 5, 7, 11) não prova que é sempre verdade."},
      {q:"Qual destes números é primo?", opts:["15","21","17","27"], correct:2, explain:"Testa os primos 2 e 3: o 17 não é par, e 1 + 7 = 8 não é múltiplo de 3. Não é preciso testar mais, porque 5 × 5 = 25 já passa de 17. Por isso, 17 é primo. Os outros são compostos: 15 = 3 × 5, 21 = 3 × 7 e 27 = 3 × 9."},
      {q:"Qual é a decomposição em fatores primos de 36?", opts:["4 × 9","2² × 3²","6²","2 × 3²"], correct:1, explain:"36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3². «4 × 9» e «6²» também dão 36, mas 4, 9 e 6 não são números primos. E 2 × 3² = 18, não 36."},
      {q:"Quanto é 2³?", opts:["6","8","9","5"], correct:1, explain:"2³ quer dizer 2 × 2 × 2: o expoente 3 diz quantas vezes o 2 se multiplica. 2 × 2 = 4 e 4 × 2 = 8. Atenção: 2³ não é 2 × 3 = 6, nem 3² = 9."},
      {q:"Qual é o m.d.c. (máximo divisor comum) de 24 e 36?", opts:["6","72","12","4"], correct:2, explain:"24 = 2³ × 3 e 36 = 2² × 3². Os fatores comuns são o 2 e o 3, e escolhe-se o menor expoente de cada um: 2² × 3 = 12. Verifica: 24 ÷ 12 = 2 e 36 ÷ 12 = 3. O 6 e o 4 também dividem os dois, mas não são os maiores. O 72 é o m.m.c."},
      {q:"Dois faróis piscaram agora ao mesmo tempo. Um pisca de 4 em 4 segundos e o outro de 6 em 6 segundos. Daqui a quantos segundos voltam a piscar juntos pela primeira vez?", opts:["12","24","10","2"], correct:0, explain:"Procura-se o menor múltiplo comum de 4 e 6: o m.m.c. Múltiplos de 4: 4, 8, 12, … Múltiplos de 6: 6, 12, … O primeiro comum é 12. Pela decomposição: 4 = 2² e 6 = 2 × 3, por isso m.m.c. = 2² × 3 = 12. O 24 também é comum, mas não é o primeiro; 10 é a soma e 2 é o m.d.c."},
      {q:"A Rita tem 18 rebuçados e 30 chocolates. Quer fazer sacos iguais: todos com o mesmo número de rebuçados e o mesmo número de chocolates, sem sobrar nada. Qual é o maior número de sacos que pode fazer?", opts:["3","90","6","2"], correct:2, explain:"O número de sacos tem de dividir o 18 e o 30 sem deixar resto. O maior é o m.d.c.: 18 = 2 × 3² e 30 = 2 × 3 × 5, então m.d.c. = 2 × 3 = 6. Cada saco leva 18 ÷ 6 = 3 rebuçados e 30 ÷ 6 = 5 chocolates. Com 2 ou 3 sacos também dá, mas não é o maior número."},
      {q:"Quanto é 2³ × 5³?", opts:["10³ = 1000","10⁶","7³ = 343","10⁹"], correct:0, explain:"Com o mesmo expoente, fica o expoente e multiplicam-se as bases: 2³ × 5³ = (2 × 5)³ = 10³ = 1000. Verifica: 8 × 125 = 1000. O 10⁶ soma os expoentes, o que só se faz quando a base é a mesma."}
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
        '</ul>'},
      {title:"✖️ Exemplo 6 — Multiplicar e dividir potências", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> escrever como uma só potência 2³ × 2⁴, 5⁶ ÷ 5² e 2³ × 5³, sem calcular cada potência primeiro.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escreve as potências por extenso, para ver quantos fatores ficam. Depois repara: as bases são iguais, ou os expoentes são iguais?</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>2³ × 2⁴ = (2 × 2 × 2) × (2 × 2 × 2 × 2) = 2⁷ → mesma base: somam-se os expoentes (3 + 4)<br>5⁶ ÷ 5² = (5 × 5 × 5 × 5 × 5 × 5) ÷ (5 × 5) = 5⁴ → mesma base: subtraem-se (6 − 2)<br>2³ × 5³ = (2 × 5) × (2 × 5) × (2 × 5) = 10³ → mesmo expoente: multiplicam-se as bases</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 2⁷ = 128; 5⁴ = 625; 10³ = 1000.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> calcula de outra maneira: 2³ × 2⁴ = 8 × 16 = 128 ✓ e 5⁶ ÷ 5² = 15 625 ÷ 25 = 625 ✓. Erros a evitar: multiplicar os expoentes (2³ × 2⁴ não é 2¹²) e juntar potências com bases e expoentes diferentes (2³ × 5² não se escreve como uma só potência).</span></li>'+
        '</ul>'},
      {title:"🧮 Exemplo 7 — A ordem das operações", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o valor de 2 × (3 + 5)² − 18 ÷ 3².</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> segue a ordem: 1.º parênteses; 2.º potências; 3.º multiplicações e divisões, da esquerda para a direita; 4.º adições e subtrações.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>1. Parênteses: 3 + 5 = 8 → 2 × 8² − 18 ÷ 3²<br>2. Potências: 8² = 64 e 3² = 9 → 2 × 64 − 18 ÷ 9<br>3. × e ÷: 2 × 64 = 128 e 18 ÷ 9 = 2 → 128 − 2<br>4. − : 128 − 2 = 126</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 2 × (3 + 5)² − 18 ÷ 3² = 126.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> escreve cada passo numa linha nova e confirma numa calculadora científica. Erro a evitar: fazer 2 × 8 = 16 antes da potência; o expoente só se aplica ao 8, por isso 16² = 256 está errado.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"✖️ Múltiplo", points:["Resulta de multiplicar um número por outro","Um número tem infinitos múltiplos","Ex.: 12 é múltiplo de 3"]},
      right:{title:"➗ Divisor", points:["Divide o número sem deixar resto","Um número tem um número limitado de divisores","Ex.: 3 é divisor de 12"]}
    },
    boss:"«Avalia o que sabes» do cap. 1 — manual, vol. 1, p. 42"
  },
  {
    id:"n2", num:2, c:"m2", icon:"🍕",
    title:"Inventário de Frações",
    subtitle:"Frações e operações", pages:"manual, vol. 1, cap. 3 «Frações», pp. 108–149",
    lead:"Neste mundo vais aprender a encontrar frações equivalentes, a simplificar, a comparar frações, a calcular a fração de uma quantidade, a fazer as quatro operações com frações e a calcular potências de frações. Vê primeiro a animação e os 7 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
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
      "Para <b>dividir</b> por uma fração, multiplica-se pelo <b>inverso</b> dessa fração (troca-se o numerador com o denominador: o inverso de 3/4 é 4/3). Dividir por uma fração própria dá um resultado <b>maior</b>: 3 ÷ 1/2 = 6, porque em 3 pizzas cabem 6 metades.",
      "Uma <b>potência de uma fração</b> multiplica a fração por si própria: (2/3)² = 2/3 × 2/3 = 4/9. Eleva-se o numerador e eleva-se o denominador: (1/2)⁴ = 1⁴/2⁴ = 1/16. A potência de uma fração própria é menor do que a própria fração."
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
      {q:"Como se escreve o número misto 2 e 3/4 como fração?", opts:["5/4","6/4","11/4","23/4"], correct:2, explain:"Cada inteiro tem 4 quartos, por isso 2 inteiros = 8/4. Mais 3/4: 8/4 + 3/4 = 11/4. Verifica: 11 ÷ 4 = 2 e sobram 3. 5/4 soma 2 + 3, 6/4 multiplica 2 × 3, e 23/4 junta os algarismos 2 e 3."},
      {q:"Quanto é (3/4)²?", opts:["6/8","9/4","3/16","9/16"], correct:3, explain:"(3/4)² = 3/4 × 3/4 = (3 × 3)/(4 × 4) = 9/16. O 6/8 multiplica por 2 em vez de elevar ao quadrado; o 9/4 só eleva o numerador; o 3/16 só eleva o denominador. Repara: 9/16 é menor do que 3/4, como acontece sempre com uma fração própria."}
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
        '</ul>'},
      {title:"🟦 Exemplo 7 — Potências de frações", svg:'<svg class="poster-svg" viewBox="0 0 180 180" style="max-width:200px;margin:0 auto" role="img" aria-label="Um quadrado partido ao meio vezes sem conta. A metade da esquerda é 1/2. Da metade da direita, a parte de cima é 1/4. Do que sobra, a parte da esquerda é 1/8, e por fim um retângulo pintado de 1/16.">'+
        '<g stroke="currentColor" stroke-width="2" stroke-linejoin="round">'+
        '<rect x="10" y="10" width="80" height="160" fill="var(--surface)"/><rect x="90" y="10" width="80" height="80" fill="var(--surface)"/>'+
        '<rect x="90" y="90" width="40" height="80" fill="var(--surface)"/><rect x="130" y="90" width="40" height="40" fill="var(--wc)" fill-opacity="0.55"/>'+
        '<rect x="130" y="130" width="40" height="40" fill="var(--surface)" stroke-dasharray="4 3"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="14" font-weight="700" text-anchor="middle"><text x="50" y="95">1/2</text><text x="130" y="55">1/4</text><text x="110" y="135">1/8</text><text x="150" y="115" font-size="12">1/16</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> num quadrado, pinta-se metade; da parte por pintar, pinta-se metade; e assim por diante. Que fração do quadrado é o 4.º retângulo (a cor)? E quanto é (2/3)²?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> cada retângulo novo é metade do anterior, ou seja, multiplica-se por 1/2 de cada vez. Multiplicar a mesma fração várias vezes é uma potência.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>1.º retângulo: 1/2<br>2.º: 1/2 × 1/2 = (1/2)² = 1/4<br>3.º: (1/2)³ = 1/8<br>4.º: (1/2)⁴ = (1 × 1 × 1 × 1)/(2 × 2 × 2 × 2) = 1/16<br>Da mesma forma: (2/3)² = 2/3 × 2/3 = (2 × 2)/(3 × 3) = 4/9</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o 4.º retângulo é 1/16 do quadrado, e (2/3)² = 4/9.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> no desenho, o retângulo a cor cabe 16 vezes no quadrado. Erros a evitar: elevar só o numerador ((2/3)² não é 4/3) ou multiplicar pelo expoente ((2/3)² não é 4/6).</span></li>'+
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
    boss:"«Avalia o que sabes» do cap. 3 — manual, vol. 1, p. 146"
  },
  {
    id:"n3", num:3, c:"m3", icon:"🏷️",
    title:"Loja e Percentagens",
    subtitle:"Números decimais e percentagens", pages:"revisão do 5.º ano: o manual do 6.º ano não tem capítulo próprio",
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
    boss:"Sem ficha no manual do 6.º ano — usa o teste deste mundo e a Arena"
  },
  {
    id:"n4", num:4, c:"m4", icon:"🧩",
    title:"Padrões e Proporção",
    subtitle:"Sequências, expressões e proporcionalidade direta", pages:"manual, vol. 2, cap. 4 «Sequências e regularidades. Proporcionalidade direta», pp. 6–41",
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
    boss:"«Avalia o que sabes» do cap. 4 — manual, vol. 2, p. 38"
  },
  {
    id:"n5", num:5, c:"m5", icon:"📐",
    title:"Ângulos e Polígonos",
    subtitle:"Ângulos, perímetro e área", pages:"manual, vol. 1, cap. 2 «Figuras no plano», pp. 48–67 (polígonos e ângulos)",
    lead:"Neste mundo vais aprender a medir e classificar ângulos, a descobrir ângulos desconhecidos, e a calcular o perímetro e a área de polígonos e de figuras compostas. Vê primeiro as animações e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Caça aos Ângulos", d:"Medir e classificar ângulos", f:"Escolhe 5 ângulos à tua volta: uma tesoura aberta, os ponteiros de um relógio, um livro aberto…\nPara cada um, estima primeiro, depois mede com o transferidor e classifica-o (agudo, reto, obtuso ou raso).\nVerifica: para saber se um ângulo é reto, encosta-lhe o canto de uma folha A4.", xp:10},
      {t:"Os 180° do Triângulo", d:"Soma dos ângulos de um triângulo", f:"Desenha um triângulo qualquer numa folha e pinta os três cantos com cores diferentes.\nRecorta-o, rasga os três cantos e junta-os lado a lado, com os bicos no mesmo ponto.\nVerifica: os três cantos formam uma linha reta, um ângulo raso de 180°. Repete com outro triângulo diferente.", xp:10},
      {t:"O Meu Quarto", d:"Perímetro e área", f:"Mede o comprimento e a largura do teu quarto (ou da sala), em metros.\nCalcula o perímetro (o comprimento do rodapé) e a área (o chão), como no Exemplo 4.\nVerifica: estima antes de calcular, e confirma as unidades: o perímetro em m e a área em m².", xp:15},
      {t:"Figura Composta", d:"Área de figuras compostas", f:"Numa folha quadriculada, desenha uma figura em forma de L (ou uma casa: um retângulo com um triângulo por cima).\nCalcula a área de duas maneiras diferentes, como no Exemplo 6.\nVerifica: as duas maneiras dão o mesmo resultado; confirma contando os quadradinhos.", xp:10}
    ],
    resumo:[
      "Um <b>ângulo</b> mede-se em graus (°) com o transferidor. Classifica-se em <b>agudo</b> (menos de 90°), <b>reto</b> (90°), <b>obtuso</b> (entre 90° e 180°) e <b>raso</b> (180°).",
      "Dois ângulos são <b>complementares</b> se somam 90° e <b>suplementares</b> se somam 180°. Quando duas retas se cruzam, os <b>ângulos verticalmente opostos</b> são iguais e os ângulos lado a lado somam 180°.",
      "A soma dos ângulos internos de um <b>triângulo</b> é sempre 180°; a de um <b>quadrilátero</b> é 360° (divide-se em dois triângulos).",
      "Um <b>polígono</b> é uma figura plana fechada, só com lados retos. O <b>perímetro</b> é a soma dos lados e mede-se em unidades de comprimento (cm, m). A <b>área</b> é a medida da superfície e mede-se em unidades quadradas (cm², m²); 1 m² = 10 000 cm².",
      "Áreas: <b>retângulo</b> = comprimento × largura; <b>paralelogramo</b> = base × altura; <b>triângulo</b> = base × altura ÷ 2; <b>trapézio</b> = (base maior + base menor) × altura ÷ 2.",
      "A <b>altura</b> é sempre perpendicular à base: não é o lado inclinado. Num triângulo obtusângulo, a altura pode ficar fora do triângulo.",
      "A área de uma <b>figura composta</b> calcula-se dividindo-a em figuras conhecidas e somando as áreas, ou calculando uma figura maior e subtraindo o que falta."
    ],
    gloss:[
      ["ângulo","A abertura entre duas semirretas com a mesma origem (o vértice), medida em graus."],
      ["agudo","Ângulo com menos de 90°."],
      ["reto","Ângulo de 90°, como o canto de uma folha."],
      ["obtuso","Ângulo com mais de 90° e menos de 180°."],
      ["raso","Ângulo de 180°: as duas semirretas formam uma linha reta."],
      ["complementares","Dois ângulos que somam 90°."],
      ["suplementares","Dois ângulos que somam 180°."],
      ["ângulos verticalmente opostos","Ângulos frente a frente quando duas retas se cruzam; são sempre iguais."],
      ["polígono","Uma figura plana e fechada, só com lados retos."],
      ["perímetro","A soma dos comprimentos de todos os lados; mede-se em cm, m…"],
      ["área","A medida da superfície de uma figura; mede-se em cm², m²…"],
      ["altura","O segmento perpendicular à base, até ao vértice oposto (ou ao lado oposto)."],
      ["figura composta","Uma figura feita de várias figuras simples juntas."]
    ],
    quiz:[
      {q:"Um ângulo mede 35°. Quanto mede o seu complementar?", opts:["145°","55°","65°","35°"], correct:1, explain:"Complementares somam 90°: 90° − 35° = 55°. O 145° é o suplementar (180° − 35°), que soma 180°."},
      {q:"Um ângulo mede 120°. Quanto mede o seu suplementar?", opts:["60°","30°","240°","120°"], correct:0, explain:"Suplementares somam 180°: 180° − 120° = 60°. Um ângulo de 120° não tem complementar, porque já passa dos 90°."},
      {q:"Um triângulo tem dois ângulos de 40° e 75°. Quanto mede o terceiro?", opts:["115°","65°","245°","35°"], correct:1, explain:"Os três somam 180°: 180° − 40° − 75° = 65°. O 115° é só a soma dos dois que se conhecem; o 245° usa 360°, que é a soma de um quadrilátero."},
      {q:"Um quadrilátero tem ângulos de 90°, 90° e 100°. Quanto mede o quarto ângulo?", opts:["100°","260°","80°","170°"], correct:2, explain:"Num quadrilátero, os ângulos somam 360°: 360° − 90° − 90° − 100° = 80°. Lembra-te: um quadrilátero divide-se em dois triângulos, por isso 2 × 180° = 360°."},
      {q:"Duas retas cruzam-se e um dos ângulos mede 65°. Quanto medem os outros três?", opts:["65°, 65° e 65°","65°, 115° e 115°","25°, 65° e 25°","115°, 115° e 115°"], correct:1, explain:"O ângulo em frente (verticalmente oposto) também mede 65°. Os dois ao lado são suplementares de 65°: 180° − 65° = 115° cada. Verifica: 65 + 115 + 65 + 115 = 360°, uma volta completa."},
      {q:"Um retângulo tem 5 cm de comprimento e 3 cm de largura. Quais são o perímetro e a área?", opts:["P = 15 cm e A = 16 cm²","P = 16 cm e A = 15 cm²","P = 8 cm e A = 15 cm²","P = 16 cm² e A = 15 cm"], correct:1, explain:"Perímetro: 5 + 3 + 5 + 3 = 16 cm. Área: 5 × 3 = 15 cm². O 8 cm só soma dois lados. E as unidades contam: o perímetro é um comprimento (cm) e a área uma superfície (cm²)."},
      {q:"Um triângulo tem 10 cm de base e 6 cm de altura. Qual é a sua área?", opts:["60 cm²","30 cm","16 cm²","30 cm²"], correct:3, explain:"Base × altura ÷ 2 = 10 × 6 ÷ 2 = 30 cm². O 60 cm² esquece de dividir por 2 (seria a área do retângulo à volta). O «30 cm» tem a unidade errada: as áreas medem-se em cm²."},
      {q:"Um paralelogramo tem 7 cm de base, lados inclinados de 5 cm e 4 cm de altura. Qual é a área?", opts:["35 cm²","28 cm²","14 cm²","24 cm²"], correct:1, explain:"Área = base × altura = 7 × 4 = 28 cm². O 35 cm² usa o lado inclinado (5 cm) em vez da altura, e o 24 é o perímetro: 2 × (7 + 5)."},
      {q:"Quantos cm² tem 1 m²?", opts:["100 cm²","1000 cm²","10 000 cm²","10 cm²"], correct:2, explain:"1 m² é um quadrado de 1 m × 1 m, ou seja 100 cm × 100 cm = 10 000 cm². O 100 cm² é o erro mais comum: esquece que se multiplica pelo 100 duas vezes (comprimento e largura)."},
      {q:"«Se uma figura tem maior perímetro, também tem maior área.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. Mais lado quer dizer mais superfície.","Falso. Um retângulo de 10 × 2 tem P = 24 e A = 20; um de 6 × 4 tem P = 20 e A = 24.","Verdadeiro. Um quadrado de 4 cm tem mais perímetro e mais área do que um de 2 cm.","Falso. O perímetro e a área são sempre iguais."], correct:1, explain:"Basta um contraexemplo: o retângulo 10 × 2 tem mais perímetro (24 cm) mas menos área (20 cm²) do que o 6 × 4 (20 cm e 24 cm²). Um exemplo em que dá certo (os quadrados) não prova que é sempre assim."}
    ],
    posters:[
      {title:"📐 Exemplo 1 — Complementares e suplementares", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o complementar e o suplementar de um ângulo de 35°.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> lembra-te: complementar «completa» até 90° (um ângulo reto); suplementar «completa» até 180° (uma linha reta).</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Complementar: 90° − 35° = 55°<br>Suplementar: 180° − 35° = 145°</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o complementar mede 55° e o suplementar mede 145°.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 35 + 55 = 90 e 35 + 145 = 180. O suplementar é sempre 90° maior do que o complementar (145 − 55 = 90).</span></li>'+
        '</ul>'},
      {title:"✖️ Exemplo 2 — Duas retas que se cruzam", svg:'<svg class="poster-svg" viewBox="0 0 240 140" style="max-width:240px;margin:0 auto" role="img" aria-label="Duas retas cruzam-se. Um dos ângulos mede 70°; o ângulo em frente também mede 70°; os outros dois, marcados a e b, medem 110° cada.">'+
        '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="30" y1="70" x2="210" y2="70"/><line x1="96" y1="136" x2="144" y2="4"/></g>'+
        '<g fill="none" stroke="var(--wc)" stroke-width="2"><path d="M146,70 A26,26 0 0 0 128.9,45.6"/><path d="M94,70 A26,26 0 0 0 111.1,94.4"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle"><text x="152" y="55">70°</text><text x="88" y="96">70°</text><text x="98" y="48">a</text><text x="144" y="98">b</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> duas retas cruzam-se e um dos ângulos mede 70°. Quanto medem os ângulos a e b?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o ângulo a está ao lado do de 70°, sobre a mesma reta: juntos formam um ângulo raso.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>a + 70° = 180°, por isso a = 110°<br>b está em frente de a (verticalmente opostos), por isso b = 110°<br>O ângulo em frente do de 70° também mede 70°.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a = 110° e b = 110°.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> os quatro ângulos à volta do ponto dão uma volta completa: 70 + 110 + 70 + 110 = 360°.</span></li>'+
        '</ul>'},
      {title:"🔺 Exemplo 3 — Ângulos de triângulos e quadriláteros", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o terceiro ângulo de um triângulo com ângulos de 50° e 60°, e o quarto ângulo de um quadrilátero com 90°, 90° e 100°.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> os ângulos de um triângulo somam 180°. Um quadrilátero divide-se em dois triângulos pela diagonal, por isso os seus ângulos somam 2 × 180° = 360°.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Triângulo: 180° − 50° − 60° = 70°<br>Quadrilátero: 360° − 90° − 90° − 100° = 80°</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o triângulo tem um ângulo de 70°; o quadrilátero tem um de 80°.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 50 + 60 + 70 = 180 e 90 + 90 + 100 + 80 = 360. Experimenta a missão «Os 180° do Triângulo»: rasga os cantos e junta-os.</span></li>'+
        '</ul>'},
      {title:"🟩 Exemplo 4 — Perímetro ou área?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o perímetro e a área de um retângulo de 6 cm × 4 cm e de outro de 10 cm × 2 cm.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> pergunta-te o que se mede. Perímetro: o contorno (uma vedação, um rodapé). Área: a superfície (o chão, a relva).</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>6 × 4: P = 6 + 4 + 6 + 4 = 20 cm; A = 6 × 4 = 24 cm²<br>10 × 2: P = 10 + 2 + 10 + 2 = 24 cm; A = 10 × 2 = 20 cm²</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o segundo retângulo tem mais perímetro (24 cm), mas menos área (20 cm²).</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> as unidades. O perímetro é um comprimento (cm) e a área é uma superfície (cm²). E mais contorno não quer dizer mais superfície!</span></li>'+
        '</ul>'},
      {title:"📏 Exemplo 5 — A altura de um triângulo", svg:'<svg class="poster-svg" viewBox="0 45 230 105" style="max-width:230px;margin:0 auto" role="img" aria-label="Triângulo obtusângulo com base de 8 cm. A altura, de 5 cm, é perpendicular ao prolongamento da base e fica fora do triângulo.">'+
        '<polygon points="30,120 130,120 190,57.5" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>'+
        '<g stroke="var(--wc)" stroke-width="2" stroke-dasharray="5 4"><line x1="130" y1="120" x2="190" y2="120"/><line x1="190" y1="57.5" x2="190" y2="120"/></g>'+
        '<path d="M190,110 L180,110 L180,120" fill="none" stroke="var(--wc)" stroke-width="1.5"/>'+
        '<g font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle"><text x="80" y="138">base 8 cm</text><text x="214" y="90">5 cm</text><text x="214" y="104" font-size="10" font-weight="400">altura</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a área deste triângulo, com base de 8 cm e altura de 5 cm.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> encontra a altura: é o segmento perpendicular à base (faz um ângulo reto com ela) que vai até ao vértice oposto. Aqui fica fora do triângulo, por isso prolonga-se a base (a tracejado).</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Área = base × altura ÷ 2<br>8 × 5 = 40<br>40 ÷ 2 = 20</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a área é 20 cm².</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> o triângulo ocupa metade de um paralelogramo com a mesma base e a mesma altura (8 × 5 = 40 cm²). Erro a evitar: usar o lado inclinado do triângulo como altura.</span></li>'+
        '</ul>'},
      {title:"🧩 Exemplo 6 — A área de uma figura composta", svg:'<svg class="poster-svg" viewBox="-26 0 246 150" style="max-width:246px;margin:0 auto" role="img" aria-label="Figura em forma de L: um retângulo de 10 m por 6 m ao qual falta, no canto de cima à direita, um retângulo de 4 m por 3 m.">'+
        '<polygon points="20,20 110,20 110,65 170,65 170,110 20,110" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>'+
        '<rect x="110" y="20" width="60" height="45" fill="none" stroke="var(--wc)" stroke-width="1.5" stroke-dasharray="4 4"/>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="95" y="128">10 m</text><text x="-22" y="69" text-anchor="start">6 m</text><text x="140" y="46" fill="var(--wc)">4 × 3</text><text x="65" y="14">6 m</text><text x="184" y="91">3 m</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a área de um terreno em L: um retângulo de 10 m × 6 m ao qual falta um canto de 4 m × 3 m.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> há duas maneiras. Ou se calcula o retângulo inteiro e se tira o canto, ou se divide o L em dois retângulos.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Maneira 1 (subtrair): 10 × 6 = 60; 4 × 3 = 12; 60 − 12 = 48<br>Maneira 2 (decompor): faixa de baixo 10 × 3 = 30; faixa de cima, sem o canto, 6 × 3 = 18; 30 + 18 = 48</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o terreno tem 48 m².</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> as duas maneiras dão o mesmo. Numa folha quadriculada (1 quadradinho = 1 m²), também podes contar: 48 quadradinhos.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"📏 Perímetro", points:["É o contorno: a soma dos lados","Mede-se em cm, m (comprimento)","Ex.: a vedação de um quintal, o rodapé"]},
      right:{title:"🟩 Área", points:["É a superfície: o que fica dentro","Mede-se em cm², m² (unidades quadradas)","Ex.: a relva do quintal, o chão"]}
    },
    resources:[
      {icon:"🎮", title:"Jogos de geometria", desc:"Jogos curtos para praticar ângulos, perímetro e área. Tem publicidade.", site:"Math Playground", url:"https://www.mathplayground.com/index_geometry.html"}
    ],
    boss:"«Avalia o que sabes» do cap. 2 — manual, vol. 1, p. 101"
  },
  {
    id:"n6", num:6, c:"m6", icon:"⭕",
    title:"Mundo Redondo",
    subtitle:"Circunferência e círculo", pages:"manual, vol. 1, cap. 2 «Figuras no plano», pp. 68–77 (perímetro e área do círculo)",
    lead:"Neste mundo vais aprender os elementos da circunferência, de onde vem o número π, e a calcular o perímetro e a área do círculo, também em figuras com partes redondas. Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Descobrir o π", d:"O número π", f:"Escolhe 3 objetos redondos: uma lata, um prato, uma tampa…\nMede a volta de cada um com um fio (e depois o fio com a régua) e mede o diâmetro. Divide o perímetro pelo diâmetro, como no Exemplo 3.\nVerifica: deve dar sempre perto de 3,1. Quanto mais cuidado nas medições, mais perto de 3,14.", xp:10},
      {t:"Rodas e Voltas", d:"Perímetro do círculo", f:"Mede o diâmetro da roda de uma bicicleta ou de uma trotinete.\nCalcula quanto anda numa volta e em 100 voltas, como no Exemplo 2.\nVerifica: marca a roda e o chão com giz, empurra até a roda dar uma volta completa e mede no chão.", xp:10},
      {t:"Uma Pizza Grande ou Duas Médias?", d:"Área do círculo", f:"Compara: uma pizza de 30 cm de diâmetro ou duas pizzas de 20 cm de diâmetro. Qual dá mais pizza?\nCalcula as áreas como no Exemplo 5 (primeiro o raio: r = d ÷ 2).\nVerifica: confirma que usaste o raio e não o diâmetro, e que cada área fica entre 2r² e 4r².", xp:15},
      {t:"Janela Redonda", d:"Figuras com partes redondas", f:"Com régua e compasso, desenha uma janela: um quadrado com um semicírculo por cima, com as medidas que quiseres.\nCalcula a área total, como no Exemplo 6.\nVerifica: desenha-a numa folha quadriculada e conta os quadradinhos (os cortados contam como meios): deve dar perto.", xp:10}
    ],
    resumo:[
      "A <b>circunferência</b> é a linha formada pelos pontos que estão todos à mesma distância de um ponto, o <b>centro</b>. O <b>círculo</b> é a superfície que a circunferência limita. Desenha-se com o compasso, com uma abertura igual ao raio.",
      "O <b>raio</b> vai do centro a um ponto da circunferência. Uma <b>corda</b> une dois pontos da circunferência; o <b>diâmetro</b> é a corda que passa pelo centro, a maior de todas, e mede o dobro do raio: d = 2 × r.",
      "Em qualquer círculo, o perímetro a dividir pelo diâmetro dá sempre o mesmo número: <b>π</b> (pi). π ≈ 3,14, mas não é exatamente 3,14: tem infinitas casas decimais, que não se repetem.",
      "<b>Perímetro do círculo</b>: P = π × d, ou seja, P = 2 × π × r. É o comprimento da circunferência e mede-se em cm, m…",
      "<b>Área do círculo</b>: A = π × r², em que r² = r × r (não é 2 × r!). Mede-se em cm², m²… Para verificar: a área fica sempre entre 2 × r² (o quadrado de dentro) e 4 × r² (o quadrado de fora).",
      "Num <b>semicírculo</b>, a área é metade da do círculo. Nas figuras com partes redondas, divide-se a figura em partes conhecidas e somam-se as áreas."
    ],
    gloss:[
      ["circunferência","A linha curva formada pelos pontos à mesma distância do centro."],
      ["círculo","A superfície limitada por uma circunferência."],
      ["centro","O ponto que está à mesma distância de todos os pontos da circunferência."],
      ["raio","O segmento que vai do centro a um ponto da circunferência; é metade do diâmetro."],
      ["corda","Um segmento que une dois pontos da circunferência."],
      ["diâmetro","A corda que passa pelo centro: a maior corda, o dobro do raio."],
      ["π (pi)","O perímetro de qualquer círculo a dividir pelo seu diâmetro; π ≈ 3,14."],
      ["perímetro do círculo","O comprimento da circunferência: P = π × d = 2 × π × r."],
      ["área do círculo","A medida da superfície do círculo: A = π × r²."],
      ["semicírculo","Metade de um círculo, cortado por um diâmetro."],
      ["compasso","Instrumento para desenhar circunferências; a abertura é o raio."]
    ],
    quiz:[
      {q:"Um círculo tem 4 cm de raio. Quanto mede o diâmetro?", opts:["2 cm","8 cm","16 cm","12,56 cm"], correct:1, explain:"O diâmetro é o dobro do raio: 2 × 4 = 8 cm. O 2 cm é metade (seria o raio de um diâmetro de 4 cm), e 16 seria 4 × 4."},
      {q:"Qual é o perímetro de uma circunferência com 10 cm de raio? (π ≈ 3,14)", opts:["31,4 cm","62,8 cm","314 cm","20 cm"], correct:1, explain:"P = 2 × π × r = 2 × 3,14 × 10 = 62,8 cm. O 31,4 esquece o «2 ×» (é π × r), e o 314 é a área (π × r²), que não é um perímetro."},
      {q:"Uma roda tem 50 cm de diâmetro. Qual é o seu perímetro? (π ≈ 3,14)", opts:["157 cm","78,5 cm","314 cm","1962,5 cm"], correct:0, explain:"Com o diâmetro, P = π × d = 3,14 × 50 = 157 cm. O 78,5 usa metade do diâmetro sem multiplicar por 2, e o 1962,5 cm é a área, com unidade errada."},
      {q:"Qual é a área de um círculo com 3 cm de raio? (π ≈ 3,14)", opts:["18,84 cm²","28,26 cm²","9,42 cm²","113,04 cm²"], correct:1, explain:"A = π × r² = 3,14 × 3 × 3 = 3,14 × 9 = 28,26 cm². O 18,84 calcula r² como 2 × r (3,14 × 6), o erro mais comum; o 113,04 usa o diâmetro (6) em vez do raio. Verifica: 28,26 fica entre 2 × 9 = 18 e 4 × 9 = 36."},
      {q:"Qual é a área de um círculo com 10 cm de diâmetro? (π ≈ 3,14)", opts:["314 cm²","78,5 cm²","31,4 cm²","15,7 cm²"], correct:1, explain:"Primeiro o raio: 10 ÷ 2 = 5 cm. A = 3,14 × 5 × 5 = 78,5 cm². O 314 cm² usa o diâmetro como se fosse o raio (dá 4 vezes mais), e o 31,4 é o perímetro."},
      {q:"Se o raio de um círculo duplicar, o que acontece à área?", opts:["Fica 2 vezes maior","Fica 4 vezes maior","Fica igual","Fica 8 vezes maior"], correct:1, explain:"A área depende de r × r. Se o raio passa a 2r, a área passa a π × 2r × 2r = 4 × π × r²: 4 vezes maior. Experimenta: r = 1 → 3,14; r = 2 → 12,56. O perímetro, esse, só duplica."},
      {q:"Uma circunferência tem 31,4 cm de perímetro. Quanto mede o raio? (π ≈ 3,14)", opts:["10 cm","5 cm","3,14 cm","15,7 cm"], correct:1, explain:"P = π × d, por isso d = 31,4 ÷ 3,14 = 10 cm, e o raio é metade: 5 cm. O 10 cm é o diâmetro, não o raio."},
      {q:"Qual é a área de um semicírculo com 2 cm de raio? (π ≈ 3,14)", opts:["12,56 cm²","6,28 cm²","3,14 cm²","25,12 cm²"], correct:1, explain:"O círculo inteiro tem 3,14 × 2 × 2 = 12,56 cm²; o semicírculo é metade: 6,28 cm². O 12,56 esquece que é só metade."},
      {q:"Divide-se o perímetro de um círculo pelo seu diâmetro. O que se obtém?", opts:["Depende do tamanho do círculo","Sempre o mesmo número, π ≈ 3,14","Sempre 2","O raio"], correct:1, explain:"Em qualquer círculo, pequeno ou grande, P ÷ d dá sempre π. É por isso que π é um número tão especial, e foi o que descobriste (ou vais descobrir) na missão «Descobrir o π»."},
      {q:"«π é exatamente igual a 3,14.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. π é 3,14.","Falso. 3,14 é só um valor aproximado: π tem infinitas casas decimais que não se repetem (3,14159…).","Falso. π é exatamente 3.","Verdadeiro, porque a calculadora mostra 3,14."], correct:1, explain:"π = 3,14159265… e as casas decimais nunca acabam nem se repetem. Usamos 3,14 porque chega para os cálculos do dia a dia, mas é uma aproximação. Por isso se escreve π ≈ 3,14, com o sinal «≈»."}
    ],
    posters:[
      {title:"⭕ Exemplo 1 — Os elementos da circunferência", svg:'<svg class="poster-svg" viewBox="0 0 300 175" style="max-width:300px;margin:0 auto" role="img" aria-label="Circunferência com o centro, um raio de 5 cm, um diâmetro de 10 cm e uma corda.">'+
        '<circle cx="120" cy="85" r="65" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5"/>'+
        '<line x1="55" y1="85" x2="185" y2="85" stroke="var(--wc)" stroke-width="3"/>'+
        '<line x1="120" y1="85" x2="161.8" y2="35.2" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 3"/>'+
        '<line x1="58.9" y1="107.2" x2="152.5" y2="141.3" stroke="currentColor" stroke-width="2.5"/>'+
        '<circle cx="120" cy="85" r="4" fill="currentColor"/>'+
        '<g font-family="Lexend, sans-serif" font-size="11.5" font-weight="700"><text x="191" y="89" fill="var(--wc)">diâmetro = 10 cm</text><text x="167" y="31">raio = 5 cm</text><text x="114" y="102" text-anchor="end">centro</text><text x="158" y="156">corda</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o raio de um círculo com 10 cm de diâmetro, e a diferença entre raio, diâmetro e corda.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> olha para o desenho. O raio vai do centro à circunferência; o diâmetro atravessa o círculo passando pelo centro.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>O diâmetro é feito de dois raios: d = 2 × r<br>r = d ÷ 2 = 10 ÷ 2 = 5 cm<br>A corda une dois pontos da circunferência, mas não passa pelo centro: é mais curta do que o diâmetro.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o raio mede 5 cm. O diâmetro é a maior corda de todas.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 5 + 5 = 10 cm. Para desenhar esta circunferência com o compasso, abre-o 5 cm (o raio), não 10 cm.</span></li>'+
        '</ul>'},
      {title:"📏 Exemplo 2 — O perímetro do círculo", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o perímetro de um círculo com 5 cm de raio. (π ≈ 3,14)</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> escolhe a fórmula. Com o raio: P = 2 × π × r. Com o diâmetro: P = π × d. Dão o mesmo, porque d = 2r.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Com o raio: P = 2 × 3,14 × 5 = 31,4 cm<br>Com o diâmetro (d = 10): P = 3,14 × 10 = 31,4 cm</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o perímetro é 31,4 cm.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> o perímetro é sempre um pouco mais de 3 diâmetros: 3 × 10 = 30, e 31,4 é um pouco mais. ✓</span></li>'+
        '</ul>'},
      {title:"🥫 Exemplo 3 — De onde vem o π?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o que dá o perímetro de uma lata a dividir pelo seu diâmetro.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> dá uma volta à lata com um fio e marca onde se encontra. Mede o fio com a régua. Depois mede o diâmetro da tampa.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Perímetro (o fio): 22 cm<br>Diâmetro: 7 cm<br>22 ÷ 7 ≈ 3,14</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> dá cerca de 3,14: é o número π.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> experimenta com um prato e com uma moeda. Com qualquer círculo, grande ou pequeno, P ÷ d dá sempre perto de 3,14. As pequenas diferenças vêm das medições.</span></li>'+
        '</ul>'},
      {title:"🟠 Exemplo 4 — A área do círculo", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a área de um círculo com 3 cm de raio. (π ≈ 3,14)</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> usa A = π × r². Atenção: r² quer dizer r × r.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>r² = 3 × 3 = 9<br>A = 3,14 × 9 = 28,26 cm²</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a área é 28,26 cm².</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> o círculo cabe num quadrado de lado 6 cm (área 36) e tem lá dentro um quadrado de área 18 (2 × r²). A área tem de ficar entre 18 e 36: 28,26 fica. ✓ Erro a evitar: 3,14 × 6 = 18,84 (calcular r² como 2 × r).</span></li>'+
        '</ul>'},
      {title:"🍕 Exemplo 5 — Área a partir do diâmetro", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a área de uma pizza com 30 cm de diâmetro. (π ≈ 3,14)</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> a fórmula usa o raio, não o diâmetro. Primeiro, r = 30 ÷ 2 = 15 cm.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>r² = 15 × 15 = 225<br>A = 3,14 × 225 = 706,5 cm²</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a pizza tem 706,5 cm².</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> fica entre 2 × 225 = 450 e 4 × 225 = 900. ✓ Se usasses o diâmetro como raio, darias 3,14 × 900 = 2826 cm², 4 vezes mais: maior do que o quadrado à volta da pizza, o que é impossível!</span></li>'+
        '</ul>'},
      {title:"🪟 Exemplo 6 — Uma janela com uma parte redonda", svg:'<svg class="poster-svg" viewBox="0 0 170 205" style="max-width:170px;margin:0 auto" role="img" aria-label="Janela formada por um quadrado de 2 m de lado com um semicírculo de 2 m de diâmetro por cima.">'+
        '<path d="M30,180 L30,80 A50,50 0 0 1 130,80 L130,180 Z" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>'+
        '<line x1="30" y1="80" x2="130" y2="80" stroke="var(--wc)" stroke-width="2" stroke-dasharray="5 4"/>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="80" y="197">2 m</text><text x="148" y="134">2 m</text><text x="80" y="134">quadrado</text><text x="80" y="66">semicírculo</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a área de vidro de uma janela: um quadrado de 2 m de lado com um semicírculo por cima. (π ≈ 3,14)</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> divide a janela em duas partes conhecidas. O semicírculo tem o diâmetro igual ao lado do quadrado: 2 m, por isso o raio é 1 m.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Quadrado: 2 × 2 = 4 m²<br>Círculo inteiro: 3,14 × 1 × 1 = 3,14 m²<br>Semicírculo: 3,14 ÷ 2 = 1,57 m²<br>Total: 4 + 1,57 = 5,57 m²</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a janela tem 5,57 m² de vidro.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> a parte redonda é menos de metade do quadrado (1,57 &lt; 2), como se vê no desenho. Erro a evitar: usar o círculo inteiro em vez de metade.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"📏 Perímetro do círculo", points:["É o comprimento da circunferência (o contorno)","P = π × d = 2 × π × r","Mede-se em cm, m"]},
      right:{title:"🟠 Área do círculo", points:["É a superfície do círculo","A = π × r² (r² = r × r)","Mede-se em cm², m²"]}
    },
    boss:"«Avalia o que sabes» do cap. 2 — manual, vol. 1, p. 101"
  },
  {
    id:"n7", num:7, c:"m7", icon:"🧱",
    title:"Blocos em 3D",
    subtitle:"Sólidos e volumes", pages:"manual, vol. 2, cap. 5 «Figuras no espaço», pp. 44–79",
    lead:"Neste mundo vais aprender a reconhecer sólidos e as suas planificações, a calcular o volume de paralelepípedos, cubos, prismas e cilindros, e a passar de volume para capacidade (litros). Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Contar Blocos", d:"Volume com cubos", f:"Enche uma caixa pequena com cubos iguais (peças de encaixar, dados ou cubos de açúcar), camada a camada.\nConta quantos cabem numa camada e quantas camadas há, como no Exemplo 1.\nVerifica: comprimento × largura × altura (medidos em cubos) tem de dar o mesmo número que contaste.", xp:10},
      {t:"Cubo de Cartolina", d:"Planificação do cubo", f:"Desenha numa cartolina uma planificação do cubo: 6 quadrados de 5 cm de lado, ligados pelos lados.\nRecorta, dobra e monta o cubo. Calcula o seu volume.\nVerifica: dobra antes de colar. Se não fechar, aquela figura não é uma planificação do cubo. O volume deve dar 5 × 5 × 5 = 125 cm³.", xp:15},
      {t:"Litros Escondidos", d:"Volume e capacidade", f:"Mede com a régua um pacote de leite ou de sumo de 1 litro (comprimento, largura e altura, em cm).\nCalcula o volume em cm³ e passa para litros, como no Exemplo 4.\nVerifica: deve dar perto de 1000 cm³, ou seja 1 litro (um pouco mais, porque o pacote não vai cheio até cima).", xp:10},
      {t:"A Lata", d:"Volume do cilindro", f:"Mede o diâmetro e a altura de uma lata de conserva ou de refrigerante.\nCalcula o volume, como no Exemplo 6 (primeiro o raio).\nVerifica: compara com o que diz no rótulo, sabendo que 1 mL = 1 cm³. O teu resultado deve ser um pouco maior: a lata nunca vai cheia até cima.", xp:15}
    ],
    resumo:[
      "Os <b>sólidos geométricos</b> dividem-se em <b>poliedros</b>, só com faces planas (prismas, pirâmides, o cubo), e não poliedros, com partes curvas (cilindro, cone, esfera). Num poliedro contam-se as <b>faces</b>, as <b>arestas</b> e os <b>vértices</b>.",
      "Uma <b>planificação</b> é a figura plana que, dobrada, forma o sólido. A do cubo tem 6 quadrados, mas nem todas as maneiras de juntar 6 quadrados dão um cubo.",
      "O <b>volume</b> é o espaço que um sólido ocupa. Mede-se em unidades cúbicas: 1 cm³ é o volume de um cubo com 1 cm de aresta.",
      "<b>Paralelepípedo</b>: V = comprimento × largura × altura. <b>Cubo</b>: V = aresta × aresta × aresta. Se a aresta de um cubo duplicar, o volume fica 2 × 2 × 2 = 8 vezes maior.",
      "<b>Prisma</b> e <b>cilindro</b>: V = área da base × altura. No cilindro, a base é um círculo: V = π × r² × altura.",
      "1 m³ = 1000 dm³ e 1 dm³ = 1000 cm³ (cada unidade de volume é 1000 vezes a seguinte, e não 10 vezes).",
      "A <b>capacidade</b> é a quantidade de líquido que cabe num recipiente: 1 <b>litro</b> = 1 dm³ e 1 mL = 1 cm³."
    ],
    gloss:[
      ["sólidos geométricos","Figuras com três dimensões (comprimento, largura e altura), como o cubo ou o cilindro."],
      ["poliedros","Sólidos só com faces planas, como os prismas e as pirâmides."],
      ["prisma","Poliedro com duas bases iguais e paralelas, ligadas por faces retangulares."],
      ["cilindro","Sólido com duas bases circulares iguais e uma superfície curva."],
      ["faces","As superfícies planas que limitam um poliedro."],
      ["arestas","Os segmentos onde duas faces se encontram."],
      ["vértices","Os pontos onde várias arestas se encontram."],
      ["planificação","A figura plana que, dobrada, forma um sólido."],
      ["volume","O espaço ocupado por um sólido; mede-se em cm³, dm³, m³."],
      ["paralelepípedo","Prisma com 6 faces retangulares, como uma caixa."],
      ["cubo","Paralelepípedo com 6 faces quadradas iguais."],
      ["capacidade","A quantidade de líquido que cabe num recipiente; mede-se em litros."],
      ["litro","Unidade de capacidade: 1 L = 1 dm³ = 1000 cm³."]
    ],
    quiz:[
      {q:"Um cubo tem 4 cm de aresta. Qual é o seu volume?", opts:["16 cm³","12 cm³","64 cm³","96 cm³"], correct:2, explain:"V = 4 × 4 × 4 = 64 cm³. O 16 é a área de uma face (4 × 4), o 12 é 4 × 3, e o 96 é a área das 6 faces juntas (6 × 16), que se mede em cm², não em cm³."},
      {q:"Uma caixa mede 5 cm × 2 cm × 3 cm. Qual é o seu volume?", opts:["10 cm³","30 cm³","62 cm²","30 cm²"], correct:1, explain:"V = 5 × 2 × 3 = 30 cm³. O 10 é a soma das medidas, o 62 cm² é a área de todas as faces, e «30 cm²» tem a unidade errada: o volume mede-se em cm³."},
      {q:"Se a aresta de um cubo duplicar, o que acontece ao volume?", opts:["Fica 2 vezes maior","Fica 4 vezes maior","Fica 6 vezes maior","Fica 8 vezes maior"], correct:3, explain:"A aresta conta três vezes (comprimento, largura e altura): 2 × 2 × 2 = 8. Experimenta: aresta 1 → 1 cm³; aresta 2 → 8 cm³. O «4 vezes» é o que acontece à área de uma face."},
      {q:"Quantos cm³ tem 1 litro?", opts:["10 cm³","100 cm³","1000 cm³","10 000 cm³"], correct:2, explain:"1 L = 1 dm³, que é um cubo de 10 cm × 10 cm × 10 cm = 1000 cm³. Por isso, 1 mL = 1 cm³."},
      {q:"Quantos litros cabem num depósito de 2,5 m³?", opts:["25 L","250 L","2500 L","25 000 L"], correct:2, explain:"1 m³ = 1000 dm³ = 1000 L, por isso 2,5 m³ = 2500 L. O 25 e o 250 vêm de multiplicar por 10 ou por 100: nas unidades de volume, cada passo é × 1000."},
      {q:"Um prisma tem uma base com 12 cm² de área e 5 cm de altura. Qual é o volume?", opts:["17 cm³","30 cm³","60 cm³","60 cm²"], correct:2, explain:"V = área da base × altura = 12 × 5 = 60 cm³. O 17 soma em vez de multiplicar, o 30 divide por 2 sem razão (isso é para a área do triângulo), e o volume mede-se em cm³."},
      {q:"Um cilindro tem 2 cm de raio e 10 cm de altura. Qual é o volume? (π ≈ 3,14)", opts:["125,6 cm³","62,8 cm³","502,4 cm³","40 cm³"], correct:0, explain:"Área da base: 3,14 × 2 × 2 = 12,56 cm². Volume: 12,56 × 10 = 125,6 cm³. O 62,8 esquece de elevar o raio ao quadrado (usa 3,14 × 2 em vez de 3,14 × 2 × 2), e o 502,4 usa o diâmetro (4) como se fosse o raio."},
      {q:"Quantos cubinhos de 1 cm de aresta cabem num cubo de 2 cm de aresta?", opts:["2","4","6","8"], correct:3, explain:"Numa camada cabem 2 × 2 = 4 cubinhos, e há 2 camadas: 4 × 2 = 8. O 4 só conta uma camada."},
      {q:"Quantos quadrados tem a planificação de um cubo?", opts:["4","6","8","12"], correct:1, explain:"O cubo tem 6 faces, por isso a planificação tem 6 quadrados. O 8 é o número de vértices e o 12 o número de arestas."},
      {q:"«Duas caixas com o mesmo volume têm a mesma forma.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Verdadeiro. O mesmo volume quer dizer as mesmas medidas.","Falso. Uma caixa de 2 × 2 × 6 e outra de 1 × 4 × 6 têm as duas 24 cm³, mas formas diferentes.","Verdadeiro. Duas caixas de 2 × 3 × 4 têm o mesmo volume.","Falso. O volume depende só da altura."], correct:1, explain:"Basta um contraexemplo: 2 × 2 × 6 = 24 e 1 × 4 × 6 = 24, mas uma é mais «quadrada» e a outra mais achatada. Um exemplo em que dá certo não prova que é sempre assim."}
    ],
    posters:[
      {title:"🧊 Exemplo 1 — Contar cubos por camadas", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos cubos de 1 cm de aresta cabem numa caixa de 4 cm × 3 cm × 2 cm.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> pensa por camadas. Primeiro enche o fundo da caixa.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Uma camada: 4 cubos de comprido × 3 de largura = 12 cubos<br>Camadas: a caixa tem 2 cm de altura, por isso cabem 2 camadas<br>Total: 12 × 2 = 24 cubos</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> cabem 24 cubos: o volume da caixa é 24 cm³.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> é a fórmula do paralelepípedo: 4 × 3 × 2 = 24. Comprimento × largura é a camada; vezes a altura é o número de camadas.</span></li>'+
        '</ul>'},
      {title:"📦 Exemplo 2 — Paralelepípedo e cubo", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o volume de uma caixa de 5 cm × 4 cm × 3 cm, o de um cubo de 3 cm de aresta e o que acontece se a aresta do cubo duplicar.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> V = comprimento × largura × altura. No cubo, as três medidas são iguais.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Caixa: 5 × 4 × 3 = 60 cm³<br>Cubo de 3 cm: 3 × 3 × 3 = 27 cm³<br>Cubo de 6 cm (aresta a dobrar): 6 × 6 × 6 = 216 cm³</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 60 cm³ e 27 cm³. Com a aresta a dobrar, o cubo passa a ter 216 cm³: 8 vezes mais (216 ÷ 27 = 8).</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> duplicar a aresta duplica o comprimento, a largura e a altura: 2 × 2 × 2 = 8. Erro a evitar: pensar que o volume só duplica.</span></li>'+
        '</ul>'},
      {title:"🔁 Exemplo 3 — Converter unidades de volume", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos cm³ são 2,5 dm³, e quantos dm³ são 3000 cm³.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> 1 dm³ é um cubo de 10 cm de aresta: 10 × 10 × 10 = 1000 cm³. Cada unidade de volume é 1000 vezes a seguinte.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>2,5 dm³ = 2,5 × 1000 = 2500 cm³<br>3000 cm³ = 3000 ÷ 1000 = 3 dm³<br>Da mesma forma, 1 m³ = 1000 dm³</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> 2,5 dm³ = 2500 cm³ e 3000 cm³ = 3 dm³.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> passar para uma unidade mais pequena dá um número maior (2,5 → 2500). Erro a evitar: multiplicar só por 10, como nos comprimentos. Nos volumes são três dimensões: 10 × 10 × 10.</span></li>'+
        '</ul>'},
      {title:"🐠 Exemplo 4 — Volume e capacidade", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos litros de água leva um aquário de 40 cm × 25 cm × 30 cm, cheio até cima.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> calcula o volume em cm³ e lembra-te: 1 L = 1 dm³ = 1000 cm³.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>V = 40 × 25 × 30 = 30 000 cm³<br>30 000 cm³ = 30 000 ÷ 1000 = 30 dm³<br>30 dm³ = 30 L</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o aquário leva 30 litros.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> com as medidas em dm (4 × 2,5 × 3), o volume dá logo 30 dm³ = 30 L. Faz sentido: um garrafão de 5 L é muito mais pequeno do que este aquário.</span></li>'+
        '</ul>'},
      {title:"🔺 Exemplo 5 — O volume de um prisma", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o volume de um prisma triangular (como certas barras de chocolate em forma de triângulo). A base é um triângulo com 4 cm de base e 3 cm de altura; o prisma tem 10 cm de comprimento.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> em qualquer prisma, V = área da base × altura do prisma. A «altura do prisma» é a distância entre as duas bases: aqui, os 10 cm.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Área da base (triângulo): 4 × 3 ÷ 2 = 6 cm²<br>Volume: 6 × 10 = 60 cm³</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o prisma tem 60 cm³.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> o prisma é metade de uma caixa de 4 × 3 × 10 = 120 cm³, cortada na diagonal: 120 ÷ 2 = 60. ✓ A mesma regra serve para o paralelepípedo: a base é o retângulo do fundo.</span></li>'+
        '</ul>'},
      {title:"🥫 Exemplo 6 — O volume de um cilindro", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> o volume de uma lata com 8 cm de diâmetro e 10 cm de altura. (π ≈ 3,14)</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o cilindro é como um prisma de base redonda: V = área da base × altura. Primeiro o raio: 8 ÷ 2 = 4 cm.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Área da base: 3,14 × 4 × 4 = 50,24 cm²<br>Volume: 50,24 × 10 = 502,4 cm³<br>Em mL: 502,4 cm³ ≈ 502 mL</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> a lata tem cerca de 502 cm³, um pouco mais de meio litro.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> a lata cabe numa caixa de 8 × 8 × 10 = 640 cm³, por isso o volume tem de ser menor: 502,4 &lt; 640 ✓. Erro a evitar: usar o diâmetro como raio (dava 2009,6 cm³, mais do que a caixa à volta!).</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"🟩 Área", points:["Mede uma superfície (duas dimensões)","Unidades quadradas: cm², m²","Ex.: o papel para embrulhar uma caixa"]},
      right:{title:"🧊 Volume", points:["Mede o espaço ocupado (três dimensões)","Unidades cúbicas: cm³, m³ (e litros)","Ex.: o que cabe dentro da caixa"]}
    },
    boss:"«Avalia o que sabes» do cap. 5 — manual, vol. 2, p. 76"
  },
  {
    id:"n8", num:8, c:"m8", icon:"📊",
    title:"Estatística do Servidor",
    subtitle:"Dados e probabilidades", pages:"manual, vol. 2, cap. 6 «Dados e probabilidades», pp. 82–125",
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
    boss:"«Avalia o que sabes» do cap. 6 — manual, vol. 2, p. 122"
  },
  {
    id:"n9", num:9, c:"m9", icon:"🏵️",
    title:"Rodas e Rosáceas",
    subtitle:"Rotações e simetrias", pages:"manual, vol. 1, cap. 2 «Figuras no plano», pp. 78–87 (rotação e simetrias)",
    lead:"Neste mundo vais aprender a rodar figuras à volta de um ponto, a descobrir as simetrias de rotação e de reflexão de uma rosácea e a construir as tuas próprias rosáceas. Precisas de régua, compasso e transferidor (e, se tiveres, papel vegetal). Vê primeiro a animação e os 6 exemplos resolvidos, um de cada vez. No fim tens o resumo para o teste.",
    missions:[
      {t:"Caça às Rosáceas", d:"Simetrias à tua volta", f:"Procura 5 objetos que fiquem iguais quando rodam um bocadinho: a jante de um carro, uma flor, uma tampa, um logótipo, um desenho da calçada…\nDesenha cada um e regista: quantas vezes fica igual numa volta inteira, qual é o ângulo mínimo (360° ÷ esse número) e quantos eixos de simetria tem.\nVerifica: em cada objeto, o número de eixos ou é igual ao número de posições iguais, ou é 0 (como num catavento).", xp:10},
      {t:"Rodar com Compasso", d:"A imagem de um triângulo por rotação", f:"Desenha um triângulo ABC e um ponto O fora dele. Vais rodá-lo 90° no sentido positivo (contrário ao dos ponteiros do relógio), como no Exemplo 2.\nPara cada vértice: une-o a O, mede 90° com o transferidor a partir desse segmento, e marca com o compasso, nessa nova semirreta, a mesma distância a O.\nVerifica: decalca o triângulo em papel vegetal, espeta a ponta do lápis em O e roda a folha um quarto de volta. O decalque tem de cair exatamente em cima de A'B'C'.", xp:15},
      {t:"A Minha Rosácea", d:"Construir uma rosácea por rotações", f:"Desenha uma circunferência e, dentro dela, uma pétala ou um desenho simples encostado ao centro.\nEscolhe quantas cópias queres (5, 6 ou 8) e calcula o ângulo: 360° ÷ número de cópias. Com o transferidor, roda o desenho esse ângulo, vezes sem conta, até dar a volta. Pinta.\nVerifica: o número de cópias × o ângulo tem de dar 360°, e a última rotação tem de cair em cima do primeiro desenho.", xp:10},
      {t:"Rosácea em Scratch", d:"Pensamento computacional", f:"Abre o editor do Scratch (no passo 🔭 Explorar; não precisas de conta). Em Definições escolhe Português e junta a extensão «Caneta» (botão no canto de baixo, à esquerda).\nFaz um programa que desenha um quadrado e roda 45 graus, repetido 8 vezes: «repete 8 vezes: desenha o quadrado; gira 45 graus».\nVerifica: 8 × 45° = 360°. Muda para 6 vezes e 60 graus e prevê antes o que vai aparecer.", xp:15}
    ],
    resumo:[
      "Uma <b>rotação</b> faz girar uma figura à volta de um ponto fixo, o <b>centro de rotação</b>. Para a definir são precisos três dados: o <b>centro</b>, a <b>amplitude do ângulo</b> e o <b>sentido</b>.",
      "O sentido <b>positivo</b> é o contrário ao dos ponteiros do relógio; o sentido <b>negativo</b> é o dos ponteiros do relógio. Rodar 90° num sentido é o mesmo que rodar 270° no outro (90 + 270 = 360).",
      "Na rotação de centro O, cada ponto A e a sua imagem A' ficam à <b>mesma distância de O</b>: OA = OA'. Por isso todas as imagens de A, com ângulos diferentes, estão numa <b>circunferência de centro O</b>. O centro é o único ponto que não se mexe.",
      "Para construir a imagem de um polígono, roda-se <b>cada vértice</b> (com régua, compasso e transferidor) e unem-se as imagens. A rotação é uma <b>isometria</b>: a figura e a imagem têm os mesmos comprimentos e os mesmos ângulos; só muda a posição.",
      "Uma figura tem <b>simetria de rotação</b> quando fica igual a si própria depois de uma rotação de menos de 360°. O <b>ângulo mínimo</b> de rotação é 360° ÷ o número de posições em que fica igual numa volta (ex.: 6 pétalas iguais → 60°).",
      "Uma figura tem <b>simetria de reflexão</b> quando um <b>eixo de simetria</b> a divide em duas metades que coincidem dobrando a folha (como num espelho).",
      "Uma <b>rosácea</b> é uma figura com simetria de rotação, feita de cópias de um desenho à volta de um centro. Se tiver simetria de reflexão, o número de eixos é igual ao número de cópias: 4 eixos → ângulo mínimo de 360° ÷ 4 = 90°. Há rosáceas sem eixos, como um catavento.",
      "Para <b>construir uma rosácea</b> com n cópias, roda-se o desenho 360° ÷ n, sucessivamente, até completar a volta."
    ],
    gloss:[
      ["rotação","Movimento que faz girar uma figura à volta de um ponto fixo, com um certo ângulo e um certo sentido."],
      ["centro de rotação","O ponto fixo à volta do qual a figura roda; é o único ponto que fica no mesmo sítio."],
      ["sentido positivo","O sentido contrário ao dos ponteiros do relógio."],
      ["sentido negativo","O sentido dos ponteiros do relógio."],
      ["imagem","A figura (ou o ponto) que se obtém depois da rotação; escreve-se com plica: A'."],
      ["isometria","Uma transformação que mantém os comprimentos e os ângulos, como a rotação e a reflexão."],
      ["simetria de rotação","Uma figura tem-na quando fica igual a si própria depois de uma rotação de menos de 360°."],
      ["ângulo mínimo de rotação","O menor ângulo que faz a figura ficar igual a si própria; é 360° a dividir pelo número de posições iguais."],
      ["eixo de simetria","Uma reta que divide a figura em duas metades que coincidem quando se dobra por ela."],
      ["rosácea","Uma figura feita de cópias de um desenho à volta de um centro, com simetria de rotação."]
    ],
    quiz:[
      {q:"O ponto A está a 3 cm do ponto O. Roda-se A 90° à volta de O. A que distância de O fica a imagem A'?", opts:["6 cm","90 cm","Depende do sentido","3 cm"], correct:3, explain:"Numa rotação, cada ponto anda sobre uma circunferência de centro O: não se afasta nem se aproxima. OA' = OA = 3 cm, seja qual for o ângulo e o sentido."},
      {q:"Das 10h00 às 10h15, quanto roda o ponteiro dos minutos e em que sentido?", opts:["90°, sentido negativo","90°, sentido positivo","15°, sentido negativo","180°, sentido negativo"], correct:0, explain:"Uma hora é uma volta (360°), por isso 15 minutos são um quarto de volta: 360° ÷ 4 = 90°. Os ponteiros rodam no sentido dos ponteiros do relógio, que é o sentido negativo. O «15°» confunde minutos com graus."},
      {q:"Uma jante tem 5 raios iguais, igualmente espaçados. Qual é o ângulo mínimo de rotação que a deixa igual?", opts:["5°","36°","72°","90°"], correct:2, explain:"Numa volta, a jante fica igual em 5 posições: 360° ÷ 5 = 72°. O 36° vem de dividir 180° (meia volta) em vez de 360°."},
      {q:"Uma rosácea com simetria de reflexão tem 8 eixos de simetria. Qual é o ângulo mínimo de rotação?", opts:["8°","22,5°","45°","90°"], correct:2, explain:"Numa rosácea com eixos, o número de eixos é igual ao número de posições iguais numa volta: 360° ÷ 8 = 45°. O 22,5° vem de dividir 180° por 8."},
      {q:"O ângulo mínimo de rotação de uma rosácea é 40°. Quantas cópias do desenho tem a rosácea?", opts:["4","40","36","9"], correct:3, explain:"Cada cópia ocupa 40° e a volta inteira tem 360°: 360 ÷ 40 = 9 cópias. Verifica: 9 × 40° = 360°."},
      {q:"Rodar uma figura 270° no sentido positivo dá a mesma imagem que…", opts:["rodar 90° no sentido positivo","rodar 90° no sentido negativo","rodar 270° no sentido negativo","rodar 180°"], correct:1, explain:"270° num sentido mais 90° no outro dão a volta completa: 270 + 90 = 360. Por isso chega-se ao mesmo sítio rodando só 90° no sentido negativo (o dos ponteiros do relógio)."},
      {q:"Roda-se um triângulo 60° à volta de um ponto. O que é verdade sobre a imagem?", opts:["Fica maior, porque se afasta do centro","Os ângulos aumentam 60°","Fica virada ao contrário, como num espelho","Tem os mesmos lados e os mesmos ângulos; só muda a posição"], correct:3, explain:"A rotação é uma isometria: mantém os comprimentos e os ângulos. E, ao contrário da reflexão, não troca a figura «ao espelho»: a letra R rodada continua a ler-se R."},
      {q:"Numa quadrícula, o ponto A está 3 quadrículas à direita de O. Roda-se A 90° no sentido positivo, à volta de O. Onde fica A'?", opts:["3 quadrículas acima de O","3 quadrículas abaixo de O","3 quadrículas à esquerda de O","3 à direita e 3 acima de O"], correct:0, explain:"No sentido positivo (contrário ao dos ponteiros do relógio), um quarto de volta leva a «direita» para «cima». «Abaixo» seria o sentido negativo e «à esquerda» seria uma rotação de 180°."},
      {q:"Um catavento de 3 pás iguais (todas a apontar para o mesmo lado) fica igual quando roda 120°. Que simetrias tem?", opts:["Simetria de rotação de 120° e 3 eixos de simetria","Não tem simetria nenhuma","Simetria de rotação de 120° e nenhum eixo de simetria","Simetria de rotação de 60° e 3 eixos"], correct:2, explain:"Tem simetria de rotação (360° ÷ 3 = 120°). Mas as pás «puxam» todas para o mesmo lado, por isso nenhuma reta o divide em metades iguais: não tem eixos. Nem todas as rosáceas têm simetria de reflexão!"},
      {q:"«Se uma figura tem simetria de rotação de 90°, também tem simetria de rotação de 180°.» Verdadeiro ou falso? Escolhe a resposta com a justificação certa.", opts:["Falso. 180° é outro ângulo.","Verdadeiro. Rodar 180° é rodar 90° duas vezes, e cada vez a figura fica igual.","Verdadeiro, mas só se for um quadrado.","Falso. Só tem a simetria de 90°."], correct:1, explain:"Se depois de 90° a figura fica igual, rodando mais 90° volta a ficar igual: 90 + 90 = 180°. Pela mesma razão tem também 270°. Os ângulos de simetria são sempre múltiplos do ângulo mínimo."}
    ],
    posters:[
      {title:"🔄 Exemplo 1 — Rodar um ponto", svg:'<svg class="poster-svg" viewBox="60 20 160 125" style="max-width:240px;margin:0 auto" role="img" aria-label="Ponto O, centro de rotação. O ponto A está 80 unidades à direita de O. A imagem A\' está 80 unidades acima de O. Um arco tracejado de A para A\', no sentido contrário ao dos ponteiros do relógio, e um ângulo reto em O.">'+
        '<path d="M180,120 A80,80 0 0 0 100,40" fill="none" stroke="var(--wc)" stroke-width="2" stroke-dasharray="5 4"/>'+
        '<path d="M107,35 L100,40 L107,45" fill="none" stroke="var(--wc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+
        '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="100" y1="120" x2="180" y2="120"/><line x1="100" y1="120" x2="100" y2="40"/></g>'+
        '<polyline points="114,120 114,106 100,106" fill="none" stroke="currentColor" stroke-width="1.5"/>'+
        '<g fill="currentColor"><circle cx="100" cy="120" r="4"/><circle cx="180" cy="120" r="4"/><circle cx="100" cy="40" r="4"/></g>'+
        '<g font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle"><text x="92" y="136">O</text><text x="186" y="136">A</text><text x="88" y="38">A\'</text><text x="128" y="101">90°</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a imagem do ponto A pela rotação de centro O, 90° no sentido positivo.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> uma rotação precisa de três dados: o centro (O), o ângulo (90°) e o sentido (positivo: contrário ao dos ponteiros do relógio).</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>1. Une O a A com a régua.<br>2. Com o transferidor centrado em O, marca 90° a partir de OA, no sentido contrário ao dos ponteiros do relógio, e traça essa semirreta.<br>3. Com o compasso em O e abertura OA, marca nessa semirreta o ponto A\'.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> A\' fica «por cima» de O, à mesma distância a que A está de O.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> OA\' = OA (mede com a régua) e o ângulo AOA\' mede 90°. A anda sobre uma circunferência de centro O: o arco tracejado.</span></li>'+
        '</ul>'},
      {title:"🔺 Exemplo 2 — Rodar um triângulo numa quadrícula", svg:'<svg class="poster-svg" viewBox="10 20 200 145" style="max-width:300px;margin:0 auto" role="img" aria-label="Quadrícula com o centro O. O triângulo ABC tem A 2 quadrículas à direita e 1 acima de O, B 4 à direita e 1 acima, C 2 à direita e 3 acima. A imagem A\'B\'C\', rodada 90° no sentido positivo, tem A\' 1 à esquerda e 2 acima de O, B\' 1 à esquerda e 4 acima, C\' 3 à esquerda e 2 acima.">'+
        '<g stroke="currentColor" stroke-width="0.6" opacity="0.25">'+
        '<line x1="20" y1="30" x2="20" y2="150"/><line x1="40" y1="30" x2="40" y2="150"/><line x1="60" y1="30" x2="60" y2="150"/><line x1="80" y1="30" x2="80" y2="150"/><line x1="100" y1="30" x2="100" y2="150"/><line x1="120" y1="30" x2="120" y2="150"/><line x1="140" y1="30" x2="140" y2="150"/><line x1="160" y1="30" x2="160" y2="150"/><line x1="180" y1="30" x2="180" y2="150"/><line x1="200" y1="30" x2="200" y2="150"/>'+
        '<line x1="20" y1="30" x2="200" y2="30"/><line x1="20" y1="50" x2="200" y2="50"/><line x1="20" y1="70" x2="200" y2="70"/><line x1="20" y1="90" x2="200" y2="90"/><line x1="20" y1="110" x2="200" y2="110"/><line x1="20" y1="130" x2="200" y2="130"/><line x1="20" y1="150" x2="200" y2="150"/></g>'+
        '<path d="M140,110 A44.72,44.72 0 0 0 80,90" fill="none" stroke="var(--wc)" stroke-width="1.8" stroke-dasharray="4 4"/>'+
        '<polygon points="140,110 180,110 140,70" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>'+
        '<polygon points="80,90 80,50 40,90" fill="var(--wc)" fill-opacity="0.35" stroke="var(--wc)" stroke-width="2.5" stroke-linejoin="round"/>'+
        '<circle cx="100" cy="130" r="4" fill="currentColor"/>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="100" y="146">O</text><text x="146" y="124">A</text><text x="190" y="124">B</text><text x="148" y="66">C</text><text x="88" y="104">A\'</text><text x="90" y="48">B\'</text><text x="30" y="104">C\'</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> a imagem do triângulo ABC pela rotação de centro O, 90° no sentido positivo.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> roda-se cada vértice e depois unem-se as imagens. Numa quadrícula, conta-se: um quarto de volta no sentido positivo transforma «para a direita» em «para cima» e «para cima» em «para a esquerda».</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>A: 2 à direita e 1 acima de O → A\': 2 acima e 1 à esquerda<br>B: 4 à direita e 1 acima → B\': 4 acima e 1 à esquerda<br>C: 2 à direita e 3 acima → C\': 2 acima e 3 à esquerda<br>Une A\', B\' e C\'.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o triângulo A\'B\'C\' (a cor), «deitado» para a esquerda de O.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> AB é horizontal e mede 2 quadrículas; A\'B\' é vertical e também mede 2. Os lados e os ângulos são os mesmos: só a posição mudou. Confirma com papel vegetal, como na missão «Rodar com Compasso».</span></li>'+
        '</ul>'},
      {title:"🕒 Exemplo 3 — Os ponteiros do relógio", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> das 10h00 às 10h20, quanto roda o ponteiro dos minutos, e em que sentido? E o ponteiro das horas?</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> o ponteiro dos minutos dá uma volta inteira (360°) numa hora; o das horas dá uma volta em 12 horas. Os dois rodam no sentido dos ponteiros do relógio: o sentido <b>negativo</b>.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Minutos: 360° ÷ 60 = 6° por minuto; 20 × 6° = 120°<br>Horas: 360° ÷ 12 = 30° por hora; 20 minutos são 1/3 de hora: 30° ÷ 3 = 10°</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o ponteiro dos minutos roda 120° e o das horas roda 10°, os dois no sentido negativo.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 15 minutos dão 15 × 6° = 90°, um quarto de volta, e 20 minutos são um terço da volta: 360° ÷ 3 = 120°. Rodar 120° no sentido negativo leva ao mesmo sítio que rodar 240° no positivo (120 + 240 = 360).</span></li>'+
        '</ul>'},
      {title:"🌼 Exemplo 4 — A simetria de rotação", svg:'<svg class="poster-svg" viewBox="20 12 160 140" style="max-width:220px;margin:0 auto" role="img" aria-label="Flor com 6 pétalas iguais à volta do centro. Uma seta em arco mostra uma rotação de 60 graus, de uma pétala para a seguinte, no sentido contrário ao dos ponteiros do relógio.">'+
        '<g fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2">'+
        '<ellipse cx="100" cy="55" rx="13" ry="28"/><ellipse cx="100" cy="55" rx="13" ry="28" transform="rotate(60 100 85)"/><ellipse cx="100" cy="55" rx="13" ry="28" transform="rotate(120 100 85)"/>'+
        '<ellipse cx="100" cy="55" rx="13" ry="28" transform="rotate(180 100 85)"/><ellipse cx="100" cy="55" rx="13" ry="28" transform="rotate(240 100 85)"/><ellipse cx="100" cy="55" rx="13" ry="28" transform="rotate(300 100 85)"/></g>'+
        '<circle cx="100" cy="85" r="10" fill="var(--wc)" stroke="currentColor" stroke-width="2"/>'+
        '<path d="M100,20 A65,65 0 0 0 43.7,52.5" fill="none" stroke="var(--wc)" stroke-width="2.2"/>'+
        '<path d="M43.7,52.5 l7.8,-4.5 M43.7,52.5 l0,-9" fill="none" stroke="var(--wc)" stroke-width="2.2" stroke-linecap="round"/>'+
        '<text x="60" y="22" font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="var(--wc)">60°</text></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> se esta flor tem simetria de rotação, qual é o ângulo mínimo e quais são todos os ângulos que a deixam igual.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> roda a flor (a imaginar, ou com um decalque) e conta em quantas posições fica igual numa volta inteira. Aqui as 6 pétalas são iguais e estão igualmente espaçadas.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Numa volta, a flor fica igual 6 vezes.<br>Ângulo mínimo: 360° ÷ 6 = 60°<br>Os outros são múltiplos: 120°, 180°, 240° e 300°.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> tem simetria de rotação; o ângulo mínimo é 60°, e também fica igual com 120°, 180°, 240° e 300°.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 6 × 60° = 360°: ao fim de 6 rotações, cada pétala volta ao seu lugar. (A rotação de 360° deixa qualquer figura igual, por isso não conta como simetria.)</span></li>'+
        '</ul>'},
      {title:"🪞 Exemplo 5 — Eixos de simetria e ângulo mínimo", svg:'<svg class="poster-svg" viewBox="0 10 240 145" style="max-width:300px;margin:0 auto" role="img" aria-label="À esquerda, uma flor de 4 pétalas com 4 eixos de simetria tracejados: vertical, horizontal e as duas diagonais. À direita, um catavento de 4 pás iguais, todas a apontar para o mesmo lado, sem eixos de simetria.">'+
        '<g fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2">'+
        '<ellipse cx="60" cy="49" rx="12" ry="22"/><ellipse cx="60" cy="49" rx="12" ry="22" transform="rotate(90 60 75)"/><ellipse cx="60" cy="49" rx="12" ry="22" transform="rotate(180 60 75)"/><ellipse cx="60" cy="49" rx="12" ry="22" transform="rotate(270 60 75)"/></g>'+
        '<g stroke="var(--wc)" stroke-width="1.6" stroke-dasharray="5 4"><line x1="60" y1="20" x2="60" y2="130"/><line x1="5" y1="75" x2="115" y2="75"/><line x1="21.1" y1="36.1" x2="98.9" y2="113.9"/><line x1="21.1" y1="113.9" x2="98.9" y2="36.1"/></g>'+
        '<g fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2" stroke-linejoin="round">'+
        '<polygon points="180,75 180,27 204,51"/><polygon points="180,75 180,27 204,51" transform="rotate(90 180 75)"/><polygon points="180,75 180,27 204,51" transform="rotate(180 180 75)"/><polygon points="180,75 180,27 204,51" transform="rotate(270 180 75)"/></g>'+
        '<circle cx="60" cy="75" r="4" fill="currentColor"/><circle cx="180" cy="75" r="4" fill="currentColor"/>'+
        '<g font-family="Lexend, sans-serif" font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="148">4 eixos · 90°</text><text x="180" y="148">0 eixos · 90°</text></g></svg>'+
        '<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quantos eixos de simetria e qual o ângulo mínimo de rotação de cada figura: a flor de 4 pétalas e o catavento de 4 pás.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> para os eixos, pergunta-te: «se dobrar por esta reta, as duas metades coincidem?». Para a rotação, conta as posições iguais numa volta.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>Flor: 4 posições iguais → 360° ÷ 4 = 90°. Eixos: 2 passam pelas pétalas e 2 passam entre elas → 4 eixos.<br>Catavento: também 4 posições iguais → 90°. Mas as pás apontam todas para o mesmo lado: dobrando por qualquer reta, as metades não coincidem → 0 eixos.</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> as duas têm simetria de rotação de 90°; a flor tem 4 eixos e o catavento não tem nenhum.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> numa rosácea com eixos, o número de eixos é igual ao número de posições iguais: 4 eixos e 360° ÷ 4 = 90°. Num catavento não há eixos, mas a rotação continua lá.</span></li>'+
        '</ul>'},
      {title:"✏️ Exemplo 6 — Construir uma rosácea", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> como desenhar uma rosácea com 5 pétalas iguais, igualmente espaçadas.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> as 5 pétalas repartem a volta inteira, 360°, em 5 partes iguais. Esse é o ângulo de cada rotação.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>360° ÷ 5 = 72°<br>Desenha a 1.ª pétala encostada ao centro O.<br>Com o transferidor em O, roda-a 72° e desenha a 2.ª; roda a 2.ª 72° e desenha a 3.ª… até à 5.ª.<br>Em Scratch: «repete 5 vezes: desenha a pétala; gira 72 graus».</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> uma rosácea com simetria de rotação de 72°. Se a pétala for simétrica, a rosácea tem também 5 eixos de simetria.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> 5 × 72° = 360°: a 6.ª rotação cairia em cima da 1.ª pétala. Erro a evitar: usar 180° ÷ 5 = 36°; as 5 pétalas ficariam todas em metade da flor.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"🔄 Rotação", points:["Gira a figura à volta de um ponto (o centro)","Precisa do centro, do ângulo e do sentido","A figura não fica «ao espelho»: um R rodado continua a ler-se R"]},
      right:{title:"🪞 Reflexão", points:["Vira a figura sobre uma reta (o eixo), como um espelho","Precisa só do eixo","A figura fica «ao espelho»: um R refletido fica Я"]}
    },
    resources:[
      {icon:"📐", title:"GeoGebra — Geometria", desc:"Desenha um polígono e usa a ferramenta de rotação à volta de um ponto (em «Mais», nas transformações). Grátis, sem conta; em português.", site:"geogebra.org", url:"https://www.geogebra.org/geometry"},
      {icon:"🎨", title:"Symmetry Artist", desc:"Desenha e vê o desenho repetir-se em simetria de rotação (escolhe 2 a 9) ou de reflexão. Em inglês; tem publicidade.", site:"Math is Fun", url:"https://www.mathsisfun.com/geometry/symmetry-artist.html"},
      {icon:"🐱", title:"Scratch — editor", desc:"Para a missão «Rosácea em Scratch». Funciona sem conta (só não guarda online). Muda a língua em Definições.", site:"scratch.mit.edu", url:"https://scratch.mit.edu/projects/editor/"}
    ],
    boss:"«Avalia o que sabes» do cap. 2 — manual, vol. 1, p. 101"
  }
  ];
