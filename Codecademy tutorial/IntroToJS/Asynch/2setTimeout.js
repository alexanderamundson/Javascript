function usingSTO() {
    console.log('This asynchronous code runs last even though its declared first in the code!');
}
setTimeout(usingSTO, 3000);

console.log("This is the second command in setTimeout.js.");


console.log("This is the last line of code in setTimeout.js, but the asynch code will run next");