# language: pt
Funcionalidade: Gerenciamento de Produtos

    Contexto:
        Dado que eu esteja logado como admin

    Cenario: Cadastro e exclusão de produto
        Quando eu cadastro um novo produto
        E o produto deve estar visivel na lista
        E eu excluo o produto
        Entao o produto não deve mais estar visivel
