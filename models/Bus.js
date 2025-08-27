const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema(
  {
    busNumber: { type: String, required: true, index: true },
    routeName: { type: String },
    capacity: { type: Number },
    driverId: { type: String },
    tcId: { type: String },
    // static details are stored here (from MongoDB)
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bus', BusSchema);



