function pairElement(str) {
  var pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  
  var result = [];
  
  for (var i = 0; i <= str.length - 1; i++) {
    var currGene = str.charAt(i);
    result.push([currGene, pairs[currGene]]);
  }
  
  return result;
}

pairElement("GCG");
