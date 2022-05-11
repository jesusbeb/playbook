const User = require('./../models/user')

class UserService{
    static create(id, username, name){  // metodo estatico que recibe 3 parametros
        return new User(id, username, name, "sin bio") // los 3 parametros recibidos los envia a la clase importada User y envia el parametro "bio" con informacion por default
    }
}
module.exports= UserService;