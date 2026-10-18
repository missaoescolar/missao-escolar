/* 🧩 Missão Final — problemas longos que juntam vários mundos, como nas fichas de avaliação.
   Cada problema: contexto, mundos que usa, e partes (a, b, c, d) com pista, resolução passo a passo, resposta e erro comum.
   Todas as contas foram verificadas por cálculo (π ≈ 3,14). Mostra-se um problema de cada vez. */
const MISSAO_FINAL = {
  math: {
    intro: "Seis problemas da vida real que juntam vários mundos, como nas fichas de avaliação. Resolve cada parte no caderno primeiro. Só depois abre a pista ou a resolução.",
    metodo: [
      ["🔎", "Compreender", "Lê duas vezes. Sublinha os dados e o que te perguntam. Faz um desenho ou uma tabela."],
      ["🧭", "Planear", "Que mundo é este? Já resolveste um problema parecido? Escolhe a estratégia."],
      ["✏️", "Resolver", "Escreve cada passo numa linha, com as unidades (€, m, cm², L…)."],
      ["✅", "Verificar", "A resposta faz sentido? Responde à pergunta com uma frase completa."]
    ],
    problemas: [
      {icon:"🚌", titulo:"A visita de estudo", mundos:[1,2,3,4],
       contexto:"A turma do 6.º B tem 24 alunos (8 rapazes e 16 raparigas) e vai visitar um museu de ciência com 3 professores. O bilhete custa 3,50 € por aluno e 6,00 € por adulto. Os grupos com mais de 20 pessoas têm 10% de desconto no preço total. No mapa, à escala 1 : 500 000, a escola fica a 9 cm do museu, e o autocarro anda em média a 60 km/h.",
       partes:[
         {q:"Quanto paga o grupo todo pelos bilhetes, já com o desconto?", dica:"Primeiro o total sem desconto (alunos + professores). Depois tira 10%, ou calcula 90% do total.",
          passos:"Alunos: 24 × 3,50 = 84,00 €<br>Professores: 3 × 6,00 = 18,00 €<br>Total: 84 + 18 = 102,00 €<br>Com 10% de desconto paga-se 90%: 0,90 × 102 = 91,80 €", resposta:"O grupo paga 91,80 €.",
          erro:"Aplicar o desconto só aos alunos, ou tirar 1,02 € (que é 1%, não 10%)."},
         {q:"Os alunos vão ser divididos no maior número possível de grupos iguais: todos com o mesmo número de rapazes e o mesmo número de raparigas. Quantos grupos? Como é cada grupo?", dica:"Procura o maior número que divide 8 e 16 ao mesmo tempo.",
          passos:"Divisores de 8: 1, 2, 4, 8<br>Divisores de 16: 1, 2, 4, 8, 16<br>m.d.c.(8, 16) = 8 (o 8 divide o 16)<br>8 ÷ 8 = 1 rapaz e 16 ÷ 8 = 2 raparigas por grupo", resposta:"8 grupos, cada um com 1 rapaz e 2 raparigas.",
          erro:"Usar o m.m.c. (que dá 16): o m.m.c. serve para «quando voltam a coincidir», o m.d.c. para «dividir em partes iguais»."},
         {q:"Que fração da turma são os rapazes? E qual é a razão entre rapazes e raparigas?", dica:"Fração da turma: rapazes a dividir pelo total. Razão: rapazes para raparigas.",
          passos:"Fração da turma: 8/24 = 1/3 (dividindo por 8)<br>Razão rapazes : raparigas = 8 : 16 = 1 : 2", resposta:"Os rapazes são 1/3 da turma; por cada rapaz há 2 raparigas (razão 1 : 2).",
          erro:"Dizer que os rapazes são 1/2 da turma: 1/2 é a razão rapazes : raparigas, não a fração da turma."},
         {q:"Qual é a distância real até ao museu, em km? Quanto tempo demora a viagem?", dica:"Na escala 1 : 500 000, 1 cm no mapa são 500 000 cm na realidade. Depois converte para km.",
          passos:"9 × 500 000 = 4 500 000 cm<br>4 500 000 cm = 45 000 m = 45 km<br>A 60 km/h, faz 60 km numa hora, ou seja 1 km por minuto<br>45 km → 45 minutos", resposta:"O museu fica a 45 km; a viagem demora cerca de 45 minutos.",
          erro:"Esquecer de converter centímetros para quilómetros (1 km = 100 000 cm)."}
       ]},
      {icon:"🌷", titulo:"O canteiro da escola", mundos:[3,5,6,7],
       contexto:"O canteiro da escola tem a forma de um retângulo de 6 m por 4 m, com um semicírculo encostado ao lado de 4 m (vê o desenho). Usa π ≈ 3,14.",
       svg:'<svg class="poster-svg" viewBox="-22 0 312 172" style="max-width:300px;margin:0 auto" role="img" aria-label="Canteiro: um retângulo de 6 metros por 4 metros e, encostado ao lado de 4 metros, um semicírculo com 4 metros de diâmetro.">'+
           '<path d="M20,20 H200 A60,60 0 0 1 200,140 H20 Z" fill="var(--wc-bg, #eee)" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>'+
           '<line x1="200" y1="20" x2="200" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>'+
           '<g font-family="Lexend, sans-serif" font-size="12" font-weight="700" text-anchor="middle"><text x="110" y="160">6 m</text><text x="14" y="84" text-anchor="end">4 m</text><text x="222" y="84">4 m</text></g></svg>',
       partes:[
         {q:"Qual é a área do canteiro?", dica:"Área do retângulo + metade da área de um círculo. O diâmetro do semicírculo é 4 m, por isso o raio é 2 m.",
          passos:"Retângulo: 6 × 4 = 24 m²<br>Círculo inteiro: π × r² = 3,14 × 2 × 2 = 12,56 m²<br>Semicírculo: 12,56 ÷ 2 = 6,28 m²<br>Total: 24 + 6,28 = 30,28 m²", resposta:"A área é 30,28 m².",
          erro:"Usar o diâmetro (4) como raio, ou esquecer de dividir o círculo por 2."},
         {q:"Quantos metros de vedação são precisos para contornar o canteiro?", dica:"O perímetro é só a linha de fora. O lado tracejado fica por dentro e não conta.",
          passos:"Lados retos de fora: 6 + 4 + 6 = 16 m<br>Circunferência inteira: π × d = 3,14 × 4 = 12,56 m<br>Meia circunferência: 12,56 ÷ 2 = 6,28 m<br>Total: 16 + 6,28 = 22,28 m", resposta:"São precisos 22,28 m de vedação.",
          erro:"Somar também o lado tracejado de 4 m (dá 26,28 m), ou usar a circunferência inteira."},
         {q:"O adubo deve ser posto à razão de 50 g por m² e vende-se em sacos de 500 g. Quantos sacos é preciso comprar?", dica:"Calcula os gramas para a área toda. Depois vê quantos sacos chegam, sem faltar adubo.",
          passos:"30,28 × 50 = 1514 g<br>1514 ÷ 500 = 3,028 sacos<br>3 sacos só dão 1500 g, falta um pouco<br>É preciso arredondar para cima: 4 sacos", resposta:"É preciso comprar 4 sacos.",
          erro:"Arredondar para 3: em problemas de «quantos sacos/autocarros/caixas», arredonda-se para cima quando não pode faltar."},
         {q:"A água da rega vem de um tanque cilíndrico com 0,5 m de raio e 1 m de altura. Quantos litros leva? Se se gastarem 2 L por m² por dia, para quantos dias completos chega?", dica:"Volume do cilindro = π × r² × altura. Lembra-te: 1 m³ = 1000 L.",
          passos:"V = 3,14 × 0,5 × 0,5 × 1 = 0,785 m³ = 785 L<br>Por dia: 30,28 × 2 = 60,56 L<br>785 ÷ 60,56 ≈ 12,96<br>Dias completos: 12", resposta:"O tanque leva 785 L e chega para 12 dias completos.",
          erro:"Esquecer de converter m³ em litros, ou arredondar 12,96 para 13 (ao 13.º dia já falta água)."}
       ]},
      {icon:"🎟️", titulo:"A rifa da feira", mundos:[3,8],
       contexto:"Para a feira da escola, a turma vende 120 rifas a 0,50 € cada. Há 6 rifas com prémio. Os prémios custaram, ao todo, 22,50 €.",
       partes:[
         {q:"Ao comprar uma rifa, qual é a probabilidade de ter prémio? Escreve em fração, em decimal e em percentagem.", dica:"Casos favoráveis a dividir pelos casos possíveis.",
          passos:"Casos favoráveis: 6. Casos possíveis: 120<br>6/120 = 1/20<br>1 ÷ 20 = 0,05 = 5%", resposta:"P(prémio) = 1/20 = 0,05 = 5%.",
          erro:"Fazer 120/6 = 20 (ao contrário): uma probabilidade nunca é maior do que 1."},
         {q:"Se venderem todas as rifas, quanto dinheiro recebem? E quanto lucram?", dica:"Lucro = o que se recebe − o que se gastou.",
          passos:"Recebem: 120 × 0,50 = 60,00 €<br>Lucro: 60,00 − 22,50 = 37,50 €", resposta:"Recebem 60 € e lucram 37,50 €.",
          erro:"Esquecer de descontar o custo dos prémios."},
         {q:"Que percentagem do dinheiro recebido é lucro?", dica:"Divide o lucro pelo que receberam e passa a percentagem.",
          passos:"37,50 ÷ 60 = 0,625<br>0,625 = 62,5%", resposta:"62,5% do dinheiro recebido é lucro.",
          erro:"Dividir 60 por 37,50 (dá 1,6): a parte divide-se pelo todo."},
         {q:"Já se abriram 40 rifas e saíram 2 prémios. Qual é agora a probabilidade de a próxima rifa ter prémio? Mudou?", dica:"Conta as rifas que faltam e os prémios que faltam.",
          passos:"Rifas que faltam: 120 − 40 = 80<br>Prémios que faltam: 6 − 2 = 4<br>4/80 = 1/20 = 5%", resposta:"Continua a ser 1/20 (5%): não mudou.",
          erro:"Achar que «já está na hora» de sair prémio: as rifas não se lembram do que saiu antes."}
       ]},
      {icon:"🏵️", titulo:"O logótipo do clube", mundos:[4,6,9],
       contexto:"O logótipo do clube de Matemática é uma rosácea de 6 pétalas iguais, desenhada dentro de um círculo com 5 cm de raio. Cada pétala é simétrica. Usa π ≈ 3,14.",
       partes:[
         {q:"Qual é o ângulo mínimo de rotação da rosácea? Quantos eixos de simetria tem?", dica:"Numa volta (360°), em quantas posições fica igual?",
          passos:"Fica igual em 6 posições: 360° ÷ 6 = 60°<br>Como as pétalas são simétricas, tem tantos eixos como pétalas: 6", resposta:"Ângulo mínimo de 60° e 6 eixos de simetria.",
          erro:"Dividir 180° por 6 (dá 30°)."},
         {q:"Qual é o perímetro do círculo do logótipo?", dica:"P = 2 × π × r.",
          passos:"P = 2 × 3,14 × 5 = 31,4 cm", resposta:"O perímetro é 31,4 cm.",
          erro:"Usar π × r (falta multiplicar por 2) ou confundir com a área."},
         {q:"Para uma bandeira, o logótipo é ampliado 3 vezes (raio de 15 cm). O perímetro fica 3 vezes maior. E a área do círculo?", dica:"Calcula as duas áreas com A = π × r² e compara-as.",
          passos:"Área pequena: 3,14 × 5 × 5 = 78,5 cm²<br>Área grande: 3,14 × 15 × 15 = 706,5 cm²<br>706,5 ÷ 78,5 = 9", resposta:"O perímetro passa a 94,2 cm (3 vezes), mas a área fica 9 vezes maior (3 × 3).",
          erro:"Pensar que a área também triplica: o raio entra duas vezes na fórmula da área."},
         {q:"Para desenhar o logótipo, roda-se a primeira pétala 60° de cada vez. Quantas rotações são precisas para desenhar as outras pétalas?", dica:"Já tens uma pétala desenhada.",
          passos:"Faltam 6 − 1 = 5 pétalas<br>5 rotações de 60° = 300°<br>(A 6.ª rotação, a 360°, cairia em cima da primeira)", resposta:"5 rotações de 60°.",
          erro:"Responder 6: a sexta rotação volta à pétala do início."}
       ]},
      {icon:"🦠", titulo:"As bactérias que se dividem", mundos:[1,4],
       contexto:"Em condições ideais, algumas bactérias dividem-se em duas a cada 20 minutos. Às 9h00 há 1 bactéria num tubo de ensaio.",
       partes:[
         {q:"Quantas bactérias há às 10h00? Escreve como uma potência.", dica:"Numa hora há 3 períodos de 20 minutos. Em cada um, o número duplica.",
          passos:"9h20 → 2; 9h40 → 4; 10h00 → 8<br>8 = 2 × 2 × 2 = 2³", resposta:"Às 10h00 há 2³ = 8 bactérias.",
          erro:"Fazer 2 × 3 = 6: duplicar 3 vezes é 2³, não 2 × 3."},
         {q:"E às 11h00?", dica:"Das 9h00 às 11h00 há quantos períodos de 20 minutos?",
          passos:"2 horas = 6 períodos de 20 minutos<br>2⁶ = 64", resposta:"Às 11h00 há 2⁶ = 64 bactérias.",
          erro:"Fazer 8 + 8 = 16: a segunda hora parte de 8 bactérias e multiplica por 8, não soma 8."},
         {q:"Quantas vezes há mais bactérias às 11h00 do que às 10h00? Usa as regras das potências.", dica:"Divide as duas potências: têm a mesma base.",
          passos:"2⁶ ÷ 2³ = 2⁶⁻³ = 2³ = 8", resposta:"Há 8 vezes mais.",
          erro:"Fazer 2⁶ ÷ 2³ = 2² (dividir os expoentes): com a mesma base, subtraem-se os expoentes."},
         {q:"A sequência 1, 2, 4, 8, … continua sempre a duplicar. Qual é o 10.º termo?", dica:"O 1.º termo é 2⁰ = 1, o 2.º é 2¹, o 3.º é 2²… Qual é o expoente do 10.º?",
          passos:"O termo de ordem n é 2ⁿ⁻¹<br>10.º termo: 2⁹ = 512", resposta:"O 10.º termo é 2⁹ = 512.",
          erro:"Fazer 2¹⁰ = 1024: o expoente é sempre uma unidade menor do que a ordem."}
       ]},
      {icon:"🥞", titulo:"Panquecas para a turma", mundos:[2,3,4],
       contexto:"Uma receita de panquecas para 4 pessoas leva 200 g de farinha, 3/4 L de leite e 2 ovos. A turma quer fazer panquecas para 26 pessoas.",
       partes:[
         {q:"Que quantidade de cada ingrediente é precisa?", dica:"26 pessoas são quantas vezes 4 pessoas? Multiplica cada ingrediente por esse número.",
          passos:"26 ÷ 4 = 6,5 vezes a receita<br>Farinha: 200 × 6,5 = 1300 g<br>Leite: 3/4 × 6,5 = 0,75 × 6,5 = 4,875 L<br>Ovos: 2 × 6,5 = 13", resposta:"1300 g de farinha, 4,875 L de leite e 13 ovos.",
          erro:"Somar 22 a cada ingrediente (26 − 4): numa proporção multiplica-se, não se soma."},
         {q:"A farinha vende-se em pacotes de 1 kg e o leite em garrafas de 1 L. Quantos pacotes e quantas garrafas?", dica:"1 kg = 1000 g. Não pode faltar nada!",
          passos:"1300 g = 1,3 kg → 2 pacotes<br>4,875 L → 5 garrafas", resposta:"2 pacotes de farinha e 5 garrafas de leite.",
          erro:"Comprar só 1 pacote ou 4 garrafas: falta ingrediente."},
         {q:"A massa feita dá 6 litros e cada panqueca leva 1/8 de litro. Chega para 2 panquecas por pessoa?", dica:"Quantas vezes cabe 1/8 em 6? Dividir por 1/8 é multiplicar por 8.",
          passos:"6 ÷ 1/8 = 6 × 8 = 48 panquecas<br>2 por pessoa: 26 × 2 = 52 panquecas<br>48 < 52", resposta:"Não chega: dá 48 panquecas e eram precisas 52 (faltam 4).",
          erro:"Fazer 6 ÷ 8 = 0,75: dividir por uma fração própria dá um número maior."},
         {q:"A farinha custa 1,20 € por pacote, o leite 0,90 € por garrafa e os ovos 0,25 € cada. Quanto custa tudo? E por pessoa (arredonda ao cêntimo)?", dica:"Multiplica cada preço pela quantidade comprada (pacotes e garrafas inteiros).",
          passos:"Farinha: 2 × 1,20 = 2,40 €<br>Leite: 5 × 0,90 = 4,50 €<br>Ovos: 13 × 0,25 = 3,25 €<br>Total: 2,40 + 4,50 + 3,25 = 10,15 €<br>Por pessoa: 10,15 ÷ 26 ≈ 0,39 €", resposta:"Custa 10,15 €, cerca de 0,39 € por pessoa.",
          erro:"Usar 1,3 pacotes de farinha no custo: paga-se o pacote inteiro."}
       ]}
    ]
  }
};
