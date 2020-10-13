/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatient, Gender } from './types';

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender`);
  }
  return gender;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (strType: string, str: any): string => {
  if (!str || !isString(str)) {
    throw new Error(`Incorrect or missing string: ${strType}`);
  }

  return str;
};

const toNewPatient = (object: any): NewPatient => {
  return {
    name: parseString('name', object.name),
    dateOfBirth: parseString('date of birth', object.dateOfBirth),
    ssn: parseString('ssn', object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString('occupation', object.occupation),
    entries: [],
  };
};

export default toNewPatient;
