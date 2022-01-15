const Marker = require('../models/marker');

async function getMarkers(cb) {
    const docs = await Marker.find();
    cb(docs);
}

// async function removeMarker(marker, cb) {
//     // A.where().remove(filter, callback)
//     const docs = await Marker.remove({ lat, lng, })
//         .then((res) => {
//             console.log(res);
//         })
//     cb(docs);
// }
module.exports = { getMarkers };