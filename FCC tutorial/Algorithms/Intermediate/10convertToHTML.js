/*
This function converts characters in the string passed as a parameter.
It converts the characters &, <, >, ", and ' 
to their corresponding HTML entities
*/
function convertHTML(str) {
    const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
    };

    str = str.split("");//convert str to array
    
    for (let i = 0; i < str.length; i++){
      switch (str[i]) {
        case "<":
            str[i] = htmlEntities[str[i]]; break;
        case "&":
            str[i] = htmlEntities[str[i]]; break;
        case ">":
            str[i] = htmlEntities[str[i]]; break;
        case '"':
            str[i] = htmlEntities[str[i]]; break;
        case "'":
            str[i] = htmlEntities[str[i]]; break;
      }
    }
    return str.join("");
  }
  convertHTML("Dolce & Gabbana");
  // should return Dolce &amp; Gabbana.
  convertHTML("Hamburgers < Pizza < Tacos") ;
  //should return Hamburgers &lt; Pizza &lt; Tacos.
  convertHTML("Sixty > twelve");
  // should return Sixty &gt; twelve.
  convertHTML('Stuff in "quotation marks"');
  // should return Stuff in &quot;quotation marks&quot;.
  convertHTML("Schindler's List");
  // should return Schindler&apos;s List.
  convertHTML("<>");
  // should return &lt;&gt;