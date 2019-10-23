/*
1. Creating an error 
is not the same as throwing an error. A thrown error will cause the 
program to stop running.
*/
console.log(new Error('User missing name'));/*displays the error
but does not stop the program
*/
console.log('logging the error above wont stop our program from running.');


//2.
/*
An error must be thrown for it to halt the program.
*/
//this will halt the program 
throw new Error('Username or password do not match');
