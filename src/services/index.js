const products = require('./products/products.service.js');
const stocks = require('./stocks/stocks.service.js');
const types = require('./types/types.service.js');
const sales = require('./sales/sales.service.js');
const purchases = require('./purchases/purchases.service.js');
const inventories = require('./inventories/inventories.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(products);
  app.configure(stocks);
  app.configure(types);
  app.configure(sales);
  app.configure(purchases);
  app.configure(inventories);
};
