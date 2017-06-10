var xPos = 0;
var yPos = 0;
var dim = 64;
var c;
window.onload = function() {
  c = document.getElementById("mycanvas");
  ctx = c.getContext("2d");
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(xPos, yPos, dim, dim);
  ctx.fill();
}
// window.addEventListener('mousedown', function(event) {
//   // var c = document.getElementById("mycanvas");
//   xPos = event.clientX;
//   yPos = event.clientY;
//   ctx.translate(xPos, yPos);
// });
