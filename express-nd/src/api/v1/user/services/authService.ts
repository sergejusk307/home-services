import bcrypt from 'bcryptjs';

import userService from '#api/user/services/userService.js';
import ServiceError from '#api/util/ServiceError.js';
import generateToken from '#api/user/util/generateToken.js';

const register = async (userData) => {
  const result = await userService.createUser(userData);

  if (result.error) return result;

  return {};
};

const login = async (userData) => {
  const { email, password } = userData;

  if (!email || !password) {
    return ServiceError.badRequest('Please provide email and password');
  }

  const result = await userService.getUserByEmail(email);

  if (result.error) {
    return result;
  }

  let foundUser = result.data;
  if (!foundUser) {
    return ServiceError.unauthorized('Incorrect email or password');
  }

  const passwordIsCorrect = await isCorrectPassword(foundUser, password);
  if (!passwordIsCorrect) {
    return ServiceError.unauthorized('Incorrect email or password');
  }

  const token = generateToken({ id: foundUser._id });

  return { data: { token, user: foundUser } };
};

const isCorrectPassword = async (user, password) => {
  return bcrypt.compare(password, user.password);
};

export default {
  register,
  login,
};
