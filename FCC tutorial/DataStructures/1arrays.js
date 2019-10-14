//1.
/*
Arrays are a linear data structure whose elements are accesed by indices.
Array indices start at 0.  Arrays have a length property that returns the
number of elements in the array.
*/
var arrayName = [1, 3, 4, 6];
console.log(arrayName[0]);//displays 1
console.log(arrayName.length);//displays 4

//2
/*PUSH() AND UNSHIFT() METHODS  [ADD ELEMENT/S TO ARRAY]
An element or a series of elements can be added to an array using the
push or unshift methods. push adds element/s to the end of the array. unshift 
adds element/s to the beginning of the array.
 */
var array = [1,2,3];
array.push(4);
array.unshift(0);
console.log(array);//displays 0, 1, 2, 3, 4

//3
/*POP() AND SHIFT() METHODS [REMOVE FIRST AND LAST ELEMENT OF ARRAY]
An element or a series of elements can be removed an array using the
pop or shift methods. pop removes an element from the end of the array. unshift 
removes the first element in the array.
 */
var arr = [1,2,3];
arr.pop();//removes 3
arr.shift();//removes 1
console.log(array);//displays 2

//4
/*POP() AND SHIFT() METHODS [BOTH OF THESE METHODS RETURN THE REMOVED ELEMENT]
 */
function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
}
var myarray = ['challenge', 'is', 'not', 'complete'];
console.log(  popShift(myarray)  );//displays [challenge, complete]

//5
/*SPLICE() [USING SPLICE WITH 2 PARAMETERS TO REMOVE ELEMENTS FROM ANY INDEX IN ARRAY]
splice()'s first parameter is the index on the array from which to begin
removing elements; the second parameter is the number of elements to delete.
*/

function sumOfTen(arr) {
    //removes elements 1 and 5 at indices 2 and 3
    arr.splice(2, 2); 
    console.log(arr);//displays [2, 5, 2, 1] bc two elements were removed
    return arr.reduce((a, b) => a + b);//returns sum of remaining elements in arr
}
  
var startArray = [2, 5, 1, 5, 2, 1];
console.log(sumOfTen(startArray));//displays 10 
///////////////////////////////////(2 + 5 + 2 + 1 = 10)

//6
/*SPLICE() [USING SPLICE() WITH 3 PARAMETERS TO REMOVE & ADD SIMULTANEOUSLY]
When using splice() with more than 2 parameters, the first two params represent
the same values as described in the previous example. The third parameter
represents an element to be added to the array at the index listed in the first
parameter. Note that multiple elements can be added by passing elements
as the 4th, 5th, and so on parameters
*/
function htmlColorNames(arr) {
    //starts from index 0, removes 2 elements, and then adds the 2 given
    //elements starting at index 0
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}
var arr = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'];
console.log(htmlColorNames(arr)); 
//displays 'DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'


//7
/*SLICE() [CREATES A SHALLOW COPY OF ARRAY OR PORTION OF AN ARRAY]
calling the array slice() method without passing any parameters
returns a copy of the array.  slice can take 2 parameters to return
a copy of a portion of the array. It copies the elements from the 
index of param 1 up to,but not including, the value at the index 
of param 2.
*/
function forecast(arr) {
    var a = arr.slice(2, 4)//arr[2] and arr[3] are stored in 'a'
    return a;
 }
  
var myArr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
console.log(forecast(myArr));

//8A
/*[...] Spread Operator ES6
 ES6's new spread operator allows us to easily copy all of an array's elements, 
 in order, with a simple and highly readable syntax: simple the array name 
 preceded by ellipses.  (...arrayName)
*/

//this function returns 'num' copies of 'arr'
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push( [...arr] );//adds a copy of arr using spread operator ES6
      num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
//displays true, false, true, true, false, true


//8B
/*Another expample of Array Spread Operator
*/
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
}  
console.log(spreadOut());
//displays: learning,to,code,is,fun


//9
/*Check for the presence of a specified element in an given array. indexOf()
indexOf()takes an element as a parameter, and when called, 
it returns the position, or index, of that element, or -1 
if the element does not exist on the array.
*/
function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1;
}  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));//displays: false
quickCheck([3, 5, 9, 125, 45, 2], 125);//returns true

