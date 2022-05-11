const UserService= require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        
        const user= UserService.create(1, "jesusBeB", "Jesus")

        expect(user.id).toBe(1);
        expect(user.username).toBe("jesusBeB");
        expect(user.name).toBe("Jesus");
        expect(user.bio).not.toBeUndefined();
    })

    test('2. Get all user data in a list', () => {
        const user= UserService.create(1, "jesusBeB", "Jesus")  // se instancia objeto "user" a partir de la clase UserService mediante un metodo "create" y que a su vez hereda de la clase User
        const userInfoInList= UserService.getInfo(user)   // userInfoList sera una lista que recibira la informacion al enviar el parametro "user" al metodo getInfo de la clase UserService

        expect(userInfoInList[0]).toBe(1);        // se testean los elementos de la lista
        expect(userInfoInList[1]).toBe("jesusBeB");
        expect(userInfoInList[2]).toBe("Jesus");
        expect(userInfoInList[3]).toBe("sin bio");
    })

})