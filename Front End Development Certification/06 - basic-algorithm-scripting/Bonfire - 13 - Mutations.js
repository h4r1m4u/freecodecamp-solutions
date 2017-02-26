function mutation(arr) {
  // Convert the strings to lowercase
  var first = arr[0].toLowerCase(), 
      second = arr[1].toLowerCase();
  
  // Split the second string into individual characters stored in an array
  // and using the every() method, test whether each of them is also 
  // contained in the first string
  return second.split('').every(function(val) {    
    // Similar to arrays, string has the indexOf() method which returns 
    // the index of the first occurence of the value in a given string
    // (or -1 if the value is not found)
    return first.indexOf(val) !== -1;  
  });
}

mutation(["hello", "hey"]);
