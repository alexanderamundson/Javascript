//returns whether or not the input is a boolean value
function booWho(bool) {
  return typeof bool === 'boolean';
}

isBoolean(null);
booWho(false);// should return true.
booWho([1, 2, 3])// should return false.