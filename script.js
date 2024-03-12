const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let timer;
let time = 0;

function updateTime() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    time++;
    updateTime();
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 0;
  updateTime();
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
