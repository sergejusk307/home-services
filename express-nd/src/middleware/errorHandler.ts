import { HTTP_RESPONSE_CODE } from '#const/global.js';
import { IServiceError } from '#src/api/v1/util/ServiceError';

import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: IServiceError, req: Request, res: Response, next: NextFunction) => {
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
