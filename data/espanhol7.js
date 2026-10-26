/* Espanhol do 7.º ano (nível A1). Aprendizagens Essenciais de Espanhol (LE II) do 7.º ano; mundos segundo as
   unidades do caderno «¡A bordo! 7» (Porto Editora), que serve só de referência (conteúdo original).
   Explicações em português; exemplos em espanhol (com ¿ ¡ e acentos). Os falsos amigos foram escolhidos para o
   português de Portugal (ex.: «apellido» não é falso amigo, porque «apelido» quer dizer o mesmo).
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const ESP7_WORLDS = [
  {
    id:"a1", num:1, c:"m1", icon:"🚢",
    title:"¡Embarque!",
    subtitle:"Espanha, o mundo hispânico, o alfabeto e os falsos amigos", pages:"¡A bordo! 7, caderno de ejercicios, «¡Embarque!» (pp. 4–9)",
    lead:"O espanhol e o português são línguas irmãs: muitas palavras parecem-se, mas algumas enganam. Antes de partir, vais conhecer Espanha e os países onde se fala espanhol, o alfabeto e as palavras transparentes e os falsos amigos.",
    missions:[
      {t:"Mapa de España", d:"Geografia e símbolos de Espanha", f:"Num mapa de Espanha, marca Madrid, 5 comunidades autónomas e as ilhas Baleares e Canárias.\nDesenha a bandeira e escreve 3 línguas que se falam em Espanha além do castelhano.", xp:10},
      {t:"El Mundo Hispano", d:"Os países hispânicos", f:"Num mapa-mundo, pinta os países onde o espanhol é língua oficial.\nEscolhe 3 e escreve a capital de cada um.", xp:10},
      {t:"Amigos Falsos", d:"Palavras que enganam", f:"Faz 8 cartões com falsos amigos: de um lado a palavra espanhola, do outro o que quer dizer em português (ex.: exquisito = delicioso).\nTreina-os com alguém.", xp:10},
      {t:"El Abecedario", d:"O alfabeto espanhol", f:"Soletra em espanhol o teu nome, o da tua escola e o da tua cidade.\nPratica a letra ñ e a pronúncia de j, g (antes de e, i), ll e z.", xp:10}
    ],
    resumo:[
      "<b>Espanha</b>: capital <b>Madrid</b>; 17 comunidades autónomas e 2 cidades autónomas (Ceuta e Melilla). Além do castelhano (espanhol), há línguas cooficiais em algumas comunidades: o <b>catalão</b>, o <b>galego</b> e o <b>basco</b> (euskera).",
      "O espanhol é língua oficial em cerca de 20 países: Espanha, a maior parte da América Central e do Sul (México, Argentina, Colômbia, Peru, Chile…) e a Guiné Equatorial, em África. Os falantes de espanhol estão entre os mais numerosos do mundo.",
      "O <b>alfabeto</b> espanhol tem 27 letras, incluindo o <b>ñ</b> (eñe): España, niño, mañana. Os grupos <b>ch</b> e <b>ll</b> são dígrafos (duas letras, um som).",
      "<b>Palavras transparentes</b>: parecidas e com o mesmo significado (familia, música, escuela).",
      "<b>Falsos amigos</b>: parecidas, mas com significado diferente: <b>exquisito</b> = delicioso; <b>polvo</b> = pó (o animal é «pulpo»); <b>rato</b> = momento (o animal é «ratón»); <b>oficina</b> = escritório; <b>largo</b> = comprido; <b>embarazada</b> = grávida; <b>propina</b> = gorjeta; <b>vaso</b> = copo; <b>taza</b> = chávena; <b>borracha</b> = bêbeda (a nossa borracha é «goma»).",
      "Em espanhol, as perguntas e as exclamações abrem e fecham com sinal: <b>¿</b>…<b>?</b> e <b>¡</b>…<b>!</b>"
    ],
    gloss:[
      ["comunidad autónoma","Região de Espanha com governo próprio (ex.: Andalucía, Cataluña, Galicia)."],
      ["hispanohablante","Pessoa que fala espanhol."],
      ["eñe","A letra ñ."],
      ["exquisito","Delicioso (falso amigo: não é «esquisito»)."],
      ["oficina","Escritório (falso amigo)."],
      ["largo","Comprido (falso amigo: «largo» em português é «ancho»)."],
      ["polvo","Pó (o animal é «pulpo»)."],
      ["goma","Borracha (de apagar)."]
    ],
    quiz:[
      {q:"O que quer dizer «exquisito» em espanhol?", opts:["Delicioso","Esquisito, estranho","Caro","Pequeno"], correct:0, explain:"«Exquisito» é um falso amigo: quer dizer delicioso. «Esquisito» diz-se «raro» ou «extraño».", pista:"É um falso amigo: não quer dizer o que parece.", irma:{q:"O que quer dizer «oficina» em espanhol?", opts:["Escritório","Oficina de carros","Cozinha","Fábrica"], correct:0, explain:"«Oficina» é um falso amigo: quer dizer escritório. A oficina de carros é o «taller»."}},
      {q:"Como se diz «borracha» (de apagar) em espanhol?", opts:["goma","borracha","caucho","lápiz"], correct:0, explain:"A borracha de apagar é a «goma». Em espanhol, «borracha» quer dizer bêbeda!"},
      {q:"Qual é a capital de Espanha?", opts:["Madrid","Barcelona","Sevilha","Valência"], correct:0, explain:"A capital de Espanha é Madrid. Barcelona é a capital da Catalunha; Sevilha é a da Andaluzia."},
      {q:"Qual destas línguas é cooficial numa comunidade autónoma de Espanha?", opts:["O galego","O francês","O português","O italiano"], correct:0, explain:"O galego é cooficial na Galiza, tal como o catalão na Catalunha e o basco no País Basco.", irma:{q:"Em que país africano o espanhol é língua oficial?", opts:["Guiné Equatorial","Angola","Marrocos","Moçambique"], correct:0, explain:"A Guiné Equatorial é o único país de África com o espanhol como língua oficial."}},
      {q:"Como começa uma pergunta escrita em espanhol?", opts:["Com ¿","Com ?","Com ¡","Sem sinal no início"], correct:0, explain:"Em espanhol, a pergunta abre com ¿ e fecha com ?: «¿Cómo te llamas?». As exclamações usam ¡ e !."},
      {q:"O que quer dizer «largo» em espanhol?", opts:["Comprido","Largo","Lento","Pequeno"], correct:0, explain:"«Largo» quer dizer comprido. O nosso «largo» diz-se «ancho» em espanhol."}
    ],
    compare:{
      left:{title:"✅ Palavras transparentes", points:["Parecidas e com o mesmo significado","familia, música, escuela","Ajudam a perceber textos"]},
      right:{title:"⚠️ Falsos amigos", points:["Parecidas, mas com significado diferente","exquisito, polvo, oficina, largo","Cuidado ao traduzir!"]}
    },
    boss:"¡A bordo! 7, caderno: as atividades do «¡Embarque!» (pp. 4–9)"
  },
  {
    id:"a2", num:2, c:"m2", icon:"👋",
    title:"¡Hola a todos!",
    subtitle:"Cumprimentos, dados pessoais, números, meses; ser, llamarse e tener", pages:"¡A bordo! 7, caderno de ejercicios, unidade 1 (pp. 10–21)",
    lead:"Num jogo online, a primeira coisa é criar o perfil: nome, idade, nacionalidade. Em espanhol vais aprender a cumprimentar, a apresentar-te e a fazer perguntas, com os verbos ser, llamarse e tener, os números até 110 e os meses do ano.",
    missions:[
      {t:"Mi Perfil", d:"Dados pessoais", f:"Escreve o teu perfil em espanhol: «Me llamo… Tengo… años. Soy portugués/portuguesa. Vivo en…»\nAcrescenta o dia do teu aniversário e o teu número de telefone imaginário, por extenso.", xp:10},
      {t:"¡Hola y Adiós!", d:"Cumprimentos e despedidas", f:"Escreve 3 diálogos curtos: de manhã, à tarde e à noite.\nUsa buenos días, buenas tardes, buenas noches, hasta luego e hasta mañana.", xp:10},
      {t:"Números Locos", d:"Números até 110", f:"Escreve por extenso: 16, 21, 33, 47, 100, 101 e 110.\nVerifica: 16 = dieciséis (numa palavra); 33 = treinta y tres (em três palavras).", xp:10},
      {t:"¿De Dónde Eres?", d:"Nacionalidades e interrogativos", f:"Escreve 6 perguntas com interrogativos (¿Cómo…?, ¿Dónde…?, ¿Cuántos…?, ¿De dónde…?, ¿Qué…?, ¿Cuándo…?) e responde a cada uma.\nNão te esqueças do acento nos interrogativos!", xp:10}
    ],
    resumo:[
      "<b>Cumprimentos</b>: ¡Hola!, Buenos días (de manhã), Buenas tardes (à tarde), Buenas noches (à noite). <b>Despedidas</b>: Adiós, Hasta luego, Hasta mañana, Chao.",
      "<b>Ser</b>: yo soy, tú eres, él/ella/usted es, nosotros/as somos, vosotros/as sois, ellos/ellas/ustedes son.",
      "<b>Llamarse</b>: me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman. «¿Cómo te llamas?» — «Me llamo Rui.»",
      "<b>Tener</b>: tengo, tienes, tiene, tenemos, tenéis, tienen. A idade diz-se com tener: «Tengo doce años» (e não «soy doce»).",
      "<b>Números</b>: 16 dieciséis, 21 veintiuno, 22 veintidós (de 16 a 29 escrevem-se numa só palavra); a partir de 31 usa-se «y»: treinta y uno, cuarenta y cinco; 100 cien; 101 ciento uno; 110 ciento diez.",
      "<b>Meses</b>, com minúscula: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.",
      "<b>Interrogativos</b>, sempre com acento: ¿Qué?, ¿Cómo?, ¿Dónde?, ¿Cuándo?, ¿Cuánto/a/os/as?, ¿Quién?, ¿De dónde?",
      "<b>Nacionalidades</b>: portugués/portuguesa, español/española, francés/francesa, alemán/alemana, italiano/italiana; algumas não mudam: estadounidense, marroquí."
    ],
    gloss:[
      ["¿Cómo te llamas?","Como te chamas?"],
      ["¿Cuántos años tienes?","Quantos anos tens?"],
      ["¿De dónde eres?","De onde és?"],
      ["hasta luego","Até logo."],
      ["apellido","Apelido."],
      ["cumpleaños","Aniversário (dia de anos)."],
      ["dirección","Morada."],
      ["correo electrónico","Correio eletrónico (email)."]
    ],
    quiz:[
      {q:"Como se diz «Tenho doze anos» em espanhol?", opts:["Tengo doce años.","Soy doce años.","Tengo doze años.","Estoy doce años."], correct:0, explain:"A idade diz-se com o verbo tener: «Tengo doce años». E doze escreve-se «doce».", pista:"Em espanhol, a idade «tem-se», como em português.", irma:{q:"Como se pergunta «Quantos anos tens?»", opts:["¿Cuántos años tienes?","¿Cuántos años eres?","¿Cuánto años tienes?","¿Qué años tienes?"], correct:0, explain:"Com tener e com «cuántos» no plural, porque «años» é plural."}},
      {q:"Complete: «Ella ___ portuguesa.»", opts:["es","eres","soy","son"], correct:0, explain:"Verbo ser na 3.ª pessoa do singular (ella): es.", irma:{q:"Complete: «Nosotros ___ de Lisboa.»", opts:["somos","son","sois","es"], correct:0, explain:"Ser com nosotros: somos."}},
      {q:"Como se escreve o número 16 em espanhol?", opts:["dieciséis","diez y seis","dezasseis","dieziséis"], correct:0, explain:"De 16 a 29, os números escrevem-se numa só palavra: dieciséis (com acento).", pista:"Numa só palavra, com acento no fim."},
      {q:"Como se escreve o número 45 em espanhol?", opts:["cuarenta y cinco","cuarentaicinco","cuarenta cinco","cuarenta e cinco"], correct:0, explain:"A partir de 31, usam-se três palavras com «y»: cuarenta y cinco."},
      {q:"Qual é o interrogativo correto? «¿___ vives?» (onde)", opts:["Dónde","Donde","Cuándo","Quién"], correct:0, explain:"«Dónde» = onde. Nas perguntas, os interrogativos levam sempre acento."},
      {q:"Como se escreve o mês «julho» em espanhol?", opts:["julio","Julio","junio","jullo"], correct:0, explain:"Julho é «julio», com minúscula (os meses escrevem-se com minúscula). «Junio» é junho."}
    ],
    compare:{
      left:{title:"🧑 Ser", points:["Identidade, origem, profissão","Soy Ana. Soy de Oporto.","soy, eres, es, somos, sois, son"]},
      right:{title:"🎒 Tener", points:["Posse e idade","Tengo un perro. Tengo 12 años.","tengo, tienes, tiene, tenemos, tenéis, tienen"]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 1 (pp. 20–21)"
  },
  {
    id:"a3", num:3, c:"m3", icon:"🏫",
    title:"Mi Instituto",
    subtitle:"A escola, os artigos, ir a + infinitivo, o presente regular e as horas", pages:"¡A bordo! 7, caderno de ejercicios, unidade 2 (pp. 22–33)",
    lead:"A escola tem o seu próprio vocabulário: espaços, material, disciplinas, horários. Neste mundo vais descrever a tua escola em espanhol, usar os artigos, conjugar os verbos regulares no presente, falar de planos com «ir a» e dizer as horas.",
    missions:[
      {t:"Mi Mochila", d:"Material escolar", f:"Faz a lista em espanhol de tudo o que tens na mochila e no estojo (estuche): bolígrafo, lápiz, goma, sacapuntas, regla, tijeras, cuaderno…\nUsa artigos: «un bolígrafo, una regla».", xp:10},
      {t:"Mi Horario", d:"Disciplinas e horas", f:"Escreve o teu horário de segunda-feira em espanhol, com as disciplinas e as horas.\nEx.: «A las ocho y media tengo Matemáticas.»", xp:10},
      {t:"Hablo, Como, Vivo", d:"Presente dos verbos regulares", f:"Conjuga hablar, comer e vivir em todas as pessoas.\nEscreve 6 frases sobre a tua rotina escolar com verbos regulares.", xp:10},
      {t:"Voy a…", d:"Ir a + infinitivo", f:"Escreve 5 planos para a próxima semana com «ir a + infinitivo».\nEx.: «El sábado voy a jugar al fútbol.»", xp:10}
    ],
    resumo:[
      "<b>Artigos</b> definidos: el, la, los, las; indefinidos: un, una, unos, unas. Contrações: a + el = <b>al</b>; de + el = <b>del</b> («Voy al gimnasio», «la puerta del aula»).",
      "<b>Espaços</b>: el aula, la biblioteca, el gimnasio, el patio, el comedor (cantina), el laboratorio. <b>Material</b>: el bolígrafo (caneta), el lápiz, la goma, el sacapuntas, la regla, las tijeras, el estuche, la mochila.",
      "<b>Disciplinas</b>: Matemáticas, Lengua (a língua materna; para nós, Portugués), Inglés, Historia, Geografía, Ciencias Naturales, Educación Física, Música.",
      "<b>Presente regular</b>: hablar → hablo, hablas, habla, hablamos, habláis, hablan; comer → como, comes, come, comemos, coméis, comen; vivir → vivo, vives, vive, vivimos, vivís, viven.",
      "<b>Ir</b> (irregular): voy, vas, va, vamos, vais, van. <b>Ir a + infinitivo</b> = futuro próximo: «Voy a estudiar.»",
      "<b>As horas</b>: ¿Qué hora es? — Es la una. / Son las dos. / Son las tres y cuarto. / Son las cuatro y media. / Son las cinco menos cuarto. Para dizer a que horas: «a las ocho»."
    ],
    gloss:[
      ["aula","Sala de aula."],
      ["comedor","Cantina, refeitório."],
      ["bolígrafo","Caneta."],
      ["sacapuntas","Afia-lápis."],
      ["estuche","Estojo."],
      ["asignatura","Disciplina."],
      ["horario","Horário."],
      ["recreo","Recreio, intervalo."]
    ],
    quiz:[
      {q:"Complete: «Mañana ___ estudiar para el examen.» (eu)", opts:["voy a","va a","vamos a","voy"], correct:0, explain:"Ir a + infinitivo, com yo: voy a estudiar.", pista:"Verbo ir na 1.ª pessoa + a + infinitivo.", irma:{q:"Complete: «Ellos ___ jugar al baloncesto.»", opts:["van a","va a","vais a","vamos a"], correct:0, explain:"Ir com ellos: van. «Van a jugar»."}},
      {q:"Complete: «Nosotros ___ en el comedor.» (comer)", opts:["comemos","comimos","comamos","comen"], correct:0, explain:"Presente de comer com nosotros: comemos."},
      {q:"Complete: «Voy ___ gimnasio.»", opts:["al","a el","del","el"], correct:0, explain:"a + el contrai-se em «al»: voy al gimnasio.", pista:"a + el = ?"},
      {q:"Como se diz «São três e meia»?", opts:["Son las tres y media.","Es la tres y media.","Son las tres e media.","Son tres y media."], correct:0, explain:"Para as horas do plural: «son las…», com «y media». Só a uma hora leva «es la una».", irma:{q:"Como se diz «É uma hora»?", opts:["Es la una.","Son las una.","Es una.","Son la una."], correct:0, explain:"A uma hora é singular: «Es la una». As outras horas: «Son las dos, son las tres…»"}},
      {q:"Complete: «Tú ___ en Oporto.» (vivir)", opts:["vives","vive","vivo","vivís"], correct:0, explain:"Presente de vivir com tú: vives."},
      {q:"O que é um «bolígrafo»?", opts:["Uma caneta","Um lápis","Um caderno","Uma borracha"], correct:0, explain:"«Bolígrafo» é a caneta (esferográfica). O lápis é «lápiz» e a borracha é «goma»."}
    ],
    compare:{
      left:{title:"📍 Presente", points:["O que faço habitualmente","Estudio por la tarde.","hablo, como, vivo"]},
      right:{title:"🔜 Ir a + infinitivo", points:["O que vou fazer em breve","Voy a estudiar esta tarde.","voy a / vas a / va a + verbo"]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 2 (pp. 32–33)"
  },
  {
    id:"a4", num:4, c:"m4", icon:"🤝",
    title:"Mis Amigos y Yo",
    subtitle:"Descrever pessoas; gustar; muy/mucho; comparativos; ditongação", pages:"¡A bordo! 7, caderno de ejercicios, unidade 3 (pp. 34–43)",
    lead:"Para encontrar a equipa certa num jogo é preciso saber descrever e comparar: quem é mais rápido, quem gosta de quê. Neste mundo vais descrever o aspeto e a personalidade dos teus amigos, dizer do que gostas com o verbo gustar, comparar pessoas e conjugar verbos que mudam a vogal.",
    missions:[
      {t:"Retrato de un Amigo", d:"Descrição física e psicológica", f:"Descreve um amigo em 6 frases: aspeto (alto, moreno, tiene el pelo rizado…), roupa e cores, e personalidade (simpático, divertido, tímido…).", xp:10},
      {t:"Me Gusta, No Me Gusta", d:"Gustar e encantar", f:"Escreve 4 coisas de que gostas, 2 de que gostas muito (me encanta/me encantan) e 2 de que não gostas.\nAtenção: me gusta + singular; me gustan + plural.", xp:10},
      {t:"¿Quién es Más…?", d:"Comparativos", f:"Compara-te com 2 amigos ou familiares em 6 frases: más… que, menos… que, tan… como.\nUsa também mayor, menor, mejor e peor.", xp:10},
      {t:"Quiero, Puedo, Juego", d:"Presente com ditongação", f:"Conjuga querer, poder, dormir e jugar no presente.\nEscreve 4 frases sobre o teu fim de semana com esses verbos.", xp:10}
    ],
    resumo:[
      "<b>Descrição física</b>: ser alto/bajo, delgado, moreno/rubio; tener el pelo largo/corto/rizado/liso, los ojos azules/marrones/verdes; llevar gafas. <b>Personalidade</b>: simpático, divertido, tímido, trabajador, perezoso, generoso.",
      "<b>Gustar</b> concorda com a coisa de que se gosta: «Me gusta el fútbol» (singular) / «Me gustan los videojuegos» (plural). Pronomes: me, te, le, nos, os, les. <b>Encantar</b> funciona igual: «Me encanta bailar».",
      "<b>Muy</b> antes de adjetivos e advérbios («muy alto», «muy bien»); <b>mucho</b> antes de nomes, concordando («muchos amigos», «mucha agua») e depois de verbos («Estudio mucho»).",
      "<b>Comparativos</b>: más… que (superioridade), menos… que (inferioridade), tan… como (igualdade). Irregulares: mejor (melhor), peor (pior), mayor (mais velho), menor (mais novo).",
      "<b>Presente com ditongação</b>: e → ie (querer: quiero, quieres, quiere, queremos, queréis, quieren); o → ue (poder: puedo; dormir: duermo); u → ue (jugar: juego). Nas pessoas nosotros e vosotros não muda: «queremos», «podéis».",
      "<b>Demonstrativos</b>: este/esta/estos/estas (perto de quem fala), ese/esa/esos/esas (perto de quem ouve), aquel/aquella/aquellos/aquellas (longe dos dois).",
      "<b>También / tampoco</b>: «— Me gusta leer. — A mí también.» / «— No me gusta correr. — A mí tampoco.»"
    ],
    gloss:[
      ["rubio","Louro."],
      ["moreno","Moreno (de cabelo escuro ou pele morena)."],
      ["pelo rizado","Cabelo encaracolado."],
      ["gafas","Óculos."],
      ["perezoso","Preguiçoso."],
      ["trabajador","Trabalhador."],
      ["tampoco","Também não."],
      ["camiseta","T-shirt."]
    ],
    quiz:[
      {q:"Complete: «Me ___ los videojuegos.»", opts:["gustan","gusta","gusto","gustas"], correct:0, explain:"«Los videojuegos» é plural, por isso «me gustan». Gustar concorda com a coisa de que se gosta.", pista:"Gustar concorda com o que vem depois, não com quem gosta.", irma:{q:"Complete: «A mi hermano le ___ la música.»", opts:["gusta","gustan","gusto","gustas"], correct:0, explain:"«La música» é singular: le gusta."}},
      {q:"Complete: «Tengo ___ amigos en el instituto.»", opts:["muchos","muy","mucho","muy muchos"], correct:0, explain:"Antes de um nome usa-se mucho, concordando: muchos amigos (masculino plural)."},
      {q:"Complete: «Mi prima es ___ simpática.»", opts:["muy","mucha","mucho","muchas"], correct:0, explain:"Antes de um adjetivo usa-se «muy»: muy simpática.", pista:"Muy + adjetivo; mucho + nome."},
      {q:"Complete: «Yo ___ jugar al tenis.» (poder)", opts:["puedo","podo","pueda","podemos"], correct:0, explain:"Poder muda o → ue no presente: puedo, puedes, puede (mas podemos, podéis).", irma:{q:"Complete: «Ellos ___ ir al cine.» (querer)", opts:["quieren","queren","quieron","queremos"], correct:0, explain:"Querer muda e → ie: quieren."}},
      {q:"Como se diz «A minha irmã é mais velha do que eu»?", opts:["Mi hermana es mayor que yo.","Mi hermana es más vieja que mí.","Mi hermana es mayor de yo.","Mi hermana es más mayor que me."], correct:0, explain:"«Mais velho» diz-se «mayor», e a comparação usa «que»: «mayor que yo»."},
      {q:"«— No me gusta el pescado. — A mí ___.»", opts:["tampoco","también","sí","nunca"], correct:0, explain:"Para concordar com uma frase negativa usa-se «tampoco» (também não)."}
    ],
    compare:{
      left:{title:"🔸 Muy", points:["Antes de adjetivos e advérbios","Não muda","muy alto, muy bien"]},
      right:{title:"🔹 Mucho", points:["Antes de nomes (concorda) ou depois de verbos","mucho, mucha, muchos, muchas","muchos amigos; estudio mucho"]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 3 (pp. 42–43)"
  },
  {
    id:"a5", num:5, c:"m5", icon:"👨‍👩‍👧‍👦",
    title:"Mi Familia",
    subtitle:"Família, profissões e alimentação; possessivos; irregulares na 1.ª pessoa; indefinidos", pages:"¡A bordo! 7, caderno de ejercicios, unidade 4 (pp. 44–53)",
    lead:"Uma família é como uma equipa com papéis diferentes. Neste mundo vais apresentar a tua família e os animais de estimação, falar de profissões, comida e festas, usar os possessivos, os verbos irregulares na 1.ª pessoa e as palavras algo, nada, alguien e nadie.",
    missions:[
      {t:"Árbol Genealógico", d:"Família e parentesco", f:"Faz a tua árvore genealógica em espanhol: padre, madre, hermanos, abuelos, tíos, primos.\nEscreve 5 frases com possessivos: «Mi abuela se llama… Su perro es…»", xp:10},
      {t:"¿A Qué se Dedica?", d:"Profissões", f:"Escreve a profissão de 5 pessoas da tua família ou que conheças (médico/médica, profesor/profesora, cocinero/a…) e o que fazem.", xp:10},
      {t:"La Lista de la Compra", d:"Alimentação, pesos e embalagens", f:"Faz uma lista de compras para uma festa de família com pesos e embalagens: un kilo de…, una docena de…, una botella de…, una lata de…, un paquete de…", xp:10},
      {t:"Hago, Pongo, Salgo", d:"Irregulares na 1.ª pessoa", f:"Escreve 6 frases sobre a tua manhã com hacer, poner, salir, conocer, saber e traer na 1.ª pessoa.\nEx.: «Salgo de casa a las ocho.»", xp:10}
    ],
    resumo:[
      "<b>Família</b>: el padre, la madre, el hermano, la abuela, el tío, la prima, el sobrino (o filho do irmão), los suegros; familia numerosa, monoparental, reconstituida.",
      "<b>Possessivos</b> antes do nome: mi/mis, tu/tus, su/sus, nuestro/a/os/as, vuestro/a/os/as, su/sus: «mi madre», «nuestros abuelos». Depois do nome ou sozinhos: mío, tuyo, suyo… «Este libro es mío.»",
      "<b>Irregulares na 1.ª pessoa do presente</b>: hacer → hago; poner → pongo; salir → salgo; traer → traigo; conocer → conozco; saber → sé; ver → veo; dar → doy. As outras pessoas são regulares: haces, hace…",
      "<b>Indefinidos</b>: algo (alguma coisa) / nada (nada); alguien (alguém) / nadie (ninguém); algún/alguno/a (algum) / ningún/ninguno/a (nenhum). «¿Hay alguien en casa? — No, no hay nadie.»",
      "<b>Profissões</b>: médico/a, enfermero/a, profesor/a, cocinero/a, abogado/a, bombero/a, camarero/a (empregado de mesa), dependiente/a (empregado de loja).",
      "<b>Pesos, medidas e embalagens</b>: un kilo, medio kilo, cien gramos, un litro, una docena (12), una botella, una lata, un paquete, una caja."
    ],
    gloss:[
      ["sobrino","Sobrinho."],
      ["suegros","Sogros."],
      ["mascota","Animal de estimação."],
      ["camarero","Empregado de mesa."],
      ["dependiente","Empregado de loja."],
      ["nadie","Ninguém."],
      ["lata","Lata."],
      ["docena","Dúzia."]
    ],
    quiz:[
      {q:"Complete: «Yo ___ los deberes por la tarde.» (hacer)", opts:["hago","hazo","haco","hace"], correct:0, explain:"Hacer é irregular na 1.ª pessoa: hago (as outras pessoas: haces, hace…).", pista:"É um dos verbos com «-go» na 1.ª pessoa.", irma:{q:"Complete: «Yo ___ de casa a las ocho.» (salir)", opts:["salgo","salo","sale","salimos"], correct:0, explain:"Salir é irregular na 1.ª pessoa: salgo."}},
      {q:"Complete: «Yo ___ a tu hermano.» (conocer)", opts:["conozco","conoco","conocio","conoce"], correct:0, explain:"Conocer faz «conozco» na 1.ª pessoa, tal como parecer → parezco e conducir → conduzco. As outras pessoas são regulares: conoces, conoce…"},
      {q:"Complete: «¿Hay ___ en la puerta? — No, no hay nadie.»", opts:["alguien","algo","nada","ningún"], correct:0, explain:"Para pessoas usa-se alguien/nadie; para coisas, algo/nada. A resposta «nadie» mostra que se fala de pessoas.", pista:"Pessoas → alguien/nadie; coisas → algo/nada."},
      {q:"Como se diz «os nossos avós»?", opts:["nuestros abuelos","nuestro abuelos","nos abuelos","sus abuelos"], correct:0, explain:"O possessivo concorda com o que se possui: abuelos é masculino plural → nuestros abuelos."},
      {q:"O que é um «sobrino»?", opts:["O filho do irmão ou da irmã","O primo","O sogro","O neto"], correct:0, explain:"«Sobrino» é sobrinho. O primo é «primo» e o neto é «nieto»."},
      {q:"Quantos ovos há numa «docena»?", opts:["12","10","6","20"], correct:0, explain:"Uma docena é uma dúzia: 12. Meia dúzia é «media docena»: 6."}
    ],
    compare:{
      left:{title:"👤 Pessoas", points:["alguien (alguém)","nadie (ninguém)","¿Viene alguien? No viene nadie."]},
      right:{title:"📦 Coisas", points:["algo (alguma coisa)","nada (nada)","¿Quieres algo? No quiero nada."]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 4 (pp. 52–53)"
  },
  {
    id:"a6", num:6, c:"m6", icon:"🏡",
    title:"Mi Casa",
    subtitle:"A casa e as rotinas; hay/está; conocer, hacer, poner, salir; verbos pronominais", pages:"¡A bordo! 7, caderno de ejercicios, unidade 5 (pp. 54–63)",
    lead:"Construir e decorar uma casa num jogo é divertido; descrevê-la em espanhol também. Neste mundo vais falar dos tipos de casa, das divisões e dos objetos, usar «hay» e «está» sem confusões e contar a tua rotina com os verbos pronominais (me levanto, me ducho…).",
    missions:[
      {t:"Mi Casa Ideal", d:"Tipos e partes da casa", f:"Desenha a planta da tua casa ideal e legenda as divisões em espanhol: el salón, la cocina, el dormitorio, el cuarto de baño, el pasillo, la terraza.\nEscreve 5 frases com «hay».", xp:10},
      {t:"¿Dónde Está?", d:"Hay e estar", f:"Descreve o teu quarto em 6 frases: 3 com «hay» (o que existe) e 3 com «está/están» (onde está).\nEx.: «Hay una lámpara. La lámpara está encima de la mesa.»", xp:10},
      {t:"Mi Rutina", d:"Verbos pronominais", f:"Escreve a tua rotina de um dia de escola com 6 verbos pronominais: levantarse, ducharse, vestirse, peinarse, acostarse, despertarse.\nEx.: «Me levanto a las siete.»", xp:10}
    ],
    resumo:[
      "<b>Tipos de casa</b>: el piso (apartamento), la casa, el chalé (moradia). <b>Divisões</b>: el salón, la cocina, el dormitorio, el cuarto de baño, el pasillo (corredor), la terraza, el jardín.",
      "<b>Hay</b> apresenta o que existe, com artigo indefinido, número ou sem artigo: «Hay una cama», «Hay dos sillas», «Hay libros». <b>Estar</b> localiza algo já conhecido, com artigo definido: «La cama está al lado de la ventana».",
      "<b>Preposições de lugar</b>: encima de (em cima de), debajo de (debaixo de), al lado de (ao lado de), delante de (à frente de), detrás de (atrás de), entre, enfrente de.",
      "<b>Conocer</b> (conozco, conoces…), <b>hacer</b> (hago, haces…), <b>poner</b> (pongo, pones…) e <b>salir</b> (salgo, sales…) são irregulares só na 1.ª pessoa do presente.",
      "<b>Verbos pronominais</b> levam o pronome antes do verbo: levantarse → me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Outros: ducharse, vestirse (me visto), acostarse (me acuesto), despertarse (me despierto).",
      "Para a rotina: «primero», «después», «luego», «por la mañana», «por la tarde», «por la noche»."
    ],
    gloss:[
      ["piso","Apartamento."],
      ["salón","Sala de estar."],
      ["dormitorio","Quarto."],
      ["cuarto de baño","Casa de banho."],
      ["pasillo","Corredor."],
      ["encima de","Em cima de."],
      ["debajo de","Debaixo de."],
      ["levantarse","Levantar-se."]
    ],
    quiz:[
      {q:"Complete: «En mi habitación ___ un escritorio.»", opts:["hay","está","es","tiene"], correct:0, explain:"Para dizer que algo existe, com artigo indefinido (un escritorio), usa-se «hay».", pista:"«Un/una» → hay; «el/la» → está.", irma:{q:"Complete: «El escritorio ___ al lado de la ventana.»", opts:["está","hay","es","tiene"], correct:0, explain:"Para localizar algo já conhecido (el escritorio), usa-se «estar»: está."}},
      {q:"Complete: «Yo ___ a las siete.» (levantarse)", opts:["me levanto","levanto me","se levanta","me levanta"], correct:0, explain:"Verbo pronominal na 1.ª pessoa: o pronome «me» vem antes: me levanto.", pista:"O pronome vai antes do verbo conjugado."},
      {q:"Complete: «Nosotros ___ a las diez.» (acostarse)", opts:["nos acostamos","nos acuestamos","se acostamos","nos acuestan"], correct:0, explain:"Acostarse muda o → ue, mas não em nosotros: nos acostamos (e me acuesto, te acuestas…).", irma:{q:"Complete: «Mi padre ___ a las once.» (acostarse)", opts:["se acuesta","se acosta","me acuesto","se acuestan"], correct:0, explain:"Acostarse com él: se acuesta (o → ue)."}},
      {q:"Complete: «Yo ___ la mesa para cenar.» (poner)", opts:["pongo","pono","pone","ponemos"], correct:0, explain:"Poner é irregular na 1.ª pessoa: pongo."},
      {q:"O que é o «pasillo»?", opts:["O corredor","O quarto","A sala","O jardim"], correct:0, explain:"«Pasillo» é o corredor. O quarto é el dormitorio; a sala é el salón."},
      {q:"O que quer dizer «debajo de la cama»?", opts:["Debaixo da cama","Em cima da cama","Ao lado da cama","Atrás da cama"], correct:0, explain:"«Debajo de» = debaixo de. Em cima de = encima de; ao lado de = al lado de; atrás de = detrás de."}
    ],
    compare:{
      left:{title:"✨ Hay", points:["O que existe","Com un/una, números ou sem artigo","Hay una mesa. Hay sillas."]},
      right:{title:"📍 Estar", points:["Onde está algo conhecido","Com el/la/los/las","La mesa está en el salón."]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 5 (pp. 62–63)"
  },
  {
    id:"a7", num:7, c:"m7", icon:"🏙️",
    title:"Mi Ciudad",
    subtitle:"Lojas e serviços, transportes, estações; estar + gerúndio; imperativo; lo/la; a e en", pages:"¡A bordo! 7, caderno de ejercicios, unidade 6 (pp. 64–73)",
    lead:"Explorar uma cidade nova é como explorar um mapa de jogo: lojas, serviços, transportes e caminhos. Neste mundo vais falar da cidade e das viagens, dizer o que está a acontecer agora, dar instruções e direções com o imperativo e usar os pronomes lo, la, los e las.",
    missions:[
      {t:"Mi Barrio", d:"Espaços, lojas e serviços", f:"Faz um mapa simples do teu bairro com 6 lugares em espanhol: la panadería, la farmacia, el supermercado, el ayuntamiento, la estación, el parque.\nEscreve uma frase sobre cada um.", xp:10},
      {t:"¿Cómo Llego?", d:"Pedir e dar direções com o imperativo", f:"Escreve as instruções para ir da tua casa à escola: sigue todo recto, gira a la derecha, cruza la calle, toma la primera a la izquierda.\nFaz o mesmo de forma educada (usted): siga, gire, cruce.", xp:10},
      {t:"Ahora Mismo", d:"Estar + gerúndio", f:"Imagina uma praça da cidade e escreve 6 frases sobre o que as pessoas estão a fazer agora.\nEx.: «Un chico está comiendo un helado.»", xp:10},
      {t:"Viaje de Verano", d:"Transportes, estações e viagens", f:"Planeia uma viagem de verão por Espanha: destinos, transportes (en tren, en avión, en autobús) e atividades.\nUsa «Voy a + lugar» e «Voy en + transporte».", xp:10}
    ],
    resumo:[
      "<b>Lugares da cidade</b>: la panadería, la farmacia, el supermercado, la librería (loja de livros), la biblioteca, el ayuntamiento (câmara municipal), correos, la estación, el hospital.",
      "<b>Estações do ano</b>: la primavera, el verano, el otoño, el invierno. <b>Transportes</b>: en coche, en autobús, en tren, en metro, en avión, en bici; mas «a pie».",
      "<b>Estar + gerúndio</b> = ação em curso: «Estoy estudiando». Gerúndio: -ar → -ando (hablando); -er/-ir → -iendo (comiendo, viviendo). Irregulares: leer → leyendo; dormir → durmiendo; pedir → pidiendo.",
      "<b>Imperativo afirmativo</b> (tú): habla, come, vive (igual à 3.ª pessoa do presente). Irregulares: ven (venir), ve (ir), sal (salir), haz (hacer), pon (poner), ten (tener), di (decir), sé (ser). Para <b>usted</b>: hable, coma, viva; gire, siga, cruce.",
      "<b>Pronomes de complemento direto</b>: lo, la, los, las substituem uma coisa ou pessoa já referida: «¿Tienes el billete? — Sí, lo tengo.» «¿Ves a las chicas? — Sí, las veo.»",
      "<b>A e en</b>: «a» indica destino (Voy a Madrid; Voy al parque); «en» indica lugar onde se está (Estoy en Madrid) e meio de transporte (Voy en tren).",
      "<b>Direções</b>: sigue todo recto, gira a la derecha/izquierda, cruza la calle, toma la primera calle, está a la derecha, está enfrente de."
    ],
    gloss:[
      ["ayuntamiento","Câmara municipal."],
      ["librería","Livraria (loja de livros); a biblioteca é «biblioteca»."],
      ["correos","Os correios."],
      ["todo recto","Sempre em frente."],
      ["girar","Virar."],
      ["el billete","O bilhete."],
      ["el verano","O verão."],
      ["a pie","A pé."]
    ],
    quiz:[
      {q:"Complete: «Ahora mismo mi hermano ___ la tele.» (ver)", opts:["está viendo","está vendo","es viendo","está ve"], correct:0, explain:"Ação em curso: estar + gerúndio. Ver → viendo: «está viendo».", pista:"Estar + gerúndio (-ando / -iendo).", irma:{q:"Complete: «Nosotros ___ en el parque.» (jugar)", opts:["estamos jugando","estamos jugiendo","somos jugando","estamos juegando"], correct:0, explain:"Jugar é -ar: jugando. Com nosotros: estamos jugando."}},
      {q:"Qual é o gerúndio de «leer»?", opts:["leyendo","leiendo","leendo","leído"], correct:0, explain:"Leer faz «leyendo»: entre duas vogais, o i passa a y. «Leído» é o particípio."},
      {q:"Como se diz a um amigo (tú) «Vira à direita»?", opts:["Gira a la derecha.","Gire a la derecha.","Giras a la derecha.","Girar a la derecha."], correct:0, explain:"Imperativo de tú: gira. «Gire» é a forma de usted (formal).", irma:{q:"Como se diz a um senhor (usted) «Siga em frente»?", opts:["Siga todo recto.","Sigue todo recto.","Sigues todo recto.","Seguir todo recto."], correct:0, explain:"Imperativo de usted: siga. «Sigue» é a forma de tú."}},
      {q:"«¿Tienes la entrada? — Sí, ___ tengo.»", opts:["la","lo","le","las"], correct:0, explain:"«La entrada» é feminino singular: substitui-se por «la»: «Sí, la tengo».", pista:"O pronome concorda com o nome que substitui."},
      {q:"Complete: «Voy ___ Barcelona ___ tren.»", opts:["a / en","en / a","a / a","en / en"], correct:0, explain:"Destino com «a» (voy a Barcelona) e transporte com «en» (en tren)."},
      {q:"Qual é o imperativo de «hacer» para tú?", opts:["haz","hace","haga","hacé"], correct:0, explain:"Hacer tem imperativo irregular para tú: haz («Haz los deberes»). «Haga» é a forma de usted."}
    ],
    compare:{
      left:{title:"➡️ A", points:["Destino, para onde se vai","Voy a Madrid.","a + el = al"]},
      right:{title:"📍 En", points:["Lugar onde se está; transporte","Estoy en Madrid. Voy en tren.","(mas: a pie)"]}
    },
    boss:"¡A bordo! 7, caderno: «Preguntas tipo DELE» da unidade 6 (pp. 72–73) e a tabela de conjugação verbal (pp. 74–79)"
  }
];
