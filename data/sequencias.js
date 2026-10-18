/* 🔢 «Põe por ordem!» — sequências de processos (formato dos cadernos de atividades, conteúdo nosso).
   Cada passo está na ordem certa; o site baralha-os. Coerente com o resumo de cada mundo. */
const MISSAO_SEQ = {
  c2: [
    {t:"O percurso do alimento no tubo digestivo", passos:["Boca","Faringe","Esófago","Estômago","Intestino delgado","Intestino grosso","Ânus"],
     fim:"O alimento percorre o tubo digestivo da boca ao ânus. As glândulas anexas (glândulas salivares, fígado e pâncreas) não fazem parte deste caminho: lançam sucos no tubo."},
    {t:"O que acontece ao alimento", passos:["Mastigação e insalivação, na boca","Deglutição: o bolo alimentar desce pela faringe e pelo esófago","No estômago, o suco gástrico transforma-o em quimo","No intestino delgado termina a digestão e os nutrientes são absorvidos para o sangue","No intestino grosso é absorvida água e formam-se as fezes","As fezes são expulsas pelo ânus"],
     fim:"A absorção dos nutrientes acontece sobretudo no intestino delgado, graças às vilosidades intestinais."}
  ],
  c3: [
    {t:"O percurso do ar na inspiração", passos:["Fossas nasais","Faringe","Laringe","Traqueia","Brônquios","Bronquíolos","Alvéolos pulmonares"],
     fim:"Nos alvéolos dão-se as trocas gasosas: o oxigénio passa para o sangue e o dióxido de carbono passa do sangue para o ar que vai ser expirado."},
    {t:"Como entra o ar (inspiração)", passos:["O diafragma contrai-se e desce","As costelas sobem e o volume da caixa torácica aumenta","Os pulmões dilatam-se","O ar entra pelas vias respiratórias","O ar chega aos alvéolos, onde o oxigénio passa para o sangue"],
     fim:"Na expiração acontece o contrário: o diafragma relaxa e sobe, o volume da caixa torácica diminui e o ar sai."}
  ],
  c4: [
    {t:"A grande circulação", passos:["Ventrículo esquerdo","Artéria aorta","Capilares dos órgãos (o sangue deixa o oxigénio e recolhe o dióxido de carbono)","Veias cavas","Aurícula direita"],
     fim:"Sai do ventrículo esquerdo sangue arterial (rico em oxigénio) e chega à aurícula direita sangue venoso."},
    {t:"A pequena circulação", passos:["Ventrículo direito","Artérias pulmonares","Capilares dos pulmões (o sangue recebe oxigénio e liberta dióxido de carbono)","Veias pulmonares","Aurícula esquerda"],
     fim:"Nos pulmões o sangue venoso passa a arterial. Repara: as artérias pulmonares levam sangue venoso; as veias pulmonares trazem sangue arterial."}
  ],
  c5: [
    {t:"O caminho da urina", passos:["Rins (filtram o sangue e formam a urina)","Ureteres","Bexiga (armazena a urina)","Uretra","Exterior do corpo"],
     fim:"A urina forma-se nos rins e é armazenada na bexiga; a uretra leva-a para o exterior."}
  ],
  c6: [
    {t:"Da flor ao fruto e à nova planta", passos:["Polinização: o pólen chega ao estigma de uma flor","Fecundação, no ovário da flor","O óvulo dá origem à semente e o ovário dá origem ao fruto","Dispersão das sementes (vento, água ou animais)","Germinação: da semente nasce uma nova planta"],
     fim:"Sem polinização não há fecundação, e sem fecundação não se formam sementes nem frutos."}
  ],
  c7: [
    {t:"Da fecundação ao nascimento", passos:["Ovulação: um ovário liberta um oócito","Fecundação: um espermatozoide une-se ao oócito, na trompa de Falópio","Forma-se o ovo (zigoto), que desce até ao útero","Nidação: o embrião fixa-se na parede do útero","Gestação: o embrião, depois feto, desenvolve-se durante cerca de 9 meses","Parto"],
     fim:"A fecundação acontece na trompa de Falópio, não no útero. Durante a gestação, o novo ser recebe alimento e oxigénio pela placenta e pelo cordão umbilical."}
  ],
  c8: [
    {t:"Como funciona uma vacina", passos:["A vacina leva o microrganismo morto ou enfraquecido, ou só uma parte dele","O sistema imunitário reconhece-o e produz anticorpos","O corpo fica com «memória» desse microrganismo","Se mais tarde o microrganismo verdadeiro entrar, as defesas reagem depressa","A pessoa não fica doente, ou fica com uma forma muito mais ligeira"],
     fim:"A vacina prepara o corpo antes da doença. Os antibióticos são outra coisa: tratam infeções por bactérias e não funcionam contra vírus."}
  ],
  c9: [
    {t:"Alguém caído no chão", passos:["Ver se há perigo para ti (trânsito, fogo, eletricidade)","Chamar a pessoa e tocar-lhe nos ombros para ver se responde","Pedir ajuda: chamar um adulto e ligar 112","Se não responde mas respira normalmente, pô-la em posição lateral de segurança","Ficar junto dela a vigiar a respiração até chegar ajuda"],
     fim:"Primeiro a tua segurança. Ao telefone para o 112, diz onde estás e o que aconteceu, e só desligas quando te disserem."},
    {t:"Sangue do nariz", passos:["Sentar a pessoa","Inclinar a cabeça para a frente","Apertar a parte mole do nariz","Manter durante 10 minutos"],
     fim:"A cabeça vai para a frente, não para trás: assim o sangue não escorre para a garganta."}
  ],
  /* 7.º ano — Físico-Química */
  q1: [{t:"Do mais pequeno para o maior", passos:["Terra","Sistema Solar","Via Láctea","Grupo Local","Universo"],
        fim:"Cada estrutura está dentro da seguinte: a Terra pertence ao Sistema Solar, que está num braço da Via Láctea."}],
  q3: [{t:"As fases da Lua, a partir da lua nova", passos:["Lua nova","Quarto crescente","Lua cheia","Quarto minguante"],
        fim:"Um ciclo completo dura cerca de 29,5 dias. Em Portugal, o quarto crescente tem o lado direito iluminado."}],
  q4: [{t:"Preparar uma solução com uma concentração certa", passos:["Calcular a massa de soluto (m = Cm × V)","Pesar o soluto numa balança","Dissolver o soluto num pouco de água, mexendo com a vareta","Passar para um balão volumétrico","Completar com água até ao traço e agitar"],
        fim:"Usa sempre bata e óculos e lê os símbolos de perigo do rótulo antes de começar."}],
  q7: [{t:"O tratamento da água numa ETA", passos:["Captação da água (rio ou albufeira)","Gradagem: retirar objetos grandes","Coagulação e floculação: as impurezas juntam-se em flocos","Decantação: os flocos depositam-se","Filtração","Desinfeção (cloro ou ozono)","Distribuição às casas"],
        fim:"A desinfeção é a última etapa antes da distribuição, para a água chegar às torneiras sem microrganismos perigosos."}],
  /* 7.º ano */
  g3: [
    {t:"Como se forma um fóssil", passos:["Um ser vivo morre","É rapidamente coberto por sedimentos (lama, areia)","As partes moles decompõem-se; ficam as partes duras (ossos, conchas)","Os sedimentos endurecem e formam rocha; minerais podem substituir os restos","A erosão desgasta a rocha e o fóssil fica à vista"],
     fim:"O enterramento rápido protege os restos da decomposição e dos animais necrófagos: é por isso que há tantos fósseis em rochas sedimentares."}
  ],
  g4: [
    {t:"As eras da história da Terra", passos:["Pré-Câmbrico","Paleozoico","Mesozoico","Cenozoico"],
     fim:"Os dinossauros viveram no Mesozoico; os seres humanos surgiram no Cenozoico, a era atual."}
  ],
  g6: [
    {t:"Do magma à erupção", passos:["O magma forma-se em profundidade","Acumula-se na câmara magmática","Sobe pela chaminé","Sai pela cratera: é a erupção","À superfície, o magma que perdeu gases chama-se lava"],
     fim:"Magma é a rocha fundida no interior da Terra; lava é o nome que tem depois de sair à superfície."}
  ]
};
