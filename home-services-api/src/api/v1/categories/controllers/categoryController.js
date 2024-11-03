import categoryService from '#api/categories/services/categoryService.js';

export const getCategories = async(req, res, next) => {
    try {
        const categories = await categoryService.getCategories();
        res.success(categories);
    } catch (error) {
        next(error);
    }
};

export const createCategory = async(req, res, next) => {
    try {
        const newCategory = await categoryService.createCategory(req.body);
        res.created(newCategory);
    } catch (error) {
        next(error);
    }
};