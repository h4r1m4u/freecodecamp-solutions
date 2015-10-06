function chunk(arr, size) {
  // Break it up.
  var result = [];
  // While arr has more elements than should be in a single chunk
  while (size <= arr.length) {
    var chunk = [];
    for (var i = 0; i < size; i++) {
      // Remove the required number of elements from arr and store them in chunk array
      chunk.push(arr.shift());
    }
    // Push the chunk into result
    result.push(chunk);
  }
  // If, after the removal of a number of elements, arr still has any elements left, 
  // push them into result. This will happen if arr % size != 0, e.g. arr = [1, 2, 3] and size = 2.
  if (arr.length > 0) {
    result.push(arr);
  }
  return result;
}

chunk(["a", "b", "c", "d"], 2, "");
