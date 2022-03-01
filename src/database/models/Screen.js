module.exports = (sequelize, dataTypes) => { 

    let alias = 'Screen'; 
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
        },
        rows: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        columnns: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    }; 
    //----------------------------------------
    let config = {
        timestamps: false, 
        tableName: 'screens'
    };
    //----------------------------------------

    const Screen = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    




    return Screen;
}