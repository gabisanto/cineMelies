module.exports = (sequelize, dataTypes) => { 

    let alias = 'Screening'; 
    //----------------------------------------
    let cols = { 
        id: { 
            type: dataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        hour: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        day: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        screen_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        language_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    }; 
    //----------------------------------------
    let config = {
        timestamps: false, 
        tableName: 'screenings'
    };
    //----------------------------------------

    const Screening = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    Screening.associate = function (models) {
        Screening.belongsToMany(models.Movie,{
            as: "movie",
            through: "Moviescreening",
            foreignKey: "screening_id",
            otherKey: "movie_id",
            timestamps: false
        }),
        Screening.belongsTo(models.Language,{
            as: "language",
            foreignKey: "language_id"
        }),
        Screening.belongsTo(models.Screen,{
            as: "screen",
            foreignKey: "screen_id"
        })
    }




    return Screening;
}