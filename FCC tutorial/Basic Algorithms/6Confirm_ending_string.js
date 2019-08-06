//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  var ending;
  var endingStartingIndex = str.length - target.length;
  ending = (str.substring(endingStartingIndex));
  return ending === target;
}

confirmEnding("Bastian", "n");//returns true
confirmEnding("Connor", "n");// returns false.