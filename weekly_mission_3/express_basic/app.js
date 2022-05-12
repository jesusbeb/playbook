const express = require('express')  // Usando objeto express

const app = express()   // App de Express

const port = 3000   // Puerto en que vamos a ver nuestra app: localhost:3000

// path inicial, respondera a la 
// url localhost:3000
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
    res.send(explorer)
})

/*
Agrega una nueva ruta, indica que recibirá un parámetro: /explorers/:explorerName, esto indicará que :explorerName será un valor enviado por la url.
El objeto req contiene la propiedad params, esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params)
*/
// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/jesus
// req.params= {"explorerName":"jesus"}
app.get('/explorers/:exploreName', (req, res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
