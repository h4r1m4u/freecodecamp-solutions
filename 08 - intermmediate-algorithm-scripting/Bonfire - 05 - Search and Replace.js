function startsWithCap(str) {
  if (str[0].toUpperCase() === str[0] ) {
    return true;
  } else {
    return false;
  }
}

function myReplace(str, before, after) {
  var splitString = str.split(' ');
  
  splitString = splitString.map(function(element) {
    if (element == before) {
      if (startsWithCap(element)) {
        element = after[0].toUpperCase() + after.slice(1);
      } else {
        element = after[0].toLowerCase() + after.slice(1);
      }
    }
    return element;
  });
  
 return splitString.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
