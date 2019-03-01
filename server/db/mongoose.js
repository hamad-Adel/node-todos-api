const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hamad-adel-27017:hamad-atlas-93@developmentcluster-88s7d.mongodb.net/TodoApp', {useNewUrlParser: true}, (error, client) => {
    if (error)
      return console.log('Unable to connect to mongodb', error);
    console.log('Connection done');
});
module.exports = {mongoose}
