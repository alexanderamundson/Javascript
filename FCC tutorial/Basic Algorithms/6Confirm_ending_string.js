//Check if a string (first argument, str) ends with 
//the given target string (second argument, target)

function confirmEnding(str, target) {
  var stringLength = str.length;
  var targetLength = target.length;
  var ending = str.substring(stringLength - targetLength);
  return ending === target ? true : false;
  
  //Same code condensed to single line:
  //return str.substring(str.length - target.length) === target ? true: false;
}

confirmEnding("Bastian", "n");//returns true
confirmEnding("Abstraction", "action");//returns true
confirmEnding("Connor", "n")//returns false