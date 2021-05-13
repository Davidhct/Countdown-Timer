document.getElementById("set-btn").addEventListener("click", setDate);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
let count = 0;
let timer = 0;

function setDate() {
  let date = document.getElementById("choose-day").value;
  if (date === "") {
    alert("You did not enter anything!!!");
    resetTimer();
  } else {
    let BirthDayCountDown = new Date(date).getTime();
    document.getElementById("choose-day").value = "";

    if (count > 0) {
      resetTimer();
      count = 0;
    }
    count++;

    timer = setInterval(function () {
      const dateNow = new Date().getTime();
      const distance = BirthDayCountDown - dateNow;

      let month = Math.trunc(distance / (1000 * 60 * 60 * 24 * 30.5));
      let weeks = Math.trunc(distance / (1000 * 60 * 60 * 24 * 7));
      let days = Math.trunc(distance / (1000 * 60 * 60 * 24));
      let hours = Math.trunc(
        (distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.trunc((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.trunc((distance % (1000 * 60)) / 1000);

      document.getElementById("count-months").innerHTML = month;
      document.getElementById("count-weeks").innerHTML = weeks;
      document.getElementById("count-days").innerHTML = days;
      document.getElementById("count-hours").innerHTML = hours;
      document.getElementById("count-minutes").innerHTML = minutes;
      document.getElementById("count-seconds").innerHTML = seconds;

      if (distance < 0) {
        clearInterval(timer);
        resetTimer();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = 0;
  document.getElementById("choose-day").value = "";

  document.getElementById("count-months").innerHTML = 0;

  document.getElementById("count-weeks").innerHTML = 0;
  document.getElementById("count-days").innerHTML = 0;
  document.getElementById("count-hours").innerHTML = 0;
  document.getElementById("count-minutes").innerHTML = 0;
  document.getElementById("count-seconds").innerHTML = 0;
}
