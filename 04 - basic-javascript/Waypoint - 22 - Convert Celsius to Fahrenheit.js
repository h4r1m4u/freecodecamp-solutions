function convert(celsius) {
  // Only change code below this line
  
  var fahrenheit = celsius * 9 / 5 + 32;
  
  // Only change code above this line
  if ( typeof fahrenheit !== 'undefined' ) {
  return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

// Change the inputs below to test your code
convert(30);
