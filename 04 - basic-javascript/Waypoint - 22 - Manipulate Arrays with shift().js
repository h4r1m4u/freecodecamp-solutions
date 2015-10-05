var ourArray = ["Stimpson", "J", ["cat"]];
ourRemoved = ourArray.shift();
// ourArray now equals ["J", ["cat"]].

var myArray = ["John", 23, ["dog", 3]];
// Only change code below this line.

var myRemoved = myArray.shift(); // This should be ["John"] and myArray should now be [23, ["dog", 3]].

// Only change code above this line.

// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & myRemoved = ' + JSON.stringify(z);})(myArray, myRemoved);
