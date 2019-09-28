//1.String interpolation
/*
The template literal is a special type of string that makes 
creating complex strings easier.
Template literals allow you to create multi-line strings and 
to use string interpolation features to create strings.
*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
  function makeList(arr) {
    "use strict";
  
  
  const resultDisplayArray = [
    `<li class="text-warning">${arr[0]}</li>`, 
    `<li class="text-warning">${arr[1]}</li>` ,
    `<li class="text-warning">${arr[2]}</li>`
  ];
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);

  //2. Object value assignment shorthand

  const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,//these three values are assigned the values of the  
      age,//function parameters with the same name 
      gender
    };
    //lines 38-40 are the ES6 version of writing:
    /*
    name: name,
    age: age,
    gender: gender
     */
  
  };
 createPerson("Zodiac Hasbro", 56, "male"); // returns a proper object


//3.Functions in objects
/*
Object methods do not require the 'function' keyword in ES6
*/
const bicycle = {
  gear: 2,
  setGear(newGear) {//instead of:  setGear: function(newGear)...
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);