/* HGP — conteúdo extra por mundo (a chave é o id do mundo em data/hgp.js)
   desafio:      perguntas novas, mais difíceis (Modo Desafio). correct = índice da resposta certa.
   explorar:     Portal Explorador — o que vem a seguir + links de fontes de confiança
                 links: {s:"rtp"|"khan"|"britkids"|"brit"|"bitesize"|"natgeo", q:"pesquisa"} ou {u:"url", n:"nome"}
   curiosidades: factos verificáveis, com a fonte indicada */
const HGP_EXTRA = {
  m1: {
    desafio: [
      {q:"Em que dia religioso aconteceu o terramoto de 1755?", opts:["Dia de Todos os Santos","Dia de Natal","Domingo de Páscoa","Dia de Santo António"], correct:0, explain:"O terramoto foi a 1 de novembro de 1755, Dia de Todos os Santos — muitas pessoas estavam nas igrejas, com velas acesas, o que ajudou a espalhar os incêndios."},
      {q:"Que rei estava no trono quando aconteceu o terramoto de 1755?", opts:["D. José I","D. João V","D. Maria I","D. João VI"], correct:0, explain:"D. José I reinava desde 1750; foi ele que deu ao futuro Marquês de Pombal o poder para reconstruir Lisboa."},
      {q:"Antes de ser Marquês de Pombal (1769), que título recebeu Sebastião José de Carvalho e Melo em 1759?", opts:["Conde de Oeiras","Duque de Bragança","Visconde de Lisboa","Barão do Porto"], correct:0, explain:"Foi Conde de Oeiras a partir de 1759 e só em 1769 recebeu o título de Marquês de Pombal."},
      {q:"Para que cidade foi transferida a capital do Brasil colonial em 1763, em parte por causa do ouro de Minas Gerais?", opts:["Rio de Janeiro","Salvador da Baía","São Paulo","Brasília"], correct:0, explain:"A capital passou de Salvador para o Rio de Janeiro em 1763, mais perto das regiões do ouro e do porto por onde ele saía."},
      {q:"Que vila brasileira ficou famosa pela riqueza do ouro, e hoje se chama Ouro Preto?", opts:["Vila Rica","Vila Nova","Vila Real","Vila Franca"], correct:0, explain:"Vila Rica, em Minas Gerais, foi o centro da corrida ao ouro no século XVIII; hoje chama-se Ouro Preto e é Património Mundial da UNESCO."}
    ],
    explorar: {
      proximo: "No 8.º ano, em História, vais estudar o Antigo Regime e o Iluminismo — o movimento de ideias que defendia a razão, a ciência e os direitos das pessoas, e que inspirou reis 'esclarecidos' como D. José I.",
      pontos: [
        "Porque é que o terramoto de 1755 fez filósofos europeus, como Voltaire, discutir se o mundo era justo?",
        "O que tinham em comum Pombal e outros ministros 'esclarecidos' da Europa?",
        "Como era a vida de uma pessoa escravizada nas minas de ouro do Brasil?"
      ],
      links: [
        {s:"rtp", q:"terramoto de 1755"},
        {s:"rtp", q:"Marquês de Pombal"},
        {s:"britkids", q:"Lisbon earthquake"}
      ]
    },
    curiosidades: [
      {t:"Depois do terramoto, Pombal mandou um questionário a todas as paróquias do país a perguntar quanto tempo durou o abalo, se o mar subiu e que estragos houve. Por isso é muitas vezes apontado como um pioneiro da sismologia (a ciência dos sismos).", fonte:"Encyclopaedia Britannica; Instituto Português do Mar e da Atmosfera"},
      {t:"Os cientistas estimam que o terramoto de 1755 teve uma magnitude entre 8,5 e 9. Foi sentido em grande parte da Europa e também no Norte de África.", fonte:"U.S. Geological Survey (USGS)"},
      {t:"A biblioteca do Palácio Nacional de Mafra tem cerca de 36 mil livros e uma colónia de morcegos que, de noite, come os insetos que estragariam os livros.", fonte:"Palácio Nacional de Mafra (Património Cultural)"}
    ]
  },
  m2: {
    desafio: [
      {q:"Que tratado, assinado em 1386, faz da aliança entre Portugal e Inglaterra a mais antiga do mundo ainda em vigor?", opts:["Tratado de Windsor","Tratado de Tordesilhas","Tratado de Methuen","Tratado de Lisboa"], correct:0, explain:"O Tratado de Windsor, de 1386, selou a aliança luso-britânica — foi por causa dela que Inglaterra ajudou Portugal contra Napoleão."},
      {q:"Para que cidade se mudou a capital de todo o império português quando a corte fugiu em 1807?", opts:["Rio de Janeiro","Salvador da Baía","Luanda","Goa"], correct:0, explain:"A corte chegou ao Brasil em 1808 e instalou-se no Rio de Janeiro, que foi a capital do império até 1821."},
      {q:"Em que ano o Brasil declarou a independência?", opts:["1822","1808","1834","1889"], correct:0, explain:"A independência do Brasil foi proclamada por D. Pedro a 7 de setembro de 1822."},
      {q:"D. Pedro IV de Portugal foi também o primeiro imperador do Brasil. Com que nome?", opts:["D. Pedro I","D. Pedro II","D. João VI","D. Miguel I"], correct:0, explain:"No Brasil foi D. Pedro I; em Portugal, D. Pedro IV — o mesmo homem com dois números."},
      {q:"Que documento, dado por D. Pedro em 1826, passou a ser a lei principal da monarquia liberal?", opts:["A Carta Constitucional","A Constituição de 1911","O Código Civil","A Lei das Sesmarias"], correct:0, explain:"A Carta Constitucional de 1826 foi 'outorgada' (dada) pelo rei, ao contrário da Constituição de 1822, que foi feita por deputados eleitos."}
    ],
    explorar: {
      proximo: "No 8.º ano vais estudar as grandes revoluções liberais — a Revolução Americana (1776) e a Revolução Francesa (1789) — que espalharam as ideias de liberdade, igualdade e constituição que chegaram a Portugal em 1820.",
      pontos: [
        "Porque é que Napoleão queria fechar os portos da Europa aos ingleses?",
        "O que mudou no Brasil por ter sido, durante 13 anos, a sede de um império?",
        "Em que é que uma Constituição 'votada' é diferente de uma Carta 'outorgada'?"
      ],
      links: [
        {s:"rtp", q:"invasões francesas"},
        {s:"rtp", q:"revolução liberal 1820"},
        {s:"britkids", q:"Napoleon"}
      ]
    },
    curiosidades: [
      {t:"As Linhas de Torres Vedras tinham mais de 150 fortificações e foram construídas quase em segredo, entre 1809 e 1810. Quando Massena as viu, percebeu que não conseguia passar.", fonte:"Rota Histórica das Linhas de Torres; Encyclopaedia Britannica"},
      {t:"Entre 1808 e 1821, o Rio de Janeiro foi a capital de todo o império português — um caso raro de um reino europeu governado a partir de outro continente.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  m3: {
    desafio: [
      {q:"Que político deu nome ao 'fontismo', a política de construir estradas e caminhos de ferro na 2.ª metade do século XIX?", opts:["Fontes Pereira de Melo","Marquês de Pombal","Afonso Costa","Teófilo Braga"], correct:0, explain:"António Maria de Fontes Pereira de Melo apostou nas obras públicas para modernizar o país — daí o nome 'fontismo'."},
      {q:"Que ponte ferroviária sobre o rio Douro, inaugurada em 1877, foi construída pela empresa de Gustave Eiffel?", opts:["Ponte Maria Pia","Ponte 25 de Abril","Ponte Vasco da Gama","Ponte da Arrábida"], correct:0, explain:"A Ponte D. Maria Pia, no Porto, foi construída pela empresa de Eiffel — o mesmo da Torre Eiffel, em Paris."},
      {q:"Que fonte de energia alimentava a maioria das máquinas a vapor?", opts:["Carvão","Petróleo","Energia solar","Gás natural"], correct:0, explain:"A água era aquecida com carvão (ou lenha) para produzir o vapor que movia as máquinas."},
      {q:"O que é o 'êxodo rural'?", opts:["A saída de muitas pessoas dos campos para as cidades","A chegada de estrangeiros ao campo","O fim da agricultura em Portugal","Uma festa das aldeias"], correct:0, explain:"No século XIX, muitas famílias deixaram os campos à procura de trabalho nas fábricas das cidades."},
      {q:"Que invenção de 1876 permitiu, pela primeira vez, falar com alguém à distância?", opts:["O telefone","O telégrafo","A rádio","A televisão"], correct:0, explain:"O telefone foi patenteado em 1876; o telégrafo, mais antigo, só enviava sinais em código."}
    ],
    explorar: {
      proximo: "No 8.º ano vais estudar a Revolução Industrial, que começou em Inglaterra no século XVIII, e perceber porque mudou para sempre a forma como trabalhamos, vivemos e viajamos.",
      pontos: [
        "Porque é que a Revolução Industrial começou em Inglaterra e não em Portugal?",
        "Como eram as condições de trabalho das crianças nas fábricas do século XIX?",
        "Que invenções de hoje mudam o trabalho tanto como a máquina a vapor mudou naquela época?"
      ],
      links: [
        {s:"rtp", q:"Fontes Pereira de Melo"},
        {s:"rtp", q:"caminho de ferro"},
        {s:"britkids", q:"Industrial Revolution"}
      ]
    },
    curiosidades: [
      {t:"Quando foi inaugurada, em 1877, a Ponte D. Maria Pia tinha o maior arco de ferro do mundo, com 160 metros de vão.", fonte:"Infraestruturas de Portugal; Encyclopaedia Britannica"},
      {t:"A primeira viagem de comboio em Portugal, em 1856, ligou Lisboa ao Carregado: cerca de 36 quilómetros.", fonte:"CP — Comboios de Portugal / Museu Nacional Ferroviário"}
    ]
  },
  m4: {
    desafio: [
      {q:"Quem chefiou o Governo Provisório da República, logo a seguir a 5 de outubro de 1910?", opts:["Teófilo Braga","Manuel de Arriaga","Afonso Costa","Sidónio Pais"], correct:0, explain:"O escritor e professor Teófilo Braga presidiu ao Governo Provisório até à eleição do primeiro Presidente."},
      {q:"Quem foi o primeiro Presidente da República eleito, em 1911?", opts:["Manuel de Arriaga","Teófilo Braga","Bernardino Machado","Óscar Carmona"], correct:0, explain:"Manuel de Arriaga foi eleito pelo Parlamento em agosto de 1911."},
      {q:"Que hino se tornou o hino nacional com a República?", opts:["A Portuguesa","Grândola, Vila Morena","Hino da Carta","Hino da Maria da Fonte"], correct:0, explain:"'A Portuguesa' foi adotada como hino nacional em 1911."},
      {q:"Quais são as cores principais da bandeira adotada pela República?", opts:["Verde e vermelho","Azul e branco","Vermelho e amarelo","Verde e branco"], correct:0, explain:"A bandeira verde e vermelha substituiu a bandeira azul e branca da monarquia."},
      {q:"Em que guerra combateram soldados portugueses durante a Primeira República?", opts:["Primeira Guerra Mundial","Segunda Guerra Mundial","Guerra Civil de Espanha","Guerra da Crimeia"], correct:0, explain:"Portugal entrou na Primeira Guerra Mundial em 1916 e combateu em França e em África."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar a Primeira Guerra Mundial (1914–1918) e a Europa entre as duas guerras, percebendo porque tantas repúblicas jovens, como a portuguesa, foram tão instáveis.",
      pontos: [
        "Porque é que a Primeira República teve tantos governos?",
        "Como foi a Batalha de La Lys (1918), onde morreram muitos soldados portugueses?",
        "O que mudou para as mulheres com a República — e o que ainda não mudou?"
      ],
      links: [
        {s:"rtp", q:"5 de outubro de 1910"},
        {s:"rtp", q:"regicídio"},
        {s:"britkids", q:"World War I"}
      ]
    },
    curiosidades: [
      {t:"'A Portuguesa' foi composta em 1890, como resposta patriótica ao Ultimato Inglês — 20 anos antes de se tornar o hino nacional. A música é de Alfredo Keil e a letra de Henrique Lopes de Mendonça.", fonte:"Presidência da República Portuguesa"},
      {t:"O último rei de Portugal, D. Manuel II, partiu para o exílio em Inglaterra, onde viveu até morrer, em 1932.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  m5: {
    desafio: [
      {q:"Quem substituiu Salazar na chefia do governo, em 1968?", opts:["Marcello Caetano","Américo Tomás","Humberto Delgado","Óscar Carmona"], correct:0, explain:"Marcello Caetano chefiou o governo de 1968 até ao 25 de Abril de 1974."},
      {q:"Como se chamava o campo de prisioneiros políticos em Cabo Verde, conhecido como 'campo da morte lenta'?", opts:["Tarrafal","Peniche","Caxias","Aljube"], correct:0, explain:"O campo do Tarrafal abriu em 1936; muitos presos morreram lá devido às condições duríssimas."},
      {q:"Que resposta célebre deu Humberto Delgado, em 1958, quando lhe perguntaram o que faria a Salazar se ganhasse as eleições?", opts:["\"Obviamente, demito-o!\"","\"Vou pensar nisso.\"","\"Nada, ele é o chefe.\"","\"Peço-lhe conselhos.\""], correct:0, explain:"\"Obviamente, demito-o!\" tornou Delgado o 'General sem Medo' e um símbolo da oposição."},
      {q:"Que lema resumia os valores do Estado Novo?", opts:["Deus, Pátria e Família","Liberdade, Igualdade, Fraternidade","Ordem e Progresso","Paz, Pão e Terra"], correct:0, explain:"\"Deus, Pátria e Família\" era ensinado nas escolas e repetido na propaganda do regime."},
      {q:"Em que ano Portugal entrou para a ONU, ainda durante o Estado Novo?", opts:["1955","1945","1974","1986"], correct:0, explain:"Portugal tornou-se membro da ONU em 1955, juntamente com outros países."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar os regimes ditatoriais da Europa no século XX — o fascismo em Itália e o nazismo na Alemanha — e a Segunda Guerra Mundial, comparando-os com o Estado Novo português.",
      pontos: [
        "Em que é que o Estado Novo se parecia (e não se parecia) com o fascismo italiano?",
        "Porque é que tantas famílias portuguesas emigraram 'a salto' para França nos anos 60?",
        "Como é que os jornais contornavam o 'lápis azul' da censura?"
      ],
      links: [
        {s:"rtp", q:"Estado Novo"},
        {s:"rtp", q:"Humberto Delgado"},
        {s:"rtp", q:"guerra colonial"}
      ]
    },
    curiosidades: [
      {t:"A censura do Estado Novo usava um lápis azul para riscar o que não podia ser publicado — por isso se fala, ainda hoje, do 'lápis azul'.", fonte:"Museu do Aljube — Resistência e Liberdade"},
      {t:"Nos anos 60, centenas de milhares de portugueses emigraram para França, muitos 'a salto': às escondidas, a pé, atravessando montanhas, para fugir à pobreza e à guerra colonial.", fonte:"Observatório da Emigração; Museu das Migrações"},
      {t:"Humberto Delgado foi assassinado por agentes da PIDE em 1965, em Espanha, perto da fronteira.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  m6: {
    desafio: [
      {q:"Quem foi o primeiro Presidente da República depois do 25 de Abril?", opts:["António de Spínola","Ramalho Eanes","Mário Soares","Costa Gomes"], correct:0, explain:"O general António de Spínola presidiu à Junta de Salvação Nacional e foi Presidente entre maio e setembro de 1974."},
      {q:"Em que dia se realizaram as primeiras eleições livres, para a Assembleia Constituinte?", opts:["25 de abril de 1975","25 de abril de 1974","5 de outubro de 1975","1 de maio de 1974"], correct:0, explain:"Exatamente um ano depois da revolução, mais de 90% dos eleitores foram votar."},
      {q:"Quem foi o primeiro Presidente eleito diretamente pelo povo, em 1976?", opts:["Ramalho Eanes","Mário Soares","Jorge Sampaio","Spínola"], correct:0, explain:"O general António Ramalho Eanes foi eleito em junho de 1976."},
      {q:"Quem chefiou o I Governo Constitucional, em 1976?", opts:["Mário Soares","Sá Carneiro","Cavaco Silva","Álvaro Cunhal"], correct:0, explain:"Mário Soares foi o primeiro-ministro do I Governo Constitucional."},
      {q:"Porque é que o cravo se tornou o símbolo da revolução?", opts:["Porque foram oferecidos cravos aos soldados, que os puseram nas espingardas","Porque era a flor preferida de Salazar","Porque era a flor do brasão do MFA","Porque abril é o único mês em que há cravos"], correct:0, explain:"Celeste Caeiro e outras pessoas deram cravos vermelhos aos soldados, que os puseram nos canos das armas."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar o mundo da Guerra Fria, a descolonização em África e na Ásia e a construção da democracia e da integração europeia em Portugal.",
      pontos: [
        "Porque é que uma revolução feita por militares acabou por dar o poder ao voto do povo?",
        "Como viveram a descolonização as pessoas em Angola e Moçambique?",
        "Que direitos tens hoje que uma criança de 1970 não tinha?"
      ],
      links: [
        {s:"rtp", q:"25 de Abril"},
        {s:"rtp", q:"Constituição de 1976"},
        {u:"https://www.cd25a.uc.pt/", n:"Centro de Documentação 25 de Abril (Universidade de Coimbra)"}
      ]
    },
    curiosidades: [
      {t:"Celeste Caeiro trabalhava num restaurante que ia oferecer cravos aos clientes num aniversário. Como o restaurante não abriu por causa da revolução, ela levou os cravos e deu-os aos soldados.", fonte:"Centro de Documentação 25 de Abril"},
      {t:"A ponte sobre o Tejo, em Lisboa, chamava-se Ponte Salazar quando foi inaugurada, em 1966. Depois da revolução passou a chamar-se Ponte 25 de Abril.", fonte:"Infraestruturas de Portugal"}
    ]
  },
  m7: {
    desafio: [
      {q:"Qual é o ponto mais alto de Portugal?", opts:["Montanha do Pico (Açores)","Serra da Estrela","Pico Ruivo (Madeira)","Serra do Gerês"], correct:0, explain:"A montanha do Pico, nos Açores, tem 2351 m; a Torre, na Serra da Estrela, é o ponto mais alto de Portugal continental (1993 m)."},
      {q:"Qual é o maior rio da Península Ibérica, que passa por Lisboa?", opts:["Tejo","Douro","Guadiana","Mondego"], correct:0, explain:"O Tejo tem cerca de 1000 km, nasce em Espanha e desagua em Lisboa."},
      {q:"O que mede a taxa de natalidade?", opts:["O número de nascimentos por cada mil habitantes, num ano","O número de pessoas que morrem por ano","O número de filhos por família","A idade média da população"], correct:0, explain:"A taxa de natalidade compara os nascimentos de um ano com o total da população (por mil habitantes)."},
      {q:"Que região de Portugal tem a maior densidade populacional?", opts:["Área Metropolitana de Lisboa","Alentejo","Trás-os-Montes","Beira Interior"], correct:0, explain:"A Área Metropolitana de Lisboa concentra muita gente numa área relativamente pequena."},
      {q:"Como se chama o indicador que compara o número de idosos com o número de jovens?", opts:["Índice de envelhecimento","Taxa de natalidade","Densidade populacional","Esperança de vida"], correct:0, explain:"O índice de envelhecimento diz quantos idosos há por cada 100 jovens."}
    ],
    explorar: {
      proximo: "Em Geografia, no 7.º e 8.º anos, vais aprender a ler mapas e paisagens, estudar o clima e o relevo, e comparar a população e as cidades de Portugal com as do resto do mundo.",
      pontos: [
        "Porque é que há aldeias no interior quase sem crianças?",
        "Como seria Portugal se toda a gente vivesse no interior?",
        "Que profissões existem hoje que não existiam quando os teus avós eram novos?"
      ],
      links: [
        {s:"rtp", q:"censos"},
        {s:"rtp", q:"população portuguesa"},
        {s:"natgeo", q:"Portugal"}
      ]
    },
    curiosidades: [
      {t:"A Zona Económica Exclusiva de Portugal — a área de mar onde o país tem direitos sobre os recursos — é cerca de 18 vezes maior do que o território em terra.", fonte:"Direção-Geral de Política do Mar"},
      {t:"A montanha do Pico, nos Açores, é um vulcão: tem 2351 metros e é o ponto mais alto de Portugal.", fonte:"Governo dos Açores — Parque Natural do Pico"}
    ]
  },
  m8: {
    desafio: [
      {q:"Quantos países fazem parte da União Europeia, desde a saída do Reino Unido em 2020?", opts:["27","28","25","30"], correct:0, explain:"Com a saída do Reino Unido, a UE ficou com 27 Estados-membros."},
      {q:"Onde fica a sede da ONU?", opts:["Nova Iorque","Genebra","Bruxelas","Paris"], correct:0, explain:"A sede da ONU fica em Nova Iorque; Genebra tem um dos seus grandes escritórios."},
      {q:"Que português se tornou Secretário-Geral da ONU em 2017?", opts:["António Guterres","Durão Barroso","Mário Soares","Marcelo Rebelo de Sousa"], correct:0, explain:"António Guterres, antigo primeiro-ministro, tornou-se Secretário-Geral da ONU em janeiro de 2017."},
      {q:"Que português presidiu à Comissão Europeia entre 2004 e 2014?", opts:["Durão Barroso","António Guterres","Cavaco Silva","Jorge Sampaio"], correct:0, explain:"José Manuel Durão Barroso presidiu à Comissão Europeia durante dois mandatos."},
      {q:"Qual é a sede principal das instituições da União Europeia?", opts:["Bruxelas","Lisboa","Berlim","Estrasburgo"], correct:0, explain:"Bruxelas acolhe a Comissão Europeia e o Conselho; o Parlamento Europeu reúne também em Estrasburgo."}
    ],
    explorar: {
      proximo: "No 9.º ano vais estudar como nasceu a construção europeia depois da Segunda Guerra Mundial e o papel da ONU num mundo dividido pela Guerra Fria.",
      pontos: [
        "Porque é que países que estiveram em guerra decidiram juntar-se na Europa?",
        "O que faz um Secretário-Geral da ONU num dia normal?",
        "Que vantagens e que desafios traz partilhar uma moeda com outros países?"
      ],
      links: [
        {s:"rtp", q:"União Europeia"},
        {s:"britkids", q:"United Nations"},
        {s:"britkids", q:"European Union"}
      ]
    },
    curiosidades: [
      {t:"As 12 estrelas da bandeira europeia não representam o número de países: o número 12 simboliza a perfeição e a união, e nunca muda.", fonte:"União Europeia (europa.eu)"},
      {t:"O português tem mais de 250 milhões de falantes, sendo uma das línguas mais faladas do mundo. Desde 2019, a UNESCO celebra o Dia Mundial da Língua Portuguesa a 5 de maio.", fonte:"UNESCO; Camões — Instituto da Cooperação e da Língua"}
    ]
  }
};
