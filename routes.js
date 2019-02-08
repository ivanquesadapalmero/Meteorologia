const express = require('express');
const { Municipio, Prevision } = require('./models');

const router = express.Router();

// ver todos los municipios
router.get('/municipios', (req, res) => {
    Municipio.find({}, (err, data) => {
        if(err) res.json({ error: err });
        else res.json(data);
    });
});

// ver todas las previsiones
router.get('/previsiones', (req, res) => {
    Prevision.find({}, (err, data) => {
        if(err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un municipio
router.get('/municipios/:id', (req,res) => {
    Municipio.findOne({_id: req.params.id},(err, data) => {
        if(err) res.json({error:err});
        else res.json(data);
    });
});

// ver una prevision
router.get('/previsiones/:id', (req, res) => {
    Prevision.findOne({_id: req.params.id}, (err, data) => {
        if(err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un municipio
router.delete('/municipios/:id', (req, res) => { 
    Municipio.findOneAndRemove({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// eliminar una prevision
router.delete('/previsiones/:id', (req, res) => { 
    Prevision.findOneAndRemove({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// actualizar un municipio
router.put('/municipios/:id', (req, res) => {
    Municipio.findOneAndUpdate({_id: req.params.id}, 
        {$set: { nombre: req.body.nombre, latidud: req.body.latidud, altitud: req.body.altitud }}, 
        (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// actualizar una prevision
router.put('/previsiones/:id', (req, res) => {
    Prevision.findOneAndUpdate({_id: req.params.id}, 
        {$set: { precipitacion: req.body.precipitacion, temperatura: req.body.temperatura, nubosidad: req.body.nubosidad }}, 
        (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// insertar municipio
router.post('/municipios', (req, res) => {
    const municipio = new Municipio({ 
                          nombre: req.body.nombre, 
                          latidud: req.body.latitud,
                          altitud: req.body.altitud});
    municipio.save( (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// insertar prevision
router.post('/previsiones', (req, res) => {
    const prevision = new Prevision({ 
                          precipitacion: req.body.precipitacion, 
                          temperatura: req.body.temperatura,
                          nubosidad: req.body.nubosidad});
    prevision.save( (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

module.exports = router;

