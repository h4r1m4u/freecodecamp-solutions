function diff(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i <= arr1.length - 1; i++) {
    if ((arr2.indexOf(arr1[i]) < 0) && (newArr.indexOf(arr1[i]) < 0)) {
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j <= arr2.length - 1; j++) {
    if ((arr1.indexOf(arr2[j]) < 0) && (newArr.indexOf(arr2[j]) < 0)) {
      newArr.push(arr2[j]);
    }
  }  
  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);