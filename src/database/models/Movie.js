module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productName: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        genre_id: {
            type: dataTypes.INT(11),
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INT(11),
            allowNull: false
        },
        productLink: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        productDescription: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image_id: {
            type: dataTypes.INT(11),
            allowNull: false
        },
        restriction_id: {
            type: dataTypes.INT(11),
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
        tableName: 'movies'
    }
    const Movie = sequelize.define(alias,cols,config)

    return Movie
};