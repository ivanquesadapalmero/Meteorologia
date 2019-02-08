//---IMPORTACIONES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/meteorologia', { useNewUrlParser: true })
    .then(db => console.log('Conexión correcta a la BD'))
    .catch(err => console.log('Error en la conexion a la BD'));

// --- MIDDLEWARE
//Json
app.use(express.json());
// Rutas
app.use ('/api', routes);
//Archivos estáticos. Deberá crear un archivo public/index.html
app.use(express.static(path.join(__dirname , 'public')));
// Logger
app.use(morgan('dev'));

// --- PUERTO DE ESCUCHA
app.listen (3000, () => console.log('Servidor iniciado en el puerto 3000'));

