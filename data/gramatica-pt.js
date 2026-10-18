/* 📘 Gramática e 📗 Prontuário de português europeu (PT-PT), segundo o Acordo Ortográfico de 1990 (AO90)
   e as Aprendizagens Essenciais do 2.º ciclo. Consulta rápida: regra, exemplos, truque e erro comum. */
const GRAMATICA_PT = [
  {id:"classes", icon:"🏷️", t:"Classes de palavras",
   regra:"Cada palavra pertence a uma classe. As <b>variáveis</b> mudam de forma (género, número, pessoa, tempo): <b>nome</b>, <b>adjetivo</b>, <b>verbo</b>, <b>determinante</b>, <b>pronome</b> e alguns <b>quantificadores</b>. As <b>invariáveis</b> não mudam: <b>advérbio</b>, <b>preposição</b>, <b>conjunção</b> e <b>interjeição</b>.",
   ex:["<b>O</b> (determinante) <b>gato</b> (nome) <b>preto</b> (adjetivo) <b>dormiu</b> (verbo) <b>tranquilamente</b> (advérbio) <b>no</b> (preposição em + determinante o) <b>sofá</b> (nome).", "<b>Alguns</b> alunos chegaram (determinante indefinido: vem antes do nome). <b>Alguns</b> chegaram cedo (pronome indefinido: está no lugar do nome).", "<b>Três</b> livros; <b>todos</b> os livros (quantificadores)."],
   truque:"Determinante ou pronome? Se vem <b>antes de um nome</b>, é determinante (<i>este livro</i>); se <b>substitui</b> o nome, é pronome (<i>quero este</i>).",
   erro:"Chamar «artigo» a todos os determinantes: o artigo (o, a, um, uma…) é só um tipo de determinante."},
  {id:"verbos-tipos", icon:"⚙️", t:"Verbos principais, copulativos e auxiliares",
   regra:"O verbo <b>principal</b> tem o significado principal da frase. O verbo <b>copulativo</b> liga o sujeito a uma característica (o predicativo do sujeito): <i>ser, estar, ficar, parecer, permanecer, continuar, andar, tornar-se</i>. O verbo <b>auxiliar</b> ajuda outro verbo: <i>ter</i> e <i>haver</i> nos tempos compostos (<i>tenho lido</i>) e <i>ser</i> na voz passiva (<i>foi escrito</i>).",
   ex:["A Ana <b>está</b> cansada. (copulativo)", "Eu <b>tinha</b> acabado o trabalho. (auxiliar de tempo composto)", "O bolo <b>foi</b> feito pelo avô. (auxiliar da passiva)"],
   truque:"Se depois do verbo vem uma característica do sujeito (cansada, alto, professor), o verbo é copulativo.",
   erro:"Achar que «ser» é sempre copulativo: em <i>O livro foi lido</i>, é auxiliar da passiva."},
  {id:"funcoes", icon:"🧩", t:"Funções sintáticas",
   regra:"<b>Sujeito</b>: de quem se fala (concorda com o verbo). <b>Predicado</b>: o que se diz do sujeito (começa no verbo). Dentro do predicado: <b>complemento direto</b> (sem preposição), <b>complemento indireto</b> (a alguém), <b>complemento oblíquo</b> (exigido pelo verbo, com preposição: <i>gostar de, ir para, morar em</i>), <b>predicativo do sujeito</b> (com verbo copulativo), <b>agente da passiva</b> (por + quem faz) e <b>modificador do grupo verbal</b> (acrescenta modo, tempo, lugar… e pode sair da frase). O <b>vocativo</b> chama alguém e fica entre vírgulas.",
   ex:["<b>O Rui</b> (sujeito) deu <b>um livro</b> (CD) <b>à irmã</b> (CI) <b>ontem</b> (modificador).", "Ela gosta <b>de música</b> (complemento oblíquo).", "O João está <b>feliz</b> (predicativo do sujeito).", "A carta foi escrita <b>pela Maria</b> (agente da passiva).", "<b>Pedro</b>, anda cá! (vocativo)"],
   truque:"Complemento direto → troca por <b>o, a, os, as</b> (deu-<b>o</b>). Complemento indireto → troca por <b>lhe, lhes</b> (deu-<b>lhe</b>). Se tirares o modificador, a frase continua certa; se tirares o oblíquo, fica incompleta (<i>Ela gosta…</i>).",
   erro:"Confundir o complemento oblíquo com o modificador: em <i>Moro em Lisboa</i>, «em Lisboa» é oblíquo (o verbo «morar» exige-o)."},
  {id:"passiva", icon:"🔄", t:"Frase ativa e frase passiva",
   regra:"Na frase <b>ativa</b>, o sujeito faz a ação. Na <b>passiva</b>, o complemento direto passa a sujeito, o verbo fica <b>ser + particípio</b> (no mesmo tempo) e quem faz a ação torna-se <b>agente da passiva</b> (com «por»).",
   ex:["Ativa: <b>O gato</b> comeu <b>o peixe</b>.", "Passiva: <b>O peixe</b> foi comido <b>pelo gato</b>.", "Ativa: Os alunos <b>escrevem</b> poemas. → Passiva: Os poemas <b>são escritos</b> pelos alunos."],
   truque:"O tempo do verbo «ser» na passiva é o tempo do verbo da ativa: comeu (pretérito perfeito) → foi (pretérito perfeito) comido.",
   erro:"Esquecer a concordância do particípio: <i>As cartas foram escritas</i> (feminino plural), e não «foram escrito»."},
  {id:"discurso", icon:"💬", t:"Discurso direto e discurso indireto",
   regra:"No <b>discurso direto</b> reproduzem-se as palavras exatas, com dois pontos, travessão ou aspas. No <b>indireto</b>, o narrador conta o que foi dito, com um verbo declarativo (<i>disse, perguntou, respondeu</i>) e «que» ou «se». Mudam as pessoas, os tempos verbais e as palavras de tempo e de lugar.",
   ex:["Direto: O Rui disse: — <b>Eu estou</b> cansado <b>hoje</b>.", "Indireto: O Rui disse que <b>ele estava</b> cansado <b>naquele dia</b>.", "Direto: — <b>Vens</b> amanhã? — perguntou a Ana. → Indireto: A Ana perguntou se <b>eu ia</b> no dia seguinte."],
   truque:"Tempos: presente → pretérito imperfeito; pretérito perfeito → mais-que-perfeito (<i>tinha feito</i>); futuro → condicional. Palavras: hoje → naquele dia; amanhã → no dia seguinte; aqui → ali; este → aquele.",
   erro:"Manter os travessões ou o «eu» de quem fala no discurso indireto."},
  {id:"clitico", icon:"📌", t:"Pronomes átonos: antes, depois ou no meio do verbo",
   regra:"Os pronomes <i>me, te, se, o, a, lhe, nos, vos, os, as, lhes</i> ficam, em regra, <b>depois do verbo</b>, com hífen: é a <b>ênclise</b> (<i>Dá-me o livro</i>). Vão <b>para antes do verbo</b>, sem hífen, quando há uma palavra que os «puxa»: é a <b>próclise</b>. No <b>futuro</b> e no <b>condicional</b>, se não houver nada que os puxe, ficam <b>no meio do verbo</b>: é a <b>mesóclise</b> (<i>dar-te-ei, dir-lhe-ia</i>).",
   ex:["Ênclise: Ela <b>ofereceu-me</b> um livro.", "Próclise: Ela <b>não me</b> ofereceu nada. · <b>Já te</b> disse. · <b>Quem te</b> contou? · Espero <b>que me</b> ligues.", "Mesóclise: <b>Contar-te-ei</b> tudo amanhã. (Mas: <b>Não te</b> contarei nada.)", "Com o, a, os, as: comprar + o → <b>comprá-lo</b>; fiz + o → <b>fi-lo</b>; dão + o → <b>dão-no</b>."],
   truque:"Palavras que puxam o pronome para antes: <b>não, nunca, ninguém, nada, já, também, ainda, só, sempre, talvez</b>, palavras interrogativas (<b>quem, quando, onde, porque</b>…) e conjunções como <b>que, quando, se, porque</b>.",
   erro:"Pôr o pronome antes do verbo sem razão, como no Brasil: em PT-PT diz-se <i>Dá-me</i>, e não «Me dá»."},
  {id:"oracoes", icon:"🔗", t:"Frase complexa: coordenação e subordinação",
   regra:"Uma frase complexa tem mais do que uma oração (mais do que um verbo principal). Na <b>coordenação</b>, as orações têm a mesma importância: <b>copulativas</b> (<i>e, nem</i>) e <b>adversativas</b> (<i>mas, porém, contudo, todavia, no entanto</i>). Na <b>subordinação</b>, uma oração depende da outra: <b>adverbiais temporais</b> (<i>quando, enquanto, logo que, assim que, sempre que, antes que, depois que</i>) e <b>adverbiais causais</b> (<i>porque, como, visto que, já que, uma vez que</i>).",
   ex:["Coordenada copulativa: Estudei <b>e</b> passei no teste.", "Coordenada adversativa: Estudei, <b>mas</b> não passei.", "Subordinada temporal: <b>Quando cheguei</b>, já tinham jantado.", "Subordinada causal: Fiquei em casa <b>porque estava doente</b>.", "Causal com «como» (sempre no início): <b>Como chovia</b>, levei o guarda-chuva."],
   truque:"Pergunta à oração: responde a «quando?» → temporal; responde a «porquê?» → causal.",
   erro:"Pôr vírgula antes de «e» numa coordenada simples (<i>Estudei e passei</i>) e esquecê-la antes de «mas» (<i>Estudei, mas…</i>)."},
  {id:"formacao", icon:"🧱", t:"Formação de palavras",
   regra:"Na <b>derivação</b> junta-se um afixo a uma palavra: <b>prefixo</b> antes (<i>in</i>feliz, <i>re</i>fazer) ou <b>sufixo</b> depois (feliz<i>mente</i>, livr<i>aria</i>). Na <b>composição</b> juntam-se duas ou mais palavras ou radicais: <b>morfológica</b> (radicais, muitas vezes gregos ou latinos: <i>agricultura, hidroelétrico, fotografia</i>) ou <b>morfossintática</b> (palavras inteiras, muitas vezes com hífen: <i>guarda-chuva, couve-flor, fim de semana</i>).",
   ex:["Derivação: pedra → <b>pedreiro</b>, <b>pedregulho</b>; fazer → <b>des</b>fazer.", "Composição: <b>guarda-roupa</b>, <b>passatempo</b>, <b>amor-perfeito</b>."],
   truque:"Derivada: tem uma palavra + um bocadinho que não existe sozinho (-eiro, des-). Composta: tem duas palavras (ou radicais) com significado.",
   erro:"Achar que <i>guarda-chuva</i> é derivada: «guarda» e «chuva» são duas palavras, por isso é composta."},
  {id:"tratamento", icon:"🤝", t:"Formas de tratamento",
   regra:"Escolhe-se a forma de tratamento conforme a pessoa e a situação. Com amigos e família usa-se <b>tu</b>. Em situações <b>formais</b> (um diretor, um médico, alguém mais velho que não conheces) usa-se <b>o senhor / a senhora</b>, o <b>cargo</b> (<i>Senhor Diretor</i>, <i>Senhora Professora</i>) ou, por escrito, <b>Vossa Excelência (V. Ex.ª)</b>. O verbo vai para a 3.ª pessoa.",
   ex:["Informal: — <b>Queres</b> vir lanchar?", "Formal: — <b>O senhor quer</b> sentar-se?", "Carta formal: «<b>Exmo. Senhor Presidente da Junta</b>, … <b>Com os melhores cumprimentos</b>, …»"],
   truque:"Na dúvida, numa carta ou num e-mail a um adulto que não conheces, usa a forma formal.",
   erro:"Misturar tratamentos na mesma frase: «O senhor <b>queres</b>…» (o certo é «O senhor quer»)."},
  {id:"pontuacao", icon:"✒️", t:"Sinais de pontuação",
   regra:"<b>Vírgula</b>: separa elementos de uma enumeração, o vocativo, expressões intercaladas, orações coordenadas adversativas (antes de «mas») e orações subordinadas que vêm no início. <b>Nunca</b> se põe vírgula entre o sujeito e o verbo, nem entre o verbo e o complemento direto. <b>Dois pontos</b>: antes de uma enumeração, de uma explicação ou do discurso direto. <b>Travessão</b>: marca as falas no diálogo. <b>Ponto e vírgula</b>: separa partes longas de uma enumeração ou orações já com vírgulas.",
   ex:["Comprei pão, leite, ovos e fruta.", "Rita, fecha a porta. (vocativo)", "Quando acabei o trabalho, fui brincar.", "Errado: <s>O meu irmão mais novo, joga futebol.</s> Certo: O meu irmão mais novo joga futebol."],
   truque:"Lê a frase em voz alta: a vírgula costuma estar onde fazes uma pequena pausa. Mas atenção: entre o sujeito e o verbo não há vírgula, mesmo que o sujeito seja comprido.",
   erro:"Separar o sujeito do verbo com vírgula."}
];

/* Prontuário: {c: categoria, e: o que se escreve mal (ou a dúvida), certo, r: a regra} */
const PRONTUARIO_PT = [
  {c:"Dúvidas frequentes", e:"há / à / a", certo:"<b>Há</b> três dias (verbo haver: tempo passado ou «existe»). Vou <b>à</b> escola (a + a). Vou <b>a</b> Lisboa; daqui <b>a</b> três dias (preposição; tempo futuro).", r:"Se dá para trocar por «existe» ou «faz» (tempo passado), é «há». Se dá para trocar por «ao» com um nome masculino, é «à»."},
  {c:"Dúvidas frequentes", e:"porque / porquê / por que / por quê", certo:"Faltei <b>porque</b> estava doente. <b>Porque</b> faltaste? (em PT-PT a pergunta também se escreve «porque»). Faltaste <b>porquê</b>? (no fim da frase, com acento). Não sei o <b>porquê</b> (= o motivo). A razão <b>por que</b> faltei (= pela qual).", r:"Em português de Portugal escreve-se «Porque…?» no início das perguntas; «porquê» com acento no fim da frase ou quando é nome (o porquê)."},
  {c:"Dúvidas frequentes", e:"mas / mais", certo:"Quero ir, <b>mas</b> não posso (oposição). Quero <b>mais</b> sopa (quantidade).", r:"«Mas» liga ideias contrárias (= porém). «Mais» é o contrário de «menos»."},
  {c:"Dúvidas frequentes", e:"mal / mau", certo:"Ele portou-se <b>mal</b>. Ele é um <b>mau</b> aluno.", r:"«Mal» é o contrário de «bem»; «mau» é o contrário de «bom»."},
  {c:"Dúvidas frequentes", e:"senão / se não", certo:"Despacha-te, <b>senão</b> chegas tarde (= caso contrário). <b>Se não</b> estudares, não passas (= caso não).", r:"Se dá para trocar por «caso não», escreve-se separado."},
  {c:"Dúvidas frequentes", e:"a fim de / afim", certo:"Estudei <b>a fim de</b> passar (= para). São palavras <b>afins</b> (= parecidas).", r:"«A fim de» indica finalidade e escreve-se separado."},
  {c:"Dúvidas frequentes", e:"acerca de / há cerca de / a cerca de", certo:"Falámos <b>acerca de</b> ti (= sobre). <b>Há cerca de</b> um ano (= faz aproximadamente). Fica <b>a cerca de</b> 2 km (= a aproximadamente).", r:"Pensa no significado: «sobre», «faz aproximadamente» ou «a uma distância de aproximadamente»."},
  {c:"Dúvidas frequentes", e:"haja / aja", certo:"Espero que <b>haja</b> bolo (verbo haver). É preciso que ele <b>aja</b> depressa (verbo agir).", r:"«Haja» vem de haver; «aja» vem de agir."},
  {c:"Escreve junto ou separado?", e:"concerteza", certo:"<b>com certeza</b>", r:"Escreve-se sempre separado."},
  {c:"Escreve junto ou separado?", e:"derrepente / de repente", certo:"<b>de repente</b>", r:"Escreve-se separado e com um só «r»."},
  {c:"Escreve junto ou separado?", e:"àsvezes / as vezes", certo:"<b>às vezes</b>", r:"Separado e com acento grave (a + as)."},
  {c:"Escreve junto ou separado?", e:"porisso", certo:"<b>por isso</b>", r:"Escreve-se separado."},
  {c:"Escreve junto ou separado?", e:"hei-de / hás-de / há-de", certo:"<b>hei de</b>, <b>hás de</b>, <b>há de</b>", r:"Com o Acordo Ortográfico de 1990, escreve-se sem hífen."},
  {c:"Verbos", e:"houveram muitas pessoas", certo:"<b>Houve</b> muitas pessoas.", r:"«Haver» com o sentido de «existir» fica sempre no singular: houve, há, havia."},
  {c:"Verbos", e:"fizestes / disseste-me tu / comestes", certo:"Tu <b>fizeste</b>, tu <b>comeste</b>.", r:"A 2.ª pessoa do singular do pretérito perfeito acaba em <b>-ste</b>, sem «s» no fim. «Fizestes» é a forma de «vós»."},
  {c:"Verbos", e:"para mim fazer", certo:"Isto é <b>para eu fazer</b>.", r:"Antes de um verbo no infinitivo, quem faz a ação é sujeito: usa-se «eu» (para eu fazer, para tu leres)."},
  {c:"Verbos", e:"quando eu ver / se eu vir (de vir)", certo:"Quando eu <b>vir</b> o filme (ver). Quando eu <b>vier</b> a tua casa (vir).", r:"No futuro do conjuntivo: ver → quando eu <b>vir</b>; vir → quando eu <b>vier</b>."},
  {c:"Verbos", e:"interviu / manteu", certo:"<b>interveio</b>, <b>manteve</b>", r:"Os verbos derivados conjugam-se como o verbo de base: intervir como vir (veio → interveio); manter como ter (teve → manteve)."},
  {c:"Verbos", e:"póssamos / fássamos", certo:"<b>possamos</b>, <b>façamos</b>", r:"O presente do conjuntivo não leva acento nestas formas: que nós possamos, façamos, sejamos."},
  {c:"Verbos", e:"cantamos ontem", certo:"Ontem nós <b>cantámos</b>.", r:"Em português de Portugal, o pretérito perfeito dos verbos em -ar leva acento na 1.ª pessoa do plural (cantámos), para se distinguir do presente (hoje cantamos)."},
  {c:"Acentos", e:"pôr / por", certo:"Vou <b>pôr</b> a mesa (verbo). Passei <b>por</b> aqui (preposição).", r:"O verbo «pôr» leva acento circunflexo."},
  {c:"Acentos", e:"pôde / pode", certo:"Ontem ele não <b>pôde</b> vir (passado). Hoje ele <b>pode</b> vir (presente).", r:"«Pôde» (pretérito perfeito) leva acento; «pode» (presente) não."},
  {c:"Acentos", e:"tem / têm · vem / vêm", certo:"Ele <b>tem</b>, eles <b>têm</b>. Ele <b>vem</b>, eles <b>vêm</b>.", r:"No plural (eles), estes verbos levam acento circunflexo."},
  {c:"Acentos", e:"vêem / lêem / dêem / crêem", certo:"<b>veem</b>, <b>leem</b>, <b>deem</b>, <b>creem</b>", r:"Com o Acordo Ortográfico de 1990, perderam o acento."},
  {c:"Acentos", e:"herói / heroico · ideia / idéia", certo:"<b>herói</b>, <b>heroico</b>, <b>ideia</b>, <b>assembleia</b>", r:"O ditongo «oi» leva acento só no fim da palavra (herói, dói); «ei» não leva acento (ideia)."},
  {c:"Acordo Ortográfico (AO90)", e:"acção / óptimo / direcção / Janeiro", certo:"<b>ação</b>, <b>ótimo</b>, <b>direção</b>, <b>janeiro</b>", r:"As consoantes que não se leem caíram (c, p). Os meses e as estações escrevem-se com letra minúscula."},
  {c:"Acordo Ortográfico (AO90)", e:"pára / pêlo", certo:"<b>para</b> (verbo parar: «o autocarro para aqui»), <b>pelo</b>", r:"Perderam o acento diferencial. Mantém-se em <b>pôr</b> e <b>pôde</b>."},
  {c:"Acordo Ortográfico (AO90)", e:"mantêm-se as letras que se leem", certo:"<b>facto</b>, <b>contacto</b>, <b>receção</b> (PT-PT)", r:"Em português de Portugal o «c» de facto e contacto lê-se, por isso fica. Em receção, o «p» caiu porque não se lê."},
  {c:"Maiúsculas e minúsculas", e:"Segunda-Feira / Primavera / Português (a disciplina?)", certo:"<b>segunda-feira</b>, <b>primavera</b>; a disciplina de <b>Português</b> (maiúscula facultativa nas disciplinas)", r:"Dias da semana, meses e estações do ano escrevem-se com minúscula."}
];

/* PT-PT ↔ PT-BR: palavras e construções diferentes */
const PT_BR = [
  ["autocarro","ônibus"], ["comboio","trem"], ["ecrã","tela"], ["telemóvel","celular"], ["pequeno-almoço","café da manhã"], ["casa de banho","banheiro"],
  ["frigorífico","geladeira"], ["sumo","suco"], ["equipa","time"], ["ficheiro","arquivo"], ["rato (do computador)","mouse"], ["passadeira (na estrada)","faixa de pedestres"],
  ["Estou <b>a fazer</b> os trabalhos.","Estou <b>fazendo</b> os trabalhos."], ["<b>Dá-me</b> o livro.","<b>Me dá</b> o livro."], ["<b>Tu</b> queres?","<b>Você</b> quer?"], ["facto","fato"]
];

/* 🔤 Verbos — tempos do 2.º ciclo. Pessoas: eu, tu, ele/ela/você, nós, vós, eles/elas/vocês. */
const VERB_TEMPOS = [
  ["pres","Indicativo · Presente"], ["pp","Indicativo · Pretérito perfeito"], ["imp","Indicativo · Pretérito imperfeito"], ["fut","Indicativo · Futuro"],
  ["cond","Condicional"], ["cpres","Conjuntivo · Presente (que eu…)"], ["cimp","Conjuntivo · Pretérito imperfeito (se eu…)"], ["cfut","Conjuntivo · Futuro (quando eu…)"],
  ["imper","Imperativo (tu, você, nós, vós, vocês)"]
];
const VERB_PESSOAS = ["eu","tu","ele/ela/você","nós","vós","eles/elas/vocês"];
const VERB_IMPER_PESSOAS = ["(tu)","(você)","(nós)","(vós)","(vocês)"];
/* modelos regulares: raiz + terminações (verbos sem mudanças de ortografia, como os da lista) */
const VERB_MODELOS = {
  ar: {pres:["o","as","a","amos","ais","am"], pp:["ei","aste","ou","ámos","astes","aram"], imp:["ava","avas","ava","ávamos","áveis","avam"],
       cpres:["e","es","e","emos","eis","em"], cimp:["asse","asses","asse","ássemos","ásseis","assem"], cfut:["ar","ares","ar","armos","ardes","arem"], imper:["a","e","emos","ai","em"]},
  er: {pres:["o","es","e","emos","eis","em"], pp:["i","este","eu","emos","estes","eram"], imp:["ia","ias","ia","íamos","íeis","iam"],
       cpres:["a","as","a","amos","ais","am"], cimp:["esse","esses","esse","êssemos","êsseis","essem"], cfut:["er","eres","er","ermos","erdes","erem"], imper:["e","a","amos","ei","am"]},
  ir: {pres:["o","es","e","imos","is","em"], pp:["i","iste","iu","imos","istes","iram"], imp:["ia","ias","ia","íamos","íeis","iam"],
       cpres:["a","as","a","amos","ais","am"], cimp:["isse","isses","isse","íssemos","ísseis","issem"], cfut:["ir","ires","ir","irmos","irdes","irem"], imper:["e","a","amos","i","am"]}
};
const VERB_FUT = ["ei","ás","á","emos","eis","ão"], VERB_COND = ["ia","ias","ia","íamos","íeis","iam"];
const VERB_REGULARES = {
  ar: ["cantar","falar","estudar","morar","saltar","gostar","andar","ajudar"],
  er: ["comer","beber","correr","viver","aprender","escrever","responder","vender"],
  ir: ["partir","abrir","assistir","decidir","discutir","dividir","permitir","unir"]
};
const VERB_IRREG = {
  ser:   {pres:"sou és é somos sois são", pp:"fui foste foi fomos fostes foram", imp:"era eras era éramos éreis eram", fut:"serei serás será seremos sereis serão", cond:"seria serias seria seríamos seríeis seriam", cpres:"seja sejas seja sejamos sejais sejam", cimp:"fosse fosses fosse fôssemos fôsseis fossem", cfut:"for fores for formos fordes forem", imper:"sê seja sejamos sede sejam"},
  estar: {pres:"estou estás está estamos estais estão", pp:"estive estiveste esteve estivemos estivestes estiveram", imp:"estava estavas estava estávamos estáveis estavam", fut:"estarei estarás estará estaremos estareis estarão", cond:"estaria estarias estaria estaríamos estaríeis estariam", cpres:"esteja estejas esteja estejamos estejais estejam", cimp:"estivesse estivesses estivesse estivéssemos estivésseis estivessem", cfut:"estiver estiveres estiver estivermos estiverdes estiverem", imper:"está esteja estejamos estai estejam"},
  ter:   {pres:"tenho tens tem temos tendes têm", pp:"tive tiveste teve tivemos tivestes tiveram", imp:"tinha tinhas tinha tínhamos tínheis tinham", fut:"terei terás terá teremos tereis terão", cond:"teria terias teria teríamos teríeis teriam", cpres:"tenha tenhas tenha tenhamos tenhais tenham", cimp:"tivesse tivesses tivesse tivéssemos tivésseis tivessem", cfut:"tiver tiveres tiver tivermos tiverdes tiverem", imper:"tem tenha tenhamos tende tenham"},
  haver: {pres:"hei hás há havemos haveis hão", pp:"houve houveste houve houvemos houvestes houveram", imp:"havia havias havia havíamos havíeis haviam", fut:"haverei haverás haverá haveremos havereis haverão", cond:"haveria haverias haveria haveríamos haveríeis haveriam", cpres:"haja hajas haja hajamos hajais hajam", cimp:"houvesse houvesses houvesse houvéssemos houvésseis houvessem", cfut:"houver houveres houver houvermos houverdes houverem", imper:"há haja hajamos havei hajam"},
  ir:    {pres:"vou vais vai vamos ides vão", pp:"fui foste foi fomos fostes foram", imp:"ia ias ia íamos íeis iam", fut:"irei irás irá iremos ireis irão", cond:"iria irias iria iríamos iríeis iriam", cpres:"vá vás vá vamos vades vão", cimp:"fosse fosses fosse fôssemos fôsseis fossem", cfut:"for fores for formos fordes forem", imper:"vai vá vamos ide vão"},
  fazer: {pres:"faço fazes faz fazemos fazeis fazem", pp:"fiz fizeste fez fizemos fizestes fizeram", imp:"fazia fazias fazia fazíamos fazíeis faziam", fut:"farei farás fará faremos fareis farão", cond:"faria farias faria faríamos faríeis fariam", cpres:"faça faças faça façamos façais façam", cimp:"fizesse fizesses fizesse fizéssemos fizésseis fizessem", cfut:"fizer fizeres fizer fizermos fizerdes fizerem", imper:"faz faça façamos fazei façam"},
  dizer: {pres:"digo dizes diz dizemos dizeis dizem", pp:"disse disseste disse dissemos dissestes disseram", imp:"dizia dizias dizia dizíamos dizíeis diziam", fut:"direi dirás dirá diremos direis dirão", cond:"diria dirias diria diríamos diríeis diriam", cpres:"diga digas diga digamos digais digam", cimp:"dissesse dissesses dissesse disséssemos dissésseis dissessem", cfut:"disser disseres disser dissermos disserdes disserem", imper:"diz diga digamos dizei digam"},
  pôr:   {pres:"ponho pões põe pomos pondes põem", pp:"pus puseste pôs pusemos pusestes puseram", imp:"punha punhas punha púnhamos púnheis punham", fut:"porei porás porá poremos poreis porão", cond:"poria porias poria poríamos poríeis poriam", cpres:"ponha ponhas ponha ponhamos ponhais ponham", cimp:"pusesse pusesses pusesse puséssemos pusésseis pusessem", cfut:"puser puseres puser pusermos puserdes puserem", imper:"põe ponha ponhamos ponde ponham"},
  ver:   {pres:"vejo vês vê vemos vedes veem", pp:"vi viste viu vimos vistes viram", imp:"via vias via víamos víeis viam", fut:"verei verás verá veremos vereis verão", cond:"veria verias veria veríamos veríeis veriam", cpres:"veja vejas veja vejamos vejais vejam", cimp:"visse visses visse víssemos vísseis vissem", cfut:"vir vires vir virmos virdes virem", imper:"vê veja vejamos vede vejam"},
  vir:   {pres:"venho vens vem vimos vindes vêm", pp:"vim vieste veio viemos viestes vieram", imp:"vinha vinhas vinha vínhamos vínheis vinham", fut:"virei virás virá viremos vireis virão", cond:"viria virias viria viríamos viríeis viriam", cpres:"venha venhas venha venhamos venhais venham", cimp:"viesse viesses viesse viéssemos viésseis viessem", cfut:"vier vieres vier viermos vierdes vierem", imper:"vem venha venhamos vinde venham"},
  poder: {pres:"posso podes pode podemos podeis podem", pp:"pude pudeste pôde pudemos pudestes puderam", imp:"podia podias podia podíamos podíeis podiam", fut:"poderei poderás poderá poderemos podereis poderão", cond:"poderia poderias poderia poderíamos poderíeis poderiam", cpres:"possa possas possa possamos possais possam", cimp:"pudesse pudesses pudesse pudéssemos pudésseis pudessem", cfut:"puder puderes puder pudermos puderdes puderem", imper:"— — — — —"},
  querer:{pres:"quero queres quer queremos quereis querem", pp:"quis quiseste quis quisemos quisestes quiseram", imp:"queria querias queria queríamos queríeis queriam", fut:"quererei quererás quererá quereremos querereis quererão", cond:"quereria quererias quereria quereríamos quereríeis quereriam", cpres:"queira queiras queira queiramos queirais queiram", cimp:"quisesse quisesses quisesse quiséssemos quisésseis quisessem", cfut:"quiser quiseres quiser quisermos quiserdes quiserem", imper:"quer queira queiramos querei queiram"},
  saber: {pres:"sei sabes sabe sabemos sabeis sabem", pp:"soube soubeste soube soubemos soubestes souberam", imp:"sabia sabias sabia sabíamos sabíeis sabiam", fut:"saberei saberás saberá saberemos sabereis saberão", cond:"saberia saberias saberia saberíamos saberíeis saberiam", cpres:"saiba saibas saiba saibamos saibais saibam", cimp:"soubesse soubesses soubesse soubéssemos soubésseis soubessem", cfut:"souber souberes souber soubermos souberdes souberem", imper:"sabe saiba saibamos sabei saibam"},
  dar:   {pres:"dou dás dá damos dais dão", pp:"dei deste deu demos destes deram", imp:"dava davas dava dávamos dáveis davam", fut:"darei darás dará daremos dareis darão", cond:"daria darias daria daríamos daríeis dariam", cpres:"dê dês dê demos deis deem", cimp:"desse desses desse déssemos désseis dessem", cfut:"der deres der dermos derdes derem", imper:"dá dê demos dai deem"},
  ler:   {pres:"leio lês lê lemos ledes leem", pp:"li leste leu lemos lestes leram", imp:"lia lias lia líamos líeis liam", fut:"lerei lerás lerá leremos lereis lerão", cond:"leria lerias leria leríamos leríeis leriam", cpres:"leia leias leia leiamos leiais leiam", cimp:"lesse lesses lesse lêssemos lêsseis lessem", cfut:"ler leres ler lermos lerdes lerem", imper:"lê leia leiamos lede leiam"}
};
