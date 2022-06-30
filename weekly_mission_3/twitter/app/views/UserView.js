const UserService = require('./../services/UserService')

class UserView{

    static createUser(payload){
        /*
        if ( payload === null ){    // requerimiento 1
            return {error: 'payload no existe'}
        }      

        else if ( typeof payload.username === 'string' || typeof payload.name === 'string' || typeof payload.id === 'number' ){     // requerimiento 4
            return UserService.create(payload.id, payload.username, payload.name)
        }
        else {  // requerimiento 2 y 3
            return {error: 'necesitan tener un valor válido'}
        }
    }*/
    
        if( payload === null ){ // Requerimiento 1
            return {error: 'payload no existe'}
        }
        else if( payload.username === null || payload.name === null || payload.id === null )   // Requerimiento 2
            return {error: 'necesitan tener un valor válido'}
        
        else if ( ( payload.username === null && typeof payload.name === 'string' && typeof payload.id === 'number' )   // Requerimiento 3
            || ( typeof payload.username === 'string' && payload.name === null && typeof payload.id === 'number' )
            || ( typeof payload.username === 'string' && typeof payload.name === 'string' && payload.id === null ) )
            return {error: 'necesitan tener un valor válido'}
        
        else{
            return UserService.create(payload.id, payload.username, payload.name)
        }
    }
}

module.exports = UserView;

/* Requerimientos 
Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` a través de `userService`. Crea un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que contenga información para crearlo.
Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
*/

