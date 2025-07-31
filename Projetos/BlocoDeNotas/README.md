# 📝 Bloco de Notas

Uma aplicação web simples para criar, editar e gerenciar notas pessoais, desenvolvida com Node.js, Express e MongoDB.

## 🚀 Características

- ✅ Criar novas notas com título, conteúdo e categoria
- ✅ Visualizar todas as notas em cards organizados
- ✅ Editar notas existentes
- ✅ Deletar notas
- ✅ Categorização das notas (Geral, Trabalho, Pessoal, Estudos, Ideias)
- ✅ Interface responsiva com Bootstrap
- ✅ Persistência no MongoDB (Atlas ou local)
- ✅ Data de criação e última modificação

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** EJS, Bootstrap 5, Font Awesome
- **Estilo:** CSS customizado

## 📦 Instalação

1. **Clone ou baixe o projeto**
   ```bash
   cd gustavo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o MongoDB**
   - Leia o arquivo `MONGODB_SETUP.md` para configurar o MongoDB Atlas
   - Ou instale MongoDB localmente

4. **Inicie a aplicação**
   ```bash
   npm start
   ```
   
   Ou use o arquivo `start.bat` no Windows:
   ```bash
   start.bat
   ```

5. **Acesse a aplicação**
   - Abra seu navegador em: http://localhost:3000

## 🗂️ Estrutura do Projeto

```
gustavo/
├── bin/
│   └── www                 # Arquivo de inicialização
├── config/
│   └── database.js         # Configuração do MongoDB
├── models/
│   └── Note.js            # Schema da nota
├── public/
│   └── stylesheets/
│       └── style.css      # Estilos customizados
├── routes/
│   ├── index.js           # Rota principal (redireciona para /notes)
│   ├── notes.js           # Rotas das notas (CRUD)
│   └── users.js           # Rotas de usuários (não usado)
├── views/
│   ├── notes/
│   │   ├── index.ejs      # Lista de notas
│   │   ├── new.ejs        # Criar nova nota
│   │   ├── show.ejs       # Visualizar nota
│   │   └── edit.ejs       # Editar nota
│   ├── error.ejs          # Página de erro
│   └── index.ejs          # Página inicial (não usado)
├── app.js                 # Configuração principal do Express
├── package.json           # Dependências e scripts
├── MONGODB_SETUP.md       # Instruções de configuração do MongoDB
└── README.md              # Este arquivo
```

## 🎯 Como Usar

### Criar uma Nova Nota
1. Clique no botão "Nova Nota"
2. Preencha o título (obrigatório)
3. Escolha uma categoria
4. Digite o conteúdo (obrigatório)
5. Clique em "Salvar Nota"

### Visualizar Notas
- Na página inicial, todas as notas são exibidas em cards
- Clique no título ou no botão "Ver" para visualizar a nota completa

### Editar uma Nota
- Na visualização da nota, clique em "Editar"
- Ou na lista de notas, clique no botão "Editar"
- Faça as alterações e clique em "Salvar Alterações"

### Deletar uma Nota
- Clique no botão "Deletar" (confirmação será solicitada)

## 🔧 Configuração do Banco de Dados

A aplicação tenta conectar aos bancos nesta ordem:

1. **MongoDB Atlas** (produção)
   - String: `mongodb+srv://gustavofontenele04:gustavo123@cluster0.sap9mtp.mongodb.net/notebook`

2. **MongoDB Local** (desenvolvimento)
   - String: `mongodb://localhost:27017/notebook`

3. **Modo Desenvolvimento** (sem persistência)
   - Para testes quando não há banco disponível

## 🚨 Troubleshooting

### Erro de Conexão com MongoDB Atlas
- Verifique se seu IP está na whitelist
- Consulte `MONGODB_SETUP.md` para instruções detalhadas

### Erro de Conexão Local
- Certifique-se de que o MongoDB está instalado e rodando
- No Windows: verifique se o serviço MongoDB está ativo

### Porta já em uso
- A aplicação roda na porta 3000 por padrão
- Feche outras aplicações que possam estar usando esta porta

## 📝 Dependências

```json
{
  "express": "~4.16.1",
  "ejs": "~2.6.1",
  "mongoose": "latest",
  "method-override": "latest",
  "morgan": "~1.9.1",
  "cookie-parser": "~1.4.4"
}
```

## 🎨 Interface

- **Design:** Interface moderna com Bootstrap 5
- **Ícones:** Font Awesome 6
- **Responsivo:** Funciona em desktop, tablet e mobile
- **Tema:** Cores azuis com cards elegantes

## 🔮 Próximas Funcionalidades

- [ ] Sistema de busca de notas
- [ ] Filtro por categoria
- [ ] Exportar notas em PDF
- [ ] Sistema de tags
- [ ] Modo escuro
- [ ] Autenticação de usuários

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

---

**Desenvolvido com ❤️ para organizar suas ideias!**
