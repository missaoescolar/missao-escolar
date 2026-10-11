/* Armazém do progresso. Mantém as chaves e os formatos existentes.
   atualizarPendente guarda uma operação em memória até a gravação ter sucesso.
   As operações são puras: relêem o estado mais recente dentro de um Web Lock.
   Sem Web Locks, a tentativa é síncrona (sem garantia de exclusão entre separadores). */
const MissaoArmazem = (function(){
  const ESTRAGADO = "_estragado_";
  const pendentes = new Map(), falhas = new Map(), emCurso = new Set();
  const diasPendentes = new Set();
  let disponivel = true, aviso = null, esperaDOM = false, retryTimer = null;

  function copia(valor){ return valor === undefined ? valor : JSON.parse(JSON.stringify(valor)); }
  function tipoDeErro(e){
    if(e && e.name === "DadosDanificadosError") return "danificado";
    return e && (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.code === 22 || e.code === 1014) ? "cheio" : "bloqueado";
  }
  function atualizarAviso(){
    if(!document.body){
      if(!esperaDOM){ esperaDOM = true; document.addEventListener("DOMContentLoaded", function(){ esperaDOM = false; atualizarAviso(); }); }
      return;
    }
    if(!falhas.size){
      if(aviso){ aviso.remove(); aviso = null; }
      return;
    }
    if(!aviso){
      aviso = document.createElement("div");
      aviso.className = "armazem-aviso";
      aviso.setAttribute("role", "alert");
      aviso.innerHTML = '<p></p><button type="button" aria-label="Tentar guardar novamente" title="Tentar guardar novamente">↻</button>';
      aviso.querySelector("button").addEventListener("click", tentarNovamente);
      document.body.appendChild(aviso);
    }
    const tipos = Array.from(falhas.values());
    const texto = tipos.indexOf("danificado") !== -1 ? "Há dados danificados. O original será preservado antes de guardar."
      : tipos.indexOf("cheio") !== -1 ? "O espaço para guardar o teu progresso está cheio."
      : "Este browser não está a guardar o teu progresso.";
    aviso.querySelector("p").innerHTML = '<b>⚠️ '+texto+'</b> '+
      (pendentes.size ? 'Há progresso por guardar nesta página. Toca em ↻ para tentar novamente. Se fechares ou atualizares a página antes de guardar, essas alterações podem perder-se. ' : 'A última tentativa de guardar falhou. ')+
      'Pede a um adulto para ver em <a href="pais.html#guardar">Para pais</a>.';
  }
  function falhar(chave, erro){
    disponivel = false;
    falhas.set(chave, tipoDeErro(erro));
    atualizarAviso();
  }
  function bruto(chave){
    try{ return {ok:true, texto:localStorage.getItem(chave)}; }
    catch(e){ falhar(chave, e); return {ok:false, texto:null}; }
  }
  // Never overwrite a previous recovery copy, even if the same key is damaged again.
  function guardarEstragado(chave, texto){
    try{
      let destino = ESTRAGADO+chave, n = 1, existente;
      while((existente = localStorage.getItem(destino)) !== null && existente !== texto){
        destino = ESTRAGADO+chave+"_"+(++n);
      }
      if(existente === null) localStorage.setItem(destino, texto);
      if(localStorage.getItem(destino) !== texto) throw new Error("Cópia não confirmada");
      return true;
    }catch(e){ falhar(chave, e); return false; }
  }
  function formaCerta(valor, porDefeito){
    if(porDefeito === undefined || porDefeito === null) return true;
    if(Array.isArray(porDefeito)) return Array.isArray(valor);
    if(typeof porDefeito === "object") return valor !== null && typeof valor === "object" && !Array.isArray(valor);
    return typeof valor === typeof porDefeito;
  }
  function objeto(v){ return v !== null && typeof v === "object" && !Array.isArray(v); }
  function numero(v){ return typeof v === "number" && Number.isFinite(v) && v >= 0; }
  // Validate the progress structures that this correction changes; partial legacy Arena values remain valid.
  function dadosCertos(chave, v, porDefeito){
    if(!formaCerta(v, porDefeito)) return false;
    if(/^(pt|math|eng|hgp|cn|cn7)_missions$/.test(chave))
      return objeto(v) && Object.keys(v).every(function(k){ return typeof v[k] === "boolean"; });
    if(chave === "activity_log") return Array.isArray(v) && v.every(function(d){ return typeof d === "string"; });
    if(chave !== "arena") return true;
    if(!objeto(v)) return false;
    if(!["xp","certas","feitas"].every(function(k){ return v[k] === undefined || numero(v[k]); })) return false;
    if(!["niveis","estrelas","recorde"].every(function(k){
      return v[k] === undefined || (objeto(v[k]) && Object.keys(v[k]).every(function(t){ return numero(v[k][t]); }));
    })) return false;
    if(!["medalhas","jogados"].every(function(k){ return v[k] === undefined || (Array.isArray(v[k]) && v[k].every(function(x){ return typeof x === "string"; })); })) return false;
    return (v.hoje === undefined || (objeto(v.hoje) && typeof v.hoje.data === "string" && numero(v.hoje.certas))) &&
      (v.som === undefined || typeof v.som === "boolean") && (v.modo === undefined || typeof v.modo === "string");
  }
  function danificado(chave){ falhas.set(chave, "danificado"); atualizarAviso(); }
  function lerSeguro(chave, porDefeito){
    const r = bruto(chave);
    if(!r.ok) return {ok:false, valor:copia(porDefeito)};
    if(r.texto === null) return {ok:true, valor:copia(porDefeito)};
    let valor, valido = false;
    try{ valor = JSON.parse(r.texto); valido = dadosCertos(chave, valor, porDefeito); }catch(e){}
    if(valido) return {ok:true, valor:valor};
    const preservado = guardarEstragado(chave, r.texto);
    danificado(chave);
    return {ok:preservado, valor:copia(porDefeito)};
  }
  function ler(chave, porDefeito){ return lerSeguro(chave, porDefeito).valor; }
  function escrever(chave, valor, textoSimples){
    try{
      // A failed read is never treated as an empty store that can safely be replaced.
      const atual = bruto(chave);
      if(!atual.ok) return false;
      if(!textoSimples && atual.texto !== null){
        let valido = false;
        try{ valido = dadosCertos(chave, JSON.parse(atual.texto), valor); }catch(e){}
        if(!valido && !guardarEstragado(chave, atual.texto)) return false;
      }
      localStorage.setItem(chave, textoSimples ? String(valor) : JSON.stringify(valor));
      falhas.delete(chave);
      disponivel = !falhas.size;
      atualizarAviso();
      return true;
    }catch(e){ falhar(chave, e); return false; }
  }
  function gravar(chave, valor){ return escrever(chave, valor, false); }
  function lerTexto(chave, porDefeito){ const r = bruto(chave); return r.texto === null ? porDefeito : r.texto; }
  function gravarTexto(chave, texto){ return escrever(chave, texto, true); }
  // Existing synchronous API, used by the Oficina and question bank.
  function atualizar(chave, porDefeito, fn){
    const l = lerSeguro(chave, porDefeito), atual = l.valor;
    const r = fn(atual), valor = r === undefined ? atual : r;
    return {ok:l.ok && gravar(chave, valor), valor:valor};
  }

  function agendar(){
    if(pendentes.size && retryTimer === null){
      retryTimer = setTimeout(function(){ retryTimer = null; tentarNovamente(); }, 5000);
    }
    if(!pendentes.size && retryTimer !== null){ clearTimeout(retryTimer); retryTimer = null; }
  }
  function tentarChave(chave){
    if(emCurso.has(chave) || !pendentes.has(chave)) return;
    emCurso.add(chave);
    const executar = function(){
      const p = pendentes.get(chave);
      if(!p) return;
      const l = lerSeguro(chave, p.porDefeito);
      if(!l.ok) return;
      let valor;
      try{
        const r = p.fn(l.valor);
        valor = r === undefined ? l.valor : r;
        if(!dadosCertos(chave, valor, p.porDefeito)) throw new Error("Estado de progresso inválido");
      }catch(e){ falhar(chave, e); return; }
      if(!gravar(chave, valor)) return;
      pendentes.delete(chave);
      // Only now may callers advance their acknowledged base or display a saved mission.
      if(p.aoGuardar) p.aoGuardar(copia(valor));
    };
    const terminar = function(){ emCurso.delete(chave); atualizarAviso(); agendar(); };
    if(navigator.locks && navigator.locks.request){
      navigator.locks.request("missao-escolar:"+chave, executar)
        .catch(function(e){ falhar(chave, e); }).finally(terminar);
    }else{
      try{ executar(); }finally{ terminar(); }
    }
  }
  // One current, pure merge per key; replacing it retains all pending changes in the caller.
  function atualizarPendente(chave, porDefeito, fn, aoGuardar){
    pendentes.set(chave, {porDefeito:porDefeito, fn:fn, aoGuardar:aoGuardar});
    tentarChave(chave);
    agendar();
    atualizarAviso();
    return {ok:!pendentes.has(chave)};
  }
  function tentarNovamente(){
    if(falhas.has("_teste_armazem_")) testarDisponibilidade();
    Array.from(pendentes.keys()).forEach(tentarChave);
    agendar();
  }
  function registarAtividade(dia){
    diasPendentes.add(dia);
    atualizarPendente("activity_log", [], function(log){
      diasPendentes.forEach(function(d){ if(log.indexOf(d) === -1) log.push(d); });
      return log;
    }, function(){ diasPendentes.clear(); });
  }
  function aoMudar(fn){
    window.addEventListener("storage", function(e){
      try{ if(e.storageArea === localStorage) fn(e.key); }catch(err){ console.warn("Missão Escolar: não foi possível atualizar a vista.", err); }
    });
  }
  window.addEventListener("storage", function(e){
    try{ if(e.storageArea === localStorage) tentarNovamente(); }catch(err){}
  });
  window.addEventListener("focus", tentarNovamente);
  window.addEventListener("online", tentarNovamente);
  document.addEventListener("visibilitychange", function(){ if(document.visibilityState === "visible") tentarNovamente(); });
  window.addEventListener("beforeunload", function(e){
    if(!pendentes.size) return;
    e.preventDefault();
    e.returnValue = "";
  });

  try{ localStorage.setItem("_teste_armazem_", "1"); localStorage.removeItem("_teste_armazem_"); }
  catch(e){ falhar("_teste_armazem_", e); }
  // An initial failure is cleared only once a real queued write (or another probe) succeeds.
  function testarDisponibilidade(){
    try{
      localStorage.setItem("_teste_armazem_", "1"); localStorage.removeItem("_teste_armazem_");
      falhas.delete("_teste_armazem_"); disponivel = !falhas.size; atualizarAviso();
    }catch(e){ falhar("_teste_armazem_", e); }
  }
  try{
    if(disponivel && navigator.storage && navigator.storage.persist && !/Firefox\//.test(navigator.userAgent))
      navigator.storage.persisted().then(function(p){ if(!p) return navigator.storage.persist(); }).catch(function(){});
  }catch(e){}
  return {ler:ler, gravar:gravar, lerTexto:lerTexto, gravarTexto:gravarTexto, atualizar:atualizar, aoMudar:aoMudar,
    atualizarPendente:atualizarPendente, tentarNovamente:tentarNovamente, registarAtividade:registarAtividade,
    temPendentes:function(chave){ return chave === undefined ? pendentes.size > 0 : pendentes.has(chave); },
    falhou:function(chave){ return falhas.has(chave); }, disponivel:function(){ return disponivel; }};
})();
window.MissaoArmazem = MissaoArmazem;
