/* Ciências Naturais — 7.º ano: «A Terra em transformação» (Aprendizagens Essenciais, DGE).
   Mundos g1–g8. Páginas do caderno «100% CN» (Porto Editora), segundo o índice recebido em 2026-10-25; as do manual estão por confirmar. Os factos foram verificados em fontes de referência
   (LNEG, IPMA, Proteção Civil, USGS, Smithsonian, Encyclopaedia Britannica). */
  const CN7_WORLDS = [
  {
    id:"g1", num:1, c:"m1", icon:"💎",
    title:"Detetives da Paisagem: Minerais e Rochas",
    subtitle:"Paisagens geológicas, minerais e as suas propriedades", pages:"caderno «100% CN», tema 1 «Paisagens, rochas e minerais» (pp. 3–10)",
    lead:"Em Minecraft partes blocos de pedra, minério e cristais. Na Terra real, cada paisagem conta uma história — e essa história começa nos minerais, os «blocos» de que as rochas são feitas.",
    missions:[
      {t:"Paisagem à Porta da Escola", d:"Paisagens geológicas", f:"Fotografar a paisagem perto da escola e descobrir que rochas e que relevo dominam", xp:10},
      {t:"Caça aos Minerais", d:"Minerais do granito", f:"Observar um pedaço de granito à lupa e encontrar o quartzo, o feldspato e a mica", xp:15},
      {t:"Teste de Dureza", d:"Escala de Mohs", f:"Com um adulto, ver se a unha, uma moeda e um prego riscam diferentes materiais, e ordená-los", xp:10},
      {t:"As Rochas da Minha Região", d:"Paisagens de Portugal", f:"Descobrir que rocha domina na tua região: granito, calcário, xisto, basalto…", xp:10}
    ],
    resumo:[
      "Uma <b>paisagem geológica</b> depende das rochas que a formam: há paisagens graníticas, calcárias, xistosas, basálticas…",
      "As <b>rochas</b> são feitas de <b>minerais</b>. Um <b>mineral</b> é uma substância natural, sólida e inorgânica, com uma composição química definida e, em geral, com os átomos arrumados de forma organizada (estrutura <b>cristalina</b>).",
      "Os minerais identificam-se pelas suas propriedades: <b>cor</b>, <b>brilho</b> (metálico ou não metálico), <b>risca</b> (a cor do pó), <b>dureza</b> e <b>clivagem</b> (a forma como se partem).",
      "A <b>dureza</b> é a resistência a ser riscado. Compara-se com a <b>escala de Mohs</b>, de 1 (talco) a 10 (diamante): um mineral risca os que são mais macios do que ele.",
      "Minerais comuns: <b>quartzo</b> (duro e vítreo), <b>feldspato</b>, as <b>micas</b> — biotite (escura) e moscovite (clara), que se separam em folhas finas —, a <b>calcite</b> (faz efervescência com ácido diluído) e a <b>olivina</b> (verde).",
      "O <b>granito</b>, muito comum no norte e no centro de Portugal, é formado sobretudo por quartzo, feldspato e mica."
    ],
    gloss:[
      ["paisagem geológica","O aspeto de uma região, que depende das rochas que a formam e dos agentes que as modelam."],
      ["mineral","Substância natural, sólida e inorgânica, com composição química definida e, em geral, estrutura cristalina."],
      ["rocha","Material natural formado por um ou mais minerais."],
      ["cristal","Mineral com forma geométrica, porque os seus átomos estão arrumados de maneira organizada."],
      ["brilho","A forma como a superfície de um mineral reflete a luz: metálico ou não metálico (vítreo, nacarado…)."],
      ["risca","A cor do pó de um mineral, que se vê ao riscá-lo numa placa de porcelana."],
      ["dureza","A resistência de um mineral a ser riscado."],
      ["escala de Mohs","Escala de dureza de 1 (talco) a 10 (diamante), criada em 1812 por Friedrich Mohs."],
      ["clivagem","A tendência de alguns minerais para se partirem segundo superfícies planas."],
      ["quartzo","Mineral muito comum e duro (dureza 7), com brilho vítreo; existe no granito e na areia."]
    ],
    quiz:[
      {q:"De que são feitas as rochas?", opts:["De minerais","De água","De restos de plantas apenas","Só de metal derretido"], correct:0, explain:"As rochas são formadas por um ou mais minerais."},
      {q:"Qual é o mineral mais duro da escala de Mohs?", opts:["Diamante","Quartzo","Talco","Calcite"], correct:0, explain:"O diamante tem dureza 10, o máximo da escala."},
      {q:"Qual é o mineral mais macio da escala de Mohs?", opts:["Talco","Gesso","Diamante","Quartzo"], correct:0, explain:"O talco tem dureza 1: até a unha o risca."},
      {q:"O que é a risca de um mineral?", opts:["A cor do pó do mineral","A cor da superfície","O brilho","A forma do cristal"], correct:0, explain:"A risca é a cor do pó, muitas vezes diferente da cor do mineral."},
      {q:"Que minerais formam principalmente o granito?", opts:["Quartzo, feldspato e mica","Calcite e olivina","Diamante e ouro","Só quartzo"], correct:0, explain:"O granito é uma rocha formada sobretudo por quartzo, feldspato e mica."},
      {q:"Que mineral faz efervescência (bolhinhas) com ácido diluído?", opts:["Calcite","Quartzo","Mica","Feldspato"], correct:0, explain:"A calcite reage com o ácido e liberta dióxido de carbono."},
      {q:"Que mineral se separa em folhas finas e brilhantes?", opts:["Mica","Quartzo","Calcite","Olivina"], correct:0, explain:"As micas (biotite e moscovite) têm uma clivagem em folhas."},
      {q:"A unha tem dureza de cerca de 2,5. Se risca um mineral, a dureza dele é…", opts:["Menor do que 2,5","Maior do que 2,5","Exatamente 10","Impossível de saber"], correct:0, explain:"Só se consegue riscar um material mais macio."},
      {q:"Qual destas NÃO serve para identificar um mineral?", opts:["O tamanho da amostra","A dureza","O brilho","A risca"], correct:0, explain:"O tamanho do pedaço não diz que mineral é."},
      {q:"O que define o aspeto de uma paisagem geológica?", opts:["As rochas que a formam e os agentes que a modelam","A cor do céu","O número de casas","A estação do ano"], correct:0, explain:"Rochas diferentes, modeladas pela água, vento ou gelo, dão paisagens diferentes."}
    ],
    compare:{
      left:{title:"💎 Mineral", points:["Uma só substância, com composição definida","Ex.: quartzo, calcite, mica","É o «bloco» das rochas"]},
      right:{title:"🪨 Rocha", points:["Formada por um ou mais minerais","Ex.: granito (quartzo + feldspato + mica)","Forma as paisagens"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 1 e 2 (pp. 7–10); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g2", num:2, c:"m2", icon:"🏜️",
    title:"O Escultor Invisível: Rochas Sedimentares",
    subtitle:"Agentes geológicos, meteorização, erosão e rochas sedimentares", pages:"caderno «100% CN», tema 2 «Agentes de geodinâmica externa, modelação das paisagens e rochas sedimentares» (pp. 11–20)",
    lead:"A água, o vento, o gelo e os seres vivos são escultores muito lentos: desfazem montanhas grão a grão e, com esses grãos, constroem rochas novas.",
    missions:[
      {t:"Detetive da Erosão", d:"Agentes geológicos", f:"Fotografar 3 marcas de erosão perto de casa ou da escola (muros, ribeiras, praias)", xp:10},
      {t:"Rio em Miniatura", d:"Transporte e sedimentação", f:"Com um adulto, deitar água devagar num tabuleiro inclinado com areia e gravilha e observar o que é levado e onde fica", xp:15},
      {t:"Garrafa de Camadas", d:"Estratos", f:"Agitar numa garrafa areia, terra, gravilha e água; deixar repousar e desenhar as camadas", xp:10},
      {t:"Rochas da Cidade", d:"Rochas sedimentares no dia a dia", f:"Descobrir calcário ou arenito em edifícios, calçadas ou monumentos", xp:10}
    ],
    resumo:[
      "Os <b>agentes geológicos externos</b> — a água, o vento, o gelo e os seres vivos — modelam as paisagens.",
      "A <b>meteorização</b> é a alteração e desagregação das rochas no sítio onde estão: <b>física</b> (ex.: a água que gela nas fendas e as alarga) ou <b>química</b> (ex.: a água da chuva que dissolve o calcário).",
      "A <b>erosão</b> remove os materiais, o <b>transporte</b> leva-os (rios, vento, mar, glaciares) e a <b>sedimentação</b> deposita-os, em geral em camadas chamadas <b>estratos</b>.",
      "Com o tempo, os sedimentos são compactados e cimentados — é a <b>diagénese</b> — e formam <b>rochas sedimentares</b>.",
      "Tipos: <b>detríticas</b> (fragmentos de outras rochas: conglomerado, arenito, argilito), <b>quimiogénicas</b> (precipitação de substâncias: sal-gema, alguns calcários) e <b>biogénicas</b> (restos de seres vivos: carvão, calcários com conchas).",
      "As rochas sedimentares são as únicas onde é comum encontrar <b>fósseis</b>."
    ],
    gloss:[
      ["agente geológico","Água, vento, gelo ou seres vivos que alteram e modelam as rochas e as paisagens."],
      ["meteorização","Alteração e desagregação das rochas no local onde estão, por processos físicos ou químicos."],
      ["erosão","Remoção dos materiais desagregados das rochas."],
      ["transporte","Deslocação dos sedimentos pela água, vento, gelo ou gravidade."],
      ["sedimentação","Deposição dos sedimentos quando o agente de transporte perde força."],
      ["estrato","Cada uma das camadas de rocha sedimentar."],
      ["diagénese","Conjunto de processos (compactação e cimentação) que transformam sedimentos em rocha sedimentar."],
      ["rocha sedimentar","Rocha formada a partir de sedimentos, à superfície da Terra."],
      ["arenito","Rocha sedimentar detrítica formada por grãos de areia cimentados."],
      ["calcário","Rocha sedimentar formada sobretudo por calcite; pode ter origem química ou em conchas."]
    ],
    quiz:[
      {q:"Quais destes são agentes geológicos externos?", opts:["Água, vento, gelo e seres vivos","Só os vulcões","Os sismos","O magma"], correct:0, explain:"Atuam à superfície e modelam as paisagens."},
      {q:"O que é a meteorização?", opts:["A alteração e desagregação das rochas no local onde estão","A previsão do tempo","O transporte de sedimentos pelo rio","A formação de magma"], correct:0, explain:"Apesar do nome parecido com «meteorologia», é a alteração das rochas."},
      {q:"A água que gela nas fendas e as alarga é um exemplo de…", opts:["Meteorização física","Meteorização química","Sedimentação","Diagénese"], correct:0, explain:"O gelo ocupa mais espaço do que a água e força a rocha a partir-se."},
      {q:"Qual é a ordem correta?", opts:["Meteorização → erosão → transporte → sedimentação","Sedimentação → erosão → transporte → meteorização","Transporte → meteorização → sedimentação → erosão","Erosão → sedimentação → meteorização → transporte"], correct:0, explain:"Primeiro a rocha altera-se, depois os materiais são removidos, transportados e depositados."},
      {q:"O que são estratos?", opts:["As camadas das rochas sedimentares","Cristais de quartzo","Tipos de vulcões","Fósseis de plantas"], correct:0, explain:"Os sedimentos depositam-se em camadas sobrepostas."},
      {q:"Como se chama a transformação de sedimentos em rocha?", opts:["Diagénese","Fusão","Erosão","Metamorfismo"], correct:0, explain:"A diagénese inclui a compactação e a cimentação dos sedimentos."},
      {q:"O arenito é uma rocha sedimentar…", opts:["Detrítica","Biogénica","Magmática","Metamórfica"], correct:0, explain:"É formado por fragmentos (grãos de areia) cimentados."},
      {q:"O carvão é uma rocha sedimentar…", opts:["Biogénica","Detrítica","Vulcânica","Metamórfica"], correct:0, explain:"Forma-se a partir de restos de plantas soterrados."},
      {q:"Quando é que um rio deposita os sedimentos?", opts:["Quando perde velocidade (ex.: na foz ou numa curva)","Quando corre mais depressa","Nunca deposita","Só no verão"], correct:0, explain:"Com menos força, o rio já não consegue transportar os materiais."},
      {q:"Em que tipo de rochas é mais comum encontrar fósseis?", opts:["Sedimentares","Magmáticas","Metamórficas","Em nenhuma"], correct:0, explain:"Os seres vivos ficam soterrados nos sedimentos que se transformam em rocha."}
    ],
    compare:{
      left:{title:"🧊 Meteorização física", points:["A rocha parte-se em pedaços","Não muda a sua composição","Ex.: gelo nas fendas, raízes"]},
      right:{title:"🧪 Meteorização química", points:["A composição da rocha muda","Os minerais dissolvem-se ou alteram-se","Ex.: água da chuva a dissolver o calcário"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 3 a 5 (pp. 15–20); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g3", num:3, c:"m3", icon:"🦕",
    title:"Caçadores de Fósseis",
    subtitle:"Fósseis e processos de fossilização", pages:"caderno «100% CN», tema 11 «Testemunhos da história da Terra» (pp. 83–92)",
    lead:"Portugal é um dos melhores sítios da Europa para encontrar dinossauros — na Lourinhã encontraram-se até ovos com embriões. Os fósseis são as «capturas de ecrã» da vida de há milhões de anos.",
    missions:[
      {t:"Fóssil Caseiro", d:"Moldes", f:"Com um adulto, fazer um molde de uma concha em plasticina e enchê-lo com gesso", xp:15},
      {t:"Ficha de Fóssil", d:"Fósseis de idade", f:"Escolher um fóssil (amonite, trilobite…) e fazer uma ficha: idade, ambiente e onde se encontra", xp:10},
      {t:"Banda Desenhada da Fossilização", d:"Processo de fossilização", f:"Desenhar em 4 vinhetas como um animal se transforma em fóssil", xp:10},
      {t:"Fósseis de Portugal", d:"Património paleontológico", f:"Pesquisar a Lourinhã, a Pedreira do Galinha ou as trilobites de Arouca", xp:10}
    ],
    resumo:[
      "<b>Fósseis</b> são restos (ossos, conchas, dentes) ou vestígios (pegadas, ovos, excrementos) de seres vivos do passado, preservados nas rochas.",
      "A <b>fossilização</b> é rara: o ser vivo tem de ser coberto depressa por sedimentos, longe do oxigénio e dos decompositores. As partes duras fossilizam com mais facilidade.",
      "Processos: <b>mineralização</b> (minerais substituem a matéria original, como na madeira petrificada), <b>moldagem</b> (fica um molde externo ou interno), <b>conservação</b> (ex.: insetos em âmbar, mamutes no gelo) e <b>marcas</b> de atividade (pegadas — os icnofósseis).",
      "Os <b>fósseis de idade</b> viveram pouco tempo e em muitos locais (ex.: trilobites, amonites): ajudam a datar as rochas. Os <b>fósseis de fácies</b> indicam o ambiente do passado (ex.: corais → mar quente e pouco profundo).",
      "A ciência que estuda os fósseis é a <b>paleontologia</b>.",
      "Em Portugal há ovos de dinossauro com embriões (Lourinhã), pegadas de dinossauro (Pedreira do Galinha, Serra de Aire) e trilobites gigantes (Arouca)."
    ],
    gloss:[
      ["fóssil","Resto ou vestígio de um ser vivo do passado, preservado numa rocha."],
      ["fossilização","Conjunto de processos que transformam um ser vivo ou os seus vestígios em fóssil."],
      ["mineralização","Processo em que minerais substituem, pouco a pouco, a matéria do ser vivo."],
      ["molde","Marca deixada por um ser vivo nos sedimentos: externo (a forma de fora) ou interno (a forma de dentro)."],
      ["âmbar","Resina de árvores, fossilizada, onde por vezes ficaram presos insetos."],
      ["icnofóssil","Vestígio da atividade de um ser vivo, como uma pegada ou um ninho."],
      ["fóssil de idade","Fóssil de um ser que viveu pouco tempo e em muitos lugares; serve para datar rochas."],
      ["fóssil de fácies","Fóssil que indica o ambiente em que a rocha se formou."],
      ["paleontologia","Ciência que estuda os fósseis e a vida do passado."],
      ["amonite","Molusco marinho com concha em espiral, que viveu no Mesozoico; é um bom fóssil de idade."]
    ],
    quiz:[
      {q:"O que é um fóssil?", opts:["Um resto ou vestígio de um ser vivo do passado preservado numa rocha","Uma rocha qualquer","Um mineral muito duro","Um animal que ainda vive"], correct:0, explain:"Podem ser ossos, conchas, pegadas, ovos…"},
      {q:"Porque é que a fossilização é rara?", opts:["É preciso o ser vivo ser soterrado depressa, longe do oxigénio e dos decompositores","Porque os animais não morrem","Porque só acontece nos vulcões","Porque só os peixes fossilizam"], correct:0, explain:"Normalmente os restos são decompostos antes de serem cobertos."},
      {q:"Que partes fossilizam com mais facilidade?", opts:["As partes duras: ossos, dentes, conchas","Os olhos","As penas apenas","Os músculos"], correct:0, explain:"As partes moles decompõem-se depressa."},
      {q:"Uma pegada de dinossauro fossilizada é um…", opts:["Icnofóssil (vestígio de atividade)","Molde interno","Mineral","Âmbar"], correct:0, explain:"Os icnofósseis registam a atividade dos seres vivos."},
      {q:"Um inseto preso em resina fossilizada é um exemplo de…", opts:["Conservação em âmbar","Mineralização","Moldagem","Erosão"], correct:0, explain:"O âmbar preserva o animal quase intacto."},
      {q:"Na madeira petrificada, o que aconteceu?", opts:["Minerais substituíram a madeira (mineralização)","A madeira congelou","A madeira foi pintada","Ficou presa em âmbar"], correct:0, explain:"A forma mantém-se, mas a matéria passa a ser mineral."},
      {q:"Para que servem os fósseis de idade?", opts:["Para datar as rochas","Para saber a cor dos dinossauros","Para fazer cimento","Para medir sismos"], correct:0, explain:"Viveram pouco tempo, por isso indicam a idade das rochas onde aparecem."},
      {q:"Fósseis de corais numa rocha indicam que ali houve…", opts:["Um mar quente e pouco profundo","Um deserto","Um glaciar","Uma floresta"], correct:0, explain:"Os corais são bons fósseis de fácies."},
      {q:"Como se chama a ciência que estuda os fósseis?", opts:["Paleontologia","Meteorologia","Astronomia","Mineralogia"], correct:0, explain:"«Paleo» quer dizer antigo."},
      {q:"Onde há, em Portugal, um famoso trilho de pegadas de dinossauros?", opts:["Pedreira do Galinha (Serra de Aire)","Serra da Estrela, no topo","Ilha da Madeira","Rio Douro"], correct:0, explain:"É um Monumento Natural com pegadas de saurópodes com cerca de 175 milhões de anos."}
    ],
    compare:{
      left:{title:"⏳ Fóssil de idade", points:["Viveu pouco tempo","Espalhado por muitos locais","Serve para datar rochas","Ex.: trilobites, amonites"]},
      right:{title:"🏝️ Fóssil de fácies", points:["Viveu num ambiente muito próprio","Indica o ambiente do passado","Ex.: corais (mar quente e pouco profundo)"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 24 a 26 (pp. 87–92); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g4", num:4, c:"m4", icon:"⏳",
    title:"Viagem no Tempo Profundo",
    subtitle:"O tempo geológico e a história da Terra", pages:"caderno «100% CN», tema 11 «Testemunhos da história da Terra» (pp. 83–92)",
    lead:"A Terra tem cerca de 4600 milhões de anos. Se toda essa história coubesse num só dia, os humanos só apareceriam nos últimos segundos antes da meia-noite!",
    missions:[
      {t:"O Dia da Terra em 24 Horas", d:"Escala do tempo geológico", f:"Fazer um relógio de 24 horas com os grandes acontecimentos da história da Terra", xp:15},
      {t:"Leitura de Estratos", d:"Princípio da sobreposição", f:"Desenhar 4 camadas com fósseis e escrever qual é a mais antiga e porquê", xp:10},
      {t:"Fita do Tempo", d:"Eras geológicas", f:"Numa fita de papel de 4,6 m (1 mm = 1 milhão de anos), marcar o aparecimento da vida, dos dinossauros e dos humanos", xp:15},
      {t:"Extinções", d:"Extinções em massa", f:"Pesquisar o que causou a extinção dos dinossauros não-avianos", xp:10}
    ],
    resumo:[
      "A Terra formou-se há cerca de <b>4600 milhões de anos</b> (M.a.). Este tempo enorme chama-se <b>tempo geológico</b>.",
      "<b>Princípio da sobreposição</b>: numa sequência de estratos que não foi perturbada, os de baixo são mais antigos do que os de cima.",
      "A <b>datação relativa</b> diz o que é mais antigo ou mais recente (pelos estratos e pelos fósseis); a <b>datação absoluta</b> dá uma idade em anos, medindo elementos radioativos das rochas.",
      "A <b>escala do tempo geológico</b> divide a história da Terra em grandes intervalos: o Pré-Câmbrico e as eras <b>Paleozoica</b> (trilobites, primeiros peixes e plantas terrestres), <b>Mesozoica</b> (dinossauros, amonites) e <b>Cenozoica</b> (mamíferos, humanos).",
      "Houve várias <b>extinções em massa</b>: a do fim do Paleozoico (há cerca de 252 M.a.) foi a maior; a do fim do Mesozoico (há 66 M.a.), ligada sobretudo ao impacto de um asteroide, acabou com os dinossauros não-avianos.",
      "As aves descendem de dinossauros — por isso os cientistas dizem que só os dinossauros «não-avianos» se extinguiram."
    ],
    gloss:[
      ["tempo geológico","O tempo da história da Terra, desde a sua formação, há cerca de 4600 milhões de anos."],
      ["M.a.","Abreviatura de «milhões de anos»."],
      ["princípio da sobreposição","Num conjunto de estratos não perturbados, os de baixo são mais antigos do que os de cima."],
      ["datação relativa","Saber se uma rocha ou um acontecimento é mais antigo ou mais recente do que outro."],
      ["datação absoluta","Saber a idade em anos, medindo elementos radioativos das rochas."],
      ["era geológica","Grande divisão da escala do tempo geológico (Paleozoica, Mesozoica, Cenozoica)."],
      ["Paleozoico","A era da «vida antiga», entre cerca de 541 e 252 M.a.: trilobites, peixes, primeiras florestas."],
      ["Mesozoico","A era dos dinossauros, entre cerca de 252 e 66 M.a."],
      ["Cenozoico","A era atual, desde há 66 M.a.: a era dos mamíferos."],
      ["extinção em massa","Desaparecimento de muitas espécies num tempo geológico curto."]
    ],
    quiz:[
      {q:"Qual é a idade aproximada da Terra?", opts:["4600 milhões de anos","4600 anos","460 milhões de anos","46 mil milhões de anos"], correct:0, explain:"Cerca de 4,6 mil milhões de anos, segundo a datação de meteoritos e rochas antigas."},
      {q:"Segundo o princípio da sobreposição, que estrato é o mais antigo?", opts:["O de baixo","O de cima","O do meio","Todos têm a mesma idade"], correct:0, explain:"Os sedimentos depositam-se uns sobre os outros."},
      {q:"O que nos dá a datação absoluta?", opts:["Uma idade em anos","Só se é mais antigo ou mais recente","A cor da rocha","O tipo de fóssil"], correct:0, explain:"Usa elementos radioativos, que se transformam a um ritmo conhecido."},
      {q:"Em que era viveram os dinossauros?", opts:["Mesozoica","Paleozoica","Cenozoica","Pré-Câmbrico"], correct:0, explain:"Entre cerca de 230 e 66 milhões de anos atrás."},
      {q:"Em que era viveram as trilobites?", opts:["Paleozoica","Mesozoica","Cenozoica","Ainda vivem"], correct:0, explain:"São fósseis típicos do Paleozoico."},
      {q:"Há quanto tempo se extinguiram os dinossauros não-avianos?", opts:["Cerca de 66 milhões de anos","Cerca de 6600 anos","Cerca de 6 milhões de anos","Cerca de 660 milhões de anos"], correct:0, explain:"No fim do Mesozoico, ligado sobretudo ao impacto de um asteroide."},
      {q:"Qual foi a maior extinção em massa conhecida?", opts:["A do fim do Paleozoico, há cerca de 252 M.a.","A dos dinossauros","A do ano 1755","A que está a acontecer hoje"], correct:0, explain:"Desapareceu a grande maioria das espécies marinhas."},
      {q:"Em que era vivemos?", opts:["Cenozoica","Mesozoica","Paleozoica","Pré-Câmbrico"], correct:0, explain:"A era dos mamíferos, que começou há 66 milhões de anos."},
      {q:"Porque se diz que as aves são dinossauros?", opts:["Porque descendem de dinossauros","Porque são muito grandes","Porque põem ovos de pedra","Porque vivem há 4600 M.a."], correct:0, explain:"Muitos fósseis mostram dinossauros com penas, ligados às aves."},
      {q:"Se a história da Terra fosse um dia de 24 horas, quando apareceriam os humanos?", opts:["Nos últimos segundos antes da meia-noite","Ao meio-dia","De manhã cedo","À meia-noite do início"], correct:0, explain:"Os humanos modernos existem há cerca de 300 mil anos — uns 6 segundos num «dia» de 4600 M.a."}
    ],
    compare:{
      left:{title:"🧮 Datação relativa", points:["Mais antigo ou mais recente?","Usa os estratos e os fósseis","Ex.: princípio da sobreposição"]},
      right:{title:"⚛️ Datação absoluta", points:["Dá uma idade em anos","Mede elementos radioativos","Ex.: «esta rocha tem 300 M.a.»"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 24 a 26 (pp. 87–92); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g5", num:5, c:"m5", icon:"🌍",
    title:"Por Dentro do Planeta",
    subtitle:"Estrutura interna da Terra, deriva continental e tectónica de placas", pages:"caderno «100% CN», temas 3 a 5 «Deriva continental», «Fundos oceânicos e tectónica de placas» e «Deformação das rochas» (pp. 21–40) e tema 10 «Estrutura interna da Terra» (pp. 77–82)",
    lead:"Ninguém escavou até ao centro da Terra — o furo mais fundo de sempre tem pouco mais de 12 km. Então como sabemos o que há lá dentro? Pelas ondas dos sismos, que mudam ao atravessar cada camada.",
    missions:[
      {t:"A Terra Fatiada", d:"Estrutura interna", f:"Fazer um modelo da Terra em plasticina com camadas de cores diferentes e cortá-lo ao meio", xp:15},
      {t:"Puzzle da Pangeia", d:"Deriva continental", f:"Recortar os continentes de um mapa e tentar encaixá-los, como fez Wegener", xp:10},
      {t:"Placas no Mapa", d:"Tectónica de placas", f:"Num mapa das placas, encontrar Portugal, os Açores e um limite de cada tipo", xp:10},
      {t:"Cientistas da Terra", d:"História da ciência", f:"Escolher Wegener, Inge Lehmann ou Marie Tharp e contar a sua descoberta", xp:10}
    ],
    resumo:[
      "A Terra tem camadas: a <b>crosta</b> (fina: cerca de 5 a 10 km nos oceanos e 30 a 70 km nos continentes), o <b>manto</b> (até cerca de 2900 km de profundidade) e o <b>núcleo</b> — externo, líquido, e interno, sólido, até ao centro, a cerca de 6370 km.",
      "A <b>litosfera</b> (a crosta e a parte de cima do manto) é rígida e está partida em <b>placas tectónicas</b>, que se movem lentamente sobre a <b>astenosfera</b>, uma zona do manto que se deforma devagar.",
      "Em 1912, Alfred <b>Wegener</b> propôs a <b>deriva continental</b>: os continentes já estiveram unidos num supercontinente, a <b>Pangeia</b>. Provas: o encaixe das costas, fósseis iguais em continentes hoje separados e rochas e marcas de glaciares semelhantes.",
      "Nos anos 1960 nasceu a teoria da <b>tectónica de placas</b>: as placas movem-se alguns centímetros por ano — mais ou menos à velocidade a que as unhas crescem.",
      "Limites entre placas: <b>divergentes</b> (afastam-se e forma-se crosta nova, como nas dorsais oceânicas), <b>convergentes</b> (aproximam-se: uma mergulha sob a outra — <b>subducção</b> — ou formam-se montanhas) e <b>transformantes</b> (deslizam lado a lado).",
      "Os <b>Açores</b> ficam perto do ponto onde se encontram três placas: a Norte-Americana, a Euroasiática e a Africana."
    ],
    gloss:[
      ["crosta","A camada mais externa e fina da Terra."],
      ["manto","A camada entre a crosta e o núcleo, a mais espessa da Terra."],
      ["núcleo","A parte central da Terra, rica em ferro e níquel: externo líquido, interno sólido."],
      ["litosfera","A camada rígida exterior (crosta + parte de cima do manto), dividida em placas."],
      ["astenosfera","Zona do manto, por baixo da litosfera, que se deforma lentamente."],
      ["placa tectónica","Cada um dos grandes «pedaços» em que a litosfera está dividida."],
      ["deriva continental","A ideia de Wegener de que os continentes se deslocam ao longo do tempo."],
      ["Pangeia","O supercontinente que reunia quase todos os continentes, há cerca de 300 a 200 M.a."],
      ["dorsal oceânica","Cordilheira submarina onde as placas se afastam e se forma crosta oceânica nova."],
      ["subducção","Mergulho de uma placa por baixo de outra, num limite convergente."]
    ],
    timeline:[
      {y:"1909", ic:"〰️", t:"Andrija Mohorovičić descobre o limite entre a crosta e o manto, a «descontinuidade de Moho»."},
      {y:"1912", ic:"🧩", t:"Alfred Wegener apresenta a ideia da deriva continental."},
      {y:"1936", ic:"🌐", t:"Inge Lehmann descobre que a Terra tem um núcleo interno sólido."},
      {y:"1957", ic:"🗺️", t:"Marie Tharp e Bruce Heezen publicam o primeiro mapa do fundo do Atlântico, com a dorsal médio-atlântica."},
      {y:"1962", ic:"🌊", t:"Harry Hess propõe a expansão dos fundos oceânicos."}
    ],
    quiz:[
      {q:"Quais são as três grandes camadas da Terra?", opts:["Crosta, manto e núcleo","Ar, água e terra","Litosfera, atmosfera e hidrosfera","Granito, basalto e mármore"], correct:0, explain:"Da superfície para o centro: crosta, manto e núcleo."},
      {q:"Qual é a camada mais fina?", opts:["A crosta","O manto","O núcleo externo","O núcleo interno"], correct:0, explain:"Comparada com a Terra, é como a casca de uma maçã."},
      {q:"Como está o núcleo interno?", opts:["Sólido","Líquido","Gasoso","Vazio"], correct:0, explain:"Apesar da temperatura enorme, a pressão mantém-no sólido. O núcleo externo é líquido."},
      {q:"Como sabemos como é o interior da Terra?", opts:["Pelo estudo das ondas sísmicas","Porque já lá foram pessoas","Por fotografias de satélite","Pelos vulcões apenas"], correct:0, explain:"As ondas dos sismos mudam de velocidade e direção em cada camada."},
      {q:"Quem propôs a deriva continental, em 1912?", opts:["Alfred Wegener","Isaac Newton","Charles Darwin","Galileu"], correct:0, explain:"Na altura muitos cientistas não aceitaram a ideia."},
      {q:"Como se chamava o supercontinente antigo?", opts:["Pangeia","Atlântida","Gondwana-Lisboa","Eurásia"], correct:0, explain:"Pangeia quer dizer «toda a terra»."},
      {q:"Qual destas é uma prova da deriva continental?", opts:["Fósseis iguais em continentes hoje separados","A cor do mar","O número de países","A altura das árvores"], correct:0, explain:"Ex.: fósseis do réptil Mesosaurus na América do Sul e em África."},
      {q:"Num limite divergente, as placas…", opts:["Afastam-se","Aproximam-se","Deslizam lado a lado","Ficam paradas"], correct:0, explain:"Entre elas sobe magma e forma-se crosta nova."},
      {q:"O que é a subducção?", opts:["Uma placa mergulhar por baixo de outra","Uma placa subir para o espaço","Um tipo de mineral","Um fóssil"], correct:0, explain:"Acontece em limites convergentes."},
      {q:"A que velocidade se movem as placas?", opts:["Alguns centímetros por ano","Alguns metros por segundo","Quilómetros por dia","Não se movem"], correct:0, explain:"Mais ou menos à velocidade a que as unhas crescem."}
    ],
    compare:{
      left:{title:"🧩 Deriva continental (1912)", points:["Ideia de Wegener","Os continentes deslocam-se","Não explicava a «força» que os move"]},
      right:{title:"🌍 Tectónica de placas (anos 1960)", points:["Teoria aceite hoje","A litosfera está dividida em placas","Explica sismos, vulcões e montanhas"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 6 a 11 (pp. 23–40) e 22 e 23 (pp. 79–82); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g6", num:6, c:"m6", icon:"🌋",
    title:"Montanhas de Fogo: Vulcões",
    subtitle:"Atividade vulcânica, materiais, riscos e benefícios", pages:"caderno «100% CN», tema 6 «Atividade vulcânica» (pp. 41–50)",
    lead:"Em 1957, nos Açores, uma erupção no mar fez nascer terra nova junto à ilha do Faial: o vulcão dos Capelinhos. Os vulcões destroem — mas também constroem paisagens.",
    missions:[
      {t:"Vulcão de Laboratório", d:"Erupção (modelo)", f:"Com um adulto, fazer um vulcão com bicarbonato e vinagre e explicar o que representa cada parte", xp:10},
      {t:"Efusivo ou Explosivo?", d:"Tipos de atividade vulcânica", f:"Comparar duas erupções famosas (ex.: Havai e Monte Santa Helena)", xp:10},
      {t:"Açores Vulcânicos", d:"Vulcanismo em Portugal", f:"Pesquisar os Capelinhos, as Furnas ou a Lagoa do Fogo", xp:15},
      {t:"Plano de Segurança", d:"Riscos vulcânicos", f:"Fazer um cartaz com 4 regras de segurança para quem vive perto de um vulcão", xp:10}
    ],
    resumo:[
      "Um <b>vulcão</b> forma-se quando o <b>magma</b> (rocha fundida, com gases) sobe do interior da Terra e sai à superfície; cá fora chama-se <b>lava</b>.",
      "Partes de um vulcão: <b>câmara magmática</b>, <b>chaminé</b>, <b>cratera</b> e <b>cone vulcânico</b>.",
      "Erupções <b>efusivas</b>: lava fluida e com poucos gases, que escorre (ex.: Havai, Islândia). Erupções <b>explosivas</b>: lava viscosa e muitos gases, com explosões e nuvens de cinzas.",
      "Materiais expelidos: <b>lava</b>, <b>piroclastos</b> (cinzas, lapilli e bombas vulcânicas) e <b>gases</b> (sobretudo vapor de água e dióxido de carbono).",
      "<b>Vulcanismo secundário</b>: fumarolas, <b>géiseres</b> e nascentes termais. Nas Furnas (São Miguel, Açores) coze-se um «cozido» com o calor da terra.",
      "Os vulcões trazem riscos, mas também benefícios: solos muito férteis, energia geotérmica (usada nos Açores) e turismo. Os vulcões ativos são vigiados para proteger as pessoas."
    ],
    gloss:[
      ["magma","Rocha fundida, com gases, no interior da Terra."],
      ["lava","O magma que chega à superfície e perdeu parte dos gases."],
      ["câmara magmática","Reservatório de magma no interior da Terra, por baixo do vulcão."],
      ["chaminé","Canal por onde o magma sobe até à superfície."],
      ["cratera","Abertura no topo do vulcão por onde saem os materiais."],
      ["erupção efusiva","Erupção calma, com lava fluida que escorre."],
      ["erupção explosiva","Erupção violenta, com lava viscosa, muitos gases e cinzas."],
      ["piroclastos","Fragmentos lançados pelo vulcão: cinzas, lapilli e bombas vulcânicas."],
      ["fumarola","Saída de gases vulcânicos através de fendas do solo."],
      ["géiser","Jato intermitente de água quente e vapor que sai do solo."]
    ],
    quiz:[
      {q:"Qual é a diferença entre magma e lava?", opts:["Magma está no interior; lava é o magma que chegou à superfície","São coisas diferentes sem relação","A lava é mais fria do que o gelo","O magma é água quente"], correct:0, explain:"É o mesmo material, em sítios diferentes."},
      {q:"Por onde sobe o magma até à cratera?", opts:["Pela chaminé","Pelo cone","Pela câmara magmática","Pela fumarola"], correct:0, explain:"A chaminé liga a câmara magmática à cratera."},
      {q:"Uma erupção com lava fluida que escorre é…", opts:["Efusiva","Explosiva","Secundária","Sísmica"], correct:0, explain:"Como no Havai ou na Islândia."},
      {q:"Uma erupção com muitos gases, explosões e cinzas é…", opts:["Explosiva","Efusiva","Calma","Metamórfica"], correct:0, explain:"A lava viscosa prende os gases, que acabam por explodir."},
      {q:"O que são piroclastos?", opts:["Fragmentos lançados pelo vulcão (cinzas, lapilli, bombas)","Tipos de lava fluida","Cristais de quartzo","Fósseis vulcânicos"], correct:0, explain:"«Piro» = fogo; «clasto» = fragmento."},
      {q:"Um géiser é…", opts:["Um jato intermitente de água quente e vapor","Um tipo de mineral","Uma cratera vazia","Um sismo pequeno"], correct:0, explain:"É uma manifestação de vulcanismo secundário."},
      {q:"Que vulcão açoriano entrou em erupção em 1957–1958?", opts:["Capelinhos (Faial)","Pico (Pico)","Sete Cidades (São Miguel)","Monte Brasil (Terceira)"], correct:0, explain:"A erupção começou no mar e aumentou a ilha do Faial."},
      {q:"Qual destes é um benefício dos vulcões?", opts:["Solos férteis e energia geotérmica","Mais sismos","Cinzas no ar","Destruição de casas"], correct:0, explain:"Nos Açores, uma parte da eletricidade vem da energia geotérmica."},
      {q:"O que se coze nas Furnas, em São Miguel, com o calor da terra?", opts:["Um cozido","Pão de ló","Gelados","Nada"], correct:0, explain:"As panelas são enterradas no solo quente durante várias horas."},
      {q:"Para que se vigiam os vulcões ativos?", opts:["Para prever erupções e proteger as pessoas","Para os apagar","Para os tornar maiores","Não se vigiam"], correct:0, explain:"Medem-se sismos, deformação do solo e gases."}
    ],
    compare:{
      left:{title:"🫗 Erupção efusiva", points:["Lava fluida","Poucos gases","A lava escorre","Ex.: Havai, Islândia"]},
      right:{title:"💥 Erupção explosiva", points:["Lava viscosa","Muitos gases","Explosões, cinzas e bombas","Ex.: Monte Santa Helena (EUA, 1980)"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 12 a 14 (pp. 45–50); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g7", num:7, c:"m7", icon:"📈",
    title:"Quando a Terra Treme: Sismos",
    subtitle:"Sismos, ondas sísmicas, escalas e proteção", pages:"caderno «100% CN», tema 9 «Atividade sísmica» (pp. 69–76)",
    lead:"Todos os anos há centenas de milhares de sismos na Terra, mas a maioria é tão fraca que ninguém os sente. Em Portugal, o grande sismo de 1755 mudou para sempre a história de Lisboa.",
    missions:[
      {t:"Sismógrafo Caseiro", d:"Registo de sismos", f:"Com um adulto, construir um sismógrafo com uma caixa, uma caneta pendurada e uma tira de papel", xp:15},
      {t:"Baixar, Proteger, Aguardar", d:"Comportamentos de segurança", f:"Treinar em casa os gestos de segurança e escolher os sítios mais seguros de cada divisão", xp:10},
      {t:"Mochila de Emergência", d:"Prevenção", f:"Com a família, preparar a lista da mochila de emergência (água, lanterna, rádio, pilhas, kit de primeiros socorros…)", xp:10},
      {t:"Sismos de Hoje", d:"Monitorização sísmica", f:"Ver no site do IPMA os sismos registados em Portugal nesta semana", xp:10}
    ],
    resumo:[
      "Um <b>sismo</b> é uma vibração da Terra causada pela libertação brusca de energia, em geral quando as rochas se partem e se deslocam numa <b>falha</b>.",
      "O ponto no interior onde o sismo começa é o <b>hipocentro</b> (ou foco); o ponto à superfície mesmo por cima é o <b>epicentro</b>.",
      "A energia propaga-se em <b>ondas sísmicas</b>, registadas por <b>sismógrafos</b>; o registo chama-se <b>sismograma</b>.",
      "A <b>magnitude</b> (escala de Richter) mede a energia libertada; a <b>intensidade</b> (escala de Mercalli modificada, de I a XII) mede os efeitos nas pessoas, nos edifícios e na paisagem.",
      "Portugal tem risco sísmico, sobretudo no Algarve, no Alentejo litoral, em Lisboa e Vale do Tejo e nos Açores. O sismo de 1755 teve uma magnitude estimada de cerca de 8,5 a 9 e foi seguido de um <b>tsunami</b>.",
      "Durante um sismo: <b>baixar, proteger, aguardar</b> — baixa-te, protege a cabeça debaixo de uma mesa resistente e espera que pare, longe de janelas. Depois, sai com calma e não uses elevadores."
    ],
    gloss:[
      ["sismo","Vibração da Terra causada pela libertação brusca de energia no interior."],
      ["falha","Fratura nas rochas onde os blocos se deslocaram."],
      ["hipocentro","O ponto no interior da Terra onde o sismo começa (foco)."],
      ["epicentro","O ponto à superfície mesmo por cima do hipocentro."],
      ["ondas sísmicas","Ondas que transportam a energia do sismo através da Terra."],
      ["sismógrafo","Aparelho que deteta e regista as ondas sísmicas."],
      ["magnitude","Medida da energia libertada num sismo (escala de Richter)."],
      ["intensidade","Medida dos efeitos de um sismo num local (escala de Mercalli modificada, I a XII)."],
      ["réplica","Sismo mais pequeno que acontece depois do sismo principal."],
      ["tsunami","Série de ondas gigantes no mar, provocadas por um sismo, deslizamento ou erupção no fundo do oceano."]
    ],
    quiz:[
      {q:"O que provoca a maioria dos sismos?", opts:["A rutura e o deslocamento de rochas numa falha","O vento forte","A chuva","A Lua cheia"], correct:0, explain:"A energia acumula-se nas rochas até que estas partem."},
      {q:"Como se chama o ponto no interior onde começa o sismo?", opts:["Hipocentro","Epicentro","Cratera","Magnitude"], correct:0, explain:"Também se chama foco."},
      {q:"E o ponto à superfície mesmo por cima dele?", opts:["Epicentro","Hipocentro","Falha","Sismograma"], correct:0, explain:"É normalmente onde o sismo se sente com mais força."},
      {q:"Que aparelho regista as ondas sísmicas?", opts:["Sismógrafo","Termómetro","Barómetro","Microscópio"], correct:0, explain:"O registo chama-se sismograma."},
      {q:"O que mede a magnitude?", opts:["A energia libertada pelo sismo","Os estragos nas casas","A duração do sismo","A profundidade do mar"], correct:0, explain:"Usa-se a escala de Richter (ou a de magnitude de momento)."},
      {q:"O que mede a intensidade (escala de Mercalli)?", opts:["Os efeitos do sismo num local","A energia libertada","A temperatura do magma","A idade das rochas"], correct:0, explain:"Vai de I (não se sente) a XII (destruição total)."},
      {q:"Um sismo tem uma magnitude, mas pode ter intensidades diferentes. Porquê?", opts:["Os efeitos variam com a distância e o tipo de terreno e de edifícios","Porque cada pessoa mede à sua maneira","Porque a energia muda de dia para dia","Não pode"], correct:0, explain:"Perto do epicentro e em edifícios frágeis, os efeitos são maiores."},
      {q:"O que fazer durante um sismo, dentro de casa?", opts:["Baixar, proteger e aguardar, debaixo de uma mesa resistente","Correr para as escadas","Usar o elevador","Ir para a janela ver"], correct:0, explain:"É a recomendação da Proteção Civil."},
      {q:"O que pode um sismo no fundo do mar provocar?", opts:["Um tsunami","Um géiser","Um fóssil","Uma erupção efusiva"], correct:0, explain:"Foi o que aconteceu em 1755, em Lisboa."},
      {q:"O que é uma réplica?", opts:["Um sismo mais pequeno depois do principal","Uma cópia de um fóssil","Um tipo de vulcão","Um instrumento de medida"], correct:0, explain:"Podem acontecer durante dias ou semanas."}
    ],
    compare:{
      left:{title:"⚡ Magnitude (Richter)", points:["Mede a energia libertada","Um só valor para cada sismo","Calcula-se com sismógrafos"]},
      right:{title:"🏚️ Intensidade (Mercalli)", points:["Mede os efeitos num local","Varia de lugar para lugar","De I a XII, pela observação"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 20 e 21 (pp. 73–76); fichas de avaliação a partir da p. 99"
  },
  {
    id:"g8", num:8, c:"m8", icon:"♻️",
    title:"A Reciclagem das Rochas",
    subtitle:"Rochas magmáticas e metamórficas, o ciclo das rochas e os recursos geológicos", pages:"caderno «100% CN», temas 7 e 8 «Rochas magmáticas e metamórficas» e «Formação, transformação e exploração das rochas» (pp. 51–68) e tema 12 «Geologia e sustentabilidade» (pp. 93–98)",
    lead:"As rochas também se reciclam — só que demora milhões de anos. O granito de uma calçada pode um dia virar areia, depois arenito… e, muito mais tarde, voltar a fundir.",
    missions:[
      {t:"Granito vs. Basalto", d:"Rochas magmáticas", f:"Comparar uma rocha plutónica e uma vulcânica: tamanho dos cristais e cor", xp:10},
      {t:"Ciclo das Rochas Ilustrado", d:"Ciclo das rochas", f:"Fazer um esquema do ciclo das rochas com setas e exemplos", xp:15},
      {t:"Rochas que Constroem", d:"Recursos geológicos", f:"Descobrir de que rocha são feitos 3 objetos ou edifícios (bancada, calçada, telhado)", xp:10},
      {t:"Pedreira Sustentável", d:"Exploração sustentável", f:"Pesquisar como se recupera uma pedreira abandonada", xp:10}
    ],
    resumo:[
      "As <b>rochas magmáticas</b> formam-se quando o magma arrefece e solidifica. <b>Plutónicas</b>: arrefecem devagar, em profundidade, e têm cristais grandes (ex.: <b>granito</b>). <b>Vulcânicas</b>: arrefecem depressa, à superfície, e têm cristais pequenos (ex.: <b>basalto</b>).",
      "As <b>rochas metamórficas</b> formam-se quando outras rochas são transformadas por <b>pressão</b> e <b>temperatura</b> elevadas, sem fundirem: é o <b>metamorfismo</b>. Ex.: calcário → <b>mármore</b>; argilito → ardósia → <b>xisto</b>.",
      "Muitas rochas metamórficas têm <b>foliação</b>: os minerais ficam alinhados em folhas, como no xisto e na ardósia.",
      "O <b>ciclo das rochas</b> mostra que qualquer rocha se pode transformar noutra: por meteorização, erosão e sedimentação; por metamorfismo; ou por fusão e solidificação.",
      "As rochas são <b>recursos geológicos</b>: o granito e o mármore (construção — Estremoz, Borba e Vila Viçosa são famosos pelo mármore), o calcário (cimento, calçada), a ardósia (telhados). A exploração deve ser sustentável e as pedreiras recuperadas.",
      "Em Portugal há muito granito no norte e no centro, xisto no centro e no Alentejo, calcário nas serras de Aire e Candeeiros e basalto nos Açores e na Madeira."
    ],
    gloss:[
      ["rocha magmática","Rocha que se forma pelo arrefecimento e solidificação do magma."],
      ["rocha plutónica","Rocha magmática que arrefece devagar, em profundidade; tem cristais grandes."],
      ["rocha vulcânica","Rocha magmática que arrefece depressa, à superfície; tem cristais pequenos."],
      ["granito","Rocha plutónica clara, com quartzo, feldspato e mica."],
      ["basalto","Rocha vulcânica escura, de grão muito fino; forma os Açores e a Madeira."],
      ["rocha metamórfica","Rocha formada pela transformação de outra rocha, por pressão e temperatura, sem fundir."],
      ["metamorfismo","Transformação de rochas no estado sólido, por aumento de pressão e de temperatura."],
      ["mármore","Rocha metamórfica que resulta do calcário."],
      ["xisto","Rocha metamórfica com foliação, que se parte em placas."],
      ["ciclo das rochas","O conjunto de processos pelos quais as rochas se transformam umas nas outras ao longo do tempo."]
    ],
    quiz:[
      {q:"Como se formam as rochas magmáticas?", opts:["Pelo arrefecimento e solidificação do magma","Pela compactação de sedimentos","Pela transformação de outras rochas sem fundir","Pela evaporação da água"], correct:0, explain:"«Magmáticas» vem de magma."},
      {q:"Porque é que o granito tem cristais grandes?", opts:["Arrefeceu devagar, em profundidade","Arrefeceu depressa, à superfície","Foi pintado","Tem fósseis"], correct:0, explain:"Com tempo, os cristais conseguem crescer."},
      {q:"O basalto é uma rocha…", opts:["Vulcânica","Plutónica","Sedimentar","Metamórfica"], correct:0, explain:"Arrefece depressa, à superfície, por isso tem cristais muito pequenos."},
      {q:"Como se formam as rochas metamórficas?", opts:["Por pressão e temperatura elevadas, sem a rocha fundir","Por arrefecimento de lava","Por sedimentação no mar","Por evaporação"], correct:0, explain:"«Meta» = mudança; «morfo» = forma."},
      {q:"O mármore resulta da transformação de…", opts:["Calcário","Granito","Basalto","Carvão"], correct:0, explain:"O metamorfismo do calcário origina mármore."},
      {q:"O que é a foliação?", opts:["Minerais alinhados em folhas","Um tipo de fóssil","Cristais muito grandes","Uma erupção"], correct:0, explain:"É típica do xisto e da ardósia."},
      {q:"O que mostra o ciclo das rochas?", opts:["Que qualquer rocha se pode transformar noutra","Que as rochas nunca mudam","Que só existe granito","Que as rochas crescem como plantas"], correct:0, explain:"Leva milhões de anos."},
      {q:"Que rocha é famosa em Estremoz, Borba e Vila Viçosa?", opts:["Mármore","Basalto","Xisto","Carvão"], correct:0, explain:"O mármore alentejano é exportado para todo o mundo."},
      {q:"De que rocha são feitas as ilhas dos Açores e da Madeira, sobretudo?", opts:["Basalto (vulcânica)","Granito","Mármore","Calcário"], correct:0, explain:"São ilhas de origem vulcânica."},
      {q:"O que deve acontecer a uma pedreira quando acaba a exploração?", opts:["Deve ser recuperada (paisagem, plantas, segurança)","Fica abandonada","Enche-se de lixo","Explode-se"], correct:0, explain:"A exploração sustentável inclui recuperar a paisagem."}
    ],
    compare:{
      left:{title:"🔥 Rocha magmática", points:["Nasce do magma que solidifica","Plutónica (granito) ou vulcânica (basalto)","Cristais grandes ou pequenos"]},
      right:{title:"🔁 Rocha metamórfica", points:["Nasce de outra rocha transformada","Pressão e temperatura, sem fundir","Ex.: mármore, xisto, ardósia"]}
    },
    boss:"Caderno «100% CN»: fichas n.º 15 a 19 (pp. 55–68) e 27 e 28 (pp. 95–98); fichas de avaliação a partir da p. 99"
  }
  ];
