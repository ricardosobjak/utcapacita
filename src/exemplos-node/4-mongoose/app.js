const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Configurando a conexão com o banco da dados MongoDB
const { MONGODB_URL } = process.env;

mongoose
  .connect(`${MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    poolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 60000, // Close sockets after 45 seconds of inactivity
  })
  .then(() => {
    console.log(`Connected to MongoDB: ${MONGODB_URL}`);
  })
  .catch((err) => {
    console.log(`MongoDB Not Connected!`);
    console.log(err);
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/auth', require('./routes/auth'));
app.use('/users', usersRouter);

module.exports = app;