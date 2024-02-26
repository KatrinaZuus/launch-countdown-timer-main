
const launchDay = Number(document.getElementById("day").innerText)
const launchHours = Number(document.getElementById("hours").innerText)
const launchMinuts = Number(document.getElementById("minuts").innerText)
const launchSeconds = Number(document.getElementById("seconds").innerText)

console.log (launchDay, launchHours, launchMinuts, launchSeconds)

let countDownDate = new Date("Feb 26, 2024 00:45:25").getTime();
console.log(countDownDate)
let now = new Date().getTime();
console.log(now)
distance = countDownDate - now;
console.log(distance)   
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
console.log(days)
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours)
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
console.log(minutes)
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
console.log(seconds)
 

