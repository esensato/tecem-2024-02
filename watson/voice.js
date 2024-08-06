const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura o diretório 'public' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});