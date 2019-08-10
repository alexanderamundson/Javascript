//Remove all falsy values from an array.
function removeFalsy(arr) {
   return arr.filter( Boolean);
}

removeFalsy([1, null, NaN, 2, undefined]);// should return [1, 2]
removeFalsy([false, null, 0, NaN, undefined, ""]);// should return []