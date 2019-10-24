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
  