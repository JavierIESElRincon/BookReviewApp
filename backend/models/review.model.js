module.exports = (sequelize, Sequelize) => {
    const reviews = sequelize.define("review",{
        username: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return reviews;
};