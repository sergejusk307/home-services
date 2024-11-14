import express from 'express';
import bookingController from '#api/booking/controllers/bookingController.js';

const router = express.Router();

router.get('/user/:email', bookingController.getBookingsByUserEmail);
router.post('/', bookingController.createBooking);
router.delete('/:id', bookingController.deleteBooking);

export default router;
