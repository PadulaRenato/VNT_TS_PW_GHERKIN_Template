# language: pt
Funcionalidade: Autenticação

    Cenario: Tentativa de login com senha incorreta
        Dado que acesso a página de login
        Quando tento logar com email "admin@vnt.com" e senha "senha_errada"
        Entao devo ver uma mensagem de erro

    Cenario: Login com sucesso
        Dado que acesso a página de login
        Quando realizo login com as credenciais do administrador
        Entao devo ver a página de produtos
