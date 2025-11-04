const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello ZINEB!'); });
app.get('/api', (req, res) => {
    res.send('Ceci est une api'); }); 
app.get('/products', (req, res) => {
    res.send('Ceci est la page products'); } );
app.get('/users', (req, res) => {
    res.send('Ceci est la page users'); } );
app.get('/payment', (req, res) => {
    res.send('Ceci est la page payment'); } );
app.get('profile', (req, res) => {
    res.send('Ceci est la page profile'); } );          

app.listen(3000, () => {
    console.log('Server is running on port 3000'); });    