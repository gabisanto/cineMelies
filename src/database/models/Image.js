module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
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
        tableName: 'images'
    }
    const Image = sequelize.define(alias,cols,config)

    Image.association = function(models) {
        Image.hasMany(models.Product,{
            as: "product",
            foreignKey: "image_id"
        })
    }

    return Image
};