import jwt from 'jsonwebtoken';

const expiresIn = '90d';

const generateToken = (payload: Object) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

export default generateToken;
