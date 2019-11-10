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
  
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});