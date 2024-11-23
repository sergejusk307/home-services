import express from 'express';

import categoriesRouter from '#api/route/categoryRoutes.js';
import businessRouter from '#api/route/businessRoutes.js';
import bookingRouter from '#api/route/bookingRoutes.js';
import authRoutes from '#api/route/authRoutes.js';

const router = express.Router();

router.use(
  '/category',
  categoriesRouter
  // #swagger.tags = ['Category']
);

router.use(
  '/business',
  businessRouter
  // #swagger.tags = ['Business']
);

router.use(
  '/booking',
  bookingRouter
  // #swagger.tags = ['Booking']
);

router.use(
  '/auth',
  authRoutes
  // #swagger.tags = ['Auth']
);

export default router;
