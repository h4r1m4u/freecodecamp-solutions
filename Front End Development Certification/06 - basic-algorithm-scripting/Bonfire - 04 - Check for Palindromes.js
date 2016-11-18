function palindrome(str) {
  // Good luck!
  str = str.replace(/[\W_]+/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}



palindrome("eye");
