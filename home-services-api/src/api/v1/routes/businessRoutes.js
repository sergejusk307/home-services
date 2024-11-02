import express from 'express';
import businessController from '#src/api/v1/business/controllers/businessController.js';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   - name: Business
 *     description: Business operations
 */

/**
 * @openapi
 * /api/v1/business:
 *   get:
 *     tags: [Business]
 *     summary: Get all businesses
 *     responses:
 *       200:
 *         description: A list of businesses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Business'
 *
 *   post:
 *     tags: [Business]
 *     summary: Create a new business
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       201:
 *         description: Business created successfully
 *       400:
 *         description: Invalid input
 *
 * /api/v1/business/category/{category}:
 *   get:
 *     tags: [Business]
 *     summary: Get businesses by category
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: The category to filter businesses
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of businesses in the specified category
 *       500:
 *         description: Internal server error
 *
 * /api/v1/business/{id}:
 *   get:
 *     tags: [Business]
 *     summary: Get a specific business by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Business details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       404:
 *         description: Business not found
 *       500:
 *         description: Internal server error
 *
 *   put:
 *     tags: [Business]
 *     summary: Update an existing business
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: Business updated successfully
 *       404:
 *         description: Business not found
 *       400:
 *         description: Invalid input
 *
 * /api/v1/business/{businessId}/bookings/date/{date}:
 *   get:
 *     tags: [Business]
 *     summary: Get bookings for a specific business on a specific date
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         description: ID of the business
 *         schema:
 *           type: string
 *       - in: path
 *         name: date
 *         required: true
 *         description: The date for which to retrieve bookings
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: List of bookings for the specified business on the specified date
 *       500:
 *         description: Internal server error
 */

router.get('/', businessController.getAllBusinesses);
router.post('/', businessController.createBusiness);
router.get('/category/:category', businessController.getBusinessesByCategory);
router.get('/:id', businessController.getBusinessById);
router.put('/:id', businessController.updateBusiness);
router.get('/:businessId/bookings/date/:date', businessController.getBookingsByBusinessAndDate);

export default router;
