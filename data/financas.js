/* 💶 Dinheiro e Casa — literacia financeira e economia doméstica, 2.º ciclo (10–12 anos).
   Segue o Referencial de Educação Financeira (DGE, Banco de Portugal, CMVM, ASF, 2013) e o Referencial de Educação para o Consumo (DGE),
   com ideias da disciplina japonesa de economia doméstica (家庭科, katei-ka, obrigatória a partir do 5.º ano) e das
   Jump$tart National Standards (EUA). O dinheiro é sempre em euros reais; não há moedas inventadas.
   Formato dos mundos igual ao dos outros ficheiros (ver data/ingles.js). Mundos novos: sempre no FIM da lista. */
const FIN_WORLDS = [
  {
    id:"f1", num:1, c:"m1", icon:"💶",
    title:"De Onde Vem o Dinheiro",
    subtitle:"Troca direta, moedas, notas, euro e trabalho", pages:"Referencial de Educação Financeira, 2.º ciclo",
    lead:"Antes de haver dinheiro, as pessoas trocavam coisas: um saco de trigo por um cesto de peixe. Hoje usamos o euro. Neste mundo vais descobrir porque é que o dinheiro foi inventado, como reconhecer as moedas e as notas e de onde vem o dinheiro de uma família.",
    missions:[
      {t:"Do Trigo ao Euro", d:"A troca direta e porque é que se inventou o dinheiro", f:"Fazer uma linha do tempo com 4 etapas: troca direta, moedas, notas e pagamento digital", xp:10},
      {t:"Conhecer o Euro", d:"As 8 moedas e as notas de euro", f:"Com um adulto, separar as moedas de casa pelo valor e fazer 1 € de 3 maneiras diferentes", xp:10},
      {t:"Tocar, Ver e Inclinar", d:"Como se reconhece uma nota verdadeira", f:"Com uma nota de 5 € ou 10 €, encontrar a marca de água, o fio de segurança e o número que muda de cor", xp:10},
      {t:"De Onde Vem o Dinheiro da Família", d:"Trabalho, salário e outros rendimentos", f:"Perguntar a um adulto que profissões conhece e fazer uma lista de 5 trabalhos e do que cada um faz pelos outros", xp:15}
    ],
    resumo:[
      "Antes do dinheiro havia a <b>troca direta</b>: trocava-se uma coisa por outra. Era difícil, porque nem sempre a outra pessoa queria o que tínhamos.",
      "O <b>dinheiro</b> resolve esse problema: toda a gente o aceita, guarda-se bem e serve para medir quanto valem as coisas.",
      "Em Portugal, a moeda é o <b>euro</b> (€). As notas e moedas de euro começaram a circular a 1 de janeiro de 2002; antes usava-se o <b>escudo</b>.",
      "Há <b>8 moedas</b> de euro (1, 2, 5, 10, 20 e 50 cêntimos, 1 € e 2 €) e notas de 5, 10, 20, 50, 100 e 200 €. 1 € = 100 cêntimos.",
      "Uma nota verdadeira verifica-se em 3 gestos: <b>tocar</b> (o papel é firme e tem relevo), <b>ver</b> contra a luz (marca de água e fio de segurança) e <b>inclinar</b> (o holograma e o número mudam).",
      "O dinheiro de uma família vem sobretudo do <b>trabalho</b> (o <b>salário</b>), mas também pode vir de pensões, apoios ou do aluguer de uma casa. A todo o dinheiro que entra chama-se <b>rendimento</b>."
    ],
    gloss:[
      ["troca direta","Trocar uma coisa por outra sem usar dinheiro (por exemplo, trigo por peixe)."],
      ["dinheiro","Aquilo que todos aceitam em troca de bens e serviços: moedas, notas e dinheiro em conta."],
      ["euro","A moeda de Portugal e de outros países da União Europeia. Símbolo: €."],
      ["cêntimo","A centésima parte do euro: 100 cêntimos = 1 €."],
      ["rendimento","Todo o dinheiro que entra numa família: salário, pensão, apoios…"],
      ["salário","O dinheiro que uma pessoa recebe pelo seu trabalho, normalmente todos os meses."],
      ["marca de água","Imagem que só se vê na nota quando a pomos contra a luz."],
      ["Banco Central Europeu","O banco que decide sobre o euro. Fica em Frankfurt, na Alemanha."]
    ],
    quiz:[
      {q:"Qual era a maior dificuldade da troca direta?", opts:["A outra pessoa podia não querer o que tínhamos","Não havia nada para trocar","Era proibida","Só funcionava com ouro"], correct:0, explain:"Para trocar, era preciso encontrar alguém que quisesse exatamente o que tínhamos e tivesse o que queríamos. O dinheiro resolve isso."},
      {q:"Quantos cêntimos tem 1 euro?", opts:["100","10","1000","50"], correct:0, explain:"1 € = 100 cêntimos. Por isso 0,50 € são 50 cêntimos."},
      {q:"Em que ano começaram a circular as notas e moedas de euro em Portugal?", opts:["2002","1999","1974","2010"], correct:0, explain:"Circulam desde 1 de janeiro de 2002. Antes, a moeda portuguesa era o escudo."},
      {q:"Qual destas NÃO é uma moeda de euro?", opts:["3 cêntimos","2 cêntimos","20 cêntimos","2 euros"], correct:0, explain:"As moedas são de 1, 2, 5, 10, 20 e 50 cêntimos, 1 € e 2 €. Não há moeda de 3 cêntimos."},
      {q:"Como se verifica uma nota de euro?", opts:["Tocar, ver contra a luz e inclinar","Cheirar e dobrar","Molhar e secar","Só pela cor"], correct:0, explain:"O Banco Central Europeu recomenda 3 gestos: tocar, ver e inclinar."},
      {q:"O dinheiro que uma pessoa recebe pelo seu trabalho chama-se…", opts:["salário","troco","desconto","juro"], correct:0, explain:"O salário é o pagamento do trabalho. É, quase sempre, a maior parte do rendimento de uma família."},
      {q:"Quanto é 3 moedas de 50 cêntimos e 1 moeda de 20 cêntimos?", opts:["1,70 €","1,50 €","0,73 €","2,20 €"], correct:0, explain:"3 × 50 = 150 cêntimos; 150 + 20 = 170 cêntimos = 1,70 €."},
      {q:"Porque é que o dinheiro é útil para comparar coisas?", opts:["Mede o valor de tudo com a mesma unidade","Faz as coisas durarem mais","Torna tudo mais barato","Serve só para guardar"], correct:0, explain:"Com o dinheiro, sabemos que um livro de 12 € vale o mesmo que três cadernos de 4 €."}
    ],
    compare:{
      left:{title:"🔄 Troca direta", points:["Trocar coisa por coisa","É difícil dividir (meia vaca?)","Muitas coisas estragam-se","É preciso que os dois queiram trocar"]},
      right:{title:"💶 Dinheiro", points:["Toda a gente aceita","Divide-se bem (euros e cêntimos)","Guarda-se sem estragar","Mede o valor de tudo"]}
    },
    boss:"Mostra a um adulto que sabes fazer 2 € de 4 maneiras diferentes e verificar uma nota"
  },
  {
    id:"f2", num:2, c:"m2", icon:"🎯",
    title:"Precisar ou Querer?",
    subtitle:"Necessidades, desejos e escolhas", pages:"Referencial de Educação Financeira, 2.º ciclo",
    lead:"O dinheiro não chega para tudo, por isso temos de escolher. Saber separar o que precisamos (comida, casa, roupa, escola) do que queremos (um jogo novo, uns ténis de marca) é o primeiro passo para escolher bem.",
    missions:[
      {t:"Duas Listas", d:"Necessidades e desejos", f:"Escrever 5 necessidades e 5 desejos teus e explicar 2 que são difíceis de classificar", xp:10},
      {t:"Se Escolho Isto, Perco Aquilo", d:"Custo de oportunidade: o que deixamos de ter quando escolhemos", f:"Imaginar que tens 20 € e 3 coisas de que gostas. Escolher uma e escrever do que abdicaste", xp:10},
      {t:"A Regra dos 3 Dias", d:"Esperar antes de comprar o que queremos", f:"Escolher uma coisa que queres muito, esperar 3 dias e escrever se ainda a queres e porquê", xp:10},
      {t:"Euros a Sério nos Jogos", d:"As moedas dos jogos custam dinheiro real", f:"Com um adulto, ver quanto custa em euros um pacote de moedas de um jogo e o que mais se comprava com esse dinheiro", xp:15}
    ],
    resumo:[
      "Uma <b>necessidade</b> é algo de que precisamos para viver bem: comida, água, casa, roupa, saúde e escola.",
      "Um <b>desejo</b> é algo de que gostamos, mas sem o qual vivemos bem: um jogo, um brinquedo, uma marca.",
      "Como o dinheiro é <b>limitado</b>, temos de escolher. Primeiro as necessidades, depois os desejos.",
      "Quando escolhemos uma coisa, abdicamos de outra: chama-se <b>custo de oportunidade</b>. Se gasto 10 € num lanche, não posso gastar esses 10 € num livro.",
      "As moedas e os pacotes que se compram dentro dos jogos custam <b>euros reais</b>. Antes de comprar, é boa ideia converter em euros e esperar uns dias."
    ],
    gloss:[
      ["necessidade","Algo de que precisamos para viver: alimentação, casa, roupa, saúde, educação."],
      ["desejo","Algo de que gostamos, mas sem o qual vivemos bem."],
      ["escassez","Não haver o suficiente para tudo o que queremos. É por isso que temos de escolher."],
      ["custo de oportunidade","Aquilo de que abdicamos quando escolhemos outra coisa."],
      ["compra por impulso","Comprar sem pensar, só porque apeteceu naquele momento."],
      ["compras dentro do jogo","Coisas compradas dentro de um jogo (moedas, roupas, níveis) com dinheiro real."]
    ],
    quiz:[
      {q:"Qual destas é uma necessidade?", opts:["Comida","Um jogo novo","Uns ténis de marca","Um pacote de moedas de um jogo"], correct:0, explain:"Sem comida não vivemos. Os outros são desejos: é bom tê-los, mas vivemos bem sem eles."},
      {q:"O que é o custo de oportunidade?", opts:["Aquilo de que abdicamos quando escolhemos","O preço com desconto","O troco de uma compra","Um imposto"], correct:0, explain:"Se escolho o cinema, abdico do livro que comprava com o mesmo dinheiro. Esse livro é o custo de oportunidade."},
      {q:"Porque é que temos de escolher o que compramos?", opts:["Porque o dinheiro é limitado","Porque as lojas fecham cedo","Porque é proibido comprar muito","Porque as coisas são todas iguais"], correct:0, explain:"Não há dinheiro para tudo o que queremos (escassez). Por isso escolhemos, começando pelas necessidades."},
      {q:"Uma pessoa vê uns auscultadores e compra-os logo, sem pensar. Isto é…", opts:["uma compra por impulso","uma necessidade","uma poupança","um investimento"], correct:0, explain:"Comprar só porque apeteceu naquele momento é uma compra por impulso. Esperar uns dias ajuda a decidir melhor."},
      {q:"As moedas que se compram dentro de um jogo…", opts:["custam euros reais","são sempre grátis","não contam como gasto","só valem na escola"], correct:0, explain:"Quem as compra paga com euros a sério. Antes de comprar, convém saber quanto custam em euros."},
      {q:"Qual é uma boa estratégia antes de comprar um desejo caro?", opts:["Esperar uns dias e ver se ainda o queremos","Comprar já, antes que acabe","Pedir emprestado a um amigo","Comprar dois"], correct:0, explain:"Esperar ajuda a distinguir um desejo verdadeiro de um impulso."},
      {q:"Os óculos de que uma criança precisa para ver o quadro são…", opts:["uma necessidade","um desejo","um luxo","um custo de oportunidade"], correct:0, explain:"Ver bem é uma questão de saúde e de aprender na escola: é uma necessidade."}
    ],
    compare:{
      left:{title:"✅ Necessidades", points:["Alimentação e água","Casa, luz e aquecimento","Roupa e calçado","Saúde e escola"]},
      right:{title:"💭 Desejos", points:["Jogos e moedas de jogos","Roupa de marca","Lanches fora","O telemóvel mais recente"]}
    },
    boss:"Explica a um adulto a diferença entre necessidade e desejo, com 3 exemplos de cada"
  },
  {
    id:"f3", num:3, c:"m3", icon:"📒",
    title:"O Meu Orçamento",
    subtitle:"Receitas, despesas e saldo", pages:"Referencial de Educação Financeira, 2.º ciclo",
    lead:"Um orçamento é um plano para o dinheiro: quanto entra, quanto sai e quanto sobra. Funciona igual para uma semanada de 5 € e para uma família inteira.",
    missions:[
      {t:"Entradas e Saídas", d:"Receitas e despesas", f:"Fazer uma tabela com o dinheiro que recebeste num mês (semanada, prendas) e o que gastaste", xp:10},
      {t:"O Saldo", d:"Receitas − despesas = saldo", f:"Calcular o saldo da tua tabela e dizer se foi positivo ou negativo", xp:10},
      {t:"Plano para a Semanada", d:"Dividir o dinheiro antes de o gastar", f:"Com uma semanada imaginária de 10 €, decidir quanto vai para gastar, para poupar e para partilhar", xp:15},
      {t:"Registo de 2 Semanas", d:"Anotar cada gasto", f:"Durante 2 semanas, anotar tudo o que gastas e, no fim, dizer onde gastaste mais", xp:15}
    ],
    resumo:[
      "Um <b>orçamento</b> é um plano: diz quanto dinheiro vai entrar e como o vamos usar.",
      "O dinheiro que entra chama-se <b>receita</b> (semanada, prendas, salário). O que sai chama-se <b>despesa</b> (lanches, livros, contas).",
      "<b>Saldo = receitas − despesas.</b> Se é positivo, sobrou dinheiro; se é negativo, gastou-se mais do que se tinha.",
      "Uma ideia simples é dividir o dinheiro, logo que chega, em 3 partes: <b>gastar</b>, <b>poupar</b> e <b>partilhar</b> (ajudar alguém ou uma causa).",
      "<b>Anotar os gastos</b> ajuda a descobrir para onde vai o dinheiro, sobretudo os gastos pequenos que se repetem."
    ],
    gloss:[
      ["orçamento","Plano que mostra o dinheiro que entra e como vai ser usado."],
      ["receita","Dinheiro que entra (semanada, prenda, salário)."],
      ["despesa","Dinheiro que sai (compras, contas)."],
      ["saldo","Receitas menos despesas: o que sobra (ou falta)."],
      ["semanada","Dinheiro que algumas crianças recebem por semana para gerir."],
      ["despesa fixa","Despesa que se repete sempre com o mesmo valor (por exemplo, a renda da casa)."],
      ["despesa variável","Despesa que muda de mês para mês (por exemplo, a conta do supermercado)."]
    ],
    quiz:[
      {q:"Recebeste 15 € e gastaste 9 €. Qual é o saldo?", opts:["6 €","24 €","9 €","−6 €"], correct:0, explain:"Saldo = receitas − despesas = 15 − 9 = 6 €."},
      {q:"O que é uma receita, num orçamento?", opts:["Dinheiro que entra","Dinheiro que sai","Uma lista de compras","Um desconto"], correct:0, explain:"No orçamento, receita é o dinheiro que entra, como a semanada ou um salário."},
      {q:"Um saldo negativo quer dizer que…", opts:["se gastou mais do que se recebeu","se poupou muito","não houve despesas","o dinheiro rendeu juros"], correct:0, explain:"Se as despesas são maiores do que as receitas, o saldo fica negativo: faltou dinheiro."},
      {q:"Qual destas é uma despesa fixa de uma família?", opts:["A renda da casa","Um jantar fora","Uma prenda de anos","Um bilhete de cinema"], correct:0, explain:"A renda paga-se todos os meses, com o mesmo valor: é uma despesa fixa."},
      {q:"Para que serve anotar todos os gastos?", opts:["Para saber para onde vai o dinheiro","Para gastar mais depressa","Para não precisar de orçamento","Para pagar menos impostos"], correct:0, explain:"Só quando anotamos vemos os gastos pequenos que, somados, fazem muito."},
      {q:"Com 10 € de semanada, decides poupar 30 %. Quanto poupas?", opts:["3 €","30 €","7 €","0,30 €"], correct:0, explain:"10 % de 10 € é 1 €; 30 % é 3 × 1 € = 3 €."},
      {q:"Compras um lanche de 1,50 € todos os dias de escola (5 dias). Quanto gastas por semana?", opts:["7,50 €","1,50 €","5 €","15 €"], correct:0, explain:"5 × 1,50 € = 7,50 €. Os gastos pequenos que se repetem somam muito."}
    ],
    compare:{
      left:{title:"⬆️ Receitas (entra)", points:["Semanada","Prendas de anos","Salário (adultos)","Venda de uma coisa usada"]},
      right:{title:"⬇️ Despesas (sai)", points:["Lanches e saídas","Livros e material","Renda, luz e água (casa)","Compras em jogos"]}
    },
    boss:"Apresenta a um adulto o teu orçamento de um mês, com receitas, despesas e saldo"
  },
  {
    id:"f4", num:4, c:"m4", icon:"🐷",
    title:"Poupar para um Objetivo",
    subtitle:"Objetivos, tempo, mealheiro, banco e juros", pages:"Referencial de Educação Financeira, 2.º ciclo",
    lead:"Poupar é guardar hoje para poder fazer algo amanhã. Fica muito mais fácil quando sabemos para quê: uma bicicleta, um material de desenho, uma visita de estudo.",
    missions:[
      {t:"O Meu Objetivo", d:"Escolher um objetivo com preço e prazo", f:"Escolher uma coisa que queres, procurar o preço e decidir até quando a queres comprar", xp:10},
      {t:"Quanto por Semana?", d:"Preço ÷ número de semanas", f:"Calcular quanto tens de poupar por semana para chegar ao teu objetivo", xp:15},
      {t:"Mealheiro ou Banco?", d:"Onde guardar a poupança", f:"Fazer uma tabela com 2 vantagens e 1 desvantagem de cada um", xp:10},
      {t:"A Barra da Poupança", d:"Acompanhar o progresso", f:"Desenhar uma barra com 10 blocos e pintar um bloco por cada 10 % que já poupaste", xp:10}
    ],
    resumo:[
      "<b>Poupar</b> é não gastar agora uma parte do dinheiro, para o usar mais tarde.",
      "Um bom <b>objetivo de poupança</b> diz o quê, quanto custa e até quando. Exemplo: «uma bola de 24 € daqui a 8 semanas».",
      "Para saber quanto poupar por semana, divide-se o preço pelo número de semanas: 24 € ÷ 8 = 3 € por semana.",
      "O dinheiro pode ficar num <b>mealheiro</b> (à mão, mas pode perder-se) ou numa <b>conta no banco</b> (mais seguro e pode render <b>juros</b>).",
      "<b>Juro</b> é o dinheiro que o banco paga por guardar as nossas poupanças, ou que nós pagamos quando pedimos dinheiro emprestado.",
      "Também se poupa ao gastar menos: reparar, reutilizar, trocar livros e roupa com outras famílias."
    ],
    gloss:[
      ["poupança","Dinheiro que se guarda para usar mais tarde."],
      ["objetivo de poupança","Aquilo para que se poupa, com preço e prazo."],
      ["prazo","O tempo que temos até uma data."],
      ["conta bancária","Lugar num banco onde se guarda dinheiro em segurança."],
      ["depósito","Pôr dinheiro numa conta do banco."],
      ["juro","Dinheiro pago pelo uso de dinheiro: o banco paga-nos pela poupança; nós pagamos quando pedimos emprestado."],
      ["empréstimo","Dinheiro que alguém nos dá e que temos de devolver, normalmente com juros."]
    ],
    quiz:[
      {q:"Queres um livro de 18 € daqui a 6 semanas. Quanto poupas por semana?", opts:["3 €","6 €","12 €","2 €"], correct:0, explain:"18 € ÷ 6 semanas = 3 € por semana."},
      {q:"O que é um juro, numa conta de poupança?", opts:["Dinheiro que o banco paga por guardarmos lá a poupança","Uma multa","O preço do mealheiro","Um desconto numa loja"], correct:0, explain:"Numa poupança, o banco paga-nos juros. Num empréstimo, somos nós que pagamos."},
      {q:"Qual é uma vantagem de guardar a poupança no banco?", opts:["É mais seguro e pode render juros","Está sempre no bolso","Nunca tem regras","Duplica todos os meses"], correct:0, explain:"No banco o dinheiro está protegido e pode render juros. No mealheiro pode perder-se."},
      {q:"Qual destes é um bom objetivo de poupança?", opts:["«Uma bola de 24 € até ao fim de maio»","«Ter muito dinheiro»","«Poupar às vezes»","«Comprar coisas»"], correct:0, explain:"Um bom objetivo diz o quê, quanto custa e até quando."},
      {q:"Puseste 50 € numa conta que paga 2 % de juro ao ano. Quanto recebes de juros num ano?", opts:["1 €","2 €","10 €","0,50 €"], correct:0, explain:"1 % de 50 € é 0,50 €; 2 % é 1 €."},
      {q:"Pedir dinheiro emprestado significa que…", opts:["temos de o devolver, normalmente com juros","é uma prenda","não é preciso devolver","o banco fica a dever-nos"], correct:0, explain:"Um empréstimo devolve-se. Os juros fazem com que se devolva mais do que se recebeu."},
      {q:"Já poupaste 15 € de um objetivo de 20 €. Que percentagem já tens?", opts:["75 %","15 %","50 %","20 %"], correct:0, explain:"15/20 = 75/100 = 75 %. Faltam 5 €."}
    ],
    compare:{
      left:{title:"🐷 Mealheiro", points:["Está à mão","Vê-se o dinheiro crescer","Pode perder-se ou ser roubado","Não rende juros"]},
      right:{title:"🏦 Conta no banco", points:["Mais seguro","Pode render juros","Precisa de um adulto para abrir (menores)","É mais difícil gastar por impulso"]}
    },
    boss:"Mostra o teu plano de poupança: objetivo, preço, prazo e quanto poupas por semana"
  },
  {
    id:"f5", num:5, c:"m5", icon:"🛒",
    title:"Compras Inteligentes",
    subtitle:"Preço por unidade, promoções, talão e publicidade", pages:"Referencial de Educação para o Consumo",
    lead:"No supermercado, o pacote maior nem sempre é o mais barato e a promoção nem sempre compensa. Com um pouco de matemática, descobres qual compensa mesmo.",
    missions:[
      {t:"Detetive do Preço por Kg", d:"Ler o preço por quilo ou por litro na etiqueta", f:"No supermercado (ou num folheto), encontrar 3 produtos e escrever o preço por kg ou por litro de cada um", xp:10},
      {t:"Leve 3, Pague 2", d:"Calcular se uma promoção compensa", f:"Encontrar uma promoção num folheto e calcular quanto custa, de facto, cada unidade", xp:15},
      {t:"Ler o Talão", d:"O que diz um talão de compras", f:"Num talão de casa, encontrar a data, o total, o troco e a quantidade de cada produto", xp:10},
      {t:"Caçador de Truques", d:"A publicidade quer convencer-te", f:"Ver 3 anúncios e escrever, para cada um, o truque que usa (famosos, «só hoje», música alegre…)", xp:10}
    ],
    resumo:[
      "Para comparar embalagens de tamanhos diferentes, usa-se o <b>preço por unidade</b>: por quilo (kg), por litro (L) ou por unidade. Está na etiqueta da prateleira.",
      "Exemplo: 500 g a 2 € dá 4 €/kg; 1 kg a 3,50 € dá 3,50 €/kg. O pacote grande compensa — <b>se</b> se gastar tudo antes de estragar.",
      "Numa promoção «leve 3, pague 2», cada unidade custa 2/3 do preço. Só compensa se precisarmos mesmo das 3.",
      "O <b>talão</b> (fatura) prova a compra: serve para trocar, devolver ou usar a garantia. Deve guardar-se.",
      "A <b>publicidade</b> quer convencer-nos a comprar: usa famosos, música, cores, frases como «só hoje» ou «últimas unidades». Perguntar «preciso mesmo?» ajuda a decidir."
    ],
    gloss:[
      ["preço por unidade","O preço por quilo, por litro ou por peça. Serve para comparar embalagens diferentes."],
      ["promoção","Preço mais baixo durante algum tempo ou em certas condições."],
      ["talão","Papel que a loja dá com o que se comprou, o preço e a data."],
      ["troco","Dinheiro que se recebe de volta quando se paga com mais do que o preço."],
      ["publicidade","Mensagens feitas para nos convencer a comprar."],
      ["marca branca","Produto com o nome da própria loja; costuma ser mais barato."]
    ],
    quiz:[
      {q:"Um pacote de 500 g custa 2 €. Qual é o preço por kg?", opts:["4 €/kg","2 €/kg","1 €/kg","2,50 €/kg"], correct:0, explain:"1 kg = 2 × 500 g, por isso 2 × 2 € = 4 €/kg."},
      {q:"O que compensa mais: 1 L de sumo a 1,20 € ou 2 L a 2,00 €?", opts:["2 L a 2,00 € (1 €/L)","1 L a 1,20 €","São iguais","Não dá para saber"], correct:0, explain:"2,00 € ÷ 2 = 1 €/L, mais barato do que 1,20 €/L. Mas só compensa se o sumo não se estragar."},
      {q:"Numa promoção «leve 3, pague 2», iogurtes de 0,60 € custam quanto cada um?", opts:["0,40 €","0,60 €","0,20 €","1,20 €"], correct:0, explain:"Pagas 2 × 0,60 = 1,20 € por 3 iogurtes: 1,20 ÷ 3 = 0,40 € cada."},
      {q:"Pagas uma compra de 7,35 € com uma nota de 10 €. Quanto recebes de troco?", opts:["2,65 €","3,65 €","2,35 €","3,35 €"], correct:0, explain:"10,00 − 7,35 = 2,65 €. Dica: 7,35 + 0,65 = 8; 8 + 2 = 10."},
      {q:"Para que serve guardar o talão?", opts:["Para trocar, devolver ou usar a garantia","Para pagar menos","Para a publicidade","Não serve para nada"], correct:0, explain:"O talão prova que compraste ali, nessa data e por esse preço."},
      {q:"Um anúncio diz «Só hoje! Últimas unidades!». O que pretende?", opts:["Fazer-te comprar com pressa, sem pensar","Informar-te com calma","Fazer-te poupar","Que não compres"], correct:0, explain:"A pressa é um truque da publicidade. Uma boa compra pode esperar um dia."},
      {q:"Quando é que o pacote grande NÃO compensa?", opts:["Quando parte se estraga antes de se gastar","Quando é mais barato por kg","Quando dura muito","Quando a família é grande"], correct:0, explain:"Se metade vai para o lixo, pagámos mais pelo que realmente comemos."}
    ],
    compare:{
      left:{title:"🧠 Compra pensada", points:["Leva lista","Compara o preço por kg ou por L","Pergunta: «preciso mesmo?»","Guarda o talão"]},
      right:{title:"⚡ Compra por impulso", points:["Compra o que está à vista","Acredita no «só hoje»","Escolhe pela embalagem","Esquece-se do que já tem em casa"]}
    },
    boss:"No supermercado com um adulto, escolhe entre 2 embalagens do mesmo produto e explica qual compensa"
  },
  {
    id:"f6", num:6, c:"m6", icon:"🏠",
    title:"A Economia da Casa",
    subtitle:"Contas da casa, energia, água e desperdício", pages:"Referencial de Educação para o Consumo · economia doméstica",
    lead:"Uma casa tem muitas despesas que não se veem: a luz, a água, o gás, a renda, a comida. Como no katei-ka, a economia doméstica que as crianças japonesas aprendem na escola, todos em casa podem ajudar a gastar menos e a desperdiçar menos.",
    missions:[
      {t:"As Contas da Casa", d:"Que despesas tem uma casa", f:"Com um adulto, fazer uma lista das despesas mensais da casa (sem valores, se preferirem)", xp:10},
      {t:"Caça aos Desperdícios", d:"Luz, água e aparelhos ligados sem precisar", f:"Durante uma semana, apontar luzes acesas em divisões vazias e torneiras abertas sem necessidade", xp:10},
      {t:"Lista e Ementa", d:"Planear as refeições e a lista de compras", f:"Planear com um adulto as refeições de 3 dias e fazer a lista de compras para elas", xp:15},
      {t:"Nada Vai para o Lixo", d:"Reaproveitar a comida", f:"Inventar uma receita com sobras (por exemplo, pão duro, legumes, arroz) e prepará-la com um adulto", xp:15}
    ],
    resumo:[
      "Uma casa tem <b>despesas fixas</b> (renda ou prestação da casa, internet) e <b>variáveis</b> (eletricidade, água, gás, supermercado).",
      "Poupar <b>energia</b>: apagar a luz ao sair, desligar os aparelhos em vez de os deixar em espera (modo standby), usar a máquina de lavar cheia.",
      "Poupar <b>água</b>: duche curto em vez de banho de imersão, fechar a torneira ao lavar os dentes.",
      "Planear as <b>refeições</b> e fazer uma <b>lista de compras</b> evita compras a mais e comida estragada.",
      "Ver o <b>prazo</b>: «consumir até» é o limite de segurança; «consumir de preferência antes de» quer dizer que, depois dessa data, o alimento pode perder qualidade mas ainda pode ser seguro."
    ],
    gloss:[
      ["economia doméstica","A boa gestão de uma casa: dinheiro, alimentação, energia, roupa e arrumação."],
      ["fatura","Documento com o valor a pagar por um serviço (luz, água, gás, internet)."],
      ["standby","Modo de espera de um aparelho: parece desligado, mas continua a gastar energia."],
      ["desperdício alimentar","Comida que se deita fora sem ser comida."],
      ["«consumir até»","Data limite de segurança de um alimento perecível."],
      ["«consumir de preferência antes de»","Data a partir da qual o alimento pode perder qualidade, mas ainda pode ser seguro."]
    ],
    quiz:[
      {q:"Qual destas é uma despesa de uma casa?", opts:["A fatura da eletricidade","A semanada que se recebe","Um salário","Uma prenda que se recebe"], correct:0, explain:"A eletricidade paga-se todos os meses: é uma despesa. Os outros são receitas."},
      {q:"O que é o modo standby?", opts:["O aparelho parece desligado mas continua a gastar energia","O aparelho está avariado","O aparelho não gasta nada","Um modo de poupar água"], correct:0, explain:"Em standby, a luzinha acesa mostra que ainda gasta energia. Desligar no botão ou na tomada poupa."},
      {q:"Qual destas poupa mais água?", opts:["Um duche curto","Um banho de imersão","Deixar a torneira aberta a lavar os dentes","Lavar a loiça com a torneira sempre aberta"], correct:0, explain:"Um duche curto gasta muito menos água do que encher a banheira."},
      {q:"Para que serve planear as refeições da semana?", opts:["Comprar só o necessário e desperdiçar menos","Comer sempre o mesmo","Ir mais vezes ao supermercado","Gastar mais"], correct:0, explain:"Com um plano e uma lista, compra-se o que se vai comer e quase nada se estraga."},
      {q:"Um iogurte diz «consumir até 10/03». Hoje é dia 12/03. O que fazes?", opts:["Não o como: passou a data de segurança","Como-o sem problema","Ponho-o no congelador","Guardo-o mais uma semana"], correct:0, explain:"«Consumir até» é a data limite de segurança. Depois dela, não se deve comer."},
      {q:"Uns biscoitos dizem «consumir de preferência antes de» uma data que já passou há dois dias. O que quer dizer?", opts:["Podem ter perdido qualidade, mas, se estiverem bem fechados e com bom aspeto, ainda podem ser seguros","São perigosos","Têm de ir logo para o lixo","Ficaram mais saudáveis"], correct:0, explain:"Esta data fala de qualidade. Se a embalagem estiver bem e o aspeto e o cheiro forem normais, pode ainda ser comido."},
      {q:"Qual destas ajuda a poupar energia em casa?", opts:["Usar a máquina de lavar só quando está cheia","Deixar a luz acesa nas divisões vazias","Abrir o frigorífico muitas vezes","Deixar o carregador sempre ligado"], correct:0, explain:"Encher a máquina faz o mesmo trabalho em menos lavagens."}
    ],
    compare:{
      left:{title:"🔁 Despesas fixas", points:["Renda ou prestação da casa","Internet e telefone","Seguros","Mensalidades"]},
      right:{title:"〰️ Despesas variáveis", points:["Eletricidade","Água e gás","Supermercado","Transportes"]}
    },
    boss:"Apresenta à família um plano com 3 maneiras de gastar menos energia, água ou comida em casa"
  },
  {
    id:"f7", num:7, c:"m7", icon:"🛡️",
    title:"Consumidor Atento e Seguro",
    subtitle:"Direitos do consumidor, garantia, reclamações e burlas", pages:"Referencial de Educação para o Consumo",
    lead:"Quem compra tem direitos: a ser informado, a ter um produto que funcione e a reclamar. E também tem de se proteger de burlas, sobretudo na internet e nos jogos.",
    missions:[
      {t:"Os Meus Direitos", d:"Direitos do consumidor", f:"Escrever 3 direitos do consumidor com um exemplo de cada um", xp:10},
      {t:"Avariou! E Agora?", d:"Garantia e livro de reclamações", f:"Escrever os passos a seguir se uns auscultadores avariarem um mês depois de comprados", xp:10},
      {t:"Detetor de Burlas", d:"Mensagens falsas e pedidos de códigos", f:"Ler 3 mensagens (inventadas por um adulto) e dizer quais são burlas e porquê", xp:15},
      {t:"Regras da Família para Compras Online", d:"Combinar regras com os adultos", f:"Escrever com um adulto 4 regras para compras na internet e em jogos", xp:10}
    ],
    resumo:[
      "O <b>consumidor</b> tem direitos: a <b>informação</b> (preço e características claros), a produtos <b>seguros</b> e que <b>funcionem</b>, e a <b>reclamar</b>.",
      "Em Portugal, um bem novo comprado numa loja tem <b>3 anos de garantia</b>: se avariar sem culpa de quem o usa, pode ser reparado ou trocado. Guarda-se o talão.",
      "Todas as lojas e serviços têm de ter o <b>Livro de Reclamações</b>, em papel e também online (livroreclamacoes.pt).",
      "<b>Burla</b> é um engano para ficar com o nosso dinheiro ou dados. Sinais de alerta: pressa, prémios que não pedimos, pedidos de códigos, palavras-passe ou dados do cartão.",
      "Nunca se partilham <b>palavras-passe</b> nem <b>códigos</b> que chegam por SMS, nem dentro de jogos. Em caso de dúvida, pergunta-se a um adulto antes de clicar."
    ],
    gloss:[
      ["consumidor","Quem compra ou usa um produto ou serviço."],
      ["garantia","Direito a ter um produto que funciona; em Portugal, 3 anos para bens novos."],
      ["Livro de Reclamações","Livro (em papel ou online) onde se regista uma queixa sobre uma loja ou serviço."],
      ["burla","Engano feito para ficar com o dinheiro ou os dados de alguém."],
      ["phishing","Mensagem falsa que finge ser de um banco, loja ou jogo para roubar dados."],
      ["palavra-passe","Código secreto que protege uma conta. Não se partilha com ninguém."]
    ],
    quiz:[
      {q:"Em Portugal, quanto tempo de garantia tem um bem novo comprado numa loja?", opts:["3 anos","1 mês","6 meses","Não tem garantia"], correct:0, explain:"Desde 2022, os bens novos têm 3 anos de garantia. Guarda o talão para a usares."},
      {q:"Onde se pode apresentar uma queixa sobre uma loja?", opts:["No Livro de Reclamações","Só nas redes sociais","Em lado nenhum","No talão"], correct:0, explain:"Todas as lojas e serviços têm Livro de Reclamações, em papel e online."},
      {q:"Recebes uma mensagem: «Ganhaste moedas grátis! Envia a tua palavra-passe.» É…", opts:["uma burla","um prémio verdadeiro","uma mensagem do teu banco","uma garantia"], correct:0, explain:"Ninguém precisa da tua palavra-passe para te dar um prémio. Pedir códigos é sinal de burla."},
      {q:"Qual destes é um sinal de alerta de burla?", opts:["Pressa: «responde nos próximos 10 minutos!»","Um preço afixado na prateleira","Um talão com a data","Uma loja com Livro de Reclamações"], correct:0, explain:"Os burlões apressam-nos para não termos tempo de pensar nem de perguntar a um adulto."},
      {q:"Uns auscultadores novos avariam ao fim de um mês, sem terem caído. O que fazes?", opts:["Voltar à loja com o talão e pedir reparação ou troca","Deitar fora","Comprar outros iguais","Nada: a culpa é tua"], correct:0, explain:"Estão dentro da garantia. Com o talão, a loja tem de reparar, trocar ou devolver o dinheiro."},
      {q:"Um amigo do jogo pede o código que chegou por SMS ao telemóvel da tua mãe. O que fazes?", opts:["Não envio e conto a um adulto","Envio, porque é amigo","Envio só metade","Peço-lhe o código dele"], correct:0, explain:"Esses códigos servem para confirmar pagamentos ou entrar em contas. Nunca se partilham."},
      {q:"Qual destes é um direito do consumidor?", opts:["Saber o preço antes de comprar","Levar sem pagar","Escolher o preço que quer pagar","Trocar sempre, mesmo sem motivo"], correct:0, explain:"O direito à informação obriga as lojas a mostrar o preço de forma clara."}
    ],
    compare:{
      left:{title:"✅ Seguro", points:["Comprar em sites conhecidos, com um adulto","Guardar talões e faturas","Palavras-passe só para ti","Perguntar quando há dúvida"]},
      right:{title:"🚨 Alerta de burla", points:["Prémios que não pediste","Pressa e ameaças","Pedidos de códigos ou palavras-passe","Preços bons demais para ser verdade"]}
    },
    boss:"Explica a um adulto o que fazes se um produto avariar e como reconheces uma burla"
  }
];
