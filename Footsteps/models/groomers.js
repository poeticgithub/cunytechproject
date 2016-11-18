'use strict';
module.exports = function(sequelize, DataTypes) {
  var Groomers = sequelize.define('Groomers', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    street_number: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    emergency_volunteer: DataTypes.BOOLEAN,
    salary: DataTypes.FLOAT,
	  rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Groomers;
};