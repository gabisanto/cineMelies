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

    




    return Screening;
}