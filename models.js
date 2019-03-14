const mongoose = require('mongoose');

const Municipio = mongoose.model('Municipio', {
                                    nombre: String,
                                    latitud: Number, 
                                    altitud: Number
                                    });

const Prevision = mongoose.model('Prevision', {
                                    precipitacion: Boolean,
                                    temperatura: Number,
                                    nubosidad: Number 
                                    });

module.exports = {
    Municipio,
    Prevision
};