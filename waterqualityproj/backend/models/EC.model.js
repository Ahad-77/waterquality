const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ECSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const EC = mongoose.model('EC', ECSchema);

module.exports = EC;
