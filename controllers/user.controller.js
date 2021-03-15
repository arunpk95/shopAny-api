const UserModel = require('../models/user.model');


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