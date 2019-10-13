const _ = {
  
  /***.clamp() modifies the provided number to be within the two provided bounds***/
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  //returns a boolean value that specifies whether the 
  //number input is between 'start' and 'end'
  inRange(number, start, end){
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    } 
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }    
    return (start <= number && number < end );
  },
  
  //returns an array of the words in the input 'string'
  words(string) {
    let words = string.split(' ');
    return words
    
  },
  
  //adds spaces evenly to both sides of the 
  //input string to make it reach the desired length
  pad(string, length){
    if (string.length >= length) {
      return string;//
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);   
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength));
    return paddedString;
  },

  //returns a boolean to show whether the input object
  //has a value at the specified key
  has(object, key) {
    const hasValue = object[key];
    return (hasValue != undefined) ? true : false; 
  },

  //Swaps each key and its value in the
  //input object
  invert(object) {
    let invertedObject= {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject.originalValue = key;     
    }
    return invertedObject;
  },
  
  //Returns the first key in the input object for which running the 
  //'predicate' function returns true. Returns undefined if 'predicate
  //never returns true
  findKey(object, predicate) {
    for (let key in object){
      if (predicate(object[key]) === true) {
        return key;
      }
    } return undefined;
  },

  //Creates a slice of array with 'number' elements 
  //dropped from the beginning.
  drop(array, number){
    if (number === undefined) {
        number = 1;
    }
    return array.slice(number);
  },

  //Creates a slice of array excluding elements dropped from the 
  //beginning. Elements are dropped until predicate returns falsey
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array);
    });
    return this.drop(array, dropNumber);  
  },

  //Creates an array of elements split into groups the length of size. 
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
    let finalArray = []; 
    for (let i = 0; i <  array.length; i += size) {
      let arrayChunk = array.slice(i, size + i);
      finalArray.push(arrayChunk);
    }
    return finalArray
  }

  
};

/*** .clamp()
If the provided number is smaller than the lower bound, it will return the lower bound as the final number.
If the number is larger than the upper bound, it will return the upper bound as the final number
If the number is already within the two bounds, it will return the number as the final number***/
