'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
  var Walkers = sequelize.define('Walkers', {
    first_name: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    }, 

    last_name: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        len: [6,15],
        notEmpty: true,
      },
    },
    street_number: {
      type: DataTypes.INTEGER,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    street_address: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    zip_code: {
      type: DataTypes.INTEGER,
       allowNull: false,
      validate: {
        notEmpty: true,
        len: 5,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    emergency_volunteer: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
    },
	  salary: {
      type: DataTypes.FLOAT,
       allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
	  rating: {
      type: DataTypes.INTEGER,
      },
  }, {
  classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

    Walkers.beforeCreate((walkers) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(walkers.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      walkers.password = hashedPw;
    })
  );
  return Walkers;
};