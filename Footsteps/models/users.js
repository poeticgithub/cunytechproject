'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    first_name: {
      type: DataTypes.STRING,
       allowNull: false,
      validate:{
        notEmpty: true,
      },
    },
    last_name: {
      type: DataTypes.STRING,
       allowNull: false,
      validate:{
        notEmpty: true,
      },
    },
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
        len: [6,15],
        notEmpty: true,
      },
    },
    street_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
      },
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
      },
    }, 
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        len: 5,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
       allowNull: false,
      validate:{
        notEmpty: true,
      },
    },
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