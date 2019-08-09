/*Use the array methods slice and splice to copy 
each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The INPUT ARRAYS SHOULD REMAIN THE SAME after the function runs
*/
function sliceAndSplice(arr1, arr2, n) {
  let val1 = arr1.slice(0);
  let val2 = arr2.slice(0);
  for (let i=0; i < arr1.length; i++, n++) {
    val2.splice(n, 0, val1[i]);
  }
  return val2;
}

sliceAndSplice([1, 2, 3], [4, 5, 6], 1);//should return [4,1,2,3,5,6]
sliceAndSplice([1, 2], ["a", "b"], 1);// should return ["a", 1, 2, "b"]