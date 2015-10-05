var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift();
// ourArray now equals ["J", ["cat"]]
ourArray.unshift("happy");
// ourArray now equals ["happy", "J", ["cat"]]

var myArray = ["John", 23, ["dog", 3]];
myArray.shift();

// Add "Paul" to the start of myArray.
// Only change code below this line.
myArray.unshift("Paul");

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
