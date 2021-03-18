const OrderController = require('../controllers/order.controller');

exports.routesConfig = function (app) {
    app.post('/api/order/add', [
        OrderController.insert
    ]);
    app.post('/api/order/:id/update', [
        OrderController.update
    ]);
    app.post('/api/order/:id/delete',[
        OrderController.delete
    ])
    app.post('/api/order/:id',[
        OrderController.getOrderById
    ])    
    app.post('/api/user/:userId/orders',[
        OrderController.getOrdersByUserId
    ])
    
};