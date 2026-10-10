/* Arena de Matemática — geradores de exercícios (6.º ano).
   Cada tema (com o mesmo id do mundo em data/matematica.js) tem vários geradores.
   Um gerador recebe o nível (1, 2 ou 3) e devolve uma pergunta nova, com números ao calhas:
     {texto, tipo:"num"|"escolha"|"fracao", resposta, opcoes?, tolerancia?, unidade?, visual?, explicacao, dica?, simplificada?}
   - "num":     resposta é um número (aceita vírgula ou ponto; tolerancia opcional)
   - "fracao":  resposta é {n, d}; aceita frações equivalentes, a não ser que simplificada = true
   - "escolha": opcoes é uma lista; resposta é o índice da certa */
const ARENA = (function(){
  const rnd = (a,b) => a + Math.floor(Math.random()*(b-a+1));
  const pick = a => a[Math.floor(Math.random()*a.length)];
  const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; };
  const gcd = (a,b) => { a=Math.abs(a); b=Math.abs(b); while(b){ const t=b; b=a%b; a=t; } return a; };
  const lcm = (a,b) => a/gcd(a,b)*b;
  const round = (x,d) => Math.round(x*Math.pow(10, d===undefined?3:d))/Math.pow(10, d===undefined?3:d);
  const fmt = x => String(round(x,3)).replace(".", ",");
  const isPrime = n => { if(n<2) return false; for(let i=2;i*i<=n;i++) if(n%i===0) return false; return true; };
  const divisors = n => { const r=[]; for(let i=1;i<=n;i++) if(n%i===0) r.push(i); return r; };
  const powStr = f => { const c={}; f.forEach(p => c[p]=(c[p]||0)+1);
    return Object.keys(c).map(Number).sort((a,b)=>a-b).map(p => c[p]>1 ? p+"<sup>"+c[p]+"</sup>" : String(p)).join(" × "); };
  const fr = (n,d) => '<span class="fr"><span>'+n+'</span><span>'+d+'</span></span>';

  function choice(texto, certa, erradas, extra){
    const ds = erradas.filter((x,i,a) => x!==certa && a.indexOf(x)===i).slice(0,3);
    const opcoes = shuffle([certa].concat(ds));
    return Object.assign({tipo:"escolha", texto:texto, opcoes:opcoes, resposta:opcoes.indexOf(certa)}, extra);
  }

  /* ------------------------------ desenhos ------------------------------ */
  function pizza(n, d){
    const r=70, cx=80, cy=80;
    let s = '<svg class="ar-svg" viewBox="0 0 160 160" width="170" height="170" role="img" aria-label="Círculo dividido em '+d+' partes iguais, com '+n+' pintadas">';
    for(let i=0;i<d;i++){
      const a0 = -Math.PI/2 + i*2*Math.PI/d, a1 = a0 + 2*Math.PI/d;
      s += '<path d="M'+cx+','+cy+' L'+(cx+r*Math.cos(a0)).toFixed(1)+','+(cy+r*Math.sin(a0)).toFixed(1)+
        ' A'+r+','+r+' 0 0 1 '+(cx+r*Math.cos(a1)).toFixed(1)+','+(cy+r*Math.sin(a1)).toFixed(1)+' Z" fill="'+(i<n?'var(--wc)':'var(--surface)')+
        '" stroke="currentColor" stroke-width="1.5"/>';
    }
    return s+'</svg>';
  }
  function label(x, y, t, anchor){ return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anchor||"middle")+'" font-size="13" font-weight="700">'+t+'</text>'; }
  function shape(kind, a, b, c){
    // a, b, c = medidas (cm). Desenho aproximado, não está à escala.
    const W=240, H=150, x0=30, y0=120;
    let s = '<svg class="ar-svg" viewBox="0 0 '+W+' '+H+'" width="260" role="img" aria-label="Figura geométrica com medidas (não está à escala)">';
    const fill = 'fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="2.5"';
    const dash = 'stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"';
    if(kind==="rect"){
      s += '<rect x="'+x0+'" y="35" width="160" height="85" '+fill+'/>'+label(110,140,a+" cm")+label(200,82,b+" cm","start");
    } else if(kind==="tri"){
      s += '<polygon points="'+x0+','+y0+' 190,'+y0+' 85,25" '+fill+'/><line x1="85" y1="25" x2="85" y2="'+y0+'" '+dash+'/>'+
        label(110,140,"base "+a+" cm")+label(91,80,"altura "+b+" cm","start");
    } else if(kind==="para"){
      s += '<polygon points="'+x0+','+y0+' 170,'+y0+' 210,35 70,35" '+fill+'/><line x1="70" y1="35" x2="70" y2="'+y0+'" '+dash+'/>'+
        label(100,140,"base "+a+" cm")+label(76,82,"altura "+b+" cm","start");
    } else if(kind==="trap"){
      s += '<polygon points="'+x0+','+y0+' 210,'+y0+' 160,35 80,35" '+fill+'/><line x1="80" y1="35" x2="80" y2="'+y0+'" '+dash+'/>'+
        label(120,140,"base maior "+a+" cm")+label(120,27,"base menor "+b+" cm")+label(86,82,"altura "+c+" cm","start");
    } else if(kind==="circle"){
      s = '<svg class="ar-svg" viewBox="0 0 200 160" width="210" role="img" aria-label="Círculo com o '+(b==="d"?"diâmetro":"raio")+' assinalado">'+
        '<circle cx="100" cy="80" r="65" '+fill+'/><circle cx="100" cy="80" r="3" fill="currentColor"/>'+
        (b==="d" ? '<line x1="35" y1="80" x2="165" y2="80" stroke="currentColor" stroke-width="2"/>'+label(100,72,"d = "+a+" cm")
                 : '<line x1="100" y1="80" x2="165" y2="80" stroke="currentColor" stroke-width="2"/>'+label(132,72,"r = "+a+" cm"));
    }
    return s+'</svg>';
  }
  function angleSvg(deg){
    const cx=120, cy=110, r=90, rad=deg*Math.PI/180;
    const x2 = cx + r*Math.cos(-rad), y2 = cy + r*Math.sin(-rad);
    const ar = 28, ax = cx + ar*Math.cos(-rad), ay = cy + ar*Math.sin(-rad);
    const arc = deg===90 ? '<polyline points="'+(cx+18)+','+cy+' '+(cx+18)+','+(cy-18)+' '+cx+','+(cy-18)+'" fill="none" stroke="var(--wc)" stroke-width="2.5"/>'
      : '<path d="M'+(cx+ar)+','+cy+' A'+ar+','+ar+' 0 '+(deg>180?1:0)+' 0 '+ax.toFixed(1)+','+ay.toFixed(1)+'" fill="none" stroke="var(--wc)" stroke-width="2.5"/>';
    return '<svg class="ar-svg" viewBox="0 0 240 130" width="250" role="img" aria-label="Um ângulo desenhado">'+
      '<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+r)+'" y2="'+cy+'" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'+
      '<line x1="'+cx+'" y1="'+cy+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'+
      arc+'<circle cx="'+cx+'" cy="'+cy+'" r="3.5" fill="currentColor"/></svg>';
  }

  /* ------------------------------ n1: números ------------------------------ */
  const CRIT = {2:"termina em 0, 2, 4, 6 ou 8", 3:"a soma dos algarismos é múltiplo de 3", 5:"termina em 0 ou 5", 9:"a soma dos algarismos é múltiplo de 9", 10:"termina em 0"};
  function divisivel(l){
    const k = pick(l===1 ? [2,5,10] : l===2 ? [3,9,2,5] : [3,9,2,5,10]);
    const range = l===1 ? [10,99] : l===2 ? [100,999] : [1000,9999];
    const yes = Math.random() < 0.5;
    let n; do{ n = rnd(range[0], range[1]); } while((n%k===0) !== yes);
    const digits = String(n).split("");
    const soma = digits.reduce((a,c) => a + Number(c), 0);
    const porque = (k===3||k===9) ? "Soma dos algarismos: "+digits.join(" + ")+" = "+soma+" — "+(soma%k===0?"é":"não é")+" múltiplo de "+k+"."
      : "O último algarismo é "+(n%10)+".";
    return choice("O número <b>"+n+"</b> é divisível por <b>"+k+"</b>?", yes?"Sim":"Não", [yes?"Não":"Sim"],
      {explicacao:"Um número é divisível por "+k+" quando "+CRIT[k]+". "+porque+" Por isso, <b>"+(yes?"sim":"não")+"</b>.", dica:"Divisível por "+k+": "+CRIT[k]+"."});
  }
  function primo(l){
    const max = l===1 ? 30 : l===2 ? 100 : 200;
    const want = Math.random() < 0.5;
    let n; do{ n = rnd(2, max); } while(isPrime(n) !== want);
    const ds = divisors(n);
    return choice("O número <b>"+n+"</b> é primo ou composto?", want?"Primo":"Composto", [want?"Composto":"Primo"],
      {explicacao: want ? n+" só tem dois divisores, 1 e "+n+": é <b>primo</b>." : n+" tem mais de dois divisores ("+ds.join(", ")+"): é <b>composto</b>.",
       dica:"Experimenta dividir por 2, 3, 5 e 7."});
  }
  function mdc(l){
    const g = pick(l===1 ? [2,3,4,5] : l===2 ? [2,3,4,6,8] : [3,4,6,7,9,12]);
    const m = l===1 ? 5 : l===2 ? 7 : 9;
    let x, y; do{ x = rnd(1,m); y = rnd(1,m); } while(x===y || gcd(x,y)!==1);
    const a = g*x, b = g*y, da = divisors(a), db = divisors(b), com = da.filter(v => db.indexOf(v)!==-1);
    return {tipo:"num", texto:"Qual é o <b>m.d.c.</b> de "+a+" e "+b+"?", resposta:g,
      explicacao:"Divisores de "+a+": "+da.join(", ")+".<br>Divisores de "+b+": "+db.join(", ")+".<br>Comuns: "+com.join(", ")+". O maior é <b>"+g+"</b>.",
      dica:"Lista os divisores dos dois números e procura o maior que aparece nas duas listas."};
  }
  function mmc(l){
    const max = l===1 ? 10 : l===2 ? 15 : 24, lim = l===3 ? 240 : 120;
    let a, b, m; do{ a = rnd(2,max); b = rnd(2,max); m = lcm(a,b); } while(a===b || m>lim);
    const ma=[], mb=[];
    for(let i=a;i<=m;i+=a) ma.push(i);
    for(let i=b;i<=m;i+=b) mb.push(i);
    return {tipo:"num", texto:"Qual é o <b>m.m.c.</b> de "+a+" e "+b+"?", resposta:m,
      explicacao:"Múltiplos de "+a+": "+ma.join(", ")+"…<br>Múltiplos de "+b+": "+mb.join(", ")+"…<br>O primeiro em comum é <b>"+m+"</b>.",
      dica:"Escreve os múltiplos de cada número até encontrares um repetido."};
  }
  function decomp(l){
    const primes = l===1 ? [2,3,5] : l===2 ? [2,3,5,7] : [2,3,5,7,11];
    const k = l===1 ? 3 : l===2 ? 4 : 5;
    const f = []; for(let i=0;i<k;i++) f.push(pick(primes));
    f.sort((a,b) => a-b);
    const n = f.reduce((a,b) => a*b, 1), right = powStr(f);
    return choice("Qual é a <b>decomposição em fatores primos</b> de "+n+"?", right,
      [[f[0]*f[1]].concat(f.slice(2)).join(" × "), powStr(f.concat([pick(primes)]).sort((a,b)=>a-b)), powStr(f.slice(0,-1)), powStr(f.slice(1).concat([f[0]===2?3:2]).sort((a,b)=>a-b))],
      {explicacao:n+" = "+f.join(" × ")+" = <b>"+right+"</b>. Todos os fatores têm de ser números primos e o produto tem de dar "+n+".",
       dica:"Divide sempre pelo menor primo possível: primeiro 2, depois 3, depois 5…"});
  }

  /* ------------------------------ n2: frações ------------------------------ */
  function fracVisual(l){
    const d = rnd(2, l===1 ? 6 : l===2 ? 10 : 12), n = rnd(1, d-1);
    return {tipo:"fracao", texto:"Que fração do círculo está pintada?", visual:pizza(n,d), resposta:{n:n,d:d},
      explicacao:"O círculo está dividido em "+d+" partes iguais (denominador) e "+n+" estão pintadas (numerador): <b>"+n+"/"+d+"</b>.",
      dica:"Conta as partes todas (denominador) e as pintadas (numerador)."};
  }
  function equiv(l){
    let a, b; do{ b = rnd(2, 7); a = rnd(1, b-1); } while(gcd(a,b)!==1);
    const k = rnd(2, l===3 ? 9 : 5);
    if(l===1 || Math.random()<0.5){
      return {tipo:"num", texto:"Completa: "+fr(a,b)+" = "+fr("?", b*k), resposta:a*k,
        explicacao:"O denominador foi multiplicado por "+k+" ("+b+" × "+k+" = "+(b*k)+"), por isso o numerador também: "+a+" × "+k+" = <b>"+(a*k)+"</b>.",
        dica:"Por quanto foi multiplicado o denominador?"};
    }
    return {tipo:"num", texto:"Completa: "+fr(a,b)+" = "+fr(a*k, "?"), resposta:b*k,
      explicacao:"O numerador foi multiplicado por "+k+", por isso o denominador também: "+b+" × "+k+" = <b>"+(b*k)+"</b>.",
      dica:"Por quanto foi multiplicado o numerador?"};
  }
  function somaFr(l){
    let d1, d2;
    if(l===1){ d1 = d2 = rnd(3,10); }
    else if(l===2){ d1 = rnd(2,5); d2 = d1*rnd(2,3); }
    else { do{ d1 = rnd(2,8); d2 = rnd(2,8); } while(d1===d2); }
    const n1 = rnd(1, d1+ (l===3?2:0)), n2 = rnd(1, d2);
    const m = lcm(d1,d2), a = n1*(m/d1), b = n2*(m/d2);
    const sub = Math.random()<0.5 && a!==b;
    const big = sub && a<b, A = big ? b : a, B = big ? a : b;
    const [N1,D1,N2,D2] = big ? [n2,d2,n1,d1] : [n1,d1,n2,d2];
    const res = sub ? A-B : A+B;
    const g = gcd(res, m);
    const passos = d1===d2 ? "Os denominadores são iguais: "+(sub?"subtrai":"soma")+" os numeradores. "
      : "Reduz ao mesmo denominador ("+m+", o m.m.c.): "+N1+"/"+D1+" = "+(N1*m/D1)+"/"+m+" e "+N2+"/"+D2+" = "+(N2*m/D2)+"/"+m+". ";
    return {tipo:"fracao", texto:"Calcula: "+fr(N1,D1)+(sub?" − ":" + ")+fr(N2,D2), resposta:{n:res, d:m},
      explicacao:passos+(sub?A+" − "+B:A+" + "+B)+" = "+res+", ou seja <b>"+res+"/"+m+"</b>"+(g>1 ? " = "+(res/g)+"/"+(m/g) : "")+".",
      dica: d1===d2 ? "Com denominadores iguais, só mexes nos numeradores." : "Primeiro põe as duas frações com o mesmo denominador."};
  }
  function multFr(l){
    const a=rnd(1,5), b=rnd(2,7), c=rnd(1,5), d=rnd(2,7);
    const n=a*c, m=b*d, g=gcd(n,m);
    return {tipo:"fracao", texto:"Calcula: "+fr(a,b)+" × "+fr(c,d), resposta:{n:n,d:m},
      explicacao:"Multiplica numerador com numerador e denominador com denominador: "+a+" × "+c+" = "+n+" e "+b+" × "+d+" = "+m+". Resultado: <b>"+n+"/"+m+"</b>"+(g>1?" = "+(n/g)+"/"+(m/g):"")+".",
      dica:"Em cima × em cima, em baixo × em baixo."};
  }
  function divFr(l){
    const a=rnd(1,5), b=rnd(2,6), c=rnd(1,5), d=rnd(2,6);
    const n=a*d, m=b*c, g=gcd(n,m);
    return {tipo:"fracao", texto:"Calcula: "+fr(a,b)+" ÷ "+fr(c,d), resposta:{n:n,d:m},
      explicacao:"Dividir é multiplicar pelo inverso: "+a+"/"+b+" × "+d+"/"+c+" = "+n+"/"+m+(g>1?" = <b>"+(n/g)+"/"+(m/g)+"</b>":"")+".",
      dica:"Troca a segunda fração (inverso) e multiplica."};
  }
  function simplif(l){
    let a, b; do{ b = rnd(2, l===1?6:9); a = rnd(1, b-1); } while(gcd(a,b)!==1);
    const k = rnd(2, l===1 ? 4 : l===2 ? 6 : 9);
    return {tipo:"fracao", simplificada:true, texto:"Escreve "+fr(a*k,b*k)+" na forma <b>irredutível</b> (o mais simplificada possível).", resposta:{n:a,d:b},
      explicacao:"O m.d.c. de "+(a*k)+" e "+(b*k)+" é "+k+". Divide os dois por "+k+": <b>"+a+"/"+b+"</b>.",
      dica:"Procura o maior número que divide o numerador e o denominador."};
  }
  function compFr(l){
    let a,b,c,d;
    do{ b=rnd(2,9); d=rnd(2,9); a=rnd(1,b-1); c=rnd(1,d-1); } while(a*d===c*b && Math.random()<0.7);
    const m = lcm(b,d), A = a*m/b, C = c*m/d;
    const sym = A>C ? ">" : A<C ? "<" : "=";
    return choice("Qual é o sinal certo? "+fr(a,b)+" ▢ "+fr(c,d), sym, [">","<","="].filter(s=>s!==sym),
      {explicacao:"Com o mesmo denominador ("+m+"): "+a+"/"+b+" = "+A+"/"+m+" e "+c+"/"+d+" = "+C+"/"+m+". Como "+A+" "+sym+" "+C+", fica <b>"+a+"/"+b+" "+sym+" "+c+"/"+d+"</b>.",
       dica:"Põe as duas frações com o mesmo denominador e compara os numeradores."});
  }

  /* ------------------------------ n3: decimais e % ------------------------------ */
  function percentOf(l){
    const p = pick(l===1 ? [10,25,50] : l===2 ? [5,20,30,75] : [15,35,40,60,12]);
    const n = l===1 ? rnd(2,20)*20 : l===2 ? rnd(2,30)*20 : rnd(2,40)*25;
    const r = p*n/100;
    return {tipo:"num", texto:"Quanto é <b>"+p+"%</b> de <b>"+n+"</b>?", resposta:r, tolerancia:0.01,
      explicacao:p+"% = "+fmt(p/100)+". Então "+fmt(p/100)+" × "+n+" = <b>"+fmt(r)+"</b>.",
      dica: p===50 ? "50% é metade." : p===25 ? "25% é um quarto." : p===10 ? "10% é dividir por 10." : "Escreve a percentagem em decimal e multiplica."};
  }
  function desconto(l){
    const preco = rnd(4,40)*5, p = pick(l<3 ? [10,20,25,50] : [15,30,35]);
    const r = preco*(1-p/100);
    return {tipo:"num", unidade:"€", texto:"Um jogo custa <b>"+preco+" €</b> e tem <b>"+p+"% de desconto</b>. Quanto pagas?", resposta:r, tolerancia:0.01,
      explicacao:"Desconto: "+p+"% de "+preco+" € = "+fmt(preco*p/100)+" €. Pagas "+preco+" − "+fmt(preco*p/100)+" = <b>"+fmt(r)+" €</b>.",
      dica:"Calcula primeiro quanto é o desconto e depois tira-o ao preço."};
  }
  function decOps(l){
    let a, b, op, r;
    const dec = (lo, hi) => { let v; do{ v = rnd(lo, hi); } while(v % 10 === 0); return v; };  // always has a decimal part
    if(l===1){ a = dec(11,99)/10; b = dec(11,99)/10; op = "+"; r = a+b; }
    else if(l===2){ a = dec(101,999)/100; b = dec(11,99)/10; op = Math.random()<0.5 ? "+" : "−"; if(op==="−" && b>a){ const t=a; a=b; b=t; } r = op==="+" ? a+b : a-b; }
    else { a = rnd(2,9)/10; b = pick([rnd(2,9), rnd(2,9)/10]); op = "×"; r = a*b; }
    r = round(r, 3);
    const passo = op==="×" ? "Multiplica sem as vírgulas e depois conta as casas decimais dos dois números."
      : "Alinha as vírgulas (décimas debaixo de décimas, centésimas debaixo de centésimas) e calcula.";
    return {tipo:"num", texto:"Calcula: <b>"+fmt(a)+" "+op+" "+fmt(b)+"</b>", resposta:r, tolerancia:0.0001,
      explicacao:passo+" Resultado: <b>"+fmt(r)+"</b>.", dica:passo};
  }
  function fracPct(l){
    const d = pick(l===1 ? [2,4,10] : l===2 ? [4,5,20,25] : [5,20,25,50,8]);
    const n = rnd(1, d-1), r = n/d*100;
    return {tipo:"num", unidade:"%", texto:"Escreve "+fr(n,d)+" como <b>percentagem</b>.", resposta:r, tolerancia:0.01,
      explicacao:n+"/"+d+" = "+fmt(n/d)+" = <b>"+fmt(r)+"%</b>. (Também podes procurar a fração equivalente com denominador 100.)",
      dica:"Que fração equivalente tem denominador 100?"};
  }
  function maiorDec(l){
    const dec = l===1 ? [1] : l===2 ? [1,2] : [1,2,3];
    const set = new Set();
    while(set.size<4){ const k = pick(dec); set.add(round(rnd(1, Math.pow(10,k)-1)/Math.pow(10,k) + (l===3 ? rnd(0,1) : 0), 3)); }
    const vals = Array.from(set), max = Math.max.apply(null, vals);
    return choice("Qual é o <b>maior</b> número?", fmt(max), vals.filter(v=>v!==max).map(fmt),
      {explicacao:"Compara primeiro as unidades, depois as décimas, depois as centésimas. O maior é <b>"+fmt(max)+"</b>. (Atenção: 0,5 é maior do que 0,45, porque 5 décimas > 4 décimas.)",
       dica:"Acrescenta zeros para todos terem as mesmas casas decimais (0,5 = 0,50) e compara."});
  }

  /* ------------------------------ n4: sequências e proporção ------------------------------ */
  function nextTerm(l){
    let t = [], how;
    if(l===1){ const s=rnd(1,20), d=rnd(2,9); for(let i=0;i<4;i++) t.push(s+i*d); how="soma "+d; t.push(s+4*d); }
    else if(l===2){ const d=rnd(3,12), s=rnd(5*d, 9*d); for(let i=0;i<5;i++) t.push(s-i*d); how="subtrai "+d; }
    else { const r=pick([2,3]), s=rnd(1,5); for(let i=0;i<5;i++) t.push(s*Math.pow(r,i)); how="multiplica por "+r; }
    const ans = t.pop();
    return {tipo:"num", texto:"Qual é o termo seguinte? <b>"+t.join(", ")+", ___</b>", resposta:ans,
      explicacao:"Cada termo "+how+" ao anterior: "+t[t.length-1]+" → <b>"+ans+"</b>.", dica:"Vê o que muda de um termo para o seguinte."};
  }
  function nthTerm(l){
    const s=rnd(1,9), d=rnd(2,7), n = l===2 ? 10 : rnd(15,30);
    const seq = [0,1,2,3].map(i => s+i*d).join(", ");
    return {tipo:"num", texto:"Na sequência <b>"+seq+", …</b> qual é o <b>"+n+".º termo</b>?", resposta:s+(n-1)*d,
      explicacao:"Começa em "+s+" e soma "+d+" de cada vez. Até ao "+n+".º termo somas "+d+" um total de "+(n-1)+" vezes: "+s+" + "+(n-1)+" × "+d+" = <b>"+(s+(n-1)*d)+"</b>.",
      dica:"Quantas vezes se soma "+d+" desde o 1.º termo até ao "+n+".º?"};
  }
  function propTable(l){
    const k = l===3 ? pick([1.5,2.5,0.5]) : rnd(2,9);
    const xs = shuffle([1,2,3,4,5,6,8,10]).slice(0,3).sort((a,b)=>a-b);
    const ys = xs.map(x => round(x*k));
    const hideY = l===1 || Math.random()<0.6, i = rnd(0,2);
    const cell = (v, hide) => '<td>'+(hide ? '<b>?</b>' : fmt(v))+'</td>';
    const table = '<table class="ar-table"><tr><th>Quantidade</th>'+xs.map((x,j)=>cell(x, !hideY && j===i)).join("")+'</tr>'+
      '<tr><th>Preço (€)</th>'+ys.map((y,j)=>cell(y, hideY && j===i)).join("")+'</tr></table>';
    const ans = hideY ? ys[i] : xs[i];
    return {tipo:"num", texto:"As grandezas são <b>diretamente proporcionais</b>. Qual é o valor que falta?", visual:table, resposta:ans, tolerancia:0.001,
      explicacao:"A constante de proporcionalidade é "+fmt(k)+" (preço ÷ quantidade). "+(hideY ? fmt(xs[i])+" × "+fmt(k) : fmt(ys[i])+" ÷ "+fmt(k))+" = <b>"+fmt(ans)+"</b>.",
      dica:"Divide um preço pela quantidade correspondente para descobrir a constante."};
  }
  function regra3(l){
    const coisa = pick(["cadernos","bilhetes de cinema","gelados","pacotes de cromos","canetas"]);
    const p = l===1 ? rnd(2,9) : rnd(4,40)*0.25;
    const a = rnd(2,5), b = rnd(6,12);
    return {tipo:"num", unidade:"€", texto:a+" "+coisa+" custam <b>"+fmt(a*p)+" €</b>. Quanto custam <b>"+b+"</b>, ao mesmo preço?", resposta:b*p, tolerancia:0.01,
      explicacao:"Cada um custa "+fmt(a*p)+" ÷ "+a+" = "+fmt(p)+" €. Então "+b+" × "+fmt(p)+" = <b>"+fmt(b*p)+" €</b>.",
      dica:"Descobre primeiro quanto custa um."};
  }
  function escala(l){
    const k = l===2 ? 100000 : pick([50000,25000,200000]);
    const cm = rnd(2,9), km = cm*k/100000;
    return {tipo:"num", unidade:"km", texto:"Num mapa à escala <b>1:"+k.toLocaleString("pt-PT")+"</b>, duas cidades estão a <b>"+cm+" cm</b>. Qual é a distância real, em km?", resposta:km, tolerancia:0.001,
      explicacao:"1 cm no mapa = "+k.toLocaleString("pt-PT")+" cm = "+fmt(k/100000)+" km. Então "+cm+" × "+fmt(k/100000)+" = <b>"+fmt(km)+" km</b>.",
      dica:"100 000 cm = 1 km."};
  }

  /* ------------------------------ n5: ângulos e áreas ------------------------------ */
  function compSup(l){
    const comp = l===1 || (l===3 && Math.random()<0.5);
    const a = comp ? rnd(10,80) : rnd(10,170), tot = comp ? 90 : 180;
    return {tipo:"num", unidade:"°", texto:"Um ângulo mede <b>"+a+"°</b>. Quanto mede o seu ângulo <b>"+(comp?"complementar":"suplementar")+"</b>?", resposta:tot-a,
      explicacao:(comp?"Complementares":"Suplementares")+" somam "+tot+"°: "+tot+" − "+a+" = <b>"+(tot-a)+"°</b>.",
      dica: comp ? "Complementares somam 90°." : "Suplementares somam 180°."};
  }
  function triAngle(l){
    const a = rnd(6,16)*5, b = rnd(6,16)*5;   // 30°–80°, so the drawing is a real triangle
    return {tipo:"num", unidade:"°", texto:"Num triângulo, dois ângulos medem <b>"+a+"°</b> e <b>"+b+"°</b>. Quanto mede o terceiro?", visual:triSvg(a,b), resposta:180-a-b,
      explicacao:"Os ângulos de um triângulo somam 180°: 180 − "+a+" − "+b+" = <b>"+(180-a-b)+"°</b>.", dica:"Num triângulo, os três ângulos somam 180°."};
  }
  function area(l){
    const kind = l===1 ? "rect" : l===2 ? pick(["tri","para","rect"]) : pick(["trap","tri","para"]);
    let a = rnd(3,15), b = rnd(2,12), c = rnd(2,9), r, f;
    if(kind==="rect"){ r=a*b; f="comprimento × largura = "+a+" × "+b; }
    if(kind==="para"){ r=a*b; f="base × altura = "+a+" × "+b; }
    if(kind==="tri"){ if((a*b)%2) a++; r=a*b/2; f="(base × altura) ÷ 2 = ("+a+" × "+b+") ÷ 2"; }
    if(kind==="trap"){ b = rnd(2, a-1); if(((a+b)*c)%2) c++; r=(a+b)*c/2; f="((base maior + base menor) × altura) ÷ 2 = (("+a+" + "+b+") × "+c+") ÷ 2"; }
    const nome = {rect:"retângulo", para:"paralelogramo", tri:"triângulo", trap:"trapézio"}[kind];
    return {tipo:"num", unidade:"cm²", texto:"Qual é a <b>área</b> deste "+nome+"?", visual:shape(kind,a,b,c), resposta:r,
      explicacao:"Área do "+nome+" = "+f+" = <b>"+fmt(r)+" cm²</b>.",
      dica:{rect:"Comprimento × largura.", para:"Base × altura.", tri:"Base × altura, a dividir por 2.", trap:"Soma as bases, multiplica pela altura e divide por 2."}[kind]};
  }
  function perim(l){
    if(l===1){ const a=rnd(3,15), b=rnd(2,12);
      return {tipo:"num", unidade:"cm", texto:"Qual é o <b>perímetro</b> deste retângulo?", visual:shape("rect",a,b), resposta:2*(a+b),
        explicacao:"Soma os 4 lados: "+a+" + "+b+" + "+a+" + "+b+" = <b>"+(2*(a+b))+" cm</b>.", dica:"O perímetro é a soma de todos os lados."}; }
    const lados = pick([[3,"triângulo equilátero"],[4,"quadrado"],[5,"pentágono regular"],[6,"hexágono regular"],[8,"octógono regular"]]);
    const s = l===2 ? rnd(2,12) : rnd(11,40)/2;
    return {tipo:"num", unidade:"cm", texto:"Um <b>"+lados[1]+"</b> tem lados de <b>"+fmt(s)+" cm</b>. Qual é o perímetro?", resposta:lados[0]*s, tolerancia:0.001,
      explicacao:"Tem "+lados[0]+" lados iguais: "+lados[0]+" × "+fmt(s)+" = <b>"+fmt(lados[0]*s)+" cm</b>.", dica:"Quantos lados tem a figura?"};
  }
  function classAngle(l){
    const tipo = pick(["agudo","reto","obtuso","raso"]);
    const deg = tipo==="agudo" ? rnd(15,75) : tipo==="reto" ? 90 : tipo==="obtuso" ? rnd(105,165) : 180;
    return choice("Como se classifica este ângulo?", tipo, ["agudo","reto","obtuso","raso"],
      {visual:angleSvg(deg), explicacao:"Este ângulo mede cerca de "+deg+"°. Agudo: menos de 90°. Reto: 90°. Obtuso: entre 90° e 180°. Raso: 180°. É <b>"+tipo+"</b>.",
       dica:"Compara com o canto de uma folha (90°)."});
  }

  /* ------------------------------ n6: círculo ------------------------------ */
  function circP(l){
    if(l===3){ const r=rnd(2,15), P=round(2*3.14*r,2);
      return {tipo:"num", unidade:"cm", texto:"Uma circunferência tem <b>"+fmt(P)+" cm</b> de perímetro. Qual é o <b>raio</b>? (π ≈ 3,14)", resposta:r, tolerancia:0.02,
        explicacao:"P = 2 × π × r, por isso r = P ÷ (2 × 3,14) = "+fmt(P)+" ÷ 6,28 = <b>"+r+" cm</b>.", dica:"Divide o perímetro por 6,28 (que é 2 × 3,14)."}; }
    const useD = l===1, v = rnd(2,20), P = round(3.14*(useD ? v : 2*v), 2);
    return {tipo:"num", unidade:"cm", texto:"Qual é o <b>perímetro</b> desta circunferência? (π ≈ 3,14)", visual:shape("circle", v, useD?"d":"r"), resposta:P, tolerancia:0.02,
      explicacao:(useD ? "P = π × d = 3,14 × "+v : "P = 2 × π × r = 2 × 3,14 × "+v)+" = <b>"+fmt(P)+" cm</b>.",
      dica: useD ? "Perímetro = π × diâmetro." : "Perímetro = 2 × π × raio."};
  }
  function circA(l){
    const useD = l===3, v = useD ? rnd(1,10)*2 : rnd(1,10), r = useD ? v/2 : v, A = round(3.14*r*r, 2);
    return {tipo:"num", unidade:"cm²", texto:"Qual é a <b>área</b> deste círculo? (π ≈ 3,14)", visual:shape("circle", v, useD?"d":"r"), resposta:A, tolerancia:0.02,
      explicacao:(useD ? "O raio é metade do diâmetro: "+v+" ÷ 2 = "+r+" cm. " : "")+"A = π × r² = 3,14 × "+r+" × "+r+" = <b>"+fmt(A)+" cm²</b>.",
      dica:"Área = π × raio × raio."};
  }
  function raioDiam(l){
    const toD = Math.random()<0.5, v = toD ? rnd(2,30) : rnd(2,30)*2;
    return {tipo:"num", unidade:"cm", texto: toD ? "O raio de um círculo é <b>"+v+" cm</b>. Quanto mede o <b>diâmetro</b>?" : "O diâmetro de um círculo é <b>"+v+" cm</b>. Quanto mede o <b>raio</b>?",
      resposta: toD ? 2*v : v/2, explicacao: toD ? "O diâmetro é o dobro do raio: 2 × "+v+" = <b>"+(2*v)+" cm</b>." : "O raio é metade do diâmetro: "+v+" ÷ 2 = <b>"+(v/2)+" cm</b>.",
      dica:"Diâmetro = 2 × raio."};
  }

  /* ------------------------------ n7: volume ------------------------------ */
  function volCubo(l){
    const a = rnd(2, l===1 ? 6 : 12);
    return {tipo:"num", unidade:"cm³", texto:"Um cubo tem arestas de <b>"+a+" cm</b>. Qual é o seu <b>volume</b>?", visual:isoSvg(a,a,a,"medidas"), resposta:a*a*a,
      explicacao:"V = aresta × aresta × aresta = "+a+" × "+a+" × "+a+" = <b>"+(a*a*a)+" cm³</b>.", dica:"Multiplica a aresta por si própria três vezes."};
  }
  function volCaixa(l){
    const c = rnd(2, l===1?8:20), w = rnd(2, l===1?6:15), h = l===3 ? rnd(3,19)/2 : rnd(2, l===1?6:10), V = round(c*w*h);
    return {tipo:"num", unidade:"cm³", texto:"Qual é o <b>volume</b> desta caixa (paralelepípedo)?", visual:isoSvg(c,w,h,"medidas"), resposta:V, tolerancia:0.001,
      explicacao:"V = comprimento × largura × altura = "+c+" × "+w+" × "+fmt(h)+" = <b>"+fmt(V)+" cm³</b>.", dica:"Multiplica as três medidas."};
  }
  function conv(l){
    const casos = l===1 ? [["L","dm³",1],["dm³","L",1]] : l===2 ? [["L","cm³",1000],["m³","L",1000],["mL","cm³",1]] : [["L","cm³",1000],["cm³","L",0.001],["m³","dm³",1000],["mL","L",0.001]];
    const cs = pick(casos);
    const x = cs[2] < 1 ? rnd(1,40)*25 : (l===3 ? rnd(3,40)/2 : rnd(2,20));
    const r = round(x*cs[2], 3);
    return {tipo:"num", unidade:cs[1], texto:"Quanto é <b>"+fmt(x)+" "+cs[0]+"</b> em <b>"+cs[1]+"</b>?", resposta:r, tolerancia:0.0001,
      explicacao:"1 L = 1 dm³ = 1000 cm³, e 1 mL = 1 cm³. Por isso "+fmt(x)+" "+cs[0]+" = <b>"+fmt(r)+" "+cs[1]+"</b>.",
      dica:"Lembra-te: 1 litro = 1 dm³ = 1000 cm³."};
  }
  function aquario(l){
    const c = rnd(3,8)*10, w = rnd(2,5)*10, h = rnd(2,6)*10, L = c*w*h/1000;
    if(l===3){ return {tipo:"num", unidade:"cm", texto:"Um aquário leva <b>"+fmt(L)+" L</b> e o fundo mede <b>"+c+" cm × "+w+" cm</b>. Qual é a altura da água?", resposta:h,
      explicacao:fmt(L)+" L = "+(L*1000)+" cm³. Altura = volume ÷ (comprimento × largura) = "+(L*1000)+" ÷ "+(c*w)+" = <b>"+h+" cm</b>.", dica:"Passa os litros para cm³ (× 1000) e divide pela área do fundo."}; }
    return {tipo:"num", unidade:"L", texto:"Um aquário mede <b>"+c+" cm × "+w+" cm × "+h+" cm</b>. Quantos <b>litros</b> leva cheio?", resposta:L, tolerancia:0.001,
      explicacao:"V = "+c+" × "+w+" × "+h+" = "+(c*w*h)+" cm³. Como 1 L = 1000 cm³: "+(c*w*h)+" ÷ 1000 = <b>"+fmt(L)+" L</b>.", dica:"Calcula em cm³ e divide por 1000."};
  }

  /* ------------------------------ n8: estatística e probabilidade ------------------------------ */
  function media(l){
    const k = l===1 ? rnd(3,4) : rnd(4,6), max = l===1 ? 20 : 50;
    const v = []; for(let i=0;i<k;i++) v.push(rnd(1,max));
    if(l<3){ const s = v.reduce((a,b)=>a+b,0); v[k-1] += (k - s%k) % k; }
    const s = v.reduce((a,b)=>a+b,0), m = round(s/k, 2);
    return {tipo:"num", texto:"Qual é a <b>média</b> de: <b>"+v.join(", ")+"</b>?", resposta:m, tolerancia:0.01,
      explicacao:"Soma: "+v.join(" + ")+" = "+s+". Divide pelo número de valores ("+k+"): "+s+" ÷ "+k+" = <b>"+fmt(m)+"</b>.", dica:"Soma tudo e divide por quantos valores há."};
  }
  function moda(l){
    const m = rnd(1,20), outros = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].filter(x=>x!==m)).slice(0, l===1?3:5);
    const reps = l===1 ? 2 : 3, v = shuffle(outros.concat(Array(reps).fill(m)));
    if(l===3) v.push(outros[0]);   // um valor também aparece 2 vezes, mas a moda aparece 3
    return {tipo:"num", texto:"Qual é a <b>moda</b> de: <b>"+shuffle(v).join(", ")+"</b>?", resposta:m,
      explicacao:"A moda é o valor que aparece mais vezes: o "+m+" aparece "+reps+" vezes. Moda = <b>"+m+"</b>.", dica:"Qual é o número que se repete mais?"};
  }
  function mediana(l){
    const k = l===2 ? 5 : 7, v = []; for(let i=0;i<k;i++) v.push(rnd(1,40));
    const s = v.slice().sort((a,b)=>a-b), med = s[(k-1)/2];
    return {tipo:"num", texto:"Qual é a <b>mediana</b> de: <b>"+v.join(", ")+"</b>? (o valor do meio, depois de ordenar)", resposta:med,
      explicacao:"Ordenados: "+s.join(", ")+". O valor do meio (o "+((k+1)/2)+".º) é <b>"+med+"</b>.", dica:"Primeiro põe os números por ordem."};
  }
  function amplitude(l){
    const v = []; for(let i=0;i<rnd(4,6);i++) v.push(rnd(1,60));
    const mx = Math.max.apply(null,v), mn = Math.min.apply(null,v);
    return {tipo:"num", texto:"Qual é a <b>amplitude</b> de: <b>"+v.join(", ")+"</b>? (o maior menos o menor)", resposta:mx-mn,
      explicacao:"Maior: "+mx+". Menor: "+mn+". Amplitude = "+mx+" − "+mn+" = <b>"+(mx-mn)+"</b>.", dica:"Encontra o maior e o menor valor."};
  }
  function prob(l){
    if(l===1 || Math.random()<0.5){
      const evs = l===1 ? [["sair o número "+rnd(1,6),1],["sair um número par",3],["sair um número ímpar",3]]
        : [["sair um número maior do que 4",2],["sair um múltiplo de 3",2],["sair um número menor do que 3",2],["sair um número primo",3],["sair um divisor de 6",4]];
      const e = pick(evs);
      return {tipo:"fracao", texto:"Lanças um dado normal (de 1 a 6). Qual é a probabilidade de <b>"+e[0]+"</b>?", resposta:{n:e[1],d:6},
        explicacao:"Há "+e[1]+" caso"+(e[1]>1?"s":"")+" favorável"+(e[1]>1?"eis":"")+" em 6 possíveis: <b>"+e[1]+"/6</b>"+(gcd(e[1],6)>1?" = "+(e[1]/gcd(e[1],6))+"/"+(6/gcd(e[1],6)):"")+".",
        dica:"Probabilidade = casos favoráveis ÷ casos possíveis."};
    }
    const az = rnd(1,8), vm = rnd(1,8), vd = l===3 ? rnd(1,6) : 0, tot = az+vm+vd;
    const cor = pick(vd ? [["azul",az],["vermelha",vm],["verde",vd]] : [["azul",az],["vermelha",vm]]);
    return {tipo:"fracao", texto:"Num saco há <b>"+az+" bolas azuis</b>, <b>"+vm+" vermelhas</b>"+(vd?" e <b>"+vd+" verdes</b>":"")+". Tiras uma sem ver. Qual é a probabilidade de ser <b>"+cor[0]+"</b>?",
      resposta:{n:cor[1], d:tot}, explicacao:"Há "+cor[1]+" bola"+(cor[1]>1?"s":"")+" "+cor[0]+(cor[1]>1?"s":"")+" em "+tot+" bolas no total: <b>"+cor[1]+"/"+tot+"</b>.",
      dica:"Quantas bolas há ao todo? E quantas são da cor pedida?"};
  }
  const SITUACOES = [
    ["sair 7 num dado normal (de 1 a 6)","impossível"],["sair um número menor do que 7 num dado normal","certo"],["sair 3 num dado normal","possível"],
    ["tirar uma bola azul de um saco só com bolas azuis","certo"],["tirar uma bola verde de um saco só com bolas azuis e vermelhas","impossível"],
    ["uma moeda cair em cara","possível"],["um mês ter 32 dias","impossível"],["depois de segunda-feira vir terça-feira","certo"],
    ["chover amanhã","possível"],["tirar um rei de um baralho de cartas completo","possível"],["um triângulo ter 4 lados","impossível"]
  ];
  function certoImp(l){
    const s = pick(SITUACOES);
    return choice("Como classificas este acontecimento: <b>"+s[0]+"</b>?", s[1], ["certo","possível","impossível"],
      {explicacao:"Certo: acontece sempre. Impossível: nunca acontece. Possível: pode ou não acontecer. Este é <b>"+s[1]+"</b>.", dica:"Pode acontecer sempre, nunca, ou às vezes?"});
  }

  /* ==================================================================
     DESENHOS NOVOS (também usados pelos exercícios interativos)
     ================================================================== */
  const FILL = "var(--wc)", EMPTY = "var(--surface)";
  const f1 = v => (+v).toFixed(1);
  function svgBox(w, h, label, inner, maxW){
    return '<svg class="ar-svg" viewBox="0 0 '+w+' '+h+'" width="'+Math.round(maxW||w)+'" role="img" aria-label="'+label+'">'+inner+'</svg>';
  }
  function tx(x, y, t, size, anchor){ return '<text x="'+f1(x)+'" y="'+f1(y)+'" font-size="'+(size||13)+'" text-anchor="'+(anchor||"middle")+'" font-weight="700">'+t+'</text>'; }
  const simp = (n,d) => { const g = gcd(n,d); return g>1 ? " = "+(n/g)+"/"+(d/g) : ""; };

  /* barra, grelha ou círculo dividido em partes; on(i) diz se a parte i está pintada */
  function cellsSvg(forma, N, rows, cols, on, interactive){
    const attrs = i => interactive ? ' class="cell" data-i="'+i+'" tabindex="0" role="button" aria-pressed="'+(on(i)?"true":"false")+'" aria-label="Parte '+(i+1)+'"' : '';
    const st = i => ' fill="'+(on(i)?FILL:EMPTY)+'" stroke="currentColor" stroke-width="'+(N>40?1:2)+'"';
    let s = "", W, H;
    if(forma === "circulo"){
      const r=84, cx=90, cy=90; W=180; H=180;
      for(let i=0;i<N;i++){
        const a0 = -Math.PI/2 + i*2*Math.PI/N, a1 = a0 + 2*Math.PI/N;
        s += '<path'+attrs(i)+st(i)+' d="M'+cx+','+cy+' L'+f1(cx+r*Math.cos(a0))+','+f1(cy+r*Math.sin(a0))+' A'+r+','+r+' 0 0 1 '+f1(cx+r*Math.cos(a1))+','+f1(cy+r*Math.sin(a1))+' Z"/>';
      }
    } else {
      const cw = forma==="barra" ? 320/cols : Math.min(320/cols, 220/rows, 44);
      const ch = forma==="barra" ? 56 : cw;
      W = cols*cw+4; H = rows*ch+4;
      for(let i=0;i<N;i++){
        const r = Math.floor(i/cols), c = i%cols;
        s += '<rect'+attrs(i)+st(i)+' x="'+f1(2+c*cw)+'" y="'+f1(2+r*ch)+'" width="'+f1(cw)+'" height="'+f1(ch)+'"/>';
      }
    }
    return svgBox(W, H, "Figura dividida em "+N+" partes iguais", s, Math.min(W*1.15, 400));
  }

  /* reta numérica de 0 a max, com div espaços em cada unidade */
  function numberLine(max, div, o){
    o = o || {};
    const x0=24, x1=356, y=62, n=max*div, step=(x1-x0)/n;
    let s = '<line x1="'+x0+'" y1="'+y+'" x2="'+x1+'" y2="'+y+'" stroke="currentColor" stroke-width="2.5"/>';
    for(let i=0;i<=n;i++){
      const x = x0+i*step, big = i%div===0;
      s += '<line x1="'+f1(x)+'" y1="'+(y-(big?13:8))+'" x2="'+f1(x)+'" y2="'+(y+(big?13:8))+'" stroke="currentColor" stroke-width="'+(big?2.5:1.5)+'"/>';
      if(big) s += tx(x, y+32, String(i/div), 16);
    }
    if(o.interactive) for(let i=0;i<=n;i++){
      const x = x0+i*step;
      s += '<rect class="tick-hit" data-i="'+i+'" x="'+f1(x-step/2)+'" y="'+(y-30)+'" width="'+f1(step)+'" height="60" fill="transparent" tabindex="0" role="button" aria-label="Tracinho '+i+'"/>';
    }
    if(o.arrow !== undefined){ const x = x0+o.arrow*step; s += '<path d="M'+f1(x)+','+(y-17)+' l-9,-15 h18 z" fill="var(--wc)"/>'+tx(x, y-38, "?", 16); }
    if(o.sol !== undefined){ const x = x0+o.sol*step; s += '<circle cx="'+f1(x)+'" cy="'+y+'" r="13" fill="none" stroke="#3E8F5C" stroke-width="3.5" pointer-events="none"/>'; }
    if(o.marker !== undefined && o.marker !== null){ const x = x0+o.marker*step; s += '<circle cx="'+f1(x)+'" cy="'+y+'" r="9" fill="var(--wc)" stroke="var(--surface)" stroke-width="2.5" pointer-events="none"/>'; }
    return svgBox(380, 108, "Reta numérica de 0 a "+max, s, 420);
  }

  /* transferidor com um ângulo de deg graus (o centro está em 170,160) */
  const PROT = {cx:170, cy:175, R:140};
  function protractor(deg, o){
    o = o || {};
    const cx=PROT.cx, cy=PROT.cy, R=PROT.R, rd=deg*Math.PI/180;
    let s = '<path d="M'+(cx-R)+','+cy+' A'+R+','+R+' 0 0 1 '+(cx+R)+','+cy+' Z" fill="var(--wc-bg)" stroke="currentColor" stroke-width="1.5"/>';
    for(let a=0;a<=180;a+=5){
      const ra = a*Math.PI/180, r1 = a%10===0 ? R-15 : R-8;
      s += '<line x1="'+f1(cx+R*Math.cos(ra))+'" y1="'+f1(cy-R*Math.sin(ra))+'" x2="'+f1(cx+r1*Math.cos(ra))+'" y2="'+f1(cy-r1*Math.sin(ra))+'" stroke="currentColor" stroke-width="'+(a%10===0?1.6:1)+'"/>';
      if(a%10===0) s += tx(cx+(R-28)*Math.cos(ra), cy-(R-28)*Math.sin(ra)+4-(a===0||a===180 ? 12 : 0), String(a), 10);
    }
    const ex = cx+(R+12)*Math.cos(rd), ey = cy-(R+12)*Math.sin(rd);
    s += '<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R+12)+'" y2="'+cy+'" stroke="var(--wc)" stroke-width="4.5" stroke-linecap="round"/>';
    s += '<line x1="'+cx+'" y1="'+cy+'" x2="'+f1(ex)+'" y2="'+f1(ey)+'" stroke="var(--wc)" stroke-width="4.5" stroke-linecap="round"/>';
    if(deg > 0) s += '<path d="M'+(cx+34)+','+cy+' A34,34 0 0 0 '+f1(cx+34*Math.cos(rd))+','+f1(cy-34*Math.sin(rd))+'" fill="none" stroke="var(--wc)" stroke-width="2.5"/>';
    if(o.handle) s += '<circle class="ang-handle" cx="'+f1(ex)+'" cy="'+f1(ey)+'" r="12" fill="var(--wc)" stroke="var(--surface)" stroke-width="3"/>';
    if(o.value !== undefined) s += tx(cx, cy-50, o.value+"°", 20);
    s += '<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="currentColor"/>';
    return svgBox(340, 192, "Transferidor com um ângulo", s, 400);
  }
  function arcPath(cx, cy, r, a0, a1, color){
    const p0 = a0*Math.PI/180, p1 = a1*Math.PI/180;
    return '<path d="M'+f1(cx+r*Math.cos(p0))+','+f1(cy-r*Math.sin(p0))+' A'+r+','+r+' 0 '+((a1-a0)>180?1:0)+' 0 '+f1(cx+r*Math.cos(p1))+','+f1(cy-r*Math.sin(p1))+'" fill="none" stroke="'+(color||"var(--wc)")+'" stroke-width="2.5"/>';
  }
  const ray = (cx, cy, a, len) => '<line x1="'+cx+'" y1="'+cy+'" x2="'+f1(cx+len*Math.cos(a*Math.PI/180))+'" y2="'+f1(cy-len*Math.sin(a*Math.PI/180))+'" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>';
  const at = (cx, cy, a, r, t, size) => tx(cx+r*Math.cos(a*Math.PI/180), cy-r*Math.sin(a*Math.PI/180)+5, t, size||14);
  function straightLine(a){
    const cx=170, cy=118;
    const s = '<line x1="20" y1="'+cy+'" x2="320" y2="'+cy+'" stroke="currentColor" stroke-width="3"/>'+ray(cx,cy,a,115)+
      arcPath(cx,cy,34,0,a)+arcPath(cx,cy,26,a,180,"var(--accent)")+at(cx,cy,a/2,60,a+"°")+at(cx,cy,(a+180)/2,52,"?",17);
    return svgBox(340, 135, "Dois ângulos sobre uma reta", s, 400);
  }
  function aroundPoint(a, b, c){
    const cx=170, cy=110;
    const s = ray(cx,cy,90,95)+ray(cx,cy,90+a,95)+ray(cx,cy,90+a+b,95)+
      arcPath(cx,cy,30,90,90+a)+arcPath(cx,cy,24,90+a,90+a+b)+arcPath(cx,cy,36,90+a+b,450,"var(--accent)")+
      at(cx,cy,90+a/2,58,a+"°")+at(cx,cy,90+a+b/2,58,b+"°")+at(cx,cy,90+a+b+c/2,62,"?",17)+'<circle cx="'+cx+'" cy="'+cy+'" r="4" fill="currentColor"/>';
    return svgBox(340, 220, "Três ângulos à volta de um ponto", s, 380);
  }
  function crossing(a, opposite){
    const cx=170, cy=105;
    let s = ray(cx,cy,0,140)+ray(cx,cy,180,140)+ray(cx,cy,a,110)+ray(cx,cy,a+180,110)+arcPath(cx,cy,30,0,a)+at(cx,cy,a/2,55,a+"°");
    s += opposite ? arcPath(cx,cy,30,180,180+a,"var(--accent)")+at(cx,cy,180+a/2,55,"?",17)
                  : arcPath(cx,cy,30,a,180,"var(--accent)")+at(cx,cy,(a+180)/2,55,"?",17);
    return svgBox(340, 210, "Duas retas que se cruzam", s, 380);
  }
  function triSvg(A, B){
    const tA = Math.tan(A*Math.PI/180), tB = Math.tan(B*Math.PI/180);
    let base = 260, h = base*tA*tB/(tA+tB);
    if(h > 130){ base *= 130/h; h = 130; }
    const x0 = (340-base)/2, y0 = 160, px = x0 + h/tA;
    // angle labels sit outside the corners, so they never collide in a narrow triangle
    const s = '<polygon points="'+f1(x0)+','+y0+' '+f1(x0+base)+','+y0+' '+f1(px)+','+f1(y0-h)+'" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="3" stroke-linejoin="round"/>'+
      tx(x0-8, y0+4, A+"°", 14, "end")+tx(x0+base+8, y0+4, B+"°", 14, "start")+tx(px, y0-h-8, "?", 17);
    return svgBox(340, 175, "Triângulo com dois ângulos marcados", s, 380);
  }
  function lShapeSvg(W, H, w, h){
    const s = Math.min(250/W, 140/H), ox = 60, oy = 24, X = v => f1(ox+v*s), Y = v => f1(oy+v*s);
    const pts = [[0,0],[W-w,0],[W-w,h],[W,h],[W,H],[0,H]].map(p => X(p[0])+','+Y(p[1])).join(" ");
    const out = '<polygon points="'+pts+'" fill="var(--wc-bg)" stroke="var(--wc)" stroke-width="3" stroke-linejoin="round"/>'+
      tx((W-w)/2*s+ox, oy-7, (W-w)+" cm", 13)+tx(ox-8, oy+H/2*s+5, H+" cm", 13, "end")+
      tx(ox+W/2*s, oy+H*s+20, W+" cm", 13)+tx(ox+W*s+8, oy+(h+H)/2*s+5, (H-h)+" cm", 13, "start");
    return svgBox(Math.round(ox+W*s+70), Math.round(oy+H*s+30), "Figura em forma de L com medidas", out, 400);
  }
  function frameSvg(W, H, w, h){
    const s = Math.min(250/W, 140/H), ox = 60, oy = 14, hx = (W-w)/2, hy = (H-h)/2;
    const out = '<rect x="'+ox+'" y="'+oy+'" width="'+f1(W*s)+'" height="'+f1(H*s)+'" fill="var(--wc)" opacity="0.75" stroke="var(--wc)" stroke-width="2"/>'+
      '<rect x="'+f1(ox+hx*s)+'" y="'+f1(oy+hy*s)+'" width="'+f1(w*s)+'" height="'+f1(h*s)+'" fill="var(--surface)" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/>'+
      tx(ox+W/2*s, oy+H*s+20, W+" cm", 13)+tx(ox-8, oy+H/2*s+5, H+" cm", 13, "end")+
      tx(ox+W/2*s, oy+H*s+40, "buraco: "+w+" cm × "+h+" cm", 12);
    return svgBox(Math.round(ox+W*s+30), Math.round(oy+H*s+50), "Moldura retangular com um buraco", out, 400);
  }
  function gridSvg(cols, rows, shape){
    const u = Math.min(30, 300/cols, 190/rows), W = cols*u+4, H = rows*u+4;
    let s = "";
    for(let c=0;c<=cols;c++) s += '<line x1="'+f1(2+c*u)+'" y1="2" x2="'+f1(2+c*u)+'" y2="'+f1(2+rows*u)+'" stroke="currentColor" stroke-width="0.6" opacity="0.35"/>';
    for(let r=0;r<=rows;r++) s += '<line x1="2" y1="'+f1(2+r*u)+'" x2="'+f1(2+cols*u)+'" y2="'+f1(2+r*u)+'" stroke="currentColor" stroke-width="0.6" opacity="0.35"/>';
    s += shape(u);
    return svgBox(W, H, "Figura numa quadrícula", s, Math.min(W*1.2, 380));
  }
  /* caixa em perspetiva: a (comprimento), b (profundidade), c (altura); mode "medidas" ou "cubos" */
  function isoSvg(a, b, c, mode){
    const u = Math.min(190/(a+0.55*b), 125/(c+0.45*b), 40), dx = 0.55*u, dy = 0.45*u;
    const x0 = 46, y0 = 18 + c*u + b*dy;
    const P = (x,y,z) => [x0 + x*u + y*dx, y0 - z*u - y*dy];
    const poly = (pts, fill) => '<polygon points="'+pts.map(p => f1(p[0])+','+f1(p[1])).join(" ")+'" fill="'+fill+'" stroke="var(--wc)" stroke-width="2.2" stroke-linejoin="round"/>';
    let s = poly([P(0,0,0),P(a,0,0),P(a,0,c),P(0,0,c)], "var(--wc-bg)")+poly([P(0,0,c),P(a,0,c),P(a,b,c),P(0,b,c)], "var(--surface)")+poly([P(a,0,0),P(a,b,0),P(a,b,c),P(a,0,c)], "var(--surface-2)");
    const ln = (p, q) => '<line x1="'+f1(p[0])+'" y1="'+f1(p[1])+'" x2="'+f1(q[0])+'" y2="'+f1(q[1])+'" stroke="var(--wc)" stroke-width="1" opacity="0.8"/>';
    if(mode === "cubos"){
      for(let i=1;i<a;i++){ s += ln(P(i,0,0),P(i,0,c)) + ln(P(i,0,c),P(i,b,c)); }
      for(let k=1;k<c;k++){ s += ln(P(0,0,k),P(a,0,k)) + ln(P(a,0,k),P(a,b,k)); }
      for(let j=1;j<b;j++){ s += ln(P(0,j,c),P(a,j,c)) + ln(P(a,j,0),P(a,j,c)); }
    } else {
      const A = P(a/2,0,0), C = P(0,0,c/2), B = P(a,b/2,0);
      s += tx(A[0], A[1]+18, fmt(a)+" cm", 13)+tx(C[0]-8, C[1]+5, fmt(c)+" cm", 13, "end")+tx(B[0]+10, B[1]+12, fmt(b)+" cm", 13, "start");
    }
    const R = P(a,b,0), T = P(0,b,c);
    return svgBox(Math.round(R[0]+70), Math.round(y0+30), mode==="cubos" ? "Bloco feito de cubinhos" : "Caixa com as medidas", s, 380);
  }
  function barChartSvg(title, cats, vals, step){
    const x0=50, y0=200, hgt=150, max=step*10, bw=44, gap=(300-cats.length*bw)/(cats.length+1);
    let s = tx(190, 18, title, 13);
    for(let k=0;k<=10;k++){
      const y = y0 - k*hgt/10;
      s += '<line x1="'+x0+'" y1="'+f1(y)+'" x2="'+(x0+300)+'" y2="'+f1(y)+'" stroke="currentColor" stroke-width="'+(k===0?2:0.7)+'" opacity="'+(k===0?1:0.35)+'"/>';
      s += tx(x0-8, y+4, String(k*step), 11, "end");
    }
    cats.forEach((c,i) => {
      const x = x0 + gap + i*(bw+gap), h = vals[i]/max*hgt;
      s += '<rect x="'+f1(x)+'" y="'+f1(y0-h)+'" width="'+bw+'" height="'+f1(h)+'" fill="var(--wc)" rx="3"/>'+tx(x+bw/2, y0+18, c, 11);
    });
    return svgBox(370, 228, "Gráfico de barras: "+title, s, 420);
  }
  function pictoHtml(names, vals, unit, icon){
    return '<table class="ar-picto"><caption>Livros lidos este mês</caption>'+names.map((n,i) => '<tr><th>'+n+'</th><td>'+icon.repeat(vals[i]/unit)+'</td></tr>').join("")+
      '</table><p class="ar-legend">Legenda: '+icon+' = <b>'+unit+' livro'+(unit>1?"s":"")+'</b></p>';
  }
  const CORES = [["azul","#4F86B3","Az"],["vermelho","#D1495B","Vm"],["amarelo","#E0A100","Am"],["verde","#5F9E52","Vd"]];
  function spinnerSvg(sectors){
    const N = sectors.length, r=84, cx=95, cy=95;
    let s = "";
    sectors.forEach((ci, i) => {
      const a0 = -Math.PI/2 + i*2*Math.PI/N, a1 = a0 + 2*Math.PI/N, am = (a0+a1)/2;
      s += '<path d="M'+cx+','+cy+' L'+f1(cx+r*Math.cos(a0))+','+f1(cy+r*Math.sin(a0))+' A'+r+','+r+' 0 0 1 '+f1(cx+r*Math.cos(a1))+','+f1(cy+r*Math.sin(a1))+' Z" fill="'+CORES[ci][1]+'" stroke="var(--surface)" stroke-width="2"/>'+
        '<text x="'+f1(cx+r*0.62*Math.cos(am))+'" y="'+f1(cy+r*0.62*Math.sin(am)+4)+'" font-size="11" text-anchor="middle" font-weight="700" fill="#fff">'+CORES[ci][2]+'</text>';
    });
    s += '<path d="M'+cx+','+(cy-r-14)+' l-8,-12 h16 z" fill="currentColor"/><circle cx="'+cx+'" cy="'+cy+'" r="6" fill="currentColor"/>';
    return svgBox(190, 200, "Roleta com "+N+" setores iguais", s, 220);
  }
  const PADROES = {
    linha:    {f:n => n+2,       cells:n => Array.from({length:n+2}, (_,i) => [i,0]), regra:"cada figura tem mais 1 quadradinho: a figura n tem n + 2"},
    L:        {f:n => 2*n+1,     cells:n => Array.from({length:n+1}, (_,i) => [0,i]).concat(Array.from({length:n}, (_,i) => [i+1,n])), regra:"cada figura junta 2 quadradinhos: a figura n tem 2 × n + 1"},
    T:        {f:n => 3*n+1,     cells:n => Array.from({length:2*n+1}, (_,i) => [i,0]).concat(Array.from({length:n}, (_,i) => [n,i+1])), regra:"cada figura junta 3 quadradinhos: a figura n tem 3 × n + 1"},
    quadrado: {f:n => n*n,       cells:n => { const r=[]; for(let i=0;i<n;i++) for(let j=0;j<n;j++) r.push([i,j]); return r; }, regra:"a figura n é um quadrado de n × n"},
    escada:   {f:n => n*(n+1)/2, cells:n => { const r=[]; for(let i=0;i<n;i++) for(let j=0;j<=i;j++) r.push([j,i]); return r; }, regra:"a figura n tem 1 + 2 + … + n quadradinhos"}
  };
  function patternSvg(tipo){
    const u = 13; let x = 10, s = "", Hmax = 0;
    const figs = [1,2,3].map(n => { const c = PADROES[tipo].cells(n); return {n:n, c:c, w:Math.max.apply(null, c.map(p=>p[0]))+1, h:Math.max.apply(null, c.map(p=>p[1]))+1}; });
    figs.forEach(f => { Hmax = Math.max(Hmax, f.h); });
    figs.forEach(f => {
      const top = 10 + (Hmax - f.h)*u;
      f.c.forEach(p => { s += '<rect x="'+(x+p[0]*u)+'" y="'+(top+p[1]*u)+'" width="'+u+'" height="'+u+'" fill="var(--wc)" stroke="var(--surface)" stroke-width="1.5"/>'; });
      s += tx(x + f.w*u/2, 10 + Hmax*u + 18, "Figura "+f.n, 11);
      x += f.w*u + 34;
    });
    return svgBox(x, 10 + Hmax*u + 26, "Sequência de figuras feitas de quadradinhos", s, Math.min(x*1.3, 420));
  }

  /* ==================================================================
     EXERCÍCIOS NOVOS
     ================================================================== */
  /* n1 — tocar nos números certos */
  function selMultiplos(l){
    const k = pick(l===1 ? [2,5,10] : [3,4,6,7,9]), max = l===1 ? 30 : 40;
    const nums = Array.from({length:max}, (_,i) => i+1);
    return {tipo:"selecionar", numeros:nums, resposta:nums.map((v,i) => v%k===0 ? i : -1).filter(i => i>=0),
      texto:"Toca em <b>todos os múltiplos de "+k+"</b> (até "+max+").",
      explicacao:"Os múltiplos de "+k+" até "+max+" são: <b>"+nums.filter(v => v%k===0).join(", ")+"</b>.", dica:"Começa no "+k+" e vai somando "+k+"."};
  }
  function selPrimos(l){
    const nums = Array.from({length:30}, (_,i) => i+1);
    return {tipo:"selecionar", numeros:nums, resposta:nums.map((v,i) => isPrime(v) ? i : -1).filter(i => i>=0),
      texto:"Toca em <b>todos os números primos</b> até 30.",
      explicacao:"Os primos até 30 são: <b>"+nums.filter(isPrime).join(", ")+"</b>. (O 1 não é primo: só tem um divisor.)", dica:"Um primo só se divide por 1 e por si próprio. Risca mentalmente os pares (exceto o 2)."};
  }
  function selDivisores(l){
    const n = pick([12,18,20,24,30,36]), nums = Array.from({length:n}, (_,i) => i+1);
    return {tipo:"selecionar", numeros:nums, resposta:nums.map((v,i) => n%v===0 ? i : -1).filter(i => i>=0),
      texto:"Toca em <b>todos os divisores de "+n+"</b>.",
      explicacao:"Os divisores de "+n+" são: <b>"+divisors(n).join(", ")+"</b>.", dica:"Procura pares que multiplicados dão "+n+": 1 × "+n+", 2 × …"};
  }

  /* n2 — frações com imagens */
  function frBarra(l){
    const N = rnd(2, l===1 ? 6 : 10), k = rnd(1, N-1);
    return {tipo:"fracao", texto:"Que fração da barra está pintada?", visual:cellsSvg("barra",N,1,N,i => i<k), resposta:{n:k,d:N},
      explicacao:"A barra tem "+N+" partes iguais e "+k+" estão pintadas: <b>"+k+"/"+N+"</b>"+simp(k,N)+".", dica:"Conta todas as partes (denominador) e as pintadas (numerador)."};
  }
  function frGrelha(l){
    const rows = rnd(2,4), cols = rnd(3,5), N = rows*cols, k = rnd(1, N-1);
    const on = new Set(shuffle(Array.from({length:N}, (_,i) => i)).slice(0,k));
    return {tipo:"fracao", texto:"Que fração da grelha está pintada?", visual:cellsSvg("grelha",N,rows,cols,i => on.has(i)), resposta:{n:k,d:N},
      explicacao:"Há "+rows+" × "+cols+" = "+N+" quadrados e "+k+" estão pintados: <b>"+k+"/"+N+"</b>"+simp(k,N)+".", dica:"Quantos quadrados há ao todo? Multiplica as filas pelas colunas."};
  }
  const ICONES = ["🍎","🍪","⚽","🐟","⭐","🧁","🎈"];
  function frConjunto(l){
    const d = pick(l===1 ? [2,3,4] : [2,3,4,5,6]), g = rnd(2, l===1 ? 4 : 6), T = d*g, n = rnd(1, d-1), ic = pick(ICONES);
    const groups = Array.from({length:d}, () => '<span class="ar-group">'+ic.repeat(g)+'</span>').join("");
    return {tipo:"num", texto:"Quanto é "+fr(n,d)+" de <b>"+T+"</b>?", visual:'<div class="ar-set" role="img" aria-label="'+T+' objetos em '+d+' grupos de '+g+'">'+groups+'</div>', resposta:n*g,
      explicacao:"Divide os "+T+" em "+d+" grupos iguais: "+T+" ÷ "+d+" = "+g+". Depois junta "+n+" grupo"+(n>1?"s":"")+": "+n+" × "+g+" = <b>"+(n*g)+"</b>.", dica:"Primeiro divide pelo denominador, depois multiplica pelo numerador."};
  }
  function frRetaLer(l){
    const max = l===3 ? 2 : 1, div = rnd(2, l===1 ? 6 : l===2 ? 10 : 5);
    let k; do{ k = rnd(1, max*div-1); } while(k%div===0);
    return {tipo:"fracao", texto:"Que fração marca a seta na reta numérica?", visual:numberLine(max,div,{arrow:k}), resposta:{n:k,d:div},
      explicacao:"Cada unidade está dividida em "+div+" espaços iguais, e cada um vale 1/"+div+". A seta está no "+k+".º tracinho: <b>"+k+"/"+div+"</b>"+simp(k,div)+".", dica:"Conta em quantos espaços está dividido o caminho de 0 a 1."};
  }
  function frPintar(l){
    const d = rnd(2, l===1 ? 4 : 6), m = l===1 ? rnd(1,2) : rnd(1,3), N = d*m, n = rnd(1, d-1);
    let forma = "barra", rows = 1, cols = N;
    if(l===2 && N<=12 && Math.random()<0.5) forma = "circulo";
    if(l===3){ const r = [2,3,4].filter(x => N%x===0 && N/x<=8).pop(); if(r){ forma = "grelha"; rows = r; cols = N/r; } }
    return {tipo:"pintar", forma:forma, partes:N, rows:rows, cols:cols, alvo:{n:n,d:d},
      texto:"Pinta "+fr(n,d)+" "+(forma==="circulo" ? "do círculo" : forma==="grelha" ? "da grelha" : "da barra")+". <small>(toca nas partes)</small>",
      explicacao: m===1 ? "Há "+N+" partes iguais: pintas <b>"+n+"</b>." : "Há "+N+" partes, por isso cada 1/"+d+" são "+m+" partes. Para "+n+"/"+d+" pintas "+n+" × "+m+" = <b>"+(n*m)+" partes</b> ("+n+"/"+d+" = "+(n*m)+"/"+N+").",
      dica: m===1 ? "O denominador é o número de partes." : "Há mais partes do que o denominador. Quantas partes formam 1/"+d+"?"};
  }
  function frRetaColocar(l){
    const d = rnd(2, l===1 ? 5 : 6), m = l===1 ? 1 : rnd(1,2), div = d*m, max = l===3 ? 2 : 1;
    let n; do{ n = rnd(1, max*d-1); } while(n%d===0);
    return {tipo:"reta", max:max, div:div, alvo:{n:n,d:d}, texto:"Toca no tracinho onde fica "+fr(n,d)+".",
      explicacao:"Cada unidade tem "+div+" espaços. "+n+"/"+d+(m>1 ? " = "+(n*m)+"/"+div : "")+": conta <b>"+(n*m)+" espaços</b> a partir do 0.", dica:"Em quantos espaços está dividido o caminho de 0 a 1?"};
  }

  /* n3 — percentagens e decimais com imagens */
  function pctGrelha(l){
    const k = l===1 ? rnd(1,9)*10 : rnd(1,99), asDec = l===3 && Math.random()<0.5;
    return {tipo:"num", unidade: asDec ? "" : "%", texto: asDec ? "Que parte da grelha está pintada? Escreve como <b>número decimal</b>." : "Que <b>percentagem</b> da grelha está pintada?",
      visual:cellsSvg("grelha",100,10,10,i => i<k), resposta: asDec ? k/100 : k, tolerancia:0.0001,
      explicacao:"A grelha tem 100 quadradinhos e "+k+" estão pintados: "+k+"/100 = <b>"+(asDec ? fmt(k/100) : k+"%")+"</b>.", dica:"Cada linha tem 10 quadradinhos. Conta primeiro as linhas completas."};
  }
  function pctPintar(l){
    const p = l===2 ? rnd(1,19)*5 : rnd(1,99);
    return {tipo:"pintar", forma:"grelha", partes:100, rows:10, cols:10, alvo:{n:p,d:100},
      texto:"Pinta <b>"+p+"%</b> da grelha. <small>(podes arrastar o dedo ou o rato)</small>",
      explicacao:p+"% quer dizer "+p+" em cada 100: pintas <b>"+p+" quadradinhos</b>.", dica:"Cada linha tem 10 quadradinhos, ou seja, 10%."};
  }
  function decReta(l){
    const max = l===1 ? 1 : 2, div = l===3 ? 20 : 10;
    let k; do{ k = rnd(1, max*div-1); } while(k%div===0);
    return {tipo:"num", texto:"Que número decimal marca a seta?", visual:numberLine(max,div,{arrow:k}), resposta:k/div, tolerancia:0.0001,
      explicacao:"Cada tracinho vale "+fmt(1/div)+". A seta está no "+k+".º tracinho: "+k+" × "+fmt(1/div)+" = <b>"+fmt(k/div)+"</b>.", dica:"Quanto vale cada tracinho? Há "+div+" espaços entre 0 e 1."};
  }

  /* n4 — padrões de figuras */
  function padrao(l){
    const tipo = pick(l===1 ? ["linha","L"] : l===2 ? ["L","T","quadrado"] : ["quadrado","escada","T"]);
    const P = PADROES[tipo], ask = l===1 ? 4 : l===2 ? rnd(4,6) : (tipo==="T" ? 10 : rnd(5,7));
    return {tipo:"num", texto:"Quantos quadradinhos terá a <b>figura "+ask+"</b>?", visual:patternSvg(tipo), resposta:P.f(ask),
      explicacao:"Repara que "+P.regra+". Para a figura "+ask+": <b>"+P.f(ask)+"</b>.", dica:"Conta os quadradinhos das figuras 1, 2 e 3. Quantos se juntam de cada vez?"};
  }

  /* n5 — ângulos e áreas com imagens */
  function angMedir(l){
    const deg = l===1 ? rnd(1,17)*10 : rnd(2,34)*5;
    return {tipo:"num", unidade:"°", texto:"Usa o transferidor: quanto mede este ângulo?", visual:protractor(deg), resposta:deg,
      explicacao:"Um dos lados está no 0. Lê na escala onde passa o outro lado: <b>"+deg+"°</b>.", dica:"Começa a contar no 0, à direita. Cada tracinho grande vale 10°."};
  }
  function angAbrir(l){
    const alvo = l===1 ? rnd(1,17)*10 : rnd(2,34)*5;
    return {tipo:"angulo", alvo:alvo, tolerancia:3, inicio: alvo>90 ? 30 : 150,
      texto:"Abre o ângulo até medir <b>"+alvo+"°</b>. <small>(arrasta o círculo ou usa a barra)</small>",
      explicacao:"No transferidor, conta a partir do 0 (à direita) até ao <b>"+alvo+"</b>.",
      dica: alvo<90 ? "É um ângulo agudo: mais fechado do que um canto de folha." : alvo===90 ? "É um ângulo reto, como o canto de uma folha." : "É um ângulo obtuso: mais aberto do que um canto de folha."};
  }
  function angReta(l){
    const a = rnd(3,33)*5;
    return {tipo:"num", unidade:"°", texto:"Estes dois ângulos estão sobre uma reta. Quanto mede o ângulo <b>?</b>", visual:straightLine(a), resposta:180-a,
      explicacao:"Ângulos sobre uma reta somam 180°: 180 − "+a+" = <b>"+(180-a)+"°</b>.", dica:"Uma reta forma um ângulo raso, de 180°."};
  }
  function angPonto(l){
    let a, b, c; do{ a = rnd(8,30)*5; b = rnd(8,30)*5; c = 360-a-b; } while(c < 40 || c > 200);
    return {tipo:"num", unidade:"°", texto:"Os três ângulos estão à volta de um ponto. Quanto mede o ângulo <b>?</b>", visual:aroundPoint(a,b,c), resposta:c,
      explicacao:"Uma volta completa tem 360°: 360 − "+a+" − "+b+" = <b>"+c+"°</b>.", dica:"À volta de um ponto, os ângulos somam 360°."};
  }
  function angOpostos(l){
    const a = rnd(4,32)*5, op = Math.random()<0.5;
    return {tipo:"num", unidade:"°", texto:"Duas retas cruzam-se. Quanto mede o ângulo <b>?</b>", visual:crossing(a, op), resposta: op ? a : 180-a,
      explicacao: op ? "Ângulos verticalmente opostos são iguais: <b>"+a+"°</b>." : "Estes dois ângulos estão sobre a mesma reta, por isso somam 180°: 180 − "+a+" = <b>"+(180-a)+"°</b>.",
      dica: op ? "O ângulo ? está exatamente do lado oposto ao ângulo marcado." : "Os dois ângulos juntos formam uma reta."};
  }
  function areaGrelha(l){
    const w = rnd(2,8), h = rnd(2,6);
    const shape = u => '<rect x="'+f1(2+u)+'" y="'+f1(2+u)+'" width="'+f1(w*u)+'" height="'+f1(h*u)+'" fill="var(--wc)" opacity="0.8" stroke="var(--wc)" stroke-width="2"/>';
    return {tipo:"num", unidade:"cm²", texto:"Cada quadradinho tem 1 cm². Qual é a <b>área</b> do retângulo pintado?", visual:gridSvg(w+2, h+2, shape), resposta:w*h,
      explicacao:"São "+h+" filas de "+w+" quadradinhos: "+w+" × "+h+" = <b>"+(w*h)+" cm²</b>.", dica:"Em vez de contar um a um, multiplica as filas pelas colunas."};
  }
  function areaTriGrelha(l){
    let b = rnd(2,8), h = rnd(2,6); if((b*h)%2) b++;
    const shape = u => '<polygon points="'+f1(2+u)+','+f1(2+(h+1)*u)+' '+f1(2+(b+1)*u)+','+f1(2+(h+1)*u)+' '+f1(2+u)+','+f1(2+u)+'" fill="var(--wc)" opacity="0.8" stroke="var(--wc)" stroke-width="2"/>';
    return {tipo:"num", unidade:"cm²", texto:"Cada quadradinho tem 1 cm². Qual é a área do <b>triângulo</b>?", visual:gridSvg(b+2, h+2, shape), resposta:b*h/2,
      explicacao:"O triângulo é metade de um retângulo de "+b+" × "+h+" = "+(b*h)+" cm². Metade: <b>"+(b*h/2)+" cm²</b>.", dica:"Este triângulo é metade de que retângulo?"};
  }
  function areaL(l){
    const W = rnd(6,14), H = rnd(5,12), w = rnd(2,W-3), h = rnd(2,H-3), A = W*H-w*h;
    if(l===3 && Math.random()<0.35){
      return {tipo:"num", unidade:"cm", texto:"Qual é o <b>perímetro</b> desta figura?", visual:lShapeSvg(W,H,w,h), resposta:2*(W+H),
        explicacao:"Os lados de cima juntos medem o mesmo que o de baixo ("+W+" cm) e os da direita juntos medem o mesmo que o da esquerda ("+H+" cm). Perímetro = 2 × ("+W+" + "+H+") = <b>"+(2*(W+H))+" cm</b>.",
        dica:"Experimenta \"empurrar\" os degraus para formar um retângulo."};
    }
    return {tipo:"num", unidade:"cm²", texto:"Qual é a <b>área</b> desta figura?", visual:lShapeSvg(W,H,w,h), resposta:A,
      explicacao:"Corta em dois retângulos. Em baixo: "+W+" × "+(H-h)+" = "+(W*(H-h))+". Em cima, a altura é "+H+" − "+(H-h)+" = "+h+": "+(W-w)+" × "+h+" = "+((W-w)*h)+". Total: <b>"+A+" cm²</b>.",
      dica:"Corta a figura em dois retângulos e soma as áreas."};
  }
  function areaMoldura(l){
    const W = rnd(8,14), H = rnd(6,11), w = rnd(2,W-4), h = rnd(2,H-4);
    return {tipo:"num", unidade:"cm²", texto:"Qual é a área da parte <b>pintada</b> (a moldura)?", visual:frameSvg(W,H,w,h), resposta:W*H-w*h,
      explicacao:"Retângulo grande: "+W+" × "+H+" = "+(W*H)+". Buraco: "+w+" × "+h+" = "+(w*h)+". Moldura: "+(W*H)+" − "+(w*h)+" = <b>"+(W*H-w*h)+" cm²</b>.", dica:"Calcula a área toda e tira o buraco."};
  }
  function quadradoLado(l){
    const s = rnd(2,25);
    return {tipo:"num", unidade:"cm", texto:"Um quadrado tem <b>"+(4*s)+" cm</b> de perímetro. Quanto mede cada lado?", resposta:s,
      explicacao:"O quadrado tem 4 lados iguais: "+(4*s)+" ÷ 4 = <b>"+s+" cm</b>.", dica:"Quantos lados iguais tem um quadrado?"};
  }

  /* n7 — contar cubinhos */
  function volCubinhos(l){
    const a = rnd(2, l===1 ? 4 : 5), b = rnd(1, l===1 ? 3 : 4), c = rnd(1, l===1 ? 3 : 4);
    return {tipo:"num", texto:"Quantos <b>cubinhos</b> tem este bloco? (está cheio, sem buracos)", visual:isoSvg(a,b,c,"cubos"), resposta:a*b*c,
      explicacao:"Cada camada tem "+a+" × "+b+" = "+(a*b)+" cubinhos e há "+c+" camada"+(c>1?"s":"")+": "+(a*b)+" × "+c+" = <b>"+(a*b*c)+"</b>. Contar cubinhos é medir o volume!",
      dica:"Conta os cubinhos de uma camada e multiplica pelo número de camadas."};
  }

  /* n8 — gráficos, pictogramas e roletas */
  const CATS = [["Futebol","Natação","Basquete","Ténis"],["Maçã","Banana","Laranja","Uva"],["Azul","Verde","Vermelho","Roxo"],["Gato","Cão","Peixe","Coelho"]];
  const CAT_TITLES = ["Desporto preferido da turma","Fruta preferida da turma","Cor preferida da turma","Animal de estimação preferido"];
  function grafBarras(l){
    const ti = rnd(0,3), cats = CATS[ti], step = l===1 ? 1 : l===2 ? 2 : 5;
    let vals; do{ vals = cats.map(() => rnd(1,10)*step); } while(new Set(vals).size < 4);
    const vis = barChartSvg(CAT_TITLES[ti], cats, vals, step), kind = pick(l===1 ? ["moda","um"] : ["moda","total","dif","um"]);
    if(kind === "moda"){
      const i = vals.indexOf(Math.max.apply(null, vals));
      return choice("Qual é a <b>moda</b> (a resposta mais escolhida)?", cats[i], cats.filter((c,j) => j!==i),
        {visual:vis, explicacao:"A moda é a barra mais alta: <b>"+cats[i]+"</b> ("+vals[i]+" alunos).", dica:"Procura a barra mais alta."});
    }
    if(kind === "um"){
      const i = rnd(0,3);
      return {tipo:"num", texto:"Quantos alunos escolheram <b>"+cats[i]+"</b>?", visual:vis, resposta:vals[i],
        explicacao:"O topo da barra fica à altura do <b>"+vals[i]+"</b> no eixo da esquerda.", dica:"Segue o topo da barra até ao eixo da esquerda."};
    }
    if(kind === "total"){
      const t = vals.reduce((a,b) => a+b, 0);
      return {tipo:"num", texto:"Quantos alunos responderam <b>ao todo</b>?", visual:vis, resposta:t,
        explicacao:"Soma todas as barras: "+vals.join(" + ")+" = <b>"+t+"</b>.", dica:"Lê o valor de cada barra e soma."};
    }
    let i, j; do{ i = rnd(0,3); j = rnd(0,3); } while(i===j || vals[i] <= vals[j]);
    return {tipo:"num", texto:"Quantos alunos escolheram <b>"+cats[i]+"</b> a mais do que <b>"+cats[j]+"</b>?", visual:vis, resposta:vals[i]-vals[j],
      explicacao:vals[i]+" − "+vals[j]+" = <b>"+(vals[i]-vals[j])+"</b>.", dica:"Lê as duas barras e subtrai."};
  }
  function pictograma(l){
    const unit = l===1 ? 1 : l===2 ? 2 : 5, names = shuffle(["Ana","Rui","Inês","Tomás","Sara","Duarte"]).slice(0,4);
    const vals = names.map(() => rnd(1,6)*unit), vis = pictoHtml(names, vals, unit, "📚");
    if(l>1 && Math.random()<0.4){
      const t = vals.reduce((a,b) => a+b, 0);
      return {tipo:"num", texto:"Quantos livros leram os quatro <b>ao todo</b>?", visual:vis, resposta:t,
        explicacao:"Cada 📚 vale "+unit+". "+names.map((n,i) => n+": "+vals[i]).join("; ")+". Total: <b>"+t+"</b>.", dica:"Vê na legenda quanto vale cada 📚."};
    }
    const i = rnd(0,3);
    return {tipo:"num", texto:"Quantos livros leu <b>"+names[i]+"</b>?", visual:vis, resposta:vals[i],
      explicacao:names[i]+" tem "+(vals[i]/unit)+" × 📚 e cada um vale "+unit+": "+(vals[i]/unit)+" × "+unit+" = <b>"+vals[i]+"</b>.", dica:"Vê na legenda quanto vale cada 📚."};
  }
  function roleta(l){
    const N = pick(l===1 ? [4,6] : [6,8,10]), k = l===1 ? 2 : 3;
    const counts = Array(k).fill(1);
    for(let i=0;i<N-k;i++) counts[rnd(0,k-1)]++;
    let sectors = []; counts.forEach((c,ci) => { for(let i=0;i<c;i++) sectors.push(ci); });
    sectors = shuffle(sectors);
    const ci = rnd(0,k-1);
    return {tipo:"fracao", texto:"Rodas a roleta. Qual é a probabilidade de calhar <b>"+CORES[ci][0]+"</b>?", visual:spinnerSvg(sectors), resposta:{n:counts[ci], d:N},
      explicacao:"A roleta tem "+N+" setores iguais e "+counts[ci]+" são "+CORES[ci][0]+"s: <b>"+counts[ci]+"/"+N+"</b>"+simp(counts[ci],N)+".", dica:"Conta os setores todos e os da cor pedida."};
  }

  /* ------------------------------ temas ------------------------------ */
  // g = gerador, min = nível mínimo em que aparece
  const TEMAS = {
    n1: [{g:divisivel,min:1},{g:primo,min:1},{g:mdc,min:1},{g:mmc,min:1},{g:selMultiplos,min:1},{g:selDivisores,min:2},{g:decomp,min:2},{g:selPrimos,min:3}],
    n2: [{g:fracVisual,min:1},{g:frBarra,min:1},{g:frConjunto,min:1},{g:frPintar,min:1},{g:frRetaLer,min:1},{g:frRetaColocar,min:1},{g:equiv,min:1},{g:somaFr,min:1},{g:simplif,min:1},
         {g:frGrelha,min:2},{g:compFr,min:2},{g:multFr,min:2},{g:divFr,min:3}],
    n3: [{g:percentOf,min:1},{g:desconto,min:1},{g:decOps,min:1},{g:fracPct,min:1},{g:maiorDec,min:1},{g:pctGrelha,min:1},{g:decReta,min:1},{g:pctPintar,min:2}],
    n4: [{g:nextTerm,min:1},{g:propTable,min:1},{g:regra3,min:1},{g:padrao,min:1},{g:nthTerm,min:2},{g:escala,min:2}],
    n5: [{g:compSup,min:1},{g:area,min:1},{g:perim,min:1},{g:classAngle,min:1},{g:angMedir,min:1},{g:angAbrir,min:1},{g:angReta,min:1},{g:areaGrelha,min:1},
         {g:triAngle,min:2},{g:angPonto,min:2},{g:angOpostos,min:2},{g:areaTriGrelha,min:2},{g:areaL,min:2},{g:quadradoLado,min:2},{g:areaMoldura,min:3}],
    n6: [{g:raioDiam,min:1},{g:circP,min:1},{g:circA,min:2}],
    n7: [{g:volCubo,min:1},{g:volCaixa,min:1},{g:volCubinhos,min:1},{g:conv,min:1},{g:aquario,min:2}],
    n8: [{g:media,min:1},{g:moda,min:1},{g:prob,min:1},{g:certoImp,min:1},{g:grafBarras,min:1},{g:pictograma,min:1},{g:roleta,min:1},{g:mediana,min:2},{g:amplitude,min:2}]
  };

  let last = null;
  function gerar(tema, nivel){
    const gs = TEMAS[tema].filter(x => x.min <= nivel);
    let g; do{ g = pick(gs); } while(gs.length > 1 && g === last);
    last = g;
    const q = g.g(nivel);
    q.tema = tema; q.nivel = nivel;
    return q;
  }

  /* corrigir: true / false / null (resposta inválida ou vazia) / "simplificar"
     valor: escolha → índice; pintar → nº de partes pintadas; angulo → graus;
            reta → índice do tracinho; selecionar → lista de índices */
  function corrigir(q, valor){
    if(q.tipo === "escolha") return valor === q.resposta;
    if(q.tipo === "pintar"){ if(!valor) return null; return valor*q.alvo.d === q.alvo.n*q.partes; }
    if(q.tipo === "angulo") return Math.abs(valor - q.alvo) <= (q.tolerancia || 3);
    if(q.tipo === "reta"){ if(valor === null || valor === undefined) return null; return valor*q.alvo.d === q.alvo.n*q.div; }
    if(q.tipo === "selecionar"){
      if(!valor || !valor.length) return null;
      const a = valor.slice().sort((x,y) => x-y);
      return a.length === q.resposta.length && a.every((v,i) => v === q.resposta[i]);
    }
    const s = String(valor).trim().replace(/\s+/g, "").replace(/[a-zA-Z€%²³°º]+$/, "").replace(/,/g, ".");
    if(!s) return null;
    if(q.tipo === "num"){
      if(!/^-?\d*\.?\d+$/.test(s)) return null;
      return Math.abs(parseFloat(s) - q.resposta) <= (q.tolerancia || 0.0001) + 1e-9;
    }
    const m = s.match(/^(-?\d+)(?:\/(\d+))?$/);
    if(!m) return null;
    const n = Number(m[1]), d = m[2] ? Number(m[2]) : 1;
    if(d === 0) return null;
    const ok = n*q.resposta.d === q.resposta.n*d;
    if(ok && q.simplificada && gcd(n, d) !== 1) return "simplificar";
    return ok;
  }

  function respostaTexto(q){
    if(q.tipo === "escolha") return q.opcoes[q.resposta];
    if(q.tipo === "pintar") return (q.alvo.n*q.partes/q.alvo.d)+" de "+q.partes+" partes";
    if(q.tipo === "angulo") return q.alvo+"°";
    if(q.tipo === "reta") return q.alvo.n+"/"+q.alvo.d;
    if(q.tipo === "selecionar") return q.resposta.map(i => q.numeros[i]).join(", ");
    if(q.tipo === "fracao") return q.resposta.n + "/" + q.resposta.d;
    return fmt(q.resposta) + (q.unidade ? " " + q.unidade : "");
  }

  return {gerar:gerar, corrigir:corrigir, respostaTexto:respostaTexto, temas:Object.keys(TEMAS),
    // desenhos usados pelos exercícios interativos (arena.js redesenha-os quando a criança mexe)
    celulas:cellsSvg, reta:numberLine, transferidor:protractor, PROT:PROT, CHEIO:FILL, VAZIO:EMPTY};
})();
