
const body = document.querySelector("body");

function windowResize() {
  if (window.innerWidth < 700) {
    body.style.backgroundColor = "orange";
  } else if (window.innerWidth >= 700 && window.innerWidth < 1100) {
    body.style.backgroundColor = "gray";
  } else {
    body.style.backgroundColor = "pink";
  }
}

window.addEventListener("resize", windowResize);
