export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry { }

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[]
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

// id -kenttä serveriltä
export type NewPatient = Omit<Patient, 'id'>;

// Patient poislukien ssn -kenttä
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
