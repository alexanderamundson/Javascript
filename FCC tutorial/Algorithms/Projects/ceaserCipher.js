/*The ROT13 caeser cipher, shifts the values of the letters 13 places. 
Thus 'A' becomes 'N', 'B' becomes 'O' and so on.

This function takes a ROT13 encoded string as input 
and returns a decoded plaintext string.
*/
function rot13(str) { 

    //converts each character in 'str' to plain text
    return str.split("").map(toPlainText).join("");
    
    
    /*Converts ciphered parameter to plain text */
    function toPlainText(char) {
      var charCode = char.charCodeAt(0);
      var plainText;
      if ( isLetter(charCode) ) {
        plainText = decipher(charCode);
        return plainText;
      }
      return plainText = char;//if char is just a space character, simply return it
    };
   
    /*Returns true if 'charCode' is a letter */
    function isLetter(charCode)  {
      return ( (charCode >= 65 && charCode <= 90) ||
               (charCode >= 97 && charCode <= 122)   ) 
    };
   
   /*Shifts charCode by 13, and returns ROT13 character */
   function decipher(charCode) {
     if (isUpperCase(charCode)) {
       var newCharCode = getNewCharCode(charCode, "upper");   
     } else {
       var newCharCode = getNewCharCode(charCode, "lower");
     }
     return String.fromCharCode(newCharCode);//converts new CharCode to Character value 
   };
   
   /*Determines if 'charCode' is an uppercase character */
   function isUpperCase(charCode) {
    return charCode >= 65 && charCode <= 90;
   };
   
   /*shifts the charCode by 13, returns char code of plain text character */
   function getNewCharCode(charCode, letterCase) {
     var newCharCode;
     if (letterCase === "lower") {//if 'charcode' is lower case
       if (charCode + 13 > 122) {
        newCharCode = ((charCode + 13) % 122 ) + 96;
       }  else {
         newCharCode = charCode + 13;
       }
    
     }
     else {//if 'charCode' is uppercase
        if (charCode + 13 > 90) {
          newCharCode = ((charCode +  13) % 90) + 64;
        } else {
          newCharCode = charCode + 13;
        }
     }
     return newCharCode;
   };

}//end rot13 function
   

   rot13("SERR PBQR PNZC");

   