
// const launchDay = Number(document.getElementById("day").innerText)
// const launchHours = Number(document.getElementById("hours").innerText)
// const launchMinuts = Number(document.getElementById("minuts").innerText)
// const launchSeconds = Number(document.getElementById("seconds").innerText)

// console.log (launchDay, launchHours, launchMinuts, launchSeconds)

// 777341000
let countDownDate = new Date().getTime() + 3660000;
// console.log (countDownDate)

let x = setInterval(function(){

  // Get today's date and time
  let now = new Date().getTime();
//   console.log(now)

  var distance = countDownDate - now;
  console.log(distance) 

let seconds = 1000
let minutes = seconds * 60
let hours = minutes * 60
let day = hours * 24


  var launchDay = Math.floor(distance / day);
  console.log(launchDay)
  var launchHours = Math.floor((distance % day) / hours);
  console.log(launchHours)
  var launchMinuts = Math.floor((distance % hours) / minutes);
  console.log(launchMinuts)
  var launchSeconds = Math.floor((distance % minutes) / seconds);
  console.log(launchSeconds)
    
document.getElementById("day").innerText = launchDay
document.getElementById("hours").innerText = launchHours
document.getElementById("minuts").innerText = launchMinuts
document.getElementById("seconds").innerText = launchSeconds



  if (distance <= 1000) {
    clearInterval(x);
  }
}, 1000);

 

