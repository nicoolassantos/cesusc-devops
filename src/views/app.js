const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do servidor Express
app.use(express.static(path.join(__dirname, 'views')));

// Endpoint para retornar a página HTML
app.get('/index', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'views') });
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 