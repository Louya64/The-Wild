// Date Checking
let elements = [];
const date = new Date();
const day = date.getDay();
const hour = date.getHours();


// date sunday 0 - saturday 6
switch (day) {
  case 0:
    elements = document.getElementsByClassName("day_0");
    break;
  case 1:
    elements = document.getElementsByClassName("day_1");
    break;
  case 2:
    elements = document.getElementsByClassName("day_2");
    break;
  case 3:
    elements = document.getElementsByClassName("day_3");
    break;
  case 4:
    elements = document.getElementsByClassName("day_4");
    break;
  case 5:
    elements = document.getElementsByClassName("day_5");
    break;
  case 6:
    elements = document.getElementsByClassName("day_6");
    break;
}

if (hour >= 2 && hour < 11) {
  for (const el of elements) {
    el.style.color = "red";
  }
} else {
  for (const el of elements) {
    el.style.color = "green";
  }
}

