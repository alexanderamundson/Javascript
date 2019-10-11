function diffArray(arr1, arr2) {
    var longerA = [];
    var shorterA = [];
  
    if (arr1.length >= arr2.length) {
       longerA = arr1; shorterA = arr2;
    }
    if (arr2.length >= arr1.length) {
       longerA = arr2; shorterA = arr1;
    }
  
    var newArr = [];
    var found = false;
    //loop thru each element in arr1
    for (var i = 0; i < longerA.length; i++) {
      for (var j=0; j < shorterA.length; j++) {
        //check if each element in arr1 is in arr2
        if (shorterA[j] === longerA[i]) {
          found = true;
        }
      }//if element is in both, add to newArr
      if (!found) {
        newArr.push(longerA[i]); 
      }
      found =false;
    }
    
    //reset longerA and shorterA
    if (arr1.length >= arr2.length) {
     longerA = arr1; shorterA = arr2;
    }
    if (arr2.length >= arr1.length) {
     longerA = arr2; shorterA = arr1;
    }
    //reset found
    found = false;
  
    //Now, check if vals in arr2 are in arr1
    for (let i = 0; i < shorterA.length; i++) {
      console.log("work");
      console.log("iteration: " + i);
      for (var j=0; j < longerA.length; j++) {
        if (longerA[j] === shorterA[i]) {
          found = true;
          console.log("in both "+ shorterA[i])
        }
      }
      if (!found) {
        newArr.push(shorterA[i]); 
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
  