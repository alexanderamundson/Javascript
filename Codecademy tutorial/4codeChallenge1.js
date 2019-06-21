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
console.log(truthyOrFalsy(''"));//returns false
console.log(truthyOrFalsy(false));//returns false