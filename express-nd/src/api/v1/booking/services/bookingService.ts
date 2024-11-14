import BookingModel from '#api/models/bookingModel.js';
import businessService from '#api/business/services/businessService.js';
import userService from '#api/user/services/userService.js';

import ServiceError from '#api/util/ServiceError.js';

import { ServiceResponse } from '#api/type/serviceResponse';

const getBookingById = async (id: string): Promise<ServiceResponse<typeof BookingModel>> => {
  const booking = await BookingModel.findById(id);

  return { data: booking };
};

const getBookingsByUserEmail = async (email) => {
  const result = await userService.getUserByEmail(email);

  if (result.error) {
    return result;
  }

  if (result.data === null) {
    return ServiceError.notFound(`User not found`);
  }

  const bookings = await BookingModel.find({ userEmail: email });

  return { data: bookings };
};

const createBooking = async (bookingData) => {
  const result = await businessService.getBusinessById(bookingData.businessId);

  if (result.error) {
    return result;
  }

  if (result.data === null) {
    return ServiceError.notFound(`Business not found`);
  }

  const resultUser = await userService.getUserByEmail(bookingData.userEmail);
  if (resultUser.error) {
    return resultUser;
  }

  if (resultUser.data === null) {
    return ServiceError.notFound(`User not found`);
  }

  const booking = new BookingModel(bookingData);
  const savedBooking = await booking.save();

  if (!savedBooking) {
    return ServiceError.internalError('Error saving booking');
  }

  return { data: savedBooking };
};

const deleteBooking = async (id) => {
  const result = await getBookingById(id);

  if (result.error) {
    return result;
  }

  if (result.data === null) {
    return ServiceError.notFound(`Booking not found`);
  }

  const deletedBooking = await BookingModel.findOneAndDelete({ _id: id });

  if (!deletedBooking) {
    return ServiceError.internalError('Could not delete Booking');
  }

  return { data: deletedBooking };
};

export default {
  getBookingsByUserEmail,
  createBooking,
  deleteBooking,
};
