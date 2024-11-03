import mongoose from 'mongoose';

import baseSchema from '#api/models/baseSchema.js'

export const BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        ref: 'Category',
    },
    logo: String,
});

baseSchema(BusinessSchema);

const BusinessModel = mongoose.model('Business', BusinessSchema);

export const options = { 
    omitFields: ['_id']
};

export default BusinessModel;