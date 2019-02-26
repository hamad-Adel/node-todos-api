const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err)
    return console.log('Unable to connect to MongoDB server', err);
  console.log('Connected to MongoDB');

  const db = client.db('TodoApp');
  // the find method is return Cursor instance
  const todos = db.collection('Todos').find({
    _id: new ObjectID('5c755e3a5abf61bbd46a8fac')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 4)); // data, filterFunction, spacing
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })
  // console.log(todos); // return Promise

  // Count todos collections
  db.collection('Todos').find().count().then( count => console.log(`Todos count ${count}`), err => console.log('Unalbe to count todos', err))
  db.collection('Users').find().count().then(count => console.log(`Users count ${count}`), err => console.log(`Unable to count users`, err))
  client.close();
})
