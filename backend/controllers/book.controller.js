const db = require ("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Book
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publication_date: req.body.publication_date
    };

    Book.create(newBook)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the book."
        });
    });
};


// Retrieve all Books from the database
exports.findAll = (req, res) => {
    Book.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books"
            });
        });
};

// Find a single Book with and id
exports.findOne = (req, res) => {
};

// Update a Book by the id in the request
exports.update = (req, res) => {
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Book.destroy({ where: {id : id}})
        .then(() => {
            console.log("Se ha eliminado el libro");
            res.send({message: "Libro eliminado"});
        })
};