import express from 'express';
import { router } from './routes/router';

export function initialize() {
  const server = express();

  server.use(express.json());

  server.on('listening', () => {
    console.log('Server started!');
  });

  server.use(router);

  return server;
}
