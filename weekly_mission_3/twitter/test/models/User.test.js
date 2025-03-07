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

    test('Add getters', () => {
        const user= new User(1, "jesusBeB", "Jesus", "Bio")
        expect(user.getUsername).toBe("jesusBeB")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () => {
        const user= new User(1, "jesusBeB", "Jesus", "Bio")
        
        user.setUsername= "jbeltran"    // setUsername cambia o actualiza la propiedad Username
        expect(user.username).toBe("jbeltran")

        user.setBio= "New bio"  // setBio cambia o actualiza la propiedad Bio
        expect(user.bio).toBe("New bio")
    })
})