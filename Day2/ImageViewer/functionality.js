window.onload = function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    // var fourth = document.getElementById('fourth');
    // var fifth = document.getElementById('fifth');
    first.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer/assets/img1.jpg");
    }
    second.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer/assets/img2.jpg");
    }
    third.onclick = function() {
        var img = document.getElementById('picture');
        img.setAttribute("src", "../ImageViewer/assets/img3.jpg");
    }
}
