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
      ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
      ctx.fillRect(i * 100, k, 100,100);
    }
    k += 100;
  }
}
