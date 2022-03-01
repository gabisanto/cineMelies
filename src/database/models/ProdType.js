module.exports = (sequelize, dataTypes) => { 

    let alias = 'ProdType'; 
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
        timestamp: false, 
        tableName: 'prodtypes'
    };
    //----------------------------------------

    const ProdType = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    




    return ProdType;
}