const ProductController = require('../controllers/product.controller');

exports.routesConfig = function (app) {
    app.post('/api/product/add', [
        ProductController.insert
    ]);
    app.post('/api/product/:id/update/', [
        ProductController.update
    ]);
    app.post('/api/category/:categoryId/products',[
        ProductController.getProductsbyCategoryId
    ])
    app.post('/api/seller/:sellerId/products',[
        ProductController.getProductsbySellerId
    ])
    app.post('/api/product/:id',[
        ProductController.delete
    ])
    app.post('/api/products',[
        ProductController.getProducts
    ])
};