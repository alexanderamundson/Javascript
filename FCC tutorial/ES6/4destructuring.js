//1. destructuring assignement object property
/*
Use destructuring to obtain the average temperature for tomorrow 
from the input object AVG_TEMPERATURES, and assign value with key 
tomorrowto tempOfTomorrowin line.
*/

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    //tempOfTomorrow is assigned the value of  AVG_Temperatures.tomorrow
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


//2. ES6 can be used todestructure nested objects into variables.
/*
Use destructuring assignment to obtain maxof 
forecast.tomorrow and assign it to maxOfTomorrow
*/
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }//nested object
};
  
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow}} = forecast;//destructuring
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


//3.
/*
 */



 //4.

//5.

//6.