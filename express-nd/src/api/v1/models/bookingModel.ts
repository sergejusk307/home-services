import mongoose from 'mongoose';
import baseSchema from '#api/models/baseSchema.js';

// TODO can we reuse interface and Schema?
export interface IBooking {
  userEmail: string;
  businessId: mongoose.Types.ObjectId;
  date: string;
  details?: string;
}

const BookingSchema = new mongoose.Schema<IBooking>({
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

export const BookingModel = mongoose.model('Booking', BookingSchema);

export const options = {
  omitFields: ['_id'],
};
