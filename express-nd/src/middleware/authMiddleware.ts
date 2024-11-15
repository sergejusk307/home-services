import jwt from 'jsonwebtoken';

import { ApiResponseType } from '#api/type';
import ServiceError from '#api/util/ServiceError.js';

const authMiddleware: ApiResponseType = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.serviceError(ServiceError.unauthorized('Not authenticated').error);
  }

  try {
    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set');
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.currentUser = payload;
    next();
  } catch (err) {
    console.error(err);
    return res.serviceError(ServiceError.unauthorized('Not authenticated').error);
  }
};

export default authMiddleware;
