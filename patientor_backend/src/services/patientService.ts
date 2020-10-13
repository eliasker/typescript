import patientsData from '../data/patients.json';
import { NewPatient, Patient, PublicPatient } from '../types';

const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => {
  return patients;
};

const getPublicPatients = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id, name, dateOfBirth, gender, occupation, entries
  }));
};

const getPatientById = (targetId: string): Patient | undefined => {
  return patients.find(p => p.id === targetId);
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
  getPatientById,
  getPublicPatients,
};
