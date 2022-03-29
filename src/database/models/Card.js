
module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Card"
    let cols = { 
        id : {
            type : dataTypes.INTEGER,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        nro_card : {
            type : dataTypes.BIGINT,
            allowNull : false,
            unique: true
        },
        name : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        due_date : {
                type : dataTypes.DATE,
                allowNull : false,
        },
        cod : {
            type : dataTypes.STRING(50),
            allowNull : false,
        },
        name : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        id_account : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
    };  


    let config = {
        tableName : "cards",
        timestamps : false
    }


    const Card = sequelize.define(alias, cols, config)

    Card.associate = (models)=>{
        Card.belongsTo(models.Account,{
            as : "account",
            foreignKey : "id_account"
        });
        Card.hasMany(models.Transaction,{
            as : "transactions1",
            foreignKey : "id_card_transmitter",
        });
        Card.hasMany(models.Transaction,{
            as : "transactions2",
            foreignKey : 'id_card_receiver'
        });
    }

    return Card

}