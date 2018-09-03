var express =  require('express');
var route =  express.Router();
var controller = require('../controllers/user-controller')

route.post('/insert', controller.insert )
route.put('/update', controller.update )
route.post('/signin', controller.signIn )

module.exports = route;
