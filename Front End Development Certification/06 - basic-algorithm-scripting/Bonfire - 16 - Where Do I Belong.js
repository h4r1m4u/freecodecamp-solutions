function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // Sort arr in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Let's get fancy and leverage the findIndex()
  // method which returns the index of the first
  // element in the array which satisfies the 
  // provided testing callback function or -1
  // if no element in the array passes the test.
  var indexToIns = arr.findIndex(function(el) {
    return el >= num;
  });
  
  // Return the index if found, otherwise return 
  // the length of the array as in this case num 
  // should be inserted at the end of the array.
  return indexToIns > -1 ? indexToIns : arr.length;  
}

getIndexToIns([40, 60], 50);