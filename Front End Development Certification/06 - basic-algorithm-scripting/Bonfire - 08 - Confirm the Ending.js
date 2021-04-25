function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.slice(-target.length) === target);
}

confirmEnding("Bastian", "n", "");
