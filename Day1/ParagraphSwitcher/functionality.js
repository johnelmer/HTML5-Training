window.onload = function() {
    var linkOne = document.getElementById('switchOneTwo');
    var linkTwo = document.getElementById('switchTwoThree');
    var linkThree = document.getElementById('switchOneThree');
    linkOne.onclick = function() {
        var content = document.getElementById('paragraphOne').innerHTML;
        var contentClassName = document.getElementById('paragraphOne').className;
        document.getElementById('paragraphOne').innerHTML = document.getElementById('paragraphTwo').innerHTML;
        document.getElementById('paragraphTwo').innerHTML = content;
        document.getElementById('paragraphOne').className = document.getElementById('paragraphTwo').className;
        document.getElementById('paragraphTwo').className = contentClassName;
    }
    linkTwo.onclick = function() {
        var content = document.getElementById('paragraphTwo').innerHTML;
        var contentClassName = document.getElementById('paragraphTwo').className;
        document.getElementById('paragraphTwo').innerHTML = document.getElementById('paragraphThree').innerHTML;
        document.getElementById('paragraphThree').innerHTML = content;
        document.getElementById('paragraphTwo').className = document.getElementById('paragraphThree').className;
        document.getElementById('paragraphThree').className = contentClassName;
    }
    linkThree.onclick = function() {
        var content = document.getElementById('paragraphOne').innerHTML;
        var contentClassName = document.getElementById('paragraphOne').className;
        document.getElementById('paragraphOne').innerHTML = document.getElementById('paragraphThree').innerHTML;
        document.getElementById('paragraphThree').innerHTML = content;
        document.getElementById('paragraphOne').className = document.getElementById('paragraphThree').className;
        document.getElementById('paragraphThree').className = contentClassName;

    }
}
