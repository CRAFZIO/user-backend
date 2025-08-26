const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema(
  {
    vehicleNumber: { type: String, required: true },
    routeName: { type: String, required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    assignDate: { type: Date, required: true },
    departureTime: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assignment', AssignmentSchema);
