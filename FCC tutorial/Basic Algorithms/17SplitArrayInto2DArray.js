/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array
*/

function splitArrayInGroups(arr, size) {
  let splitArrays = [];
  
  for (let i=0, count = 0; i < arr.length;i+=size) {
     let subArray = [];
     
     for (let j=0; j < size; j++) {
       if (typeof arr[count] !== 'undefined') {
         subArray.push(arr[count++]);
       }      
     }
     splitArrays.push(subArray);
  }
  return splitArrays;
}


splitArrayInGroups(["a", "b", "c", "d"], 2);
//should return [["a", "b"], ["c", "d"]]
splitArrayInGroups([0, 1, 2, 3, 4, 5], 2);;
//should return [[0, 1], [2, 3], [4, 5]]
splitArrayInGroups([0, 1, 2, 3, 4, 5], 4);
//should return [[0, 1, 2, 3], [4, 5]]