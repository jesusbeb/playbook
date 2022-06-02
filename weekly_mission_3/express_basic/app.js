const express = require('express')  // importando el modulo express que es una dependencia. Usando objeto express
const app = express()   // Sintaxis de express en la documentacion. Se inicializa el objeto
const port = 3000   // Puerto en que vamos a ver nuestra app: localhost:3000

// '/' puede ser cualquier URL, si se queda asi como esta, responderia al directorio raiz de la url localhost:3000
// "req" significa que alguien le mandara un requerimiento, request. "res" significa que le dara una respuesta, response
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Respondiendo texto
// localhost: 3000/launchx
app.get('/launchx', (req, res) => {
    res. send('Bienvenidos a launchx')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"} // se crea un objeto con atributos
    res.send(explorer) // se envia el objeto creado como respuesta
})

/*
Agrega una nueva ruta, indica que recibirá un parámetro: /explorers/:explorerName, esto indicará que :explorerName será un valor enviado por la url
El objeto req contiene la propiedad params, esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params)
*/
// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/jesus
// req.params= {"explorerName":"jesus"}
app.get('/explorers/:explorerName', (req, res) => {     // devolvera un objeto con la propiedad explorerName y su valor sera el que se envie por url p.e. http://localhost:3000/explorers/Jesus
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
