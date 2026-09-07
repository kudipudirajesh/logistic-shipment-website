const express = require('express');

const cors = require('cors');

const trackingRoutes =
require('./routes/tracking_routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', trackingRoutes);

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});