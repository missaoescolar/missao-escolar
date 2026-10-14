/* Recursos externos escolhidos a dedo, por mundo.
   MISSAO_SIMS — simulações interativas PhET (Universidade do Colorado, licença CC BY 4.0), que abrem dentro do mundo,
                 no passo 🎯 Praticar. Precisam de internet. locale=pt pede a versão em português, quando existe.
   MISSAO_LINKS — mais sites de confiança, juntados aos "Sites para explorar" do passo 🔭 Explorar.
   Critérios: gratuitos, sem publicidade (ou indicado), sem conta obrigatória, conteúdo rigoroso. */
const PHET = id => "https://phet.colorado.edu/sims/html/"+id+"/latest/"+id+"_all.html?locale=pt";

const MISSAO_SIMS = {
  n1: [{t:"Aritmética", d:"Treina a multiplicação e descobre os fatores de um número (o separador «Fatorizar» é ótimo para divisores).", url:PHET("arithmetic")}],
  n2: [
    {t:"Introdução às frações", d:"Monta frações com pizzas, barras e copos, e vê o que quer dizer numerador e denominador.", url:PHET("fractions-intro")},
    {t:"Igualdade de frações", d:"Descobre frações equivalentes: diferentes no aspeto, iguais no valor.", url:PHET("fractions-equality")},
    {t:"Construir uma fração", d:"Um jogo: constrói as frações pedidas com peças e números.", url:PHET("build-a-fraction")},
    {t:"Números mistos", d:"Junta pedaços maiores do que um inteiro e vê a mesma quantidade como fração e como número misto (ex.: 7/4 = 1 e 3/4).", url:PHET("fractions-mixed-numbers")}
  ],
  n3: [
    {t:"Taxas unitárias (compras)", d:"Compra fruta e legumes e compara preços: quanto custa uma unidade? Números decimais no dia a dia.", url:PHET("unit-rates")},
    {t:"Área e números decimais", d:"Multiplica decimais com um retângulo: 0,3 × 0,2 é a área de um retângulo com 0,3 por 0,2 — e vês porque dá 0,06.", url:PHET("area-model-decimals")}
  ],
  n4: [
    {t:"Razão e proporção", d:"Mexe as duas mãos e encontra a proporção certa — sente a proporcionalidade direta.", url:PHET("ratio-and-proportion")},
    {t:"Recreio das proporções", d:"Colares, tintas e bilhares: mantém a proporção quando as quantidades mudam.", url:PHET("proportion-playground")}
  ],
  n5: [{t:"Construtor de áreas", d:"Constrói figuras com quadradinhos e vê a área e o perímetro a mudar. Há um modo de jogo!", url:PHET("area-builder")}],
  n8: [
    {t:"Probabilidades: a máquina Plinko", d:"Larga bolas e vê como o acaso forma um padrão quando se repete muitas vezes.", url:PHET("plinko-probability")},
    {t:"Média: partilhar e equilibrar", d:"Reparte doces e água para perceber o que é a média.", url:PHET("mean-share-and-balance")}
  ]
};

const BABADUM = {icon:"🔤", title:"Babadum", desc:"Jogos rápidos de vocabulário com desenhos, em inglês e noutras línguas. Grátis e sem conta.", site:"babadum.com", url:"https://babadum.com"};
const MISSAO_LINKS = {
  c6: [{icon:"🚀", title:"NASA Climate Kids — o ciclo da água", desc:"Explicações e jogos da NASA sobre a água, o clima e a Terra. Em inglês.", site:"climatekids.nasa.gov", url:"https://climatekids.nasa.gov/water-cycle/"}],
  n1: [{icon:"🥁", title:"Chrome Music Lab — Song Maker", desc:"m.m.c. com música: põe um tambor a tocar de 3 em 3 tempos e outro de 4 em 4. Prevê quando batem juntos e depois carrega no play. Grátis e sem conta.", site:"musiclab.chromeexperiments.com", url:"https://musiclab.chromeexperiments.com/Song-Maker/"}],
  n2: [{icon:"🎵", title:"Chrome Music Lab — Song Maker", desc:"Frações com música: nas definições, divide cada tempo em 2, 3 ou 4 partes e ouve metades, terços e quartos do tempo. Grátis e sem conta.", site:"musiclab.chromeexperiments.com", url:"https://musiclab.chromeexperiments.com/Song-Maker/"}],
  e1: [BABADUM], e3: [BABADUM], e4: [BABADUM], e6: [BABADUM],
  n4: [{icon:"💻", title:"Code.org — Hora do Código", desc:"Atividades de programação com blocos, cheias de padrões e sequências. Grátis; em português.", site:"code.org", url:"https://code.org/learn"}]
};

/* ---------- mais sites de confiança (museus, arquivos e ciência), por mundo ---------- */
(function(){
  const E = q => "https://www.europeana.eu/pt/search?query="+encodeURIComponent(q);
  const G = q => "https://artsandculture.google.com/search?q="+encodeURIComponent(q);
  const europeana = (q, txt) => ({icon:"🏛️", title:"Europeana: "+txt, desc:"Quadros, gravuras, fotografias e documentos dos arquivos e museus europeus. Muitas imagens são livres.", site:"europeana.eu", url:E(q)});
  const artes = (q, txt) => ({icon:"🖼️", title:"Google Arts & Culture: "+txt, desc:"Museus virtuais, obras de arte em alta resolução e exposições online.", site:"artsandculture.google.com", url:G(q)});
  // Natural History Museum (Londres): always a page about the theme itself, never a search (checked: open without an account)
  const nhm = (pagina, txt, desc) => ({icon:"🦖", title:"Natural History Museum: "+txt, desc:desc+" Em inglês.", site:"nhm.ac.uk", url:"https://www.nhm.ac.uk/"+pagina});
  const MAIS = {
    m1: [europeana("terramoto Lisboa 1755","o terramoto de 1755"), artes("Palácio Nacional de Mafra","Palácio de Mafra")],
    m2: [europeana("D. Pedro IV","D. Pedro IV e o liberalismo")],
    m3: [europeana("caminho de ferro Portugal","comboios e indústria"), artes("Gustave Eiffel","Gustave Eiffel")],
    m4: [europeana("República Portuguesa 1910","a República de 1910")],
    m5: [europeana("Estado Novo Portugal","o Estado Novo")],
    m6: [artes("Revolução dos Cravos","a Revolução dos Cravos")],
    m8: [europeana("União Europeia","a construção europeia")],
    p6: [artes("Fernando Pessoa","Fernando Pessoa"), artes("Luís de Camões","Luís de Camões")],
    p7: [artes("Teatro Nacional D. Maria II","o Teatro D. Maria II")],
    c6: [nhm("discover/Rainbow-nature-glory-of-green.html","porque é que as folhas são verdes","A clorofila apanha a luz para a fotossíntese e reflete o verde."),
         nhm("discover/insect-pollination.html","os insetos polinizadores","Sete insetos que levam o pólen de flor em flor, e porque as plantas precisam deles.")],
    c8: [nhm("discover/news/2022/june/worlds-largest-bacteria-are-visible-naked-eye.html","a maior bactéria do mundo","Uma bactéria tão grande que se vê a olho nu, ao contrário de quase todas as outras."),
         nhm("discover/hidden-soil-life.html","a vida escondida no solo","Bactérias, fungos e outros seres minúsculos que vivem no solo e o mantêm saudável.")],
    g1: [nhm("discover/minerals-sparkling-sensitive-and-toxic.html","os minerais","O que são os minerais e porque são tão diferentes uns dos outros.")],
    g3: [nhm("discover/what-is-a-fossil.html","o que é um fóssil","Os tipos de fósseis e o que nos contam sobre a vida no passado."),
         nhm("discover/how-are-fossils-formed.html","como se formam os fósseis","Passo a passo: do animal enterrado em sedimentos até ao osso transformado em pedra.")],
    g4: [nhm("discover/what-is-mass-extinction-and-are-we-facing-a-sixth-one.html","as extinções em massa","As cinco grandes extinções da história da Terra e as suas causas.")],
    g8: [nhm("take-part/identify-nature/beginners-guide-to-identifying-uk-rock-types.html","os tipos de rocha e o ciclo das rochas","Rochas magmáticas, sedimentares e metamórficas, e como umas se transformam nas outras.")]
  };
  Object.keys(MAIS).forEach(k => { MISSAO_LINKS[k] = (MISSAO_LINKS[k] || []).concat(MAIS[k]); });
})();
