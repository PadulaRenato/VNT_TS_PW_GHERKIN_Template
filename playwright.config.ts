import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";
import path from "path";

// Carrega variáveis de ambiente do arquivo .env na raiz do projeto
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Configuração do BDD: Define onde estão as features e os steps
// O defineBddConfig retorna o caminho do diretório onde os testes gerados serão salvos (por padrão .features-gen)
const testDir = defineBddConfig({
  features: "src/features/*.feature",
  steps: "src/steps/*.ts",
  importTestFrom: "./src/support/bdd-fixtures.ts",
});

// Usamos defineConfig para garantir a tipagem correta e compatibilidade
export default defineConfig({
  // Aponta o diretório de testes para a pasta gerada pelo BDD
  testDir,

  reporter: [["html", { outputFolder: "reports/html", open: "never" }]],

  // Centralizando artefatos na pasta reports
  outputDir: "reports/test-results",

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 4,

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: process.env.BASE_URL,

    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  globalSetup: "./src/support/globalSetup.ts",
  globalTeardown: "./src/support/globalTeardown.ts",
});
