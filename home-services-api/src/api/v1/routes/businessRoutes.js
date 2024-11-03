import express from 'express';
import businessController from '#api/business/controllers/businessController.js';

const router = express.Router();

router.get('/', businessController.getAllBusinesses);
router.post('/', businessController.createBusiness);
router.get('/category/:category', businessController.getBusinessesByCategory);
router.get('/:id', businessController.getBusinessById);
router.put('/:id', businessController.updateBusiness);
router.get('/:businessId/bookings/date/:date', businessController.getBookingsByBusinessAndDate);

export default router;
