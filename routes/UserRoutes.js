const express = require('express');
const app = express.Router();
const User = require('../models/UserModels');
 app.get('/getAllUsers', User.getAllUsers);
 app.post('/register', User.register);
 app.post('/login', User.login);
 app.delete('/:id', User.delete);
 app.put('/:id', User.update);
module.exports = app;