function mutation(arr) {
  //convert to lowercase
  var str1 = arr[0].toLowerCase(), 
      str2 = arr[1].toLowerCase();
  
  //splitting into an array makes it easier to compare
  return str2.split("").every(function(val) {
    //Array.prototype.every() returns true if all values in the array pass the test in the provided function 
    return str1.indexOf(val) !== -1;
  });
}

mutation(["hello", "hey"], "");
