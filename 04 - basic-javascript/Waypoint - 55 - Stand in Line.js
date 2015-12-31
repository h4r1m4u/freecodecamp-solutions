// Setup
var myArr = [1,2,3,4,5];

function queue(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}

// Display Code
console.log("Before: " + JSON.stringify(myArr));
console.log(queue(myArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(myArr));
