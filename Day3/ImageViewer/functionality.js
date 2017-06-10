window.onload = function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var sidebar = document.getElementById('sidebar');
    first.onclick = function() {
        fadeChangeImage('picture', '../ImageViewer/assets/img1.jpg');
    }
    second.onclick = function() {
        fadeChangeImage('picture', '../ImageViewer/assets/img2.jpg');
    }
    third.onclick = function() {
        fadeChangeImage('picture', '../ImageViewer/assets/img3.jpg');
    }
    document.getElementById('menulink').onclick = function() {
        if (sidebar.className != 'showmenu') {
            sidebar.className = 'showmenu';
        }
        else {
            sidebar.className = 'hiddenmenu'
        }
    }
}
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
function fadePopup() {
  var popup = document.getElementById('fullscreenpopup');
  var endhandler = function() {
    popup.removeEventListener('transitionend', endhandler, false);
    popup.removeEventListener('wekitTransitionEnd', endhandler, false);
    popup.style.opacity = 1.0;
  }
  popup.addEventListener('transitionend', endhandler, false);
  popup.addEventListener('webkitTransitionEnd', endhandler, false);
  popup.style.opacity = 0.0;
}
function popup1(text) {
  var popup = document.createElement('div');
  popup.className = 'fullscreenpopup';
  popup.style.opacity = 0.0;
  setTimeout(function() {
    popup.style.opacity = 1.0;
  }, 0);
  var container = document.createElement('div');
  container.className = 'fullscreenpopup_container';
  popup.appendChild(container);
  var content = document.createElement('div');
  content.className = 'fullscreenpopup_content';
  container.appendChild(content);
  var p1 = document.createElement('p');
  p1.appendChild(document.createTextNode(text));
  content.appendChild(p1);
  var p11 = document.createElement('p');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'inputURL');
  p11.appendChild(input);
  content.appendChild(p11);
  var p2 = document.createElement('p');
  content.appendChild(p2);
  var button = document.createElement('a');
  button.href = '#';
  button.className = 'button';
  p2.appendChild(button);
  var span = document.createElement('span');
  span.appendChild(document.createTextNode('OK'));
  button.appendChild(span);
  document.body.appendChild(popup);
  // fadePopup();

  var picURL = '';
  button.onclick = function() {
      picURL = document.getElementById('inputURL').value;
      fadeChangeImage('picture', picURL);
      document.body.removeChild(popup);
  }
}
