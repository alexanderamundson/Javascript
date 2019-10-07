// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//validates credit card number with Luhn algorithm
//the 'array' parameter is a credit card number stored in an arrray
function validateCred(array) {
  let length = array.length;
  let checkArray = array.slice();
  
  //double every other num (if > 9, subtract 9)
  for (let i= length - 2; i >= 0; i-=2) {
    let doubledVal = checkArray[i] * 2;
    (doubledVal > 9) ? checkArray[i] = doubledVal -9 : checkArray[i] = doubledVal;  
  }
  //sum all digits in card number
  let sum = checkArray.reduce(function getSum(total, num) {
  	return total + num;
  });
  //If the sum modulo 10 is 0, then the number is valid, else it's invalid.
  return (sum % 10 === 0);
};


//loops through array of CC #s and returns those that are invalid
function findInvalidCards(creditCardNums) {
  let invalidCards = [];
  for (let i = 0; i < creditCardNums.length; i++) {
  	if ( !(validateCred(creditCardNums[i]))  ) {
       invalidCards.push(creditCardNums[i]);   
    } 
  }
  return invalidCards;
};

//returns array of companies which issued faulty CC #s
function idInvalidCardCompanies(invalidCards) {
  let companies = [];
  for (let i = 0; i < invalidCards.length; i++) {
    if (invalidCards[i][0] < 3 ||  invalidCards[i][0] > 6) {
      console.log("Company not found");
    } else {
      switch (invalidCards[i][0]) {
        case 3: if (companies.indexOf("American Express") === -1) {
                companies.push("American Express");
                } break;
        case 4: if (companies.indexOf('Visa') === -1){
                companies.push("Visa");
                } break;
        case 5: if (companies.indexOf('Mastercard') === -1) {
                companies.push("Mastercard");
                } break;
        case 6: if (companies.indexOf('Discover') === -1) {
                companies.push("Discover");
                } break;
      }
    }
  }
  return companies;
};


// Test validateCred function:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false

/**** Uncomment out following lines to test above functions *****
// Test findInvalidCards function:
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
console.log(findInvalidCards(batch)); //should print all 5 invalids and mystery1,3,and 4

// Test idInvalidCardCompanies function:
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); //should print array of all 4 CC companies
*/








