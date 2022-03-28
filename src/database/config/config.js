require('dotenv').config();

module.exports = {
  "development": {
    "username": "lycnvaoczhgdmy",
    "password": "64d45944e17a9e899054f2f609cdcc313713f08223ee9fb9a00054612db5c5b7",
    "database": "dfggel5afv067v",
    "host": "ec2-54-160-109-68.compute-1.amazonaws.com",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
