const auth = function (req, res, next) {
  const { authorization } = req.headers;

  if (authorization == '1234') return next();

  return res.status(403).json({
    category: 'authorization',
    message: 'Sem token de autenticação',
  });
};

module.exports = auth;
