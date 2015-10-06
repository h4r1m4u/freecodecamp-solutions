function destroyer(arr) {
  // Remove all the values
  // Convert the arguments into an array and remove the first element
  var args = Array.prototype.slice.call(arguments);
  firstArg = args.shift();
  // Filter the firstArg elements and return only those that are not in args
  return firstArg.filter(function(val) {
    return args.indexOf(val) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
