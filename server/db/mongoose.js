// require mongoose module
const mongoose = require('mongoose');
// use mongoose Promise
mongoose.Promise = global.Promise;
// connect ot mongodb

const url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url, {useNewUrlParser: true}, (error, client) => {
    if (error)
      return console.log('Unable to connect to mongodb', error);
    console.log('Connection done');
});
module.exports = {mongoose}


// db.dropDatabase();
