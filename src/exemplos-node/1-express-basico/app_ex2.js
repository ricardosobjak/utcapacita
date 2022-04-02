const http = require('http');

const express = require('express');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Servidor executando</h1>');
});

app.get('/user', (req, res) => {
  res.send('Funcinou GET');
});

app.get('/user/:id', (req, res) => {
  res.send('Funcinou GET');
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('Funcinou POST');
});

app.put('/user/:id', (req, res) => {
  res.send('Funcinou PUT');
});

app.delete('/user/:id', (req, res) => {
  res.send('Funcinou DELETE');
});

http.createServer(app).listen(3000, () => console.log('Servidor executando na porta 3000'));
