import express from 'express';
import { router } from './routes/router';

export function initialize() {
  const server = express();

  server.use(express.json());

  server.listen(process.env.PORT, () => {
    console.log('Server has been started');
  });

  server.use(router);

  return server;
}
