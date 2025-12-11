# 📘 Template de Automação - Playwright + TypeScript

Este repositório serve como base para a criação de projetos de automação de testes E2E utilizando **Playwright** com **TypeScript**. Ele já vem configurado com boas práticas como Page Objects, Fixtures customizadas, geração de massa de dados e relatórios.

---

## 📂 Estrutura do Projeto

Entenda onde cada arquivo deve ficar:

```text
📦 raiz
 ┣ 📂 src
 ┃ ┣ 📂 features    # Arquivos Gherkin (.feature)
 ┃ ┣ 📂 steps       # Definição dos passos (Step Definitions)
 ┃ ┣ 📂 pages       # Page Objects (Mapeamento de elementos e ações)
 ┃ ┣ 📂 queries     # Consultas ao Banco de Dados (Encapsulamento SQL)
 ┃ ┣ 📂 support     # Configurações auxiliares
 ┃ ┃ ┣ 📜 bdd-fixtures.ts  # Injeção de dependência das páginas e steps
 ┃ ┃ ┣ 📜 sqlserverUtils.ts # Utilitário de conexão e execução de queries
 ┃ ┃ ┣ 📜 utils.ts         # Funções úteis (Screenshots, Faker, etc)
 ┃ ┃ ┣ 📜 globalSetup.ts   # Configurações antes da suíte (ex: massa de dados)
 ┃ ┃ ┗ 📜 globalTeardown.ts # Limpeza após a suíte
 ┣ 📂 reports       # Onde os relatórios e screenshots são salvos
 ┣ 📜 .env          # Variáveis de ambiente (URLs, Senhas)
 ┣ 📜 .prettierrc   # Regras de formatação de código
 ┣ 📜 playwright.config.ts # Configuração principal do Playwright
 ┗ 📜 tsconfig.json # Configuração do TypeScript
```

## 🛠️ Como Criar um Novo Teste (BDD)

### 1. Crie o Arquivo .feature (`src/features`)

Lembre-se de adicionar `# language: pt` para escrever em português.

```gherkin
# language: pt
Funcionalidade: Login

    Cenario: Login com sucesso
        Dado que estou na pagina de login
        Quando realizo login com credenciais validas
        Entao devo ver a dashboard
```

### 2. Implemente os Steps (`src/steps`)

Use os comandos `Dado`, `Quando`, `Entao` importados de `src/support/bdd-fixtures.ts`.

```typescript
import { Dado, Quando, Entao } from "../support/bdd-fixtures";

Dado("que estou na pagina de login", async ({ loginPage }) => {
  await loginPage.navigate();
});
```

### 3. Gere e execute os testes

Utilize os scripts configurados no `package.json` para gerar e rodar automaticamente.

```bash
npm test
```

---

---

<!-- A PARTIR DAQUI É O TEMPLATE PARA O README DO PROJETO FINAL -->

# 🚀 [Nome do Projeto] - Automação de Testes

Projeto de automação de testes End-to-End para validar o fluxo de [Descreva o objetivo, ex: Vendas, Cadastro, etc].

## 🌐 Aplicação Sob Teste

O site utilizado para os testes de exemplo é um ambiente controlado criado para fins didáticos:

- **URL:** [https://padularenato.github.io/test/home.html](https://padularenato.github.io/test/home.html)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (Versão 16 ou superior)
- [VS Code](https://code.visualstudio.com/) (Recomendado)
- Extensão "Playwright Test for VSCode"

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone [url-do-repo]
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Instale os navegadores do Playwright:
   ```bash
   npx playwright install
   ```

## ⚙️ Configuração (.env)

Crie um arquivo `.env` na raiz do projeto (baseado no exemplo abaixo) e preencha as variáveis:

```ini
BASE_URL=https://padularenato.github.io/test/home.html

# Configurações de Banco de Dados (Mock ou Real)
DB_HOST=https://padularenato.github.io/test/
DB_DATABASE=users.json
DB_USER=test_runner
DB_PASSWORD=mock_secure_password

# As variáveis ADMIN_EMAIL e ADMIN_PASSWORD são injetadas automaticamente
# pelo Global Setup consultando o banco de dados.
```

## ▶️ Executando os Testes (BDD)

Para facilitar a execução e evitar erros de sintaxe entre terminais (PowerShell/Bash), utilize os scripts do NPM:

### Rodar todos os testes

Gera os arquivos spec e executa o Playwright em modo headless:

```bash
npm test
```

### Rodar em modo UI (Interativo)

Ótimo para debugar passo a passo e ver o navegador:

```bash
npm run test:ui
```

### Rodar em modo Debug

Abre o inspector do Playwright:

```bash
npm run test:debug
```

### Ver o relatório HTML

```bash
npx playwright show-report reports/html
```

## 🧩 Funcionalidades do Framework

- **BDD (Gherkin):** Escrita de testes em linguagem natural (Português).
- **Page Objects:** Estrutura organizada por páginas.
- **Queries:** Camada de abstração para consultas SQL (`src/queries`).
- **Fixtures:** Injeção automática de páginas nos testes (`bdd-fixtures.ts`).
- **Faker:** Geração de massa de dados dinâmica (`src/support/utils.ts`).
- **Screenshots:** Captura automática anexada ao relatório.
