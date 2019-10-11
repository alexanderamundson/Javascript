/*
Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.
*/

function containsSameLetters(arr) {
  let first = arr[0].toLowerCase().split('');
  let second = arr[1].toLowerCase().split('');
  
  let hasThisLetter = false;
  for (let i = 0; i < second.length; i++) {
    
    if (first.includes(second[i]) ) {
        hasThisLetter = true;
    } else {
      hasThisLetter = false;
      break;
    }

  }

  return hasThisLetter;
}

containsSameLetters(["hello", "hey"]);