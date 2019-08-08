//Repeat a given string str (first argument) 
//for num times (second argument). Return an 
//empty string if num is not a positive number.

//method 0: while loop
function repeatStringNumTimes(str, num) {
   let repeat = '';
   if (num < 0) {
     return '';
   }
   for (let i = 0; i < num; i++) {
       repeat += str;
   }
   return (repeat);   
}


//method 1: while loop
function repeatStringNumTimes(str, num) {
  var repeat = '';
  while (num > 0) {
    repeat += str;
    num--
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);//returns "abcabcabc"
repeatStringNumTimes("*", 8);//returns "********"
repeatStringNumTimes("abc", -2);//returns ""


//method 2: recursion
function repeatStringNumTimes(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, --times);
}


//method 3: ES6 repeat function
function repeatStringNumTimes(string, times) {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}