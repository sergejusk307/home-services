import express from 'express';
import bookingController from '#src/api/v1/booking/controllers/bookingController.js';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Booking
 *     description: Booking operations
 */

/**
 * @openapi
 * /api/v1/bookings/user/{email}:
 *   get:
 *     tags: [Booking]
 *     summary: Get all bookings for a specific user by email
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: User's email address to filter bookings
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of bookings associated with the specified email
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get('/user/:email', bookingController.getBookingsByUserEmail);

/**
 * @openapi
 * /api/v1/bookings:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', bookingController.createBooking);

/**
 * @openapi
 * /api/v1/bookings/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete a specific booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', bookingController.deleteBooking);

export default router;