const checkOne = (p) => (p < 10 ? `0${p}` : p);
setInterval(() => {
  const myDate = new Date("2023-10-01 03:00 PM") - new Date();
  const timer = document.querySelectorAll(".date div span ");
  const days = myDate / 1000 / 60 / 60 / 24;
  const hours = (days - Math.trunc(days)) * 24;
  const minutes = (hours - Math.trunc(hours)) * 60;
  const seconds = (minutes - Math.trunc(minutes)) * 60;

  timer[0].textContent = checkOne(Math.trunc(days));
  timer[1].textContent = checkOne(Math.trunc(hours));
  timer[2].textContent = checkOne(Math.trunc(minutes));
  timer[3].textContent = checkOne(Math.trunc(seconds));
}, 1000);
