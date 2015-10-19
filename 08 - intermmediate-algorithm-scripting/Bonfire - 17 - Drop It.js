function drop(arr, func) {
  // Drop them elements.
  var result = [];
  for (var i = 0; i <= arr.length - 1; i++) {
    if (func(arr[i]) == true) {
      result.push(arr[i]);
    }
  }
  return result;
}

drop([1, 2, 3], function(n) {return n < 3; });
