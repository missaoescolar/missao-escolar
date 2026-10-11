# Cópias de progresso — 11 de outubro de 2026

Ponto de recuperação Git antes desta tarefa: `dfca62d`.

## Utilização

Em `pais.html#guardar`, «Descarregar cópia» guarda um ficheiro JSON. Para recuperar, escolha o ficheiro, leia a pré-visualização e toque em «Recuperar esta cópia».

Se a gravação falhar numa página de estudo, use o botão ⬇ no próprio aviso. A cópia inclui as missões e os ganhos da Arena pendentes **nessa página**, sem confirmar falsamente a gravação nem limpar a fila de nova tentativa.

Antes de importar, guarde ou exporte o progresso dos outros separadores e feche-os. A importação substitui os grupos presentes no ficheiro, incluindo escolhas anteriormente desmarcadas; não soma XP a uma cópia antiga. Grupos ausentes não são alterados. Os valores substituídos são preservados exatamente em `_antes_importar_<chave>` e sufixos numéricos, sem sobrescrever cópias anteriores.

## Alterações

- `armazem.js`: exportação sem escrita no armazenamento, inclusão de operações pendentes, cache dos últimos valores lidos/gravados para cópias parciais em caso de bloqueio de leitura, descarregamento no aviso, validação do ficheiro e importação por chave com Web Locks e preservação confirmada antes da substituição.
- `pais.html`: controlos de cópia/recuperação e instruções sobre falhas e separadores.
- `progresso.js`: seleção de ficheiro, pré-visualização, estado da recuperação e nova tentativa após falha.
- `tests/persistencia.cjs`: testes de exportação/importação e regressão.

As chaves e formatos existentes permanecem iguais. A lista de exportação restringe-se aos dados da Missão Escolar e às suas cópias de recuperação; dados de outras aplicações não são incluídos. Valores danificados são exportados como originais e recuperados em `_estragado_…`, sem os apresentar como progresso reparado. Não foram modificados ficheiros da Oficina, conteúdos curriculares, XP ou CSS. Não houve publicação.

## Testes

Executar: `node standalone/tests/persistencia.cjs --browser`.

Resultado final: **36 testes passaram** (22 em memória e 14 no Edge 155.0.4283.45, com perfil isolado e dois separadores reais). `node --check` passou em `armazem.js` e `progresso.js`; `git diff --check` passou.

Cobertura adicional: exportação de ganhos pendentes sem duplicação ou confirmação; cópia parcial com leitura bloqueada; originais danificados; formatos e cópias locais preservados; rejeição de ficheiros inválidos, chaves externas e propriedades perigosas; importação bloqueada por progresso local pendente; falha de preservação, recuperação e repetição idempotente; descarregamento JSON real no Edge; seleção de ficheiro, pré-visualização, falha de importação e nova tentativa pelos controlos de Para pais.

## Limitações

- A exportação é manual. Fechar uma página sem gravação bem-sucedida nem ficheiro descarregado ainda pode perder alterações em memória.
- Cada separador só consegue exportar as suas próprias operações pendentes. A área Para pais exporta os dados guardados; use o aviso da página onde ocorreu a falha para incluir os seus ganhos pendentes.
- Se a leitura do armazenamento estiver bloqueada, a cópia usa os últimos valores conhecidos e identifica as chaves indisponíveis. Pode não conter alterações recentes de outro separador ou dados nunca lidos nessa página.
- A Oficina usa outra API e os seus rascunhos não gravados não integram esta fila. A cópia inclui rascunhos e textos já guardados; para um texto ainda não gravado, utilize o botão .txt da Oficina.
- A importação não é uma transação global. Pode recuperar alguns grupos e falhar noutros; o estado indica recuperação incompleta e permite repetir usando o mesmo ficheiro. O original de cada grupo é preservado antes da substituição; se essa preservação falhar, o grupo não é substituído.
- É necessário fechar os outros separadores antes de importar, para evitar que alterações em curso voltem a gravar sobre os dados recuperados. Web Locks serializa cada gravação, mas não suspende outras páginas. Sem Web Locks, não há exclusão entre separadores.
- O ficheiro pode incluir textos pessoais; guarde-o num local privado. Limite de importação: 20 MB. O descarregamento depende das permissões do browser e deve ser confirmado na pasta de transferências.
