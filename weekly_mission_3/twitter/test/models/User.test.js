const User= require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user= new User(1, "jesusBeB", "Jesus", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("jesusBeB")
        expect(user.name).toBe("Jesus")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()    // verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    });
})