const express= require ('express')  // Usando objeto express
const app= express()    // App de Express
app.use(express.json())     // Indicamos que usaremos JSON
const port= 3000    // Puerto en que vamos a ver nuestra app: localhost:3000

// Esto es un Endpoint
// routes
// HTTP METHODS: GET, POST, PUT, DELETE
/*
GET Crea un endpoint que regrese una lista de explorers
1. Utiliza el método GET de express para este endpoint
2. Crea algunos objetos y regresa la lista como se indica.
3. Agrega el código HTTP CODE 200 en el request:
 */
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Jesus1"}
    const explorer2 = {id: 2, name: "Jesus2"}
    const explorer3 = {id: 3, name: "Jesus3"}
    const explorer4 = {id: 4, name: "Jesus4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)     // HTTP CODE STATUS: 200
})
// Elige el primer request GET y da click en el botón SEND.
//Verifica que te responda la información esperada.


// GET Crea un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Jesus1"}
    res.status(200).json(explorer)
})
// Recuerda parar y volver a levantar tu server para ver tus cambios recientes.
// Prueba el request 2 de postman.


// POST Crea un endpoint que se encargue de crear un explorer
// Metodo gets son para regresar informacion, el metodo post es para crear
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    // Agregar la logica para persistir
    console.log(req.body) // parametros del request
    const requestBody = req.body // Parametros de un cliente
    res.status(201).json({message: "Creado exitosamente"})
})
// Nota que el status code es 201.
//Prueba el request 3 de postman.


// PUT Crea un endpoint que se encargue de actualizar un explorer
// metodo put para actualizar un registro
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(req.body) // parametros para actualizar
    console.log(req.params.id) // query params
    // Agregar la logica para actualizar
    res.status(200).json({message: "Actualizado exitosamente"})
})
// Prueba el request 4 de postman.


// DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parametros de un cliente
    res.status(200).json({message: "Deleted"})
})
// Prueba el request 5 de postman.


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})



/**
Probando tu Endpoint
Hay muchos clientes para probar endpoints (puedes buscarlo como HTTP Clients). Te recomiendo descargar Postman.

Instala Postman.

Descarga el siguiente archivo: LaunchX.postman_collection.json (1).zip

En Postman importa el archivo descargado. (Contiene todos los requests necesarios para esta práctica)
 */