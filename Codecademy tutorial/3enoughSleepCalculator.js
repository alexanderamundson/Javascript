//This program will determine the actual and ideal hours of sleep for //each night of the last week.
//It will calculate, in hours, how far you are from your weekly //hours of sleep goal.

//returns hours slept each day
const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 4;
  } else if (day === 'wednesday'){
    return 7;
  } else if (day === 'thursday'){
    return 6;
  } else if (day === 'friday'){
    return 8;
  } else if (day === 'saturday'){
    return 9;
  } else if (day === 'sunday'){
    return 9;
  }
};

//returns total hours slept in the week
//(in this example the total is 51 hours)
const getActualSleepHours = () => {
  let totalSleepHours = 0;
  totalSleepHours += getSleepHours('monday');
  totalSleepHours += getSleepHours('tuesday');
  totalSleepHours += getSleepHours('wednesday');
  totalSleepHours += getSleepHours('thursday');
  totalSleepHours += getSleepHours('friday');
  totalSleepHours += getSleepHours('saturday');
  totalSleepHours += getSleepHours('sunday');
  return totalSleepHours;
};

//returns ideal hours of sleep per week
//8 hours/day for 7 days = 56 hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;//56 hours/week is ideal
};

//returns how many hours you went over/under
//the ideal amount of sleep
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
      console.log( 'PerfectAmountOfSleep');
  } else if (actualSleepHours <= idealSleepHours) {
      console.log('Need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep');     
  } else {
      console.log('More sleep than necessary!');
      console.log(actualSleepHours - idealSleepHours + ' hours extra.');
  }
};

calculateSleepDebt(); 