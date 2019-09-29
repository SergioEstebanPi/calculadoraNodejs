# Bienvenido a la calculadora de arreglos node!

Servicio que realiza las **operaciones básicas** de una calculadora a un arreglo de números ej: [1,2,3]. La **URL del sitio publicado** es [https://calculadoranode.herokuapp.com/](https://calculadoranode.herokuapp.com/), el cual muestra el siguiente mensaje: 

    {"data":"Punto de inicio","errores":[]}
    
Para realizar la ejecución de las pruebas del API REST  se utiliza el endpoint https://calculadoranode.herokuapp.com/test la cual recibe peticiones tipo **POST** y contenidos de tipo **text/plain** como en el ejemplo para su correcta ejecución.

## Ejemplo de consumo

POST https://calculadoranode.herokuapp.com/test
Content-type: text/plain
El request:

    [1,2,3,4]

debe generar el siguiente resultado:


    {
    "data": {
        "suma": 10,
        "resta": -8,
        "multiplicacion": 24,
        "division": 0.041666666666666664
    },
    "errors": []
    }

# Documentación

A continuación se explica brevemente el despliegue y las pruebas unitarias realizadas para el desarrollo de la aplicación.

La aplicación se desarrolló con Nodejs, librerias express, express-validator, body-parser y se realizaron pruebas unitarias con mocha, chai y chai-http.

## Inicar servidor API REST

1. npm install - instala las dependencias necesarias para el ambiente local en la carpeta **node_modules/**.
2. npm start - Inicia el servidor el puerto 3000, endpoint 
http://localhost:3000/test

## Despligue

El despliegue se realizó en **HEROKU** a través de este proyecto GITHUB y la siguiente configuración del archivo package.json:

    "scripts": {
	    "test": "mocha",
	    "start": "node index.js"
	}

## Pruebas unitarias

Para la ejecución de la aplicación en el local se realiza la ejecución de los siguiente comandos:
1. npm test - Inicia la ejecución de la pruebas.

> **Note:**   El resultado de la ejecución de la prueba debe devolver el siguiente resultado:
> 
	Calcula las operaciones basicas de los elementos en un array
 
    ✓ Debe retornar la suma con valor 10 (615ms)
    
    ✓ Debe retornar la resta con valor -13
    
    ✓ Debe retornar la multiplicacion con valor 720
    
    ✓ Debe retornar la division con valor 0.0001984126984126984
    
      Valida la peticion de entrada
      
    ✓ Debe retornar codigo error 422 (invalid_data_format)
    
    ✓ Debe retornar codigo error 500 (internal_server_error)
    
    ✓ Debe retornar codigo error 404 (url_not_found)
    
    7 passing (663ms)

> 
