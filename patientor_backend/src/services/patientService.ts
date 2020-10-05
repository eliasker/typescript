import patientsData from '../data/patients.json';
import { NewPatient, Patient, PatientNoSSN } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientsOmitSSN = (): PatientNoSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient: Patient = {
    id: `test`,
    ...patient,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  addPatient,
  getPatients,
  getPatientsOmitSSN,
};
