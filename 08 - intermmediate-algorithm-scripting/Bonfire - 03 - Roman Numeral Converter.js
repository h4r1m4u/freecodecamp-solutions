var map = {
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
  '8': 'VIII',
  '9': 'IX',
  '10': 'X',
  '20': 'XX',
  '30': 'XXX',
  '40': 'XL',
  '50': 'L',
  '60': 'LX',
  '70': 'LXX',
  '80': 'LXXX',
  '90': 'XC',
  '100': 'C',
  '200': 'CC',
  '300': 'CCC',
  '400': 'CD',
  '500': 'D',
  '600': 'DC',
  '700': 'DCC',
  '800': 'DCCC',
  '900': 'CM'
};

// adds zeroes to a character based on the string length and for loop index
// esentially adds tens, hundreds, etc.
function addZeroes(str, i) {
  if (str.length - i - 1 > 0) {
    return '0' * (str.length - i - 1);
  } else {
    return '';
  }
}

function convert(num) {
  var str = num.toString();
  var result = '';
  for (var i = 0; i <= str.length - 1; i++) {
    var char = str[i];
    result = result + map[char + addZeroes(str, i)];
  }
  return result;
}

convert(36);
