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
  


//4. Constructors are functions that create new objects. 
//They define properties and behaviors that will belong to the new object

/*
Create a constructor, Dog, with properties name, color, and numLegs that 
are set to a string, a string, and a number, respectively.
*/
function Dog() {
    this.name = "Rusty";
    this.color = "Golden";
    this.numLegs = 4;
}


//5.  the new operator is used when calling a constructor

/*The 'new' operator tells JavaScript to create an instance 
of Dog called hound
*/
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();