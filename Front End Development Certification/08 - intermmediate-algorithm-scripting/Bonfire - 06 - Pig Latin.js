// checks if a character is a vowel
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(char) != -1) {
    return true;
  }
  return false;
}

// returns the index position of a first vowel in a string
function firstVowelIndex(str) {
  return str.split('').findIndex(isVowel);
}

function translatePigLatin(str) {
  if (isVowel(str[0])) {
    return str + 'way';
  }
  return str.slice(firstVowelIndex(str)) + str.slice(0, firstVowelIndex(str)) + 'ay';
}

translatePigLatin("consonant");