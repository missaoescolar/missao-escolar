/* 📘 Gramática · 📗 Prontuário · 🔤 Verbos — one part at a time, with a search box (data in data/gramatica-pt.js) */
(function(){
  const $ = id => document.getElementById(id);
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/<[^>]+>/g, "");

  /* ---------- 📘 Gramática: one topic open at a time ---------- */
  function renderGram(){
    const box = $("g-gram");
    box.innerHTML = GRAMATICA_PT.map(t =>
      '<details class="gr-item" id="gr-'+t.id+'" data-busca="'+norm(t.t+" "+t.regra+" "+t.ex.join(" ")+" "+t.truque+" "+t.erro).replace(/"/g,"")+'">'+
        '<summary><span aria-hidden="true">'+t.icon+'</span> '+t.t+'</summary>'+
        '<div class="gr-body"><p class="gr-regra">'+t.regra+'</p>'+
        '<p class="gr-h">📝 Exemplos</p><ul>'+t.ex.map(e => '<li>'+e+'</li>').join("")+'</ul>'+
        '<p class="gr-truque"><b>💡 Truque:</b> '+t.truque+'</p>'+
        '<p class="gr-erro"><b>⚠️ Erro comum:</b> '+t.erro+'</p></div></details>').join("");
    box.querySelectorAll("details").forEach(d => d.addEventListener("toggle", () => {
      if(d.open) box.querySelectorAll("details[open]").forEach(o => { if(o !== d) o.open = false; });
    }));
  }

  /* ---------- 📗 Prontuário: grouped by category, plus PT-PT ↔ PT-BR ---------- */
  function renderPront(){
    const cats = [];
    PRONTUARIO_PT.forEach(p => { if(cats.indexOf(p.c) === -1) cats.push(p.c); });
    $("g-pront").innerHTML = cats.map(c =>
      '<section class="pr-cat"><h2>'+c+'</h2>'+PRONTUARIO_PT.filter(p => p.c === c).map(p =>
        '<div class="pr-item" data-busca="'+norm(p.e+" "+p.certo+" "+p.r).replace(/"/g,"")+'">'+
          '<p class="pr-e">🤔 '+p.e+'</p><p class="pr-c">✅ '+p.certo+'</p><p class="pr-r">'+p.r+'</p></div>').join("")+'</section>').join("")+
      '<section class="pr-cat" data-busca="'+norm(PT_BR.map(x => x.join(" ")).join(" ")+" brasil")+'"><h2>🌍 Português de Portugal e português do Brasil</h2>'+
      '<p class="pr-r">As duas variedades são português e estão ambas certas. Na escola, em Portugal, usa-se o português europeu.</p>'+
      '<table class="pr-tab"><thead><tr><th>Em Portugal</th><th>No Brasil</th></tr></thead><tbody>'+
      PT_BR.map(x => '<tr><td>'+x[0]+'</td><td>'+x[1]+'</td></tr>').join("")+'</tbody></table></section>';
  }

  /* ---------- 🔤 Verbos ---------- */
  function conjugar(v, tempo){
    if(VERB_IRREG[v]) return VERB_IRREG[v][tempo].split(" ");
    const g = v.slice(-2), raiz = v.slice(0, -2), M = VERB_MODELOS[g];
    if(tempo === "fut") return VERB_FUT.map(t => v + t);
    if(tempo === "cond") return VERB_COND.map(t => v + t);
    return M[tempo].map(t => raiz + t);
  }
  function renderVerbos(){
    const sel = $("v-verbo"), tsel = $("v-tempo");
    sel.innerHTML =
      '<optgroup label="Irregulares">'+Object.keys(VERB_IRREG).map(v => '<option>'+v+'</option>').join("")+'</optgroup>'+
      [["ar","1.ª conjugação (-ar), como cantar"],["er","2.ª conjugação (-er), como comer"],["ir","3.ª conjugação (-ir), como partir"]].map(g =>
        '<optgroup label="Regulares: '+g[1]+'">'+VERB_REGULARES[g[0]].map(v => '<option>'+v+'</option>').join("")+'</optgroup>').join("");
    tsel.innerHTML = VERB_TEMPOS.map(t => '<option value="'+t[0]+'">'+t[1]+'</option>').join("");
    const show = () => {
      const v = sel.value, t = tsel.value, f = conjugar(v, t), imper = t === "imper";
      const pessoas = imper ? VERB_IMPER_PESSOAS : VERB_PESSOAS;
      const pre = t === "cpres" ? "que " : t === "cimp" ? "se " : t === "cfut" ? "quando " : "";
      $("v-tab").innerHTML = '<table class="v-table"><caption>'+v+' · '+VERB_TEMPOS.find(x => x[0] === t)[1]+'</caption><tbody>'+
        f.map((forma, i) => '<tr><th>'+pre+pessoas[i]+'</th><td>'+(forma === "—" ? '<span class="v-nao">não se usa</span>' : '<b>'+forma+'</b>')+'</td></tr>').join("")+'</tbody></table>'+
        (VERB_IRREG[v] ? '<p class="v-nota">Verbo irregular: muda a raiz em alguns tempos.</p>' : '<p class="v-nota">Verbo regular: a raiz <b>'+v.slice(0,-2)+'-</b> fica igual; só mudam as terminações.</p>');
    };
    sel.addEventListener("change", show); tsel.addEventListener("change", show);
    show();
  }

  /* ---------- tabs and search ---------- */
  const partes = ["gram","pront","verbos"];
  function setParte(p, byUser){
    partes.forEach(k => {
      $("g-"+k).hidden = (k !== p);
      const b = document.querySelector('[data-parte="'+k+'"]');
      b.classList.toggle("active", k === p); b.setAttribute("aria-selected", k === p ? "true" : "false");
    });
    $("g-busca-wrap").hidden = (p === "verbos");
    if(byUser) history.replaceState(null, "", "#"+p);
    filtrar();
  }
  function filtrar(){
    const q = norm($("g-busca").value.trim());
    let n = 0;
    document.querySelectorAll("#g-gram .gr-item, #g-pront .pr-item, #g-pront .pr-cat[data-busca]").forEach(el => {
      const ok = !q || el.dataset.busca.indexOf(q) !== -1;
      el.hidden = !ok; if(ok) n++;
      if(q && ok && el.tagName === "DETAILS") el.open = true;
    });
    document.querySelectorAll("#g-pront .pr-cat").forEach(sec => {
      if(sec.dataset.busca !== undefined) return;
      sec.hidden = !sec.querySelector(".pr-item:not([hidden])");
    });
    $("g-vazio").hidden = !q || n > 0;
  }

  renderGram(); renderPront(); renderVerbos();
  document.querySelectorAll("[data-parte]").forEach(b => b.addEventListener("click", () => setParte(b.dataset.parte, true)));
  $("g-busca").addEventListener("input", filtrar);
  const h = location.hash.slice(1);
  setParte(partes.indexOf(h) !== -1 ? h : "gram", false);
})();
