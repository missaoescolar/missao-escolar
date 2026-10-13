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
  const NHM = q => "https://www.nhm.ac.uk/search.html?q="+encodeURIComponent(q);
  const europeana = (q, txt) => ({icon:"🏛️", title:"Europeana: "+txt, desc:"Quadros, gravuras, fotografias e documentos dos arquivos e museus europeus. Muitas imagens são livres.", site:"europeana.eu", url:E(q)});
  const artes = (q, txt) => ({icon:"🖼️", title:"Google Arts & Culture: "+txt, desc:"Museus virtuais, obras de arte em alta resolução e exposições online.", site:"artsandculture.google.com", url:G(q)});
  const nhm = (q, txt) => ({icon:"🦖", title:"Natural History Museum: "+txt, desc:"O Museu de História Natural de Londres: artigos, imagens e curiosidades (em inglês).", site:"nhm.ac.uk", url:NHM(q)});
  const SNACKS_VIDA = {icon:"🧪", title:"Exploratorium — experiências de ciências da vida", desc:"«Science Snacks»: experiências simples para fazer em casa ou na escola (em inglês).", site:"exploratorium.edu", url:"https://www.exploratorium.edu/snacks/subject/life-science"};
  const SNACKS_TERRA = {icon:"🧪", title:"Exploratorium — experiências de ciências da Terra", desc:"«Science Snacks»: experiências simples sobre rochas, água e clima (em inglês).", site:"exploratorium.edu", url:"https://www.exploratorium.edu/snacks/subject/earth-science"};
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
    c3: [SNACKS_VIDA], c4: [SNACKS_VIDA], c6: [SNACKS_VIDA, nhm("pollination","polinização")], c8: [SNACKS_VIDA, nhm("microbes","micróbios")],
    g1: [nhm("minerals","minerais"), SNACKS_TERRA], g2: [SNACKS_TERRA], g3: [nhm("fossils","fósseis"), nhm("dinosaurs","dinossauros")],
    g4: [nhm("mass extinction","extinções em massa")],
    g8: [nhm("rock cycle","o ciclo das rochas")]
  };
  Object.keys(MAIS).forEach(k => { MISSAO_LINKS[k] = (MISSAO_LINKS[k] || []).concat(MAIS[k]); });
})();
