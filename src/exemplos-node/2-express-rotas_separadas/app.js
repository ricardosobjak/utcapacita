const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

http.createServer(app).listen(3000, () => console.log('Servidor executando na porta 3000'));
