import express, {Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello from Express Server!')
  
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);