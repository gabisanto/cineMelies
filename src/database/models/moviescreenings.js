module.exports = (sequelize, dataTypes) => {
    let alias = 'MovieScreening';
    let cols = {
        id: {
            type: dataTypes.INT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        movie_id: {
            type: dataTypes.VARCHAR(255),
            allowNull: false,
            references: {
                model: 'Movie',
                key: 'id'
            }
        },
        screening_id: {
            type: dataTypes.VARCHAR(255),
            allowNull: false,
            references: {
                model: 'Screening',
                key: 'id'
            }
        },
    };
    let config = {
        timestamps: false,
        tableName: 'moviescreenings'
    }
    const MovieScreening = sequelize.define(alias,cols,config)

    MovieScreening.belongsTo(Movie, {foreignKey: "movie_id"})

    MovieScreening.belongsTo(Screening, {foreignKey:"screening_id"})

    return MovieScreening
};