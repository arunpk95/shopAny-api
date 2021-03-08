const ProductModel = require('../models/product.model');


exports.insert = (req, res) => {
    ProductModel.createNewProduct(req.body)
    .then((result) => {
        res.status(200).send({ status: "success", product: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.update = (req,res) => {
    ProductModel.updateProduct(req.params.id,req.body)
    .then((result) => {
        res.status(200).send({ status: "success", product: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.delete = (req, res) => {
    ProductModel.deleteProduct(req.params.id,req.body)
    .then((result) => {
        res.status(200).send({ status: "success"});
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.getProductsbySellerId = (req, res) => {
    ProductModel.getProductsbySellerId(req.params.sellerId,req.body)
    .then((result) => {
        res.status(201).send({ status: "success", products: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.getProductsbyCategoryId = (req, res) => {
    ProductModel.getProductsByCategoryId(req.params.categoryId, req.body)
    .then((result) => {
        res.status(201).send({ status: "success", products: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}