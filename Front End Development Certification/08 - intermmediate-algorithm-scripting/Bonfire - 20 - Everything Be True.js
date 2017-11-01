function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function (element) {
    return element[pre];
  });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa"}, {"user": "Po", "sex": "female"}], "sex");
