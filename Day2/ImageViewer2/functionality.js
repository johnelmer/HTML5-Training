window.onload = function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var sidebar = document.getElementById('sidebar');
    first.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer2/assets/img1.jpg");
    }
    second.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer2/assets/img2.jpg");
    }
    third.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer2/assets/img3.jpg");
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
function popup1(text) {
    var popup = document.createElement('div');
    popup.className = 'fullscreenpopup';
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
    var picURL = '';
    button.onclick = function() {
        picURL = document.getElementById('inputURL').value;
        var img = document.getElementById('picture');
        img.setAttribute("src", picURL);
        document.body.removeChild(popup);
    }

}
