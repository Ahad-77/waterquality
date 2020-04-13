const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DOSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const DO = mongoose.model('DO', DOSchema);

module.exports = DO;
