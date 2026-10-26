/* Físico-Química — 7.º ano (Aprendizagens Essenciais de 2018: Espaço, Materiais, Energia).
   Mesma estrutura dos outros mundos. Páginas do manual «FQ 7» (ASA) e do caderno de atividades, segundo os índices recebidos em 2026-10-25. */
const L7 = (e, b, t) => '<li><span aria-hidden="true">'+e+'</span><span><b>'+b+'</b> '+t+'</span></li>';
const EX7 = (titulo, itens) => ({title:titulo, svg:'<ul class="wheel-legend">'+itens.map(i => L7(i[0], i[1], i[2])).join("")+'</ul>'});
const FQ7_WORLDS = [
  {
    id:"q1", num:1, c:"m3", icon:"🌌",
    title:"Viagem pelo Universo",
    subtitle:"Universo, galáxias e distâncias no Universo", pages:"FQ 7 (ASA), I Espaço, 1 «Universo e distâncias no Universo» (pp. 8–37); caderno de atividades, fichas 1 a 3 (pp. 5–14)",
    lead:"Onde estamos no Universo? Neste mundo vais conhecer os corpos celestes, as galáxias e o Big Bang, e perceber porque é que, no espaço, as distâncias se medem em unidades astronómicas e anos-luz.",
    missions:[
      {t:"O Meu Endereço Cósmico", d:"Organização do Universo", f:"Escreve a tua «morada» completa no Universo, do mais pequeno para o maior: a tua rua, a localidade, Portugal, a Terra, o Sistema Solar, a Via Láctea, o Grupo Local, o Universo.\nDesenha-a como bonecas russas, umas dentro das outras.\nVerifica: cada estrutura cabe dentro da seguinte (o Sistema Solar está dentro da Via Láctea, e não ao contrário).", xp:10},
      {t:"Quanto Tempo Demora a Luz?", d:"Unidades de distância", f:"A luz viaja a cerca de 300 000 km por segundo. Calcula quanto tempo demora a luz do Sol a chegar à Terra (150 milhões de km), como no Exemplo 2.\nVerifica: deve dar cerca de 500 segundos, ou seja, uns 8 minutos e 20 segundos. Quando vês o Sol, estás a vê-lo como ele era há 8 minutos!", xp:10},
      {t:"Linha do Tempo do Céu", d:"Instrumentos e evolução do conhecimento", f:"Pesquisa e faz uma linha do tempo com 4 marcos: a luneta de Galileu (1609), o telescópio de Newton (1668), o telescópio espacial Hubble (1990) e o telescópio espacial James Webb (2021).\nVerifica: para cada um, escreve uma frase sobre o que permitiu descobrir.", xp:15},
      {t:"Observar o Céu à Noite", d:"Observação a olho nu", f:"Numa noite limpa, longe de muitas luzes, observa o céu durante 10 minutos com um adulto. Procura a Lua, um planeta (brilha sem cintilar) e uma constelação (por exemplo, a Ursa Maior).\nVerifica: regista a data, a hora e o que viste. As estrelas cintilam; os planetas quase não.", xp:15}
    ],
    resumo:[
      "Os <b>corpos celestes</b> incluem estrelas (como o Sol, que têm luz própria), planetas, satélites naturais (como a Lua), asteroides e cometas.",
      "As estrelas agrupam-se em <b>galáxias</b>. A nossa é a <b>Via Láctea</b>, uma galáxia em espiral com centenas de milhares de milhões de estrelas; o Sistema Solar fica num dos seus braços. As galáxias formam <b>enxames</b> (a Via Láctea pertence ao <b>Grupo Local</b>).",
      "Uma <b>constelação</b> é um grupo de estrelas que, vistas da Terra, parecem formar uma figura; na realidade, podem estar a distâncias muito diferentes de nós.",
      "Segundo a teoria do <b>Big Bang</b>, o Universo começou há cerca de 13 800 milhões de anos, muito quente e denso, e desde então está em expansão e a arrefecer.",
      "A <b>unidade astronómica (ua)</b> é a distância média da Terra ao Sol: cerca de 150 milhões de km. Usa-se no Sistema Solar.",
      "O <b>ano-luz (a.l.)</b> é a distância que a luz percorre num ano: cerca de 9,5 biliões de km (9 500 000 000 000 km). Usa-se para as estrelas e as galáxias. Atenção: é uma unidade de <b>distância</b>, não de tempo.",
      "A <b>observação</b> e os instrumentos (luneta, telescópios em terra e no espaço) fizeram o conhecimento do Universo avançar muito."
    ],
    gloss:[
      ["corpos celestes","Os objetos que existem no espaço: estrelas, planetas, satélites, asteroides, cometas…"],
      ["estrela","Corpo celeste com luz própria, como o Sol."],
      ["galáxia","Um enorme conjunto de estrelas, gás e poeiras, unidos pela gravidade."],
      ["Via Láctea","A galáxia onde está o Sistema Solar."],
      ["constelação","Grupo de estrelas que, vistas da Terra, parecem formar uma figura."],
      ["Big Bang","Teoria que explica a origem do Universo, há cerca de 13 800 milhões de anos, e a sua expansão."],
      ["unidade astronómica","Distância média da Terra ao Sol, cerca de 150 milhões de km (ua)."],
      ["ano-luz","Distância que a luz percorre num ano, cerca de 9,5 biliões de km (a.l.)."]
    ],
    quiz:[
      {q:"O que é um ano-luz?", opts:["Um ano inteiro de dias com sol","A distância que a luz percorre num ano","O tempo que a luz demora a chegar do Sol","A idade de uma estrela"], correct:1, explain:"Apesar do nome, o ano-luz é uma unidade de distância: cerca de 9,5 biliões de km. O tempo que a luz demora do Sol à Terra é cerca de 8 minutos."},
      {q:"Qual é a ordem correta, do mais pequeno para o maior?", opts:["Terra, Sistema Solar, Via Láctea, Grupo Local","Sistema Solar, Terra, Via Láctea, Grupo Local","Terra, Via Láctea, Sistema Solar, Grupo Local","Via Láctea, Sistema Solar, Terra, Grupo Local"], correct:0, explain:"A Terra faz parte do Sistema Solar, que está na Via Láctea, que pertence ao Grupo Local de galáxias."},
      {q:"Que unidade é mais adequada para a distância da Terra a Marte?", opts:["Unidade astronómica","Ano-luz","Metro","Centímetro"], correct:0, explain:"No Sistema Solar usa-se a unidade astronómica (Marte está a cerca de 1,5 ua do Sol). O ano-luz é enorme para estas distâncias: usa-se para estrelas e galáxias."},
      {q:"Segundo a teoria do Big Bang, há quanto tempo começou o Universo?", opts:["Há cerca de 4600 milhões de anos","Há cerca de 13 800 milhões de anos","Há cerca de 2000 anos","Sempre existiu igual"], correct:1, explain:"Cerca de 13 800 milhões de anos. Os 4600 milhões de anos são a idade do Sistema Solar e da Terra."},
      {q:"Porque é que as estrelas de uma constelação podem não estar juntas?", opts:["Porque se afastam todas as noites","Porque só parecem juntas vistas da Terra; podem estar a distâncias muito diferentes","Porque são planetas","Porque as constelações mudam de forma todos os dias"], correct:1, explain:"A constelação é uma figura vista da Terra. Uma estrela pode estar a dezenas de anos-luz e a do lado a centenas."},
      {q:"A estrela mais próxima do Sol, Proxima Centauri, está a cerca de 4,2 anos-luz. O que significa?", opts:["Que a luz dela demora cerca de 4,2 anos a chegar-nos","Que foi descoberta há 4,2 anos","Que é 4,2 vezes maior do que o Sol","Que fica a 4,2 km"], correct:0, explain:"Um ano-luz é a distância percorrida pela luz num ano; a 4,2 a.l., a luz dela viaja 4,2 anos até nós. Vemo-la como era há 4,2 anos."},
      {q:"Qual destes corpos celestes tem luz própria?", opts:["A Lua","Marte","O Sol","Um cometa"], correct:2, explain:"O Sol é uma estrela: produz luz. A Lua e os planetas só refletem a luz do Sol."},
      {q:"Que instrumento, usado por Galileu em 1609, mostrou as luas de Júpiter?", opts:["A luneta","O microscópio","O telescópio Hubble","O sismógrafo"], correct:0, explain:"Galileu apontou uma luneta ao céu e viu, entre outras coisas, quatro luas a girar à volta de Júpiter."}
    ],
    posters:[
      EX7("🏠 Exemplo 1 — O nosso endereço no Universo", [
        ["🎯","O que queremos descobrir:","onde fica a Terra no Universo."],
        ["🚦","Como começar:","vai do mais pequeno para o maior, como bonecas russas."],
        ["👣","Passo a passo:","<br>A Terra é um planeta do Sistema Solar.<br>O Sistema Solar está num braço da Via Láctea, uma galáxia em espiral.<br>A Via Láctea pertence ao Grupo Local, um enxame de galáxias.<br>O Grupo Local é uma pequena parte do Universo."],
        ["✅","Resultado:","Terra → Sistema Solar → Via Láctea → Grupo Local → Universo."],
        ["🔍","Verificar:","cada estrutura está dentro da seguinte. Erro a evitar: pôr a Via Láctea dentro do Sistema Solar."]]),
      EX7("💡 Exemplo 2 — A luz do Sol demora 8 minutos", [
        ["🎯","O que queremos descobrir:","quanto tempo demora a luz do Sol a chegar à Terra."],
        ["🚦","Como começar:","a luz viaja a cerca de 300 000 km/s; a distância Sol–Terra é cerca de 150 000 000 km (1 ua)."],
        ["👣","Passo a passo:","<br>tempo = distância ÷ velocidade<br>150 000 000 ÷ 300 000 = 500 segundos<br>500 s = 8 min e 20 s"],
        ["✅","Resultado:","a luz do Sol demora cerca de 8 minutos e 20 segundos a chegar à Terra."],
        ["🔍","Verificar:","300 000 × 500 = 150 000 000 km ✓. Por isso, o Sol que vemos é o Sol de há 8 minutos."]]),
      EX7("📏 Exemplo 3 — Unidade astronómica ou ano-luz?", [
        ["🎯","O que queremos descobrir:","que unidade usar para: (a) Terra–Júpiter; (b) Sol–Proxima Centauri; (c) o diâmetro da Via Láctea."],
        ["🚦","Como começar:","dentro do Sistema Solar, ua; para estrelas e galáxias, a.l."],
        ["👣","Passo a passo:","<br>(a) Júpiter está a cerca de 5,2 ua do Sol → ua<br>(b) Proxima Centauri está a cerca de 4,2 a.l. → a.l.<br>(c) a Via Láctea tem cerca de 100 000 a.l. de diâmetro → a.l."],
        ["✅","Resultado:","(a) unidade astronómica; (b) e (c) ano-luz."],
        ["🔍","Verificar:","1 a.l. é cerca de 63 000 ua: usar ua para as estrelas daria números enormes."]])
    ],
    compare:{
      left:{title:"🌞 Unidade astronómica (ua)", points:["Distância média Terra–Sol","≈ 150 milhões de km","Para o Sistema Solar"]},
      right:{title:"✨ Ano-luz (a.l.)", points:["Distância percorrida pela luz num ano","≈ 9,5 biliões de km","Para estrelas e galáxias"]}
    },
    resources:[{icon:"🔭", title:"Stellarium Web", desc:"Planetário no browser: vê o céu desta noite a partir de onde estás. Grátis, sem conta.", site:"stellarium-web.org", url:"https://stellarium-web.org/"}],
    boss:"FQ 7: «Avaliação global» (p. 37); caderno de atividades: Teste 1 (p. 109)"
  },
  {
    id:"q2", num:2, c:"m1", icon:"🪐",
    title:"Os Vizinhos do Sol",
    subtitle:"O Sistema Solar e os planetas", pages:"FQ 7 (ASA), I Espaço, 2 «Sistema Solar» (pp. 40–61); caderno de atividades, ficha 4 (p. 15)",
    lead:"Oito planetas, muitas luas, asteroides e cometas giram à volta do Sol. Neste mundo comparas os planetas, descobres porque é que os mais afastados demoram mais a dar a volta ao Sol e o que faz da Terra um planeta com vida.",
    missions:[
      {t:"Sistema Solar no Corredor", d:"Modelo à escala", f:"Faz um modelo de distâncias à escala 1 ua = 1 m. Põe o Sol num extremo e marca os planetas: Mercúrio 0,4 m, Vénus 0,7 m, Terra 1 m, Marte 1,5 m, Júpiter 5,2 m, Saturno 9,5 m, Urano 19,2 m, Neptuno 30 m (talvez precises da rua!).\nVerifica: escreve uma vantagem e uma limitação deste modelo (por exemplo, os tamanhos dos planetas não estão à mesma escala).", xp:15},
      {t:"Ficha de Planeta", d:"Comparar planetas", f:"Escolhe um planeta e faz uma ficha: tipo (rochoso ou gasoso), distância ao Sol, período de translação, período de rotação e uma curiosidade.\nVerifica: compara com a tabela do resumo e confirma num site da NASA ou da ESA.", xp:10},
      {t:"Porque Há Vida na Terra?", d:"A Terra, planeta com vida", f:"Escreve 4 razões que fazem da Terra um planeta com vida e liga cada uma a uma disciplina (Ciências Naturais, Geografia…).\nVerifica: tens de ter a água líquida, a atmosfera, a distância ao Sol (temperatura adequada) e o campo magnético ou a camada de ozono.", xp:10}
    ],
    resumo:[
      "O <b>Sistema Solar</b> é formado pelo Sol, oito planetas e os seus satélites, planetas anões (como Plutão), asteroides e cometas, todos presos ao Sol pela força gravítica.",
      "Os <b>planetas rochosos</b> (ou telúricos) são os quatro mais próximos do Sol: Mercúrio, Vénus, Terra e Marte. Os <b>planetas gasosos</b> (ou gigantes) são Júpiter, Saturno, Urano e Neptuno. Entre Marte e Júpiter fica a <b>cintura de asteroides</b>.",
      "O <b>período de translação</b> é o tempo de uma volta completa ao Sol (na Terra, cerca de 365 dias). O <b>período de rotação</b> é o tempo de uma volta sobre si próprio (na Terra, cerca de 24 horas).",
      "Quanto <b>mais afastado do Sol</b>, maior é o período de translação de um planeta: Mercúrio demora 88 dias, Neptuno cerca de 165 anos.",
      "A Terra tem vida porque tem <b>água líquida</b>, uma <b>atmosfera</b> com oxigénio que protege da radiação e dos meteoritos, e está a uma <b>distância do Sol</b> que permite temperaturas adequadas.",
      "Os <b>modelos</b> do Sistema Solar ajudam a perceber distâncias e tamanhos, mas têm limitações: é quase impossível pôr distâncias e tamanhos à mesma escala numa folha."
    ],
    gloss:[
      ["Sistema Solar","O Sol e todos os corpos que giram à sua volta."],
      ["planetas rochosos","Mercúrio, Vénus, Terra e Marte: pequenos, com superfície sólida."],
      ["planetas gasosos","Júpiter, Saturno, Urano e Neptuno: enormes, formados sobretudo por gases."],
      ["período de translação","Tempo de uma volta completa à volta do Sol."],
      ["período de rotação","Tempo de uma volta completa do planeta sobre si próprio."],
      ["satélite natural","Corpo que gira à volta de um planeta, como a Lua."],
      ["planeta anão","Corpo como Plutão: gira à volta do Sol mas não «limpou» a sua órbita."],
      ["cintura de asteroides","Zona entre Marte e Júpiter com muitos corpos rochosos."]
    ],
    quiz:[
      {q:"Quais são os planetas rochosos?", opts:["Mercúrio, Vénus, Terra e Marte","Júpiter, Saturno, Urano e Neptuno","Terra, Marte, Júpiter e Saturno","Só a Terra"], correct:0, explain:"Os quatro planetas mais próximos do Sol são rochosos. Júpiter, Saturno, Urano e Neptuno são gasosos."},
      {q:"Qual planeta tem o maior período de translação?", opts:["Mercúrio","Terra","Júpiter","Neptuno"], correct:3, explain:"Neptuno é o mais afastado do Sol, por isso demora mais a dar a volta: cerca de 165 anos."},
      {q:"O que é o período de rotação da Terra?", opts:["O tempo de uma volta ao Sol (cerca de 365 dias)","O tempo de uma volta sobre si própria (cerca de 24 horas)","O tempo entre duas luas cheias","A duração de uma estação do ano"], correct:1, explain:"A rotação causa os dias e as noites (cerca de 24 h). A volta ao Sol é a translação."},
      {q:"Qual destas NÃO é uma razão para haver vida na Terra?", opts:["Ter água líquida","Ter uma atmosfera com oxigénio","Estar a uma distância adequada do Sol","Ser o maior planeta do Sistema Solar"], correct:3, explain:"A Terra não é o maior planeta (Júpiter é). As outras três razões são essenciais à vida."},
      {q:"Plutão é…", opts:["o nono planeta","um planeta anão","um satélite da Terra","uma estrela"], correct:1, explain:"Desde 2006, Plutão é considerado um planeta anão: o Sistema Solar tem oito planetas."},
      {q:"Onde fica a cintura de asteroides?", opts:["Entre a Terra e Marte","Entre Marte e Júpiter","Depois de Neptuno","À volta da Lua"], correct:1, explain:"A cintura principal de asteroides fica entre as órbitas de Marte e Júpiter."},
      {q:"Num modelo em que 1 ua = 1 m, a que distância do Sol fica Júpiter (5,2 ua)?", opts:["0,52 m","5,2 m","52 m","1 m"], correct:1, explain:"Basta trocar ua por metros: 5,2 ua → 5,2 m."},
      {q:"Qual é a principal limitação de um desenho do Sistema Solar numa folha A4?", opts:["Os planetas ficam com cores erradas","É quase impossível desenhar distâncias e tamanhos à mesma escala","Não cabe o Sol","Os planetas não têm nome"], correct:1, explain:"As distâncias são enormes em comparação com os tamanhos: se os planetas forem visíveis, as distâncias não cabem; e vice-versa."}
    ],
    posters:[
      EX7("📊 Exemplo 1 — Ler uma tabela de planetas", [
        ["🎯","O que queremos descobrir:","que relação há entre a distância ao Sol e o período de translação."],
        ["🚦","Como começar:","organiza os dados por ordem de distância ao Sol."],
        ["👣","Passo a passo:","<br>Mercúrio 0,4 ua → 88 dias<br>Vénus 0,7 ua → 225 dias<br>Terra 1 ua → 365 dias<br>Marte 1,5 ua → 687 dias<br>Júpiter 5,2 ua → cerca de 12 anos<br>Saturno 9,5 ua → cerca de 29,5 anos<br>Urano 19,2 ua → cerca de 84 anos<br>Neptuno 30 ua → cerca de 165 anos"],
        ["✅","Resultado:","quanto mais afastado do Sol, maior é o período de translação."],
        ["🔍","Verificar:","a órbita é maior e o planeta move-se mais devagar, por isso demora muito mais. Erro a evitar: confundir com o período de rotação (Vénus, por exemplo, roda muito devagar: um dia em Vénus dura 243 dias terrestres)."]]),
      EX7("🧩 Exemplo 2 — Rochoso ou gasoso?", [
        ["🎯","O que queremos descobrir:","classificar Marte e Saturno."],
        ["🚦","Como começar:","pergunta-te: está antes ou depois da cintura de asteroides? Tem superfície sólida?"],
        ["👣","Passo a passo:","<br>Marte: antes da cintura, pequeno, superfície sólida com crateras e vulcões → rochoso<br>Saturno: depois da cintura, gigante, formado sobretudo por hidrogénio e hélio, com anéis → gasoso"],
        ["✅","Resultado:","Marte é rochoso; Saturno é gasoso."],
        ["🔍","Verificar:","todos os planetas gasosos têm anéis (os de Saturno são os mais visíveis) e muitas luas."]])
    ],
    compare:{
      left:{title:"🪨 Planetas rochosos", points:["Mercúrio, Vénus, Terra, Marte","Pequenos, superfície sólida","Poucas ou nenhumas luas"]},
      right:{title:"☁️ Planetas gasosos", points:["Júpiter, Saturno, Urano, Neptuno","Enormes, sobretudo gases","Muitas luas e anéis"]}
    },
    resources:[{icon:"🛰️", title:"NASA Space Place", desc:"Explicações e jogos sobre os planetas, para jovens. Em inglês.", site:"spaceplace.nasa.gov", url:"https://spaceplace.nasa.gov/"}],
    boss:"FQ 7: «Avaliação global» (p. 61); caderno de atividades: Teste 1 (p. 109)"
  },
  {
    id:"q3", num:3, c:"m2", icon:"🌗",
    title:"Terra, Lua e Gravidade",
    subtitle:"Dia e noite, estações, fases da Lua, eclipses, peso e massa", pages:"FQ 7 (ASA), I Espaço, 3 «A Terra, a Lua e as forças gravíticas» (pp. 62–100); caderno de atividades, fichas 5 a 8 (pp. 19–28)",
    lead:"Porque há dia e noite, verão e inverno, lua cheia e eclipses? Tudo resulta dos movimentos da Terra e da Lua. Neste mundo percebes também a força que nos prende ao chão e a diferença entre peso e massa.",
    missions:[
      {t:"O Relógio de Sol", d:"Comprimento da sombra ao longo do dia", f:"Num dia de sol, espeta um pau na vertical num sítio plano. De hora a hora (das 9h às 17h), mede o comprimento da sombra e marca a ponta com uma pedra.\nFaz um gráfico do comprimento da sombra em função da hora.\nVerifica: a sombra é mais curta por volta do meio-dia solar (em Portugal continental, perto das 13h30 no horário de verão e das 12h30 no de inverno) e muda de direção ao longo do dia.", xp:15},
      {t:"Diário da Lua", d:"Fases da Lua", f:"Durante um mês, desenha a Lua todas as noites em que a vires (ou consulta uma app/calendário lunar).\nVerifica: identificas a lua nova, o quarto crescente, a lua cheia e o quarto minguante, e o ciclo completo demora cerca de 29,5 dias.", xp:15},
      {t:"Balança e Dinamómetro", d:"Peso e massa", f:"Com uma balança de cozinha, mede a massa de 3 objetos (em kg). Calcula o peso de cada um na Terra (P = m × 9,8) e na Lua (P = m × 1,6).\nVerifica: a massa é a mesma nos dois sítios; só o peso muda. Se tiveres um dinamómetro na escola, mede o peso e compara.", xp:10},
      {t:"Eclipse de Laranja", d:"Eclipses", f:"Num quarto escuro, usa uma lanterna (Sol), uma laranja (Terra) e uma bola pequena (Lua). Põe-nos alinhados de duas maneiras.\nVerifica: quando a bola pequena está entre a lanterna e a laranja, a sua sombra cai na laranja (eclipse do Sol); quando a laranja está no meio, a bola fica na sombra (eclipse da Lua).", xp:10}
    ],
    resumo:[
      "A <b>rotação</b> da Terra (uma volta em cerca de 24 h) causa a <b>sucessão dos dias e das noites</b>: é dia na metade virada para o Sol.",
      "As <b>estações do ano</b> devem-se à <b>inclinação do eixo da Terra</b> (cerca de 23,4°) durante a translação: no verão do nosso hemisfério, os raios solares chegam mais a pique e os dias são mais longos. Não se devem à distância ao Sol.",
      "As <b>fases da Lua</b> (lua nova, quarto crescente, lua cheia, quarto minguante) resultam de vermos, da Terra, diferentes partes da metade iluminada da Lua. Um ciclo dura cerca de 29,5 dias.",
      "Há <b>eclipse do Sol</b> quando a Lua fica entre o Sol e a Terra (só em lua nova) e <b>eclipse da Lua</b> quando a Terra fica entre o Sol e a Lua (só em lua cheia).",
      "A <b>força gravítica</b> é a força de atração entre corpos com massa. Na Terra, aponta sempre para o <b>centro da Terra</b>: «para baixo» em qualquer lugar do planeta. É ela que nos prende ao chão e mantém a Lua em órbita.",
      "A <b>massa</b> é a quantidade de matéria de um corpo; mede-se em quilogramas (kg) com uma balança e <b>não muda</b> de lugar para lugar. O <b>peso</b> é a força gravítica que atua no corpo; mede-se em newtons (N) com um dinamómetro e <b>depende do lugar</b>: P = m × g (na Terra, g ≈ 9,8 N/kg; na Lua, g ≈ 1,6 N/kg).",
      "O peso de um corpo <b>diminui quando aumenta a distância ao centro da Terra</b> (por exemplo, no cimo de uma montanha alta é ligeiramente menor)."
    ],
    gloss:[
      ["rotação","Movimento da Terra sobre si própria; uma volta em cerca de 24 h."],
      ["translação","Movimento da Terra à volta do Sol; uma volta em cerca de 365 dias."],
      ["fases da Lua","As diferentes formas como vemos a parte iluminada da Lua ao longo de cerca de 29,5 dias."],
      ["eclipse","Quando um astro fica na sombra de outro: eclipse do Sol ou da Lua."],
      ["força gravítica","Força de atração entre corpos com massa; na Terra aponta para o centro do planeta."],
      ["massa","Quantidade de matéria de um corpo; mede-se em kg e não muda de lugar para lugar."],
      ["peso","Força gravítica que atua num corpo; mede-se em newtons (N) e depende do lugar."],
      ["dinamómetro","Instrumento que mede forças, como o peso."]
    ],
    quiz:[
      {q:"Porque há verão e inverno?", opts:["Porque no verão a Terra está mais perto do Sol","Por causa da inclinação do eixo da Terra durante a translação","Por causa da rotação da Terra","Porque o Sol aquece mais no verão"], correct:1, explain:"É a inclinação do eixo: no verão os raios chegam mais a pique e os dias são mais longos. Prova de que não é a distância: quando é verão em Portugal, é inverno na Austrália."},
      {q:"O que causa a sucessão dos dias e das noites?", opts:["A translação da Terra","A rotação da Terra","As fases da Lua","Os eclipses"], correct:1, explain:"A Terra roda sobre si própria em cerca de 24 h; a metade virada para o Sol tem dia."},
      {q:"Um eclipse do Sol acontece quando…", opts:["a Terra fica entre o Sol e a Lua","a Lua fica entre o Sol e a Terra","é lua cheia","o Sol se apaga"], correct:1, explain:"A Lua tapa o Sol (só pode acontecer em lua nova). Quando a Terra fica no meio, é eclipse da Lua, em lua cheia."},
      {q:"Um astronauta tem 70 kg de massa na Terra. Qual é a sua massa na Lua?", opts:["70 kg","11,2 kg","112 N","0 kg"], correct:0, explain:"A massa não muda: 70 kg. O que muda é o peso: na Lua, 70 × 1,6 = 112 N; na Terra, 70 × 9,8 = 686 N."},
      {q:"Qual é o peso, na Terra, de um saco com 5 kg (g = 9,8 N/kg)?", opts:["5 N","49 N","5 kg","14,8 N"], correct:1, explain:"P = m × g = 5 × 9,8 = 49 N. O peso mede-se em newtons, não em kg."},
      {q:"Para onde aponta a força gravítica num brasileiro e num português?", opts:["Para cima no Brasil","Para o centro da Terra, nos dois casos","Para o Sol","Para o Polo Norte"], correct:1, explain:"Em qualquer ponto da Terra, a força gravítica aponta para o centro do planeta: é sempre «para baixo»."},
      {q:"Que instrumento mede o peso?", opts:["Balança","Dinamómetro","Termómetro","Régua"], correct:1, explain:"O peso é uma força e mede-se com um dinamómetro, em newtons. A balança mede a massa, em kg."},
      {q:"O peso de um avião em voo, a 10 km de altitude, comparado com o peso no chão, é…", opts:["um pouco maior","um pouco menor","exatamente zero","o mesmo"], correct:1, explain:"Mais longe do centro da Terra, a força gravítica é um pouco menor, por isso o peso diminui (embora pouco, a 10 km)."}
    ],
    posters:[
      EX7("⚖️ Exemplo 1 — Peso e massa na Terra e na Lua", [
        ["🎯","O que queremos descobrir:","a massa e o peso de uma mochila de 6 kg, na Terra e na Lua."],
        ["🚦","Como começar:","a massa não muda; o peso calcula-se com P = m × g (Terra: 9,8 N/kg; Lua: 1,6 N/kg)."],
        ["👣","Passo a passo:","<br>Massa: 6 kg na Terra e 6 kg na Lua<br>Peso na Terra: 6 × 9,8 = 58,8 N<br>Peso na Lua: 6 × 1,6 = 9,6 N"],
        ["✅","Resultado:","massa 6 kg nos dois sítios; peso 58,8 N na Terra e 9,6 N na Lua."],
        ["🔍","Verificar:","58,8 ÷ 9,6 ≈ 6: na Lua pesa cerca de 6 vezes menos. Erro a evitar: dizer «pesa 6 kg» (o peso mede-se em newtons)."]]),
      EX7("🌓 Exemplo 2 — As fases da Lua", [
        ["🎯","O que queremos descobrir:","porque muda a forma da Lua ao longo do mês."],
        ["🚦","Como começar:","metade da Lua está sempre iluminada pelo Sol; o que muda é quanto dessa metade vemos da Terra."],
        ["👣","Passo a passo:","<br>Lua nova: a Lua está entre a Terra e o Sol → vemos a metade escura<br>Quarto crescente: vemos metade da metade iluminada (em Portugal, o lado direito)<br>Lua cheia: a Terra está entre o Sol e a Lua → vemos a metade iluminada toda<br>Quarto minguante: vemos a outra metade (o lado esquerdo)"],
        ["✅","Resultado:","as fases repetem-se a cada cerca de 29,5 dias."],
        ["🔍","Verificar:","truque para o hemisfério norte: «a Lua é mentirosa» — quando parece um C, está a decrescer (minguante); quando parece um D, está a crescer."]]),
      EX7("🌑 Exemplo 3 — Que eclipse é?", [
        ["🎯","O que queremos descobrir:","que eclipse acontece em cada alinhamento: (a) Sol – Lua – Terra; (b) Sol – Terra – Lua."],
        ["🚦","Como começar:","quem fica no meio faz sombra no terceiro."],
        ["👣","Passo a passo:","<br>(a) a Lua no meio faz sombra na Terra: quem está nessa sombra deixa de ver o Sol → eclipse do Sol (lua nova)<br>(b) a Terra no meio faz sombra na Lua → eclipse da Lua (lua cheia)"],
        ["✅","Resultado:","(a) eclipse do Sol; (b) eclipse da Lua."],
        ["🔍","Verificar:","não há eclipses todos os meses porque a órbita da Lua está um pouco inclinada em relação à da Terra. Nunca olhes para o Sol sem óculos próprios para eclipses."]])
    ],
    compare:{
      left:{title:"🧱 Massa", points:["Quantidade de matéria","Quilograma (kg), com balança","Igual em qualquer lugar"]},
      right:{title:"⬇️ Peso", points:["Força gravítica no corpo","Newton (N), com dinamómetro","Depende do lugar: P = m × g"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (p. 100); caderno de atividades: Ficha global Espaço (p. 29) e Teste 2 (p. 113)"
  },
  {
    id:"q4", num:4, c:"m4", icon:"🧪",
    title:"Misturas e Soluções",
    subtitle:"Materiais, substâncias e misturas, soluções e concentração", pages:"FQ 7 (ASA), II Materiais, 1 «Constituição do mundo material» e 2 «Substâncias e misturas» (pp. 106–145); caderno de atividades, fichas 9 a 12 (pp. 45–52)",
    lead:"Quase tudo à nossa volta é uma mistura: o ar, a água da torneira, o leite, o sumo. Neste mundo aprendes a classificar materiais, a preparar soluções e a calcular a sua concentração em massa.",
    missions:[
      {t:"Detetive de Rótulos", d:"A maior parte dos materiais são misturas", f:"Lê os rótulos de 5 produtos da cozinha (água engarrafada, leite, refrigerante, sal, açúcar).\nPara cada um, escreve se é substância ou mistura e porquê.\nVerifica: se o rótulo tem vários componentes, é uma mistura (a água engarrafada tem sais minerais!). O sal e o açúcar puros são substâncias.", xp:10},
      {t:"Mistura ou Não Mistura?", d:"Miscível e imiscível; homogénea e heterogénea", f:"Em copos transparentes, junta água com: açúcar, areia, azeite, álcool (com um adulto) e sumo.\nRegista: vê-se mais do que um componente? Os líquidos misturam-se?\nVerifica: água + açúcar e água + álcool são homogéneas (miscíveis); água + areia e água + azeite são heterogéneas (o azeite é imiscível com a água).", xp:15},
      {t:"Limonada com Concentração", d:"Preparar uma solução e calcular a concentração", f:"Prepara 500 mL de água com 25 g de açúcar (pesa numa balança de cozinha).\nCalcula a concentração em massa em g/L, como no Exemplo 2.\nVerifica: 25 ÷ 0,5 = 50 g/L. Prova e compara com 500 mL com 50 g: qual é mais concentrada?", xp:15}
    ],
    resumo:[
      "Os <b>materiais</b> podem agrupar-se pelas suas propriedades (origem natural ou artificial, estado físico, dureza…). São <b>recursos limitados</b>: devemos reduzir, reutilizar e reciclar.",
      "Uma <b>substância</b> tem um só componente (ex.: água destilada, sal puro). Uma <b>mistura</b> tem dois ou mais componentes. A maior parte dos materiais são misturas.",
      "Numa <b>mistura homogénea</b> não se distinguem os componentes, nem ao microscópio (ex.: água com açúcar, ar). Numa <b>mistura heterogénea</b> distinguem-se (ex.: água com areia, granito). Há misturas que parecem homogéneas a olho nu mas são heterogéneas ao microscópio, como o leite e o sangue (<b>coloidais</b>).",
      "Dois líquidos são <b>miscíveis</b> se se misturam e formam uma mistura homogénea (água e álcool) e <b>imiscíveis</b> se ficam separados (água e azeite).",
      "Uma <b>solução</b> é uma mistura homogénea. O <b>solvente</b> é o componente em maior quantidade (muitas vezes a água: solução <b>aquosa</b>); o <b>soluto</b> é o que se dissolve.",
      "Uma solução é <b>diluída</b> se tem pouco soluto, <b>concentrada</b> se tem muito, e <b>saturada</b> se já não dissolve mais soluto a essa temperatura.",
      "A <b>concentração em massa</b> é a massa de soluto por volume de solução: <b>Cm = m(soluto) ÷ V(solução)</b>, normalmente em g/L (gramas por litro)."
    ],
    gloss:[
      ["substância","Material com um só componente."],
      ["mistura","Material com dois ou mais componentes."],
      ["mistura homogénea","Mistura em que não se distinguem os componentes, nem ao microscópio."],
      ["mistura heterogénea","Mistura em que se distinguem os componentes."],
      ["miscíveis","Líquidos que se misturam e formam uma mistura homogénea."],
      ["solução","Mistura homogénea de soluto(s) num solvente."],
      ["soluto","Componente que se dissolve numa solução."],
      ["solvente","Componente que dissolve; está em maior quantidade."],
      ["solução saturada","Solução que já não consegue dissolver mais soluto, a uma dada temperatura."],
      ["concentração em massa","Massa de soluto por volume de solução, em g/L."]
    ],
    quiz:[
      {q:"A água engarrafada (com sais minerais) é…", opts:["uma substância","uma mistura homogénea","uma mistura heterogénea","um soluto"], correct:1, explain:"Tem água e sais dissolvidos, que não se distinguem: é uma mistura homogénea (uma solução). Só a água destilada é uma substância."},
      {q:"Água com azeite é uma mistura…", opts:["homogénea, porque são líquidos","heterogénea, porque são imiscíveis","homogénea, porque se misturam bem","que forma uma solução"], correct:1, explain:"O azeite e a água não se misturam: veem-se duas camadas. São imiscíveis e a mistura é heterogénea."},
      {q:"Na água do mar, qual é o solvente?", opts:["O sal","A água","Os peixes","A areia"], correct:1, explain:"A água está em maior quantidade e dissolve os sais: é o solvente. O sal é um dos solutos."},
      {q:"Dissolvem-se 30 g de sal em água até perfazer 0,5 L de solução. Qual é a concentração em massa?", opts:["15 g/L","30 g/L","60 g/L","0,5 g/L"], correct:2, explain:"Cm = m ÷ V = 30 ÷ 0,5 = 60 g/L. O 15 vem de multiplicar em vez de dividir."},
      {q:"Uma solução em que, por mais que se mexa, o açúcar fica no fundo está…", opts:["diluída","concentrada mas não saturada","saturada","heterogénea por natureza"], correct:2, explain:"Já não dissolve mais soluto a essa temperatura: está saturada (o açúcar a mais fica depositado)."},
      {q:"O leite parece homogéneo a olho nu, mas ao microscópio veem-se gotículas de gordura. É…", opts:["uma substância","uma mistura coloidal","uma solução verdadeira","um solvente"], correct:1, explain:"É uma mistura coloidal: parece homogénea a olho nu mas é heterogénea ao microscópio."},
      {q:"Qual é a solução mais concentrada?", opts:["10 g de açúcar em 1 L","10 g de açúcar em 0,5 L","10 g de açúcar em 2 L","Todas iguais"], correct:1, explain:"Mesma massa de soluto em menos volume: 10 ÷ 0,5 = 20 g/L, contra 10 g/L e 5 g/L."},
      {q:"Porque devemos reciclar os materiais?", opts:["Porque são recursos limitados","Porque ficam mais bonitos","Porque é obrigatório só nas escolas","Porque os materiais novos não existem"], correct:0, explain:"Os recursos naturais são limitados; reduzir, reutilizar e reciclar poupa matérias-primas e energia."}
    ],
    posters:[
      EX7("🧂 Exemplo 1 — Classificar materiais", [
        ["🎯","O que queremos descobrir:","classificar: água destilada, ar, granito, sumo de laranja natural, água com açúcar."],
        ["🚦","Como começar:","1.º tem um só componente (substância) ou vários (mistura)? 2.º distinguem-se os componentes?"],
        ["👣","Passo a passo:","<br>Água destilada → substância<br>Ar (azoto, oxigénio, árgon…) → mistura homogénea<br>Granito (veem-se cristais de cores diferentes) → mistura heterogénea<br>Sumo de laranja natural (com polpa) → mistura heterogénea<br>Água com açúcar → mistura homogénea (solução)"],
        ["✅","Resultado:","1 substância, 2 misturas homogéneas e 2 heterogéneas."],
        ["🔍","Verificar:","se consegues ver (a olho nu ou ao microscópio) partes diferentes, é heterogénea."]]),
      EX7("📐 Exemplo 2 — Calcular a concentração em massa", [
        ["🎯","O que queremos descobrir:","a concentração em massa de 20 g de açúcar em 250 mL de solução."],
        ["🚦","Como começar:","Cm = m(soluto) ÷ V(solução). Passa o volume para litros: 250 mL = 0,250 L."],
        ["👣","Passo a passo:","<br>m = 20 g; V = 0,250 L<br>Cm = 20 ÷ 0,250 = 80 g/L"],
        ["✅","Resultado:","Cm = 80 g/L: em cada litro desta solução há 80 g de açúcar."],
        ["🔍","Verificar:","em 1 L (4 vezes 250 mL) havia 4 × 20 = 80 g ✓. Erro a evitar: dividir pelo volume em mL (20 ÷ 250 = 0,08) e escrever g/L."]]),
      EX7("🥄 Exemplo 3 — Preparar uma solução no laboratório", [
        ["🎯","O que queremos descobrir:","como preparar 100 mL de uma solução aquosa de sulfato de cobre com 50 g/L."],
        ["🚦","Como começar:","calcula a massa de soluto: m = Cm × V = 50 × 0,100 = 5 g."],
        ["👣","Passo a passo:","<br>1. Pesar 5 g de soluto numa balança, num gobelé<br>2. Dissolver com um pouco de água, mexendo com a vareta<br>3. Passar para um balão volumétrico de 100 mL<br>4. Completar com água até ao traço e agitar"],
        ["✅","Resultado:","100 mL de solução com 50 g/L."],
        ["🔍","Verificar:","usa bata, óculos e luvas e respeita os símbolos de perigo do rótulo (o sulfato de cobre é nocivo e perigoso para o ambiente)."]])
    ],
    compare:{
      left:{title:"🥛 Mistura homogénea", points:["Não se distinguem componentes","Ex.: água com açúcar, ar","As soluções são homogéneas"]},
      right:{title:"🪨 Mistura heterogénea", points:["Distinguem-se componentes","Ex.: água com areia, granito","Separam-se por decantação, filtração…"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (pp. 117 e 145); caderno de atividades: Teste 3 (p. 117)"
  },
  {
    id:"q5", num:5, c:"m6", icon:"🔥",
    title:"Muda Tudo! Transformações",
    subtitle:"Transformações físicas e químicas, mudanças de estado e reações", pages:"FQ 7 (ASA), II Materiais, 3 «Transformações físicas e químicas» (pp. 146–174); caderno de atividades, fichas 13 a 15 (pp. 53–58)",
    lead:"O gelo derrete, o ferro enferruja, o bolo coze. Umas transformações não criam substâncias novas, outras sim. Neste mundo aprendes a distingui-las, a explicar o ciclo da água e a escrever reações químicas por palavras.",
    missions:[
      {t:"Cozinha-Laboratório", d:"Física ou química?", f:"Observa na cozinha: derreter manteiga, cozer um ovo, dissolver sal, torrar pão, ferver água, o leite azedar.\nClassifica cada uma como transformação física ou química.\nVerifica: aparecem substâncias novas (cor, cheiro, gás, não se volta atrás facilmente)? Então é química.", xp:10},
      {t:"Vulcão de Vinagre", d:"Reagentes e produtos", f:"Com um adulto, junta numa garrafa uma colher de bicarbonato de sódio e um pouco de vinagre. Observa.\nEscreve: quais são os reagentes? Que sinal mostra que se formou uma substância nova?\nVerifica: formou-se um gás (as bolhas são dióxido de carbono): é uma reação química por junção de substâncias.", xp:15},
      {t:"Ciclo da Água num Saco", d:"Mudanças de estado no ciclo da água", f:"Põe um pouco de água num saco de plástico com fecho e cola-o numa janela com sol. Observa durante 2 dias.\nVerifica: a água evapora, condensa nas paredes do saco (gotas) e escorre (precipitação). Desenha e legenda as mudanças de estado.", xp:10}
    ],
    resumo:[
      "Numa <b>transformação física</b> não se formam substâncias novas: muda o estado físico, a forma ou o tamanho (ex.: derreter gelo, dissolver açúcar, partir vidro).",
      "Numa <b>transformação química</b> (ou <b>reação química</b>) formam-se substâncias novas. Sinais: mudança de cor, libertação de gás, formação de um sólido, libertação de luz ou calor, cheiro novo.",
      "Mudanças de estado: <b>fusão</b> (sólido → líquido) e <b>solidificação</b> (líquido → sólido); <b>vaporização</b> (líquido → gasoso), que pode ser <b>evaporação</b> (só à superfície, a qualquer temperatura) ou <b>ebulição</b> (em todo o líquido, a uma temperatura certa); <b>condensação</b> (gasoso → líquido).",
      "No <b>ciclo da água</b>: a água evapora dos oceanos, rios e plantas; o vapor condensa e forma nuvens; cai como chuva ou neve (precipitação); e volta aos rios, ao mar e ao subsolo. Também há fusão da neve e do gelo.",
      "As transformações químicas podem ocorrer pela <b>junção de substâncias</b> (vinagre + bicarbonato), por <b>ação mecânica</b> (riscar um fósforo), pelo <b>calor</b> (cozer um bolo, queimar papel), pela <b>luz</b> (fotossíntese) e pela <b>eletricidade</b> (eletrólise da água).",
      "Numa reação química, as substâncias iniciais são os <b>reagentes</b> e as que se formam são os <b>produtos</b>. Escreve-se por palavras: reagentes → produtos (ex.: carbono + oxigénio → dióxido de carbono).",
      "A <b>síntese química</b> permite produzir novos materiais (medicamentos, plásticos, tecidos) de forma mais económica e ecológica."
    ],
    gloss:[
      ["transformação física","Transformação em que não se formam substâncias novas."],
      ["transformação química","Transformação em que se formam substâncias novas; também se chama reação química."],
      ["fusão","Passagem do estado sólido ao líquido."],
      ["solidificação","Passagem do estado líquido ao sólido."],
      ["evaporação","Vaporização lenta, só à superfície do líquido, a qualquer temperatura."],
      ["ebulição","Vaporização em todo o líquido, a uma temperatura bem definida."],
      ["condensação","Passagem do estado gasoso ao líquido."],
      ["reagentes","Substâncias que existem no início de uma reação química."],
      ["produtos","Substâncias novas que se formam numa reação química."]
    ],
    quiz:[
      {q:"Qual destas é uma transformação química?", opts:["Gelo a derreter","Açúcar a dissolver-se no chá","Ferro a enferrujar","Água a ferver"], correct:2, explain:"A ferrugem é uma substância nova (óxido de ferro): reação química. As outras são físicas: não aparecem substâncias novas."},
      {q:"As gotas de água na parte de fora de um copo com gelo resultam de…", opts:["evaporação","condensação","fusão","ebulição"], correct:1, explain:"O vapor de água do ar arrefece em contacto com o copo frio e passa a líquido: condensação. (Não é água a atravessar o vidro!)"},
      {q:"Qual é a diferença entre evaporação e ebulição?", opts:["Não há diferença","A evaporação dá-se só à superfície e a qualquer temperatura; a ebulição em todo o líquido e a uma temperatura certa","A ebulição dá-se a qualquer temperatura","A evaporação só acontece a 100 °C"], correct:1, explain:"A roupa seca ao sol por evaporação; a água ferve a 100 °C (ao nível do mar) por ebulição, com bolhas em todo o líquido."},
      {q:"Em «carbono + oxigénio → dióxido de carbono», quais são os reagentes?", opts:["Dióxido de carbono","Carbono e oxigénio","Só o oxigénio","Todos"], correct:1, explain:"Os reagentes estão antes da seta; os produtos depois. Aqui forma-se um produto: dióxido de carbono."},
      {q:"A eletrólise da água (água → hidrogénio + oxigénio) é uma reação provocada…", opts:["pelo calor","pela luz","pela eletricidade","por ação mecânica"], correct:2, explain:"A corrente elétrica decompõe a água em hidrogénio e oxigénio."},
      {q:"A fotossíntese é uma reação química provocada…", opts:["pela luz","pela eletricidade","pela junção de metais","pelo frio"], correct:0, explain:"As plantas usam a luz para transformar água e dióxido de carbono em glicose e oxigénio."},
      {q:"No ciclo da água, a formação das nuvens resulta de…", opts:["evaporação","condensação do vapor de água","fusão","solidificação"], correct:1, explain:"O vapor de água sobe, arrefece e condensa em gotículas: formam-se as nuvens."},
      {q:"Qual é um sinal de que ocorreu uma reação química?", opts:["A forma do objeto mudou","Libertou-se um gás e o cheiro mudou","O objeto partiu-se","Aqueceu e voltou ao mesmo"], correct:1, explain:"Gás novo, mudança de cor ou cheiro, luz ou formação de sólido indicam substâncias novas."}
    ],
    posters:[
      EX7("🔍 Exemplo 1 — Física ou química?", [
        ["🎯","O que queremos descobrir:","classificar: (a) cortar papel; (b) queimar papel; (c) fazer gelo; (d) assar uma castanha."],
        ["🚦","Como começar:","pergunta-te: formou-se uma substância nova?"],
        ["👣","Passo a passo:","<br>(a) papel cortado continua a ser papel → física<br>(b) aparecem cinzas, fumo, luz e calor → química<br>(c) a água passa a sólido, mas continua a ser água → física<br>(d) muda a cor, o cheiro e o sabor → química"],
        ["✅","Resultado:","(a) e (c) físicas; (b) e (d) químicas."],
        ["🔍","Verificar:","nas físicas, a substância é a mesma; nas químicas, há substâncias novas (e é difícil voltar atrás)."]]),
      EX7("💧 Exemplo 2 — As mudanças de estado do ciclo da água", [
        ["🎯","O que queremos descobrir:","que mudança de estado acontece em cada etapa do ciclo da água."],
        ["🚦","Como começar:","identifica o estado inicial e o final."],
        ["👣","Passo a passo:","<br>Água do mar → vapor: evaporação (líquido → gasoso)<br>Vapor → gotículas das nuvens: condensação (gasoso → líquido)<br>Gotículas → granizo ou neve nas nuvens frias: solidificação<br>Neve das montanhas → água dos rios: fusão (sólido → líquido)"],
        ["✅","Resultado:","evaporação, condensação, solidificação e fusão."],
        ["🔍","Verificar:","o Sol fornece a energia do ciclo. A água não se perde: muda de estado e de lugar."]]),
      EX7("✍️ Exemplo 3 — Escrever uma reação por palavras", [
        ["🎯","O que queremos descobrir:","escrever a reação da combustão do magnésio, que arde com uma luz branca intensa e forma um pó branco (óxido de magnésio)."],
        ["🚦","Como começar:","reagentes à esquerda, seta, produtos à direita; separa as substâncias com «+»."],
        ["👣","Passo a passo:","<br>Reagentes: magnésio e oxigénio (do ar)<br>Produto: óxido de magnésio<br>magnésio + oxigénio → óxido de magnésio"],
        ["✅","Resultado:","magnésio + oxigénio → óxido de magnésio."],
        ["🔍","Verificar:","sinais de reação: luz intensa, calor e uma substância nova (pó branco). Nunca olhes diretamente para o magnésio a arder."]])
    ],
    compare:{
      left:{title:"🧊 Transformação física", points:["Não há substâncias novas","Ex.: fundir, dissolver, cortar","Muitas vezes reversível"]},
      right:{title:"⚗️ Transformação química", points:["Formam-se substâncias novas","Ex.: arder, enferrujar, cozinhar","Reagentes → produtos"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (p. 174)"
  },
  {
    id:"q6", num:6, c:"m7", icon:"🌡️",
    title:"A Impressão Digital dos Materiais",
    subtitle:"Pontos de fusão e ebulição, massa volúmica e testes químicos", pages:"FQ 7 (ASA), II Materiais, 4 «Propriedades físicas e químicas dos materiais» (pp. 176–200); caderno de atividades, fichas 16 a 18 (pp. 59–64)",
    lead:"Cada substância tem uma «impressão digital»: o ponto de fusão, o ponto de ebulição e a massa volúmica. Neste mundo aprendes a ler gráficos temperatura-tempo, a calcular a massa volúmica e a fazer testes químicos simples.",
    missions:[
      {t:"Gelo ao Lume", d:"Gráfico temperatura-tempo", f:"Com um adulto, aquece gelo num tacho com um termómetro de cozinha. Regista a temperatura de minuto a minuto até a água ferver.\nFaz o gráfico temperatura (°C) em função do tempo (min).\nVerifica: há dois patamares: perto de 0 °C (fusão) e perto de 100 °C (ebulição). Durante os patamares a temperatura não sobe.", xp:15},
      {t:"Afunda ou Flutua?", d:"Massa volúmica", f:"Num copo com água, experimenta: uma rolha, uma moeda, um cubo de gelo, um pouco de azeite, uma uva.\nPrevê antes de experimentar e regista.\nVerifica: flutuam os materiais com massa volúmica menor do que a da água (1,0 g/cm³), como o gelo (0,92) e o azeite (0,92).", xp:10},
      {t:"Medir a Massa Volúmica", d:"Técnica laboratorial", f:"Pesa um objeto pequeno (por exemplo, uma pedra) numa balança. Mede o volume pela água deslocada num copo graduado.\nCalcula ρ = m ÷ V, como no Exemplo 2.\nVerifica: as unidades (g/cm³ ou g/mL) e compara com uma tabela de massas volúmicas.", xp:15}
    ],
    resumo:[
      "A uma dada pressão, uma <b>substância</b> funde e entra em ebulição a temperaturas <b>bem definidas</b>: o <b>ponto de fusão</b> e o <b>ponto de ebulição</b>. A água pura, à pressão normal, funde a 0 °C e ferve a 100 °C.",
      "Num <b>gráfico temperatura-tempo</b> de uma substância a aquecer, as mudanças de estado aparecem como <b>patamares</b>: a temperatura fica constante enquanto a substância muda de estado. Numa <b>mistura</b> não há patamares bem definidos.",
      "Comparando a temperatura com os pontos de fusão e de ebulição, sabe-se o <b>estado físico</b>: abaixo do ponto de fusão é sólido; entre os dois, líquido; acima do ponto de ebulição, gasoso.",
      "Quanto mais baixo o ponto de ebulição, mais <b>volátil</b> é a substância (evapora com facilidade, como o álcool, que ferve a 78 °C).",
      "A <b>massa volúmica</b> é a massa por unidade de volume: <b>ρ = m ÷ V</b> (em g/cm³, g/mL ou kg/m³). Água: 1,0 g/cm³; gelo: 0,92; alumínio: 2,7; ferro: 7,9; ouro: 19,3. Um material flutua num líquido se tiver menor massa volúmica do que ele.",
      "O <b>grau de pureza</b> de uma substância pode ser verificado comparando os seus pontos de fusão, de ebulição e a massa volúmica com os valores tabelados.",
      "<b>Testes químicos</b> simples: a <b>água</b> torna azul o sulfato de cobre anidro (branco); o <b>amido</b> fica azul-escuro com solução de iodo; a <b>glicose</b> dá um precipitado vermelho-tijolo com o reagente de Fehling, a quente; o <b>dióxido de carbono</b> turva a água de cal; o <b>oxigénio</b> reacende uma pequena tala de madeira em brasa."
    ],
    gloss:[
      ["ponto de fusão","Temperatura a que uma substância passa de sólida a líquida (a uma dada pressão)."],
      ["ponto de ebulição","Temperatura a que uma substância entra em ebulição (a uma dada pressão)."],
      ["patamar","Parte horizontal do gráfico temperatura-tempo, durante uma mudança de estado."],
      ["volátil","Substância que evapora com facilidade; tem ponto de ebulição baixo."],
      ["massa volúmica","Massa por unidade de volume: ρ = m ÷ V."],
      ["grau de pureza","Quanto uma substância está livre de outras; vê-se pelas propriedades físicas."],
      ["teste químico","Reação que mostra a presença de uma substância (ex.: água de cal para o dióxido de carbono)."]
    ],
    quiz:[
      {q:"Num gráfico temperatura-tempo da água a aquecer, o que acontece durante a ebulição?", opts:["A temperatura sobe muito depressa","A temperatura mantém-se constante (patamar)","A temperatura desce","O gráfico acaba"], correct:1, explain:"Enquanto muda de estado, a substância pura mantém a temperatura constante: aparece um patamar (100 °C para a água, à pressão normal)."},
      {q:"O etanol funde a −114 °C e ferve a 78 °C. A 25 °C está…", opts:["sólido","líquido","gasoso","impossível saber"], correct:1, explain:"25 °C está entre o ponto de fusão (−114 °C) e o de ebulição (78 °C): é líquido."},
      {q:"Um objeto tem 54 g e 20 cm³. Qual é a massa volúmica?", opts:["1080 g/cm³","2,7 g/cm³","0,37 g/cm³","74 g/cm³"], correct:1, explain:"ρ = m ÷ V = 54 ÷ 20 = 2,7 g/cm³ (é o valor do alumínio)."},
      {q:"Porque é que o gelo flutua na água?", opts:["Porque é sólido","Porque tem menor massa volúmica do que a água líquida","Porque é mais leve em qualquer quantidade","Porque tem ar dentro, sempre"], correct:1, explain:"O gelo tem cerca de 0,92 g/cm³ e a água 1,0 g/cm³: o menos denso flutua. Um icebergue enorme também flutua, por isso não é questão de ser «leve»."},
      {q:"Que teste deteta o dióxido de carbono?", opts:["Água de cal, que fica turva","Solução de iodo, que fica azul-escura","Sulfato de cobre anidro, que fica azul","Uma tala em brasa, que reacende"], correct:0, explain:"O CO₂ turva a água de cal. O iodo deteta amido; o sulfato de cobre anidro, água; a tala em brasa, oxigénio."},
      {q:"Uma gota de iodo num pedaço de batata fica azul-escura. A batata tem…", opts:["glicose","amido","oxigénio","água destilada"], correct:1, explain:"A solução de iodo fica azul-escura (quase negra) na presença de amido."},
      {q:"Qual destas substâncias é mais volátil?", opts:["Água (ebulição a 100 °C)","Álcool etílico (ebulição a 78 °C)","Azeite (ebulição acima de 300 °C)","Mercúrio (ebulição a 357 °C)"], correct:1, explain:"Menor ponto de ebulição → evapora com mais facilidade → mais volátil."},
      {q:"Uma amostra de «água» ferve a 103 °C à pressão normal. O que se conclui?", opts:["É água pura","Não é água pura: tem substâncias dissolvidas","O termómetro está sempre certo","A água ferve sempre a 103 °C"], correct:1, explain:"A água pura ferve a 100 °C à pressão normal. Um valor diferente indica que é uma mistura (por exemplo, água com sal)."}
    ],
    posters:[
      {title:"📈 Exemplo 1 — Ler um gráfico temperatura-tempo", svg:(function(){
        // aquecimento de gelo a partir de −20 °C: patamar a 0 °C (min 2–6) e a 100 °C (min 16–22); x: 20+12*t, y: 150−(T+20)
        const P = [[0,-20],[2,0],[6,0],[16,100],[22,100],[24,120]], X = t => 30+t*11, Y = T => 150-(T+20);
        let s = '<svg class="poster-svg" viewBox="0 0 330 185" style="max-width:340px;margin:0 auto" role="img" aria-label="Gráfico da temperatura da água a aquecer, a partir de gelo a menos 20 graus: sobe até 0 graus, fica constante entre os minutos 2 e 6 (fusão), sobe até 100 graus ao minuto 16, fica constante até ao minuto 22 (ebulição) e volta a subir.">';
        s += '<g stroke="currentColor" stroke-width="0.6" opacity="0.25">'+[0,50,100].map(T => '<line x1="30" y1="'+Y(T)+'" x2="300" y2="'+Y(T)+'"/>').join("")+'</g>';
        s += '<g stroke="currentColor" stroke-width="2"><line x1="30" y1="170" x2="305" y2="170"/><line x1="30" y1="170" x2="30" y2="10"/></g>';
        s += '<polyline points="'+P.map(p => X(p[0])+','+Y(p[1])).join(" ")+'" fill="none" stroke="var(--wc)" stroke-width="3" stroke-linejoin="round"/>';
        s += '<g font-family="Lexend, sans-serif" font-size="10" text-anchor="end">'+[-20,0,50,100].map(T => '<text x="26" y="'+(Y(T)+3.5)+'">'+T+'</text>').join("")+'</g>';
        s += '<g font-family="Lexend, sans-serif" font-size="10" text-anchor="middle">'+[0,4,8,12,16,20,24].map(t => '<text x="'+X(t)+'" y="181">'+t+'</text>').join("")+'</g>';
        s += '<g font-family="Lexend, sans-serif" font-size="10" font-weight="700"><text x="'+X(4)+'" y="'+(Y(0)-6)+'" text-anchor="middle">fusão</text><text x="'+X(19)+'" y="'+(Y(100)-6)+'" text-anchor="middle">ebulição</text><text x="34" y="12">T (°C)</text><text x="305" y="166" text-anchor="end">t (min)</text></g></svg>';
        return s+'<ul class="wheel-legend">'+
          L7("🎯","O que queremos descobrir:","o que mostra o gráfico do aquecimento de gelo a −20 °C até a água ferver.")+
          L7("🚦","Como começar:","procura as partes horizontais (patamares): são as mudanças de estado.")+
          L7("👣","Passo a passo:","<br>0–2 min: o gelo aquece de −20 °C a 0 °C (sólido)<br>2–6 min: patamar a 0 °C → fusão (sólido + líquido)<br>6–16 min: a água aquece de 0 °C a 100 °C (líquido)<br>16–22 min: patamar a 100 °C → ebulição (líquido + gasoso)<br>depois: o vapor aquece (gasoso)")+
          L7("✅","Resultado:","ponto de fusão 0 °C e ponto de ebulição 100 °C: é água pura, à pressão normal.")+
          L7("🔍","Verificar:","durante os patamares o aquecimento continua, mas a energia é usada para mudar de estado, por isso a temperatura não sobe.")+'</ul>';
      })()},
      EX7("⚖️ Exemplo 2 — Que metal é?", [
        ["🎯","O que queremos descobrir:","que metal é um cubo com 2 cm de aresta e 21,6 g de massa."],
        ["🚦","Como começar:","calcula o volume (V = aresta × aresta × aresta) e depois ρ = m ÷ V. Compara com a tabela."],
        ["👣","Passo a passo:","<br>V = 2 × 2 × 2 = 8 cm³<br>ρ = 21,6 ÷ 8 = 2,7 g/cm³<br>Tabela: alumínio 2,7; ferro 7,9; cobre 8,9; ouro 19,3"],
        ["✅","Resultado:","ρ = 2,7 g/cm³: é alumínio."],
        ["🔍","Verificar:","2,7 × 8 = 21,6 g ✓. Num sólido irregular, mede-se o volume pela água deslocada numa proveta."]]),
      EX7("🧫 Exemplo 3 — Qual é o teste?", [
        ["🎯","O que queremos descobrir:","como verificar: (a) se um pão tem amido; (b) se o ar que expiramos tem dióxido de carbono."],
        ["🚦","Como começar:","cada substância tem um teste próprio."],
        ["👣","Passo a passo:","<br>(a) pinga solução de iodo no pão: se ficar azul-escura, tem amido<br>(b) sopra com uma palhinha para um copo com água de cal: se ficar turva, o ar expirado tem dióxido de carbono"],
        ["✅","Resultado:","(a) teste do iodo; (b) teste da água de cal."],
        ["🔍","Verificar:","faz um «controlo»: pinga iodo em papel (sem amido) e compara. Usa óculos e luvas: o iodo mancha e irrita."]])
    ],
    compare:{
      left:{title:"🌡️ Pontos de fusão e ebulição", points:["Temperaturas certas para cada substância","Patamares no gráfico T-t","Dizem o estado físico"]},
      right:{title:"🧱 Massa volúmica", points:["ρ = m ÷ V","Ex.: água 1,0 g/cm³","Diz se flutua ou afunda"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (p. 200); caderno de atividades: Teste 4 (p. 121)"
  },
  {
    id:"q7", num:7, c:"m8", icon:"🔬",
    title:"Separar para Conhecer",
    subtitle:"Técnicas de separação de misturas e tratamento de água", pages:"FQ 7 (ASA), II Materiais, 5 «Separação das substâncias de uma mistura» (pp. 200–217); caderno de atividades, fichas 19 e 20 (pp. 65–68)",
    lead:"Como se tira o sal da água do mar ou a areia da água? Neste mundo aprendes as técnicas para separar os componentes das misturas e como se trata a água que bebemos.",
    missions:[
      {t:"Areia, Sal e Água", d:"Separar uma mistura em três passos", f:"Mistura areia e sal num copo e junta água. Mexe. Filtra com um filtro de café. Deixa o líquido filtrado num prato ao sol.\nVerifica: a areia fica no filtro (filtração); depois de dias, aparecem cristais de sal no prato (evaporação/cristalização).", xp:15},
      {t:"Cromatografia de Marcadores", d:"Separar corantes", f:"Numa tira de papel de filtro, faz uma pinta com um marcador preto solúvel em água, a 2 cm do fundo. Mergulha só a ponta da tira em água (sem tocar na pinta).\nVerifica: a tinta «sobe» e separa-se em várias cores: o preto era uma mistura de corantes.", xp:15},
      {t:"De Onde Vem a Água da Torneira?", d:"Tratamento de água", f:"Pesquisa no site da empresa de águas do teu concelho como se trata a água. Faz um esquema das etapas.\nVerifica: o teu esquema tem pelo menos captação, decantação, filtração e desinfeção, e explica porque é importante tratar também as águas residuais (efluentes).", xp:10}
    ],
    resumo:[
      "Para separar <b>misturas heterogéneas</b>: <b>catação</b> (à mão ou com pinça), <b>peneiração</b> (sólidos com grãos de tamanhos diferentes), <b>separação magnética</b> (com um íman, para o ferro), <b>decantação</b> (deixar depositar o sólido, ou separar líquidos imiscíveis com uma ampola de decantação), <b>filtração</b> (um filtro retém o sólido) e <b>centrifugação</b> (acelera a deposição).",
      "Para separar <b>misturas homogéneas</b>: <b>evaporação/cristalização</b> (o solvente evapora e o soluto sólido fica), <b>destilação simples</b> (o solvente evapora e condensa noutro recipiente; recupera-se o líquido) e <b>cromatografia</b> (separa corantes que se deslocam a velocidades diferentes num papel).",
      "Muitas vezes é preciso <b>combinar técnicas</b>, pela ordem certa (ex.: areia + sal + água: filtração e depois evaporação).",
      "Numa <b>estação de tratamento de água (ETA)</b>, a água passa por: captação, gradagem (retirar objetos grandes), coagulação e floculação, decantação, filtração e desinfeção (com cloro ou ozono). Depois segue para as casas.",
      "As <b>águas residuais</b> (efluentes) são tratadas numa ETAR antes de voltarem aos rios e ao mar, para proteger os ecossistemas e a saúde."
    ],
    gloss:[
      ["decantação","Separação por deposição de um sólido, ou de líquidos imiscíveis numa ampola."],
      ["filtração","Separação de um sólido de um líquido com um filtro."],
      ["separação magnética","Separação de materiais atraídos por um íman (ex.: ferro)."],
      ["evaporação","Separação do soluto sólido de uma solução, deixando o solvente evaporar."],
      ["destilação simples","Separação em que o líquido evapora e volta a condensar noutro recipiente."],
      ["cromatografia","Separação de corantes que se deslocam a velocidades diferentes num papel."],
      ["ETA","Estação de Tratamento de Água, onde a água fica própria para consumo."],
      ["ETAR","Estação de Tratamento de Águas Residuais."]
    ],
    quiz:[
      {q:"Que técnica separa limalha de ferro de areia?", opts:["Filtração","Separação magnética","Destilação","Cromatografia"], correct:1, explain:"O ferro é atraído pelo íman; a areia não."},
      {q:"Como se separam água e azeite?", opts:["Filtração","Decantação com ampola de decantação","Evaporação","Peneiração"], correct:1, explain:"São imiscíveis: na ampola formam duas camadas (o azeite fica por cima) e abre-se a torneira para escoar a água."},
      {q:"Para obter sal a partir de água salgada, usa-se…", opts:["filtração","evaporação/cristalização","separação magnética","catação"], correct:1, explain:"O sal está dissolvido (mistura homogénea): o filtro não o retém. Evapora-se a água e o sal fica."},
      {q:"Para obter água pura (o líquido) a partir de água salgada, usa-se…", opts:["evaporação","destilação simples","filtração","decantação"], correct:1, explain:"Na destilação, a água evapora e condensa noutro recipiente: recupera-se o líquido puro. Na evaporação simples, a água perde-se."},
      {q:"Areia + sal + água: qual é a ordem correta?", opts:["Evaporação e depois filtração","Filtração e depois evaporação","Só filtração","Só evaporação"], correct:1, explain:"Primeiro filtra-se (a areia fica no filtro); depois evapora-se o líquido filtrado (fica o sal). Ao contrário, sal e areia ficariam juntos."},
      {q:"Que técnica mostra que a tinta preta de um marcador é uma mistura de cores?", opts:["Cromatografia","Decantação","Filtração","Centrifugação"], correct:0, explain:"Na cromatografia, cada corante sobe no papel a uma velocidade diferente e separam-se as cores."},
      {q:"Qual é a última etapa antes de a água seguir para as torneiras, numa ETA?", opts:["Captação","Gradagem","Desinfeção","Decantação"], correct:2, explain:"A desinfeção (por exemplo, com cloro) elimina microrganismos e protege a água até às casas."},
      {q:"Porque se tratam as águas residuais numa ETAR?", opts:["Para as poder vender","Para proteger os ecossistemas e a saúde antes de voltarem aos rios e ao mar","Porque é mais barato não tratar","Para aquecer a água"], correct:1, explain:"Sem tratamento, os efluentes poluiriam rios e mares, prejudicando os seres vivos e a saúde pública."}
    ],
    posters:[
      EX7("🧂 Exemplo 1 — Separar areia, sal e água", [
        ["🎯","O que queremos descobrir:","como obter separadamente a areia e o sal de uma mistura de areia, sal e água."],
        ["🚦","Como começar:","a areia não se dissolve (heterogénea); o sal está dissolvido (homogénea)."],
        ["👣","Passo a passo:","<br>1. Filtração: a areia fica no papel de filtro; passa a água salgada (o filtrado)<br>2. Evaporação/cristalização: aquece-se (ou deixa-se ao sol) o filtrado; a água evapora e ficam cristais de sal"],
        ["✅","Resultado:","areia no filtro e sal no recipiente da evaporação."],
        ["🔍","Verificar:","se quisesses também recuperar a água, fazias destilação em vez de evaporação."]]),
      EX7("🧪 Exemplo 2 — Escolher a técnica", [
        ["🎯","O que queremos descobrir:","a técnica para: (a) feijão e arroz; (b) água e areia; (c) água e álcool; (d) corantes de um sumo."],
        ["🚦","Como começar:","1.º a mistura é homogénea ou heterogénea? 2.º em que diferem os componentes (tamanho, estado, magnetismo, ponto de ebulição)?"],
        ["👣","Passo a passo:","<br>(a) grãos grandes e visíveis → catação ou peneiração<br>(b) sólido no líquido → decantação e/ou filtração<br>(c) líquidos miscíveis com pontos de ebulição diferentes (78 °C e 100 °C) → destilação (fracionada, no laboratório)<br>(d) corantes dissolvidos → cromatografia"],
        ["✅","Resultado:","(a) catação/peneiração; (b) decantação/filtração; (c) destilação; (d) cromatografia."],
        ["🔍","Verificar:","a filtração não separa nada que esteja dissolvido: o filtrado continua a ser a mesma solução."]])
    ],
    compare:{
      left:{title:"🪨 Separar heterogéneas", points:["Catação, peneiração, íman","Decantação, filtração","Centrifugação"]},
      right:{title:"💧 Separar homogéneas", points:["Evaporação/cristalização","Destilação simples","Cromatografia"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (p. 217); caderno de atividades: Ficha global Misturas (p. 69)"
  },
  {
    id:"q8", num:8, c:"m5", icon:"⚡",
    title:"Energia em Movimento",
    subtitle:"Fontes e recetores, transferências de energia, calor e temperatura", pages:"FQ 7 (ASA), III Energia, 1 «Fontes de energia e transferências de energia» (pp. 220–245); caderno de atividades, fichas 21 a 23",
    lead:"A energia está em tudo o que acontece: o Sol aquece-te, a comida dá-te força, a tomada liga o computador. Neste mundo descobres de onde vem a energia, como passa de um sistema para outro e a diferença entre calor e temperatura.",
    missions:[
      {t:"Caça às Transferências", d:"Fonte e recetor", f:"Em casa, encontra 5 situações em que há transferência de energia (fogão e tacho, Sol e roupa no estendal, pilha e lanterna…).\nPara cada uma, indica a fonte, o recetor e o sentido da transferência (com uma seta).\nVerifica: a energia vai sempre da fonte para o recetor, e não «desaparece».", xp:10},
      {t:"Condução, Convecção, Radiação", d:"Processos de transferência de energia", f:"Encontra um exemplo de cada processo em casa: uma colher de metal num chá quente, água a ferver num tacho, o calor de uma lareira à distância.\nVerifica: condução precisa de contacto (sólidos); convecção acontece em líquidos e gases (correntes); radiação não precisa de meio (é assim que a energia do Sol chega até nós).", xp:10},
      {t:"Auditoria de Energia em Casa", d:"Utilização racional da energia", f:"Faz uma lista de 5 hábitos que poupam energia em casa e calcula quantas lâmpadas ficam acesas sem ninguém nas divisões, durante uma tarde.\nVerifica: cada hábito tem uma razão (ex.: janelas com vidro duplo diminuem as perdas por condução).", xp:15}
    ],
    resumo:[
      "Um <b>sistema</b> que fornece energia é uma <b>fonte</b>; o que a recebe é um <b>recetor</b>. A energia transfere-se da fonte para o recetor e, no total, <b>conserva-se</b>: não se cria nem se perde, transfere-se e transforma-se.",
      "A energia pode transferir-se por <b>condução</b> (por contacto, sobretudo nos sólidos: uma colher que aquece no chá), por <b>convecção</b> (em líquidos e gases, por correntes: a água a aquecer num tacho, o ar quente que sobe) e por <b>radiação</b> (sem precisar de meio material: a energia do Sol chega à Terra através do espaço vazio).",
      "Os <b>bons condutores</b> (metais) transferem facilmente a energia; os <b>isoladores</b> (madeira, plástico, lã, ar parado, esferovite) dificultam a transferência. Por isso os tachos têm cabos de plástico ou madeira.",
      "A <b>temperatura</b> indica quão quente ou frio está um corpo e mede-se em graus Celsius (°C) com um termómetro. O <b>calor</b> é a energia transferida de um corpo a temperatura mais alta para um corpo a temperatura mais baixa, até ficarem à mesma temperatura (equilíbrio térmico).",
      "As <b>fontes de energia renováveis</b> renovam-se rapidamente na natureza: solar, eólica (vento), hídrica (água dos rios), das ondas e marés, geotérmica e biomassa. As <b>não renováveis</b> esgotam-se: petróleo, carvão, gás natural (combustíveis fósseis) e urânio (nuclear).",
      "Os combustíveis fósseis libertam dióxido de carbono ao queimar e contribuem para as alterações climáticas. As renováveis são menos poluentes, mas também têm desvantagens (dependem do tempo, ocupam espaço, afetam paisagens e animais). A <b>utilização racional da energia</b> é essencial para a sustentabilidade."
    ],
    gloss:[
      ["fonte de energia","Sistema que fornece energia."],
      ["recetor de energia","Sistema que recebe energia."],
      ["condução","Transferência de energia por contacto, sobretudo nos sólidos."],
      ["convecção","Transferência de energia em líquidos e gases, através de correntes."],
      ["radiação","Transferência de energia sem necessidade de meio material, como a energia do Sol."],
      ["temperatura","Indica quão quente ou frio está um corpo; mede-se em °C com um termómetro."],
      ["calor","Energia transferida de um corpo mais quente para um mais frio."],
      ["energia renovável","Energia de fontes que se renovam rapidamente, como o Sol e o vento."],
      ["isolador térmico","Material que dificulta a transferência de energia, como a lã ou a esferovite."]
    ],
    quiz:[
      {q:"Num fogão a aquecer um tacho, qual é a fonte de energia?", opts:["O tacho","O fogão","A água","O ar da cozinha"], correct:1, explain:"O fogão fornece energia (fonte) ao tacho e à água (recetores)."},
      {q:"Como chega a energia do Sol à Terra?", opts:["Por condução","Por convecção","Por radiação","Não chega"], correct:2, explain:"Entre o Sol e a Terra há espaço praticamente vazio; a radiação não precisa de meio material."},
      {q:"Porque é que os tachos têm cabos de madeira ou plástico?", opts:["Por estética","Porque são isoladores e dificultam a condução da energia até à mão","Porque são bons condutores","Para o tacho aquecer mais depressa"], correct:1, explain:"Madeira e plástico são maus condutores (isoladores): o cabo não aquece tanto como o metal."},
      {q:"Qual destas fontes de energia é não renovável?", opts:["Vento","Sol","Gás natural","Ondas do mar"], correct:2, explain:"O gás natural é um combustível fóssil: demorou milhões de anos a formar-se e esgota-se."},
      {q:"Qual é a diferença entre calor e temperatura?", opts:["São a mesma coisa","A temperatura indica quão quente está um corpo; o calor é a energia que passa do mais quente para o mais frio","O calor mede-se com termómetro","A temperatura é uma forma de energia"], correct:1, explain:"Um corpo «tem» temperatura; o calor é energia em trânsito, que só existe enquanto há diferença de temperatura."},
      {q:"Num tacho com água ao lume, a água de baixo aquece, sobe, e a mais fria desce. Que processo é?", opts:["Condução","Convecção","Radiação","Isolamento"], correct:1, explain:"São correntes de convecção, típicas dos líquidos e gases."},
      {q:"Um chá quente arrefece numa sala. Que acontece à energia?", opts:["Desaparece","Transfere-se do chá para o ar e a mesa, até ficarem à mesma temperatura","Transforma-se em frio","Fica guardada no chá"], correct:1, explain:"A energia conserva-se: passa do chá (mais quente) para o ambiente (mais frio) até ao equilíbrio térmico."},
      {q:"Qual é uma desvantagem da energia eólica?", opts:["Liberta muito dióxido de carbono","Depende de haver vento e pode afetar aves e paisagens","Esgota-se rapidamente","É uma fonte não renovável"], correct:1, explain:"É renovável e pouco poluente, mas depende do vento e os aerogeradores afetam paisagens e aves."}
    ],
    posters:[
      EX7("➡️ Exemplo 1 — Fonte, recetor e sentido", [
        ["🎯","O que queremos descobrir:","a fonte, o recetor e o sentido da transferência de energia em: (a) painel solar; (b) uma bebida fria que aquece ao sol."],
        ["🚦","Como começar:","a energia vai de quem a fornece (fonte) para quem a recebe (recetor)."],
        ["👣","Passo a passo:","<br>(a) Sol (fonte) → painel solar (recetor), por radiação; o painel é depois fonte para os aparelhos da casa<br>(b) Sol e ar (fontes, mais quentes) → bebida (recetor, mais fria)"],
        ["✅","Resultado:","(a) Sol → painel; (b) Sol e ar → bebida."],
        ["🔍","Verificar:","a energia passa sempre do corpo a temperatura mais alta para o de temperatura mais baixa. Um sistema pode ser recetor e depois fonte."]]),
      EX7("🔥 Exemplo 2 — Condução, convecção ou radiação?", [
        ["🎯","O que queremos descobrir:","o processo em: (a) aquecer as mãos junto de uma fogueira; (b) a pega de metal de um tacho que aquece; (c) o ar quente de um aquecedor que sobe e aquece o quarto."],
        ["🚦","Como começar:","há contacto (condução)? Há um líquido ou gás em movimento (convecção)? A energia chega à distância, sem contacto (radiação)?"],
        ["👣","Passo a passo:","<br>(a) sem tocar no fogo → radiação<br>(b) energia passa pelo metal → condução<br>(c) correntes de ar quente que sobe e frio que desce → convecção"],
        ["✅","Resultado:","(a) radiação; (b) condução; (c) convecção."],
        ["🔍","Verificar:","por isso os aquecedores ficam junto ao chão e os aparelhos de ar condicionado ficam no alto: o ar quente sobe e o frio desce."]]),
      EX7("🌍 Exemplo 3 — Renovável ou não renovável?", [
        ["🎯","O que queremos descobrir:","classificar e comparar: carvão, vento, Sol, petróleo, biomassa, urânio."],
        ["🚦","Como começar:","renova-se rapidamente na natureza (à escala da vida humana)?"],
        ["👣","Passo a passo:","<br>Renováveis: vento, Sol, biomassa (se se plantar o que se gasta)<br>Não renováveis: carvão, petróleo (combustíveis fósseis), urânio (energia nuclear)"],
        ["✅","Resultado:","3 renováveis e 3 não renováveis."],
        ["🔍","Verificar:","os combustíveis fósseis formaram-se em milhões de anos e libertam CO₂ ao queimar. Mais de metade da eletricidade produzida em Portugal vem de fontes renováveis, sobretudo eólica e hídrica."]])
    ],
    compare:{
      left:{title:"🌡️ Temperatura", points:["Quão quente/frio está um corpo","Mede-se em °C com termómetro","Um corpo «tem» temperatura"]},
      right:{title:"🔥 Calor", points:["Energia transferida","Do mais quente para o mais frio","Só existe enquanto há diferença de temperatura"]}
    },
    resources:[],
    boss:"FQ 7: «Avaliação global» (p. 245); caderno de atividades: Ficha global Energia (p. 103) e Teste 5 (p. 125)"
  }
];
