const express = require('express');
const app = express.Router();
const Product = require('../models/ProductModels');

app.get('/', Product.AllProducts);
app.post('/', Product.CreateProduct);
app.get('/:id', Product.getProduct);
app.put('/:id', Product.updateProduct);
app.delete('/:id', Product.deleteProduct);



module.exports = app;

