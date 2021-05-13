document.getElementById("set-btn").addEventListener("click", setDate);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
let count = 0;
let timer;
function setDate() {
  if (count > 0) {
    resetTimer();
    count = 0;
  }
  count++;
  const date = document.getElementById("choose-day").value;
  document.getElementById("choose-day").value = "";
  const BirthDayCountDown = new Date(date).getTime();

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

    document.getElementById("count-months").textContent = month;
    document.getElementById("count-weeks").textContent = weeks;
    document.getElementById("count-days").textContent = days;
    document.getElementById("count-hours").textContent = hours;
    document.getElementById("count-minutes").textContent = minutes;
    document.getElementById("count-seconds").textContent = seconds;

    if (distance < 0) {
      resetTimer();
    }
  }, 1000);
}

// const BirthDayCountDown = new Date(`Aug 11, ${year}`).getTime();

function resetTimer() {
  if (timer !== undefined) {
    clearInterval(timer);
  }
  document.getElementById("choose-day").value = "";
  document.getElementById("count-months").textContent = 0;
  document.getElementById("count-weeks").textContent = 0;
  document.getElementById("count-days").textContent = 0;
  document.getElementById("count-hours").textContent = 0;
  document.getElementById("count-minutes").textContent = 0;
  document.getElementById("count-seconds").textContent = 0;
}
