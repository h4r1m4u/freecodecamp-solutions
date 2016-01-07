function add(a, b) {
 if (typeof a!== 'number') {
   return undefined;
 } else if (b === undefined) {
    return function(x) {
      if (typeof x !== 'number') {
        return undefined;
      } else {
        return a + x; 
      }
    }
  } else if (typeof b !== 'number') {
    return undefined;
  } 
    
  return a + b;
}

add(2,3);
