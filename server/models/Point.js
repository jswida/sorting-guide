const mongoose = require('mongoose');

// TODO images server ?

const PointSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    pointType: {
        type: String,
        enum: ['medicalWastes', 'areosols', 'furnitures', 'LEDlightbulbs',  'batteries', 'electronics'],
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    positiveRates: {
        type: Number,
        default: 0
    },
    negativeRates: {
        type: Number,
        default: 0
    }
  });

  module.exports = mongoose.model('Point', PointSchema);