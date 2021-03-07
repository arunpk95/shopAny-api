const OrderController = require('./controllers/order.controller');

exports.routesConfig = function (app) {
    app.post('/api/order/add', [
        OrderController.insert
    ]);
    app.post('/api/order/edit', [
        OrderController.update
    ]);
    app.delete('/api/order/:id',[
        OrderController.delete
    ])
};