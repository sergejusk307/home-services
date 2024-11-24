import bcrypt from 'bcryptjs';

import userService from '#api/user/services/userService.js';
import ServiceError from '#src/api/v1/util/serviceError.js';
import { isErrorResponse } from '#api/util/typeGuards';
import generateToken from '#api/user/util/generateToken.js';
import { IUser } from '#api/models/userModel';

import { ServiceResponseType } from '#api/type/serviceResponse';

const register = async (userData: IUser): ServiceResponseType<{}> => {
  const result = await userService.createUser(userData);

  if (isErrorResponse(result)) {
    return result;
  }

  return { data: {} };
};

const login = async (userData: IUser): ServiceResponseType<IUser> => {
  const { email, password } = userData;

  if (!email || !password) {
    return ServiceError.badRequest('Please provide email and password');
  }

  const result = await userService.getUserByEmail(email);

  if (isErrorResponse(result)) {
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
