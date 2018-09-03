const ObjectId = require("bson-objectid")
var ServiceTodo = {};

ServiceTodo.tasks = []

ServiceTodo.insert = function (object) {
    object._id = ObjectId()
    object.date = new Date();
    object.active = true;

    ServiceTodo.tasks.push(object)

    console.log(object._id.toString())

    return Promise.resolve(object)

}

ServiceTodo.update = function (object) {

    let description = object.description
    let active = object.active
    objectSaved = ServiceTodo.tasks.find(x => x._id == object._id)
    objectSaved.description = description
    objectSaved.active = active
    
    return Promise.resolve(objectSaved)

}

ServiceTodo.delete = function (id) {

    let  object = ServiceTodo.tasks.find(x => x._id == id)
    let index = ServiceTodo.tasks.indexOf(object)
    ServiceTodo.tasks.splice(index, 1);
    
    return Promise.resolve()

}

ServiceTodo.list = function (filtro) {

    filtro.active = true;
    let tasks = ServiceTodo.tasks.filter(x=>x.active == filtro.active);

    return Promise.resolve(tasks)

}

module.exports = ServiceTodo;