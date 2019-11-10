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

//8. object properties instantiate in the constructore are called 
//'own' properties 'instance' properties.
//In fact every instance of the object will have its own copy of these 'own' properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];
  
for (let property in canary) {
      ownProps.push(property);
}
console.log(ownProps);//prints ["name", "numLegs"]
  

//9. Prototype Properties
/*
Prototype is an object that is shared among ALL instances of the object.
think of a prototype as a "recipe" for creating objects.
*/

function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs= 4;
let beagle = new Dog("Snoopy");
  
  


//10. how to loop through an object's properties
//and determine if it is an 'own' or 'prototype' property
function Dog(name) {
    this.name = name;
}
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {//hasOwnProperty() returns true if prop is an 'own' property and returns false otherwise
      ownProps.push(prop);
    }
    else {
      prototypeProps.push(prop);
    }
}



//11. .constructor property return what kind of object it is
/*
the constructor property is a reference to the constructor function that created the instance. 
The advantage of the constructor property is that it's possible to check for this property
to find out what kind of object it is
The constructor property can be overwritten, hence it’s better to use
the 'instanceof' method to check the type of an object.
*/
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}// if 'candidate' is an instance of the Dog object, return true, else return false



//12.
/*An efficient way to declare prototype properties
is to set the prototype to a new object that already contains the properties. 
This way, the properties are added all at once as follows: */
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("eating...");
    },
    describe: function() {
      console.log(`My name is ${this.name}.`);
    }
};
//Warning!
//manually setting the prototype to a new object erases the constructor property!
  

//13.
/*
To keep the constructor property after manually creating a prototype object,
remember to define the constructor property in the prototype object as follows:
*/
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,//manually adding constructor property back inside of prototype object
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
  

//14.
/*An object inherits its prototype directly from the constructor function that created it.
You can show the prototype inheritance relationship with the 'isPrototypeOf' method
*/

function Dog(name) {
    this.name = name;
}
 
let beagle = new Dog("Snoopy");
  
console.log(Dog.prototype.isPrototypeOf(beagle));//prints 'true'
//beagle inherit its prototype from Dog
//Dog is the prototype of beagle


//15.
/*
Object.create(obj) creates a new object, and sets obj as the new object's prototype
*/
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"


//17.
/*To use prototypal inheritance,set the prototype of the subtype (or child) to be an instance of the supertype object
*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
//In this example, Dog is a subtype that inherits from 
//the Animal supertype
let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom" because
//beagle is a Dog and Dogs inherit all properties and methods
//of their supertype - Animal



//18.


//19.


//20.



//21.



//22.