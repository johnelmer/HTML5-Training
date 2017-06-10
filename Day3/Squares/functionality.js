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
  var k = 0;
  while (k < c.height) {
    for (var i = 0; i < c.width / 100; i++) {
      ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
      ctx.fillRect(i * 100, k, 100,100);
      if (count % 7 == 0) {
        if (count == 0) {
          count++;
        }
        for (var j = 0; j < 2; j++) {
          for (var l = 0; l < 2; l++) {
            var additionX = i * 100;
            additionX = (j * 50) + additionX;
            var additionY = k;
            additionY = additionY + (l * 50);
            ctx.fillStyle= '#' + Math.floor((Math.random()*16777215)).toString(16);
            ctx.fillRect(additionX, additionY, 50,50);
          }
        }
      }
      count++;
      console.log(count);
    }
    k += 100;
  }
}
