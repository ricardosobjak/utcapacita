var express = require('express');
var router = express.Router();

const { User } = require('../database/models');

router.get('/', async (req, res) => {
  return res.json(await User.findAll());
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await User.findByPk(id));
  s;
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    //if (await Person.findOne({ where: { email } }))
    //  return res.status(400).send("User already exists")

    let user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.put('/:id', async (req, res) => {
  const { name, email, login, password } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);
    if (!user) return res.status(400).json({ message: 'User not found!' });

    await user.update({ name, email, login, password });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findByPk(id);
    if (!user) return res.status(400).json({ message: 'User not found!' });

    await user.destroy();
    return res.send();
  } catch (e) {
    return res.status(400).json(e);
  }
});

module.exports = router;
