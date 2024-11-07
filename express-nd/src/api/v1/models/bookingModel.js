import mongoose from 'mongoose';
import baseSchema from '#api/models/baseSchema.js';

const BookingSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Business',
  },
  date: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
});

baseSchema(BookingSchema);

const BookingModel = mongoose.model('Booking', BookingSchema);

export const options = {
  omitFields: ['_id'],
};

export default BookingModel;
