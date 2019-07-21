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