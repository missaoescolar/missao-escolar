/* Ciências Naturais — conteúdo extra por mundo (ver o formato em data/extra-hgp.js) */
const CN_EXTRA = {
  c1: {
    desafio: [
      {q:"Que vitamina o corpo consegue produzir na pele, com a ajuda da luz do Sol?", opts:["Vitamina D","Vitamina C","Vitamina A","Vitamina B12"], correct:0, explain:"A pele produz vitamina D quando apanha luz solar; ela ajuda a fixar o cálcio nos ossos."},
      {q:"A falta de ferro na alimentação pode causar…", opts:["anemia","cárie dentária","asma","obesidade"], correct:0, explain:"O ferro é necessário para os glóbulos vermelhos transportarem oxigénio; sem ele pode surgir anemia, com cansaço e palidez."},
      {q:"Que sal mineral, presente no leite e nos laticínios, é essencial para os ossos e os dentes?", opts:["Cálcio","Sódio","Ferro","Iodo"], correct:0, explain:"O cálcio dá rigidez aos ossos e aos dentes."},
      {q:"O que significa um pão ser 'integral'?", opts:["É feito com o grão inteiro, por isso tem mais fibra","Não tem glúten","Não tem açúcar","É feito sem farinha"], correct:0, explain:"A farinha integral usa o grão inteiro, incluindo a casca (farelo), rica em fibra."},
      {q:"Qual é a principal função da fibra alimentar (presente na fruta, hortícolas e cereais integrais)?", opts:["Ajudar o funcionamento do intestino","Dar energia rápida","Construir músculo","Transportar oxigénio"], correct:0, explain:"A fibra não é digerida, mas ajuda o intestino a funcionar regularmente e dá sensação de saciedade."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar o organismo humano com mais pormenor e a relação entre alimentação, saúde e doença. Mais tarde, em Biologia e Química, vais ver de que moléculas são feitos os nutrientes.",
      pontos: [
        "Porque é que os marinheiros dos Descobrimentos adoeciam nas viagens longas?",
        "Como se lê a tabela nutricional de um pacote de cereais?",
        "Porque é que precisamos de pouca quantidade de vitaminas, mas não podemos passar sem elas?"
      ],
      links: [
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"},
        {s:"rtp", q:"alimentação saudável"},
        {s:"britkids", q:"nutrition"}
      ]
    },
    curiosidades: [
      {t:"Nas longas viagens marítimas, muitos marinheiros sofriam de escorbuto, uma doença causada pela falta de vitamina C. Comer citrinos, como limões e laranjas, previne-a.", fonte:"Encyclopaedia Britannica"},
      {t:"A Roda dos Alimentos portuguesa foi criada em 1977 e renovada em 2003, quando passou a ter 7 grupos e a água no centro.", fonte:"Direção-Geral da Saúde (DGS)"}
    ]
  },
  c2: {
    desafio: [
      {q:"Qual é a parte mais comprida do tubo digestivo?", opts:["Intestino delgado","Intestino grosso","Esófago","Estômago"], correct:0, explain:"O intestino delgado mede, num adulto, cerca de 6 a 7 metros, dobrado dentro do abdómen."},
      {q:"Que líquido produzido pelo fígado ajuda a digerir as gorduras?", opts:["Bílis","Saliva","Suco gástrico","Urina"], correct:0, explain:"A bílis é produzida no fígado, guardada na vesícula biliar e lançada no intestino delgado."},
      {q:"Onde começa a digestão química do amido (por exemplo, do pão)?", opts:["Na boca, com a saliva","No estômago","No intestino grosso","No esófago"], correct:0, explain:"A saliva tem uma enzima que começa a transformar o amido. Experimenta mastigar pão durante muito tempo: fica ligeiramente doce!"},
      {q:"Quantos dentes tem, normalmente, a dentição definitiva completa de um adulto?", opts:["32","20","28","36"], correct:0, explain:"A dentição definitiva tem 32 dentes (contando os 4 sisos); a dentição de leite tem 20."},
      {q:"Como se chamam os movimentos musculares que empurram o alimento ao longo do tubo digestivo?", opts:["Movimentos peristálticos","Movimentos respiratórios","Batimentos cardíacos","Reflexos"], correct:0, explain:"São ondas de contração dos músculos das paredes do tubo digestivo — funcionam até de pernas para o ar."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar as enzimas — as 'tesouras químicas' que cortam os nutrientes em pedaços pequenos — e os biliões de bactérias que vivem no intestino e ajudam a digestão (o microbioma).",
      pontos: [
        "Porque é que o estômago não se digere a si próprio?",
        "Que bactérias boas vivem no intestino e o que fazem?",
        "Porque é que as vacas ruminam (voltam a mastigar a comida)?"
      ],
      links: [
        {s:"khan", q:"sistema digestivo"},
        {s:"britkids", q:"digestive system"},
        {s:"bitesize", q:"digestive system"}
      ]
    },
    curiosidades: [
      {t:"O revestimento interior do estômago é renovado a cada poucos dias, e uma camada de muco protege-o do próprio ácido que produz.", fonte:"Encyclopaedia Britannica"},
      {t:"Engolir não depende da gravidade: graças aos movimentos peristálticos, os astronautas conseguem comer e engolir no espaço.", fonte:"NASA"}
    ]
  },
  c3: {
    desafio: [
      {q:"Quantos lobos tem o pulmão direito?", opts:["3","2","4","1"], correct:0, explain:"O pulmão direito tem 3 lobos e o esquerdo tem 2, para dar espaço ao coração."},
      {q:"Que estrutura fecha a entrada da traqueia quando engolimos, para os alimentos não irem para os pulmões?", opts:["Epiglote","Diafragma","Úvula","Laringe"], correct:0, explain:"A epiglote funciona como uma tampa; quando falha, tossimos para expulsar o que entrou."},
      {q:"Aproximadamente que percentagem do ar que inspiramos é oxigénio?", opts:["21%","78%","50%","1%"], correct:0, explain:"O ar tem cerca de 21% de oxigénio e 78% de azoto."},
      {q:"Para que servem os pelos e o muco do nariz?", opts:["Para filtrar, aquecer e humedecer o ar","Para sentir sabores","Para produzir oxigénio","Para guardar ar"], correct:0, explain:"O nariz prepara o ar antes de chegar aos pulmões, retendo poeiras e micróbios."},
      {q:"Quantas vezes por minuto respira, em média, um adulto em repouso?", opts:["Entre 12 e 20","Entre 1 e 3","Entre 60 e 80","Entre 100 e 120"], correct:0, explain:"Em repouso, um adulto respira cerca de 12 a 20 vezes por minuto; as crianças um pouco mais."}
    ],
    explorar: {
      proximo: "Mais à frente vais perceber como o sistema respiratório e o circulatório trabalham em equipa e o que acontece quando o corpo faz esforço e não tem oxigénio suficiente.",
      pontos: [
        "Porque é que o coração e a respiração aceleram quando corremos?",
        "Como é que os peixes respiram debaixo de água?",
        "O que é o soluço e porque acontece?"
      ],
      links: [
        {s:"khan", q:"sistema respiratório"},
        {s:"britkids", q:"respiratory system"},
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"}
      ]
    },
    curiosidades: [
      {t:"Se fosse possível espalhar todos os alvéolos de um adulto, cobririam uma área de cerca de 50 a 75 m² — mais ou menos metade de um campo de ténis.", fonte:"Encyclopaedia Britannica"},
      {t:"O pulmão esquerdo é mais pequeno do que o direito porque precisa de deixar espaço para o coração.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  c4: {
    desafio: [
      {q:"Que lado do coração recebe o sangue rico em oxigénio vindo dos pulmões?", opts:["O lado esquerdo","O lado direito","Os dois ao mesmo tempo","Nenhum"], correct:0, explain:"O sangue oxigenado entra na aurícula esquerda e sai pelo ventrículo esquerdo para todo o corpo."},
      {q:"Qual é a maior artéria do corpo humano?", opts:["Aorta","Veia cava","Artéria pulmonar","Carótida"], correct:0, explain:"A aorta sai do ventrículo esquerdo e distribui o sangue para todo o corpo."},
      {q:"Que médico inglês descreveu pela primeira vez, em 1628, a circulação completa do sangue?", opts:["William Harvey","Alexander Fleming","Louis Pasteur","Isaac Newton"], correct:0, explain:"William Harvey mostrou que o sangue circula num circuito fechado, bombeado pelo coração."},
      {q:"Como se chama o circuito do sangue entre o coração e os pulmões?", opts:["Pequena circulação (pulmonar)","Grande circulação","Circulação linfática","Circulação cerebral"], correct:0, explain:"Na pequena circulação o sangue vai aos pulmões buscar oxigénio; na grande circulação leva-o ao corpo."},
      {q:"Que substância dos glóbulos vermelhos transporta o oxigénio e lhes dá a cor vermelha?", opts:["Hemoglobina","Clorofila","Plasma","Insulina"], correct:0, explain:"A hemoglobina tem ferro, que se liga ao oxigénio."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar a tensão arterial, os grupos sanguíneos (A, B, AB, O) e porque é que nem todas as pessoas podem dar sangue umas às outras.",
      pontos: [
        "Porque é que as veias dos pulsos parecem azuis, se o sangue é vermelho?",
        "O que é um grupo sanguíneo e porque importa numa transfusão?",
        "Como é que o exercício físico fortalece o coração?"
      ],
      links: [
        {s:"khan", q:"sistema circulatório"},
        {s:"britkids", q:"heart"},
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"}
      ]
    },
    curiosidades: [
      {t:"Um glóbulo vermelho vive cerca de 120 dias. Todos os segundos, a medula óssea produz milhões de glóbulos vermelhos novos.", fonte:"Encyclopaedia Britannica"},
      {t:"O sangue não é azul dentro das veias: é sempre vermelho, mais escuro quando tem pouco oxigénio. As veias parecem azuladas por causa da forma como a pele deixa passar a luz.", fonte:"Scientific American"}
    ]
  },
  c5: {
    desafio: [
      {q:"Como se chamam as pequeníssimas unidades dos rins que filtram o sangue?", opts:["Nefrónios","Alvéolos","Neurónios","Vilosidades"], correct:0, explain:"Cada rim tem cerca de um milhão de nefrónios, os 'filtros' que formam a urina."},
      {q:"Que substância, resultante do uso das proteínas pelo corpo, é eliminada na urina?", opts:["Ureia","Glicose","Oxigénio","Clorofila"], correct:0, explain:"A ureia forma-se no fígado e é eliminada pelos rins."},
      {q:"Além dos rins e da pele, que órgãos eliminam um resíduo do corpo (o dióxido de carbono)?", opts:["Os pulmões","O estômago","O coração","Os ossos"], correct:0, explain:"Os pulmões eliminam o dióxido de carbono produzido pela respiração celular."},
      {q:"Aproximadamente quanta urina produz um adulto por dia?", opts:["1 a 2 litros","10 litros","100 mililitros","5 a 6 litros"], correct:0, explain:"Um adulto saudável produz, em geral, entre 1 e 2 litros de urina por dia."},
      {q:"Porque é que a urina fica mais escura quando bebemos pouca água?", opts:["Porque fica mais concentrada","Porque tem mais sangue","Porque os rins param","Porque tem mais oxigénio"], correct:0, explain:"Com menos água, as mesmas substâncias ficam dissolvidas em menos líquido."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar a homeostasia — o conjunto de mecanismos que mantêm o corpo em equilíbrio (água, sais, temperatura), mesmo quando tudo à volta muda.",
      pontos: [
        "Como é que o corpo 'sabe' quando precisa de beber água?",
        "O que é a hemodiálise e quem precisa dela?",
        "Porque é que suamos mais quando faz calor ou fazemos exercício?"
      ],
      links: [
        {s:"khan", q:"sistema urinário"},
        {s:"britkids", q:"kidney"},
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"}
      ]
    },
    curiosidades: [
      {t:"Os rins filtram cerca de 180 litros de líquido do sangue por dia, mas quase tudo volta a ser absorvido: só 1 a 2 litros saem como urina.", fonte:"National Kidney Foundation; Encyclopaedia Britannica"},
      {t:"É possível viver de forma saudável com apenas um rim — por isso há pessoas que doam um rim a um familiar.", fonte:"National Kidney Foundation"}
    ]
  },
  c6: {
    desafio: [
      {q:"Em que estruturas das células vegetais acontece a fotossíntese?", opts:["Cloroplastos","Núcleo","Raízes","Estames"], correct:0, explain:"Os cloroplastos têm a clorofila que capta a luz."},
      {q:"Por onde entra o dióxido de carbono nas folhas?", opts:["Pelos estomas","Pelas raízes","Pelas flores","Pelo caule"], correct:0, explain:"Os estomas são pequenos poros, sobretudo na página inferior das folhas, que abrem e fecham."},
      {q:"Que vasos levam a água das raízes até às folhas?", opts:["Xilema (vasos lenhosos)","Floema (vasos liberinos)","Artérias","Estomas"], correct:0, explain:"O xilema transporta a seiva bruta (água e sais); o floema leva a seiva elaborada, com açúcares."},
      {q:"Porque é que muitas folhas ficam amarelas ou vermelhas no outono?", opts:["A clorofila decompõe-se e veem-se outros pigmentos","As folhas ganham tinta da chuva","As folhas apanham mais sol","As raízes deixam de ter água"], correct:0, explain:"Com menos luz, a planta deixa de produzir clorofila; os pigmentos amarelos e vermelhos, que estavam escondidos, ficam visíveis."},
      {q:"Como se chamam os seres vivos que, como as plantas, produzem o seu próprio alimento?", opts:["Autotróficos","Heterotróficos","Decompositores","Consumidores"], correct:0, explain:"Os autotróficos fabricam a sua matéria orgânica; os animais são heterotróficos."}
    ],
    explorar: {
      proximo: "No 8.º ano vais estudar os ecossistemas e as cadeias alimentares, onde a fotossíntese é o ponto de partida de toda a energia. Mais tarde vais escrever a fotossíntese como uma equação química.",
      pontos: [
        "Se as plantas produzem oxigénio, porque é que também respiram?",
        "Que seres vivos fazem fotossíntese nos oceanos?",
        "Uma planta consegue crescer só com luz artificial?"
      ],
      links: [
        {s:"khan", q:"fotossíntese"},
        {s:"natgeo", q:"photosynthesis"},
        {s:"britkids", q:"photosynthesis"}
      ]
    },
    curiosidades: [
      {t:"Cerca de metade do oxigénio da Terra é produzido no oceano, sobretudo pelo fitoplâncton — seres microscópicos que fazem fotossíntese.", fonte:"NOAA — National Ocean Service (EUA)"},
      {t:"As árvores mais altas do mundo são sequoias da Califórnia: a mais alta conhecida tem mais de 115 metros, mais do que um prédio de 30 andares.", fonte:"U.S. National Park Service"}
    ]
  },
  c7: {
    desafio: [
      {q:"Que glândula, na base do cérebro, produz hormonas que dão início às mudanças da puberdade?", opts:["Hipófise","Tiroide","Pâncreas","Glândula salivar"], correct:0, explain:"A hipófise, comandada pelo hipotálamo, envia sinais aos ovários ou aos testículos para produzirem hormonas sexuais."},
      {q:"Qual é a principal hormona sexual produzida pelos testículos?", opts:["Testosterona","Insulina","Adrenalina","Estrogénio"], correct:0, explain:"A testosterona é responsável por muitas mudanças da puberdade nos rapazes, como a voz mais grave."},
      {q:"Que hormonas principais são produzidas pelos ovários?", opts:["Estrogénio e progesterona","Testosterona e insulina","Adrenalina e cortisol","Melatonina e serotonina"], correct:0, explain:"O estrogénio e a progesterona controlam as mudanças da puberdade e o ciclo menstrual."},
      {q:"Onde acontece normalmente a fecundação?", opts:["Nas trompas de Falópio","No útero","Nos ovários","Na vagina"], correct:0, explain:"O óvulo e o espermatozoide encontram-se normalmente nas trompas de Falópio; depois, o embrião desloca-se para o útero."},
      {q:"Que órgão, formado durante a gravidez, liga o bebé à mãe e lhe leva oxigénio e nutrientes?", opts:["Placenta","Pulmão","Fígado","Estômago"], correct:0, explain:"A placenta liga-se ao bebé pelo cordão umbilical — o umbigo é a 'marca' que fica dessa ligação."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar com mais pormenor a reprodução humana e a hereditariedade: porque é que os filhos se parecem com os pais, mas nunca são iguais.",
      pontos: [
        "Porque é que a puberdade começa em idades diferentes em pessoas diferentes?",
        "Como é que os genes passam dos pais para os filhos?",
        "O que são gémeos verdadeiros (idênticos) e gémeos falsos?"
      ],
      links: [
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"},
        {s:"britkids", q:"puberty"},
        {s:"khan", q:"reprodução humana"}
      ]
    },
    curiosidades: [
      {t:"O óvulo é a maior célula do corpo humano: tem cerca de 0,1 mm, quase do tamanho de um ponto final. O espermatozoide é uma das mais pequenas.", fonte:"Encyclopaedia Britannica"},
      {t:"Gémeos verdadeiros formam-se quando um embrião se divide em dois; por isso têm os mesmos genes. Gémeos falsos vêm de dois óvulos diferentes.", fonte:"KidsHealth (Nemours)"}
    ]
  },
  c8: {
    desafio: [
      {q:"Quem descobriu a penicilina, o primeiro antibiótico, em 1928?", opts:["Alexander Fleming","Louis Pasteur","Edward Jenner","Marie Curie"], correct:0, explain:"Fleming reparou que um bolor (Penicillium) matava as bactérias à sua volta numa placa esquecida no laboratório."},
      {q:"Quem criou a primeira vacina, contra a varíola, em 1796?", opts:["Edward Jenner","Alexander Fleming","William Harvey","Robert Koch"], correct:0, explain:"Jenner usou material da varíola das vacas — daí a palavra 'vacina', do latim 'vacca'."},
      {q:"Que cientista francês mostrou que muitas doenças são causadas por micróbios e criou a vacina contra a raiva, em 1885?", opts:["Louis Pasteur","Antoine Lavoisier","Isaac Newton","Charles Darwin"], correct:0, explain:"Louis Pasteur também inventou a 'pasteurização', que ainda hoje torna o leite seguro."},
      {q:"Porque é perigoso tomar antibióticos sem necessidade?", opts:["As bactérias podem tornar-se resistentes","Os antibióticos fazem engordar","Os antibióticos curam vírus demasiado depressa","Não há perigo nenhum"], correct:0, explain:"O uso excessivo seleciona bactérias resistentes, e os antibióticos deixam de funcionar quando são mesmo precisos."},
      {q:"Que microrganismo é usado para fazer o pão crescer?", opts:["Levedura (um fungo)","Vírus da gripe","Bactéria da tuberculose","Algas"], correct:0, explain:"As leveduras fermentam os açúcares da massa e libertam dióxido de carbono, que faz o pão crescer."}
    ],
    explorar: {
      proximo: "Mais à frente vais estudar o sistema imunitário em pormenor — anticorpos, glóbulos brancos 'com memória' — e perceber exatamente como uma vacina ensina o corpo a defender-se.",
      pontos: [
        "Porque é que os antibióticos não funcionam contra a gripe?",
        "Como é que os cientistas criam uma vacina nova?",
        "Que micróbios bons vivem na tua pele e no teu intestino?"
      ],
      links: [
        {s:"rtp", q:"vacinas"},
        {s:"britkids", q:"bacteria"},
        {u:"https://kidshealth.org/en/kids/", n:"KidsHealth (Nemours) — saúde explicada a crianças, em inglês"}
      ]
    },
    curiosidades: [
      {t:"A varíola é a única doença humana que foi completamente eliminada do mundo, graças à vacinação. A Organização Mundial da Saúde declarou-a erradicada em 1980.", fonte:"Organização Mundial da Saúde (OMS)"},
      {t:"Estima-se que no corpo humano vivam tantas bactérias como células humanas — cerca de 38 biliões (no sentido português: 38 milhões de milhões).", fonte:"Sender, Fuchs & Milo (2016), revista científica PLOS Biology"},
      {t:"Antonie van Leeuwenhoek, que construía os seus próprios microscópios, foi dos primeiros a ver microrganismos, no século XVII. Chamava-lhes 'animálculos'.", fonte:"Encyclopaedia Britannica"}
    ]
  }
};
