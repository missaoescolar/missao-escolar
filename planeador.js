/* 🗓️ O meu plano da semana — planear à vista (Barkley: funções executivas; TEACCH: horário visual)
   e estudo espaçado antes dos testes (Cepeda et al., 2006). Guardado na chave "plano":
   {itens:[{id, data:"AAAA-MM-DD", s:chave da disciplina, w:id do mundo, o:o que fazer, min, feito}], testes:[{id, data, s, nota}]} */
(function(){
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const SUBJ = MISSAO_SUBJECTS_6.concat(MISSAO_SUBJECTS_7);
  const subj = k => SUBJ.find(s => s.key === k);
  const mundo = (k, wid) => { const s = subj(k); return s && s.worlds.find(w => w.id === wid); };
  const DIAS = ["segunda","terça","quarta","quinta","sexta","sábado","domingo"];
  const OQUE = [["aprender","📖 Aprender (exemplos e resumo)"],["praticar","🎯 Praticar (cartões e Testa-te)"],["rever","🔁 Rever para o teste"],["oficina","✍️ Escrever na Oficina"]];
  const p2 = n => String(n).padStart(2, "0");
  const chave = d => d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate());
  const deChave = k => { const a = k.split("-").map(Number); return new Date(a[0], a[1]-1, a[2]); };
  const segunda = d => { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); const wd = (x.getDay()+6) % 7; x.setDate(x.getDate()-wd); return x; };
  const ler = () => { const p = MissaoArmazem.ler("plano", {}) || {}; return {itens:p.itens || [], testes:p.testes || []}; };
  const mudar = fn => MissaoArmazem.atualizar("plano", {}, p => { p.itens = p.itens || []; p.testes = p.testes || []; fn(p); return p; });

  let inicio = segunda(new Date());
  const hojeK = chave(new Date());

  function linkDe(it){
    if(it.o === "oficina") return "escrita.html";
    const s = subj(it.s); if(!s) return "#";
    return (s.page || "6ano.html")+"#"+s.key+"/"+it.w+(it.o === "aprender" ? "" : "/praticar");
  }
  function render(){
    const P = ler(), dias = [];
    for(let i = 0; i < 7; i++){ const d = new Date(inicio); d.setDate(d.getDate()+i); dias.push(d); }
    const fimSem = dias[6];
    $("pl-semana").textContent = dias[0].getDate()+"/"+(dias[0].getMonth()+1)+" a "+fimSem.getDate()+"/"+(fimSem.getMonth()+1);
    const daSemana = P.itens.filter(it => it.data >= chave(dias[0]) && it.data <= chave(fimSem));
    const feitos = daSemana.filter(it => it.feito).length, minutos = daSemana.filter(it => it.feito).reduce((a, it) => a + (+it.min || 0), 0);
    $("pl-resumo").innerHTML = daSemana.length ? '<b>'+feitos+' de '+daSemana.length+'</b> sessões feitas esta semana · '+minutos+' minutos de estudo' : 'Ainda não há nada planeado nesta semana. Começa por um dia e uma sessão curta.';
    $("pl-dias").innerHTML = dias.map((d, i) => {
      const k = chave(d), its = P.itens.filter(it => it.data === k), tes = P.testes.filter(t => t.data === k);
      return '<section class="pl-dia'+(k === hojeK ? ' hoje' : '')+'" aria-label="'+DIAS[i]+'"><h2>'+DIAS[i]+' <small>'+d.getDate()+'/'+(d.getMonth()+1)+(k === hojeK ? ' · hoje' : '')+'</small></h2>'+
        tes.map(t => { const s = subj(t.s); return '<div class="pl-teste">📝 Teste de '+esc(s ? s.name : t.s)+(t.nota ? ': '+esc(t.nota) : '')+' <button type="button" class="pl-x" data-deltest="'+t.id+'" aria-label="Apagar teste">✕</button></div>'; }).join("")+
        its.map(it => {
          const s = subj(it.s), w = mundo(it.s, it.w), oq = OQUE.find(o => o[0] === it.o);
          return '<div class="pl-item'+(it.feito ? ' feito' : '')+'"><label><input type="checkbox" data-feito="'+it.id+'"'+(it.feito ? ' checked' : '')+'> <span>'+
            (it.o === "oficina" ? '✍️ Oficina de Escrita' : (s ? s.icon+' ' : '')+(w ? 'Mundo '+w.num+': '+esc(w.title) : esc(it.s)))+
            '<small>'+(oq ? oq[1].replace(/^\S+ /, "") : "")+' · '+it.min+' min</small></span></label>'+
            '<span class="pl-acoes"><a class="pl-ir" href="'+linkDe(it)+'">Começar →</a><button type="button" class="pl-x" data-del="'+it.id+'" aria-label="Apagar">✕</button></span></div>';
        }).join("")+
        '<button type="button" class="pl-add" data-dia="'+k+'">+ Adicionar</button></section>';
    }).join("");
    $("pl-dias").querySelectorAll("[data-feito]").forEach(c => c.addEventListener("change", () => { mudar(p => { const it = p.itens.find(x => x.id === +c.dataset.feito); if(it) it.feito = c.checked; }); render(); if(c.checked) festeja(); }));
    $("pl-dias").querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => { mudar(p => { p.itens = p.itens.filter(x => x.id !== +b.dataset.del); }); render(); }));
    $("pl-dias").querySelectorAll("[data-deltest]").forEach(b => b.addEventListener("click", () => { if(!confirm("Apagar este teste do plano?")) return; mudar(p => { p.testes = p.testes.filter(x => x.id !== +b.dataset.deltest); }); render(); }));
    $("pl-dias").querySelectorAll(".pl-add").forEach(b => b.addEventListener("click", () => abrirForm(b.dataset.dia)));
  }
  function festeja(){ const m = $("pl-msg"); m.textContent = "✅ Boa! Mais uma sessão feita."; setTimeout(() => { if(m.textContent.startsWith("✅")) m.textContent = ""; }, 3000); }

  /* ---------- formulário: um dia, uma sessão ---------- */
  function opcoesMundos(k){
    const s = subj(k); return s ? s.worlds.map(w => '<option value="'+w.id+'">Mundo '+w.num+': '+esc(w.title)+'</option>').join("") : "";
  }
  function abrirForm(data, pre){
    const f = $("pl-form"), d = deChave(data);
    f.hidden = false;
    $("pl-form-t").textContent = "Nova sessão: "+DIAS[(d.getDay()+6) % 7]+", "+d.getDate()+"/"+(d.getMonth()+1);
    f.dataset.data = data;
    $("pl-s").innerHTML = SUBJ.map(s => '<option value="'+s.key+'">'+s.icon+' '+esc(s.name)+(s.ano ? ' ('+s.ano+'.º ano)' : '')+'</option>').join("");
    if(pre){ $("pl-s").value = pre.s; }
    $("pl-w").innerHTML = opcoesMundos($("pl-s").value); if(pre && pre.w) $("pl-w").value = pre.w;
    $("pl-o").value = pre && pre.o || "praticar"; $("pl-min").value = "25";
    f.scrollIntoView({block:"center"}); $("pl-s").focus();
  }
  $("pl-s").addEventListener("change", () => { $("pl-w").innerHTML = opcoesMundos($("pl-s").value); });
  $("pl-o").addEventListener("change", () => { $("pl-w").disabled = $("pl-o").value === "oficina"; });
  $("pl-cancelar").addEventListener("click", () => { $("pl-form").hidden = true; });
  $("pl-guardar").addEventListener("click", () => {
    const f = $("pl-form"), it = {id:Date.now(), data:f.dataset.data, s:$("pl-s").value, w:$("pl-w").value, o:$("pl-o").value, min:+$("pl-min").value, feito:false};
    mudar(p => { p.itens.push(it); });
    f.hidden = true; render();
  });

  /* ---------- 📝 tenho um teste: 3 sessões espaçadas ---------- */
  $("pl-teste-s").innerHTML = SUBJ.map(s => '<option value="'+s.key+'">'+s.icon+' '+esc(s.name)+(s.ano ? ' ('+s.ano+'.º ano)' : '')+'</option>').join("");
  $("pl-teste-d").min = hojeK;
  $("pl-teste-ok").addEventListener("click", () => {
    const k = $("pl-teste-s").value, data = $("pl-teste-d").value, nota = $("pl-teste-n").value.trim();
    if(!data){ $("pl-teste-msg").textContent = "Escolhe a data do teste."; return; }
    const dt = deChave(data), dias = Math.round((dt - deChave(hojeK)) / 864e5);
    if(dias < 1){ $("pl-teste-msg").textContent = "Escolhe uma data a partir de amanhã."; return; }
    // sessions on D-5, D-3 and D-1 (only those still in the future); each one a different kind of practice
    const plano = [[5,"aprender",25],[3,"praticar",25],[1,"rever",15]];   // D-5, D-3, D-1 (past days are skipped below)
    const w0 = (() => { const s = subj(k); const dif = (typeof MissaoDificuldades !== "undefined" && s) ? MissaoDificuldades.analisar([s]) : []; return dif.length ? dif[0].w.id : (s && s.worlds[0] ? s.worlds[0].id : ""); })();
    let n = 0;
    mudar(p => {
      p.testes.push({id:Date.now(), data:data, s:k, nota:nota});
      plano.forEach((x, i) => { const d = new Date(dt); d.setDate(d.getDate() - x[0]); if(chave(d) < hojeK) return; p.itens.push({id:Date.now()+i+1, data:chave(d), s:k, w:w0, o:x[1], min:x[2], feito:false}); n++; });
    });
    inicio = segunda(new Date()); render();
    $("pl-teste-msg").innerHTML = "📝 Teste marcado e "+n+(n === 1 ? " sessão curta" : " sessões curtas")+" no plano, em dias diferentes (começam pelo tema onde tens mais dúvidas). Para trocar de tema, apaga a sessão (✕) e adiciona outra.";
  });

  $("pl-ant").addEventListener("click", () => { inicio.setDate(inicio.getDate()-7); render(); });
  $("pl-seg").addEventListener("click", () => { inicio.setDate(inicio.getDate()+7); render(); });
  $("pl-hoje").addEventListener("click", () => { inicio = segunda(new Date()); render(); });
  render();
})();
