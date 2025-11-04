const express = require('express');
const app = express.Router();
const Magasin = require('../models/MagasinModels');

app.get('/', Magasin.AllMagasins);
app.post('/', Magasin.createMagasin);
app.get('/:id', Magasin.getMagasin);
app.put('/:id', Magasin.updateMagasin);
app.delete('/:id', Magasin.deleteMagasin);

module.exports = app;
