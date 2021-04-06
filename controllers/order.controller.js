const OrderModel = require('../models/order.model');
const CategoryModel = require('../models/category.model');
const ProductModel = require('../models/product.model');


exports.insert = (req, res) => {
    OrderModel.newOrder(req.body)
        .then((result) => {
            res.status(200).send({ status: "success", orders: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.update = (req, res) => {
    OrderModel.updateOrder(req.params.id, req.body)
        .then((result) => {
            res.status(200).send({ status: "success", order: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.getOrdersByUserId = (req, res) => {
    OrderModel.getOrdersByUserId(req.params.userId)
        .then((result) => {
            res.status(200).send({ status: "success", orders: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.getOrdersBySellerId = (req, res) => {
    OrderModel.getOrderBySellerId(req.params.sellerId)
        .then((result) => {
            res.status(200).send({ status: "success", orders: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}


exports.getOrderById = (req, res) => {
    OrderModel.getOrderById(req.params.id)
        .then((result) => {
            res.status(200).send({ status: "success", order: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.delete = (req, res) => {
    OrderModel.deleteOrder(req.params.id)
        .then((result) => {
            res.status(200).send({ status: "success" });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.getHomeStats = (req, res) => {
    CategoryModel.getCategories()
        .then((categoriesData) => {
            //res.status(200).send({ status: "success", categories: result });
            resultJSON = { categories: categoriesData };
            OrderModel.getAllSalesForSeller(req.params.sellerId)
                .then((result) => {
                    //res.status(200).send({ status: result});
                    catSales = []
                    //add categories to catSales
                    for (resultObj in resultJSON.categories) {
                        salecountforCat = 0;
                        for (saleNum in result) {
                            //console.log(resultJSON.categories[resultObj]._id + "--------" + result[saleNum].product.categoryId)
                            if (String(resultJSON.categories[resultObj]._id) == String(result[saleNum].product.categoryId)) {

                                salecountforCat++;
                            }
                        }
                        catSales.push({ x: resultJSON.categories[resultObj].categoryName, y: salecountforCat })
                    }
                    //getproducts of seller
                    ProductModel.getProductsbySellerId(req.params.sellerId)
                        .then((sellerProducts) => {
                            productSales = [];
                            pieChartData = {data:[], productName:[]};
                            for (productNum in sellerProducts) {
                                //filter only for first category products
                                if (String(sellerProducts[productNum].categoryId) == String(categoriesData[0]._id)) {

                                    saleCountProduct = 0;
                                    revenueForProduct = 0;
                                    for (saleNum in result) {
                                        //console.log(sellerProducts[productNum]._id + "\n" + result[saleNum].product._id + '\n')
                                        if (String(sellerProducts[productNum]._id) == String(result[saleNum].product._id)) {
                                            //console.log("in")
                                            saleCountProduct++;
                                            revenueForProduct += result[saleNum].product.price;
                                        }
                                    }
                                    productSales.push({ x: sellerProducts[productNum].name, y: saleCountProduct });
                                    pieChartData.data.push({x:revenueForProduct,y:revenueForProduct});
                                    pieChartData.productName.push({name:sellerProducts[productNum].name});
                                    
                                }
                            }

                            res.status(200).send({ pieChart: pieChartData, productChartData: productSales, categoryChartData: catSales, categories: resultJSON.categories });
                            return;
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(200).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
                        })


                    return;
                })
                .catch(err => {
                    console.log(err);
                    res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
                })
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}
