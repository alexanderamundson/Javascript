//This generates a displays a random meal from the menu object
//A meal contains an appetizer, main dish, and dessert
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },  
    get appetizers() {
      return this._courses.appetizers;
    },
    
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    
    get mains() {
      return this._courses.mains;
    },
    
    set mains(mainIn) {
      this._courses.mains = mainIn;
    },
    
    get desserts() {
      return this._courses.desserts;
    },
    
    set desserts(dessertIn) {
      this._courses.desserts = dessertIn;
    },   

  
  get courses() {
      return {appetizers: this._courses.appetizers,
             mains: this._courses.mains,
             desserts: this._courses.desserts};
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} ... The price is $${totalPrice.toFixed(2)}.`;  
  }
};

//fill the menu with dishes and their price
menu.addDishToCourse('appetizers', 'Chicken Wings', 2.25);
menu.addDishToCourse('appetizers', 'Fried Okra', 3.25);
menu.addDishToCourse('appetizers', 'Spinach Salad', 2.25);
menu.addDishToCourse('mains', 'Beef Stew', 4.25);
menu.addDishToCourse('mains', 'Spaghetti', 3.45);
menu.addDishToCourse('mains', 'Turkey Burger', 4.00);
menu.addDishToCourse('desserts', 'Green Smoothie', 2.80);
menu.addDishToCourse('desserts', 'Watermelon', 1.25);
menu.addDishToCourse('desserts', 'Mamey Sapote', 3.00);


//generate a randomly selected meal
const meal = menu.generateRandomMeal();
console.log(meal);