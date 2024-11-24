import m2s from 'mongoose-to-swagger';
import { CategoryModel, options as CategoryOptions } from '#api/models/categoryModel.ts';
import { BusinessModel, options as BusinessOptions } from '#api/models/businessModel.ts';
import { BookingModel, options as BookingOptions } from '#api/models/bookingModel.ts';

export default {
  Category: m2s(CategoryModel, CategoryOptions),
  Business: m2s(BusinessModel, BusinessOptions),
  Booking: m2s(BookingModel, BookingOptions),
};
