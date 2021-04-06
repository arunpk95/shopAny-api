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
        
    app.post('/api/seller/:sellerId/orders',[
        OrderController.getOrdersBySellerId
    ])

    app.post('/api/seller/:sellerId/homeStats',[
        OrderController.getHomeStats
    ])

    app.post('/api/seller/:sellerId/categoryChart',[
        OrderController.getcategoryChart
    ])
    
    app.post('/api/seller/:sellerId/productChart',[
        OrderController.getproductChart
    ])

    app.post('/api/seller/:sellerId/revenueChart',[
        OrderController.getpieChart
    ])
    
};