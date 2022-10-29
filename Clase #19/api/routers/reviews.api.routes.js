import express from 'express';
import * as reviewsController from '../controllers/reviews.api.controllers.js';

const router = express.Router();

/// /api/products/:productId/reviews
/// /api/products/:productId/reviews/:reviewId
/// /api/products/3/reviews/2

/// /api/reviews/:productId
/// /api/reviews/:productId/:reviewId
/// /api/reviews/3/2

router.route('/:productId/reviews')
    .get(reviewsController.findByProduct)
    .post(reviewsController.create);


export default router;