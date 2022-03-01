module.exports = (sequelize, dataTypes) => {
    let alias = 'Format';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING,
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'formats'
    }
    const Format = sequelize.define(alias,cols,config)

    Format.associate = function (models) {
        Format.belongsToMany(models.Screen,{
            as: "screen",
            through: "ScreenFormat",
            foreignKey: "formar_id",
            otherKey: "screen_id"
        })
    }

    return Format
};