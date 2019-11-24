//Converts multidimensional array into a single array
function steamrollArray(arr) {
    while (arr.some(Array.isArray)) 
      arr = [].concat(...arr); 
      return a;
}
  
steamrollArray([1, [2], [3, [[4]]]]);//should return [1,2,3,4] 
  