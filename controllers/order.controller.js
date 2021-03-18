const OrderModel = require('../models/order.model');


exports.insert = (req, res) => {
    OrderModel.newOrder(req.body)
    .then((result) => {
        res.status(200).send({ status: "success", order: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.update = (req,res) => {
    OrderModel.updateOrder(req.params.id,req.body)
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
    OrderModel.deleteOder(req.params.id,req.body)
    .then((result) => {
        res.status(200).send({ status: "success"});
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}
