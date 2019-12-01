function convertToRoman(num) {
    var decimal = num;//36
 
    var values = [
     [1000, "M", 3],    [900,  "CM", 1],    [500,  "D", 1],    [400,  "CD", 1],
     [100,  "C", 3],    [90,   "XC", 1],    [50,  "L", 1],     [40,   "XL", 1],
     [10,   "X", 3],    [9,    "IX", 1],    [5,    "V", 1],    [4,    "IV", 1],
     [1,    "I", 3]
    ]
    
    //check if 'num' matches single value in 'values' array
    if ( isExactMatch(decimal) ? true : false) {
        return getExactRomanMatch(decimal);
    }
    var stop = false;
    var counter = 0;
    var consecutiveMax;
    var output = "";
    while (counter < values.length || stop) {
        if (values[counter][0] > decimal) {
            counter++;
            continue;
        }
        else if (values[counter][0] <= decimal) {
            //stores the maximum times the roman numeral digit can appear consecutive
            //e.g. I can appear 1 - 3 times consecutively (I, II, III), but V is never repeated in roman numerals
            consecutiveMax = values[counter][2];

            //Store current value
            let value = values[counter][0];

            //loop from variable down to 1 (decrement0 variable) 
            //[while consecMax >= 1 && var # of x's !== 2{y} ]
            while (consecutiveMax >= 1)  {
                //found Matching amount of values
                if (consecutiveMax * value === decimal) {
                    output += getRoman(consecutiveMax, values[counter][1]);
                    return output;/////maybe check if decimal is 0 after decrement
                }
                else if (consecutiveMax * value < decimal) {
                     output += getRoman(consecutiveMax, values[counter][1]);
                     counter++;
                     decimal -= (consecutiveMax * value);
                } else {
                    consecutiveMax--;
                }
            }
        } 
    }

   //returns roman numerals that exactly match
   //a value in the values array (e.g:  I,  V, X, etc..)
   function getExactRomanMatch(decimal) {
     var romanNumeral;
     values.forEach((val, index) => {
       if (val[0] === decimal) {
         romanNumeral = values[index][1];
       } 
     });
     return romanNumeral;
    }
    function isExactMatch(decimal) {
      var exactMatch = false;
     values.forEach((val, index) => {
       if (val[0] === decimal) {
         exactMatch = true;
       } 
     });
     return exactMatch;
    }
    //returns 'numberOfCopies' copies of 'romanDigit'
    function getRoman(numberOfCopies, romanDigit) {
        let romanNumeralSequence = "";
        console.log("getCorrectAmountCharacters" + numberOfCopies);
        for (let i = 0; i < numberOfCopies; i++) {
            romanNumeralSequence += romanDigit; 
        }
        return romanNumeralSequence;    
    }

  }