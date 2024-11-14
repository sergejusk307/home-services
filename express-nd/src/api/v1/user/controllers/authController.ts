import authService from '#api/user/services/authService.js';

const loginUser = async (req, res, next) => {
  const userData = req.body;

  try {
    const result = await authService.login(userData);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  const userData = req.body;

  try {
    const result = await authService.register(userData);
    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.created();
  } catch (error) {
    next(error);
  }
};

export default {
  loginUser,
  registerUser,
};
