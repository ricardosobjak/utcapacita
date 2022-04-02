const myLogger = function (req, res, next) {
  console.log('Log: Client=' + req.connection.remoteAddress);
  next();
};

module.exports = myLogger;
