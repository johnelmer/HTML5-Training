var color = "#00FF00";
var x = 10;
var y = 10;
var xMov = 1;
var yMov = 1;
function on_resize() {
  var c = document.getElementById("mycanvas");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  move();
}
function move() {
  var c = document.getElementById("mycanvas");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  var ctx = c.getContext("2d");
  ctx.fillStyle = color;
  x += xMov;
  if (x + 100 > window.innerWidth) {
    xMov = -1;
  }
  if (x < 0) {
    xMov = 1;
  }
  y += yMov;
  if (y + 100 > window.innerHeight) {
    yMov = -1;
  }
  if (y < 0) {
    yMov = 1;
  }
  ctx.beginPath();
  ctx.clearRect(x, y, 100, 100);
  ctx.moveTo(x, y);
  ctx.fillRect(x, y, 100, 100);
}
window.onload = function() {
  setInterval("move()", 5);
  on_resize();
  move();
}
window.onresize = function() {
  on_resize();
}
