import { test as base, createBdd } from "playwright-bdd";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";
import fs from "fs";
import path from "path";

// Define o tipo das suas fixtures
type MyFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  screenShot: (name?: string) => Promise<void>; // Adicionado tipo para a função de screenshot
};

// Estende o test base do Playwright
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  // Fixture personalizada para capturar screenshots
  screenShot: async ({ page }, use, testInfo) => {
    await use(async (name?: string) => {
      const screenshotName = name
        ? `${name}.png`
        : `screenshot-${testInfo.title.replace(/\s+/g, "-")}-${Date.now()}.png`;

      // Garante que a pasta existe antes de salvar
      // Ajuste: Usa path.join para garantir compatibilidade entre Windows/Linux
      const screenshotDir = path.join("reports", "screenshots");

      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
      }

      const screenshotPath = path.join(screenshotDir, screenshotName);

      await page.screenshot({ path: screenshotPath, fullPage: true });

      // Anexa ao relatório HTML
      await testInfo.attach(name || "screenshot", {
        path: screenshotPath,
        contentType: "image/png",
      });
    });
  },
});

export const { Given, When, Then } = createBdd(test);

// Aliases para escrever os Steps em Português
export const Dado = Given;
export const Quando = When;
export const E = When;
export const Entao = Then;
