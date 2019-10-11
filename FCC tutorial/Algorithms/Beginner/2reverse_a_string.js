function reverseString(str) {
  let reversed = "";    
  for(let char of str){
    reversed = char + reversed;
  }
  
  return reversed;
}

reverseString("hello");


//second way using array and reverse
function reverseString(str) {
  var array = str.split('');
  return array.reverse().join('');
}

reverseString("hello");