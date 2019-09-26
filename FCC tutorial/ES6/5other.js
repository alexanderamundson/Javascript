//1.String interpolation
/*
The template literal is a special type of string that makes 
creating complex strings easier.
Template literals allow you to create multi-line strings and 
to use string interpolation features to create strings.
*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
  function makeList(arr) {
    "use strict";
  
  
  const resultDisplayArray = [
    `<li class="text-warning">${arr[0]}</li>`, 
    `<li class="text-warning">${arr[1]}</li>` ,
    `<li class="text-warning">${arr[2]}</li>`
  ];
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);