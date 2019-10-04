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

//7.
/*
The period "."  is called the wildcard character.
The wildcard character . will match any single character.
*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;//this regex will match a string that contains any character followed by 'un' (sun, fun, bun, etc..)
let result = unRegex.test(exampleStr);
console.log(result);//displays true

//8.
/*
Use a character class with vowels in your regex vowelRegex 
to find all the vowels in the string quoteSample.
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

//9
/*
Inside a character set, you can define a range of characters 
to match using a hyphencharacter: -
*/
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

//10.
/*
Create a single regex that matches a range of letters
 between h and s, and a range of numbers between 2and 6. 
*/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex);

//11.
/*
place a (^) character after the opening
bracket and before the characters you do not want to match.
 */
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex); 
console.log(result);//displays:  ,b,l,n,d, ,m,c,.

//12.
/*
 To match a character (or group of characters) that appears
 one or more times in a row, You can use the "+" character 
*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
console.log(result);//displays [ss, ss]

//13.
/* 
To match a character (or group of characters) that appears 
ZERO or more times in a row, you can us the "*" character.
(same as "+" in #12 above except it also matches a sequence
of ZERO instances of the specified character of string of chars)
*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aaa*/i; 
let result = chewieQuote.match(chewieRegex);
console.log(result);//displays Aaaaaaaaaaaaaaa