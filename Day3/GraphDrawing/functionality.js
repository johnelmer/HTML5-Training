window.onload = function() {
  on_resize();
  drawXaxis();
  drawYaxis();
  drawCurve();
}
window.onresize = function() {
  on_resize();
}
function on_resize() {
  var c = document.getElementById("mycanvas");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  drawXaxis();
  drawYaxis();
  drawCurve();
}
function drawXaxis() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, c.height / 2);
  ctx.lineTo(c.width, c.height / 2);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
}
function drawYaxis() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(c.width / 2, 0);
  ctx.lineTo(c.width / 2, c.height);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
}
function drawCurve() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  var x = c.width / 2;
  var y = c.height / 2;
  ctx.beginPath();
  for (var i = -x; i < x; i++) {
    var fx = i * i;
    ctx.lineTo(x + i, y - fx);
  }
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
  ctx.beginPath();
  for (var i = -x; i < x; i++) {
    var fx = i * i * i;
    ctx.lineTo(x + i, y - fx);
  }
  ctx.strokeStyle = "#00ff00";
  ctx.stroke();
  ctx.beginPath();
  for (var i = -x; i < x; i++) {
    var fx = i;
    ctx.lineTo(x + i, y - fx);
  }
  ctx.strokeStyle = "#0000ff";
  ctx.stroke();
}
