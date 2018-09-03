    var service = require("../services/todo-service");
    var controller = {};

    controller.list = function(req, res, next) {
        var filter = req.query ;
        try {

            service.list(filter).then(function(docs) {

                res.json(docs);

            }).catch(function(error) {
                res.json(error);
            });

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
            service.update(req.body).then(function(doc) {

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