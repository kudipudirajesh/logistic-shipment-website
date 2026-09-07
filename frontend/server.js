
// TRACK API

app.get('/track/:id', (req, res) => {

  const trackingId = req.params.id;

  if(shipments[trackingId]) {

    res.json(shipments[trackingId]);

  } else {

    res.json({

      error: "Tracking ID not found"

    });

  }

});



app.listen(3000, () => {

  console.log('Server running on port 3000');

});

// LOGIN API

app.post('/login', (req, res) => {

  const { email, password } = req.body;

  // DEMO LOGIN

  if(
    email === 'admin@gmail.com'
    &&
    password === 'admin123'
  ) {

    res.json({
      success: true
    });

  } else {

    res.json({
      success: false,
      message: 'Invalid Email or Password'
    });

  }

});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});