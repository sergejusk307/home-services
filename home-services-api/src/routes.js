import express from 'express';

import categoriesRouter from '#api/routes/categoryRoutes.js';
import businessRouter from '#api/routes/businessRoutes.js';
import bookingRouter from '#api/routes/bookingRoutes.js';

const router = express.Router()

router.use('/api/v1/categories', categoriesRouter
  // #swagger.tags = ['Category']
);

router.use('/api/v1/business', businessRouter
  // #swagger.tags = ['Business']
);

router.use('/api/v1/bookings', bookingRouter
  // #swagger.tags = ['Booking']
);

export default router;
