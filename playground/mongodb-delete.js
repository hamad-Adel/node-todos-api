const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err)
    return console.log('Unable to connect ot MondoDB server');
  console.log('Connected');

  const db = client.db('TodoApp');

  // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then( result => console.log(result))

  // deleteOne
    // db.collection('Todos').deleteOne({text:"Eat lunch"}).then( result => console.log(result));

  // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then(result => console.log(result))

/* -------------------Challenge---------------------------------- */
  // db.collection('Users').deleteMany({name: "Andrew"}).then(result => console.log(result));
  // db.collection('Users').deleteOne({_id: new ObjectID("5c76330dc5619c00e3b93c2c")}).then( res => console.log(res))
  db.collection('Users').findOneAndDelete({age: 25}).then( res => console.log(res))
  client.close();
})
