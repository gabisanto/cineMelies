module.exports = (sequelize, dataTypes) => {
    let alias = 'Avatar';
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
        tableName: 'avatars'
    }
    const Avatar = sequelize.define(alias,cols,config)

    return Avatar;
};