# Correções de persistência — 11 de outubro de 2026

## Ponto de recuperação

Repositório Git: `standalone/.git`.
Commit anterior às alterações desta revisão: `5c7dcc1`.
Este commit inclui a versão encontrada, que já tinha alterações de persistência e testes por registar. O ponto anterior `a6ae173` também continua disponível.

## Ficheiros afetados

- `arena.js`: mantém ganhos não confirmados em memória e só avança a base após gravação bem-sucedida. A fusão soma diferenças de XP/respostas/rondas, reúne medalhas e temas e conserva os melhores resultados. Atualizações de outro separador não descartam ganhos pendentes; uma falha de leitura também não apaga a base confirmada.
- `app.js`: separa escolhas pendentes de missões confirmadas. Uma alteração por guardar fica identificada na missão, sem confirmar o respetivo XP ou celebrar a conclusão antes do sucesso. Mantém escolhas locais durante atualizações remotas e conserva a vista confirmada se a leitura remota falhar. Preserva a formatação original dos títulos.
- `armazem.js`: mantém operações pendentes, oferece nova tentativa no aviso e tenta novamente por temporizador, foco, conectividade e atualização de armazenamento. Usa Web Locks para serializar a fusão entre separadores. O aviso permanece enquanto existir progresso pendente, incluindo a espera pelo lock. Alterações enfileiradas durante a conclusão de uma gravação são retomadas imediatamente. Disponibiliza leitura com indicação de sucesso e informa corretamente se a cópia de dados danificados falhou.
- `tests/persistencia.cjs`: testes de regressão sem dependências adicionais, com simulação de armazenamento e execução no Edge em perfil temporário isolado.
- `RELATORIO-PERSISTENCIA.md`: este relatório.

As chaves e formatos de progresso existentes permanecem compatíveis. Um original danificado só pode ser substituído depois de uma cópia exata confirmada numa chave `_estragado_…`; cópias anteriores não são sobrescritas.

## Validação

Comando completo: `node standalone/tests/persistencia.cjs --browser`, executado a partir da pasta principal.

Resultado: **29 testes passaram**, sendo 16 em memória e 13 no Edge 155.0.4283.45.

Cobertura:

- Falhas repetidas por quota e bloqueio, incluindo falha de leitura.
- Recuperação de XP, medalhas, níveis, estrelas, recordes, temas, preferências e contadores sem duplicação.
- Missões pendentes, alterações repetidas, XP confirmado e recuperação pelo botão.
- Aviso persistente, temporizador, foco e proteção ao sair com progresso pendente.
- Dois separadores reais: gravações simultâneas de XP e missões, fusão de alterações independentes e recuperação após uma falha local.
- Falha de leitura após notificação remota: estado confirmado mantido e ganhos posteriores corretamente somados.
- JSON e estruturas danificadas; cópia bloqueada impede substituição; originais e cópias anteriores conservados.
- Datas de atividade sem duplicação e APIs existentes compatíveis.
- Recarregamento e abertura de novo separador depois de gravação confirmada.
- Verificação de compatibilidade da Oficina de Escrita, sem alterar os seus ficheiros.
- Ausência de exceções JavaScript não tratadas nos cenários do navegador.

`node --check` passou nos três ficheiros de produção. `git diff --check` não encontrou erros de espaços.

## Limitações

- Alterações pendentes existem apenas em memória: fechar, atualizar a página ou terminar o browser antes do sucesso pode perdê-las. O aviso e a proteção de saída ajudam, mas o browser controla a apresentação dessa confirmação.
- Sem Web Locks, a fusão continua a funcionar em tentativas sequenciais, mas não há garantia de exclusão entre gravações simultâneas de separadores. Os testes reais foram executados com Web Locks disponível.
- Alterações concorrentes na mesma missão ou preferência ficam com o valor da última gravação serializada; o formato existente não mantém um histórico dessas escolhas.
- Dados danificados são preservados integralmente como texto, mas não são reparados automaticamente. Se não houver espaço ou autorização para guardar a cópia, o original fica intacto e a gravação permanece pendente.
- As falhas foram injetadas nas APIs do armazenamento; não foram simulados encerramentos abruptos do sistema nem todos os browsers/dispositivos.

Não foram alterados conteúdos curriculares, regras ou valores de XP, CSS ou ficheiros da Oficina. Não foi implementada exportação/importação, nem realizada publicação no GitHub Pages. Os testes usaram dados isolados, sem aceder ao progresso do perfil habitual.
