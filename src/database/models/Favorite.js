module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Favorite"
    let cols = { 
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description:{
            type:dataTypes.STRING(20),
            allowNull:false
        },
        id_user : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_account : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        activo:{
            type : dataTypes.BOOLEAN,
            allowNull : false,
            default:true
        }
    };  

    let config = {
        tableName : "favoritess",
        timestamps : false
    }

    const Favorite = sequelize.define(alias, cols, config)

    Favorite.associate = (models)=>{
        Favorite.belongsTo(models.User,{
            as : "user",
            foreignKey : "id_user",
        });
        Favorite.belongsTo(models.Account,{
            as : "account",
            foreignKey : "id_account",
        });
    }

    return Favorite

}