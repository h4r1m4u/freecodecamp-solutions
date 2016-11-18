function palindrome(str) {
  // Remove punctuation and make the string lowercase
  str = str.replace(/[\W_]+/g, "").toLowerCase();
  // Reverse the string and check for palindrome
  return str === str.split("").reverse().join("");
}

palindrome("eye");
