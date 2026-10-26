/* Partilhado por index.html, 6ano.html e resumo.html.
   Junta o conteúdo extra (data/extra-*.js) e constrói os links para as fontes de confiança. */
const MISSAO_EXTRA = Object.assign({},
  typeof HGP_EXTRA !== "undefined" ? HGP_EXTRA : {},
  typeof MATH_EXTRA !== "undefined" ? MATH_EXTRA : {},
  typeof CN_EXTRA !== "undefined" ? CN_EXTRA : {},
  typeof ENG_EXTRA !== "undefined" ? ENG_EXTRA : {},
  typeof PT_EXTRA !== "undefined" ? PT_EXTRA : {},
  typeof CN7_EXTRA !== "undefined" ? CN7_EXTRA : {}
);

/* Disciplinas do 6.º ano, pela ordem dos separadores. key = usado nos ids da página e no localStorage */
const MISSAO_SUBJECTS_6 = [
  {key:"pt",   name:"Português",          icon:"📖", store:"pt_missions",   worlds: typeof PT_WORLDS   !== "undefined" ? PT_WORLDS   : []},
  {key:"math", name:"Matemática",         icon:"🔢", store:"math_missions", worlds: typeof MATH_WORLDS !== "undefined" ? MATH_WORLDS : []},
  {key:"eng",  name:"Inglês",             icon:"🌐", store:"eng_missions",  worlds: typeof ENG_WORLDS  !== "undefined" ? ENG_WORLDS  : []},
  {key:"hgp",  name:"HGP",                icon:"📜", store:"hgp_missions",  worlds: typeof HGP_WORLDS  !== "undefined" ? HGP_WORLDS  : []},
  {key:"cn",   name:"Ciências Naturais",  icon:"🔬", store:"cn_missions",   worlds: typeof CN_WORLDS   !== "undefined" ? CN_WORLDS   : []},
  {key:"fin",  name:"Dinheiro e Casa",    icon:"💶", store:"fin_missions",  worlds: typeof FIN_WORLDS  !== "undefined" ? FIN_WORLDS  : []}   // literacia financeira e economia doméstica
];

/* Disciplinas do 7.º ano já prontas (as outras ainda estão em preparação). */
const MISSAO_SUBJECTS_7 = [
  {key:"mat7", name:"Matemática", ano:"7", icon:"🔢", store:"mat7_missions", page:"7ano.html", worlds: typeof MAT7_WORLDS !== "undefined" ? MAT7_WORLDS : []},
  {key:"eng7", name:"Inglês", ano:"7", icon:"🌐", store:"eng7_missions", page:"7ano.html", worlds: typeof ENG7_WORLDS !== "undefined" ? ENG7_WORLDS : []},
  {key:"hist7", name:"História", ano:"7", icon:"🏛️", store:"hist7_missions", page:"7ano.html", worlds: typeof HIST7_WORLDS !== "undefined" ? HIST7_WORLDS : []},
  {key:"geo7", name:"Geografia", ano:"7", icon:"🗺️", store:"geo7_missions", page:"7ano.html", worlds: typeof GEO7_WORLDS !== "undefined" ? GEO7_WORLDS : []},
  {key:"esp7", name:"Espanhol", ano:"7", icon:"🗣️", store:"esp7_missions", page:"7ano.html", worlds: typeof ESP7_WORLDS !== "undefined" ? ESP7_WORLDS : []},
  {key:"cn7", name:"Ciências Naturais", ano:"7", icon:"🔬", store:"cn7_missions", page:"7ano.html", worlds: typeof CN7_WORLDS !== "undefined" ? CN7_WORLDS : []},
  {key:"fq7", name:"Físico-Química", ano:"7", icon:"⚗️", store:"fq7_missions", page:"7ano.html", worlds: typeof FQ7_WORLDS !== "undefined" ? FQ7_WORLDS : []}
];
/* Matemática do 3.º ano (1.º ciclo): a primeira disciplina deste ano; as outras ainda estão em preparação. */
const MISSAO_SUBJECTS_3 = [
  {key:"mat3", name:"Matemática", ano:"3", icon:"🔢", store:"mat3_missions", page:"3ano.html", worlds: typeof MAT3_WORLDS !== "undefined" ? MAT3_WORLDS : []}
];
/* every year that is ready, for the pages that show everything (caderno, plano, resumos, área familiar) */
const MISSAO_SUBJECTS_TODAS = MISSAO_SUBJECTS_6.concat(MISSAO_SUBJECTS_7, MISSAO_SUBJECTS_3);
/* Each year page says which year it is (var MISSAO_ANO = "7" before the scripts); without it, it is the 6.º ano. */
const MISSAO_ANO_ATUAL = (typeof MISSAO_ANO !== "undefined") ? String(MISSAO_ANO) : "6";
const MISSAO_SUBJECTS = MISSAO_ANO_ATUAL === "7" ? MISSAO_SUBJECTS_7 : MISSAO_ANO_ATUAL === "3" ? MISSAO_SUBJECTS_3 : MISSAO_SUBJECTS_6;

/* Fontes com pesquisa por link (testadas num browser). lang: língua do site. */
const FONTES = {
  rtp:      {name:"RTP Ensina",                lang:"PT", url:"https://ensina.rtp.pt/?s="},
  khan:     {name:"Khan Academy",              lang:"PT", url:"https://pt.khanacademy.org/search?page_search_query="},
  britkids: {name:"Britannica Kids",           lang:"EN", url:"https://kids.britannica.com/kids/search/articles?query="},
  brit:     {name:"Encyclopaedia Britannica",  lang:"EN", url:"https://www.britannica.com/search?query="},
  bitesize: {name:"BBC Bitesize",              lang:"EN", url:"https://www.bbc.co.uk/bitesize/search?q="},
  natgeo:   {name:"National Geographic Kids",  lang:"EN", url:"https://kids.nationalgeographic.com/search?q="},
  priberam: {name:"Dicionário Priberam",       lang:"PT", url:"https://dicionario.priberam.org/", label:"Significado de"}
};

function missaoExtra(w){ return MISSAO_EXTRA[w.id] || {}; }

/* {s,q} → link de pesquisa; {u,n} → link direto */
function missaoLink(l){
  if(l.u) return {href:l.u, site:l.u.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""), label:l.n, lang:"", direct:true};
  const f = FONTES[l.s];
  return {href:f.url + encodeURIComponent(l.q), site:f.name, label:(f.label || "Pesquisar")+" “"+l.q+"”", lang:f.lang, direct:false};
}

/* Modo Desafio: guardado no browser, partilhado entre páginas */
function missaoChallengeOn(){ return MissaoArmazem.lerTexto("challenge_mode", "0")==="1"; }
function missaoSetChallenge(on){ MissaoArmazem.gravarTexto("challenge_mode", on ? "1" : "0"); }
function missaoQuizFor(w){
  const d = missaoExtra(w).desafio;
  return (missaoChallengeOn() && d && d.length) ? d : (w.quiz || []);
}
