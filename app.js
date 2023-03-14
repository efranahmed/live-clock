const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#mn");
const sec = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hour = day.getHours() * 30;
  let minute = day.getMinutes() * deg;
  let second = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  min.style.transform = `rotateZ(${minute}deg)`;
  sec.style.transform = `rotateZ(${second}deg)`;
});
