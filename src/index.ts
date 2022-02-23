import express, { Request, Response } from 'express';

const PORT = 3000;
const api = express();


api.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Tudo OK' });
})

api.listen(PORT, () => {
  console.log(`Estou on na porta: ${PORT}`)
});
