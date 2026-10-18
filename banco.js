/* Banco de perguntas da 🎯 Missão de hoje, com repetição espaçada.
   - Junta as perguntas de cada mundo (quiz + desafio) e cria outras a partir do mini-glossário
     (palavra ↔ definição) e das linhas do tempo de HGP (anos e "o que aconteceu primeiro?").
     Assim, tudo o que é perguntado vem de conteúdo já verificado.
   - Cada pergunta tem um id estável (ex.: "c4:q3"). Guardamos, por pergunta, uma "caixa" (sistema de Leitner):
     acertar → caixa seguinte, volta daqui a 1, 2, 4, 8, 16 ou 30 dias; errar → caixa 0, volta amanhã.
   - A missão de cada dia: primeiro algumas revisões que "venceram", depois perguntas novas dos mundos que
     a criança já abriu. Fica fixa durante o dia (recarregar a página não a muda).
   Precisa de shared.js (MISSAO_SUBJECTS do ano desta página, missaoExtra). Usado por app.js. */
const MissaoBanco = (function(){
  const DIAS = [1, 2, 4, 8, 16, 30];
  const K_SRS = "banco_srs", K_HOJE = "banco_hoje"+(MISSAO_ANO_ATUAL === "6" ? "" : "_"+MISSAO_ANO_ATUAL), K_VISTOS = "mundos_vistos";
  const load = (k, f) => MissaoArmazem.ler(k, f);
  const save = (k, v) => MissaoArmazem.gravar(k, v);
  const hojeN = () => { const d = new Date(); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5); };

  /* a small seeded random, so the day's mission is the same all day */
  function rng(seed){ let s = seed % 2147483647; if(s <= 0) s += 2147483646; return () => (s = s * 16807 % 2147483647) / 2147483647; }
  function baralhar(a, r){ a = a.slice(); r = r || Math.random; for(let i = a.length-1; i > 0; i--){ const j = Math.floor(r()*(i+1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  const semPonto = s => String(s).replace(/\.\s*$/, "");
  const anoDe = y => { const m = String(y).match(/\d{4}/); return m ? +m[0] : null; };

  /* ---------- build the pool (once) ---------- */
  const POR_ID = {}, POR_MATERIA = {};
  MISSAO_SUBJECTS.forEach(s => {
    const lista = [];
    const termos = [];
    s.worlds.forEach(w => (w.gloss || []).forEach(g => termos.push({w:w, term:g[0], def:g[1]})));
    const eventos = [];
    s.worlds.forEach(w => (w.timeline || []).forEach(e => { if(anoDe(e.y)) eventos.push({w:w, y:e.y, t:e.t, ano:anoDe(e.y)}); }));
    const add = (q) => { q._s = s; POR_ID[q._id] = q; lista.push(q); };
    s.worlds.forEach(w => {
      (w.quiz || []).forEach((q, i) => { q._id = w.id+":q"+i; q._w = w; add(q); });
      ((missaoExtra(w).desafio) || []).forEach((q, i) => { q._id = w.id+":d"+i; q._w = w; add(q); });
      (w.gloss || []).forEach((g, i) => {
        add({_id:w.id+":g"+i+"a", _w:w, _gen:"def", term:g[0], def:g[1], _termos:termos});
        add({_id:w.id+":g"+i+"b", _w:w, _gen:"termo", term:g[0], def:g[1], _termos:termos});
      });
      const ev = eventos.filter(e => e.w === w);
      ev.forEach((e, i) => add({_id:w.id+":t"+i, _w:w, _gen:"ano", ev:e, _eventos:eventos}));
      for(let i = 0; i < ev.length; i++) for(let j = i+1; j < ev.length; j++)
        if(ev[i].ano !== ev[j].ano) add({_id:w.id+":o"+i+"-"+j, _w:w, _gen:"ordem", a:ev[i], b:ev[j]});
    });
    POR_MATERIA[s.key] = lista;
  });

  /* ---------- turn a generated item into a normal multiple-choice question ---------- */
  function distratores(certo, todos, chave, r, n){
    const vistos = new Set([String(certo[chave]).toLowerCase()]);
    const out = [];
    baralhar(todos.filter(x => x.w === certo.w), r).concat(baralhar(todos.filter(x => x.w !== certo.w), r)).forEach(x => {
      const v = String(x[chave]).toLowerCase();
      if(out.length < n && !vistos.has(v)){ vistos.add(v); out.push(x[chave]); }
    });
    return out;
  }
  function pergunta(item, r){
    r = r || Math.random;
    const base = {_id:item._id, _w:item._w, _s:item._s};
    if(!item._gen) return Object.assign({}, item);
    const eng = item._s.key === "eng";
    if(item._gen === "def" || item._gen === "termo"){
      const certo = {w:item._w, term:item.term, def:item.def};
      const porTermo = item._gen === "termo";
      const outros = distratores(certo, item._termos, porTermo ? "term" : "def", r, 3);
      const opts = baralhar([porTermo ? item.term : semPonto(item.def)].concat(outros.map(o => porTermo ? o : semPonto(o))), r);
      const resposta = porTermo ? item.term : semPonto(item.def);
      return Object.assign(base, {
        q: porTermo ? (eng ? "Como se diz em inglês: «"+semPonto(item.def)+"»?" : "Que palavra corresponde a esta definição? «"+semPonto(item.def)+"»")
                    : (eng ? "O que quer dizer «"+item.term+"»?" : "O que significa «"+item.term+"»?"),
        opts: opts, correct: opts.indexOf(resposta),
        explain: "«"+item.term+"» — "+item.def
      });
    }
    if(item._gen === "ano"){
      const e = item.ev, anos = [];
      baralhar(item._eventos, r).forEach(x => { if(anos.length < 3 && x.y !== e.y && anos.indexOf(x.y) === -1) anos.push(x.y); });
      const opts = baralhar([e.y].concat(anos), r);
      return Object.assign(base, {q:"Quando aconteceu? «"+semPonto(e.t)+"»", opts:opts, correct:opts.indexOf(e.y), explain:e.y+" — "+e.t});
    }
    if(item._gen === "ordem"){
      const opts = baralhar([item.a, item.b], r);
      const primeiro = item.a.ano < item.b.ano ? item.a : item.b;
      return Object.assign(base, {q:"O que aconteceu primeiro?", opts:opts.map(o => semPonto(o.t)), correct:opts.indexOf(primeiro),
        explain:item.a.y+": "+semPonto(item.a.t)+" · "+item.b.y+": "+semPonto(item.b.t)});
    }
  }

  /* ---------- spaced repetition ---------- */
  function registar(q, certo){
    const id = q && q._id; if(!id) return;
    const st = load(K_SRS, {}), e = st[id] || [0, 0, 0, 0];
    const caixa = certo ? Math.min(e[0] + 1, DIAS.length - 1) : 0;
    // [caixa, dia da próxima revisão, tentativas, última certa (1/0), total de erros] — os erros servem a dificuldades.js
    st[id] = [caixa, hojeN() + (certo ? DIAS[caixa] : 1), e[2] + 1, certo ? 1 : 0, (e[4] || 0) + (certo ? 0 : 1)];
    save(K_SRS, st);
  }
  function visto(worldId){ const v = load(K_VISTOS, []); if(v.indexOf(worldId) === -1){ v.push(worldId); save(K_VISTOS, v); } }

  /* worlds the child has reached: opened worlds, worlds with ticked missions, and always world 1 of each subject */
  function mundosAbertos(){
    const set = new Set(load(K_VISTOS, []));
    MISSAO_SUBJECTS.forEach(s => {
      if(s.worlds[0]) set.add(s.worlds[0].id);
      const st = load(s.store, {});
      s.worlds.forEach(w => w.missions.forEach((m, i) => { if(st[w.id+"-"+i]) set.add(w.id); }));
    });
    return set;
  }

  /* ---------- the mission of the day ---------- */
  function escolher(n, r, excluir){
    const st = load(K_SRS, {}), hoje = hojeN(), abertos = mundosAbertos();
    const todos = Object.keys(POR_MATERIA).reduce((a, k) => a.concat(POR_MATERIA[k]), []).filter(q => !excluir.has(q._id));
    const devidas = todos.filter(q => st[q._id] && st[q._id][1] <= hoje).sort((a, b) => (st[a._id][3] - st[b._id][3]) || (st[a._id][1] - st[b._id][1]));
    const novas = baralhar(todos.filter(q => !st[q._id] && abertos.has(q._w.id)), r);
    const rev = devidas.slice(0, Math.max(2, Math.round(n * 0.4)));
    let escolha = rev.concat(novas.slice(0, n - rev.length));
    if(escolha.length < n) escolha = escolha.concat(devidas.slice(rev.length, rev.length + n - escolha.length));
    if(escolha.length < n){   // everything reached is done: bring the ones that are due soonest
      const resto = todos.filter(q => st[q._id] && escolha.indexOf(q) === -1 && abertos.has(q._w.id)).sort((a, b) => st[a._id][1] - st[b._id][1]);
      escolha = escolha.concat(resto.slice(0, n - escolha.length));
    }
    // mix the subjects: never two questions of the same subject in a row if it can be helped
    const porMat = {}; baralhar(escolha, r).forEach(q => (porMat[q._s.key] = porMat[q._s.key] || []).push(q));
    const out = []; let ks = Object.keys(porMat);
    while(ks.length){ ks.forEach(k => { const q = porMat[k].shift(); if(q) out.push(q); }); ks = ks.filter(k => porMat[k].length); }
    return out;
  }
  function missaoDeHoje(){
    const hoje = hojeN();
    let h = load(K_HOJE, null);
    if(!h || h.dia !== hoje){
      const r = rng(hoje * 7919);
      h = {dia:hoje, ids:escolher(10, r, new Set()).map(q => q._id), feita:false, extra:0};
      save(K_HOJE, h);
    }
    const r = rng(hoje * 104729);
    return {feita:h.feita, extra:h.extra, perguntas:h.ids.map(id => POR_ID[id]).filter(Boolean).map(q => pergunta(q, r))};
  }
  function marcarFeita(){ const h = load(K_HOJE, null); if(h){ h.feita = true; save(K_HOJE, h); } }
  function mais(n){
    const h = load(K_HOJE, null) || {dia:hojeN(), ids:[], feita:true, extra:0};
    const novas = escolher(n, Math.random, new Set(h.ids));
    h.ids = h.ids.concat(novas.map(q => q._id)); h.extra = (h.extra || 0) + 1; save(K_HOJE, h);
    return novas.map(q => pergunta(q));
  }

  function estatisticas(){
    const st = load(K_SRS, {}), abertos = mundosAbertos();
    let total = 0, vistas = 0, novasAbertas = 0, dominadas = 0;
    Object.keys(POR_ID).forEach(id => {
      total++;
      const e = st[id];
      if(e){ vistas++; if(e[0] >= 3) dominadas++; }
      else if(abertos.has(POR_ID[id]._w.id)) novasAbertas++;
    });
    return {total:total, vistas:vistas, dominadas:dominadas, novasAbertas:novasAbertas};
  }

  return {registar:registar, visto:visto, missaoDeHoje:missaoDeHoje, marcarFeita:marcarFeita, mais:mais, estatisticas:estatisticas, pergunta:pergunta, porMateria:POR_MATERIA};
})();
// a top-level const is not a property of window: publish it so app.js can check window.MissaoBanco
window.MissaoBanco = MissaoBanco;
