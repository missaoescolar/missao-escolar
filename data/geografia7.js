/* Geografia do 7.º ano. Aprendizagens Essenciais de Geografia do 7.º ano; mundos segundo os temas do manual
   «Novo Mapa-Mundo 7» (Texto) e do caderno «Diário de viagem», que servem só de referência (conteúdo original).
   Valores que variam conforme a fonte (comprimento dos rios, altitudes) são dados como aproximados.
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const GEO7_WORLDS = [
  {
    id:"o1", num:1, c:"m1", icon:"🌍",
    title:"A Grande Viagem",
    subtitle:"Continentes, oceanos, União Europeia e países de língua portuguesa", pages:"Novo Mapa-Mundo 7, «A grande viagem» (pp. 6–25); caderno de atividades, «Diário de viagem», itinerários 1 e 2",
    lead:"Antes de estudar a Terra a fundo, faz-se uma volta ao mundo: os continentes, os oceanos, a União Europeia e os países que falam português. Como nos diários de viagem dos grandes exploradores, vais registar o que descobres em cada lugar.",
    missions:[
      {t:"O Meu Itinerário", d:"Continentes e oceanos", f:"Num mapa-mundo em branco, escolhe 15 lugares que gostarias de visitar, passando por todos os continentes.\nTraça o itinerário com setas e escreve o nome dos oceanos que atravessas.", xp:10},
      {t:"A União Europeia em Cores", d:"Os alargamentos da União Europeia", f:"Num mapa da Europa, pinta os países da UE com uma cor por ano de adesão (1957, 1973, 1981, 1986, 1995, 2004, 2007, 2013).\nMarca o Reino Unido, que saiu em 2020.", xp:10},
      {t:"Falar Português pelo Mundo", d:"Os países de língua oficial portuguesa", f:"Localiza num mapa os 9 países da CPLP.\nPara cada um, indica o continente e a capital.", xp:10},
      {t:"Recordes da Terra", d:"Os extremos da Terra", f:"Faz um cartão de recordes: o ponto mais alto, o ponto mais profundo do oceano, o maior oceano, o maior país e o maior deserto quente.\nIndica onde fica cada um.", xp:10}
    ],
    resumo:[
      "Os <b>continentes</b>: Europa, Ásia, África, América, Oceânia e Antártida. Os <b>oceanos</b>: Pacífico (o maior), Atlântico, Índico, Glacial Ártico e Glacial Antártico.",
      "A <b>Europa</b> tem um litoral muito recortado, com muitas penínsulas (Ibérica, Itálica, Escandinava, Balcânica) e ilhas, e alguns microestados (Andorra, Mónaco, São Marino, Vaticano, Liechtenstein, Malta).",
      "A <b>União Europeia</b> nasceu em <b>1957</b> (Tratado de Roma), com 6 países: Alemanha, França, Itália, Bélgica, Países Baixos e Luxemburgo. <b>Portugal aderiu em 1986</b>, com Espanha. Chegou a ter 28 membros (2013); com a saída do Reino Unido, em 2020, passou a ter <b>27</b>.",
      "Objetivos da UE: paz, cooperação económica, livre circulação de pessoas, mercadorias e capitais, e uma moeda única, o <b>euro</b> (em circulação desde 2002), adotada por muitos dos países membros.",
      "A <b>CPLP</b> (Comunidade dos Países de Língua Portuguesa) tem 9 membros: Portugal, Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste e Guiné Equatorial.",
      "<b>Extremos da Terra</b>: o monte <b>Evereste</b>, nos Himalaias, é o ponto mais alto (cerca de 8850 m); a <b>Fossa das Marianas</b>, no Pacífico, é o ponto mais profundo (perto de 11 000 m); o <b>Sara</b> é o maior deserto quente; a <b>Rússia</b> é o maior país; o <b>Amazonas</b> é o rio com mais água (e disputa com o Nilo o título de mais comprido)."
    ],
    gloss:[
      ["continente","Grande extensão de terra rodeada por oceanos."],
      ["oceano","Grande massa de água salgada que separa os continentes."],
      ["península","Porção de terra rodeada de água por todos os lados menos um."],
      ["microestado","País com área e população muito pequenas (ex.: Mónaco, Vaticano)."],
      ["União Europeia","Organização de 27 países europeus que cooperam na economia, na política e noutras áreas."],
      ["CPLP","Comunidade dos Países de Língua Portuguesa."],
      ["itinerário","Percurso de uma viagem, com os lugares por onde se passa."]
    ],
    quiz:[
      {q:"Qual é o maior oceano da Terra?", opts:["Pacífico","Atlântico","Índico","Glacial Ártico"], correct:0, explain:"O Pacífico é o maior e o mais profundo; ocupa cerca de um terço da superfície da Terra. Portugal é banhado pelo Atlântico.", pista:"É o oceano entre a Ásia e a América."},
      {q:"Em que ano aderiu Portugal à então Comunidade Económica Europeia (hoje União Europeia)?", opts:["1986","1957","1974","2002"], correct:0, explain:"Portugal e Espanha aderiram em 1986. 1957 é a fundação; 1974 é o 25 de Abril; 2002 é a entrada em circulação do euro.", irma:{q:"Quantos países membros tem a União Europeia desde a saída do Reino Unido, em 2020?", opts:["27","28","6","12"], correct:0, explain:"Depois da saída do Reino Unido, a UE passou de 28 para 27 membros. Eram 6 os países fundadores."}},
      {q:"Quantos países pertencem à CPLP?", opts:["9","5","6","12"], correct:0, explain:"São 9: Portugal, Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste e Guiné Equatorial."},
      {q:"Onde fica o ponto mais profundo dos oceanos?", opts:["Na Fossa das Marianas, no Pacífico","No meio do Atlântico","No Mar Mediterrâneo","No Oceano Índico, junto à Índia"], correct:0, explain:"A Fossa das Marianas, no Pacífico ocidental, tem perto de 11 000 m de profundidade.", pista:"Fica no maior oceano."},
      {q:"Qual destes é um microestado europeu?", opts:["Mónaco","Polónia","Ucrânia","Suécia"], correct:0, explain:"O Mónaco é um microestado, com cerca de 2 km². Os outros são países grandes.", irma:{q:"Qual destas é uma península europeia?", opts:["Península Escandinava","Península Arábica","Península da Indochina","Península do Iucatão"], correct:0, explain:"A Península Escandinava (Noruega e Suécia) fica na Europa. A Arábica e a da Indochina são asiáticas; o Iucatão é americano."}},
      {q:"Qual é o maior país do mundo em área?", opts:["Rússia","China","Brasil","Canadá"], correct:0, explain:"A Rússia é o maior país do mundo em área, com território na Europa e na Ásia. O Canadá é o segundo."}
    ],
    compare:{
      left:{title:"🇪🇺 União Europeia", points:["27 países europeus","Livre circulação e, em muitos, o euro","Portugal desde 1986"]},
      right:{title:"🗣️ CPLP", points:["9 países em 4 continentes","Ligados pela língua portuguesa","Cooperação cultural e política"]}
    },
    boss:"Novo Mapa-Mundo 7: «Descobre os extremos da Terra» (p. 24) e o teu Diário de viagem completo"
  },
  {
    id:"o2", num:2, c:"m2", icon:"🏞️",
    title:"Um Mundo de Paisagens",
    subtitle:"Observação e diversidade de paisagens", pages:"Novo Mapa-Mundo 7, tema 1, 1.1 «Um mundo de muitas paisagens» (pp. 28–41)",
    lead:"Uma paisagem é tudo o que se vê de um lugar: montanhas, rios, campos, casas, estradas. Umas quase não foram tocadas pelo ser humano; outras foram muito transformadas. Neste mundo vais observar paisagens com método, identificar os seus elementos e distinguir paisagens naturais de humanizadas.",
    missions:[
      {t:"Da Minha Janela", d:"Observação direta de uma paisagem", f:"Desenha a paisagem que vês da tua janela (ou de um miradouro).\nDivide-a em primeiro plano, segundo plano e último plano.\nLegenda 3 elementos naturais e 3 humanos.", xp:10},
      {t:"Fotografias que Falam", d:"Observação indireta", f:"Escolhe 2 fotografias: uma de uma paisagem natural e outra de uma paisagem humanizada.\nPara cada uma, faz uma lista dos elementos e escreve uma frase que a descreva.", xp:10},
      {t:"Paisagem em Mudança", d:"A ação humana na paisagem", f:"Pede a um familiar mais velho uma fotografia antiga da tua terra, ou procura uma na internet.\nCompara-a com uma atual e indica 3 mudanças.", xp:10}
    ],
    resumo:[
      "A <b>paisagem</b> é a porção do espaço que se observa a partir de um lugar. Tem <b>elementos naturais</b> (relevo, rios, vegetação, mar) e <b>elementos humanos</b> (casas, estradas, campos cultivados, pontes).",
      "A observação pode ser <b>direta</b> (no próprio lugar) ou <b>indireta</b> (por fotografias, vídeos, imagens de satélite, mapas).",
      "Para observar com método, divide-se a paisagem em <b>planos</b>: primeiro plano (o mais próximo), segundo plano e último plano (o mais distante).",
      "Uma <b>paisagem natural</b> tem pouca ou nenhuma intervenção humana (ex.: uma floresta tropical, um deserto, as montanhas geladas). Uma <b>paisagem humanizada</b> foi transformada pelo ser humano, como as paisagens <b>rurais</b> (campos, aldeias) e <b>urbanas</b> (cidades).",
      "Uma <b>unidade de paisagem</b> é uma área com características semelhantes (ex.: uma planície de cultivo, uma serra florestada).",
      "As paisagens estão sempre a mudar, por causas naturais (erosão, cheias) e humanas (construção, agricultura, incêndios)."
    ],
    gloss:[
      ["paisagem","Porção do espaço que se observa a partir de um lugar."],
      ["elemento natural","Parte da paisagem que não foi feita pelo ser humano (relevo, rio, vegetação)."],
      ["elemento humano","Parte da paisagem construída ou transformada pelo ser humano (casas, estradas, campos)."],
      ["observação direta","Observação feita no próprio lugar."],
      ["observação indireta","Observação feita através de imagens, vídeos ou mapas."],
      ["paisagem humanizada","Paisagem transformada pelo ser humano."],
      ["unidade de paisagem","Área com características semelhantes."]
    ],
    quiz:[
      {q:"Qual destes é um elemento humano da paisagem?", opts:["Uma estrada","Um rio","Uma montanha","Uma floresta natural"], correct:0, explain:"A estrada foi construída pelo ser humano. O rio, a montanha e a floresta natural são elementos naturais.", irma:{q:"Qual destes é um elemento natural da paisagem?", opts:["Uma serra","Uma ponte","Um campo de milho","Uma barragem"], correct:0, explain:"A serra é natural. A ponte e a barragem foram construídas; o campo de milho foi cultivado pelo ser humano."}},
      {q:"Observar uma paisagem através de uma imagem de satélite é uma observação…", opts:["indireta","direta","impossível","natural"], correct:0, explain:"Não estás no lugar: observas através de uma imagem. É uma observação indireta.", pista:"Estás ou não estás no próprio lugar?"},
      {q:"Numa fotografia de paisagem, o que fica no primeiro plano?", opts:["O que está mais perto de quem observa","O que está mais longe","O céu","O que está no centro"], correct:0, explain:"O primeiro plano é o mais próximo do observador; o último plano é o mais distante."},
      {q:"Qual destas é uma paisagem humanizada urbana?", opts:["O centro de uma cidade","Uma floresta tropical","Um glaciar","Um deserto de areia"], correct:0, explain:"A cidade é uma paisagem humanizada urbana. A floresta tropical, o glaciar e o deserto são paisagens predominantemente naturais.", irma:{q:"Qual destas é uma paisagem humanizada rural?", opts:["Uma aldeia rodeada de campos cultivados","Uma avenida com prédios","Um aeroporto","Uma montanha gelada"], correct:0, explain:"A aldeia com campos é uma paisagem rural. A avenida e o aeroporto são urbanos; a montanha gelada é natural."}},
      {q:"Porque é que as paisagens mudam ao longo do tempo?", opts:["Por causas naturais e pela ação humana","Só por causa da ação humana","Só por causas naturais","As paisagens nunca mudam"], correct:0, explain:"As paisagens mudam com a erosão, as cheias ou os sismos, e também com a construção, a agricultura ou os incêndios."}
    ],
    compare:{
      left:{title:"🌲 Paisagem natural", points:["Pouca ou nenhuma intervenção humana","Ex.: floresta tropical, deserto","Domina o relevo, a água e a vegetação"]},
      right:{title:"🏘️ Paisagem humanizada", points:["Transformada pelo ser humano","Rural (campos, aldeias) ou urbana (cidades)","Domina o que foi construído ou cultivado"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (p. 38) e «Avalia o que aprendeste» (p. 41)"
  },
  {
    id:"o3", num:3, c:"m3", icon:"🗺️",
    title:"Mapas e Escalas",
    subtitle:"Representações da Terra", pages:"Novo Mapa-Mundo 7, tema 1, 1.2 «Representações da Terra» (pp. 42–63)",
    lead:"Representar a Terra, que é quase uma esfera, numa folha plana obriga a escolhas: o que mostrar, quanto reduzir e o que deformar. Neste mundo vais conhecer o globo, os mapas e as projeções, os elementos de um mapa, a cartografia digital e as escalas, e calcular distâncias reais.",
    missions:[
      {t:"Laranja Achatada", d:"Projeções cartográficas", f:"Desenha os continentes numa laranja (ou numa bola) e tenta espalmar a casca numa mesa.\nExplica porque é que todos os mapas têm deformações.", xp:10},
      {t:"Um Mapa Completo", d:"Os elementos de um mapa", f:"Desenha o mapa do caminho de casa até à escola com título, legenda, escala, orientação (norte) e fonte.\nVerifica: falta algum dos 5 elementos?", xp:10},
      {t:"Quanto Mede de Verdade?", d:"Calcular distâncias reais", f:"Num mapa de Portugal com escala, mede em linha reta a distância entre 3 pares de cidades.\nCalcula as distâncias reais em quilómetros e compara-as com as de um mapa digital.", xp:10},
      {t:"Do Satélite ao Ecrã", d:"Cartografia digital", f:"Num mapa digital, procura a tua escola em vista de mapa e em vista de satélite.\nFaz zoom e explica o que acontece à escala e ao pormenor.", xp:10}
    ],
    resumo:[
      "O <b>globo</b> é a representação mais fiel da Terra (forma, áreas e distâncias), mas é pouco prático e mostra pouco pormenor. O <b>mapa</b> é uma representação plana, reduzida e simplificada da superfície terrestre, ou de parte dela.",
      "Passar a superfície curva da Terra para um plano obriga a usar uma <b>projeção cartográfica</b>, e todas as projeções têm <b>deformações</b>. Na projeção de <b>Mercator</b> (cilíndrica), as áreas perto dos polos aparecem muito aumentadas: a Gronelândia parece quase do tamanho de África, quando é cerca de 14 vezes mais pequena.",
      "Há projeções <b>cilíndricas</b>, <b>cónicas</b> e <b>azimutais</b> (planas), conforme a superfície em que se imagina projetar a Terra.",
      "Um mapa deve ter: <b>título</b>, <b>legenda</b>, <b>escala</b>, <b>orientação</b> (indicação do norte) e <b>fonte</b>.",
      "A <b>escala</b> indica quantas vezes a realidade foi reduzida. Na escala numérica <b>1:100 000</b>, 1 cm no mapa corresponde a 100 000 cm (1 km) na realidade. A escala gráfica é uma barra graduada.",
      "<b>Distância real</b> = distância no mapa × denominador da escala. Ex.: 4 cm num mapa 1:50 000 → 4 × 50 000 = 200 000 cm = 2 km.",
      "Mapas de <b>grande escala</b> (denominador pequeno, ex.: 1:5000) mostram áreas pequenas com muito pormenor; mapas de <b>pequena escala</b> (denominador grande, ex.: 1:10 000 000) mostram áreas grandes com pouco pormenor.",
      "<b>Cartografia digital</b>: mapas em computador, imagens de satélite, GPS e Sistemas de Informação Geográfica (SIG), que juntam várias camadas de informação."
    ],
    gloss:[
      ["globo","Representação esférica da Terra, a mais fiel."],
      ["mapa","Representação plana, reduzida e simplificada da superfície terrestre."],
      ["projeção cartográfica","Método para representar a superfície curva da Terra num plano."],
      ["legenda","Explicação dos símbolos e cores usados num mapa."],
      ["escala","Relação entre as medidas no mapa e as medidas reais."],
      ["escala numérica","Escala escrita como fração ou razão (ex.: 1:50 000)."],
      ["escala gráfica","Barra graduada que mostra a que distância real corresponde cada segmento."],
      ["SIG","Sistema de Informação Geográfica: programa que junta e analisa mapas e dados."]
    ],
    quiz:[
      {q:"Num mapa à escala 1:100 000, quanto vale 1 cm na realidade?", opts:["1 km","100 m","10 km","100 km"], correct:0, explain:"1 cm × 100 000 = 100 000 cm = 1000 m = 1 km.", pista:"Converte: 100 cm = 1 m; 1000 m = 1 km.", irma:{q:"Num mapa à escala 1:25 000, quanto valem 4 cm na realidade?", opts:["1 km","100 m","25 km","4 km"], correct:0, explain:"4 × 25 000 = 100 000 cm = 1 km."}},
      {q:"Num mapa à escala 1:50 000, duas aldeias estão a 6 cm. Qual é a distância real?", opts:["3 km","300 m","30 km","6 km"], correct:0, explain:"6 × 50 000 = 300 000 cm = 3000 m = 3 km.", pista:"Distância real = distância no mapa × denominador."},
      {q:"Qual destes mapas tem maior escala (mais pormenor)?", opts:["1:5000","1:50 000","1:1 000 000","1:10 000 000"], correct:0, explain:"Quanto menor o denominador, maior a escala e mais pormenor: 1:5000 é o de maior escala. Serve, por exemplo, para a planta de um bairro.", irma:{q:"Que escala usarias para um mapa-mundo?", opts:["Pequena escala (ex.: 1:100 000 000)","Grande escala (ex.: 1:5000)","Escala 1:1","Não precisa de escala"], correct:0, explain:"Para mostrar o mundo inteiro numa folha, é preciso reduzir muito: pequena escala, com denominador muito grande."}},
      {q:"Porque é que na projeção de Mercator a Gronelândia parece enorme?", opts:["Porque essa projeção aumenta as áreas perto dos polos","Porque a Gronelândia é maior do que África","Porque o mapa está errado","Porque foi desenhada à mão"], correct:0, explain:"A projeção de Mercator conserva os ângulos, mas aumenta muito as áreas nas latitudes altas. A Gronelândia é cerca de 14 vezes mais pequena do que África."},
      {q:"Qual destes NÃO é um elemento obrigatório de um mapa?", opts:["Um desenho decorativo","A legenda","A escala","A orientação"], correct:0, explain:"Um mapa deve ter título, legenda, escala, orientação e fonte. Desenhos decorativos são opcionais."},
      {q:"Qual é a representação mais fiel da forma da Terra?", opts:["O globo","O mapa-mundo","Uma planta","Uma fotografia de uma rua"], correct:0, explain:"O globo mantém a forma, as áreas e as distâncias. Os mapas, por serem planos, têm sempre deformações."}
    ],
    compare:{
      left:{title:"🔍 Grande escala", points:["Denominador pequeno (ex.: 1:5000)","Área pequena","Muito pormenor (ruas, casas)"]},
      right:{title:"🌐 Pequena escala", points:["Denominador grande (ex.: 1:10 000 000)","Área grande","Pouco pormenor (países, continentes)"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (pp. 54 e 59) e «Avalia o que aprendeste» (p. 62)"
  },
  {
    id:"o4", num:4, c:"m4", icon:"🧭",
    title:"Onde Fica?",
    subtitle:"Orientação, rosa dos ventos e coordenadas geográficas", pages:"Novo Mapa-Mundo 7, tema 1, 1.3 «Localização de espaços e lugares» (pp. 64–85)",
    lead:"Para encontrar um lugar no mundo é preciso saber orientar-se e ter um «endereço» exato. Neste mundo vais orientar-te pelo Sol, pelas estrelas e pela bússola, usar a rosa dos ventos e localizar qualquer lugar da Terra com a latitude e a longitude.",
    missions:[
      {t:"Onde Nasce o Sol?", d:"Orientação pelo Sol", f:"De manhã, vê de onde nasce o Sol a partir da tua casa e marca esse lado como «nascente» (aproximadamente este).\nDescobre onde ficam o norte, o sul e o oeste.\nDesenha a tua rosa dos ventos.", xp:10},
      {t:"Rosa dos Ventos", d:"Pontos cardeais e colaterais", f:"Desenha uma rosa dos ventos com os pontos cardeais e colaterais.\nNum mapa de Portugal, escreve 5 frases de localização relativa: «Braga fica a norte do Porto.»", xp:10},
      {t:"O Endereço do Mundo", d:"Latitude e longitude", f:"Num atlas ou num mapa digital, encontra as coordenadas de Lisboa, do Rio de Janeiro e de Tóquio.\nPara cada uma, diz em que hemisférios fica.", xp:10},
      {t:"Caça ao Tesouro Mundial", d:"Localização absoluta", f:"Escolhe 4 lugares famosos e dá a um colega só as coordenadas (ex.: 48° N, 2° E).\nO colega tem de descobrir que lugares são.", xp:10}
    ],
    resumo:[
      "Podemos orientar-nos pelo <b>Sol</b> (nasce aproximadamente a este, ou nascente, e põe-se aproximadamente a oeste, ou poente), pela <b>estrela Polar</b> (que indica o norte, no hemisfério norte) e pela <b>bússola</b> (a agulha aponta para o norte magnético).",
      "A <b>rosa dos ventos</b> tem os <b>pontos cardeais</b> (Norte, Sul, Este, Oeste), os <b>colaterais</b> (Nordeste, Sudeste, Sudoeste, Noroeste) e os subcolaterais (ex.: Nor-nordeste).",
      "A <b>localização relativa</b> indica a posição de um lugar em relação a outros («Coimbra fica a sul do Porto»). A <b>localização absoluta</b> usa as coordenadas geográficas e é única.",
      "Elementos geométricos da Terra: o <b>eixo</b> e os <b>polos</b>; o <b>Equador</b> (paralelo 0°), que divide a Terra nos hemisférios norte e sul; os <b>paralelos</b>; os <b>meridianos</b>, e o <b>meridiano de Greenwich</b> (0°), que divide os hemisférios este e oeste.",
      "Paralelos importantes: os <b>trópicos</b> de Câncer e de Capricórnio (cerca de 23° 26′ N e S) e os <b>círculos polares</b> Ártico e Antártico (cerca de 66° 34′ N e S).",
      "A <b>latitude</b> é a distância angular de um lugar ao Equador: de 0° a 90°, Norte ou Sul.",
      "A <b>longitude</b> é a distância angular de um lugar ao meridiano de Greenwich: de 0° a 180°, Este ou Oeste.",
      "Exemplo: Lisboa fica a cerca de 38° 43′ N e 9° 08′ O: no hemisfério norte e no hemisfério oeste."
    ],
    gloss:[
      ["pontos cardeais","Norte, Sul, Este e Oeste."],
      ["pontos colaterais","Nordeste, Sudeste, Sudoeste e Noroeste."],
      ["Equador","Paralelo de 0°, que divide a Terra nos hemisférios norte e sul."],
      ["meridiano de Greenwich","Meridiano de 0°, a partir do qual se mede a longitude."],
      ["paralelo","Círculo imaginário paralelo ao Equador."],
      ["meridiano","Semicírculo imaginário que une os dois polos."],
      ["latitude","Distância angular de um lugar ao Equador (0° a 90°, N ou S)."],
      ["longitude","Distância angular de um lugar ao meridiano de Greenwich (0° a 180°, E ou O)."]
    ],
    quiz:[
      {q:"Qual é a latitude de um lugar situado sobre o Equador?", opts:["0°","90°","180°","23° 26′"], correct:0, explain:"O Equador é o paralelo de referência, com latitude 0°. Os polos têm 90°.", pista:"A latitude mede-se a partir do Equador."},
      {q:"Um lugar a 40° N e 8° O fica em que hemisférios?", opts:["Norte e oeste","Sul e este","Norte e este","Sul e oeste"], correct:0, explain:"N indica o hemisfério norte e O indica o hemisfério oeste. É o caso de Portugal.", irma:{q:"Um lugar a 33° S e 151° E fica em que hemisférios?", opts:["Sul e este","Norte e oeste","Sul e oeste","Norte e este"], correct:0, explain:"S → hemisfério sul; E → hemisfério este. São, aproximadamente, as coordenadas de Sydney, na Austrália."}},
      {q:"Qual é o ponto colateral entre o Norte e o Este?", opts:["Nordeste","Noroeste","Sudeste","Nor-nordeste"], correct:0, explain:"Entre o Norte e o Este fica o Nordeste (NE). O Noroeste fica entre o Norte e o Oeste.", pista:"Junta os nomes dos dois pontos cardeais."},
      {q:"A partir de que meridiano se mede a longitude?", opts:["O meridiano de Greenwich","O Equador","O Trópico de Câncer","O meridiano de Lisboa"], correct:0, explain:"A longitude mede-se a partir do meridiano de Greenwich (0°), que passa perto de Londres. O Equador é a referência da latitude."},
      {q:"«Faro fica a sul de Lisboa.» Que tipo de localização é esta?", opts:["Localização relativa","Localização absoluta","Coordenadas geográficas","Latitude"], correct:0, explain:"Indica a posição de Faro em relação a outro lugar: é localização relativa. A absoluta usaria a latitude e a longitude.", irma:{q:"«38° 43′ N, 9° 08′ O.» Que tipo de localização é esta?", opts:["Localização absoluta","Localização relativa","Orientação pelo Sol","Escala"], correct:0, explain:"São coordenadas geográficas: localização absoluta, única para cada lugar (neste caso, Lisboa)."}},
      {q:"Qual é a longitude máxima que um lugar pode ter?", opts:["180°","90°","360°","66° 34′"], correct:0, explain:"A longitude vai de 0° a 180° para este ou para oeste. A latitude é que vai só até 90°."}
    ],
    compare:{
      left:{title:"↕️ Latitude", points:["Distância ao Equador","0° a 90°, Norte ou Sul","Lê-se nos paralelos"]},
      right:{title:"↔️ Longitude", points:["Distância ao meridiano de Greenwich","0° a 180°, Este ou Oeste","Lê-se nos meridianos"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (pp. 72, 77, 79 e 81) e «Avalia o que aprendeste» (p. 84)"
  },
  {
    id:"o5", num:5, c:"m5", icon:"⛅",
    title:"Tempo, Clima e Biomas",
    subtitle:"Estado do tempo, zonas climáticas e biomas", pages:"Novo Mapa-Mundo 7, tema 2, 2.1 «Zonas climáticas e seus biomas» (pp. 92–133)",
    lead:"Hoje está sol ou chuva? Isso é o estado do tempo. Como é, em média, o tempo de um lugar ao longo dos anos? Isso é o clima. Neste mundo vais medir os elementos do tempo, ler gráficos termopluviométricos, conhecer as zonas climáticas da Terra e os biomas que nelas se formam.",
    missions:[
      {t:"Estação Meteorológica Caseira", d:"Elementos do estado do tempo", f:"Durante 7 dias, regista à mesma hora a temperatura, o estado do céu e o vento (de um termómetro ou de uma aplicação).\nCalcula a temperatura média e a amplitude térmica da semana.", xp:10},
      {t:"Gráfico Termopluviométrico", d:"Ler o clima de um lugar", f:"Procura os dados de temperatura e de precipitação de Lisboa para cada mês.\nFaz o gráfico (barras para a precipitação, linha para a temperatura) e descreve o verão e o inverno.", xp:10},
      {t:"Mapa das Zonas Climáticas", d:"Zona quente, zonas temperadas, zonas frias", f:"Num mapa-mundo, pinta a zona quente, as zonas temperadas e as zonas frias, usando os trópicos e os círculos polares.\nIndica em que zona fica Portugal.", xp:10},
      {t:"Fichas de Biomas", d:"Os biomas do mundo", f:"Faz 6 fichas de biomas (floresta equatorial, savana, deserto quente, floresta mediterrânea, taiga, tundra).\nEm cada uma: clima, vegetação, um animal e onde existe.", xp:10}
    ],
    resumo:[
      "O <b>estado do tempo</b> são as condições da atmosfera num lugar e num momento. O <b>clima</b> é a sucessão habitual dos estados do tempo num lugar, calculada com médias de cerca de 30 anos.",
      "Elementos do clima e instrumentos: <b>temperatura</b> (termómetro, °C); <b>precipitação</b> (udómetro, mm); <b>pressão atmosférica</b> (barómetro, hPa); <b>vento</b> (anemómetro para a velocidade, cata-vento para a direção); <b>humidade</b> (higrómetro).",
      "<b>Amplitude térmica</b> = temperatura máxima − temperatura mínima. O <b>gráfico termopluviométrico</b> mostra a temperatura média (linha) e a precipitação (barras) de cada mês.",
      "Pela latitude, a Terra divide-se em <b>zona quente</b> (intertropical, entre os trópicos), <b>zonas temperadas</b> (entre os trópicos e os círculos polares) e <b>zonas frias</b> (para lá dos círculos polares).",
      "Outros fatores do clima: a <b>altitude</b> (a temperatura desce cerca de 0,6 °C por cada 100 m), a proximidade do mar (suaviza as temperaturas), o relevo e as correntes marítimas.",
      "Um <b>bioma</b> é um grande conjunto de seres vivos adaptados a um clima. Zona quente: <b>floresta equatorial</b>, <b>savana</b>, <b>deserto quente</b>. Zonas temperadas: <b>floresta mediterrânea</b>, floresta caducifólia, estepe e pradaria. Zonas frias: <b>taiga</b> (coníferas), <b>tundra</b> (musgos e líquenes) e gelos.",
      "Portugal tem um clima <b>temperado mediterrâneo</b> (verões quentes e secos, invernos amenos e chuvosos), com mais chuva no norte e no litoral, por influência do Atlântico. A vegetação natural inclui o sobreiro, a azinheira e o pinheiro."
    ],
    gloss:[
      ["estado do tempo","Condições da atmosfera num lugar e num momento."],
      ["clima","Sucessão habitual dos estados do tempo num lugar, ao longo de muitos anos."],
      ["amplitude térmica","Diferença entre a temperatura máxima e a mínima."],
      ["precipitação","Água que cai da atmosfera (chuva, neve, granizo), medida em mm."],
      ["udómetro","Instrumento que mede a precipitação."],
      ["zona intertropical","Zona quente, entre os trópicos de Câncer e de Capricórnio."],
      ["bioma","Grande conjunto de seres vivos adaptados a um tipo de clima."],
      ["taiga","Floresta de coníferas das regiões frias do hemisfério norte."]
    ],
    quiz:[
      {q:"«Hoje em Lisboa estão 18 °C e chove.» Isto é…", opts:["o estado do tempo","o clima","um bioma","a amplitude térmica"], correct:0, explain:"Descreve um lugar num momento: é o estado do tempo. O clima resulta de médias de muitos anos.", pista:"É sobre hoje ou sobre muitos anos?", irma:{q:"«Lisboa tem verões quentes e secos e invernos amenos e chuvosos.» Isto descreve…", opts:["o clima","o estado do tempo","um instrumento","uma escala"], correct:0, explain:"Descreve o que é habitual ao longo de muitos anos: é o clima."}},
      {q:"A temperatura máxima foi 24 °C e a mínima 9 °C. Qual foi a amplitude térmica?", opts:["15 °C","33 °C","16,5 °C","9 °C"], correct:0, explain:"Amplitude = máxima − mínima = 24 − 9 = 15 °C. O 16,5 °C é a média das duas.", pista:"Amplitude = máxima − mínima."},
      {q:"Que instrumento mede a precipitação?", opts:["Udómetro","Termómetro","Barómetro","Anemómetro"], correct:0, explain:"O udómetro (ou pluviómetro) mede a precipitação em milímetros. O termómetro mede a temperatura, o barómetro a pressão e o anemómetro a velocidade do vento."},
      {q:"Em que zona climática fica a floresta equatorial?", opts:["Zona quente (intertropical)","Zona temperada","Zona fria","Em todas"], correct:0, explain:"A floresta equatorial, densa e sempre verde, fica perto do Equador, na zona quente, com calor e chuva todo o ano.", irma:{q:"Em que zona climática fica a tundra?", opts:["Zona fria","Zona quente","Zona temperada","Junto ao Equador"], correct:0, explain:"A tundra fica nas zonas frias, para lá dos círculos polares, com musgos, líquenes e solo gelado em profundidade."}},
      {q:"Porque é que no cimo da serra da Estrela está mais frio do que em Coimbra?", opts:["A temperatura desce com a altitude","Porque fica mais perto do mar","Porque fica no hemisfério sul","Porque tem menos vento"], correct:0, explain:"A temperatura desce cerca de 0,6 °C por cada 100 m de altitude. A Torre, na serra da Estrela, tem cerca de 2000 m."},
      {q:"Que tipo de clima tem a maior parte de Portugal?", opts:["Temperado mediterrâneo","Equatorial","Polar","Desértico"], correct:0, explain:"Portugal tem clima temperado mediterrâneo: verões quentes e secos e invernos amenos e chuvosos, com mais chuva no norte e no litoral."}
    ],
    compare:{
      left:{title:"🌦️ Estado do tempo", points:["Um lugar, um momento","Muda de hora para hora","«Hoje está a chover»"]},
      right:{title:"📊 Clima", points:["Médias de cerca de 30 anos","Muda muito lentamente","«Os verões são quentes e secos»"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (pp. 99, 109 e 126) e «Avalia o que aprendeste» (p. 132)"
  },
  {
    id:"o6", num:6, c:"m6", icon:"⛰️",
    title:"Relevo e Rios",
    subtitle:"O relevo da Terra e as bacias hidrográficas", pages:"Novo Mapa-Mundo 7, tema 2, 2.2 «Relevo da Terra» e «As bacias hidrográficas» (pp. 134–165)",
    lead:"A superfície da Terra tem montanhas, planaltos e planícies, e os rios vão desgastando e transportando materiais desde a nascente até ao mar. Neste mundo vais conhecer as formas de relevo e a sua representação, os grandes relevos do mundo e de Portugal, as bacias hidrográficas e a partilha da água.",
    missions:[
      {t:"Montanha de Plasticina", d:"Curvas de nível", f:"Faz uma pequena montanha de plasticina e corta-a em fatias horizontais com a mesma espessura.\nContorna cada fatia numa folha: tens as curvas de nível.\nOnde as linhas ficam mais juntas, o declive é maior?", xp:10},
      {t:"Grandes Relevos do Mundo", d:"Cordilheiras, planaltos e planícies", f:"Num mapa-mundo, localiza os Himalaias, os Andes, as Montanhas Rochosas, os Alpes, o planalto do Tibete e a planície amazónica.\nIndica o continente de cada um.", xp:10},
      {t:"A Viagem de um Rio", d:"As partes de um rio", f:"Escolhe um rio português (Douro, Tejo, Mondego…).\nDesenha-o da nascente à foz, com 2 afluentes e as margens direita e esquerda.\nIndica se a foz é um estuário.", xp:10},
      {t:"Rios Partilhados", d:"A gestão das bacias hidrográficas", f:"Indica os rios que Portugal partilha com Espanha.\nExplica porque é preciso um acordo sobre a água (a Convenção de Albufeira, de 1998).", xp:10}
    ],
    resumo:[
      "Formas de relevo: <b>montanha</b> (elevação grande, com declives acentuados), <b>cordilheira</b> (conjunto de montanhas), <b>planalto</b> (superfície elevada e relativamente plana), <b>planície</b> (superfície plana e baixa) e <b>vale</b> (depressão por onde costuma correr um rio).",
      "A <b>altitude</b> é a distância vertical de um ponto ao nível médio das águas do mar. O relevo representa-se com <b>curvas de nível</b> (linhas que unem pontos com a mesma altitude; quanto mais juntas, maior o declive), cores hipsométricas e perfis topográficos.",
      "Grandes relevos do mundo: as cordilheiras dos <b>Himalaias</b> (com o Evereste), dos <b>Andes</b>, das <b>Rochosas</b> e dos <b>Alpes</b>; o planalto do <b>Tibete</b>; as planícies da Amazónia e da Grande Planície Europeia.",
      "Em Portugal, o ponto mais alto é a montanha do <b>Pico</b>, nos Açores (2351 m). No continente é a <b>Torre</b>, na serra da Estrela (1993 m).",
      "Um rio nasce na <b>nascente</b> e termina na <b>foz</b>, que pode ser um <b>estuário</b> (a água do mar entra pelo rio, como no Tejo) ou um <b>delta</b> (os sedimentos formam ilhas, como no Nilo). As <b>margens</b> direita e esquerda veem-se no sentido da corrente. Os <b>afluentes</b> desaguam noutro rio.",
      "A <b>bacia hidrográfica</b> é a área drenada por um rio e pelos seus afluentes, separada das outras pelas <b>linhas de cumeada</b> (ou de festo). A bacia do <b>Amazonas</b> é a maior do mundo.",
      "A <b>ação erosiva</b> dos rios: erosão (desgaste, sobretudo no curso superior), transporte e acumulação (sedimentação, sobretudo no curso inferior).",
      "Portugal partilha com Espanha as bacias do Minho, Lima, Douro, Tejo e Guadiana. O <b>Tejo</b> é o rio mais longo da Península Ibérica; o <b>Mondego</b> é o maior rio que nasce e desagua em Portugal. A <b>Convenção de Albufeira</b> (1998) regula a partilha da água entre os dois países."
    ],
    gloss:[
      ["planalto","Superfície elevada e relativamente plana."],
      ["planície","Superfície plana e de baixa altitude."],
      ["altitude","Distância vertical de um ponto ao nível médio das águas do mar."],
      ["curva de nível","Linha que une pontos com a mesma altitude."],
      ["nascente","Lugar onde um rio começa."],
      ["foz","Lugar onde um rio termina (no mar, num lago ou noutro rio)."],
      ["estuário","Foz larga, onde a água do mar entra pelo rio."],
      ["afluente","Rio que desagua noutro rio."],
      ["bacia hidrográfica","Área drenada por um rio e pelos seus afluentes."]
    ],
    quiz:[
      {q:"Num mapa com curvas de nível, onde o declive é maior?", opts:["Onde as curvas estão mais juntas","Onde as curvas estão mais afastadas","Onde não há curvas","No centro do mapa"], correct:0, explain:"Curvas muito juntas indicam que a altitude muda muito numa distância curta: o declive é acentuado.", pista:"Pensa na montanha de plasticina: onde a encosta é mais inclinada?"},
      {q:"Qual é o ponto mais alto de Portugal?", opts:["A montanha do Pico, nos Açores","A Torre, na serra da Estrela","O pico Ruivo, na Madeira","A serra do Gerês"], correct:0, explain:"A montanha do Pico, nos Açores, tem 2351 m. A Torre (1993 m) é o ponto mais alto de Portugal continental.", irma:{q:"Qual é o ponto mais alto de Portugal continental?", opts:["A Torre, na serra da Estrela","A montanha do Pico","A serra de Monchique","A serra de Sintra"], correct:0, explain:"A Torre, na serra da Estrela, com 1993 m, é o ponto mais alto do continente."}},
      {q:"O que é uma bacia hidrográfica?", opts:["A área drenada por um rio e pelos seus afluentes","O lugar onde o rio nasce","Um lago artificial","A parte do rio junto ao mar"], correct:0, explain:"A bacia hidrográfica é toda a área cujas águas correm para um rio e para os seus afluentes. É separada das bacias vizinhas pelas linhas de cumeada."},
      {q:"O que é um afluente?", opts:["Um rio que desagua noutro rio","O lugar onde o rio começa","A foz de um rio no mar","Uma margem do rio"], correct:0, explain:"Um afluente é um rio que desagua noutro rio maior. O lugar onde o rio começa é a nascente.", irma:{q:"Como se identificam a margem direita e a margem esquerda de um rio?", opts:["Olhando no sentido da corrente, da nascente para a foz","Olhando da foz para a nascente","Pelos pontos cardeais","Pelo tamanho de cada margem"], correct:0, explain:"As margens definem-se no sentido da corrente: de costas para a nascente, a margem direita fica à tua direita."}},
      {q:"Que acordo regula a partilha da água dos rios entre Portugal e Espanha?", opts:["A Convenção de Albufeira (1998)","O Tratado de Alcanices (1297)","O Tratado de Roma (1957)","O Tratado de Windsor (1386)"], correct:0, explain:"A Convenção de Albufeira, de 1998, regula a gestão das bacias que Portugal e Espanha partilham. Os outros tratados são de outros assuntos."},
      {q:"Qual é a maior bacia hidrográfica do mundo?", opts:["A do Amazonas","A do Tejo","A do Danúbio","A do Nilo"], correct:0, explain:"A bacia do Amazonas, na América do Sul, é a maior do mundo, com cerca de 7 milhões de km²."}
    ],
    compare:{
      left:{title:"🌊 Estuário", points:["Foz larga e aberta","A água do mar entra pelo rio","Ex.: Tejo, Sado"]},
      right:{title:"🔺 Delta", points:["Foz com vários braços","Os sedimentos formam ilhas","Ex.: Nilo, Ebro"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (pp. 146, 154 e 164) e «Trabalho de campo» (p. 166)"
  },
  {
    id:"o7", num:7, c:"m7", icon:"🏖️",
    title:"Onde a Terra Encontra o Mar",
    subtitle:"As formas do litoral e a ação humana", pages:"Novo Mapa-Mundo 7, tema 2, «Formas do litoral» (pp. 168–179)",
    lead:"O litoral é a faixa onde a terra encontra o mar. As ondas, as marés e as correntes desgastam umas partes e acumulam areia noutras, e o ser humano também o transforma. Neste mundo vais conhecer as formas do litoral, a erosão marinha e a ação humana na costa portuguesa.",
    missions:[
      {t:"Atlas da Costa", d:"As formas do litoral", f:"Num mapa de Portugal, localiza: uma arriba (ex.: cabo de São Vicente), uma praia, um cabo, uma baía, um estuário e a Ria Formosa.\nFaz um pequeno desenho de cada forma.", xp:10},
      {t:"O Mar que Desgasta", d:"A erosão marinha", f:"Pesquisa uma notícia sobre erosão costeira em Portugal.\nExplica o que aconteceu, quais são as causas naturais e quais são as humanas.", xp:10},
      {t:"Defender a Costa", d:"A ação humana no litoral", f:"Faz uma tabela com 3 obras de defesa costeira (esporões, paredões, alimentação artificial de praias) e com as vantagens e desvantagens de cada uma.", xp:10}
    ],
    resumo:[
      "O <b>litoral</b> é a faixa de contacto entre a terra e o mar. A <b>linha de costa</b> é o limite entre os dois e está sempre a mudar.",
      "<b>Costa alta</b> ou de arriba: com <b>arribas</b> (falésias), escarpas viradas para o mar, como na Costa Vicentina. <b>Costa baixa</b>: com <b>praias</b> e dunas.",
      "Outras formas: <b>cabo</b> (saliência da costa que entra no mar), <b>baía</b> e golfo (reentrâncias), <b>península</b>, <b>ilha</b>, <b>tômbolo</b> (faixa de areia que liga uma ilha à costa: Peniche já foi uma ilha e hoje está ligada a terra por um tômbolo), <b>restinga</b> ou cordão litoral, <b>laguna</b> (água salgada separada do mar por um cordão de areia, como a Ria de Aveiro e a Ria Formosa), <b>estuário</b> e <b>delta</b>.",
      "A <b>ação do mar</b>: as ondas, as marés e as correntes desgastam as rochas (<b>erosão</b>), transportam materiais e depositam-nos (<b>acumulação</b>), formando praias e cordões de areia. As arribas recuam com o tempo.",
      "A <b>ação humana</b>: construção junto ao mar, destruição de dunas, extração de areias e barragens nos rios (que retêm areia que chegaria ao litoral) aumentam a erosão costeira.",
      "Para proteger a costa constroem-se <b>esporões</b> e <b>paredões</b>, faz-se a alimentação artificial de praias e protegem-se as dunas. As obras pesadas protegem um lugar, mas podem aumentar a erosão mais à frente."
    ],
    gloss:[
      ["litoral","Faixa de contacto entre a terra e o mar."],
      ["arriba","Escarpa rochosa virada para o mar (falésia)."],
      ["cabo","Porção de terra que avança para o mar."],
      ["baía","Reentrância da costa onde o mar entra na terra."],
      ["laguna","Massa de água salgada separada do mar por um cordão de areia."],
      ["tômbolo","Faixa de areia que liga uma ilha à costa."],
      ["esporão","Muro construído perpendicular à costa para reter areia."],
      ["erosão costeira","Desgaste e recuo da linha de costa."]
    ],
    quiz:[
      {q:"O que é uma arriba?", opts:["Uma escarpa rochosa virada para o mar","Uma praia de areia fina","A foz de um rio","Uma ilha pequena"], correct:0, explain:"A arriba (ou falésia) é uma escarpa rochosa, típica da costa alta, como no cabo de São Vicente.", irma:{q:"O que é um cabo?", opts:["Uma porção de terra que avança para o mar","Uma reentrância da costa","Um cordão de areia","Um lago de água doce"], correct:0, explain:"O cabo é uma saliência da costa que entra pelo mar, como o cabo da Roca, o ponto mais ocidental da Europa continental."}},
      {q:"A Ria Formosa, no Algarve, é um exemplo de…", opts:["um sistema lagunar, separado do mar por ilhas-barreira de areia","uma arriba","um delta","um planalto"], correct:0, explain:"A Ria Formosa é uma laguna protegida do mar por ilhas-barreira e penínsulas de areia.", pista:"Tem água salgada separada do mar por areia."},
      {q:"Porque é que as barragens nos rios podem aumentar a erosão do litoral?", opts:["Porque retêm a areia que os rios levariam até às praias","Porque aumentam as ondas","Porque fazem subir o nível do mar","Porque destroem as arribas"], correct:0, explain:"Os rios levam areia até ao mar, que alimenta as praias. As barragens retêm esses sedimentos, e as praias recebem menos areia."},
      {q:"Para que serve um esporão?", opts:["Para reter areia e proteger um troço da praia","Para aumentar as ondas","Para construir um porto de pesca","Para ligar uma ilha à costa"], correct:0, explain:"O esporão, perpendicular à costa, retém a areia de um dos lados. Pode, no entanto, aumentar a erosão do lado seguinte."},
      {q:"Como se chama uma faixa de areia que liga uma ilha à costa?", opts:["Tômbolo","Estuário","Arriba","Baía"], correct:0, explain:"O tômbolo é uma faixa de areia que une uma ilha à costa. Peniche, por exemplo, já foi uma ilha.", pista:"Começa por «tô»."}
    ],
    compare:{
      left:{title:"🪨 Costa alta", points:["Arribas e escarpas","Domina a erosão","Ex.: Costa Vicentina"]},
      right:{title:"🏖️ Costa baixa", points:["Praias e dunas","Domina a acumulação de areia","Ex.: Costa da Caparica"]}
    },
    boss:"Novo Mapa-Mundo 7: «Aplica o que aprendeste» (p. 174), «Organiza as ideias» (p. 176) e «Avalia o que aprendeste» (p. 178)"
  }
];
