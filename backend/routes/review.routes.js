module.exports = app => {
    const reviews = require("../controllers/review.controller.js");

    var router = require("express").Router();

    // Create a new review
    router.post("/", reviews.create);

    // Retrieve all reviews
    router.get("/", reviews.findAll);

    // Retrieve a single review with id
    router.get("/:id", reviews.findOne);

    // Update a review with id
    router.put("/:id", reviews.update);

    // Delete a review with id
    router.delete("/:id", reviews.delete);

    app.use('/api/reviews', router);
};