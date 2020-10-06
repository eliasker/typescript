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

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

// id -kenttä serveriltä
export type NewPatient = Omit<Patient, 'id'>;

// Patient poislukien ssn -kenttä
export type PatientNoSSN = Omit<Patient, 'ssn'>;
