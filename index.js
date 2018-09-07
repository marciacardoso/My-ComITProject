const express = require('express');
const app= express();
const path= require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { });
});

app.get('/contact', (req, res) => {
  res.render('contact', { });
});

app.listen(3000);

console.log('Welcome to JavaScript and Node.js server side');