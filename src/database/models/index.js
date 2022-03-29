'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
console.log(env);
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

console.log("<=============>");
console.log(config);
console.log(process.env.HOST);
console.log("<=============>");
let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  // let conn = {database:config.host,dialect:config.dialect}
  // sequelize = new Sequelize(config.database, config.username, config.password conn);
sequelize = new Sequelize({
    database: process.env.NAME, 
    username: process.env.USER,
    password: process.env.PASSWORD, 
    host: process.env.HOST,
    dialect: 'postgres', 
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    dialectOptions: {
      ssl: true
    },
    logging: false
  });
// }
// dialectOptions: {
//   ssl: {
//     rejectUnauthorized: false 
//   }
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    console.log("model",model);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
