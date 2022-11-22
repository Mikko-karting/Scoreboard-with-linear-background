var hours = 0;
var minutes = 0;
var seconds = 0;
let homeScore = 0;
let guestScore = 0;
var lineBreaker = document.querySelectorAll("br");
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

  var homeName = document.getElementById("myText").value;
  var guestName = document.getElementById("myText2").value;
  minutes = document.getElementById("myText3").value;

  if(homeName == '' || guestName == '' || minutes == ''){
    document.getElementById("demo").innerHTML =  "Input field/s are empty, fill every fields";
  }
  else if(isNaN(minutes)){
    document.getElementById("demo").innerHTML =  "Time field input is not a number, add number";
  }
  else{
    var mylist = document.getElementById("myList");
    var mylist2 = document.getElementById("myList2");
    var bodyId = document.getElementById("bodyId");
    setBackgroundColor();
    setImageAnimation();

    function setBackgroundColor(){
      bodyId.style.background = "linear-gradient(to right bottom," + mylist.options[mylist.selectedIndex].text +
      "," + mylist2.options[mylist2.selectedIndex].text + ")";
      bodyId.style.backgroundAttachment = "fixed";
    }

    function setImageAnimation(){
      //homeLogo.style.width = "350px";
      //homeLogo.style.height = "350px";
      //homeLogo.style.backgroundPosition = "center";
      //homeLogo.style.backgroundSize = "cover";
      //homeLogo.style.backgroundColor = "transparent";
      //homeLogo.style.position = "relative";
      //homeLogo.style.display = "inline-block";
      homeLogo.style.animationName = "animation1";
      homeLogo.style.animationDuration = "4s";
      homeLogo.style.animationFillMode = "forwards";

      //guestLogo.style.width = "350px";
      //guestLogo.style.height = "350px";
      guestLogo.style.left = "-750px";
      guestLogo.style.top = "200px";
      //guestLogo.style.backgroundPosition = "center";
      //guestLogo.style.backgroundSize = "cover";
      //guestLogo.style.backgroundColor = "transparent";
      //guestLogo.style.position = "relative";
      //guestLogo.style.display = "inline-block";
      guestLogo.style.animationName = "animation2";
      guestLogo.style.animationDuration = "4s";
      guestLogo.style.animationFillMode = "forwards";
      guestLogo.style.animationDelay = "4s";
    }
    
    //Set playtime, team names and scores
    document.getElementById("demo").innerHTML =  hours + ":"
    + minutes + ":" + seconds;
    document.getElementById("demo2").innerHTML = 
    "Points of team " + homeName + ": " + homeScore;
    document.getElementById("demo3").innerHTML = 
    "Points of team " + guestName + ": " + guestScore;
    
    //Remove every selection elements
    const element = document.getElementById("one");
    element.remove();
    const element2 = document.getElementById("myText");
    element2.remove();
    const element3 = document.getElementById("myText2");
    element3.remove();
    const element4 = document.getElementById("two");
    element4.remove();
    const element5 = document.getElementById("myList");
    element5.remove();
    const element6 = document.getElementById("bt");
    element6.remove();
    const element7 = document.getElementById("homeInput");
    element7.remove();
    const element8 = document.getElementById("guestInput");
    element8.remove();
    const element9 = document.getElementById("timeInput");
    element9.remove();
    const element10 = document.getElementById("myText3");
    element10.remove();
    const element11 = document.getElementById("three");
    element11.remove();
    const element12 = document.getElementById("myList2");
    element12.remove();
    for (let i = 0; i < lineBreaker.length-1; i++) {
      lineBreaker[i].remove();
    }
    const element13 = document.getElementById("homeImage");
    element13.remove();
    const element14 = document.getElementById("homeImageInput");
    element14.remove();
    const element15 = document.getElementById("guestImage");
    element15.remove();
    const element16 = document.getElementById("guestImageInput");
    element16.remove();
    
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
    document.getElementById("demo").innerHTML = hours + ":"
    + minutes + ":" + seconds;

    //Add number zero front of the values seconds and minutes when values are less than ten
    if(seconds <= 9){
      document.getElementById("demo").innerHTML = hours + ":"
      + minutes + ":0" + seconds;
    }
    if(minutes <= 9){
      document.getElementById("demo").innerHTML = hours + ":0"
      + minutes + ":" + seconds;
    }
    if(minutes <= 9 && seconds <= 9){
      document.getElementById("demo").innerHTML = hours + ":0"
      + minutes + ":0" + seconds;
    }
      
    // When the count down is over, write match results 
    if (remaining < 0) {
      clearInterval(update);
      const element1 = document.getElementById("demo2");
      element1.remove();
      const element2 = document.getElementById("demo3");
      element2.remove();
      const element3 = document.getElementById("homeLogo");
      element3.remove();
      const element4 = document.getElementById("guestLogo");
      element4.remove();
      const element5 = document.getElementById("lastBr");
      element5.remove();
        if(homeScore > guestScore){
          document.getElementById("demo").innerHTML = "Home team wins!";
        }
        else if(homeScore < guestScore){
          document.getElementById("demo").innerHTML = "Guest team wins!";
        }
        else{
          document.getElementById("demo").innerHTML = "Tie!";
        }
    }
  }

    
  }, 1000);

    //Add or reduce scores
    bodyId.addEventListener("keyup", function (event){
    
    if(event.key == "1"){
      document.getElementById('demo2').innerHTML = "Points of team " + homeName + ": " + (homeScore = homeScore + 1);
      console.log(homeScore);
    }
    else if(event.key == "!"){
      document.getElementById('demo2').innerHTML = "Points of team " + homeName + ": " + --homeScore;
    }
    else if(event.key == "2"){
      document.getElementById('demo3').innerHTML = "Points of team " + guestName + ": " + ++guestScore;
    }
    else if(event.key == '"'){
      document.getElementById('demo3').innerHTML = "Points of team " + guestName + ": " + --guestScore;
    }
    
  });

  }

}