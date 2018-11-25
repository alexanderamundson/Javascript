/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

//method 1: for loop
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');

}

titleCase("I'm a little tea pot");//returns " I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");//returns "Short And Stout"

//method 2: map method





