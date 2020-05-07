const fetch = require("node-fetch");
const baseUrl = "http://dummy.restapiexample.com/api/v1/";

let data, returnJsonData


const getData = async endpoint => {
  try {
    const url = baseUrl + endpoint;
    const response = await fetch(url,{
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    });


    const json = await response.json();
    returnJsonData = json;
    return returnJsonData;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (endpoint,body) => {
        const url = baseUrl + endpoint;
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(json => console.log(json));
};

module.exports= { data, getData ,postData}