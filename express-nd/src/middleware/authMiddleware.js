import jwt from 'jsonwebtoken';

import ServiceError from '#api/util/ServiceError.js';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.serviceError(ServiceError.unauthorized('Not authenticated').error);
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.currentUser = payload;
    next();
  } catch (err) {
    console.error(err);
    return res.serviceError(ServiceError.unauthorized('Not authenticated').error);
  }
};

export default authMiddleware;
