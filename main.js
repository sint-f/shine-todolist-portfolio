function initMap() {
    const uluru = { lat: 51.052427, lng: 5.9566714 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

var eenblock = document.getElementById('een');
var tweeblock = document.getElementById('twee');
var drieblock = document.getElementById('drie');
var vierblock = document.getElementById('vier');

var moved = false;

function move() {
  if (moved) {
    moved = false;
    eenblock.style.left = '70%';
    tweeblock.style.left = '40vw';
    drieblock.style.left = '20vw';
    vierblock.style.left = '0vw';
  } else {
    moved = true;
    eenblock.style.left = '0vw'
    tweeblock.style.left = '20vw';
    drieblock.style.left = '40vw';
    vierblock.style.left = '70%';
  }
}

function openmap() {
  var map = document.getElementById("map");
  if (map.style.display === "none") {
    map.style.display = "block";
  } else {
    map.style.display = "none";
  }
}