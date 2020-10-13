import express from 'express';
import patientService from '../services/patientService';
import patientsService from '../services/patientService';
import toNewPatient from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPublicPatients());
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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(patientService.getPatientById(id));
});

export default router;
