/* Oficina de Escrita — conteúdo (usado por escrita.js)
   ESCRITA_TIPOS:   tipos de texto estudados no 2.º ciclo, com etapas e pistas "E agora?"
   ESCRITA_TEMAS:   sugestões de temas por categoria (cada uma sugere um tipo de texto)
   ESCRITA_REVIRAVOLTAS, TECLADO_FRASES, ESCRITA_CURIOSIDADES */

const ESCRITA_TIPOS = {
  narrativo: {
    nome:"Texto narrativo (história)", icon:"📖", alvo:180,
    etapas:[
      {nome:"Introdução", ajuda:"Apresenta quem, onde e quando.", pistas:[
        "Quem é a personagem principal? Dá-lhe um nome e uma característica especial.",
        "Onde começa a história? Descreve o lugar com um pormenor que se veja, ouça ou cheire.",
        "Quando acontece? De manhã, numa noite de tempestade, há 100 anos?",
        "O que é que a personagem quer muito, logo no início?"
      ]},
      {nome:"Desenvolvimento", ajuda:"Aparece um problema e a personagem tenta resolvê-lo.", pistas:[
        "Que problema ou obstáculo aparece de repente?",
        "O que tenta a personagem fazer para resolver o problema? Corre bem à primeira?",
        "Quem pode ajudar — ou atrapalhar?",
        "O que é que a personagem sente neste momento? Medo, coragem, dúvida?",
        "E se uma personagem dissesse algo importante? Usa o travessão (—) para o diálogo."
      ]},
      {nome:"Conclusão", ajuda:"O problema resolve-se (ou não) e a personagem muda.", pistas:[
        "Como é que o problema se resolve, por fim?",
        "O que aprendeu a personagem com esta aventura?",
        "Como fica a vida da personagem no fim? Igual ou diferente?",
        "Que última frase deixaria o leitor a sorrir ou a pensar?"
      ]}
    ],
    rever:["A história tem princípio, meio e fim?","Usei parágrafos para mudar de momento?","Os diálogos começam com travessão (—)?","Os tempos verbais estão no passado, do princípio ao fim?"]
  },
  descritivo: {
    nome:"Texto descritivo", icon:"🖼️", alvo:120,
    etapas:[
      {nome:"Visão geral", ajuda:"Diz o que vais descrever e a primeira impressão.", pistas:[
        "O que estás a descrever, e qual é a primeira coisa em que se repara?",
        "Se fosse uma fotografia, o que estaria no centro?"
      ]},
      {nome:"Pormenores", ajuda:"Usa os cinco sentidos e adjetivos ricos.", pistas:[
        "Que cores e formas vês? Troca 'bonito' por uma palavra mais exata.",
        "Que sons se ouvem? E que cheiros há no ar?",
        "Se tocasses, como seria: liso, áspero, frio, macio?",
        "Faz uma comparação: '…é como…'.",
        "Descreve de cima para baixo, ou de perto para longe — escolhe uma ordem."
      ]},
      {nome:"Sentimento final", ajuda:"Termina com o que sentes.", pistas:[
        "O que sentes quando estás neste lugar (ou com esta pessoa)?",
        "Porque é que isto é especial para ti?"
      ]}
    ],
    rever:["Usei vários sentidos (visão, audição, olfato, tato, paladar)?","Troquei palavras vagas ('coisa', 'bonito') por palavras exatas?","Os adjetivos concordam com os nomes?"]
  },
  carta: {
    nome:"Carta / email", icon:"✉️", alvo:120,
    etapas:[
      {nome:"Abertura", ajuda:"Local, data e saudação.", pistas:[
        "Escreveste o local e a data no topo (ex.: Porto, 9 de outubro de 2026)?",
        "Como cumprimentas? 'Querida avó', 'Olá, Rui', 'Exmo. Senhor'…"
      ]},
      {nome:"Corpo", ajuda:"Diz porque escreves e desenvolve.", pistas:[
        "Qual é o motivo da carta? Diz logo no primeiro parágrafo.",
        "Conta uma novidade ou faz uma pergunta à pessoa.",
        "Que pormenor tornaria a carta mais pessoal?"
      ]},
      {nome:"Despedida", ajuda:"Despede-te e assina.", pistas:[
        "Como te despedes? 'Um beijinho', 'Até breve', 'Com os melhores cumprimentos'…",
        "Assinaste o teu nome no fim?"
      ]}
    ],
    rever:["Tem local, data, saudação, corpo, despedida e assinatura?","O tom combina com a pessoa a quem escrevo (amigo ou desconhecido)?"]
  },
  diario: {
    nome:"Diário", icon:"📔", alvo:100,
    etapas:[
      {nome:"O dia", ajuda:"Data e o que aconteceu.", pistas:[
        "Escreve a data e como estava o tempo.",
        "O que aconteceu hoje de mais importante?"
      ]},
      {nome:"O que senti", ajuda:"Fala dos teus sentimentos.", pistas:[
        "Como te sentiste? Tenta dar um nome exato ao sentimento.",
        "Houve algum momento que te fez sorrir?",
        "Alguém te surpreendeu hoje?"
      ]},
      {nome:"O que levo comigo", ajuda:"Termina com uma ideia para amanhã.", pistas:[
        "O que aprendeste hoje (sobre o mundo ou sobre ti)?",
        "O que queres fazer amanhã?"
      ]}
    ],
    rever:["Escrevi na 1.ª pessoa (eu)?","Pus a data?","Falei do que senti, e não só do que aconteceu?"]
  },
  noticia: {
    nome:"Notícia", icon:"📰", alvo:120,
    etapas:[
      {nome:"Título e lead", ajuda:"O primeiro parágrafo responde às perguntas essenciais.", pistas:[
        "O teu título é curto e chamativo?",
        "O primeiro parágrafo responde a: Quem? O quê? Quando? Onde?"
      ]},
      {nome:"Desenvolvimento", ajuda:"Como e porquê, com pormenores.", pistas:[
        "Como é que aconteceu? E porquê?",
        "Junta uma citação de uma testemunha, entre aspas.",
        "Há algum número importante (quantas pessoas, que distância, quanto tempo)?"
      ]},
      {nome:"Fecho", ajuda:"O que vai acontecer a seguir.", pistas:[
        "O que vai acontecer a seguir?",
        "Releste para garantir que só puseste factos, e não a tua opinião?"
      ]}
    ],
    rever:["Respondi a quem, o quê, quando, onde, como e porquê?","Escrevi na 3.ª pessoa, sem opinar?","O título resume a notícia?"]
  },
  opiniao: {
    nome:"Texto de opinião", icon:"💬", alvo:150,
    etapas:[
      {nome:"A minha opinião", ajuda:"Apresenta o tema e o que pensas.", pistas:[
        "Qual é o tema? Apresenta-o numa frase.",
        "Qual é a tua opinião? Começa com 'Na minha opinião…' ou 'Eu defendo que…'."
      ]},
      {nome:"Argumentos", ajuda:"Dá razões e exemplos.", pistas:[
        "Qual é o teu primeiro argumento? Dá um exemplo concreto.",
        "Tens um segundo argumento? Liga-o com 'Além disso,…'.",
        "O que diria alguém que pensa o contrário? Como lhe respondes?"
      ]},
      {nome:"Conclusão", ajuda:"Reforça a tua opinião.", pistas:[
        "Resume a tua opinião com 'Em conclusão,…' ou 'Por tudo isto,…'.",
        "Deixa uma proposta ou um desafio a quem lê."
      ]}
    ],
    rever:["A minha opinião está clara no início?","Cada argumento tem um exemplo?","Usei conectores (além disso, por exemplo, no entanto, em conclusão)?"]
  },
  poema: {
    nome:"Poema", icon:"🎵", alvo:40,
    etapas:[
      {nome:"Primeira estrofe", ajuda:"Escolhe uma imagem forte.", pistas:[
        "Sobre que coisa, pessoa ou sentimento é o poema?",
        "Escreve um verso com uma imagem: 'O mar é…'."
      ]},
      {nome:"Mais estrofes", ajuda:"Brinca com sons e repetições.", pistas:[
        "Experimenta uma rima no fim de dois versos.",
        "Repete uma palavra ou um verso — dá ritmo.",
        "Usa uma personificação: dá ações humanas a uma coisa (o vento sussurra…)."
      ]},
      {nome:"Último verso", ajuda:"Termina com força.", pistas:[
        "Que último verso fecharia o poema com surpresa ou emoção?"
      ]}
    ],
    rever:["Organizei em versos e estrofes?","Usei pelo menos um recurso (rima, repetição, comparação, personificação)?"]
  },
  biografia: {
    nome:"Biografia", icon:"👤", alvo:150,
    etapas:[
      {nome:"Origem", ajuda:"Quem é, quando e onde nasceu.", pistas:[
        "Quem é a pessoa e porque é conhecida?",
        "Quando e onde nasceu? Como foi a infância?"
      ]},
      {nome:"Vida", ajuda:"Os factos importantes, por ordem.", pistas:[
        "Qual foi o momento mais importante da vida desta pessoa?",
        "Que dificuldades enfrentou?",
        "Usa marcadores de tempo: 'Em 1974,…', 'Anos depois,…'."
      ]},
      {nome:"Legado", ajuda:"O que deixou ao mundo.", pistas:[
        "Porque é que ainda hoje nos lembramos desta pessoa?",
        "Confirmaste as datas numa fonte de confiança?"
      ]}
    ],
    rever:["Os factos estão por ordem cronológica?","Escrevi na 3.ª pessoa?","Confirmei as datas e os nomes?"]
  },
  instrucoes: {
    nome:"Texto instrucional (receita, regras)", icon:"🧾", alvo:100,
    etapas:[
      {nome:"Material", ajuda:"O que é preciso.", pistas:[
        "Qual é o objetivo? (ex.: fazer um bolo, jogar um jogo)",
        "Faz uma lista do material ou dos ingredientes."
      ]},
      {nome:"Passos", ajuda:"Passos numerados, por ordem.", pistas:[
        "Numera os passos: 1., 2., 3.…",
        "Começa cada passo com um verbo: 'Mistura…', 'Corta…' (ou 'Misturar…').",
        "Há algum passo onde é preciso ter cuidado? Avisa!"
      ]},
      {nome:"Resultado", ajuda:"Como se sabe que correu bem.", pistas:[
        "Como fica o resultado final? Descreve-o.",
        "Tens uma dica extra para correr ainda melhor?"
      ]}
    ],
    rever:["Os passos estão numerados e por ordem?","Cada passo começa com um verbo?","Alguém conseguia seguir as instruções sem me perguntar nada?"]
  }
};

/* cat: feliz | atualidade | passado */
const ESCRITA_TEMAS = [
  {cat:"feliz", tipo:"diario",    titulo:"Três coisas boas de hoje", inicio:"Hoje aconteceram três coisas boas. A primeira foi…"},
  {cat:"feliz", tipo:"diario",    titulo:"Algo de que me orgulho", inicio:"Uma coisa de que me orgulho muito é…"},
  {cat:"feliz", tipo:"carta",     titulo:"Carta de agradecimento a quem me fez sorrir", inicio:"Querido/a …, escrevo-te para te agradecer…"},
  {cat:"feliz", tipo:"descritivo",titulo:"O meu lugar calmo", inicio:"Quando preciso de sossego, vou (ou imagino que vou) para…"},
  {cat:"feliz", tipo:"carta",     titulo:"Carta ao meu eu do futuro", inicio:"Olá, eu do futuro! Hoje tenho … anos e quero contar-te…"},
  {cat:"feliz", tipo:"diario",    titulo:"Um erro que me ensinou alguma coisa", inicio:"Uma vez enganei-me quando… e aprendi que…"},
  {cat:"feliz", tipo:"narrativo", titulo:"Se eu tivesse um superpoder do bem", inicio:"Acordei e descobri que conseguia…"},
  {cat:"feliz", tipo:"poema",     titulo:"As coisas pequenas que me fazem feliz", inicio:"Fico feliz com…"},

  {cat:"atualidade", tipo:"narrativo", titulo:"A primeira criança numa base na Lua", inicio:"Pela janela redonda da base lunar, a Terra parecia…"},
  {cat:"atualidade", tipo:"narrativo", titulo:"Uma garrafa no oceano", inicio:"Na praia, entre algas e plástico, encontrei uma garrafa com uma mensagem…"},
  {cat:"atualidade", tipo:"opiniao",   titulo:"Os robôs e a inteligência artificial devem ajudar nos trabalhos de casa?", inicio:"Na minha opinião, a inteligência artificial…"},
  {cat:"atualidade", tipo:"opiniao",   titulo:"Quanto tempo de ecrã por dia é razoável?", inicio:"Eu defendo que…"},
  {cat:"atualidade", tipo:"noticia",   titulo:"A minha escola vai ter painéis solares", inicio:"A escola … vai instalar painéis solares no telhado…"},
  {cat:"atualidade", tipo:"biografia", titulo:"O lince-ibérico: um animal que quase desapareceu", inicio:"O lince-ibérico é um felino que vive na Península Ibérica…"},
  {cat:"atualidade", tipo:"instrucoes",titulo:"Como poupar água em casa", inicio:"Objetivo: gastar menos água todos os dias. Passos:"},
  {cat:"atualidade", tipo:"noticia",   titulo:"O jogo mais emocionante do ano", inicio:"Ontem, no pavilhão da escola, a equipa…"},

  {cat:"passado", tipo:"diario",    titulo:"Lisboa, 1 de novembro de 1755", inicio:"Querido diário, hoje de manhã estava na igreja quando a terra começou a tremer…"},
  {cat:"passado", tipo:"carta",     titulo:"Carta de um soldado nas Linhas de Torres (1810)", inicio:"Torres Vedras, outubro de 1810. Querida mãe,…"},
  {cat:"passado", tipo:"noticia",   titulo:"O primeiro comboio de Portugal (1856)", inicio:"Lisboa, 28 de outubro de 1856. Partiu hoje o primeiro comboio…"},
  {cat:"passado", tipo:"noticia",   titulo:"Última hora: proclamada a República! (1910)", inicio:"Lisboa, 5 de outubro de 1910. Esta manhã, da varanda da Câmara Municipal…"},
  {cat:"passado", tipo:"carta",     titulo:"Emigrante 'a salto' escreve à família (anos 60)", inicio:"Paris, 1965. Queridos pais, finalmente cheguei…"},
  {cat:"passado", tipo:"diario",    titulo:"Uma criança no 25 de Abril de 1974", inicio:"Hoje acordei e o meu pai estava colado ao rádio…"},
  {cat:"passado", tipo:"biografia", titulo:"Biografia de Celeste Caeiro, a senhora dos cravos", inicio:"Celeste Caeiro ficou conhecida por…"},
  {cat:"passado", tipo:"descritivo",titulo:"A minha escola em 1960 e hoje", inicio:"Se entrasse numa sala de aula em 1960, veria…"}
];

const ESCRITA_REVIRAVOLTAS = [
  "De repente, todas as luzes se apagaram.",
  "Alguém bateu à porta… mas não estava lá ninguém.",
  "Um animal olhou para a personagem e disse: — Finalmente!",
  "No bolso, apareceu um mapa que ninguém lá tinha posto.",
  "O relógio parou e, durante um minuto, tudo ficou imóvel.",
  "Uma tempestade obrigou toda a gente a mudar de planos.",
  "A personagem descobriu que estava enganada sobre um amigo.",
  "Chegou uma mensagem misteriosa, assinada só com uma letra.",
  "O objeto mais banal da casa começou a brilhar.",
  "Quem parecia o vilão estava, afinal, a tentar ajudar."
];

/* frases para o treino de teclado (além das frases dos resumos dos mundos) */
const TECLADO_FRASES = [
  "O gato dormiu em cima do teclado e escreveu uma palavra nova.",
  "Hoje vou treinar devagar, sem pressa e sem medo de errar.",
  "A girafa e o caracol decidiram fazer uma corrida.",
  "No verão, a praia enche-se de toalhas coloridas.",
  "Quem tem um amigo tem um tesouro.",
  "O foguetão partiu às três horas e chegou à Lua num ápice.",
  "A Joana e o Tomás construíram uma cabana no quintal.",
  "Os dedos descansam na fila do meio: A S D F e J K L Ç.",
  "Cada tecla tem o seu dedo, e cada dedo tem a sua casa.",
  "Um pinguim de chapéu entrou na pastelaria e pediu um pastel de nata."
];

const ESCRITA_CURIOSIDADES = [
  {t:"A disposição das letras QWERTY, que está no teu teclado, foi criada na década de 1870 para as primeiras máquinas de escrever, de Christopher Latham Sholes.", fonte:"Encyclopaedia Britannica"},
  {t:"Uma das palavras mais compridas do português é 'pneumoultramicroscopicossilicovulcanoconiótico', com 46 letras: é o nome de uma doença dos pulmões causada por cinzas vulcânicas.", fonte:"Dicionário Priberam da Língua Portuguesa"},
  {t:"Anne Frank escreveu o seu diário entre 1942 e 1944, escondida durante a Segunda Guerra Mundial. Foi traduzido para mais de 70 línguas.", fonte:"Anne Frank House (annefrank.org)"},
  {t:"Estudos de psicologia mostraram que escrever regularmente sobre coisas pelas quais estamos gratos pode melhorar o bem-estar e o otimismo.", fonte:"Emmons & McCullough (2003), Journal of Personality and Social Psychology"},
  {t:"'Os Lusíadas', de Luís de Camões, publicados em 1572, têm 1102 estrofes de 8 versos — 8816 versos no total.", fonte:"Biblioteca Nacional de Portugal"},
  {t:"José Saramago recebeu o Prémio Nobel da Literatura em 1998 — até hoje, é o único escritor de língua portuguesa a recebê-lo.", fonte:"The Nobel Prize (nobelprize.org)"},
  {t:"Fernando Pessoa escreveu com dezenas de 'heterónimos': autores inventados por ele, cada um com biografia, estilo e opiniões próprias, como Alberto Caeiro ou Álvaro de Campos.", fonte:"Casa Fernando Pessoa"},
  {t:"Sophia de Mello Breyner Andresen, uma das maiores poetas portuguesas, escreveu também histórias para crianças, como 'A Menina do Mar' (1958).", fonte:"Plano Nacional de Leitura; Biblioteca Nacional de Portugal"},
  {t:"Os pequenos relevos nas teclas F e J existem para os dedos indicadores encontrarem a 'fila de casa' sem olhar para o teclado.", fonte:"Norma internacional de teclados ISO/IEC 9995-1"}
];

/* 🔗 Palavras para ligar ideias (conectores), com a pontuação do português europeu.
   ini  = como se escreve a abrir uma frase (com maiúscula e, quando é preciso, vírgula);
   meio = como se escreve no meio da frase (null = só se usa a abrir uma frase).
   Regras seguidas: vírgula antes de «mas»; conectores intercalados entre vírgulas
   («no entanto», «contudo», «por isso», «portanto», «além disso», «por exemplo»);
   «porque» e «uma vez que» sem vírgula obrigatória antes. */
const ESCRITA_CONECTORES = [
  {g:"⏱️ Tempo (contar por ordem)", l:[
    {t:"primeiro", ini:"Primeiro, ", meio:null},
    {t:"depois", ini:"Depois, ", meio:" depois "},
    {t:"a seguir", ini:"A seguir, ", meio:" a seguir "},
    {t:"mais tarde", ini:"Mais tarde, ", meio:" mais tarde "},
    {t:"entretanto", ini:"Entretanto, ", meio:", entretanto, "},
    {t:"de repente", ini:"De repente, ", meio:" de repente "},
    {t:"nesse momento", ini:"Nesse momento, ", meio:null},
    {t:"no dia seguinte", ini:"No dia seguinte, ", meio:null},
    {t:"por fim", ini:"Por fim, ", meio:" por fim "}
  ]},
  {g:"↔️ Contraste (mas…)", l:[
    {t:"mas", ini:"Mas ", meio:", mas "},
    {t:"no entanto", ini:"No entanto, ", meio:", no entanto, "},
    {t:"contudo", ini:"Contudo, ", meio:", contudo, "},
    {t:"pelo contrário", ini:"Pelo contrário, ", meio:null},
    {t:"apesar de", ini:"Apesar de ", meio:" apesar de "}
  ]},
  {g:"❓ Causa (porquê?)", l:[
    {t:"porque", ini:null, meio:" porque "},
    {t:"como", ini:"Como ", meio:null},
    {t:"uma vez que", ini:"Uma vez que ", meio:" uma vez que "},
    {t:"visto que", ini:"Visto que ", meio:", visto que "}
  ]},
  {g:"➡️ Consequência e conclusão", l:[
    {t:"por isso", ini:"Por isso, ", meio:", por isso, "},
    {t:"portanto", ini:"Portanto, ", meio:", portanto, "},
    {t:"assim", ini:"Assim, ", meio:null},
    {t:"em suma", ini:"Em suma, ", meio:null},
    {t:"em conclusão", ini:"Em conclusão, ", meio:null}
  ]},
  {g:"➕ Acrescentar e dar opinião", l:[
    {t:"na minha opinião", ini:"Na minha opinião, ", meio:null},
    {t:"em primeiro lugar", ini:"Em primeiro lugar, ", meio:null},
    {t:"além disso", ini:"Além disso, ", meio:", além disso, "},
    {t:"por um lado", ini:"Por um lado, ", meio:null},
    {t:"por outro lado", ini:"Por outro lado, ", meio:", por outro lado, "},
    {t:"por exemplo", ini:"Por exemplo, ", meio:", por exemplo, "}
  ]},
  {g:"📍 Lugar (descrever)", l:[
    {t:"ao longe", ini:"Ao longe, ", meio:" ao longe "},
    {t:"ao perto", ini:"Ao perto, ", meio:" ao perto "},
    {t:"à esquerda", ini:"À esquerda, ", meio:" à esquerda "},
    {t:"à direita", ini:"À direita, ", meio:" à direita "},
    {t:"lá dentro", ini:"Lá dentro, ", meio:" lá dentro "}
  ]},
  {g:"💬 Diálogo", l:[
    {t:"— (travessão)", ini:"— ", meio:"— ", linha:true, nota:"Em português de Portugal, as falas começam com travessão (—), numa linha nova."}
  ]}
];

/* ✨ Como escreveu um mestre — excertos curtos de autores portugueses em domínio público
   (morreram há mais de 70 anos), com ortografia atualizada, e o que observar em cada um. */
const ESCRITA_MESTRES = {
  narrativo:[{autor:"Eça de Queirós", obra:"Os Maias (1888), primeira frase",
    txt:"A casa que os Maias vieram habitar em Lisboa, no outono de 1875, era conhecida na vizinhança da Rua de S. Francisco de Paula, e em todo o bairro das Janelas Verdes, pela Casa do Ramalhete ou simplesmente o Ramalhete.",
    ver:"Numa só frase, Eça diz QUEM (os Maias), ONDE (Lisboa, Janelas Verdes) e QUANDO (outono de 1875). Experimenta começar a tua história assim."}],
  descritivo:[{autor:"Fernando Pessoa (Alberto Caeiro)", obra:"O Guardador de Rebanhos, poema XX",
    txt:"O Tejo é mais belo que o rio que corre pela minha aldeia,\nMas o Tejo não é mais belo que o rio que corre pela minha aldeia\nPorque o Tejo não é o rio que corre pela minha aldeia.",
    ver:"Descrever também é comparar: «mais belo que». Repara como a repetição é de propósito, para dar ritmo, e como o «Mas» abre o contraste."}],
  poema:[{autor:"Fernando Pessoa", obra:"Mensagem (1934), «Mar Português»",
    txt:"Ó mar salgado, quanto do teu sal\nSão lágrimas de Portugal!",
    ver:"O poeta fala diretamente com o mar («Ó mar»): chama-se apóstrofe. E o sal do mar é comparado às lágrimas — uma metáfora."},
    {autor:"Fernando Pessoa", obra:"«Liberdade» (1935)",
    txt:"Ai que prazer\nNão cumprir um dever,\nTer um livro para ler\nE não o fazer!",
    ver:"Repara nas rimas: prazer / dever / ler / fazer. Versos curtos dão um ritmo leve e divertido."}],
  diario:[{autor:"Fernando Pessoa (Álvaro de Campos)", obra:"«Tabacaria» (1928)",
    txt:"Não sou nada.\nNunca serei nada.\nNão posso querer ser nada.\nÀ parte isso, tenho em mim todos os sonhos do mundo.",
    ver:"Escrever sobre o que se sente, na primeira pessoa (eu). Três frases tristes… e a última vira tudo ao contrário. Um diário também pode ter estas viragens."}]
};
