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