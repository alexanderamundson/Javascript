function getIndexToIns(arr, num) {
  //sort arr
  arr.sort(function(elem1, elem2) {
    return elem1 -elem2;
  });
  console.log(arr);
  //find index of first number greater than 'num'
  //will return -1 if num is greater than all elements in arr
  let value = arr.find(function(element) {
      return element >= num;
  });
  //return the index of 'value' unless 'value' is negative.
  //If 'value' is negative, return arr.length 
  return (arr.indexOf(value)) >=0 ? (arr.indexOf(value)) : arr.length; 
 
}

getIndexToIns([10, 20, 30, 40, 50], 30);// should return 2.
getIndexToIns([40, 60], 50);// should return 1.
getIndexToIns([3, 10, 5], 3);// should return 0.
getIndexToIns([5, 3, 20, 3], 5);// should return 2.