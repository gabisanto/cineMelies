module.exports = (sequelize, dataTypes) => { 

    let alias = 'ScreensFormat'; 
    //----------------------------------------
    let cols = { 
        id: { 
            type: dataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        format_id: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        screen_id: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }

    }; 
    //----------------------------------------
    let config = {
        timestamp: true, 
        tableName: 'ScreensFormats'
    };
    //----------------------------------------

    const ScreensFormat = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    




    return ScreensFormat;
}