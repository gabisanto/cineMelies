module.exports = (sequelize, dataTypes) => { 

    let alias = 'Product'; 
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
        type_id: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100), 
            allowNull: false
        },
        image_id: {
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
        tableName: 'products'
    };
    //----------------------------------------

    const Product = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    




    return Product;
}