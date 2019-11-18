function myReplace(str, before, after) {
    //check whether 'before' starts with capital letter
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1);
    } else {
      after = after[0].toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);   
 }
  
  
console.log(
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);//displays: A quick brown fox leaped over the lazy dog

console.log(myReplace("His name is Tom", "Tom", "john")
);//displays "His name is John"