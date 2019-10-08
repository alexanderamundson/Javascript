///////////////////////////////////////////
//EXERCISE 1:
//Numbers expressed as a string can be coerced into a number
//in several ways

let str = "98";
//1
+str; 
//2
str - 0;
//3
str * 1; 
//4
parseInt(str, 10);//converts str into a base 10 decimal number
//5
parseFloat(str);

////////////////////////////////////////////
//EXERCISE 2
//Extract numbers from a string
 
//method 1
let str = "This string has numbers 34 and 88";
let final = str.split(" ").
               filter(function(elem) {
                       return !isNaN(elem);
                      }).
                map(function(val) {
                       return parseFloat(val); 
                });
//alternative method 
let str = "This string has numbers 34 and 88";

let numbers = str.split(" ").
               filter(elem => !isNaN(elem) ).
               map(val => parseFloat(val) );