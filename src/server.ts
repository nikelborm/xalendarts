import express from 'express';
import { router } from './routes/router';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json';

export function initialize() {
  const server = express();

  server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  server.use(express.json());

  server.listen(process.env.PORT || 3000, () => {
    console.log('Server has been started');
  });

  server.use(router);

  return server;
}
