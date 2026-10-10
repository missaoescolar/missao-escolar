/* Matemática — conteúdo extra por mundo (ver o formato em data/extra-hgp.js) */
const MATH_EXTRA = {
  n1: {
    desafio: [
      {q:"Qual é o menor número natural divisível ao mesmo tempo por 2, por 3 e por 5?", opts:["30","15","10","60"], correct:0, explain:"2 × 3 × 5 = 30. Como 2, 3 e 5 são primos, o menor múltiplo comum é o produto deles."},
      {q:"Quantos números primos há entre 1 e 20?", opts:["8","6","7","10"], correct:0, explain:"São 2, 3, 5, 7, 11, 13, 17 e 19 — oito números primos."},
      {q:"Qual é a decomposição em fatores primos de 60?", opts:["2² × 3 × 5","2 × 30","4 × 15","2 × 3 × 10"], correct:0, explain:"60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. As outras opções têm fatores que não são primos (30, 4, 15, 10)."},
      {q:"O m.d.c. de dois números primos diferentes é sempre…", opts:["1","o maior deles","o produto deles","0"], correct:0, explain:"Dois primos diferentes só têm o 1 como divisor comum."},
      {q:"O número 1 é primo?", opts:["Não, porque só tem um divisor","Sim, porque só é divisível por si próprio","Sim, é o menor primo","Depende do contexto"], correct:0, explain:"Um primo tem exatamente dois divisores. O 1 só tem um (ele próprio), por isso não é primo nem composto."}
    ],
    explorar: {
      proximo: "Mais à frente (no 3.º ciclo) vais trabalhar com potências e raízes quadradas e descobrir porque é que cada número tem uma única decomposição em fatores primos — uma ideia a que os matemáticos chamam 'teorema fundamental da aritmética'.",
      pontos: [
        "Os números primos acabam algum dia? (Spoiler: Euclides provou que não, há mais de 2000 anos!)",
        "Porque é que a segurança da internet depende de números primos enormes?",
        "Consegues encontrar dois primos seguidos que diferem de 2 (como 11 e 13)? Chamam-se 'primos gémeos'."
      ],
      links: [
        {s:"khan", q:"números primos"},
        {s:"khan", q:"máximo divisor comum"},
        {s:"bitesize", q:"prime numbers"}
      ]
    },
    curiosidades: [
      {t:"Há mais de 2000 anos, o matemático grego Eratóstenes inventou um método para encontrar números primos riscando múltiplos numa tabela. Chama-se 'crivo de Eratóstenes' e ainda hoje se usa nas aulas.", fonte:"Encyclopaedia Britannica"},
      {t:"Algumas cigarras da América do Norte passam 13 ou 17 anos debaixo da terra antes de saírem todas ao mesmo tempo — dois números primos. Os cientistas pensam que isso as ajuda a não coincidir com os ciclos dos predadores.", fonte:"National Geographic"},
      {t:"Os maiores números primos conhecidos têm dezenas de milhões de algarismos e são descobertos por computadores de voluntários do projeto GIMPS.", fonte:"Great Internet Mersenne Prime Search (mersenne.org)"}
    ]
  },
  n2: {
    desafio: [
      {q:"Quanto é 2/3 + 1/4?", opts:["11/12","3/7","3/12","2/12"], correct:0, explain:"Com o denominador comum 12: 8/12 + 3/12 = 11/12."},
      {q:"Quanto é 3/4 × 2/5?", opts:["3/10","5/9","6/9","3/20"], correct:0, explain:"3 × 2 = 6 e 4 × 5 = 20, ou seja 6/20, que simplificado é 3/10."},
      {q:"Quanto é 1/2 ÷ 1/4?", opts:["2","1/8","1/2","4"], correct:0, explain:"1/2 × 4/1 = 4/2 = 2. Faz sentido: em meia pizza cabem 2 quartos de pizza."},
      {q:"Qual é a fração irredutível de 18/24?", opts:["3/4","9/12","6/8","2/3"], correct:0, explain:"O m.d.c. de 18 e 24 é 6: 18 ÷ 6 = 3 e 24 ÷ 6 = 4."},
      {q:"Como se escreve 7/3 como número misto?", opts:["2 e 1/3","1 e 4/3","3 e 1/7","2 e 1/7"], correct:0, explain:"7 ÷ 3 = 2 e sobra 1, por isso 7/3 = 2 inteiros e 1/3."}
    ],
    explorar: {
      proximo: "Mais à frente vais usar frações com números negativos, potências de frações e equações em que a resposta é uma fração.",
      pontos: [
        "Porque é que dividir por 1/2 dá o dobro?",
        "Como é que os antigos egípcios escreviam frações? (Só usavam frações com numerador 1!)",
        "Que frações encontras na música, nas receitas e no desporto?"
      ],
      links: [
        {s:"khan", q:"frações"},
        {s:"bitesize", q:"fractions"},
        {u:"https://phet.colorado.edu/pt_BR/simulations/fractions-intro", n:"PhET — Introdução às Frações (simulação, Universidade do Colorado)"}
      ]
    },
    curiosidades: [
      {t:"Os antigos egípcios escreviam quase todas as frações como somas de frações com numerador 1, como 1/2 + 1/4. Isto aparece no papiro de Rhind, com cerca de 3500 anos.", fonte:"British Museum (papiro Rhind)"},
      {t:"Na música, as figuras são frações: uma mínima vale 1/2 de uma semibreve, uma semínima 1/4 e uma colcheia 1/8.", fonte:"Encyclopaedia Britannica (notação musical)"}
    ]
  },
  n3: {
    desafio: [
      {q:"Um jogo custa 40 € e tem 25% de desconto. Quanto pagas?", opts:["30 €","10 €","35 €","15 €"], correct:0, explain:"25% de 40 € = 10 €; 40 € − 10 € = 30 €."},
      {q:"Quanto é 0,3 × 0,2?", opts:["0,06","0,6","6","0,5"], correct:0, explain:"3 × 2 = 6, e há duas casas decimais ao todo: 0,06."},
      {q:"Que percentagem corresponde a 3/5?", opts:["60%","35%","30%","53%"], correct:0, explain:"3/5 = 6/10 = 60/100 = 60%."},
      {q:"Um preço sobe 10% e depois desce 10%. Em relação ao preço inicial, fica…", opts:["Mais baixo","Igual","Mais alto","Depende do preço"], correct:0, explain:"Ex.: 100 € → 110 € → 110 − 11 = 99 €. A descida é calculada sobre um valor maior, por isso desce mais do que subiu."},
      {q:"Qual destas frações dá uma dízima infinita periódica?", opts:["2/3","1/4","3/5","7/10"], correct:0, explain:"2/3 = 0,666…; as outras dão dízimas finitas (0,25; 0,6; 0,7)."}
    ],
    explorar: {
      proximo: "Mais à frente vais calcular juros, o IVA das compras e usar a notação científica para escrever números muito grandes (distância às estrelas) ou muito pequenos (tamanho de um vírus).",
      pontos: [
        "Porque é que um desconto de 50% seguido de outro de 50% não deixa o produto grátis?",
        "Como é que os bancos calculam os juros de uma poupança?",
        "Que percentagens aparecem nas notícias e o que querem dizer?"
      ],
      links: [
        {s:"khan", q:"percentagens"},
        {s:"khan", q:"números decimais"},
        {s:"bitesize", q:"percentages"}
      ]
    },
    curiosidades: [
      {t:"Em Portugal escreve-se 0,5 com vírgula; nos países de língua inglesa escreve-se 0.5 com ponto. Por isso, nas calculadoras e nos computadores aparece muitas vezes o ponto.", fonte:"Bureau International des Poids et Mesures (regras do Sistema Internacional)"},
      {t:"O símbolo % nasceu de abreviaturas de 'per cento' em manuscritos italianos, que com o tempo se foram encurtando até ficarem num pequeno círculo, uma barra e outro círculo.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  n4: {
    desafio: [
      {q:"Qual é o termo geral da sequência 3, 6, 9, 12, …?", opts:["3n","n + 3","3n + 3","n × n"], correct:0, explain:"O termo de ordem n é 3 × n: 3×1=3, 3×2=6, 3×3=9…"},
      {q:"Qual é o 10.º termo da sequência 4, 7, 10, 13, …?", opts:["31","34","28","40"], correct:0, explain:"Começa em 4 e soma 3 de cada vez: 4 + 9 × 3 = 31."},
      {q:"Num mapa à escala 1:100 000, quanto representam 2 cm na realidade?", opts:["2 km","200 m","20 km","2000 km"], correct:0, explain:"1 cm representa 100 000 cm = 1 km, por isso 2 cm representam 2 km."},
      {q:"3 cadernos custam 4,50 €. Quanto custam 7 cadernos, ao mesmo preço?", opts:["10,50 €","9,00 €","31,50 €","12,00 €"], correct:0, explain:"Cada caderno custa 1,50 €; 7 × 1,50 € = 10,50 €."},
      {q:"Na sequência de Fibonacci (1, 1, 2, 3, 5, 8, …), qual é o termo seguinte?", opts:["13","11","12","16"], correct:0, explain:"Cada termo é a soma dos dois anteriores: 5 + 8 = 13."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar a proporcionalidade inversa (quanto mais pessoas a pintar, menos tempo demora), as funções e os seus gráficos, e resolver equações.",
      pontos: [
        "Porque é que as escalas dos mapas são uma proporção?",
        "Onde aparece a sequência de Fibonacci na natureza?",
        "Velocidade e tempo de viagem são diretamente ou inversamente proporcionais?"
      ],
      links: [
        {s:"khan", q:"proporcionalidade direta"},
        {s:"khan", q:"sequências"},
        {s:"bitesize", q:"sequences"}
      ]
    },
    curiosidades: [
      {t:"Nas cabeças dos girassóis, as sementes formam espirais, e o número de espirais em cada sentido costuma ser um número da sequência de Fibonacci, como 34 e 55.", fonte:"Encyclopaedia Britannica"},
      {t:"A sequência de Fibonacci tem o nome de um matemático italiano do século XIII, Leonardo de Pisa, que a usou num problema sobre coelhos — e que também ajudou a espalhar na Europa os algarismos que usamos hoje.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  n5: {
    desafio: [
      {q:"Quanto somam os ângulos internos de qualquer triângulo?", opts:["180°","90°","360°","270°"], correct:0, explain:"Em qualquer triângulo, os três ângulos internos somam sempre 180°."},
      {q:"Quanto somam os ângulos internos de um quadrilátero?", opts:["360°","180°","540°","90°"], correct:0, explain:"Um quadrilátero pode dividir-se em 2 triângulos: 2 × 180° = 360°."},
      {q:"Um ângulo mede 35°. Quanto mede o seu complementar?", opts:["55°","145°","65°","35°"], correct:0, explain:"Complementares somam 90°: 90° − 35° = 55°."},
      {q:"Um trapézio tem bases de 8 cm e 4 cm e altura de 5 cm. Qual é a sua área?", opts:["30 cm²","60 cm²","40 cm²","17 cm²"], correct:0, explain:"((8 + 4) × 5) ÷ 2 = 60 ÷ 2 = 30 cm²."},
      {q:"Um triângulo tem 10 cm de base e 7 cm de altura. Qual é a sua área?", opts:["35 cm²","70 cm²","17 cm²","34 cm²"], correct:0, explain:"(10 × 7) ÷ 2 = 35 cm²."}
    ],
    explorar: {
      proximo: "Mais à frente vais conhecer o teorema de Pitágoras (que relaciona os lados de um triângulo retângulo), a semelhança de figuras e as transformações geométricas, como rotações e reflexões.",
      pontos: [
        "Porque é que a soma dos ângulos de um triângulo é sempre 180°? (Experimenta rasgar os 3 cantos de um triângulo de papel e juntá-los!)",
        "Porque é que as abelhas constroem favos hexagonais?",
        "Como se calcula a área de uma figura irregular, como o mapa de Portugal?"
      ],
      links: [
        {s:"khan", q:"ângulos"},
        {s:"khan", q:"área do trapézio"},
        {s:"bitesize", q:"angles"}
      ]
    },
    curiosidades: [
      {t:"Dividimos a volta completa em 360 graus por herança dos antigos babilónios, que contavam em base 60.", fonte:"Encyclopaedia Britannica"},
      {t:"Os hexágonos dos favos das abelhas dividem o espaço com o menor perímetro possível: assim as abelhas gastam menos cera. Um matemático, Thomas Hales, demonstrou-o em 1999.", fonte:"Encyclopaedia Britannica; Scientific American"}
    ]
  },
  n6: {
    desafio: [
      {q:"Uma roda tem 50 cm de diâmetro. Qual é, aproximadamente, o seu perímetro? (π ≈ 3,14)", opts:["157 cm","78,5 cm","314 cm","100 cm"], correct:0, explain:"P = π × d = 3,14 × 50 = 157 cm."},
      {q:"Se o raio de um círculo duplicar, a área…", opts:["fica 4 vezes maior","fica 2 vezes maior","mantém-se","fica 8 vezes maior"], correct:0, explain:"A = π × r². Com raio 2r: π × (2r)² = 4 × π × r²."},
      {q:"Qual é a área de um círculo com 10 cm de diâmetro? (π ≈ 3,14)", opts:["78,5 cm²","314 cm²","31,4 cm²","15,7 cm²"], correct:0, explain:"O raio é 5 cm: 3,14 × 5² = 3,14 × 25 = 78,5 cm²."},
      {q:"Uma circunferência tem 31,4 cm de perímetro. Qual é o raio? (π ≈ 3,14)", opts:["5 cm","10 cm","3,14 cm","15,7 cm"], correct:0, explain:"2 × 3,14 × r = 31,4 → r = 31,4 ÷ 6,28 = 5 cm."},
      {q:"O número π (pi)…", opts:["tem infinitas casas decimais que nunca se repetem em padrão","é exatamente 3,14","é uma fração exata, 22/7","só existe em círculos grandes"], correct:0, explain:"3,14 e 22/7 são aproximações. π é um número irracional: as casas decimais nunca acabam nem se repetem em padrão."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar os números irracionais (como π e √2) e calcular o volume de cilindros, cones e esferas.",
      pontos: [
        "Como é que os antigos calculavam π sem calculadora?",
        "Porque é que as tampas de esgoto costumam ser redondas?",
        "Quantas voltas dá a roda de uma bicicleta para andar 1 km?"
      ],
      links: [
        {s:"khan", q:"área do círculo"},
        {s:"khan", q:"pi"},
        {s:"bitesize", q:"circles"}
      ]
    },
    curiosidades: [
      {t:"Há mais de 2200 anos, Arquimedes mostrou que π fica entre 3 + 10/71 e 3 + 1/7, desenhando polígonos com 96 lados dentro e fora de um círculo.", fonte:"Encyclopaedia Britannica"},
      {t:"O dia 14 de março (3/14, como 3,14) é o Dia Internacional da Matemática, proclamado pela UNESCO e celebrado desde 2020.", fonte:"UNESCO"}
    ]
  },
  n7: {
    desafio: [
      {q:"Quantos cm³ tem 1 litro?", opts:["1000","100","10","10 000"], correct:0, explain:"1 L = 1 dm³ = 10 cm × 10 cm × 10 cm = 1000 cm³."},
      {q:"Um aquário mede 50 cm × 30 cm × 40 cm. Quantos litros leva cheio?", opts:["60 L","600 L","6 L","120 L"], correct:0, explain:"50 × 30 × 40 = 60 000 cm³ = 60 dm³ = 60 L."},
      {q:"Se a aresta de um cubo duplicar, o volume…", opts:["fica 8 vezes maior","fica 2 vezes maior","fica 4 vezes maior","fica 6 vezes maior"], correct:0, explain:"V = a³. Com aresta 2a: (2a)³ = 8a³."},
      {q:"Quantos cubinhos de 1 cm de aresta cabem num cubo de 3 cm de aresta?", opts:["27","9","12","18"], correct:0, explain:"3 × 3 × 3 = 27 cubinhos."},
      {q:"A quantos litros corresponde 1 m³?", opts:["1000 L","100 L","10 L","1 000 000 L"], correct:0, explain:"1 m³ = 1000 dm³ = 1000 L."}
    ],
    explorar: {
      proximo: "Mais à frente vais calcular o volume do cilindro, do cone e da esfera — e descobrir que um cone tem exatamente 1/3 do volume de um cilindro com a mesma base e altura.",
      pontos: [
        "Como medirias o volume de uma pedra com formato irregular?",
        "Porque é que as caixas de cartão são quase sempre paralelepípedos?",
        "Quantos litros de água gastas num banho de chuveiro de 5 minutos?"
      ],
      links: [
        {s:"khan", q:"volume"},
        {s:"bitesize", q:"volume"},
        {u:"https://phet.colorado.edu/pt_BR/simulations/density", n:"PhET — Densidade (simulação com volume e água, Universidade do Colorado)"}
      ]
    },
    curiosidades: [
      {t:"Conta a lenda que Arquimedes percebeu, ao entrar na banheira, que podia medir o volume de um objeto pela água que ele desloca — e terá gritado 'Eureka!' ('Descobri!').", fonte:"Encyclopaedia Britannica"},
      {t:"Uma piscina olímpica tem pelo menos 50 m × 25 m × 2 m: são, no mínimo, 2500 m³ — ou seja, 2,5 milhões de litros de água.", fonte:"World Aquatics (regras de instalações)"}
    ]
  },
  n8: {
    desafio: [
      {q:"Qual é a mediana de 3, 7, 9, 12, 15? (o valor do meio, com os dados ordenados)", opts:["9","7","9,2","12"], correct:0, explain:"Com os 5 valores ordenados, o do meio é o 3.º: 9. (A média seria 9,2.)"},
      {q:"Qual é a amplitude de 4, 9, 2, 11? (o maior menos o menor)", opts:["9","7","11","26"], correct:0, explain:"Maior 11, menor 2: 11 − 2 = 9."},
      {q:"Ao lançar um dado, qual é a probabilidade de sair um número par?", opts:["1/2","1/6","1/3","2/3"], correct:0, explain:"Há 3 números pares (2, 4, 6) em 6 possíveis: 3/6 = 1/2."},
      {q:"Num saco há 3 bolas azuis e 5 vermelhas. Qual é a probabilidade de tirar uma azul?", opts:["3/8","3/5","5/8","1/3"], correct:0, explain:"3 casos favoráveis em 8 bolas: 3/8."},
      {q:"Ao lançar duas moedas, qual é a probabilidade de sair cara nas duas?", opts:["1/4","1/2","1/3","2/4"], correct:0, explain:"Há 4 resultados igualmente possíveis (CC, CK, KC, KK) e só 1 é cara-cara: 1/4."}
    ],
    explorar: {
      proximo: "Mais à frente vais usar a mediana, os quartis e novos gráficos, e calcular probabilidades com mais do que um acontecimento — a base de áreas como a meteorologia e a medicina.",
      pontos: [
        "Porque é que uma média pode enganar? (Pensa num grupo com uma pessoa milionária…)",
        "Como é que a meteorologia calcula a 'probabilidade de chuva'?",
        "Se lançares uma moeda 10 vezes, sai sempre 5 caras e 5 coroas?"
      ],
      links: [
        {s:"khan", q:"probabilidade"},
        {s:"khan", q:"média mediana moda"},
        {s:"bitesize", q:"probability"}
      ]
    },
    curiosidades: [
      {t:"A teoria das probabilidades nasceu em 1654, em cartas trocadas entre os matemáticos franceses Blaise Pascal e Pierre de Fermat sobre como dividir o prémio de um jogo interrompido.", fonte:"Encyclopaedia Britannica"},
      {t:"Numa turma de 23 pessoas, a probabilidade de duas fazerem anos no mesmo dia é de mais de 50%. Chama-se 'paradoxo do aniversário' porque quase toda a gente acha que seria muito menos.", fonte:"Encyclopaedia Britannica"}
    ]
  }
};
