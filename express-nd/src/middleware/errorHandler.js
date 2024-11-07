import { HTTP_RESPONSE_CODE } from '#const/global.js';

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_RESPONSE_CODE.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  console.error(err);

  res.status(statusCode).json({
    message,
    details: {
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    },
  });

  next();
};

export default errorHandler;
