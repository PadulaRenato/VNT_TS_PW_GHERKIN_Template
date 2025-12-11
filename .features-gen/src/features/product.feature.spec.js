// Generated from: src\features\product.feature
import { test } from "../../../src/support/bdd-fixtures.ts";

test.describe('Gerenciamento de Produtos', () => {

  test.beforeEach('Contexto', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('que eu esteja logado como admin', null, { loginPage }); 
  });
  
  test('Cadastro e exclusão de produto', async ({ When, Then, And, productPage }) => { 
    await When('eu cadastro um novo produto', null, { productPage }); 
    await And('o produto deve estar visivel na lista', null, { productPage }); 
    await And('eu excluo o produto', null, { productPage }); 
    await Then('o produto não deve mais estar visivel', null, { productPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\product.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado que eu esteja logado como admin","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"Quando eu cadastro um novo produto","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"E o produto deve estar visivel na lista","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"E eu excluo o produto","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Entao o produto não deve mais estar visivel","stepMatchArguments":[]}]},
]; // bdd-data-end