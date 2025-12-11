import { expect } from "@playwright/test";
import { Dado, Quando, Entao } from "../support/bdd-fixtures";

Dado("que acesso a página de login", async ({ loginPage }) => {
  await loginPage.navigate();
});

Quando("tento logar com email {string} e senha {string}", async ({ loginPage }, email, password) => {
  await loginPage.performLogin(email, password);
});

Quando("realizo login com as credenciais do administrador", async ({ loginPage }) => {
  await loginPage.performLogin(process.env.ADMIN_EMAIL as string, process.env.ADMIN_PASSWORD as string);
});

Entao("devo ver uma mensagem de erro", async ({ loginPage }) => {
  await loginPage.errorMessage.isVisible();
});

Entao("devo ver a página de produtos", async ({ page }) => {
  await expect(page).toHaveURL(/home/);
});
