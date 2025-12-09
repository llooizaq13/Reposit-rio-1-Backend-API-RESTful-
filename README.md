# *Backend CRUD API - Gerenciamento de Pokémon*

Este repositório contém a API RESTful desenvolvida em Node.js e Express. Ela simula um banco de dados in-memory para gerenciar as operações CRUD (Criar, Ler, Atualizar, Deletar) da entidade 'Pokémon Capturado', incluindo nome, tipo, nível, URL da imagem e 6 estatísticas detalhadas.

# *Configuração e Instalação*

Pré-requisitos

Node.js (versão 18+)

npm (gerenciador de pacotes do Node)

1. Clonar o Repositório

git clone [https://github.com/llooizaq13/backend-pokemon-crud.git](https://github.com/llooizaq13/backend-pokemon-crud.git)
cd backend-pokemon-crud


2. Instalar Dependências

Execute este comando na pasta raiz do projeto:

npm install


3. Rodar a API

Inicie o servidor. Ele será executado na porta 3000.

npm start
# Ou: node server.js


Endpoints Principais

A API estará acessível em http://localhost:3000/pokemon.

Método

Endpoint

Descrição

GET

/pokemon

Lista todos os Pokémon capturados.

POST

/pokemon

Cadastra um novo Pokémon.

PUT

/pokemon/:id

Atualiza um Pokémon existente.

DELETE

/pokemon/:id

Remove um Pokémon.