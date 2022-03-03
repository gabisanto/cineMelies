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
        columns: {
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

    Screen.associate = function (models) {
        Screen.hasMany(models.Screening,{
            as: "screening",
            foreignKey: "screen_id"
        }),
        Screen.belongsToMany(models.Format,{
            as: "format",
            through: "ScreenFormat",
            foreignKey: "screen_id",
            otherKey: "format_id"
        })
    }




    return Screen;
}