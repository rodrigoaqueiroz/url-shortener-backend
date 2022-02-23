import express, { Request, Response } from 'express';
import { URLController } from './controller/URLController';

const PORT = 5000;
const api = express();
api.use(express.json());
const urlController = new URLController();

api.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Tudo OK' });
})

api.post('/shorten', urlController.shorten)
api.listen(PORT, () => {
  console.log(`Estou on na porta: ${PORT}`)
});
