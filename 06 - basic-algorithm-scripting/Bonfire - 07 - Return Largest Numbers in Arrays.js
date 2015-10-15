function largestOfFour(arr) {
  // You can do this!
  var result = [];
  arr.forEach(function(array) {
    // Sort each array in a descending order and return the first (highest) element
    result.push(array.sort(function(a, b) {return b - a;})[0]);
  });
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");
