  const HGP_WORLDS = [
  {
    id:"m1", num:1, c:"m1", icon:"👑",
    title:"Brasil, Ouro e o Rei que Manda em Tudo",
    subtitle:"Portugal no século XVIII", pages:"pp. 20–40",
    lead:"Portugal do séc. XVIII depende do Brasil como um jogador depende do seu servidor principal para recursos: ouro, açúcar, diamantes. D. João V governa como um admin com poderes totais, sem regras votadas por ninguém.",
    missions:[
      {t:"O Servidor Brasil", d:"Açúcar e escravização (p. 22)", f:"Ler + desenhar as rotas do açúcar", xp:10},
      {t:"Ouro e Diamantes", d:"Ouro, diamantes e escravização (p. 24)", f:"Vídeo curto + resumo em 3 frases", xp:10},
      {t:"Admin Supremo", d:"D. João V, rei absoluto (p. 30)", f:"Comparar D. João V a um admin com poderes ilimitados", xp:10},
      {t:"O Reset de Lisboa", d:"Marquês de Pombal e reconstrução (pp. 34–36)", f:"Desenhar a nova Lisboa em grelha, como um mapa", xp:15},
      {t:"Quem é Quem no Servidor", d:"Sociedade de ordens (p. 28)", f:"Criar cartas de personagem: clero, nobreza, povo", xp:10}
    ],
    resumo:[
      "Portugal dependia fortemente do Brasil, de onde vinham <b>ouro e diamantes</b> (Minas Gerais) e produtos como o <b>açúcar</b>.",
      "A exploração das minas e a cultura do açúcar assentavam em <b>mão de obra escrava</b>: milhões de africanos foram levados à força para o Brasil (migração forçada), enquanto colonos portugueses migravam voluntariamente (migração livre).",
      "O <b>legado africano</b> é visível ainda hoje nas sociedades portuguesa e brasileira, na música, na gastronomia e na religião.",
      "Novas culturas agrícolas vindas da América, como a <b>batata</b> e o <b>milho</b>, melhoraram a dieta e ajudaram a aumentar a população portuguesa.",
      "A sociedade organizava-se em <b>ordens</b> (grupos hierárquicos definidos por nascimento): o clero, a nobreza e o povo — cada um com privilégios e deveres diferentes.",
      "<b>D. João V</b> (rei de 1706 a 1750) foi um rei absoluto: governava sozinho, sem parlamento a limitá-lo, e mostrava o seu poder através do fausto da Corte e de obras monumentais como o Convento de Mafra.",
      "A 1 de novembro de <b>1755</b>, um terramoto seguido de tsunami e incêndio destruiu grande parte de Lisboa.",
      "O <b>Marquês de Pombal</b> (Sebastião José de Carvalho e Melo), ministro de D. José I, liderou a reconstrução de Lisboa: a Baixa Pombalina teve um traçado em quadrícula e edifícios construídos em <b>\"gaiola\"</b> — uma estrutura de madeira sobre estacas, mais resistente a tremores de terra — e uma nova rede de esgotos.",
      "Pombal reforçou o poder do Estado: expulsou os jesuítas (1759), criou companhias comerciais como a <b>Companhia de Grão-Pará e Maranhão</b> para dinamizar o comércio, e reformou o ensino, criando o <b>Colégio dos Nobres</b> e a Real Mesa Censória."
    ],
    gloss:[
      ["monarquia absoluta","O rei manda sozinho em tudo, sem eleições nem regras que o limitem."],
      ["sociedade de ordens","A forma como a sociedade estava organizada em grupos (clero, nobreza, povo) definidos pelo nascimento, não pelo mérito."],
      ["clero","O grupo dos religiosos — padres, bispos, membros da Igreja."],
      ["nobreza","O grupo dos aristocratas, com terras e títulos herdados."],
      ["colonos","Pessoas que se mudam para viver e trabalhar num território distante, como o Brasil."],
      ["barroco","Um estilo de arte muito decorado e dourado, usado para mostrar riqueza e poder."],
      ["cristão-novo","Nome dado a judeus obrigados a converter-se ao catolicismo, muitas vezes continuando a ser perseguidos."],
      ["terramoto de 1755","O grande tremor de terra que destruiu quase toda a Lisboa a 1 de novembro de 1755."],
      ["Marquês de Pombal","Sebastião José de Carvalho e Melo, ministro que liderou a reconstrução de Lisboa após o terramoto."],
      ["gaiola pombalina","A estrutura de madeira usada dentro das paredes dos novos edifícios de Lisboa, para resistirem melhor a outro terramoto."],
      ["jesuítas","Membros de uma ordem religiosa católica, expulsos de Portugal e das suas colónias por Pombal em 1759."],
      ["Casa da Índia","Instituição em Lisboa que geria o comércio com o Brasil e outras colónias, incluindo o ouro."],
      ["Convento de Mafra","Obra monumental mandada construir por D. João V para mostrar o poder e a riqueza do rei."],
      ["Real Mesa Censória","Instituição criada por Pombal para controlar e reformar o ensino em Portugal."],
      ["migração forçada","Pessoas levadas contra a vontade para outro território — como os africanos escravizados enviados ao Brasil."]
    ],
    routes:[
      {title:"🗺️ A Rota do Ouro: do Brasil à Corte", stops:[
        {icon:"⛏️", label:"Minas Gerais", sub:"ouro e diamantes"},
        {icon:"⚓", label:"Frota do Brasil", sub:"travessia do Atlântico"},
        {icon:"🏛️", label:"Casa da Índia", sub:"Lisboa"},
        {icon:"👑", label:"Corte Real", sub:"fausto e poder"}
      ]}
    ],
    posters:[
      {title:"🌊 O Terramoto de 1755, em 3 fases", svg:'<svg class="poster-svg" viewBox="0 0 680 220" role="img" aria-label="Em três fases: Lisboa antes de 1755, com ruas estreitas e sem plano; o terramoto, tsunami e incêndio de 1 de novembro de 1755, que deixam Lisboa em ruínas; e a Baixa Pombalina reconstruída depois, em quadrícula, com paredes de gaiola antissísmica."><defs><marker id="pst-m1-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="100" y="18" text-anchor="middle" font-size="12.5" font-family="Lexend, sans-serif" font-weight="700">Lisboa antes</text><rect x="60" y="100" width="16" height="50" fill="var(--wc-bg)" stroke="currentColor" stroke-width="1.3" opacity="0.85"/><rect x="82" y="80" width="20" height="70" fill="var(--wc-bg)" stroke="currentColor" stroke-width="1.3" opacity="0.85" transform="rotate(-3 92 115)"/><rect x="106" y="110" width="16" height="40" fill="var(--wc-bg)" stroke="currentColor" stroke-width="1.3" opacity="0.85"/><rect x="124" y="85" width="18" height="65" fill="var(--wc-bg)" stroke="currentColor" stroke-width="1.3" opacity="0.85" transform="rotate(3 133 117)"/><path d="M50,158 Q80,168 110,158 T150,158" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.5"/><text x="100" y="178" text-anchor="middle" font-size="9" opacity="0.65">ruas estreitas, sem plano</text><line x1="160" y1="120" x2="250" y2="120" stroke="currentColor" stroke-width="2" opacity="0.35" marker-end="url(#pst-m1-arrow)"/><text x="340" y="18" text-anchor="middle" font-size="12.5" font-family="Lexend, sans-serif" font-weight="700">1 nov. 1755</text><circle cx="290" cy="70" r="20" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="290" y="76" text-anchor="middle" font-size="16">🌍</text><text x="315" y="76" text-anchor="middle" font-size="14" opacity="0.5">+</text><circle cx="340" cy="70" r="20" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="340" y="76" text-anchor="middle" font-size="16">🌊</text><text x="365" y="76" text-anchor="middle" font-size="14" opacity="0.5">+</text><circle cx="390" cy="70" r="20" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="390" y="76" text-anchor="middle" font-size="16">🔥</text><text x="290" y="100" text-anchor="middle" font-size="8" opacity="0.65">terramoto</text><text x="340" y="100" text-anchor="middle" font-size="8" opacity="0.65">tsunami</text><text x="390" y="100" text-anchor="middle" font-size="8" opacity="0.65">incêndio</text><line x1="340" y1="112" x2="340" y2="138" stroke="currentColor" stroke-width="2" opacity="0.5" marker-end="url(#pst-m1-arrow)"/><circle cx="340" cy="158" r="18" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="340" y="164" text-anchor="middle" font-size="15">🏚️</text><text x="340" y="186" text-anchor="middle" font-size="9" opacity="0.65">Lisboa em ruínas</text><line x1="430" y1="120" x2="520" y2="120" stroke="currentColor" stroke-width="2" opacity="0.35" marker-end="url(#pst-m1-arrow)"/><text x="583" y="18" text-anchor="middle" font-size="12.5" font-family="Lexend, sans-serif" font-weight="700">Depois: Baixa Pombalina</text><rect x="550" y="45" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="570" y="45" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="590" y="45" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="550" y="65" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="570" y="65" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="590" y="65" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="550" y="85" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="570" y="85" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><rect x="590" y="85" width="14" height="14" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="1.3"/><text x="583" y="115" text-anchor="middle" font-size="9" opacity="0.65">ruas em quadrícula</text><rect x="550" y="130" width="66" height="38" fill="none" stroke="var(--wc)" stroke-width="1.5"/><line x1="550" y1="168" x2="583" y2="130" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="566" y1="168" x2="599" y2="130" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="583" y1="168" x2="616" y2="130" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="550" y1="130" x2="583" y2="168" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="566" y1="130" x2="599" y2="168" stroke="currentColor" stroke-width="1" opacity="0.6"/><line x1="583" y1="130" x2="616" y2="168" stroke="currentColor" stroke-width="1" opacity="0.6"/><text x="583" y="188" text-anchor="middle" font-size="8.5" opacity="0.65">gaiola antissísmica</text></svg>'}
    ],
    timeline:[
      {y:"1706", ic:"👑", t:"D. João V sobe ao trono e governa como rei absoluto."},
      {y:"déc. 1730–1740", ic:"💎", t:"Auge da exploração de ouro e diamantes em Minas Gerais, no Brasil."},
      {y:"1750", ic:"📜", t:"D. João V morre; D. José I sobe ao trono e nomeia o futuro Marquês de Pombal seu ministro."},
      {y:"1 nov. 1755", ic:"🌊", t:"Um terramoto, seguido de tsunami e incêndio, destrói grande parte de Lisboa."},
      {y:"1755–1760s", ic:"🏗️", t:"Pombal lidera a reconstrução: a Baixa Pombalina nasce em quadrícula, com \"gaiola\" antissísmica."},
      {y:"1759", ic:"⛪", t:"Pombal expulsa os jesuítas de Portugal e das colónias."},
      {y:"1761–1768", ic:"📚", t:"Reforma do ensino: Colégio dos Nobres e Real Mesa Censória."}
    ],
    quiz:[
      {q:"Quem foi o rei absoluto que reinou entre 1706 e 1750?", opts:["D. João V","D. José I","D. Miguel","D. Pedro IV"], correct:0, explain:"D. João V reinou de 1706 a 1750, sem parlamento a limitar o seu poder."},
      {q:"O que aconteceu em Lisboa a 1 de novembro de 1755?", opts:["Um terramoto seguido de tsunami e incêndio","A expulsão dos jesuítas","A chegada do ouro do Brasil","A construção do Convento de Mafra"], correct:0, explain:"O grande terramoto de 1755, seguido de tsunami e incêndio, destruiu grande parte de Lisboa."},
      {q:"Quem liderou a reconstrução de Lisboa depois do terramoto?", opts:["Marquês de Pombal","D. João V","D. José I","Wellington"], correct:0, explain:"O Marquês de Pombal, ministro de D. José I, liderou a reconstrução da Baixa Pombalina."},
      {q:"O que era a \"gaiola pombalina\"?", opts:["Uma estrutura de madeira que tornava os edifícios mais resistentes a terramotos","Uma prisão para opositores políticos","Um tipo de navio usado no comércio com o Brasil","Uma taxa cobrada aos comerciantes"], correct:0, explain:"A gaiola pombalina era uma estrutura de madeira dentro das paredes, que tornava os edifícios mais resistentes a tremores de terra."},
      {q:"De onde vinham sobretudo o ouro e os diamantes que enriqueceram Portugal no século XVIII?", opts:["De Minas Gerais, no Brasil","De Angola","Da Índia","De Cabo Verde"], correct:0, explain:"O ouro e os diamantes vinham sobretudo da região de Minas Gerais, no Brasil."},
      {q:"Quem foi o Marquês de Pombal?", opts:["Ministro de D. José I que liderou a reconstrução de Lisboa","O rei de Portugal em 1755","Um general francês","O comandante da frota do Brasil"], correct:0, explain:"Sebastião José de Carvalho e Melo, o Marquês de Pombal, foi ministro de D. José I."},
      {q:"Como se chamava a forma como a sociedade portuguesa do século XVIII estava organizada, em clero, nobreza e povo?", opts:["Sociedade de ordens","República","Democracia direta","Feudalismo"], correct:0, explain:"A sociedade de ordens organizava as pessoas em grupos hierárquicos definidos pelo nascimento, não pelo mérito."},
      {q:"Além do ouro e dos diamantes, que outro produto vindo do Brasil enriquecia Portugal no século XVIII?", opts:["Açúcar","Petróleo","Chá","Arroz"], correct:0, explain:"O açúcar, tal como o ouro e os diamantes, era um dos principais produtos vindos do Brasil."},
      {q:"Em que ano Pombal expulsou os jesuítas de Portugal e das colónias?", opts:["1759","1755","1750","1822"], correct:0, explain:"Pombal expulsou os jesuítas em 1759, reforçando o poder do Estado."},
      {q:"Para que servia a Companhia de Grão-Pará e Maranhão, criada por Pombal?", opts:["Para dinamizar o comércio","Para organizar a Igreja Católica","Para criar um novo exército","Para administrar a justiça"], correct:0, explain:"Pombal criou companhias comerciais, como esta, para dinamizar o comércio português."}
    ],
    compare:{
      left:{title:"🏚️ Lisboa antes de 1755", points:["Ruas estreitas e labirínticas","Edifícios de pedra e madeira, sem reforço","Sem plano urbano definido"]},
      right:{title:"🏙️ Baixa Pombalina (depois)", points:["Ruas largas, em quadrícula","Edifícios em \"gaiola\" pombalina antissísmica","Nova rede de esgotos"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 40)"
  },
  {
    id:"m2", num:2, c:"m2", icon:"⚔️",
    title:"Guerra de Servidores",
    subtitle:"O triunfo do liberalismo", pages:"pp. 42–60",
    lead:"A França força um update que ninguém pediu — as invasões napoleónicas — e o servidor Portugal divide-se entre quem quer manter o admin único (absolutistas) e quem quer regras votadas por todos (liberais).",
    missions:[
      {t:"Três Tentativas de Invasão", d:"Invasões napoleónicas 1807–1810 (p. 44)", f:"Linha do tempo desenhada", xp:10},
      {t:"A Corte Faz Logout", d:"Corte no Brasil e ingleses em Portugal (p. 46)", f:"Mapa da rota Lisboa–Brasil", xp:10},
      {t:"Regras Novas no Servidor", d:"Revolução Liberal de 1820 e Constituição de 1822 (p. 48)", f:"Escrever 3 regras novas que os liberais queriam", xp:10},
      {t:"Guerra Civil: Irmão contra Irmão", d:"Dois irmãos em guerra (p. 54)", f:"Comparar D. Pedro e D. Miguel como duas equipas rivais", xp:15}
    ],
    resumo:[
      "Entre 1807 e 1810, Portugal foi invadido três vezes pelas tropas de <b>Napoleão Bonaparte</b>, por se recusar a cumprir o <b>Bloqueio Continental</b> — a proibição de comercializar com a Inglaterra.",
      "<b>1.ª invasão (1807):</b> o general <b>Junot</b> entrou em Portugal em outubro; a família real fugiu para o Brasil a 29 de novembro de 1807 (cerca de 15 mil pessoas), protegida pela esquadra inglesa, um dia antes de Junot chegar a Lisboa.",
      "<b>2.ª invasão (1809):</b> o general <b>Soult</b> conquistou o Porto em março; o exército inglês, liderado por <b>Wellington</b>, reconquistou a cidade em maio, obrigando Soult a retirar-se.",
      "<b>3.ª invasão (1810):</b> o general <b>Massena</b> conquistou Almeida em agosto, mas foi travado nas <b>Linhas de Torres Vedras</b> (outubro de 1810), depois de enfrentar resistência na Batalha do Buçaco — e teve de recuar para Espanha.",
      "Com o rei no Brasil, Portugal ficou governado por um Conselho de Regência dominado pelos ingleses, o que gerou grande descontentamento.",
      "Em <b>1820</b>, rebentou a Revolução Liberal do Porto, exigindo o regresso do rei, a convocação de Cortes e uma Constituição.",
      "A <b>Constituição de 1822</b> rompeu com o absolutismo: separação de poderes, soberania popular por eleições e direitos individuais.",
      "O país dividiu-se entre <b>absolutistas</b> (defendiam D. Miguel e o poder do rei sem limites) e <b>liberais</b> (defendiam D. Pedro e a Constituição). O confronto agravou-se a partir de 1828 e teve a sua fase militar decisiva entre 1832 e 1834: o <b>Cerco do Porto</b> (julho de 1832 a agosto de 1833) e a vitória liberal na <b>Batalha da Asseiceira</b> (maio de 1834) levaram à <b>Convenção de Évoramonte</b>, que exilou D. Miguel e devolveu o trono a D. Maria II."
    ],
    gloss:[
      ["bloqueio continental","Ordem de Napoleão para a Europa deixar de comercializar com a Inglaterra — Portugal desobedeceu e foi invadido."],
      ["monarquia constitucional","Um rei que já não manda sozinho: tem de seguir uma Constituição votada pelo povo ou pelos seus representantes."],
      ["guerra civil","Uma guerra entre pessoas do mesmo país, divididas em dois lados."],
      ["Constituição","Documento com as regras principais de um país: o que o rei pode e não pode fazer, e os direitos das pessoas."],
      ["absolutista","Quem defendia que o rei devia continuar a mandar sozinho, sem Constituição."],
      ["liberais","Quem defendia uma Constituição, eleições e limites ao poder do rei."],
      ["Napoleão Bonaparte","Imperador francês cujo exército invadiu Portugal três vezes entre 1807 e 1810."],
      ["Wellington","General inglês que comandou as tropas que ajudaram a expulsar os franceses de Portugal."],
      ["Linhas de Torres Vedras","Uma linha de fortificações construída para defender Lisboa, que impediu o avanço do exército de Massena em 1810."],
      ["Cerco do Porto","O longo cerco militar da cidade do Porto pelas tropas absolutistas, entre 1832 e 1833, durante a Guerra Civil."],
      ["Conselho de Regência","Grupo que governou Portugal, dominado pelos ingleses, enquanto a família real estava no Brasil."],
      ["Cortes","Assembleia que reunia representantes do povo para elaborar leis e a Constituição."],
      ["Batalha do Buçaco","Confronto de 1810 em que as tropas anglo-portuguesas resistiram ao avanço do general Massena."],
      ["Convenção de Évoramonte","Acordo de 1834 que terminou a Guerra Civil, exilando D. Miguel."]
    ],
    routes:[
      {title:"⚔️ 1.ª invasão (1807) — general Junot", stops:[
        {icon:"🇫🇷", label:"França"},
        {icon:"🏰", label:"Abrantes"},
        {icon:"🏙️", label:"Lisboa", sub:"família real foge"}
      ]},
      {title:"🎖️ 2.ª invasão (1809) — general Soult", stops:[
        {icon:"🇪🇸", label:"Galiza"},
        {icon:"⚔️", label:"Chaves"},
        {icon:"🏭", label:"Porto", sub:"reconquistado por Wellington"}
      ]},
      {title:"🏰 3.ª invasão (1810) — general Massena", stops:[
        {icon:"🇪🇸", label:"C. Rodrigo"},
        {icon:"🏯", label:"Almeida"},
        {icon:"🛡️", label:"T. Vedras", sub:"travado aqui"}
      ]}
    ],
    timeline:[
      {y:"1807", ic:"⚔️", t:"1.ª invasão francesa (general Junot); a família real foge para o Brasil a 29 de novembro."},
      {y:"1809", ic:"🎖️", t:"2.ª invasão (general Soult); Wellington reconquista o Porto em maio."},
      {y:"1810", ic:"🏰", t:"3.ª invasão (general Massena), travado nas Linhas de Torres Vedras."},
      {y:"1820", ic:"📯", t:"Revolução Liberal do Porto exige o regresso do rei e uma Constituição."},
      {y:"1822", ic:"📜", t:"Constituição de 1822 rompe com o absolutismo."},
      {y:"1828–1834", ic:"⚔️", t:"Guerra Civil entre absolutistas (D. Miguel) e liberais (D. Pedro)."},
      {y:"1834", ic:"🕊️", t:"Convenção de Évoramonte termina a guerra; D. Maria II sobe ao trono."}
    ],
    quiz:[
      {q:"Porque é que Portugal foi invadido pelas tropas de Napoleão?", opts:["Por se recusar a cumprir o Bloqueio Continental","Por ter atacado a Espanha","Por não pagar impostos a França","Por ter uma aliança com a Rússia"], correct:0, explain:"Portugal recusou-se a cumprir o Bloqueio Continental, a proibição de comerciar com a Inglaterra."},
      {q:"Quem defendia uma Constituição e um rei com poder limitado?", opts:["Os liberais","Os absolutistas","Os jesuítas","A Mocidade Portuguesa"], correct:0, explain:"Os liberais defendiam D. Pedro e a Constituição; os absolutistas defendiam D. Miguel e o rei sem limites."},
      {q:"Como se chamou o confronto entre D. Pedro e D. Miguel?", opts:["Guerra Civil (Guerra Liberal)","Guerra Colonial","Revolução dos Cravos","Revolução Liberal do Porto"], correct:0, explain:"A Guerra Civil (1828–1834) opôs absolutistas e liberais até à vitória destes últimos."},
      {q:"Quem comandou o exército inglês que ajudou a expulsar os franceses de Portugal?", opts:["Wellington","Napoleão","Massena","Junot"], correct:0, explain:"O general inglês Wellington comandou as tropas anglo-portuguesas."},
      {q:"O que impediu o avanço do general Massena em 1810?", opts:["As Linhas de Torres Vedras","A Constituição de 1822","O Bloqueio Continental","O Cerco do Porto"], correct:0, explain:"As Linhas de Torres Vedras eram fortificações que defendiam Lisboa e travaram o avanço de Massena."},
      {q:"O que estabeleceu a Constituição de 1822?", opts:["Separação de poderes e soberania popular por eleições","O regresso do rei absoluto","A criação da PIDE","A abolição da escravatura"], correct:0, explain:"A Constituição de 1822 rompeu com o absolutismo, estabelecendo separação de poderes e eleições."},
      {q:"Em que data fugiu a família real portuguesa para o Brasil?", opts:["29 de novembro de 1807","25 de abril de 1974","5 de outubro de 1910","1 de novembro de 1755"], correct:0, explain:"A família real fugiu para o Brasil a 29 de novembro de 1807, um dia antes de Junot chegar a Lisboa."},
      {q:"Qual general francês conquistou o Porto na 2.ª invasão (1809)?", opts:["Soult","Junot","Massena","Wellington"], correct:0, explain:"O general Soult conquistou o Porto em março de 1809; Wellington reconquistou-o em maio."},
      {q:"O que decidiu a Convenção de Évoramonte, em 1834?", opts:["Exilou D. Miguel e devolveu o trono a D. Maria II","Declarou a independência do Brasil","Aboliu a escravatura em Portugal","Criou a Constituição de 1822"], correct:0, explain:"A Convenção de Évoramonte terminou a Guerra Civil, exilando D. Miguel."},
      {q:"Quem governou Portugal, dominado pelos ingleses, enquanto o rei estava no Brasil?", opts:["O Conselho de Regência","As Cortes","O MFA","A União Nacional"], correct:0, explain:"Com o rei no Brasil, um Conselho de Regência dominado pelos ingleses governou o país, o que gerou descontentamento."}
    ],
    compare:{
      left:{title:"👑 Absolutistas (D. Miguel)", points:["Rei com poder total, sem limites","Sem Constituição","Apoiados pela nobreza e clero mais conservadores"]},
      right:{title:"📜 Liberais (D. Pedro)", points:["Rei limitado por uma Constituição","Eleições e separação de poderes","Apoiados pela burguesia emergente"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 60)"
  },
  {
    id:"m3", num:3, c:"m3", icon:"🏭",
    title:"A Fábrica Entra no Jogo",
    subtitle:"Portugal na 2.ª metade do século XIX", pages:"pp. 62–78",
    lead:"A máquina a vapor chega como um update que muda tudo: fábricas, comboios e cidades crescem, e milhares de portugueses mudam de servidor à procura de trabalho.",
    missions:[
      {t:"Liga a Fábrica", d:"Industrialização e operariado (p. 66)", f:"Comparar uma fábrica do séc. XIX com uma linha de produção de um jogo de construção", xp:10},
      {t:"O Comboio é o Novo Fast Travel", d:"Modernizar transportes e comunicações (p. 68)", f:"Desenhar o mapa de uma linha ferroviária", xp:10},
      {t:"Migração de Jogadores", d:"Migrantes portugueses do séc. XIX (p. 72)", f:"Escrever a mensagem de chat de um emigrante à família", xp:10},
      {t:"Sobe a Burguesia", d:"Ascensão social da burguesia (p. 64)", f:"Criar dois avatares: burguês e operário, e comparar", xp:10}
    ],
    resumo:[
      "A partir de meados do século XIX, Portugal viveu um processo de <b>industrialização</b>, concentrado sobretudo nas zonas de <b>Lisboa/Setúbal</b> e <b>Porto/Guimarães</b>.",
      "As principais inovações foram a <b>energia a vapor</b> (nas fábricas e nos transportes) e a expansão do <b>caminho de ferro</b> — a primeira linha de comboio portuguesa ligou Lisboa ao Carregado em 1856, e a rede cresceu depois por todo o país.",
      "Surgiu um novo grupo social, o <b>operariado</b> — os trabalhadores das fábricas — com salários baixos e longas horas de trabalho.",
      "A <b>burguesia</b> (comerciantes, industriais, profissões liberais) ganhou importância social e económica, enquanto a nobreza perdia privilégios.",
      "Houve grandes <b>migrações</b>: internas (dos campos para as cidades) e externas (sobretudo para o Brasil), ligadas à pobreza e à falta de terra no campo.",
      "A <b>escravatura</b> foi oficialmente abolida ao longo do século XIX, mas foi muitas vezes substituída por <b>trabalho forçado</b>, o que limitou o alcance real da abolição."
    ],
    gloss:[
      ["indústria","Produção de muitos produtos em fábricas, com máquinas, em vez de à mão."],
      ["migrações","Quando pessoas ou grupos se mudam de um lugar para viver noutro."],
      ["operariado","O grupo de pessoas que trabalha nas fábricas, geralmente com salários baixos."],
      ["trabalho forçado","Trabalho que uma pessoa é obrigada a fazer, sem escolha — substituiu oficialmente a escravatura."],
      ["burguesia","Grupo social de comerciantes, industriais e profissões liberais, cada vez mais rico e influente."],
      ["caminho de ferro","A rede de linhas de comboio."],
      ["energia a vapor","Força obtida a partir da água aquecida, usada para mover máquinas nas fábricas e nos comboios."],
      ["Lisboa/Setúbal e Porto/Guimarães","As duas principais zonas industriais de Portugal no século XIX."],
      ["profissões liberais","Profissões independentes e qualificadas, como advogados ou médicos, associadas à burguesia."],
      ["abolição da escravatura","O fim oficial da escravatura ao longo do século XIX, ainda que muitas vezes substituída por trabalho forçado."]
    ],
    routes:[
      {title:"🚂 A primeira linha: Lisboa–Carregado (1856)", stops:[
        {icon:"🏙️", label:"Lisboa", sub:"estação inicial"},
        {icon:"🌳", label:"Alhandra"},
        {icon:"🚉", label:"Carregado", sub:"1856"}
      ]},
      {title:"🛤️ Expansão da rede (décadas seguintes)", stops:[
        {icon:"🚉", label:"Lisboa"},
        {icon:"🏭", label:"Porto"},
        {icon:"🌾", label:"Interior"},
        {icon:"🌍", label:"Fronteira", sub:"ligação a Espanha"}
      ]}
    ],
    timeline:[
      {y:"meados séc. XIX", ic:"🏭", t:"Início da industrialização, sobretudo em Lisboa/Setúbal e Porto/Guimarães."},
      {y:"1856", ic:"🚂", t:"Primeira linha de comboio portuguesa: Lisboa–Carregado."},
      {y:"2.ª metade séc. XIX", ic:"👷", t:"Crescimento do operariado nas fábricas, com salários baixos."},
      {y:"2.ª metade séc. XIX", ic:"💼", t:"Ascensão social da burguesia."},
      {y:"séc. XIX", ic:"🌍", t:"Grandes migrações internas e para o Brasil."},
      {y:"séc. XIX", ic:"⛓️", t:"Abolição oficial da escravatura, muitas vezes substituída por trabalho forçado."}
    ],
    quiz:[
      {q:"Qual foi a principal fonte de energia da industrialização?", opts:["Energia a vapor","Energia solar","Energia eólica","Eletricidade"], correct:0, explain:"A energia a vapor moveu as fábricas e os novos transportes, como o comboio."},
      {q:"Que grupo social cresceu nas fábricas, com salários baixos?", opts:["Operariado","Nobreza","Clero","Burguesia"], correct:0, explain:"O operariado eram os trabalhadores das fábricas, com salários baixos e longas horas."},
      {q:"Em que ano começou a funcionar a primeira linha de comboio em Portugal?", opts:["1856","1755","1910","1974"], correct:0, explain:"A linha Lisboa–Carregado, de 1856, foi a primeira do país."},
      {q:"Em que zonas do país se concentrou sobretudo a industrialização?", opts:["Lisboa/Setúbal e Porto/Guimarães","Algarve e Alentejo","Trás-os-Montes e Beira","Açores e Madeira"], correct:0, explain:"A industrialização concentrou-se sobretudo nestas duas zonas do país."},
      {q:"O que aconteceu à escravatura ao longo do século XIX?", opts:["Foi oficialmente abolida, mas muitas vezes substituída por trabalho forçado","Foi reforçada com novas leis","Deixou de existir em todo o mundo","Passou a ser voluntária"], correct:0, explain:"A escravatura foi oficialmente abolida, mas o trabalho forçado limitou o alcance real da abolição."},
      {q:"Que grupo social ganhou importância com o comércio e a indústria?", opts:["A burguesia","O clero","A nobreza","O campesinato"], correct:0, explain:"A burguesia — comerciantes, industriais, profissões liberais — ganhou importância social e económica."},
      {q:"Entre que localidades ligava a primeira linha de comboio portuguesa, em 1856?", opts:["Lisboa e o Carregado","Lisboa e o Porto","Porto e Guimarães","Lisboa e Coimbra"], correct:0, explain:"A primeira linha de comboio portuguesa ligou Lisboa ao Carregado, em 1856."},
      {q:"Para onde emigravam sobretudo os portugueses no século XIX, além de se mudarem para as cidades?", opts:["Brasil","Angola","Espanha","Estados Unidos"], correct:0, explain:"Houve migrações internas para as cidades e externas, sobretudo para o Brasil."},
      {q:"Que profissões são exemplo de \"profissões liberais\", associadas à ascensão da burguesia?", opts:["Advogados ou médicos","Padres e bispos","Operários fabris","Camponeses"], correct:0, explain:"As profissões liberais eram profissões independentes e qualificadas, como advogados ou médicos."},
      {q:"O que substituiu muitas vezes a escravatura, mesmo depois de oficialmente abolida?", opts:["O trabalho forçado","O trabalho voluntário","A escolaridade obrigatória","O serviço militar"], correct:0, explain:"A abolição oficial da escravatura foi muitas vezes contornada com trabalho forçado, o que limitou o seu alcance real."}
    ],
    compare:{
      left:{title:"💼 Burguesia", points:["Comerciantes, industriais, profissões liberais","Ganhava riqueza e influência política","Vivia com conforto crescente"]},
      right:{title:"👷 Operariado", points:["Trabalhadores das fábricas","Salários baixos e jornadas longas","Vivia em condições difíceis nas cidades industriais"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 78)"
  },
  {
    id:"m4", num:4, c:"m4", icon:"🗳️",
    title:"Ban ao Rei: Nasce a República",
    subtitle:"A revolução republicana", pages:"pp. 80–102",
    lead:"O rei perde apoio como um streamer que perde seguidores, até que os republicanos organizam um raid e tomam o poder em 1910.",
    missions:[
      {t:"O Servidor Real Perde Fãs", d:"Desgaste da monarquia (p. 82)", f:"Lista de razões do descontentamento, em bullet points", xp:10},
      {t:"O Fim do Reinado", d:"Ataques republicanos e revolução (pp. 84–86)", f:"Linha do tempo", xp:10},
      {t:"Nova Bandeira, Novas Regras", d:"Constituição republicana (p. 90)", f:"Escrever 3 mudanças trazidas pela nova Constituição", xp:10},
      {t:"Escola para Todos", d:"Educar e laicizar (p. 92)", f:"Comparar a escola de 1911 com a escola de hoje", xp:10}
    ],
    resumo:[
      "No início do século XX, a <b>monarquia constitucional</b> estava muito desgastada: instabilidade política e crises financeiras.",
      "No <b>Ultimato Inglês</b> de 1890, a Inglaterra obrigou Portugal a desistir do projeto do \"Mapa Cor-de-Rosa\" (ligar Angola a Moçambique por terra), o que foi sentido como uma grande humilhação nacional.",
      "A 1 de fevereiro de <b>1908</b>, o rei D. Carlos I e o príncipe herdeiro D. Luís Filipe foram assassinados em Lisboa — um <b>regicídio</b>.",
      "A 5 de outubro de <b>1910</b>, uma revolução republicana derrubou a monarquia e proclamou a República.",
      "A <b>Constituição de 1911</b> estabeleceu: separação entre Igreja e Estado (<b>laicização</b>), voto para homens alfabetizados, e um parlamento com mais poder que o Presidente.",
      "A Primeira República agiu na <b>educação</b> (tentou combater o analfabetismo, criando mais escolas) e nos direitos dos trabalhadores, mas viveu enorme instabilidade política — mais de 40 governos diferentes em apenas 16 anos (1910–1926) — e <b>greves</b> frequentes."
    ],
    gloss:[
      ["ultimato","Uma exigência final, sem espaço para negociar."],
      ["regicídio","O assassínio de um rei — aconteceu com D. Carlos I em 1908."],
      ["revolução","Uma mudança rápida e profunda na forma como um país é governado."],
      ["república","Uma forma de governo sem rei, com um chefe de Estado eleito."],
      ["alfabetização","Ensinar as pessoas a ler e a escrever."],
      ["greve","Quando os trabalhadores param de trabalhar de propósito, para exigir melhores condições."],
      ["laicização","Separar a Igreja do Estado — o Estado deixa de seguir uma religião oficial."],
      ["Mapa Cor-de-Rosa","O projeto português de ligar Angola a Moçambique por terra, a que a Inglaterra se opôs no Ultimato de 1890."],
      ["Ultimato Inglês","Exigência da Inglaterra, em 1890, para Portugal desistir do Mapa Cor-de-Rosa."],
      ["Partido Republicano","Partido político que defendia o fim da monarquia e a instauração da República."],
      ["voto censitário","Sistema em que só podiam votar os homens alfabetizados ou com determinado rendimento."],
      ["separação Igreja-Estado","Medida que retirou à Igreja Católica o estatuto de religião oficial do Estado."]
    ],
    posters:[
      {title:"🗺️ O Mapa Cor-de-Rosa vs. o Ultimato Inglês (1890)", svg:'<svg class="poster-svg" viewBox="0 0 640 265" role="img" aria-label="Mapa esquemático: o projeto português de ligar Angola a Moçambique, o Mapa Cor-de-Rosa de 1886, cruza-se com a reivindicação britânica norte-sul entre o Cairo e a Cidade do Cabo. O Ultimato Inglês de 1890 obriga Portugal a desistir do projeto."><text x="320" y="18" text-anchor="middle" font-size="12" font-family="Lexend, sans-serif" font-weight="700">Mapa Cor-de-Rosa (1886) vs. Ultimato (1890)</text><line x1="320" y1="35" x2="320" y2="232" stroke="#5b8fd9" stroke-width="10" stroke-linecap="round" opacity="0.45"/><line x1="180" y1="125" x2="460" y2="125" stroke="#e0779a" stroke-width="14" stroke-linecap="round" opacity="0.55"/><circle cx="320" cy="125" r="15" fill="var(--surface)" stroke="#c0392b" stroke-width="3"/><line x1="311" y1="116" x2="329" y2="134" stroke="#c0392b" stroke-width="3"/><rect x="40" y="70" width="140" height="110" rx="6" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="110" y="122" text-anchor="middle" font-size="13" font-family="Lexend, sans-serif" font-weight="700">🇵🇹 Angola</text><text x="110" y="140" text-anchor="middle" font-size="9" opacity="0.65">colónia portuguesa</text><rect x="460" y="70" width="140" height="110" rx="6" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2"/><text x="530" y="122" text-anchor="middle" font-size="13" font-family="Lexend, sans-serif" font-weight="700">🇵🇹 Moçambique</text><text x="530" y="140" text-anchor="middle" font-size="9" opacity="0.65">colónia portuguesa</text><text x="320" y="100" text-anchor="middle" font-size="9.5" font-weight="700" fill="#c2467a">Mapa Cor-de-Rosa: ligação pretendida</text><text x="320" y="152" text-anchor="middle" font-size="9.5" font-weight="700" fill="#c0392b">Ultimato de 1890: Portugal cede</text><text x="320" y="250" text-anchor="middle" font-size="9" opacity="0.75" fill="#3f6fb0">🇬🇧 reivindicação britânica: Cairo–Cabo</text></svg>'}
    ],
    timeline:[
      {y:"1890", ic:"🇬🇧", t:"Ultimato Inglês obriga Portugal a desistir do Mapa Cor-de-Rosa."},
      {y:"1 fev. 1908", ic:"🔫", t:"Regicídio: D. Carlos I e o príncipe D. Luís Filipe são assassinados em Lisboa."},
      {y:"5 out. 1910", ic:"🏛️", t:"Revolução republicana derruba a monarquia e proclama a República."},
      {y:"1911", ic:"📜", t:"Constituição de 1911: laicização do Estado e voto para alfabetizados."},
      {y:"1910–1926", ic:"⚠️", t:"Grande instabilidade política: mais de 40 governos em 16 anos."}
    ],
    quiz:[
      {q:"O que exigiu a Inglaterra no Ultimato de 1890?", opts:["Que Portugal desistisse do Mapa Cor-de-Rosa","Que Portugal declarasse guerra a Espanha","Que Portugal expulsasse os jesuítas","Que Portugal aceitasse o Bloqueio Continental"], correct:0, explain:"O Ultimato obrigou Portugal a abandonar o projeto de ligar Angola a Moçambique por terra."},
      {q:"Que rei foi assassinado em 1908?", opts:["D. Carlos I","D. João V","D. Miguel","D. Pedro IV"], correct:0, explain:"D. Carlos I e o príncipe herdeiro D. Luís Filipe foram mortos em Lisboa a 1 de fevereiro de 1908."},
      {q:"Em que data foi proclamada a República?", opts:["5 de outubro de 1910","25 de abril de 1974","1 de novembro de 1755","28 de maio de 1926"], correct:0, explain:"A revolução republicana de 5 de outubro de 1910 derrubou a monarquia."},
      {q:"O que estabeleceu a Constituição de 1911?", opts:["Separação entre Igreja e Estado e voto para alfabetizados","O regresso da monarquia absoluta","A criação da CPLP","A entrada de Portugal na União Europeia"], correct:0, explain:"A Constituição de 1911 estabeleceu a laicização do Estado e o voto para homens alfabetizados."},
      {q:"Quantos governos diferentes teve a Primeira República em 16 anos?", opts:["Mais de 40","Cerca de 5","Exatamente 10","Apenas 1"], correct:0, explain:"A Primeira República viveu grande instabilidade: mais de 40 governos diferentes entre 1910 e 1926."},
      {q:"O que era o \"Mapa Cor-de-Rosa\"?", opts:["O projeto português de ligar Angola a Moçambique por terra","Um mapa da cidade de Lisboa","A bandeira da Primeira República","Um tratado com a França"], correct:0, explain:"O Mapa Cor-de-Rosa era o projeto de ligar as colónias de Angola e Moçambique, a que a Inglaterra se opôs em 1890."},
      {q:"O que é a laicização, medida trazida pela Constituição de 1911?", opts:["Separar a Igreja do Estado","Dar o voto às mulheres","Criar um exército profissional","Abolir a escravatura"], correct:0, explain:"A laicização retirou à Igreja Católica o estatuto de religião oficial do Estado."},
      {q:"O que era o voto censitário?", opts:["Um sistema em que só podiam votar homens alfabetizados ou com determinado rendimento","O direito de voto para todos os adultos","Um voto só para membros da nobreza","Um voto secreto e universal"], correct:0, explain:"O voto censitário restringia o direito de voto a homens alfabetizados ou com certo rendimento."},
      {q:"Que partido político defendia o fim da monarquia e a instauração da República?", opts:["O Partido Republicano","A União Nacional","O MFA","O MUD"], correct:0, explain:"O Partido Republicano defendia o fim da monarquia, conseguindo o seu objetivo em 1910."},
      {q:"O que foi o regicídio de 1908?", opts:["O assassínio do rei D. Carlos I e do príncipe herdeiro D. Luís Filipe","A abdicação do rei D. Carlos I","A fuga do rei para o Brasil","A assinatura do Ultimato Inglês"], correct:0, explain:"O regicídio de 1 de fevereiro de 1908 foi o assassínio de D. Carlos I e do príncipe D. Luís Filipe, em Lisboa."}
    ],
    compare:{
      left:{title:"👑 Monarquia (antes de 1910)", points:["Rei como chefe de Estado hereditário","Igreja Católica como religião oficial","Direito de voto muito restrito"]},
      right:{title:"🏛️ República (depois de 1910)", points:["Presidente eleito como chefe de Estado","Separação entre Igreja e Estado","Voto alargado a homens alfabetizados"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 102)"
  },
  {
    id:"m5", num:5, c:"m5", icon:"🔒",
    title:"Modo Restrito",
    subtitle:"Os anos de ditadura (Estado Novo)", pages:"pp. 104–128",
    lead:"Imagina um mundo de Minecraft em modo sobrevivência onde só o dono do servidor decide as regras, ninguém mais pode votar, e quem critica é banido: é o Estado Novo, a ditadura que durou quase 50 anos em Portugal.",
    missions:[
      {t:"O Golpe que Mudou o Servidor", d:"O golpe militar que trouxe a ditadura (p. 106)", f:"Linha do tempo do golpe", xp:10},
      {t:"Um Só Admin", d:"Salazar e o Estado Novo (p. 108)", f:"Comparar Salazar a um admin com poderes ilimitados", xp:10},
      {t:"Obedecer Sem Perguntar", d:"Educar para obedecer (p. 110)", f:"Comparar a escola do Estado Novo com a de hoje", xp:10},
      {t:"Vigiado 24/7", d:"Vigiar e controlar os costumes (p. 112)", f:"Escrever como seria jogar sem privacidade", xp:10},
      {t:"Medo e Silêncio", d:"Autoritarismo, repressão e violência (p. 114)", f:"Ler + resumir em 3 frases", xp:10},
      {t:"Vozes Silenciadas", d:"Dar voz às vítimas e à resistência (p. 116)", f:"Escolher uma história de resistência para pesquisar", xp:10},
      {t:"A Guerra Além-Mar", d:"Guerra colonial, 1961–1974 (p. 122)", f:"Localizar no mapa as antigas colónias portuguesas em África", xp:15}
    ],
    resumo:[
      "A 28 de maio de <b>1926</b>, um <b>golpe militar</b> derrubou a Primeira República e deu início a uma ditadura militar.",
      "Em <b>1928</b>, <b>António de Oliveira Salazar</b> tornou-se ministro das Finanças, equilibrando as contas do Estado à custa de subir impostos e cortar despesas em educação e saúde; em <b>1932</b> passou a chefe do governo (Presidente do Conselho), instaurando o <b>Estado Novo</b>.",
      "A <b>Constituição de 1933</b> criou um regime de <b>partido único</b> (a União Nacional) e eleições sem escolha real; a <b>censura</b> controlava jornais, teatro, cinema e rádio.",
      "A polícia política (primeiro <b>PVDE</b>, depois <b>PIDE</b>) perseguia, prendia e torturava opositores. Todos os jovens dos 7 aos 18 anos tinham de pertencer à <b>Mocidade Portuguesa</b>, que promovia a obediência ao regime.",
      "Houve alguns momentos de oposição: o <b>MUD</b> (Movimento de Unidade Democrática) surgiu em 1945; em <b>1958</b>, o general <b>Humberto Delgado</b> candidatou-se a Presidente com grande apoio popular, mas perdeu numas eleições fraudulentas.",
      "O regime manteve um vasto <b>império colonial</b> em África (Angola, Moçambique, Guiné, Cabo Verde, São Tomé e Príncipe).",
      "A <b>Guerra Colonial</b> começou em Angola (1961), seguida da Guiné (1963) e de Moçambique (1964), contra os movimentos de libertação — como o <b>MPLA</b> e a <b>FNLA</b> em Angola, o <b>PAIGC</b> na Guiné e a <b>FRELIMO</b> em Moçambique. Ao longo dos 13 anos de guerra, cerca de 800 000 homens portugueses foram mobilizados."
    ],
    gloss:[
      ["golpe militar","O exército tomar o poder à força, sem eleições."],
      ["ditadura","Um governo onde uma só pessoa ou partido manda, sem eleições livres nem oposição permitida."],
      ["Estado Novo","O nome do regime ditatorial português, liderado por Salazar, entre 1933 e 1974."],
      ["PIDE","A polícia política do Estado Novo (antes chamada PVDE), que perseguia e prendia opositores do regime."],
      ["Mocidade Portuguesa","Organização obrigatória para jovens dos 7 aos 18 anos, que promovia os valores do Estado Novo."],
      ["partido único","Só é permitido existir um partido político — não há escolha real nas eleições."],
      ["censura","Controlo do que pode ser dito, escrito ou publicado."],
      ["repressão","Usar a força — prisões, violência, medo — para impedir protestos ou discordância."],
      ["autoritarismo","Um governo que exige obediência total, sem espaço para discordar."],
      ["colonialismo","Um país dominar e controlar territórios noutros continentes, muitas vezes à força."],
      ["guerra colonial","A guerra (1961–1974) entre Portugal e os movimentos que lutavam pela independência das colónias africanas."],
      ["MPLA / FNLA","Movimentos que lutaram pela independência de Angola."],
      ["PAIGC","Movimento liderado por Amílcar Cabral que lutou pela independência da Guiné-Bissau e Cabo Verde."],
      ["FRELIMO","Movimento que lutou pela independência de Moçambique."],
      ["oposição","Pessoas ou grupos que discordam do governo e tentam mudá-lo."],
      ["liberdade de expressão","O direito de dizer o que se pensa sem medo de ser preso por isso."],
      ["Salazar","António de Oliveira Salazar, chefe do governo do Estado Novo entre 1932 e 1968.", {
        name:"António de Oliveira Salazar", icon:"🎩", dates:"1889–1970", role:"Chefe do Governo do Estado Novo (1932–1968)",
        bio:"Foi professor universitário de Economia em Coimbra antes de entrar na política. Tornou-se ministro das Finanças em 1928 e, em 1932, chefe do governo — cargo que manteve durante 36 anos, sem nunca ter sido escolhido em eleições livres. Criou o Estado Novo: um regime de partido único, com censura à imprensa e com a polícia política (PIDE) a perseguir opositores.",
        facts:["Manteve-se no poder até 1968, quando um acidente o afastou; morreu em 1970, sem saber que já tinha sido substituído.", "A Guerra Colonial (1961–1974) começou e prolongou-se durante o seu governo.", "O Estado Novo só terminou quatro anos depois da sua morte, com a Revolução de 25 de Abril de 1974."]
      }],
      ["colónias africanas","Territórios em África governados por Portugal até à independência, nas décadas de 1970."]
    ],
    members:{title:"🗺️ As três frentes da Guerra Colonial (1961–1974) — toca para ver o mapa", items:[
      {flag:"🇦🇴", name:"Angola — MPLA / FNLA", popup:{title:"Angola", mapKey:"angola", acronyms:[
        ["MPLA","Movimento Popular de Libertação de Angola"],
        ["FNLA","Frente Nacional de Libertação de Angola"]
      ]}},
      {flag:"🇬🇼", name:"Guiné-Bissau — PAIGC", popup:{title:"Guiné-Bissau", mapKey:"guine", acronyms:[
        ["PAIGC","Partido Africano para a Independência da Guiné e Cabo Verde, liderado por Amílcar Cabral"]
      ]}},
      {flag:"🇲🇿", name:"Moçambique — FRELIMO", popup:{title:"Moçambique", mapKey:"mocambique", acronyms:[
        ["FRELIMO","Frente de Libertação de Moçambique"]
      ]}}
    ]},
    timeline:[
      {y:"28 mai. 1926", ic:"🪖", t:"Golpe militar derruba a Primeira República."},
      {y:"1928", ic:"💰", t:"Salazar torna-se ministro das Finanças."},
      {y:"1932", ic:"👤", t:"Salazar torna-se chefe do governo; começa o Estado Novo."},
      {y:"1933", ic:"📜", t:"Constituição de 1933: partido único e censura."},
      {y:"1945", ic:"✊", t:"Surge o MUD, movimento de oposição."},
      {y:"1958", ic:"🗳️", t:"Humberto Delgado candidata-se a Presidente, em eleições fraudulentas."},
      {y:"1961–1974", ic:"⚔️", t:"Guerra Colonial em Angola, Guiné e Moçambique."}
    ],
    quiz:[
      {q:"Quem liderou o Estado Novo a partir de 1932?", opts:["António de Oliveira Salazar","D. Carlos I","Marcello Caetano","Humberto Delgado"], correct:0, explain:"Salazar tornou-se chefe do governo em 1932, instaurando o Estado Novo."},
      {q:"Como se chamava a polícia política do Estado Novo?", opts:["PIDE","MFA","MUD","FRELIMO"], correct:0, explain:"A PIDE (antes PVDE) perseguia, prendia e torturava opositores do regime."},
      {q:"Em que ano começou a Guerra Colonial, em Angola?", opts:["1961","1974","1933","1928"], correct:0, explain:"A Guerra Colonial começou em Angola em 1961, seguida da Guiné (1963) e Moçambique (1964)."},
      {q:"Quantos anos durou o Estado Novo, aproximadamente?", opts:["Cerca de 40 anos (1933–1974)","10 anos","100 anos","5 anos"], correct:0, explain:"O Estado Novo durou desde 1933 até 1974, cerca de 40 anos."},
      {q:"O que era a Mocidade Portuguesa?", opts:["Uma organização juvenil obrigatória que promovia a obediência ao regime","Um partido político de oposição","Um jornal clandestino","Uma escola de elite"], correct:0, explain:"Todos os jovens dos 7 aos 18 anos eram obrigados a pertencer à Mocidade Portuguesa."},
      {q:"Onde decorreu a Guerra Colonial portuguesa, entre 1961 e 1974?", opts:["Angola, Guiné-Bissau e Moçambique","Brasil e Cabo Verde","Espanha e França","Timor-Leste e Macau"], correct:0, explain:"A Guerra Colonial decorreu nestas três frentes africanas, entre 1961 e 1974."},
      {q:"Quem se candidatou a Presidente em 1958, com grande apoio popular, mas perdeu numas eleições fraudulentas?", opts:["Humberto Delgado","Marcello Caetano","Salgueiro Maia","Amílcar Cabral"], correct:0, explain:"O general Humberto Delgado candidatou-se em 1958 com grande apoio popular, mas o Estado Novo fraudou as eleições."},
      {q:"O que foi o MUD, surgido em 1945?", opts:["Um movimento de oposição ao Estado Novo","A polícia política do regime","A organização juvenil obrigatória","O partido único do regime"], correct:0, explain:"O MUD (Movimento de Unidade Democrática) foi um dos raros momentos de oposição organizada ao Estado Novo."},
      {q:"Quantos homens portugueses foram mobilizados, aproximadamente, ao longo dos 13 anos de Guerra Colonial?", opts:["Cerca de 800 000","Cerca de 8 000","Cerca de 8 milhões","Cerca de 80 000"], correct:0, explain:"Ao longo dos 13 anos de guerra, cerca de 800 000 homens portugueses foram mobilizados."},
      {q:"Que profissão tinha Salazar antes de entrar na política?", opts:["Professor universitário de Economia","Militar de carreira","Advogado","Jornalista"], correct:0, explain:"Salazar foi professor universitário de Economia em Coimbra antes de se tornar ministro das Finanças, em 1928."}
    ],
    compare:{
      left:{title:"🗳️ Antes do golpe (1910–1926)", points:["Eleições livres, mesmo que instáveis","Vários partidos políticos","Liberdade de imprensa"]},
      right:{title:"🔒 Estado Novo (1933–1974)", points:["Partido único (a União Nacional)","Censura da imprensa, teatro e rádio","Polícia política (PIDE) perseguia opositores"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 128)"
  },
  {
    id:"m6", num:6, c:"m6", icon:"🕊️",
    title:"Patch 25 de Abril",
    subtitle:"Democracia Desbloqueada", pages:"pp. 130–154",
    lead:"A 25 de abril de 1974, um grupo de militares muda as regras do servidor quase sem disparar um tiro — por isso lhe chamam a Revolução dos Cravos. É como um jogador com permissões de administrador que desbloqueia o voto para todos os outros jogadores.",
    missions:[
      {t:"Antes do Patch", d:"Portugal nas vésperas da revolução (p. 132)", f:"Lista de motivos do descontentamento", xp:10},
      {t:"O Dia do Patch", d:"Revolução dos Cravos (p. 134)", f:"Linha do tempo antes / durante / depois", xp:10},
      {t:"De Ditadura a Democracia", d:"Da ditadura para a democracia (p. 138)", f:"Comparar 3 diferenças entre antes e depois", xp:10},
      {t:"Acabar a Guerra", d:"Acabar com a guerra e descolonizar (p. 140)", f:"Localizar no mapa os países que se tornaram independentes", xp:10},
      {t:"Regras Novas para Sempre", d:"A Constituição de 1976 (p. 142)", f:"Escrever 3 direitos garantidos pela Constituição", xp:10},
      {t:"Portugal e os PALOP", d:"Dos PALOP à revisão da Constituição (p. 144)", f:"Localizar os PALOP num mapa-múndi", xp:10},
      {t:"Portugal Entra na Equipa Europeia", d:"Portugal na União Europeia (p. 146)", f:"Desenhar a bandeira europeia + explicar o que é a UE", xp:10},
      {t:"Jogador Português, Jogador Europeu", d:"Cidadão português, cidadão europeu (p. 148)", f:"Listar 2 vantagens de ser cidadão da UE", xp:10}
    ],
    resumo:[
      "A <b>25 de abril de 1974</b>, o Movimento das Forças Armadas (MFA), descontente com a Guerra Colonial e a falta de liberdade, derrubou o Estado Novo quase sem violência — a <b>Revolução dos Cravos</b>.",
      "Às 22h55 de 24 de abril, a música \"E Depois do Adeus\" foi o primeiro sinal, na rádio; à meia-noite e vinte, \"<b>Grândola, Vila Morena</b>\" na Rádio Renascença confirmou aos militares que a operação estava a começar.",
      "O capitão <b>Salgueiro Maia</b> ocupou o Terreiro do Paço e depois cercou o <b>Quartel do Carmo</b>, em Lisboa, onde o chefe do governo, <b>Marcello Caetano</b>, se rendeu ao final do dia. Quatro civis morreram, mortos a tiro pela PIDE junto à sede da polícia política.",
      "A revolução assentava em três objetivos, os <b>\"3 D\"</b>: Democratizar, Descolonizar e Desenvolver.",
      "Os cessar-fogo com os movimentos de libertação foram negociados entre junho e outubro de 1974, e as colónias africanas tornaram-se independentes entre 1974 (Guiné-Bissau) e <b>1975</b> (Angola, Moçambique, Cabo Verde, São Tomé e Príncipe): os <b>PALOP</b> (Países Africanos de Língua Oficial Portuguesa).",
      "A <b>Constituição de 1976</b>, ainda hoje em vigor, tornou Portugal uma democracia: eleições livres, direito de voto para todos os adultos, separação de poderes e direitos fundamentais garantidos.",
      "O poder local organiza-se em <b>câmaras municipais</b> (concelhos) e <b>juntas de freguesia</b> (freguesias).",
      "Em <b>1986</b>, Portugal entrou na atual <b>União Europeia</b> (UE), o que trouxe grandes transformações e tornou os portugueses também cidadãos europeus.",
      "Portugal é também membro da <b>ONU</b>. A sociedade portuguesa tornou-se progressivamente mais <b>multicultural</b>, com imigrantes de várias origens, incluindo dos PALOP."
    ],
    gloss:[
      ["25 de Abril de 1974","O dia em que militares portugueses derrubaram a ditadura quase sem disparar um tiro — a Revolução dos Cravos."],
      ["MFA","Movimento das Forças Armadas — os militares que organizaram a revolução de 25 de Abril."],
      ["democracia","Um sistema de governo em que o povo escolhe os seus governantes através do voto."],
      ["descolonização","O processo de as colónias portuguesas em África se tornarem países independentes."],
      ["direito de voto","O direito de participar nas eleições e escolher quem governa."],
      ["câmaras municipais","A instituição que governa um concelho (plural: câmaras municipais)."],
      ["juntas de freguesia","A instituição que governa uma freguesia, a divisão mais pequena dentro de um concelho (plural: juntas de freguesia)."],
      ["UE/União Europeia","O grupo de países europeus que trabalham juntos em regras e políticas comuns."],
      ["ONU","A Organização das Nações Unidas, que junta quase todos os países do mundo."],
      ["PALOP","Países Africanos de Língua Oficial Portuguesa: Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe."],
      ["sociedade multicultural","Uma sociedade onde vivem pessoas de várias culturas e origens diferentes."],
      ["Constituição de 1976","O \"livro de regras\" ainda hoje em vigor em Portugal, que garante direitos e liberdades."],
      ["Grândola, Vila Morena","A canção de José Afonso usada como sinal de rádio que confirmou aos militares o início da revolução."],
      ["Marcello Caetano","O chefe do governo do Estado Novo que se rendeu no Quartel do Carmo a 25 de abril de 1974."],
      ["Quartel do Carmo","O edifício em Lisboa onde Marcello Caetano se refugiou e depois se rendeu aos militares revoltosos."],
      ["Salgueiro Maia","Capitão que liderou as tropas do MFA em Lisboa na madrugada de 25 de abril de 1974."],
      ["retornados","Portugueses que regressaram a Portugal após a independência das colónias africanas."],
      ["PREC","Processo Revolucionário Em Curso — o período de grande agitação política entre 1974 e 1976."]
    ],
    timeline:[
      {y:"24–25 abr. 1974", ic:"🌹", t:"Revolução dos Cravos: sinais de rádio, ocupação de pontos-chave e rendição no Quartel do Carmo."},
      {y:"jun.–out. 1974", ic:"🕊️", t:"Negociação dos cessar-fogo com os movimentos de libertação africanos."},
      {y:"1975", ic:"🌍", t:"Independência de Angola, Moçambique, Cabo Verde e São Tomé e Príncipe (a da Guiné-Bissau foi reconhecida em 1974)."},
      {y:"1976", ic:"📜", t:"Constituição de 1976 torna Portugal uma democracia."},
      {y:"1986", ic:"🇪🇺", t:"Portugal entra na atual União Europeia."}
    ],
    quiz:[
      {q:"Que música confirmou aos militares o início da revolução, à meia-noite e vinte?", opts:["Grândola, Vila Morena","Hino Nacional","E Depois do Adeus","Parabéns a Você"], correct:0, explain:"\"Grândola, Vila Morena\", na Rádio Renascença, foi o segundo sinal, que confirmou o início da operação."},
      {q:"Em que ano Portugal entrou na União Europeia?", opts:["1986","1974","1976","1975"], correct:0, explain:"Portugal entrou na atual União Europeia em 1986."},
      {q:"Quais eram os \"3 D\" da revolução?", opts:["Democratizar, Descolonizar, Desenvolver","Defender, Dividir, Decidir","Democracia, Direitos, Deveres","Descolonizar, Desarmar, Debater"], correct:0, explain:"A revolução assentava nos três objetivos: Democratizar, Descolonizar e Desenvolver."},
      {q:"Quem liderou o governo derrubado pelo 25 de Abril?", opts:["Marcello Caetano","António de Oliveira Salazar","Humberto Delgado","Mário Soares"], correct:0, explain:"Marcello Caetano era o chefe do governo do Estado Novo, derrubado pelo MFA em 1974."},
      {q:"Quem redigiu a Constituição de 1976?", opts:["A Assembleia Constituinte, eleita em 1975","Marcello Caetano","O MFA sozinho","A União Europeia"], correct:0, explain:"A Constituição de 1976 foi elaborada pela Assembleia Constituinte, eleita democraticamente em 1975."},
      {q:"Que nome se dá aos países africanos de língua oficial portuguesa que se tornaram independentes após 1974?", opts:["PALOP","CPLP","NATO","UE"], correct:0, explain:"PALOP significa Países Africanos de Língua Oficial Portuguesa: Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe."},
      {q:"O que fez o capitão Salgueiro Maia na madrugada de 25 de abril de 1974?", opts:["Ocupou o Terreiro do Paço e cercou o Quartel do Carmo","Assinou a Constituição de 1976","Negociou o cessar-fogo em Angola","Fundou o MFA"], correct:0, explain:"Salgueiro Maia liderou as tropas do MFA em Lisboa, cercando Marcello Caetano no Quartel do Carmo."},
      {q:"O que significa a sigla PREC?", opts:["Processo Revolucionário Em Curso","Partido Republicano e Comunista","Plano de Reconstrução e Cidadania","Programa de Reformas do Estado Central"], correct:0, explain:"O PREC foi o período de grande agitação política entre 1974 e 1976."},
      {q:"Quem eram os \"retornados\"?", opts:["Portugueses que regressaram a Portugal após a independência das colónias africanas","Os militares que organizaram o 25 de Abril","Os presos libertados pela PIDE","Os primeiros eurodeputados portugueses"], correct:0, explain:"Os retornados eram portugueses que viviam nas colónias e regressaram a Portugal depois da sua independência."},
      {q:"Em que ano se tornaram independentes Angola e Moçambique?", opts:["1975","1974","1976","1986"], correct:0, explain:"Angola e Moçambique tornaram-se independentes em 1975; a independência da Guiné-Bissau já tinha sido reconhecida em 1974."}
    ],
    compare:{
      left:{title:"🔒 Estado Novo (até 1974)", points:["Sem eleições livres","Sem liberdade de expressão","Colónias mantidas à força na Guerra Colonial"]},
      right:{title:"🕊️ Democracia (desde 1976)", points:["Eleições livres para todos os adultos","Liberdade de expressão garantida","Colónias tornaram-se países independentes"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. 154)"
  },
  {
    id:"m7", num:7, c:"m7", icon:"🇵🇹",
    title:"O Servidor Portugal Hoje",
    subtitle:"Portugal hoje", pages:"pp. 158–186",
    lead:"A última parte do ano explora como o Portugal-servidor funciona agora: quantos jogadores tem, onde vivem, do que trabalham e como se divertem — como olhar o mapa de um mundo de Minecraft já bem construído.",
    missions:[
      {t:"Como Sabemos Quantos Somos?", d:"Censos: como sabemos? (p. 158)", f:"Explicar como se faz a contagem da população", xp:10},
      {t:"Mais Jovens ou Mais Idosos?", d:"Aumenta/diminui? Mais jovens ou idosos? (pp. 159–161)", f:"Comparar uma pirâmide etária com níveis de jogadores por idade", xp:10},
      {t:"Onde Vivem os Portugueses?", d:"Onde vivem os portugueses? Porquê? (p. 162)", f:"Localizar no mapa as zonas mais povoadas", xp:10},
      {t:"Cidade ou Aldeia?", d:"Áreas preferidas, desafios, ser português (pp. 164–168)", f:"Comparar um mapa de cidade com um de aldeia", xp:10},
      {t:"Ativa ou Inativa?", d:"População ativa, setores de atividade (pp. 169–173)", f:"Classificar profissões da família por setor", xp:10},
      {t:"Tempo Livre", d:"Tempos livres e impacte ambiental (pp. 174–176)", f:"Escolher 3 sítios de Portugal para visitar e dizer porquê", xp:10},
      {t:"Ligados ao Mundo", d:"Transportes e ligação ao mundo (pp. 178–180)", f:"Comparar o lag da internet com a distância-tempo dos transportes", xp:10}
    ],
    resumo:[
      "A população de Portugal é contada através dos <b>censos</b>, realizados periodicamente pelo <b>INE</b> (Instituto Nacional de Estatística). Em 2026, Portugal tinha cerca de <b>11,4 milhões de habitantes</b>, um número que subiu bastante nos últimos anos por causa da chegada de imigrantes (cerca de 1,6 milhões de residentes estrangeiros).",
      "Apesar disso, a população portuguesa de nacionalidade portuguesa continua a <b>envelhecer</b>: mais idosos e menos jovens, por causa da baixa natalidade e do aumento da esperança de vida.",
      "A <b>densidade populacional</b> não é igual em todo o país: é mais elevada no litoral (Lisboa, Porto) do que no interior — a <b>litoralização</b>. Áreas atrativas ganham população; áreas repulsivas perdem população.",
      "Portugal tem espaços <b>rurais</b> (menos povoados, ligados à agricultura) e espaços <b>urbanos</b> (cidades, mais serviços e comércio).",
      "A <b>população ativa</b> distribui-se por três setores: <b>primário</b> (agricultura, pesca), <b>secundário</b> (indústria, construção) e <b>terciário</b> (serviços, comércio, turismo) — hoje a maioria trabalha no terciário.",
      "O <b>turismo</b> é uma das atividades económicas mais importantes do país, e Portugal tem várias <b>áreas protegidas</b> para preservar o ambiente.",
      "Os <b>transportes</b> e as <b>telecomunicações</b> aproximam Portugal do resto do mundo — a <b>globalização</b>."
    ],
    gloss:[
      ["censos","A contagem oficial de quantas pessoas vivem num país."],
      ["densidade populacional","Quantas pessoas vivem, em média, num quilómetro quadrado."],
      ["litoralização","O facto de a maioria dos portugueses viver perto da costa, e pouca gente no interior."],
      ["povoamento rural / urbano","Onde as pessoas vivem: no campo (rural) ou nas cidades (urbano)."],
      ["população ativa","As pessoas que trabalham ou procuram trabalho."],
      ["setor primário / secundário / terciário","Agricultura e pesca / indústria e construção / serviços, comércio e turismo."],
      ["turismo","Viajar e visitar lugares por lazer — uma das atividades económicas mais importantes de Portugal."],
      ["património","Tudo o que herdamos do passado e vale a pena proteger: monumentos, tradições, paisagens."],
      ["globalização","O mundo cada vez mais ligado, onde pessoas, produtos e informação viajam rapidamente entre países."],
      ["INE","Instituto Nacional de Estatística — organismo responsável por realizar os censos em Portugal."],
      ["envelhecimento demográfico","O aumento da proporção de idosos e a diminuição de jovens numa população."],
      ["área atrativa / repulsiva","Área atrativa: ganha população. Área repulsiva: perde população, geralmente por falta de emprego."],
      ["áreas protegidas","Zonas naturais preservadas por lei, para proteger o ambiente e a biodiversidade."]
    ],
    distribution:{title:"🗺️ Onde vive a população portuguesa", segments:[
      {label:"Litoral", pct:75, tone:"accent", note:"a maioria da população e das cidades"},
      {label:"Interior", pct:25, tone:"muted", note:"menos densamente povoado"}
    ]},
    timeline:[
      {y:"histórico", ic:"🏙️", t:"Litoralização: cada vez mais gente a viver perto do litoral do que no interior."},
      {y:"recente", ic:"👵", t:"Envelhecimento demográfico: mais idosos, menos jovens."},
      {y:"recente", ic:"📈", t:"Chegada de imigrantes faz crescer a população residente em Portugal."},
      {y:"hoje", ic:"💼", t:"A maioria da população ativa trabalha no setor terciário (serviços)."},
      {y:"2026", ic:"📊", t:"Portugal tem cerca de 11,4 milhões de habitantes, segundo estimativas recentes (os últimos censos do INE foram em 2021)."}
    ],
    quiz:[
      {q:"Qual instituição realiza os censos em Portugal?", opts:["O INE (Instituto Nacional de Estatística)","A União Europeia","A ONU","A Câmara Municipal"], correct:0, explain:"O INE conta periodicamente quantas pessoas vivem em Portugal."},
      {q:"O que é a litoralização?", opts:["Mais gente a viver perto da costa do que no interior","A criação de novas linhas de comboio","O aumento da população idosa","A divisão entre concelhos e freguesias"], correct:0, explain:"A litoralização é a maior concentração de população no litoral do que no interior do país."},
      {q:"Em que setor trabalha hoje a maioria da população ativa portuguesa?", opts:["Terciário (serviços)","Primário (agricultura)","Secundário (indústria)","Nenhum dos anteriores"], correct:0, explain:"Hoje a maioria da população ativa trabalha no setor terciário: serviços, comércio e turismo."},
      {q:"Que fator tem feito crescer a população residente em Portugal nos últimos anos?", opts:["A chegada de imigrantes","O aumento da natalidade portuguesa","A diminuição da esperança de vida","A emigração"], correct:0, explain:"A chegada de imigrantes tem feito crescer a população residente, compensando a baixa natalidade."},
      {q:"O que é a densidade populacional?", opts:["Quantas pessoas vivem, em média, num quilómetro quadrado","O número total de habitantes de um país","A percentagem de pessoas idosas","O rendimento médio da população"], correct:0, explain:"A densidade populacional mede quantas pessoas vivem, em média, por km²."},
      {q:"Qual é uma das atividades económicas mais importantes de Portugal atualmente?", opts:["O turismo","A mineração de ouro","A pesca da baleia","O comércio de escravos"], correct:0, explain:"O turismo é hoje uma das atividades económicas mais importantes do país."},
      {q:"Aproximadamente quantos habitantes tinha Portugal em 2026, segundo estimativas recentes?", opts:["Cerca de 11,4 milhões","Cerca de 1 milhão","Cerca de 50 milhões","Cerca de 500 mil"], correct:0, explain:"Segundo estimativas recentes, Portugal tinha cerca de 11,4 milhões de habitantes em 2026, incluindo residentes estrangeiros."},
      {q:"O que caracteriza uma área repulsiva, em termos de população?", opts:["Perde população, geralmente por falta de emprego","Ganha população rapidamente","Tem a maior densidade populacional do país","É sempre uma área protegida"], correct:0, explain:"Uma área repulsiva perde população, ao contrário de uma área atrativa, que ganha população."},
      {q:"Em que três setores se distribui a população ativa portuguesa?", opts:["Primário, secundário e terciário","Rural, urbano e litoral","Público, privado e social","Norte, centro e sul"], correct:0, explain:"A população ativa distribui-se pelo setor primário (agricultura, pesca), secundário (indústria) e terciário (serviços)."},
      {q:"O que é o património, referido a propósito do turismo em Portugal?", opts:["Tudo o que herdamos do passado e vale a pena proteger","O dinheiro guardado pelo Estado","Os terrenos agrícolas do interior","As leis da Constituição"], correct:0, explain:"O património inclui monumentos, tradições e paisagens herdadas do passado, que vale a pena proteger."}
    ],
    compare:{
      left:{title:"🌾 Portugal rural", points:["Menos povoado","Ligado à agricultura","População mais envelhecida"]},
      right:{title:"🏙️ Portugal urbano", points:["Mais povoado (sobretudo no litoral)","Ligado a serviços e comércio","Mais oportunidades de emprego"]}
    },
    boss:"Revisão final, mais próxima do fim do ano letivo (pp. 182–186)"
  },
  {
    id:"m8", num:8, c:"m8", icon:"🌍",
    title:"Portugal Entra na Guilda",
    subtitle:"Portugal no Mundo: União Europeia, CPLP e outras organizações", pages:"pp. a confirmar",
    lead:"Nenhum jogador sobrevive sozinho num mundo online — junta-se a guildas e alianças para trocar recursos e ajuda. Portugal fez o mesmo: juntou-se a organizações internacionais como a União Europeia e a CPLP, partilhando regras, moeda e apoio com outros países.",
    missions:[
      {t:"Entrar na Guilda Europeia", d:"Portugal na União Europeia", f:"Desenhar a bandeira europeia e explicar 1 vantagem de pertencer à UE", xp:10},
      {t:"Trocar a Moeda do Servidor", d:"Do escudo ao euro", f:"Comparar uma moeda antiga (escudo) com uma nova (euro), se houver alguma em casa", xp:10},
      {t:"A Guilda da Língua Portuguesa", d:"CPLP: países que falam português", f:"Localizar no mapa-múndi os países da CPLP", xp:10},
      {t:"Outras Alianças", d:"ONU, NATO e outras organizações internacionais", f:"Escolher uma organização e explicar em 3 frases o que faz", xp:10},
      {t:"Fronteiras Abertas", d:"Espaço Schengen: viajar sem fronteiras", f:"Escrever um pequeno itinerário de viagem por 3 países Schengen sem passaporte", xp:15}
    ],
    resumo:[
      "Portugal faz parte de várias organizações internacionais, que lhe dão apoio, mercados e alianças.",
      "Em <b>1986</b>, Portugal tornou-se membro da Comunidade Económica Europeia (hoje <b>União Europeia</b>), juntamente com a Espanha.",
      "Pertencer à UE trouxe <b>fundos europeus</b> para investir em estradas, escolas e hospitais, e a <b>livre circulação</b> de pessoas, bens e serviços entre os países membros.",
      "Em <b>2002</b>, o <b>escudo</b> (a antiga moeda portuguesa) foi substituído pelo <b>euro</b>, a moeda comum à maioria dos países da UE.",
      "Portugal pertence ao <b>espaço Schengen</b> desde 1995, o que permite viajar entre a maioria dos países europeus sem mostrar o passaporte nas fronteiras.",
      "A <b>CPLP</b> (Comunidade dos Países de Língua Portuguesa) foi fundada em <b>1996</b>, em Lisboa, e junta os países que têm o português como língua oficial: Portugal, Brasil, Angola, Moçambique, Cabo Verde, Guiné-Bissau, São Tomé e Príncipe, Timor-Leste e Guiné Equatorial.",
      "Portugal é também membro fundador da <b>NATO</b> (Organização do Tratado do Atlântico Norte), desde 1949 — uma aliança militar de defesa entre vários países.",
      "Portugal pertence à <b>ONU</b> (Organização das Nações Unidas) desde 1955, uma organização que junta quase todos os países do mundo para promover a paz e a cooperação."
    ],
    gloss:[
      ["União Europeia","Uma organização que junta vários países europeus, com regras, mercado e moeda partilhados."],
      ["fundos europeus","Dinheiro dado pela UE aos países membros para investir em obras, escolas, estradas, etc."],
      ["livre circulação","O direito de viajar, viver e trabalhar noutros países da UE sem grandes restrições."],
      ["euro","A moeda comum à maioria dos países da União Europeia, adotada por Portugal em 2002."],
      ["espaço Schengen","Um grupo de países europeus onde se pode viajar sem mostrar o passaporte nas fronteiras."],
      ["CPLP","Comunidade dos Países de Língua Portuguesa — organização que junta os países que falam português."],
      ["NATO","Organização do Tratado do Atlântico Norte — uma aliança militar de defesa entre vários países."],
      ["ONU","Organização das Nações Unidas — junta quase todos os países do mundo para promover a paz."],
      ["moeda única","Uma moeda partilhada por vários países, como o euro na União Europeia."],
      ["Parlamento Europeu","Instituição da UE eleita pelos cidadãos europeus, que vota leis a nível europeu."],
      ["Tratado de Adesão","Documento assinado em 1985 que formalizou a entrada de Portugal e Espanha na CEE."],
      ["Timor-Leste","País que se tornou independente em 2002 e juntou-se à CPLP nesse mesmo ano."],
      ["escudo","A antiga moeda portuguesa, usada até 2002, quando foi substituída pelo euro."]
    ],
    members:{title:"🌐 Os 9 países da CPLP", items:[
      {flag:"🇵🇹", name:"Portugal"},
      {flag:"🇧🇷", name:"Brasil"},
      {flag:"🇦🇴", name:"Angola"},
      {flag:"🇲🇿", name:"Moçambique"},
      {flag:"🇨🇻", name:"Cabo Verde"},
      {flag:"🇬🇼", name:"Guiné-Bissau"},
      {flag:"🇸🇹", name:"São Tomé e Príncipe"},
      {flag:"🇹🇱", name:"Timor-Leste"},
      {flag:"🇬🇶", name:"Guiné Equatorial"}
    ]},
    timeline:[
      {y:"1949", ic:"🛡️", t:"Portugal é um dos membros fundadores da NATO, aliança militar de defesa."},
      {y:"1955", ic:"🕊️", t:"Portugal torna-se membro da ONU (Organização das Nações Unidas)."},
      {y:"1986", ic:"🇪🇺", t:"Portugal adere à Comunidade Económica Europeia (hoje União Europeia), junto com a Espanha."},
      {y:"1995", ic:"🛂", t:"Portugal integra o espaço Schengen: fronteiras abertas com a maioria dos países europeus."},
      {y:"1996", ic:"🌍", t:"Fundação da CPLP, em Lisboa, juntando os países de língua portuguesa."},
      {y:"2002", ic:"💶", t:"O escudo é substituído pelo euro como moeda oficial de Portugal."}
    ],
    quiz:[
      {q:"Em que ano Portugal aderiu à Comunidade Económica Europeia (hoje UE)?", opts:["1986","1974","1996","1949"], correct:0, explain:"Portugal aderiu em 1986, junto com a Espanha."},
      {q:"O que é a CPLP?", opts:["Uma organização de países de língua portuguesa","Uma aliança militar europeia","A moeda comum europeia","Um tratado de fronteiras abertas"], correct:0, explain:"A CPLP junta os países que têm o português como língua oficial, fundada em 1996."},
      {q:"Que moeda substituiu o escudo em Portugal?", opts:["O euro","O dólar","A libra","O peso"], correct:0, explain:"O euro tornou-se a moeda oficial de Portugal em 2002."},
      {q:"O que é o espaço Schengen?", opts:["Um grupo de países europeus onde se viaja sem mostrar passaporte nas fronteiras","Uma moeda comum europeia","Uma aliança militar","Um tratado comercial com o Brasil"], correct:0, explain:"O espaço Schengen permite viajar entre a maioria dos países europeus sem controlo de fronteiras."},
      {q:"Em que ano foi fundada a CPLP?", opts:["1996","1986","1974","2002"], correct:0, explain:"A CPLP foi fundada em Lisboa, em 1996."},
      {q:"Desde que ano Portugal é membro fundador da NATO?", opts:["1949","1910","1974","1986"], correct:0, explain:"Portugal é um dos membros fundadores da NATO, aliança militar de defesa, desde 1949."},
      {q:"Em que ano foi assinado o Tratado de Adesão que formalizou a entrada de Portugal na CEE?", opts:["1985","1986","1995","2002"], correct:0, explain:"O Tratado de Adesão foi assinado em 1985; a entrada efetiva de Portugal e Espanha aconteceu em 1986."},
      {q:"Quando é que Timor-Leste se tornou independente e se juntou à CPLP?", opts:["2002","1996","1975","1986"], correct:0, explain:"Timor-Leste tornou-se independente e juntou-se à CPLP em 2002."},
      {q:"O que são os fundos europeus?", opts:["Dinheiro dado pela UE aos países membros para investir em obras, escolas e estradas","A moeda comum da União Europeia","Os impostos pagos à União Europeia","O orçamento militar da NATO"], correct:0, explain:"Os fundos europeus são dinheiro dado pela UE aos países membros para investir em infraestruturas e serviços."},
      {q:"O que faz o Parlamento Europeu?", opts:["Vota leis a nível europeu, sendo eleito pelos cidadãos europeus","Comanda as forças militares da NATO","Define a moeda de cada país da UE","Organiza a CPLP"], correct:0, explain:"O Parlamento Europeu é uma instituição da UE eleita pelos cidadãos, que vota leis a nível europeu."}
    ],
    compare:{
      left:{title:"🇵🇹 Portugal antes da UE (até 1985)", points:["Moeda própria: o escudo","Fronteiras com controlo","Sem fundos europeus para investir","Comércio mais limitado com a Europa"]},
      right:{title:"🇪🇺 Portugal na UE (desde 1986)", points:["Euro como moeda comum (desde 2002)","Fronteiras abertas no espaço Schengen","Acesso a fundos europeus","Livre circulação de pessoas e bens"]}
    },
    boss:"\"Ponho-me à prova!\" — Ficha de Avaliação Formativa (p. a confirmar)"
  }
  ];
