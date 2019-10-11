/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  if (str.length > num) {
    console.log( str.substring(0, num)  );
    return str.substring(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);//returns "A-tisket..."
truncateString("A-", 1);//returns "A..."
truncateString("Absolutely Longer", 2);//returns "Ab..."