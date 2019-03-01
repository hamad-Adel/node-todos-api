// require mongoose module
const mongoose = require('mongoose'),
      url = process.env.MONGOLAB_URL || 'mongodb+srv://hamad-adel-27017:hamad27017connect@developmentcluster-88s7d.mongodb.net/test?retryWrites=true';

// use mongoose Promise
mongoose.Promise = global.Promise;
// connect ot mongodb

mongoose.connect(url, {useNewUrlParser: true} );

module.exports = {mongoose}

// use mydb;
// db.dropDatabase();
