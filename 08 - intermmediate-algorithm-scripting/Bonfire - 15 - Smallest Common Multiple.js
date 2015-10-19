function smallestCommons(arr) {
  // sort the array descendingly
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  
  var numberOfFoundCommons = 0; // tracks how many common multiples we've found
  var commons = arr[0]; // the value of found common multiple; by default the highest element in our array
  
  // generate array that has all the numbers in the range we need to test
  var range = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
      range.push(i);    
  }
  
  // do this until numberOfFoundCommons equals the number of elements in range 
  // (i.e. the common multiple is a common multiple for all the numbers in the range)
  while (numberOfFoundCommons != range.length) {
    // increase the common multiple by the largest number in our range
    commons += range[0];
    numberOfFoundCommons = 0;
	var j = 0;
    // test the common multiple for all the numbers in the range
    while (j != range.length) {
        if (commons % range[j] == 0) {
            // the common multiple is a multiple of this number
        	numberOfFoundCommons += 1;
        } else {
            // the common multiple is not a multiple of this number and we can break out of the loop
            // as there is no point in testing the rest of the numbers
            break;
        }
        j++;
    }
  }
  
  return commons;
}

smallestCommons([1,5]);
