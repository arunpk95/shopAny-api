
const UsersController = require('../controllers/user.controller');

exports.routesConfig = function (app) {
    app.post('/api/user/add', [
        UsersController.insert
    ]);
    app.post('/api/user/login', [
        UsersController.getUserByEmailPassword
    ]);
};