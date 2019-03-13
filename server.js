//---IMPORTACIONES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');

const app = express();

mongoose.connect(config.db_uri, { useNewUrlParser: true })
    .then(db => console.log('Conexión correcta a la BD'))
    .catch(err => console.log('Error en la conexion a la BD'));

// --- MIDDLEWARE
// Para redirigir trafico HTTP a HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`);
  else
    next();
});
//Json
app.use(express.json());
// Rutas
app.use ('/api', routes);
//Archivos estáticos. Deberá crear un archivo public/index.html
app.use(express.static(path.join(__dirname , 'public')));
// Logger
app.use(morgan('dev'));

// --- PUERTO DE ESCUCHA
app.listen (config.port, () => console.log('Servidor iniciado en el puerto 3000'));

