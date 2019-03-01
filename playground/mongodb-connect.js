const {MongoClient, objectID} = require('mongodb'),
      url = 'mongodb+srv://hamad-adel-27017:hamad27017connect@developmentcluster-88s7d.mongodb.net/test?retryWrites=true';


MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err)
    return console.log('Unable to connect to MonogodDB server', err);
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  console.log(objectID);


  db.collection('todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert todo ',err);
    console.log('Todo inserted successfully', JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Hamad adel mahmoud',
  //   email: 'hamadwebdeveloper@gmail.com',
  //   age: 25,
  //   location: 'El-marg, cairo-egypt'
  // }, (err, result) => {
  //   if (err)
  //     return console.log('Unable to insert user', err);
  //
  //   console.log('User inserted successfully', result);
  // })

  client.close();
})
