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

//4.
/*
The flag that ignores case is the i flag. 
You can use it by appending it to the regex. 
An example of using this flag is /ignorecase/i.
*/

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
console.log(result);//displays true

//5.
/*
You can extract the regex pattern matches you found 
with the .match() method. To use the .match() method, 
apply the method on a string and pass in the regex 
inside the parentheses.
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 
console.log(result);//displays 'coding'

//6.
/*
The "g" flag indicates that the regular expression should 
be tested against all possible matches in a string.
Without the g flag, it'll only test for the first match.
*/ 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; //used to search for all matches of the string twinkle ignoring case
let result = twinkleStar.match(starRegex);
console.log(result);//displays 'Twinkle,twinkle'
