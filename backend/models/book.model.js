module.exports = (sequelize, Sequelize) => {
    const books = sequelize.define("book",{
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        publication_date: {
            type: Sequelize.DATE
        }
    });
    return books;
};