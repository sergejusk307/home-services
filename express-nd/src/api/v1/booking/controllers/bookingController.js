import bookingService from '#api/booking/services/bookingService.js';

const getBookingsByUserEmail = async (req, res, next) => {
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

const createBooking = async (req, res, next) => {
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

const deleteBooking = async (req, res, next) => {
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
