const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pHSchema = new Schema({
  value: {
    type: Number
},
  date_received: {
    type: Date
}

});

const pH = mongoose.model('pH', pHSchema);

module.exports = pH;
