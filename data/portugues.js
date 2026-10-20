  /* Português — 6.º ano. Termos segundo o Dicionário Terminológico (DT), usado nas escolas portuguesas.
     Cada mundo: missões, resumo "para o teste", glossário, quiz (correct = índice da resposta certa) e comparação. */
  const PT_WORLDS = [
  {
    id:"p1", num:1, c:"m1", icon:"🧰",
    title:"Inventário de Palavras",
    subtitle:"Classes de palavras", pages:"manual «Novo Livro Aberto 6», Gramática: determinante p. 213, pronome p. 216, advérbio p. 229, preposição p. 230",
    lead:"Num jogo, cada item do inventário tem uma categoria: armas, poções, blocos. As palavras também: há nomes, verbos, adjetivos… Saber a classe de uma palavra é saber o que ela faz na frase.",
    missions:[
      {t:"Caça às Classes", d:"Nome, adjetivo, verbo, advérbio", f:"Escolher um parágrafo de um livro e pintar cada classe de uma cor", xp:10},
      {t:"Pequenos mas Importantes", d:"Determinantes, pronomes, preposições", f:"Encontrar 10 preposições contraídas (do, na, pelo…) numa notícia", xp:10},
      {t:"Inventário do Quarto", d:"Nomes próprios, comuns e coletivos", f:"Listar 10 objetos do teu quarto e classificar os nomes", xp:10},
      {t:"Ligar Ideias", d:"Conjunções e interjeições", f:"Escrever 5 frases ligadas por e, mas, ou, porque, quando", xp:15}
    ],
    resumo:[
      "O <b>nome</b> designa pessoas, animais, coisas, lugares ou sentimentos. Pode ser <b>próprio</b> (Lisboa, Rita) ou <b>comum</b> (cidade, menina); um nome comum <b>coletivo</b> designa um conjunto (cardume, multidão).",
      "O <b>adjetivo</b> caracteriza o nome (casa <b>antiga</b>) e concorda com ele em género e número. Tem graus: normal, comparativo (mais alto do que) e superlativo (altíssimo, o mais alto).",
      "O <b>verbo</b> indica ações, estados ou processos e varia em pessoa, número, tempo e modo. O <b>advérbio</b> modifica o verbo, o adjetivo ou outro advérbio e não varia (ontem, aqui, muito, não).",
      "O <b>determinante</b> vem antes do nome: artigo definido (o, a) ou indefinido (um, uma), demonstrativo (este, esse, aquele) ou possessivo (meu, teu, seu). O <b>pronome</b> substitui o nome (ele, isto, o meu).",
      "A <b>preposição</b> liga palavras (a, de, em, por, com, para…) e pode contrair-se com determinantes: de + o = do; em + a = na; a + a = à.",
      "A <b>conjunção</b> liga frases ou palavras: coordenativas (e, mas, ou, logo, pois) e subordinativas (porque, quando, se, embora). A <b>interjeição</b> exprime emoções (Ai! Olá! Bravo!).",
      "Os números cardinais (dois, cem) são <b>quantificadores numerais</b>; os ordinais (primeiro, segundo) são adjetivos numerais."
    ],
    gloss:[
      ["nome","Palavra que designa pessoas, animais, coisas, lugares, sentimentos (ex.: Rita, gato, mesa, alegria)."],
      ["próprio","Nome que identifica um ser ou lugar único; escreve-se com maiúscula (ex.: Porto, Tejo)."],
      ["comum","Nome que designa qualquer ser de uma espécie (ex.: cidade, rio)."],
      ["coletivo","Nome comum que, no singular, designa um conjunto (ex.: cardume, rebanho, turma)."],
      ["adjetivo","Palavra que caracteriza o nome e concorda com ele em género e número."],
      ["verbo","Palavra que indica ações, estados ou processos e varia em pessoa, número, tempo e modo."],
      ["advérbio","Palavra invariável que modifica um verbo, um adjetivo ou outro advérbio (ex.: muito, ontem, não)."],
      ["determinante","Palavra que vem antes do nome e o especifica: artigos, demonstrativos, possessivos."],
      ["pronome","Palavra que substitui um nome ou um grupo nominal (ex.: ele, isto, o meu)."],
      ["preposição","Palavra invariável que liga palavras (a, de, em, por, com, para…)."],
      ["conjunção","Palavra que liga frases ou palavras (e, mas, ou, porque, quando…)."],
      ["interjeição","Palavra que exprime emoções ou sensações (Ai!, Olá!, Bravo!)."],
      ["quantificadores numerais","Os números cardinais (um, dois, cem), que indicam uma quantidade exata."]
    ],
    quiz:[
      {q:"Em \"O cardume nadava depressa\", qual é o nome coletivo?", opts:["cardume","nadava","depressa","O"], correct:0, explain:"\"Cardume\" é um nome comum coletivo: designa um conjunto de peixes."},
      {q:"Qual destas palavras é um adjetivo?", opts:["corajoso","coragem","correr","corajosamente"], correct:0, explain:"\"Corajoso\" caracteriza um nome (um menino corajoso). \"Coragem\" é nome, \"correr\" é verbo e \"corajosamente\" é advérbio."},
      {q:"Em \"Ontem choveu muito\", que classe de palavras são \"ontem\" e \"muito\"?", opts:["Advérbios","Adjetivos","Nomes","Pronomes"], correct:0, explain:"São advérbios: \"ontem\" indica tempo e \"muito\" indica quantidade/intensidade, e não variam."},
      {q:"Qual é a contração de \"em + o\"?", opts:["no","ao","do","num"], correct:0, explain:"em + o = no (ex.: \"no jardim\"). \"Num\" é em + um."},
      {q:"Em \"Este livro é meu\", \"este\" é um…", opts:["determinante demonstrativo","pronome pessoal","advérbio","adjetivo"], correct:0, explain:"\"Este\" vem antes do nome \"livro\" e indica proximidade: é um determinante demonstrativo."},
      {q:"Em \"A Ana chegou e ela sorriu\", \"ela\" é…", opts:["um pronome pessoal","um determinante","um nome próprio","uma preposição"], correct:0, explain:"\"Ela\" substitui o nome \"Ana\": é um pronome pessoal."},
      {q:"Qual destas palavras é uma preposição?", opts:["com","comer","comigo","como"], correct:0, explain:"\"Com\" é uma preposição: liga palavras (ex.: café com leite)."},
      {q:"Em \"Fui à praia, mas estava frio\", \"mas\" é uma…", opts:["conjunção coordenativa adversativa","preposição","interjeição","advérbio de tempo"], correct:0, explain:"\"Mas\" liga duas frases com ideias que se opõem: é uma conjunção coordenativa adversativa."},
      {q:"Qual é o superlativo absoluto sintético de \"fácil\"?", opts:["facílimo","mais fácil","muito fácil","facilmente"], correct:0, explain:"\"Facílimo\" é o superlativo absoluto sintético; \"muito fácil\" é o analítico."},
      {q:"\"Bravo!\" é um exemplo de…", opts:["interjeição","adjetivo","verbo","conjunção"], correct:0, explain:"Exprime uma emoção (entusiasmo, aplauso): é uma interjeição."}
    ],
    compare:{
      left:{title:"🔤 Determinante", points:["Vem sempre antes de um nome","Ex.: este livro, o meu gato","Não aparece sozinho"]},
      right:{title:"🔁 Pronome", points:["Substitui o nome","Ex.: Este é meu. Ela chegou.","Aparece sozinho, no lugar do nome"]}
    },
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p2", num:2, c:"m2", icon:"⏳",
    title:"Máquina do Tempo dos Verbos",
    subtitle:"Conjugações, tempos e modos verbais", pages:"manual «Novo Livro Aberto 6», cap. 2: formas não finitas p. 84; presente, pretérito imperfeito e futuro do conjuntivo pp. 87, 93 e 96; subclasses dos verbos p. 105",
    lead:"Os verbos são a máquina do tempo da língua: com eles viajas ao passado (joguei), ficas no presente (jogo) ou saltas para o futuro (jogarei). E ainda podes dar ordens, desejar ou imaginar.",
    missions:[
      {t:"As Três Famílias", d:"1.ª, 2.ª e 3.ª conjugação", f:"Arrumar 15 verbos em três colunas: -ar, -er, -ir", xp:10},
      {t:"Viagem no Tempo", d:"Presente, pretérito perfeito, imperfeito e futuro", f:"Contar o mesmo acontecimento no passado, no presente e no futuro", xp:10},
      {t:"Desejos e Ordens", d:"Modo conjuntivo e modo imperativo", f:"Escrever 5 desejos (Espero que…) e 5 ordens de um jogo", xp:15},
      {t:"Verbos Rebeldes", d:"Verbos irregulares (ser, ir, ter, fazer, pôr)", f:"Construir uma tabela com o presente do indicativo de 5 verbos irregulares", xp:10}
    ],
    resumo:[
      "Os verbos dividem-se em três <b>conjugações</b>, conforme a terminação do infinitivo: 1.ª em -ar (cantar), 2.ª em -er (correr) e 3.ª em -ir (partir). O verbo pôr pertence à 2.ª conjugação.",
      "Um verbo pode ser <b>regular</b> (segue o modelo da sua conjugação) ou <b>irregular</b> (muda o radical ou as terminações, como ser, ir, ter, fazer, pôr).",
      "O <b>modo indicativo</b> apresenta factos: presente (canto), pretérito perfeito (cantei), pretérito imperfeito (cantava), pretérito mais-que-perfeito (cantara), futuro (cantarei).",
      "O <b>modo conjuntivo</b> exprime desejo, dúvida ou possibilidade: presente (que eu cante), pretérito imperfeito (se eu cantasse), futuro (quando eu cantar).",
      "O <b>condicional</b> exprime algo que depende de uma condição (cantaria). O <b>modo imperativo</b> serve para dar ordens ou conselhos: canta tu! cantem vocês! Na negativa usa-se o conjuntivo: não cantes!",
      "As formas não finitas são o <b>infinitivo</b> (cantar), o <b>gerúndio</b> (cantando) e o <b>particípio passado</b> (cantado)."
    ],
    gloss:[
      ["conjugações","Os três grupos de verbos: 1.ª (-ar), 2.ª (-er, incluindo pôr) e 3.ª (-ir)."],
      ["infinitivo","A forma do verbo que aparece no dicionário (cantar, correr, partir)."],
      ["regular","Verbo que segue o modelo da sua conjugação, sem mudar o radical."],
      ["irregular","Verbo que muda o radical ou as terminações (ser, ir, ter, fazer, pôr…)."],
      ["modo indicativo","Modo que apresenta factos certos, no passado, presente ou futuro."],
      ["modo conjuntivo","Modo que exprime desejo, dúvida ou possibilidade (que eu cante, se eu cantasse)."],
      ["condicional","Forma que exprime algo dependente de uma condição (eu cantaria se…)."],
      ["modo imperativo","Modo usado para dar ordens, pedidos ou conselhos (canta! cantem!)."],
      ["pretérito perfeito","Tempo do passado para ações concluídas (ontem cantei)."],
      ["pretérito imperfeito","Tempo do passado para ações habituais ou prolongadas (todos os dias cantava)."],
      ["gerúndio","Forma não finita terminada em -ndo (cantando, correndo, partindo)."],
      ["particípio passado","Forma não finita usada nos tempos compostos (tinha cantado)."]
    ],
    quiz:[
      {q:"A que conjugação pertence o verbo \"partir\"?", opts:["3.ª","1.ª","2.ª","Não tem conjugação"], correct:0, explain:"Termina em -ir no infinitivo: 3.ª conjugação."},
      {q:"A que conjugação pertence o verbo \"pôr\"?", opts:["2.ª","1.ª","3.ª","4.ª"], correct:0, explain:"O verbo pôr vem do antigo \"poer\" e pertence à 2.ª conjugação."},
      {q:"Em \"Ontem joguei futebol\", em que tempo está o verbo?", opts:["Pretérito perfeito do indicativo","Presente do indicativo","Futuro do indicativo","Presente do conjuntivo"], correct:0, explain:"Ação concluída no passado: pretérito perfeito do indicativo."},
      {q:"Em \"Quando era pequeno, brincava no parque\", \"brincava\" está no…", opts:["pretérito imperfeito do indicativo","pretérito perfeito do indicativo","futuro do indicativo","condicional"], correct:0, explain:"Ação habitual no passado: pretérito imperfeito."},
      {q:"Qual destas frases está no modo imperativo?", opts:["Fecha a janela!","Fechei a janela.","Se eu fechasse a janela…","Fecharia a janela."], correct:0, explain:"\"Fecha!\" é uma ordem: modo imperativo."},
      {q:"Completa com o conjuntivo: \"Espero que tu ___ (ter) boas notas.\"", opts:["tenhas","tens","tiveste","terás"], correct:0, explain:"Depois de \"espero que\" usa-se o presente do conjuntivo: que tu tenhas."},
      {q:"Qual é o gerúndio de \"fazer\"?", opts:["fazendo","feito","fazer","faria"], correct:0, explain:"O gerúndio termina em -ndo: fazendo. \"Feito\" é o particípio."},
      {q:"Qual é a forma correta da negativa de \"Corre!\" (tu)?", opts:["Não corras!","Não corre!","Não correste!","Não correr!"], correct:0, explain:"Na negativa, o imperativo usa formas do conjuntivo: não corras!"},
      {q:"Qual destes verbos é irregular?", opts:["ir","cantar","correr","partir"], correct:0, explain:"\"Ir\" muda completamente: vou, vais, fui, ia… Os outros seguem o modelo da sua conjugação."},
      {q:"\"Eu iria ao cinema se tivesse tempo.\" — \"iria\" está no…", opts:["condicional","imperativo","pretérito perfeito","infinitivo"], correct:0, explain:"\"Iria\" depende de uma condição (se tivesse tempo): é o condicional."}
    ],
    compare:{
      left:{title:"✅ Modo indicativo", points:["Apresenta factos certos","Ex.: Ele estuda todos os dias.","Usa-se para contar o que aconteceu"]},
      right:{title:"💭 Modo conjuntivo", points:["Exprime desejo, dúvida ou hipótese","Ex.: Espero que ele estude.","Aparece muitas vezes depois de \"que\", \"se\", \"quando\""]}
    },
    resources:[
      {icon:"📘", title:"Conjugador de verbos", desc:"Vê todos os tempos e modos de qualquer verbo (experimenta \"pôr\" ou \"ir\").", site:"Dicionário Priberam", url:"https://dicionario.priberam.org/conjugar/cantar"}
    ],
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p3", num:3, c:"m3", icon:"🧩",
    title:"Quem Faz o Quê? Funções Sintáticas",
    subtitle:"Sujeito, predicado e complementos", pages:"manual «Novo Livro Aberto 6»: funções sintáticas pp. 101 e 105; Gramática: complemento oblíquo p. 245, agente da passiva p. 246, modificador p. 248",
    lead:"Numa equipa, cada jogador tem uma função: avançado, guarda-redes, defesa. Numa frase também: há quem faz a ação (sujeito), a ação (predicado) e quem a recebe (complementos).",
    missions:[
      {t:"Encontra o Capitão", d:"Sujeito simples, composto e subentendido", f:"Sublinhar o sujeito em 10 frases de um livro", xp:10},
      {t:"Quem Recebe a Ação?", d:"Complemento direto e indireto", f:"Substituir os complementos por o/a/lhe em 5 frases", xp:15},
      {t:"Ei, Tu!", d:"Vocativo e modificador", f:"Escrever 5 frases a chamar alguém, com vírgula no sítio certo", xp:10},
      {t:"Mapa da Frase", d:"Todas as funções sintáticas", f:"Desenhar o \"mapa\" de 3 frases, com uma cor por função", xp:10}
    ],
    resumo:[
      "O <b>sujeito</b> é quem pratica a ação ou de quem se diz algo; concorda com o verbo. Pode ser simples (O João correu), composto (O João e a Rita correram) ou subentendido (Corremos — nós).",
      "O <b>predicado</b> é tudo o que se diz sobre o sujeito; tem sempre um verbo (O João <i>correu muito depressa</i>).",
      "O <b>complemento direto</b> completa o verbo sem preposição e pode ser substituído por o, a, os, as (Comi a sopa → Comi-a).",
      "O <b>complemento indireto</b> indica a quem ou para quem se faz algo e pode ser substituído por lhe, lhes (Dei um livro ao Rui → Dei-lhe um livro).",
      "O <b>complemento oblíquo</b> é pedido pelo verbo e começa normalmente por preposição, mas não se substitui por lhe (Gosto de chocolate; Vou a Lisboa).",
      "O <b>predicativo do sujeito</b> caracteriza o sujeito através de verbos como ser, estar, parecer, ficar (A Rita está <i>cansada</i>).",
      "O <b>vocativo</b> serve para chamar alguém e separa-se por vírgula (Pedro, anda cá!). O <b>modificador</b> acrescenta informação que não é obrigatória — tempo, lugar, modo (Ontem, joguei no parque)."
    ],
    gloss:[
      ["sujeito","Quem pratica a ação ou de quem se diz algo; concorda com o verbo."],
      ["predicado","Tudo o que se diz sobre o sujeito; inclui sempre o verbo."],
      ["complemento direto","Completa o verbo sem preposição; substitui-se por o, a, os, as."],
      ["complemento indireto","Indica a quem ou para quem; substitui-se por lhe, lhes."],
      ["complemento oblíquo","Complemento pedido pelo verbo, normalmente com preposição, que não se substitui por lhe (gostar de…, ir a…)."],
      ["predicativo do sujeito","Caracteriza o sujeito através de verbos como ser, estar, parecer, ficar."],
      ["vocativo","Palavra ou expressão para chamar alguém; separa-se por vírgula."],
      ["modificador","Informação extra, não obrigatória, de tempo, lugar, modo… (ontem, no parque, depressa)."]
    ],
    quiz:[
      {q:"Em \"Os meus primos chegaram ontem\", qual é o sujeito?", opts:["Os meus primos","chegaram","ontem","chegaram ontem"], correct:0, explain:"É de \"os meus primos\" que se diz algo; o verbo concorda com eles (chegaram)."},
      {q:"Em \"Comemos bolo ao lanche\", o sujeito é…", opts:["subentendido (nós)","bolo","lanche","composto"], correct:0, explain:"O sujeito não aparece, mas percebe-se pela forma do verbo: comemos → nós."},
      {q:"Em \"A Inês e o Tiago jogam xadrez\", o sujeito é…", opts:["composto","simples","subentendido","inexistente"], correct:0, explain:"Tem dois núcleos (Inês e Tiago): sujeito composto."},
      {q:"Em \"O Rui leu o livro\", qual é o complemento direto?", opts:["o livro","O Rui","leu","não tem"], correct:0, explain:"\"O livro\" completa o verbo sem preposição: O Rui leu-o."},
      {q:"Em \"Ofereci flores à minha mãe\", qual é o complemento indireto?", opts:["à minha mãe","flores","Ofereci","não tem"], correct:0, explain:"A quem ofereci? À minha mãe → Ofereci-lhe flores."},
      {q:"Em \"Maria, fecha a porta!\", \"Maria\" é…", opts:["vocativo","sujeito","complemento direto","modificador"], correct:0, explain:"\"Maria\" está a ser chamada: é vocativo, separado por vírgula."},
      {q:"Em \"No sábado, fomos à praia\", \"No sábado\" é…", opts:["modificador","sujeito","complemento direto","vocativo"], correct:0, explain:"Indica o tempo e não é obrigatório: é um modificador."},
      {q:"Em \"O gato parece feliz\", \"feliz\" é…", opts:["predicativo do sujeito","complemento direto","modificador","vocativo"], correct:0, explain:"Caracteriza o sujeito (o gato) através do verbo \"parecer\": predicativo do sujeito."},
      {q:"Em \"Gosto de música\", \"de música\" é…", opts:["complemento oblíquo","complemento indireto","sujeito","vocativo"], correct:0, explain:"É pedido pelo verbo \"gostar\", começa por preposição e não se substitui por \"lhe\": complemento oblíquo."},
      {q:"Qual destas substituições está correta para \"Vi os teus irmãos\"?", opts:["Vi-os.","Vi-lhes.","Vi-as.","Vi-lhe."], correct:0, explain:"\"Os teus irmãos\" é complemento direto masculino plural: substitui-se por \"os\"."}
    ],
    compare:{
      left:{title:"🎯 Complemento direto", points:["Sem preposição (normalmente)","Responde a \"o quê?\" / \"quem?\"","Substitui-se por o, a, os, as"]},
      right:{title:"🎁 Complemento indireto", points:["Com a preposição \"a\" (ou \"para\")","Responde a \"a quem?\"","Substitui-se por lhe, lhes"]}
    },
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p4", num:4, c:"m4", icon:"🏗️",
    title:"Construtor de Frases",
    subtitle:"Tipos de frase, coordenação, voz passiva e discurso indireto", pages:"manual «Novo Livro Aberto 6», Gramática: frase simples e frase complexa pp. 231 e 252; conectores p. 256",
    lead:"Como num jogo de construção, podes montar frases de muitas formas: perguntar, exclamar, juntar duas frases numa, virar a frase ao contrário (voz passiva) ou contar o que alguém disse.",
    missions:[
      {t:"Quatro Tipos de Frase", d:"Declarativa, interrogativa, exclamativa, imperativa", f:"Escrever a mesma ideia nos quatro tipos de frase", xp:10},
      {t:"Ligar Blocos", d:"Coordenação: e, mas, ou, logo, pois", f:"Juntar 10 pares de frases com a conjunção certa", xp:10},
      {t:"Frase ao Contrário", d:"Voz ativa e voz passiva", f:"Transformar 5 frases ativas em passivas", xp:15},
      {t:"Disse Que…", d:"Discurso direto e discurso indireto", f:"Passar um diálogo de banda desenhada para discurso indireto", xp:10}
    ],
    resumo:[
      "Há quatro <b>tipos de frase</b>: declarativa (informa — Está sol.), interrogativa (pergunta — Está sol?), exclamativa (exprime emoção — Que sol!) e imperativa (dá uma ordem — Abre a janela.).",
      "As frases podem ter forma <b>afirmativa</b> (Gosto de ler.) ou <b>negativa</b> (Não gosto de ler.).",
      "Uma <b>frase simples</b> tem um só verbo (uma oração); uma <b>frase complexa</b> tem dois ou mais verbos (Cheguei e jantei.).",
      "Na <b>coordenação</b>, as orações ligam-se com conjunções coordenativas: copulativas (e, nem), adversativas (mas, porém), disjuntivas (ou), conclusivas (logo, portanto) e explicativas (pois, porque).",
      "Na <b>voz ativa</b>, o sujeito pratica a ação (O gato comeu o peixe.); na <b>voz passiva</b>, o sujeito sofre a ação (O peixe foi comido pelo gato.). O complemento direto da ativa passa a sujeito da passiva.",
      "No <b>discurso direto</b> reproduzem-se as palavras exatas, com travessão ou aspas (— Estou cansado — disse o Rui.). No <b>discurso indireto</b> conta-se o que alguém disse (O Rui disse que estava cansado.), mudando pronomes, tempos verbais e advérbios (hoje → naquele dia; aqui → ali)."
    ],
    gloss:[
      ["tipos de frase","Declarativo, interrogativo, exclamativo e imperativo."],
      ["afirmativa","Forma de frase que afirma algo."],
      ["negativa","Forma de frase que nega algo, com palavras como não, nunca, nada."],
      ["frase simples","Frase com um só verbo (uma oração)."],
      ["frase complexa","Frase com dois ou mais verbos (duas ou mais orações)."],
      ["coordenação","Ligação de orações do mesmo nível, através de conjunções coordenativas."],
      ["voz ativa","O sujeito pratica a ação (A Ana pintou o quadro)."],
      ["voz passiva","O sujeito sofre a ação (O quadro foi pintado pela Ana)."],
      ["discurso direto","Reproduz as palavras exatas de alguém, com travessão ou aspas."],
      ["discurso indireto","Conta, pelas palavras do narrador, o que alguém disse (Ele disse que…)."]
    ],
    quiz:[
      {q:"\"Que dia tão bonito!\" é uma frase…", opts:["exclamativa","interrogativa","imperativa","declarativa"], correct:0, explain:"Exprime emoção e termina em ponto de exclamação: exclamativa."},
      {q:"\"Arruma o quarto.\" é uma frase…", opts:["imperativa","declarativa","interrogativa","exclamativa"], correct:0, explain:"Dá uma ordem: frase imperativa."},
      {q:"Qual destas frases é complexa?", opts:["Estudei e depois fui jogar.","O gato dorme.","Amanhã há teste.","Que frio!"], correct:0, explain:"Tem dois verbos (estudei, fui): é complexa."},
      {q:"Completa: \"Queria ir à praia, ___ choveu o dia todo.\"", opts:["mas","e","logo","ou"], correct:0, explain:"As ideias opõem-se: conjunção adversativa \"mas\"."},
      {q:"Completa: \"Estudei muito, ___ estou confiante.\"", opts:["logo","mas","ou","nem"], correct:0, explain:"A segunda oração é uma conclusão da primeira: \"logo\" (conclusiva)."},
      {q:"Qual é a voz passiva de \"O vento derrubou a árvore\"?", opts:["A árvore foi derrubada pelo vento.","O vento foi derrubado pela árvore.","A árvore derrubou o vento.","A árvore foi derrubar o vento."], correct:0, explain:"O complemento direto (a árvore) passa a sujeito, e o verbo fica \"ser + particípio\"."},
      {q:"Em \"O bolo foi feito pela avó\", quem pratica a ação?", opts:["a avó","o bolo","ninguém","feito"], correct:0, explain:"Na voz passiva, quem pratica a ação aparece depois de \"por/pelo/pela\" (complemento agente da passiva)."},
      {q:"Passa para discurso indireto: — Estou com fome — disse a Sara.", opts:["A Sara disse que estava com fome.","A Sara disse que estou com fome.","A Sara disse: estava com fome.","A Sara disse que estará com fome."], correct:0, explain:"No indireto, \"estou\" passa a \"estava\" e a fala é introduzida por \"que\"."},
      {q:"No discurso indireto, \"hoje\" passa normalmente a…", opts:["naquele dia","amanhã","ontem","agora"], correct:0, explain:"Os advérbios de tempo mudam: hoje → naquele dia; amanhã → no dia seguinte."},
      {q:"Qual é a forma negativa de \"Ele já chegou\"?", opts:["Ele ainda não chegou.","Ele já chegou?","Ele chegou já!","Chegou ele."], correct:0, explain:"Na negativa, \"já\" costuma passar a \"ainda não\"."}
    ],
    compare:{
      left:{title:"🗣️ Discurso direto", points:["Palavras exatas da personagem","Travessão (—) ou aspas","Ex.: — Vou sair — disse ela."]},
      right:{title:"📝 Discurso indireto", points:["O narrador conta o que foi dito","Verbo dizer + que","Ex.: Ela disse que ia sair."]}
    },
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p5", num:5, c:"m5", icon:"📖",
    title:"Modo História: o Texto Narrativo",
    subtitle:"Narrador, personagens, espaço, tempo e ação", pages:"manual «Novo Livro Aberto 6», cap. 2 «Texto narrativo»: elementos da narrativa p. 76; Pedro Alecrim pp. 82–106; Ulisses pp. 112–121",
    lead:"Todos os jogos com história têm as mesmas peças: um herói, um mundo, uma missão e um narrador que te guia. Os contos e os romances também. Descobre as peças da narrativa!",
    missions:[
      {t:"Ficha da Personagem", d:"Personagens principais, secundárias e figurantes", f:"Criar uma \"carta de jogo\" para cada personagem do livro que estás a ler", xp:10},
      {t:"Quem Conta a História?", d:"Narrador participante e não participante", f:"Reescrever um parágrafo mudando o narrador da 3.ª para a 1.ª pessoa", xp:15},
      {t:"Mapa do Mundo", d:"Espaço e tempo da narrativa", f:"Desenhar o mapa dos lugares onde se passa a história", xp:10},
      {t:"A Linha da Aventura", d:"Introdução, desenvolvimento e conclusão", f:"Fazer uma banda desenhada de 6 vinhetas com a estrutura da história", xp:10}
    ],
    resumo:[
      "O <b>narrador</b> é quem conta a história. Pode ser <b>participante</b> (entra na história e fala na 1.ª pessoa — Eu entrei…) ou <b>não participante</b> (está fora e conta na 3.ª pessoa — Ela entrou…).",
      "As <b>personagens</b> podem ser principais (a ação gira à volta delas), secundárias (têm um papel menor) ou figurantes (só aparecem de passagem).",
      "O <b>espaço</b> é o lugar onde decorre a ação (uma aldeia, um castelo, o mar); o <b>tempo</b> é quando decorre (numa manhã de inverno, há muitos anos).",
      "A <b>ação</b> é o conjunto de acontecimentos. Organiza-se em <b>introdução</b> (situação inicial), <b>desenvolvimento</b> (problema e peripécias) e <b>conclusão</b> (desfecho).",
      "Numa narrativa misturam-se três modos: <b>narração</b> (contar acontecimentos), <b>descrição</b> (mostrar como são pessoas e lugares) e <b>diálogo</b> (as personagens falam, com travessão).",
      "A <b>moral</b> é a lição que algumas histórias (como as fábulas) querem transmitir."
    ],
    gloss:[
      ["narrador","A voz que conta a história."],
      ["participante","Narrador que é personagem da história e conta na 1.ª pessoa."],
      ["não participante","Narrador que não entra na história e conta na 3.ª pessoa."],
      ["personagens","Os seres (pessoas, animais, objetos) que participam na ação."],
      ["espaço","O lugar ou os lugares onde a ação decorre."],
      ["tempo","O momento ou a época em que a ação decorre, e quanto dura."],
      ["ação","O conjunto de acontecimentos da história."],
      ["introdução","Parte inicial: apresenta personagens, espaço e tempo."],
      ["desenvolvimento","Parte central: surge um problema e as peripécias para o resolver."],
      ["conclusão","Parte final: o desfecho da história."],
      ["peripécia","Acontecimento inesperado que muda o rumo da ação."],
      ["moral","A lição que uma história quer ensinar, como nas fábulas."]
    ],
    quiz:[
      {q:"\"Eu nunca tinha visto um mar tão azul.\" O narrador é…", opts:["participante","não participante","uma personagem secundária","inexistente"], correct:0, explain:"Fala na 1.ª pessoa (eu) e participa na história: narrador participante."},
      {q:"\"A Leonor abriu a porta devagar.\" O narrador é…", opts:["não participante","participante","a Leonor","a porta"], correct:0, explain:"Conta na 3.ª pessoa, sem entrar na história: narrador não participante."},
      {q:"Como se chama a personagem à volta da qual gira a ação?", opts:["personagem principal","figurante","narrador","personagem secundária"], correct:0, explain:"A personagem principal (ou protagonista) é o centro da ação."},
      {q:"\"Numa aldeia perto da serra\" é uma referência ao…", opts:["espaço","tempo","narrador","diálogo"], correct:0, explain:"Indica o lugar: é o espaço da narrativa."},
      {q:"\"Numa manhã fria de dezembro\" é uma referência ao…", opts:["tempo","espaço","narrador","desfecho"], correct:0, explain:"Indica quando: é o tempo da narrativa."},
      {q:"Em que parte da narrativa surge o problema?", opts:["desenvolvimento","introdução","título","conclusão"], correct:0, explain:"No desenvolvimento surge o problema e as peripécias."},
      {q:"O que é o desfecho?", opts:["a forma como a história termina","o início da história","o nome do autor","a personagem principal"], correct:0, explain:"O desfecho é o final, na conclusão."},
      {q:"Que sinal se usa para introduzir as falas das personagens?", opts:["travessão (—)","parênteses","ponto e vírgula","reticências"], correct:0, explain:"No diálogo, cada fala começa com travessão."},
      {q:"\"Tinha olhos verdes e cabelo cor de mel.\" Que modo de expressão é este?", opts:["descrição","narração","diálogo","moral"], correct:0, explain:"Mostra como é a personagem: descrição."},
      {q:"Que tipo de texto narrativo tem habitualmente animais com características humanas e uma moral?", opts:["fábula","notícia","receita","biografia"], correct:0, explain:"As fábulas usam animais que falam e terminam com uma lição (moral)."}
    ],
    compare:{
      left:{title:"🙋 Narrador participante", points:["Entra na história","Conta na 1.ª pessoa (eu, nós)","Só sabe o que viu ou sentiu"]},
      right:{title:"👁️ Narrador não participante", points:["Está fora da história","Conta na 3.ª pessoa (ele, ela)","Pode saber o que todas as personagens pensam"]}
    },
    boss:"«Põe-te à prova!» depois de Pedro Alecrim — manual «Novo Livro Aberto 6», p. 107"
  },
  {
    id:"p6", num:6, c:"m6", icon:"🎵",
    title:"Modo Poesia",
    subtitle:"Verso, estrofe, rima e recursos expressivos", pages:"manual «Novo Livro Aberto 6», cap. 3 «Texto poético» (pp. 146–147 e seguintes); anáfora pp. 95 e 261",
    lead:"A poesia é como a música de um jogo: ritmo, repetições e sons que ficam na cabeça. Aprende as peças do poema e os \"poderes especiais\" das palavras — os recursos expressivos.",
    missions:[
      {t:"Contar Versos", d:"Verso, estrofe e tipos de estrofe", f:"Escolher um poema e contar versos e estrofes, dizendo o nome de cada estrofe", xp:10},
      {t:"Caçador de Rimas", d:"Rima emparelhada, cruzada e interpolada", f:"Marcar o esquema rimático (AABB, ABAB, ABBA) de 3 quadras", xp:10},
      {t:"Poderes das Palavras", d:"Comparação, metáfora, personificação, hipérbole", f:"Encontrar um exemplo de cada recurso em canções de que gostas", xp:15},
      {t:"O Meu Poema", d:"Escrita de um poema", f:"Escrever um poema de 2 quadras na Oficina de Escrita", xp:10}
    ],
    resumo:[
      "Cada linha de um poema é um <b>verso</b>; um conjunto de versos é uma <b>estrofe</b>. Conforme o número de versos: dístico (2), terceto (3), quadra (4), quintilha (5), sextilha (6).",
      "A <b>rima</b> é a semelhança de sons no fim dos versos. Pode ser <b>emparelhada</b> (AABB), <b>cruzada</b> (ABAB) ou <b>interpolada</b> (ABBA). Versos sem rima chamam-se versos soltos ou brancos.",
      "O <b>sujeito poético</b> é a voz que fala no poema — não é necessariamente o próprio poeta.",
      "Recursos expressivos: <b>comparação</b> (aproxima duas coisas com \"como\" — olhos como o mar); <b>metáfora</b> (comparação sem \"como\" — os teus olhos são o mar); <b>personificação</b> (dá características humanas a coisas ou animais — o vento chora).",
      "Mais recursos: <b>hipérbole</b> (exagero — chorei rios de lágrimas); <b>anáfora</b> (repetição no início de versos); <b>enumeração</b> (lista de elementos); <b>onomatopeia</b> (palavra que imita um som — tic-tac); <b>aliteração</b> (repetição de sons consonânticos)."
    ],
    gloss:[
      ["verso","Cada linha de um poema."],
      ["estrofe","Conjunto de versos; separa-se das outras por uma linha em branco."],
      ["quadra","Estrofe de quatro versos."],
      ["rima","Semelhança de sons no fim de dois ou mais versos."],
      ["emparelhada","Rima AABB: versos seguidos rimam entre si."],
      ["cruzada","Rima ABAB: rimam versos alternados."],
      ["interpolada","Rima ABBA: o 1.º rima com o 4.º e o 2.º com o 3.º."],
      ["sujeito poético","A voz que fala no poema."],
      ["comparação","Recurso que aproxima duas realidades usando \"como\", \"tal como\", \"parece\"."],
      ["metáfora","Comparação implícita, sem \"como\" (a vida é uma viagem)."],
      ["personificação","Atribuir ações ou sentimentos humanos a animais ou coisas."],
      ["hipérbole","Exagero intencional para dar mais força à ideia."],
      ["anáfora","Repetição de uma ou mais palavras no início de versos ou frases."],
      ["onomatopeia","Palavra que imita um som (miau, tic-tac, splash)."]
    ],
    quiz:[
      {q:"Como se chama uma estrofe de quatro versos?", opts:["quadra","terceto","dístico","quintilha"], correct:0, explain:"Quatro versos formam uma quadra."},
      {q:"Num poema com rima ABAB, a rima é…", opts:["cruzada","emparelhada","interpolada","solta"], correct:0, explain:"Rimam versos alternados (1.º com 3.º, 2.º com 4.º): rima cruzada."},
      {q:"Num poema com rima AABB, a rima é…", opts:["emparelhada","cruzada","interpolada","branca"], correct:0, explain:"Rimam os versos seguidos, aos pares: rima emparelhada."},
      {q:"\"O teu sorriso é como o sol.\" Que recurso é este?", opts:["comparação","metáfora","hipérbole","onomatopeia"], correct:0, explain:"Aproxima o sorriso e o sol usando \"como\": comparação."},
      {q:"\"O teu sorriso é o sol.\" Que recurso é este?", opts:["metáfora","comparação","anáfora","personificação"], correct:0, explain:"É uma comparação sem \"como\": metáfora."},
      {q:"\"As árvores dançavam ao vento.\" Que recurso é este?", opts:["personificação","hipérbole","comparação","enumeração"], correct:0, explain:"As árvores não dançam; atribui-se-lhes uma ação humana: personificação."},
      {q:"\"Já te disse um milhão de vezes!\" Que recurso é este?", opts:["hipérbole","metáfora","anáfora","onomatopeia"], correct:0, explain:"É um exagero intencional: hipérbole."},
      {q:"\"Tic-tac, faz o relógio.\" \"Tic-tac\" é uma…", opts:["onomatopeia","metáfora","anáfora","hipérbole"], correct:0, explain:"Imita um som: onomatopeia."},
      {q:"O que é o sujeito poético?", opts:["a voz que fala no poema","o título do poema","o assunto do poema","o primeiro verso"], correct:0, explain:"É a voz que se exprime no poema, que pode não ser o poeta."},
      {q:"Como se chama a repetição de palavras no início de vários versos?", opts:["anáfora","rima","enumeração","onomatopeia"], correct:0, explain:"A anáfora repete palavras no início de versos ou frases para dar ênfase."}
    ],
    compare:{
      left:{title:"🔍 Comparação", points:["Usa \"como\", \"tal como\", \"parece\"","Ex.: Rápido como um raio.","A semelhança está explícita"]},
      right:{title:"✨ Metáfora", points:["Não usa \"como\"","Ex.: Ele é um raio.","A semelhança está implícita"]}
    },
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p7", num:7, c:"m7", icon:"🎭",
    title:"No Palco: o Texto Dramático",
    subtitle:"Falas, didascálias, atos e cenas", pages:"manual a confirmar",
    lead:"Um texto dramático é como o guião de um jogo ou de um filme: tem as falas de cada personagem e instruções sobre o que fazer em palco. Foi escrito para ser representado!",
    missions:[
      {t:"Ler em Voz Alta", d:"Falas e personagens", f:"Ler uma cena com a família, cada um com a sua personagem", xp:10},
      {t:"Instruções de Palco", d:"Didascálias (indicações cénicas)", f:"Sublinhar todas as didascálias de uma cena e dizer para que servem", xp:10},
      {t:"Muda a Cena", d:"Atos e cenas", f:"Dividir uma história conhecida em 3 cenas", xp:10},
      {t:"O Meu Guião", d:"Escrita de um texto dramático curto", f:"Transformar uma fábula num texto dramático com didascálias", xp:15}
    ],
    resumo:[
      "O <b>texto dramático</b> é escrito para ser representado. As personagens falam diretamente; não há narrador.",
      "O <b>texto principal</b> são as <b>falas</b> das personagens, cada uma antecedida pelo nome de quem fala.",
      "O <b>texto secundário</b> são as <b>didascálias</b> (ou indicações cénicas): indicam gestos, tom de voz, cenário, entradas e saídas. Aparecem normalmente entre parênteses ou em itálico.",
      "O texto divide-se em <b>atos</b> (grandes partes, muitas vezes com mudança de cenário) e <b>cenas</b> (mudam quando entra ou sai uma personagem).",
      "Formas de fala: <b>diálogo</b> (conversa entre personagens), <b>monólogo</b> (uma personagem fala sozinha) e <b>aparte</b> (fala dita para o público, que as outras personagens fingem não ouvir).",
      "Na representação trabalham atores, encenador, cenógrafo, figurinista e técnicos de luz e som."
    ],
    gloss:[
      ["texto dramático","Texto escrito para ser representado em palco."],
      ["falas","O que as personagens dizem; formam o texto principal."],
      ["didascálias","Indicações cénicas (gestos, tom, cenário), normalmente entre parênteses — o texto secundário."],
      ["atos","As grandes partes em que se divide uma peça de teatro."],
      ["cenas","Subdivisões dos atos; mudam quando entra ou sai uma personagem."],
      ["diálogo","Conversa entre duas ou mais personagens."],
      ["monólogo","Fala de uma personagem sozinha, consigo própria."],
      ["aparte","Fala dita para o público, que as outras personagens fingem não ouvir."],
      ["encenador","Quem dirige a representação: orienta os atores e decide como será o espetáculo."],
      ["cenário","O conjunto de elementos que representam o espaço onde decorre a ação."]
    ],
    quiz:[
      {q:"Para que é escrito um texto dramático?", opts:["para ser representado","para ser cantado","para dar notícias","para ensinar receitas"], correct:0, explain:"O texto dramático destina-se a ser representado em palco."},
      {q:"No texto dramático, o que são as didascálias?", opts:["indicações sobre gestos, tom, cenário","as falas das personagens","o título da peça","os nomes dos atores"], correct:0, explain:"As didascálias são as indicações cénicas: o texto secundário."},
      {q:"\"MÃE (zangada) — Já para a cama!\" Qual é a didascália?", opts:["zangada","MÃE","Já para a cama!","—"], correct:0, explain:"\"(zangada)\" indica o tom: é uma didascália."},
      {q:"O texto principal do texto dramático é constituído…", opts:["pelas falas das personagens","pelas didascálias","pelo narrador","pelo cenário"], correct:0, explain:"As falas formam o texto principal; as didascálias, o secundário."},
      {q:"Quando muda a cena, normalmente?", opts:["quando entra ou sai uma personagem","quando acaba uma frase","quando alguém ri","a cada página"], correct:0, explain:"A cena muda com a entrada ou saída de personagens."},
      {q:"Como se chama a fala de uma personagem sozinha, consigo própria?", opts:["monólogo","diálogo","aparte","coro"], correct:0, explain:"Monólogo: \"mono\" = um só."},
      {q:"O que é um aparte?", opts:["uma fala dita para o público, que as outras personagens fingem não ouvir","uma pausa no espetáculo","o intervalo entre atos","uma personagem secundária"], correct:0, explain:"No aparte, a personagem partilha um segredo com o público."},
      {q:"Quem dirige os atores e decide como será o espetáculo?", opts:["o encenador","o narrador","o figurante","o ponto"], correct:0, explain:"O encenador orienta a representação."},
      {q:"O texto dramático tem narrador?", opts:["Não, as personagens falam diretamente","Sim, sempre na 1.ª pessoa","Sim, sempre na 3.ª pessoa","Só no fim"], correct:0, explain:"No texto dramático não há narrador: a história avança pelas falas e pelas ações."},
      {q:"Onde aparecem normalmente as didascálias?", opts:["entre parênteses ou em itálico","entre aspas","no fim do livro","no título"], correct:0, explain:"Para se distinguirem das falas, aparecem entre parênteses ou em itálico."}
    ],
    compare:{
      left:{title:"📖 Texto narrativo", points:["Tem narrador","Pensado para ser lido","Organiza-se em capítulos ou partes"]},
      right:{title:"🎭 Texto dramático", points:["Não tem narrador","Pensado para ser representado","Organiza-se em atos e cenas, com didascálias"]}
    },
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p8", num:8, c:"m8", icon:"🛠️",
    title:"Oficina da Palavra",
    subtitle:"Formação de palavras, ortografia e pontuação", pages:"manual «Novo Livro Aberto 6», Gramática: sílaba e acentuação p. 204; palavra simples e complexa, família de palavras e derivação pp. 235–236",
    lead:"Cada palavra é como um bloco que se pode encaixar noutros para criar coisas novas: feliz → infeliz → felicidade. E, como em qualquer construção, há regras: acentos, pontuação e palavras que soam igual mas se escrevem de forma diferente.",
    missions:[
      {t:"Fábrica de Palavras", d:"Derivação (prefixos e sufixos) e composição", f:"Criar a família de 3 palavras (ex.: mar → marinheiro, maré…)", xp:10},
      {t:"Gémeas Enganadoras", d:"Palavras homófonas (há/à, conserto/concerto)", f:"Escrever 5 frases com pares de homófonas", xp:10},
      {t:"Acentos no Sítio", d:"Acento agudo, grave, circunflexo e til", f:"Encontrar 3 palavras com cada acento num livro", xp:10},
      {t:"A Vírgula Salva Vidas", d:"Sinais de pontuação", f:"Pontuar um texto sem sinais e ler as duas versões em voz alta", xp:15}
    ],
    resumo:[
      "Na <b>derivação</b>, formam-se palavras novas acrescentando afixos: <b>prefixos</b> antes do radical (in-feliz, re-fazer) ou <b>sufixos</b> depois (feliz-mente, livr-aria).",
      "Na <b>composição</b>, juntam-se duas ou mais palavras (guarda-chuva, girassol, passatempo).",
      "Uma <b>família de palavras</b> reúne palavras com o mesmo radical (terra, terreno, enterrar, terramoto).",
      "Palavras <b>homófonas</b> soam igual mas escrevem-se e significam coisas diferentes: há (verbo haver) / à (a + a); concerto (espetáculo) / conserto (reparação); cela / sela.",
      "Acentos: <b>agudo</b> (café), <b>grave</b> só na contração à/àquele, <b>circunflexo</b> (avô, você) e <b>til</b>, que marca a nasalidade (mãe, pão).",
      "Pontuação: a <b>vírgula</b> separa elementos de uma enumeração e o vocativo; os <b>dois pontos</b> anunciam uma enumeração, explicação ou fala; o <b>travessão</b> introduz falas; as <b>reticências</b> indicam uma interrupção ou suspense."
    ],
    gloss:[
      ["derivação","Formação de palavras pela junção de prefixos ou sufixos a um radical."],
      ["prefixos","Elementos colocados antes do radical (in-, des-, re-, pré-)."],
      ["sufixos","Elementos colocados depois do radical (-mente, -ção, -eiro, -aria)."],
      ["composição","Formação de palavras pela junção de duas ou mais palavras (guarda-chuva)."],
      ["radical","A parte da palavra que contém o seu significado principal (terr- em terra, terreno)."],
      ["família de palavras","Conjunto de palavras com o mesmo radical."],
      ["homófonas","Palavras que soam igual mas se escrevem de forma diferente e têm significados diferentes."],
      ["agudo","Acento (´) que marca a sílaba tónica aberta (café, árvore)."],
      ["grave","Acento (`) usado na contração da preposição a com o artigo a (à) ou com aquele (àquele)."],
      ["circunflexo","Acento (^) que marca a sílaba tónica fechada (avô, pêssego)."],
      ["til","Sinal (~) que marca o som nasal (mãe, limão)."],
      ["reticências","Sinal (…) que indica interrupção, hesitação ou suspense."]
    ],
    quiz:[
      {q:"Como se formou a palavra \"infeliz\"?", opts:["por derivação, com o prefixo in-","por composição","por derivação, com um sufixo","não é formada"], correct:0, explain:"Juntou-se o prefixo \"in-\" a \"feliz\": derivação por prefixação."},
      {q:"Como se formou a palavra \"guarda-chuva\"?", opts:["por composição","por derivação com prefixo","por derivação com sufixo","é uma palavra simples"], correct:0, explain:"Juntaram-se duas palavras (guarda + chuva): composição."},
      {q:"Qual destas palavras NÃO pertence à família de \"mar\"?", opts:["martelo","marinheiro","maré","marítimo"], correct:0, explain:"\"Martelo\" não tem o radical de \"mar\"; só se parece por acaso."},
      {q:"Completa: \"___ muitos anos que vivo aqui.\"", opts:["Há","À","A","Á"], correct:0, explain:"É o verbo haver (indica tempo passado): há."},
      {q:"Completa: \"Vou ___ escola.\"", opts:["à","há","á","a a"], correct:0, explain:"Preposição a + artigo a = à (com acento grave)."},
      {q:"O mecânico fez o ___ do carro.", opts:["conserto","concerto","consertu","consserto"], correct:0, explain:"Conserto = reparação. Concerto = espetáculo musical."},
      {q:"Que acento tem a palavra \"avô\"?", opts:["circunflexo","agudo","grave","til"], correct:0, explain:"O \"o\" é fechado e tónico: acento circunflexo (^). \"Avó\" tem agudo."},
      {q:"Que sinal de pontuação se usa para chamar alguém (vocativo)?", opts:["vírgula","ponto final","dois pontos","reticências"], correct:0, explain:"O vocativo separa-se por vírgula: \"Rita, anda cá!\""},
      {q:"Qual destas palavras tem um sufixo?", opts:["rapidamente","refazer","desfazer","pré-escolar"], correct:0, explain:"\"-mente\" é um sufixo (rápida + mente). As outras têm prefixos."},
      {q:"Que sinal indica suspense ou interrupção?", opts:["reticências (…)","ponto final (.)","vírgula (,)","travessão (—)"], correct:0, explain:"As reticências deixam a frase \"em suspenso\"."}
    ],
    compare:{
      left:{title:"🧱 Derivação", points:["Radical + prefixo ou sufixo","Ex.: in-feliz, feliz-mente","Cria uma palavra da mesma família"]},
      right:{title:"🔗 Composição", points:["Junta duas ou mais palavras","Ex.: guarda-chuva, passatempo","Pode ter hífen ou não"]}
    },
    resources:[
      {icon:"📗", title:"Dicionário Priberam", desc:"Para tirar dúvidas sobre o significado e a escrita das palavras.", site:"Dicionário Priberam da Língua Portuguesa", url:"https://dicionario.priberam.org/"}
    ],
    boss:"Ficha de avaliação — por confirmar no manual"
  },
  {
    id:"p9", num:9, c:"m9", icon:"📚",
    title:"Biblioteca da Turma: as Obras do Manual",
    subtitle:"Educação Literária: narrativas e poemas do 6.º ano",
    pages:"manual «Novo Livro Aberto 6»: Jorinda e Joringuel pp. 50–51; Ali Babá pp. 62–63; Pedro Alecrim pp. 82–106; Ulisses pp. 112–121; poesia pp. 146–147",
    lead:"Neste mundo revês as obras que lês no manual: Pedro Alecrim, Ulisses, Ali Babá e os Quarenta Ladrões, um conto dos Irmãos Grimm e poemas de autores portugueses e brasileiros. Há também a ficha de Robinson Crusoé, uma obra da lista do 6.º ano para ler em casa. Cada exemplo é uma ficha de leitura: elementos da narrativa, o que se aprende e as perguntas que costumam sair. Lê primeiro o texto no manual.",
    missions:[
      {t:"Ficha de Leitura", d:"Elementos da narrativa", f:"Escolhe uma das obras deste mundo que já leste. Faz uma ficha com: título, autor, narrador (participante ou não participante), personagens principais e secundárias, espaço, tempo e os 5 acontecimentos mais importantes, por ordem.\nVerifica: compara com o exemplo resolvido dessa obra. Cada acontecimento tem de estar na ordem certa (introdução → desenvolvimento → conclusão).", xp:15},
      {t:"Carta a uma Personagem", d:"Escrita: carta e opinião fundamentada", f:"Escreve uma carta ao Pedro Alecrim, ao Ulisses ou ao Ali Babá: conta-lhe o que achaste de uma decisão que tomou e porquê.\nVerifica: a carta tem local e data, saudação, corpo com pelo menos uma opinião justificada («Acho que… porque…») e despedida.", xp:15},
      {t:"Leitura Expressiva", d:"Ler em voz alta com intenção", f:"Escolhe um excerto com diálogo (por exemplo, Ulisses e Euríloco). O manual sugere a intenção: «ler com tom ameaçador», «ler com entusiasmo», «ler com hesitação». Grava-te a ler.\nVerifica: ouve a gravação. Nota-se a pontuação (pausas nas vírgulas, subida da voz nas perguntas, emoção nas exclamações)?", xp:10},
      {t:"O Meu Poema com Anáfora", d:"Recursos expressivos", f:"Escreve um poema de 5 versos que comece sempre pela mesma expressão, como em «Basta imaginar» (por exemplo, «Basta sonhar…» ou «Deixem passar…»).\nVerifica: a repetição está no início dos versos (anáfora) e dá ritmo ao poema; sublinha-a.", xp:10},
      {t:"Reconta em Verso", d:"Educação Literária e escrita: recontar uma história em quadras", f:"Há livros que recontam grandes obras em verso para gente nova. Faz o mesmo com uma história que leste: conta-a em 3 ou 4 quadras (estrofes de 4 versos) com rima.\nExemplo (de Ali Babá):\n«Ali Babá, lenhador, / viu ladrões junto ao rochedo; / ouviu a palavra mágica / e guardou bem o segredo.»\n«Mas o irmão, invejoso, / quis o tesouro só para si; / esqueceu-se do “sésamo” / e não conseguiu sair dali.»\nVerifica: as quadras seguem a ordem da história (início, problema, fim); cada quadra rima pelo menos no 2.º e no 4.º verso; leste em voz alta para ouvir o ritmo.", xp:15}
    ],
    resumo:[
      "A <b>Educação Literária</b> do 6.º ano pede que leias obras completas: narrativas, poemas e um texto dramático, de autores portugueses, lusófonos e estrangeiros.",
      "Numa narrativa identificas sempre os <b>elementos da narrativa</b>: <b>narrador</b> (participante, na 1.ª pessoa, ou não participante, na 3.ª), <b>personagens</b> (principais, secundárias e figurantes), <b>espaço</b>, <b>tempo</b> e <b>ação</b> (situação inicial, desenvolvimento e desfecho).",
      "O <b>caráter</b> das personagens vê-se pelo que fazem e dizem: Ali Babá é calmo e honesto; o irmão, Qassem, é invejoso e ambicioso. Justifica sempre com uma frase do texto.",
      "Nos textos literários há <b>recursos expressivos</b>: a <b>anáfora</b> (repetição no início de frases ou versos: «E depois era…»), a <b>comparação</b> («a sua cabeça estava tão vazia como os sacos estavam cheios»), a <b>personificação</b> e a <b>adjetivação</b>.",
      "No texto poético distingues <b>verso</b>, <b>estrofe</b>, <b>rima</b> e o <b>sujeito poético</b> (a voz que fala no poema). Há palavras que mostram a variedade do português: «boba» (tonta) é do português do Brasil."
    ],
    gloss:[
      ["Educação Literária","A parte de Português em que se leem e interpretam obras literárias."],
      ["caráter","O modo de ser de uma personagem, que se descobre pelas suas ações e palavras."],
      ["anáfora","Repetição de uma palavra ou expressão no início de frases ou versos."],
      ["comparação","Recurso que aproxima duas realidades com «como», «tal como», «tão… como»."],
      ["sujeito poético","A voz que fala num poema (não é obrigatoriamente o autor)."],
      ["texto lusófono","Texto escrito em português num país que não é Portugal (Brasil, Angola, Moçambique…)."]
    ],
    quiz:[
      {q:"Em «Pedro Alecrim», de António Mota, quem conta a história?", opts:["Um narrador que não entra na história","O próprio Pedro Alecrim, que participa na ação","O Nicolau","O pai do Pedro"], correct:1, explain:"O narrador é o Pedro Alecrim: participa na ação como personagem e conta na 1.ª pessoa. É um narrador participante."},
      {q:"Onde decorre a ação de «Pedro Alecrim»?", opts:["Em Ítaca","Numa cidade grande","No Pragal, uma aldeia","Num castelo na floresta"], correct:2, explain:"O espaço é o Pragal, uma aldeia. Ítaca é a ilha de Ulisses e o castelo na floresta é o da bruxa de «Jorinda e Joringuel»."},
      {q:"Em «Ulisses», porque é que os gregos vão combater em Troia?", opts:["Porque Páris, príncipe troiano, raptou Helena","Porque Ulisses queria ser rei de Troia","Porque Circe os enfeitiçou","Porque Penélope lhes pediu"], correct:0, explain:"Páris raptou a rainha grega Helena e levou-a para Troia, o que pôs gregos e troianos em guerra durante dez anos."},
      {q:"Na ilha de Circe, porque é que Euríloco não foi transformado em porco?", opts:["Porque Atena o protegeu","Porque não entrou no palácio e se escondeu","Porque bebeu o licor e não fez efeito","Porque ficou no navio"], correct:1, explain:"Euríloco, mais prudente, desconfiou e escondeu-se atrás dos cortinados; por isso viu tudo e foi avisar Ulisses. Quem ficou no navio foi o próprio Ulisses."},
      {q:"«a sua cabeça estava tão vazia como os sacos estavam cheios» (Ali Babá). Que recurso expressivo é este?", opts:["Anáfora","Personificação","Comparação","Rima"], correct:2, explain:"Aproxima duas realidades com «tão… como»: é uma comparação. Mostra que, de tanta ambição, Qassem esqueceu a fórmula «Abre-te, sésamo!»."},
      {q:"Qual destas frases caracteriza Qassem, irmão de Ali Babá?", opts:["Calmo e honesto","Invejoso e ambicioso","Prudente e desconfiado","Alegre e generoso"], correct:1, explain:"Qassem fica «cheio de inveja» e enche os sacos com ambição desmedida. Calmo e honesto é Ali Babá; prudente é Euríloco, em «Ulisses»."},
      {q:"Em «Jorinda e Joringuel», o que acontece a quem se aproxima do castelo da bruxa?", opts:["Fica mudo e quedo, sem se poder mexer","Transforma-se em porco","Perde a memória","Fica rico"], correct:0, explain:"Num raio de mil passos, a floresta estava embruxada: quem lá entrasse ficava imóvel até a bruxa o libertar; as raparigas eram transformadas em pássaros."},
      {q:"«E depois era o povo… E depois era Telémaco… E depois era Penélope…» (Ulisses). Que recurso se repete?", opts:["Comparação","Anáfora","Onomatopeia","Antítese"], correct:1, explain:"A expressão «E depois era» repete-se no início das frases: é uma anáfora. Acelera o ritmo e destaca os acontecimentos que concluem a ação."},
      {q:"No poema «A borboleta», de Odylo Costa, Filho, a palavra «boba» mostra que o poema é…", opts:["português","brasileiro","angolano","traduzido do inglês"], correct:1, explain:"«Boba» (tonta) é uma palavra do português do Brasil. Odylo Costa, Filho é um poeta brasileiro: é um texto lusófono."},
      {q:"«Basta imaginar / um pássaro para o aprisionar, / e depois imaginar o ar para o libertar» (Manuel António Pina). Qual é a mensagem principal?", opts:["Os pássaros devem viver em gaiolas","A imaginação tem muito poder: cria e liberta","É difícil imaginar","Os poemas não precisam de rima"], correct:1, explain:"O sujeito poético mostra que, só com a imaginação, se pode prender um pássaro e logo libertá-lo, dar-lhe asas e uma canção: a imaginação tem um enorme poder."},
      {q:"Em «Robinson Crusoé», porque é que Robinson dá ao seu companheiro o nome de Sexta-Feira?", opts:["Porque era o nome do pai dele","Porque o salvou numa sexta-feira","Porque chegaram seis navios","Porque era o sexto dia de tempestade"], correct:1, explain:"Robinson salvou-o numa sexta-feira e deu-lhe o nome desse dia da semana."},
      {q:"Na ilha, como é que Robinson sabia há quanto tempo lá estava?", opts:["Tinha um relógio do navio","Marcava os dias num poste de madeira","Contava as luas cheias com Sexta-Feira","Escrevia no diário do capitão"], correct:1, explain:"Fazia um entalhe por dia num poste, como um calendário. Assim nunca perdeu a conta ao tempo."}
    ],
    posters:[
      {title:"🌾 Ficha 1 — Pedro Alecrim, de António Mota", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">📍</span><span><b>Onde e quando:</b> no Pragal, uma aldeia; durante o tempo de aulas, no último dia de aulas e nas férias de verão.</span></li>'+
        '<li><span aria-hidden="true">🗣️</span><span><b>Narrador:</b> o próprio Pedro Alecrim, que participa na ação (narrador participante, na 1.ª pessoa).</span></li>'+
        '<li><span aria-hidden="true">👥</span><span><b>Personagens:</b> Pedro Alecrim (principal); Nicolau; o Luís; a família do Pedro (pai, mãe, o irmão Jacinto e a irmã Rosália).</span></li>'+
        '<li><span aria-hidden="true">🧭</span><span><b>Ação (por ordem):</b> <br>a luta entre o Luís e o Pedro; a descoberta dos girinos; as tarefas do Pedro; a sociedade com o Nicolau; a doença, a operação e a morte do pai do Pedro; a amizade entre o Pedro e o Luís; a partida do Nicolau; a correspondência (cartas) entre o Pedro e o Nicolau; o conserto do cavaquinho.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> identifica o narrador e justifica com uma frase na 1.ª pessoa; repara na anáfora e nos tempos do conjuntivo (manual pp. 87, 93, 95–96); sabe escrever uma carta como as do Pedro e do Nicolau.</span></li>'+
        '</ul>'},
      {title:"⛵ Ficha 2 — Ulisses, de Maria Alberta Menéres", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">📍</span><span><b>Onde e quando:</b> na ilha grega de Ítaca, em Troia e nas viagens por terras e mares desconhecidos; a guerra dura dez anos.</span></li>'+
        '<li><span aria-hidden="true">🗣️</span><span><b>Narrador:</b> não participante (conta na 3.ª pessoa).</span></li>'+
        '<li><span aria-hidden="true">👥</span><span><b>Personagens:</b> Ulisses, rei de Ítaca (principal); a mulher, Penélope; o filho, Telémaco; Euríloco, marinheiro prudente; a deusa Atena, sua protetora; Circe, a feiticeira.</span></li>'+
        '<li><span aria-hidden="true">🧭</span><span><b>Ação (por ordem):</b> <br>Páris rapta Helena e começa a guerra de Troia; Ulisses finge-se louco para não ir, mas é desmascarado quando desvia a charrua do pequeno Telémaco; na ilha de Circe, os marinheiros comem e bebem um licor e são transformados em porcos (só Euríloco escapa e avisa Ulisses); de regresso a Ítaca, disfarçado de mendigo, Ulisses vence os pretendentes com a ajuda de Telémaco e reencontra Penélope.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> caracteriza Ulisses (valente, astuto, amigo da família e da paz); explica a expressão «herói de mil façanhas»; reconhece a anáfora («E depois era…»).</span></li>'+
        '</ul>'},
      {title:"💰 Ficha 3 — Ali Babá e os Quarenta Ladrões (adapt. António Pescada)", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🧩</span><span><b>A história no excerto do manual:</b> Ali Babá descobre o rochedo que se abre com a fórmula «Abre-te, sésamo!». O irmão, Qassem, cheio de inveja, ameaça denunciá-lo e obriga-o a contar o segredo. Vai ao rochedo com seis mulas e enche os sacos de tesouros, mas, com a ambição, esquece a fórmula: «Abre-te, cevada!»… e fica preso lá dentro.</span></li>'+
        '<li><span aria-hidden="true">👥</span><span><b>Caracterização:</b> Ali Babá é calmo e honesto (dorme descansado); Qassem é invejoso, ambicioso e autoritário (não prega olho a noite toda).</span></li>'+
        '<li><span aria-hidden="true">✍️</span><span><b>Estrutura de resposta (do manual):</b> «Por um lado, Ali Babá era calmo e honesto, visto que… Por outro lado, Qassem era…, já que…»</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> o recurso expressivo em «a sua cabeça estava tão vazia como os sacos estavam cheios» é uma comparação; explica como a forma de dormir mostra o estado de espírito de cada irmão.</span></li>'+
        '</ul>'},
      {title:"🐦 Ficha 4 — Jorinda e Joringuel, dos Irmãos Grimm", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">📍</span><span><b>Onde:</b> numa densa floresta, junto a um castelo onde vive uma bruxa que de dia se transforma em gata ou em coruja.</span></li>'+
        '<li><span aria-hidden="true">🧭</span><span><b>Ação:</b> <br>Jorinda e Joringuel, noivos, passeiam na floresta e aproximam-se do castelo sem darem por isso; Jorinda é transformada em pássaro e Joringuel fica como uma estátua; a bruxa leva Jorinda; Joringuel, desesperado, vai guardar ovelhas numa aldeia; sonha com uma flor vermelha com uma pérola que desfaz os feitiços e, ao nono dia, encontra-a. Com ela, liberta Jorinda (e, no conto dos Grimm, também as outras raparigas enfeitiçadas).</span></li>'+
        '<li><span aria-hidden="true">🏷️</span><span><b>Tipo de texto:</b> conto tradicional (de autores estrangeiros: os Irmãos Grimm, alemães). Tem elementos maravilhosos: a bruxa, os feitiços, a flor mágica.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> relaciona o pisco-de-peito-azul com a história (o «passarito do anel azul»); identifica o espaço e o elemento mágico que resolve o problema.</span></li>'+
        '</ul>'},
      {title:"🖋️ Ficha 5 — Poesia: Manuel António Pina e o Primeiro Livro de Poesia", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">📖</span><span><b>«Basta imaginar», Manuel António Pina (O Pássaro da Cabeça e mais versos para crianças):</b> o poema repete «imaginar» no início dos versos (anáfora) e rima em -ar (aprisionar, libertar, voar, cantar). Mensagem: a imaginação tem o poder de prender e de libertar.</span></li>'+
        '<li><span aria-hidden="true">🌍</span><span><b>Primeiro Livro de Poesia (seleção de Sophia de Mello Breyner Andresen):</b> reúne poemas portugueses e lusófonos. «A borboleta», de Odylo Costa, Filho, é brasileiro (pista: a palavra «boba»); «Boa noite», de Sidónio Muralha, é português.</span></li>'+
        '<li><span aria-hidden="true">🧩</span><span><b>Como analisar um poema:</b> conta os versos e as estrofes; vê o esquema rimático; procura recursos (anáfora, comparação, personificação); diz quem é o sujeito poético e qual é o tema.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> justifica sempre com um verso entre aspas, indicando o número do verso.</span></li>'+
        '</ul>'},
      {title:"🏝️ Ficha 6 — Robinson Crusoé, de Daniel Defoe (adapt. John Lang)", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">✍️</span><span><b>Obra e autor:</b> romance de aventuras do escritor inglês Daniel Defoe, publicado em 1719. No 6.º ano lê-se uma adaptação para jovens (de John Lang).</span></li>'+
        '<li><span aria-hidden="true">📍</span><span><b>Onde e quando:</b> no século XVII; sobretudo numa ilha deserta, perto da costa da América do Sul, onde Robinson vive 28 anos.</span></li>'+
        '<li><span aria-hidden="true">🗣️</span><span><b>Narrador:</b> no romance de Defoe, é o próprio Robinson que conta, na 1.ª pessoa, como num diário. Confirma na tua edição: as adaptações às vezes mudam isto.</span></li>'+
        '<li><span aria-hidden="true">👥</span><span><b>Personagens:</b> Robinson Crusoé (principal); Sexta-Feira, o homem que ele salva e que se torna seu companheiro; o pai de Robinson, que o aconselha a não ir para o mar.</span></li>'+
        '<li><span aria-hidden="true">🧭</span><span><b>Ação (por ordem):</b> <br>contra o conselho do pai, Robinson parte para o mar; depois de várias viagens, o navio naufraga e ele é o único sobrevivente; tira do navio ferramentas, armas e mantimentos; constrói um abrigo, marca os dias num poste de madeira, cria cabras e semeia cereais; um dia vê uma pegada humana na areia; salva um prisioneiro e chama-lhe Sexta-Feira, o dia em que o encontrou; ao fim de 28 anos, ajuda o capitão de um navio inglês a recuperar o barco e regressa a casa.</span></li>'+
        '<li><span aria-hidden="true">💭</span><span><b>Temas:</b> sobrevivência, engenho (resolver problemas com o que há), solidão, esperança e amizade. Para pensar: Robinson trata Sexta-Feira como criado e ensina-lhe a sua língua e a sua religião; é a visão de um europeu de 1719. Hoje, o que pensas disso?</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Para o teste:</b> identifica os elementos da narrativa; caracteriza Robinson pelo que faz (persistente, engenhoso, prudente); explica a origem do nome «Sexta-Feira».</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"📖 Texto narrativo", points:["Conta uma história","Narrador, personagens, espaço, tempo e ação","Organiza-se em parágrafos"]},
      right:{title:"🖋️ Texto poético", points:["Exprime sentimentos e ideias","Sujeito poético, versos, estrofes e rima","Organiza-se em versos"]}
    },
    resources:[
      {icon:"📚", title:"Plano Nacional de Leitura", desc:"Lista de livros recomendados por idade, para escolheres as próximas leituras.", site:"pnl2027.gov.pt", url:"https://www.pnl2027.gov.pt/np4/home"}
    ],
    boss:"«Põe-te à prova!» de cada capítulo do manual «Novo Livro Aberto 6»"
  },
  {
    id:"p10", num:10, c:"m6", icon:"📰",
    title:"Textos do Dia a Dia: Notícias, Anúncios e Entrevistas",
    subtitle:"Notícia, anúncio publicitário, entrevista, roteiro, resumo e facto/opinião",
    pages:"manual «Novo Livro Aberto 6», cap. 1 «Textos do dia a dia» (pp. 22–43); entrevista p. 97; resumo p. 271",
    lead:"Todos os dias lês textos que informam (notícias), que querem convencer-te (anúncios) e que dão voz a alguém (entrevistas). Neste mundo aprendes a lê-los com olho crítico, a separar factos de opiniões e a resumir. Também aprendes a ler e a escrever um roteiro. Vê os 6 exemplos resolvidos, um de cada vez.",
    missions:[
      {t:"Caça ao Lead", d:"A estrutura da notícia", f:"Escolhe uma notícia curta num jornal ou num site para jovens (com a ajuda de um adulto). Copia o título e o lead (o 1.º parágrafo).\nFaz uma tabela: Quem? O quê? Quando? Onde? Como? Porquê?\nVerifica: o lead responde a quase todas as perguntas; o resto da notícia (o corpo) dá pormenores.", xp:10},
      {t:"O Anúncio Que Convence", d:"Linguagem publicitária", f:"Cria um anúncio para uma campanha da tua escola (por exemplo, poupar água). Usa uma imagem, um slogan curto e pelo menos duas frases no imperativo, na 2.ª pessoa.\nVerifica: um colega percebe em 5 segundos o que o anúncio pede? Tem argumentos, e não só a imagem?", xp:15},
      {t:"Entrevista a Alguém da Família", d:"Planificar e escrever uma entrevista", f:"Prepara 5 perguntas abertas (que não se respondam com sim/não) sobre a profissão ou a infância de um familiar. Faz a entrevista e escreve-a: introdução a apresentar o entrevistado, e depois pergunta e resposta.\nVerifica: as perguntas estão a negrito ou identificadas, e cada resposta é a de quem foi entrevistado (não a tua opinião).", xp:15},
      {t:"Resumo em 40 Palavras", d:"Resumir um texto", f:"Escolhe um texto informativo do manual. Faz perguntas a cada parágrafo (Quem? O quê? Porquê?), responde com frases curtas e junta tudo num resumo de 40 a 50 palavras, com as tuas palavras.\nVerifica: conta as palavras; não copiaste frases inteiras, não deste opiniões e está lá a ideia principal de cada parágrafo.", xp:10}
    ],
    resumo:[
      "A <b>notícia</b> informa sobre um acontecimento recente e verdadeiro. Tem <b>título</b> (curto e chamativo), às vezes <b>antetítulo</b> e <b>subtítulo</b>, o <b>lead</b> (1.º parágrafo, que responde a «quem? o quê? quando? onde?» e, às vezes, «como? porquê?») e o <b>corpo</b> (os pormenores). Usa a 3.ª pessoa, o pretérito perfeito para os acontecimentos e <b>citações</b> entre aspas.",
      "O <b>anúncio publicitário</b> quer <b>convencer</b> a comprar um produto ou a mudar um comportamento (campanhas). Junta imagem e texto curto: <b>slogan</b>, frases no <b>imperativo</b>, a <b>2.ª pessoa</b> («tu») e recursos expressivos, como a <b>rima</b> ou o jogo de palavras («Cinto-me vivo»).",
      "A <b>entrevista</b> dá a conhecer uma pessoa ou o que ela sabe. Tem uma <b>introdução</b> que apresenta o entrevistado e depois <b>perguntas</b> do entrevistador e <b>respostas</b> do entrevistado.",
      "Um <b>facto</b> pode ser verificado («O lince-ibérico vive no sul de Portugal e de Espanha»). Uma <b>opinião</b> é o que alguém pensa («O lince é o animal mais bonito»), e muitas vezes começa por «acho que», «na minha opinião».",
      "Para fazer um <b>resumo</b>: lê o texto, sublinha as ideias principais (podes fazer perguntas a cada parágrafo), escreve-as por ordem, com as tuas palavras, sem exemplos nem opiniões, e respeita o número de palavras pedido."
    ],
    gloss:[
      ["notícia","Texto que informa sobre um acontecimento recente e verdadeiro."],
      ["lead","O 1.º parágrafo da notícia: responde a quem, o quê, quando e onde."],
      ["anúncio publicitário","Texto, com imagem, que quer convencer a comprar algo ou a mudar um comportamento."],
      ["slogan","Frase curta e fácil de lembrar de um anúncio."],
      ["entrevista","Texto com perguntas de um entrevistador e respostas de um entrevistado."],
      ["facto","Informação que pode ser comprovada."],
      ["opinião","O que alguém pensa sobre um assunto; não se pode comprovar."],
      ["resumo","Texto curto, com as ideias principais de outro, escrito por palavras nossas."]
    ],
    quiz:[
      {q:"Qual é a parte da notícia que responde a «quem? o quê? quando? onde?»?", opts:["O título","O lead","O corpo","A citação"], correct:1, explain:"O lead é o 1.º parágrafo e resume o essencial do acontecimento. O corpo dá os pormenores; o título chama a atenção."},
      {q:"Qual é o principal objetivo de um anúncio publicitário?", opts:["Informar sobre um acontecimento recente","Convencer o leitor a comprar algo ou a mudar um comportamento","Contar uma história inventada","Apresentar uma pessoa"], correct:1, explain:"O anúncio quer convencer (persuadir). Informar sobre um acontecimento é a função da notícia; apresentar uma pessoa, da entrevista."},
      {q:"Num anúncio, porque se usam frases como «Usa o cinto!»?", opts:["Porque o imperativo dá ordens e conselhos diretos ao leitor","Porque é obrigatório usar o passado","Porque o anúncio é escrito na 3.ª pessoa","Porque assim parece uma notícia"], correct:0, explain:"O imperativo, na 2.ª pessoa, fala diretamente com o leitor e pede-lhe uma ação: é típico da linguagem publicitária."},
      {q:"Qual destas frases é uma opinião?", opts:["O lince-ibérico é a espécie de felino mais ameaçada do mundo.","A caça furtiva matou muitos linces no século XX.","Acho que todos devíamos ajudar a salvar o lince.","O lince vive no sul de Portugal e de Espanha."], correct:2, explain:"«Acho que…» mostra o que alguém pensa: é uma opinião. As outras frases dão informações que se podem verificar (factos)."},
      {q:"Numa notícia, porque é que o jornalista coloca frases entre aspas?", opts:["Para mostrar a sua opinião","Para reproduzir as palavras exatas de alguém (citação)","Para destacar o título","Para fazer rir o leitor"], correct:1, explain:"As aspas marcam uma citação: as palavras exatas de uma pessoa, por exemplo de uma investigadora. Dão credibilidade à notícia."},
      {q:"Que tempo verbal se usa sobretudo para contar os acontecimentos de uma notícia?", opts:["Futuro","Pretérito perfeito do indicativo","Imperativo","Condicional"], correct:1, explain:"Os acontecimentos já aconteceram: «alertou», «descobriram». O imperativo é próprio dos anúncios."},
      {q:"Como deve começar uma entrevista escrita?", opts:["Com a primeira pergunta","Com uma introdução que apresenta o entrevistado","Com a opinião do entrevistador","Com um slogan"], correct:1, explain:"A introdução diz quem é a pessoa e porque foi entrevistada (por exemplo, «Dora Martins é uma das ilustradoras…»). Só depois vêm as perguntas e as respostas."},
      {q:"O que NÃO deve ter um resumo?", opts:["As ideias principais","As tuas palavras","A tua opinião e exemplos","A ordem das ideias do texto"], correct:2, explain:"O resumo é fiel ao texto: tem as ideias principais, por ordem e por palavras tuas, mas não leva opiniões nem pormenores e exemplos."},
      {q:"No anúncio «Cinto-me vivo», que recurso torna o slogan memorável?", opts:["Uma comparação","Um jogo de palavras entre «cinto» e «sinto»","Uma citação","Uma enumeração"], correct:1, explain:"«Cinto-me» soa como «sinto-me»: junta o cinto de segurança com a ideia de se sentir vivo. Os jogos de palavras ajudam a lembrar a mensagem."},
      {q:"Um resumo de um texto com 3 parágrafos deve ter, em regra…", opts:["uma frase por parágrafo com a ideia principal","as frases mais bonitas copiadas","só a ideia do último parágrafo","mais palavras do que o texto"], correct:0, explain:"Uma boa estratégia é tirar a ideia principal de cada parágrafo e juntá-las por ordem, com as tuas palavras e dentro do número de palavras pedido."},
      {q:"Num roteiro de visita, que tempo verbal aparece mais nas indicações («sobe a rua», «visita o castelo»)?", opts:["Pretérito perfeito","Imperativo","Futuro","Condicional"], correct:1, explain:"O roteiro guia o leitor, por isso usa o imperativo, como quem dá indicações: «parte», «sobe», «segue»."},
      {q:"Qual é a principal finalidade de um roteiro?", opts:["Contar uma história inventada","Guiar um percurso, por ordem, com o que ver em cada paragem","Convencer a comprar um produto","Dar a opinião sobre uma viagem"], correct:1, explain:"O roteiro informa e orienta: por onde ir, por que ordem e o que ver."}
    ],
    posters:[
      {title:"📰 Exemplo 1 — Ler uma notícia: o lead", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> as informações essenciais desta notícia (exemplo inventado): «Alunos de Viseu plantam 300 árvores. Na manhã de sábado, cerca de 60 alunos de uma escola de Viseu plantaram 300 árvores numa encosta ardida no verão, para ajudar a recuperar a floresta.»</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> procura o lead: é o 1.º parágrafo. Faz-lhe as perguntas Quem? O quê? Quando? Onde? Porquê?</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>Quem? cerca de 60 alunos de uma escola<br>O quê? plantaram 300 árvores<br>Quando? na manhã de sábado<br>Onde? numa encosta ardida, em Viseu<br>Porquê? para ajudar a recuperar a floresta</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o lead responde a todas as perguntas; o título resume a notícia em poucas palavras.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> os verbos estão no pretérito perfeito («plantaram») e na 3.ª pessoa; não há opiniões do jornalista. É o que o manual pede nas fichas (tabela Quem? O quê? Quando?).</span></li>'+
        '</ul>'},
      {title:"📣 Exemplo 2 — Como funciona um anúncio", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> como é que o anúncio de segurança rodoviária «Cinto-me vivo», do manual, tenta convencer quem o vê.</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> pergunta-te: quem fez o anúncio? O que quer que eu faça? Que palavras e imagens usa para isso?</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>Objetivo: convencer a usar sempre o cinto de segurança (é uma campanha, não vende nada)<br>Slogan: «Cinto-me vivo», um jogo de palavras entre «cinto» e «sinto»<br>Imagem: um cinto apertado, que mostra a ação pedida<br>Quem assina: entidades de segurança rodoviária e as polícias (dá confiança à mensagem)</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> o anúncio junta imagem, slogan e entidades credíveis para levar as pessoas a mudar um comportamento.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> num anúncio que vende um produto, o objetivo é a compra; numa campanha, é mudar um comportamento. Nos dois casos, é um texto para convencer.</span></li>'+
        '</ul>'},
      {title:"🎤 Exemplo 3 — A estrutura da entrevista", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> como está organizada a entrevista do manual à ilustradora Dora Martins («O meu escape sempre passou pelo desenho»).</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> separa a introdução das perguntas e das respostas.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>Título: uma frase da entrevistada, entre aspas<br>Introdução: apresenta a entrevistada e o assunto<br>Perguntas (a negrito), do entrevistador: «Ser ilustradora é um sonho de infância?»<br>Respostas, da entrevistada, na 1.ª pessoa: «Não é um sonho de infância, na medida em que…»</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> introdução + pares pergunta/resposta; o título resume a ideia mais forte.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> boas perguntas são abertas (não se respondem com «sim» ou «não»). Experimenta na missão «Entrevista a Alguém da Família».</span></li>'+
        '</ul>'},
      {title:"✂️ Exemplo 4 — Fazer um resumo", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> como resumir em 35 a 45 palavras o texto «O caso do lince-ibérico» (do caderno de atividades).</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> faz uma pergunta a cada parte do texto e responde com uma frase curta.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>O que é? É o felino mais ameaçado do mundo.<br>Onde vive? No sul de Espanha e no sul de Portugal.<br>Quais as ameaças? Menos coelhos, agricultura intensiva, caça furtiva e atropelamentos nas estradas.<br>Junta as respostas: «O lince-ibérico, o felino mais ameaçado do mundo, vive no sul de Espanha e de Portugal. Está em risco porque há menos coelhos, por causa da agricultura intensiva, da caça furtiva e dos atropelamentos nas estradas, que dividem o seu habitat.»</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> um resumo com 41 palavras e as ideias principais, por ordem.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> conta as palavras; confirma que não há opiniões («coitado do lince») nem pormenores dispensáveis.</span></li>'+
        '</ul>'},
      {title:"⚖️ Exemplo 5 — Facto ou opinião?", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que queremos descobrir:</b> quais destas frases são factos e quais são opiniões: (a) «O café foi descoberto na Etiópia.» (b) «O café é a melhor bebida do mundo.» (c) «Na minha opinião, os jovens não deviam beber café.» (d) «O café ajuda a combater o sono.»</span></li>'+
        '<li><span aria-hidden="true">🚦</span><span><b>Como começar:</b> pergunta: «Posso comprovar isto num livro ou numa experiência?» Se sim, é facto. Se depende do gosto de cada um, é opinião.</span></li>'+
        '<li><span aria-hidden="true">👣</span><span><b>Passo a passo:</b> <br>(a) facto (está na história do café, contada no texto do caderno)<br>(b) opinião (depende do gosto: «a melhor»)<br>(c) opinião (marcador «na minha opinião»)<br>(d) facto (o efeito do café no sono pode ser estudado)</span></li>'+
        '<li><span aria-hidden="true">✅</span><span><b>Resultado:</b> factos: a e d; opiniões: b e c.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> palavras como «acho», «penso», «o melhor», «o pior», «bonito», «devia» costumam marcar opiniões. Num texto de opinião, as opiniões apoiam-se em factos (argumentos).</span></li>'+
        '</ul>'},
      {title:"🗺️ Exemplo 6 — Ler e escrever um roteiro", svg:'<ul class="wheel-legend">'+
        '<li><span aria-hidden="true">🎯</span><span><b>O que é:</b> um roteiro é um texto que guia um percurso (uma visita, um passeio, uma viagem): diz <b>por onde</b> ir, <b>por que ordem</b>, <b>quanto tempo</b> e <b>o que ver</b> em cada paragem. Quer informar e orientar.</span></li>'+
        '<li><span aria-hidden="true">📄</span><span><b>Um exemplo (inventado):</b> <i>«Roteiro: uma manhã na vila de Pedra Alta. 9h30 — Parte do largo da Câmara e sobe a Rua do Castelo (10 minutos a pé). 9h45 — Visita o castelo; não percas a vista da torre. 10h30 — Desce pelas escadinhas até ao rio e segue o passadiço para a esquerda. 11h00 — Chegada ao moinho de água: lanche no parque de merendas. Dica: leva calçado confortável e água.»</i></span></li>'+
        '<li><span aria-hidden="true">🧩</span><span><b>Como está organizado:</b> título; paragens <b>por ordem</b>, muitas vezes com horas ou números; <b>verbos no imperativo</b> («parte», «sobe», «visita», «segue»); <b>indicações de lugar e de direção</b> («até ao rio», «para a esquerda», «a pé»); dicas práticas no fim. Pode vir com um mapa.</span></li>'+
        '<li><span aria-hidden="true">✍️</span><span><b>Escreve o teu:</b> escolhe um percurso que conheces (de casa à escola, uma visita à tua terra); põe 4 a 6 paragens por ordem; usa o imperativo e palavras de direção; acaba com uma dica.</span></li>'+
        '<li><span aria-hidden="true">🔍</span><span><b>Verificar:</b> um amigo que nunca lá foi conseguia seguir o teu roteiro sem se perder? Se sim, está claro.</span></li>'+
        '</ul>'}
    ],
    compare:{
      left:{title:"📰 Notícia", points:["Quer informar","3.ª pessoa e pretérito perfeito","Título, lead e corpo"]},
      right:{title:"📣 Anúncio publicitário", points:["Quer convencer","2.ª pessoa e imperativo","Imagem, slogan e marca"]}
    },
    resources:[
      {icon:"📰", title:"Visão Júnior", desc:"Notícias e entrevistas escritas para jovens (o manual usa textos desta revista). Algumas peças podem pedir assinatura.", site:"visao.pt/visaojunior", url:"https://visao.pt/visaojunior/"}
    ],
    boss:"«Põe-te à prova!» do cap. 1 — manual «Novo Livro Aberto 6», p. 42"
  }
  ];
