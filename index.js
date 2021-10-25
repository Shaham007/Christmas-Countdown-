var countDown = new Date("December 25, 2021 00:00:00").getTime();

var A = setInterval(function(){
    var currentDate = new Date().getTime();
    var interval = countDown - currentDate; 

    var days = Math.floor(interval / (1000 *60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

});

