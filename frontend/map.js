// LIVE MAP TRACKING

let map;

let marker;


// START LOCATION

let currentPosition = {

  lat: 17.3850,
  lng: 78.4867

};


// INITIALIZE MAP

function initMap() {

  // CREATE MAP

  map = new google.maps.Map(

    document.getElementById('map'),

    {
      zoom: 8,

      center: currentPosition
    }

  );


  // CREATE TRUCK MARKER

  marker = new google.maps.Marker({

    position: currentPosition,

    map: map,

    title: 'Prime Xpress Vehicle',

    animation:
      google.maps.Animation.DROP

  });


  // MOVE VEHICLE LIVE

  setInterval(() => {

    currentPosition.lat += 0.01;

    currentPosition.lng += 0.01;


    marker.setPosition(currentPosition);

    map.panTo(currentPosition);

  }, 3000);

}