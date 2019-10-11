/*
Return the sum of an array of two numbers
plus the sum of all the numbers between them.

The Lowest Number May NOT always come first
 */

function sumAll(arr) {

    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    
    let total =0;
    
    for (; start < end; start++) {
      total += start;
    }
    
    return total +  end;
  }
  
  sumAll([1, 4]);//returns 10
  sumAll([5, 10]);//return 45
  sumAll([4, 1]);//returns 10
  sumAll([10, 5]);//return 45