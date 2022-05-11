const User= require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        const user= new User(1, "jesusBeB", "Jesus", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("jesusBeB")
        expect(user.name).toBe("Jesus")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})