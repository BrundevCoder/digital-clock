const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds")
const milisecondsDisplay = document.getElementById("miliseconds")

let date = new Date();

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

setInterval(() => {
  date = new Date()

  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  miliseconds = date.getMilliseconds();

  hoursDisplay.innerText = String(hours);
  minutesDisplay.innerText = String(minutes);
  secondsDisplay.innerText = String(seconds);
  milisecondsDisplay.innerText = String(miliseconds);
}, 50);