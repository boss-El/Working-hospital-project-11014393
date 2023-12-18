
const express = require('express');
const router = express.Router();
const Vitals = require('../models/vitals');

router.post('/submitVitals', async (req, res) => {
  try {
    const { patientID, temperature, heartRate, bloodPressure } = req.body;

    
    if (!patientID || !temperature || !heartRate || !bloodPressure) {
      return res.status(400).json({ error: 'Incomplete data. All fields are required.' });
    }

    
    const patientExists = await Patient.findOne({ patientID });
    if (!patientExists) {
      return res.status(404).json({ error: 'Patient not found.' });
    }

   
    const vitalsData = {
      patientID,
      temperature,
      heartRate,
      bloodPressure,
      
    };

    const vitals = await Vitals.create(vitalsData);

    res.json({ message: 'Vitals submitted successfully', vitals });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
