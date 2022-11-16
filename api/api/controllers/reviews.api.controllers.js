import * as reviewsService from '../../services/reviews.services.js';

async function create(req, res) {
    const productId = req.params.productId;

    const review = {
        text: req.body.text,
    };

    const newReview = await reviewsService.create(productId, review);

    res.status(201).json(newReview);
}


async function findByProduct(req, res) {
    const productId = req.params.productId;

    const reviews = await reviewsService.findAll(productId);

    res.status(200).json(reviews);
}

export {
    create,
    findByProduct,
}