const ProductController = require('./controllers/product.controller');

exports.routesConfig = function (app) {
    app.post('/api/product/add', [
        ProductController.insert
    ]);
    app.post('/api/product/edit/:id', [
        ProductController.update
    ]);
    app.delete('/api/product/:id',[
        ProductController.delete
    ])
};