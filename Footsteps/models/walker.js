'use strict';
module.exports = function(sequelize, DataTypes) {
  var Walker = sequelize.define('Walker', {
	first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
    }
  },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0,500],
        notEmpty: true
      }
  },
     password: {
      type: DataTypes.STRING,
      allowNull: true,
  },
     salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
  },
     rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
	 }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Walker;
};