import UserModel from '#api/models/UserModel.js';
import ServiceError from '#api/util/ServiceError.js';

const getUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return { data: user };
};

const createUser = async (userData) => {
  const result = await getUserByEmail(userData.email);

  if (result.data) {
    return ServiceError.notFound('User already exists');
  }

  const newUser = await new UserModel(userData).save();
  if (!newUser) {
    return ServiceError.internalError('Error saving User');
  }

  return {};
};

export default {
  getUserByEmail,
  createUser,
};
