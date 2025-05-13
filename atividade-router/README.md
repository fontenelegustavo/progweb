# Atividade Router

## Descrição

Este projeto é uma extensão do [exercício da Aula 6 de Express](https://github.com/PedroBarbosaIF/pwebII-2025.1-p5/tree/main/atividade-express), agora utilizando o recurso de `Router` do Express.js para organizar as rotas de forma modular. O objetivo é criar uma aplicação com estrutura bem definida e funcional.



## Requisitos

1. **Repetir o Exercício Anterior**: Implementar as mesmas funcionalidades da Aula 6, mas utilizando `Router`.
2. **Estrutura Básica**: Opcionalmente, utilizar o `express-generator` para criar a estrutura inicial do projeto.
3. **Postar no GitHub**: Subir o projeto para um repositório no GitHub e compartilhar o link como resposta.

## Estrutura do Projeto

```
atividade-router/
├── app.js
├── package.json
├── README.md
├── bin/
│   └── www
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── aboutRoute.js
│   ├── dataRoute.js
│   ├── index.js
│   ├── users.js
│   ├── usersSigninRoute.js
│   ├── usersSigninUseridRoute.js
│   └── usersSignupRoute.js
└── views/
    ├── error.ejs
    └── index.ejs
```

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse a aplicação no navegador em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js.
- **EJS**: Template engine para renderização de páginas dinâmicas.

## Funcionalidades

- Organização modular de rotas com `Router`.
- Estrutura inicial gerada com `express-generator` (opcional).
- Suporte a rotas dinâmicas e tratamento de erros.

## Autor

Pedro Barbosa

---

Sinta-se à vontade para contribuir ou relatar problemas!
