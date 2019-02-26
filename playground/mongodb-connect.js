const {MongoClient, objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} , (err, client) => {
  if (err)
    return console.log('Unable to connect to MonogodDB server');
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  console.log(objectID);


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err)
  //     return console.log('Unable to insert todo ',err);
  //   console.log('Todo inserted successfully', JSON.stringify(result.ops, undefined, 2));
  // });

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
