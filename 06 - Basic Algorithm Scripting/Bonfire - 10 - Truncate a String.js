function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num - 3).concat('...');
  } else {
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
