const products = require('./products/products.service.js');
const stocks = require('./stocks/stocks.service.js');
const types = require('./types/types.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(products);
  app.configure(stocks);
  app.configure(types);
};
