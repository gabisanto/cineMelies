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
            type: dataTypes.STRING(100),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'avatars'
    };

    
    const Avatar = sequelize.define(alias,cols,config);

   
        Avatar.associate = function(models) {
            Avatar.hasOne(models.User,{
                as: "user",
                foreignKey: "avatar_id"
            })
            


        }
    return Avatar;
};