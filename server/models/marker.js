const mongoose = require('mongoose');
const markerSchema = require('../schemata/marker');

const Marker = mongoose.model('test', markerSchema);

module.exports = Marker;
