
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

router.post('/register', async (req, res) => {
  try {
    const { patientID, surname, otherName, gender, phoneNumber, residentialAddress, emergencyContact } = req.body;

   
    if (!patientID || !surname || !otherName || !gender || !phoneNumber || !residentialAddress || !emergencyContact) {
      return res.status(400).json({ error: 'Incomplete data. All fields are required.' });
    }

   
    const patientExists = await Patient.findOne({ patientID });
    if (patientExists) {
      return res.status(409).json({ error: 'Patient with the provided ID already exists.' });
    }

    // Create a new patient
    const newPatient = await Patient.create(req.body);

    res.json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
