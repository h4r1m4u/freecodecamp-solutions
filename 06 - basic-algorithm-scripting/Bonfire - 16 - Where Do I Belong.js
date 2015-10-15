function where(arr, num) {
  // Find my place in this sorted array.
  // Add num into arr
  arr.push(num);
  // Sort arr in ascending order
  arr.sort(function(a, b) {
    return a - b;
  })
  return arr.indexOf(num);
}

where([40, 60], 50, "");
