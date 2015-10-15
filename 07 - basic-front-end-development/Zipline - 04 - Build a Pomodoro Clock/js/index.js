$(document).ready(function() {
  
  var sessionLength = 1500; // in seconds
  var breakLength = 300; // in seconds
  var pomodoroLength = 1500; // in seconds - tracks the pomodoro time
  var pomodoroRunning = false; // pomodoro is stopped at page load
  var pomodoroStatus = 'session'; // 'session' or 'break' - tracks whether the user is currently working or on a break
  var pomodoroTimer; // will hold the setTimer id when 'play' is clicked
  var pomodoroSound = new Audio('http://www.wavsource.com/snds_2015-10-11_5648730289231752/sfx/exit_cue_y.wav');
  
  // Update the global variables sessionLength and breakLength 
  // by value
  function setTime(str, value) {
    switch (str) {
      case 'session':
        sessionLength += value;
        if (sessionLength < 0) {
          sessionLength = 0;
        }
        break;
      case 'break':
        breakLength += value;
        if (breakLength < 0) {
          breakLength = 0;
        }
        break;
      case 'pomodoro':      
        if (pomodoroStatus == 'session') {         
          pomodoroLength = sessionLength;
        } else if (pomodoroStatus == 'break') {
          pomodoroLength = breakLength;
        }
        break;
    }
    // sets pomodoro to session or break time when it's paused
    if (!pomodoroRunning && str == pomodoroStatus) {
      switch (str) {
        case 'session':
          pomodoroLength = sessionLength;
          break;
        case 'break':
          pomodoroLength = breakLength;
          break;
      }
      setProgressBar(pomodoroLength);
    }
    drawTime(str);
  }
  
  // Draw the time on the page
  function drawTime(str) {
    switch (str) {
      case 'session':
        $('#sessionLength').text(formatTime(sessionLength));
        // draw the session time on pomodoro if it's paused and we modified session length
        if (!pomodoroRunning && str == pomodoroStatus) {
          $('#pomodoroTime').text(formatTime(sessionLength));
        }        
        break;
      case 'break':
        $('#breakLength').text(formatTime(breakLength));
        // draw the break time on pomodoro if it's paused and we modified break length
        if (!pomodoroRunning && str == pomodoroStatus) {
          $('#pomodoroTime').text(formatTime(breakLength));
        }        
        break;
      case 'pomodoro':
        // update pomodoro time (when being counted down)
        $('#pomodoroTime').text(formatTime(pomodoroLength));
        break;
    }
  }
  
  // Convert the time in seconds to mm:ss format
  function formatTime(time_in_secs) {
    var minutes = Math.floor(time_in_secs / 60);
    var seconds = time_in_secs - minutes * 60;
    return formatNumbers(minutes,'0', 2) + ':' + formatNumbers(seconds, '0', 2);
  }
  
  // Add leading zeros to minutes and seconds
  function formatNumbers(string,pad,length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
  
  // POMODORO FUNCTIONS
  
  function pomodoroPlay() {
    if (!pomodoroRunning) {
      pomodoroRunning = true;
      // start the countdown
      pomodoroTimer = setInterval(function() { 
        if (pomodoroLength > 0) {
          pomodoroLength -= 1;
        } else {
          // swap the pomodoro status
          switch (pomodoroStatus) {
            case 'session':
              pomodoroStatus = 'break';
              break;
            case 'break':
              pomodoroStatus = 'session';
              break;
          }
          // pomodoro changes from session to break and vice versa
          // hence we set the time and redraw the status
          pomodoroSound.play(); 
          setTime('pomodoro'); 
          setProgressBar(pomodoroLength);
          drawPomodoroStatus();
        }        
        drawTime('pomodoro');
        updateProgressBar();
      }, 1000);
    }
  }
  
  function pomodoroPause() {
    if (pomodoroRunning) {
      pomodoroRunning = false;
      clearInterval(pomodoroTimer);
      drawTime('pomodoro');
    }
  }
  
  function pomodoroStop() {
    pomodoroRunning = false;
    clearInterval(pomodoroTimer);
    setTime('pomodoro');
    setProgressBar(pomodoroLength);
  }
  
  // draws 'Session' or 'Break' above pomodoro to give indication to the user
  function drawPomodoroStatus() {
    if (pomodoroStatus == 'session') {
      $('#pomodoroStatus').text('Session');
    } else if (pomodoroStatus == 'break') {
      $('#pomodoroStatus').text('Break');
    }
  }
  
  // PROGRESS BAR
  
  // Set the attributes of the progress bar
  function setProgressBar(time_in_secs) {
    $('.progress-bar').attr({"aria-valuemax": time_in_secs, "aria-valuenow": time_in_secs }).css({"width":"100%"});
    if (pomodoroStatus == 'session') {
      $('.progress-bar').removeClass( "progress-bar-danger" ).addClass( "progress-bar-success" );
    } else if (pomodoroStatus == 'break') {
      $('.progress-bar').removeClass( "progress-bar-success" ).addClass( "progress-bar-danger" );
    }
  }
  
  // Update the progress bar depending on the progress of the pomodoro countdown
  function updateProgressBar() {    
    $('.progress-bar').attr('aria-valuenow', pomodoroLength);
    var curr = $('.progress-bar').attr('aria-valuenow');
    var max = $('.progress-bar').attr('aria-valuemax');
    var width;
    // calculate the width of the progress bar
    if (curr == 0) {
      width = 0;
    } else {
      width = Math.round(curr / max * 100); 
    }
    $('.progress-bar').css({"width": width + "%"});
  }
  
  // Toggles the progress bar animation depending on whether the pomodoro is running or not
  function toggleActiveProgressBar() {
    if (pomodoroRunning) {
      $('.progress-bar').addClass('active');
    } else {
      $('.progress-bar').removeClass('active');
    }
  }
  
  // BUTON INTERACTIONS
  
  // Change the session and break length by clicking the up and down arrows
  $('.time-up, .time-down').click(function() {
    setTime($(this).attr('name'), parseInt($(this).attr('value')));
  });
  
  // Start pomodoro
  $('#play').click(function() {
    pomodoroPlay();
  });
  
  // Pause pomodoro
  $('#pause').click(function() {
    pomodoroPause();
  });  
  
  // Stop (reset) pomodoro
  $('#stop').click(function() {
    pomodoroStop();
  });  
  
  // Toggle the animation of the progress bar
  $('#play, #pause, #stop').click(function() {
    toggleActiveProgressBar();
  });
  
  // INIT ON PAGE LOAD
  
  // Display the initial values
  drawTime('break');
  drawTime('session');
  drawPomodoroStatus(); 
  // Set the initial progress bar values
  setProgressBar(pomodoroLength);
  
});