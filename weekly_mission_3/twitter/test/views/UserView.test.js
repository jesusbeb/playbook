const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
    test("1. Return an error object when try to create a new user with an null payload", () => {
        const payload= null; // se crea un payload nulo
        const result = UserView.createUser(payload); // se envia el valor del payload al metodo createUser de la clase UserView, para ser validado
        expect(result.error).toMatch(/payload no existe/) // se testea el valor esperado despues de ser enviado el payload
    })

    test("2. Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"} // se crea un objeto con una propiedad nula
        const result = UserView.createUser(payload) // se envia el valor del payload
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("3. Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })

    test("4. Create a user by a given valid payload", () => {
        const payload ={username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
})