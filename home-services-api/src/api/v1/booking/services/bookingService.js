import BookingModel from '#api/models/bookingModel.js';
import businessService from '#api/business/services/businessService.js';

import HttpException from '#src/exceptions/HttpException.js';
import { HTTP_RESPONSE_CODE } from '#const/global.js';

const bookingService = {
    async getBookingsByUserEmail(email) {
        return await BookingModel.find({ userEmail: email });
    },

    async createBooking(bookingData) {
        const businessExists = await businessService.checkIfBusinessExists(bookingData.businessId);

        if (!businessExists) {
            throw new HttpException(HTTP_RESPONSE_CODE.NOT_FOUND, 'Business not found');
        }

        const booking = new BookingModel(bookingData);
        return await booking.save();
    },


    async deleteBooking(id) {
        const result = await BookingModel.findByIdAndDelete(id);

        if (!result) {
            throw new HttpException(HTTP_RESPONSE_CODE.NOT_FOUND, 'Booking not found');
        }

        return result;
    },
};

export default bookingService;