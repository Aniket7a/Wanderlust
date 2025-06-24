
const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
  provider: 'openstreetmap' // Free, no API key
});

module.exports = geocoder;
