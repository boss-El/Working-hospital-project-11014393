
const mongoose = require('../db');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  startTime: Date,
  
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
