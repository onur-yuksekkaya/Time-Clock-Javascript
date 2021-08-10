var person = prompt("Please enter your name");
document.getElementById("myName").innerHTML = person;



function showTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    document.getElementById("myClock").innerHTML = hours + ":"  + minutes + ":" + seconds;
    var t = setTimeout(showTime,500);
  }
