var count = 0;

function cc(card) {
  // Only change code below this line
  
  if (2 <= card && card <= 6) {
    count++;
  } else if (7 <= card && card <= 9) {
    // do nothing
  } else {
    count--;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
  // Only change code above this line
}

// Add/remove calls to test your function. 
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
