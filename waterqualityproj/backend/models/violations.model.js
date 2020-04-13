const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const violationsSchema = new Schema({
  name_of_industry_visited: { type: String },
  prev_visitation: { type: Number },
  location: { type: String  },
  approved_status: { type: String },//approve for violation
  violated_param: { type: String  },
  fine: { type: Number, required: true, min:1 }
}, {
  timestamps: true,
});

const Violation = mongoose.model('Violation', violationsSchema);

module.exports = Violation;