'use strict';
module.exports = (sequelize, DataTypes) => {
  var stock = sequelize.define('stock', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {});
  stock.associate = function(models) {
    // associations can be defined here
  };
  return stock;
};