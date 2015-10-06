function titleCase(str) {
  var words = str.split(' ');
  words = words.map(function(word) {
    // Take the first character of the word, convert it to upper case, 
    // and concatenate it with the rest of the word converted to lower case.
    return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
  });
  return words.join(' ');
}

titleCase("I'm a little tea pot", "");
