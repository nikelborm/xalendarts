import express from 'express';
import { router } from './routes/router';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export function initialize() {
  const server = express();
  const options = {
    definition: {
      info: {
        title: 'Xalendar Official API Docs',
        version: '1.0.0',
        description: 'Happy Hacking!',
      },

      servers: [
        {
          url: 'https://xalendar.herokuapp.com',
        },
      ],
    },
    apis: ['./routes/router.js'],
  };

  const specs = swaggerJSDoc(options);

  server.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
  server.use(express.json());

  server.listen(process.env.PORT || 3000, () => {
    console.log('Server has been started');
  });

  server.use(router);

  return server;
}
