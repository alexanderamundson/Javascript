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



//6. parameters can be passed into a constructor to make 
//creating properties more flexible

function Dog(name, color) {
    this.name  = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Spot", "Black");//creates dog with name Spot that is black
let shepherd = new Dog("Sherman", "Brown");//creates dog with name Sherman that is brown


//7. Anytime a constructor function creates a new object, 
//that object is said to be an 'instance' of its constructor

/*The instanceof operator allows you to compare an object to a constructor, 
returning true or false based on whether or not that object 
was created with the constructor. */
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
  
let myHouse = new House(5);
console.log(myHouse instanceof House);//prints true

//8.


//9.


//10.