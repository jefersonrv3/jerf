# Portal do Aluno (MVP)

Portal simples para o aluno acompanhar propostas, financiamento, pagamentos, documentos e atendimento.
Feito com **React + Vite**. Hoje usa **dados mockados**, mas já está preparado para ler uma API.

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

```bash
# 1. instalar dependências
npm install

# 2. criar o arquivo de ambiente (se ainda não existir)
cp .env.example .env

# 3. rodar em modo desenvolvimento
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).
No login, qualquer e-mail e senha funcionam (é mockado).

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist
npm run preview   # testa a versão de produção
```

## Estrutura de pastas

```
src/
  main.jsx          # ponto de entrada
  App.jsx           # lista de rotas
  pages/            # uma tela por arquivo
  components/       # peças reutilizáveis (Layout, Sidebar, Card, Badge...)
  hooks/            # useFetch: controla carregando / erro / dados
  services/         # acesso aos dados (aqui troca mock por API)
  mocks/            # dados fictícios
  utils/            # funções auxiliares (formatar moeda e data)
  styles/           # CSS global
```

Regra principal: **as páginas nunca importam de `mocks/`**. Elas chamam funções de `services/`.

## Como funciona o mock e a troca para a API

Cada service decide a fonte dos dados pela variável `VITE_USE_MOCK` do `.env`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_USE_MOCK=true
```

- `true`: devolve os dados de `src/mocks/` (com um pequeno atraso simulado).
- `false`: chama a API real em `VITE_API_URL`.

Exemplo (`src/services/proposalService.js`):

```js
export function getProposals() {
  return USE_MOCK ? fakeDelay(proposalsMock) : apiGet('/proposals')
}
```

Para usar a API real:

1. Coloque `VITE_USE_MOCK=false` e a URL correta em `VITE_API_URL`.
2. Ajuste os endpoints em `src/services/` se a API for diferente. Cada função traz o endpoint esperado em um comentário.
3. Se o formato do JSON da API for diferente do mock, converta os dados dentro do service. As páginas não precisam mudar.
4. Se a API exigir autenticação, adicione o token no `src/services/api.js`.

Endpoints esperados:

| Função | Endpoint |
| --- | --- |
| getStudent / updateStudent | GET / PUT `/student` |
| getProposals | GET `/proposals` |
| getProposalById | GET `/proposals/:id` |
| getFinancing | GET `/financing` |
| getClosing | GET `/financing/closing` |
| getPayments | GET `/payments` |
| getOverdueDetail | GET `/payments/overdue` |
| getSupportTopics | GET `/support/topics` |
| getRenewalOptions | GET `/renewal` |
| login | POST `/auth/login` (ainda mockado) |

Os botões de ação (enviar arquivo, emitir boleto etc.) usam `mockAction` em `src/utils/mockAction.js`. Troque por chamadas reais quando a API existir.

## Como adicionar uma nova tela

1. Crie `src/pages/MinhaTela.jsx`.
2. Se precisar de dados, crie o mock em `src/mocks/` e uma função em `src/services/`.
3. Na página, use `useFetch(suaFuncaoDoService)` e o componente `AsyncState` para tratar carregando, erro e vazio.
4. Registre a rota em `src/App.jsx`.
5. Adicione o link no menu em `src/components/Sidebar.jsx`.

## Telas

Login, Visão geral, Meus dados, Minhas propostas, Detalhe da proposta, Meu financiamento,
Pagamentos, Renovação, Documentos, Atendimento, Encerramento e Logout.
