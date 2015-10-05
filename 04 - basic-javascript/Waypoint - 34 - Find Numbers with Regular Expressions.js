var test = (function() {
  var testString = "There are 3 cats but 4 dogs.";

  // Only change code below this line.

  var expression = /\d+/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();
