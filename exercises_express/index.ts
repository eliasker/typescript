import express from 'express';
const app = express();

import { calculateBmi } from '../exercises_cmd_apps/bmiCalculator';

app.get('/', (_req, res) => {
  res.send('Check');
});

// bmi?height=180&weight=72
app.get('/bmi', (_req, res) => {
  const { height, weight } = _req.query;
  console.log(height, weight, _req.query);
  if (isNaN(Number(height)) && isNaN(Number(weight))) {
    res.json('malformatted parameters');
  } else {
    try {
      const bmi = calculateBmi(Number(height), Number(weight));
      res.json({
        height: height,
        weight: weight,
        bmi: bmi
      });
    } catch (e) {
      res.status(500).json({ error: 'message' });
    }
  }
});

app.get('/exercises', (_req, res) => {
  res.send('hello from exercises');
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
