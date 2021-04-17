const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
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
        enum: ['medicalWastes', 'aerosols', 'furnitures', 'LEDlightbulbs',  'batteries', 'electronics'],
        required: true
    },
    imageUrl: String,
    userId: {
        type: String,
        required: true
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

module.exports = mongoose.model('Point', PointSchema)