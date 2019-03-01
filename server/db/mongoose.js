// require mongoose module
const mongoose = require('mongoose');
// use mongoose Promise
mongoose.Promise = global.Promise;
// connect ot mongodb

const url = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url, {useNewUrlParser: true} );
module.exports = {mongoose}


// db.dropDatabase();
