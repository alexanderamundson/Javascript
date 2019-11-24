//truthCheck(arrayOfObjs, propertyValue) returns whether or not
//EVERY object in the array (the first parameter) contains a
//property that is the same as the second property (propertyValue)
//AND that the property has a value that is truthy

function truthCheck(collection, pre) {
    var truthCounter = 0;
    collection.forEach(function(object) {
      if (object[pre]) {//if the 'pre' property in object is truthy,
        truthCounter++; //than increment truthCounter by 1
      }
    });
    return truthCounter === collection.length;
    //if each object has 'pre' property that is truthy,
    //than truthCounter should have been incremented  collection.length times,
    //once for each element in the collection array
}
   
   truthCheck([{"single": "yes"}], "single");// should return true
   
   truthCheck([{"single": ""}, {"single": "double"}], "single");
   //should return false because the value of 'single' in the first object is 
   //falsy (empty string is falsy)
   
   truthCheck([{"single": "double"}, {"single": undefined}], "single");// should return false (undefined is falsy)
   
   truthCheck([{"single": "double"}, {"single": NaN}], "single");// should return false
   
   truthCheck([{"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true},
    {"name": "FastFoward", "onBoat": null}], "onBoat");// should return false
   
   truthCheck([{"name": "Pete", "onBoat": true},
    {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
    {"name": "FastFoward", "onBoat": true}], "onBoat");// should return true