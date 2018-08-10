// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    produid:{
      type: DataTypes.INTEGER,
      primaryKey : true,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }

  });

  // eslint-disable-next-line no-unused-vars
  products.associate = function (models) {
    products.hasMany(models.stocks,{foreignKey:'productId'})
    products.hasMany(models.sales,{foreignKey:'productId'})
    products.hasMany(models.purchases,{foreignKey:'productId'})
    products.belongsTo(models.types,{foreignKey:'typeId'})
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return products;
};
