const express = require('express');
const app = express.Router();
const Commande = require('../models/CommandeModels');

app.get('/', Commande.AllCommandes);
app.post('/', Commande.createCommande);
app.get('/:id', Commande.getCommande);
app.put('/:id', Commande.updateCommande);
app.delete('/:id', Commande.deleteCommande);

module.exports = app;
