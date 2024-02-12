const text = document.getElementById("text");
let time = 60;
function timer() {
  time--;
  text.textContent = `Minutes: ${time}`;
  if (time === 30) {
    alert("Залишилось меньше половини часу");
  }
  if (time === 0) {
    clearInterval(task1);
  }
}
const task1 = setInterval(timer, 60000);

//////////////////////////////////////////////////
const text2 = document.getElementById("text2");
const btn = document.getElementById("startBtn");
let time2 = 30;
function timer2() {
  time2--;
  text2.textContent = `Seconds: ${time2}`;
  if (time2 === 0) {
    clearInterval(task2);
    btn.disabled = false;
    time2 = 30;
    text2.textContent = `Seconds: ${time2}`;
  }
  if (time2 === 10) {
    text2.style.fontSize = "xx-large";
    function inc() {
      text2.style.fontSize = "medium";
    }
    function dec() {
      text2.style.fontSize = "xx-small";
    }
    setTimeout(dec, 1000);
    setTimeout(inc, 2000);
  }
}
let task2;
btn.addEventListener("click", () => {
  task2 = setInterval(timer2, 1000);
  btn.disabled = true;
});
