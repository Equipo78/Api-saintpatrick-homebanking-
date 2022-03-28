module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Bank"
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
        branch_office : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        address : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        cuit : {
            type : dataTypes.BIGINT(15),
            allowNull : false,
            unique: true
        }
    };  


    let config = {
        tableName : "banks",
        timestamps : false
    }


    const Bank = sequelize.define(alias, cols, config)

    Bank.associate = (models)=>{
        Bank.hasMany(models.Account,{
            as : "accounts",
            foreignKey : "id_bank"
        });
    }

    return Bank

}