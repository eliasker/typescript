export interface Diagnose {
  code: string,
  name: string,
  latin?: string
}

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string
}

// Serveri hoitaa id -kentän
export type NewPatient = Omit<Patient, 'id'>;

// Tyyppi on siis Patient, poislukien ssn -kenttä
export type PatientNoSSN = Omit<Patient, 'ssn'>;
