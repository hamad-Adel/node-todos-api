const express = require('express'),
      bodyParser = require('body-parser'), // Takes that string body and turns it into javascript object.

      {mongoose} = require('./db/mongoose'),
      {Todo} = require('./models/todo'),
      {User} = require('./models/user'),

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



app.listen(3000, (err) => {
  if (err)
    return console.log('Error:', err);
  console.log('Started on port 3000');
})
