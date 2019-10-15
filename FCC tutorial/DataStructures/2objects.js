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
foods["strawberries"] = 27;
  
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