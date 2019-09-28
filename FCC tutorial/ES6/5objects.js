
  //1. Object value assignment shorthand

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


//2.Functions in objects
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


//3.
/*
ES6 added the class keyword to declare classes.
The constructor function is declared with the 
keyword 'constructor' rather than 'function'
 */
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); //should display 'carrot'


//4.
/*
ES6 introduced setters and getters
 */
function makeClass() {
  "use strict";
  class Thermostat {
    constructor(F) {
      this._temp = 5/9 * (F - 32)
    }
    get temperature() {
      return this._temp
    }
    set temperature(C) {
      this._temp =  C;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C




//.String interpolation/Template literal
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
