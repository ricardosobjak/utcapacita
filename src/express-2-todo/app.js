var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json()); // Receber JSON no body
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/auth', require('./routes/auth'));
app.use('/users', usersRouter);

module.exports = app;
