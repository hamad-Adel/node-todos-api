const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// process.env.MONGODB_URI || 'mongodb+srv://hamad-adel-27017:hamad-atlas-93@developmentcluster-88s7d.mongodb.net/TodoApp

mongoose.connect('mongodb+srv://hamad-adel-27017:hamad-atlas-93@developmentcluster-88s7d.mongodb.net/TodoApp', (error, client) => {
    if (error)
      return console.log('Unable to connect to mongodb', error);
    console.log('Connection done');
});
module.exports = {mongoose}
