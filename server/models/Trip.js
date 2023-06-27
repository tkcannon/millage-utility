const mongoose = require("mongoose");

const { Schema } = mongoose;

const tripSchema = new Schema({
  millageStart: {
    type: Number,
    required: true,
    min: 0,
  },
  millageEnd: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: String, //directly from date picker no formatting
    required: true,
  },
  destination: {
    type: String,
    trim: true,
  },
  purpose: {
    type: Boolean,
    default: true,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
