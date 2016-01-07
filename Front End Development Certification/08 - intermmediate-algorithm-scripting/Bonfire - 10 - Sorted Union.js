function unite(arr1, arr2, arr3) {
  
  // conver the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  
  // join the argument arrays into one
  var flattened = args.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  
  var result = [];
      
  flattened.forEach(function(element) {
    if (result.indexOf(element) == -1) {
      result.push(element);
    }
  });
  
  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
