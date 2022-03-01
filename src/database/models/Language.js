module.exports = (sequelize, dataTypes) => {
    let alias = 'Language';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'languages'
    }
    const Language = sequelize.define(alias,cols,config)

    return Language
};