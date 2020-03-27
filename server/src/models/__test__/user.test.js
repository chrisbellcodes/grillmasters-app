const mongoose = require('mongoose');
const UserModel = require('../user.model');
const testDb = require('../../__test__/db-handler.js');

describe('User Schema Test', () => {
    //  Setup: What's needed (data, etc.) to be ready for next step
    const userData = {
        firstName: 'Jon',
        lastName: 'Snow',
        admin: false
    }

    beforeAll(async () => {
        await testDb.connect();
    })

    test('Creates and saves a user', async () => {
        // Excercise: running the tested action
        const validUser = new UserModel(userData)
        const savedUser = await validUser.save();

        // Veritfy: 
        expect(savedUser._id).toBeDefined()
        expect(savedUser.firstName).toBe(userData.firstName)
        expect(savedUser.lastName).toBe(userData.lastName)
        expect(savedUser.admin).toBe(userData.admin)
    })
    // Remove and close the db and server.
    afterAll(async () => await dbHandler.closeDatabase());
 
})