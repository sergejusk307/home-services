import BookingModel from '#src/api/v1/models/bookingModel.js';

const bookingService = {
    async getBookingsByUserEmail(email) {
        return await BookingModel.find({ userEmail: email });
    },

    async createBooking(bookingData) {
        const booking = new BookingModel(bookingData);
        return await booking.save();
    },

    async deleteBooking(id) {
        const result = await BookingModel.findByIdAndDelete(id);
        if (!result) {
            throw new Error('Booking not found');
        }
        return result;
    },
};

export default bookingService;
