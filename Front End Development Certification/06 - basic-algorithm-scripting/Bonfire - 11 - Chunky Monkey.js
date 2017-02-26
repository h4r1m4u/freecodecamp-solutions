
function chunkArrayInGroups(arr, size) {

  var result = [], 
      i = 0;

  // Iterate over the array and break it up into slices
  // based on the value of the size argument. Push the slices 
  // into the result array.
  while(i < arr.length) {
    result.push(arr.slice(i, i += size));
  }
  
  return result;  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
