import { IUser, UserModel } from '#api/models/userModel';
import ServiceError from '#src/api/v1/util/serviceError.js';

import { ServiceResponseType } from '#api/type/serviceResponse';
import { isSuccessResponse } from '#api/util/typeGuards';

// TODO is it ok access property like this
const getUserByEmail = async (email: IUser['email']): ServiceResponseType<IUser> => {
  const user = await UserModel.findOne({ email });
  return { data: user };
};

const createUser = async (userData: IUser): ServiceResponseType<IUser> => {
  const result = await getUserByEmail(userData.email);

  if (isSuccessResponse(result)) {
    return ServiceError.notFound('User already exists');
  }

  const newUser = await new UserModel(userData).save();
  if (!newUser) {
    return ServiceError.internalError('Error saving User');
  }

  return { data: newUser };
};

export default {
  getUserByEmail,
  createUser,
};
