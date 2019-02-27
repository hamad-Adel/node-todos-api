const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
  if (err)
    return console.log('Unable to connect to MongoDB server');
  console.log('Connected');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID("5c76430d28ab6926b8a06b88") },
  //   { $set: {completed: true} },
  //   { returnOriginal: false}
  // ).then( res => console.log(res), err => console.log(err))

  // db.collection('Todos').insertOne({text: "something to do", completed: false})
  //   .then( res => console.log(JSON.stringify(res.ops, undefined, 3)))

  // db.collection('Todos').deleteMany({completed:false}).then(res=>console.log(res));

  /*--------------------Challenge---------------------*/
  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID("5c763306c5619c00e3b93c2b") },
    { $set:{name: "Adel"}, $inc:{age: 42}  },
    { returnOriginal: false }
  ).then( res => console.log(res));

  client.close();
})
