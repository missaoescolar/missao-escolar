/* 📬 Relatório para pais: progresso, dificuldades, sugestões de estudo e dicas de parentalidade positiva.
   Tudo é calculado neste browser. O e-mail, o nome e o perfil ficam só aqui (chave "pais_relatorio").
   «Enviar por e-mail» abre o programa de e-mail da família com o texto pronto: nada sai sem a família carregar em Enviar. */
// built after the page has finished loading, so the backup tools of this page are ready first
window.addEventListener("load", function(){
  const $ = id => document.getElementById(id);
  if(!$("relatorio")) return;
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

  /* ---------- dicas: gerais (regras e limites com afeto) e por perfil ---------- */
  const DICAS = {
    geral: [
      ["Rotina previsível", "Mesma hora, mesmo sítio, sessões curtas (15 a 25 minutos) e telemóvel fora da mesa. A rotina poupa discussões: deixa de ser «se» se estuda e passa a ser «quando»."],
      ["Poucas regras, claras e combinadas antes", "Escrevam juntos 3 ou 4 regras de estudo e as consequências. Aplique-as com calma e sempre da mesma forma: a firmeza vem da consistência, não do tom de voz."],
      ["Primeiro… depois…", "«Primeiro 20 minutos de estudo, depois 20 minutos de jogo.» Combinado antes e cumprido sempre, nos dois sentidos."],
      ["Elogie o esforço e a estratégia", "Em vez de «és muito inteligente», diga o que viu: «Gostei que verificasses a conta antes de responder.» Elogios concretos ensinam o que repetir."],
      ["Validar sem ceder", "«Percebo que hoje te custa. Fazemos só 10 minutos e depois paramos.» Reconhecer a emoção não é desistir da regra."],
      ["Pergunte antes de explicar", "«O que já tentaste? Onde encravaste?» Ajude com pistas, não com a resposta: o mérito tem de ficar com a criança."],
      ["Os erros são informação", "Vejam juntos o quadro das dificuldades sem castigo por errar. O objetivo é saber o que treinar, não apontar falhas."],
      ["Sono, comida e movimento", "Com sono ou fome rende-se pouco. Uma pausa a mexer o corpo entre sessões ajuda a concentração."]
    ],
    phda: [
      ["Sessões curtas com pausas ativas", "Use o ✈️ Modo foco de 15 minutos e uma pausa de 5 minutos a mexer-se (saltar, ir buscar água)."],
      ["Uma instrução de cada vez", "Olhe nos olhos, diga uma instrução curta e peça que a repita. Listas de verificação visíveis ajudam a não perder passos."],
      ["Reforço imediato e frequente", "Reconheça logo cada passo cumprido (um visto, um ponto numa tabela). Recompensas pequenas e próximas funcionam melhor do que promessas longínquas."],
      ["Antecipar as transições", "«Faltam 5 minutos para acabar o jogo.» Um temporizador visível evita negociações e birras na mudança de atividade."],
      ["Ambiente com poucos estímulos", "Mesa arrumada, só o material da tarefa, ecrãs desligados. Pode ajudar ter um objeto pequeno para mexer nas mãos, se não distrair."]
    ],
    autismo: [
      ["Previsibilidade", "Um horário visual da semana e aviso antecipado de mudanças. O que é previsível gasta menos energia e deixa mais para aprender."],
      ["Linguagem concreta", "Instruções literais e passo a passo; regras escritas. Evite ironias ou ordens vagas como «porta-te bem»: diga exatamente o que espera."],
      ["Necessidades sensoriais", "Atenção ao ruído, à luz e ao conforto da cadeira. Auscultadores ou um canto calmo podem fazer muita diferença."],
      ["Partir dos interesses", "Ligue a matéria aos temas de que gosta: aumenta a motivação e a vontade de explicar."],
      ["Tempo para transições", "Dê tempo para acabar uma atividade antes de começar outra e use as mesmas palavras para avisar."]
    ],
    dislexia: [
      ["Ouvir também é estudar", "Use o botão 🔊 «Ouvir este mundo» e leiam juntos em voz alta. Compreender a matéria não depende só de ler sozinho."],
      ["Valorize as ideias, não só a ortografia", "Corrija a ortografia numa segunda leitura e use o 📘 Prontuário para as dúvidas mais frequentes."],
      ["Tempo extra e esquemas", "Dê mais tempo nas tarefas de leitura e escrita. Esquemas, cores e o 🗺️ resumo visual ajudam a organizar."],
      ["Proteger a autoestima", "Não obrigue a ler em voz alta perante outros. Lembre-lhe, com exemplos, aquilo em que é forte."]
    ],
    altas: [
      ["Desafio à medida", "Proponha o 🔥 Mais difícil, a 🧩 Missão Final e os 🛠️ Desafios de Engenheiro. O tédio também desmotiva."],
      ["Aprender a errar", "O perfeccionismo pode travar. Mostre que o erro faz parte de aprender e elogie a persistência perante o difícil."],
      ["Projetos com sentido", "Deixe a criança aprofundar um tema que a apaixone e apresentá-lo à família."]
    ],
    ansiedade: [
      ["Começar pelo que já sabe", "Abra a sessão com uma tarefa fácil para ganhar confiança, e só depois passe ao mais difícil."],
      ["Preparar o teste com antecedência", "Treinem uns dias antes com a 🏆 Revisão Final e os cartões, em vez de estudar tudo na véspera."],
      ["Acalmar o corpo", "Três respirações lentas (inspirar 4 segundos, expirar 6) antes de começar ajudam a baixar o nervosismo."]
    ]
  };
  const PERFIS = [["","Sem indicação"],["phda","PHDA (défice de atenção e hiperatividade)"],["autismo","Perturbação do espetro do autismo"],["dislexia","Dislexia ou dificuldades de leitura e escrita"],["altas","Altas capacidades"],["ansiedade","Ansiedade com testes"]];

  /* ---------- dados guardados neste browser ---------- */
  const cfg = MissaoArmazem.ler("pais_relatorio", {}) || {};
  function guardarCfg(){ MissaoArmazem.gravar("pais_relatorio", {email:$("rel-email").value.trim(), nome:$("rel-nome").value.trim(), perfil:$("rel-perfil").value}); }

  const semana = Math.floor(Date.now() / (7*864e5));   // the tips change once a week
  function escolherDicas(perfil){
    const g = DICAS.geral, p = perfil && DICAS[perfil] ? DICAS[perfil] : null;
    const out = [g[semana % g.length]];
    if(p) out.push(p[semana % p.length], p[(semana+1) % p.length]); else out.push(g[(semana+3) % g.length]);
    return out;
  }
  function dados(){
    const subjects = MISSAO_SUBJECTS_6.concat(MISSAO_SUBJECTS_7);
    const prog = subjects.map(s => {
      const st = MissaoArmazem.ler(s.store, {}) || {};
      let total = 0, feitas = 0;
      s.worlds.forEach(w => w.missions.forEach((m, i) => { total++; if(st[w.id+"-"+i]) feitas++; }));
      return {s:s, total:total, feitas:feitas};
    }).filter(x => x.total);
    const srs = MissaoArmazem.ler("banco_srs", {}) || {};
    const ids = Object.keys(srs).filter(k => (srs[k] || [])[2] > 0);
    const certasUltima = ids.filter(k => srs[k][3] === 1).length;
    const log = new Set(MissaoArmazem.ler("activity_log", []) || []);
    let dias = 0; const d = new Date();
    for(let i = 0; i < 7; i++){ const k = d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); if(log.has(k)) dias++; d.setDate(d.getDate()-1); }
    const dif = (typeof MissaoDificuldades !== "undefined") ? MissaoDificuldades.analisar(subjects).slice(0, 5) : [];
    const textos = (MissaoArmazem.ler("ws_saved", []) || []).filter(x => x && x.partilhar);
    return {prog:prog, respondidas:ids.length, certasUltima:certasUltima, dias:dias, dif:dif, textos:textos};
  }

  /* ---------- the report, as page and as plain text for the e-mail ---------- */
  function construir(){
    const D = dados(), nome = $("rel-nome").value.trim() || "a criança", perfil = $("rel-perfil").value;
    const dicas = escolherDicas(perfil), hoje = new Date().toLocaleDateString("pt-PT");
    const sugestoes = D.dif.slice(0, 3).map(x => x.s.icon+" "+x.s.name+", Mundo "+x.w.num+" ("+x.w.title+"): "+x.motivos.map(m => m.replace("escreveste", "escreveu").replace("já erraste", "já errou").replace("ainda não sabes", "ainda não sabe")).join("; ")+". Sugestão: 15 minutos com o «Para o teste», depois os 🃏 cartões e o ✅ Testa-te."+(x.duvida ? " Conversem sobre a dúvida que escreveu: «"+x.duvida+"»." : ""));
    const pct = D.respondidas ? Math.round(D.certasUltima / D.respondidas * 100) : null;
    const html =
      '<h3>📬 Relatório de '+esc(nome)+' · '+hoje+'</h3>'+
      '<p><b>Últimos 7 dias:</b> '+D.dias+' dia'+(D.dias === 1 ? '' : 's')+' com estudo. '+
        (D.respondidas ? '<b>Perguntas:</b> '+D.respondidas+' respondidas, '+pct+'% certas na última tentativa.' : 'Ainda sem perguntas respondidas.')+'</p>'+
      '<p><b>Missões feitas:</b></p><ul class="rel-prog">'+D.prog.map(x => '<li>'+x.s.icon+' '+esc(x.s.name)+(x.s.ano ? ' ('+x.s.ano+'.º ano)' : '')+': '+x.feitas+' de '+x.total+
        ' <span class="rel-barra"><span style="width:'+Math.round(x.feitas/x.total*100)+'%"></span></span></li>').join("")+'</ul>'+
      '<p><b>💡 O que treinar esta semana:</b></p>'+(sugestoes.length ? '<ol>'+sugestoes.map(t => '<li>'+esc(t)+'</li>').join("")+'</ol>' : '<p class="note-small">Ainda não há dificuldades registadas. Aparecem quando a criança erra perguntas, escreve uma dúvida no caderno ou treina cartões.</p>')+
      '<p><b>🌱 Dicas para esta semana:</b></p><ul>'+dicas.map(t => '<li><b>'+esc(t[0])+'.</b> '+esc(t[1])+'</li>').join("")+'</ul>'+
      '<p><b>✍️ Textos da Oficina de Escrita que '+esc(nome)+' quis partilhar:</b></p>'+(D.textos.length
        ? D.textos.map(x => '<details class="rel-texto"><summary>'+esc(x.title)+' <small>· '+esc(x.date || "")+'</small></summary><p>'+esc(x.text).replace(/\n/g, "<br>")+'</p></details>').join("")+
          '<p class="note-small">Dica: comente primeiro uma coisa de que gostou, e só depois uma sugestão. Não corrija a ortografia de um texto pessoal, a não ser que a criança peça.</p>'
        : '<p class="note-small">Nenhum por agora. Na Oficina de Escrita, a criança escolhe que textos partilhar (botão «👪 Partilhar com os pais»). Os outros ficam privados.</p>');
    const texto = [
      "Relatório Missão Escolar — "+nome+" — "+hoje, "",
      "Últimos 7 dias: "+D.dias+" dia(s) com estudo."+(D.respondidas ? " Perguntas: "+D.respondidas+" respondidas, "+pct+"% certas na última tentativa." : ""), "",
      "Missões feitas:", ...D.prog.map(x => "- "+x.s.name+(x.s.ano ? " ("+x.s.ano+".º ano)" : "")+": "+x.feitas+" de "+x.total), "",
      "O que treinar esta semana:", ...(sugestoes.length ? sugestoes.map((t, i) => (i+1)+". "+t) : ["- Ainda não há dificuldades registadas."]), "",
      "Dicas para esta semana:", ...dicas.map(t => "- "+t[0]+": "+t[1]), "",
      ...(D.textos.length ? ["Textos da Oficina de Escrita partilhados:", ...D.textos.map(x => {
          const corpo = x.text.length > 1200 ? x.text.slice(0, 1200)+"… (continua no computador, em Para pais)" : x.text;
          return "— «"+x.title+"» ("+(x.date || "")+")\n"+corpo; }), ""] : []),
      "Ver tudo: "+location.href.replace(/pais\.html.*$/, "caderno.html")
    ].join("\n");
    $("rel-preview").innerHTML = html;
    return texto;
  }

  /* ---------- form ---------- */
  $("rel-perfil").innerHTML = PERFIS.map(p => '<option value="'+p[0]+'">'+p[1]+'</option>').join("");
  $("rel-email").value = cfg.email || ""; $("rel-nome").value = cfg.nome || ""; $("rel-perfil").value = cfg.perfil || "";
  ["rel-email","rel-nome","rel-perfil"].forEach(id => $(id).addEventListener("change", () => { guardarCfg(); construir(); $("rel-ok").textContent = "✅ Guardado neste computador."; }));
  construir();

  $("rel-enviar").addEventListener("click", () => {
    const email = $("rel-email").value.trim();
    if(email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ $("rel-ok").textContent = "⚠️ Confirme o endereço de e-mail."; $("rel-email").focus(); return; }
    guardarCfg();
    const texto = construir();
    location.href = "mailto:"+encodeURIComponent(email)+"?subject="+encodeURIComponent("Missão Escolar: relatório da semana")+"&body="+encodeURIComponent(texto);
    $("rel-ok").textContent = "✉️ Abriu o seu programa de e-mail com o relatório. Só é enviado quando carregar em Enviar.";
  });
  $("rel-copiar").addEventListener("click", () => {
    const texto = construir();
    (navigator.clipboard ? navigator.clipboard.writeText(texto) : Promise.reject()).then(
      () => { $("rel-ok").textContent = "📋 Copiado. Pode colá-lo num e-mail ou numa mensagem."; },
      () => { $("rel-ok").textContent = "Não foi possível copiar automaticamente: selecione o texto do relatório."; });
  });
  /* 📅 a weekly reminder for the parents (Sunday 19:00), with the link to this report */
  $("rel-lembrete").addEventListener("click", () => {
    const p2 = n => String(n).padStart(2, "0"), d = new Date(), n = new Date();
    d.setDate(d.getDate() + ((7 - d.getDay()) % 7 || 7));
    const url = location.href.split("#")[0]+"#relatorio";
    const ics = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Missao Escolar//PT","CALSCALE:GREGORIAN","BEGIN:VEVENT",
      "UID:missao-escolar-pais-"+Date.now()+"@missao-escolar",
      "DTSTAMP:"+n.getUTCFullYear()+p2(n.getUTCMonth()+1)+p2(n.getUTCDate())+"T"+p2(n.getUTCHours())+p2(n.getUTCMinutes())+"00Z",
      "DTSTART:"+d.getFullYear()+p2(d.getMonth()+1)+p2(d.getDate())+"T190000","DURATION:PT15M","RRULE:FREQ=WEEKLY;BYDAY=SU",
      "SUMMARY:📬 Missão Escolar: relatório da semana","DESCRIPTION:Ver o progresso\\, as dificuldades e as dicas da semana. "+url,"URL:"+url,
      "BEGIN:VALARM","ACTION:DISPLAY","DESCRIPTION:Relatório da semana da Missão Escolar","TRIGGER:PT0M","END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], {type:"text/calendar;charset=utf-8"})); a.download = "relatorio-semanal-missao-escolar.ics";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    $("rel-ok").textContent = "📅 Abra o ficheiro descarregado para juntar o lembrete (domingo às 19h00) ao seu calendário.";
  });
});
