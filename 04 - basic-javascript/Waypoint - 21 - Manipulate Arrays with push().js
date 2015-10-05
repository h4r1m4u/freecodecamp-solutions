var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.pop();
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", ["happy", "joy"]].

var myArray = ["John", 23, ["cat", 2]];
myArray.pop();
// Add a ["dog", 3] to the end of myArray using push().
// Only change code below this line.
myArray.push(["dog", 3]);

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
