import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';


const app: Express = express();
app.use(cors()); // Enables all CORS requests

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000);