const express = require('express');
const app = express();
const users = require('./controllers/users');

app.use('/', users);

module.exports = app;
app.listen(3000);
