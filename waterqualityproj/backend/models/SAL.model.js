const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SALSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}
});

const SAL = mongoose.model('SAL', SALSchema);

module.exports = SAL;
