//returns whether or not the input is a boolean value
function booWho(bool) {
  return typeof bool === 'boolean';
}

isBoolean(null);
isBoolean(false);// should return true.
isBoolean([1, 2, 3])// should return false.