// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const purchases = sequelizeClient.define('purchases', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lote_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
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
  purchases.associate = function (models) {
    purchases.belongsTo(models.products,{foreignKey:'productId'})
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return purchases;
};
