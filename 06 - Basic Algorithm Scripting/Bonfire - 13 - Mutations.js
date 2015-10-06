function mutation(arr) {
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');
  var result = true;
  var i = 0;
  // Iterate over second and check if the element is in first. 
  // If not, set result to false and quit the while loop.
  while (result === true && i < second.length) {
    if (first.indexOf(second[i]) === -1) {
      result = false;
    }
    i++;
  }
  return result;
}

mutation(["hello", "hey"], "");
