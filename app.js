const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onmousedown(event) {
  painting = true;
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onmousedown);
}

function init() {}

init();
