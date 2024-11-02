const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Public')));

// Rutas
app.get('/', (req, res) => {
    res.render('sobre-mi'); // Página principal
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos'); // Página de proyectos
});

app.get('/experiencia', (req, res) => {
    res.render('experiencia'); // Página de experiencia
});

app.get('/videos', (req, res) => {
    res.render('videos');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});