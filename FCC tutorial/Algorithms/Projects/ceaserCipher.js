function rot13(str) { // LBH QVQ VG!
    //split str to array of chars
    //
    str=str.split("");
    var ROT13 = str.map(toPlainText);
   
   //getCharCode
    // check if non-letter
    //given a charCode, return shifted by 13 char
    function toPlainText(char) {

      //console.log(char + " to charCode: " + char.charCodeAt(0));
      var charCode = char.charCodeAt(0);
      var plainText;
      //65-90-97-122
      if ( isLetter(charCode) ) {
        plainText = cipher(charCode);
        ////////console.log("plainText: "+ plainText);
        return plainText;
      }
      return plainText = char;
    };
   
   
    function isLetter(charCode)  {
      return ( (charCode >= 65 && charCode <= 90) ||
               (charCode >= 97 && charCode <= 122)   ) 
    };
   
   
   
   function cipher(charCode) {
      ///////////// console.log(charCode + " is upper? " + isUpperCase(charCode));
     if (isUpperCase(charCode)) {
       //getNewCharCode
       var newCharCode = getNewCharCode(charCode, "upper");
       //charCode + 13  <= 122
     } else {
       var newCharCode = getNewCharCode(charCode, "lower");
     }
     return String.fromCharCode(newCharCode);
   };
   
   function isUpperCase(charCode) {
    return charCode >= 65 && charCode <= 90;
   };
   
   function getNewCharCode(charCode, letterCase) {
    
     var newCharCode;
     if (letterCase === "lower") {
       if (charCode + 13 > 122) {
        newCharCode = ((charCode + 13) % 122 ) + 96;
       }  else {
         newCharCode = charCode + 13;
       }
    
     } //UPPER case
      else {
        if (charCode + 13 > 90) {
          newCharCode = ((charCode +  13) % 90) + 64;
        } else {
          newCharCode = charCode + 13;
        }
     }
     return newCharCode;
   };

   return ROT13.join("");
}//end rot13
   

   rot13("SERR PBQR PNZC");

   