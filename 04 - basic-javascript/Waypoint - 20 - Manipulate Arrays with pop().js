// var numbers = [1,2,3];
// console.log(numbers); // logs [1,2,3]
// var removed = numbers.pop();
// console.log(numbers); // logs [1,2]
// console.log(removed); // logs 3

var myArray = ["John", 23, ["cat", 2]];
// Only change code below this line.

var removed = myArray.pop(); // This should be ["cat", 2] and myArray should now be ["John", 23]

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removed = ' + JSON.stringify(z);})(myArray, removed);
