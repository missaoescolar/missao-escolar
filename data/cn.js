  const CN_WORLDS = [
  {
    id:"c1", num:1, c:"m1", icon:"🍎",
    title:"Barra de Vida: Nutrição e Alimentação",
    subtitle:"Função dos nutrientes e alimentação equilibrada", pages:"Manual 1, págs. 10–41",
    lead:"Em qualquer jogo, comer a comida certa enche a barra de vida e dá buffs; comer lixo pode até prejudicar-te. O corpo humano funciona de forma parecida — só que os \"buffs\" chamam-se nutrientes.",
    missions:[
      {t:"Os Nutrientes da Receita", d:"Funções dos nutrientes: energética, reguladora e construtora", f:"Classificar 10 alimentos de casa pelo nutriente principal que fornecem", xp:10},
      {t:"A Roda dos Alimentos", d:"Grupos e proporções da roda dos alimentos", f:"Planear um dia de refeições equilibradas usando a roda como guia", xp:10},
      {t:"Detetive de Rótulos", d:"Leitura de rótulos e aditivos alimentares", f:"Analisar os rótulos de 3 produtos embalados em casa", xp:10},
      {t:"Quando o Equilíbrio Falha", d:"Doenças relacionadas com a alimentação", f:"Pesquisar a desnutrição ou a obesidade e resumir em 3 frases", xp:15}
    ],
    resumo:[
      "Os alimentos fornecem <b>nutrientes</b>, que têm três funções principais no corpo: energética, reguladora e construtora.",
      "Os <b>glícidos</b> e os <b>lípidos</b> têm sobretudo função energética — dão a energia para o corpo funcionar e para o movimento.",
      "As <b>proteínas</b> têm função construtora e reparadora — ajudam a construir e a reparar músculos e outros tecidos do corpo.",
      "As <b>vitaminas</b> e os <b>sais minerais</b> têm função reguladora — não dão energia, mas são essenciais para o corpo funcionar bem.",
      "A <b>água</b> não é um nutriente energético, mas é indispensável: regula a temperatura do corpo, transporta substâncias e participa em quase todas as reações do organismo.",
      "A <b>roda dos alimentos</b> organiza os alimentos em grupos e mostra, pelo tamanho de cada fatia, a proporção recomendada de cada grupo numa alimentação equilibrada — a fatia maior é a dos cereais, derivados e tubérculos.",
      "Os rótulos indicam os ingredientes e podem incluir um <b>aditivo alimentar</b> — substância acrescentada para conservar, colorir ou dar sabor, identificada por um código que começa pela letra \"E\" (ex.: E330).",
      "Uma alimentação desequilibrada pode levar a <b>desnutrição</b> (falta de nutrientes essenciais) ou a <b>obesidade</b> (excesso de peso por se consumir mais energia do que a que se gasta) — ambas prejudicam a saúde."
    ],
    gloss:[
      ["nutrientes","As substâncias presentes nos alimentos que o corpo usa para obter energia, crescer e funcionar bem.", {icon:"🧬"}],
      ["glícidos","Nutrientes que fornecem energia ao corpo de forma rápida — ex.: pão, arroz, massa, fruta.", {icon:"🍞"}],
      ["lípidos","Nutrientes que fornecem muita energia e ajudam a absorver certas vitaminas — ex.: azeite, manteiga, frutos secos.", {icon:"🥑"}],
      ["proteínas","Nutrientes que ajudam a construir e a reparar os tecidos do corpo — ex.: carne, peixe, ovos, leguminosas.", {icon:"🍗"}],
      ["vitaminas","Nutrientes que não dão energia, mas regulam o funcionamento do corpo, em pequenas quantidades.", {icon:"🍊"}],
      ["sais minerais","Nutrientes reguladores como o cálcio, o ferro e o sódio, essenciais em pequenas quantidades.", {icon:"🧂"}],
      ["água","Um líquido essencial à vida que não fornece energia, mas é indispensável para o corpo funcionar.", {icon:"💧"}],
      ["roda dos alimentos","Um esquema que agrupa os alimentos por grupos e mostra a proporção recomendada de cada grupo numa alimentação equilibrada.", {svg:'<svg class="poster-svg wheel-pie" viewBox="0 0 320 300" role="img" aria-label="Gráfico circular da Roda dos Alimentos: Cereais, derivados e tubérculos 28%, Hortícolas 23%, Fruta 20%, Lacticínios 18%, Carnes, pescado e ovos 5%, Leguminosas 4%, Gorduras e óleos 2%. No centro, a água, essencial mas sem percentagem própria. Ver legenda completa abaixo."><path d="M160.0,110.0 L160.0,32.0 A118,118 0 0 1 275.9,172.1 L199.3,157.5 A40,40 0 0 0 160.0,110.0 Z" fill="#E0923A" stroke="var(--surface)" stroke-width="2"/><path d="M199.3,157.5 L275.9,172.1 A118,118 0 0 1 152.6,267.8 L157.5,189.9 A40,40 0 0 0 199.3,157.5 Z" fill="#5F9E52" stroke="var(--surface)" stroke-width="2"/><path d="M157.5,189.9 L152.6,267.8 A118,118 0 0 1 45.7,179.3 L121.3,159.9 A40,40 0 0 0 157.5,189.9 Z" fill="#D1495B" stroke="var(--surface)" stroke-width="2"/><path d="M121.3,159.9 L45.7,179.3 A118,118 0 0 1 84.8,59.1 L134.5,119.2 A40,40 0 0 0 121.3,159.9 Z" fill="#4F86B3" stroke="var(--surface)" stroke-width="2"/><path d="M134.5,119.2 L84.8,59.1 A118,118 0 0 1 116.6,40.3 L145.3,112.8 A40,40 0 0 0 134.5,119.2 Z" fill="#A85D3E" stroke="var(--surface)" stroke-width="2"/><path d="M145.3,112.8 L116.6,40.3 A118,118 0 0 1 145.2,32.9 L155.0,110.3 A40,40 0 0 0 145.3,112.8 Z" fill="#7A5C3E" stroke="var(--surface)" stroke-width="2"/><path d="M155.0,110.3 L145.2,32.9 A118,118 0 0 1 160.0,32.0 L160.0,110.0 A40,40 0 0 0 155.0,110.3 Z" fill="#8B8B5A" stroke="var(--surface)" stroke-width="2"/><text x="220.9" y="99.6" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">28%</text><text x="208.4" y="212.4" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">23%</text><text x="109.6" y="210.9" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">20%</text><text x="84.9" y="125.6" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">18%</text><circle cx="160" cy="150" r="40" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="2.5"/><text x="160" y="146" text-anchor="middle" font-size="16">💧</text><text x="160" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Água</text></svg><ul class="wheel-legend"><li><span class="sw" style="background:#E0923A"></span><span><b>28%</b> Cereais, derivados e tubérculos</span></li><li><span class="sw" style="background:#5F9E52"></span><span><b>23%</b> Hortícolas</span></li><li><span class="sw" style="background:#D1495B"></span><span><b>20%</b> Fruta</span></li><li><span class="sw" style="background:#4F86B3"></span><span><b>18%</b> Lacticínios</span></li><li><span class="sw" style="background:#A85D3E"></span><span><b>5%</b> Carnes, pescado e ovos</span></li><li><span class="sw" style="background:#7A5C3E"></span><span><b>4%</b> Leguminosas</span></li><li><span class="sw" style="background:#8B8B5A"></span><span><b>2%</b> Gorduras e óleos</span></li><li class="note">💧 Água: não conta % da roda, mas é essencial — deve ser a bebida principal.</li></ul>'}],
      ["aditivo alimentar","Uma substância acrescentada a um alimento para o conservar, colorir, dar sabor ou textura — identificada nos rótulos por um código que começa pela letra \"E\".", {icon:"🏷️"}],
      ["desnutrição","Uma condição causada pela falta de nutrientes essenciais na alimentação.", {icon:"📉"}],
      ["obesidade","Uma condição causada pelo excesso de peso corporal, associada a consumir mais energia do que a que se gasta.", {icon:"⚖️"}]
    ],
    posters:[
      {title:"🍽️ A Roda dos Alimentos", svg:'<svg class="poster-svg wheel-pie" viewBox="0 0 320 300" role="img" aria-label="Gráfico circular da Roda dos Alimentos: Cereais, derivados e tubérculos 28%, Hortícolas 23%, Fruta 20%, Lacticínios 18%, Carnes, pescado e ovos 5%, Leguminosas 4%, Gorduras e óleos 2%. No centro, a água, essencial mas sem percentagem própria. Ver legenda completa abaixo."><path d="M160.0,110.0 L160.0,32.0 A118,118 0 0 1 275.9,172.1 L199.3,157.5 A40,40 0 0 0 160.0,110.0 Z" fill="#E0923A" stroke="var(--surface)" stroke-width="2"/><path d="M199.3,157.5 L275.9,172.1 A118,118 0 0 1 152.6,267.8 L157.5,189.9 A40,40 0 0 0 199.3,157.5 Z" fill="#5F9E52" stroke="var(--surface)" stroke-width="2"/><path d="M157.5,189.9 L152.6,267.8 A118,118 0 0 1 45.7,179.3 L121.3,159.9 A40,40 0 0 0 157.5,189.9 Z" fill="#D1495B" stroke="var(--surface)" stroke-width="2"/><path d="M121.3,159.9 L45.7,179.3 A118,118 0 0 1 84.8,59.1 L134.5,119.2 A40,40 0 0 0 121.3,159.9 Z" fill="#4F86B3" stroke="var(--surface)" stroke-width="2"/><path d="M134.5,119.2 L84.8,59.1 A118,118 0 0 1 116.6,40.3 L145.3,112.8 A40,40 0 0 0 134.5,119.2 Z" fill="#A85D3E" stroke="var(--surface)" stroke-width="2"/><path d="M145.3,112.8 L116.6,40.3 A118,118 0 0 1 145.2,32.9 L155.0,110.3 A40,40 0 0 0 145.3,112.8 Z" fill="#7A5C3E" stroke="var(--surface)" stroke-width="2"/><path d="M155.0,110.3 L145.2,32.9 A118,118 0 0 1 160.0,32.0 L160.0,110.0 A40,40 0 0 0 155.0,110.3 Z" fill="#8B8B5A" stroke="var(--surface)" stroke-width="2"/><text x="220.9" y="99.6" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">28%</text><text x="208.4" y="212.4" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">23%</text><text x="109.6" y="210.9" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">20%</text><text x="84.9" y="125.6" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#fff">18%</text><circle cx="160" cy="150" r="40" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2.5"/><text x="160" y="146" text-anchor="middle" font-size="16">💧</text><text x="160" y="164" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--wc)">Água</text></svg><ul class="wheel-legend"><li><span class="sw" style="background:#E0923A"></span><span><b>28%</b> Cereais, derivados e tubérculos</span></li><li><span class="sw" style="background:#5F9E52"></span><span><b>23%</b> Hortícolas</span></li><li><span class="sw" style="background:#D1495B"></span><span><b>20%</b> Fruta</span></li><li><span class="sw" style="background:#4F86B3"></span><span><b>18%</b> Lacticínios</span></li><li><span class="sw" style="background:#A85D3E"></span><span><b>5%</b> Carnes, pescado e ovos</span></li><li><span class="sw" style="background:#7A5C3E"></span><span><b>4%</b> Leguminosas</span></li><li><span class="sw" style="background:#8B8B5A"></span><span><b>2%</b> Gorduras e óleos</span></li><li class="note">💧 Água: não conta % da roda, mas é essencial — deve ser a bebida principal.</li></ul>'}
    ],
    quiz:[
      {q:"Qual é a função principal dos glícidos e dos lípidos no corpo?", opts:["Função energética","Função reguladora","Função construtora","Nenhuma função específica"], correct:0, explain:"Os glícidos e os lípidos fornecem sobretudo energia ao corpo — têm função energética."},
      {q:"Que nutrientes têm sobretudo função construtora e reparadora?", opts:["As proteínas","As vitaminas","Os glícidos","Os sais minerais"], correct:0, explain:"As proteínas ajudam a construir e a reparar os tecidos do corpo, como os músculos."},
      {q:"Qual é a função das vitaminas e dos sais minerais?", opts:["Função reguladora","Função energética","Função construtora","Função digestiva"], correct:0, explain:"As vitaminas e os sais minerais não dão energia, mas regulam o funcionamento do corpo."},
      {q:"O que mostra a roda dos alimentos?", opts:["Os grupos de alimentos e a proporção recomendada de cada um","O preço de cada alimento","Apenas os alimentos proibidos","A origem geográfica dos alimentos"], correct:0, explain:"A roda organiza os alimentos em grupos e mostra, pelo tamanho da fatia, a proporção recomendada de cada um."},
      {q:"O que é um aditivo alimentar?", opts:["Uma substância acrescentada a um alimento para o conservar, colorir ou dar sabor","Um tipo de vitamina natural","Um nutriente energético","Um tipo de proteína animal"], correct:0, explain:"Um aditivo alimentar é acrescentado para conservar, colorir, dar sabor ou textura a um alimento."},
      {q:"Como se identificam os aditivos alimentares nos rótulos dos alimentos?", opts:["Por um código que começa pela letra E","Por um código que começa pela letra A","Por um símbolo de estrela","Os aditivos não são identificados nos rótulos"], correct:0, explain:"Os aditivos alimentares são identificados nos rótulos por um código que começa pela letra \"E\" (ex.: E330)."},
      {q:"O que é a desnutrição?", opts:["Uma condição causada pela falta de nutrientes essenciais na alimentação","Uma condição causada pelo excesso de peso","Uma doença causada pelo excesso de água","Uma condição causada pelo excesso de vitaminas"], correct:0, explain:"A desnutrição é causada pela falta de nutrientes essenciais na alimentação."},
      {q:"O que pode causar a obesidade?", opts:["Consumir, ao longo do tempo, mais energia do que a que se gasta","Beber muita água todos os dias","Comer pouco sal","Comer vitaminas em excesso"], correct:0, explain:"A obesidade está associada a consumir mais energia (calorias) do que a que o corpo gasta, ao longo do tempo."},
      {q:"Qual destes nutrientes não fornece energia, mas é indispensável ao funcionamento do corpo?", opts:["A água","As proteínas","Os glícidos","Os lípidos"], correct:0, explain:"A água é um nutriente que não fornece energia, mas regula a temperatura do corpo e transporta substâncias."},
      {q:"Na roda dos alimentos, qual destes grupos ocupa a maior fatia?", opts:["Cereais e derivados, tubérculos","Carnes, pescado e ovos","Gorduras e óleos","Leguminosas"], correct:0, explain:"O grupo dos cereais e derivados e tubérculos ocupa a maior fatia da roda dos alimentos."}
    ],
    compare:{
      left:{title:"🥗 Refeição equilibrada", points:["Alimentos de vários grupos da roda, nas proporções certas","Inclui hortícolas e fruta","Água como bebida principal"]},
      right:{title:"🍟 Refeição desequilibrada", points:["Baseada quase só num ou dois grupos de alimentos","Rica em açúcar, sal ou gorduras em excesso","Bebidas açucaradas em vez de água"]}
    },
    boss:"Ficha de avaliação — Manual 1: Resumo pág. 39 · Avaliação pág. 40"
  },
  {
    id:"c2", num:2, c:"m2", icon:"🦷",
    title:"A Fábrica de Processamento: Digestão",
    subtitle:"Sistema digestivo e absorção de nutrientes", pages:"Manual 1, págs. 42–69",
    lead:"A comida que entra pela boca é a matéria-prima; o sistema digestivo é a linha de montagem que a transforma em peças pequenas que o corpo consegue mesmo usar.",
    missions:[
      {t:"Mapa da Fábrica", d:"Órgãos do tubo digestivo e trajeto do alimento", f:"Desenhar o percurso do alimento, da boca ao ânus, com os órgãos certos", xp:10},
      {t:"Equipa de Dentes", d:"Tipos de dentes e as suas funções", f:"Identificar e contar os teus próprios tipos de dentes ao espelho", xp:10},
      {t:"Proteger a Fábrica", d:"Prevenção da cárie dentária e higiene oral", f:"Criar uma rotina de higiene oral com 3 regras", xp:10},
      {t:"Outras Fábricas, Outras Regras", d:"Digestão comparada entre espécies (ex.: ruminantes)", f:"Comparar o sistema digestivo humano com o de uma vaca", xp:15},
      {t:"🛠️ Desafio de Engenheiro: Estômago num Saco", d:"Modelo da digestão e da absorção", f:"Num saco de congelação com fecho, põe 2 bolachas partidas, meio copo de água e uma colher de sopa de vinagre (o vinagre faz de ácido do estômago). Fecha bem e amassa durante 2 minutos: são os movimentos do estômago.\nCom um adulto, corta a ponta de uma meia-calça velha (o intestino) e despeja a mistura lá para dentro, por cima de uma taça. Aperta devagar.\nVerifica: o líquido passa pela meia para a taça (é a absorção: os nutrientes passam para o sangue) e os pedaços maiores ficam (seguem para o intestino grosso). O que o modelo não mostra: as enzimas, que partem os alimentos em moléculas muito pequenas.", xp:20}
    ],
    resumo:[
      "O <b>tubo digestivo</b> é o caminho percorrido pelo alimento: boca, faringe, esófago, estômago, intestino delgado e intestino grosso, terminando no ânus.",
      "Na boca, os dentes trituram o alimento (incisivos, caninos e molares têm formas diferentes, para cortar, rasgar e triturar) — é a <b>digestão mecânica</b>.",
      "A saliva, o suco gástrico e outros sucos digestivos transformam os nutrientes em moléculas mais simples que o corpo consegue absorver — é a <b>digestão química</b>.",
      "O <b>suco gástrico</b>, produzido no estômago, é muito ácido e começa a digestão das proteínas.",
      "O fígado e o pâncreas são <b>glândulas digestivas</b> que não fazem parte do tubo digestivo, mas produzem substâncias que ajudam a digestão no intestino delgado.",
      "No intestino delgado, a parede tem pequenas saliências — cada uma chamada <b>vilosidade intestinal</b> — que aumentam a superfície de contacto e permitem a absorção dos nutrientes para o sangue.",
      "No intestino grosso, dá-se a absorção de água e a formação das fezes, que depois saem pelo ânus.",
      "Uma má higiene oral e o excesso de açúcar favorecem a <b>cárie dentária</b> — a destruição progressiva do dente por ácidos produzidos por bactérias.",
      "Nem todos os animais digerem da mesma forma: um <b>ruminante</b> (como a vaca) tem um estômago com quatro compartimentos e usa microrganismos para digerir a celulose das plantas — algo que o sistema digestivo humano não consegue fazer."
    ],
    gloss:[
      ["tubo digestivo","O conjunto de órgãos por onde passa o alimento, da boca ao ânus."],
      ["digestão mecânica","A transformação do alimento em pedaços mais pequenos, por ação dos dentes e dos movimentos do tubo digestivo."],
      ["digestão química","A transformação dos nutrientes em moléculas mais simples, por ação de sucos digestivos produzidos pelo corpo."],
      ["suco gástrico","Um líquido ácido produzido no estômago que inicia a digestão das proteínas."],
      ["glândulas digestivas","Órgãos como o fígado e o pâncreas, que produzem substâncias que ajudam a digestão, sem fazerem parte do tubo digestivo."],
      ["vilosidade intestinal","Uma pequena saliência na parede do intestino delgado que aumenta a superfície de absorção dos nutrientes."],
      ["cárie dentária","A destruição progressiva de um dente, causada por ácidos produzidos por bactérias, favorecida pelo açúcar e pela má higiene oral."],
      ["ruminante","Um animal, como a vaca, com um estômago de quatro compartimentos, capaz de digerir a celulose das plantas com a ajuda de microrganismos."]
    ],
    quiz:[
      {q:"Qual é o percurso correto do alimento no tubo digestivo?", opts:["Boca, esófago, estômago, intestino delgado, intestino grosso","Boca, estômago, esófago, intestino grosso, intestino delgado","Esófago, boca, estômago, intestino delgado, intestino grosso","Boca, intestino delgado, estômago, esófago, intestino grosso"], correct:0, explain:"O alimento percorre a boca, o esófago, o estômago, o intestino delgado e o intestino grosso, por esta ordem."},
      {q:"O que é a digestão mecânica?", opts:["A transformação do alimento em pedaços mais pequenos, pelos dentes e pelos movimentos do tubo digestivo","A transformação dos nutrientes em moléculas simples por sucos digestivos","A absorção dos nutrientes no sangue","A formação das fezes no intestino grosso"], correct:0, explain:"A digestão mecânica reduz o alimento a pedaços mais pequenos, sem alterar a sua composição química."},
      {q:"O que é a digestão química?", opts:["A transformação dos nutrientes em moléculas mais simples, por ação de sucos digestivos","A trituração do alimento pelos dentes","O movimento do alimento ao longo do tubo digestivo","A mastigação do alimento"], correct:0, explain:"A digestão química transforma os nutrientes em moléculas mais simples, graças a substâncias como o suco gástrico."},
      {q:"Onde é produzido o suco gástrico?", opts:["No estômago","Na boca","No intestino delgado","No fígado"], correct:0, explain:"O suco gástrico é produzido no estômago e é muito ácido."},
      {q:"Que órgãos são glândulas digestivas, mas não fazem parte do tubo digestivo?", opts:["O fígado e o pâncreas","O estômago e o esófago","A boca e a faringe","O intestino delgado e o grosso"], correct:0, explain:"O fígado e o pâncreas produzem substâncias que ajudam a digestão, sem fazerem parte do tubo digestivo em si."},
      {q:"Para que servem as vilosidades intestinais?", opts:["Para aumentar a superfície de absorção dos nutrientes no intestino delgado","Para triturar o alimento","Para produzir suco gástrico","Para formar as fezes"], correct:0, explain:"As vilosidades intestinais aumentam a superfície de contacto, facilitando a absorção dos nutrientes para o sangue."},
      {q:"O que acontece principalmente no intestino grosso?", opts:["Absorção de água e formação das fezes","Absorção da maior parte dos nutrientes","Produção de suco gástrico","Trituração do alimento pelos dentes"], correct:0, explain:"No intestino grosso ocorre sobretudo a absorção de água e a formação das fezes."},
      {q:"O que favorece o aparecimento de cáries dentárias?", opts:["O excesso de açúcar e a má higiene oral","Beber muita água","Mastigar bem os alimentos","Comer hortícolas"], correct:0, explain:"O excesso de açúcar, combinado com má higiene oral, favorece a ação de bactérias que causam cáries."},
      {q:"Quantos compartimentos tem o estômago de um ruminante como a vaca?", opts:["Quatro","Um","Dois","Seis"], correct:0, explain:"O estômago de um ruminante tem quatro compartimentos: rúmen, retículo, omaso e abomaso."},
      {q:"O que permite a um ruminante digerir a celulose das plantas, ao contrário dos humanos?", opts:["A ajuda de microrganismos no seu estômago especial","Ter mais dentes do que os humanos","Mastigar muito mais rápido","Não ter estômago"], correct:0, explain:"Os microrganismos no estômago de várias câmaras do ruminante decompõem a celulose, algo que o sistema digestivo humano não consegue fazer por si só."}
    ],
    compare:{
      left:{title:"🧑 Digestão humana", points:["Estômago com uma única câmara, com suco gástrico ácido","Não consegue digerir a celulose (fibra das plantas)","Tubo digestivo relativamente mais curto"]},
      right:{title:"🐄 Digestão de um ruminante (ex.: vaca)", points:["Estômago com 4 compartimentos: rúmen, retículo, omaso, abomaso","Usa microrganismos para digerir a celulose","Tubo digestivo muito mais longo"]}
    },
    boss:"Ficha de avaliação — Manual 1: Resumo pág. 68 · Avaliação pág. 69"
  },
  {
    id:"c3", num:3, c:"m3", icon:"🫁",
    title:"Sistema de Ventilação: Respiração",
    subtitle:"Sistema respiratório e trocas gasosas", pages:"Manual 1, págs. 72–99",
    lead:"Tal como uma mina precisa de ventilação para não faltar o ar, o teu corpo tem o seu próprio sistema de ventilação: o sistema respiratório.",
    missions:[
      {t:"Mapa do Ar", d:"Órgãos do sistema respiratório e percurso do ar", f:"Desenhar o percurso do ar, do nariz aos pulmões, com os órgãos certos", xp:10},
      {t:"Inspirar vs Expirar", d:"Mecânica da ventilação pulmonar (diafragma, costelas)", f:"Observar e descrever o movimento do peito ao respirar, 5 vezes", xp:10},
      {t:"Trocas nos Alvéolos", d:"Trocas gasosas nos alvéolos pulmonares", f:"Desenhar um alvéolo pulmonar com as trocas gasosas (O2 entra, CO2 sai)", xp:10},
      {t:"Quando a Respiração Falha", d:"Doenças respiratórias e fatores de risco", f:"Pesquisar a asma ou a bronquite e resumir em 3 frases", xp:15},
      {t:"🛠️ Desafio de Engenheiro: O Pulmão de Garrafa", d:"Modelo do diafragma e da inspiração", f:"Pede a um adulto que corte uma garrafa de plástico de 1,5 L ao meio; fica com a parte de cima. Mete um balão dentro, pelo gargalo, e prende a boca do balão ao gargalo com fita-cola (é o pulmão). Corta a ponta de outro balão, estica-o no fundo aberto da garrafa e prende-o (é o diafragma).\nPuxa o balão de baixo para fora e solta.\nVerifica: ao puxares, o espaço dentro da garrafa aumenta e o balão de dentro enche-se de ar: é a inspiração (o diafragma contrai e desce). Ao soltares, o balão esvazia: expiração. O que o modelo não mostra: temos dois pulmões, e as costelas também se movem.", xp:20}
    ],
    resumo:[
      "O ar entra pelo nariz ou pela boca e percorre a faringe, a laringe, a <b>traqueia</b> e os <b>brônquios</b>, até chegar aos <b>pulmões</b>.",
      "A <b>respiração externa</b> é a troca de gases entre o ar e o sangue, nos alvéolos pulmonares; a <b>respiração celular</b> acontece dentro de cada célula do corpo, que usa o oxigénio para libertar energia dos nutrientes.",
      "O ar que inspiramos é mais rico em oxigénio; o ar que expiramos é mais rico em dióxido de carbono.",
      "Nos <b>alvéolos pulmonares</b> — pequenos sacos rodeados de vasos sanguíneos — o oxigénio passa para o sangue e o dióxido de carbono passa do sangue para o ar.",
      "A <b>ventilação pulmonar</b> é um movimento mecânico: o <b>diafragma</b> e os músculos entre as costelas contraem-se e relaxam, fazendo o volume do tórax aumentar (entra ar) ou diminuir (sai ar).",
      "Fumar e a poluição do ar são fatores de risco para doenças respiratórias como a <b>bronquite</b> e a <b>asma</b>."
    ],
    gloss:[
      ["traqueia","O tubo que liga a laringe aos brônquios, por onde passa o ar."],
      ["brônquios","Os dois ramos em que se divide a traqueia, um para cada pulmão."],
      ["pulmões","Os órgãos onde ocorrem as trocas gasosas entre o ar e o sangue."],
      ["respiração externa","A troca de gases entre o ar e o sangue, que ocorre nos alvéolos pulmonares."],
      ["respiração celular","O processo em que as células usam oxigénio para libertar energia dos nutrientes."],
      ["alvéolos pulmonares","Pequenos sacos nos pulmões, rodeados de vasos sanguíneos, onde ocorrem as trocas gasosas."],
      ["ventilação pulmonar","O movimento de entrada (inspiração) e saída (expiração) de ar dos pulmões."],
      ["diafragma","O músculo que separa o tórax do abdómen e que se contrai e relaxa durante a respiração."],
      ["bronquite","Uma doença respiratória com inflamação dos brônquios."],
      ["asma","Uma doença respiratória crónica que dificulta a passagem do ar nos brônquios."]
    ],
    quiz:[
      {q:"Qual é o percurso correto do ar no sistema respiratório?", opts:["Nariz, faringe, laringe, traqueia, brônquios, pulmões","Nariz, pulmões, traqueia, laringe, faringe","Boca, pulmões, traqueia, brônquios, faringe","Traqueia, nariz, laringe, pulmões, faringe"], correct:0, explain:"O ar percorre o nariz (ou boca), a faringe, a laringe, a traqueia, os brônquios e por fim os pulmões."},
      {q:"O que é a respiração externa?", opts:["A troca de gases entre o ar e o sangue, nos pulmões","A libertação de energia dentro das células","O movimento dos músculos das costelas","A produção de saliva"], correct:0, explain:"A respiração externa é a troca de oxigénio e dióxido de carbono entre o ar e o sangue, nos alvéolos pulmonares."},
      {q:"O que é a respiração celular?", opts:["O processo em que as células usam oxigénio para libertar energia dos nutrientes","A troca de ar nos pulmões","O movimento do diafragma","A entrada de ar pelo nariz"], correct:0, explain:"A respiração celular ocorre dentro de cada célula, que usa o oxigénio para libertar energia a partir dos nutrientes."},
      {q:"Que gás está mais presente no ar que expiramos, comparado com o que inspiramos?", opts:["Dióxido de carbono","Oxigénio","Azoto","Hidrogénio"], correct:0, explain:"O ar expirado é mais rico em dióxido de carbono do que o ar inspirado."},
      {q:"Onde ocorrem as trocas gasosas entre o ar e o sangue?", opts:["Nos alvéolos pulmonares","Na traqueia","Na laringe","No nariz"], correct:0, explain:"Os alvéolos pulmonares, rodeados de vasos sanguíneos, são o local das trocas gasosas."},
      {q:"Que músculo se contrai e relaxa para permitir a ventilação pulmonar?", opts:["O diafragma","O coração","O estômago","O fígado"], correct:0, explain:"O diafragma contrai-se e relaxa, ajudando a fazer entrar e sair o ar dos pulmões."},
      {q:"O que acontece ao volume do tórax durante a inspiração?", opts:["Aumenta","Diminui","Mantém-se igual","Desaparece"], correct:0, explain:"Durante a inspiração, o volume do tórax aumenta, permitindo a entrada de ar."},
      {q:"Qual destas é uma doença respiratória?", opts:["Asma","Cárie dentária","Obesidade","Desnutrição"], correct:0, explain:"A asma é uma doença respiratória crónica que dificulta a passagem do ar."},
      {q:"Qual destes é um fator de risco para doenças respiratórias?", opts:["Fumar","Beber água","Dormir bem","Comer fruta"], correct:0, explain:"Fumar e a poluição do ar são fatores de risco importantes para doenças respiratórias."},
      {q:"Qual é a função dos brônquios?", opts:["Conduzir o ar da traqueia até aos pulmões","Bombear o sangue","Digerir o alimento","Produzir saliva"], correct:0, explain:"Os brônquios conduzem o ar da traqueia até aos pulmões, dividindo-se em ramos cada vez mais finos."}
    ],
    compare:{
      left:{title:"⬆️ Inspiração", points:["O diafragma contrai-se e desce","O volume do tórax aumenta","O ar entra nos pulmões"]},
      right:{title:"⬇️ Expiração", points:["O diafragma relaxa e sobe","O volume do tórax diminui","O ar sai dos pulmões"]}
    },
    boss:"Ficha de avaliação — Manual 1: Resumo pág. 98 · Avaliação pág. 99"
  },
  {
    id:"c4", num:4, c:"m4", icon:"❤️",
    title:"A Rede de Distribuição: Circulação",
    subtitle:"Sistema circulatório e transporte no corpo", pages:"Manual 1, págs. 102–125",
    lead:"Tal como um servidor precisa de uma rede para distribuir recursos a todos os jogadores, o teu corpo tem uma rede de transporte — o sistema circulatório — com o coração como motor.",
    missions:[
      {t:"O Motor da Rede", d:"O coração: estrutura básica e função de bomba", f:"Desenhar o coração e legendar as suas 4 cavidades", xp:10},
      {t:"Estradas do Corpo", d:"Tipos de vasos sanguíneos: artérias, veias, capilares", f:"Comparar artérias e veias numa tabela", xp:10},
      {t:"O Que Transporta o Sangue", d:"Constituintes do sangue", f:"Desenhar os constituintes do sangue, como um \"inventário\"", xp:10},
      {t:"Sinais Vitais", d:"Frequência cardíaca e hábitos saudáveis para o coração", f:"Medir a tua frequência cardíaca em repouso e depois de um pequeno exercício", xp:15},
      {t:"🛠️ Desafio de Engenheiro: Estetoscópio Caseiro", d:"Ouvir o coração e medir a frequência cardíaca", f:"Encaixa a parte de cima de uma garrafa de plástico (cortada por um adulto) ou um funil na ponta de um tubo de plástico com cerca de 50 cm (por exemplo, de aquário). Encosta o funil ao lado esquerdo do peito de um familiar sentado e a outra ponta do tubo ao teu ouvido.\nConta os batimentos durante 15 segundos e multiplica por 4. Repete depois de ele saltar 1 minuto.\nVerifica: mede também no pulso, com dois dedos; os valores devem ser parecidos. Depois do exercício, o número sobe. O «tum-tá» que ouves é o som das válvulas do coração a fechar.", xp:20}
    ],
    resumo:[
      "O <b>coração</b> é o órgão que bombeia o sangue por todo o corpo; tem quatro cavidades: duas aurículas e dois <b>ventrículos</b>.",
      "As <b>artérias</b> transportam o sangue do coração para o resto do corpo; as <b>veias</b> trazem o sangue de volta ao coração.",
      "Os <b>capilares</b> são vasos sanguíneos muito finos, onde ocorrem as trocas entre o sangue e as células do corpo.",
      "O sangue é constituído pelo <b>plasma</b> (a parte líquida) e por células: <b>glóbulos vermelhos</b> (transportam oxigénio), <b>glóbulos brancos</b> (defendem o corpo) e <b>plaquetas</b> (ajudam a coagulação do sangue).",
      "A <b>frequência cardíaca</b> é o número de batimentos do coração por minuto — aumenta com o exercício físico e é um dos <b>sinais vitais</b> do corpo.",
      "Hábitos saudáveis — exercício físico, alimentação equilibrada, não fumar — ajudam a manter o sistema circulatório saudável e a prevenir doenças cardiovasculares."
    ],
    gloss:[
      ["coração","O órgão muscular que bombeia o sangue por todo o corpo."],
      ["ventrículos","As duas cavidades inferiores do coração, que bombeiam o sangue para fora dele."],
      ["artérias","Vasos sanguíneos que transportam o sangue do coração para o resto do corpo."],
      ["veias","Vasos sanguíneos que transportam o sangue de volta ao coração."],
      ["capilares","Vasos sanguíneos muito finos, onde ocorrem as trocas entre o sangue e as células."],
      ["plasma","A parte líquida do sangue, onde circulam as células sanguíneas e outras substâncias."],
      ["glóbulos vermelhos","Células do sangue responsáveis por transportar o oxigénio."],
      ["glóbulos brancos","Células do sangue responsáveis por defender o corpo de infeções."],
      ["plaquetas","Fragmentos de células do sangue que ajudam na coagulação do sangue."],
      ["frequência cardíaca","O número de batimentos do coração por minuto."],
      ["sinais vitais","Medidas básicas do funcionamento do corpo, como a frequência cardíaca e a tensão arterial."]
    ],
    quiz:[
      {q:"Quantas cavidades tem o coração humano?", opts:["Quatro","Duas","Três","Seis"], correct:0, explain:"O coração humano tem quatro cavidades: duas aurículas e dois ventrículos."},
      {q:"Qual é a função das artérias?", opts:["Transportar sangue do coração para o resto do corpo","Transportar sangue de volta ao coração","Produzir glóbulos vermelhos","Filtrar o sangue"], correct:0, explain:"As artérias transportam o sangue do coração para o resto do corpo."},
      {q:"Qual é a função das veias?", opts:["Transportar sangue de volta ao coração","Transportar sangue do coração para o corpo","Bombear o sangue","Produzir plaquetas"], correct:0, explain:"As veias trazem o sangue de volta ao coração."},
      {q:"Onde ocorrem as trocas entre o sangue e as células do corpo?", opts:["Nos capilares","No coração","Nas artérias principais","Nas veias principais"], correct:0, explain:"Os capilares são vasos muito finos onde ocorrem as trocas entre o sangue e as células."},
      {q:"Como se chama a parte líquida do sangue?", opts:["Plasma","Glóbulos vermelhos","Glóbulos brancos","Plaquetas"], correct:0, explain:"O plasma é a parte líquida do sangue."},
      {q:"Que célula do sangue transporta oxigénio?", opts:["Glóbulos vermelhos","Glóbulos brancos","Plaquetas","Plasma"], correct:0, explain:"Os glóbulos vermelhos transportam o oxigénio pelo corpo."},
      {q:"Que célula do sangue defende o corpo de infeções?", opts:["Glóbulos brancos","Glóbulos vermelhos","Plaquetas","Plasma"], correct:0, explain:"Os glóbulos brancos defendem o corpo de infeções."},
      {q:"Para que servem as plaquetas?", opts:["Para ajudar na coagulação do sangue","Para transportar oxigénio","Para defender o corpo de infeções","Para digerir alimentos"], correct:0, explain:"As plaquetas ajudam o sangue a coagular, por exemplo quando há um corte."},
      {q:"O que é a frequência cardíaca?", opts:["O número de batimentos do coração por minuto","A quantidade de sangue no corpo","O tamanho do coração","A pressão nas artérias"], correct:0, explain:"A frequência cardíaca é o número de batimentos do coração por minuto."},
      {q:"Qual destes hábitos ajuda a manter o sistema circulatório saudável?", opts:["Praticar exercício físico regularmente","Fumar","Comer em excesso gorduras","Dormir muito pouco"], correct:0, explain:"O exercício físico regular é um hábito saudável para o sistema circulatório."}
    ],
    compare:{
      left:{title:"🔴 Artérias", points:["Levam sangue do coração para o corpo","Paredes mais espessas e elásticas","Geralmente sangue rico em oxigénio"]},
      right:{title:"🔵 Veias", points:["Trazem sangue de volta ao coração","Paredes mais finas, com válvulas","Geralmente sangue pobre em oxigénio"]}
    },
    boss:"Ficha de avaliação — Manual 1: Resumo pág. 124 · Avaliação pág. 125"
  },
  {
    id:"c5", num:5, c:"m5", icon:"💧",
    title:"Sistema de Limpeza: Excreção",
    subtitle:"Pele e sistema urinário", pages:"Manual 2, págs. 6–25",
    lead:"Tal como um servidor precisa de limpar o lixo acumulado para não encravar, o corpo tem sistemas de limpeza: a pele e o sistema urinário, que eliminam substâncias que já não servem.",
    missions:[
      {t:"A Pele, Órgão de Limpeza", d:"Estrutura básica da pele e função do suor", f:"Observar a pele depois de um exercício e descrever o que acontece", xp:10},
      {t:"Mapa do Sistema Urinário", d:"Rins, ureteres, bexiga e uretra", f:"Desenhar o percurso da urina, dos rins à saída do corpo", xp:10},
      {t:"O Que é a Urina", d:"Composição básica da urina", f:"Pesquisar porque é que a urina muda de cor com a hidratação", xp:10},
      {t:"Cuidar da Pele e do Sistema Urinário", d:"Higiene da pele e hábitos saudáveis", f:"Criar 3 regras de cuidado com a pele e o sistema urinário", xp:15}
    ],
    resumo:[
      "A <b>pele</b> é o maior órgão do corpo humano e também é um órgão excretor: elimina substâncias através do <b>suor</b>, produzido pelas <b>glândulas sudoríparas</b>.",
      "O suor ajuda também a regular a temperatura do corpo — quando evapora, refresca a pele.",
      "O <b>sistema urinário</b> é constituído pelos rins, pelos ureteres, pela bexiga e pela uretra.",
      "Os <b>rins</b> filtram o sangue, retirando substâncias que o corpo já não precisa, e produzem a <b>urina</b>.",
      "A urina percorre os <b>ureteres</b> até à <b>bexiga</b>, onde é armazenada, saindo do corpo pela <b>uretra</b>.",
      "Beber água suficiente e ter hábitos de higiene da pele ajudam o corpo a eliminar substâncias em excesso de forma saudável."
    ],
    gloss:[
      ["pele","O maior órgão do corpo humano, que também elimina substâncias através do suor."],
      ["suor","O líquido produzido pelas glândulas sudoríparas, que ajuda a eliminar substâncias e a regular a temperatura do corpo."],
      ["glândulas sudoríparas","As glândulas da pele que produzem o suor."],
      ["sistema urinário","O conjunto de órgãos — rins, ureteres, bexiga e uretra — responsável por produzir e eliminar a urina."],
      ["rins","Os órgãos que filtram o sangue e produzem a urina."],
      ["urina","O líquido produzido pelos rins, com água e substâncias que o corpo precisa de eliminar."],
      ["ureteres","Os tubos que levam a urina dos rins até à bexiga."],
      ["bexiga","O órgão onde a urina é armazenada antes de sair do corpo."],
      ["uretra","O canal por onde a urina sai do corpo."]
    ],
    quiz:[
      {q:"Qual é o maior órgão do corpo humano?", opts:["A pele","Os rins","O coração","Os pulmões"], correct:0, explain:"A pele é o maior órgão do corpo humano."},
      {q:"O que são as glândulas sudoríparas?", opts:["As glândulas da pele que produzem o suor","As glândulas que produzem saliva","As glândulas que produzem hormonas","As glândulas que produzem lágrimas"], correct:0, explain:"As glândulas sudoríparas, na pele, produzem o suor."},
      {q:"Além de eliminar substâncias, que outra função importante tem o suor?", opts:["Ajudar a regular a temperatura do corpo","Digerir alimentos","Transportar oxigénio","Produzir energia"], correct:0, explain:"Quando o suor evapora, ajuda a refrescar e a regular a temperatura do corpo."},
      {q:"Quais são os órgãos do sistema urinário, do início ao fim do percurso da urina?", opts:["Rins, ureteres, bexiga, uretra","Bexiga, rins, uretra, ureteres","Uretra, bexiga, ureteres, rins","Rins, bexiga, ureteres, uretra"], correct:0, explain:"A urina é produzida nos rins, passa pelos ureteres, é armazenada na bexiga e sai pela uretra."},
      {q:"Qual é a função dos rins?", opts:["Filtrar o sangue e produzir urina","Bombear o sangue pelo corpo","Digerir os alimentos","Trocar gases com o ar"], correct:0, explain:"Os rins filtram o sangue, retirando substâncias que o corpo não precisa, e produzem a urina."},
      {q:"Onde é armazenada a urina antes de sair do corpo?", opts:["Na bexiga","Nos rins","Nos ureteres","Nos pulmões"], correct:0, explain:"A bexiga armazena a urina antes de ela sair do corpo."},
      {q:"Por onde sai a urina do corpo?", opts:["Pela uretra","Pelos ureteres","Pela bexiga","Pelos rins"], correct:0, explain:"A uretra é o canal por onde a urina sai do corpo."},
      {q:"O que é, basicamente, a urina?", opts:["Água com substâncias que o corpo precisa eliminar","Só água pura","Só sangue filtrado","Suor concentrado"], correct:0, explain:"A urina é composta por água e por substâncias que o corpo elimina, filtradas pelos rins."},
      {q:"O que ajuda os rins a funcionar bem?", opts:["Beber água suficiente","Comer muito sal em excesso","Dormir muito pouco","Evitar beber água"], correct:0, explain:"Beber água suficiente ajuda os rins a filtrar bem o sangue e a produzir urina."},
      {q:"Além dos rins, que outro órgão tem também função excretora?", opts:["A pele","O coração","O estômago","Os ossos"], correct:0, explain:"A pele também é um órgão excretor, eliminando substâncias através do suor."}
    ],
    compare:{
      left:{title:"🧴 Pele", points:["Elimina substâncias através do suor","Ajuda a regular a temperatura do corpo","É o maior órgão do corpo"]},
      right:{title:"💧 Rins", points:["Filtram o sangue","Produzem a urina","Fazem parte do sistema urinário"]}
    },
    boss:"Ficha de avaliação — Manual 2: Resumo pág. 23 · Avaliação pág. 24"
  },
  {
    id:"c6", num:6, c:"m6", icon:"🌱",
    title:"A Fábrica de Energia Verde: Fotossíntese",
    subtitle:"Fotossíntese e o mundo das plantas", pages:"Manual 2, págs. 52–104",
    lead:"As plantas são como jogadores que craftam a própria comida a partir de luz solar, água e dióxido de carbono — um processo chamado fotossíntese.",
    missions:[
      {t:"A Receita da Fotossíntese", d:"Fatores necessários à fotossíntese e produtos obtidos", f:"Desenhar a \"receita\" da fotossíntese, com os ingredientes e os produtos", xp:10},
      {t:"Porque Precisamos das Florestas", d:"Importância da fotossíntese e conservação das florestas", f:"Pesquisar e escrever 3 razões para conservar as florestas", xp:10},
      {t:"A Flor e os Seus Visitantes", d:"Estrutura da flor e polinização", f:"Desenhar uma flor e legendar as suas partes principais", xp:10},
      {t:"Viagem das Sementes", d:"Dispersão de sementes", f:"Identificar 3 formas de dispersão de sementes em plantas que conheças", xp:15},
      {t:"🛠️ Desafio de Engenheiro: Estufa de Garrafa", d:"A luz e a fotossíntese, com um teste justo", f:"Faz duas estufas iguais com garrafas cortadas por um adulto: algodão húmido e 4 feijões em cada uma. Põe uma num sítio com luz e a outra dentro de um armário. Dá sempre a mesma água às duas. Só muda uma coisa: a luz.\nRegista e desenha as plantas de 2 em 2 dias, durante 10 dias.\nVerifica: os feijões germinam nos dois sítios (usam as reservas da semente), mas no escuro as plantas ficam altas, finas e amareladas, sem a cor verde da clorofila. Sem luz não há fotossíntese, e quando as reservas acabam a planta não consegue fazer o seu alimento.", xp:20}
    ],
    resumo:[
      "A <b>fotossíntese</b> é o processo pelo qual as plantas produzem o seu próprio alimento (glicose), usando a luz, a água e o dióxido de carbono, com a ajuda da <b>clorofila</b> presente nas folhas.",
      "Como produto da fotossíntese, as plantas libertam oxigénio para o ar — essencial para a respiração da maioria dos seres vivos.",
      "Fatores como a quantidade de luz, de água e de dióxido de carbono, e a temperatura, influenciam a velocidade da fotossíntese.",
      "As florestas são fundamentais para a vida na Terra: produzem oxigénio, absorvem dióxido de carbono e são o habitat de muitas espécies — por isso é importante conservá-las.",
      "A <b>flor</b> é o órgão reprodutor de muitas plantas; tem partes como as pétalas, os <b>estames</b> (parte masculina) e o <b>pistilo</b> (parte feminina).",
      "A <b>polinização</b> é a transferência do pólen entre flores, muitas vezes feita por insetos, aves ou pelo vento, e é um passo necessário antes da formação de sementes e frutos.",
      "Depois da polinização e da fecundação, formam-se as sementes, que se podem dispersar pelo vento, pela água ou pelos animais — a <b>dispersão de sementes</b> — ajudando as plantas a colonizar novos locais."
    ],
    gloss:[
      ["fotossíntese","O processo pelo qual as plantas produzem o seu próprio alimento, usando luz, água e dióxido de carbono."],
      ["clorofila","A substância verde das folhas, essencial para captar a luz durante a fotossíntese."],
      ["flor","O órgão reprodutor de muitas plantas."],
      ["estames","A parte masculina da flor, que produz o pólen."],
      ["pistilo","A parte feminina da flor."],
      ["polinização","A transferência do pólen entre flores, feita por insetos, aves ou pelo vento."],
      ["dispersão de sementes","A forma como as sementes de uma planta se espalham para novos locais, pelo vento, pela água ou pelos animais."]
    ],
    quiz:[
      {q:"O que é a fotossíntese?", opts:["O processo pelo qual as plantas produzem o seu próprio alimento, usando luz, água e dióxido de carbono","Um tipo de respiração dos animais","A forma como as plantas digerem outros seres vivos","A forma como as plantas eliminam substâncias"], correct:0, explain:"A fotossíntese é o processo pelo qual as plantas produzem o seu alimento a partir de luz, água e dióxido de carbono."},
      {q:"Que substância, presente nas folhas, é essencial para a fotossíntese?", opts:["A clorofila","A glicose","O oxigénio","A água apenas"], correct:0, explain:"A clorofila, de cor verde, é essencial para captar a luz na fotossíntese."},
      {q:"Que gás as plantas libertam para o ar como produto da fotossíntese?", opts:["Oxigénio","Dióxido de carbono","Azoto","Hidrogénio"], correct:0, explain:"O oxigénio é libertado para o ar como produto da fotossíntese."},
      {q:"Qual destes fatores influencia a velocidade da fotossíntese?", opts:["A quantidade de luz disponível","A cor do vaso da planta","O tamanho do vaso","O dia da semana"], correct:0, explain:"A quantidade de luz, água, dióxido de carbono e a temperatura influenciam a velocidade da fotossíntese."},
      {q:"Porque são importantes as florestas para a vida na Terra?", opts:["Produzem oxigénio e absorvem dióxido de carbono","Servem só para dar sombra","Não têm importância para a vida na Terra","Servem apenas para produzir madeira"], correct:0, explain:"As florestas produzem oxigénio, absorvem dióxido de carbono e são habitat de muitas espécies."},
      {q:"Qual é o órgão reprodutor de muitas plantas?", opts:["A flor","A raiz","O caule","A folha"], correct:0, explain:"A flor é o órgão reprodutor de muitas plantas."},
      {q:"O que é a polinização?", opts:["A transferência do pólen entre flores","A absorção de água pela raiz","A queda das folhas no outono","A formação de novas raízes"], correct:0, explain:"A polinização é a transferência do pólen entre flores, necessária antes da formação de sementes."},
      {q:"Quem pode fazer a polinização de uma flor?", opts:["Insetos, aves ou o vento","Apenas os seres humanos","Apenas a chuva","Apenas a terra"], correct:0, explain:"A polinização pode ser feita por insetos, aves ou pelo vento, entre outros agentes."},
      {q:"O que é a dispersão de sementes?", opts:["A forma como as sementes se espalham para novos locais","A forma como a planta bebe água","O crescimento da raiz da planta","A queda das folhas no outono"], correct:0, explain:"A dispersão de sementes é a forma como as sementes se espalham para novos locais, pelo vento, água ou animais."},
      {q:"Qual destas partes da flor é a parte masculina?", opts:["Os estames","O pistilo","As pétalas","A sépala"], correct:0, explain:"Os estames são a parte masculina da flor, produzindo o pólen; o pistilo é a parte feminina."}
    ],
    compare:{
      left:{title:"☀️ Mais fotossíntese", points:["Luz suficiente (até certo ponto)","Dióxido de carbono disponível","Temperatura adequada"]},
      right:{title:"🌑 Menos fotossíntese", points:["Pouca luz","Falta de água","Temperaturas muito baixas ou muito altas"]}
    },
    boss:"Ficha de avaliação — Manual 2: Resumos págs. 77 e 103 · Avaliações págs. 78 e 104"
  },
  {
    id:"c7", num:7, c:"m7", icon:"🌸",
    title:"Atualização do Personagem: Puberdade e Reprodução",
    subtitle:"Caracteres sexuais, puberdade e reprodução humana", pages:"Manual 2, págs. 26–49",
    lead:"Tal como um personagem recebe uma grande atualização ao subir de nível, o corpo humano passa por uma grande atualização na puberdade — ligada à capacidade de reprodução.",
    missions:[
      {t:"O Que é a Puberdade", d:"Puberdade como fase de transição e caracteres sexuais secundários", f:"Listar 3 mudanças comuns na puberdade (sem serem específicas de um só género)", xp:10},
      {t:"Órgãos Reprodutores", d:"Órgãos reprodutores masculinos e femininos, de forma simples e objetiva", f:"Desenhar e legendar, de forma simples, os órgãos reprodutores masculino e feminino", xp:10},
      {t:"O Ciclo Menstrual", d:"Ciclo menstrual, explicado de forma científica e objetiva", f:"Fazer um pequeno esquema do ciclo menstrual (duração aproximada e fases principais)", xp:10},
      {t:"Fecundação e Gravidez", d:"Fecundação, implantação e gravidez", f:"Resumir, em 3 frases, o que acontece entre a fecundação e o nascimento", xp:15}
    ],
    resumo:[
      "A <b>puberdade</b> é a fase em que o corpo de uma criança se transforma gradualmente no corpo de um adulto; começa normalmente entre os 8 e os 13 anos nas raparigas e entre os 9 e os 15 anos nos rapazes.",
      "Durante a puberdade, o corpo produz mais <b>hormonas</b>, substâncias que fazem o corpo crescer e desenvolver os <b>caracteres sexuais secundários</b> — como pelos ou mudanças na voz e no corpo.",
      "O sistema reprodutor feminino inclui os <b>ovários</b> (produzem os óvulos), o <b>útero</b> e a vagina; o sistema reprodutor masculino inclui os <b>testículos</b> (produzem os <b>espermatozoides</b>) e o pénis.",
      "O <b>ciclo menstrual</b> é um processo que se repete aproximadamente todos os meses no corpo feminino, a partir da puberdade: o revestimento do útero prepara-se para receber um óvulo fecundado; se isso não acontecer, esse revestimento sai do corpo durante a <b>menstruação</b>, que dura normalmente entre 2 e 7 dias.",
      "A <b>fecundação</b> acontece quando um espermatozoide se une a um <b>óvulo</b>, formando uma nova célula que se pode desenvolver num bebé, ao longo de cerca de 9 meses de <b>gravidez</b>."
    ],
    gloss:[
      ["puberdade","A fase em que o corpo de uma criança se transforma gradualmente no corpo de um adulto."],
      ["hormonas","Substâncias produzidas pelo corpo que ajudam a controlar o crescimento e outras funções, muito ativas na puberdade."],
      ["caracteres sexuais secundários","Mudanças físicas que aparecem na puberdade, como pelos ou alterações na voz e no corpo."],
      ["ovários","Os órgãos do sistema reprodutor feminino que produzem os óvulos."],
      ["útero","O órgão onde um bebé se pode desenvolver, no corpo feminino."],
      ["testículos","Os órgãos do sistema reprodutor masculino que produzem os espermatozoides."],
      ["espermatozoides","As células reprodutoras masculinas, produzidas nos testículos."],
      ["óvulo","A célula reprodutora feminina, produzida nos ovários."],
      ["ciclo menstrual","O processo que se repete aproximadamente todos os meses no corpo feminino, a partir da puberdade, preparando o útero para uma possível gravidez."],
      ["menstruação","A saída do revestimento do útero, quando não há fecundação, normalmente a cada mês."],
      ["menarca","A primeira menstruação, normalmente por volta dos 12 anos."],
      ["endométrio","A camada que reveste o útero por dentro; engrossa durante o ciclo e desprende-se na menstruação."],
      ["fase pré-ovulatória","Também chamada fase folicular: os dias entre a menstruação e a ovulação, em que um folículo amadurece no ovário e o endométrio engrossa."],
      ["ovulação","A libertação de um óvulo pelo ovário, por volta do 14.º dia de um ciclo de 28 dias."],
      ["fase pós-ovulatória","Também chamada fase lútea: os dias depois da ovulação, em que o corpo amarelo produz progesterona e o endométrio fica pronto para uma possível gravidez."],
      ["corpo amarelo","O que fica do folículo depois da ovulação (também chamado corpo lúteo); produz a hormona progesterona."],
      ["fecundação","A união de um espermatozoide com um óvulo, que pode dar origem a um bebé."],
      ["gravidez","O período de cerca de 9 meses em que um bebé se desenvolve no útero, depois da fecundação."]
    ],
    quiz:[
      {q:"O que é a puberdade?", opts:["A fase em que o corpo de uma criança se transforma gradualmente no corpo de um adulto","A fase em que se aprende a andar","A fase em que se nasce","A fase da velhice"], correct:0, explain:"A puberdade é a fase de transição do corpo de criança para o corpo de adulto."},
      {q:"O que são hormonas?", opts:["Substâncias produzidas pelo corpo que ajudam a controlar o crescimento e outras funções","Um tipo de células sanguíneas","Um tipo de ossos","Um tipo de músculos"], correct:0, explain:"As hormonas são substâncias produzidas pelo corpo, muito ativas durante a puberdade."},
      {q:"Que órgãos fazem parte do sistema reprodutor feminino?", opts:["Ovários, útero e vagina","Testículos e pénis","Pulmões e coração","Rins e bexiga"], correct:0, explain:"O sistema reprodutor feminino inclui os ovários, o útero e a vagina."},
      {q:"Que órgãos fazem parte do sistema reprodutor masculino?", opts:["Testículos e pénis","Ovários e útero","Rins e bexiga","Pulmões e coração"], correct:0, explain:"O sistema reprodutor masculino inclui os testículos e o pénis."},
      {q:"O que produzem os ovários?", opts:["Óvulos","Espermatozoides","Urina","Suor"], correct:0, explain:"Os ovários produzem os óvulos, as células reprodutoras femininas."},
      {q:"O que produzem os testículos?", opts:["Espermatozoides","Óvulos","Urina","Suor"], correct:0, explain:"Os testículos produzem os espermatozoides, as células reprodutoras masculinas."},
      {q:"O que é a menstruação?", opts:["A saída do revestimento do útero, quando não há fecundação, normalmente a cada mês","A produção de espermatozoides","A produção de suor","A digestão dos alimentos"], correct:0, explain:"A menstruação é a saída do revestimento do útero, quando não ocorre fecundação."},
      {q:"O que é a fecundação?", opts:["A união de um espermatozoide com um óvulo","A união de duas células da pele","A digestão de um alimento","A produção de hormonas"], correct:0, explain:"A fecundação é a união de um espermatozoide com um óvulo, que pode originar um bebé."},
      {q:"Aproximadamente quanto tempo dura uma gravidez humana?", opts:["Cerca de 9 meses","Cerca de 1 mês","Cerca de 2 anos","Cerca de 1 semana"], correct:0, explain:"Uma gravidez humana dura aproximadamente 9 meses."},
      {q:"Entre que idades começa normalmente a puberdade nas raparigas, segundo fontes de saúde?", opts:["Entre os 8 e os 13 anos","Entre os 20 e os 25 anos","Entre os 2 e os 4 anos","Entre os 40 e os 50 anos"], correct:0, explain:"A puberdade começa normalmente entre os 8 e os 13 anos nas raparigas, e entre os 9 e os 15 anos nos rapazes."}
    ],
    compare:{
      left:{title:"♀️ Sistema reprodutor feminino", points:["Ovários — produzem óvulos","Útero — onde um bebé se pode desenvolver","Ciclo menstrual mensal, a partir da puberdade"]},
      right:{title:"♂️ Sistema reprodutor masculino", points:["Testículos — produzem espermatozoides","Produção contínua de espermatozoides, a partir da puberdade","Sem ciclo mensal equivalente"]}
    },
    boss:"Ficha de avaliação — Manual 2: Resumo pág. 48 · Avaliação pág. 49"
  },
  {
    id:"c8", num:8, c:"m8", icon:"🦠",
    title:"Vírus de Servidor: Microrganismos e Defesas do Corpo",
    subtitle:"Microrganismos, doenças e defesas do corpo", pages:"Manual 2, págs. 108–126",
    lead:"Tal como um servidor pode ter vírus e precisa de anti-vírus e firewalls, o corpo humano é invadido por microrganismos e tem as suas próprias defesas.",
    missions:[
      {t:"O Mundo Invisível", d:"História da descoberta dos microrganismos", f:"Pesquisar quem descobriu os microrganismos e quando, graças ao microscópio", xp:10},
      {t:"Bons e Maus Microrganismos", d:"Microrganismos úteis vs. patogénicos", f:"Listar 3 microrganismos úteis e 3 que causam doenças", xp:10},
      {t:"As Defesas Naturais do Corpo", d:"Barreiras naturais e sistema imunitário", f:"Descrever 3 barreiras naturais do corpo contra microrganismos", xp:10},
      {t:"Vacinas e Antibióticos", d:"Importância das vacinas e dos antibióticos", f:"Pesquisar porque é que as vacinas ajudam a prevenir doenças", xp:15}
    ],
    resumo:[
      "Os <b>microrganismos</b> são seres vivos tão pequenos que só se veem ao microscópio; foram observados pela primeira vez no século XVII, graças ao <b>microscópio</b>.",
      "Nem todos os microrganismos são prejudiciais: alguns são úteis (ex.: bactérias usadas para fazer iogurte), enquanto outros são <b>patogénicos</b> — causam doenças (ex.: o vírus da gripe).",
      "O corpo tem <b>barreiras naturais</b> contra microrganismos: a pele, as <b>mucosas</b> (como as do nariz) e substâncias como as lágrimas e a saliva.",
      "O <b>sistema imunitário</b> é o conjunto de defesas do corpo que combate os microrganismos que conseguem entrar.",
      "As <b>vacinas</b> ajudam o corpo a \"aprender\" a defender-se de uma doença antes de a contrair; os <b>antibióticos</b> tratam infeções causadas por bactérias — mas não funcionam contra vírus.",
      "Medidas simples de higiene, como lavar as mãos, ajudam a prevenir a transmissão de doenças causadas por microrganismos."
    ],
    gloss:[
      ["microrganismos","Seres vivos tão pequenos que só se veem ao microscópio."],
      ["microscópio","O instrumento que permite ver os microrganismos, invisíveis a olho nu."],
      ["patogénico","Que causa doenças."],
      ["barreiras naturais","As defesas do corpo contra microrganismos, como a pele e as mucosas."],
      ["mucosas","Tecidos húmidos que revestem partes do corpo, como o interior do nariz, e ajudam a bloquear microrganismos."],
      ["sistema imunitário","O conjunto de defesas do corpo que combate os microrganismos que conseguem entrar."],
      ["vacina","Uma substância que ajuda o corpo a aprender a defender-se de uma doença antes de a contrair."],
      ["antibiótico","Um medicamento que trata infeções causadas por bactérias, mas não por vírus."]
    ],
    quiz:[
      {q:"O que são microrganismos?", opts:["Seres vivos tão pequenos que só se veem ao microscópio","Animais de grande porte","Plantas muito altas","Tipos de rochas"], correct:0, explain:"Os microrganismos são seres vivos tão pequenos que só podem ser vistos ao microscópio."},
      {q:"Que invento permitiu descobrir os microrganismos?", opts:["O microscópio","O telescópio","A lupa apenas","O microfone"], correct:0, explain:"O microscópio permitiu observar os microrganismos pela primeira vez, no século XVII."},
      {q:"O que significa um microrganismo ser \"patogénico\"?", opts:["Causa doenças","É útil para fazer iogurte","É invisível a olho nu","Vive apenas na água"], correct:0, explain:"\"Patogénico\" significa que o microrganismo causa doenças."},
      {q:"Qual destes é um exemplo de microrganismo útil?", opts:["Bactérias usadas para fazer iogurte","O vírus da gripe","A bactéria da tuberculose","Nenhum microrganismo é útil"], correct:0, explain:"Algumas bactérias são úteis, por exemplo na produção de iogurte."},
      {q:"Qual destas é uma barreira natural do corpo contra microrganismos?", opts:["A pele","O coração","Os ossos","Os músculos"], correct:0, explain:"A pele é uma barreira natural importante contra a entrada de microrganismos."},
      {q:"O que é o sistema imunitário?", opts:["O conjunto de defesas do corpo contra microrganismos","O conjunto de ossos do corpo","O conjunto de músculos do corpo","O conjunto de veias do corpo"], correct:0, explain:"O sistema imunitário é o conjunto de defesas do corpo que combate microrganismos."},
      {q:"Como ajudam as vacinas o corpo?", opts:["Ajudam o corpo a aprender a defender-se de uma doença antes de a contrair","Curam todas as doenças instantaneamente","Substituem a necessidade de higiene","Não têm qualquer efeito no corpo"], correct:0, explain:"As vacinas ajudam o corpo a preparar as suas defesas contra uma doença, antes de a contrair."},
      {q:"Para que servem os antibióticos?", opts:["Para tratar infeções causadas por bactérias","Para tratar infeções causadas por vírus","Para substituir as vacinas","Para prevenir todas as doenças"], correct:0, explain:"Os antibióticos tratam infeções causadas por bactérias."},
      {q:"Os antibióticos são eficazes contra vírus?", opts:["Não, os antibióticos não são eficazes contra vírus","Sim, sempre","Só contra alguns vírus específicos","Apenas em crianças"], correct:0, explain:"Os antibióticos combatem bactérias, não vírus."},
      {q:"Que hábito simples ajuda a prevenir a transmissão de microrganismos?", opts:["Lavar as mãos","Dormir muito pouco","Não beber água","Comer muito açúcar"], correct:0, explain:"Lavar as mãos é um hábito simples e eficaz para prevenir a transmissão de microrganismos."}
    ],
    compare:{
      left:{title:"🦠 Microrganismos úteis", points:["Ex.: bactérias do iogurte","Ajudam processos como a fermentação","Não causam doenças"]},
      right:{title:"🤒 Microrganismos patogénicos", points:["Ex.: vírus da gripe","Podem causar doenças","O corpo defende-se deles com barreiras e o sistema imunitário"]}
    },
    boss:"Ficha de avaliação — Manual 2: Resumo pág. 125 · Avaliação pág. 126"
  },
  {
    id:"c9", num:9, c:"m4", icon:"🩹",
    title:"Missão Salvar Vidas: Primeiros Socorros",
    subtitle:"O que fazer numa emergência — serve para todas as idades", pages:"Extra (não faz parte do manual)",
    lead:"Num jogo, quando uma personagem perde vida, há sempre um kit de cura. Na vida real, o «kit» és tu: saber o que fazer nos primeiros minutos pode salvar uma vida. E a primeira regra é simples — pedir ajuda.",
    missions:[
      {t:"A Chamada que Salva", d:"Ligar 112 e o que dizer", f:"Com um adulto, treina uma chamada a fingir: diz ONDE estás, O QUE aconteceu, QUEM precisa de ajuda e QUANTAS pessoas", xp:10},
      {t:"Posição Lateral de Segurança", d:"PLS, passo a passo", f:"Vê primeiro a animação da PLS até ao fim.\nCom um adulto, pratica num familiar deitado de costas (a fingir, com cuidado): braço do teu lado em ângulo reto, a outra mão encostada à face, joelho do lado de lá dobrado.\nRoda-o na tua direção, puxando pelo joelho.\nVerifica: a pessoa ficou de lado, sem rolar, com a perna de cima dobrada, a mão debaixo da face e a cabeça inclinada para trás, de boca virada para o chão.", xp:15},
      {t:"O Kit de Primeiros Socorros", d:"O material essencial", f:"Verifica com um adulto o kit de casa: compressas, pensos, ligaduras, luvas, tesoura de pontas redondas e soro fisiológico. Falta alguma coisa?", xp:10},
      {t:"Cartaz dos Números de Emergência", d:"112, SNS 24 e Centro Antivenenos", f:"Faz um cartaz para pôr junto ao telefone ou no frigorífico com 112, 808 24 24 24 e 800 250 250", xp:10}
    ],
    resumo:[
      "Numa emergência, primeiro a <b>segurança</b>: vê se não há perigo para ti (trânsito, fogo, eletricidade). Depois <b>pede ajuda</b>: chama um adulto e liga <b>112</b>.",
      "O <b>112</b> é o número europeu de emergência: é gratuito e funciona mesmo sem saldo. Diz <b>onde</b> estás, <b>o que</b> aconteceu, <b>quem</b> precisa de ajuda e <b>quantas</b> pessoas. Responde às perguntas e só desliga quando te disserem.",
      "<b>Hemorragia</b> (muito sangue a sair de uma ferida): carrega na ferida com força, com uma <b>compressa</b> ou um pano limpo, sem largar. Num corte pequeno: lavar com água e sabão (ou soro) e tapar com um penso.",
      "<b>Queimadura</b>: arrefecer o mais depressa possível com água corrente fresca (não gelada) durante pelo menos <b>10 minutos</b>, de preferência <b>20</b>. Tirar anéis, relógios e roupa apertada da zona, se não estiverem colados à pele. Depois tapar <b>sem apertar</b> com película aderente ou uma compressa limpa. Nunca pôr gelo, manteiga nem pasta de dentes, e não rebentar as bolhas.",
      "<b>Sangue do nariz</b>: sentar, inclinar a cabeça para a <b>frente</b> e apertar a parte mole do nariz durante <b>10 a 15 minutos</b>, sem largar. Se não parar ao fim de 15 minutos de pressão contínua, procurar ajuda médica. <b>Engasgamento</b>: se a pessoa consegue tossir, deve continuar a tossir. Se não consegue tossir, falar nem respirar: dá até <b>5 pancadas</b> com a base da mão entre as omoplatas e, se não resultar, até <b>5 compressões abdominais</b>; vai alternando e liga 112. Nunca se metem os dedos às cegas na boca.",
      "Se alguém está <b>inconsciente</b> mas <b>respira normalmente</b>, põe-se em <b>posição lateral de segurança</b> e liga-se 112. De lado, a língua não cai para trás a tapar a garganta e, se a pessoa vomitar, o vómito sai pela boca em vez de ir para os pulmões. Roda-se a pessoa na tua direção, para controlares o movimento; qualquer lado do corpo serve, mas uma grávida fica do lado esquerdo e nunca se deita a pessoa por cima de uma ferida. <b>Exceção</b>: se caiu de uma altura ou teve um acidente (pode ter uma lesão na coluna), não a mexas e liga 112.",
      "Atenção à <b>respiração agónica</b>: uns «soluços» ou suspiros raros, lentos e ruidosos <b>não</b> são respirar normalmente. É sinal de paragem cardíaca: liga-se 112 (em alta-voz) e começa-se o <b>suporte básico de vida</b>: compressões no centro do peito, fortes e rápidas (100 a 120 por minuto), sem parar, até chegar ajuda ou um <b>DAE</b>. O operador do 112 ensina como.",
      "<b>AVC</b> (acidente vascular cerebral): lembra-te dos <b>3 F</b> — <b>Face</b> (a boca fica de lado), <b>Força</b> (um braço não se levanta), <b>Fala</b> (a fala fica enrolada). Se vires um destes sinais, liga <b>112</b> logo: cada minuto conta.",
      "<b>Açúcar baixo</b> (hipoglicemia), por exemplo num colega com diabetes: tremores, suores, palidez, confusão. Se está acordado e consegue engolir, dá-se açúcar (um sumo de fruta, um pacote de açúcar ou 15 a 20 g de glicose) e chama-se um adulto; se não melhorar em 15 minutos, repete-se e liga-se 112. Se não consegue engolir, não se dá nada pela boca: 112.",
      "<b>Alergia grave</b> (anafilaxia): lábios ou cara inchados, falta de ar, manchas na pele depois de um alimento ou de uma picada. Liga-se 112 e ajuda-se a pessoa a usar a sua <b>caneta de adrenalina</b> (autoinjetor) na parte de fora da coxa. Se não melhorar em 5 minutos, usa-se uma segunda caneta, se existir.",
      "<b>Convulsão</b> (ataque epilético): afastar objetos, proteger a cabeça com algo mole, <b>não</b> segurar a pessoa e <b>não</b> lhe pôr nada na boca. Contar o tempo: se durar mais de 5 minutos, ou se for a primeira vez, liga-se 112. Quando acabar, se respira normalmente, põe-se em posição lateral de segurança."
    ],
    gloss:[
      ["112","O número europeu de emergência: gratuito, funciona em toda a União Europeia, mesmo sem saldo."],
      ["primeiros socorros","A ajuda dada a uma pessoa ferida ou doente nos primeiros minutos, até chegar ajuda especializada."],
      ["hemorragia","Saída de sangue de um vaso sanguíneo, por exemplo numa ferida."],
      ["compressa","Um pedaço de gaze esterilizada, usado para limpar ou tapar feridas."],
      ["posição lateral de segurança","PLS: deitar de lado uma pessoa inconsciente que respira, para manter as vias respiratórias abertas e deixar sair o vómito."],
      ["engasgamento","Quando algo fica preso na garganta e impede a passagem do ar."],
      ["suporte básico de vida","SBV: compressões no peito (e respirações) que mantêm o sangue a circular quando o coração para, até chegar ajuda."],
      ["DAE","Desfibrilhador automático externo: aparelho que analisa o coração e, se for preciso, dá um choque. Fala e diz o que fazer."],
      ["SNS 24","Linha de saúde do Serviço Nacional de Saúde (808 24 24 24), para dúvidas e situações que não são emergência."],
      ["Centro Antivenenos","O Centro de Informação Antivenenos do INEM (800 250 250), para quando alguém engole ou toca em algo tóxico."],
      ["respiração agónica","Respirações raras, lentas e ruidosas, como soluços, que aparecem numa paragem cardíaca. Não contam como respirar normalmente."],
      ["AVC","Acidente vascular cerebral: uma parte do cérebro deixa de receber sangue. Sinais: os 3 F (Face, Força, Fala). Liga-se 112 logo."],
      ["hipoglicemia","Açúcar baixo no sangue: tremores, suores, confusão. Se a pessoa consegue engolir, dá-se açúcar."],
      ["anafilaxia","Reação alérgica grave, com inchaço e falta de ar. Trata-se com adrenalina (caneta) e 112."],
      ["convulsão","Movimentos involuntários de todo o corpo, por exemplo num ataque epilético. Protege-se a cabeça e não se segura a pessoa."]
    ],
    quiz:[
      {q:"Qual é o número europeu de emergência?", opts:["112","115","911","808 24 24 24"], correct:0, explain:"O 112 é gratuito e funciona em todos os países da União Europeia. O 911 é o dos Estados Unidos."},
      {q:"Antes de ajudar alguém, o que deves verificar primeiro?", opts:["Se há algum perigo para ti","Que horas são","Se a pessoa é tua conhecida","Nada, ajuda-se logo"], correct:0, explain:"Primeiro a segurança: um socorrista ferido não ajuda ninguém."},
      {q:"Ao ligar para o 112, o que deves dizer?", opts:["Onde estás, o que aconteceu, quem e quantos precisam de ajuda","Só o teu nome","Nada — desligas logo","Que voltas a ligar mais tarde"], correct:0, explain:"Onde, o quê, quem e quantos — e só desligas quando o operador disser."},
      {q:"Queimaste a mão com água a ferver. O que fazes?", opts:["Pões a mão em água corrente fresca durante 20 minutos","Pões gelo diretamente","Pões manteiga","Pões pasta de dentes"], correct:0, explain:"A água corrente fresca durante 20 minutos arrefece a queimadura. Gelo, manteiga e pasta de dentes podem piorá-la."},
      {q:"Está a sair sangue do nariz. Como deves pôr a cabeça?", opts:["Inclinada para a frente, a apertar a parte mole do nariz","Inclinada para trás","Deitado de costas","De cabeça para baixo"], correct:0, explain:"Para a frente, para o sangue não ir para a garganta; aperta-se o nariz durante 10 minutos."},
      {q:"Uma ferida está a sangrar muito. O que fazes?", opts:["Carregas com força com uma compressa ou pano limpo e pedes ajuda","Deixas sangrar","Sopras para a ferida","Lavas com sumo de limão"], correct:0, explain:"A pressão direta e contínua é a forma de parar uma hemorragia."},
      {q:"Uma pessoa está inconsciente mas respira normalmente. O que se faz?", opts:["Posição lateral de segurança e ligar 112","Dar-lhe água","Sentá-la numa cadeira","Deixá-la sozinha a descansar"], correct:0, explain:"De lado, as vias respiratórias ficam abertas e o vómito pode sair da boca. Liga-se 112 e vigia-se."},
      {q:"Para que serve a posição lateral de segurança?", opts:["Manter as vias respiratórias abertas e deixar sair o vómito","Aquecer a pessoa","Ajudar a pessoa a dormir","Parar uma hemorragia"], correct:0, explain:"Uma pessoa inconsciente de costas pode sufocar com a língua ou com o vómito."},
      {q:"Um colega engasgou-se mas está a tossir com força. O que fazes?", opts:["Incentivas a continuar a tossir e ficas com ele","Dás-lhe logo pancadas nas costas","Dás-lhe água","Deitas-o no chão"], correct:0, explain:"A tosse é a melhor forma de desengasgar. Se deixar de conseguir tossir, falar ou respirar, liga-se 112."},
      {q:"O irmão mais novo bebeu lixívia. Que número pode ajudar?", opts:["Centro Antivenenos: 800 250 250 (e 112 se estiver mal)","808 24 24 24 apenas","Nenhum","O número da escola"], correct:0, explain:"O Centro de Informação Antivenenos funciona 24 horas. Se a pessoa estiver mal, liga-se 112. Não se deve provocar o vómito."},
      {q:"Uma pessoa caída não responde e faz uns «soluços» raros e ruidosos. Está a respirar normalmente?",opts:["Sim, por isso pões em posição lateral de segurança","Não: é respiração agónica, sinal de paragem cardíaca; liga 112 e começam-se as compressões","Sim, basta esperar","Não sei, por isso não faço nada"],correct:1,explain:"Respirações raras e ruidosas, como soluços, não são respirar normalmente. É uma paragem cardíaca: liga-se 112 em alta-voz e o operador ensina as compressões no peito."},
      {q:"A avó, de repente, fica com a boca ao lado e não consegue levantar um braço. O que fazes?",opts:["Esperas que passe","Dás-lhe um copo de água","Ligas 112 logo: são sinais de AVC (os 3 F: Face, Força, Fala)","Pões-lhe gelo na cabeça"],correct:2,explain:"Face, Força e Fala: qualquer um destes sinais pode ser um AVC. Liga-se 112 imediatamente: o tratamento funciona melhor nas primeiras horas."},
      {q:"Um colega com diabetes está a tremer, suado e confuso, mas acordado e consegue engolir. O que ajuda?",opts:["Dar-lhe açúcar (um sumo ou um pacote de açúcar) e chamar um adulto","Dar-lhe insulina","Deixá-lo dormir","Dar-lhe água sem açúcar"],correct:0,explain:"São sinais de açúcar baixo (hipoglicemia). Se consegue engolir, o açúcar ajuda em poucos minutos. Se não consegue engolir, não se dá nada pela boca e liga-se 112."},
      {q:"Um amigo está a ter uma convulsão. O que NÃO deves fazer?",opts:["Afastar objetos à volta","Proteger-lhe a cabeça com um casaco","Pôr-lhe alguma coisa na boca para não morder a língua","Contar o tempo que dura"],correct:2,explain:"Nunca se põe nada na boca nem se segura a pessoa: pode magoá-la e magoar-te. Protege-se a cabeça, conta-se o tempo e, se durar mais de 5 minutos, liga-se 112."}
    ],
    compare:{
      left:{title:"🩹 Pequenos problemas", points:["Um corte pequeno, um arranhão","Um pequeno galo ou uma entorse ligeira","Trata-se em casa, com um adulto","Dúvidas? SNS 24: 808 24 24 24"]},
      right:{title:"🚨 Emergências — liga 112", points:["Pessoa inconsciente ou que não respira","Hemorragia que não para","Engasgamento grave, queimadura grande","Dificuldade em respirar, dor forte no peito"]}
    },
    boss:"Não faz parte do manual escolar: consulta o 📘 Manual, treina as missões com um adulto e confirma no quiz o que já sabes"
  }
  ];
