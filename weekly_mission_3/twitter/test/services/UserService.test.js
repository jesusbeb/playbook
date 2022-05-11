const UserService= require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        
        const user= UserService.create(1, "jesusBeB", "Jesus")

        expect(user.id).toBe(1);
        expect(user.username).toBe("jesusBeB");
        expect(user.name).toBe("Jesus");
        expect(user.bio).not.toBeUndefined();
    })
})