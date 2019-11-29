function convertToRoman(num) {
    var decimal = num;//36
 
    var values = [
     [1000, "M", 3],    [900,  "CM", 1],    [500,  "D", 1],    [400,  "CD", 1],
     [100,  "C", 3],    [90,   "XC", 1],    [50,  "L", 1],     [40,   "XL", 1],
     [10,   "X", 3],    [9,    "IX", 1],    [5,    "V", 1],    [4,    "IV", 1],
     [1,    "I", 3]
    ]
     
    var stop = false;
    while (decimal > 0 || stop) {
       if (isExactMatch(decimal)) {
         return getExactRomanMatch(decimal);
       } else {
         stop =  true;
         return "I";
       }
    }
 
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
   return num;
  }
 
 
  console.log(
  convertToRoman(1)
  );
 
 
 
 
 
 
 
 
 
 
  /*
  console.log("90"+
   convertToRoman(90)
   );
   
  console.log("9"+
   convertToRoman(9)
   );
   
  console.log("500"+
   convertToRoman(500)
   );
  
   console.log("50"+
     convertToRoman(50)
     );
  
     
     console.log("5"+
       convertToRoman(5)
       );
 
       console.log("400"+
         convertToRoman(400)
         );
        
         console.log("40"+
           convertToRoman(40)
           );
        
           
           console.log("4"+
             convertToRoman(4)
             );
  */    
 
 /**
  *     [1000, "M", 3],    [900,  "CM", 1],    [500,  "D", 1],    [400,  "CD", 1],
     [100,  "C", 3],    [90,   "XC", 1],    [50,  "L", 1],     [40,   "XL", 1],
     [10,   "X", 3],    [9,    "IX", 1],    [5,    "V", 1],    [4,    "IV", 1],
     [1,    "I", 3]
  */
 
 
 
 
 
 
 
 
 
 
 
 
 /*
 var values = {
   1000: "M",
   900:  "CM",
   500:  "D",
   400:  "CD",
   100:  "C",
   90:   "XC",
   50:   "L",
   40:   "XL",
   10:   "X",
   9:    "IX",
   5:    "V",
   4:    "IV",
   1:    "I"
 }
 
 
  var table = [{type:"thousand", val: 1000},{type:"fivHundreds", val: 500},{type:"hundreds", val: 100},
                 {type:"fifty", val: 1000},{type:"thousand", val: 1000},{type:"thousand", val: 1000},
                 {type:"thousand", val: 1000}];
 
 
                 var values = [
     {1000: "M"},    {900:  "CM"},    {500:  "D"},    {400:  "CD"},
     {100:  "C"},    {90:   "XC"},    {50:   "L"},    {40:   "XL"},
     {10:   "X"},    {9:    "IX"},    {5:    "V"},    {4:    "IV"},
     {1:    "I"}
    ]
 */