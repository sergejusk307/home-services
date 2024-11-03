import express from 'express';
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import swaggerDocs from '../docs/swagger.json' with { type: "json" };

import router from '#src/routes.js';

import connectToDb from '#src/config/db.js';

import responseFormat from '#src/middleware/responseFormat.js';
import errorHandler from '#src/middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(responseFormat);

app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(errorHandler);

connectToDb()
  .then(() => {
    app.listen(process.env.API_PORT, () => {
      console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
