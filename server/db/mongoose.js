// require mongoose module
const mongoose = require('mongoose');
// use mongoose Promise
mongoose.Promise = global.Promise;
// connect ot mongodb
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} );

module.exports = {mongoose}

// use mydb;
// db.dropDatabase();
