const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());

const myLogger = require('./middleware/myLogger');
const auth = require('./middleware/auth');


//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/users', myLogger, auth, usersRouter);

http.createServer(app).listen(3000, () => console.log('Servidor executando na porta 3000'));
