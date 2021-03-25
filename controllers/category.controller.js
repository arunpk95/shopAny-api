const CategoryModel = require('../models/category.model');


exports.insert = (req, res) => {
    CategoryModel.createNewCategory(req.body)
        .then((result) => {
            CategoryModel.getCategories()
                .then((result) => {
                    res.status(200).send({ status: "success", categories: result });
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

exports.update = (req, res) => {
    CategoryModel.updateCategory(req.params.id, req.body)
        .then((result) => {
            CategoryModel.getCategories()
                .then((result) => {
                    res.status(200).send({ status: "success", categories: result });
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

exports.getById = (req, res) => {
    CategoryModel.getCategoryByCategoryId(req.params.id)
        .then((result) => {
            res.status(200).send({ status: "success", category: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}

exports.delete = (req, res) => {
    CategoryModel.deleteCategory(req.params.id)
        .then((result) => {
            CategoryModel.getCategories()
                .then((result) => {
                    res.status(200).send({ status: "success", categories: result });
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

exports.getCategories = (req, res) => {
    CategoryModel.getCategories()
        .then((result) => {
            res.status(200).send({ status: "success", categories: result });
            return;
        })
        .catch(err => {
            console.log(err);
            res.status(201).send({ status: "failed", errors: [{ code: -1, msg: "Internal Database Error" }] });
        })
}