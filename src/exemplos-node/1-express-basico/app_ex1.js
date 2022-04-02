const http = require("http");

const express = require("express");

// Modo 1: Cria o servidor mas é encerrado na sequência
// http.createServer(express);

// Modo 2: Cria o servidor e fica em execução na porta 3000
// http.createServer(express).listen(3000, () => console.log("Servidor executando na porta 3000"));

// Modo 3: Criando uma instância de aplicação Express
const app = express();

// Definindo as rotas da aplicação
app.get("/", function(req, res) {
  res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

// Iniciando o Servidor com a aplicação
http.createServer(app).listen(3000, () => console.log("Servidor executando na porta 3000"));