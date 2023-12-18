
const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');
const Patient = require('../models/patient');

router.post('/startEncounter', async (req, res) => {
  try {
    const { patientID } = req.body;

  
    const patientExists = await Patient.findOne({ patientID });
    if (!patientExists) {
      return res.status(404).json({ error: 'Patient not found.' });
    }

    
    const encounterData = {
      patientID,
      startTime: new Date(),
      // Add more encounter fields as needed
    };

    const encounter = await Encounter.create(encounterData);

    res.json({ message: 'Encounter started successfully', encounter });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

