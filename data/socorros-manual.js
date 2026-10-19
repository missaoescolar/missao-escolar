/* 📘 Manual de primeiros socorros (Mundo 9 de Ciências). Não é matéria «para o teste»: é um manual de consulta, por situação.
   Fontes (verificadas em outubro de 2026):
   - ERC — European Resuscitation Council Guidelines 2025, First Aid (Resuscitation 215, supl. 1, 110752), na adaptação do
     Resuscitation Council UK (resus.org.uk › 2025 Resuscitation Guidelines › First Aid Guidelines);
   - IFRC — International First Aid, Resuscitation and Education Guidelines 2025 (Federação Internacional da Cruz Vermelha);
   - EUA: American Red Cross, «Check, Call, Care» (os 3 passos de ação); AHA e Cruz Vermelha Americana, First Aid Guidelines 2024;
   - Japão: Cruz Vermelha Japonesa (日本赤十字社, 救急法) e o ensino de suporte básico de vida com DAE nas aulas de Educação Física
     do ensino secundário inferior (中学校 保健体育, «応急手当»);
   - Portugal: INEM (112, Centro de Informação Antivenenos 800 250 250) e SNS 24 (808 24 24 24).
   Os pictogramas são ilustrações originais (✏️), não fotografias. */
(function(){
  /* ---------- tiny SVG kit for the pictograms (viewBox 120×90) ---------- */
  const PELE = "#F2C9A0", LINHA = "#3B2F2A", AZUL = "#4F86B3", VERM = "#C0392B", VERDE = "#3E8F5C", OCRE = "#E0A100", BRANCO = "#FFFFFF";
  const s = (o, def) => Object.keys(o).map(k => k+'="'+o[k]+'"').join(" ");
  const R = (x, y, w, h, o) => '<rect '+s(Object.assign({x:x, y:y, width:w, height:h, rx:6}, o))+'/>';
  const C = (x, y, r, o) => '<circle '+s(Object.assign({cx:x, cy:y, r:r}, o))+'/>';
  const P = (d, o) => '<path '+s(Object.assign({d:d, fill:"none", stroke:LINHA, "stroke-width":3, "stroke-linecap":"round", "stroke-linejoin":"round"}, o))+'/>';
  const T = (x, y, txt, o) => '<text '+s(Object.assign({x:x, y:y, "font-size":11, "font-weight":700, "text-anchor":"middle", fill:LINHA, "font-family":"inherit"}, o))+'>'+txt+'</text>';
  const SVG = (corpo, rotulo) => '<svg viewBox="0 0 120 90" role="img" aria-label="'+rotulo+'">'+corpo+'</svg>';
  const cabeca = (x, y, r) => C(x, y, r, {fill:PELE, stroke:LINHA, "stroke-width":2.5});

  const PICT = {
    paragem: SVG(R(14,52,92,26,{fill:"#9CC3E6", stroke:LINHA, "stroke-width":2.5, rx:10})+cabeca(20,48,10)+
      R(52,30,20,14,{fill:PELE, stroke:LINHA, "stroke-width":2.5, rx:5})+R(54,40,16,14,{fill:PELE, stroke:LINHA, "stroke-width":2.5, rx:5})+
      P("M62,10 L62,26",{stroke:VERM, "stroke-width":3.5})+P("M56,20 L62,27 L68,20",{stroke:VERM, "stroke-width":3.5})+T(96,24,"100–120",{fill:VERM})+T(96,36,"por min.",{"font-size":9}), "Mãos sobrepostas no centro do peito, a carregar com força"),
    pls: SVG(R(8,70,104,6,{fill:"#E6DED2", rx:3})+cabeca(26,56,10)+R(36,50,40,16,{fill:AZUL, stroke:LINHA, "stroke-width":2.5, rx:8})+
      P("M76,58 L98,60 L104,68",{stroke:"#5A6B7A", "stroke-width":7})+P("M74,62 L90,46 L100,66",{stroke:"#7A8B9A", "stroke-width":7})+
      P("M34,58 L22,66",{stroke:PELE, "stroke-width":6})+T(60,24,"de lado",{})+T(60,37,"boca para baixo",{"font-size":9}), "Pessoa deitada de lado, com o joelho de cima dobrado"),
    engasgo: SVG(cabeca(48,26,10)+P("M50,36 Q60,52 78,60",{stroke:AZUL, "stroke-width":12})+P("M78,60 L80,82",{stroke:"#5A6B7A", "stroke-width":7})+
      P("M30,30 Q24,44 40,50",{stroke:PELE, "stroke-width":7})+P("M22,40 l-8,-6 M22,48 l-10,0 M24,56 l-8,6",{stroke:VERM, "stroke-width":2.5})+
      T(96,22,"5 nas",{fill:VERM})+T(96,34,"costas",{fill:VERM})+T(96,50,"5 na",{})+T(96,62,"barriga",{}), "Pancadas com a base da mão entre as omoplatas"),
    sangue: SVG(P("M10,60 Q50,54 100,62",{stroke:PELE, "stroke-width":18})+R(44,46,26,18,{fill:BRANCO, stroke:LINHA, "stroke-width":2})+
      R(40,24,34,16,{fill:PELE, stroke:LINHA, "stroke-width":2.5, rx:8})+P("M57,8 L57,20",{stroke:VERM, "stroke-width":3.5})+P("M51,15 L57,21 L63,15",{stroke:VERM, "stroke-width":3.5})+
      T(96,26,"carrega",{fill:VERM})+T(96,38,"sem largar",{"font-size":9}), "Mão a carregar com força numa compressa sobre a ferida"),
    queimadura: SVG(R(20,8,40,10,{fill:"#B9C3CC", stroke:LINHA, "stroke-width":2})+R(34,18,12,10,{fill:"#B9C3CC", stroke:LINHA, "stroke-width":2, rx:2})+
      P("M40,30 L40,52",{stroke:AZUL, "stroke-width":6, "stroke-dasharray":"4 4"})+P("M18,66 Q40,56 64,64 L72,70",{stroke:PELE, "stroke-width":14})+
      T(94,40,"20",{"font-size":22, fill:AZUL})+T(94,54,"minutos",{"font-size":9})+T(94,68,"água fresca",{"font-size":9}), "Mão debaixo da torneira, com água corrente fresca"),
    nariz: SVG(P("M36,74 Q30,50 44,34 Q58,22 74,30 Q84,38 80,52 L88,58 L80,62 Q78,72 66,74",{fill:PELE, "stroke-width":2.5})+
      C(64,40,2.5,{fill:LINHA})+P("M84,52 L96,46",{stroke:PELE, "stroke-width":7})+P("M84,60 L96,64",{stroke:PELE, "stroke-width":7})+
      P("M30,22 Q40,14 52,18",{stroke:VERM, "stroke-width":2.5})+P("M48,14 L53,18 L48,23",{stroke:VERM, "stroke-width":2.5})+
      T(20,48,"10–15",{fill:VERM})+T(20,60,"min",{"font-size":9}), "Cabeça inclinada para a frente e dedos a apertar a parte mole do nariz"),
    abelha: SVG('<ellipse cx="40" cy="44" rx="16" ry="11" fill="'+OCRE+'" stroke="'+LINHA+'" stroke-width="2.5"/>'+P("M36,34 L36,54 M44,34 L44,54",{"stroke-width":3})+
      '<ellipse cx="38" cy="30" rx="9" ry="6" fill="#DDEBF7" stroke="'+LINHA+'" stroke-width="1.5"/>'+P("M56,44 L62,44",{})+
      R(70,48,36,20,{fill:"#9CC3E6", stroke:LINHA, "stroke-width":2, rx:3})+P("M70,74 L104,74",{stroke:PELE, "stroke-width":8})+
      T(88,30,"raspa o",{})+T(88,42,"ferrão",{}), "Abelha e um cartão a raspar o ferrão da pele"),
    anafilaxia: SVG(P("M20,30 Q30,80 46,84 L76,84 Q80,50 70,26",{fill:"#6E7F91", "stroke-width":2.5})+
      R(58,18,12,42,{fill:OCRE, stroke:LINHA, "stroke-width":2, rx:4, transform:"rotate(-20 64 39)"})+R(62,56,6,8,{fill:VERM, rx:2, transform:"rotate(-20 64 39)"})+
      T(98,30,"coxa,",{"font-size":10})+T(98,42,"por fora",{"font-size":10})+T(98,62,"112",{fill:VERM, "font-size":14}), "Caneta de adrenalina na parte de fora da coxa"),
    convulsao: SVG(R(14,58,52,16,{fill:"#C9B6E4", stroke:LINHA, "stroke-width":2, rx:8})+cabeca(40,48,12)+
      P("M14,30 l-6,-4 M18,22 l-4,-6 M62,30 l6,-4",{stroke:"#8E7CC3", "stroke-width":2.5})+C(92,40,18,{fill:BRANCO, stroke:LINHA, "stroke-width":2.5})+
      P("M92,40 L92,28 M92,40 L100,44",{"stroke-width":2.5})+T(92,76,"conta o tempo",{"font-size":9}), "Cabeça protegida numa almofada e um relógio para contar o tempo"),
    acucar: SVG(R(22,26,30,46,{fill:"#F4B183", stroke:LINHA, "stroke-width":2.5, rx:4})+R(26,34,22,18,{fill:BRANCO, rx:3})+P("M44,26 L50,10",{stroke:"#5A6B7A", "stroke-width":3})+
      R(64,48,16,16,{fill:BRANCO, stroke:LINHA, "stroke-width":2, rx:2})+R(82,48,16,16,{fill:BRANCO, stroke:LINHA, "stroke-width":2, rx:2})+R(73,32,16,16,{fill:BRANCO, stroke:LINHA, "stroke-width":2, rx:2})+
      T(82,80,"15–20 g",{fill:VERM}), "Um sumo e pacotes de açúcar"),
    avc: SVG(cabeca(34,40,22)+C(26,34,2.5,{fill:LINHA})+C(42,36,2.5,{fill:LINHA})+P("M24,50 Q34,50 44,56",{"stroke-width":2.5})+
      T(88,24,"Face",{fill:VERM})+T(88,44,"Força",{fill:VERM})+T(88,64,"Fala",{fill:VERM})+T(88,82,"→ 112",{"font-size":10}), "Cara com a boca descaída de um lado: sinais de AVC"),
    veneno: SVG(R(18,30,30,46,{fill:"#BFD7B5", stroke:LINHA, "stroke-width":2.5, rx:5})+R(26,20,14,12,{fill:"#E6DED2", stroke:LINHA, "stroke-width":2, rx:2})+
      T(33,60,"☠",{"font-size":18})+R(66,18,30,54,{fill:"#2E2A26", rx:6})+R(70,24,22,38,{fill:"#DDEBF7", rx:2})+T(81,40,"800",{"font-size":8})+T(81,50,"250 250",{"font-size":7})+
      T(60,86,"não provocar o vómito",{"font-size":8, fill:VERM}), "Embalagem de produto tóxico e telemóvel a ligar ao Centro Antivenenos"),
    dente: SVG(R(62,22,34,54,{fill:"#F4F1EA", stroke:LINHA, "stroke-width":2.5, rx:4})+R(64,40,30,34,{fill:BRANCO, rx:3})+
      P("M28,30 Q24,18 34,18 Q40,20 46,18 Q56,18 52,30 L48,52 Q46,58 42,48 L40,40 L38,48 Q34,58 32,52 Z",{fill:BRANCO, "stroke-width":2.5})+
      T(79,56,"leite",{"font-size":9})+T(38,72,"pega pela",{"font-size":9})+T(38,83,"coroa",{"font-size":9}), "Dente guardado num copo de leite"),
    entorse: SVG(P("M10,70 L60,70 L60,54 L78,40",{stroke:PELE, "stroke-width":14})+R(50,30,30,18,{fill:"#DDEBF7", stroke:LINHA, "stroke-width":2, rx:6})+
      P("M54,34 l4,4 m4,-4 l4,4 m4,-4 l4,4",{stroke:AZUL, "stroke-width":1.5})+R(20,74,52,8,{fill:"#C9B6E4", rx:3})+
      T(98,30,"frio",{fill:AZUL})+T(98,42,"num pano",{"font-size":9})+T(98,58,"até",{"font-size":9})+T(98,70,"20 min",{}), "Pé elevado com gelo embrulhado num pano"),
    calor: SVG(C(24,24,12,{fill:OCRE})+P("M24,4 l0,6 M24,38 l0,6 M4,24 l6,0 M38,24 l6,0 M10,10 l4,4 M34,34 l4,4 M38,10 l-4,4 M10,38 l4,-4",{stroke:OCRE, "stroke-width":2.5})+
      P("M56,30 Q80,10 104,30 Z",{fill:VERDE, "stroke-width":2})+P("M80,30 L80,78",{"stroke-width":3})+R(58,52,12,24,{fill:"#9CC3E6", stroke:LINHA, "stroke-width":2, rx:3})+
      T(96,64,"sombra",{"font-size":9})+T(96,76,"e água",{"font-size":9}), "Sol, sombra e uma garrafa de água"),
    desmaio: SVG(R(8,62,70,14,{fill:AZUL, stroke:LINHA, "stroke-width":2.5, rx:7})+cabeca(16,58,9)+P("M76,68 L98,38",{stroke:"#5A6B7A", "stroke-width":9})+
      R(80,72,30,8,{fill:"#E6DED2", rx:3})+T(50,26,"pernas",{})+T(50,38,"para cima",{"font-size":9}), "Pessoa deitada com as pernas levantadas"),
    cabeca: SVG(cabeca(40,44,22)+C(30,24,6,{fill:"#E8A2A2", stroke:LINHA, "stroke-width":2})+P("M30,52 Q40,46 50,52",{"stroke-width":2.5})+
      '<polygon points="84,22 98,22 108,32 108,46 98,56 84,56 74,46 74,32" fill="'+VERM+'"/>'+T(91,43,"PARA",{fill:BRANCO, "font-size":10})+
      T(91,76,"observar",{"font-size":9}), "Cabeça com um galo e um sinal de parar")
  };

  /* urgency: colour + words (never colour alone) */
  const U = {
    j:{c:"urg-j", t:"🔴 Liga 112 já"},
    d:{c:"urg-d", t:"🟠 Pode precisar de 112"},
    c:{c:"urg-c", t:"🟢 Trata-se com um adulto"}
  };

  window.MISSAO_MANUAL = {c9:{
    titulo:"📘 Manual de primeiros socorros",
    intro:"Não é matéria para decorar para um teste: é um manual para consultar e treinar com um adulto. Está organizado por situação. Em cada uma: como reconhecer, o que fazer, o que não fazer e quando ligar 112.",
    passos:[
      ["👀","Ver","Há perigo para ti? (trânsito, fogo, eletricidade). A pessoa responde? Respira normalmente?"],
      ["📞","Ligar","112 (em alta-voz, para teres as mãos livres). Diz onde estás, o que aconteceu e quantas pessoas."],
      ["🤲","Cuidar","Faz só o que aprendeste e segue o que o operador do 112 te diz, até chegar ajuda."]
    ],
    passosFonte:"Os 3 passos «Check, Call, Care» da Cruz Vermelha Americana; o ERC 2025 dá a mesma ordem: pedir ajuda cedo, com o telefone em alta-voz.",
    numeros:[["112","Emergência: grátis, mesmo sem saldo"],["808 24 24 24","SNS 24: dúvidas de saúde que não são emergência"],["800 250 250","Centro de Informação Antivenenos (INEM)"]],
    fichas:[
      {id:"paragem", u:"j", t:"Não responde e não respira normalmente", sub:"paragem cardíaca",
        ver:"Não responde quando a chamas e lhe tocas nos ombros, e não respira — ou faz só uns «soluços» raros e ruidosos (respiração agónica).",
        fazer:["Liga 112 em alta-voz e pede a alguém que traga um DAE (desfibrilhador).","Mãos sobrepostas no centro do peito; carrega com força e depressa: 100 a 120 vezes por minuto.","Não pares até chegar ajuda ou o DAE; liga o DAE e segue o que ele diz."],
        nao:["Não ponhas em posição lateral de segurança: quem não respira normalmente precisa de compressões.","Não percas tempo a procurar o pulso."],
        fonte:"ERC 2025; IFRC 2025. Em Portugal e na Europa, a campanha «Kids Save Lives» recomenda treinar com crianças a partir dos 12 anos; no Japão, treina-se nas aulas de Educação Física."},
      {id:"pls", u:"j", t:"Não responde mas respira normalmente", sub:"posição lateral de segurança",
        ver:"Não responde, mas o peito sobe e desce de forma regular.",
        fazer:["Põe a pessoa de lado, em posição lateral de segurança (vê a animação).","Liga 112.","Fica junto dela e vigia a respiração: se deixar de respirar normalmente, começa as compressões."],
        nao:["Se caiu de muito alto ou teve um acidente, não a mexas sem ser preciso: liga 112 e segue as instruções."],
        fonte:"ERC 2025 (Resuscitation Council UK); IFRC 2025."},
      {id:"engasgo", u:"d", t:"Engasgamento", sub:"algo preso na garganta",
        ver:"Leva as mãos à garganta. Se consegue tossir com força, a tosse está a resolver. Se não consegue tossir, falar nem respirar, é grave.",
        fazer:["Se tosse: incentiva a continuar a tossir e fica com ela.","Se não consegue tossir: até 5 pancadas fortes nas costas, entre as omoplatas, com a base da mão.","Se não resultar: até 5 compressões abdominais (de pé, atrás da pessoa). Alterna 5 e 5 e liga 112.","Bebés com menos de 1 ano: 5 pancadas nas costas e 5 compressões no peito, nunca na barriga."],
        nao:["Não metas os dedos na boca às cegas para tirar o objeto.","Depois de compressões abdominais, a pessoa deve ser vista por um médico, mesmo que fique bem."],
        fonte:"ERC 2025 (Resuscitation Council UK); IFRC 2025; Cruz Vermelha Japonesa. A AHA (EUA) passou também a ensinar pancadas nas costas e compressões abdominais alternadas (2025)."},
      {id:"sangue", u:"d", t:"Hemorragia", sub:"muito sangue a sair de uma ferida",
        ver:"Sangue a sair com força ou que não para.",
        fazer:["Carrega com força na ferida, com uma compressa ou um pano limpo, e não largues.","Se o sangue passar, põe outra compressa por cima, sem tirar a primeira.","Se é muito sangue: liga 112 e continua a carregar."],
        nao:["Não tires objetos espetados: carrega à volta deles.","O garrote (torniquete) é só para adultos treinados."],
        fonte:"ERC 2025 (pressão direta, depois penso hemostático ou garrote por quem tem formação); IFRC 2025."},
      {id:"queimadura", u:"d", t:"Queimadura", sub:"água quente, fogo, ferro",
        ver:"Pele vermelha, com dor; às vezes bolhas.",
        fazer:["Põe logo em água corrente fresca durante pelo menos 10 minutos, de preferência 20.","Tira anéis, relógios e roupa da zona, se não estiverem colados à pele.","Tapa sem apertar com película aderente (por cima, sem dar voltas) ou uma compressa limpa."],
        nao:["Não ponhas gelo, manteiga, pasta de dentes nem cremes.","Não rebentes as bolhas."],
        quando:"Liga 112 se a queimadura é grande, na cara, nas mãos ou nos órgãos genitais, se foi elétrica ou química, ou se é uma criança pequena.",
        fonte:"IFRC 2025 («arrefecer com água corrente pelo menos 10 minutos, idealmente 20»); Cruz Vermelha Japonesa (10 a 20 minutos)."},
      {id:"nariz", u:"c", t:"Sangue do nariz", sub:"epistaxe",
        ver:"Sangue a pingar do nariz.",
        fazer:["Senta-te com a cabeça um pouco inclinada para a frente.","Aperta a parte mole do nariz durante 10 a 15 minutos, sem largar.","Respira pela boca e cospe o sangue que for para a boca."],
        nao:["Não inclines a cabeça para trás: o sangue vai para a garganta."],
        quando:"Procura ajuda médica se não parar ao fim de 15 minutos de pressão contínua, se foi uma pancada forte na cara ou se a pessoa fica tonta.",
        fonte:"IFRC 2025."},
      {id:"abelha", u:"c", t:"Picada de abelha ou vespa", sub:"",
        ver:"Dor, vermelhidão e inchaço no sítio da picada.",
        fazer:["Tira o ferrão o mais depressa possível (por exemplo, raspando com um cartão).","Lava com água e sabão.","Põe frio, sempre embrulhado num pano."],
        nao:["Não cocem nem apertem a picada."],
        quando:"Liga 112 se aparecer falta de ar, inchaço dos lábios ou da cara, ou se a picada foi na boca: pode ser uma alergia grave.",
        fonte:"IFRC 2025 («o ferrão deve ser tirado o mais depressa possível»)."},
      {id:"anafilaxia", u:"j", t:"Alergia grave", sub:"anafilaxia",
        ver:"Depois de um alimento ou de uma picada: lábios ou cara inchados, falta de ar, voz rouca, manchas na pele, tonturas.",
        fazer:["Liga 112.","Ajuda a pessoa a usar a sua caneta de adrenalina, na parte de fora da coxa, o mais cedo possível.","Se não melhorar ao fim de 5 minutos, usa uma segunda caneta, de preferência na outra perna."],
        nao:["Não esperes para ver se passa."],
        fonte:"ERC 2025 (Resuscitation Council UK)."},
      {id:"convulsao", u:"d", t:"Convulsão", sub:"crise epilética",
        ver:"A pessoa cai e o corpo faz movimentos que ela não controla; pode ter espuma na boca.",
        fazer:["Afasta objetos e põe algo mole debaixo da cabeça.","Tira os óculos e alarga a roupa à volta do pescoço.","Conta o tempo. Quando acabar, se respira normalmente, põe de lado."],
        nao:["Não a segures.","Não lhe ponhas nada na boca."],
        quando:"Liga 112 se durar mais de 5 minutos, se é a primeira vez, se se magoou, se não acorda depois ou se aconteceu na água.",
        fonte:"IFRC 2025."},
      {id:"acucar", u:"d", t:"Açúcar baixo", sub:"hipoglicemia (por exemplo, diabetes)",
        ver:"Tremores, suores, palidez, fome, confusão.",
        fazer:["Se está acordada e consegue engolir: dá 15 a 20 g de açúcar (um sumo de fruta, pacotes de açúcar ou pastilhas de glicose).","Chama um adulto.","Se não melhorar ao fim de 15 minutos, dá outra vez."],
        nao:["Se não acorda ou não consegue engolir, não dês nada pela boca: liga 112."],
        fonte:"ERC 2025 (Resuscitation Council UK); IFRC 2025."},
      {id:"avc", u:"j", t:"AVC", sub:"acidente vascular cerebral",
        ver:"Os 3 F: Face (a boca fica de lado), Força (um braço não se levanta), Fala (a fala fica enrolada).",
        fazer:["Liga 112 logo: cada minuto conta.","Repara e diz a que horas começaram os sinais."],
        nao:["Não dês comida nem bebida."],
        fonte:"ERC 2025 (escala FAST: Face, Arm, Speech, Time); INEM (os 3 F)."},
      {id:"veneno", u:"d", t:"Engoliu algo tóxico", sub:"intoxicação",
        ver:"Uma embalagem aberta (lixívia, medicamentos, detergente) e a criança com mau aspeto, tosse ou vómitos.",
        fazer:["Liga para o Centro de Informação Antivenenos: 800 250 250 (ou 112 se a pessoa estiver mal).","Tem a embalagem na mão para dizeres o que foi, quanto e há quanto tempo.","Se tiver produto na boca, ajuda a bochechar com água e cuspir."],
        nao:["Não provoques o vómito.","Não dês leite nem água, a não ser que o Centro Antivenenos te diga."],
        fonte:"IFRC 2025; INEM (Centro de Informação Antivenenos)."},
      {id:"dente", u:"c", t:"Dente arrancado", sub:"numa queda ou pancada",
        ver:"Um dente definitivo saiu inteiro da boca.",
        fazer:["Pega no dente pela parte branca (a coroa), nunca pela raiz.","Guarda-o num copo de leite.","Vai ao dentista o mais depressa possível."],
        nao:["Não esfregues nem laves a raiz com sabão.","Um dente de leite não se volta a pôr, mas deve ir-se ao dentista na mesma."],
        fonte:"IFRC 2025."},
      {id:"entorse", u:"c", t:"Entorse", sub:"pé ou pulso torcido",
        ver:"Dor, inchaço; custa apoiar ou mexer.",
        fazer:["Para a atividade e mantém a zona quieta.","Põe frio embrulhado num pano, até 20 minutos seguidos.","Eleva o pé ou o braço."],
        nao:["Não ponhas gelo diretamente na pele: mais de 20 minutos pode estragá-la."],
        quando:"Vai ao médico se não consegues apoiar o pé, se a zona está deformada ou se a dor é muito forte.",
        fonte:"IFRC 2025 («frio até 20 minutos seguidos»)."},
      {id:"calor", u:"d", t:"Golpe de calor", sub:"muito tempo ao sol ou exercício",
        ver:"Pele quente e vermelha, dor de cabeça, tonturas, náuseas; num caso grave, confusão ou desmaio.",
        fazer:["Leva a pessoa para a sombra ou para um sítio fresco.","Arrefece depressa: água fresca no corpo, toalhas molhadas, ventilar, um duche frio.","Se está acordada e não vomita, dá água a beber aos poucos."],
        nao:["Não a deixes sozinha."],
        quando:"Liga 112 se fica confusa, desmaia ou tem uma convulsão.",
        fonte:"IFRC 2025."},
      {id:"desmaio", u:"c", t:"Sentir que vai desmaiar", sub:"lipotimia",
        ver:"Fica pálida, tonta, com a vista a escurecer.",
        fazer:["Ajuda a deitar-se ou a sentar-se, num sítio onde não caia.","Deitada, levanta-lhe as pernas.","Fica com ela até se sentir bem."],
        nao:["Não a ponhas de pé depressa."],
        quando:"Se não acorda logo, vê se respira: põe de lado e liga 112.",
        fonte:"IFRC 2025."},
      {id:"cabeca", u:"d", t:"Pancada na cabeça", sub:"concussão",
        ver:"Depois de uma pancada: dor de cabeça, tonturas, confusão, enjoo, sono estranho.",
        fazer:["Para logo o jogo ou o desporto.","Avisa um adulto e fica a observar.","Vai ao médico."],
        nao:["Não voltes a jogar no mesmo dia."],
        quando:"Liga 112 se desmaiou, vomita várias vezes, tem convulsões, sangue ou líquido a sair do nariz ou dos ouvidos, ou fica cada vez mais confusa.",
        fonte:"ERC 2025 (tirar da atividade e encaminhar para um profissional de saúde); IFRC 2025."}
    ].map(f => Object.assign(f, {svg:PICT[f.id], urg:U[f.u]})),
    fontes:[
      ["Europa","European Resuscitation Council, Guidelines 2025 — First Aid (na adaptação do Resuscitation Council UK)"],
      ["Mundo","Federação Internacional da Cruz Vermelha (IFRC), International First Aid, Resuscitation and Education Guidelines 2025"],
      ["EUA","American Red Cross, «Check, Call, Care»; American Heart Association e Cruz Vermelha Americana, First Aid Guidelines 2024"],
      ["Japão","Cruz Vermelha Japonesa (救急法); o suporte básico de vida com DAE é treinado nas aulas de Educação Física do 7.º ao 9.º ano (中学校 保健体育)"],
      ["Portugal","INEM (112, Centro de Informação Antivenenos) e SNS 24"]
    ]
  }};
})();
