module.exports = (sequelize, dataTypes) =>{
   
    let alias = "User"
    let cols = { 
        id : {
            type : dataTypes.INTEGER,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        surname : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        dni : {
            type : dataTypes.BIGINT,
            allowNull : false,
            unique: true
        },
        user_name : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        password : {
            type : dataTypes.STRING(80),
            allowNull : false,
        },
        email : {
            type : dataTypes.STRING(50),
            allowNull : false,
            unique: true
        },
        id_account : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
    };  


    let config = {
        tableName : "users",
        timestamps : false
    }


    const User = sequelize.define(alias, cols, config)

    // User.associate = (models)=>{
    //     User.belongsTo(models.Account,{
    //         as : "account",
    //         foreignKey : "id_account"
    //     });
    // }
    

    return User

}