const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TDSSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const TDS = mongoose.model('TDS', TDSSchema);

module.exports = TDS;
