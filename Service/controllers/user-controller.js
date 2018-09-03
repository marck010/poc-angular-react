    var service = require("../services/user-service");
    var controller = {};

    controller.signIn = function(req, res, next) {
        try {
            service.signIn(req.body).then(function(doc) {
                res.json(doc);
            }).catch(function(error) {
                res.json(error);
            })
        } catch (error) {
            next(error);
        }
    }

    controller.insert = function(req, res, next) {
        try {
            service.insert(req.body).then(function(doc) {
                res.json(doc);
            }).catch(function(error) {
                res.json(error);
            })
        } catch (error) {
            next(error);
        }
    }

    controller.update = function(req, res, next) {
        try {
            service.update(req.body.obj).then(function(doc) {

                res.json(doc);

            }).catch(function(error) {
                res.json(error);

            })
        } catch (error) {
            next(error);
        }
    }

    controller.delete = function(req, res, next) {

        try {

            service.delete(req.query._id).then(function(doc) {
                res.json(doc);
            }).catch(function(error) {
                res.json(error);
            });

        } catch (error) {
            next(error);
        }
    }

    module.exports = controller;