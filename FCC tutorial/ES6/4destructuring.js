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