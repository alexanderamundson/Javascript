//Write a function that returns true if the input parameter is 'Wednesday'
//else return false
const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
      return true;
  } else {
    return false;
  }
  
};


//Same thing but using Arrow Function
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//same function implemented in a single line
const plantNeedsWater = day => day === 'Wednesday' ? true : false;



console.log( plantNeedsWater('Tuesday') );//returns false
console.log( plantNeedsWater('Wednesday') );//returns true