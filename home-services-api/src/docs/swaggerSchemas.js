import m2s from "mongoose-to-swagger";
import CategoryModel, { options as CategoryOptions } from "#src/api/v1/models/categoryModel.js";
import BusinessModel, { options as BusinessOptions } from "#src/api/v1/models/businessModel.js";
import Booking, { options as BookingOptions } from "#src/api/v1/models/bookingModel.js";

export default {
  Category: m2s(CategoryModel, CategoryOptions),
  Business: m2s(BusinessModel, BusinessOptions),
  Booking: m2s(Booking, BookingOptions),
};