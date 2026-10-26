/* Inglês do 7.º ano. Aprendizagens Essenciais de Inglês do 7.º ano (nível A2); um mundo por unidade do manual
   «Engaging 7» (Porto Editora) e um mundo para os verbos irregulares da Verb Wheel. O manual e o caderno servem só
   de referência: frases, textos e exemplos são originais (sem nomes de personagens nem letras de canções do manual).
   Explicações em português; exemplos em inglês. Perguntas com pista (só a pedido) e irma (uma parecida depois de um erro).
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const ENG7_WORLDS = (function(){
  function EX(title, objetivo, comecar, passos, resultado, verificar){
    return {title:title, svg:'<ul class="wheel-legend">'+
      '<li><span aria-hidden="true">🎯</span><span><b>O que queremos fazer:</b> '+objetivo+'</span></li>'+
      '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> '+comecar+'</span></li>'+
      '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b><br>'+passos.join('<br>')+'</span></li>'+
      '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> '+resultado+'</span></li>'+
      '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> '+verificar+'</span></li></ul>'};
  }
  return [
  {
    id:"i1", num:1, c:"m1", icon:"👨‍👩‍👧",
    title:"Family Life",
    subtitle:"Present Simple, Present Continuous e advérbios de frequência", pages:"Engaging 7, unidade 1 «Family Life» (pp. 14–41); caderno (Workbook), pp. 6–19",
    lead:"Num jogo de equipa, cada jogador tem a sua rotina e, de vez em quando, faz algo diferente. Em inglês, a rotina diz-se no Present Simple («I always play after school») e o que está a acontecer agora no Present Continuous («I'm playing right now»). Neste mundo vais falar da família, das rotinas e das tradições.",
    missions:[
      {t:"My Family, My Team", d:"Vocabulário da família e descrever alguém", f:"Escreve 6 frases sobre pessoas da tua família: quem é, como é e o que faz (ex.: «My cousin is funny. He plays the guitar.»).\nUsa pelo menos 3 adjetivos de personalidade.\nLê as frases em voz alta.", xp:10},
      {t:"Routine Tracker", d:"Present Simple e advérbios de frequência", f:"Faz uma tabela com 6 atividades da tua semana.\nEscreve uma frase para cada uma com always, usually, often, sometimes, rarely ou never.\nVerifica a posição do advérbio: antes do verbo principal, mas depois de am/is/are.", xp:10},
      {t:"Right Now!", d:"Present Continuous", f:"Olha à tua volta (ou para uma imagem) e escreve 5 frases sobre o que as pessoas estão a fazer agora (ex.: «My brother is watching TV.»).\nSublinha am/is/are e a terminação -ing.", xp:10},
      {t:"Family Gathering", d:"Conectores then, after that, finally", f:"Escreve um email curto (60–80 palavras) a um amigo sobre um encontro de família.\nOrganiza-o com First, Then, After that e Finally.\nRevê a ortografia e a pontuação.", xp:10},
      {t:"Whose Is It?", d:"Possessive determiners e possessive pronouns", f:"Escreve 5 pares de frases como «It's my book. It's mine.»\nUsa my/mine, your/yours, his/his, her/hers e their/theirs.", xp:10}
    ],
    resumo:[
      "<b>Present Simple</b> — rotinas, hábitos e verdades gerais: «I play football on Saturdays.» Na 3.ª pessoa do singular junta-se -s: plays, -es: watches, goes, ou -ies: studies.",
      "Negativa e interrogativa com <b>do/does</b>: «She doesn't like fish.» / «Do you live here?» Com does, o verbo volta à forma base: «Does he play?» (e não «Does he plays?»).",
      "<b>Advérbios de frequência</b>, do mais ao menos frequente: always, usually, often, sometimes, rarely, never. Ficam antes do verbo principal («I often read») e depois do verbo to be («She is always late»).",
      "<b>Present Continuous</b> — o que está a acontecer agora ou neste período: am/is/are + verbo-ing: «They are playing.» Ortografia: make → making; swim → swimming; lie → lying.",
      "Palavras que pedem Present Continuous: now, right now, at the moment, today, Look!, Listen! Palavras que pedem Present Simple: every day, on Mondays, usually, never.",
      "<b>Conectores de sequência</b>: first, then, after that, finally.",
      "<b>Possessive determiners</b> (antes de um nome): my, your, his, her, its, our, their. <b>Possessive pronouns</b> (sozinhos): mine, yours, his, hers, ours, theirs: «This is my bike. It's mine.»",
      "<b>Question words</b>: what, where, when, who, why, how, how often, how many, which, whose."
    ],
    gloss:[
      ["stepmother","Madrasta."],
      ["half-brother","Meio-irmão."],
      ["grandparents","Avós."],
      ["only child","Filho único / filha única."],
      ["get on well with","Dar-se bem com alguém."],
      ["routine","Rotina, o que se faz habitualmente."],
      ["always","Sempre."],
      ["rarely","Raramente."],
      ["at the moment","Neste momento."],
      ["gathering","Encontro, reunião (de família ou de amigos)."],
      ["mine","Meu, minha (pronome: «It's mine»)."],
      ["whose","De quem."]
    ],
    quiz:[
      {q:"Complete: «My sister ___ to school by bus every day.»", opts:["goes","go","is going","going"], correct:0, explain:"«Every day» indica rotina: Present Simple. Com she/he/it, o verbo leva -s ou -es: go → goes.", pista:"«Every day» é rotina. E o sujeito é «my sister» (she).", irma:{q:"Complete: «My dad ___ the dishes after dinner.»", opts:["washes","wash","is wash","washing"], correct:0, explain:"Rotina, 3.ª pessoa do singular: wash → washes (verbos acabados em -sh juntam -es)."}},
      {q:"Complete: «Look! The baby ___.»", opts:["is sleeping","sleeps","sleep","sleeping"], correct:0, explain:"«Look!» mostra que está a acontecer agora: Present Continuous (is + sleeping).", pista:"«Look!» quer dizer que está a acontecer neste momento.", irma:{q:"Complete: «Be quiet! I ___ my homework.»", opts:["am doing","do","does","doing"], correct:0, explain:"Está a acontecer agora: am + doing."}},
      {q:"Onde fica o advérbio? Escolhe a frase correta.", opts:["I usually have breakfast at 8.","I have usually breakfast at 8.","Usually I have at 8 breakfast.","I have breakfast usually at 8 always."], correct:0, explain:"O advérbio de frequência fica antes do verbo principal: «I usually have…».", pista:"Antes do verbo principal, depois do verbo to be."},
      {q:"Complete: «She is ___ late for school.» (= nunca)", opts:["never","always","often","usually"], correct:0, explain:"«Never» quer dizer nunca. Com o verbo to be, o advérbio vem depois: «She is never late.»"},
      {q:"Qual é a pergunta correta?", opts:["Does he play the piano?","Does he plays the piano?","Do he play the piano?","He does play the piano?"], correct:0, explain:"Com he/she/it usa-se does, e o verbo volta à forma base: «Does he play…?» O -s já está no does.", pista:"O -s só aparece uma vez: no does ou no verbo, nunca nos dois.", irma:{q:"Qual é a negativa correta?", opts:["She doesn't like spiders.","She don't like spiders.","She doesn't likes spiders.","She not likes spiders."], correct:0, explain:"Com she: doesn't + verbo na forma base (like)."}},
      {q:"Complete: «This isn't your jacket. It's ___.» (= da minha irmã: dela)", opts:["hers","her","she","she's"], correct:0, explain:"Sozinho, sem nome a seguir, usa-se o possessive pronoun: hers. «Her» precisa de um nome a seguir: «her jacket».", pista:"Depois de «It's» não vem nenhum nome: precisas do pronome."},
      {q:"Qual é o -ing correto de «swim»?", opts:["swimming","swiming","swimeing","swimmming"], correct:0, explain:"Consoante-vogal-consoante numa sílaba tónica: dobra-se a última consoante: swim → swimming (tal como run → running)."},
      {q:"Que palavra completa? «___ often do you visit your grandparents?» «Once a month.»", opts:["How","What","When","Who"], correct:0, explain:"«How often» pergunta a frequência; a resposta «once a month» confirma."}
    ],
    posters:[
      EX("🔁 Exemplo 1 — Present Simple ou Present Continuous?", "escolher o tempo certo em «I usually ___ (walk) to school, but today I ___ (take) the bus.»", "procura as palavras-pista: usually (rotina) e today (agora, diferente do habitual).",
        ["usually → Present Simple: I usually walk", "today, diferente do habitual → Present Continuous: I'm taking"],
        "«I usually walk to school, but today I'm taking the bus.»", "lê a frase em voz alta: a rotina e a exceção ficam claras ✓."),
      EX("✉️ Exemplo 2 — Um email com conectores", "contar um almoço de família por ordem.", "escreve as ações por ordem e escolhe um conector para cada uma.",
        ["First, we had lunch at my grandmother's house.", "Then, we played board games.", "After that, my cousins and I went to the park.", "Finally, we watched a film together."],
        "Um parágrafo organizado, fácil de seguir.", "cada frase começa com um conector diferente e está no passado ✓.")
    ],
    compare:{
      left:{title:"🔁 Present Simple", points:["Rotinas e hábitos","always, usually, every day","I play / She plays"]},
      right:{title:"▶️ Present Continuous", points:["O que está a acontecer agora","now, at the moment, Look!","I'm playing / She's playing"]}
    },
    boss:"Engaging 7: Practice test da unidade 1 (p. 33) e Self-evaluation (p. 36); Workbook: Practice test (p. 15)"
  },
  {
    id:"i2", num:2, c:"m2", icon:"🏫",
    title:"School Days",
    subtitle:"Past Simple e Past Continuous", pages:"Engaging 7, unidade 2 «School Days» (pp. 42–69); caderno (Workbook), pp. 20–33",
    lead:"Os jogos guardam o histórico do que já aconteceu. Em inglês, para contar o que aconteceu usa-se o Past Simple («I won the game yesterday») e, para o que estava a acontecer num momento do passado, o Past Continuous («I was playing when the lights went out»). Neste mundo vais falar da escola e de memórias.",
    missions:[
      {t:"My School Map", d:"Instalações da escola", f:"Desenha a planta da tua escola com 8 espaços em inglês (canteen, library, gym, playground, science lab…).\nEscreve 4 frases com «There is / There are».", xp:10},
      {t:"Yesterday at School", d:"Past Simple: verbos regulares e irregulares", f:"Escreve 8 frases sobre o que fizeste ontem, 4 com verbos regulares (played, watched) e 4 com irregulares (went, ate).\nSublinha os irregulares e confirma-os na Verb Wheel.", xp:10},
      {t:"School Diary", d:"Escrever uma entrada de diário", f:"Escreve uma entrada de diário (60–80 palavras) sobre um dia de escola especial.\nUsa «so» e «because» pelo menos uma vez cada.", xp:10},
      {t:"When It Happened", d:"Past Continuous vs Past Simple", f:"Escreve 4 frases com «when» e «while»: uma ação longa (Past Continuous) interrompida por uma curta (Past Simple).\nEx.: «I was walking home when it started to rain.»", xp:10},
      {t:"Then and Now", d:"Was/were e there was/there were", f:"Compara a tua escola primária com a de agora em 6 frases: «There was a small playground. Now there is a big gym.»", xp:10}
    ],
    resumo:[
      "<b>Past Simple do verbo to be</b>: I/he/she/it was; you/we/they were. Negativa: wasn't, weren't. Pergunta: «Were you at school?»",
      "<b>There was / there were</b>: o passado de there is / there are: «There was a test. There were twenty students.»",
      "<b>Verbos regulares</b> no passado: -ed: play → played; like → liked; stop → stopped; study → studied.",
      "<b>Verbos irregulares</b> têm formas próprias, que se aprendem de cor: go → went; eat → ate; see → saw; write → wrote (ver a Verb Wheel e o mundo 6).",
      "Negativa e interrogativa com <b>did</b> e o verbo na forma base: «I didn't go.» / «Did you see it?» (e não «Did you saw»).",
      "<b>Past Continuous</b>: was/were + -ing, para uma ação que estava a decorrer: «At 8 p.m. I was studying.»",
      "<b>Past Continuous + Past Simple</b>: a ação longa é interrompida por uma curta: «I was reading when the phone rang.» «While» introduz a ação longa: «While I was reading, the phone rang.»",
      "<b>So</b> indica consequência («It was late, so I ran.»); <b>because</b> indica causa («I ran because it was late.»)."
    ],
    gloss:[
      ["canteen","Cantina, refeitório."],
      ["playground","Recreio."],
      ["gym","Ginásio, pavilhão."],
      ["science lab","Laboratório de ciências."],
      ["headteacher","Diretor/a da escola."],
      ["timetable","Horário."],
      ["yesterday","Ontem."],
      ["last week","Na semana passada."],
      ["ago","Há (tempo): «two days ago» = há dois dias."],
      ["while","Enquanto."],
      ["so","Por isso, então (consequência)."],
      ["because","Porque (causa)."]
    ],
    quiz:[
      {q:"Complete: «We ___ at the museum last Friday.»", opts:["were","was","are","been"], correct:0, explain:"«Last Friday» é passado. Com we usa-se were.", pista:"I/he/she/it → was; you/we/they → were.", irma:{q:"Complete: «My teacher ___ ill yesterday.»", opts:["was","were","is","be"], correct:0, explain:"Passado, com «my teacher» (she/he): was."}},
      {q:"Qual é o passado de «study»?", opts:["studied","studyed","studed","studid"], correct:0, explain:"Consoante + y: o y passa a i e junta-se -ed: studied (como cry → cried)."},
      {q:"Qual é o passado de «go»?", opts:["went","goed","gone","goes"], correct:0, explain:"«Go» é irregular: go → went → gone. «Gone» é o particípio passado, não o Past Simple.", pista:"É irregular. Confirma na Verb Wheel.", irma:{q:"Qual é o passado de «write»?", opts:["wrote","writed","written","writes"], correct:0, explain:"Irregular: write → wrote → written."}},
      {q:"Qual é a pergunta correta?", opts:["Did you see the match?","Did you saw the match?","Do you saw the match?","Saw you the match?"], correct:0, explain:"Com did, o verbo fica na forma base: «Did you see…?» O passado já está no did.", pista:"O passado só se marca uma vez: no did.", irma:{q:"Qual é a negativa correta?", opts:["She didn't eat the cake.","She didn't ate the cake.","She don't ate the cake.","She not ate the cake."], correct:0, explain:"didn't + forma base: didn't eat."}},
      {q:"Complete: «I ___ a book when my friend called.»", opts:["was reading","read","am reading","were reading"], correct:0, explain:"A ação longa (estava a ler) foi interrompida por uma curta (called): Past Continuous com I → was reading.", pista:"Qual era a ação que estava a decorrer? E qual a interrompeu?", irma:{q:"Complete: «They ___ football when it started to rain.»", opts:["were playing","was playing","played","are playing"], correct:0, explain:"Ação longa interrompida, com they: were playing."}},
      {q:"Complete: «There ___ two new students in my class last year.»", opts:["were","was","are","is"], correct:0, explain:"Passado e plural (two students): there were."},
      {q:"Complete: «I was tired, ___ I went to bed early.»", opts:["so","because","but","or"], correct:0, explain:"«So» introduz a consequência: estava cansado, por isso deitei-me cedo. «Because» viria antes da causa: «I went to bed early because I was tired.»", pista:"Depois da vírgula vem a causa ou a consequência?"},
      {q:"Qual é o passado de «stop»?", opts:["stopped","stoped","stopt","stopping"], correct:0, explain:"Consoante-vogal-consoante: dobra-se a última consoante antes de -ed: stop → stopped."}
    ],
    posters:[
      EX("🕰️ Exemplo 1 — Past Continuous interrompido", "juntar «estava a jogar» e «a luz foi abaixo» numa só frase.", "identifica a ação longa (jogar) e a curta (a luz foi abaixo).",
        ["Ação longa → Past Continuous: I was playing", "Ação curta → Past Simple: the lights went out", "Liga com when: I was playing when the lights went out."],
        "«I was playing when the lights went out.» (ou: «While I was playing, the lights went out.»)", "went é o passado irregular de go ✓."),
      EX("❓ Exemplo 2 — Perguntas no passado", "perguntar a um colega o que fez no fim de semana.", "usa Did + sujeito + verbo na forma base.",
        ["Did you go out?", "Where did you go?", "What did you eat?"],
        "Três perguntas corretas, todas com did.", "nenhuma tem o verbo no passado depois de did (went, ate) ✓.")
    ],
    compare:{
      left:{title:"✅ Past Simple", points:["Ação acabada no passado","yesterday, last week, ago","I played / I went"]},
      right:{title:"⏳ Past Continuous", points:["Ação a decorrer num momento do passado","while, at 8 p.m. yesterday","I was playing / They were playing"]}
    },
    boss:"Engaging 7: Practice test da unidade 2 (p. 61) e Self-evaluation (p. 64); Workbook: Practice test (p. 30)"
  },
  {
    id:"i3", num:3, c:"m3", icon:"🏠",
    title:"Houses & Homes",
    subtitle:"Some/any/no, pronomes indefinidos, comparativos e superlativos", pages:"Engaging 7, unidade 3 «Houses & Homes» (a partir da p. 70); caderno (Workbook), pp. 34–47",
    lead:"Construir a casa dos sonhos num jogo de blocos é fácil; descrevê-la em inglês também pode ser. Neste mundo vais descrever casas e divisões, usar some, any e no, comparar casas («bigger», «the most comfortable») e ligar ideias com but e however.",
    missions:[
      {t:"My Dream House", d:"Divisões e objetos da casa", f:"Desenha a planta da casa dos teus sonhos com 6 divisões em inglês.\nEscreve 6 frases: «In the living room there is a huge sofa.»", xp:10},
      {t:"Anything in the Fridge?", d:"Some, any, no", f:"Abre o frigorífico (com autorização!) ou imagina-o.\nEscreve 6 frases com some, any e no: «There is some milk. There aren't any eggs. There's no butter.»", xp:10},
      {t:"Compare the Homes", d:"Comparativos e superlativos", f:"Escolhe 3 casas (reais, de filmes ou de jogos).\nEscreve 6 frases a compará-las: «The castle is bigger than the cottage. The treehouse is the most fun.»", xp:10},
      {t:"Somebody, Nothing, Everywhere", d:"Pronomes indefinidos", f:"Escreve 6 frases com someone/somebody, anything, nobody, nothing, everywhere e somewhere.\nVerifica: anything nas perguntas e negativas; nobody e nothing já são negativos.", xp:10},
      {t:"Pros and Cons", d:"Conectores but e however", f:"Escreve um parágrafo sobre viver numa cidade ou no campo, com 2 vantagens e 2 desvantagens.\nUsa but numa frase e However no início de outra.", xp:10}
    ],
    resumo:[
      "<b>Some</b> usa-se em frases afirmativas e em ofertas ou pedidos: «There are some chairs.» / «Would you like some tea?»",
      "<b>Any</b> usa-se em frases negativas e interrogativas: «There aren't any chairs.» / «Are there any chairs?» <b>No</b> = not any: «There are no chairs.»",
      "<b>Pronomes indefinidos</b>: somebody/someone, something, somewhere (afirmativa); anybody/anyone, anything, anywhere (negativa e pergunta); nobody/no one, nothing, nowhere (sentido negativo, com verbo afirmativo); everybody/everyone, everything, everywhere.",
      "Atenção: com nobody ou nothing o verbo fica na afirmativa: «Nobody is here.» (e não «Nobody isn't here»).",
      "<b>Comparativo</b> de adjetivos curtos: -er + than: «bigger than», «nicer than», «happier than». Adjetivos longos: more + adjetivo + than: «more comfortable than».",
      "<b>Superlativo</b>: the + -est, ou the most + adjetivo longo: «the biggest», «the most expensive».",
      "<b>Irregulares</b>: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest.",
      "<b>But</b> liga duas ideias contrárias na mesma frase; <b>however</b> começa normalmente uma frase nova, com vírgula: «It's small. However, it's very cosy.»"
    ],
    gloss:[
      ["living room","Sala de estar."],
      ["bedroom","Quarto."],
      ["attic","Sótão."],
      ["basement","Cave."],
      ["cosy","Acolhedor/a."],
      ["neighbourhood","Bairro, vizinhança."],
      ["detached house","Moradia isolada."],
      ["flat","Apartamento (inglês britânico; nos EUA, apartment)."],
      ["somebody","Alguém."],
      ["nothing","Nada."],
      ["however","No entanto."],
      ["than","Do que (nas comparações)."]
    ],
    quiz:[
      {q:"Complete: «Are there ___ cookies left?»", opts:["any","some","no","a"], correct:0, explain:"Nas perguntas usa-se any: «Are there any cookies left?»", pista:"Pergunta ou negativa → any; afirmativa → some.", irma:{q:"Complete: «We haven't got ___ milk.»", opts:["any","some","no","a"], correct:0, explain:"Frase negativa (haven't): any."}},
      {q:"Complete: «There is ___ sugar in the cupboard, so we can make a cake.»", opts:["some","any","no","many"], correct:0, explain:"Frase afirmativa: some. E «so we can make a cake» mostra que há açúcar."},
      {q:"Qual é a frase correta?", opts:["Nobody is at home.","Nobody isn't at home.","Anybody is at home.","Nobody not is at home."], correct:0, explain:"«Nobody» já tem sentido negativo; o verbo fica na afirmativa: «Nobody is at home.» Em inglês não se usam duas negativas.", pista:"Em inglês só se usa uma negativa por frase."},
      {q:"Complete: «My room is ___ than my brother's.»", opts:["bigger","more big","biggest","the bigger"], correct:0, explain:"«Big» é curto: comparativo com -er e consoante dobrada: bigger than.", pista:"Adjetivo curto: -er. Consoante-vogal-consoante: dobra a consoante.", irma:{q:"Complete: «This chair is ___ than that one.»", opts:["more comfortable","comfortabler","most comfortable","the more comfortable"], correct:0, explain:"«Comfortable» é longo: more comfortable than."}},
      {q:"Complete: «It's the ___ house in the street.» (= melhor)", opts:["best","better","goodest","most good"], correct:0, explain:"«Good» é irregular: good → better → the best.", irma:{q:"Complete: «That was the ___ day of the holidays.» (= pior)", opts:["worst","worse","baddest","most bad"], correct:0, explain:"«Bad» é irregular: bad → worse → the worst."}},
      {q:"Complete: «I'm hungry, but there's ___ to eat.» (= nada)", opts:["nothing","anything","something","nobody"], correct:0, explain:"Nada = nothing, com o verbo na afirmativa («there's»). «Anything» precisaria de negativa: «there isn't anything».", pista:"O verbo «there's» está na afirmativa."},
      {q:"Qual é a frase correta?", opts:["The house is old. However, it's very cosy.","The house is old however it's very cosy however.","However the house is old, but cosy.","The house is old, however but cosy."], correct:0, explain:"«However» começa normalmente uma frase nova, seguido de vírgula. Não se junta a «but»: os dois mostram contraste."},
      {q:"Qual é o superlativo de «expensive»?", opts:["the most expensive","the expensivest","the more expensive","most expensiver"], correct:0, explain:"Adjetivo longo: the most + adjetivo: the most expensive."}
    ],
    posters:[
      EX("📏 Exemplo 1 — Comparar três casas", "comparar uma cabana (small), um apartamento e um castelo (big).", "escolhe adjetivos curtos e longos.",
        ["small → smaller than → the smallest", "big → bigger than → the biggest", "comfortable → more comfortable than → the most comfortable"],
        "«The flat is bigger than the cabin, but the castle is the biggest. The cabin is the most comfortable.»", "adjetivos curtos com -er/-est; longos com more/the most ✓."),
      EX("🧊 Exemplo 2 — O que há no frigorífico", "descrever o frigorífico com some, any e no.", "separa o que há do que não há.",
        ["Há → some: There is some cheese. There are some apples.", "Não há → any (negativa) ou no: There isn't any milk. / There's no milk.", "Pergunta → any: Is there any juice?"],
        "Quatro frases corretas sobre o frigorífico.", "some só na afirmativa; any na negativa e na pergunta ✓.")
    ],
    compare:{
      left:{title:"🔼 Comparativo", points:["Compara duas coisas","-er than / more … than","bigger than, more modern than"]},
      right:{title:"🏆 Superlativo", points:["O máximo num grupo","the -est / the most …","the biggest, the most modern"]}
    },
    boss:"Engaging 7: Practice test da unidade 3 e Self-evaluation (p. 92); Workbook: Practice test (p. 46)"
  },
  {
    id:"i4", num:4, c:"m4", icon:"🗺️",
    title:"Funky Places",
    subtitle:"Futuro (going to, will, Present Continuous), if clauses e direções", pages:"Engaging 7, unidade 4 «Funky Places»; caderno (Workbook), pp. 48–61",
    lead:"Num mapa de jogo é preciso planear a viagem e saber dar direções. Em inglês, para falar do futuro há três maneiras (going to, will e o Present Continuous), e para dar condições usam-se as if clauses. Neste mundo vais fazer compras, planear viagens e orientar-te numa cidade.",
    missions:[
      {t:"Holiday Plans", d:"Be going to", f:"Escreve 5 planos para as próximas férias com «be going to» (ex.: «I'm going to visit my cousins.»).\nAcrescenta 2 previsões com evidência: «Look at those clouds! It's going to rain.»", xp:10},
      {t:"Quick Decisions", d:"Will", f:"Escreve 4 diálogos curtos com decisões tomadas na hora: «— The phone is ringing. — I'll answer it!»\nAcrescenta 2 previsões sem evidência: «I think it will be sunny tomorrow.»", xp:10},
      {t:"If… then…", d:"If clauses tipo 0 e tipo 1", f:"Escreve 3 frases tipo 0 (verdades gerais: «If you heat water to 100 °C, it boils.»).\nEscreve 3 frases tipo 1 (situações possíveis: «If it rains, we will stay at home.»).", xp:10},
      {t:"How Do I Get There?", d:"Pedir e dar direções", f:"Desenha um mapa simples do teu bairro com 5 lugares.\nEscreve as direções de casa até 2 deles: go straight on, turn left, turn right, it's next to, it's opposite.", xp:10},
      {t:"Where Is It?", d:"Preposições de lugar e de movimento", f:"Escreve 8 frases sobre o teu quarto ou o mapa: in, on, at, under, next to, between, opposite; e de movimento: into, out of, across, along.", xp:10}
    ],
    resumo:[
      "<b>Be going to</b> + verbo: planos e intenções já decididos («I'm going to study medicine.») e previsões com evidência («Look at the sky! It's going to rain.»).",
      "<b>Will</b> + verbo: decisões tomadas no momento («I'll help you!»), promessas («I'll call you.») e previsões ou opiniões sobre o futuro («I think robots will do our homework.»). Negativa: won't.",
      "<b>Present Continuous</b> com valor de futuro: compromissos combinados, com hora ou data: «I'm meeting Ana at 5 o'clock.»",
      "<b>If clause tipo 0</b> — verdades gerais e factos científicos: If + Present Simple, Present Simple: «If you mix red and yellow, you get orange.»",
      "<b>If clause tipo 1</b> — situações possíveis no futuro: If + Present Simple, will + verbo: «If you study, you will pass.» Depois de if não se usa will: «If it rains» (e não «If it will rain»).",
      "<b>Direções</b>: go straight on, turn left/right, take the first/second street on the left, cross the road, it's on your right, it's next to/opposite/between.",
      "<b>Preposições de lugar</b>: in (dentro de, em cidades e países), on (sobre, em ruas), at (num ponto, num endereço). <b>De movimento</b>: into, out of, across, along, past, through.",
      "<b>Lojas</b>: bakery, butcher's, chemist's (UK) / pharmacy (US), bookshop, newsagent's, shopping centre."
    ],
    gloss:[
      ["bakery","Padaria."],
      ["chemist's","Farmácia (inglês britânico)."],
      ["shopping centre","Centro comercial."],
      ["go straight on","Seguir em frente."],
      ["turn left","Virar à esquerda."],
      ["opposite","Em frente de, do outro lado de."],
      ["between","Entre (duas coisas)."],
      ["across","Através de, para o outro lado."],
      ["countryside","Campo (por oposição à cidade)."],
      ["won't","Forma curta de «will not»."]
    ],
    quiz:[
      {q:"Complete: «Look at those dark clouds! It ___ rain.»", opts:["is going to","will","rains","is raining"], correct:0, explain:"Previsão com evidência (as nuvens escuras): be going to.", pista:"Há uma prova à vista (as nuvens)?", irma:{q:"Complete: «Careful! You ___ fall off that chair!»", opts:["are going to","will","fall","are falling"], correct:0, explain:"Previsão com evidência (estás em cima da cadeira e a desequilibrar-te): are going to."}},
      {q:"Complete: «— I'm thirsty. — Wait, I ___ get you some water.»", opts:["'ll","'m going to","get","am getting"], correct:0, explain:"Decisão tomada no momento: will («I'll get you some water»).", pista:"A decisão foi tomada agora, ao ouvir o outro?", irma:{q:"Complete: «— It's cold in here. — I ___ close the window.»", opts:["'ll","'m going to","close","am closing"], correct:0, explain:"Decisão no momento: I'll close the window."}},
      {q:"Complete: «If you heat ice, it ___.»", opts:["melts","will melt","melted","is melting"], correct:0, explain:"Verdade científica: if clause tipo 0, com Present Simple nas duas partes."},
      {q:"Complete: «If it ___ tomorrow, we will go to the beach.»", opts:["is sunny","will be sunny","was sunny","be sunny"], correct:0, explain:"Tipo 1: If + Present Simple, will + verbo. Depois de if não se usa will.", pista:"Na parte do «if», o verbo fica no presente.", irma:{q:"Complete: «If you ___ now, you will catch the bus.»", opts:["leave","will leave","left","leaving"], correct:0, explain:"Depois de if: Present Simple (leave); a consequência leva will."}},
      {q:"Complete: «I ___ my grandparents on Saturday. We've already bought the train tickets.»", opts:["am visiting","visit","visited","visits"], correct:0, explain:"Compromisso combinado, com data e bilhetes comprados: Present Continuous com valor de futuro. Também se poderia dizer «I'm going to visit»."},
      {q:"O que quer dizer «It's opposite the bank»?", opts:["Fica em frente do banco, do outro lado","Fica dentro do banco","Fica ao lado do banco","Fica longe do banco"], correct:0, explain:"«Opposite» = do outro lado, em frente. «Next to» = ao lado; «in» = dentro."},
      {q:"Complete: «My cousin lives ___ London.»", opts:["in","on","at","into"], correct:0, explain:"Com cidades e países usa-se in: in London, in Portugal."},
      {q:"Qual destas frases está errada?", opts:["If it will rain, we will stay home.","If it rains, we will stay home.","We will stay home if it rains.","If you mix blue and yellow, you get green."], correct:0, explain:"Depois de if não se usa will: «If it rains», e não «If it will rain»."}
    ],
    posters:[
      EX("🔮 Exemplo 1 — Três futuros, três situações", "escolher entre going to, will e Present Continuous.", "pergunta: é um plano, uma decisão de agora ou um compromisso marcado?",
        ["Plano já decidido: I'm going to learn the guitar this year.", "Decisão no momento: — The bin is full. — I'll take it out.", "Compromisso marcado: I'm playing tennis with Rui at 6."],
        "Três frases, três formas de futuro, cada uma no seu caso.", "o compromisso tem hora marcada; a decisão foi tomada ao falar ✓."),
      EX("🧭 Exemplo 2 — Dar direções", "explicar o caminho da escola até à padaria.", "imagina-te à porta da escola, virado para a rua.",
        ["Go straight on for two blocks.", "Turn right at the traffic lights.", "Take the first street on the left.", "The bakery is on your right, next to the chemist's."],
        "Quatro instruções claras, uma por frase.", "segue as instruções num mapa e confirma que chegas lá ✓.")
    ],
    compare:{
      left:{title:"📅 Be going to", points:["Planos já decididos","Previsões com evidência","I'm going to travel."]},
      right:{title:"⚡ Will", points:["Decisões no momento e promessas","Previsões e opiniões","I'll help you. I think it will snow."]}
    },
    boss:"Engaging 7: Practice test da unidade 4; Workbook: Practice test (p. 58)"
  },
  {
    id:"i5", num:5, c:"m5", icon:"⚽",
    title:"Leisure & Holidays",
    subtitle:"Verbos modais, conectores, formação de palavras e question tags", pages:"Engaging 7, unidade 5 «Leisure & Holidays»; caderno (Workbook), pp. 62–73",
    lead:"Num jogo há regras: o que podes fazer, o que deves fazer e o que é proibido. Em inglês, isso diz-se com os verbos modais: can, could, should, might, must e mustn't. Neste mundo vais falar de desportos, talentos e férias, formar palavras novas e fazer perguntas de confirmação.",
    missions:[
      {t:"Talent Show", d:"Can e could: capacidade", f:"Escreve 4 coisas que consegues fazer agora (can) e 3 que conseguias fazer quando eras pequeno (could).\nAcrescenta 2 que ainda não consegues (can't).", xp:10},
      {t:"Camp Rules", d:"Must, mustn't, should", f:"Escreve 6 regras para um campo de férias desportivo: 2 com must, 2 com mustn't e 2 conselhos com should.", xp:10},
      {t:"Maybe…", d:"Might: possibilidade", f:"Escreve 4 frases sobre o que talvez faças no próximo fim de semana com might (ex.: «I might go to the cinema.»).", xp:10},
      {t:"Word Builder", d:"Prefixos e sufixos; palavras compostas", f:"Forma 8 palavras novas: 4 com prefixos (un-, dis-, im-, re-) e 4 com sufixos (-ful, -less, -er, -ness).\nEscreve 3 palavras compostas (football, bedroom…).", xp:10},
      {t:"Isn't It?", d:"Question tags", f:"Escreve 6 frases com question tags sobre desporto: «You like basketball, don't you?» / «She can't swim, can she?»\nVerifica: frase afirmativa → tag negativa, e vice-versa.", xp:10}
    ],
    resumo:[
      "<b>Can</b>: capacidade e permissão no presente: «I can swim.» / «Can I go out?» <b>Could</b>: capacidade no passado («I could read when I was five.») e pedidos educados («Could you help me?»).",
      "<b>Should</b>: conselho: «You should drink water during the match.» <b>Shouldn't</b>: conselho para não fazer.",
      "<b>Must</b>: obrigação forte: «You must wear a helmet.» <b>Mustn't</b>: proibição: «You mustn't run near the pool.» Atenção: <b>don't have to</b> quer dizer «não é obrigatório», não é proibição.",
      "<b>Might</b>: possibilidade: «It might rain later.» (talvez chova).",
      "Os modais não levam -s na 3.ª pessoa e o verbo a seguir fica na forma base, sem to: «She can play» (e não «She cans to play»).",
      "<b>Conectores</b>: so (por isso), therefore (portanto, mais formal), however (no entanto).",
      "<b>Formação de palavras</b>: prefixos mudam o sentido (happy → unhappy; agree → disagree; possible → impossible; write → rewrite); sufixos mudam a classe (play → player; help → helpful/helpless; kind → kindness). <b>Palavras compostas</b>: football, swimming pool, skateboard.",
      "<b>Question tags</b> confirmam uma ideia: afirmativa → tag negativa («It's fun, isn't it?»); negativa → tag afirmativa («You don't like tennis, do you?»). O tag repete o auxiliar ou o modal da frase."
    ],
    gloss:[
      ["leisure","Tempos livres, lazer."],
      ["helmet","Capacete."],
      ["coach","Treinador/a."],
      ["skill","Capacidade, habilidade."],
      ["might","Talvez (possibilidade)."],
      ["mustn't","Não se pode (proibição)."],
      ["should","Devia, deve (conselho)."],
      ["therefore","Portanto, por conseguinte."],
      ["helpless","Indefeso/a, sem ajuda."],
      ["unbelievable","Inacreditável."],
      ["campsite","Parque de campismo."],
      ["sunscreen","Protetor solar."]
    ],
    quiz:[
      {q:"Complete: «You ___ use your phone during the exam. It's forbidden.»", opts:["mustn't","don't have to","should","might"], correct:0, explain:"Proibição: mustn't. «Don't have to» quer dizer que não é obrigatório, mas é permitido.", pista:"«It's forbidden» = é proibido.", irma:{q:"Complete: «You ___ swim here. There are sharks!»", opts:["mustn't","don't have to","can","might"], correct:0, explain:"É proibido (e perigoso): mustn't."}},
      {q:"Complete: «You look tired. You ___ go to bed earlier.»", opts:["should","must","might","could"], correct:0, explain:"Um conselho: should."},
      {q:"Qual é a frase correta?", opts:["She can play the guitar.","She cans play the guitar.","She can to play the guitar.","She can plays the guitar."], correct:0, explain:"Os modais não levam -s e o verbo a seguir fica na forma base, sem to: «She can play».", pista:"Depois de um modal: verbo na forma base, sem «to» e sem «-s»."},
      {q:"Complete: «Take an umbrella. It ___ rain this afternoon.»", opts:["might","must","should","can't"], correct:0, explain:"Possibilidade (talvez chova): might."},
      {q:"Complete: «It's a great game, ___?»", opts:["isn't it","is it","doesn't it","aren't it"], correct:0, explain:"Frase afirmativa com is → tag negativa com isn't: «isn't it?».", pista:"Frase afirmativa → tag negativa, com o mesmo auxiliar.", irma:{q:"Complete: «You don't like rugby, ___?»", opts:["do you","don't you","are you","aren't you"], correct:0, explain:"Frase negativa com don't → tag afirmativa com do: «do you?»."}},
      {q:"Que palavra significa «não é possível»?", opts:["impossible","unpossible","dispossible","possibleless"], correct:0, explain:"O prefixo de «possible» é im-: impossible. (un- usa-se, por exemplo, em unhappy; dis- em disagree.)"},
      {q:"Complete: «I could ___ when I was four.»", opts:["swim","swimming","to swim","swam"], correct:0, explain:"Depois de could, o verbo fica na forma base: could swim."},
      {q:"Complete: «It was raining; ___, the match was cancelled.»", opts:["therefore","however","because","but"], correct:0, explain:"Consequência, num registo mais formal: therefore (portanto). «However» mostraria contraste."}
    ],
    posters:[
      EX("🏕️ Exemplo 1 — Regras do campo de férias", "escrever regras com o modal certo.", "decide para cada regra: é obrigatório, proibido, aconselhado ou só possível?",
        ["Obrigatório: You must wear a life jacket in the canoe.", "Proibido: You mustn't leave the camp alone.", "Conselho: You should bring sunscreen.", "Possível: We might go hiking on Friday."],
        "Quatro regras, cada uma com o modal certo.", "nenhum modal leva -s nem to antes do verbo ✓."),
      EX("🏷️ Exemplo 2 — Question tags passo a passo", "acrescentar o tag a «She can't skate».", "procura o auxiliar ou o modal da frase: can't.",
        ["A frase é negativa → o tag é afirmativo.", "Repete o modal: can.", "Junta o pronome: she → «can she?»"],
        "«She can't skate, can she?»", "lê em voz alta: soa como uma pergunta de confirmação ✓.")
    ],
    compare:{
      left:{title:"⛔ Mustn't", points:["Proibido","Não podes mesmo fazer","You mustn't run near the pool."]},
      right:{title:"🆓 Don't have to", points:["Não é obrigatório","Podes fazer, se quiseres","You don't have to wear a uniform."]}
    },
    boss:"Engaging 7: Practice test da unidade 5; Workbook: Practice test (p. 69)"
  },
  {
    id:"i6", num:6, c:"m6", icon:"🎡",
    title:"Verb Wheel: Irregular Verbs",
    subtitle:"Os 20 verbos irregulares da Verb Wheel", pages:"Engaging 7, Verb Wheel (anexo do manual); usa-se em todas as unidades",
    lead:"Os verbos irregulares são como atalhos secretos de um jogo: não seguem a regra do -ed e têm de ser decorados. Neste mundo treinas os 20 verbos da Verb Wheel do teu manual: o infinitivo, o Past Simple e o Past Participle, um pouco de cada vez.",
    missions:[
      {t:"Spin the Wheel", d:"Infinitivo, Past Simple e Past Participle", f:"Roda a Verb Wheel do manual e copia os 20 verbos numa tabela com 3 colunas.\nDiz cada linha em voz alta 3 vezes (ex.: go – went – gone).", xp:10},
      {t:"Families of Verbs", d:"Agrupar verbos com o mesmo padrão", f:"Separa os verbos em grupos: as 3 formas iguais ou quase (make – made – made; find – found – found); passado e particípio iguais (buy – bought – bought); as 3 diferentes (eat – ate – eaten).\nOs grupos ajudam a decorar.", xp:10},
      {t:"Flashcards", d:"Treino espaçado", f:"Faz 20 cartões: infinitivo de um lado, passado e particípio do outro.\nTreina 5 por dia. Os que errares voltam no dia seguinte; os que acertares, daqui a 3 dias.", xp:10},
      {t:"My Weekend Story", d:"Usar os irregulares num texto", f:"Escreve uma história de 80 palavras sobre um fim de semana, com pelo menos 8 verbos irregulares no Past Simple.\nSublinha-os e confirma-os na Verb Wheel.", xp:10}
    ],
    resumo:[
      "Os <b>verbos irregulares</b> não fazem o passado com -ed: têm formas próprias, que se aprendem de cor.",
      "As três formas: <b>infinitivo</b> (go), <b>Past Simple</b> (went) e <b>Past Participle</b> (gone). O Past Simple usa-se para ações acabadas no passado; o Past Participle vais precisar dele mais tarde, por exemplo no Present Perfect.",
      "Formas iguais no passado e no particípio: buy – bought – bought; find – found – found; have – had – had; leave – left – left; make – made – made; say – said – said.",
      "Formas diferentes: be – was/were – been; choose – chose – chosen; do – did – done; eat – ate – eaten; forget – forgot – forgotten; give – gave – given; go – went – gone; know – knew – known; see – saw – seen; speak – spoke – spoken; take – took – taken; write – wrote – written.",
      "Particípio igual ao infinitivo: come – came – come; run – ran – run.",
      "<b>Say</b> e <b>said</b> escrevem-se com ai, mas «said» lê-se /sed/.",
      "Com did (negativa e pergunta) usa-se a forma base: «I didn't go» / «Did you see…?»"
    ],
    gloss:[
      ["went","Passado de «go» (fui, foste, foi…)."],
      ["bought","Passado e particípio de «buy» (comprar)."],
      ["chose","Passado de «choose» (escolher)."],
      ["forgot","Passado de «forget» (esquecer)."],
      ["knew","Passado de «know» (saber, conhecer)."],
      ["left","Passado e particípio de «leave» (partir, deixar)."],
      ["spoke","Passado de «speak» (falar)."],
      ["took","Passado de «take» (levar, apanhar)."],
      ["wrote","Passado de «write» (escrever)."],
      ["been","Particípio de «be» (sido, estado)."]
    ],
    quiz:[
      {q:"Qual é o Past Simple de «buy»?", opts:["bought","buyed","brought","buy"], correct:0, explain:"buy – bought – bought. Cuidado com «brought», que é o passado de «bring» (trazer).", pista:"Rima com «thought».", irma:{q:"Qual é o Past Simple de «find»?", opts:["found","finded","fund","find"], correct:0, explain:"find – found – found."}},
      {q:"Qual é o Past Simple de «choose»?", opts:["chose","choosed","chosen","choosen"], correct:0, explain:"choose – chose – chosen. «Chosen» é o particípio, não o Past Simple.", irma:{q:"Qual é o Past Simple de «speak»?", opts:["spoke","speaked","spoken","spake"], correct:0, explain:"speak – spoke – spoken."}},
      {q:"Qual é o Past Participle de «eat»?", opts:["eaten","ate","eated","eat"], correct:0, explain:"eat – ate – eaten. «Ate» é o Past Simple.", pista:"Os três: eat – ___ – ___."},
      {q:"Qual é o Past Simple de «leave»?", opts:["left","leaved","leaft","lefted"], correct:0, explain:"leave – left – left: o passado e o particípio são iguais."},
      {q:"Complete: «Yesterday I ___ my keys at home.» (forget)", opts:["forgot","forgetted","forgotten","forget"], correct:0, explain:"Past Simple de forget: forgot (o particípio é forgotten).", pista:"«Yesterday» → Past Simple.", irma:{q:"Complete: «Last summer we ___ to Spain.» (go)", opts:["went","goed","gone","go"], correct:0, explain:"Past Simple de go: went (gone é o particípio)."}},
      {q:"Qual destes verbos tem o particípio igual ao infinitivo?", opts:["run (run – ran – run)","write (write – wrote – written)","take (take – took – taken)","see (see – saw – seen)"], correct:0, explain:"run – ran – run, tal como come – came – come."},
      {q:"Complete: «Did you ___ the new film?» (see)", opts:["see","saw","seen","seed"], correct:0, explain:"Com did usa-se a forma base: «Did you see…?» O passado já está no did."},
      {q:"Qual é o Past Simple de «be» com «they»?", opts:["were","was","been","be"], correct:0, explain:"be – was/were – been. Com I/he/she/it: was; com you/we/they: were."}
    ],
    posters:[
      EX("🎡 Exemplo 1 — Decorar por famílias", "aprender os 20 verbos com menos esforço.", "agrupa-os pelo padrão.",
        ["Passado = particípio: buy, find, have, leave, make, say.", "Particípio = infinitivo: come, run.", "Três formas diferentes: be, choose, do, eat, forget, give, go, know, see, speak, take, write."],
        "3 grupos em vez de 20 verbos soltos.", "conta: 6 + 2 + 12 = 20 ✓."),
      EX("✍️ Exemplo 2 — Uma história com irregulares", "contar um passeio usando verbos da Verb Wheel.", "escolhe 5 verbos: go, see, eat, buy, take.",
        ["Last Saturday we went to the zoo.", "We saw two lions and a giraffe.", "We ate sandwiches in the park.", "I bought a postcard, and my dad took lots of photos."],
        "4 frases com 5 verbos irregulares no Past Simple.", "confirma cada passado na Verb Wheel ✓.")
    ],
    compare:{
      left:{title:"📗 Regulares", points:["Passado com -ed","play → played","Seguem sempre a regra"]},
      right:{title:"📕 Irregulares", points:["Formas próprias","go → went → gone","Aprendem-se de cor (com treino espaçado)"]}
    },
    boss:"Roda a Verb Wheel do manual e diz as 3 formas dos 20 verbos sem olhar; depois, as perguntas da 🏆 Revisão Final"
  }
  ];
})();
