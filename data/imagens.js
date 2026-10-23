/* Imagens reais ("📷 Ver de perto") de cada mundo.
   Vêm do Wikimedia Commons, do Smithsonian Open Access e da NASA, com licença livre (domínio público, CC0 ou Creative Commons) — o crédito e a licença
   aparecem por baixo de cada imagem, como as licenças exigem. As cores das imagens de microscópio eletrónico
   foram acrescentadas pelos cientistas (os eletrões não "veem" cores).
   Campos: f ficheiro · t título · d legenda · m "otico" | "eletronico" (imagem de microscópio) · cred autor · lic licença · src página original · fonte nome do site de origem (sem ele: Wikimedia Commons)
   il true = desenho nosso (SVG), marcado na galeria como ilustração; não tem src
   act atividade própria desta imagem (sem ela, app.js escolhe uma pelo tipo de imagem e pela disciplina) */
const LIC = {
  PD: ["Domínio público", ""],
  ORIG: ["ilustração original, livre para usar na escola", ""],
  CC0: ["CC0", "https://creativecommons.org/publicdomain/zero/1.0/"],
  BY20: ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"],
  BY25: ["CC BY 2.5", "https://creativecommons.org/licenses/by/2.5/"],
  BY30: ["CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/"],
  BY40: ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"],
  SA20: ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"],
  SA25: ["CC BY-SA 2.5", "https://creativecommons.org/licenses/by-sa/2.5/"],
  SA30: ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"],
  SA40: ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"]
};
const COMMONS = "https://commons.wikimedia.org/wiki/File:";

const MISSAO_IMAGENS = {
  /* ---------------- Ciências Naturais ---------------- */
  c1: [
    {f:"img/c1/alimentos-variados.jpg", t:"Uma mesa de alimentos variados",
      d:"Pão e cereais, fruta, hortícolas, peixe, carne, leguminosas e lacticínios. Uma alimentação equilibrada junta alimentos de todos os grupos da Roda dos Alimentos.",
      cred:"National Cancer Institute (EUA)", lic:"PD", src:COMMONS+"Good_Food_Display_-_NCI_Visuals_Online.jpg"},
    {f:"img/c1/banca-fruta.jpg", t:"Uma banca de fruta e legumes",
      d:"A fruta e os hortícolas são ricos em vitaminas, sais minerais e fibras — nutrientes reguladores. Juntos, deviam ser quase metade do que comemos.",
      cred:"Christine Matthews", lic:"SA20", src:COMMONS+"Fruit_and_Vegetable_Stall,_Borough_Market,_London_SE1_-_geograph.org.uk_-_4725647.jpg"}
  ],
  c2: [
    {f:"img/c2/vilosidades.jpg", t:"A parede do intestino delgado", m:"otico",
      d:"As «franjas» são as vilosidades intestinais. Aumentam muito a superfície do intestino, e por isso os nutrientes passam mais depressa para o sangue. As cores rosa e roxa vêm de corantes usados no laboratório.",
      cred:"Nephron", lic:"SA30", src:COMMONS+"Small_intestine_low_mag.jpg"}
  ],
  c4: [
    {f:"img/c4/arteria-corte.svg", t:"Corte de uma artéria", il:true,
      d:"Uma artéria cortada, vista de frente. A parede tem três camadas: a externa, que a protege; a média, a mais grossa, com músculo e fibras elásticas que aguentam a pressão do sangue que sai do coração; e a interna, fina e lisa. No meio fica o lúmen, por onde passa o sangue. Compara: as veias têm a parede muito mais fina.",
      cred:"Missão Escolar", lic:"ORIG"},
    {f:"img/c4/celulas-sangue.jpg", t:"Células do sangue", m:"eletronico",
      d:"Os discos achatados são glóbulos vermelhos (transportam o oxigénio); a célula redonda e rugosa é um glóbulo branco (defende o corpo); os pedacinhos pequenos são plaquetas (ajudam a coagular). Cada glóbulo vermelho mede cerca de 7 micrómetros — 0,007 mm.",
      cred:"Bruce Wetzel e Harry Schaefer, National Cancer Institute (EUA)", lic:"PD", src:COMMONS+"SEM_blood_cells.jpg"},
    {f:"img/c4/esfregaco-sangue.jpg", t:"Uma gota de sangue ao microscópio da escola", m:"otico",
      d:"É assim que se vê o sangue num microscópio ótico: milhares de glóbulos vermelhos, cor-de-rosa. Os glóbulos brancos são muito menos numerosos.",
      cred:"Nbnidhi", lic:"BY40", src:COMMONS+"Blood_smear.jpg"},
    {f:"img/c4/coracao-exterior.jpg", t:"O coração visto por fora", il:true,
      d:"O coração tem o tamanho aproximado de um punho fechado e é feito de músculo. Por cima saem e chegam os grandes vasos sanguíneos: a artéria aorta (o arco grande ao centro), que leva sangue a todo o corpo, e as veias cavas (à esquerda), que trazem o sangue de volta. As pequenas artérias vermelhas à superfície são as artérias coronárias: alimentam o próprio músculo do coração. Atenção: o coração está virado para ti, por isso o lado direito do coração aparece do lado esquerdo da imagem.",
      cred:"Patrick J. Lynch, ilustrador médico", lic:"BY25", src:COMMONS+"Heart_anterior_exterior_view.jpg"},
    {f:"img/c4/coracao-interior.jpg", t:"O coração por dentro: ventrículos e válvulas", il:true,
      d:"O coração aberto pela frente. À esquerda da imagem fica o ventrículo direito, que envia o sangue pobre em oxigénio para os pulmões; à direita, o ventrículo esquerdo, com a parede muito mais grossa, porque tem de empurrar o sangue rico em oxigénio para todo o corpo. As válvulas são como portas que só abrem num sentido; os fios brancos são as cordas tendinosas, que seguram a válvula para ela não abrir ao contrário. O azul e o vermelho são só uma convenção: o sangue é sempre vermelho, mais escuro quando tem pouco oxigénio.",
      cred:"Patrick J. Lynch, ilustrador médico", lic:"BY25", src:COMMONS+"Heart_anterior_ventricles_valves.jpg"}
  ],
  c5: [
    {f:"img/c5/glomerulo.jpg", t:"Um glomérulo do rim", m:"otico",
      d:"Tecido de rim visto ao microscópio, como na ocular. Os «novelos» redondos são glomérulos: emaranhados de capilares onde o sangue é filtrado. Cada rim tem cerca de um milhão destas unidades de filtração (os nefrónios).",
      cred:"Nadvin", lic:"SA40", src:COMMONS+"Glomerulus.jpg"},
    {f:"img/c5/pele-corte.jpg", t:"Corte da pele (desenho científico)",
      d:"Por baixo da epiderme (EPIDERMIS) fica a derme (DERMIS), com os vasos sanguíneos (BLOOD VESSELS), os pelos (HAIR) e as glândulas sudoríparas (SWEAT GLAND), que fabricam o suor.",
      cred:"Ilustrador desconhecido", lic:"PD", src:COMMONS+"Skin-_epidermis_and_dermis.jpg"}
  ],
  c6: [
    {f:"img/c6/cloroplastos.jpg", t:"Cloroplastos dentro das células", m:"otico",
      d:"Células da folha de um musgo. Cada «caixinha» é uma célula; os grãos verdes lá dentro são os cloroplastos, onde está a clorofila e onde se faz a fotossíntese.",
      cred:"Kristian Peters", lic:"SA30", src:COMMONS+"Plagiomnium_affine_laminazellen.jpeg"},
    {f:"img/c6/folha-estomas.jpg", t:"A superfície de uma folha", m:"eletronico",
      d:"Os «pelos» chamam-se tricomas. Entre as células há pequenas aberturas, os estomas: por eles entra o dióxido de carbono e saem o oxigénio e o vapor de água. A barra branca mede 0,2 mm.",
      cred:"Louisa Howard, Dartmouth College", lic:"PD", src:COMMONS+"Leaf_epidermis_w_scale.jpg"},
    {f:"img/c6/estames.jpg", t:"Estames e carpelo de um lírio",
      d:"Os estames são o órgão masculino: o pólen forma-se nas anteras (as pontas castanhas). Ao centro, mais comprido, está o carpelo, o órgão feminino, com o estigma na ponta.",
      cred:"JJ Harrison", lic:"SA30", src:COMMONS+"Lilium_longiflorum_stamen.jpg"},
    {f:"img/c6/polen.jpg", t:"Grãos de pólen de várias plantas", m:"eletronico",
      d:"Cada espécie de planta tem um pólen com forma própria: com espinhos, liso, em forma de bago de arroz… A maioria mede entre 0,01 e 0,1 mm. As cores foram acrescentadas.",
      cred:"Dartmouth Electron Microscope Facility", lic:"PD", src:COMMONS+"Misc_pollen_colorized.jpg"},
    {f:"img/c6/abelha-nectar.jpg", t:"Uma abelha a recolher néctar",
      d:"Enquanto se alimenta, o corpo peludo da abelha fica coberto de pólen, que ela leva para a flor seguinte: é a polinização.",
      cred:"John Severns", lic:"PD", src:COMMONS+"European_honey_bee_extracts_nectar.jpg"},
    {f:"img/c6/abelha-polen.jpg", t:"Uma abelha a chegar a uma flor",
      d:"As abelhas visitam muitas flores por dia e são dos agentes de polinização mais importantes: grande parte das culturas agrícolas depende delas.",
      cred:"Parvinder S. Parmar", lic:"BY40", src:COMMONS+"Honey_bee_with_pollen.jpg"},
    {f:"img/c6/dente-de-leao.jpg", t:"Sementes de dente-de-leão",
      d:"Cada «paraquedas» leva um pequeno fruto com uma semente. O vento espalha-as para longe: é a dispersão pelo vento.",
      cred:"Richard Bartz", lic:"SA25", src:COMMONS+"A_Taraxacum_Ruderalia_dandelion_clock.jpg"},
    {f:"img/c6/bardana.jpg", t:"Frutos de bardana",
      d:"Têm ganchos que se prendem ao pelo dos animais (e à roupa!), e assim as sementes viajam: dispersão pelos animais. Foi a observar estes ganchos que um engenheiro suíço inventou o velcro.",
      cred:"Gwen and James Anderson", lic:"SA20", src:COMMONS+"Burrdock_Seed_heads_-_geograph.org.uk_-_1131389.jpg"}
  ],
  c7: [
    {f:"img/c7/espermatozoide-ovulo.jpg", t:"Um espermatozoide junto de um óvulo", m:"eletronico",
      d:"O óvulo é uma das maiores células do corpo (cerca de 0,1 mm, quase visível a olho nu). O espermatozoide é muito mais pequeno e desloca-se com a ajuda da cauda (o flagelo).",
      cred:"Autor desconhecido", lic:"PD", src:COMMONS+"Sperm-egg.jpg"}
  ],
  c8: [
    {f:"img/c8/microscopio-leeuwenhoek.jpg", t:"Réplica do microscópio de Leeuwenhoek",
      d:"Cabia na palma da mão e tinha uma única lente, minúscula. Com microscópios assim, Antoni van Leeuwenhoek foi um dos primeiros a ver e a desenhar microrganismos, em 1676–1677.",
      cred:"Jeroen Rouwkema", lic:"SA30", src:COMMONS+"Leeuwenhoek_Microscope.png"},
    {f:"img/c8/ecoli.jpg", t:"Bactérias E. coli (ampliadas 15 000 vezes)", m:"eletronico",
      d:"Vivem no nosso intestino e a maioria é inofensiva, mas algumas causam intoxicações alimentares. Cada uma mede cerca de 2 micrómetros (0,002 mm).",
      cred:"NIAID (EUA)", lic:"PD", src:COMMONS+"E._coli_Bacteria_(7316101966).jpg"},
    {f:"img/c8/estafilococos.jpg", t:"Bactérias Staphylococcus aureus", m:"eletronico",
      d:"Bactérias redondas que vivem na pele e no nariz de muitas pessoas. Se entrarem numa ferida podem causar infeções — por isso se limpam e desinfetam os cortes. As cores foram acrescentadas.",
      cred:"CDC (EUA) — Janice Haney Carr, Matthew J. Arduino", lic:"PD", src:COMMONS+"Staphylococcus_aureus_VISA_2.jpg"},
    {f:"img/c8/leveduras.jpg", t:"Leveduras: o fermento do pão", m:"otico",
      d:"São fungos formados por uma só célula. Algumas estão a formar uma célula-filha (uma «gema»). São elas que fazem crescer a massa do pão.",
      cred:"Masur", lic:"PD", src:COMMONS+"S_cerevisiae_under_DIC_microscopy.jpg"},
    {f:"img/c8/virus-gripe.jpg", t:"Um vírus da gripe", m:"eletronico",
      d:"Os vírus são muito mais pequenos do que as bactérias: este mede cerca de 0,0001 mm. Só se veem ao microscópio eletrónico. As cores foram acrescentadas.",
      cred:"CDC (EUA) — Cynthia Goldsmith, Erskine Palmer", lic:"PD", src:COMMONS+"Influenza_virus_particle_color.jpg"},
    {f:"img/c8/neutrofilo.jpg", t:"Um glóbulo branco a apanhar bactérias", m:"eletronico",
      d:"O glóbulo branco (amarelo) está a «engolir» bactérias (cor de laranja). Chama-se fagocitose e é uma das defesas do nosso corpo. As cores foram acrescentadas.",
      cred:"Volker Brinkmann", lic:"BY25", src:COMMONS+"Neutrophil_with_anthrax_copy.jpg"},
    {f:"img/c8/colonias.jpg", t:"Colónias de bactérias numa placa de Petri",
      d:"Cada mancha redonda começou com uma só bactéria, que se multiplicou milhões de vezes. É assim que os cientistas estudam microrganismos no laboratório.",
      cred:"HansN.", lic:"SA30", src:COMMONS+"Bacteria_on_agar_plate.jpg"},
    {f:"img/c8/penicillium.jpg", t:"O bolor Penicillium", act:"<b>Desenhar o bolor</b>: em papel, com lápis de cor, desenha a placa como a vês: as colónias redondas que se juntam umas às outras, com o centro verde-acinzentado (onde estão os esporos) e a orla branca e fofa (o bolor a crescer). Legenda com setas e escreve a data. <b>Experiência com um adulto</b>: põe um pedaço de pão um pouco húmido num saco de plástico fechado, com a data. Durante uma semana, observa-o todos os dias <b>sem abrir o saco</b> e desenha o que muda. No fim, o adulto deita fora o saco fechado. Quem tem alergias ou asma não faz esta experiência.",
      d:"Foi com um bolor deste género que Alexander Fleming descobriu a penicilina, em 1928 — o primeiro antibiótico. Os antibióticos combatem bactérias, mas não vírus.",
      cred:"Crulina 98", lic:"SA30", src:COMMONS+"Penicillium_notatum.jpg"},
    {f:"img/c8/lavar-maos.jpg", t:"Lavar as mãos", act:"<b>Experiência dos «micróbios» com purpurina</b>: põe um pouco de purpurina ou de canela nas mãos (finge que são micróbios). Lava-as 5 segundos só com água e vê o que ficou. Depois lava 20 segundos com sabão, sem esquecer entre os dedos, os polegares e as unhas. Desenha as tuas mãos antes e depois.",
      d:"Com água e sabão, a esfregar pelo menos 20 segundos, sem esquecer entre os dedos, as unhas e os pulsos. É uma das formas mais eficazes de evitar doenças.",
      cred:"Angelsharum", lic:"SA30", src:COMMONS+"Handwashing.jpg"}
  ]
};
/* Smithsonian Open Access (CC0 — livres de usar, sem restrições) */
const SMITHSONIAN = q => "https://collections.si.edu/search/results.htm?q="+encodeURIComponent(q);
MISSAO_IMAGENS.c3 = [
  {f:"img/c3/pulmao-de-aco.jpg", t:"Parte de um «pulmão de aço»",
    d:"Na primeira metade do século XX, a poliomielite paralisava os músculos da respiração de muitas crianças. O «pulmão de aço» envolvia o corpo e mudava a pressão do ar à volta do peito: assim o tórax expandia-se e o ar entrava nos pulmões, como faz o diafragma. Hoje, graças à vacina, a poliomielite quase desapareceu.",
    cred:"National Museum of American History, Smithsonian Institution", lic:"CC0", src:SMITHSONIAN("Chest Portion of an Iron Lung")}
];
MISSAO_IMAGENS.c8.push(
  {f:"img/c8/vacina-1809.jpg", t:"Um cartão sobre vacinas, de 1809",
    d:"Em 1809, em Milton (Estados Unidos), testou-se a vacina contra a varíola: crianças vacinadas foram expostas à doença e nenhuma ficou doente. Este cartão comemora esse teste — uma das primeiras provas públicas de que as vacinas funcionam.",
    cred:"National Museum of American History, Smithsonian Institution", lic:"CC0", src:SMITHSONIAN("Card Commemorating a Test of the Effectiveness of Vaccination")});
MISSAO_IMAGENS.c9 = [
  {f:"img/c9/pls-final.jpg", t:"A posição lateral de segurança",
    d:"De lado, com a perna de cima dobrada (para não rolar), a mão debaixo da face e a cabeça ligeiramente inclinada para trás: as vias respiratórias ficam abertas e, se vomitar, o vómito sai pela boca.",
    cred:"Grummelbacke", lic:"CC0", src:COMMONS+"Stabile_seitenlage.png"},
  {f:"img/c9/pls-cruz-vermelha.jpg", t:"Um voluntário da Cruz Vermelha a socorrer",
    d:"Num exercício de treino, um socorrista verifica a vítima. Muitas associações, como a Cruz Vermelha, dão cursos de primeiros socorros — também para jovens.",
    cred:"Michal Maňas", lic:"PD", src:COMMONS+"Carotidian_pulse_and_recovery_position.jpg"}
];
MISSAO_IMAGENS.c7.push(
  {f:"img/c7/ecografia.jpg", t:"Ecografia de um feto com 20 semanas",
    d:"Com ultrassons, o médico consegue ver o bebé dentro do útero sem o magoar. Aqui vê-se o perfil do feto: a testa, o nariz e a boca.",
    cred:"Goleisureintl", lic:"BY40", src:COMMONS+"Obstetric_ultrasound_scan_monitor_showing_20-week_human_fetus_profile_in_Navi_Mumbai_2015.jpg"});

Object.assign(MISSAO_IMAGENS, {
  /* ---------------- HGP ---------------- */
  m1: [
    {f:"img/m1/mafra.jpg", t:"Palácio Nacional de Mafra",
      d:"Mandado construir por D. João V, com a riqueza do ouro e dos diamantes que chegavam do Brasil. A obra começou em 1717 e chegou a ter dezenas de milhares de trabalhadores.",
      cred:"Alvesgaspar", lic:"SA30", src:COMMONS+"Mafra_May_2013-2.jpg"},
    {f:"img/m1/aqueduto.jpg", t:"Aqueduto das Águas Livres, Lisboa",
      d:"Outra grande obra do reinado de D. João V, para levar água potável a Lisboa. Resistiu ao terramoto de 1755.",
      cred:"Juntas (Wikimedia Commons)", lic:"SA30", src:COMMONS+"Aqueduto_das_Águas_Livres_(1).jpg"},
    {f:"img/m1/terramoto.jpg", t:"O terramoto de 1755 (gravura antiga)",
      d:"No dia 1 de novembro de 1755, um sismo — seguido de um maremoto e de incêndios — destruiu grande parte de Lisboa.",
      cred:"Autor desconhecido (séc. XVIII)", lic:"PD", src:COMMONS+"1755_Lisbon_earthquake.jpg"},
    {f:"img/m1/pombal.jpg", t:"O Marquês de Pombal",
      d:"Pintura de 1766, de Louis-Michel van Loo e Joseph Vernet. Ministro de D. José, dirigiu a reconstrução de Lisboa depois do terramoto.",
      cred:"Louis-Michel van Loo e Joseph Vernet", lic:"PD", src:COMMONS+"Louis-Michel_van_Loo_003.jpg"},
    {f:"img/m1/baixa.jpg", t:"A Baixa de Lisboa vista do ar",
      d:"Depois do terramoto, a Baixa foi reconstruída com ruas retas e quarteirões iguais, em quadrícula: a Baixa Pombalina. Junto ao rio fica o Terreiro do Paço (Praça do Comércio).",
      cred:"António M. L. Cabral", lic:"SA30", src:COMMONS+"Lisboa_-_Terreiro_do_Paço.jpg"},
    {f:"img/m1/terramoto-3-desastres.svg", t:"1755: sismo, maremoto e incêndios", il:true,
      d:"Três desastres seguidos no mesmo dia: o sismo (cerca das 9h40 da manhã de 1 de novembro), o maremoto que fez o Tejo entrar pela cidade (cerca de 40 minutos depois) e os incêndios, que duraram cerca de 5 dias.",
      cred:"Missão Escolar", lic:"ORIG"},
    {f:"img/m1/baixa-pombalina.svg", t:"A Baixa Pombalina e a gaiola", il:true,
      d:"Depois do terramoto, o Marquês de Pombal mandou reconstruir a Baixa com ruas retas em grelha, quarteirões iguais e a Praça do Comércio aberta para o rio. Por dentro, os prédios têm uma estrutura de madeira com cruzes, a «gaiola pombalina», que deixa o prédio abanar sem cair.",
      cred:"Missão Escolar", lic:"ORIG"}
  ],
  m2: [
    {f:"img/m2/alegoria-1822.jpg", t:"Alegoria à Constituição de 1822",
      d:"Pintura de Domingos Sequeira. A Constituição de 1822, a primeira de Portugal, nasceu da Revolução Liberal de 1820, no Porto.",
      cred:"Domingos Sequeira", lic:"PD", src:COMMONS+"Alegoria_à_Constituição_de_1822_-_Domingos_Sequeira.png"},
    {f:"img/m2/constituicao-1822.jpg", t:"A Constituição de 1822",
      d:"A primeira constituição portuguesa limitava o poder do rei e separava os poderes: legislativo, executivo e judicial.",
      cred:"Domínio público", lic:"PD", src:COMMONS+"Constituição_Política_do_Reino_de_Portugal_de_1822.jpg"},
    {f:"img/m2/pedro-iv.jpg", t:"D. Pedro IV",
      d:"Rei de Portugal e primeiro imperador do Brasil. Liderou os liberais na guerra civil (1832–1834) contra o irmão, D. Miguel, que defendia o absolutismo.",
      cred:"Autor desconhecido (séc. XIX)", lic:"PD", src:COMMONS+"Retrato_de_D._Pedro_IV_de_Portugal,_1.ª_metade_séc._XIX.png"}
  ],
  m3: [
    {f:"img/m3/ponte-maria-pia.jpg", t:"Ponte D. Maria Pia, no Porto",
      d:"Ponte de ferro para o comboio, inaugurada em 1877 e construída pela empresa de Gustave Eiffel. Um símbolo da época do caminho de ferro e da Regeneração.",
      cred:"Joseolgon", lic:"PD", src:COMMONS+"Ponte_Maria_Pia_-_Porto.JPG"},
    {f:"img/m3/santa-justa.jpg", t:"Elevador de Santa Justa, Lisboa",
      d:"Estrutura de ferro inaugurada em 1902 — um exemplo da «arquitetura do ferro», que marcou a passagem do século XIX para o século XX.",
      cred:"Luca Galuzzi", lic:"SA25", src:COMMONS+"Lisbon_(Lisboa)_historic_elevator_Santa_Justa_Luca_Galuzzi_2006.jpg"}
  ],
  m4: [
    {f:"img/m4/proclamacao.jpg", t:"Proclamação da República, 5 de outubro de 1910",
      d:"Fotografia de Joshua Benoliel, o grande fotojornalista da época: a República é proclamada da varanda da Câmara Municipal de Lisboa.",
      cred:"Joshua Benoliel", lic:"PD", src:COMMONS+"Proclamação_República_Portuguesa.jpg"}
  ],
  m5: [
    {f:"img/m5/tarrafal.jpg", t:"O Campo do Tarrafal, em Cabo Verde",
      d:"Durante o Estado Novo, muitos opositores do regime estiveram presos aqui, em condições muito duras. Hoje é um museu da resistência.",
      cred:"Gagum", lic:"BY20", src:COMMONS+"Campo_de_Concentração_do_Tarrafal_-_Portão.jpg"}
  ],
  m6: [
    {f:"img/m6/cravo.jpg", t:"Um cravo vermelho",
      d:"No 25 de Abril de 1974, a população pôs cravos nos canos das espingardas dos soldados. Por isso se chama Revolução dos Cravos.",
      cred:"Rick Kimpel", lic:"SA20", src:COMMONS+"Red_Carnation_Flower.jpg"}
  ],
  m7: [
    {f:"img/m7/sao-bento.jpg", t:"Palácio de São Bento, Lisboa",
      d:"Aqui funciona a Assembleia da República, onde os 230 deputados eleitos discutem e aprovam as leis.",
      cred:"Jose Manuel", lic:"SA30", src:COMMONS+"Assembleia_da_República_(Portugal)_Palácio_de_São_Bento,_Lisboa.JPG"}
  ],
  m8: [
    {f:"img/m8/berlaymont.jpg", t:"Edifício Berlaymont, em Bruxelas",
      d:"Sede da Comissão Europeia. Portugal entrou na CEE — hoje União Europeia — em 1986.",
      cred:"KenSwe72", lic:"BY40", src:COMMONS+"Berlaymont_building_Brussels.jpg"}
  ],

  /* ---------------- Matemática ---------------- */
  n1: [
    {f:"img/n1/cigarra.jpg", t:"Uma cigarra periódica",
      d:"Algumas cigarras da América do Norte vivem 13 ou 17 anos debaixo da terra e saem todas ao mesmo tempo. 13 e 17 são números primos! Os cientistas pensam que isso as ajuda a não coincidir com os ciclos dos predadores.",
      cred:"Jbjensen1", lic:"BY40", src:COMMONS+"Periodical_cicada_in_grass.jpg"}
  ],
  n2: [
    {f:"img/n2/pizza.jpg", t:"Uma pizza dividida em quatro partes",
      d:"Na pizza «quatro estações», cada parte tem ingredientes diferentes e é 1/4 da pizza. Duas partes juntas são 2/4 — ou seja, 1/2.",
      cred:"Rkolarsky", lic:"SA30", src:COMMONS+"Pizza_quattro_stagioni.jpg"}
  ],
  n3: [
    {f:"img/n3/precos.jpg", t:"Etiquetas de preço num supermercado",
      d:"Os preços escrevem-se com números decimais: as unidades (euros, ou aqui dólares australianos) antes da vírgula e os cêntimos depois. Os descontos aparecem muitas vezes em percentagem.",
      cred:"Maksym Kozlenko", lic:"SA40", src:COMMONS+"2021-06-28_E-ink_price_tag_in_Sydney_supermarket.jpg"}
  ],
  n4: [
    {f:"img/n4/romanesco.jpg", t:"Couve romanesca: um padrão na natureza",
      d:"Cada «cone» é feito de cones mais pequenos, parecidos com o grande, e esses de outros ainda mais pequenos. O número de espirais costuma ser um número da sequência de Fibonacci: 1, 1, 2, 3, 5, 8, 13…",
      cred:"Jon Sullivan", lic:"PD", src:COMMONS+"Romanesco_broccoli_fractals.jpg"}
  ],
  n5: [
    {f:"img/n5/favo.jpg", t:"Favo de mel",
      d:"As abelhas constroem células hexagonais (polígonos com 6 lados). Os hexágonos encaixam sem deixar espaços e gastam pouca cera.",
      cred:"Doug Bowman", lic:"BY20", src:COMMONS+"Honeycomb_-_Flickr_-_Bistrosavage.jpg"}
  ],
  n6: [
    {f:"img/n6/panteao.jpg", t:"A cúpula do Panteão de Roma",
      d:"No topo há uma abertura circular, o óculo, com quase 9 metros de diâmetro. Foi construída há cerca de 1900 anos!",
      cred:"Quentin Lowagie", lic:"BY40", src:COMMONS+"Oculus_of_the_Pantheon,_Rome.jpg"},
    {f:"img/n6/roda.jpg", t:"Uma roda de bicicleta",
      d:"Numa volta completa da roda, a bicicleta avança o perímetro da circunferência: P = π × diâmetro.",
      cred:"Cjp24", lic:"SA40", src:COMMONS+"Bicycle_front_wheel_(1).jpg"}
  ],
  n7: [
    {f:"img/n7/contentores.jpg", t:"Contentores num porto",
      d:"Cada contentor é um prisma retangular (paralelepípedo). Para saber quanto cabe lá dentro: volume = comprimento × largura × altura.",
      cred:"AgainErick", lic:"SA40", src:COMMONS+"Shipping_container_stacks_-_Port_of_Rotterdam_-_2017_-_1.jpg"},
    {f:"img/n7/piramides.jpg", t:"As pirâmides de Gizé, no Egito",
      d:"Sólidos geométricos com cerca de 4500 anos: pirâmides de base quadrada.",
      cred:"Ricardo Liberato", lic:"SA20", src:COMMONS+"All_Gizah_Pyramids.jpg"}
  ],
  n8: [
    {f:"img/n8/dados.jpg", t:"Dados",
      d:"Um dado tem 6 faces, todas com a mesma probabilidade: a probabilidade de sair um 5 é de 1 em 6 (1/6). Nos dados normais, as faces opostas somam sempre 7.",
      cred:"Diacritica", lic:"SA30", src:COMMONS+"6sided_dice.jpg"}
  ],

  /* ---------------- Português ---------------- */
  p6: [
    {f:"img/p6/camoes.jpg", t:"Luís de Camões (retrato antigo)",
      d:"Autor de «Os Lusíadas» (1572), um longo poema épico com estrofes de 8 versos (oitavas). Escreveu também muitos sonetos — poemas de 14 versos.",
      cred:"Autor desconhecido", lic:"PD", src:COMMONS+"Camoes_-_retrato_de_goa.jpg"},
    {f:"img/p6/pessoa.jpg", t:"Fernando Pessoa (1888–1935)",
      d:"Um dos maiores poetas portugueses. Escreveu também com outros nomes e outras personalidades, os heterónimos: Alberto Caeiro, Ricardo Reis e Álvaro de Campos.",
      cred:"Autor desconhecido", lic:"PD", src:COMMONS+"Pessoa_chapeu.jpg"}
  ],
  p7: [
    {f:"img/p7/teatro.jpg", t:"Teatro Nacional D. Maria II, Lisboa",
      d:"No Rossio, em Lisboa. Foi inaugurado em 1846. No alto da fachada está uma estátua de Gil Vicente, considerado o pai do teatro português.",
      cred:"Berthold Werner", lic:"SA40", src:COMMONS+"Lisbon_BW_2018-10-03_13-06-05.jpg"}
  ],

  /* ---------------- Inglês ---------------- */
  e3: [
    {f:"img/e3/alunos.jpg", t:"Pupils in school uniform",
      d:"Alunas a caminho da escola no Gana, um país onde o inglês é língua oficial. Em muitos países de língua inglesa usa-se uniforme. school uniform = uniforme escolar · schoolbag = mochila.",
      cred:"Bright Kwame Ayisi", lic:"CC0", src:COMMONS+"Pupils_in_school_uniform.jpg"}
  ],
  e4: [
    {f:"img/e4/casas.jpg", t:"Terraced houses",
      d:"Casas em banda, muito comuns em Inglaterra. house = casa · chimney = chaminé · window = janela · door = porta · garden = jardim.",
      cred:"Steve Daniels", lic:"SA20", src:COMMONS+"Terraced_houses_on_Walton_Street_-_geograph.org.uk_-_5233085.jpg"}
  ],
  e5: [
    {f:"img/e5/autocarro.jpg", t:"A double-decker bus",
      d:"O autocarro de dois andares é um símbolo de Londres. «I go to school by bus.» = Eu vou para a escola de autocarro.",
      cred:"Jeffrey Hayes", lic:"PD", src:COMMONS+"AEC_Routemaster_double-decker_bus_displaying_route_T15_(NOT_IN_SERVICE)_in_central_London_traffic,_June_6_2024.jpg"}
  ],
  e7: [
    {f:"img/e7/tower-bridge.jpg", t:"Tower Bridge, London",
      d:"Uma das pontes mais famosas de Londres, sobre o rio Tamisa (the River Thames). Foi inaugurada em 1894. «Last summer I visited London.» — Past Simple!",
      cred:"Diliff", lic:"SA30", src:COMMONS+"Tower_Bridge_London_Feb_2006.jpg"}
  ],
  e8: [
    {f:"img/e8/abobora.jpg", t:"A jack-o'-lantern",
      d:"No Halloween (31 de outubro), escavam-se caras em abóboras e acende-se uma luz lá dentro. pumpkin = abóbora.",
      cred:"Autor desconhecido", lic:"PD", src:COMMONS+"Jack_o_lantern_pumpkin_in_leaves.jpg"},
    {f:"img/e8/pudim.jpg", t:"Christmas pudding",
      d:"Sobremesa tradicional do Natal britânico, feita com frutos secos. Às vezes é servida a arder (flambé)!",
      cred:"Ed g2s", lic:"SA40", src:COMMONS+"Christmas_pudding_(Heston_from_Waitrose)_flaming.jpg"}
  ]
});
