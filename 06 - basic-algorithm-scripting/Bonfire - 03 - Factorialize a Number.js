function factorialize(num) {
  for(i=num-1; i>0; i--){
    num=num*i
  }
  return num;
}

factorialize(5);
