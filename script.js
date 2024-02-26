
// const launchDay = Number(document.getElementById("day").innerText)
// const launchHours = Number(document.getElementById("hours").innerText)
// const launchMinuts = Number(document.getElementById("minuts").innerText)
// const launchSeconds = Number(document.getElementById("seconds").innerText)

// console.log (launchDay, launchHours, launchMinuts, launchSeconds)

// 777341000
let countDownDate = new Date().getTime() + 777341000;
// console.log (countDownDate)

let x = setInterval(function(){

  // Get today's date and time
  let now = new Date().getTime();
//   console.log(now)

  var distance = countDownDate - now;
  console.log(distance) 
    

  var launchDay = Math.floor(distance / (1000 * 60 * 60 * 24));
  var launchHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var launchMinuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var launchSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    
document.getElementById("day").innerText = launchDay
document.getElementById("hours").innerText = launchHours
document.getElementById("minuts").innerText = launchMinuts
document.getElementById("seconds").innerText = launchSeconds



  if (distance <= 1000) {
    clearInterval(x);
  }
}, 1000);

 

