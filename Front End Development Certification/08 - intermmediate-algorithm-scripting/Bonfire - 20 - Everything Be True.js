function every(collection, pre) {
  // Does everyone have one of these?
  var result = true; 
  
  collection.forEach(function(obj) {
    if (typeof pre === 'string') {
      if (!obj.hasOwnProperty(pre)) {
        result = false;
      }
    } else if (typeof pre === 'object') {
      if (!obj.hasOwnProperty(pre) || obj[Object.getOwnPropertyNames()[0]] != pre[Object.getOwnPropertyNames()[0]]) {
        result = false;
      }
    }
  });
  return result;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
