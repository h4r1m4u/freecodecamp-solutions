function palindrome(str) {
  // Good luck!
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~() ]/g,""); // Remove punctuation
  str = str.toLowerCase(); // Remove case
  var reversed = str.split("").reverse().join(""); // Reverse the string
  
  return (str === reversed);
}



palindrome("eye");
