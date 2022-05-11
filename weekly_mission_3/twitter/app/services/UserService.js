const User = require('./../models/user')

class UserService{
    static create(id, username, name){  // metodo estatico que recibe 3 parametros
        return new User(id, username, name, "sin bio") // los 3 parametros recibidos los envia a la clase importada User y envia el parametro "bio" con informacion por default
    }

    static getInfo(usuario){   // getInfo("usuario" cualquier nombre descriptivo para el parametro que recibe) 
        return [usuario.id, usuario.username, usuario.name, usuario="sin bio"];
    }
}
module.exports= UserService;