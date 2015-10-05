var test = (function() {
  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
  var expressionToGetSoftware = /software/gi;
  // Only change code below this line.

  var expression = /and/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();
