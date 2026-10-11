/* Recursos externos escolhidos a dedo, por mundo.
   MISSAO_SIMS — simulações interativas PhET (Universidade do Colorado, licença CC BY 4.0), que abrem dentro do mundo,
                 no passo 🎯 Praticar. Precisam de internet. locale=pt pede a versão em português, quando existe.
   MISSAO_LINKS — mais sites de confiança, juntados aos "Sites para explorar" do passo 🔭 Explorar.
   Critérios: gratuitos, sem publicidade (ou indicado), sem conta obrigatória (ou indicado), conteúdo rigoroso. */
const PHET = id => "https://phet.colorado.edu/sims/html/"+id+"/latest/"+id+"_all.html?locale=pt";

const MISSAO_SIMS = {
  n1: [{t:"Aritmética", d:"Treina a multiplicação e descobre os fatores de um número (o separador «Fatorizar» é ótimo para divisores).", url:PHET("arithmetic")}],
  n2: [
    {t:"Introdução às frações", d:"Monta frações com pizzas, barras e copos, e vê o que quer dizer numerador e denominador.", url:PHET("fractions-intro")},
    {t:"Igualdade de frações", d:"Descobre frações equivalentes: diferentes no aspeto, iguais no valor.", url:PHET("fractions-equality")},
    {t:"Construir uma fração", d:"Um jogo: constrói as frações pedidas com peças e números.", url:PHET("build-a-fraction")}
  ],
  n3: [{t:"Taxas unitárias (compras)", d:"Compra fruta e legumes e compara preços: quanto custa uma unidade? Números decimais no dia a dia.", url:PHET("unit-rates")}],
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

const BIODIGITAL = {icon:"🫀", title:"BioDigital Human", desc:"O corpo humano em 3D: roda, aproxima e esconde órgãos. Em inglês; algumas partes pedem registo gratuito.", site:"human.biodigital.com", url:"https://human.biodigital.com"};
const BABADUM = {icon:"🔤", title:"Babadum", desc:"Jogos rápidos de vocabulário com desenhos, em inglês e noutras línguas. Grátis e sem conta.", site:"babadum.com", url:"https://babadum.com"};
const MISSAO_LINKS = {
  c2: [BIODIGITAL], c3: [BIODIGITAL], c4: [BIODIGITAL], c5: [BIODIGITAL],
  c6: [{icon:"🚀", title:"NASA Climate Kids — o ciclo da água", desc:"Explicações e jogos da NASA sobre a água, o clima e a Terra. Em inglês.", site:"climatekids.nasa.gov", url:"https://climatekids.nasa.gov/water-cycle/"}],
  e1: [BABADUM], e3: [BABADUM], e4: [BABADUM], e6: [BABADUM],
  n4: [{icon:"💻", title:"Code.org — Hora do Código", desc:"Atividades de programação com blocos, cheias de padrões e sequências. Grátis; em português.", site:"code.org", url:"https://code.org/learn"}]
};
