import dotenv from 'dotenv';
import swaggerSchemas from '#src/docs/swaggerSchemas.js';

dotenv.config();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Home Services API',
            version: '1.0.0',
            description: 'Home Services API Documentation',
        },
        servers: [
            {
                url: `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`
            }
        ],
        components: {
          schemas: swaggerSchemas,
        },
    },
    apis: ['./src/api/v1/routes/*.js']
}

export default swaggerOptions;

