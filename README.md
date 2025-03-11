# Atividade de revisão de técnico
## Nesta atividade de técnico era pra ser feito um código de um estacionamento com banco de dados, utilizando o CRUD API para torná-lo funcional.

Tabela de conteúdos

=================

<!--ts-->
   * [Sobre](#Sobre)
   * [Pré-requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Testando as API](#testando-api)
   * [Tecnologias](#tecnologias)
   * [Requisitos funcionais](#requisitos-funcionais)
   * [Requisitos não funcionais](#requisitos-nao-funcionais)
   * [Desafios encontrados](#desafios-encontrados)
<!--te-->

<h4 align="center"> 
	Concluído
</h4>

### Sobre

Este projeto foi feito para a atividade de técnico, onde foi solicitado criar um estacionamento, para assim medir nosso nível atual. Para fazer a base e o layout do site foram utilizados o HTML e CSS, para a parte do banco de dados foi utilizado o MySQL Workbench e também foi utilizado o CRUD API para tornar o site funcional.


### Pré-requisitos

- Certifique-se de ter instalado em seu computador o MySQL Workbench, [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/) e Git Bash.

### Instalação (Node JS)

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>

# Acesse a pasta do projeto no terminal/cmd
$ cd atividade_carros

# Vá para a pasta do backend
$ cd backend

# Instale as dependências
$ npm i express mysql2 cors nodemon dotenv

# Execute a aplicação
$ npm start


```

### Como usar

#### MySQL
- Abra o MySQL e selecione o workbench, use a senha "root" para acessá-la.

- Copie o código do arquivo MySQL presente no arquivo do VScode, cole no workbench do MySQL e certifique-se de salvar para testar o código, utilizando "ctrl + enter" em todo ele, ou selecionando todo código e clicando no ícone do raio.

### Testando as API

- Para testar as API, certifique-se de que esteja instalado no computador o thunder client (Caso não tenha instalado o thunder client, clique na opção extensões, no VScode, e pesquise por thunder client, então é só instalar).

- Abra o Thunder client no Visual code.

- Clique na opção New request.

- Selecione o método a ser utilizado.

- Adicione a URL aonde se pede.

- Clique na opção "Body", abaixo de onde é inserido a URL, e teste de acordo com os exemplos mostrados abaixo.

- Após isso, clique na opção "Send" (certifique-se de que o npm esteja rodando. Caso não esteja, utilize o "npm start").


### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [VSCode](https://code.visualstudio.com/)
- [MySQL Workbench](https://https://www.mysql.com/)

### Requisitos funcionais

- Realizar cadastro de usuário

- Realizar login de usuário

- Realizar cadastro dos carros

- Remover carros cadastrados

- Mostrar os carros cadastrados

- Editar as informações dos carros cadastrados


### Requisitos não funcionais

- Site de fácil acesso e navegação

- Fácil manutenção

- Tempo de resposta menor que 2 segundos

### Desafios encontrados

A maior dificuldade para mim foi na parte de editar as informações, pois sempre acontecia algum erro. Após algum tempo, ao editar os produtos aparecia a mensagem de que eles haviam sido alterados com sucesso, porém há mudança não era registrada no banco de dados.
