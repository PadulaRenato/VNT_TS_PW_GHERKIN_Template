import { expect } from "@playwright/test";
import { Dado, Quando, Entao, E } from "../support/bdd-fixtures";
import { generateProductData } from "../support/utils";

// Variável para compartilhar dados entre os steps (estado do cenário)
let productData: any;

Dado("que eu esteja logado como admin", async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.performLogin(process.env.ADMIN_EMAIL as string, process.env.ADMIN_PASSWORD as string);
});

Quando("eu cadastro um novo produto", async ({ productPage }) => {
  productData = generateProductData();
  await productPage.registerProduct(
    productData.name,
    productData.code,
    productData.price,
    productData.type,
    productData.category
  );
});

E("o produto deve estar visivel na lista", async ({ productPage }) => {
  await productPage.scrollDownToProduct(productData.name);
  const isVisible = await productPage.isProductVisible(productData.name);
  expect(isVisible).toBeTruthy();
});

E("eu excluo o produto", async ({ productPage }) => {
  await productPage.deleteProduct(productData.name);
});

Entao("o produto não deve mais estar visivel", async ({ productPage }) => {
  const isVisibleAfterDelete = await productPage.isProductVisible(productData.name);
  expect(isVisibleAfterDelete).toBeFalsy();
});
