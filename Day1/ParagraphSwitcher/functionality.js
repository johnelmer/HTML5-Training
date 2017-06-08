window.onload = function() {
    var linkOne = document.getElementById('switchOneTwo');
    var linkTwo = document.getElementById('switchTwoThree');
    var linkThree = document.getElementById('switchOneThree');
    linkOne.onclick = function() {
        var content = document.getElementById('paragraphOne').innerHTML;
        document.getElementById('paragraphOne').innerHTML = document.getElementById('paragraphTwo').innerHTML;
        document.getElementById('paragraphTwo').innerHTML = content;
        // var paragraphOneId = document.getElementById('paragraphOne').id;
        // var paragraphTwoId = document.getElementById('paragraphTwo').id;
        // document.getElementById('paragraphTwo').id = paragraphOneId;
        // document.getElementById('paragraphOne').id = paragraphTwoId;
    }
    linkTwo.onclick = function() {
        var content = document.getElementById('paragraphTwo').innerHTML;
        document.getElementById('paragraphTwo').innerHTML = document.getElementById('paragraphThree').innerHTML;
        document.getElementById('paragraphThree').innerHTML = content;
        // var paragraphThreeId = document.getElementById('paragraphThree').id;
        // var paragraphTwoId = document.getElementById('paragraphTwo').id;
        // document.getElementById('paragraphTwo').id = paragraphThreeId;
        // document.getElementById('paragraphThree').id = paragraphTwoId;
    }
    linkThree.onclick = function() {
        var content = document.getElementById('paragraphOne').innerHTML;
        document.getElementById('paragraphOne').innerHTML = document.getElementById('paragraphThree').innerHTML;
        document.getElementById('paragraphThree').innerHTML = content;
        // var paragraphThreeId = document.getElementById('paragraphThree').id;
        // var paragraphOneId = document.getElementById('paragraphOne').id;
        // document.getElementById('paragraphOne').id = paragraphThreeId;
        // document.getElementById('paragraphThree').id = paragraphOneId;

    }
}
