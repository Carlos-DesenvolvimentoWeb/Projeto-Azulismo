Site de Ensino de Pensamento Computacional para Crianças com TEA

Equipe:
Front-End

Lucas Ferreira Correia da Silva - lucas.lfcds@gmail.com
Maria Clara Santos Oliveira - clara.santoss.oliveira@gmail.com
Mariene Silva da Cruz Santos - ⁠maricruzdev@gmail.com
João Paulo Dias Ferreira - paulo_diasfe@hotmail.com

Back-End

José Carlos Goncalves Soares Junior - cjpro.social@gmail.com
Wandeson Rodrigues Cardoso - wandesonrc@gmail.com
Richele Da Costa Praxedes - praxedesrichele@gmail.com
Rilda Rosiene Albuquerque - rildarosianealbuquerquecabral@gmail.com
Marcio Leandro Cristovam Azevedo de Holanda - marcioh.dev@gmail.com


Instruções para rodar o app:

Back-end: navegue até o diretorio system e rode o comando: node app.js;

Front-end: navegue até o diretorio layout e rode o comando npm run build e em seguida o comando serve -s build.

A pagina será servida na porta 5000.

Instruções para rotas:

Registro de Usuário
Envie uma requisição POST para http://localhost:5000/api/register

Login Tradicional
Envie uma requisição GET parahttp://localhost:5000/api/login. Insira as credenciais do usuário (username e password), você deve receber um 200 OK com um token JWT na resposta:


Login Social
    1. Google Login:
        Envie uma requisição GET para http://localhost:5000/api/auth/google. O Passport irá redirecionar você para a página de login do Google.

        Após login no Google, você será redirecionado de volta para http://localhost:5000/api/auth/google/callback, onde o token JWT será retornado.

    2. Facebook Login:
        Envie uma requisição GET para http://localhost:5000/api/auth/facebook. O Passport irá redirecionar você para a página de login do Facebook. 

        Após login no Facebook, você será redirecionado de volta para http://localhost:5000/api/auth/facebook/callback, onde o token JWT será retornado.   