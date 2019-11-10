function whatIsInAName(collection, source) {
    var arr = [];
    let sourceProp = Object.getOwnPropertyNames(source);
    
    let iteration = function(element) {
      let hasAllProps = sourceProp.every( function(prop) {
        return element.hasOwnProperty(prop);
      });
      if (hasAllProps) {
        let containsAllKeys =  sourceProp.every( function(property) {
            return source[property] === element[property] ? true : false;
           
        });
        if (containsAllKeys) {
          arr.push(element)
        }
      }
    }
    collection.forEach(iteration);
    return arr;
  }

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
  // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
  // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].  
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
  //should return empty array []