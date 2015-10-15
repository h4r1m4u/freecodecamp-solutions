$(document).ready(function() {

  var memory = []; // calculator's memory
  var operators = ['+', '-', '/', '*']; // stores the operator the user used
  var user_entered_number = false; // tracks whether the user entered any number
  
  // CALCULATOR FUNCTIONS
  
  // adds the number on the display and the pressed operator into the calculator memory stack, so the memory looks like this [1, "/", 4.5, "+", ...]
  function addToStack(operator) {
    var lastInStack = memory[memory.length - 1];   
    if ($.inArray(lastInStack, operators) > -1 && !user_entered_number && operator != '=') {
      // the last element in the memory array is an operator
      // and the user didn't enter any new number, 
      // so we just replace the last operator with the newly pressed one
      // (user changed his mind and e.g. instead of adding he wants to multiply).
      // if the operator is '=' we don't replace the last operator with it, but
      // instead add the number from the display into the stack (this allows for
      // calculations such as 5 * 5 without having to press 5 two times as it 
      // just remains on the display)
      memory[memory.length - 1] = operator;
    } else {
      // put the number from the display and the presssed operator
      // into the memory array
      memory.push(parseFloat($('#display').text()));  
      memory.push(operator);
      // change this to false, so that when the user starts pressing number buttons, 
      // whatever is shown on the display will be replaced with the new numbers,
      // not appended
      user_entered_number = false;
    }
    // show the calculated result of the entered numbers and operators so far;
    // return only 11 left-most character, so that the number doesn' overflow 
    // the display
    $('#display').text(evaluateStack(memory).toString().slice(0, 12));
  }
  
  // recursively calculates and returns the value of the stack (array) of numbers and operators
  // if the last operator is '=', it will empty the calculator's memory
  function evaluateStack(stack) {
    if (stack.length <= 2) {
      // if the last operator in the stack is '=', wipe the memory
      if (stack[1] == '=') {
        memory = []
      }
      return stack[0];
    } else {
      // the array of first three elements (two numbers and operator)
      var first_three = stack.slice(0, 3); 
      // remove the first three elements from the stack
      stack = stack.slice(3);
      var calculated; // will hold the calculated value of the first two elements and their operator
      var a = first_three[0];
      var operator = first_three[1];
      var b = first_three[2];
      switch (operator) {
        case '+':
          calculated = a + b;
          break;
        case '-':
          calculated = a - b;
          break;
        case '/':
          calculated = a / b;
          break;
        case '*':
          calculated = a * b;
          break;
      }
      // add the calculated number as the first elements in the stack and evaluate the remaining stack again
      stack.unshift(calculated);
      return evaluateStack(stack);
    }
  }
  
  // calculates percentage
  function calculatePercentage() {
    if (memory.length >= 2) {
      var percent = parseFloat($("#display").text()) / 100;
      return evaluateStack(memory) * percent;
    } else {
      return 0;
    }
  }
  
  // clears the current display content
  function ce() {
    $('#display').text(0);
  }
  
  // clears the calculator memory and resets the display
  function ac() {
    memory = [];
    ce();
  }
  
  // BUTTON INTERACTIONS
  
  // number buttons
  $('.number').click(function() {
    var value = $(this).text();
    // maximum input length is 11 digits
    if ($('#display').text().length <= 12) {
      // if there're already some numbers on the display, or if there's 0 but the user used the decimal period button, we'll add the new number to the end
      if ( ( ($('#display').text() != '0') || value == '.' ) && user_entered_number ) {
        $('#display').append(value);
      // otherwise we'll replace the default 0 on the display
      } else {
        $('#display').text(value);
      }
      user_entered_number = true;
    }
  });

  // display reset
  $("#ce").click(function() {
    ce();
  });
  
  // memory reset
  $("#ac").click(function() {
    ac();
  });
  
  // when an operator is pressed, add the number from the display and the operator into the memory stack
  $(".operator").click(function() {
    addToStack($(this).text());
  });
  
  // calculate percentage
  $("#percentage").click(function() {
    $("#display").text(calculatePercentage());
  });
  
});