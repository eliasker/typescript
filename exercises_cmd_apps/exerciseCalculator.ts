export interface Result {
  periodLength: number;
  trainingDays: number,
  target: number,
  average: number,
  success: boolean,
  rating: number,
  ratingDescription: string
}

interface ExerciseValues {
  trainingPerDay: Array<number>,
  target: number
}

const parseExerciseArguments = (args: Array<string>): ExerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  let trainingPerDay: Array<number> = [];

  for (let i = 2; i < args.length - 1; i++) {
    if (isNaN(Number(args[i]))) throw new Error('Provided values were not numbers!');
    trainingPerDay.push(Number(args[i]));
  }
  if (isNaN(Number(args[args.length - 1]))) throw new Error('Provided values were not numbers!');
  return {
    trainingPerDay: trainingPerDay, target: Number(args[args.length - 1]),
  }
}


/**
 * Calculates average time of daily exercise hours and returns feedback 
 * @param trainingPerDay Number of training hours per day
 * @param target Target amount of daily hours
 * @returns Result object that describes performance based on target and done
 */
export const calculateExercise = (trainingPerDay: Array<number>, target: number): Result => {
  const totalTraining = trainingPerDay.reduce((a, b) => a + b, 0);
  const averageTrainingPerDay = totalTraining / trainingPerDay.length;
  let givenRating = 0;
  let givenDesc = '';
  if (averageTrainingPerDay > target + 0.5) {
    givenRating = 3;
    givenDesc = 'Great job!';
  } else if (averageTrainingPerDay > target - 0.5) {
    givenRating = 2;
    givenDesc = 'You did good';
  } else {
    givenRating = 1;
    givenDesc = 'You can do better!';
  }
  return {
    periodLength: trainingPerDay.length,
    trainingDays: trainingPerDay.filter(t => t !== 0).length,
    success: averageTrainingPerDay >= 1,
    target: target,
    average: averageTrainingPerDay,
    rating: givenRating,
    ratingDescription: givenDesc,
  }
}

try {
  const { trainingPerDay, target } = parseExerciseArguments(process.argv);
  console.log(calculateExercise(trainingPerDay, target));
} catch (e) {
  console.log('Error, something went wrong, message: ', e.message);
}
