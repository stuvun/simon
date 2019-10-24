var c = 100;
var t;
var timer_is_on = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c -= 1;
  t = setTimeout(timedCount, 200);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}