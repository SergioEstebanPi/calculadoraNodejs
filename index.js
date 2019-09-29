const express = require("express");
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(bodyParser.text());

let respuesta = {
    data: '',
    errores: []
};

app.get('/', function(req, res) {
    respuesta = {
     data: 'Punto de inicio',
     errores: []
    };
    res.send(respuesta);
   });

app.post(
    '/test',
    body().custom(function(e){
        try{
            if(Array.isArray(JSON.parse(e))){
                return true;
            }
        } catch(e){
            return false;
        }
        return false;
    }),
    function(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            respuesta = {
                data: '',
                errors: ['invalid_data_format']
            };
            return res.status(422).json(respuesta);
        }
        //
        let entrada = JSON . parse(req.body);
        let numeros = Array.from(entrada);
        //console.log(numeros);
        let suma = numeros.reduce((total, actual) => (total + actual));
        let resta = numeros.reduce((total, actual) => (total - actual));
        let multiplicacion = numeros.reduce((total, actual) => (total * actual));
        let division = numeros.reduce((total, actual) => (total / actual));
        /*
        console.log("suma: " + suma);
        console.log("resta: " + resta);
        console.log("multiplicacion: " + multiplicacion);
        console.log("division: " + division);
        */
        respuesta = {
            data: {
                suma: suma,
                resta: resta,
                multiplicacion: multiplicacion,
                division: division
            },
            errors: []
        };
        res.send(respuesta);
    }
);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    respuesta = {
        data: '',
        errores: ['internal_server_error']
    };    
    res.status(500).send(respuesta);
});  

app.use(function(req, res, next) {
    respuesta = {
     error: true, 
     codigo: 404, 
     mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});