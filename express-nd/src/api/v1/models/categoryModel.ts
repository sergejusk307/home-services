import mongoose from 'mongoose';

import baseSchema from '#api/models/baseSchema.js';

export interface ICategory {
  _id: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  image?: string;
}

const CategorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: String,
});

baseSchema(CategorySchema);

export const CategoryModel = mongoose.model('Category', CategorySchema);

export const options = {
  omitFields: ['_id'],
};
