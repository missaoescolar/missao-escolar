/* Backup controls live only on the parents page. */
(function(){
  const ficheiro=document.getElementById('progresso-ficheiro');
  const importar=document.getElementById('progresso-importar');
  const resumo=document.getElementById('progresso-resumo');
  const estado=document.getElementById('progresso-estado');
  let texto=null, leitura=0;
  document.getElementById('progresso-exportar').addEventListener('click',function(){
    try{
      const c=MissaoArmazem.descarregarCopia();
      estado.textContent=c.indisponiveis.length ? 'Cópia parcial descarregada: alguns dados não puderam ser lidos. Mantenha os separadores com progresso pendente abertos.' : 'Cópia descarregada. Confirme que o ficheiro ficou na pasta de transferências.';
    }catch(e){ estado.textContent='Não foi possível criar a cópia: '+e.message; }
  });
  ficheiro.addEventListener('change',async function(){
    const pedido=++leitura;
    texto=null; importar.disabled=true; resumo.hidden=true; estado.textContent='';
    const f=ficheiro.files[0]; if(!f) return;
    try{
      if(f.size > 20*1024*1024) throw new Error('O ficheiro excede 20 MB.');
      const t=await f.text(), c=MissaoArmazem.validarCopia(t);
      if(pedido !== leitura) return;
      texto=t;
      resumo.textContent='Esta cópia contém '+Object.keys(c.dados).length+' grupos de dados. Recuperar substitui os valores correspondentes; os valores atuais são preservados numa cópia local antes da substituição. Feche os outros separadores da Missão Escolar depois de guardar ou exportar o seu progresso.'+
        (Array.isArray(c.indisponiveis) && c.indisponiveis.length ? ' Atenção: a cópia é parcial, porque alguns dados não puderam ser lidos.' : '');
      resumo.hidden=false; importar.disabled=false;
    }catch(e){ if(pedido === leitura) estado.textContent='Não foi possível ler esta cópia: '+e.message; }
  });
  importar.addEventListener('click',async function(){
    if(texto === null) return;
    importar.disabled=true; ficheiro.disabled=true;
    try{
      const r=await MissaoArmazem.importarCopia(texto);
      estado.textContent=r.falhadas.length ? 'Recuperação incompleta: '+r.falhadas.length+' grupos não foram guardados. O ficheiro continua disponível; resolva o problema de armazenamento e toque novamente em Recuperar esta cópia.' : 'Cópia recuperada. Pode abrir o ano escolar para continuar. Os dados anteriores foram preservados.';
    }catch(e){ estado.textContent='Não foi possível recuperar: '+e.message; }
    finally{ importar.disabled=false; ficheiro.disabled=false; }
  });
})();
