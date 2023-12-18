// models/patient.js
const mongoose = require('../db');

const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  otherName: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    phoneNumber: String,
    relationship: String,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
