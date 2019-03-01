// require mongoose module
const mongoose = require('mongoose'),
      url = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/TodoApp';

// use mongoose Promise
mongoose.Promise = global.Promise;
// connect ot mongodb

mongoose.connect(url, {useNewUrlParser: true} );

module.exports = {mongoose}

// use mydb;
// db.dropDatabase();
