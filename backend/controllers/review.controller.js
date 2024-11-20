const db = require ("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

// Create and Save a new review
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        console.log(req.body);
        res.status(400).send({
            message: " Content can not be empty!",
        });
        return;
    }

    // Create a review
    const newReview = {
        username: req.body.username,
        rating: req.body.rating,
        description: req.body.description,
        bookId: req.body.bookId
    };

    Review.create(newReview)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the review."
        });
    });
};


// Retrieve all reviews from the database
exports.findAll = (req, res) => {
    Review.findAll({include : db.books})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving reviews"
            });
        });
};

// Find a single review with and id
exports.findOne = (req, res) => {
};

// Update a review by the id in the request
exports.update = (req, res) => {
};

// Delete a review with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Review.destroy({ where: {id : id}})
        .then(() => {
            console.log("The review has been deleted");
            res.send({message: "Review deleted"});
        })
};