const UserModel = require('../models/user.model');
const ProductModel = require('../models/product.model');


exports.insert = (req, res) => {
    UserModel.createUser(req.body)
    .then((result) => {
        res.status(200).send({ status: "success", user: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}


exports.getUserByEmailPassword = (req, res) => {
    UserModel.getUserByEmailPassword(req.body.email,req.body.password)
    .then((result) => {
        res.status(201).send({ status: "success", user: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.addFav = (req, res) => {
    UserModel.addFav(req.params.userId, req.params.productId)
    .then((result) => {
        res.status(201).send({ status: "success", user: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.removeFav = (req, res) => {
    UserModel.removeFav(req.params.userId, req.params.productId)
    .then((result) => {
        res.status(201).send({ status: "success", user: result });
        return;
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}

exports.getFavs = (req, res) => {
    UserModel.getUser(req.params.userId)
    .then((userResult) => {
        ProductModel.getByIds(userResult[0].favourites)
        .then((result) => {
            res.status(201).send({ status: "success", products: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
    })
    .catch(err => {
        console.log(err);
        res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
    })
}