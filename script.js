const timerElement = document.getElementById('timer');
let time = 5400; // 1 hour 30 minutes in seconds

function updateTimer() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function countdown() {
  if (time > 0) {
    time--;
    updateTimer();
  } else {
    time = 5400; // Reset to 1 hour 30 minutes
    updateTimer();
  }
}

setInterval(countdown, 1000);
updateTimer();
