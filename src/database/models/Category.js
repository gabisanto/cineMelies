module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
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
        tableName: 'categories'
    }
    const Category = sequelize.define(alias,cols,config)

    Category.association = function(models) {
        Category.hasMany(models.Movie,{
            as: "movie",
            foreignKey: "category_id"
        })
    }

    return Category
};