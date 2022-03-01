module.exports = (sequelize, dataTypes) => { 

    let alias = 'Poster'; 
    //----------------------------------------
    let cols = { 
        id: { 
            type: dataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        name: {
            type: dataTypes.STRING(100), 
            allowNull: false
        }

    }; 
    //----------------------------------------
    let config = {
        timestamps: false, 
        tableName: 'posters'
    };
    //----------------------------------------

    const Poster = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    Poster.association = function(models) {
        Poster.hasMany(models.Movie,{
            as: "movie",
            foreignKey: "image_id"
        })
    }    




    return Poster;
}