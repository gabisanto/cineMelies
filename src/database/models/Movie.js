module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        genre_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
        },
        category_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        productLink: {
            type: dataTypes.STRING,
            allowNull: false
        },
        productDescription: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        restriction_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
        tableName: 'movies'
    }
    const Movie = sequelize.define(alias,cols,config)

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre,{
            as: "genre",
            foreignKey: "genre_id"
        }),
        Movie.belongsTo(models.Category,{
            as: "category",
            foreignKey: "category_id"
        }),
        Movie.belongsTo(models.Poster,{
            as: "poster",
            foreignKey: "image_id"
        }),
        Movie.belongsTo(models.Restriction,{
            as: "restriction",
            foreignKey: "restriction_id"
        }),
        Movie.belongsToMany(models.Screening,{
            as: "screenings",
            through: "Moviescreening",
            foreignKey: "movie_id",
            otherKey: "screening_id",
            timestamps: false
        })
    }
    return Movie;
}