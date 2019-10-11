//Return the length of the longest word in the provided string.
//Your response should be a number.

//Method 1: For Loop
function findLongestWordLength(str) {
  var arr = str.split(" ");
  var longestWord = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Method 2: Sort function
function findLongestWordLength(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}

//Method 3: Reduce function
function findLongestWordLength(str) {
 var arr = str.split(' ');

  function getLongest(longest, current) {
    if (current.length > longest){
      return current.length;
    }
      return longest;
  }
  var word = arr.reduce(getLongest, 0);
  return word;
}


