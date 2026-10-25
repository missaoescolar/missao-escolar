/* Matemática do 3.º ano (1.º ciclo). Aprendizagens Essenciais de Matemática (2021), 3.º ano.
   Os mundos estão organizados por tema; cada um indica as fichas do caderno de fichas do 3.º ano que treinam o mesmo
   (o caderno volta aos mesmos temas várias vezes ao longo do ano). Conteúdo original: o caderno serve só de referência.
   Linguagem para crianças de 8 anos: frases curtas, um passo de cada vez.
   Perguntas: pista (só a pedido) e irma (uma pergunta parecida depois de um erro), como no 6.º ano.
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const MAT3_WORLDS = (function(){
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
    id:"t1", num:1, c:"m1", icon:"🏙️",
    title:"Cidade dos Números",
    subtitle:"Números naturais até 10 000", pages:"caderno de fichas: F2, F8, F13, F23, F24, F33 e F43 (pp. 5–87)",
    lead:"Num jogo de construção, os blocos juntam-se em grupos de 10: 10 unidades fazem uma dezena, 10 dezenas fazem uma centena e 10 centenas fazem um milhar. Neste mundo vais ler, escrever, decompor, comparar e arredondar números até 10 000.",
    missions:[
      {t:"Blocos de Valor", d:"Unidades, dezenas, centenas e milhares", f:"Escolhe 4 números entre 1000 e 9999.\nPara cada um, desenha uma tabela com as colunas M, C, D e U e escreve cada algarismo na sua coluna.\nEscreve o número por extenso.\nVerifica: lê os números em voz alta a um adulto.", xp:10},
      {t:"Decompor como um Construtor", d:"Decompor números de várias maneiras", f:"Decompõe 3528 de 3 maneiras diferentes, por exemplo 3000 + 500 + 20 + 8 e 35 centenas + 28 unidades.\nFaz o mesmo com 6070.\nVerifica: soma as partes e tens de voltar ao número.", xp:10},
      {t:"Quem Tem Mais?", d:"Comparar e ordenar números", f:"Escreve 6 números de 4 algarismos em cartões.\nOrdena-os do menor para o maior e escreve-os com o sinal <.\nVerifica: compara primeiro os milhares; se forem iguais, as centenas; e assim por diante.", xp:10},
      {t:"Arredondar o Placar", d:"Arredondar à dezena e à centena", f:"Escolhe 5 pontuações de um jogo (ou inventa-as), por exemplo 2347.\nArredonda cada uma à dezena e à centena mais próximas.\nVerifica: desenha a reta numérica entre as duas centenas e vê de qual está mais perto.", xp:10},
      {t:"A Fila do Parque", d:"Números ordinais até ao 100.º", f:"Escreve por extenso: 11.º, 20.º, 35.º, 50.º, 99.º e 100.º.\nImagina uma fila de 25 pessoas: diz quem é o 1.º, o 13.º e o último.\nVerifica: o último de 25 é o 25.º (vigésimo quinto).", xp:10},
      {t:"Par ou Ímpar?", d:"Números pares e ímpares", f:"Escreve 10 números de 4 algarismos e separa-os em pares e ímpares.\nVerifica: só precisas de olhar para o algarismo das unidades (0, 2, 4, 6 ou 8 é par).", xp:10}
    ],
    resumo:[
      "Os números escrevem-se com 10 <b>algarismos</b>: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9. O <b>valor</b> de cada algarismo depende da <b>posição</b>: em 3528, o 3 vale 3000, o 5 vale 500, o 2 vale 20 e o 8 vale 8.",
      "<b>10 unidades = 1 dezena</b>; <b>10 dezenas = 1 centena</b>; <b>10 centenas = 1 milhar</b>; 10 milhares = 10 000 (dez mil).",
      "Um número pode <b>decompor-se</b> de várias maneiras: 3528 = 3000 + 500 + 20 + 8 = 35 centenas + 2 dezenas + 8 unidades.",
      "Para <b>comparar</b>, olha primeiro para os milhares; se forem iguais, para as centenas; depois para as dezenas; e por fim para as unidades. 4099 &lt; 4100. Os sinais: &lt; quer dizer «é menor do que» e &gt; quer dizer «é maior do que».",
      "<b>Arredondar</b> é trocar um número por outro «redondo» que está perto. À centena: 2347 fica 2300, porque o algarismo das dezenas (4) é menor do que 5. Se for 5 ou mais, arredonda-se para cima: 2350 fica 2400.",
      "Os <b>números ordinais</b> dizem a posição: 1.º (primeiro), 10.º (décimo), 20.º (vigésimo), 30.º (trigésimo), 50.º (quinquagésimo), 100.º (centésimo).",
      "Um número é <b>par</b> se o algarismo das unidades for 0, 2, 4, 6 ou 8; caso contrário, é <b>ímpar</b>."
    ],
    gloss:[
      ["algarismo","Cada um dos 10 símbolos com que se escrevem os números: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9."],
      ["valor posicional","O valor que um algarismo tem por causa do lugar onde está: em 52, o 5 vale 50."],
      ["milhar","Um grupo de 1000 unidades, ou 10 centenas."],
      ["decompor","Separar um número em partes: 3528 = 3000 + 500 + 20 + 8."],
      ["arredondar","Trocar um número por um número «redondo» que está perto: 2347 é quase 2300."],
      ["número ordinal","Um número que diz a posição numa ordem: primeiro, segundo, vigésimo, centésimo."]
    ],
    quiz:[
      {q:"No número 7385, quanto vale o algarismo 3?", opts:["300","3","30","3000"], correct:0, explain:"O 3 está na coluna das centenas, por isso vale 3 centenas = 300. O 7 vale 7000, o 8 vale 80 e o 5 vale 5.", pista:"Escreve o número numa tabela com as colunas M, C, D e U.", irma:{q:"No número 4627, quanto vale o algarismo 6?", opts:["600","6","60","6000"], correct:0, explain:"O 6 está na coluna das centenas: vale 600."}},
      {q:"Como se escreve «cinco mil e quarenta»?", opts:["5040","5400","540","50 040"], correct:0, explain:"5 milhares, 0 centenas, 4 dezenas e 0 unidades: 5040. O 5400 seria «cinco mil e quatrocentos».", pista:"Tem centenas? Se não tem nenhuma, escreve 0 nessa coluna.", irma:{q:"Como se escreve «três mil e oito»?", opts:["3008","3080","308","3800"], correct:0, explain:"3 milhares, 0 centenas, 0 dezenas e 8 unidades: 3008. Os zeros guardam o lugar das colunas vazias."}},
      {q:"Qual é maior: 4099 ou 4100?", opts:["4100","4099, porque tem mais noves","São iguais"], correct:0, explain:"Os milhares são iguais (4). Nas centenas, 4100 tem 1 e 4099 tem 0. Por isso 4100 > 4099. Ter muitos noves não chega: o que conta é a posição.", pista:"Compara coluna a coluna, da esquerda para a direita.", irma:{q:"Qual é maior: 2999 ou 3001?", opts:["3001","2999, porque tem mais noves","São iguais"], correct:0, explain:"Compara os milhares: 3 é mais do que 2. Já não é preciso olhar para o resto: 3001 > 2999."}},
      {q:"Quanto é 2347 arredondado à centena?", opts:["2300","2400","2350","2000"], correct:0, explain:"2347 está entre 2300 e 2400. O algarismo das dezenas é 4, menor do que 5, por isso fica mais perto de 2300.", pista:"Entre que duas centenas está? E de qual está mais perto?", irma:{q:"Quanto é 5682 arredondado à centena?", opts:["5700","5600","5680","6000"], correct:0, explain:"5682 está entre 5600 e 5700. O algarismo das dezenas é 8 (5 ou mais), por isso arredonda-se para cima: 5700."}},
      {q:"Qual destas decomposições dá 3528?", opts:["3000 + 500 + 20 + 8","3000 + 50 + 20 + 8","300 + 500 + 28","3 + 5 + 2 + 8"], correct:0, explain:"3 milhares (3000) + 5 centenas (500) + 2 dezenas (20) + 8 unidades = 3528. As outras não respeitam o valor de cada posição.", pista:"Quanto vale cada algarismo de 3528?"},
      {q:"Na fila para a montanha-russa, o Rui está em 20.º lugar. Como se lê 20.º?", opts:["vigésimo","vintésimo","segundo","duodécimo"], correct:0, explain:"20.º lê-se «vigésimo». O duodécimo é o 12.º e o segundo é o 2.º."},
      {q:"Qual destes números é par?", opts:["5678","4321","7005","9999"], correct:0, explain:"Basta olhar para as unidades: 8 é par, por isso 5678 é par. Os outros acabam em 1, 5 e 9, que são ímpares.", pista:"Olha só para o último algarismo."},
      {q:"Num jogo, a Rita tem 3 caixas de 1000 blocos, 4 caixas de 100 e 7 blocos soltos. Quantos blocos tem?", opts:["3407","3470","347","3047"], correct:0, explain:"3 milhares, 4 centenas, 0 dezenas e 7 unidades: 3407. Não há dezenas, por isso escreve-se 0 nessa coluna.", pista:"Escreve cada grupo na sua coluna: M, C, D e U.", irma:{q:"Um construtor tem 6 caixas de 1000 tijolos, 2 caixas de 10 e 5 tijolos soltos. Quantos tijolos tem?", opts:["6025","625","6250","6205"], correct:0, explain:"6 milhares, 0 centenas, 2 dezenas e 5 unidades: 6025."}}
    ],
    posters:[
      EX("🔢 Exemplo 1 — Ler e decompor 6070", "ler o número 6070 e dizer quanto vale cada algarismo.", "escreve o número numa tabela: M | C | D | U.",
        ["M = 6, C = 0, D = 7, U = 0", "6070 = 6000 + 70", "Lê-se: «seis mil e setenta»."],
        "6070 = 6 milhares + 7 dezenas, «seis mil e setenta».", "6000 + 70 = 6070 ✓. Os zeros guardam o lugar das centenas e das unidades: sem eles ficava 67."),
      EX("🎯 Exemplo 2 — Arredondar 4651", "arredondar 4651 à dezena e à centena.", "para cada caso, vê entre que dois números «redondos» está o 4651.",
        ["À dezena: está entre 4650 e 4660. As unidades são 1 (menos do que 5): fica 4650.", "À centena: está entre 4600 e 4700. As dezenas são 5 (5 ou mais): fica 4700."],
        "4651 é quase 4650 (à dezena) e quase 4700 (à centena).", "desenha a reta de 4600 a 4700: o 4651 está logo a seguir ao meio (4650), por isso fica mais perto de 4700 ✓.")
    ],
    compare:{
      left:{title:"🔢 Algarismo", points:["É um dos 10 símbolos, de 0 a 9","O 3 é sempre o mesmo símbolo","Ex.: 3528 tem 4 algarismos"]},
      right:{title:"📍 Valor do algarismo", points:["Depende da posição em que está","Em 3528 o 3 vale 3000; em 53 vale 3","Muda de coluna, muda de valor"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F11 (p. 23) e F48 (p. 97)"
  },
  {
    id:"t2", num:2, c:"m2", icon:"🧠",
    title:"Contas de Cabeça e no Papel",
    subtitle:"Adição e subtração: cálculo mental e algoritmos", pages:"caderno de fichas: F4, F7, F14, F15, F20, F25, F34 e F38 (pp. 9–77)",
    lead:"Os melhores jogadores não contam bloco a bloco: juntam grupos e usam atalhos. Neste mundo vais aprender estratégias de cálculo mental e as contas em pé (os algoritmos) da adição e da subtração, com e sem transporte.",
    missions:[
      {t:"Atalhos de Cálculo", d:"Estratégias de cálculo mental", f:"Calcula de cabeça e escreve como pensaste: 38 + 25, 99 + 46, 120 − 35 e 500 − 198.\nUsa uma estratégia diferente em cada uma (decompor, arredondar e compensar, contar a partir de).\nVerifica com a conta em pé.", xp:10},
      {t:"Pares Amigos", d:"Números que somam 10, 100 e 1000", f:"Escreve 5 pares que somam 100 (ex.: 37 + 63) e 5 que somam 1000 (ex.: 450 + 550).\nVerifica: junta as unidades, depois as dezenas, depois as centenas.", xp:10},
      {t:"Conta em Pé", d:"Algoritmo da adição com transporte", f:"Faz em pé: 456 + 278, 1385 + 2647 e 2908 + 1096.\nAlinha as unidades debaixo das unidades.\nVerifica: estima antes (arredonda às centenas) e vê se o resultado está perto.", xp:10},
      {t:"Subtrair com Troca", d:"Algoritmo da subtração com reagrupamento", f:"Faz em pé: 732 − 458, 5000 − 1234 e 4205 − 1387.\nVerifica: soma o resultado com o número que tiraste; tens de voltar ao primeiro número.", xp:10},
      {t:"Problemas do Inventário", d:"Juntar, acrescentar, tirar e comparar", f:"Inventa 2 problemas com o teu jogo preferido: um de juntar e um de comparar («quantos a mais?»).\nResolve-os e explica que conta escolheste e porquê.", xp:10}
    ],
    resumo:[
      "<b>Adição</b>: juntar ou acrescentar. Os números que se somam são as <b>parcelas</b> e o resultado é a <b>soma</b>. A ordem das parcelas não muda a soma: 25 + 38 = 38 + 25.",
      "<b>Subtração</b>: tirar, comparar («quantos a mais?») ou completar («quanto falta?»). O resultado é a <b>diferença</b>.",
      "<b>Estratégias de cálculo mental</b>: decompor (38 + 25 = 30 + 20 + 8 + 5 = 63); arredondar e compensar (99 + 46 = 100 + 46 − 1 = 145); contar a partir do maior; usar pares amigos que somam 10 ou 100.",
      "No <b>algoritmo</b> (a conta em pé), alinha unidades com unidades, dezenas com dezenas, e começa pela direita. Na adição, quando uma coluna dá 10 ou mais, passa 1 para a coluna seguinte (o <b>transporte</b>).",
      "Na subtração com <b>reagrupamento</b>, quando o algarismo de cima é menor, troca-se 1 dezena por 10 unidades (ou 1 centena por 10 dezenas) da coluna à esquerda.",
      "A adição e a subtração são <b>operações inversas</b>: se 732 − 458 = 274, então 274 + 458 = 732. É assim que se verifica uma subtração.",
      "Antes de calcular, <b>estima</b>: 456 + 278 é perto de 450 + 300 = 750. Se a conta der 1734, há um erro."
    ],
    gloss:[
      ["parcela","Cada um dos números que se somam numa adição."],
      ["soma","O resultado de uma adição."],
      ["diferença","O resultado de uma subtração."],
      ["algoritmo","Uma maneira organizada de fazer uma conta, passo a passo, como a conta em pé."],
      ["transporte","O 1 que passa para a coluna seguinte quando uma coluna dá 10 ou mais."],
      ["reagrupamento","Trocar 1 dezena por 10 unidades (ou 1 centena por 10 dezenas) para conseguir subtrair."],
      ["estimativa","Um resultado aproximado, calculado de cabeça com números «redondos»."]
    ],
    quiz:[
      {q:"Quanto é 38 + 25?", opts:["63","53","513","73"], correct:0, explain:"30 + 20 = 50 e 8 + 5 = 13; 50 + 13 = 63. O 53 esquece o 10 que vem de 8 + 5; o 513 escreve o 5 e o 13 lado a lado.", pista:"Junta as dezenas, depois as unidades, e no fim junta tudo.", irma:{q:"Quanto é 47 + 36?", opts:["83","73","713","93"], correct:0, explain:"40 + 30 = 70 e 7 + 6 = 13; 70 + 13 = 83."}},
      {q:"Qual é a maneira mais rápida de calcular 99 + 46?", opts:["100 + 46 − 1","99 + 40 + 60","90 + 40 + 9 + 6 + 1","Contar 46 vezes a partir de 99"], correct:0, explain:"99 está a 1 de 100. Soma 100 (é fácil) e tira o 1 que puseste a mais: 146 − 1 = 145.", pista:"99 está muito perto de que número «redondo»?"},
      {q:"Quanto é 456 + 278?", opts:["734","624","7134","634"], correct:0, explain:"Unidades: 6 + 8 = 14, fica 4 e vai 1. Dezenas: 5 + 7 + 1 = 13, fica 3 e vai 1. Centenas: 4 + 2 + 1 = 7. Resultado: 734. O 624 esquece os transportes.", pista:"Começa pelas unidades. Se der 10 ou mais, passa 1 para a coluna seguinte.", irma:{q:"Quanto é 367 + 285?", opts:["652","542","5412","552"], correct:0, explain:"7 + 5 = 12, fica 2 e vai 1; 6 + 8 + 1 = 15, fica 5 e vai 1; 3 + 2 + 1 = 6. Resultado: 652. O 542 esquece os transportes."}},
      {q:"Quanto é 732 − 458?", opts:["274","326","384","284"], correct:0, explain:"Unidades: 2 − 8 não dá; troca 1 dezena: 12 − 8 = 4. Dezenas: ficaram 2; 2 − 5 não dá; troca 1 centena: 12 − 5 = 7. Centenas: ficaram 6; 6 − 4 = 2. Resultado: 274. O 326 tira sempre o algarismo menor ao maior em cada coluna.", pista:"No fim, verifica: o resultado + 458 tem de dar 732.", irma:{q:"Quanto é 541 − 276?", opts:["265","335","375","275"], correct:0, explain:"1 − 6 não dá: 11 − 6 = 5. Ficam 3 dezenas: 3 − 7 não dá: 13 − 7 = 6. Ficam 4 centenas: 4 − 2 = 2. Resultado: 265. Verifica: 265 + 276 = 541."}},
      {q:"O Tiago tem 1250 blocos e a Inês tem 980. Quantos blocos tem o Tiago a mais?", opts:["270","2230","370","1270"], correct:0, explain:"Comparar é subtrair: 1250 − 980 = 270. Também podes completar: de 980 a 1000 são 20; de 1000 a 1250 são 250; 20 + 250 = 270. O 2230 é a soma, que responde a «quantos têm os dois juntos?».", pista:"«Quantos a mais?» resolve-se com uma subtração.", irma:{q:"Num jogo, a equipa azul fez 830 pontos e a vermelha 560. Quantos pontos fez a azul a mais?", opts:["270","1390","330","370"], correct:0, explain:"830 − 560 = 270. Ou completa: de 560 a 600 são 40, de 600 a 830 são 230; 40 + 230 = 270."}},
      {q:"Qual é a melhor estimativa para 498 + 303?", opts:["800","700","900","8000"], correct:0, explain:"498 é quase 500 e 303 é quase 300: 500 + 300 = 800. (O resultado exato é 801.)"},
      {q:"Quanto falta a 650 para chegar a 1000?", opts:["350","450","1650","250"], correct:0, explain:"De 650 a 700 são 50; de 700 a 1000 são 300; 50 + 300 = 350. Verifica: 650 + 350 = 1000.", pista:"Conta para a frente: primeiro até 700, depois até 1000."},
      {q:"Como se verifica que 5000 − 1234 = 3766?", opts:["Calculando 3766 + 1234 e vendo se dá 5000","Calculando 5000 + 1234","Calculando 3766 − 1234","Não se pode verificar"], correct:0, explain:"A adição é a operação inversa da subtração: 3766 + 1234 = 5000 ✓."}
    ],
    posters:[
      EX("➕ Exemplo 1 — Conta em pé: 1385 + 2647", "a soma de 1385 e 2647.", "escreve um número por baixo do outro, com as unidades alinhadas.",
        ["Unidades: 5 + 7 = 12 → escreve 2 e vai 1", "Dezenas: 8 + 4 + 1 = 13 → escreve 3 e vai 1", "Centenas: 3 + 6 + 1 = 10 → escreve 0 e vai 1", "Milhares: 1 + 2 + 1 = 4"],
        "1385 + 2647 = 4032.", "estima: 1400 + 2600 = 4000. O resultado 4032 está perto ✓."),
      EX("➖ Exemplo 2 — Subtrair com zeros: 5000 − 1234", "a diferença entre 5000 e 1234.", "não há unidades, dezenas nem centenas para tirar. Troca: 5000 = 4 milhares + 9 centenas + 9 dezenas + 10 unidades.",
        ["Unidades: 10 − 4 = 6", "Dezenas: 9 − 3 = 6", "Centenas: 9 − 2 = 7", "Milhares: 4 − 1 = 3"],
        "5000 − 1234 = 3766.", "3766 + 1234 = 5000 ✓.")
    ],
    compare:{
      left:{title:"➕ Adição", points:["Juntar ou acrescentar","Parcelas e soma","Pode trocar-se a ordem: 25 + 38 = 38 + 25"]},
      right:{title:"➖ Subtração", points:["Tirar, comparar ou completar","Diferença","Não se pode trocar a ordem: 38 − 25 não é 25 − 38"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F17 (p. 35) e F41 (p. 83)"
  },
  {
    id:"t3", num:3, c:"m3", icon:"✖️",
    title:"Fábrica de Tabuadas",
    subtitle:"Multiplicação e tabuadas do 6, 7, 8 e 9", pages:"caderno de fichas: F9, F19, F35, F45 e F49 (pp. 19–99)",
    lead:"Multiplicar é somar grupos iguais de uma só vez: 4 baús com 6 diamantes cada são 4 × 6 = 24 diamantes. Neste mundo vais descobrir as tabuadas do 6, do 7, do 8 e do 9 a partir das que já sabes, contar combinações e multiplicar por 10, 100 e 1000.",
    missions:[
      {t:"Grupos Iguais", d:"O que é multiplicar", f:"Desenha 3 situações com grupos iguais (ex.: 5 caixas com 4 ovos).\nPara cada uma escreve a adição repetida e a multiplicação: 4 + 4 + 4 + 4 + 4 = 5 × 4 = 20.\nVerifica contando os elementos do desenho.", xp:10},
      {t:"Tabuadas a Partir das Outras", d:"Tabuadas do 6 e do 8", f:"Escreve a tabuada do 3 e, ao lado, o dobro de cada resultado: tens a tabuada do 6.\nFaz o mesmo com a do 4 para obter a do 8.\nVerifica: 6 × 7 = 42 e 8 × 7 = 56.", xp:10},
      {t:"O Truque do 9", d:"Tabuadas do 9 e do 7", f:"Escreve a tabuada do 9. Repara: as dezenas sobem 1, as unidades descem 1 e os dois algarismos somam sempre 9.\nPara a do 7, usa 5 + 2: 7 × 6 = 5 × 6 + 2 × 6.\nVerifica 3 resultados com um adulto.", xp:10},
      {t:"Roupas da Personagem", d:"Contar combinações", f:"Escolhe 3 chapéus e 4 camisolas para uma personagem.\nFaz uma tabela ou um diagrama de árvore com todas as combinações.\nVerifica: são 3 × 4 = 12 combinações.", xp:10},
      {t:"Zeros Mágicos", d:"Multiplicar por 10, 100 e 1000", f:"Calcula 7 × 10, 7 × 100, 7 × 1000, 45 × 10 e 45 × 100.\nExplica numa frase o que acontece aos algarismos.\nVerifica com a tabela M C D U: cada algarismo anda uma coluna para a esquerda por cada zero.", xp:10}
    ],
    resumo:[
      "<b>Multiplicar</b> é somar parcelas iguais: 4 × 6 = 6 + 6 + 6 + 6 = 24. Os números que se multiplicam são os <b>fatores</b> e o resultado é o <b>produto</b>.",
      "A ordem dos fatores não muda o produto: 4 × 6 = 6 × 4. Um retângulo de 4 filas com 6 quadrados tem tantos quadrados como 6 filas de 4.",
      "<b>Tabuada do 6</b> = o dobro da do 3. <b>Tabuada do 8</b> = o dobro da do 4. <b>Tabuada do 9</b> = a do 10 menos uma vez o número (9 × 7 = 70 − 7 = 63).",
      "<b>Tabuada do 7</b>: decompõe o 7 em 5 + 2 (7 × 8 = 5 × 8 + 2 × 8 = 40 + 16 = 56).",
      "<b>Combinações</b>: com 3 chapéus e 4 camisolas há 3 × 4 = 12 maneiras diferentes de vestir uma personagem. Uma tabela ou um diagrama de árvore ajuda a contar sem esquecer nenhuma.",
      "<b>Multiplicar por 10, 100 e 1000</b>: cada algarismo passa para uma posição 10, 100 ou 1000 vezes maior, e à direita escrevem-se 1, 2 ou 3 zeros. 45 × 100 = 4500.",
      "Qualquer número multiplicado por 1 dá o próprio número; multiplicado por 0 dá 0."
    ],
    gloss:[
      ["fator","Cada um dos números que se multiplicam."],
      ["produto","O resultado de uma multiplicação."],
      ["dobro","Duas vezes um número: o dobro de 7 é 14."],
      ["tabuada","A lista das multiplicações de um número por 1, 2, 3… até 10."],
      ["combinação","Uma maneira de juntar uma coisa de um grupo com uma coisa de outro grupo."],
      ["diagrama de árvore","Um desenho com ramos que mostra todas as combinações possíveis."]
    ],
    quiz:[
      {q:"Quanto é 6 × 7?", opts:["42","36","48","13"], correct:0, explain:"6 × 7 é o dobro de 3 × 7 = 21: 21 + 21 = 42. O 13 é 6 + 7, uma soma e não uma multiplicação.", pista:"Calcula 3 × 7 e depois o dobro.", irma:{q:"Quanto é 6 × 8?", opts:["48","42","56","14"], correct:0, explain:"3 × 8 = 24 e o dobro é 48."}},
      {q:"Quanto é 8 × 7?", opts:["56","54","63","15"], correct:0, explain:"8 × 7 é o dobro de 4 × 7 = 28: 28 + 28 = 56. Ou: 5 × 8 + 2 × 8 = 40 + 16 = 56.", pista:"Calcula 4 × 7 e depois o dobro.", irma:{q:"Quanto é 8 × 9?", opts:["72","81","64","17"], correct:0, explain:"4 × 9 = 36 e o dobro é 72. Ou: 10 × 8 − 8 = 80 − 8 = 72."}},
      {q:"Quanto é 9 × 6?", opts:["54","56","45","15"], correct:0, explain:"10 × 6 = 60, menos uma vez o 6: 60 − 6 = 54. Os algarismos 5 e 4 somam 9, como em toda a tabuada do 9. O 45 troca os algarismos (é 9 × 5).", pista:"Faz 10 × 6 e tira 6.", irma:{q:"Quanto é 9 × 8?", opts:["72","81","63","17"], correct:0, explain:"10 × 8 = 80, menos 8: 72. E 7 + 2 = 9 ✓."}},
      {q:"Há 5 baús com 7 esmeraldas em cada um. Quantas esmeraldas há?", opts:["35","12","57","30"], correct:0, explain:"5 grupos de 7: 5 × 7 = 35. O 12 é 5 + 7: junta o número de baús com as esmeraldas de um só baú.", pista:"São grupos iguais: quantos grupos, e quantos em cada um?", irma:{q:"Há 4 caixas com 9 lápis em cada uma. Quantos lápis há?", opts:["36","13","49","32"], correct:0, explain:"4 grupos de 9: 4 × 9 = 36."}},
      {q:"Uma personagem pode usar 3 capacetes e 4 armaduras. Quantas combinações diferentes há?", opts:["12","7","3","4"], correct:0, explain:"Cada capacete pode ir com cada uma das 4 armaduras: 3 × 4 = 12. O 7 é 3 + 4: soma em vez de combinar.", pista:"Faz uma tabela: capacetes nas linhas e armaduras nas colunas. Quantas casas tem?", irma:{q:"Há 2 tipos de pão e 5 recheios. Quantas sanduíches diferentes se fazem com 1 pão e 1 recheio?", opts:["10","7","5","25"], correct:0, explain:"Cada pão pode levar cada um dos 5 recheios: 2 × 5 = 10."}},
      {q:"Quanto é 45 × 100?", opts:["4500","450","45 000","4510"], correct:0, explain:"Multiplicar por 100 faz cada algarismo andar 2 colunas para a esquerda: 45 passa a 4500. À direita escrevem-se 2 zeros.", pista:"Quantos zeros tem o 100?"},
      {q:"Qual destas contas tem o mesmo resultado que 7 × 4?", opts:["4 × 7","7 + 4","7 × 7","4 + 4 + 4"], correct:0, explain:"A ordem dos fatores não muda o produto: 7 × 4 = 4 × 7 = 28."},
      {q:"Quanto é 7 × 1000?", opts:["7000","700","70 000","1007"], correct:0, explain:"× 1000: escrevem-se 3 zeros à direita. 7 unidades passam a 7 milhares: 7000."}
    ],
    posters:[
      EX("✖️ Exemplo 1 — 7 × 8 sem saber de cor", "o resultado de 7 × 8, a partir de tabuadas mais fáceis.", "decompõe o 7 em 5 + 2.",
        ["5 × 8 = 40 (metade de 10 × 8)", "2 × 8 = 16 (o dobro de 8)", "Junta: 40 + 16 = 56"],
        "7 × 8 = 56.", "8 × 7 é o dobro de 4 × 7: 28 + 28 = 56 ✓."),
      EX("🌳 Exemplo 2 — Combinações com um diagrama de árvore", "quantos lanches diferentes há com 3 frutas (maçã, pera, banana) e 2 bebidas (leite, sumo).", "desenha 3 ramos, um por fruta.",
        ["De cada fruta, desenha 2 ramos: leite e sumo.", "Conta as pontas: maçã-leite, maçã-sumo, pera-leite, pera-sumo, banana-leite, banana-sumo."],
        "6 lanches diferentes, ou seja, 3 × 2 = 6.", "cada fruta aparece 2 vezes e cada bebida 3 vezes ✓.")
    ],
    compare:{
      left:{title:"➕ Adição repetida", points:["6 + 6 + 6 + 6","Mais lenta, com muitos números","Ajuda a perceber o que é multiplicar"]},
      right:{title:"✖️ Multiplicação", points:["4 × 6","Mais rápida, numa só conta","Usa as tabuadas"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F21 (p. 43) e F36 (p. 73)"
  },
  {
    id:"t4", num:4, c:"m4", icon:"➗",
    title:"Partilhas Justas",
    subtitle:"Divisão: partilhar e agrupar", pages:"caderno de fichas: F29, F40 e F44 (pp. 59, 81 e 89)",
    lead:"Num jogo de equipa, o tesouro divide-se por todos em partes iguais. Dividir é isso: partilhar em partes iguais, ou ver quantos grupos iguais cabem. Neste mundo vais dividir, usar as tabuadas para dividir depressa e perceber o que é o resto.",
    missions:[
      {t:"Partilhar o Tesouro", d:"Dividir em partes iguais", f:"Pega em 24 objetos pequenos (feijões, botões ou peças de construção).\nPartilha-os por 3 pessoas, um a um. Quantos fica cada uma?\nRepete para 4 e para 6 pessoas e escreve as divisões.", xp:10},
      {t:"Quantos Grupos Cabem?", d:"Dividir por agrupamento", f:"Com 30 objetos, faz grupos de 5. Quantos grupos há?\nFaz o mesmo com grupos de 6.\nEscreve cada divisão e a multiplicação que a confirma (30 ÷ 5 = 6, porque 6 × 5 = 30).", xp:10},
      {t:"Sobrou Algum?", d:"Divisão com resto", f:"Partilha 17 objetos por 5 pessoas. Quantos recebe cada uma? Quantos sobram?\nEscreve: 17 = 5 × 3 + 2.\nInventa mais 2 partilhas com resto.", xp:10},
      {t:"Famílias de Contas", d:"Multiplicação e divisão são operações inversas", f:"Com 6, 7 e 42, escreve as 4 contas da família: 6 × 7 = 42, 7 × 6 = 42, 42 ÷ 6 = 7 e 42 ÷ 7 = 6.\nFaz o mesmo com 8, 9 e 72.", xp:10},
      {t:"A Balança", d:"Igualdades: o sinal = como equilíbrio", f:"Completa e explica: 5 + 7 = ___ + 8; 3 × 4 = 2 × ___; 20 − 5 = 10 + ___.\nDesenha uma balança para uma delas.\nVerifica: calcula os dois lados; têm de dar o mesmo.", xp:10}
    ],
    resumo:[
      "<b>Dividir</b> pode ser <b>partilhar</b> em partes iguais (24 cromos por 3 amigos: 24 ÷ 3 = 8 para cada um) ou <b>agrupar</b> (quantos grupos de 3 cabem em 24? 8 grupos).",
      "Numa divisão, o número que se divide é o <b>dividendo</b>, o número por que se divide é o <b>divisor</b> e o resultado é o <b>quociente</b>.",
      "A divisão é a <b>operação inversa</b> da multiplicação: 42 ÷ 6 = 7 porque 7 × 6 = 42. As tabuadas também servem para dividir!",
      "Quando não se consegue partilhar tudo, sobra um <b>resto</b>, que é sempre <b>menor do que o divisor</b>: 17 ÷ 5 dá 3 e sobram 2, porque 5 × 3 + 2 = 17.",
      "Não se pode dividir por 0. Qualquer número dividido por 1 dá o próprio número.",
      "O sinal <b>=</b> quer dizer «tem o mesmo valor que», como uma balança equilibrada: 5 + 7 = 4 + 8, porque os dois lados valem 12."
    ],
    gloss:[
      ["dividendo","Numa divisão, o número que se divide."],
      ["divisor","Numa divisão, o número por que se divide."],
      ["quociente","O resultado de uma divisão."],
      ["resto","O que sobra numa divisão quando não se consegue repartir tudo em partes iguais."],
      ["operação inversa","A operação que desfaz outra: a divisão desfaz a multiplicação."],
      ["igualdade","Duas expressões com o mesmo valor, ligadas pelo sinal =."]
    ],
    quiz:[
      {q:"24 cromos repartidos por 3 amigos, em partes iguais. Quantos recebe cada um?", opts:["8","21","27","6"], correct:0, explain:"24 ÷ 3 = 8, porque 8 × 3 = 24. O 21 é 24 − 3 e o 27 é 24 + 3.", pista:"Que número multiplicado por 3 dá 24?", irma:{q:"35 cartas repartidas por 5 jogadores, em partes iguais. Quantas recebe cada um?", opts:["7","30","40","5"], correct:0, explain:"35 ÷ 5 = 7, porque 7 × 5 = 35."}},
      {q:"Quanto é 42 ÷ 6?", opts:["7","6","36","8"], correct:0, explain:"Procura na tabuada do 6: 6 × 7 = 42, por isso 42 ÷ 6 = 7.", pista:"Diz a tabuada do 6 até chegares a 42.", irma:{q:"Quanto é 56 ÷ 8?", opts:["7","8","48","6"], correct:0, explain:"8 × 7 = 56, por isso 56 ÷ 8 = 7."}},
      {q:"Tens 30 blocos e fazes torres de 5. Quantas torres fazes?", opts:["6","25","35","5"], correct:0, explain:"Quantos grupos de 5 cabem em 30? 6, porque 6 × 5 = 30.", pista:"Conta de 5 em 5 até 30."},
      {q:"17 rebuçados repartidos por 5 crianças. Quantos recebe cada uma e quantos sobram?", opts:["3 cada uma e sobram 2","4 cada uma e sobra 1","3 cada uma e sobram 5","2 cada uma e sobram 7"], correct:0, explain:"5 × 3 = 15 e sobram 2 (17 − 15). Não podem ser 4 cada (5 × 4 = 20, mais do que 17). E se sobrassem 5, ainda dava mais um a cada: o resto tem de ser menor do que 5.", pista:"Qual é o maior número da tabuada do 5 que não passa de 17?", irma:{q:"23 bolas para guardar em caixas de 4. Quantas caixas ficam cheias e quantas bolas sobram?", opts:["5 caixas e sobram 3","6 caixas e sobra 1","4 caixas e sobram 7","5 caixas e sobram 4"], correct:0, explain:"4 × 5 = 20 e sobram 3. 4 × 6 = 24 já passa de 23. O resto (3) é menor do que 4 ✓."}},
      {q:"Qual destas contas confirma que 63 ÷ 9 = 7?", opts:["7 × 9 = 63","63 − 9 = 54","9 + 7 = 16","63 × 9"], correct:0, explain:"Multiplica o quociente pelo divisor e voltas ao dividendo: 7 × 9 = 63 ✓."},
      {q:"Que número falta? 5 + 7 = ___ + 8", opts:["4","12","20","3"], correct:0, explain:"O lado esquerdo vale 12. Do lado direito, ___ + 8 também tem de valer 12: 4 + 8 = 12. Quem responde 12 pensa que = quer dizer «o resultado é»; mas o sinal = diz que os dois lados têm o mesmo valor.", pista:"Calcula primeiro o lado esquerdo. O lado direito tem de valer o mesmo.", irma:{q:"Que número falta? 3 × 4 = 2 × ___", opts:["6","12","8","24"], correct:0, explain:"3 × 4 = 12. Do outro lado, 2 × 6 = 12. O 12 esquece que o lado direito também tem uma conta."}},
      {q:"Numa divisão, o resto pode ser maior do que o divisor?", opts:["Não: se fosse, ainda dava para repartir mais","Sim, sempre","Só quando o dividendo é grande","Sim, se o divisor for 1"], correct:0, explain:"Se sobrassem tantos ou mais do que o divisor, ainda dava para dar mais um a cada. Por isso o resto é sempre menor do que o divisor."},
      {q:"Quanto é 72 ÷ 8?", opts:["9","8","64","80"], correct:0, explain:"8 × 9 = 72, por isso 72 ÷ 8 = 9.", pista:"Que número da tabuada do 8 dá 72?"}
    ],
    posters:[
      EX("➗ Exemplo 1 — 45 ÷ 5 com a tabuada", "quanto é 45 ÷ 5.", "lê a pergunta assim: quantas vezes cabe o 5 no 45?",
        ["Diz a tabuada do 5: 5, 10, 15, 20, 25, 30, 35, 40, 45.", "O 45 é o 9.º número: 9 × 5 = 45."],
        "45 ÷ 5 = 9.", "9 × 5 = 45 ✓."),
      EX("🍬 Exemplo 2 — Divisão com resto: 29 ÷ 4", "quanto é 29 ÷ 4 e quanto sobra.", "procura na tabuada do 4 o maior número que não passa de 29.",
        ["4 × 7 = 28 (4 × 8 = 32 já passa).", "Sobra 29 − 28 = 1.", "O resto (1) é menor do que o divisor (4) ✓."],
        "29 ÷ 4 = 7 e resto 1, ou seja, 29 = 4 × 7 + 1.", "4 × 7 + 1 = 28 + 1 = 29 ✓.")
    ],
    compare:{
      left:{title:"🤝 Partilhar", points:["Sei quantas partes quero","Descubro quanto fica em cada parte","24 cromos por 3 amigos → 8 cada"]},
      right:{title:"📦 Agrupar", points:["Sei o tamanho de cada grupo","Descubro quantos grupos cabem","24 cromos em montes de 3 → 8 montes"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F31 (p. 63) e F48 (p. 97)"
  },
  {
    id:"t5", num:5, c:"m5", icon:"🍕",
    title:"Pizaria das Frações",
    subtitle:"Frações: metade, terço, quarto…", pages:"caderno de fichas: F10, F39 e F46 (pp. 21, 79 e 93)",
    lead:"Quando se divide uma piza em partes iguais, cada parte tem um nome: metade, terço, quarto… Neste mundo vais ler e escrever frações, encontrar a fração de uma quantidade, comparar frações e descobrir frações que valem o mesmo. Começa pela missão guiada.",
    missions:[
      {t:"Partes Iguais", d:"Metade, terço, quarto e oitavo", f:"Dobra 4 folhas de papel: uma em 2, uma em 3, uma em 4 e uma em 8 partes iguais.\nPinta 1 parte de cada e escreve a fração: 1/2, 1/3, 1/4 e 1/8.\nVerifica: as partes de cada folha têm de ser todas do mesmo tamanho.", xp:10},
      {t:"A Fração de um Grupo", d:"Fração de uma quantidade", f:"Com 12 objetos, encontra 1/2, 1/3 e 1/4 do grupo, separando-os em montes iguais.\nDepois encontra 3/4 de 12.\nVerifica: 1/4 de 12 = 3, por isso 3/4 de 12 = 3 + 3 + 3 = 9.", xp:10},
      {t:"Qual é Maior?", d:"Comparar frações", f:"Com as folhas da primeira missão, compara 1/2, 1/3, 1/4 e 1/8 e ordena-as.\nEscreve a regra que descobriste.\nDepois compara 2/5 e 4/5, desenhando duas barras do mesmo comprimento.", xp:10},
      {t:"Iguais por Dentro", d:"Frações equivalentes", f:"Dobra uma folha ao meio e pinta 1/2. Volta a dobrar ao meio: quantos quartos estão pintados?\nEscreve: 1/2 = 2/4. Dobra outra vez: 1/2 = 4/8.\nVerifica: a parte pintada não mudou de tamanho.", xp:10},
      {t:"Missão Guiada", d:"A missão guiada do 📖 Aprender", f:"Abre o 📖 Aprender deste mundo e faz a missão guiada até ao fim.\nNo fim, conta a um adulto a regra que descobriste.\nDaqui a uns dias faz a revisão de 3 perguntas.", xp:10}
    ],
    resumo:[
      "Uma <b>fração</b> representa partes iguais de um todo. Em 3/4, o <b>denominador</b> (4, em baixo) diz em quantas partes iguais se dividiu o todo e o <b>numerador</b> (3, em cima) diz quantas dessas partes se contam.",
      "Nomes: 1/2 um meio (metade), 1/3 um terço, 1/4 um quarto, 1/5 um quinto, 1/8 um oitavo, 1/10 um décimo.",
      "As partes têm de ser <b>iguais</b>: uma piza cortada em 4 pedaços de tamanhos diferentes não está dividida em quartos.",
      "<b>Fração de uma quantidade</b>: 1/4 de 12 = 12 ÷ 4 = 3. E 3/4 de 12 = 3 × 3 = 9.",
      "<b>Comparar</b> (com o mesmo todo): com o mesmo numerador, é maior a que tem o denominador <b>menor</b>, porque as partes são maiores: 1/3 &gt; 1/4. Com o mesmo denominador, é maior a que tem o numerador maior: 4/5 &gt; 2/5.",
      "<b>Frações equivalentes</b> representam a mesma quantidade: 1/2 = 2/4 = 4/8. Se cortares cada parte ao meio, ficas com o dobro das partes e o dobro das partes pintadas.",
      "Quando o numerador é igual ao denominador, a fração vale 1 inteiro: 4/4 = 1."
    ],
    gloss:[
      ["fração","Um número que representa partes iguais de um todo, como 3/4."],
      ["numerador","O número de cima de uma fração: quantas partes se contam."],
      ["denominador","O número de baixo de uma fração: em quantas partes iguais se dividiu o todo."],
      ["metade","Cada uma das 2 partes iguais em que se divide um todo: 1/2."],
      ["frações equivalentes","Frações que representam a mesma quantidade, como 1/2 e 2/4."],
      ["todo","A coisa inteira que se divide em partes iguais: uma piza, uma barra, um grupo de cromos."]
    ],
    quiz:[
      {q:"Uma piza foi cortada em 4 partes iguais e comeste 1. Que fração comeste?", opts:["1/4","4/1","1/3","3/4"], correct:0, explain:"O todo tem 4 partes iguais (denominador 4) e comeste 1 (numerador 1): 1/4, um quarto. O 3/4 é o que sobrou.", pista:"Em baixo: em quantas partes se cortou. Em cima: quantas comeste.", irma:{q:"Uma tablete tem 10 quadrados iguais e comeste 3. Que fração comeste?", opts:["3/10","10/3","7/10","1/3"], correct:0, explain:"10 partes iguais (em baixo) e comeste 3 (em cima): 3/10, três décimos."}},
      {q:"Qual é maior: 1/3 ou 1/4 de pizas iguais?", opts:["1/3","1/4, porque 4 é maior do que 3","São iguais"], correct:0, explain:"Cortar em 3 dá fatias maiores do que cortar em 4. Por isso 1/3 é maior, apesar de 3 ser menor do que 4.", pista:"Imagina as duas pizas: qual tem as fatias maiores?", irma:{q:"Qual é maior: 1/2 ou 1/5 da mesma barra de chocolate?", opts:["1/2","1/5, porque 5 é maior do que 2","São iguais"], correct:0, explain:"Metade da barra é um pedaço grande; um quinto é muito mais pequeno: 1/2 > 1/5."}},
      {q:"Quanto é 1/4 de 12 cromos?", opts:["3","4","48","8"], correct:0, explain:"1/4 é dividir em 4 partes iguais: 12 ÷ 4 = 3. O 4 é o número de partes, não a resposta; o 48 é 12 × 4.", pista:"Divide os 12 cromos em 4 montes iguais.", irma:{q:"Quanto é 1/3 de 15 berlindes?", opts:["5","3","45","12"], correct:0, explain:"15 ÷ 3 = 5: cada terço tem 5 berlindes."}},
      {q:"Quanto é 3/4 de 12?", opts:["9","3","4","16"], correct:0, explain:"1/4 de 12 = 3. Três quartos são 3 vezes isso: 3 × 3 = 9.", pista:"Encontra primeiro 1/4 de 12.", irma:{q:"Quanto é 2/5 de 20?", opts:["8","4","10","5"], correct:0, explain:"1/5 de 20 = 4. Dois quintos: 2 × 4 = 8."}},
      {q:"Qual destas frações é igual a 1/2?", opts:["2/4","1/4","2/2","1/3"], correct:0, explain:"Se cortares cada metade ao meio, ficas com 4 quartos e 2 deles pintados: 1/2 = 2/4. O 2/2 é a piza inteira.", pista:"Desenha uma barra, pinta metade e depois corta cada parte ao meio."},
      {q:"Qual é maior: 2/5 ou 4/5?", opts:["4/5","2/5","São iguais"], correct:0, explain:"As duas estão divididas em 5 partes iguais, por isso as partes têm o mesmo tamanho. 4 partes é mais do que 2: 4/5 > 2/5.", irma:{q:"Qual é maior: 5/8 ou 3/8?", opts:["5/8","3/8","São iguais"], correct:0, explain:"Partes do mesmo tamanho (oitavos): 5 partes é mais do que 3."}},
      {q:"Uma piza foi cortada em 4 pedaços, uns grandes e outros pequenos. Cada pedaço é 1/4 da piza?", opts:["Não, porque as partes não são iguais","Sim, porque são 4 pedaços","Sim, se a piza for grande","Só o pedaço maior"], correct:0, explain:"Uma fração só existe com partes iguais. Se os pedaços têm tamanhos diferentes, não são quartos."},
      {q:"Quantos quartos tem uma piza inteira?", opts:["4/4","1/4","2/4","4/1"], correct:0, explain:"A piza inteira tem as 4 partes: 4/4 = 1 inteiro."}
    ],
    posters:[
      EX("🍕 Exemplo 1 — 3/4 de 20", "quanto é 3/4 de 20.", "encontra primeiro 1/4 de 20.",
        ["1/4 de 20: divide em 4 partes iguais: 20 ÷ 4 = 5.", "3/4 são 3 dessas partes: 3 × 5 = 15."],
        "3/4 de 20 = 15.", "sobra 1/4, que é 5, e 15 + 5 = 20 ✓."),
      EX("📄 Exemplo 2 — 1/2 = 2/4 = 4/8 com uma folha", "frações que valem o mesmo que 1/2.", "dobra uma folha ao meio e pinta uma das metades: 1/2.",
        ["Dobra outra vez ao meio: há 4 partes e 2 estão pintadas: 2/4.", "Dobra mais uma vez: há 8 partes e 4 estão pintadas: 4/8."],
        "1/2 = 2/4 = 4/8.", "a parte pintada nunca mudou de tamanho; só mudou o número de cortes ✓.")
    ],
    compare:{
      left:{title:"⬆️ Numerador", points:["O número de cima","Conta as partes que se consideram","Em 3/4 é o 3"]},
      right:{title:"⬇️ Denominador", points:["O número de baixo","Diz em quantas partes iguais se dividiu o todo","Em 3/4 é o 4"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F11 (p. 23), F41 (p. 83) e F48 (p. 97)"
  },
  {
    id:"t6", num:6, c:"m6", icon:"📏",
    title:"Medir o Mundo",
    subtitle:"Comprimento, massa, tempo e dinheiro", pages:"caderno de fichas: F15, F16, F18, F30 e F42 (pp. 31–85)",
    lead:"Para construir uma casa a sério é preciso medir: quantos metros de parede, quantos quilos de cimento, quanto tempo demora e quanto custa. Neste mundo vais medir comprimentos, massas e tempo, e fazer contas com euros e cêntimos.",
    missions:[
      {t:"Detetive dos Centímetros", d:"Medir comprimentos com a régua", f:"Mede com a régua 5 objetos da tua mesa (lápis, borracha, caderno…).\nRegista cada medida em centímetros e em milímetros (1 cm = 10 mm).\nOrdena-os do mais curto para o mais comprido.", xp:10},
      {t:"Passos e Metros", d:"O metro e o quilómetro", f:"Marca 1 metro no chão com uma fita métrica. Quantos passos teus são?\nEstima quantos metros mede o teu quarto e depois mede.\nPergunta a um adulto quantos quilómetros há de casa até à escola.", xp:10},
      {t:"A Balança da Cozinha", d:"Quilograma e grama", f:"Com um adulto, lê a massa de 4 embalagens da cozinha (arroz, açúcar, massa, bolachas).\nOrdena-as da mais leve para a mais pesada.\nVerifica: 1 kg = 1000 g e meio quilo = 500 g.", xp:10},
      {t:"Relógio do Jogador", d:"Horas, minutos e duração", f:"Regista a que horas começas e acabas 3 atividades de um dia (ex.: jogar, jantar, ler).\nCalcula quanto tempo durou cada uma.\nVerifica: 1 hora = 60 minutos e meia hora = 30 minutos.", xp:10},
      {t:"Loja da Turma", d:"Euros e cêntimos", f:"Faz uma lista de compras com 4 artigos de um folheto, com os preços.\nCalcula o total e o troco de uma nota de 20 €.\nVerifica: 1 € = 100 cêntimos.", xp:10}
    ],
    resumo:[
      "<b>Comprimento</b>: a unidade principal é o <b>metro</b> (m). 1 m = 10 dm = 100 cm = 1000 mm; 1 cm = 10 mm; 1 km = 1000 m. Mede-se com a régua, a fita métrica ou o metro articulado.",
      "<b>Massa</b> (o «peso»): a unidade principal é o <b>quilograma</b> (kg). 1 kg = 1000 g; meio quilo = 500 g. Mede-se com uma balança.",
      "<b>Tempo</b>: 1 dia = 24 horas; 1 hora = 60 minutos; meia hora = 30 minutos; um quarto de hora = 15 minutos; 1 minuto = 60 segundos.",
      "No relógio de ponteiros, o ponteiro pequeno indica as horas e o grande indica os minutos. Às 3 da tarde (15h00), o pequeno está no 3 e o grande no 12.",
      "<b>Duração</b>: das 16h30 às 17h15 passam 45 minutos (30 minutos até às 17h00 e mais 15).",
      "<b>Dinheiro</b>: 1 euro (€) = 100 cêntimos. Há moedas de 1, 2, 5, 10, 20 e 50 cêntimos e de 1 e 2 euros, e notas de 5, 10, 20, 50, 100 e 200 euros.",
      "Escolhe a unidade certa: um lápis mede-se em centímetros, uma estrada em quilómetros, uma maçã pesa-se em gramas e um saco de batatas em quilogramas."
    ],
    gloss:[
      ["metro","A unidade principal de comprimento: 1 m = 100 cm."],
      ["centímetro","Uma das 100 partes iguais de um metro (cm)."],
      ["quilómetro","1000 metros (km). Usa-se para distâncias grandes."],
      ["quilograma","A unidade principal de massa: 1 kg = 1000 g."],
      ["grama","Uma das 1000 partes iguais de um quilograma (g)."],
      ["duração","O tempo que passa entre o princípio e o fim de uma atividade."],
      ["cêntimo","Uma das 100 partes iguais de um euro."]
    ],
    quiz:[
      {q:"Quantos centímetros tem 1 metro?", opts:["100","10","1000","60"], correct:0, explain:"1 m = 100 cm. O 1000 são os milímetros de um metro; o 60 são os minutos de uma hora.", pista:"Pensa na fita métrica: 1 metro está dividido em quantos centímetros?"},
      {q:"Qual é a melhor unidade para medir a distância entre Lisboa e o Porto?", opts:["quilómetro","centímetro","grama","milímetro"], correct:0, explain:"Distâncias grandes medem-se em quilómetros (de Lisboa ao Porto são cerca de 300 km). O grama mede massa, não comprimento."},
      {q:"Quantos gramas tem meio quilo?", opts:["500","50","5000","200"], correct:0, explain:"1 kg = 1000 g, e metade de 1000 é 500.", pista:"Quantos gramas tem 1 kg? E metade disso?", irma:{q:"Quantos gramas têm 2 kg?", opts:["2000","200","20","1002"], correct:0, explain:"Cada quilograma tem 1000 g: 2 × 1000 = 2000 g."}},
      {q:"Um filme começou às 16h30 e acabou às 17h15. Quanto tempo durou?", opts:["45 minutos","1 hora e 15 minutos","85 minutos","15 minutos"], correct:0, explain:"Das 16h30 às 17h00 são 30 minutos; das 17h00 às 17h15 são mais 15. Total: 45 minutos. O 85 vem de fazer 1715 − 1630, como se uma hora tivesse 100 minutos.", pista:"Conta primeiro até à hora certa (17h00) e depois o resto.", irma:{q:"O treino começou às 10h45 e acabou às 11h30. Quanto tempo durou?", opts:["45 minutos","85 minutos","1 hora e 15 minutos","30 minutos"], correct:0, explain:"Das 10h45 às 11h00: 15 minutos. Das 11h00 às 11h30: 30 minutos. 15 + 30 = 45 minutos."}},
      {q:"Compras um livro de 7,50 € e pagas com uma nota de 10 €. Quanto recebes de troco?", opts:["2,50 €","3,50 €","17,50 €","2,05 €"], correct:0, explain:"De 7,50 € até 8 € faltam 50 cêntimos; de 8 € até 10 € faltam 2 €. Troco: 2,50 €.", pista:"Conta para a frente a partir de 7,50 €, como se faz nas lojas.", irma:{q:"Compras um jogo de tabuleiro de 13,20 € e pagas com 20 €. Quanto recebes de troco?", opts:["6,80 €","7,20 €","7,80 €","33,20 €"], correct:0, explain:"De 13,20 € até 14 € faltam 80 cêntimos; de 14 € até 20 € faltam 6 €. Troco: 6,80 €."}},
      {q:"Quantos minutos tem um quarto de hora?", opts:["15","25","4","45"], correct:0, explain:"1 hora = 60 minutos; um quarto é 60 ÷ 4 = 15 minutos."},
      {q:"Um lápis mede 14 cm. Quantos milímetros mede?", opts:["140","14","1400","24"], correct:0, explain:"1 cm = 10 mm, por isso 14 cm = 14 × 10 = 140 mm.", pista:"Cada centímetro tem 10 milímetros."},
      {q:"Quantos cêntimos tem 1 euro?", opts:["100","10","1000","50"], correct:0, explain:"1 € = 100 cêntimos, tal como 1 m = 100 cm."}
    ],
    posters:[
      EX("⏰ Exemplo 1 — Duração: das 9h40 às 11h05", "quanto tempo passa entre as 9h40 e as 11h05.", "conta por saltos, parando nas horas certas.",
        ["Das 9h40 às 10h00: 20 minutos.", "Das 10h00 às 11h00: 1 hora.", "Das 11h00 às 11h05: 5 minutos.", "Junta: 1 hora e 25 minutos."],
        "Passa 1 hora e 25 minutos.", "conta para trás: 11h05 menos 1 hora são 10h05; menos 25 minutos são 9h40 ✓."),
      EX("💶 Exemplo 2 — Troco de 20 € para uma compra de 12,30 €", "quanto se recebe de troco.", "conta para a frente a partir do preço.",
        ["De 12,30 € até 13 €: 70 cêntimos.", "De 13 € até 20 €: 7 €.", "Junta: 7 € e 70 cêntimos."],
        "Troco: 7,70 €.", "12,30 € + 7,70 € = 20 € ✓.")
    ],
    compare:{
      left:{title:"📏 Comprimento", points:["Quanto mede de uma ponta à outra","metro, centímetro, quilómetro","régua, fita métrica"]},
      right:{title:"⚖️ Massa", points:["Quanto pesa","quilograma, grama","balança"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F17 (p. 35), F21 (p. 43), F31 (p. 63) e F48 (p. 97)"
  },
  {
    id:"t7", num:7, c:"m7", icon:"🧭",
    title:"Formas e Mapas",
    subtitle:"Orientação, sólidos, simetria e ângulos", pages:"caderno de fichas: F3, F12, F26, F37, F47 e F50 (pp. 7–101)",
    lead:"Num mapa de jogo é preciso saber onde está o tesouro: «coluna C, linha 4». Neste mundo vais orientar-te com coordenadas, ler mapas vistos de cima, conhecer prismas e pirâmides, fazer reflexões e rotações e descobrir ângulos.",
    missions:[
      {t:"Caça ao Tesouro", d:"Coordenadas numa grelha", f:"Desenha uma grelha de 6 × 6 com letras (A a F) nas colunas e números (1 a 6) nas linhas.\nEsconde 3 tesouros e escreve as coordenadas de cada um (ex.: C4).\nDá as coordenadas a alguém e vê se encontra os tesouros.", xp:10},
      {t:"Vista de Pássaro", d:"Mapas e vistas de cima", f:"Desenha a planta do teu quarto vista de cima: a cama, a mesa e a porta.\nMarca o caminho da porta até à cama com setas e escreve as instruções (ex.: 3 passos em frente, vira à direita).", xp:10},
      {t:"Construtor de Sólidos", d:"Prismas e pirâmides", f:"Procura em casa 3 objetos com forma de prisma (uma caixa de cereais…) e, se encontrares, uma pirâmide.\nNum dos prismas, conta as faces, as arestas e os vértices.\nVerifica: um cubo tem 6 faces, 12 arestas e 8 vértices.", xp:10},
      {t:"Espelho Mágico", d:"Reflexão e eixo de simetria", f:"Dobra uma folha ao meio, desenha metade de uma figura encostada à dobra e recorta.\nAbre a folha: a dobra é o eixo de simetria.\nProcura 3 letras com eixo de simetria (ex.: A, M, T).", xp:10},
      {t:"Esquinas e Ângulos", d:"Ângulos retos e rotações", f:"Dobra uma folha duas vezes para fazer um ângulo reto (um «canto de esquadro»).\nUsa-o para encontrar 5 ângulos retos em casa, um ângulo menor e um maior do que o reto.\nRoda um objeto 1/4 de volta e desenha-o antes e depois.", xp:10},
      {t:"Mesma Área, Outra Forma", d:"Figuras equivalentes", f:"Recorta um quadrado de papel em 2 triângulos iguais e junta-os de outra maneira.\nA figura nova tem a mesma área? Explica.\nCom 4 quadradinhos iguais, quantas figuras diferentes consegues fazer?", xp:10}
    ],
    resumo:[
      "Numa <b>grelha</b>, a posição dá-se com <b>coordenadas</b>: primeiro a coluna (letra) e depois a linha (número). C4 é a casa onde a coluna C cruza a linha 4.",
      "Uma <b>planta</b> ou um mapa mostra os lugares vistos de cima (<b>vista aérea</b>). Para dar um caminho, usa «em frente», «vira à direita», «vira à esquerda» e o número de passos ou de quadrículas.",
      "Os <b>prismas</b> têm duas bases iguais e paralelas e faces laterais que são retângulos (ex.: o cubo e a caixa de sapatos). As <b>pirâmides</b> têm uma só base e faces laterais triangulares que se juntam num vértice.",
      "Num sólido, as <b>faces</b> são as superfícies planas, as <b>arestas</b> são as linhas onde duas faces se encontram e os <b>vértices</b> são os «cantos». Um cubo tem 6 faces, 12 arestas e 8 vértices.",
      "Uma figura tem <b>simetria de reflexão</b> quando, dobrada pelo <b>eixo de simetria</b>, as duas metades ficam uma por cima da outra, como num espelho.",
      "Numa <b>rotação</b>, a figura roda à volta de um ponto: 1/4 de volta, meia volta, 3/4 de volta ou uma volta inteira.",
      "Um <b>ângulo reto</b> é como o canto de uma folha. Há ângulos menores e ângulos maiores do que o reto.",
      "<b>Figuras equivalentes</b> têm a mesma área (ocupam o mesmo espaço), mesmo com formas diferentes."
    ],
    gloss:[
      ["coordenadas","A letra e o número que dizem onde está uma casa numa grelha (ex.: C4)."],
      ["vista aérea","Ver um lugar de cima, como um pássaro."],
      ["prisma","Um sólido com duas bases iguais e paralelas e faces laterais retangulares."],
      ["pirâmide","Um sólido com uma base e faces laterais triangulares que se juntam num vértice."],
      ["aresta","A linha onde duas faces de um sólido se encontram."],
      ["vértice","Um «canto» de um sólido ou de uma figura."],
      ["eixo de simetria","A linha que divide uma figura em duas metades iguais, como num espelho."],
      ["ângulo reto","Um ângulo como o canto de uma folha ou de um esquadro."]
    ],
    quiz:[
      {q:"Num mapa com colunas de A a F e linhas de 1 a 6, o tesouro está na coluna D e na linha 2. Como se escreve?", opts:["D2","2D","DD","D6"], correct:0, explain:"Primeiro a letra da coluna, depois o número da linha: D2.", pista:"Primeiro a coluna (letra), depois a linha (número)."},
      {q:"Quantas faces tem um cubo?", opts:["6","4","8","12"], correct:0, explain:"Cima, baixo, frente, trás, esquerda e direita: 6 faces. O 8 são os vértices e o 12 as arestas.", pista:"Pega num dado e conta as faces (os números de 1 a 6).", irma:{q:"Quantos vértices tem um cubo?", opts:["8","6","12","4"], correct:0, explain:"4 cantos em cima e 4 em baixo: 8 vértices."}},
      {q:"Qual é a diferença entre um prisma e uma pirâmide?", opts:["O prisma tem duas bases iguais; a pirâmide tem uma base e faces triangulares que se juntam num vértice","A pirâmide tem duas bases","O prisma é sempre um cubo","Não há diferença"], correct:0, explain:"O prisma tem duas bases iguais e paralelas, ligadas por retângulos. A pirâmide tem uma só base, e as faces triangulares juntam-se lá em cima, num vértice."},
      {q:"Uma pirâmide de base quadrada tem quantas faces?", opts:["5","4","6","8"], correct:0, explain:"1 base quadrada + 4 faces triangulares = 5 faces.", pista:"Conta a base e depois os triângulos à volta.", irma:{q:"Uma pirâmide de base triangular tem quantas faces?", opts:["4","3","5","6"], correct:0, explain:"1 base triangular + 3 faces triangulares = 4 faces."}},
      {q:"Qual destas letras tem um eixo de simetria vertical (de cima para baixo)?", opts:["A","F","G","R"], correct:0, explain:"Se dobrares o A ao meio, de cima para baixo, as duas metades ficam uma por cima da outra. No F, no G e no R isso não acontece.", pista:"Imagina um espelho a meio da letra: as duas metades são iguais?"},
      {q:"Uma seta aponta para cima. Dás-lhe 1/4 de volta para a direita. Para onde aponta agora?", opts:["Para a direita","Para baixo","Para a esquerda","Continua para cima"], correct:0, explain:"1/4 de volta é como o ponteiro grande a ir do 12 para o 3: a seta que apontava para cima passa a apontar para a direita. Com meia volta apontaria para baixo.", pista:"Pensa no ponteiro dos minutos a andar 15 minutos.", irma:{q:"Uma seta aponta para a direita. Dás-lhe meia volta. Para onde aponta?", opts:["Para a esquerda","Para cima","Para baixo","Para a direita"], correct:0, explain:"Meia volta (2 quartos de volta) vira a seta ao contrário: da direita para a esquerda."}},
      {q:"Qual destes tem um ângulo reto?", opts:["O canto de uma folha de papel","A ponta de um lápis afiado","Uma tesoura quase fechada","Um leque todo aberto"], correct:0, explain:"O canto de uma folha é um ângulo reto, como o de um esquadro. A ponta do lápis e a tesoura quase fechada fazem ângulos menores; o leque aberto faz um ângulo maior."},
      {q:"Cortas um quadrado em dois triângulos e juntas-os noutra forma. A área:", opts:["fica igual","fica o dobro","fica metade","desaparece"], correct:0, explain:"Usaste exatamente o mesmo papel; só mudaste a forma. As duas figuras são equivalentes: têm a mesma área."}
    ],
    posters:[
      EX("🔺 Exemplo 1 — Faces, arestas e vértices de um prisma triangular", "quantas faces, arestas e vértices tem um prisma de base triangular (como uma tenda de campismo).", "conta primeiro as bases e depois as faces laterais.",
        ["Bases: 2 triângulos.", "Faces laterais: 3 retângulos, um por cada lado do triângulo.", "Faces: 2 + 3 = 5.", "Arestas: 3 em cada base + 3 a ligar as bases = 9.", "Vértices: 3 em cada base = 6."],
        "5 faces, 9 arestas e 6 vértices.", "faz o sólido com plasticina e palitos e conta ✓."),
      EX("🗺️ Exemplo 2 — Dar um caminho numa grelha", "um caminho de A1 até ao tesouro em C3 (a linha 1 é a de baixo).", "vê quantas colunas e quantas linhas tens de andar.",
        ["De A até C: 2 colunas para a direita (A1 → C1).", "De 1 até 3: 2 linhas para cima (C1 → C3)."],
        "2 casas para a direita e 2 para cima.", "há outros caminhos (por exemplo, primeiro para cima), mas todos têm pelo menos 4 casas ✓.")
    ],
    compare:{
      left:{title:"🧊 Prisma", points:["2 bases iguais e paralelas","Faces laterais retangulares","Ex.: cubo, caixa de cereais"]},
      right:{title:"🔺 Pirâmide", points:["1 base","Faces laterais triangulares","Juntam-se todas num vértice, no topo"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F27 (p. 55), F41 (p. 83) e F51 (p. 103)"
  },
  {
    id:"t8", num:8, c:"m8", icon:"📊",
    title:"Laboratório de Dados",
    subtitle:"Tabelas, gráficos e probabilidades", pages:"caderno de fichas: F5, F22 e F32 (pp. 11, 45 e 65)",
    lead:"Os jogos guardam muitos dados: pontuações, tempos, objetos apanhados. Neste mundo vais recolher e organizar dados em tabelas e gráficos, encontrar o máximo e o mínimo, ler infográficos, fazer um diagrama de caule-e-folhas e decidir se um acontecimento é impossível, possível ou certo.",
    missions:[
      {t:"Inquérito à Família", d:"Recolher e organizar dados", f:"Pergunta a 10 pessoas qual é a sua atividade preferida, dando 4 opções.\nRegista com tracinhos e faz a tabela de frequência absoluta.\nVerifica: a soma das frequências tem de dar 10.", xp:10},
      {t:"Gráfico de Barras", d:"Representar dados", f:"Com a tabela da missão anterior, faz um gráfico de barras em papel quadriculado.\nDá-lhe um título e escreve os nomes nos eixos.\nEscreve 2 frases sobre o que o gráfico mostra.", xp:10},
      {t:"Recordes", d:"Máximo e mínimo", f:"Joga 8 vezes um jogo simples (ex.: quantos saltos dás em 30 segundos) e regista os resultados.\nQual foi o máximo? E o mínimo?\nOrdena os resultados do menor para o maior.", xp:10},
      {t:"Caule e Folhas", d:"Diagrama de caule-e-folhas", f:"Pergunta as idades de 10 pessoas da família.\nFaz um diagrama de caule-e-folhas: dezenas no caule e unidades nas folhas.\nVerifica: conta as folhas; têm de ser 10.", xp:10},
      {t:"Dado da Sorte", d:"Impossível, possível ou certo", f:"Lança um dado 20 vezes e regista os resultados.\nClassifica: «sair 7» (impossível), «sair um número par» (possível) e «sair um número menor do que 7» (certo).\nQue número saiu mais vezes?", xp:10}
    ],
    resumo:[
      "Para recolher dados, faz-se uma pergunta e regista-se cada resposta, muitas vezes com <b>tracinhos</b> agrupados de 5 em 5.",
      "A <b>frequência absoluta</b> é o número de vezes que cada resposta aparece. A soma das frequências absolutas é o total de respostas.",
      "Os dados mostram-se em <b>tabelas</b>, <b>pictogramas</b> (cada símbolo vale um certo número, dito na legenda) ou <b>gráficos de barras</b> (a altura de cada barra é a frequência). Um gráfico tem sempre título.",
      "O <b>máximo</b> é o maior valor e o <b>mínimo</b> é o menor. A <b>moda</b> é o valor que aparece mais vezes.",
      "Num <b>diagrama de caule-e-folhas</b>, o caule tem os algarismos das dezenas e as folhas os das unidades: 23, 25 e 31 ficam «2 | 3 5» e «3 | 1».",
      "Um <b>infográfico</b> junta números, imagens e pouco texto para explicar um assunto depressa. Lê sempre o título e as legendas.",
      "<b>Probabilidades</b>: um acontecimento é <b>impossível</b> se nunca pode acontecer (sair 7 num dado normal), <b>possível</b> se pode acontecer ou não (sair 5) e <b>certo</b> se acontece sempre (sair um número de 1 a 6)."
    ],
    gloss:[
      ["dados","Informações recolhidas para responder a uma pergunta (respostas, medidas, pontuações)."],
      ["frequência absoluta","O número de vezes que uma resposta aparece."],
      ["gráfico de barras","Um gráfico em que a altura de cada barra mostra a frequência."],
      ["máximo","O maior valor de um conjunto de dados."],
      ["mínimo","O menor valor de um conjunto de dados."],
      ["moda","O valor que aparece mais vezes."],
      ["acontecimento impossível","Algo que nunca pode acontecer."],
      ["acontecimento certo","Algo que acontece sempre."]
    ],
    quiz:[
      {q:"Numa votação, o futebol teve 7 votos, a natação 5 e o ciclismo 3. Quantas pessoas votaram?", opts:["15","7","3","12"], correct:0, explain:"Soma as frequências: 7 + 5 + 3 = 15.", pista:"Junta todos os votos."},
      {q:"Com os mesmos dados (futebol 7, natação 5, ciclismo 3), qual é a moda?", opts:["futebol","ciclismo","natação","7"], correct:0, explain:"A moda é a resposta mais frequente: o futebol, com 7 votos. O 7 é a frequência, não a resposta.", pista:"Qual foi a resposta com mais votos?"},
      {q:"Pontuações de um jogo: 12, 8, 15, 9, 15 e 11. Quais são o máximo e o mínimo?", opts:["máximo 15 e mínimo 8","máximo 12 e mínimo 11","máximo 15 e mínimo 9","máximo 8 e mínimo 15"], correct:0, explain:"O maior valor é 15 e o menor é 8.", pista:"Ordena as pontuações do menor para o maior."},
      {q:"Num pictograma, cada ⭐ vale 2 votos. A cor azul tem ⭐⭐⭐⭐. Quantos votos tem?", opts:["8","4","6","2"], correct:0, explain:"4 estrelas × 2 votos = 8. Quem responde 4 esqueceu-se de ler a legenda.", pista:"Lê a legenda: quanto vale cada estrela?", irma:{q:"Num pictograma, cada 🍎 vale 5 maçãs. Há 🍎🍎🍎. Quantas maçãs são?", opts:["15","3","8","5"], correct:0, explain:"3 símbolos × 5 = 15 maçãs."}},
      {q:"Num diagrama de caule-e-folhas, a linha «3 | 1 4 7» representa que números?", opts:["31, 34 e 37","3, 1, 4 e 7","147","13, 43 e 73"], correct:0, explain:"O caule (3) são as dezenas e cada folha é uma unidade: 31, 34 e 37.", pista:"O caule são as dezenas; as folhas são as unidades.", irma:{q:"Num diagrama de caule-e-folhas, a linha «2 | 0 5» representa que números?", opts:["20 e 25","2, 0 e 5","205","2 e 25"], correct:0, explain:"Dezena 2 com as unidades 0 e 5: 20 e 25."}},
      {q:"Lanças um dado normal (de 1 a 6). «Sair o número 7» é:", opts:["impossível","possível","certo"], correct:0, explain:"Num dado de 1 a 6 não há o 7: nunca pode sair.", irma:{q:"Lanças um dado normal. «Sair um número menor do que 10» é:", opts:["certo","possível","impossível"], correct:0, explain:"Todos os números do dado (1 a 6) são menores do que 10, por isso acontece sempre."}},
      {q:"Num saco há só berlindes azuis. Tiras um sem ver. «Sair azul» é:", opts:["certo","possível","impossível"], correct:0, explain:"Só há azuis, por isso sai sempre azul."},
      {q:"Num saco há 5 berlindes vermelhos e 1 verde. Tiras um sem ver. O que é mais provável?", opts:["Sair vermelho","Sair verde","É igual"], correct:0, explain:"Há mais vermelhos (5) do que verdes (1). Sair verde é possível, mas é menos provável."}
    ],
    posters:[
      EX("📋 Exemplo 1 — Da contagem à tabela", "organizar as respostas de 12 colegas sobre o animal preferido.", "regista cada resposta com um tracinho ao lado do animal.",
        ["Contagem: cão 5, gato 3, peixe 2, coelho 2.", "Faz a tabela: animal | frequência absoluta.", "Soma: 5 + 3 + 2 + 2 = 12."],
        "A moda é o cão, com 5 votos.", "o total (12) é igual ao número de colegas ✓."),
      EX("🌿 Exemplo 2 — Caule-e-folhas das idades 34, 8, 41, 37, 12, 15 e 40", "organizar 7 idades num diagrama de caule-e-folhas.", "ordena as idades: 8, 12, 15, 34, 37, 40, 41.",
        ["Caule = algarismo das dezenas (0, 1, 2, 3 e 4).", "0 | 8", "1 | 2 5", "2 | (nenhuma idade)", "3 | 4 7", "4 | 0 1"],
        "Mínimo: 8. Máximo: 41.", "há 7 folhas para 7 idades ✓.")
    ],
    compare:{
      left:{title:"📋 Tabela", points:["Números arrumados em linhas e colunas","Dá os valores exatos","Boa para consultar"]},
      right:{title:"📊 Gráfico de barras", points:["Um desenho com barras","Mostra logo o maior e o menor","Bom para comparar depressa"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F11 (p. 23), F27 (p. 55) e F36 (p. 73)"
  },
  {
    id:"t9", num:9, c:"m9", icon:"🔁",
    title:"Padrões e Sequências",
    subtitle:"Sequências de repetição e de crescimento", pages:"caderno de fichas: F6 e F28 (pp. 13 e 57)",
    lead:"Nos jogos de construção há padrões em todo o lado: chão aos quadrados, paredes às riscas, escadas que sobem sempre o mesmo. Neste mundo vais descobrir a regra de uma sequência e continuar sequências que se repetem e sequências que crescem.",
    missions:[
      {t:"Colar de Contas", d:"Sequências de repetição", f:"Com contas, botões ou lápis de cor, faz uma sequência que se repita (ex.: azul, azul, vermelho).\nDesenha os 12 primeiros elementos e faz um círculo à volta da parte que se repete (o motivo).\nDe que cor é o 20.º elemento?", xp:10},
      {t:"Escada de Blocos", d:"Sequências de crescimento", f:"Constrói escadas com blocos: 1 bloco, depois 3, depois 5…\nDesenha os 4 primeiros termos e escreve quantos blocos tem cada um.\nDescobre quanto cresce de um termo para o seguinte.", xp:10},
      {t:"Saltos na Reta", d:"Sequências de números", f:"Na reta numérica, salta de 4 em 4 a partir do 3: 3, 7, 11…\nEscreve os 10 primeiros números.\nSão todos ímpares? Porquê?", xp:10},
      {t:"Inventa a Regra", d:"Criar e explicar sequências", f:"Inventa 2 sequências (uma de figuras e uma de números) e escreve a regra de cada uma.\nDá-as a alguém para descobrir o termo seguinte.", xp:10}
    ],
    resumo:[
      "Uma <b>sequência</b> é uma lista de elementos (figuras ou números) que segue uma <b>regra</b>. Cada elemento chama-se <b>termo</b>.",
      "Numa <b>sequência de repetição</b>, um grupo de elementos (o <b>motivo</b>) repete-se sempre igual: 🟦🟦🟥 🟦🟦🟥 …",
      "Para saber um termo distante numa sequência de repetição, usa o tamanho do motivo: com um motivo de 3 elementos, os termos 3.º, 6.º, 9.º, 12.º… são todos o último elemento do motivo.",
      "Numa <b>sequência de crescimento</b>, cada termo tem mais elementos do que o anterior: 2, 5, 8, 11… (cresce 3 de cada vez).",
      "Para descobrir a regra de uma sequência de números, vê quanto muda de um termo para o seguinte.",
      "Explica sempre a regra por palavras: «começa no 3 e soma 4 de cada vez»."
    ],
    gloss:[
      ["sequência","Uma lista de figuras ou números que segue uma regra."],
      ["termo","Cada elemento de uma sequência."],
      ["regra","O que diz como se passa de um termo para o seguinte."],
      ["motivo","A parte que se repete numa sequência de repetição."],
      ["sequência de repetição","Uma sequência em que o mesmo motivo se repete sempre."],
      ["sequência de crescimento","Uma sequência em que cada termo é maior do que o anterior."]
    ],
    quiz:[
      {q:"Qual é o termo seguinte? 🟦 🟦 🟥 🟦 🟦 🟥 🟦 🟦 ___", opts:["🟥","🟦","🟩"], correct:0, explain:"O motivo é 🟦 🟦 🟥 (3 elementos). Depois de dois azuis vem um vermelho.", pista:"Faz um círculo à volta da parte que se repete."},
      {q:"Qual é o número seguinte? 3, 7, 11, 15, ___", opts:["19","18","16","20"], correct:0, explain:"Soma 4 de cada vez: 15 + 4 = 19.", pista:"Quanto muda de um número para o seguinte?", irma:{q:"Qual é o número seguinte? 5, 11, 17, 23, ___", opts:["29","28","24","30"], correct:0, explain:"Soma 6 de cada vez: 23 + 6 = 29."}},
      {q:"Na sequência azul, azul, vermelho, azul, azul, vermelho…, de que cor é o 9.º termo?", opts:["vermelho","azul","não se sabe"], correct:0, explain:"O motivo tem 3 cores. Os termos 3.º, 6.º e 9.º são o último do motivo: vermelho.", pista:"Quantos elementos tem a parte que se repete? Conta de 3 em 3.", irma:{q:"Na sequência ⭐ 🌙 ⭐ 🌙 …, o que está no 10.º lugar?", opts:["🌙","⭐","não se sabe"], correct:0, explain:"O motivo tem 2 elementos. Os termos pares (2.º, 4.º, 6.º, 8.º e 10.º) são todos 🌙."}},
      {q:"Uma escada tem 2 blocos no 1.º termo, 4 no 2.º e 6 no 3.º. Quantos blocos tem o 5.º termo?", opts:["10","8","12","7"], correct:0, explain:"Cresce 2 de cada vez: 2, 4, 6, 8, 10. O 8 é o 4.º termo.", pista:"Escreve os termos todos até ao 5.º.", irma:{q:"Uma torre tem 3 blocos no 1.º termo, 6 no 2.º e 9 no 3.º. Quantos blocos tem o 5.º termo?", opts:["15","12","18","11"], correct:0, explain:"Cresce 3 de cada vez: 3, 6, 9, 12, 15. O 12 é o 4.º termo."}},
      {q:"Qual é a regra da sequência 50, 45, 40, 35…?", opts:["Começa no 50 e tira 5 de cada vez","Começa no 50 e soma 5 de cada vez","Tira 10 de cada vez","Divide por 5 de cada vez"], correct:0, explain:"Cada número é 5 menos do que o anterior: 50 − 5 = 45, 45 − 5 = 40…"},
      {q:"Qual destas é uma sequência de crescimento?", opts:["1, 4, 7, 10, 13","1, 2, 1, 2, 1, 2","🔺🔵🔺🔵🔺🔵","5, 5, 5, 5"], correct:0, explain:"1, 4, 7, 10, 13 cresce 3 de cada vez. As outras repetem-se sempre igual."},
      {q:"Qual é o número que falta? 10, 20, ___, 40, 50", opts:["30","25","35","60"], correct:0, explain:"Soma 10 de cada vez: 20 + 10 = 30."},
      {q:"Uma sequência começa no 1 e soma 2 de cada vez. Que números terá?", opts:["Só números ímpares","Só números pares","Pares e ímpares misturados","Só o número 1"], correct:0, explain:"1, 3, 5, 7, 9… Um número ímpar mais 2 continua a ser ímpar."}
    ],
    posters:[
      EX("🟦 Exemplo 1 — O 20.º termo de 🟦 🟦 🟥 …", "qual é o 20.º termo da sequência 🟦 🟦 🟥 🟦 🟦 🟥 …", "conta quantos elementos tem o motivo: 3.",
        ["Os termos 3.º, 6.º, 9.º, 12.º, 15.º e 18.º são 🟥 (o fim do motivo).", "Depois do 18.º, o motivo recomeça: o 19.º é 🟦 e o 20.º é 🟦."],
        "O 20.º termo é 🟦.", "20 ÷ 3 dá 6 e resto 2: o 20.º termo é o 2.º elemento do motivo, 🟦 ✓."),
      EX("🪜 Exemplo 2 — Escada de quadrados: 1, 3, 5, 7…", "quantos quadrados tem o 6.º termo.", "vê quanto cresce de um termo para o seguinte: 2.",
        ["1.º termo: 1. 2.º: 3. 3.º: 5. 4.º: 7.", "5.º: 7 + 2 = 9.", "6.º: 9 + 2 = 11."],
        "O 6.º termo tem 11 quadrados.", "desenha os 6 termos e conta ✓.")
    ],
    compare:{
      left:{title:"🔁 Repetição", points:["Um motivo que se repete sempre igual","Não cresce","Ex.: azul, azul, vermelho, azul, azul, vermelho"]},
      right:{title:"📈 Crescimento", points:["Cada termo é maior do que o anterior","Cresce segundo uma regra","Ex.: 2, 5, 8, 11"]}
    },
    boss:"Avaliação formativa do caderno de fichas: F11 (p. 23) e F31 (p. 63)"
  }
  ];
})();
