import categoryService from '#api/categories/services/categoryService.js';

const getCategories = async (req, res, next) => {
  try {
    const result = await categoryService.getCategories();

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const result = await categoryService.createCategory(req.body);

    if (result.error) {
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
