var test = (function(){
  var testString = "How many non-space characters are there in this sentence?";

  // Only change code below this line.

  var expression = /\S/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();
