/* TIC do 7.º ano. Aprendizagens Essenciais de TIC do 7.º ano (domínios: cidadania digital; investigar e pesquisar;
   comunicar e colaborar; criar e inovar). Mundos segundo os capítulos do manual «Login TIC 7» (ASA), que serve só
   de referência (conteúdo original), e um mundo de segurança e cidadania digital, que as AE pedem.
   Sem ligações a serviços que exigem conta (regra do projeto): a aplicação de 3D do manual é referida, não ligada.
   Progresso guardado por posição: missões e perguntas novas acrescentam-se sempre no FIM das listas. */
const TIC7_WORLDS = [
  {
    id:"d1", num:1, c:"m1", icon:"💻",
    title:"O Sistema Operativo",
    subtitle:"Sistemas operativos, ficheiros e pastas", pages:"Login TIC 7, capítulo 1 «Sistemas operativos» (pp. 8–21)",
    lead:"Antes de qualquer jogo ou programa abrir, há um programa que manda em tudo: o sistema operativo. Neste mundo vais perceber o que ele faz, conhecer exemplos e aprender a organizar ficheiros e pastas como um profissional, com atalhos de teclado e cópias de segurança.",
    missions:[
      {t:"Quem Manda Aqui?", d:"O que é um sistema operativo", f:"Descobre que sistema operativo têm o computador, o tablet e o telemóvel lá de casa.\nFaz uma tabela: aparelho, sistema operativo e uma diferença que notes entre eles.", xp:10},
      {t:"Arrumar a Casa Digital", d:"Pastas e ficheiros", f:"Cria uma pasta «Escola 7.º ano» com uma subpasta por disciplina.\nGuarda lá 3 trabalhos com nomes claros (ex.: «CN_rochas_2026-10-26»).\nExplica porque é que nomes claros ajudam a encontrar os ficheiros.", xp:10},
      {t:"Atalhos Secretos", d:"Atalhos de teclado", f:"Experimenta e escreve o que fazem: Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+S, Ctrl+F e Alt+Tab.\nUsa 3 deles durante um trabalho.", xp:10},
      {t:"Plano B", d:"Cópias de segurança", f:"Com um adulto, faz uma cópia de segurança dos teus trabalhos numa pen ou noutro disco.\nEscreve com que frequência a vais repetir e porquê.", xp:10}
    ],
    resumo:[
      "O <b>sistema operativo</b> é o programa principal de um computador, tablet ou telemóvel: gere o hardware (processador, memória, discos), os programas e os ficheiros, e dá-nos uma <b>interface</b> para comunicar com a máquina.",
      "Exemplos: Windows, macOS e Linux (computadores); Android e iOS (telemóveis e tablets).",
      "<b>Hardware</b> é a parte física (ecrã, teclado, processador); <b>software</b> são os programas.",
      "Os <b>ficheiros</b> guardam informação e organizam-se em <b>pastas</b> e subpastas. A <b>extensão</b> indica o tipo: .docx (texto), .pdf (documento), .jpg e .png (imagem), .mp3 (som), .mp4 (vídeo).",
      "<b>Atalhos de teclado</b>: Ctrl+C (copiar), Ctrl+X (cortar), Ctrl+V (colar), Ctrl+Z (anular), Ctrl+S (guardar), Ctrl+F (procurar), Alt+Tab (mudar de janela).",
      "Ficheiros apagados vão para a <b>reciclagem</b> e ainda se podem recuperar até ela ser esvaziada.",
      "Uma <b>cópia de segurança</b> (backup) é uma cópia dos ficheiros noutro lugar (pen, disco externo, nuvem), para não os perder se o aparelho avariar."
    ],
    gloss:[
      ["sistema operativo","Programa principal que gere o aparelho, os programas e os ficheiros."],
      ["hardware","Parte física de um computador."],
      ["software","Programas de um computador."],
      ["interface","Forma de comunicar com o computador (janelas, ícones, menus)."],
      ["ficheiro","Conjunto de informação guardado com um nome (texto, imagem, som…)."],
      ["pasta","Lugar onde se arrumam ficheiros e outras pastas."],
      ["extensão","Letras depois do ponto, no nome de um ficheiro, que indicam o seu tipo (.jpg, .pdf)."],
      ["cópia de segurança","Cópia dos ficheiros guardada noutro lugar, para não os perder."]
    ],
    quiz:[
      {q:"O que faz um sistema operativo?", opts:["Gere o hardware, os programas e os ficheiros, e dá-nos uma interface","Serve só para navegar na internet","É um jogo instalado no computador","É a parte física do computador"], correct:0, explain:"O sistema operativo é o programa principal: gere o hardware, os programas e os ficheiros. A parte física é o hardware.", pista:"É o programa que «manda» em todos os outros."},
      {q:"Qual destes é um sistema operativo para telemóveis?", opts:["Android","Um navegador","Um processador de texto","Um antivírus"], correct:0, explain:"Android e iOS são sistemas operativos de telemóveis e tablets. Os outros são programas que funcionam sobre um sistema operativo.", irma:{q:"Qual destes é hardware?", opts:["O teclado","O sistema operativo","Um jogo","Um navegador"], correct:0, explain:"O teclado é uma peça física: hardware. O resto é software (programas)."}},
      {q:"Que atalho de teclado anula a última ação?", opts:["Ctrl+Z","Ctrl+C","Ctrl+V","Ctrl+S"], correct:0, explain:"Ctrl+Z anula (desfaz). Ctrl+C copia, Ctrl+V cola e Ctrl+S guarda.", pista:"É o atalho que salva quem apaga sem querer.", irma:{q:"Que atalho de teclado guarda o ficheiro?", opts:["Ctrl+S","Ctrl+Z","Ctrl+X","Ctrl+F"], correct:0, explain:"Ctrl+S guarda («save»). Ctrl+F procura no texto."}},
      {q:"Um ficheiro chama-se «ferias.mp4». Que tipo de ficheiro é?", opts:["Vídeo","Imagem","Texto","Som"], correct:0, explain:"A extensão .mp4 indica um vídeo. As imagens costumam ser .jpg ou .png; o som, .mp3."},
      {q:"Para que serve uma cópia de segurança?", opts:["Para não perder os ficheiros se o aparelho avariar","Para o computador ficar mais rápido","Para apagar vírus","Para poupar bateria"], correct:0, explain:"A cópia de segurança guarda os ficheiros noutro lugar; se o computador avariar ou for roubado, os trabalhos não se perdem."},
      {q:"O que acontece a um ficheiro apagado no computador?", opts:["Vai para a reciclagem e ainda se pode recuperar","Desaparece logo para sempre","Vai para a internet","Fica escondido noutra pasta"], correct:0, explain:"Os ficheiros apagados vão para a reciclagem e só se perdem quando ela é esvaziada."}
    ],
    compare:{
      left:{title:"🖥️ Hardware", points:["A parte física","Ecrã, teclado, processador, memória","Pode tocar-se"]},
      right:{title:"💾 Software", points:["Os programas","Sistema operativo, jogos, navegador","Não se toca: instala-se"]}
    },
    boss:"Login TIC 7: «Como fazer?» do capítulo 1 (p. 12) e uma pasta de trabalhos bem organizada"
  },
  {
    id:"d2", num:2, c:"m2", icon:"🔎",
    title:"Detetive da Internet",
    subtitle:"Navegadores, pesquisa e avaliação da informação", pages:"Login TIC 7, capítulo 2 «Internet» (pp. 22–35)",
    lead:"A internet tem respostas para quase tudo, mas também muita informação errada. Neste mundo vais distinguir navegador de motor de pesquisa, pesquisar com técnicas de detetive, encontrar imagens e vídeos que podes usar e avaliar se uma fonte é de confiança.",
    missions:[
      {t:"Pesquisa de Detetive", d:"Técnicas de pesquisa", f:"Faz 3 pesquisas sobre o mesmo tema: uma simples, uma com aspas (expressão exata) e uma com o sinal menos (para excluir uma palavra).\nCompara os resultados.", xp:10},
      {t:"Fonte de Confiança?", d:"Avaliar a informação", f:"Escolhe 2 sites sobre o mesmo assunto.\nPara cada um, verifica: quem é o autor, a data, o objetivo e se a informação aparece noutras fontes.\nDecide qual é mais fiável e explica porquê.", xp:10},
      {t:"Imagens que Posso Usar", d:"Pesquisa de imagens com licença livre", f:"Procura 3 imagens com licença livre (Creative Commons ou domínio público) para um trabalho de Ciências.\nPara cada uma, escreve o autor, a licença e o endereço.", xp:10},
      {t:"Ficha de Fontes", d:"Citar as fontes", f:"Num trabalho teu, acrescenta uma lista de fontes com o nome do site, o título da página, o endereço e a data de consulta.", xp:10}
    ],
    resumo:[
      "O <b>navegador</b> (browser) é o programa que abre páginas da internet (ex.: Edge, Chrome, Firefox, Safari). O <b>motor de pesquisa</b> é um site que procura páginas a partir de palavras-chave.",
      "<b>Técnicas de pesquisa</b>: palavras-chave precisas; <b>aspas</b> para a expressão exata («ciclo da água»); o sinal <b>menos</b> para excluir (jaguar −carro); <b>site:</b> para pesquisar num site (site:gov.pt); <b>filetype:</b> para um tipo de ficheiro (filetype:pdf).",
      "<b>Avaliar uma fonte</b>: quem escreveu? Quando? Com que objetivo (informar, vender, convencer)? A informação confirma-se noutras fontes fiáveis? Sites de instituições, universidades e enciclopédias são, em geral, mais fiáveis.",
      "Nas <b>imagens e vídeos</b>, usa os filtros de licença: há conteúdos com licenças <b>Creative Commons</b> e de <b>domínio público</b>, que podem ser usados respeitando as condições, e <b>bancos de imagens</b> livres.",
      "Uma imagem «aparecer na internet» não quer dizer que se possa usar: a maioria tem <b>direitos de autor</b>.",
      "<b>Citar as fontes</b> é obrigatório: autor ou site, título, endereço e data de consulta. Copiar sem citar é <b>plágio</b>.",
      "<b>Método de pesquisa</b>: 1) definir o que procuro; 2) escolher palavras-chave; 3) pesquisar; 4) avaliar as fontes; 5) organizar a informação por palavras minhas; 6) citar."
    ],
    gloss:[
      ["navegador (browser)","Programa que abre páginas da internet."],
      ["motor de pesquisa","Site que procura páginas a partir de palavras-chave."],
      ["palavra-chave","Palavra importante usada para pesquisar."],
      ["fonte","Origem de uma informação (site, livro, pessoa)."],
      ["credibilidade","Qualidade de uma fonte em que se pode confiar."],
      ["plágio","Apresentar como seu o trabalho de outra pessoa, sem a citar."],
      ["domínio público","Obras que podem ser usadas livremente, porque os direitos expiraram ou o autor os cedeu."]
    ],
    quiz:[
      {q:"Qual é a diferença entre um navegador e um motor de pesquisa?", opts:["O navegador abre páginas; o motor de pesquisa procura páginas","São a mesma coisa","O navegador procura e o motor abre","O motor de pesquisa é um tipo de hardware"], correct:0, explain:"O navegador é o programa que abre as páginas; o motor de pesquisa é um site que procura páginas a partir de palavras-chave.", pista:"Um é o programa; o outro é um site dentro dele."},
      {q:"Queres páginas com a expressão exata «energia renovável». Como pesquisas?", opts:["Com aspas: \"energia renovável\"","Com o sinal menos: energia −renovável","Só com: energia","Com site: energia"], correct:0, explain:"As aspas procuram a expressão exata, com as palavras juntas e por aquela ordem. O sinal menos exclui palavras.", irma:{q:"Queres resultados sobre «jaguar», o animal, sem páginas de carros. Como pesquisas?", opts:["jaguar −carro","\"jaguar carro\"","jaguar carro","site:carro jaguar"], correct:0, explain:"O sinal menos exclui a palavra: jaguar −carro."}},
      {q:"Qual destas perguntas ajuda a avaliar se um site é fiável?", opts:["Quem escreveu e quando?","Tem muitas cores?","Aparece em primeiro lugar na pesquisa?","Tem muitos anúncios?"], correct:0, explain:"Saber o autor, a data, o objetivo e confirmar noutras fontes ajuda a avaliar a credibilidade. Aparecer em primeiro lugar não garante que a informação esteja certa."},
      {q:"Encontraste uma fotografia na internet. Podes usá-la no teu trabalho?", opts:["Só se a licença o permitir, e citando o autor","Sim, tudo o que está na internet é livre","Sim, desde que mudes o nome do ficheiro","Não, nunca se podem usar imagens"], correct:0, explain:"A maioria das imagens tem direitos de autor. Usa imagens com licença livre (Creative Commons, domínio público) e cita o autor.", pista:"Pensa nos direitos de autor."},
      {q:"O que é plágio?", opts:["Apresentar como teu o trabalho de outra pessoa, sem a citar","Citar as fontes no fim do trabalho","Pesquisar com aspas","Guardar um ficheiro em PDF"], correct:0, explain:"Plágio é copiar sem citar. Para o evitar, escreve por palavras tuas e cita sempre as fontes."},
      {q:"Para que serve «site:gov.pt» numa pesquisa?", opts:["Para pesquisar apenas em sites de gov.pt","Para excluir esses sites","Para pesquisar imagens","Para encontrar a expressão exata"], correct:0, explain:"O operador site: limita a pesquisa a um site ou domínio, por exemplo aos sites do Estado português (gov.pt)."}
    ],
    compare:{
      left:{title:"✅ Fonte fiável", points:["Autor e data identificados","Objetivo: informar","Confirma-se noutras fontes"]},
      right:{title:"⚠️ Fonte duvidosa", points:["Sem autor nem data","Objetivo: vender ou convencer","Títulos exagerados; não se confirma"]}
    },
    boss:"Login TIC 7: «Método de pesquisa e análise de informação» (p. 29) aplicado a um trabalho de outra disciplina"
  },
  {
    id:"d3", num:3, c:"m3", icon:"🖼️",
    title:"Estúdio de Imagem",
    subtitle:"Edição de imagem", pages:"Login TIC 7, capítulo 3 «Edição de imagem» (pp. 36–55) e atividades (p. 94)",
    lead:"Os grafismos de um jogo começam numa imagem editada camada a camada. Neste mundo vais perceber o que são píxeis e resolução, a diferença entre imagens matriciais e vetoriais, os formatos de imagem, e editar imagens com camadas, recortes e ajustes. O manual usa o GIMP, um editor gratuito.",
    missions:[
      {t:"Zoom até ao Píxel", d:"Imagem matricial e resolução", f:"Abre uma fotografia e faz zoom até veres os quadradinhos.\nVê as dimensões da imagem em píxeis e calcula quantos píxeis tem no total (largura × altura).", xp:10},
      {t:"Cartaz com Camadas", d:"Camadas e texto", f:"Cria um cartaz para um evento da escola com pelo menos 3 camadas: fundo, imagem e texto.\nGuarda no formato do programa (para manter as camadas) e exporta em PNG.", xp:10},
      {t:"Antes e Depois", d:"Recortar, redimensionar e ajustar", f:"Escolhe uma fotografia tua (sem outras pessoas): recorta-a, redimensiona-a mantendo a proporção e ajusta o brilho e o contraste.\nMostra o antes e o depois.", xp:10},
      {t:"Qual É o Formato?", d:"Formatos de imagem", f:"Exporta a mesma imagem em JPG e em PNG.\nCompara o tamanho dos ficheiros e a qualidade.\nExplica quando usarias cada formato.", xp:10}
    ],
    resumo:[
      "As imagens <b>matriciais</b> (bitmap ou raster), como as fotografias, são feitas de <b>píxeis</b> (pequenos quadrados de cor). Ao ampliar muito, ficam «aos quadradinhos». As imagens <b>vetoriais</b> são feitas de formas matemáticas (linhas, curvas) e podem ampliar-se sem perder qualidade.",
      "A <b>resolução</b> indica o número de píxeis (ex.: 1920 × 1080). Mais píxeis = mais pormenor e ficheiros maiores.",
      "<b>Formatos</b>: <b>JPG</b> (fotografias; compressão com perdas, ficheiros pequenos); <b>PNG</b> (sem perdas e com transparência; ótimo para grafismos e texto); <b>GIF</b> (poucas cores, pode ter animação); <b>SVG</b> (vetorial).",
      "Os editores trabalham com <b>camadas</b>: folhas transparentes empilhadas, que se editam separadamente (fundo, imagem, texto).",
      "Operações comuns: recortar, redimensionar (com a <b>proporção</b> bloqueada, para não deformar), rodar, ajustar o brilho e o contraste, selecionar partes, apagar o fundo e escrever texto.",
      "Guarda o trabalho no formato do programa (no GIMP, .xcf) para manter as camadas; <b>exporta</b> em JPG ou PNG para partilhar.",
      "Ao editar fotografias de outras pessoas, respeita o <b>direito à imagem</b>: é preciso autorização para as publicar."
    ],
    gloss:[
      ["píxel","O mais pequeno ponto de cor de uma imagem digital."],
      ["resolução","Número de píxeis de uma imagem (largura × altura)."],
      ["imagem matricial","Imagem feita de píxeis (ex.: fotografias)."],
      ["imagem vetorial","Imagem feita de formas matemáticas, que se amplia sem perder qualidade."],
      ["camada","Folha transparente onde se coloca uma parte da imagem."],
      ["compressão","Redução do tamanho de um ficheiro; pode ter perdas de qualidade (JPG) ou não (PNG)."],
      ["exportar","Gravar o trabalho num formato para partilhar (JPG, PNG…)."]
    ],
    quiz:[
      {q:"O que acontece quando se amplia muito uma fotografia (imagem matricial)?", opts:["Começam a ver-se os píxeis, como quadradinhos","Fica com mais pormenor","Transforma-se numa imagem vetorial","Nada muda"], correct:0, explain:"As imagens matriciais têm um número fixo de píxeis; ao ampliar, cada píxel aparece maior e a imagem fica «aos quadradinhos».", pista:"De que é feita uma fotografia digital?"},
      {q:"Que formato escolherias para um logótipo com fundo transparente?", opts:["PNG","JPG","MP3","DOCX"], correct:0, explain:"O PNG guarda sem perdas e aceita transparência. O JPG não tem transparência; MP3 é som e DOCX é texto.", irma:{q:"Que formato é mais adequado para uma fotografia de férias, com ficheiro pequeno?", opts:["JPG","PNG","GIF","TXT"], correct:0, explain:"O JPG comprime as fotografias com poucas perdas visíveis e ficheiros pequenos."}},
      {q:"Uma imagem tem 1920 × 1080 píxeis. Quantos píxeis tem no total?", opts:["2 073 600","3000","19 201 080","1 920 000"], correct:0, explain:"Multiplica a largura pela altura: 1920 × 1080 = 2 073 600 píxeis (cerca de 2 megapíxeis).", pista:"Largura × altura."},
      {q:"Para que servem as camadas num editor de imagem?", opts:["Para editar partes da imagem separadamente","Para aumentar a resolução","Para comprimir o ficheiro","Para imprimir mais depressa"], correct:0, explain:"Cada camada é como uma folha transparente: podes mudar o texto sem estragar o fundo, por exemplo."},
      {q:"Ao redimensionar uma fotografia, porque se deve manter a proporção?", opts:["Para a imagem não ficar esticada ou achatada","Para o ficheiro ficar maior","Para mudar as cores","Para criar camadas"], correct:0, explain:"Se mudares só a largura ou só a altura, as pessoas e os objetos ficam deformados. Com a proporção bloqueada, mudam as duas medidas na mesma razão."},
      {q:"Qual destas imagens se pode ampliar sem perder qualidade?", opts:["Uma imagem vetorial (SVG)","Uma fotografia em JPG","Uma fotografia em PNG","Um GIF animado"], correct:0, explain:"As imagens vetoriais são feitas de formas matemáticas: redesenham-se a qualquer tamanho sem perder nitidez."}
    ],
    compare:{
      left:{title:"🟦 Matricial", points:["Feita de píxeis","Fotografias (JPG, PNG)","Perde qualidade ao ampliar"]},
      right:{title:"📐 Vetorial", points:["Feita de formas matemáticas","Logótipos, ícones (SVG)","Amplia sem perder qualidade"]}
    },
    boss:"Login TIC 7: atividades e projetos de «Edição de imagem» (p. 94)"
  },
  {
    id:"d4", num:4, c:"m4", icon:"🎬",
    title:"Estúdio de Vídeo e Som",
    subtitle:"Edição de vídeo e som", pages:"Login TIC 7, capítulo 4 «Edição de vídeo e som» (pp. 56–75) e atividades (p. 110)",
    lead:"Um bom vídeo começa muito antes de gravar: com uma ideia, um guião e um storyboard. Neste mundo vais planear um vídeo, montá-lo numa linha de tempo com cortes, transições, títulos e som, e exportá-lo no formato certo, respeitando os direitos de autor da música.",
    missions:[
      {t:"Storyboard", d:"Planear um vídeo", f:"Planeia um vídeo de 1 minuto sobre um tema de uma disciplina.\nDesenha um storyboard com 6 quadros: o que se vê, o que se ouve e quanto tempo dura cada um.", xp:10},
      {t:"Cortar e Colar o Tempo", d:"A linha de tempo", f:"Grava 4 clipes curtos (sem filmar pessoas sem autorização) e monta-os numa linha de tempo.\nCorta o que sobra, junta uma transição e um título.", xp:10},
      {t:"Banda Sonora Livre", d:"Som e direitos de autor", f:"Procura uma música com licença livre para o teu vídeo.\nAjusta o volume para não tapar a narração.\nNos créditos finais, indica o autor e a licença.", xp:10},
      {t:"Exportar como um Profissional", d:"Formatos e resolução", f:"Exporta o vídeo em MP4, em 1280 × 720 e em 1920 × 1080.\nCompara o tamanho dos ficheiros e explica qual usarias para enviar por email.", xp:10}
    ],
    resumo:[
      "Antes de gravar: a <b>ideia</b>, o <b>guião</b> (o texto e as ações) e o <b>storyboard</b> (desenhos de cada plano, com a duração e o som).",
      "Um vídeo é uma sequência de imagens (<b>fotogramas</b>) mostradas muito depressa: 24, 25 ou 30 fotogramas por segundo (<b>fps</b>).",
      "Nos editores de vídeo, monta-se tudo numa <b>linha de tempo</b> (timeline), com faixas de vídeo e de áudio: cortar, dividir, ordenar clipes, juntar <b>transições</b>, <b>títulos</b> e efeitos.",
      "<b>Som</b>: a narração, a música e os efeitos ficam em faixas separadas; ajusta-se o volume de cada uma. Formatos de som: <b>MP3</b> (comprimido, com perdas) e <b>WAV</b> (sem compressão, ficheiros grandes).",
      "<b>Exportar</b> (ou renderizar) junta tudo num ficheiro final, normalmente <b>MP4</b>. Resoluções: 1280 × 720 (HD) e 1920 × 1080 (Full HD). Mais resolução = ficheiro maior.",
      "<b>Direitos de autor</b>: a maioria das músicas e vídeos é protegida. Usa música com licença livre ou criada por ti e indica os créditos.",
      "<b>Direito à imagem</b>: não filmes nem publiques pessoas sem a sua autorização (e, para menores, a dos encarregados de educação)."
    ],
    gloss:[
      ["guião","Texto que descreve o que se diz e o que acontece num vídeo."],
      ["storyboard","Sequência de desenhos que mostra cada plano de um vídeo."],
      ["fotograma","Cada uma das imagens que formam um vídeo."],
      ["fps","Fotogramas por segundo."],
      ["linha de tempo","Zona do editor onde se ordenam os clipes, os sons e os títulos."],
      ["transição","Efeito de passagem de um clipe para outro."],
      ["renderizar","Processar e exportar o vídeo final num ficheiro."]
    ],
    quiz:[
      {q:"O que é um storyboard?", opts:["Uma sequência de desenhos que planeia cada plano do vídeo","O ficheiro final do vídeo","Um tipo de microfone","A música de fundo"], correct:0, explain:"O storyboard planeia o vídeo plano a plano, com desenhos, a duração e o som, antes de gravar.", pista:"É como uma banda desenhada do vídeo."},
      {q:"O que quer dizer «30 fps»?", opts:["30 fotogramas (imagens) por segundo","30 segundos de vídeo","30 faixas de som","30 minutos de exportação"], correct:0, explain:"fps = frames (fotogramas) por segundo. A 30 fps, cada segundo de vídeo tem 30 imagens.", irma:{q:"Quantos fotogramas tem um vídeo de 10 segundos a 25 fps?", opts:["250","35","2,5","25"], correct:0, explain:"10 segundos × 25 fotogramas por segundo = 250 fotogramas."}},
      {q:"Onde se ordenam os clipes, os sons e os títulos num editor de vídeo?", opts:["Na linha de tempo","Na reciclagem","No navegador","No storyboard"], correct:0, explain:"A linha de tempo (timeline) é onde se monta o vídeo: clipes, faixas de som, títulos e transições. O storyboard é o plano em papel."},
      {q:"Qual é o formato mais comum para exportar e partilhar um vídeo?", opts:["MP4","MP3","PNG","DOCX"], correct:0, explain:"O MP4 é o formato de vídeo mais usado. MP3 é só som; PNG é imagem; DOCX é texto.", irma:{q:"Que formato de som não tem compressão (ficheiros grandes)?", opts:["WAV","MP3","JPG","MP4"], correct:0, explain:"O WAV guarda o som sem compressão. O MP3 comprime, com perdas, e fica muito mais pequeno."}},
      {q:"Podes pôr a tua música preferida, de um artista conhecido, num vídeo para publicar?", opts:["Não, sem autorização, porque tem direitos de autor; usa música com licença livre","Sim, se for menos de 10 segundos","Sim, se puseres o nome do artista","Sim, se o vídeo for para a escola"], correct:0, explain:"As músicas comerciais têm direitos de autor; citar o artista não chega. Usa música com licença livre ou criada por ti."},
      {q:"Qual destas resoluções é Full HD?", opts:["1920 × 1080","1280 × 720","640 × 480","3840 × 2160"], correct:0, explain:"Full HD é 1920 × 1080. 1280 × 720 é HD e 3840 × 2160 é 4K."}
    ],
    compare:{
      left:{title:"📝 Antes de gravar", points:["Ideia e guião","Storyboard","Pedir autorizações"]},
      right:{title:"✂️ Depois de gravar", points:["Montar na linha de tempo","Som, títulos e transições","Exportar em MP4, com créditos"]}
    },
    boss:"Login TIC 7: atividades e projetos de «Edição de vídeo e som» (p. 110)"
  },
  {
    id:"d5", num:5, c:"m5", icon:"🧊",
    title:"Oficina 3D",
    subtitle:"Modelação 3D", pages:"Login TIC 7, capítulo 5 «Modelação 3D» (pp. 76–93) e atividades (p. 126)",
    lead:"Construir com blocos num jogo já é pensar em 3D. Na modelação 3D, criam-se objetos no computador a partir de formas básicas, que se movem, rodam, escalam, juntam e furam, e que depois se podem imprimir numa impressora 3D. O manual usa uma aplicação no navegador que pede conta; por isso não a ligamos aqui.",
    missions:[
      {t:"Os Três Eixos", d:"X, Y e Z", f:"Num papel, desenha os três eixos (X, Y e Z) a partir de um canto do teu quarto.\nIndica as medidas do quarto em cada eixo (largura, profundidade e altura).", xp:10},
      {t:"Porta-Chaves", d:"Formas, texto e furos", f:"Com um adulto, numa aplicação de modelação 3D, cria um porta-chaves: uma placa, as tuas iniciais em relevo e um furo para a argola.\nSe não puderes usar a aplicação, desenha-o em perspetiva com as medidas.", xp:10},
      {t:"Casa de Formas", d:"Agrupar formas básicas", f:"Modela (ou desenha em perspetiva) uma casa só com formas básicas: cubo, prisma triangular e cilindro.\nLista as operações que usaste: mover, rodar, escalar, agrupar.", xp:10}
    ],
    resumo:[
      "Na <b>modelação 3D</b>, os objetos têm três dimensões: largura (eixo <b>X</b>), profundidade (eixo <b>Y</b>) e altura (eixo <b>Z</b>), medidas habitualmente em milímetros.",
      "Parte-se de <b>formas básicas</b> (cubo, cilindro, esfera, cone, pirâmide, texto) colocadas num <b>plano de trabalho</b>.",
      "Operações: <b>mover</b>, <b>rodar</b>, <b>escalar</b> (mudar o tamanho), <b>alinhar</b>, <b>duplicar</b>, <b>agrupar</b> (juntar várias formas numa só) e usar formas como <b>furo</b> (subtrair: abrir buracos noutra forma).",
      "Para imprimir, exporta-se o modelo num formato próprio, como o <b>STL</b>. A <b>impressora 3D</b> constrói o objeto camada a camada, normalmente com um filamento de plástico derretido.",
      "Usos: protótipos, peças de substituição, próteses, maquetas, arte, ensino.",
      "Antes de imprimir, verifica as medidas e se o objeto tem uma base estável. Ao usar aplicações online, pede autorização a um adulto e protege os teus dados."
    ],
    gloss:[
      ["modelação 3D","Criação de objetos com três dimensões no computador."],
      ["eixo","Cada uma das direções do espaço: X, Y e Z."],
      ["escalar","Mudar o tamanho de uma forma."],
      ["agrupar","Juntar várias formas numa só."],
      ["furo","Forma usada para subtrair (abrir um buraco) noutra forma."],
      ["STL","Formato de ficheiro usado para impressão 3D."],
      ["impressora 3D","Máquina que constrói objetos camada a camada."]
    ],
    quiz:[
      {q:"Em modelação 3D, que dimensão corresponde normalmente ao eixo Z?", opts:["A altura","A largura","A cor","O peso"], correct:0, explain:"Em geral, X é a largura, Y a profundidade e Z a altura.", pista:"Z aponta para cima."},
      {q:"Queres fazer um buraco numa placa para uma argola. Que operação usas?", opts:["Usar um cilindro como furo e agrupar com a placa","Escalar a placa","Rodar a placa","Mudar a cor da placa"], correct:0, explain:"Uma forma definida como «furo», agrupada com a placa, subtrai esse volume e abre o buraco.", irma:{q:"Que operação junta várias formas numa só peça?", opts:["Agrupar","Escalar","Duplicar","Rodar"], correct:0, explain:"Agrupar junta as formas numa só peça, que se move e escala como um todo."}},
      {q:"Em que formato se exporta normalmente um modelo para imprimir em 3D?", opts:["STL","MP3","JPG","PDF"], correct:0, explain:"O STL é o formato mais comum para impressão 3D. MP3 é som, JPG é imagem e PDF é documento."},
      {q:"Como constrói uma impressora 3D um objeto?", opts:["Camada a camada","De uma só vez, com um molde","Cortando um bloco de madeira","Pintando uma folha"], correct:0, explain:"A impressora 3D deposita material camada a camada, de baixo para cima, até completar o objeto."},
      {q:"O que faz a operação «escalar»?", opts:["Muda o tamanho da forma","Muda a cor","Muda a posição","Apaga a forma"], correct:0, explain:"Escalar aumenta ou diminui o tamanho da forma; mover muda a posição.", irma:{q:"Que operação muda a posição de uma forma sem mudar o tamanho?", opts:["Mover","Escalar","Agrupar","Furo"], correct:0, explain:"Mover desloca a forma ao longo dos eixos X, Y e Z, sem lhe mudar o tamanho."}}
    ],
    compare:{
      left:{title:"🧱 Formas sólidas", points:["Acrescentam volume","Cubo, cilindro, esfera, texto","Constroem o objeto"]},
      right:{title:"🕳️ Formas furo", points:["Retiram volume","Usadas para abrir buracos","Agrupadas com as sólidas"]}
    },
    boss:"Login TIC 7: atividades e projetos de «Modelação 3D» (p. 126)"
  },
  {
    id:"d6", num:6, c:"m6", icon:"🛡️",
    title:"Cidadão Digital",
    subtitle:"Segurança, privacidade e respeito em ambientes digitais", pages:"Aprendizagens Essenciais de TIC (cidadania digital); Login TIC 7, «Direito à imagem» (p. 22)",
    lead:"Nos jogos online e nas redes há regras para jogar limpo e para te protegeres. Neste mundo vais criar palavras-passe fortes, proteger os teus dados, reconhecer mensagens falsas, perceber a tua pegada digital, respeitar os direitos de autor e o direito à imagem e saber o que fazer perante o ciberbullying.",
    missions:[
      {t:"Palavra-Passe Blindada", d:"Palavras-passe seguras", f:"Inventa (sem a usares de verdade!) uma palavra-passe forte com uma frase longa e fácil de lembrar, como «3 gatos comem bolachas às 9!».\nExplica porque é melhor do que «12345» ou do que o teu nome.", xp:10},
      {t:"Detetor de Burlas", d:"Phishing e mensagens falsas", f:"Com um adulto, analisa um email ou mensagem suspeita (ou um exemplo da internet).\nLista 4 sinais de alerta: pressa, prémios, pedidos de dados, endereço estranho, erros…", xp:10},
      {t:"A Minha Pegada Digital", d:"Privacidade e pegada digital", f:"Revê as definições de privacidade de uma aplicação que uses, com um adulto.\nEscreve 5 informações que nunca deves publicar (morada, escola, horários, palavras-passe, localização em tempo real).", xp:10},
      {t:"Jogar Limpo", d:"Ciberbullying e respeito", f:"Escreve 5 regras de respeito para um grupo de conversa da turma ou para um jogo online.\nIndica a quem podes pedir ajuda se fores vítima ou testemunha de ciberbullying.", xp:10}
    ],
    resumo:[
      "Uma <b>palavra-passe forte</b> é longa (12 ou mais caracteres), mistura letras, números e símbolos ou é uma frase longa, não usa dados pessoais e é diferente em cada conta. Nunca se partilha, nem com amigos. A <b>autenticação de dois fatores</b> acrescenta proteção.",
      "<b>Dados pessoais</b> (nome completo, morada, escola, telefone, fotografias, localização) devem ser protegidos. Antes de publicar, pergunta: «Mostraria isto a qualquer desconhecido?»",
      "O <b>phishing</b> é uma burla que tenta roubar dados com mensagens falsas: pressa («a tua conta vai ser bloqueada!»), prémios inesperados, pedidos de palavras-passe, endereços estranhos e ligações suspeitas. Na dúvida, não carregues e fala com um adulto.",
      "A <b>pegada digital</b> é o rasto que deixamos na internet (publicações, comentários, fotografias). É difícil de apagar e pode ser vista por outras pessoas, mesmo anos depois.",
      "O <b>ciberbullying</b> é a agressão repetida através de meios digitais (insultos, ameaças, exclusão, partilha de imagens sem autorização). O que fazer: não responder, guardar as provas, bloquear, denunciar na plataforma e contar a um adulto de confiança. Em Portugal há a <b>Linha Internet Segura</b> (800 21 90 90, gratuita).",
      "<b>Direitos de autor</b>: as obras (textos, imagens, músicas, vídeos, jogos) pertencem aos seus autores. As licenças <b>Creative Commons</b> dizem o que se pode fazer: BY (atribuir o autor), SA (partilhar nos mesmos termos), NC (uso não comercial), ND (sem alterações).",
      "<b>Direito à imagem</b>: ninguém deve ser fotografado ou filmado para publicação sem autorização; para menores, é precisa também a autorização dos encarregados de educação."
    ],
    gloss:[
      ["palavra-passe","Código secreto que protege uma conta."],
      ["autenticação de dois fatores","Confirmação da entrada numa conta com um segundo passo (ex.: um código no telemóvel)."],
      ["phishing","Burla que usa mensagens falsas para roubar dados."],
      ["pegada digital","Rasto de informação que deixamos na internet."],
      ["ciberbullying","Agressão repetida através de meios digitais."],
      ["Creative Commons","Licenças que dizem como se pode usar uma obra."],
      ["direito à imagem","Direito de cada pessoa a decidir se a sua imagem é captada e publicada."],
      ["dados pessoais","Informação que identifica uma pessoa (nome, morada, fotografia, localização…)."]
    ],
    quiz:[
      {q:"Qual destas palavras-passe é mais segura?", opts:["Tr3s-gatos-comem-bolachas!","12345678","o teu nome e o ano em que nasceste","password"], correct:0, explain:"Uma frase longa com letras, números e símbolos é difícil de adivinhar e fácil de lembrar. As outras são das primeiras que os atacantes experimentam.", pista:"Mais longa e sem dados pessoais."},
      {q:"Recebes uma mensagem: «Ganhaste um telemóvel! Carrega aqui nos próximos 10 minutos e escreve a tua palavra-passe.» O que fazes?", opts:["Não carrego, não respondo e mostro a um adulto","Carrego depressa, antes que acabe o tempo","Respondo a perguntar se é verdade","Partilho com os amigos"], correct:0, explain:"Pressa, prémios inesperados e pedidos de palavra-passe são sinais de phishing. Nenhum serviço sério pede a palavra-passe por mensagem.", irma:{q:"Qual destes é um sinal de alerta de phishing?", opts:["Pedirem a tua palavra-passe por mensagem","A mensagem vir de um professor teu, pelo email da escola, sem pedir dados","Uma newsletter que subscreveste","Uma mensagem sem ligações"], correct:0, explain:"Nenhum serviço legítimo pede a palavra-passe por mensagem. Isso é típico de phishing."}},
      {q:"O que deves fazer se fores vítima de ciberbullying?", opts:["Não responder, guardar as provas, bloquear, denunciar e contar a um adulto","Responder com insultos","Apagar tudo e não contar a ninguém","Partilhar as mensagens com toda a turma"], correct:0, explain:"Guardar as provas, bloquear, denunciar na plataforma e contar a um adulto de confiança. Em Portugal, também podes ligar para a Linha Internet Segura (800 21 90 90)."},
      {q:"O que é a pegada digital?", opts:["O rasto que deixamos na internet com o que publicamos e fazemos","Uma marca no ecrã","O número de passos registados no telemóvel","Um tipo de vírus"], correct:0, explain:"Tudo o que publicamos, comentamos ou partilhamos fica registado e pode ser visto por outros, às vezes durante muitos anos."},
      {q:"Uma imagem tem a licença Creative Commons «BY». O que tens de fazer para a usar?", opts:["Indicar o autor (atribuição)","Pagar ao autor","Não a podes usar","Mudar-lhe as cores"], correct:0, explain:"BY quer dizer atribuição: podes usar, desde que indiques o autor. NC proíbe o uso comercial e ND proíbe alterações.", irma:{q:"Uma imagem tem a licença Creative Commons «ND». O que não podes fazer?", opts:["Alterá-la","Indicar o autor","Usá-la num trabalho escolar","Vê-la"], correct:0, explain:"ND (No Derivatives) quer dizer sem alterações: podes usá-la tal como está, com atribuição."}},
      {q:"Tiraste uma fotografia engraçada a um colega na escola. Podes publicá-la?", opts:["Só com a autorização dele (e dos encarregados de educação)","Sim, porque foste tu que a tiraste","Sim, se não puseres o nome","Sim, se for só para os amigos"], correct:0, explain:"O direito à imagem protege cada pessoa: é preciso autorização para publicar fotografias de alguém; sendo menor, também dos encarregados de educação."}
    ],
    compare:{
      left:{title:"✅ Hábitos seguros", points:["Palavras-passe fortes e diferentes","Pensar antes de publicar","Pedir ajuda a um adulto"]},
      right:{title:"⚠️ Riscos", points:["Partilhar palavras-passe ou a localização","Carregar em ligações suspeitas","Publicar imagens de outros sem autorização"]}
    },
    boss:"Um cartaz para a turma com as 5 regras de ouro da segurança digital (podes fazê-lo no 🖼️ Estúdio de Imagem)"
  }
];
