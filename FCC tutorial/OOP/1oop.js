//1. How to create a dog object with two properties
let dog = {
    name: "Spot",
    numLegs: 4
};


//2. object properties can be accessed via dot notation as follows
// objectName.propertyName
console.log(dog.name);
console.log(dog.numLegs);


//3. objects can have functions as properties.
//Function properties are called methods
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return (`This dog has ${this.numLegs} legs.`);
    }
};
dog.sayLegs();//returns the string: This dog has 4 legs.
  


//4.



//5.