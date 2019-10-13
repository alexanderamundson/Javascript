//1.

/*
Modules allow code in one file to be used in another file  

  To export a module:
1 Create an object to represent the module.
2 Add properties or methods to the module object.
3 Export the module with module.exports.
*/
//airplane.js class
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;


//2. 
/*  Continuation of concept from part 1.
 In Node.js, use the require() function to import modules.

   To import a module:
1 Import the module with require() and assign it to a local variable.
2 Use the module and its properties within a program.
 */
//airplaneImporter.js
const Airplane = require('./airplane.js');

const displayAirplane = () => {
  console.log(Airplane.myAirplane);
};

displayAirplane();//displays 'StarJet'

//3.
/*
You can also wrap data and functions into an unamed object
which can be exported to other classes.
 */
module.exports = {
    myAirplane: "CloudJet",
    displayAirplane: function() {
      return this.myAirplane;
    }
};

//4.
/* ES6, JavaScript supports a new
 more readable and flexible syntax for exporting modules:

export default (module name);
 */
const Airplane = {};
Airplane.availableAirplanes = [];
Airplane.availableAirplanes.push({
  name: 'AeroJet',
  fuelCapacity: 800
 });
Airplane.availableAirplanes.push({name: 'SkyJet',
  fuelCapacity: 500
 });

export default Airplane;


//5.

/*
ES6 added the import keyword for importing objects
 */
import Airplane from './airplane';//uses 'import' instead of 'require'

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();
