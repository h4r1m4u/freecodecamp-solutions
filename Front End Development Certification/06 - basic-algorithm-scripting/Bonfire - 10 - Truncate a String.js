function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  }
  if (str.length > num) {
    return str.slice(0, num - 3) + '...';
  } 
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
