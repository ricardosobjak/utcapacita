const http = require('http');

const express = require('express');

const app = express();

app.use(express.json());

class User {
  name;
  email;
  password;
}

app.get('/', (req, res) => {
  res.send('<h1>Servidor executando</h1>');
});

app.get('/user', (req, res) => {
  //res.send("Funcinou GET");

  const users = [
    { name: 'Ricardo', email: 'rs@bol.com' },
    { name: 'Juca', email: 'juca@bol.com' },
  ];

  res.json(users);
});

app.post('/user', (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  if (!name) return res.status(400).json({ error: 'name is required' });

  req.body.id = 1;
  req.body.createdAt = new Date();
  res.json(req.body);
});

app.put('/user/:id', (req, res) => {
  console.log(req.headers);

  console.log(req.headers.authentication)
  
  res.send('Funcinou PUT');
});

app.delete('/user/:id', (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  res.send(`Usuário com id ${id} foi deletado.`);
});

http.createServer(app).listen(3000, () => console.log('Servidor executando na porta 3000'));
