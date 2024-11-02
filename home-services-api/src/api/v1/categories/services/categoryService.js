import CategoryModel from '#src/api/v1/models/categoryModel.js';

const getCategories = async () => {
    try {
        return await CategoryModel.find({});
    } catch (error) {
        throw new Error('Error fetching categories: ' + error.message);
    }
};

const createCategory = async (data) => {
    try {
        const newCategory = new CategoryModel(data);
        return await newCategory.save();
    } catch (error) {
        throw new Error('Error creating category: ' + error.message);
    }
};

// Delete
// Update

export default {
    createCategory,
    getCategories,
};
