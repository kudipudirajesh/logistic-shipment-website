async function trackOrder() {

  const trackingId =
    document.getElementById('trackingNumber').value;

  const result =
    document.getElementById('result');


  if (!trackingId) {

    result.innerHTML =
      'Please enter Tracking ID';

    result.style.color = 'red';

    return;
  }


  try {

    const response = await fetch(

      `http://localhost:5000/api/track/${trackingId}`

    );


    const data = await response.json();


    console.log(data);


    if (data.success) {

      result.innerHTML = `

        <b>Status:</b>
        ${data.shipment.status}<br><br>

        <b>Location:</b>
        ${data.shipment.location}<br><br>

        <b>Delivery Date:</b>
        ${data.shipment.deliveryDate}

      `;

      result.style.color = 'green';

    }

    else {

      result.innerHTML =
        data.message;

      result.style.color = 'red';

    }

  }

  catch(error) {

    console.log(error);

    result.innerHTML =
      'Server Error';

    result.style.color = 'red';

  }

}