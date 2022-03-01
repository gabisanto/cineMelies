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

    return Format
};