const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const industriesSchema = new Schema({
  industry_name: { type: String, required: true },
  crn: { type: String, required: true },
  irn: { type: String, required: true },
  category: { type: Number, required: true, max:3},
  no_violations: { type: Number },
  location: { type: String },
  status: { type: String}, //pure , violated detected ...
  industry_status: { type: String },// active , closed
}, {
  timestamps: true,
});

const Industry = mongoose.model('Industry', industriesSchema);

module.exports = Industry;