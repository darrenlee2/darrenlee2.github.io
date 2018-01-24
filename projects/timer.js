$(document).ready(function(){
  var run = true;
  var goClicked = false;
  
  var workTime = 25;
  var breakTime = 5;
  var clock;
  var tone = new Audio("http://soundbible.com/grab.php?id=1815&type=mp3");
  
  // PAUSE
  
  $("#pause").on("click", function(){
    if(goClicked){
      run = !run;
      if(run){
        $("#status").text('');
      }else{
        $("#status").text('Paused');
      }
    }
  });
  
  $(".clock-box").click(function(){
    if(goClicked){
      run = !run;
      if(run){
        $("#status").text('');
      }else{
        $("#status").text('Paused');
      }
    }
  });
  
  // TIMER
  
  $("#go").on("click", function(){
    goClicked = true;
    
    workTime = $("#work-time").html() * 60;
    breakTime = $("#break-time").html() * 60;
    
    $("#status").text("Starting...");
    //$("#go").text("Reset");
    //alert( "break time: "+ breakTime + " | work time: " + workTime );
    // clear any previous timers
    clearInterval(clock);
    // start the timer with the input work and break times
    startTimer(workTime, breakTime);
    
    
  });
  
  function startTimer(time, time2){
    var timer = time;
    var work = true;
    var minutes, seconds;
    $("#description").text("Work Session");
    clock = setInterval(function(){
      //this block of code runs every 1000 milliseconds.
      if(run){
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);

        seconds = seconds < 10? "0" + seconds: seconds;

        $("#clock").text(minutes + ":" + seconds);

        timer = timer - 1;

        if(timer < 0){
          tone.play();
          work = !work;
          if(!work){
            timer = time2;
            $("#description").text("Break Session!");
          }else{
            timer = time;
            $("#description").text("Work Session");
          }
        }
        if(time - timer <= 3 && work){ $("#status").text("Running!"); }
        else{ $("#status").text(""); }
        
      }
      
    }, 1000);
  }
  
  
  // BUTTON TOGGLING
  
  $("#minus-work").on("click", function(){
    var workNum = $("#work-time").html();
    if(workNum > 1){
      $("#work-time").html(parseInt(workNum)-1);
    }
    if(workNum == 100){
      $("#plus-work-div").removeClass("col-md-offset-1");
    }
    if(!goClicked){
      $("#clock").text(parseInt(workNum)-1 + ":00");
      if(workNum == 1){$("#clock").text(parseInt(workNum) + ":00");}
    }
  });
  $("#plus-work").on("click", function(){
    var workNum = $("#work-time").html();
    $("#work-time").html(parseInt(workNum)+1);
    if(workNum >= 99){
      $('#plus-work-div').addClass("col-md-offset-1");
    }
    if(!goClicked){
      $("#clock").text(parseInt(workNum)+1 + ":00");
    }
    
  });
  $("#minus-break").on("click", function(){
    var workNum = $("#break-time").html();
    if(workNum > 1){
      $("#break-time").html(parseInt(workNum)-1);
    }
    if(workNum == 100){
      $("#plus-break-div").removeClass("col-md-offset-1");
    }
    
  });
  $("#plus-break").on("click", function(){
    var workNum = $("#break-time").html();
    $("#break-time").html(parseInt(workNum)+1);
    if(workNum >= 99){
      $('#plus-break-div').addClass("col-md-offset-1");
    }
    
  });
});