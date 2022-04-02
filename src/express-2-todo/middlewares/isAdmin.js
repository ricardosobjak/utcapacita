const isAdmin = async (req, res, next) => {
  const { type } = req.user;
 
  return type == 'admin'
    ? next()
    : res.status(403).json({ category: 'authorization', message: 'No authorized, only administrator.' });
};


module.exports = { isAdmin };