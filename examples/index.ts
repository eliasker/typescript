import express, { Request, Response } from 'express';
const app = express();

import { Operation, calculator } from './examples';

app.get('/ping', (_req, res) => {
  res.send('pong pong');
});

app.get('/calculate', (req: Request, res: Response) => {
  const { value1, value2, op } = req.query;
  if (isNaN(Number(value1)) || isNaN(Number(value2))) {
    res.send('malformatted numbers');
  }
  const result = calculator(Number(value1), Number(value2), op as Operation);
  res.send(`${result}`);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
