import mongoose from 'mongoose';

import baseSchema from '#api/models/baseSchema.js';

export interface IBusiness {
  _id: mongoose.Types.ObjectId;
  name: string;
  categoryId: mongoose.Types.ObjectId;
  logo?: string;
}

export const BusinessSchema = new mongoose.Schema<IBusiness>({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  logo: String,
});

baseSchema(BusinessSchema);

export const BusinessModel = mongoose.model('Business', BusinessSchema);

export const options = {
  omitFields: ['_id'],
};
