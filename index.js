var express = require("express");
var app = express();
const bodyParser = require('body-parser');

const UserRouter = require('./routes/user.route')
// const VendorRouter = require('./routes/vendor.route')
const ProductRouter = require('./routes/product.route')
const CategoryRouter = require('./routes/category.route')
const OrderRouter = require('./routes/orders.route')

app.use(bodyParser.json());

UserRouter.routesConfig(app);
// VendorRouter.routesConfig(app);
ProductRouter.routesConfig(app);
CategoryRouter.routesConfig(app);
OrderRouter.routesConfig(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
