import bookingService from '#src/api/v1/booking/services/bookingService.js';

const bookingController = {
    async getBookingsByUserEmail(req, res) {
        const { email } = req.params;
        try {
            const bookings = await bookingService.getBookingsByUserEmail(email);
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async createBooking(req, res) {
        try {
            const booking = await bookingService.createBooking(req.body);
            res.status(201).json(booking);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteBooking(req, res) {
        const { id } = req.params;
        try {
            await bookingService.deleteBooking(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },
};

export default bookingController;
