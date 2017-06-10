function fadeChangeImage(imageid, newurl) {
  var img = document.getElementById(imageid);
  var endhandler = function() {
    img.src = newurl;
    img.removeEventListener('transitionend', endhandler, false);
    img.removeEventListener('wekitTransitionEnd', endhandler, false);
    img.style.opacity = 1.0;
  }
  img.addEventListener('transitionend', endhandler, false);
  img.addEventListener('webkitTransitionEnd', endhandler, false);
  img.style.opacity = 0.0;
}
