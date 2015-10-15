function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.slice(-target.length) === target);
}

end("Bastian", "n", "");
