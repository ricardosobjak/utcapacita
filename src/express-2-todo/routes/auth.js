var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

const { Person } = require('../database/models');

const EXPIRES = 86400;

const generateToken = (params = {}, timeout = EXPIRES) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: EXPIRES,
  });
};

router.post(
  '/',
  /*validator.validate({ body: AuthSchema }),*/ async (req, res) => {
    // Definir o tempo de expiração do Token (Default = 86400 seg = 24 horas)
    const { 'token-timeout': timeout = EXPIRES } = req.headers;

    // Obter o usuário e senha enviado no corpo da requisição
    const { username, password } = req.body;

    try {
      const user = await Person.findOne({
        where: { login: username },
        //attributes: ['login', 'password', 'name', 'id'],
      });

      if (!user || !(await user.validPassword(password))) return res.status(400).json({ message: 'Invalid username or password' });

      user.password = undefined;

      const now = new Date();
      return res.json({
        token: generateToken({ id: user.id, type: user.type }),
        user: user,
        loggedIn: now,
        expiresIn: new Date(now.getTime() + timeout * 1000),
      });
    } catch (err) {
      console.log(err);
      return res.json(err);
    }
  }
);

module.exports = router;
