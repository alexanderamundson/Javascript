class Media {
  constructor(title) {  
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  } 
  
  //getter methods
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  get ratings() {
    return this._ratings;
  }
  //setter methods
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  
  //instance methods
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating(){
    const getArraySum = function(accumulator, currentValue) {
      return accumulator + currentValue;
    } 
    let sum = this._ratings.reduce(getArraySum);
    return sum / this._ratings.length;
  }
  
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages ) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  //getter methods
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }

}//end of Book class

class Movie extends Media {
  constructor(director, title, runTime ) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  //getter methods
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  
}//end of Movie class

const book1 = new Book('Bill Byrson', 'A Short History of Nearly Everything', 544);

console.log('Book1 is checked out? ' + book1.isCheckedOut)
book1.toggleCheckOutStatus();
console.log('Book1 is still checked out? ' + book1.isCheckedOut)

book1.addRating(4);
book1.addRating(5);
book1.addRating(5);
console.log(`Average rating of ${book1.title} is  ${book1.getAverageRating().toFixed(2)}`);

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log('Movie "Speed" is checked out? ' + speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Average rating of movie "Speed" is: ${speed.getAverageRating().toFixed(2)}`);