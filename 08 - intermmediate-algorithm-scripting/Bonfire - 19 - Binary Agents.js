function binaryAgent(str) {
  var binaries = str.split(' ');
  var decimals = binaries.map(function(binary_code) {
    return parseInt(binary_code, 2);
  });
  var chars = decimals.map(function(decimal_code) {
    return String.fromCharCode(decimal_code);
  });
  return chars.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
