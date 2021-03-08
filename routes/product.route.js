const ProductController = require('../controllers/product.controller');

exports.routesConfig = function (app) {
    app.post('/api/product/add', [
        ProductController.insert
    ]);
    app.post('/api/product/:id/update/', [
        ProductController.update
    ]);
    app.get('/api/category/:categoryId/products',[
        ProductController.getProductsbyCategoryId
    ])
    app.get('/api/seller/:sellerId/products',[
        ProductController.getProductsbySellerId
    ])
    app.delete('/api/product/:id',[
        ProductController.delete
    ])
};