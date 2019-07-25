const _ = {
  //Returns whether the input 'number' is in the range 
  //between 'lower' and 'upper'
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  //returns a boolean value that specifies
  //whether the number input is between     
  //'start' and 'end'
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
  }
};




// Do not write or modify code below this line.
module.exports = _;