'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    street_number: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    phone_number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

    Users.beforeCreate((users) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(users.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      users.password = hashedPw;
    })
  );
  return Users;
};