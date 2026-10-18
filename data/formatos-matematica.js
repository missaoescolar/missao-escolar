/* Formas de aprender cada mundo (usadas por app.js em qualquer disciplina):
   primeiros — 🧱 primeiros passos: o que tens de saber antes ({t, w: id do mundo onde se aprende, opcional})
   analogia  — 💡 uma comparação do dia a dia
   camadas   — 🧅 do essencial ao mais difícil (3 degraus)
   sintese   — 🗺️ resumo visual: [título, conteúdo] em quadradinhos
   erros     — ⚠️ erros comuns: {e: o erro, p: porque acontece, c: o que está certo}
   robo      — 🤖 pensa como um robô: {tarefa, algoritmo:[passos], teste, bug:{h: o que o robô fez, r: o erro e a correção}} */
var MISSAO_FORMATOS = Object.assign(typeof MISSAO_FORMATOS !== "undefined" ? MISSAO_FORMATOS : {}, {
  n1: {
    primeiros: [{t:"A tabuada da multiplicação e a divisão sem resto (5.º ano)."}, {t:"O que é um múltiplo e um divisor (revê o início do resumo deste mundo)."}],
    analogia: "Os números primos são como as peças de LEGO básicas: todos os outros números constroem-se multiplicando primos, e cada número só tem uma maneira de ser construído (a sua decomposição).",
    camadas: ["Reconhecer primos e compostos; múltiplos e divisores.", "Decompor em fatores primos e calcular o m.d.c. e o m.m.c.", "Usar as regras das potências e a ordem das operações em expressões e problemas."],
    sintese: [["Primo","Só 2 divisores: 1 e ele próprio (2, 3, 5, 7, 11…)"], ["m.d.c.","Fatores comuns, menor expoente → «dividir em partes iguais»"], ["m.m.c.","Todos os fatores, maior expoente → «quando voltam a coincidir»"], ["Mesma base","aᵐ × aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ"], ["Mesmo expoente","aⁿ × bⁿ = (a × b)ⁿ"], ["Ordem","( ) → potências → × ÷ → + −"]],
    erros: [
      {e:"2³ = 6", p:"Confunde-se a potência com a multiplicação da base pelo expoente.", c:"2³ = 2 × 2 × 2 = 8."},
      {e:"O 1 é primo.", p:"Parece que «só se divide por 1 e por ele próprio».", c:"Um primo tem exatamente 2 divisores; o 1 só tem um. O 1 não é primo nem composto."},
      {e:"3 + 4 × 2 = 14", p:"Calcula-se da esquerda para a direita.", c:"Primeiro a multiplicação: 3 + 8 = 11."},
      {e:"Usar o m.m.c. para «fazer grupos iguais».", p:"Os nomes parecem-se.", c:"Dividir em partes iguais → m.d.c.; coincidir de novo → m.m.c."}
    ],
    robo: {tarefa:"Ensina um robô a decompor um número em fatores primos.",
      algoritmo:["Escreve o número N.", "Experimenta dividir N pelo menor primo: 2, depois 3, depois 5, 7…", "Se a divisão não tem resto, escreve esse primo e troca N pelo quociente.", "Repete os passos 2 e 3 até N ser 1.", "Os primos que escreveste são a decomposição."],
      teste:"Segue o algoritmo com 60: 60 → 30 → 15 → 5 → 1, e os primos são 2, 2, 3, 5.",
      bug:{h:"O robô escreveu 36 = 2 × 2 × 9 e parou.", r:"Parou cedo demais: 9 não é primo (9 = 3 × 3). O passo 4 diz para continuar até N ser 1: 36 = 2 × 2 × 3 × 3 = 2² × 3²."}}
  },
  n2: {
    primeiros: [{t:"Frações equivalentes e simplificar (5.º ano)."}, {t:"O m.m.c. de dois números, para o denominador comum.", w:"n1"}],
    analogia: "Somar frações com denominadores diferentes é como somar moedas de países diferentes: primeiro troca-se tudo para a mesma moeda (o mesmo denominador) e só depois se soma.",
    camadas: ["Ler, comparar e simplificar frações; fração de uma quantidade.", "Somar, subtrair, multiplicar e dividir frações.", "Potências de frações, a fração como medida e expressões com frações."],
    sintese: [["Somar/subtrair","Mesmo denominador primeiro: 2/3 + 1/4 = 8/12 + 3/12 = 11/12"], ["Multiplicar","Em cima × em cima, em baixo × em baixo"], ["Dividir","Multiplicar pelo inverso: a/b ÷ c/d = a/b × d/c"], ["Fração de","3/4 de 20 = 20 ÷ 4 × 3 = 15"], ["Potência","(a/b)ⁿ = aⁿ/bⁿ"], ["Medida","Unidade dividida em d partes; contam-se n → n/d"]],
    erros: [
      {e:"1/2 + 1/3 = 2/5", p:"Somam-se os numeradores e os denominadores como se fossem números soltos.", c:"Mesmo denominador: 3/6 + 2/6 = 5/6."},
      {e:"Multiplicar dá sempre um número maior.", p:"Com números naturais é assim.", c:"Por uma fração própria fica menor: 6 × 1/2 = 3."},
      {e:"(2/3)² = 4/3", p:"Eleva-se só o numerador.", c:"Eleva-se em cima e em baixo: 4/9."},
      {e:"Dividir 3 por 1/2 dá 1,5.", p:"Divide-se por 2 em vez de por 1/2.", c:"Quantas metades cabem em 3? 3 × 2 = 6."}
    ],
    robo: {tarefa:"Ensina um robô a somar duas frações.",
      algoritmo:["Lê as duas frações a/b e c/d.", "Se b = d, soma os numeradores e mantém o denominador. Salta para o passo 5.", "Se não, calcula o m.m.c. de b e d: é o novo denominador.", "Transforma cada fração numa equivalente com esse denominador e soma os numeradores.", "Simplifica o resultado, se der."],
      teste:"Segue o algoritmo com 2/3 + 1/4: m.m.c. = 12 → 8/12 + 3/12 = 11/12.",
      bug:{h:"O robô calculou 1/2 + 1/4 = 2/6.", r:"Saltou os passos 3 e 4: somou em cima e em baixo. O m.m.c. de 2 e 4 é 4: 2/4 + 1/4 = 3/4."}}
  },
  n3: {
    primeiros: [{t:"Ler e comparar números decimais (5.º ano)."}, {t:"Frações de denominador 10, 100 e 1000.", w:"n2"}],
    analogia: "A percentagem é uma fração com «tamanho fixo»: é sempre em 100 partes. Dizer 25% é como dizer «25 em cada 100», tal como num questionário a 100 pessoas.",
    camadas: ["Ler, comparar e ordenar decimais.", "Operar com decimais; passar entre fração, decimal e percentagem.", "Descontos, aumentos e «que percentagem é»."],
    sintese: [["Fração → decimal","3/4 = 3 ÷ 4 = 0,75"], ["Decimal → %","0,75 = 75%"], ["Percentagem de","20% de 50 = 0,20 × 50 = 10"], ["Desconto","Paga-se o resto: 30% off → × 0,70"], ["Que % é?","parte ÷ todo × 100"], ["× 10, 100…","A vírgula anda 1, 2… casas para a direita"]],
    erros: [
      {e:"0,25 > 0,3, porque 25 > 3.", p:"Comparam-se as casas decimais como números inteiros.", c:"0,3 = 0,30 > 0,25."},
      {e:"Um desconto de 20% em 50 € dá 30 €.", p:"Tira-se 20 € em vez de 20%.", c:"20% de 50 = 10 €; paga-se 40 €."},
      {e:"Subir 10% e depois descer 10% volta ao preço inicial.", p:"Parece que se anulam.", c:"100 → 110 → 99: o segundo 10% é sobre um valor maior."}
    ],
    robo: {tarefa:"Ensina um robô a calcular o preço com desconto.",
      algoritmo:["Lê o preço P e a percentagem de desconto d.", "Calcula o desconto: P × d ÷ 100.", "Preço final = P − desconto.", "Verifica: o preço final tem de ser menor do que P."],
      teste:"Segue o algoritmo com 40 € e 25%: desconto 10 €, preço final 30 €.",
      bug:{h:"O robô disse que 80 € com 15% de desconto ficam a 65 €.", r:"Tirou 15 € em vez de 15%: saltou o passo 2. O desconto é 80 × 15 ÷ 100 = 12 €, e o preço final é 68 €."}}
  },
  n4: {
    primeiros: [{t:"Frações equivalentes e simplificar.", w:"n2"}, {t:"Multiplicar e dividir decimais.", w:"n3"}],
    analogia: "Duas grandezas diretamente proporcionais andam «de mãos dadas»: se uma duplica, a outra duplica; se uma fica a metade, a outra também. Como os ingredientes de uma receita quando se faz para mais gente.",
    camadas: ["Descobrir a regra de uma sequência.", "Reconhecer a proporcionalidade direta; redução à unidade e regra de três.", "Razão, proporção, propriedade fundamental e escalas."],
    sintese: [["Termo geral","Ex.: 3n + 1 (n = ordem do termo)"], ["Proporcional?","y ÷ x é sempre igual (a constante)"], ["Proporção","a/b = c/d ⇔ a × d = b × c"], ["Redução à unidade","Quanto vale 1? Depois multiplica"], ["Escala 1 : 50 000","1 cm no mapa = 50 000 cm = 500 m"]],
    erros: [
      {e:"2/3 = x/12, logo x = 11.", p:"Pensa-se em somar (12 tem mais 9 do que 3).", c:"Multiplica-se: 2 × 12 = 3 × x, x = 8."},
      {e:"A idade e a altura são proporcionais.", p:"As duas crescem juntas.", c:"Não basta crescerem juntas: o quociente tem de ser sempre o mesmo."},
      {e:"Na escala 1 : 100 000, 3 cm são 3 km… ou 300 m?", p:"Esquece-se a conversão de unidades.", c:"3 × 100 000 = 300 000 cm = 3000 m = 3 km."}
    ],
    robo: {tarefa:"Ensina um robô a decidir se uma tabela é de proporcionalidade direta.",
      algoritmo:["Para cada coluna da tabela, divide o valor de baixo pelo de cima.", "Guarda o primeiro quociente.", "Se algum quociente for diferente do primeiro, responde «Não» e para.", "Se todos forem iguais, responde «Sim»: esse quociente é a constante de proporcionalidade."],
      teste:"Segue o algoritmo com a tabela 1 → 2,5; 2 → 5; 4 → 10: todos dão 2,5. Sim!",
      bug:{h:"Com a tabela 1 → 3; 2 → 6; 3 → 10, o robô respondeu «Sim» depois de ver só as duas primeiras colunas.", r:"Parou antes de verificar todas: 10 ÷ 3 ≈ 3,33 é diferente de 3. A resposta certa é «Não»."}}
  },
  n5: {
    primeiros: [{t:"Medir ângulos com o transferidor e classificá-los (5.º ano)."}, {t:"Área do retângulo, do paralelogramo e do triângulo (5.º ano)."}],
    analogia: "Um ângulo é uma «abertura», como a de uma tesoura ou de um livro: não depende do comprimento das lâminas, só de quanto estão abertas.",
    camadas: ["Medir e classificar ângulos; polígonos convexos, côncavos, regulares.", "Complementares, suplementares, ângulos internos e externos do triângulo.", "Áreas de figuras compostas e problemas com ângulos desconhecidos."],
    sintese: [["Complementares","Somam 90°"], ["Suplementares","Somam 180°"], ["Triângulo","Internos: 180° · Externos: 360°"], ["Externo","= soma dos 2 internos não adjacentes"], ["Regular","Lados iguais E ângulos iguais"], ["Triângulo (área)","base × altura ÷ 2"]],
    erros: [
      {e:"Usar o lado inclinado como altura.", p:"Parece «a altura» do desenho.", c:"A altura é perpendicular à base (faz 90° com ela)."},
      {e:"O losango é regular, porque tem os lados iguais.", p:"Esquece-se a segunda condição.", c:"Regular = lados iguais E ângulos iguais; o losango (não quadrado) é irregular."},
      {e:"O complementar de 120° é −30°.", p:"Faz-se a conta sem pensar.", c:"Um ângulo de mais de 90° não tem complementar; o suplementar é 60°."}
    ],
    robo: {tarefa:"Ensina um robô a dizer se três comprimentos formam um triângulo (é um exemplo das próprias Aprendizagens Essenciais).",
      algoritmo:["Lê os três comprimentos a, b e c.", "Verifica se a < b + c.", "Verifica se b < a + c.", "Verifica se c < a + b.", "Se as três verificações forem verdadeiras, responde «Sim»; se alguma falhar, responde «Não»."],
      teste:"Segue o algoritmo com 3, 4 e 5: 3 < 9, 4 < 8, 5 < 7. Sim! (Experimenta montar com palhinhas.)",
      bug:{h:"Com 3, 4 e 9 cm, o robô respondeu «Sim».", r:"Só fez o passo 2 (3 < 13). No passo 4, 9 < 3 + 4 = 7 é falso: o lado maior é comprido demais e as pontas não se tocam. A resposta é «Não»."}}
  },
  n6: {
    primeiros: [{t:"Medir comprimentos e usar o compasso (5.º ano)."}, {t:"Multiplicar números decimais.", w:"n3"}, {t:"Proporcionalidade direta (o π é uma constante de proporcionalidade).", w:"n4"}],
    analogia: "O π é como uma «receita fixa» de todas as circunferências: grande ou pequena, a volta é sempre um pouco mais de 3 vezes o diâmetro.",
    camadas: ["Centro, raio, diâmetro, corda e arco.", "Perímetro do círculo: P = π × d.", "Área do círculo e figuras com partes de círculos."],
    sintese: [["Diâmetro","d = 2 × r"], ["Perímetro","P = π × d = 2 × π × r"], ["Área","A = π × r × r"], ["π","≈ 3,14 (P ÷ d de qualquer círculo)"], ["Semicírculo","Metade da área; metade da curva + o diâmetro"]],
    erros: [
      {e:"Usar o diâmetro na fórmula da área.", p:"Confunde-se r com d.", c:"A = π × r²: primeiro divide o diâmetro por 2."},
      {e:"r² = 2 × r", p:"Confunde-se quadrado com dobro.", c:"r² = r × r (com r = 5: 25, não 10)."},
      {e:"Se o raio duplica, a área duplica.", p:"Pensa-se como no perímetro.", c:"A área fica 4 vezes maior (2 × 2)."}
    ],
    robo: {tarefa:"Ensina um robô a calcular a área de um círculo a partir do diâmetro.",
      algoritmo:["Lê o diâmetro d.", "Calcula o raio: r = d ÷ 2.", "Calcula r × r.", "Multiplica por 3,14.", "Escreve a resposta em unidades quadradas (cm², m²)."],
      teste:"Segue o algoritmo com d = 10 cm: r = 5, r × r = 25, A = 78,5 cm².",
      bug:{h:"Com d = 6 m, o robô deu 113,04 m².", r:"Saltou o passo 2 e usou 6 como raio: 3,14 × 36. O raio é 3: A = 3,14 × 9 = 28,26 m²."}}
  },
  n7: {
    primeiros: [{t:"Poliedros e planificações (5.º ano)."}, {t:"Área do retângulo e do círculo.", w:"n6"}, {t:"Multiplicar decimais.", w:"n3"}],
    analogia: "O volume é «quantos cubinhos cabem lá dentro», como contar as caixas de leite que enchem uma caixa grande: camada a camada.",
    camadas: ["O que é o volume; contar cubos unitários.", "Volume do cubo, do paralelepípedo e do cilindro.", "Converter unidades (cm³, dm³, litros) e resolver problemas."],
    sintese: [["Paralelepípedo","V = c × l × a"], ["Cubo","V = a × a × a"], ["Cilindro","V = área da base × altura = π × r² × h"], ["Litros","1 dm³ = 1 L · 1 m³ = 1000 L"], ["Unidades","cm³ → dm³: ÷ 1000"]],
    erros: [
      {e:"1 m³ = 100 dm³", p:"Usa-se a regra das unidades de comprimento.", c:"1 m³ = 10 × 10 × 10 = 1000 dm³."},
      {e:"Volume em cm².", p:"Confunde-se com a área.", c:"O volume tem 3 dimensões: cm³."},
      {e:"Volume do cilindro = π × d × h.", p:"Mistura-se o perímetro com a área da base.", c:"V = π × r × r × h."}
    ],
    robo: {tarefa:"Ensina um robô a dizer quantos litros leva um aquário (paralelepípedo) com medidas em cm.",
      algoritmo:["Lê o comprimento, a largura e a altura, em cm.", "Multiplica as três medidas: dá o volume em cm³.", "Divide por 1000: dá o volume em dm³.", "Escreve o resultado em litros (1 dm³ = 1 L)."],
      teste:"Segue o algoritmo com 50 × 30 × 40 cm: 60 000 cm³ = 60 dm³ = 60 L.",
      bug:{h:"Para um aquário de 40 × 25 × 30 cm, o robô disse 300 L.", r:"Dividiu por 100 em vez de 1000 no passo 3: 30 000 cm³ ÷ 1000 = 30 L."}}
  },
  n8: {
    primeiros: [{t:"Tabelas de frequências e gráficos de barras (5.º ano)."}, {t:"Frações, decimais e percentagens.", w:"n3"}],
    analogia: "Um gráfico é como uma fotografia dos dados: mostra muito de uma vez, mas o ângulo da fotografia (a escala do eixo) pode enganar.",
    camadas: ["Recolher e organizar dados em tabelas e gráficos.", "Média, moda, classes, classe modal e histogramas.", "Probabilidade e análise crítica de gráficos."],
    sintese: [["Média","Soma ÷ número de valores"], ["Moda / classe modal","O valor / a classe mais frequente"], ["Classe [a, b[","a entra; b fica para a seguinte"], ["Histograma","Barras encostadas (dados contínuos)"], ["Gráfico de linha","Dados ao longo do tempo"], ["Probabilidade","favoráveis ÷ possíveis (entre 0 e 1)"]],
    erros: [
      {e:"A classe modal é «8».", p:"Confunde-se a frequência com a classe.", c:"A classe modal é o intervalo, por exemplo [150, 155[."},
      {e:"P = 120 ÷ 6 = 20", p:"Divide-se ao contrário.", c:"P = 6 ÷ 120 = 1/20; nunca passa de 1."},
      {e:"Ler um gráfico sem ver onde começa o eixo.", p:"As barras parecem dizer tudo.", c:"Lê sempre os números do eixo vertical."}
    ],
    robo: {tarefa:"Ensina um robô a pôr cada valor na sua classe e a contar as frequências.",
      algoritmo:["Escreve as classes [a, b[ e põe um contador a 0 em cada uma.", "Pega no primeiro valor.", "Procura a classe em que a ≤ valor < b e soma 1 ao seu contador.", "Repete para todos os valores.", "Verifica: os contadores somam o número total de valores."],
      teste:"Segue o algoritmo com as alturas do Exemplo 7: os contadores dão 2, 4, 8, 5 e 1 (total 20).",
      bug:{h:"O robô contou o 150 nas classes [145, 150[ e [150, 155[, e os contadores somaram 21.", r:"No passo 3 usou ≤ dos dois lados. Com a < b fora, o 150 só entra em [150, 155[, e a soma volta a dar 20."}}
  },
  n9: {
    primeiros: [{t:"Medir ângulos com o transferidor (5.º ano)."}, {t:"Reflexão e eixos de simetria (1.º e 2.º ciclos)."}, {t:"Ângulos à volta de um ponto: 360°.", w:"n5"}],
    analogia: "Uma rotação é como os ponteiros do relógio ou uma roda gigante: tudo gira à volta de um ponto fixo e nada se afasta nem se aproxima dele.",
    camadas: ["Rodar um ponto: centro, ângulo e sentido.", "Rodar figuras e reconhecer a simetria de rotação.", "Rosáceas: ângulo mínimo, eixos de simetria e construção."],
    sintese: [["Rotação","Centro + ângulo + sentido"], ["Sentido positivo","Contrário aos ponteiros do relógio"], ["OA = OA'","Cada ponto anda numa circunferência"], ["Ângulo mínimo","360° ÷ n.º de posições iguais"], ["Rosácea com eixos","n.º de eixos = n.º de cópias"]],
    erros: [
      {e:"Ângulo mínimo de 5 pétalas = 180° ÷ 5 = 36°.", p:"Usa-se meia volta.", c:"360° ÷ 5 = 72°."},
      {e:"Todas as rosáceas têm eixos de simetria.", p:"As flores costumam ter.", c:"Um catavento tem simetria de rotação mas nenhum eixo."},
      {e:"Na rotação, a figura fica «ao espelho».", p:"Confunde-se com a reflexão.", c:"Na rotação, um R continua a ler-se R."}
    ],
    robo: {tarefa:"Ensina um robô (por exemplo, em Scratch) a desenhar uma rosácea de n pétalas.",
      algoritmo:["Lê o número de pétalas n.", "Calcula o ângulo: 360 ÷ n.", "Repete n vezes:", "   desenha uma pétala;", "   gira esse ângulo.", "Verifica: n × ângulo = 360°."],
      teste:"Segue o algoritmo com n = 8: gira 45° oito vezes e volta ao início.",
      bug:{h:"Para 6 pétalas, o robô girou 30° de cada vez, e as 6 pétalas ficaram todas em meia flor.", r:"Usou 180 ÷ 6 em vez de 360 ÷ 6. Com 60°, as pétalas espalham-se pela volta toda."}}
  }
});
