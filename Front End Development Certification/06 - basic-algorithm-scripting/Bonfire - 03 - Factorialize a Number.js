function factorialize(num) {
  switch(num) {
    case 0:
      return 1;
      break;
    case 1: 
      return num;
      break;
    default:
      return num * factorialize(num - 1);
  }
}

factorialize(5, '');