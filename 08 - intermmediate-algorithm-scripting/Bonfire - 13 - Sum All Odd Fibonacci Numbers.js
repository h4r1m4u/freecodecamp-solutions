function sumFibs(num) {
  var fib = [1, 1];
  var sum = 0;
  
  // generate the Finacci sequence up to num or until last element in the sequence is odd
  while (fib[fib.length - 1] <= num || fib[fib.length - 1] % 2 == 0) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  
  // add up the odd numbers
  fib.forEach(function(element) {
    if ((element <= num) && (element % 2 != 0)) {
      sum = sum + element;
    }
  })
  
  return sum;
}

sumFibs(4);
