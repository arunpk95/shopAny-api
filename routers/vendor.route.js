
const VendorsController = require('./controllers/vendor.controller');

exports.routesConfig = function (app) {
    app.post('/api/user/add', [
        VendorsController.insert
    ]);
    app.post('/api/user/login', [
        VendorsController.getByEmailPassword
    ]);
};