const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
sizeEl.innerText = size;

let isPressed = false;
let color = undefined;

let x = undefined;
let y = undefined;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  // ctx.strokeStyle = color;
  // ctx.stroke();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.stroke();
}

canvas.addEventListener("pointerdown", (e) => {
  isPressed = true;

  x1 = e.offsetX;
  y1 = e.offsetY;
});

canvas.addEventListener("pointerup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("pointermove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);

    x = x2;
    y = y2;
  }
});

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }
  sizeEl.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size <= 5) {
    size = 5;
  }
  sizeEl.innerText = size;
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle(x++, y++);

//     requestAnimationFrame(draw);
// }

// draw();
