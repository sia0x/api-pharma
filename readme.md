# Pharma Inc. Back-end Challenge

Rest Api da empresa Pharma Inc, para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis.

> ## Bibliotecas e Ferramentas

- YARN
- Git
- Docker
- MongoDb
- JsonWebToken
- Express
- Eslint
- Sucrase
- Nodemon

> ## Features do Node

- API Rest com Express
- Segurança (Hashing e Encoding)
- CORS
- Middleware
- Nível de Acesso nas Rotas (User)

> ## Instruções de uso do projeto

1. Clonar o repositório

- git clone https://github.com/sia0x/api-pharma.git

2. Acessar a pasta do projeto

- cd api-pharma

3. Instalar as dependências

- yarn ou npm install

4. Instalar o mongo

- [sudo] docker run --name pharma-db -p 27017:27017 -d -t mongo

5. Iniciar o container

- [sudo] docker container start pharma-db

6. Criar um arquivo .env com as informações fornecidas pelo desenvolvedor

7. Iniciar o servidor

- yarn dev ou npm run dev

> ## APIs desenvolvidas

1. [Home](./requirements/home.md)
2. [Listar usuários](./requirements/load-users.md)
3. [Pesquisar usuário por id](./requirements/search-user.md)
4. [Atualizar usuário](./requirements/update-user.md)
5. [Remover usuário](./requirements/delete-user.md)
