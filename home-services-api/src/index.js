import express from 'express';
import swaggerjsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import categoriesRouter from '#src/api/v1/routes/categoryRoutes.js';
import businessRouter from '#src/api/v1/routes/businessRoutes.js';
import bookingRouter from '#src/api/v1/routes/bookingRoutes.js';

import swaggerOptions from '#src/docs/swaggerOptions.js';
import connectToDb from '#src/config/db.js';

dotenv.config();

const app = express();
const swaggerDocs = swaggerjsdoc(swaggerOptions)

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/business', businessRouter);
app.use('/api/v1/booking', bookingRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

connectToDb().then(() => {
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
  });
});
