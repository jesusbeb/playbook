const fs = require("fs"); // El módulo fs proporciona una gran cantidad de funciones muy útiles para acceder e interactuar con el sistema de archivos. https://nodejs.dev/learn/the-nodejs-fs-module 

// refactorizado (+1)
class Reader {
    static readJsonFile(path) {     // ??? path, crei que se pondria la direccion al archivo a leer
        const rawdata = fs.readFileSync(path);  // codigo obtenido del original
        return JSON.parse(rawdata); // lista de explorers del archivo json. El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
    }
}
//(-1)

module.exports = Reader
