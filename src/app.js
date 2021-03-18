const express = require('express');
const app = express();
var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
var divisionsRouter = require('./routes/divisions');

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/divisions', divisionsRouter);

module.exports = app;