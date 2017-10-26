function diffArray(arr1, arr2) {
  var newArr = [];
  function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
