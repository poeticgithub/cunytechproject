'use strict';
module.exports = function(sequelize, DataTypes) {
  var Groomer = sequelize.define('Groomer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salary: DataTypes.FLOAT,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Groomer;
};