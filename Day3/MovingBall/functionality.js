var xPos = 32;
var yPos = 32;
var dim = 100;
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
