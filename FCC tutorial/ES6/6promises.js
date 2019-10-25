//1
/*
Promises are usually used to execute tasks asynchronously. 
When the task completes, the promise either resolves or rejects.
*/
const myPromise = new Promise((resolve, reject) => {
});

//2
/*
The resolve and reject parameters given to the promise argument are
used to complete the promise. resolve is used when you want your promise
to succeed, and reject is used when you want it to fail. These are methods 
that take an argument, as seen below.
*/
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;      
    if(responseFromServer) {
      resolve('We got the data');
    } else {  
      reject('Data not received');
    }
});
  
//3a Then() method
/*
The then() method is executed immediately after your promise is fulfilled with resolve
*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});
//the callback in the then() method runs when the promise has been resolved
makeServerRequest.then(function(result) {
  console.log(result)}
);

//3b
/*catch() method runs if promise is rejected
*/
makeServerRequest.then( result => {
    console.log(result);
}).catch( error => {
    console.log(error);
});