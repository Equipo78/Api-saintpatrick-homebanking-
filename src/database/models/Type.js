module.exports = (sequelize, dataTypes) =>{
   
    let alias = "Type"
    let cols = { 
        id : {
            type : dataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement : true,
            primaryKey : true,
        },
        description : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        cod : {
            type : dataTypes.STRING(50),
            allowNull : true,
        }
    };  


    let config = {
        tableName : "types",
        timestamps : false
    }


    const Type = sequelize.define(alias, cols, config)

    Type.associate = (models)=>{
        Type.hasMany(models.Transaction,{
            as : "transactions",
            foreignKey : "id_type"
        });
    }

    return Type

}