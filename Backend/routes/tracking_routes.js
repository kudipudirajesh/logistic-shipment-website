const express = require('express');

const router = express.Router();

const shipments =
require('../data/shipments.json');


// TRACK SHIPMENT API

router.get('/track/:id', (req, res) => {

  const trackingId = req.params.id;

  const shipment = shipments.find(

    item => item.trackingId === trackingId

  );


  if (shipment) {

    res.json({

      success: true,

      shipment: shipment

    });

  }

  else {

    res.status(404).json({

      success: false,

      message: 'Tracking ID not found'

    });

  }

});


module.exports = router;