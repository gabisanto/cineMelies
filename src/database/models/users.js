module.exports = (sequelize, dataTypes) => { 
    let alias = 'User'; 
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
        email: {
            type: dataTypes.STRING(100), 
            allowNull: false
        }, 
        password: {
            type: dataTypes.STRING(100), 
            allowNull: false
        },
        remember_token : { 
            type: dataTypes.STRING(100), 
            allowNull: false
        }


    }; 
    let config = {
        timestamp: true, 
        tableName: 'Users'
    };

    const User = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 


    



}

