import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
import swaggerSchemas from './swaggerSchemas.js';

dotenv.config();

const doc = {
  info: {
    title: 'Home Services API',
    description: 'Home Services API Documentation',
  },
  host: `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`,
  components: {
    schemas: swaggerSchemas,
  },
};

const outputFile = './swagger.json';
const routes = ['./src/index.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);
