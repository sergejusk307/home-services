import categoryService from '#api/categories/services/categoryService.js';
import { ApiResponseType } from '#api/type';
import { isErrorResponse } from '#api/util/typeGuards';

const getCategories: ApiResponseType = async (req, res, next) => {
  try {
    const result = await categoryService.getCategories();

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const createCategory: ApiResponseType = async (req, res, next) => {
  try {
    const result = await categoryService.createCategory(req.body);

    if (isErrorResponse(result)) {
      return res.serviceError(result.error);
    }

    return res.created(result.data);
  } catch (error) {
    next(error);
  }
};

export default {
  getCategories,
  createCategory,
};
