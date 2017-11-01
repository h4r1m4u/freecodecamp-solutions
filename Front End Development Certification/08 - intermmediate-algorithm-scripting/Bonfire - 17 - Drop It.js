function dropElements(arr, func) {
  // Drop them elements.

  // Find the index of the first element for which func returns true.
  var firstNotDropped = arr.findIndex(func);

  // If such element is in the array, return a slice
  // of the array from that element onwards. 
  // Otherwise return an empty array.
  if (firstNotDropped > -1) {
    return arr.slice(firstNotDropped);
  }
  return [];  
}

dropElements([1, 2, 3], function(n) {return n < 3; });
