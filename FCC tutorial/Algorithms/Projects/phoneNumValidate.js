function telephoneCheck(str) {
      return /^1\s[\d]{3}[\s-][\d]{3}[\s-][\d]{4}$|^[\d]{3}[\s|-][\d]{3}[\s|-][\d]{4}$|^(1\s?)?[({0,1}][\d]{3}[){0,1}]\s?[\d]{3}[\s|-][\d]{4}$|^[\d]{10}$/.test(str);
}

telephoneCheck("555-555-5555");//should return true
telephoneCheck("(555)555-5555");// should return true.
telephoneCheck("1(555)555-5555");// should return true.
telephoneCheck("555-5555");// should return false.
telephoneCheck("5555555");// should return false.
telephoneCheck("1 555)555-5555");//should return false

/*   Correct formats
555-555-5555   
(555)555-5555 
(555) 555-5555 
555 555 5555
5555555555
1 555 555 5555
1 (555) 555-5555
1(555)555-5555
1 555-555-5555
*/


/*** Alternative Solution (easier to read)

function telephoneCheck(str) {
  return (str.match(/^1\s[\d]{3}[\s-][\d]{3}[\s-][\d]{4}$/) || 
          str.match(/^[\d]{3}[\s|-][\d]{3}[\s|-][\d]{4}$/) ||
          str.match(/^(1\s?)?[({0,1}][\d]{3}[){0,1}]\s?[\d]{3}[\s|-][\d]{4}$/) ||
          str.match(/^[\d]{10}$/)   ) ? true : false; 
}


*/
