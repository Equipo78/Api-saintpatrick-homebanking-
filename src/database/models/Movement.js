module.exports = (sequelize, dataTypes) =>{

    let alias = "Movement"
    let cols = { 
        id : {
            type : dataTypes.INTEGER,
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        entry : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        egress : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        description : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        id_account : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        operation : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        date : {
            type : dataTypes.DATE,
            allowNull : false
        }
    };  


    let config = {
        tableName : "movements",
        timestamps : false
    }


    const Movement = sequelize.define(alias, cols, config)

    Movement.associate = (models)=>{
        Movement.belongsTo(models.Account,{
            as : "account",
            foreignKey : "id_account"
        });
        Movement.belongsTo(models.Transaction,{
            as : "transaction",
            foreignKey : "operation"
        });
    }

    return Movement

}