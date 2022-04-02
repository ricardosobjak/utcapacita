const jwt = require('jsonwebtoken');
const { Person } = require('../database/models');

const isAuthorized = (req, res, next) => {
  const { authorization } = req.headers;
 
  if (!authorization) {
    return res.status(403).json({ category: 'authentication', message: 'No authentication token' });
  }
 
  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    console.log(decoded);
    if (err) return res.status(401).json({ category: 'authentication', message: 'Failed to authenticate token' });
 
    // se tudo estiver ok, salva no request para uso posterior
    User.findByPk(decoded.id, {
      attributes: ['id', 'name', 'email', 'login', 'type']
    }).then(user => {
      if (user) {
        req.user = user.dataValues;
        return next();
      }
      return res.status(401).json({ category: 'authentication', message: 'Invalid user' });
    }).catch((findErr) => {
      console.log(findErr);
    });
  });
};

module.exports = { isAuthorized };
