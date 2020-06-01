const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    content: String,
    destination: {
        type: String,
        
    },
  });

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Southwest', 'American', 'United'],
    },

    airport: {
        type: String,
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: String,
        default: function() {
            return new Date().getFullYear()

        }
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);