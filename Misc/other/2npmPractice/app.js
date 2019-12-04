//1) Faker creates random names, addresses, phone nums, etc..
/*
const faker = require('faker');

for (let i = 0; i < 10; i++) {
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
    console.log(faker.internet.email());
}
*/
//


/////  2A) using ES5].  request is the simplest way possible to make http calls
const request = require('request');
//jsonplaceholder is a fake Online REST API for Testing and Prototyping
request('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
 // console.log('error:', error); // Print the error if one occurred
 // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 // console.log('body:', body); // Print the HTMLs for given page
 if (!error && response.statusCode == 200) {
     let parsedData = JSON.parse(body);//parses body to JSON
     console.log(parsedData[5].title);
 }
});

/////  2B) same as above 2A but using ES6 promises.
const rp = require('request-promise');
rp('https://jsonplaceholder.typicode.com/users/1')
    .then( (body) => {
        let parsedData = JSON.parse(body);
        console.log(`${parsedData.name}'s phone # is ${parsedData.phone}.`);
    })
    .catch( (error) => {
        console.log("ERROR! " + error);

    })


