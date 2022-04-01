const http = require('http');
const express = require('express');

// Forma mais de colocar o express executar
//http.createServer(express);

const app = express();

app.use(express.json());

class Person {
  id;
  name;
  email;
  password;
}

let pessoas = [
  { id: 1, name: 'Ricardo' },
  { id: 2, name: 'Juca' },
  { id: 3, name: 'Samanta' },
];

app.get('/', (request, response) => {
  console.log('Chegou uma requisição, Oba!');

  response.send('<h1>Tudo ok por aqui</h1>');
});

// Obter todas as pessoas
app.get('/person', (req, res) => {
  return res.json(pessoas);
});

// Obter uma pessoa específica
app.get('/person/:id', (req, res) => {
  const { id } = req.params;

  const p = pessoas.find((e) => e.id == id);
  console.log(p);

  return p ? res.json(p) : res.status(404).send('Pessoa não existe');
});

// Criar uma pessoa
app.post('/person', (req, res) => {
  const person = req.body; // Obtém a pessoa da requisição

  const id = pessoas.length > 0 
    ? pessoas[pessoas.length - 1].id + 1 
    : 1; // Gerando o ID
  person.id = id;

  pessoas.push(person); // Armazenando a pessoa

  res.status(201).json(person); // Retornando a pessoa ao cliente
});

http.createServer(app).listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
