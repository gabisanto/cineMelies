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
        document: {
            type: dataTypes.BIGINT(11), 
            allowNull: false
        },
        birthDate: {
            type: dataTypes.DATEONLY, 
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
        admin : { 
            type: dataTypes.BIGINT(10), 
            allowNull: false
        },
        isActive: { 
            type: dataTypes.BIGINT(10), 
            allowNull: false
        }, 
        avatar_id: {
            type: dataTypes.BIGINT(10), 
            allowNull: false
        }


    }; 
    let config = {
        timestamp: true, 
        tableName: 'Users'
    };

    const User = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 




    

    return User; 
    
}