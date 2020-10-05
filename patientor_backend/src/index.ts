import express, { Request, Response } from 'express';
import cors from 'cors';
import diagnoseRouter from './routes/diagnosis';
import patientsRouter from './routes/patients';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('/pong');
});

app.use('/api/diagnoses', diagnoseRouter);

app.use('/api/patients', patientsRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
