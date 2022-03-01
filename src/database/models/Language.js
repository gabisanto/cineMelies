module.exports = (sequelize, dataTypes) => {
    let alias = 'Language';
    let cols = {
        id: {
            type: dataTypes.INT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'languages'
    }
    const Language = sequelize.define(alias,cols,config)

    return Language
};