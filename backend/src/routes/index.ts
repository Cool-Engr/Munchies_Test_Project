import express from 'express';

import {
  getAllFilters,
  getAllPriceRanges,
  getAllRestaurants,
  getFilterById,
  getOpenStatusById,
  getPriceRangeById,
  getRestaurantById
} from '@controllers';

const router = express.Router();

router.get('/restaurants', getAllRestaurants);

router.get('/restaurants/:id', getRestaurantById);

router.get('/filter', getAllFilters);

router.get('/filter/:id', getFilterById);

router.get('/open/:id', getOpenStatusById);

router.get('/price-range', getAllPriceRanges);

router.get('/price-range/:id', getPriceRangeById);

export default router;
