/* 💡 Onde há mais dificuldades? Junta três sinais por mundo e sugere o que treinar a seguir.
   1. Perguntas (banco_srs): as que a criança errou da última vez que respondeu, e o total de erros.
   2. Bilhete de saída (caderno): o campo «O que ainda não percebi bem» preenchido.
   3. Cartões (cartoes): quantos cartões «ainda não sabia» na última vez que treinou.
   Pontuação = 3 × perguntas por acertar + 1 × erros antigos (até 5) + 4 se escreveu uma dúvida + 1 × cartões por saber.
   Quando volta a acertar uma pergunta ou a saber os cartões, a pontuação desce sozinha. */
const MissaoDificuldades = (function(){
  function ler(k){ try{ return MissaoArmazem.ler(k, {}) || {}; }catch(e){ return {}; } }
  function analisar(subjects){
    const srs = ler("banco_srs"), caderno = ler("caderno"), cartoes = ler("cartoes");
    const porMundo = {};
    Object.keys(srs).forEach(function(id){
      const wid = id.split(":")[0], e = srs[id] || [];
      const p = porMundo[wid] || (porMundo[wid] = {porAcertar:0, erros:0, respondidas:0});
      p.respondidas++;
      if(e[2] > 0 && e[3] === 0) p.porAcertar++;
      p.erros += (e[4] || 0);
    });
    const lista = [];
    subjects.forEach(function(s){
      s.worlds.forEach(function(w){
        const p = porMundo[w.id] || {porAcertar:0, erros:0, respondidas:0};
        const duvida = ((caderno[w.id] || {}).b || "").trim();
        const c = cartoes[w.id] || null, cartasNao = c ? (c.nao || 0) : 0;
        const pontos = 3*p.porAcertar + Math.min(p.erros, 5) + (duvida ? 4 : 0) + cartasNao;
        if(pontos <= 0) return;
        const motivos = [];
        if(p.porAcertar) motivos.push(p.porAcertar === 1 ? "1 pergunta por acertar" : p.porAcertar+" perguntas por acertar");
        if(duvida) motivos.push("escreveste uma dúvida no caderno");
        if(cartasNao) motivos.push(cartasNao === 1 ? "1 cartão por saber" : cartasNao+" cartões por saber");
        if(!motivos.length && p.erros) motivos.push("já erraste perguntas aqui (agora estão certas)");
        lista.push({s:s, w:w, pontos:pontos, motivos:motivos, duvida:duvida});
      });
    });
    return lista.sort(function(a, b){ return b.pontos - a.pontos; });
  }
  return {analisar:analisar};
})();
