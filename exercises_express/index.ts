import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

import { calculateBmi } from '../exercises_cmd_apps/bmiCalculator';
import { calculateExercise } from '../exercises_cmd_apps/exerciseCalculator';

app.get('/', (_req: Request, res: Response) => {
  res.send('Check');
});

// bmi?height=180&weight=72
app.get('/bmi', (_req: Request, res: Response) => {
  const { height, weight } = _req.query;

  if (!height || !weight) {
    res.status(400).send({ error: 'Missing arguments' });
  } else if (isNaN(Number(height)) && isNaN(Number(weight))) {
    res.status(400).send({ error: 'Malformatted parameters' });
  }

  const bmi = calculateBmi(Number(height), Number(weight));
  res.json({
    height: height,
    weight: weight,
    bmi: bmi
  });
});


app.post('/exercises', (req: Request, res: Response) => {
  console.log(req.body);
  const { daily_exercises, target } = req.body as {
    daily_exercises: number[],
    target: number
  };

  if (!daily_exercises || !target) {
    res.status(400).send({ error: 'Missing arguments' });
  } else if (isNaN(Number(target))) {
    res.status(400).send({ error: '"target" is not a number' });
  }

  const trainingPerDay: number[] = [];
  try {
    daily_exercises.map(hours => {
      if (isNaN(Number(hours))) {
        throw new Error();
      }
      trainingPerDay.push(Number(hours));
    });
  } catch (e) {
    res.status(400).send({ error: 'daily_exercise contains non-numberic variables' });
  }
  
 // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  res.json(calculateExercise(trainingPerDay, target));
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
