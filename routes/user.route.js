
const UsersController = require('../controllers/user.controller');

exports.routesConfig = function (app) {
    app.post('/api/user/add', [
        UsersController.insert
    ]);
    app.post('/api/user/login', [
        UsersController.getUserByEmailPassword
    ]);
    app.post('/api/user/:userId/addFav/:productId',[
        UsersController.addFav
    ])
    app.post('/api/user/:userId/removeFav/:productId',[
        UsersController.removeFav
    ])
    app.post('/api/user/:userId/getFavs',[
        UsersController.getFavs
    ])

    app.post('/api/user/:userId/addCart',[
        UsersController.addCart
    ])
    app.post('/api/user/:userId/removeCart/:productId',[
        UsersController.removeCart
    ])
    app.post('/api/user/:userId/getCart',[
        UsersController.getCart
    ])
    app.post('/api/user/:userId/updateCart',[
        UsersController.addCart
    ])
};