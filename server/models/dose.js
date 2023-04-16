const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoseSchema = new Schema({
  date: {
    type: String,
  },
  list: [{
    type: String,
  }]
});

const Dose = mongoose.model("Dose", DoseSchema);
module.exports = Dose;
