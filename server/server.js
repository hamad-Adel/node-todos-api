const express = require('express'),
      bodyParser = require('body-parser'), // Takes that string body and turns it into javascript object.
      {ObjectID} = require('mongodb'),
      {mongoose} = require('./db/mongoose'),
      {Todo} = require('./models/todo'),
      {User} = require('./models/user'),
      port = process.env.PORT || 3000,
      app = express();

// Configure server middleware
app.use(bodyParser.json());

// create new todo
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);  // bad input
  });
});

// List all todos
app.get('/todos', (req, res) => {
  Todo.find().then( todos => {
    res.send({todos});
  }, err => {
    res.status(400).send(err);
  })
})

// GET /todos/id [url parameter]
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id))
    return res.status(404).send()

  Todo.findById(id).then( todo => {
    if (todo) return res.send({todo});
    return res.status(404).send();
  }).catch((e) => res.status(400).send())
});


app.listen(port, (err) => {
  if (err)
    return console.log('Error:', err);
  console.log(`Started on port ${port}`);
})
