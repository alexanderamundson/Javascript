/*This function recieves an array of object as its parameter.
This function uses each object's avgAlt property to find 
the orbital period in seconds.
This function returns a new array that transforms the elements'
average altitude into their orbital periods (in seconds).
*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    return arr.map(function(object) {
      object["orbitalPeriod"] = Math.round( 2 * Math.PI * Math.pow(( Math.pow( (object["avgAlt"] + earthRadius), 3) / GM), 0.5));
      delete object.avgAlt;
      return object;
    });
  
}
  
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]