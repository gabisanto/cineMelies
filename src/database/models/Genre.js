module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'genres'
    }
    const Genre = sequelize.define(alias,cols,config)

    Genre.association = function(models) {
        Genre.hasMany(Movie,{
            as: "movie",
            foreignKey: "genre_id"
        })
    }

    return Genre
};