const mongoose = require('mongoose');

const { Schema } = mongoose;

const MarkerSchema = new Schema({
  lat: Number,
  lng: Number,
  timePlaced: String,
});
const Marker = mongoose.model('test', MarkerSchema);

module.exports = Marker;
