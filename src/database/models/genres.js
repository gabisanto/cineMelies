module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
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
        tableName: 'genres'
    }
    const Genre = sequelize.define(alias,cols,config)

    return Genre
};