//1A Adding/Modifying object properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
//You can add properties using dot notation
//or with bracket notation.
foods.bananas = 13;
foods.grapes = 35;
foods["strawberries"] = 27;//use quotes around the property name
//when using bracket notation if the property name is not a
//variable already instantiated in preceding code
  
console.log(foods);

//1B 
//properties of objects nested in another object can
//be modified in the same ways shown in 1A
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

//2 bracket notation using a pre-defined variable.
//Because 'scannedItem' is a variable for a pre-defined
//value (apples), it should not be wrapped in quotes 
//when being used as a property name in bracket notation
//as seen  in the checkInventory method.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  function checkInventory(scannedItem) {
    return foods[scannedItem]
  }
  console.log(checkInventory("apples"));

//3 Delete Object properties
//Object properties can be deleted via the delete keywords
//as shown below
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
  
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

//4
//use  objectName.hasOwnProperty('key') or 'key' in objectName 
//to check if 'objectName' has a specified key
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
function isEveryoneHere(obj) {
     /*  ALTERNATIVE SOLUTION
     return ('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj ); 
     */
     return obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') &&  obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan');
}
  
console.log(isEveryoneHere(users));//displays true
