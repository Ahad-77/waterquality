const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const SensorsData = mongoose.model('SensorsData', sensorSchema);

module.exports = SensorsData;
