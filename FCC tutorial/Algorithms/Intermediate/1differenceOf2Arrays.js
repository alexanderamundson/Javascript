function diffArray(arr1, arr2) {

    var newArr = [];
    var found = false;
    //loop thru each element in arr1
    for (var i = 0; i < arr1.length; i++) {
      for (var j=0; j < arr2.length; j++) {
        //check if each element in arr1 is in arr2
        if (arr2[j] === arr1[i]) {
          found = true;
        }
      }//if element is in both, add to newArr
      if (!found) {
        newArr.push(arr1[i]); 
      }
      found = false;
    }
    
    //Now, check if vals in arr2 are in arr1
    for (let i = 0; i < arr2.length; i++) {
      for (var j=0; j < arr1.length; j++) {
        if (arr1[j] === arr2[i]) {
          found = true;
        }
      }
      if (!found) {
        newArr.push(arr2[i]); 
      }
      found = false;
    }
    return newArr;
  }
  
  var test1 = [[1, 2, 3, 5], [1, 2, 3, 4, 5]];
  diffArray( test1[0], test1[1]);//returns 4
  
  var test2 = [["andesite", "grass", "dirt", "pink wool", "dead shrub"],  
             ["diorite", "andesite", "grass", "dirt", "dead shrub"]];
  diffArray( test2[0], test2[1]   );//returns ["diorite", "pink wool"]
  