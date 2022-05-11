const User = require('./../models/user')

class UserService{
    static create(id, username, name){  // metodo estatico que recibe 3 parametros
        return new User(id, username, name, "sin bio") // los 3 parametros recibidos los envia a la clase importada User y envia el parametro "bio" con informacion por default
    }

    static getInfo(usuario){   // getInfo("usuario" cualquier nombre descriptivo para el parametro que recibe). Metodo que convierte a lista los parametros del objeto recibido
        return [usuario.id, usuario.username, usuario.name, usuario="sin bio"];
    }

    static updateUserUsername(usuario, username_nuevo){     // updateUserUsername(objeto_instanciado_que_recibe, parametro_que_sera_cambiado). Metodo que cambia la propiedad "username" del objeto que recibe
        return usuario.username= username_nuevo;
    }

    static getAllUsernames([usuario1, usuario2, usuario3]){ // Metodo que recibe 3 objetos instanciados y regresa los parametros username de cada uno en una lista
        return [usuario1.username, usuario2.username, usuario3.username];
    }
}
module.exports= UserService;