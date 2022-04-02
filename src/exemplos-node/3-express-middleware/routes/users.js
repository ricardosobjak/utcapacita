const express = require('express');
const router = express.Router();

class User {
  name;
  email;
  password;
}

router.get('/', (req, res) => {
  //res.send("Funcinou GET");

  const { order } = req.query;

  const users = [
    { name: 'Ricardo', email: 'rs@bol.com' },
    { name: 'Juca', email: 'juca@bol.com' },
    { name: 'Ana', email: 'ana@bol.com' },
    { name: 'Bianca', email: 'popbia@bol.com' },
  ];

  if(order === "name") users.sort((a, b) => a.name.localeCompare(b.name));
  if(order === "email") users.sort((a, b) => a.email.localeCompare(b.email));

  res.json(users);
});

router.post('/', (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;

  if (!name) return res.status(400).json({ error: 'name is required' });

  req.body.id = 1;
  req.body.createdAt = new Date();
  res.json(req.body);
});

router.put('/:id', (req, res) => {
  console.log(req.headers);

  console.log(req.headers.authentication);

  res.send('Funcinou PUT');
});

router.delete('/:id', (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  res.send(`Usuário com id ${id} foi deletado.`);
});

module.exports = router;
