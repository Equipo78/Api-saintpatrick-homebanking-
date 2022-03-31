module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Transaction"
    let cols = { 
        nro_operation : {
            type : dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true,
        },
        description : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        amount : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_card_transmitter: {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_account_transmitter: {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_card_receiver: {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_account_receiver: {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_type: {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        date : {
            type : dataTypes.DATE,
            allowNull : false
        }
    };  


    let config = {
        tableName : "transactions",
        timestamps : false
    }


    const Transaction = sequelize.define(alias, cols, config)

    Transaction.associate = (models)=>{
        Transaction.belongsTo(models.Account,{
            as : "account-transmitter",
            foreignKey : "id_account_transmitter",
        });
        Transaction.belongsTo(models.Account,{
            as : "account-receiver",
            foreignKey : "id_account_receiver",
        });
        Transaction.belongsTo(models.Card,{
            as : "card-transmitter",
            foreignKey : "id_card_transmitter",
        });
        Transaction.belongsTo(models.Card,{
            as : "card-receiver",
            foreignKey : "id_card_receiver",
        });
        Transaction.hasOne(models.Movement,{
            as : "movement",
            foreignKey : "operation",
        });
        Transaction.belongsTo(models.Type,{
            as : "type",
            foreignKey : "id_type",
        });
    }

    return Transaction

}