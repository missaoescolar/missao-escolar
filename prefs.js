/* ⚙️ «Como estudo melhor»: preferências de leitura e de sentidos, aplicadas a todas as páginas.
   Carrega-se no <head> (antes de a página aparecer) para não haver um «salto» visual.
   Fundamentação das opções:
   - espaço entre letras: Zorzi et al., 2012 (PNAS) — o espaçamento extra melhorou a leitura de crianças com dislexia;
   - letra maior e mais espaço entre linhas: Rello & Baeza-Yates (estudos de legibilidade para a dislexia);
   - menos movimento e sem sons: ajudam crianças com sensibilidade sensorial ou dificuldade de atenção (PHDA, autismo);
   - a letra base já é a Atkinson Hyperlegible (Braille Institute); «Lexend em todo o texto» é opcional;
   - 🧱 tema de blocos (ligado por defeito: a criança gosta de jogos de construção): usar os interesses da criança aumenta
     o envolvimento (Koegel et al., 2012, J Autism Dev Disord); é só aspeto — sem moedas novas nem recompensas extra;
   - 🙈 sem pontos: há crianças que estudam melhor sem contagem de pontos; o progresso das missões continua visível.
   Guardado na chave "pref_estudo" (entra nas cópias de segurança do progresso). */
const MissaoPrefs = (function(){
  const K = "pref_estudo";
  const BASE = {letra:"normal", espaco:false, lexend:false, movimento:false, som:true, contraste:false, blocos:true, pontos:true};
  function ler(){
    try{ const t = localStorage.getItem(K); return Object.assign({}, BASE, t ? JSON.parse(t) : {}); }catch(e){ return Object.assign({}, BASE); }
  }
  function gravar(p){
    if(window.MissaoArmazem && MissaoArmazem.gravar){ if(MissaoArmazem.gravar(K, p)) return; }
    try{ localStorage.setItem(K, JSON.stringify(p)); }catch(e){}
  }
  function aplicar(p){
    const h = document.documentElement;
    h.classList.toggle("pf-letra-grande", p.letra === "grande");
    h.classList.toggle("pf-letra-muito", p.letra === "muito");
    h.classList.toggle("pf-espaco", !!p.espaco);
    h.classList.toggle("pf-lexend", !!p.lexend);
    h.classList.toggle("pf-movimento", !!p.movimento);
    h.classList.toggle("pf-contraste", !!p.contraste);
    h.classList.toggle("pf-blocos", !!p.blocos);
    h.classList.toggle("pf-sem-pontos", p.pontos === false);
  }
  aplicar(ler());

  function abrir(){
    let d = document.getElementById("pf-dialogo");
    if(!d){
      d = document.createElement("dialog"); d.id = "pf-dialogo"; d.className = "pf-dialogo"; d.setAttribute("aria-labelledby", "pf-t");
      document.body.appendChild(d);
      d.addEventListener("click", e => { if(e.target === d) d.close(); });
    }
    const p = ler();
    const op = (nome, v, txt, sub) => '<label class="pf-op"><input type="checkbox" data-k="'+nome+'"'+(v ? ' checked' : '')+'><span><b>'+txt+'</b><small>'+sub+'</small></span></label>';
    d.innerHTML = '<h2 id="pf-t">⚙️ Como estudo melhor</h2>'+
      '<p class="pf-intro">Muda o site para ler e estudar com mais conforto. Fica guardado neste computador.</p>'+
      '<fieldset class="pf-set"><legend>🔠 Tamanho da letra</legend>'+
        [["normal","Normal"],["grande","Grande"],["muito","Muito grande"]].map(x => '<label class="pf-radio"><input type="radio" name="pf-letra" value="'+x[0]+'"'+(p.letra === x[0] ? ' checked' : '')+'> '+x[1]+'</label>').join("")+'</fieldset>'+
      op("espaco", p.espaco, "↔️ Mais espaço entre letras e linhas", "ajuda muitas pessoas com dislexia a ler mais depressa e com menos erros")+
      op("lexend", p.lexend, "🅰️ Letra Lexend em todo o texto", "uma letra desenhada para tornar a leitura mais fácil; experimenta e vê se gostas")+
      op("contraste", p.contraste, "🌓 Mais contraste", "letras mais escuras e contornos mais fortes")+
      op("blocos", p.blocos, "🧱 Tema de blocos", "cantos retos, botões como blocos e progresso em blocos de relva e pedra, como nos jogos de construção")+
      op("movimento", p.movimento, "🐢 Menos movimento", "sem confettis nem transições; as animações das matérias avançam sem efeitos")+
      op("semsom", !p.som, "🔇 Sem sons", "sem os sons de fim de pausa e de acerto")+
      op("sempontos", !p.pontos, "🙈 Sem pontos (XP)", "esconde os pontos; continuas a ver as missões feitas e o que já aprendeste")+
      '<p class="pf-nota">Também há o 🔊 Ouvir em cada mundo, para quem prefere ouvir a ler.</p>'+
      '<div class="pf-acoes"><button type="button" class="ghost-btn" id="pf-repor">↺ Repor</button><button type="button" class="cta" id="pf-ok">Fechar</button></div>';
    const atualizar = () => {
      const n = {
        letra: (d.querySelector('input[name="pf-letra"]:checked') || {}).value || "normal",
        espaco: d.querySelector('[data-k="espaco"]').checked,
        lexend: d.querySelector('[data-k="lexend"]').checked,
        contraste: d.querySelector('[data-k="contraste"]').checked,
        movimento: d.querySelector('[data-k="movimento"]').checked,
        blocos: d.querySelector('[data-k="blocos"]').checked,
        som: !d.querySelector('[data-k="semsom"]').checked,
        pontos: !d.querySelector('[data-k="sempontos"]').checked
      };
      gravar(n); aplicar(n);
    };
    d.querySelectorAll("input").forEach(i => i.addEventListener("change", atualizar));
    d.querySelector("#pf-ok").addEventListener("click", () => d.close());
    d.querySelector("#pf-repor").addEventListener("click", () => { gravar(Object.assign({}, BASE)); aplicar(BASE); d.close(); abrir(); });
    if(!d.open) d.showModal();
  }
  /* 📲 app instalável: regista o service worker (só em http/https) e guarda o convite de instalação do browser */
  let convite = null;
  if("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
    window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
  }
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); convite = e; });
  function instalar(){
    if(convite){ convite.prompt(); convite.userChoice.finally(() => { convite = null; }); return; }
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const ja = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
    alert(ja ? "A Missão Escolar já está instalada neste aparelho. 🎉" : ios
      ? "No iPhone ou iPad (Safari): toca no botão Partilhar (o quadrado com a seta para cima) e escolhe «Adicionar ao ecrã principal»."
      : "No computador (Edge ou Chrome): na barra de endereço, toca no ícone de instalar (um ecrã com uma seta) ou, no menu ⋯, escolhe «Aplicações» → «Instalar este site como aplicação».\nNo Android (Chrome): menu ⋮ → «Instalar aplicação» ou «Adicionar ao ecrã principal».");
  }
  return {abrir:abrir, ler:ler, som:() => ler().som, poucoMovimento:() => ler().movimento, instalar:instalar};
})();
