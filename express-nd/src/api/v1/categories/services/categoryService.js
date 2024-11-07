import CategoryModel from '#api/models/categoryModel.js';

import ServiceError from '#api/util/ServiceError.js';

const getCategoryById = async (id) => {
  const category = await CategoryModel.findById(id);

  if (!category) {
    return ServiceError.notFound(`Category not found`);
  }

  return { data: category };
};

const getCategories = async () => {
  const categories = await CategoryModel.find({});

  return { data: categories };
};

const createCategory = async (data) => {
  const { name, description, image: providedImage } = data;

  const image =
    providedImage ||
    `https://loremflickr.com/320/240/${name.replace(/\s/g, ',')}?lock=${Math.floor(Math.random() * 100000) + 1}`;

  const newCategory = new CategoryModel({ name, description, image });
  const savedCategory = await newCategory.save();

  if (!savedCategory) {
    return ServiceError.internalError('Error saving category');
  }

  return { data: savedCategory };
};

// Delete
// Update

export default {
  getCategories,
  createCategory,
  getCategoryById,
};
