var express = require('express');
var router = express.Router();

const { Person } = require('../database/models');
const { isAdmin } = require('../middlewares/isAdmin');
const { isAuthorized } = require('../middlewares/isAuthorized');

/**
 * Obter todos os usuários do banco de dados
 */
router.get('/', isAuthorized, isAdmin, async (req, res) => {
  const users = await Person.findAll({
    attributes: { exclude: ['password'] },
  });

  return res.json(users);
});

/**
 * Criar um usuário
 */
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    let person = await Person.create(req.body);
    return res.status(201).json(person);
  } catch (err) {
    console.log(err)
    return res.status(400).send(err);
  }
});

module.exports = router;
