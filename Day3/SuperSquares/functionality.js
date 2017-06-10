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
  var count = 0;
  for (var k = 0; k < c.height;) {
    for (var i = 0; i < c.width; ) {
      ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
      ctx.fillRect(i, k, 100,100);
      if (count % 7 == 0) {
        if (count == 0) {
          count++;
        }
        for (var j = 0; j < 2; j++) {
          for (var l = 0; l < 2; l++) {
            var additionX = (j * 50) + i;
            var additionY = k + (l * 50);
            ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
            ctx.fillRect(additionX, additionY, 50,50);
          }
        }
      }
      if (count % 11 == 0){
        for (var m = 0; m < 4; m++) {
          for (var n = 0; n < 4; n++) {
            var additionX = (m * 25) + i;
            var additionY = k + (n * 25);
            ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
            ctx.fillRect(additionX, additionY, 25,25);
          }
        }
      }
      count++;
      i = i + 100;
    }
    k += 100;
  }
}
