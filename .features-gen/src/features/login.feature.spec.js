// Generated from: src\features\login.feature
import { test } from "../../../src/support/bdd-fixtures.ts";

test.describe('Autenticação', () => {

  test('Tentativa de login com senha incorreta', async ({ Given, When, Then, loginPage }) => { 
    await Given('que acesso a página de login', null, { loginPage }); 
    await When('tento logar com email "admin@vnt.com" e senha "senha_errada"', null, { loginPage }); 
    await Then('devo ver uma mensagem de erro', null, { loginPage }); 
  });

  test('Login com sucesso', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('que acesso a página de login', null, { loginPage }); 
    await When('realizo login com as credenciais do administrador', null, { loginPage }); 
    await Then('devo ver a página de produtos', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Dado que acesso a página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"Quando tento logar com email \"admin@vnt.com\" e senha \"senha_errada\"","stepMatchArguments":[{"group":{"start":22,"value":"\"admin@vnt.com\"","children":[{"start":23,"value":"admin@vnt.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"senha_errada\"","children":[{"start":47,"value":"senha_errada","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Entao devo ver uma mensagem de erro","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Dado que acesso a página de login","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"Quando realizo login com as credenciais do administrador","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Entao devo ver a página de produtos","stepMatchArguments":[]}]},
]; // bdd-data-end