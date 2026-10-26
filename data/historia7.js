/* História do 7.º ano. Aprendizagens Essenciais de História do 7.º ano; um mundo por subdomínio do manual
   «Somos História 7» (Areal) e do seu caderno de atividades, que servem só de referência (conteúdo original).
   Os factos vêm primeiro; a ligação aos jogos, quando existe, é só uma ponte e não trivializa acontecimentos graves.
   Datas antigas são aproximadas e indicadas como tal (c. = cerca de).
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const HIST7_WORLDS = [
  {
    id:"h1", num:1, c:"m1", icon:"🔥",
    title:"Dos Caçadores aos Agricultores",
    subtitle:"Das sociedades recolectoras às primeiras sociedades produtoras", pages:"Somos História 7, A1 (pp. 8–33); caderno de atividades, fichas 1 a 3B (pp. 5–13)",
    lead:"Durante a maior parte da história humana, as pessoas viveram da caça, da pesca e da recolha de frutos, mudando de lugar com as estações. Há cerca de 12 000 anos, algumas comunidades começaram a cultivar plantas e a criar animais, e passaram a viver em aldeias. Neste mundo vais conhecer a hominização, o Paleolítico e o Neolítico.",
    missions:[
      {t:"Linha do Tempo da Humanidade", d:"O processo de hominização", f:"Faz uma linha do tempo com: Homo habilis, Homo erectus, Homo sapiens, o domínio do fogo, a arte rupestre e o início da agricultura.\nUsa uma escala e escreve as datas aproximadas (com «c.»).\nConfirma no manual (A1).", xp:10},
      {t:"Gravuras do Côa", d:"A arte do Paleolítico em Portugal", f:"Pesquisa o Vale do Côa (Património Mundial da UNESCO desde 1998).\nDesenha um animal gravado nas rochas e escreve 3 frases: o que é, quando foi feito e porque é importante.", xp:10},
      {t:"Pedra Lascada, Pedra Polida", d:"Instrumentos do Paleolítico e do Neolítico", f:"Faz uma tabela com 3 instrumentos do Paleolítico e 3 do Neolítico.\nPara cada um: material, técnica (lascada ou polida) e para que servia.", xp:10},
      {t:"Antas e Menires", d:"O megalitismo", f:"Pesquisa o Cromeleque dos Almendres (Évora) ou uma anta perto de ti.\nExplica a diferença entre anta (dólmen), menir e cromeleque.\nIndica uma hipótese para a função de cada um.", xp:10}
    ],
    resumo:[
      "A <b>hominização</b> é o longo processo de evolução que levou ao ser humano atual: postura bípede, aumento do cérebro, fabrico de instrumentos e linguagem. Começou em África.",
      "Espécies importantes: <b>Homo habilis</b> (associado aos primeiros instrumentos de pedra lascada, há c. 2,5 milhões de anos), <b>Homo erectus</b> (domínio do fogo; saiu de África) e <b>Homo sapiens</b> (a nossa espécie, surgida em África há c. 300 mil anos).",
      "No <b>Paleolítico</b>, os seres humanos eram <b>recolectores e caçadores</b> e <b>nómadas</b>: deslocavam-se à procura de alimento. Usavam instrumentos de <b>pedra lascada</b>, osso e madeira, e dominavam o fogo.",
      "A <b>arte do Paleolítico</b>: pinturas e gravuras rupestres (Altamira, Lascaux e, em Portugal, o <b>Vale do Côa</b>) e pequenas estatuetas femininas («vénus»).",
      "No <b>Neolítico</b> (desde c. 10 000 a.C. no Crescente Fértil, mais tarde na Europa), surgiram a <b>agricultura</b> e a <b>pastorícia</b>: o modo de vida produtor. As comunidades tornaram-se <b>sedentárias</b> e formaram <b>aldeias</b>.",
      "Novas técnicas: <b>pedra polida</b>, <b>cerâmica</b> e <b>tecelagem</b>. Com os excedentes, surgiram trocas e diferenças sociais (chefes, guerreiros, artesãos).",
      "O <b>megalitismo</b>: construções com grandes pedras, como as <b>antas</b> (dólmenes, sepulturas coletivas), os <b>menires</b> e os <b>cromeleques</b> (círculos de menires, como os Almendres, em Évora), ligadas a cultos e aos mortos."
    ],
    gloss:[
      ["hominização","Processo de evolução que conduziu ao ser humano atual."],
      ["recolector","Quem obtém alimento recolhendo frutos, raízes e sementes, sem os cultivar."],
      ["nomadismo","Modo de vida de quem se desloca de lugar em lugar, sem habitação fixa."],
      ["sedentarização","Passagem a viver num lugar fixo."],
      ["Paleolítico","Período da Pré-História dos caçadores-recolectores e da pedra lascada."],
      ["Neolítico","Período da Pré-História em que surgem a agricultura, a pastorícia e a pedra polida."],
      ["arte rupestre","Pinturas e gravuras feitas em rochas ou paredes de grutas."],
      ["megalitismo","Construção de monumentos com grandes pedras (antas, menires, cromeleques)."]
    ],
    quiz:[
      {q:"Como viviam as comunidades do Paleolítico?", opts:["Eram nómadas e viviam da caça, da pesca e da recolha","Eram sedentárias e viviam da agricultura","Viviam em cidades com muralhas","Criavam gado em grandes quintas"], correct:0, explain:"No Paleolítico, os seres humanos eram caçadores-recolectores e nómadas: deslocavam-se à procura de alimento. A agricultura só surge no Neolítico.", pista:"«Paleo» quer dizer antigo: ainda não havia agricultura.", irma:{q:"O que mudou no Neolítico?", opts:["Surgiram a agricultura, a pastorícia e as aldeias","Os seres humanos passaram a ser nómadas","Começou o domínio do fogo","Surgiram as primeiras cidades com escrita"], correct:0, explain:"No Neolítico surgem a agricultura e a pastorícia, e as comunidades fixam-se em aldeias. O fogo já era dominado no Paleolítico; a escrita e as cidades são posteriores."}},
      {q:"O que é o Vale do Côa?", opts:["Um conjunto de gravuras rupestres do Paleolítico ao ar livre, em Portugal","Uma pirâmide do Egito","Uma aldeia do Neolítico em Espanha","Um castelo medieval"], correct:0, explain:"O Vale do Côa tem milhares de gravuras paleolíticas ao ar livre e é Património Mundial da UNESCO desde 1998."},
      {q:"Qual destas técnicas é do Neolítico?", opts:["Pedra polida","Pedra lascada","Domínio do fogo","Pintura nas grutas de Altamira"], correct:0, explain:"A pedra polida, a cerâmica e a tecelagem são técnicas do Neolítico. As outras já existiam no Paleolítico.", pista:"Lascada = Paleolítico; polida = Neolítico."},
      {q:"O que é uma anta (dólmen)?", opts:["Uma sepultura coletiva feita com grandes pedras","Uma pedra enterrada na vertical, sozinha","Um círculo de pedras","Uma casa de madeira"], correct:0, explain:"A anta é uma sepultura coletiva megalítica. A pedra vertical isolada é o menir; o círculo de menires é o cromeleque.", irma:{q:"O que é um cromeleque?", opts:["Um conjunto de menires dispostos em círculo","Uma sepultura coletiva","Um instrumento de pedra polida","Uma pintura numa gruta"], correct:0, explain:"Cromeleque é um conjunto de menires em círculo ou em elipse, como o dos Almendres, perto de Évora."}},
      {q:"Onde começou a hominização?", opts:["Em África","Na Europa","Na América","Na Oceânia"], correct:0, explain:"Os fósseis mais antigos de hominídeos e de Homo sapiens foram encontrados em África."},
      {q:"Porque é que a agricultura levou à sedentarização?", opts:["Era preciso ficar perto dos campos para os cultivar e guardar as colheitas","Porque deixou de haver animais para caçar","Porque os reis proibiram as viagens","Porque se inventou a escrita"], correct:0, explain:"Semear, cuidar e colher exige ficar no mesmo lugar durante meses, e as colheitas tinham de ser guardadas. Assim surgiram as aldeias."}
    ],
    compare:{
      left:{title:"🏹 Paleolítico", points:["Caça, pesca e recolha","Nómadas, em abrigos e grutas","Pedra lascada; arte rupestre"]},
      right:{title:"🌾 Neolítico", points:["Agricultura e pastorícia","Sedentários, em aldeias","Pedra polida, cerâmica; megalitismo"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 30) e «Ficha de avaliação» (p. 32)"
  },
  {
    id:"h2", num:2, c:"m2", icon:"🏺",
    title:"Os Vales dos Grandes Rios",
    subtitle:"Contributos das primeiras civilizações", pages:"Somos História 7, A2 (pp. 34–55); caderno de atividades, fichas 4 a 8 (pp. 15–24)",
    lead:"As primeiras civilizações nasceram junto a grandes rios, que davam água e terras férteis: o Nilo, o Tigre e o Eufrates, o Indo e o rio Amarelo. Com elas surgiram as cidades, o Estado e a escrita. Neste mundo vais conhecer o Egito, os Hebreus e os Fenícios, e o que nos deixaram.",
    missions:[
      {t:"O Dom do Nilo", d:"Condições naturais e economia do Egito", f:"Desenha o rio Nilo num mapa simples, com o delta e o deserto à volta.\nExplica numa frase porque se diz que «o Egito é um dom do Nilo».\nIndica 3 produtos que os egípcios cultivavam.", xp:10},
      {t:"A Pirâmide Social", d:"A sociedade egípcia", f:"Desenha uma pirâmide com os grupos sociais do Egito: faraó; sacerdotes, nobres e escribas; artesãos e comerciantes; camponeses; escravos.\nEscreve uma função para cada grupo.", xp:10},
      {t:"Do Hieróglifo ao Alfabeto", d:"Escritas da Antiguidade", f:"Escreve o teu nome com hieróglifos (há tabelas na internet) e com letras do alfabeto.\nExplica porque é que um alfabeto de poucas letras foi uma grande invenção dos Fenícios.", xp:10},
      {t:"Herança de Três Povos", d:"Contributos dos Egípcios, Hebreus e Fenícios", f:"Faz uma tabela com 2 contributos de cada povo: Egípcios, Hebreus e Fenícios.\nPara cada um, diz onde o vês hoje.", xp:10}
    ],
    resumo:[
      "As <b>primeiras civilizações</b> surgiram em vales de grandes rios: Nilo (Egito), Tigre e Eufrates (Mesopotâmia), Indo e rio Amarelo. Os rios permitiam a <b>agricultura de regadio</b> e o transporte.",
      "Com elas surgiram as <b>cidades</b>, o <b>Estado</b>, as leis e a <b>escrita</b>. As escritas mais antigas conhecidas são a <b>cuneiforme</b>, da Mesopotâmia, e a <b>hieroglífica</b>, do Egito, ambas de c. 3200 a.C.",
      "No <b>Egito</b>, as cheias anuais do Nilo deixavam lodo fértil. O <b>faraó</b> tinha um poder absoluto e era considerado um deus vivo. A sociedade era muito hierarquizada.",
      "Os egípcios eram <b>politeístas</b> e acreditavam na vida depois da morte: daí a mumificação e os túmulos, como as <b>pirâmides de Gizé</b>. Usavam a escrita <b>hieroglífica</b>, um calendário solar de 365 dias e conhecimentos de geometria e de medicina.",
      "Os <b>Hebreus</b>, na Palestina, praticavam uma religião <b>monoteísta</b> (um só Deus), o Judaísmo. Os seus textos sagrados formam a Bíblia hebraica, o Antigo Testamento dos cristãos, com os Dez Mandamentos.",
      "Os <b>Fenícios</b>, no litoral do atual Líbano, foram grandes <b>navegadores e comerciantes</b> do Mediterrâneo e fundaram entrepostos e colónias, como Cartago. Criaram um <b>alfabeto</b> de 22 sinais, base dos alfabetos grego e latino."
    ],
    gloss:[
      ["civilização","Sociedade com cidades, Estado organizado, escrita e grande divisão do trabalho."],
      ["agricultura de regadio","Agricultura que usa a água dos rios através de canais e diques."],
      ["faraó","Rei do antigo Egito, com poder absoluto e considerado divino."],
      ["politeísmo","Crença em vários deuses."],
      ["monoteísmo","Crença num só Deus."],
      ["hieróglifos","Sinais da escrita do antigo Egito."],
      ["alfabeto","Conjunto pequeno de sinais que representam sons; o fenício tinha 22."],
      ["entreposto","Lugar de comércio fundado num território estrangeiro."]
    ],
    quiz:[
      {q:"Porque é que as primeiras civilizações surgiram junto a grandes rios?", opts:["Os rios davam água para regar, solos férteis e vias de transporte","Porque não havia montanhas nesses lugares","Porque os rios protegiam do frio","Porque era proibido viver longe da água"], correct:0, explain:"Os rios permitiam a agricultura de regadio (com canais e diques), deixavam solos férteis nas cheias e serviam de via de transporte.", pista:"Pensa no que é preciso para cultivar muitos campos."},
      {q:"Qual era o poder do faraó?", opts:["Absoluto: governava, fazia justiça e era considerado um deus","Era eleito pelos camponeses","Só tinha poder religioso","Partilhava o poder com uma assembleia de cidadãos"], correct:0, explain:"O faraó concentrava todos os poderes e era visto como um deus vivo. Assembleias de cidadãos só aparecem mais tarde, por exemplo em Atenas."},
      {q:"Que povo criou um alfabeto que deu origem ao alfabeto grego e latino?", opts:["Os Fenícios","Os Egípcios","Os Hebreus","Os Romanos"], correct:0, explain:"Os Fenícios criaram um alfabeto de 22 sinais. Os Gregos adaptaram-no e, a partir do grego, surgiu o alfabeto latino, que usamos.", pista:"Eram grandes comerciantes: precisavam de uma escrita simples e rápida.", irma:{q:"Que povo praticava uma religião monoteísta?", opts:["Os Hebreus","Os Egípcios","Os Fenícios","Os Gregos"], correct:0, explain:"Os Hebreus acreditavam num só Deus: o Judaísmo é uma religião monoteísta. Egípcios, Fenícios e Gregos eram politeístas."}},
      {q:"Para que serviam as pirâmides de Gizé?", opts:["Eram túmulos dos faraós","Eram palácios onde vivia o faraó","Eram armazéns de cereais","Eram observatórios das estrelas"], correct:0, explain:"As pirâmides eram túmulos. Os egípcios acreditavam na vida depois da morte e preparavam o corpo (mumificação) e o túmulo para essa vida."},
      {q:"Que escrita surgiu na Mesopotâmia, por volta de 3200 a.C.?", opts:["A escrita cuneiforme","A escrita hieroglífica","O alfabeto fenício","O alfabeto latino"], correct:0, explain:"A escrita cuneiforme (com sinais em forma de cunha, gravados em placas de barro) surgiu na Mesopotâmia por volta de 3200 a.C. É uma das escritas mais antigas conhecidas, tal como os hieróglifos egípcios, da mesma época. Os alfabetos vieram muito depois."},
      {q:"Qual destes é um contributo dos Egípcios?", opts:["Um calendário solar de 365 dias","O alfabeto de 22 letras","A democracia","O monoteísmo"], correct:0, explain:"Os egípcios criaram um calendário solar de 365 dias, ligado às cheias do Nilo. O alfabeto é fenício, a democracia é grega e o monoteísmo é hebraico.", irma:{q:"Qual destes é um contributo dos Fenícios?", opts:["O alfabeto","As pirâmides","Os Dez Mandamentos","A mumificação"], correct:0, explain:"O alfabeto é o grande contributo fenício. As pirâmides e a mumificação são egípcias; os Dez Mandamentos são hebraicos."}}
    ],
    compare:{
      left:{title:"𓂀 Egípcios", points:["Politeístas","Faraó com poder absoluto","Hieróglifos, pirâmides, calendário solar"]},
      right:{title:"⛵ Fenícios", points:["Navegadores e comerciantes","Cidades independentes no litoral","Alfabeto de 22 sinais; colónias como Cartago"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 52) e «Ficha de avaliação» (p. 54)"
  },
  {
    id:"h3", num:3, c:"m3", icon:"🏛️",
    title:"Atenas e a Democracia",
    subtitle:"Os Gregos no século V a.C.: o exemplo de Atenas", pages:"Somos História 7, B1 (pp. 56–83); caderno de atividades, fichas 9 a 14 (pp. 27–38)",
    lead:"No século V a.C., a cidade de Atenas viveu um tempo de grande riqueza e criou uma forma de governo nova: a democracia, em que os cidadãos decidiam em assembleia. Neste mundo vais conhecer as cidades-estado gregas, a sociedade e a democracia de Atenas, e também os seus limites, a religião, o teatro, a filosofia e a arte.",
    missions:[
      {t:"Um Mapa de Ilhas e Montanhas", d:"As condições naturais da Grécia", f:"Desenha um mapa simples da Grécia, com o mar, as montanhas e as ilhas.\nExplica porque é que o relevo favoreceu a formação de cidades-estado independentes e o comércio marítimo.", xp:10},
      {t:"Quem Decide em Atenas?", d:"As instituições da democracia ateniense", f:"Faz um esquema com a Eclésia, a Bulé, a Helieia e os estrategos.\nPara cada uma, escreve quem a formava e o que fazia.", xp:10},
      {t:"Cidadão, Meteco ou Escravo?", d:"A sociedade ateniense e os limites da democracia", f:"Escreve uma ficha de identidade para um cidadão, um meteco e um escravo de Atenas.\nPara cada um: direitos, deveres e trabalho.\nConclui: quem ficava de fora da democracia?", xp:10},
      {t:"As Três Ordens", d:"A arte grega", f:"Desenha os capitéis das ordens dórica, jónica e coríntia.\nIdentifica a ordem das colunas do Pártenon.", xp:10}
    ],
    resumo:[
      "A Grécia é montanhosa, com muitas ilhas e um litoral recortado. O relevo isolava as comunidades e favoreceu a formação de <b>cidades-estado</b> (pólis) independentes, com governo e leis próprias; o mar favoreceu o comércio e a fundação de colónias.",
      "No <b>século V a.C.</b>, Atenas era próspera: o porto do Pireu, o comércio, a moeda e a liderança da Liga de Delos, depois da vitória sobre os Persas (Maratona, 490 a.C.; Salamina, 480 a.C.).",
      "A sociedade: <b>cidadãos</b> (homens livres, filhos de pai e mãe atenienses), <b>metecos</b> (estrangeiros livres, dedicados ao comércio e ao artesanato, sem direitos políticos) e <b>escravos</b>. As mulheres não participavam na vida política.",
      "A <b>democracia</b>, iniciada com as reformas de Clístenes (508 a.C.) e desenvolvida no tempo de Péricles: a <b>Eclésia</b> (assembleia de todos os cidadãos) votava as leis e decidia a guerra e a paz; a <b>Bulé</b> (Conselho dos 500) preparava as leis; a <b>Helieia</b> era o tribunal popular; os <b>estrategos</b> (10, eleitos) comandavam o exército. Péricles criou a mistoforia, um pagamento para que os mais pobres pudessem participar.",
      "<b>Limites da democracia</b>: só os cidadãos (uma minoria da população) tinham direitos políticos; mulheres, metecos e escravos estavam excluídos.",
      "<b>Religião</b>: politeísta, com deuses de forma humana (Zeus, Atena, Apolo) e culto aos heróis. Os <b>Jogos Olímpicos</b>, em honra de Zeus, realizavam-se em Olímpia de 4 em 4 anos.",
      "<b>Cultura</b>: o teatro (tragédia e comédia), a filosofia (Sócrates, Platão, Aristóteles), a história (Heródoto) e a medicina (Hipócrates). Na <b>arte</b>, templos com as ordens dórica, jónica e coríntia, como o <b>Pártenon</b> (dórico), na Acrópole de Atenas, e uma escultura que procurava a beleza ideal e a proporção."
    ],
    gloss:[
      ["cidade-estado (pólis)","Cidade independente com governo, leis e exército próprios."],
      ["democracia","Governo em que o poder pertence aos cidadãos («demos» = povo; «kratos» = poder)."],
      ["cidadão","Em Atenas, homem livre, filho de pai e mãe atenienses, com direitos políticos."],
      ["meteco","Estrangeiro livre que vivia em Atenas, sem direitos políticos."],
      ["Eclésia","Assembleia de todos os cidadãos de Atenas."],
      ["mistoforia","Pagamento aos cidadãos que exerciam cargos públicos, criado por Péricles."],
      ["ostracismo","Exílio, por 10 anos, de um cidadão considerado perigoso, votado na Eclésia."],
      ["acrópole","Parte alta e fortificada de uma cidade grega, com os templos principais."]
    ],
    quiz:[
      {q:"Porque se formaram cidades-estado independentes na Grécia?", opts:["O relevo montanhoso isolava as comunidades umas das outras","Um rei dividiu a Grécia em cidades","Os Persas obrigaram a essa divisão","Não havia mar perto das cidades"], correct:0, explain:"As montanhas dificultavam as comunicações por terra, e cada comunidade desenvolveu governo e leis próprios: as cidades-estado (pólis).", pista:"Olha para um mapa físico da Grécia."},
      {q:"Quem podia votar na Eclésia de Atenas?", opts:["Os cidadãos: homens livres, filhos de pai e mãe atenienses","Todos os habitantes de Atenas","Os homens e as mulheres atenienses","Os metecos ricos"], correct:0, explain:"Só os cidadãos votavam. Mulheres, metecos e escravos estavam excluídos: é um dos limites da democracia ateniense.", pista:"Pensa nos três grupos: cidadãos, metecos e escravos.", irma:{q:"Que grupo vivia em Atenas, era livre, mas não tinha direitos políticos?", opts:["Os metecos","Os cidadãos","Os estrategos","Os membros da Bulé"], correct:0, explain:"Os metecos eram estrangeiros livres, dedicados ao comércio e ao artesanato; pagavam impostos, mas não votavam."}},
      {q:"Para que serviu a mistoforia, criada por Péricles?", opts:["Para que os cidadãos pobres pudessem participar nos cargos públicos","Para pagar aos soldados persas","Para comprar escravos","Para construir o Pártenon"], correct:0, explain:"A mistoforia pagava aos cidadãos que exerciam cargos públicos; assim, os mais pobres podiam deixar o trabalho por uns dias e participar."},
      {q:"Qual destes é um limite da democracia ateniense?", opts:["As mulheres, os metecos e os escravos não tinham direitos políticos","Os cidadãos votavam as leis","Os estrategos eram eleitos","Havia um tribunal popular"], correct:0, explain:"A democracia ateniense era só para uma minoria: os cidadãos. As outras opções são características da democracia, não limites."},
      {q:"Em honra de que deus se realizavam os Jogos Olímpicos da Antiguidade?", opts:["Zeus","Atena","Poseidon","Apolo"], correct:0, explain:"Os Jogos Olímpicos realizavam-se em Olímpia, de 4 em 4 anos, em honra de Zeus. Atena era a protetora de Atenas.", irma:{q:"A que deusa era dedicado o Pártenon?", opts:["Atena","Afrodite","Hera","Ártemis"], correct:0, explain:"O Pártenon, na Acrópole, era dedicado a Atena, a protetora da cidade."}},
      {q:"Que ordem arquitetónica tem o Pártenon?", opts:["Dórica","Jónica","Coríntia","Gótica"], correct:0, explain:"O Pártenon é um templo dórico, com colunas sem base e capitéis simples. A ordem gótica é medieval, muitos séculos depois."}
    ],
    compare:{
      left:{title:"🗳️ Democracia ateniense", points:["Os cidadãos votam diretamente as leis","Só para uma minoria (homens cidadãos)","Cargos por sorteio ou eleição"]},
      right:{title:"🇵🇹 Democracia atual", points:["Os cidadãos elegem representantes","Voto para todos os adultos, homens e mulheres","Direitos garantidos pela Constituição"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 80) e «Ficha de avaliação» (p. 82)"
  },
  {
    id:"h4", num:4, c:"m4", icon:"🦅",
    title:"Roma, Senhora do Mediterrâneo",
    subtitle:"O mundo romano no apogeu do Império", pages:"Somos História 7, B2 (pp. 84–105); caderno de atividades, fichas 15 a 19 (pp. 39–48)",
    lead:"Nos séculos I e II, o Império Romano rodeava todo o Mediterrâneo, a que os Romanos chamavam «o nosso mar». Estradas, cidades, leis e a língua latina uniram povos muito diferentes, também na Península Ibérica. Neste mundo vais conhecer o Império, a romanização, a economia, a sociedade, o poder do imperador e a arte romana.",
    missions:[
      {t:"Mare Nostrum", d:"A extensão do Império", f:"Num mapa do Mediterrâneo, pinta a extensão do Império Romano no tempo de Trajano (117 d.C.).\nIndica 5 províncias e 3 cidades, incluindo uma na atual Portugal.", xp:10},
      {t:"Portugal Romano", d:"A romanização da Península Ibérica", f:"Pesquisa um vestígio romano em Portugal (Conímbriga, o templo de Évora, a ponte de Chaves, as ruínas de Milreu…).\nDescreve-o e explica para que servia.", xp:10},
      {t:"Do Latim ao Português", d:"A herança romana na língua", f:"Escreve 8 palavras portuguesas e a palavra latina de onde vêm (ex.: aqua → água; mater → mãe).\nUsa um dicionário etimológico.", xp:10},
      {t:"Engenharia Romana", d:"A arte romana", f:"Desenha um aqueduto ou uma ponte romana com arcos de volta perfeita.\nExplica porque se diz que a arte romana era utilitária.", xp:10}
    ],
    resumo:[
      "Roma começou por ser uma cidade (fundada, segundo a lenda, em 753 a.C.) e conquistou um império à volta do Mediterrâneo, o <b>Mare Nostrum</b> («o nosso mar»). <b>Augusto</b> foi o primeiro imperador (27 a.C.); o Império atingiu a maior extensão com <b>Trajano</b> (117 d.C.).",
      "A <b>integração dos povos conquistados</b> fez-se com estradas, cidades, o exército, a língua latina, o direito romano e a concessão da cidadania (alargada em 212 d.C. a quase todos os homens livres do Império).",
      "<b>Romanização da Península Ibérica</b>: a conquista começou em 218 a.C. e enfrentou resistências, como a dos Lusitanos chefiados por <b>Viriato</b>. Surgiram cidades como Olisipo (Lisboa), Bracara Augusta (Braga), Conímbriga e Ebora (Évora), estradas e pontes.",
      "<b>Economia</b>: comércio intenso em todo o Império, com moeda única e estradas; agricultura em grandes propriedades (as <b>villae</b>); artesanato.",
      "<b>Sociedade</b>: muito desigual: os mais ricos (ordem senatorial e ordem equestre), a <b>plebe</b> (a maioria dos homens livres) e os <b>escravos</b>.",
      "O <b>imperador</b> concentrava os poderes político, militar e religioso, e era objeto de culto.",
      "<b>Cultura e arte</b>: arte <b>utilitária</b> e monumental: estradas, pontes, aquedutos, termas, anfiteatros (o Coliseu), arcos de triunfo. Técnicas: <b>arco de volta perfeita</b>, abóbada e uma espécie de betão. O <b>latim</b> deu origem ao português e a outras línguas românicas; o direito romano inspira as leis atuais."
    ],
    gloss:[
      ["império","Território vasto, com vários povos, governado por um imperador."],
      ["romanização","Adoção da língua, das leis e dos costumes romanos pelos povos conquistados."],
      ["província","Território conquistado e administrado por Roma (ex.: a Lusitânia)."],
      ["villa","Grande propriedade agrícola romana, com a casa do proprietário."],
      ["plebe","A maioria dos homens livres, sem grande riqueza."],
      ["aqueduto","Construção que leva água de uma nascente até uma cidade."],
      ["arco de volta perfeita","Arco em forma de meia circunferência, típico dos Romanos."],
      ["línguas românicas","Línguas que nasceram do latim: português, espanhol, francês, italiano, romeno…"]
    ],
    quiz:[
      {q:"O que quer dizer «Mare Nostrum»?", opts:["«O nosso mar»: o Mediterrâneo, rodeado pelo Império","O nome de um imperador","Um porto da Lusitânia","Uma estrada romana"], correct:0, explain:"Os Romanos chamavam ao Mediterrâneo «Mare Nostrum» porque o Império o rodeava por completo."},
      {q:"Qual destas cidades romanas corresponde a Braga?", opts:["Bracara Augusta","Olisipo","Ebora","Conímbriga"], correct:0, explain:"Bracara Augusta é Braga; Olisipo é Lisboa; Ebora é Évora; Conímbriga ficava perto da atual Condeixa-a-Nova.", irma:{q:"Qual destas cidades romanas corresponde a Lisboa?", opts:["Olisipo","Bracara Augusta","Pax Iulia","Ebora"], correct:0, explain:"Olisipo é Lisboa. Pax Iulia é Beja e Ebora é Évora."}},
      {q:"Quem chefiou a resistência dos Lusitanos aos Romanos?", opts:["Viriato","Augusto","Trajano","Júlio César"], correct:0, explain:"Viriato chefiou os Lusitanos contra os Romanos no século II a.C. e foi morto em 139 a.C. Os outros são romanos."},
      {q:"Porque se diz que a arte romana era utilitária?", opts:["Muitas obras serviam a vida prática: estradas, pontes, aquedutos, termas","Porque era só decorativa","Porque era feita só para os templos","Porque usava apenas madeira"], correct:0, explain:"Os Romanos construíram obras úteis à vida das cidades e do Império: estradas, pontes, aquedutos, termas, anfiteatros.", pista:"Pensa no que serve um aqueduto ou uma ponte."},
      {q:"Qual destes é um legado romano na nossa vida atual?", opts:["A língua portuguesa, que vem do latim","O alfabeto de 22 sinais","As pirâmides","O monoteísmo"], correct:0, explain:"O português é uma língua românica: nasceu do latim falado na Península Ibérica. O alfabeto de 22 sinais é fenício.", irma:{q:"Que técnica de construção caracteriza a arquitetura romana?", opts:["O arco de volta perfeita","O arco quebrado (ogival)","Os arcobotantes","O arco em ferradura"], correct:0, explain:"O arco de volta perfeita (meia circunferência) é romano. O arco quebrado e os arcobotantes são góticos; o arco em ferradura é muçulmano."}},
      {q:"Que poderes tinha o imperador romano?", opts:["Político, militar e religioso","Só religioso","Só militar","Nenhum: decidia o Senado sozinho"], correct:0, explain:"O imperador concentrava os poderes político, militar e religioso e era objeto de culto."}
    ],
    compare:{
      left:{title:"🏛️ Grécia (Atenas)", points:["Cidades-estado independentes","Democracia de cidadãos","Arte que procura a beleza ideal"]},
      right:{title:"🦅 Roma", points:["Um império unificado","Poder concentrado no imperador","Arte utilitária e monumental"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 102) e «Ficha de avaliação» (p. 104)"
  },
  {
    id:"h5", num:5, c:"m5", icon:"✝️",
    title:"O Cristianismo",
    subtitle:"Origem e difusão do Cristianismo", pages:"Somos História 7, B3 (pp. 106–113); caderno de atividades, ficha 20 (p. 49)",
    lead:"No século I, na Palestina, então parte do Império Romano, Jesus pregou uma mensagem que deu origem a uma nova religião. Em menos de quatro séculos, o Cristianismo passou de religião perseguida a religião oficial do Império. Neste mundo vais conhecer a sua origem, a mensagem, as perseguições e a difusão.",
    missions:[
      {t:"Uma Mensagem Nova", d:"A mensagem cristã", f:"Escreve 4 ideias da mensagem cristã (ex.: amor ao próximo, igualdade de todos perante Deus).\nExplica porque é que esta mensagem atraía os mais pobres e os escravos.", xp:10},
      {t:"Pelos Caminhos do Império", d:"A difusão do Cristianismo", f:"Num mapa do Império Romano, marca a Palestina, Roma e 3 cidades por onde o apóstolo Paulo passou.\nExplica como as estradas romanas e a língua comum ajudaram a difundir o Cristianismo.", xp:10},
      {t:"De Perseguido a Oficial", d:"Os éditos de Milão e de Tessalónica", f:"Faz uma linha do tempo do século I ao século IV com: a pregação de Jesus, as perseguições, o Édito de Milão (313) e o Édito de Tessalónica (380).\nEscreve o que mudou em cada data.", xp:10}
    ],
    resumo:[
      "O <b>Cristianismo</b> nasceu na <b>Palestina</b>, no século I, com a pregação de <b>Jesus</b>, um judeu. É uma religião <b>monoteísta</b>.",
      "A mensagem cristã: amor a Deus e ao próximo, perdão, <b>igualdade de todos perante Deus</b> e esperança na vida eterna. Por isso atraiu muitos pobres e escravos.",
      "Os <b>apóstolos</b>, como Pedro e Paulo, difundiram a mensagem pelo Império, aproveitando as estradas romanas, as rotas marítimas e as línguas comuns (o grego e o latim).",
      "Os cristãos foram <b>perseguidos</b> (por exemplo, com Nero e com Diocleciano), sobretudo por se recusarem a prestar culto ao imperador.",
      "Em <b>313</b>, o imperador Constantino concedeu a liberdade de culto com o <b>Édito de Milão</b>. Em <b>380</b>, Teodósio tornou o Cristianismo religião oficial do Império com o <b>Édito de Tessalónica</b>.",
      "A Igreja organizou-se em <b>dioceses</b>, dirigidas por <b>bispos</b>. Os textos sagrados cristãos formam a <b>Bíblia</b> (Antigo e Novo Testamento)."
    ],
    gloss:[
      ["Cristianismo","Religião monoteísta baseada na vida e na mensagem de Jesus."],
      ["apóstolo","Cada um dos discípulos que difundiram a mensagem de Jesus."],
      ["Novo Testamento","Parte da Bíblia cristã com os Evangelhos e outros textos sobre Jesus e os primeiros cristãos."],
      ["perseguição","Ação de castigar e reprimir um grupo pelas suas crenças."],
      ["édito","Lei ou ordem publicada por um imperador."],
      ["diocese","Território religioso dirigido por um bispo."],
      ["bispo","Chefe religioso de uma diocese."]
    ],
    quiz:[
      {q:"Onde e quando nasceu o Cristianismo?", opts:["Na Palestina, no século I","Em Roma, no século V a.C.","No Egito, no tempo dos faraós","Na Grécia, no século V a.C."], correct:0, explain:"O Cristianismo nasceu na Palestina, então parte do Império Romano, no século I, com a pregação de Jesus."},
      {q:"Porque é que os cristãos foram perseguidos no Império Romano?", opts:["Recusavam prestar culto ao imperador","Recusavam pagar impostos","Eram todos estrangeiros","Queriam conquistar Roma pelas armas"], correct:0, explain:"Os cristãos adoravam um só Deus e recusavam o culto ao imperador, o que era visto como desobediência ao Estado.", pista:"Lembra-te: o imperador também era objeto de culto."},
      {q:"O que estabeleceu o Édito de Milão (313)?", opts:["A liberdade de culto para os cristãos","O Cristianismo como religião oficial","A proibição do Cristianismo","A divisão do Império em dois"], correct:0, explain:"Com o Édito de Milão, o imperador Constantino deu liberdade de culto aos cristãos. A religião oficial veio depois, em 380.", irma:{q:"O que estabeleceu o Édito de Tessalónica (380)?", opts:["O Cristianismo como religião oficial do Império","A liberdade de culto","O fim das estradas romanas","A eleição dos bispos pelo imperador"], correct:0, explain:"Com o Édito de Tessalónica, o imperador Teodósio tornou o Cristianismo religião oficial do Império."}},
      {q:"Que ideia da mensagem cristã atraía muitos escravos e pobres?", opts:["A igualdade de todos perante Deus","O poder absoluto do imperador","A riqueza como sinal de virtude","A divisão da sociedade em ordens"], correct:0, explain:"A ideia de que todos são iguais perante Deus, ricos ou pobres, livres ou escravos, dava esperança aos mais desfavorecidos."},
      {q:"O que facilitou a difusão do Cristianismo pelo Império?", opts:["As estradas romanas, as rotas marítimas e as línguas comuns","A proibição de viajar","O isolamento das cidades","A ausência de comércio"], correct:0, explain:"O Império estava ligado por estradas e rotas marítimas e usava o grego e o latim: as ideias circulavam depressa."}
    ],
    compare:{
      left:{title:"🏛️ Religião romana tradicional", points:["Politeísta","Culto ao imperador","Religião do Estado"]},
      right:{title:"✝️ Cristianismo", points:["Monoteísta","Recusa do culto ao imperador","Perseguido e, depois de 380, religião oficial"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 112) e «Ficha de avaliação» (p. 113)"
  },
  {
    id:"h6", num:6, c:"m6", icon:"🛡️",
    title:"A Europa Depois de Roma",
    subtitle:"A Europa dos séculos VI a IX", pages:"Somos História 7, C1 (pp. 114–127); caderno de atividades, fichas 21 a 23 (pp. 53–58)",
    lead:"Em 476, o último imperador romano do Ocidente foi deposto. No território do antigo Império formaram-se reinos dos povos germânicos, e a Igreja tornou-se o principal fator de unidade da Europa. Mais tarde, novas invasões trouxeram insegurança e mudaram a vida das pessoas. Neste mundo vais compreender essas transformações.",
    missions:[
      {t:"Os Novos Reinos", d:"Os reinos germânicos", f:"Num mapa da Europa do século VI, localiza os reinos dos Francos, Visigodos, Suevos, Ostrogodos e Vândalos.\nIndica qual se fixou no atual território português (os Suevos, com capital em Braga).", xp:10},
      {t:"Os Copistas", d:"A ação da Igreja e dos mosteiros", f:"Escreve uma frase com letras decoradas, como numa iluminura medieval.\nExplica numa frase o papel dos mosteiros na preservação da cultura.", xp:10},
      {t:"Ameaças de Todos os Lados", d:"As invasões dos séculos VIII a X", f:"Num mapa, desenha setas para as invasões dos muçulmanos (sul), dos Vikings ou Normandos (norte) e dos Magiares ou Húngaros (leste).\nIndica 3 consequências para a vida das pessoas.", xp:10}
    ],
    resumo:[
      "O Império Romano dividiu-se em dois em 395. O <b>Império Romano do Ocidente</b> terminou em <b>476</b>, quando o último imperador foi deposto; o do Oriente (Império Bizantino) durou até 1453.",
      "Os <b>povos germânicos</b> (chamados «bárbaros» pelos Romanos) fundaram reinos: Francos, Visigodos, Ostrogodos, Vândalos e <b>Suevos</b> (no noroeste da Península, com capital em Braga), entre outros.",
      "A <b>Igreja</b> foi o principal fator de unidade: converteu os reis germânicos ao Cristianismo (como Clóvis, rei dos Francos, ou os Suevos, com S. Martinho de Dume) e manteve a cultura escrita nos <b>mosteiros</b>, onde monges copistas copiavam livros à mão.",
      "<b>Carlos Magno</b>, rei dos Francos, foi coroado imperador pelo papa em <b>800</b> e reuniu grande parte da Europa ocidental.",
      "Nos séculos <b>VIII a X</b> houve <b>novas invasões</b>: muçulmanos a sul (na Península Ibérica, desde 711), Vikings ou Normandos a norte e Magiares ou Húngaros a leste.",
      "Consequências: <b>insegurança</b>, declínio do comércio e das cidades, <b>ruralização</b>, economia de subsistência e reforço do poder dos senhores locais, que protegiam as populações nos seus castelos."
    ],
    gloss:[
      ["povos germânicos","Povos do centro e norte da Europa (Francos, Godos, Suevos…) que se fixaram no antigo Império Romano."],
      ["reino","Território governado por um rei."],
      ["mosteiro","Edifício onde vivem monges, dedicados à oração e ao trabalho."],
      ["copista","Monge que copiava livros à mão."],
      ["iluminura","Pintura ou letra decorada nos manuscritos medievais."],
      ["ruralização","Deslocação da população e da vida económica das cidades para o campo."],
      ["economia de subsistência","Economia em que se produz apenas o necessário para o próprio consumo."]
    ],
    quiz:[
      {q:"Em que ano terminou o Império Romano do Ocidente?", opts:["476","313","800","1453"], correct:0, explain:"Em 476, o último imperador do Ocidente foi deposto. 313 é o Édito de Milão; 800 é a coroação de Carlos Magno; 1453 é o fim do Império do Oriente.", pista:"É no século V."},
      {q:"Que povo germânico fundou um reino no noroeste da Península, com capital em Braga?", opts:["Os Suevos","Os Francos","Os Vândalos","Os Ostrogodos"], correct:0, explain:"Os Suevos fixaram-se na Galécia, no noroeste da Península, com capital em Braga.", irma:{q:"Que rei dos Francos se converteu ao Cristianismo?", opts:["Clóvis","Viriato","Augusto","Teodósio"], correct:0, explain:"Clóvis, rei dos Francos, converteu-se ao Cristianismo por volta de 500. Viriato era lusitano; Augusto e Teodósio eram imperadores romanos."}},
      {q:"Qual foi o principal fator de unidade da Europa depois do fim do Império do Ocidente?", opts:["A Igreja","O Senado romano","A moeda única","As estradas novas"], correct:0, explain:"A Igreja manteve uma organização em toda a Europa, converteu os reis germânicos e preservou a cultura escrita."},
      {q:"Que povos invadiram a Europa pelo norte nos séculos VIII a X?", opts:["Os Vikings (Normandos)","Os muçulmanos","Os Magiares (Húngaros)","Os Fenícios"], correct:0, explain:"Os Vikings ou Normandos vinham da Escandinávia, pelo norte. Os muçulmanos vinham do sul e os Magiares do leste."},
      {q:"Qual foi uma consequência das invasões dos séculos VIII a X?", opts:["Insegurança e declínio do comércio e das cidades","Crescimento das cidades","Fim dos castelos","Aumento das viagens comerciais"], correct:0, explain:"Com as invasões, viajar e comerciar tornou-se perigoso; as cidades perderam importância e as pessoas procuraram a proteção dos senhores."},
      {q:"Em que ano foi Carlos Magno coroado imperador?", opts:["800","476","711","1143"], correct:0, explain:"Carlos Magno foi coroado imperador pelo papa no ano 800. 711 é a entrada dos muçulmanos na Península; 1143 é o Tratado de Zamora."}
    ],
    compare:{
      left:{title:"🏛️ Império Romano", points:["Um só Estado à volta do Mediterrâneo","Cidades e comércio intensos","Estradas seguras"]},
      right:{title:"🛡️ Europa dos séculos VI a IX", points:["Vários reinos germânicos","Ruralização e economia de subsistência","Insegurança, com novas invasões"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 124) e «Ficha de avaliação» (p. 126)"
  },
  {
    id:"h7", num:7, c:"m7", icon:"🕌",
    title:"O Islão em Expansão",
    subtitle:"O mundo muçulmano em expansão", pages:"Somos História 7, C2 (pp. 128–139); caderno de atividades, ficha 24 (p. 59)",
    lead:"No século VII, na Península Arábica, Maomé pregou uma nova religião monoteísta, o Islão. Em pouco mais de um século, os muçulmanos formaram um império da Península Ibérica até à Índia, com cidades ricas e uma cultura que recolheu e desenvolveu saberes de muitos povos. Neste mundo vais conhecer a sua origem, a expansão e o legado, também em Portugal.",
    missions:[
      {t:"Os Cinco Pilares", d:"A religião islâmica", f:"Faz um esquema com os cinco pilares do Islão e explica cada um numa frase.\nCompara: que ideias tem em comum com o Judaísmo e o Cristianismo?", xp:10},
      {t:"Da Arábia à Península Ibérica", d:"A expansão muçulmana", f:"Num mapa, pinta a expansão muçulmana até meados do século VIII.\nMarca Meca, Medina, Damasco, Bagdade e Córdova, e a data de 711.", xp:10},
      {t:"Palavras Árabes", d:"O legado muçulmano em Portugal", f:"Encontra 10 palavras portuguesas de origem árabe (ex.: azeite, arroz, alface, aldeia, almofada).\nPesquisa 2 técnicas agrícolas que os muçulmanos difundiram na Península (ex.: a nora).", xp:10}
    ],
    resumo:[
      "O <b>Islão</b> nasceu na <b>Península Arábica</b>, no século VII, com a pregação de <b>Maomé</b>, em Meca. É uma religião <b>monoteísta</b>: os muçulmanos acreditam num só Deus, Alá.",
      "Em <b>622</b>, Maomé deixou Meca e foi para Medina: é a <b>Hégira</b>, o início do calendário muçulmano. O livro sagrado é o <b>Alcorão</b>.",
      "Os <b>cinco pilares</b> do Islão: a profissão de fé; a oração cinco vezes por dia, virado para Meca; a esmola aos pobres; o jejum no mês do Ramadão; a peregrinação a Meca, pelo menos uma vez na vida, se possível.",
      "A <b>expansão</b> foi muito rápida: nos séculos VII e VIII, os muçulmanos chegaram da Índia à <b>Península Ibérica</b> (<b>711</b>), onde formaram o <b>al-Andalus</b>. O avanço na Europa foi travado em Poitiers (732).",
      "A civilização islâmica era <b>urbana, comercial e cosmopolita</b>: cidades como Damasco, Bagdade e Córdova; traduções de obras gregas; avanços na matemática (os algarismos indo-árabes, a álgebra), na astronomia, na medicina e na geografia; difusão do papel.",
      "<b>Arte</b>: mesquitas, arco em ferradura, decoração geométrica, vegetal e com caligrafia (os arabescos), azulejos.",
      "<b>Legado em Portugal</b>: muitas palavras (azeite, arroz, alface, aldeia, açúcar, almofada), técnicas de rega (a nora, o açude), novas culturas (laranja, limão) e a arquitetura de algumas cidades, como Mértola e Silves."
    ],
    gloss:[
      ["Islão","Religião monoteísta pregada por Maomé; os seus fiéis são os muçulmanos."],
      ["Alcorão","Livro sagrado do Islão."],
      ["Hégira","Saída de Maomé de Meca para Medina, em 622; início do calendário muçulmano."],
      ["mesquita","Edifício de oração dos muçulmanos."],
      ["al-Andalus","Nome dado pelos muçulmanos ao território da Península Ibérica que dominavam."],
      ["arabesco","Decoração com formas geométricas, vegetais e letras entrelaçadas."],
      ["cosmopolita","Que reúne pessoas e influências de muitas origens."]
    ],
    quiz:[
      {q:"O que é a Hégira?", opts:["A saída de Maomé de Meca para Medina, em 622","A conquista da Península Ibérica","O livro sagrado do Islão","A oração cinco vezes por dia"], correct:0, explain:"A Hégira é a saída de Maomé de Meca para Medina, em 622, e marca o início do calendário muçulmano. O livro sagrado é o Alcorão."},
      {q:"Em que ano chegaram os muçulmanos à Península Ibérica?", opts:["711","622","476","1147"], correct:0, explain:"Em 711, os muçulmanos atravessaram o estreito de Gibraltar e conquistaram rapidamente a maior parte da Península.", pista:"É no início do século VIII.", irma:{q:"Onde foi travado o avanço muçulmano na Europa, em 732?", opts:["Em Poitiers","Em Covadonga","Em Ourique","Em Roma"], correct:0, explain:"Em Poitiers (atual França), em 732, os Francos travaram o avanço muçulmano. Covadonga e Ourique são batalhas da Península Ibérica."}},
      {q:"Qual destes é um dos cinco pilares do Islão?", opts:["O jejum no mês do Ramadão","A peregrinação a Roma","O culto ao imperador","A oração uma vez por semana"], correct:0, explain:"O jejum no Ramadão é um dos cinco pilares. A peregrinação é a Meca, e a oração faz-se cinco vezes por dia."},
      {q:"Qual destas palavras portuguesas tem origem árabe?", opts:["Azeite","Água","Mãe","Escola"], correct:0, explain:"«Azeite» vem do árabe. «Água» e «mãe» vêm do latim; «escola» vem do latim, que a recebeu do grego.", irma:{q:"Qual destas palavras portuguesas tem origem árabe?", opts:["Aldeia","Cidade","Pai","Livro"], correct:0, explain:"«Aldeia» vem do árabe. «Cidade», «pai» e «livro» vêm do latim."}},
      {q:"Que contributo dos muçulmanos usamos todos os dias em Matemática?", opts:["Os algarismos indo-árabes (0, 1, 2, 3…)","O alfabeto","Os números romanos","A régua"], correct:0, explain:"Os muçulmanos difundiram na Europa os algarismos de origem indiana, incluindo o zero; por isso se chamam indo-árabes."},
      {q:"Que tipo de arco é característico da arte muçulmana?", opts:["O arco em ferradura","O arco de volta perfeita","O arco quebrado (ogival)","O arco de triunfo"], correct:0, explain:"O arco em ferradura é típico da arte islâmica, como na mesquita de Córdova."}
    ],
    compare:{
      left:{title:"✝️ Cristianismo", points:["Monoteísta","Livro sagrado: a Bíblia","Nasceu na Palestina, no século I"]},
      right:{title:"☪️ Islão", points:["Monoteísta","Livro sagrado: o Alcorão","Nasceu na Arábia, no século VII"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 136) e «Ficha de avaliação» (p. 138)"
  },
  {
    id:"h8", num:8, c:"m8", icon:"🏰",
    title:"Senhores e Camponeses",
    subtitle:"A sociedade europeia nos séculos IX a XII", pages:"Somos História 7, C3 (pp. 140–155); caderno de atividades, fichas 25A e 25B (pp. 61–64)",
    lead:"Na Europa dos séculos IX a XII, cada pessoa pertencia a uma ordem social: os que rezavam, os que combatiam e os que trabalhavam. A terra estava organizada em senhorios, e os nobres ligavam-se entre si por laços de fidelidade. Neste mundo vais compreender esta sociedade, os seus privilégios e as suas obrigações.",
    missions:[
      {t:"As Três Ordens", d:"A sociedade tripartida", f:"Desenha uma pirâmide com o clero, a nobreza e o povo.\nPara cada ordem, escreve a função e se tinha ou não privilégios.", xp:10},
      {t:"O Mapa de um Senhorio", d:"A organização de um senhorio", f:"Desenha um senhorio: o castelo ou mosteiro, a reserva, os mansos, o moinho, o forno, a floresta e a aldeia.\nLegenda cada parte e explica quem a trabalhava.", xp:10},
      {t:"Senhor e Vassalo", d:"As relações feudo-vassálicas", f:"Escreve um diálogo curto para a cerimónia de homenagem, juramento e investidura.\nIndica as obrigações do suserano e as do vassalo.", xp:10}
    ],
    resumo:[
      "A sociedade estava dividida em <b>três ordens</b>: o <b>clero</b> (os que rezavam), a <b>nobreza</b> (os que combatiam) e o <b>povo</b> ou terceiro estado (os que trabalhavam).",
      "O clero e a nobreza eram <b>ordens privilegiadas</b>: possuíam muitas terras, não pagavam certos impostos e tinham justiça própria. O povo, a grande maioria, sustentava as outras ordens com o seu trabalho.",
      "O <b>senhorio</b> era um domínio de um senhor (nobre ou eclesiástico), com a <b>reserva</b> (explorada diretamente pelo senhor) e os <b>mansos</b> (parcelas cedidas aos camponeses).",
      "Os camponeses pagavam ao senhor <b>rendas</b> (parte das colheitas ou dinheiro), trabalhavam gratuitamente na reserva alguns dias (as <b>corveias</b>) e pagavam pelo uso do moinho, do forno e do lagar (as <b>banalidades</b>). Muitos eram <b>servos</b>, presos à terra.",
      "Entre os nobres havia <b>relações feudo-vassálicas</b>: o <b>suserano</b> concedia um <b>feudo</b> (geralmente terra) e protegia o <b>vassalo</b>; o vassalo jurava fidelidade e devia-lhe auxílio militar e conselho.",
      "A ligação fazia-se numa cerimónia com três momentos: a <b>homenagem</b>, o <b>juramento</b> de fidelidade e a <b>investidura</b> (entrega do feudo)."
    ],
    gloss:[
      ["clero","Ordem dos que se dedicavam à religião (padres, monges, bispos)."],
      ["nobreza","Ordem dos que combatiam e governavam as terras."],
      ["privilégio","Direito especial que só alguns grupos tinham."],
      ["senhorio","Domínio de terras governado por um senhor."],
      ["reserva","Parte do senhorio explorada diretamente pelo senhor."],
      ["corveia","Trabalho gratuito que os camponeses deviam fazer nas terras do senhor."],
      ["servo","Camponês preso à terra, que não a podia abandonar."],
      ["feudo","Bem, geralmente terra, que o suserano concedia ao vassalo."],
      ["suserano","Nobre que concede um feudo a um vassalo."]
    ],
    quiz:[
      {q:"Qual era a função da nobreza na sociedade medieval?", opts:["Combater e proteger","Rezar","Trabalhar a terra","Comerciar"], correct:0, explain:"Na sociedade de três ordens: o clero rezava, a nobreza combatia e o povo trabalhava.", pista:"«Os que rezam, os que combatem e os que trabalham.»"},
      {q:"O que eram as corveias?", opts:["Dias de trabalho gratuito do camponês na reserva do senhor","Impostos pagos ao rei","Terras cedidas aos camponeses","Cerimónias entre nobres"], correct:0, explain:"As corveias eram trabalho gratuito dos camponeses nas terras da reserva. As terras cedidas aos camponeses eram os mansos.", irma:{q:"O que eram as banalidades?", opts:["Pagamentos pelo uso do moinho, do forno e do lagar do senhor","Dias de trabalho gratuito","Juramentos de fidelidade","Terras da reserva"], correct:0, explain:"As banalidades eram pagas ao senhor pelo uso obrigatório do seu moinho, forno ou lagar."}},
      {q:"Que ordens eram privilegiadas?", opts:["O clero e a nobreza","Só o povo","O povo e a nobreza","Nenhuma"], correct:0, explain:"O clero e a nobreza tinham privilégios: muitas terras, isenção de certos impostos e justiça própria."},
      {q:"Numa relação feudo-vassálica, o que dava o suserano ao vassalo?", opts:["Um feudo e proteção","Auxílio militar e conselho","Corveias","Um salário mensal"], correct:0, explain:"O suserano dava o feudo e proteção; o vassalo, em troca, devia-lhe fidelidade, auxílio militar e conselho.", pista:"Quem dá a terra e quem jura fidelidade?"},
      {q:"O que era um servo?", opts:["Um camponês preso à terra do senhor","Um nobre ao serviço do rei","Um monge copista","Um mercador da cidade"], correct:0, explain:"O servo estava preso à terra: não a podia abandonar e passava com ela para um novo senhor."}
    ],
    compare:{
      left:{title:"👑 Ordens privilegiadas", points:["Clero e nobreza","Muitas terras e justiça própria","Isentos de certos impostos"]},
      right:{title:"🌾 Povo (terceiro estado)", points:["A grande maioria da população","Trabalhava e pagava rendas e impostos","Sem privilégios"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 152) e «Ficha de avaliação» (p. 154)"
  },
  {
    id:"h9", num:9, c:"m9", icon:"⚔️",
    title:"Nasce Portugal",
    subtitle:"A Península Ibérica nos séculos IX a XII", pages:"Somos História 7, C4 (pp. 156–169); caderno de atividades, fichas 26 e 27 (pp. 65–68)",
    lead:"Durante séculos, a Península Ibérica foi partilhada entre o al-Andalus muçulmano, a sul, e reinos cristãos, a norte, que foram avançando para sul: a Reconquista. Neste contexto, um condado do reino de Leão tornou-se um reino independente: Portugal. Neste mundo vais seguir esse caminho, de D. Henrique a D. Afonso Henriques.",
    missions:[
      {t:"Convivência e Confronto", d:"Cristãos, muçulmanos e judeus na Península", f:"Explica quem eram os moçárabes e os mudéjares.\nDá 2 exemplos de convivência e 2 de confronto entre cristãos e muçulmanos.", xp:10},
      {t:"Do Condado ao Reino", d:"A formação de Portugal", f:"Faz uma linha do tempo com: 1096 (o Condado Portucalense), 1128 (S. Mamede), 1139 (Ourique), 1143 (Zamora), 1147 (Lisboa e Santarém) e 1179 (a bula do papa).\nEscreve uma frase para cada data.", xp:10},
      {t:"Mapa da Reconquista", d:"O avanço para sul", f:"Num mapa de Portugal, marca as principais conquistas de D. Afonso Henriques (Santarém e Lisboa, 1147).\nIndica até onde chegava o território no fim do reinado.", xp:10}
    ],
    resumo:[
      "Nos séculos IX a XII, a Península Ibérica estava dividida: a sul, o <b>al-Andalus</b> muçulmano; a norte, reinos cristãos (Leão, Castela, Navarra, Aragão). Havia confronto, mas também <b>convivência</b>: <b>moçárabes</b> (cristãos em terras muçulmanas), <b>mudéjares</b> (muçulmanos em terras cristãs) e comunidades judaicas.",
      "A <b>Reconquista</b> foi o avanço dos reinos cristãos para sul, conquistando territórios aos muçulmanos. Começou no norte (Covadonga, c. 722) e terminou em 1492, com a conquista de Granada.",
      "O rei Afonso VI de Leão e Castela entregou o <b>Condado Portucalense</b> a <b>D. Henrique</b> de Borgonha, casado com a sua filha <b>D. Teresa</b> (c. 1096).",
      "O filho, <b>D. Afonso Henriques</b>, venceu os partidários da mãe na <b>batalha de S. Mamede (1128)</b> e passou a governar o condado. Depois da batalha de Ourique (1139), começou a usar o título de rei.",
      "Na <b>Conferência de Zamora (1143)</b>, o rei de Leão e Castela, Afonso VII, reconheceu-o como rei. Em <b>1179</b>, o papa Alexandre III reconheceu o reino com a bula <b>Manifestis Probatum</b>.",
      "D. Afonso Henriques alargou o território para sul: em <b>1147</b> conquistou <b>Santarém</b> e <b>Lisboa</b> (esta com a ajuda de cruzados do norte da Europa)."
    ],
    gloss:[
      ["Reconquista","Avanço dos reinos cristãos para sul, conquistando territórios aos muçulmanos."],
      ["moçárabe","Cristão que vivia em território muçulmano."],
      ["mudéjar","Muçulmano que vivia em território cristão."],
      ["condado","Território governado por um conde, em nome de um rei."],
      ["independência","Situação de um território que não depende de outro."],
      ["bula","Documento oficial do papa."],
      ["cruzados","Guerreiros cristãos que partiam em expedições militares com apoio da Igreja."]
    ],
    quiz:[
      {q:"A quem entregou Afonso VI de Leão e Castela o Condado Portucalense?", opts:["A D. Henrique de Borgonha, casado com D. Teresa","A D. Afonso Henriques","A D. Dinis","A Viriato"], correct:0, explain:"Afonso VI entregou o condado a D. Henrique de Borgonha, casado com a sua filha D. Teresa. D. Afonso Henriques era filho de ambos."},
      {q:"O que aconteceu na batalha de S. Mamede (1128)?", opts:["D. Afonso Henriques venceu os partidários da mãe e passou a governar o condado","Portugal foi reconhecido pelo papa","Lisboa foi conquistada aos muçulmanos","Os Castelhanos foram derrotados em Aljubarrota"], correct:0, explain:"Em S. Mamede, D. Afonso Henriques venceu os partidários de D. Teresa e tomou o governo do condado. O reconhecimento pelo papa foi em 1179; Lisboa foi conquistada em 1147.", pista:"Contra quem lutou D. Afonso Henriques em 1128?"},
      {q:"Em que ano foi Portugal reconhecido como reino pelo rei de Leão e Castela, na Conferência de Zamora?", opts:["1143","1128","1179","1385"], correct:0, explain:"Na Conferência de Zamora, em 1143, Afonso VII reconheceu D. Afonso Henriques como rei.", irma:{q:"Em que ano reconheceu o papa o reino de Portugal, com a bula Manifestis Probatum?", opts:["1179","1143","1147","1096"], correct:0, explain:"Em 1179, o papa Alexandre III reconheceu D. Afonso Henriques como rei e Portugal como reino."}},
      {q:"O que eram os moçárabes?", opts:["Cristãos que viviam em território muçulmano","Muçulmanos que viviam em território cristão","Soldados do rei de Castela","Monges copistas"], correct:0, explain:"Os moçárabes eram cristãos em território muçulmano; os mudéjares eram muçulmanos em território cristão."},
      {q:"Que cidades conquistou D. Afonso Henriques em 1147?", opts:["Santarém e Lisboa","Faro e Silves","Braga e Guimarães","Coimbra e Porto"], correct:0, explain:"Em 1147, D. Afonso Henriques conquistou Santarém e Lisboa; Lisboa com a ajuda de cruzados do norte da Europa. O Algarve só foi conquistado em 1249, por D. Afonso III."},
      {q:"Quando terminou a Reconquista na Península Ibérica?", opts:["Em 1492, com a conquista de Granada","Em 1147, com a conquista de Lisboa","Em 1143, com Zamora","Em 711"], correct:0, explain:"A Reconquista terminou em 1492, quando os Reis Católicos conquistaram Granada, o último reino muçulmano da Península. Em Portugal, a Reconquista terminou antes, em 1249, com o Algarve."}
    ],
    compare:{
      left:{title:"🏷️ Condado Portucalense", points:["Dependia do rei de Leão e Castela","Governado por um conde","D. Henrique e D. Teresa"]},
      right:{title:"👑 Reino de Portugal", points:["Independente","Governado por um rei","D. Afonso Henriques (Zamora, 1143; bula de 1179)"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 166) e «Ficha de avaliação» (p. 168)"
  },
  {
    id:"h10", num:10, c:"m1", icon:"⚖️",
    title:"Feiras, Concelhos e Reis",
    subtitle:"Desenvolvimento económico, relações sociais e poder político nos séculos XII a XIV", pages:"Somos História 7, D1 (pp. 170–187); caderno de atividades, fichas 28 e 29 (pp. 71–74)",
    lead:"A partir do século XII, a Europa voltou a crescer: mais gente, mais terras cultivadas, mais comércio e cidades. Em Portugal, os concelhos ganharam importância e os reis fortaleceram o seu poder perante a nobreza e o clero. Neste mundo vais compreender estas mudanças.",
    missions:[
      {t:"Novas Técnicas no Campo", d:"O dinamismo do mundo rural", f:"Faz uma tabela com 4 inovações agrícolas da Idade Média (charrua, afolhamento trienal, moinhos de água e de vento, nova atrelagem).\nPara cada uma, explica como aumentou a produção.", xp:10},
      {t:"Dia de Feira", d:"O comércio e a burguesia", f:"Imagina uma feira medieval numa vila portuguesa.\nEscreve um pequeno texto com o que se vendia, quem vendia e quem comprava.\nExplica quem era a burguesia.", xp:10},
      {t:"A Carta de Foral", d:"Os concelhos", f:"Pesquisa o foral da tua terra (ou de uma vila próxima): quem o deu e em que ano.\nIndica 2 direitos e 2 deveres que um foral podia dar aos moradores.", xp:10},
      {t:"O Rei Manda Perguntar", d:"O fortalecimento do poder régio", f:"Explica o que eram as Inquirições e as Confirmações.\nIndica porque é que a nobreza e o clero não gostavam delas.", xp:10}
    ],
    resumo:[
      "A partir do século XII houve <b>crescimento</b>: mais população, <b>arroteamentos</b> (novas terras desbravadas para cultivo) e novas técnicas (charrua, <b>afolhamento trienal</b>, moinhos de água e de vento, melhor atrelagem dos animais).",
      "A economia passou de subsistência a <b>economia urbana</b> e monetária: as cidades cresceram, o comércio desenvolveu-se em <b>feiras</b> e mercados, e cresceu um novo grupo social, a <b>burguesia</b> (mercadores e artesãos), muitas vezes organizada em mesteres.",
      "Grandes <b>rotas de comércio</b>: o Mediterrâneo (Veneza, Génova), o Norte (as cidades da Hansa, no Báltico), as feiras de Champagne e a Flandres (Bruges). Portugal exportava sal, vinho, azeite e frutos secos para a Flandres e a Inglaterra.",
      "Em Portugal havia <b>senhorios</b> laicos e eclesiásticos (honras e coutos) e <b>concelhos</b>, comunidades de moradores com uma <b>carta de foral</b>, dada pelo rei ou por um senhor, que definia os seus direitos e deveres. Os <b>homens-bons</b> governavam os concelhos.",
      "Os reis <b>fortaleceram o poder régio</b>: D. Afonso II e D. Afonso III fizeram <b>Inquirições</b> (inquéritos para saber que terras e direitos pertenciam ao rei) e <b>Confirmações</b> (os senhores tinham de provar os seus direitos).",
      "Em <b>1254</b>, nas Cortes de Leiria, os representantes dos concelhos participaram pela primeira vez nas <b>Cortes</b>, ao lado do clero e da nobreza.",
      "<b>D. Dinis</b> continuou as inquirições, fundou o Estudo Geral (a universidade, em 1290), generalizou o uso do português nos documentos oficiais e fixou as fronteiras com Castela no <b>Tratado de Alcanices (1297)</b>."
    ],
    gloss:[
      ["arroteamento","Preparação de terras incultas para o cultivo."],
      ["afolhamento trienal","Divisão das terras em três folhas, com rotação de culturas e um ano de pousio."],
      ["burguesia","Grupo social das cidades, formado por mercadores e artesãos."],
      ["feira","Mercado realizado periodicamente, em dias certos."],
      ["concelho","Comunidade de moradores com direitos e deveres definidos numa carta de foral."],
      ["carta de foral","Documento que criava um concelho e fixava os direitos e deveres dos moradores."],
      ["Inquirições","Inquéritos mandados fazer pelo rei sobre as terras e os direitos dos senhores."],
      ["Cortes","Assembleia convocada pelo rei, com representantes do clero, da nobreza e dos concelhos."]
    ],
    quiz:[
      {q:"O que era uma carta de foral?", opts:["Um documento que fixava os direitos e deveres dos moradores de um concelho","Um documento do papa","Uma lei sobre o comércio com a Flandres","Uma moeda medieval"], correct:0, explain:"A carta de foral criava o concelho e definia os direitos e os deveres dos moradores (impostos, justiça, defesa).", pista:"Está ligada aos concelhos."},
      {q:"Para que serviam as Inquirições?", opts:["Para o rei saber que terras e direitos lhe pertenciam e travar abusos dos senhores","Para escolher os homens-bons","Para cobrar impostos ao povo","Para organizar feiras"], correct:0, explain:"As Inquirições eram inquéritos que mostravam as terras e os direitos do rei e os abusos dos senhores; ajudaram a fortalecer o poder régio.", irma:{q:"O que eram as Confirmações?", opts:["A exigência de que os senhores provassem os direitos e as terras que diziam ter","A coroação de um rei","Um imposto sobre o sal","Uma feira anual"], correct:0, explain:"Nas Confirmações, os senhores tinham de mostrar documentos que provassem as doações e os privilégios recebidos."}},
      {q:"Em que ano participaram pela primeira vez os representantes dos concelhos nas Cortes?", opts:["1254, em Leiria","1143, em Zamora","1385, em Coimbra","1297, em Alcanices"], correct:0, explain:"Nas Cortes de Leiria de 1254, no reinado de D. Afonso III, estiveram pela primeira vez representantes dos concelhos."},
      {q:"Quem formava a burguesia?", opts:["Mercadores e artesãos das cidades","Os nobres","Os servos","Os bispos"], correct:0, explain:"A burguesia era o grupo social das cidades (os burgos), formado sobretudo por mercadores e artesãos."},
      {q:"O que fixou o Tratado de Alcanices (1297)?", opts:["As fronteiras entre Portugal e Castela","A independência de Portugal","O fim da Peste Negra","A fundação da universidade"], correct:0, explain:"Assinado por D. Dinis, o Tratado de Alcanices fixou a fronteira com Castela, quase igual à atual."},
      {q:"Qual destas técnicas fez aumentar a produção agrícola na Idade Média?", opts:["O afolhamento trienal","O tear mecânico","A máquina a vapor","Os adubos químicos"], correct:0, explain:"O afolhamento trienal (rotação de culturas em três folhas) deixava menos terra em pousio. As outras opções são invenções muito posteriores."}
    ],
    compare:{
      left:{title:"🏰 Senhorio", points:["Governado por um senhor (nobre ou eclesiástico)","Camponeses pagam rendas e corveias","Honras e coutos"]},
      right:{title:"🏘️ Concelho", points:["Comunidade de moradores","Direitos e deveres na carta de foral","Governado pelos homens-bons"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 184) e «Ficha de avaliação» (p. 186)"
  },
  {
    id:"h11", num:11, c:"m2", icon:"⛪",
    title:"Românico e Gótico",
    subtitle:"A cultura portuguesa face aos modelos europeus", pages:"Somos História 7, D2 (pp. 188–205); caderno de atividades, ficha 30 (p. 75)",
    lead:"Na Idade Média, a cultura europeia estava muito ligada à Igreja: os mosteiros, as escolas, as primeiras universidades, as ordens religiosas. Na arte, dois estilos marcaram a paisagem: o românico, sólido e escuro, e o gótico, alto e cheio de luz. Neste mundo vais compará-los e encontrá-los em Portugal.",
    missions:[
      {t:"Detetive de Igrejas", d:"Distinguir o românico do gótico", f:"Observa (ao vivo ou em fotografias) a Sé de Lisboa e o Mosteiro da Batalha.\nFaz uma tabela com 4 diferenças: arcos, paredes, janelas e luz.", xp:10},
      {t:"Uma Iluminura", d:"A cultura nos mosteiros", f:"Desenha a primeira letra do teu nome como uma iluminura medieval, com cores e motivos vegetais.\nExplica numa frase quem fazia estes livros e onde.", xp:10},
      {t:"Cantigas Medievais", d:"A cultura em Portugal: o trovadorismo", f:"Lê uma cantiga de amigo de D. Dinis (com a ajuda de uma versão em português atual).\nExplica quem fala na cantiga e qual é o tema.", xp:10}
    ],
    resumo:[
      "Na Idade Média, a <b>Igreja</b> era o centro da cultura: os <b>mosteiros</b> tinham bibliotecas e scriptoria, onde os copistas copiavam e decoravam livros com <b>iluminuras</b>.",
      "Surgiram as <b>universidades</b> (Bolonha, Paris, Oxford). Em Portugal, D. Dinis fundou o <b>Estudo Geral</b> em 1290, em Lisboa; mais tarde foi transferido para Coimbra.",
      "No século XIII surgiram as <b>ordens mendicantes</b> (os Franciscanos, de S. Francisco de Assis, e os Dominicanos, de S. Domingos), que viviam da esmola e pregavam nas cidades. Santo António de Lisboa era franciscano.",
      "Em Portugal desenvolveu-se o <b>trovadorismo</b>: cantigas de amigo, de amor e de escárnio e maldizer, escritas em galego-português. O rei D. Dinis foi um dos trovadores.",
      "A <b>arte românica</b> (séculos XI a XIII): paredes grossas, poucas janelas e estreitas, interiores escuros, <b>arcos de volta perfeita</b>, abóbadas de berço, contrafortes; aspeto de fortaleza. Exemplos: a <b>Sé de Lisboa</b> e a <b>Sé Velha de Coimbra</b>.",
      "A <b>arte gótica</b> (em Portugal, sobretudo séculos XIII a XV): <b>arco quebrado</b> (ogival), abóbadas de cruzaria de ogivas, <b>arcobotantes</b>, paredes mais finas, janelas grandes com <b>vitrais</b> e rosáceas; muita altura e luz. Exemplos: o <b>Mosteiro de Alcobaça</b> e o <b>Mosteiro da Batalha</b>."
    ],
    gloss:[
      ["iluminura","Pintura ou letra decorada nos livros copiados à mão."],
      ["universidade","Escola superior, onde se estudavam as artes, o direito, a medicina e a teologia."],
      ["ordens mendicantes","Ordens religiosas que viviam de esmolas e pregavam nas cidades."],
      ["trovadorismo","Poesia cantada da Idade Média, feita pelos trovadores."],
      ["arco de volta perfeita","Arco em meia circunferência, típico do românico."],
      ["arco quebrado (ogival)","Arco em ponta, típico do gótico."],
      ["arcobotante","Arco exterior que apoia as paredes altas das igrejas góticas."],
      ["vitral","Janela com vidros coloridos que formam figuras."]
    ],
    quiz:[
      {q:"Que tipo de arco é característico do estilo gótico?", opts:["O arco quebrado (ogival)","O arco de volta perfeita","O arco em ferradura","O arco de triunfo"], correct:0, explain:"O arco quebrado ou ogival, em ponta, é típico do gótico. O de volta perfeita é românico; o de ferradura é muçulmano.", pista:"O gótico procura altura: o arco «aponta» para cima.", irma:{q:"Que tipo de arco é característico do estilo românico?", opts:["O arco de volta perfeita","O arco quebrado (ogival)","O arco em ferradura","O arcobotante"], correct:0, explain:"O românico usa o arco de volta perfeita, em meia circunferência, herdado dos Romanos."}},
      {q:"Porque é que as igrejas românicas são escuras por dentro?", opts:["As paredes grossas tinham poucas janelas, e estreitas","Eram pintadas de preto","Não tinham portas","Eram construídas debaixo da terra"], correct:0, explain:"Para aguentar o peso das abóbadas de pedra, as paredes românicas eram grossas e com poucas aberturas: entrava pouca luz."},
      {q:"Para que serviam os arcobotantes no gótico?", opts:["Para apoiar por fora as paredes altas, permitindo janelas grandes","Para decorar o altar","Para fazer subir os sinos","Para guardar livros"], correct:0, explain:"Os arcobotantes transmitem o peso das abóbadas para pilares exteriores. Assim, as paredes podiam ser mais finas e ter grandes janelas com vitrais."},
      {q:"Qual destes monumentos é gótico?", opts:["O Mosteiro da Batalha","A Sé de Lisboa","O templo romano de Évora","A Sé Velha de Coimbra"], correct:0, explain:"O Mosteiro da Batalha é gótico. As sés de Lisboa e Coimbra são românicas (na origem); o templo de Évora é romano.", irma:{q:"Qual destes monumentos é românico?", opts:["A Sé Velha de Coimbra","O Mosteiro da Batalha","O Mosteiro de Alcobaça","O Coliseu de Roma"], correct:0, explain:"A Sé Velha de Coimbra é um exemplo do românico em Portugal. Batalha e Alcobaça são góticos; o Coliseu é romano."}},
      {q:"Quem fundou o Estudo Geral (a universidade) em Portugal, em 1290?", opts:["D. Dinis","D. Afonso Henriques","D. João I","D. Fernando"], correct:0, explain:"D. Dinis fundou o Estudo Geral em Lisboa, em 1290. Foi também trovador."}
    ],
    compare:{
      left:{title:"🧱 Românico", points:["Arco de volta perfeita","Paredes grossas, poucas janelas","Interior escuro; aspeto de fortaleza"]},
      right:{title:"🌈 Gótico", points:["Arco quebrado (ogival) e arcobotantes","Paredes finas, grandes vitrais","Interior alto e luminoso"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 202) e «Ficha de avaliação» (p. 204)"
  },
  {
    id:"h12", num:12, c:"m3", icon:"🐎",
    title:"A Crise de 1383–1385",
    subtitle:"Crises e revolução no século XIV", pages:"Somos História 7, D3 (pp. 206–223); caderno de atividades, ficha 31 (p. 77)",
    lead:"O século XIV foi de crise na Europa: fomes, a Peste Negra, que matou uma parte enorme da população, e guerras. Em Portugal, a morte do rei D. Fernando sem filho varão pôs em risco a independência do reino. Neste mundo vais compreender a crise do século XIV e a crise de 1383–1385, que terminou com a vitória em Aljubarrota.",
    missions:[
      {t:"Um Século Difícil", d:"A crise na Europa do século XIV", f:"Faz um esquema com as três grandes causas da crise: fome, peste e guerra.\nPara cada uma, dá um exemplo e uma consequência.", xp:10},
      {t:"A Sucessão de D. Fernando", d:"O problema de 1383", f:"Desenha a árvore da família de D. Fernando: D. Leonor Teles, D. Beatriz, D. João I de Castela e D. João, Mestre de Avis.\nExplica porque é que o casamento de D. Beatriz ameaçava a independência.", xp:10},
      {t:"Aljubarrota", d:"A batalha de 14 de agosto de 1385", f:"Desenha um esquema da tática do quadrado usada por Nuno Álvares Pereira.\nExplica numa frase porque é que um exército mais pequeno conseguiu vencer.", xp:10},
      {t:"Quem Apoiou Quem?", d:"Os grupos sociais na crise", f:"Faz uma tabela com quem apoiou o Mestre de Avis e quem apoiou D. Beatriz e Castela.\nExplica a importância da burguesia e do povo de Lisboa.", xp:10}
    ],
    resumo:[
      "No século XIV, a Europa viveu uma <b>crise</b>: maus anos agrícolas e <b>fomes</b> (como a Grande Fome de 1315–1317), a <b>Peste Negra</b> (a partir de 1347), que matou entre um terço e metade da população europeia, e <b>guerras</b>, como a Guerra dos Cem Anos (1337–1453). Houve revoltas populares.",
      "A Peste Negra chegou a Portugal em <b>1348</b>. Com a morte de tanta gente, faltaram trabalhadores e muitos campos ficaram abandonados. D. Fernando publicou a <b>Lei das Sesmarias (1375)</b>, que obrigava a cultivar as terras.",
      "Em <b>1383</b>, D. Fernando morreu sem filho varão. A filha, <b>D. Beatriz</b>, estava casada com <b>D. João I de Castela</b>: se ela reinasse, Portugal podia perder a independência. A regência ficou com a viúva, <b>D. Leonor Teles</b>.",
      "Em dezembro de 1383, <b>D. João, Mestre de Avis</b>, meio-irmão de D. Fernando, matou o conde Andeiro, conselheiro da rainha, e foi aclamado <b>Regedor e Defensor do Reino</b>, com o apoio da burguesia e do povo de Lisboa. Grande parte da nobreza apoiou Castela.",
      "Castela invadiu Portugal e cercou Lisboa (1384); o cerco foi levantado por causa da peste no exército castelhano. <b>Nuno Álvares Pereira</b> venceu a batalha dos <b>Atoleiros</b> (1384).",
      "Nas <b>Cortes de Coimbra (1385)</b>, com os argumentos de João das Regras, o Mestre de Avis foi aclamado rei: <b>D. João I</b>, o primeiro rei da dinastia de Avis.",
      "A <b>batalha de Aljubarrota</b> (14 de agosto de 1385) deu a vitória aos portugueses, com a tática do quadrado e a ajuda de arqueiros ingleses. A independência ficou assegurada; em 1386, o <b>Tratado de Windsor</b> reforçou a aliança com a Inglaterra, e a paz com Castela foi assinada em 1411."
    ],
    gloss:[
      ["Peste Negra","Epidemia de peste que, a partir de 1347, matou uma enorme parte da população europeia."],
      ["Lei das Sesmarias","Lei de D. Fernando (1375) que obrigava a cultivar as terras abandonadas."],
      ["regência","Governo exercido por alguém em nome de um rei ou na falta dele."],
      ["Mestre de Avis","D. João, chefe da Ordem militar de Avis, que veio a ser o rei D. João I."],
      ["Cortes de Coimbra","Assembleia de 1385 que aclamou o Mestre de Avis como rei."],
      ["tática do quadrado","Disposição das tropas em quadrado, com alas protegidas, usada em Aljubarrota."],
      ["dinastia","Sucessão de reis da mesma família."]
    ],
    quiz:[
      {q:"Porque é que a morte de D. Fernando, em 1383, pôs em risco a independência de Portugal?", opts:["A herdeira, D. Beatriz, estava casada com o rei de Castela","D. Fernando não tinha nenhuma filha","O papa queria governar Portugal","Os muçulmanos voltaram a invadir o reino"], correct:0, explain:"D. Fernando não tinha filho varão; a filha, D. Beatriz, estava casada com D. João I de Castela, o que podia juntar os dois reinos sob o rei castelhano.", pista:"Com quem estava casada a herdeira?"},
      {q:"Quem foi aclamado rei nas Cortes de Coimbra, em 1385?", opts:["D. João, Mestre de Avis (D. João I)","D. Beatriz","D. João I de Castela","Nuno Álvares Pereira"], correct:0, explain:"Nas Cortes de Coimbra, o Mestre de Avis foi aclamado rei, como D. João I, o primeiro da dinastia de Avis. Nuno Álvares Pereira foi o seu condestável.", irma:{q:"Quem comandou as tropas portuguesas nos Atoleiros e em Aljubarrota?", opts:["Nuno Álvares Pereira","João das Regras","D. Fernando","D. Leonor Teles"], correct:0, explain:"Nuno Álvares Pereira comandou as tropas nos Atoleiros (1384) e em Aljubarrota (1385). João das Regras foi o jurista das Cortes de Coimbra."}},
      {q:"Quem apoiou sobretudo o Mestre de Avis?", opts:["A burguesia e o povo de Lisboa (e de outras cidades)","Toda a nobreza","O rei de Castela","D. Leonor Teles"], correct:0, explain:"A burguesia e o povo das cidades apoiaram o Mestre de Avis; grande parte da nobreza apoiou D. Beatriz e Castela."},
      {q:"Em que data foi a batalha de Aljubarrota?", opts:["14 de agosto de 1385","25 de abril de 1974","1 de dezembro de 1640","5 de outubro de 1910"], correct:0, explain:"Aljubarrota foi a 14 de agosto de 1385. As outras datas são de outros acontecimentos da história de Portugal."},
      {q:"Qual destas foi uma consequência da Peste Negra?", opts:["Falta de trabalhadores e campos abandonados","Aumento da população","Fim das guerras","Crescimento das colheitas"], correct:0, explain:"A Peste Negra matou muita gente; faltaram braços para trabalhar e muitos campos ficaram abandonados. Por isso, D. Fernando publicou a Lei das Sesmarias.", pista:"O que acontece aos campos quando morre muita gente?"},
      {q:"O que reforçou o Tratado de Windsor (1386)?", opts:["A aliança entre Portugal e a Inglaterra","A paz com Castela","A independência de Castela","A união com Leão"], correct:0, explain:"O Tratado de Windsor reforçou a aliança luso-inglesa, que ainda hoje existe. A paz com Castela só foi assinada em 1411."}
    ],
    compare:{
      left:{title:"🇵🇹 Partido do Mestre de Avis", points:["Burguesia e povo das cidades","Parte da pequena nobreza","Defendia a independência"]},
      right:{title:"🏰 Partido de D. Beatriz", points:["Grande parte da alta nobreza","Apoio do rei de Castela","Aceitava a união das coroas"]}
    },
    boss:"Somos História 7: «Avalio o que sei sobre…» (p. 220) e «Ficha de avaliação» (p. 222)"
  }
];
