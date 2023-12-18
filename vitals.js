const mongoose = require('../db');

const vitalsSchema = new mongoose.Schema({
  patientID: String,
  temperature: Number,
  heartRate: Number,
  bloodPressure: String,
  
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
