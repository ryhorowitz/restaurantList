const express = require('express');
const Marker = require('./models/marker');

const router = express.Router();

router.post('/markers', (req, res) => {
  console.log(req.body);
  // const { lat, lng, time } = req.body;
  const marker = new Marker({ lat, lng, time, });
  res.send('from post /markers');
});

module.exports = router;
