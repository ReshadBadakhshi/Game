const buttontop = document.getElementById("btn-up");
const buttondown = document.getElementById("button-down");
const buttonright = document.getElementById("button-right");
const buttonleft = document.getElementById("button-left");
const circle = document.getElementById("circle");

function movecircleup() {
  let top = circle.style.top;
  let currenttop = parseInt(top) || 0;

  if (currenttop >= 10) {
    currenttop -= 10;
    circle.style.top = currenttop + "px";
  }
}



function movecircledown() {
  let top = circle.style.top;
  let currenttop = parseInt(top) || 0;

  if (currenttop <= 390) {
    currenttop += 10;
    circle.style.top = currenttop + "px";
  }
}

function movecircleright() {
  let left = circle.style.left;
  let currentright = parseInt(left) || 0;

  if (currentright <= 650) {
    currentright += 10;
    circle.style.left = currentright + "px";
  }
}

function movecircleleft() {
  let left = circle.style.left;
  let currentleft = parseInt(left) || 0;

  if (currentleft >= 5) {
    currentleft -= 10;
    circle.style.left = currentleft + "px";
  }
}

function handleKeyPress(event) {
  if (event.key === "ArrowUp") {
    movecircleup();
  } else if (event.key === "ArrowDown") {
    movecircledown();
  } else if (event.key === "ArrowRight") {
    movecircleright();
  } else if (event.key === "ArrowLeft") {
    movecircleleft();
  }
}

buttonleft.addEventListener("click", movecircleleft);
buttonright.addEventListener("click", movecircleright);
buttondown.addEventListener("click", movecircledown);
buttontop.addEventListener("click", movecircleup);

document.body.addEventListener("keydown", handleKeyPress);
