/* eslint-disable no-console */
const express = require('express');
const { getMarkers } = require('./controllers/marker');

const router = express.Router();

router.get('/markers', (req, res) => {
    getMarkers((docs) => {
        console.log('DOCS are \n', docs);
        res.send(docs);
    });
});

// router.post('/markers', (req, res) => {
//     console.log(req.body);
//     // const { lat, lng, time } = req.body;
//     const marker = new Marker({ lat, lng, time });
//     res.send('from post /markers');
// });

module.exports = router;