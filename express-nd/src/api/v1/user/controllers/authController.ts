import authService from '#api/user/services/authService.js';
import { ApiResponseType } from '#api/type';
import { isErrorResponse } from '#api/util/typeGuards';

const loginUser: ApiResponseType = async (req, res, next) => {
  const userData = req.body;

  try {
    const result = await authService.login(userData);

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const registerUser: ApiResponseType = async (req, res, next) => {
  const userData = req.body;

  try {
    const result = await authService.register(userData);

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.created({});
  } catch (error) {
    next(error);
  }
};

export default {
  loginUser,
  registerUser,
};
