class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  //getter methods
  get name(){
    return this._name;
  }
  get level(){
    return this._levell
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  //setter methods
  set numberOfStudents(newNumberOfStudents) {
    newNumberOfStudents === "Number" ? this._numberOfStudents = newNumberOfStudents : console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
  
  //instance methods
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  //static method
  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * (substituteTeachers.length ));
    return substituteTeachers[randomIndex];
  }
}//end of School Class


class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  //getter method
  get pickupPolicy() {
    return this._pickupPolicy;
  }
  
}//end of PrimarySchool class

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  //getter method
  get sportsTeams() {
    return this._sportsTeams;
  }
}//end of HighSchool class

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury School', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

console.log(`${School.pickSubstituteTeacher( ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])} is the substitute teacher`);

const alSmith = new HighSchool('Al E. Smith School', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(`Al Smith School's sports teams: ${alSmith.sportsTeams}` );