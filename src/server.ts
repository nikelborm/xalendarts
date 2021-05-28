import express from 'express';
import { router } from './routes/router';
import swagger from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json';

export function initialize() {
  const server = express();

  server.use(express.json());

  server.listen(process.env.PORT, () => {
    console.log('Server has been started');
  });

  server.use('/docs', swagger.serve, swagger.setup(swaggerDoc));
  server.use(router);

  return server;
}
