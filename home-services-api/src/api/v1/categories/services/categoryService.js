import CategoryModel from '#api/models/categoryModel.js';

const getCategories = async() => {
    return await CategoryModel.find({});
};

const createCategory = async(data) => {
    const { name, description, image: providedImage } = data;

    const image = providedImage || `https://loremflickr.com/320/240/${name.replace(/\s/g, ',')}?lock=${Math.floor(Math.random() * 100000) + 1}`;

    const newCategory = new CategoryModel({ name, description, image });

    return await newCategory.save();
};

// Delete
// Update

export default {
    createCategory,
    getCategories,
};