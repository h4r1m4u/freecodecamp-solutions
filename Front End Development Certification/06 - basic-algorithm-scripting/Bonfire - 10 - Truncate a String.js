function truncateString(str, num) {
  /* If the number of characters in the string
   * is greater than the num parameter,
   * then it will truncate the string */
  if(str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
