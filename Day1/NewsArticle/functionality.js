window.onload = function() {
    var link = document.getElementById('mylink')
    link.onclick = function() {
        document.getElementById('article').innerHTML = "";
        document.getElementById('title').innerHTML = "Thank you for reading!"
    }
}
