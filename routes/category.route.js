const CategoryController = require('./controllers/category.controller');

exports.routesConfig = function (app) {
    app.post('/api/category/add', [
        CategoryController.insert
    ]);
    app.post('/api/category/edit', [
        CategoryController.update
    ]);
    app.post('/api/category/:id',[
        CategoryController.delete
    ])
};