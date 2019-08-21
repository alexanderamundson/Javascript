//1.
/*
JavaScript has multiple ways to use regexes. One way to test a regex 
is using the .test() method. The .test() method takes the regex, applies it
to a string (which is placed inside the parentheses), and returns true or false
if your pattern finds something or not.
*/ 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result);//displays true

//2.
/*
This test checks for a literal match of the string 'Waldo'.
it is case sensative.
*/ 

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);//displays true


//3.
/*
You can search for a match of one pattern among multiple pattern options
using the alternation or OR operator: |.
This operator matches patterns either before or after it. If you wanted 
to match "yes" or "no", the regex you want is /yes|no/
*/ 

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
console.log(result);//displays true