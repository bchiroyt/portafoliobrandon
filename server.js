require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/Partials'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'Public')));

// Rutas
app.get('/', (req, res) => {
    res.render('sobre-mi');
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

app.get('/experiencia', (req, res) => {
    res.render('experiencia');
});

app.get('/videos', (req, res) => {
    res.render('videos');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});