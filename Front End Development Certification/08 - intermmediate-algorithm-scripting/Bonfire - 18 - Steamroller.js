function steamroller(arr) {
  // I'm a steamroller, baby
  
  var hasNoArrays = false; // tracks whether arr has any arrays inside
  
  while (!hasNoArrays) {
    hasNoArrays = true; // assume there are no arrays in arr
    // go through arr elements and check whether they're an array
    for (var i = 0; i <= arr.length - 1; i++) {
      // if yes, set hasNoArrays to false, split arr into two parts, 
      // and remove the array element. then go through its elements and
      // push them into the first part of arr. then merge the first and 
      // second part of arr back together and break out of the for loop
      // to go through the whole process again
      if (Array.isArray(arr[i])) {
        hasNoArrays = false;
      	var first = arr.slice(0, i + 1);
        var second = arr.slice(i + 1);
        var arrayElement = first.pop();
        for (var j = 0; j <= arrayElement.length - 1; j++) {
          first.push(arrayElement[j]);
        }
        arr = first.concat(second);
        break;
      }
    } 
  }
  
  return arr;  
  
}

steamroller([1, [2], [3, [[4]]]]);
