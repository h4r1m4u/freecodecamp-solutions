function where(collection, source) {
  var arr = [];
  
  // filter returns array with elements from the original array
  // for which the callback function returns true
  arr = collection.filter(function(obj) {
    
    // the object from the collection is assumed to have the source properties by default
    var passes = true; 
    
    for (var property in source) {
      // for each property in source we now check whether the collection object
      // has it and if yes, whether the value is the same
      if (!obj.hasOwnProperty(property) || obj[property] != source[property]  ) {
        passes = false;
      }
    }
      
    return passes;
    
  });
  
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
