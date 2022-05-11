class User {
    constructor(id, username, name, bio){
        this.id= id
        this.username= username
        this.name= name
        this.bio= bio
        this.dateCreated= new Date()
        this.lastUpdated= new Date()
    }
    
    get getUsername(){      // get nombreFuncion()   obtiene la propiedad Username
        return this.username    // retorna la propiedad obtenida
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

    set setUsername(newUsername){   // set nombreFuncion(parametro)     recibe un parametro que modificara una propiedad de la clase
        this.username= newUsername  // this.propiedadClase= parametrorecibido   modifica o actualiza la propiedad de la clase
    }

    set setBio(newBio){
        this.bio = newBio
    }
}
module.exports= User;