/* Extras do 7.º ano de Ciências Naturais: 🔥 desafio, 🔭 Portal Explorador e 💡 curiosidades (sempre com fonte). */
const CN7_EXTRA = {
  g1: {
    desafio: [
      {q:"O quartzo (dureza 7) risca o vidro (≈5,5). O vidro risca o quartzo?", opts:["Não","Sim","Só se estiver molhado","Só ao sol"], correct:0, explain:"Um material só risca os que são mais macios do que ele."},
      {q:"A pirite parece ouro mas tem risca preta-esverdeada. Que propriedade ajuda a distingui-los?", opts:["A risca","O tamanho","O cheiro","O peso da amostra"], correct:0, explain:"O ouro tem risca dourada. Por isso a pirite é o «ouro dos tolos»."},
      {q:"Que mineral do granito é o mais resistente à meteorização e acaba nas areias das praias?", opts:["Quartzo","Feldspato","Biotite","Calcite"], correct:0, explain:"O quartzo é duro e quase não se altera quimicamente."},
      {q:"Em que tipo de rocha se encontram muitas vezes cristais grandes e bem formados?", opts:["Em cavidades de rochas, onde tiveram espaço e tempo para crescer","Na areia da praia","No basalto de grão fino","No carvão"], correct:0, explain:"Os cristais precisam de espaço e de crescer devagar."},
      {q:"A halite (sal-gema) é um mineral. Que propriedade simples a identifica?", opts:["O sabor salgado (só se pode provar com autorização no laboratório!)","A cor azul","Ser magnética","Brilhar no escuro"], correct:0, explain:"Algumas propriedades especiais: sabor, magnetismo, reação com ácido."}
    ],
    explorar: {
      proximo: "No secundário vais estudar os minerais por dentro: como os átomos se arrumam em cristais, e porque é que o diamante e a grafite (do lápis) são feitos do mesmo elemento, o carbono, e são tão diferentes.",
      pontos: ["Porque é que o diamante e a grafite são tão diferentes?", "Que minerais estão no teu telemóvel?", "Como se formam os geodes?"],
      links: [{s:"rtp", q:"minerais"}, {u:"https://geology.com/minerals/", n:"Geology.com — fichas de minerais (em inglês)"}, {s:"britkids", q:"minerals"}]
    },
    curiosidades: [
      {t:"Um telemóvel tem dezenas de elementos químicos diferentes, extraídos de minerais — como o lítio da bateria. Portugal tem algumas das maiores reservas de lítio da Europa.", fonte:"Comissão Europeia e LNEG (Laboratório Nacional de Energia e Geologia)"},
      {t:"A escala de Mohs não é proporcional: o diamante (10) é muito mais do que duas vezes mais duro do que a apatite (5).", fonte:"Encyclopaedia Britannica"},
      {t:"O diamante e a grafite da mina do lápis são ambos feitos só de carbono; muda apenas a forma como os átomos estão arrumados.", fonte:"Smithsonian National Museum of Natural History"}
    ]
  },
  g2: {
    desafio: [
      {q:"Num rio, onde se depositam primeiro os sedimentos maiores (calhaus)?", opts:["Mais perto da nascente, onde a força diminui primeiro para eles","Só na foz","No mar alto","Nunca se depositam"], correct:0, explain:"Os materiais pesados precisam de mais energia para serem transportados."},
      {q:"As grutas de calcário (ex.: Mira de Aire) formam-se sobretudo por…", opts:["Dissolução do calcário pela água ligeiramente ácida","Explosões vulcânicas","Escavação humana","Vento"], correct:0, explain:"É meteorização química; as estalactites formam-se quando a calcite volta a precipitar."},
      {q:"Um conglomerado tem…", opts:["Calhaus arredondados cimentados","Cristais grandes","Folhas de mica","Só conchas"], correct:0, explain:"É uma rocha sedimentar detrítica de grão grosso."},
      {q:"O sal-gema forma-se por…", opts:["Evaporação de água salgada","Arrefecimento de lava","Metamorfismo","Erosão do granito"], correct:0, explain:"É uma rocha quimiogénica (evaporito)."},
      {q:"As raízes de uma árvore a partir uma rocha são meteorização…", opts:["Física (biológica)","Química","Metamórfica","Magmática"], correct:0, explain:"Os seres vivos também são agentes geológicos."}
    ],
    explorar: {
      proximo: "Mais tarde vais ver como os rios, o mar e o vento constroem deltas, praias e dunas, e como as alterações climáticas aceleram a erosão costeira em Portugal.",
      pontos: ["Porque é que algumas praias portuguesas estão a perder areia?", "Como se formam as estalactites?", "Que rochas sedimentares há na tua região?"],
      links: [{s:"rtp", q:"erosão costeira"}, {s:"rtp", q:"grutas de Mira de Aire"}, {s:"bitesize", q:"sedimentary rocks"}]
    },
    curiosidades: [
      {t:"As Grutas de Mira de Aire, no Maciço Calcário Estremenho, são das maiores grutas turísticas de Portugal: formaram-se pela água a dissolver o calcário durante milhares de anos.", fonte:"Parque Natural das Serras de Aire e Candeeiros (ICNF)"},
      {t:"Os grãos de areia de muitas praias portuguesas são sobretudo quartzo que veio de rochas como o granito, transportado pelos rios.", fonte:"LNEG"},
      {t:"Uma estalactite cresce, em média, menos de um milímetro por ano.", fonte:"U.S. National Park Service"}
    ]
  },
  g3: {
    desafio: [
      {q:"Os ovos de dinossauro com embriões encontrados na Lourinhã pertencem a que dinossauro?", opts:["Lourinhanosaurus","Tyrannosaurus","Triceratops","Velociraptor"], correct:0, explain:"Encontrados em 1997, em Paimogo: são dos embriões de dinossauro mais antigos conhecidos."},
      {q:"Porque é que é raro encontrar fósseis de medusas?", opts:["Não têm partes duras","Não existiam no passado","Vivem só em água doce","São demasiado grandes"], correct:0, explain:"As partes moles decompõem-se antes de fossilizarem."},
      {q:"Um molde interno forma-se quando…", opts:["Os sedimentos enchem o interior de uma concha e endurecem","A concha é dissolvida pela lava","O animal fica no gelo","Se faz uma pegada"], correct:0, explain:"Fica a forma do interior da concha."},
      {q:"As trilobites gigantes de Arouca viveram na era…", opts:["Paleozoica","Mesozoica","Cenozoica","Atual"], correct:0, explain:"Têm cerca de 465 milhões de anos (Ordovícico)."},
      {q:"Um fóssil vivo é…", opts:["Um ser atual muito parecido com antepassados fósseis (ex.: o celacanto)","Um fóssil que se mexe","Um dinossauro vivo","Uma rocha viva"], correct:0, explain:"O celacanto era conhecido só por fósseis até ser encontrado vivo em 1938."}
    ],
    explorar: {
      proximo: "Os fósseis são a base para estudar a evolução dos seres vivos, um tema do secundário — e hoje até se estuda o ADN de fósseis recentes, como os mamutes.",
      pontos: ["Como trabalha um paleontólogo no campo?", "Que dinossauros viveram em Portugal?", "Como se sabe a cor de um dinossauro?"],
      links: [{u:"https://www.museulourinha.org", n:"Museu da Lourinhã"}, {u:"https://naturalhistory.si.edu", n:"Smithsonian National Museum of Natural History (em inglês)"}, {s:"natgeo", q:"fossils"}]
    },
    curiosidades: [
      {t:"Em 1997, em Paimogo (Lourinhã), foi encontrado um ninho com mais de 100 ovos de dinossauro, alguns com embriões — dos mais antigos do mundo.", fonte:"Museu da Lourinhã"},
      {t:"No Geoparque de Arouca há trilobites gigantes, com até cerca de 70 cm, entre as maiores do mundo.", fonte:"Arouca UNESCO Global Geopark"},
      {t:"A Pedreira do Galinha, na Serra de Aire, tem dos mais longos trilhos de pegadas de saurópodes conhecidos, com cerca de 175 milhões de anos.", fonte:"Monumento Natural das Pegadas de Dinossáurios de Ourém/Torres Novas (ICNF)"}
    ]
  },
  g4: {
    desafio: [
      {q:"Uma camada de cinzas vulcânicas atravessa vários estratos. É…", opts:["Mais recente do que os estratos que atravessa","Mais antiga do que todos","Da mesma idade","Impossível saber"], correct:0, explain:"Princípio da intersecção: o que corta é mais recente do que o que é cortado."},
      {q:"Qual foi a primeira forma de vida na Terra?", opts:["Seres unicelulares, como bactérias","Dinossauros","Peixes","Árvores"], correct:0, explain:"Há vestígios de vida com mais de 3500 milhões de anos."},
      {q:"O que provocou o grande aumento de oxigénio na atmosfera, há mais de 2000 M.a.?", opts:["A fotossíntese de cianobactérias","Os vulcões","Os dinossauros","Os humanos"], correct:0, explain:"Chama-se o Grande Evento de Oxidação."},
      {q:"Onde se encontra uma prova do impacto do asteroide que extinguiu os dinossauros?", opts:["Na cratera de Chicxulub, no México","Na Serra da Estrela","No Japão","Na Lua"], correct:0, explain:"Tem cerca de 180 km de diâmetro."},
      {q:"Se a história da Terra fosse um dia, a que horas apareceriam os dinossauros?", opts:["Por volta das 22h50","Às 6h00","Ao meio-dia","Às 23h59"], correct:0, explain:"Há cerca de 230 M.a. — e desapareceriam por volta das 23h40."}
    ],
    explorar: {
      proximo: "No secundário vais aprender como funciona a datação radiométrica e como se reconstrói o clima do passado a partir de bolhas de ar presas no gelo da Antártida.",
      pontos: ["Como se calcula a idade de uma rocha?", "O que foi a «Terra bola de neve»?", "Estamos a viver uma nova extinção em massa?"],
      links: [{s:"britkids", q:"geologic time"}, {u:"https://naturalhistory.si.edu/exhibits/david-h-koch-hall-fossils-deep-time", n:"Smithsonian — Deep Time (em inglês)"}, {s:"rtp", q:"dinossauros"}]
    },
    curiosidades: [
      {t:"As rochas mais antigas da Terra têm cerca de 4000 milhões de anos e os cristais de zircão mais antigos chegam a 4400 milhões de anos (Austrália).", fonte:"Smithsonian National Museum of Natural History"},
      {t:"Os humanos modernos existem há cerca de 300 mil anos: num «dia» com toda a história da Terra, seriam só os últimos 6 segundos.", fonte:"Smithsonian Human Origins Program"},
      {t:"A extinção do fim do Paleozoico, há cerca de 252 milhões de anos, eliminou a grande maioria das espécies marinhas.", fonte:"Encyclopaedia Britannica"}
    ]
  },
  g5: {
    desafio: [
      {q:"De que é feito sobretudo o núcleo da Terra?", opts:["Ferro e níquel","Granito","Água","Ouro"], correct:0, explain:"É por isso que a Terra tem campo magnético."},
      {q:"Quem descobriu que o núcleo interno é sólido, em 1936?", opts:["Inge Lehmann","Marie Curie","Alfred Wegener","Albert Einstein"], correct:0, explain:"A sismóloga dinamarquesa percebeu-o analisando ondas de sismos."},
      {q:"Que provas convenceram os cientistas, nos anos 1960?", opts:["O mapa do fundo do mar e o magnetismo das rochas oceânicas","As fotografias de satélite","Os relatos dos marinheiros","A cor dos continentes"], correct:0, explain:"Mostravam crosta nova a nascer nas dorsais."},
      {q:"A dorsal médio-atlântica é um limite…", opts:["Divergente","Convergente","Transformante","Imóvel"], correct:0, explain:"O Atlântico alarga-se uns centímetros por ano."},
      {q:"A falha de Santo André, na Califórnia, é um limite…", opts:["Transformante","Divergente","Convergente","Vulcânico"], correct:0, explain:"As placas deslizam lado a lado — e provoca muitos sismos."}
    ],
    explorar: {
      proximo: "No secundário vais estudar a tectónica de placas em pormenor: as correntes de convecção no manto, os pontos quentes (como o Havai) e a formação das grandes cordilheiras.",
      pontos: ["Como será o mapa da Terra daqui a 200 milhões de anos?", "Porque é que os Himalaias continuam a subir?", "Como é que um GPS mede o movimento das placas?"],
      links: [{s:"bitesize", q:"plate tectonics"}, {s:"britkids", q:"plate tectonics"}, {s:"rtp", q:"tectónica de placas"}]
    },
    curiosidades: [
      {t:"Marie Tharp desenhou, com Bruce Heezen, o primeiro mapa do fundo do oceano e descobriu o vale ao longo da dorsal médio-atlântica — uma prova-chave da tectónica de placas.", fonte:"Library of Congress e Columbia University"},
      {t:"O furo mais fundo alguma vez feito, na península de Kola (Rússia), tem cerca de 12,2 km — menos de 0,2% do caminho até ao centro da Terra.", fonte:"Encyclopaedia Britannica"},
      {t:"O Atlântico alarga-se cerca de 2,5 cm por ano: Lisboa e Nova Iorque afastam-se um pouco todos os anos.", fonte:"USGS (Serviço Geológico dos EUA)"}
    ]
  },
  g6: {
    desafio: [
      {q:"A montanha do Pico, nos Açores, é…", opts:["Um vulcão — e o ponto mais alto de Portugal (2351 m)","Um bloco de granito","Uma montanha de calcário","Uma duna"], correct:0, explain:"É um estratovulcão, considerado ativo."},
      {q:"Porque é que a lava viscosa torna as erupções explosivas?", opts:["Prende os gases, que acumulam pressão","Porque é mais fria do que o gelo","Porque tem água salgada","Não torna"], correct:0, explain:"Quando a pressão vence, os gases libertam-se de repente."},
      {q:"Que cidade romana foi soterrada pelas cinzas do Vesúvio, no ano 79?", opts:["Pompeia","Roma","Lisboa","Atenas"], correct:0, explain:"As cinzas conservaram a cidade durante quase 1700 anos, até ser escavada."},
      {q:"O que são os «pillow lavas» (lavas em almofada)?", opts:["Lava que arrefece debaixo de água em forma de almofadas","Lava muito fofa","Cinzas vulcânicas","Um tipo de géiser"], correct:0, explain:"Indicam erupções submarinas."},
      {q:"Qual destes é um sinal de que um vulcão pode entrar em erupção?", opts:["Aumento de pequenos sismos e de gases","A chuva","O nascer do sol","A maré-baixa"], correct:0, explain:"Os vulcanólogos medem sismos, deformação do solo e gases."}
    ],
    explorar: {
      proximo: "Mais tarde vais estudar porque é que há vulcões nos limites das placas e nos «pontos quentes», e como a energia geotérmica pode ajudar a reduzir o uso de combustíveis fósseis.",
      pontos: ["Que vulcões estão ativos nos Açores?", "Como se produz eletricidade com o calor da Terra?", "Como era a vida em Pompeia?"],
      links: [{u:"https://www.ivar.azores.gov.pt", n:"IVAR — Instituto de Investigação em Vulcanologia e Avaliação de Riscos (Açores)"}, {u:"https://volcano.si.edu", n:"Smithsonian Global Volcanism Program (em inglês)"}, {s:"natgeo", q:"volcano"}]
    },
    curiosidades: [
      {t:"A erupção dos Capelinhos (1957–1958) aumentou a ilha do Faial e levou milhares de açorianos a emigrar para os Estados Unidos.", fonte:"Centro de Interpretação do Vulcão dos Capelinhos"},
      {t:"Nos Açores, uma parte importante da eletricidade de São Miguel é produzida por centrais geotérmicas, com o calor da Terra.", fonte:"EDA Renováveis / Governo dos Açores"},
      {t:"O Programa de Vulcanismo Global do Smithsonian regista cerca de 1350 vulcões que entraram em erupção nos últimos 12 mil anos.", fonte:"Smithsonian Global Volcanism Program"}
    ]
  },
  g7: {
    desafio: [
      {q:"Na escala de magnitude, um sismo de magnitude 7 liberta cerca de quanta energia a mais do que um de 6?", opts:["Cerca de 32 vezes mais","2 vezes","10 vezes exatamente","A mesma"], correct:0, explain:"Cada grau a mais corresponde a cerca de 32 vezes mais energia."},
      {q:"Que ondas sísmicas não atravessam líquidos — e por isso revelaram o núcleo externo líquido?", opts:["Ondas S","Ondas P","Ondas do mar","Ondas de rádio"], correct:0, explain:"As ondas S desaparecem ao chegar ao núcleo externo."},
      {q:"Que entidade regista os sismos em Portugal?", opts:["IPMA (Instituto Português do Mar e da Atmosfera)","INEM","ASAE","IMT"], correct:0, explain:"Publica os sismos sentidos no seu site."},
      {q:"Como se tornaram os edifícios da Baixa Pombalina mais resistentes a sismos?", opts:["Com a «gaiola pombalina», uma estrutura de madeira flexível dentro das paredes","Com paredes de vidro","Sem janelas","Com telhados de ouro"], correct:0, explain:"Foi uma das primeiras construções antissísmicas do mundo."},
      {q:"Depois de um sismo forte, perto do mar, o que se deve fazer?", opts:["Afastar-se da costa e ir para um sítio alto, por causa de um possível tsunami","Ir à praia ver o mar recuar","Ficar na areia","Ir de barco"], correct:0, explain:"Se o mar recuar de repente, é um sinal de tsunami."}
    ],
    explorar: {
      proximo: "No secundário vais estudar as ondas sísmicas P, S e superficiais e como os engenheiros desenham edifícios que resistem aos sismos.",
      pontos: ["Como se prepara uma escola para um sismo?", "Porque é que o Japão tem tantos sismos?", "Como se calcula onde foi o epicentro?"],
      links: [{u:"https://www.ipma.pt/pt/geofisica/sismologia/", n:"IPMA — sismos em Portugal"}, {u:"https://www.prociv.gov.pt", n:"Proteção Civil — o que fazer em caso de sismo"}, {u:"https://earthquake.usgs.gov/earthquakes/map/", n:"USGS — mapa de sismos em tempo real (em inglês)"}]
    },
    curiosidades: [
      {t:"Depois do sismo de 1755, o Marquês de Pombal mandou fazer um inquérito às paróquias sobre o que tinha acontecido — por isso é visto como um dos fundadores da sismologia moderna.", fonte:"Encyclopaedia Britannica"},
      {t:"O maior sismo alguma vez registado foi no Chile, em 1960, com magnitude 9,5.", fonte:"USGS (Serviço Geológico dos EUA)"},
      {t:"Em Portugal, o IPMA regista todos os anos milhares de sismos, quase todos tão fracos que ninguém os sente.", fonte:"IPMA"}
    ]
  },
  g8: {
    desafio: [
      {q:"A obsidiana é uma rocha vulcânica sem cristais, parecida com vidro. Porquê?", opts:["Arrefeceu tão depressa que os cristais não tiveram tempo de se formar","Foi feita numa fábrica","É um mineral","É metamórfica"], correct:0, explain:"Foi usada na Pré-História para fazer lâminas muito afiadas."},
      {q:"O gnaisse, com bandas claras e escuras, pode resultar da transformação do…", opts:["Granito","Carvão","Sal-gema","Gelo"], correct:0, explain:"Com muita pressão e temperatura, os minerais do granito alinham-se em bandas."},
      {q:"O que é a calçada portuguesa?", opts:["Pavimento de pequenos cubos de calcário (brancos) e basalto (pretos)","Pavimento de mármore apenas","Tijolos de barro","Asfalto"], correct:0, explain:"Uma arte portuguesa com rochas sedimentares e magmáticas."},
      {q:"Para uma rocha sedimentar se transformar em magmática tem de…", opts:["Fundir e depois solidificar","Só ser lavada","Ser pintada","Ganhar fósseis"], correct:0, explain:"No ciclo das rochas, a fusão leva ao magma."},
      {q:"As «Aldeias do Xisto» ficam sobretudo…", opts:["Na região Centro de Portugal","Nos Açores","No Algarve, só na praia","Na Madeira"], correct:0, explain:"As casas foram construídas com a rocha da região."}
    ],
    explorar: {
      proximo: "No secundário vais estudar a cristalização do magma, os tipos de metamorfismo e os recursos geológicos — incluindo os minerais críticos para as baterias e as energias renováveis.",
      pontos: ["De que rocha é feita a tua escola?", "Como se faz o cimento?", "Que recursos geológicos há em Portugal?"],
      links: [{u:"https://www.lneg.pt", n:"LNEG — Laboratório Nacional de Energia e Geologia"}, {s:"rtp", q:"ciclo das rochas"}, {s:"bitesize", q:"rock cycle"}]
    },
    curiosidades: [
      {t:"A calçada portuguesa usa sobretudo calcário branco e basalto preto; muitos passeios de Lisboa são verdadeiros mosaicos de rochas.", fonte:"Câmara Municipal de Lisboa"},
      {t:"O mármore de Estremoz, Borba e Vila Viçosa é usado desde os tempos romanos e exportado para todo o mundo.", fonte:"LNEG"},
      {t:"O granito de muitos monumentos do norte de Portugal formou-se a vários quilómetros de profundidade e só chegou à superfície depois de milhões de anos de erosão.", fonte:"LNEG"}
    ]
  }
};
