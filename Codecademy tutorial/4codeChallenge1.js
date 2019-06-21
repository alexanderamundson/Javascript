//Code Challenge 1

/*Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not
*/
function canIVote(age) {
	return age >= 18 ? true : false;  
}
 console.log(canIVote(19)) //prints true
 console.log(canIVote(11)) //prints true


/*Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’ if the two strings are the same and ‘You disagree!’ if the two strings are different.
*/
function agreeOrDisagree(string1, string2) {
  return string1 === string2 ? 'You agree!' : 'You disagree!';
}
 console.log(agreeOrDisagree("yep", "yep")) //prints 'You agree!'


/*Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’
*/
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
}
console.log(reportingForDuty('Private', 'James'));



/*write a function, rollTheDice() to simulate two dice being rolled that returns the sum of the values of the two dice*/
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
console.log(rollTheDice());


/*Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/
function truthyOrFalsy(value){
  return value ? true : false;
}
console.log(truthyOrFalsy(0.0));//returns false
console.log(truthyOrFalsy(NaN));//returns false
console.log(truthyOrFalsy(''));//returns false
console.log(truthyOrFalsy(false));//returns false


/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip 
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/

tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad': return total * 0.05 ;
      break;
    case 'ok': return total * 0.15;
      break;
    case 'good': return total * 0.2;
      break;
    case 'excellent': return total * 0.3 ;
    default: return total * 0.18;
  }
}
console.log(tipCalculator('bad', 100));//prints 5
console.log(tipCalculator('excellent', 100));//prints 30
console.log(tipCalculator('decent', 100));//prints 18