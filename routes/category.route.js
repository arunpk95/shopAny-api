const CategoryController = require('../controllers/category.controller');

exports.routesConfig = function (app) {
    app.post('/api/category/add', [
        CategoryController.insert
    ]);
    app.post('/api/category/:id/update', [
        CategoryController.update
    ]);
    app.post('/api/category/:id',[
        CategoryController.getById
    ])
    app.post('/api/category/:id/delete',[
        CategoryController.delete
    ])
    app.post('/api/categories',[
        CategoryController.getCategories
    ])

};