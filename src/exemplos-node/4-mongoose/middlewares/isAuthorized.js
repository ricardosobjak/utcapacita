require('dotenv').config();
const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({ category: 'authentication', message: 'No authentication token' });
  }

  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    console.log(decoded);
    if (err) return res.status(401).json({ category: 'authentication', message: 'Failed to authenticate token' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    return next();
  });
};

module.exports = isAuthorized;
