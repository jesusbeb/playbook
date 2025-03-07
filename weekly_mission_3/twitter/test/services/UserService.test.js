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

    test('3. Update username', () => {
        const user= UserService.create(1, "jesusBeb", "Jesus")  // se instancia objeto a partir de la clase UserService mediante un metodo "create" y que a su vez hereda de la clase User
        UserService.updateUserUsername(user, "JBeltran")    // se usa el metodo updateUserUserName de la clase UserService. "user" objeto instanciado que se envia. "JBeltran" nuevo username que se envia
        expect(user.username).toBe("JBeltran")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1= UserService.create(1, "jesusBeB1", "Jesus1")    // se instancia 3 objetos con la clase UserService
        const user2= UserService.create(2, "jesusBeB2", "Jesus2")
        const user3= UserService.create(3, "jesusBeB3", "Jesus3")
        const usernames = UserService.getAllUsernames([user1, user2, user3])    // usernames sera una lista que obtendra la informacion del metodo "getAllUsernames" de la clase UserService
        expect(usernames).toContain("jesusBeB1")
        expect(usernames).toContain("jesusBeB2")
        expect(usernames).toContain("jesusBeB3")
    })    
})