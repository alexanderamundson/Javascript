/*Write a function that takes two or more arrays and returns
a new array of unique values in the order of the original provided arrays.

All values present from all arrays should be included in their 
original order, but with no duplicates in the final array.
*/
function uniteUnique(...args) {
    let output = [];
    args.forEach(function(subarray) {
      subarray.forEach( (value) => {
         if (!output.includes(value) )  
          output.push(value); 
      });
    });
    return output;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);// should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]);// should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// should return [1, , 3, 5, 4, 6, 7, 8]