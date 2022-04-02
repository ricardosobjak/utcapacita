var express = require('express');
var router = express.Router();

const { ToDo } = require('../database/models');
const { isAdminOrOwner } = require('../middleware/auth');

/**
 * Buscar todos os afazeres (To do) do usuário autenticado
 */
router.get('/', async (req, res) => {
  const { user } = req; // Obter o usuário autenticado

  return res.json(await ToDo.findAll({
    where: { userId: user.id },
    attributes: {
      exclude: ['userId']
    },
    include: [{
      association: 'user',
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'login']
      }
    }],
  }));
});

router.get('/:id', isAdminOrOwner, async (req, res) => {
  const { id } = req.params;

  let todo = await ToDo.findByPk(id, {
    include: [{ association: 'user', attributes: { exclude: ['password'] } }],
    attributes: { exclude: ['userId'] }
  });

  return todo ? res.json(todo) : res.status(404).json({ message: "ToDo not found" });
});

/**
 * Rota para criar um ToDo
 */
router.post('/', async (req, res) => {
  const loggedUser = req.user;

  try {
    req.body.userId = loggedUser.id;

    let todo = await ToDo.create(req.body);
    return res.status(200).json(todo);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }
});

/**
 * Atualizar um ToDo
 */
router.put('/:id', isAdminOrOwner, async (req, res) => {
  const { id } = req.params;
  const { title, description, date, done } = req.body;

  try {
    let todo = await ToDo.findByPk(id);
    if (!todo) return res.status(400).json({ message: 'ToDo not found!' });

    await todo.update({ title, description, date, done });
    return res.json(todo);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
});

/** 
 * Deletar um ToDo.
*/
router.delete('/:id', isAdminOrOwner, async (req, res) => {
  const { id } = req.params;

  try {
    let todo = await ToDo.findByPk(id);
    if (!todo) return res.status(400).json({ message: 'ToDo not found!' });

    await todo.destroy();
    return res.send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

module.exports = router;