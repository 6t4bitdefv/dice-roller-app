let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xLabel").textContent = `Dice 1: ${x}`;
  document.getElementById("yLabel").textContent = `Dice 2: ${y}`;
  document.getElementById("zLabel").textContent = `Dice 3: ${z}`;
};
