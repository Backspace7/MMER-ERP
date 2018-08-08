// Initializes the `stocks` service on path `/stocks`
const createService = require('feathers-sequelize');
const createModel = require('../../models/stocks.model');
const hooks = require('./stocks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stocks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('stocks');

  service.hooks(hooks);
};
