module.exports = (sequelize, dataTypes) => {
    let alias = 'Avatar';
    let cols = {
        id: {
            type: dataTypes.INT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        url: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'avatars'
    }
    const Avatar = sequelize.define(alias,cols,config)

    return Avatar;
};