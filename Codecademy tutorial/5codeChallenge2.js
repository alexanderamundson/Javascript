//JavaScript code challenge 2

//Exercise 1 - A
/*Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.*/
// Reverses the input array using push method
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reverseArray = function(inputArray) {
  let reverse = [];
  for (var i = inputArray.length - 1; i >= 0; i--) {
    reverse.push(inputArray[i]);
  }
  return reverse;
};
console.log(reverseArray(sentence));/*displays [This will all make sense] */
//1-B
//Reverses array alternative solution
const reverseArrayAlternative = function(input) {
  let reverse = [];
  var index = input.length-1;
  for (var j = 0 ; j < input.length; j++, index--){
    reverse[index] = input[j];
  }
  return reverse;
};
console.log(reverseArrayAlternative(sentence));
//1-C
//Reverses the array without using a helper array
const reverseArrayAlternativeTwo = function(array) {
  var length = array.length;
  for (var i = 0; i <= (length - 1) / 2; i++){
    var temp = array[i];
    array[i] = array[length - 1 - i];
    array[length -1 -i] = temp;
  }
  return array;
}
console.log(reverseArrayAlternativeTwo(sentence));


////////////////////////////
//Exercise 2
/*Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '*/
const convertToBaby = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push('baby ' + array[i]);
  }
  return newArray;
};
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));/* Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']; */

////////////////////
//Exercise 3
/*Write a function which takes in an array of integers an returns an array that shows the smallest power of two that is larger than each number in the input array*/
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
           var j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] 

/////////////////////
//Exercise 4

//Write a function declineEverything() that takes in an array of strings and, 
//using .forEach(), loops through each element in the array and calls 
//politelyDecline() with each of them
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = function(stringsArray) {
  stringsArray.forEach(politelyDecline);
};
/*Write a function acceptEverything() that takes in an array of strings and loops
 through each element in the array and grudgingly accepts each of them, by logging
 to the console in the following format: 'Ok, I guess I will eat some [element].'*/
const acceptEverything = function(stringArray) {
  stringArray.forEach( function(element) {
    console.log(`Ok, I guess I will eat some ${element}.`);
  });
};

//////////////////
//Exercise 5
const numbers = [2, 7, 9, 171, 52, 33, 14];
const toSquare = num => num * num;
const squareNums = (array) => {
  return array.map(toSquare);
};

/*Write a function, squareNums(), that takes in an array of numbers and, 
using .map(), returns an array with the square of each of the elements of that array*/

console.log(squareNums(numbers));//returns the square of the numbers in 'numbers' array: 
//[ 4, 49, 81, 29241, 2704, 1089, 196 ]

/////////////////
//Exercise 6

/*Write a function shoutGreetings() that takes in an array of strings and 
returns a new array. This new array should contain all the strings from
the argument array but with capitalized letters and an exclamation point
appended to the end*/

const shoutGreetings = (array) => {
  return array.map( (element) => {
    return element.toUpperCase() + '!';
  });
};
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

///////////////
//Exercise 7

/*Write a function justCoolStuff() that takes in 
two arrays of strings, and, using the built-in 
.filter() method, returns an array with the items 
that are present in both arrays.*/
const justCoolStuff = (arr1, arr2) => {
  
  return arr1.filter( function(element) {
    return arr2.includes(element);
  });
};

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//////////////////
//Exercise 8-A

//Write a function isTheDinnerVegan that returns whether or not all the food 
//objects in the dinner array are vegan. A food is vegan if its source is 'plant'
const isTheDinnerVegan = (foodArray) => {
  for (var i =0; i < foodArray.length; i++) {
    if (foodArray[i].source != 'plant') {
      return false;
    }
  }
  return true;
};

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

//8-B
//Determines is dinner is vegan using the array.every method
const isTheDinnerVegan = (foodArray) => {
  return foodArray.every(isVegan);
};

function isVegan(element, index, array) {
  return element.source === 'plant';
}
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))


////////////////////
//Exercise 9

/*Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth)
*/
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const compareTeeth = function(elem1, elem2) {
  return elem1.numTeeth - elem2.numTeeth;
};

const sortSpeciesByTeeth = function(array) {
  array.sort(compareTeeth);
  return array;
};

console.log(sortSpeciesByTeeth(speciesArray))

// Should print [ { speciesName: 'human', numTeeth: 32 },
//  { speciesName: 'dog', numTeeth: 42 },
//  { speciesName: 'shark', numTeeth: 50 },
//  { speciesName: 'alligator', numTeeth: 80 } ]


////////////////////
//Exercise 10
/*Write a function, findMyKeys(), that takes in an array of strings which may 
or may not contain 'keys'. If the keys are in the array, your function should 
return the index at which they can be found. If they’re not in the array, 
your function should return -1*/

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = function(array) {
  return array.indexOf('keys');
}

console.log(findMyKeys(randomStuff))// Should print 4


//////////////////
//Exercise 11

/*Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
*/
const dogFactory = function(name, breed, weight){ 
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    //Add getters and setters for each of the three properties and
   // change the property names to have an underscore prepended.
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(name) {
      this._name = name;
    },
    set breed(breed) {
      this._breed = breed;
    },
    set weight(weight) {
      this._weight = weight;
    },

    /*Add two methods to your object: .bark() which returns ‘ruff! ruff!’ 
    and .eatTooManyTreats() which should increment the weight property by 1.*/
    
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
    }
  };
}