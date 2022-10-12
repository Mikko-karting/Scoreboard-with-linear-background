var hours = 0;
var minutes = 0;
var seconds = 0;
let homeScore = 0;
let guestScore = 0;
var lineBreaker = document.querySelectorAll("br");
//var homeField = document.getElementById("myText");
//var guestField = document.getElementById("myText2");
//var timeField = document.getElementById("myText3");
//var startBt = document.getElementById("bt");


function myFunction() {

  var x = document.getElementById("myText").value;
  var y = document.getElementById("myText2").value;
  minutes = document.getElementById("myText3").value;

  if(x == '' || y == '' || minutes == ''){
    document.getElementById("demo").innerHTML =  "Input field/s are empty, fill every fields";
  }
  else if(isNaN(minutes)){
    document.getElementById("demo").innerHTML =  "Time field input is not a number, add number";
  }
  else{
    var mylist = document.getElementById("myList");
    var mylist2 = document.getElementById("myList2");
    var bodyColor = document.getElementById("bodyId");
    setBackgroundColor();

    function setBackgroundColor(){
      bodyColor.style.background = "linear-gradient(to right," + mylist.options[mylist.selectedIndex].text +
      "," + mylist2.options[mylist2.selectedIndex].text + ")";
    }
    
    //Set playtime, team names and scores
    //minutes = document.getElementById("myText3").value;
    document.getElementById("demo").innerHTML =  hours + ":"
    + minutes + ":" + seconds;
    document.getElementById("demo2").innerHTML = 
    "Points of team " + x + ": " + homeScore;
    document.getElementById("demo3").innerHTML = 
    "Points of team " + y + ": " + guestScore;
    
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
    for (let i = 0; i < lineBreaker.length; i++) {
      lineBreaker[i].remove();
    }
    //lineBreaker.parentNode.removeChild(lineBreaker);
    
  // Update the count down every 1 second
  var update = setInterval(function() {

    var remaining = 0;
    
    document.getElementById("bodyId").addEventListener("keyup", function (event){
    
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
      
    // When the count down is over, write match results 
    if (remaining < 0) {
      clearInterval(update);
      const element11 = document.getElementById("demo2");
      element11.remove();
      const element12 = document.getElementById("demo3");
      element12.remove();
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
    document.getElementById("bodyId").addEventListener("keyup", function (event){
    
    if(event.key == "1"){
    document.getElementById('demo2').innerHTML = "Points of team " + x + ": " + (homeScore = homeScore + 1);
    console.log(homeScore);
    }
    else if(event.key == "!"){
    document.getElementById('demo2').innerHTML = "Points of team " + x + ": " + --homeScore;
    }
    else if(event.key == "2"){
    document.getElementById('demo3').innerHTML = "Points of team " + y + ": " + ++guestScore;
    }
    else if(event.key == '"'){
    document.getElementById('demo3').innerHTML = "Points of team " + y + ": " + --guestScore;
    }
    
  });

  }

}