const mongoose = require('mongoose');

const Municipio = mongoose.model('Municipios', {
                                    nombre: String,
                                    latitud: Number, 
                                    altitud: Number
                                    });

const Prevision = mongoose.model('Previsiones', {
                                    precipitacion: Boolean,
                                    temperatura: Number,
                                    nubosidad: Number 
                                    });

module.exports = {
    Municipio,
    Prevision
};