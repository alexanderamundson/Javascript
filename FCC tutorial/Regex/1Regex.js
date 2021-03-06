
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
between h and s, and a range of numbers between 2 and 6. 
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


//14.
/*
Return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
Recall that the wildcard . in a regular expression matches any character.
*/
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.>/; 
let result = text.match(myRegex);//result is <h1>

//15.
/*
Write a greedy regex that finds one or more criminals within a group of other people. 
A criminal is represented by the capital letter C.
*/
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/; 
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);//displays ["CCC"]


//16.
/*Using the carrot character, '^' OUTSIDE of a character set,
looks to match following characters at the BEGINNING of the string
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; //looks for Cal at the BEGINNING of the string
let result = calRegex.test(rickyAndCal);// returns true
//if the string was  "This string does not start with Cal", then the test would return false
//because Cal is not at the beginning of the string


//17.
/*
You can search the end of strings using the dollar 
sign character $ at the end of the regex.
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);


//18.
/*
the regex [A-Za-z0-9_] matches all letters, numbers, or an underscore.
this common pattern has a shortcut:   \w 
This character class matches all letters, numbers, and underscores.

Use the shorthand character class \w to count the number of 
alphanumeric characters in various quotes and strings
*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;///length shows the total number of
//digits that match the regex


//19.
/* \W is shorthand that works the opposite way of \w:
   \W is used for matching all NON-alphanumeric characters.
 */
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;
//console.log(result);//displays 6 (5 spaces, 1 period)


//20.
/* \d is shorthand for [0-9]: it matches all numeric digits
*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;//same as /[0-9]/g
let result = movieName.match(numRegex).length;//result is 4


//21.
/*
\D is the opposite of \d : it matches all NON-numeric digits
*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;//result is 17


//22.
/*
Write regex to match the following:
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z](([0-9][0-9]+)|[a-z]+[0-9]*)$/i; 
let result = userCheck.test(username);


//23.
/*You can search for whitespace using \s
*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);// Returns [" "," "," "," "," "]


//24.
/*You can search for NON-whitespace using \S
*/
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);


//25.
/*You can specify the lower and upper number of patterns with quantity specifiers.
  Quantity specifiers are used with curly brackets ({ and }).
*/
let ohStr = "Ohhh no";

//this regex matches the phrase "Oh no" only when it has 3 to 6 letter h's.
let ohRegex = /Oh{3,6} no/; 

let result = ohRegex.test(ohStr);//returns true
result = ohRegex.test("Ohhhhhh no");// also returns true
result = ohRegex.test("Ohhhhhhhhhhhhhh no");// returns false, string has > 6 "h's"


//26. The quantity specifer does not require an upper limit
/* If the upper bound number of a quantity specifcer is ommited,
   it will match an pattern that is at least the lower number.
   To use quantity specifer with no upper bound, simply write
   the lower bound number follow by a comma:  {lowerBound#,}
*/
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);//result is true
result = hasRegex.test("Hazah");//result is false, string has < 3 "z's"


//27 quantity specifers for a specific number of matches, not a range
/*
To specify a certain number of patterns, 
just have that one number between the curly brackets.
*/
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);//result is true


//28.
/*
using ? after a character indicates that the character is optional.
The regex will match if the character is present or not.
*/
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);
//This matches both favorite and favourite


//29. lookaheads
/*Use lookaheads in the pwRegex to match passwords that:
 are greater than 5 characters long, 
 do not begin with numbers, 
 and have two consecutive digits.
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D+\d{2,})/; 
"banan1".match(pwRegex);//should not match "banan1"
"bana12".match(pwRegex);//should match "bana12"
"abc123".match(pwRegex);//should match
"1234".match(pwRegex);//should NOT match


//30.
/*Create a regex that matches the names of Franklin Roosevelt or Eleanor Roosevelt
in a case sensitive manner. It should also allow for middle names.
*/
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).+Roosevelt/; 
let result = myRegex.test(myString); 


//31.
/*
You can search for repeat substrings using capture groups.
Parentheses, ( and ), are used to find repeat substrings. 
You put the regex of the pattern that will repeat in between the parentheses.
Using the .match() method on a string will return an array
with the string it matches, along with its capture group.
*/
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
//using ^ and $ ensures that it only matches an 
//exact match - 3 numbers sepeated by spaces.
//Without these, the regex would also match 4 or more numbers seperated by spaces 
let result = reRegex.test(repeatNum);
/*
Your regex should match "42 42 42".
Your regex should match "100 100 100".
Your regex should not match "42 42 42 42".
Your regex should not match "42 42".
Your regex should not match "101 102 103".
*/


//32.
/*the string.prototype.replace() method
takes two arguments: a regex and a replacement substring.
Calling replace() on a string replaces substrings that match 
the regex with the replacement string 
*/
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);


//33.
/*
Using the following regex in a replace method as follows,
works the same as the String.prototype.trim() method.
It removes whitespace from the beginning and end of a string.
*/
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, ''); 