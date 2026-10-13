/* Marca a versão nos ficheiros .js e .css de todas as páginas (ex.: app.js?v=20261013-2130).
   Os browsers guardam cada ficheiro até 10 minutos; sem isto, logo a seguir a uma publicação
   podiam juntar uma página nova com um script antigo, e a página deixava de funcionar.
   Correr antes de cada commit que muda o site:  node ferramentas/versao.cjs */
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..');
const d = new Date(), p = n => String(n).padStart(2, '0');
const versao = d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes());
let n = 0;
for(const f of fs.readdirSync(raiz).filter(f => f.endsWith('.html'))){
  const ficheiro = path.join(raiz, f), antes = fs.readFileSync(ficheiro, 'utf8');
  // only local files (no "://"), with or without an old ?v=
  const depois = antes.replace(/((?:src|href)=")((?![a-z]+:)[^"?#]+\.(?:js|css))(?:\?v=[^"]*)?"/g, (m, a, url) => { n++; return a + url + '?v=' + versao + '"'; });
  if(depois !== antes) fs.writeFileSync(ficheiro, depois);
}
console.log('versão ' + versao + ' marcada em ' + n + ' ligações');
