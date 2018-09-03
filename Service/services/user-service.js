const ObjectId = require("bson-objectid")

var ServiceUser = {};
ServiceUser.users = []


ServiceUser.insert = function (object) {
    object._id = ObjectId()
    object.date = new Date();

    ServiceUser.users.push(object)
    console.log(object._id.toString())
    return Promise.resolve(object)

}

ServiceUser.signIn = function (object) {

    objectSaved = ServiceUser.users.find(x => x.login == object.login && x.password == object.password)

    if (!objectSaved) {
        return Promise.reject("Authentication failed")
    }

    objectSaved.authenticate = true;

    return Promise.resolve(object)

}


module.exports = ServiceUser;