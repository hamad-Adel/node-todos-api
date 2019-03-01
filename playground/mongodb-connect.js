const {MongoClient, objectID} = require('mongodb'),
      url = 'mongodb+srv://hamad-adel-27017:hamad-atlas-93@developmentcluster-88s7d.mongodb.net/test';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err)
    return console.log('Unable to connect to MonogodDB server', err);
  console.log('Connected to MongoDB server');
  const db = client.db('test')
  console.log(objectID);


  db.collection('todos').insertOne({
    text: 'go to mosh\'s node course',
    completed: false
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert todo ',err);
    console.log('Todo inserted successfully', JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('users').insertOne({
  //   name: 'Mahmoud abo zid',
  //   email: 'fron-endAboZid@gmail.com',
  //   age: 25,
  //   location: 'bany-souef-egypt'
  // }, (err, result) => {
  //   if (err)
  //     return console.log('Unable to insert user', err);
  //
  //   console.log('User inserted successfully', result.ops);
  // })

  client.close();
})
