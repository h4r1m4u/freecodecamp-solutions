function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  
  var charCodes = [];
  
  // get the unicodes for each letter
  codeArr.forEach(function(letter) {

    // don't change non-letters
    if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 91) {
      charCodes.push(letter.charCodeAt(0));
    } else {
      // it's a letter
      if (letter.charCodeAt(0) + 13 < 91) {
        // the shifted letter is still "smaller" than Z
        charCodes.push(letter.charCodeAt(0) + 13);
      } else {
        // the shifted letter is still "larger", effectively starting
        // from the beginning of the alphabet
        charCodes.push(letter.charCodeAt(0) - 13);
      }
    }
    
  });
  
  // turn the unicodes back into letters
  charCodes.forEach(function(charcode) {
    decodedArr.push(String.fromCharCode(charcode));
  });
  
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
