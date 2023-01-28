var hours = 0;
var minutes = 0;
var seconds = 0;
let homeScore = 0;
let guestScore = 0;
var lineBreaker = document.querySelectorAll("br");
var boldText = document.querySelectorAll("b");
var inputTypes = document.querySelectorAll("input");
const home_image_input = document.querySelector("#homeImageInput");
const guest_image_input = document.querySelector("#guestImageInput");
var loaded_image1 = "";
var loaded_image2 = "";
var homeLogo = document.querySelector("#homeLogo");
var guestLogo = document.querySelector("#guestLogo");

    //Load and input teams logos
    //Home team's logo
    home_image_input.addEventListener("change", function(){
      const read = new FileReader();
      read.addEventListener("load", () => {
        loaded_image1 = read.result;
        homeLogo.style.backgroundImage = `url(${loaded_image1})`;
      });
      read.readAsDataURL(this.files[0]);
    })
    //Guest team's logo
    guest_image_input.addEventListener("change", function(){
      const read = new FileReader();
      read.addEventListener("load", () => {
        loaded_image2 = read.result;
        guestLogo.style.backgroundImage = `url(${loaded_image2})`;
      });
      read.readAsDataURL(this.files[0]);
    })


function myFunction() {

  var homeName = document.getElementById("homeInput").value;
  var guestName = document.getElementById("guestInput").value;
  minutes = document.getElementById("timeInput").value;

  if(homeName == '' || guestName == '' || minutes == ''){
    document.getElementById("timeText").innerHTML =  "Input field/s are empty, fill every fields";
  }
  else if(minutes <= 0){
    document.getElementById("timeText").innerHTML =  "Time value can't be 0 minute or lower";
  }
  else{
    var colorlist = document.getElementById("colorList");
    var colorlist2 = document.getElementById("colorList2");
    var bodyId = document.getElementById("bodyId");
    setBackgroundColor();
    setImageAnimation();

    //set background color
    function setBackgroundColor(){
      bodyId.style.background = "linear-gradient(to right bottom," + colorlist.options[colorlist.selectedIndex].text +
      "," + colorlist2.options[colorlist2.selectedIndex].text + ")";
      bodyId.style.backgroundAttachment = "fixed";
    }

    //set starting animation
    function setImageAnimation(){
      homeLogo.style.border = "none";
      homeLogo.style.animationName = "animation1";
      homeLogo.style.animationDuration = "4s";
      homeLogo.style.animationFillMode = "forwards";
      homeLogo.style.animationTimingFunction = "linear";

      guestLogo.style.border = "none";
      guestLogo.style.left = "-87.5vw";
      guestLogo.style.top = "10vw";
      guestLogo.style.animationName = "animation2";
      guestLogo.style.animationDuration = "4s";
      guestLogo.style.animationFillMode = "forwards";
      guestLogo.style.animationDelay = "4s";
      guestLogo.style.animationTimingFunction = "linear";
    }
    
    //Set playtime, team names and scores
    document.getElementById("timeText").innerHTML =  hours + ":"
    + minutes + ":" + seconds;
    document.getElementById("homeScoreText").innerHTML = 
    "Points of " + homeName + ": " + homeScore;
    document.getElementById("guestScoreText").innerHTML = 
    "Points of " + guestName + ": " + guestScore;
    
    //Remove every selection elements
    const element = document.getElementById("header");
    element.remove();
    const element2 = document.getElementById("colorList");
    element2.remove();
    const element3 = document.getElementById("bt");
    element3.remove();
    const element4 = document.getElementById("colorList2");
    element4.remove();
    for (let i = 0; i < lineBreaker.length-1; i++) {
      lineBreaker[i].remove();
    }
    for (let i = 0; i < boldText.length; i++) {
      boldText[i].remove();
    }
    for (let i = 0; i < inputTypes.length; i++) {
      inputTypes[i].remove();
    }
    
  // Update the count down every 1 second
  var update = setInterval(function() {

    var remaining = 0;
    
    bodyId.addEventListener("keyup", function (event){
    
    if(event.key == "p"){
      console.log("play");
      clearInterval(update);
      update = setInterval(startTimer, 1000);
    }
    else if(event.key == "s"){
      console.log("stop");
      clearInterval(update);
    }
    
  });
    
    //Starts a glock
    function startTimer() {
      remaining = seconds + (minutes*60) + (hours*3600);
      remaining--;
      console.log(remaining);
    
      hours = Math.floor((remaining/3600)); 
      minutes = Math.floor((remaining -(3600*hours))/60);
      seconds = Math.floor((remaining -(3600*hours)-(minutes*60)));
      
    // Output the match time
    document.getElementById("timeText").innerHTML = hours + ":"
    + minutes + ":" + seconds;

    //Add number zero front of the values seconds and minutes when values are less than ten
    if(seconds <= 9){
      document.getElementById("timeText").innerHTML = hours + ":"
      + minutes + ":0" + seconds;
    }
    if(minutes <= 9){
      document.getElementById("timeText").innerHTML = hours + ":0"
      + minutes + ":" + seconds;
    }
    if(minutes <= 9 && seconds <= 9){
      document.getElementById("timeText").innerHTML = hours + ":0"
      + minutes + ":0" + seconds;
    }
      
    // When the count down is over, write match results 
    if (remaining < 0) {
      clearInterval(update);
      const element1 = document.getElementById("homeScoreText");
      element1.remove();
      const element2 = document.getElementById("guestScoreText");
      element2.remove();
      const element3 = document.getElementById("homeLogo");
      element3.remove();
      const element4 = document.getElementById("guestLogo");
      element4.remove();
      const element5 = document.getElementById("lastBr");
      element5.remove();
        if(homeScore > guestScore){
          document.getElementById("timeText").innerHTML = "Home team wins!";
        }
        else if(homeScore < guestScore){
          document.getElementById("timeText").innerHTML = "Guest team wins!";
        }
        else{
          document.getElementById("timeText").innerHTML = "Tie!";
        }
    }
  }

    
  }, 1000);

    //Add or reduce scores
    bodyId.addEventListener("keyup", function (event){
    
    if(event.key == "1"){
      document.getElementById('homeScoreText').innerHTML = "Points of " + homeName + ": " + ++homeScore;
      console.log(homeScore);
    }
    else if(event.key == "!"){
      document.getElementById('homeScoreText').innerHTML = "Points of " + homeName + ": " + --homeScore;
    }
    else if(event.key == "2"){
      document.getElementById('guestScoreText').innerHTML = "Points of " + guestName + ": " + ++guestScore;
    }
    else if(event.key == '"'){
      document.getElementById('guestScoreText').innerHTML = "Points of " + guestName + ": " + --guestScore;
    }
    
  });

  }

}