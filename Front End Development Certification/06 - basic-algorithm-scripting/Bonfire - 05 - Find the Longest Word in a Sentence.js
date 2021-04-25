function findLongestWordLength(str) {
  var words = str.split(' ');
  var longest = 0;
  
  words.forEach(function(word) {
    if (longest < word.length) {
      longest = word.length;
    }
  });
  
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
