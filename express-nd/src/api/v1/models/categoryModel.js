import mongoose from 'mongoose';

import baseSchema from '#api/models/baseSchema.js';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String,
});

baseSchema(CategorySchema);

const CategoryModel = mongoose.model('Category', CategorySchema);

export const options = {
  omitFields: ['_id'],
};

export default CategoryModel;
