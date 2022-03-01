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
        timestamp: true, 
        tableName: 'Posters'
    };
    //----------------------------------------

    const Poster = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    




    return Poster;
}