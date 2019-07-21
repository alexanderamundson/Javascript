//JavaScript code challenge 2

//Exercise 1 - A
/*Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.*/
// Reverses the input array using push method
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reverseArray = function(inputArray) {
  let reverse = [];
  for (var i = inputArray.length - 1; i >= 0; i--) {
    reverse.push(inputArray[i]);
  }
  return reverse;
};
console.log(reverseArray(sentence));/*displays [This will all make sense] */
//1-B
//Reverses array alternative solution
const reverseArrayAlternative = function(input) {
  let reverse = [];
  var index = input.length-1;
  for (var j = 0 ; j < input.length; j++, index--){
    reverse[index] = input[j];
  }
  return reverse;
};
console.log(reverseArrayAlternative(sentence));
//1-C
//Reverses the array without using a helper array
const reverseArrayAlternativeTwo = function(array) {
  var length = array.length;
  for (var i = 0; i <= (length - 1) / 2; i++){
    var temp = array[i];
    array[i] = array[length - 1 - i];
    array[length -1 -i] = temp;
  }
  return array;
}
console.log(reverseArrayAlternativeTwo(sentence));


////////////////////////////
//Exercise 2-A
/*Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '*/
const convertToBaby = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push('baby ' + array[i]);
  }
  return newArray;
};
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));/* Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']; */

////////////////////
//Exercise 3-A
/*Write a function which takes in an array of integers an returns an array that shows the smallest power of two that is larger than each number in the input array*/
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
           var j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] 

/////////////////////
//Exercise 4-A

//Write a function declineEverything() that takes in an array of strings and, 
//using .forEach(), loops through each element in the array and calls 
//politelyDecline() with each of them
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = function(stringsArray) {
  stringsArray.forEach(politelyDecline);
};
/*Write a function acceptEverything() that takes in an array of strings and loops
 through each element in the array and grudgingly accepts each of them, by logging
 to the console in the following format: 'Ok, I guess I will eat some [element].'*/
const acceptEverything = function(stringArray) {
  stringArray.forEach( function(element) {
    console.log(`Ok, I guess I will eat some ${element}.`);
  });
};
