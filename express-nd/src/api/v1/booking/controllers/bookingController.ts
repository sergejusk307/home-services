import bookingService from '#api/booking/services/bookingService.js';
import { ApiResponseType } from '#api/type';

const getBookingsByUserEmail: ApiResponseType = async (req, res, next) => {
  try {
    const { email } = req.params;
    const result = await bookingService.getBookingsByUserEmail(email);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.success(result.data);
  } catch (error) {
    next(error);
  }
};

const createBooking: ApiResponseType = async (req, res, next) => {
  try {
    const bookingData = req.body;
    const result = await bookingService.createBooking(bookingData);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.created(result.data);
  } catch (error) {
    next(error);
  }
};

const deleteBooking: ApiResponseType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await bookingService.deleteBooking(id);

    if (result.error) {
      return res.serviceError(result.error);
    }

    return res.deleted();
  } catch (error) {
    next(error);
  }
};

export default {
  getBookingsByUserEmail,
  createBooking,
  deleteBooking,
};