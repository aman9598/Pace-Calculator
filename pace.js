var distanceInput = document.getElementById("distance"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    secondsInput = document.getElementById("seconds"),
    calculateBtn = document.getElementById("calculate_btn");


    calculateBtn.addEventListener("click",function(){
         var miles = parseFloat(distanceInput.value),
             hours = parseFloat(hoursInput.value),
             minutes = parseFloat(minutesInput.value),
             seconds = parseFloat(secondsInput.value);
         var totalMinutes = hours*60 + minutes + seconds/60;
         var pace = totalMinutes/miles;
         var paceMinutes = Math.floor(pace);
         var paceSeconds = Math.round((pace-paceMinutes)*60);
         alert("You need to run " + paceMinutes + " : " + paceSeconds + " minutes per mile.");
    });