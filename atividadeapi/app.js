const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Página inicial com botão
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para buscar citação
app.get('/mensagem', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quote = response.data[0];
    res.render('quote', { quote });
  } catch (err) {
    console.error(err);
    res.send('Erro ao acessar a API de citações.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
