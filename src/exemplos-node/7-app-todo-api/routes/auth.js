const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { Validator } = require('express-json-validator-middleware');

const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance;

const { AuthSchema } = require('../schemas/schemas');
const { User } = require('../database/models');

const EXPIRES = 86400;

/**
 * Função para gerar o Token JWT
 */
const generateToken = (params = {}, timeout = EXPIRES) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: EXPIRES,
  });
}

/**
* Método de autenticação (Gerar o token)
*/
router.post('/', validator.validate({ body: AuthSchema }), async (req, res) => {
  // Definir o tempo de expiração do Token (Default = 86400 seg = 24 horas)
  const { 'token-timeout': timeout = EXPIRES } = req.headers;

  // Obter o usuário e senha enviado no corpo da requisição
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { login: username },
      //attributes: ['login', 'password', 'name', 'id'],
    });

    if (!user || !(await user.validPassword(password))) return res.status(400).json({ message: 'Invalid username or password' });

    user.password = undefined;

    const now = new Date();
    return res.json({
      token: generateToken({ id: user.id, isAdmin: user.isAdmin }),
      user: user,
      loggedIn: now,
      expiresIn: new Date(now.getTime() + timeout * 1000),
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

//module.exports = app => app.use('/auth', router);
module.exports = router;
