import express from 'express';
import patientsService from '../services/patientService';
import toNewPatient from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatientsOmitSSN());
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientsService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Undefined error';
    res.status(400).send(errorMessage);
  }
});

export default router;
