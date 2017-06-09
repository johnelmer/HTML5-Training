// Countries AJAX
function onClick() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'http://emerge.training/countries.xml',
    true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
      var allElements = xhr.responseXML.getElementsByTagName('country');
      for (i = 0; i < allElements.length; i++) {
          document.getElementById('list').innerHTML += allElements[i].getAttribute('name') + "<br>";
      }
    }
  }
  xhr.send();
}
window.onload = function() {
  var home = document.getElementById('homeB');
  var countries = document.getElementById('countriesB');
  var pictures = document.getElementById('picturesB');
  var clearButton = document.getElementById('clearButton');
  var homeContent = document.getElementById('home')
  var countriesContent = document.getElementById('countries');
  var picturesContent = document.getElementById('pictures');
  var images = ['../CountriesAndPictures/assets/img1.jpg',
                '../CountriesAndPictures/assets/img2.jpg',
                '../CountriesAndPictures/assets/img3.jpg'];
  var img = document.getElementById('picture');
  home.onclick = function() {
    homeContent.style.display = 'block';
    countriesContent.style.display = 'none';
    picturesContent.style.display = 'none';
  }
  countries.onclick = function() {
    countriesContent.style.display = 'block';
    homeContent.style.display = 'none';
    picturesContent.style.display = 'none';
  }
  pictures.onclick = function() {
    picturesContent.style.display = 'block';
    homeContent.style.display = 'none';
    countriesContent.style.display = 'none';

      // images[i]
    // console.log(images[i]);
    var i = 0;
    img.setAttribute("src", images[images.length - 1]);
    setInterval(function() {
      img.setAttribute("src", images[i]);
      i++;
      if (i == images.length) {
        i = 0;
      }
    }, 5000);
      // ;


  }
  clearButton.onclick = function() {
      document.getElementById('list').innerHTML = "";
  }
  document.getElementById('menulink').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.className != 'showmenu') {
      menu.className = 'showmenu';
    } else {
      menu.className = 'hiddenmenu'
    }
  }



}
// Ends Here
