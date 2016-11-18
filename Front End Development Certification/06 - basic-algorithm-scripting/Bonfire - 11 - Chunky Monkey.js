function chunkArrayInGroups(arr, size) {
  // Break it up
  var newArr = [], i = 0;
  
  while(i < arr.length) {
    newArr.push(arr.slice(i, i += size));
  }
  
  return newArr;
}

chunk(["a", "b", "c", "d"], 2, "");
