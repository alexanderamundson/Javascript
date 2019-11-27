function telephoneCheck(str) {
    /*  if (str.match(/^1\s[\d]{3}[\s-][\d]{3}[\s-][\d]{4}$|^[\d]{3}[\s|-][\d]{3}[\s|-][\d]{4}$/) ||
         (str.match(/^(1\s?)?[({0,1}][\d]{3}[){0,1}]\s?[\d]{3}[\s|-][\d]{4}$|^[\d]{10}$/))) {
        return true
      };
    
      return false;
    */
    
      return /^1\s[\d]{3}[\s-][\d]{3}[\s-][\d]{4}$|^[\d]{3}[\s|-][\d]{3}[\s|-][\d]{4}$|^(1\s?)?[({0,1}][\d]{3}[){0,1}]\s?[\d]{3}[\s|-][\d]{4}$|^[\d]{10}$/.test(str);
    
}

telephoneCheck("555-555-5555");//should return true



/*

Starts with
[A]  1 followed by a space, OR   [B]  (3 digits),  OR  [C] 3 digits OR [D] 10 digits
// 1\s  OR  ([\d]{3})   OR   [\d]{3}  OR  [\d]{10}


[A] ^1\s  followed by 3 digits, space, three digits, space, 4 digits
^1\s[\d]{3}\s[\d]{3}\s[\d]{4}$


[B] ([\d]{3})  follow by an optional space, then 3 digits, dash, 4 digits
^([\d]{3})\s?[\d]{3}-[\d]{4}$


[C] [\d]{3} followed by spaceORhyphen, 3 digits, spaceORhyphen, 4 digits
^[\d]{3}[\s|-][\d]{3}[\s|-][\d]{4}$


[D]
^[\d]{10}$

555-555-5555   may start with 3 digits*
(555)555-5555  may start with 3 digits INSIDE parentheses*
(555) 555-5555 
555 555 5555
5555555555     
1 555 555 5555 may start with a 1*



//
555-555-5555   may contain dashes after third and sixth digit 
(555)555-5555  may or may NOT contain space after closing parentheses*
(555) 555-5555 
555 555 5555   may contains spaces after third and sixth digit
5555555555     may contain 10 consecutive digits
1 555 555 5555 may have a 1 and a space before the other digits which have spaces after 3rd and 6dh digit



//
555-555-5555   may start with 3 digits
(555)555-5555  may start with 3 digits INSIDE parentheses
(555) 555-5555 
555 555 5555
5555555555
1 555 555 5555



*/