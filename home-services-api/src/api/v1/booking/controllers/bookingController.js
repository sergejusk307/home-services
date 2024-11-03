import bookingService from '#api/booking/services/bookingService.js';

const bookingController = {
    async getBookingsByUserEmail(req, res, next) {
        const { email } = req.params;
        try {
            // TODO: check if user exists
            const bookings = await bookingService.getBookingsByUserEmail(email);

            res.success(bookings);
        } catch (error) {
            next(error);
        }
    },

    async createBooking(req, res, next) {
        try {
            // TODO: check if user exists
            const booking = await bookingService.createBooking(req.body);

            res.created(booking);
        } catch (error) {
            next(error);
        }
    },

    async deleteBooking(req, res) {
        const { id } = req.params;
        try {
            await bookingService.deleteBooking(id);

            res.deleted();
        } catch (error) {
            next(error);
        }
    },
};

export default bookingController;