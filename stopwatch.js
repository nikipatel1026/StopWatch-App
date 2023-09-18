window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;

  let appendMinutes = document.getElementById("minutes");
  let appendSeconds = document.getElementById("seconds");
  let appendTens = document.getElementById("tens");

  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    minutes = seconds = tens = 0;
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
  }

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
      tens = 0;
      appendTens.innerHTML = "00";
    }
    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
      seconds = 0;
      appendSeconds.innerHTML = "00";
    }
  }
};
