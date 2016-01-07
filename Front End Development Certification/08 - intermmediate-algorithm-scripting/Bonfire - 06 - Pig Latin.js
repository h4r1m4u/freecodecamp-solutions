// checks if a character is a vowel
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(char) != -1) {
    return true;
  } else {
    return false;
  }
}

// returns the index position of a first vowel in a string
function firstVowelIndex(str) {
  var index;
  for (var i = 0; i <= str.length - 1; i++) {
    if (isVowel(str.charAt(i))) {
      index = i;
      break;
    }
  }
  return index;
}

function translate(str) {
  if (isVowel(str[0])) {
    return str + 'way';
  } else {
    return str.slice(firstVowelIndex(str)) + str.slice(0, firstVowelIndex(str)) + 'ay';
  }
}

translate("consonant");
