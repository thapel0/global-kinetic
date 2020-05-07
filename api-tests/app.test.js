'use strict';

const { data, getData ,postData} = require('./node-fetch.js');

describe('test employee endpoint: ',  ()  =>  {
    test('request callback was successfull,data returned ',async ()=>{
        const endpoint = 'employees'
        const jsondata = await getData(endpoint); 
        expect(jsondata).toBeTruthy();
    });
    const id = [10,5,24];
    id.forEach(id => {
        test(`parameterization: request per employee id ${id} has returned and match the id in results`,async ()=>{
            const endpoint = `employee/${id}`
            const jsondata = await getData(endpoint); 
        
            expect(jsondata.data.id).toBe(id);
        });
    })

    test.skip('record was added successfully',async ()=>{
        const endpoint = 'employee/25'
        const jsondata = await getData(endpoint); 
        console.log(jsondata);
        expect(jsondata).toMatchObject({data: {id: '25',name: 'X Æ A-12 Musk',salary: '10000',age: '20' , profile_image: ''}});
     });
})
