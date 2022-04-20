module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Account"
    let cols = { 
        id : {
            type : dataTypes.INTEGER,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        nro_account : {
            type : dataTypes.BIGINT,
            allowNull : false,
            unique: true
        },
        balance : {
            type : dataTypes.BIGINT,
            allowNull : false
        },
        id_bank : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        cbu : {
            type : dataTypes.INTEGER,
            allowNull : false,
            unique: true
        },
    };  


    let config = {
        tableName : "accounts",
        timestamps : false
    }


    const Account = sequelize.define(alias, cols, config)

    Account.associate = (models)=>{
        Account.hasMany(models.Card,{
            as : "cards",
            foreignKey : "id_account"
        });
    
        Account.hasOne(models.User,{
            as : "user",
            foreignKey : "id_account"
        });
        Account.hasMany(models.Movement,{
            as : "movements",
            foreignKey : "id_account"
        });
        Account.hasMany(models.Transaction,{
            as : "transaction-transmitter",
            foreignKey : "id_account_transmitter",
        });
        Account.hasMany(models.Transaction,{
            as : "transaction-receiver",
            foreignKey : 'id_account_receiver'
        });
        Account.belongsTo(models.Bank,{
            as : "bank",
            foreignKey : "id_bank"
        });
    }

    return Account

}