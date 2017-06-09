window.onload = function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var fourth = document.getElementById('fourth');
    var fifth = document.getElementById('fifth');
    var textOne = document.getElementById('one');
    var textTwo = document.getElementById('two');
    var textThree = document.getElementById('three');
    var textFour = document.getElementById('four');
    var textFive = document.getElementById('five');

    first.onclick = function() {
        textOne.style.display = 'block';
        textTwo.style.display = 'none';
        textThree.style.display = 'none';
        textFour.style.display = 'none';
        textFive.style.display = 'none';
    }
    second.onclick = function() {
        textTwo.style.display = 'block';
        textOne.style.display = 'none';
        textThree.style.display = 'none';
        textFour.style.display = 'none';
        textFive.style.display = 'none';
    }
    third.onclick = function() {
        textThree.style.display = 'block';
        textOne.style.display = 'none';
        textTwo.style.display = 'none';
        textFour.style.display = 'none';
        textFive.style.display = 'none';
    }
    fourth.onclick = function() {
        textFour.style.display = 'block';
        textOne.style.display = 'none';
        textTwo.style.display = 'none';
        textThree.style.display = 'none';
        textFive.style.display = 'none';
    }
    fifth.onclick = function() {
        textFive.style.display = 'block';
        textOne.style.display = 'none';
        textTwo.style.display = 'none';
        textFour.style.display = 'none';
        textThree.style.display = 'none';
    }
}
