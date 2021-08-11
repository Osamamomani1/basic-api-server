'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/kiraa'); // async
        expect(response.status).toEqual(404);
    });

    it('handles not found request', async () => {
        // add test
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

    it('handles post for database request', async () => {
        // add test
        const response = await request.post('/food'); // async
        expect(response.status).toEqual(200);
    });

    it('handles all food from database requsest', async () => {
        // add test
        const response = await request.get('/food'); // async
        expect(response.status).toEqual(200);
    });

    it('handles one spicific food database request', async () => {
        // add test
        const response = await request.get('/food/1'); // async
        expect(response.status).toEqual(200);
    });

    it('handles update spicific food database request', async () => {
        // add test
        const response = await request.put('/food/10'); // async
        expect(response.status).toEqual(200);
    });

    it('handles delet one spicific food database request', async () => {
        // add test
        const response = await request.delete('/food/9'); // async
        expect(response.status).toEqual(204);
    });

   

});

