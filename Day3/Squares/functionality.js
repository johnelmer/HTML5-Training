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
  drawSquares();
}
function drawSquares() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  var k = 0;
  while (k < c.height) {
    for (var i = 0; i < c.width; i++) {
      ctx.fillStyle= '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      ctx.fillRect(i * 100, k, 100,100);
    }
    k += 100;
  }
}
