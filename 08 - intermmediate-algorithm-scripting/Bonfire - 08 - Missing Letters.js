function fearNotLetter(str) {
  var result;
  
  for (var i = 1; i <= str.length - 1; i++) {
    if (str[i].charCodeAt() - str[i - 1].charCodeAt() != 1) {
      result = String.fromCharCode(str[i].charCodeAt() - 1);
    }
  }
  
  return result;
}

fearNotLetter("abce");
