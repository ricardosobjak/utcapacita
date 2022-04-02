const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const isAuthorized = require('../middlewares/isAuthorized');

/* GET users listing. */
router.get('/', isAuthorized, async (req, res) => {
  console.log(req.userId);
  return res.json(await User.find());
});

router.get('/:id', isAuthorized, async (req, res) => {
  const { id } = req.params;

  let _id = null; // ObjectId para consulta no MongoDB
  try {
    _id = new mongoose.Types.ObjectId(id);
  } catch (error) {
    return res.status(400).json({ category: 'id', message: 'Invalid representation of ID' });
  }

  const user = await User.findById(id);
  return user ? res.json(user) : res.status(404).send();
});

router.post('/', async (req, res) => {
  //const { user } = res.locals; // Obtém o usuário autenticado
  const json = req.body; // Obtém o JSON enviado pelo cliente

  if ((await User.countDocuments({ login: json.login })) == 0) {
    // Verifica se tem um usuário salvo com o mesmo login
    json.createdAt = new Date(); // Seta a data de criação
    json.lastUpdate = new Date(); // Seta a data de atualização

    const user = new User(json); // Cria um novo objeto da classe User com base no JSON enviado pelo cliente

    const hasErrors = user.validateSync(); // Faz a validação do objeto conforme as restrições definidas no Schema User.
    return hasErrors
      ? res.status(400).json(hasErrors) // Envia a mensagem de erro para o cliente.
      : res.json(await user.save()); // Salva no banco de dados e envia o user para o cliente.
  } // Caso exista um usuário com o mesmo login especificado pelo cliente.
  else res.status(400).json({ category: 'user.login', message: 'Existing login' }); // Envia uma mensagem de erro (400) ao cliente.
});

router.put('/', isAuthorized, async (req, res) => {
  const json = req.body; // Obtém o JSON enviado pelo cliente

  let user = await User.findById(json.id);

  // Busca um usuário com o mesmo login deste que deseja ser atualizado
  const userConfere = await User.findOne({ login: json.login });

  if (userConfere && userConfere.id != json.id) {
    return res.status(400).json({ category: 'user.login', message: 'Login existing' });
  } else {
    json.lastUpdate = new Date(); // Obtém a data atual (última modificação do objeto)
    json.createdAt = user.createdAt; // Mantém a mesma data de criação do objeto

    // Faz a validação dos atributos do objeto
    const hasErrors = new User(json).validateSync();
    if (hasErrors) return res.status(400).json(hasErrors);

    // Atualiza o usuário
    await User.updateOne({ _id: json.id }, json);
    return res.json(json);
  }
});

router.delete('/:id', isAuthorized, async (req, res) => {
  const { id } = req.params;

  if (req.userId != id) return res.status(403).json({ message: 'Sem permissão para deletar o usuário.' });

  const result = await User.deleteOne({ _id: id });

  if (result.deletedCount > 0) res.send();
  else res.status(404).json({ category: 'id', message: 'Invalid user ID' });
});

module.exports = router;
