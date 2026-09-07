async function login() {

  const email =
    document.getElementById('email').value;

  const password =
    document.getElementById('password').value;

  const response = await fetch(
    'http://localhost:3000/login',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        password
      })
    }
  );

  const data = await response.json();

  if(data.success) {

    document.getElementById('loginResult')
      .innerHTML = 'Login Successful';

    document.getElementById('loginResult')
      .style.color = 'green';

    setTimeout(() => {

      window.location.href = 'admin.html';

    }, 1000);

  } else {

    document.getElementById('loginResult')
      .innerHTML = data.message;

    document.getElementById('loginResult')
      .style.color = 'red';
  }
}

// GOOGLE MAP

let map;

let marker;

let currentPosition = {

  lat: 17.3850,
  lng: 78.4867

};


function initMap() {

  map = new google.maps.Map(

    document.getElementById('map'),

    {
      zoom: 8,

      center: currentPosition
    }

  );


  marker = new google.maps.Marker({

    position: currentPosition,

    map: map,

    title: 'Shipment Vehicle'

  });


  // LIVE MOVEMENT

  setInterval(() => {

    currentPosition.lat += 0.01;

    currentPosition.lng += 0.01;

    marker.setPosition(currentPosition);

    map.panTo(currentPosition);

  }, 3000);

}