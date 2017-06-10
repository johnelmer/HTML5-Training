window.onload = function() {
  on_resize();
  drawSquares();
}
window.onresize = function() {
  on_resize();
}
function on_resize() {
  var c = document.getElementById("mycanvas");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  drawSquares
}
function drawSquares() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle="#FF0000";
  ctx.fillRect(0, 0, 100,100);
  ctx.fillRect( 100,100, 100,100);

  ctx.fillRect(200, 200, 100,100);

  ctx.fillRect(300, 300, 100,100);

}
