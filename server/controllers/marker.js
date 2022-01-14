const Marker = require('../models/marker');

async function getMarkers(cb) {
    const docs = await Marker.find();
    console.log(docs);
    cb(docs);
}

module.exports = { getMarkers };