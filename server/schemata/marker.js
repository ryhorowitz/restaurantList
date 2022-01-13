const mongoose = require('mongoose');

const { Schema } = mongoose;

const markerSchema = new Schema({
  lat: Number,
  lng: Number,
  timePlaced: String,
});

module.exports = markerSchema;
