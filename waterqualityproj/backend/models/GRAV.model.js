const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GRAVSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const GRAV = mongoose.model('GRAV', GRAVSchema);

module.exports = GRAV;
